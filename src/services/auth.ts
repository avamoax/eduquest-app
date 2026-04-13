// Authentication Service with Google OAuth and Email Notifications

interface User {
  id: string;
  email: string;
  displayName?: string;
  name: string;
  photoURL?: string;
  picture?: string;
  provider: 'google' | 'email';
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

class AuthService {
  private static instance: AuthService;
  private authState: AuthState = {
    user: null,
    isAuthenticated: false,
    isLoading: false
  };
  private listeners: ((state: AuthState) => void)[] = [];

  static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  // Subscribe to auth state changes
  subscribe(listener: (state: AuthState) => void) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  private notifyListeners() {
    this.listeners.forEach(listener => listener(this.authState));
  }

  // Public method to update state
  public updateState(updates: Partial<AuthState>) {
    this.authState = { ...this.authState, ...updates };
    this.notifyListeners();
  }

  private updateStateInternal(updates: Partial<AuthState>) {
    this.authState = { ...this.authState, ...updates };
    this.notifyListeners();
  }

  // Initialize Google OAuth
  async initializeGoogleAuth(): Promise<void> {
    return new Promise((resolve) => {
      if (typeof window === 'undefined') {
        resolve();
        return;
      }

      // Load Google Identity Services
      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.onload = () => {
        if (window.google) {
          window.google.accounts.id.initialize({
            client_id: process.env.VITE_GOOGLE_CLIENT_ID || 'your-google-client-id',
            callback: this.handleGoogleCallback.bind(this),
            auto_select: false,
            cancel_on_tap_outside: false
          });
        }
        resolve();
      };
      document.head.appendChild(script);
    });
  }

  // Handle Google OAuth callback
  private async handleGoogleCallback(response: any) {
    try {
      this.updateState({ isLoading: true });
      
      // Decode JWT token
      const payload = JSON.parse(atob(response.credential.split('.')[1]));
      
      const user: User = {
        id: payload.sub,
        email: payload.email,
        displayName: payload.name,
        name: payload.name,
        photoURL: payload.picture,
        picture: payload.picture,
        provider: 'google'
      };

      // Store user data
      localStorage.setItem('eduquest_user', JSON.stringify(user));
      localStorage.setItem('eduquest_token', response.credential);

      this.updateStateInternal({
        user,
        isAuthenticated: true,
        isLoading: false
      });

      // Send welcome email notification
      await this.sendWelcomeEmail(user);

    } catch (error) {
      console.error('Google auth error:', error);
      this.updateState({ isLoading: false });
    }
  }

  // Sign in with Google
  async signInWithGoogle(): Promise<void> {
    try {
      this.updateState({ isLoading: true });
      
      if (window.google) {
        window.google.accounts.id.prompt((notification: any) => {
          if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
            // Fallback to popup
            window.google.accounts.id.renderButton(
              document.getElementById('google-signin-button'),
              {
                theme: 'outline',
                size: 'large',
                width: '100%'
              }
            );
          }
        });
      }
    } catch (error) {
      console.error('Google sign-in error:', error);
      this.updateState({ isLoading: false });
    }
  }

  // Email/Password login
  async signInWithEmail(email: string, password: string): Promise<boolean> {
    try {
      this.updateState({ isLoading: true });

      // Simulate API call - replace with your backend
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        const data = await response.json();
        const user: User = {
          id: data.user.id,
          email: data.user.email,
          name: data.user.name,
          provider: 'email'
        };

        localStorage.setItem('eduquest_user', JSON.stringify(user));
        localStorage.setItem('eduquest_token', data.token);

        this.updateState({
          user,
          isAuthenticated: true,
          isLoading: false
        });

        return true;
      } else {
        this.updateState({ isLoading: false });
        return false;
      }
    } catch (error) {
      console.error('Email login error:', error);
      this.updateState({ isLoading: false });
      return false;
    }
  }

  // Sign up with email
  async signUpWithEmail(email: string, password: string, name: string): Promise<boolean> {
    try {
      this.updateState({ isLoading: true });

      // Simulate API call - replace with your backend
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, name })
      });

      if (response.ok) {
        const data = await response.json();
        const user: User = {
          id: data.user.id,
          email: data.user.email,
          name: data.user.name,
          provider: 'email'
        };

        localStorage.setItem('eduquest_user', JSON.stringify(user));
        localStorage.setItem('eduquest_token', data.token);

        this.updateState({
          user,
          isAuthenticated: true,
          isLoading: false
        });

        // Send welcome email
        await this.sendWelcomeEmail(user);

        return true;
      } else {
        this.updateState({ isLoading: false });
        return false;
      }
    } catch (error) {
      console.error('Email signup error:', error);
      this.updateState({ isLoading: false });
      return false;
    }
  }

  // Send welcome email notification
  private async sendWelcomeEmail(user: User): Promise<void> {
    try {
      // Using EmailJS for client-side email sending
      const emailData = {
        to_email: user.email,
        to_name: user.name,
        from_name: 'EduQuest Team',
        subject: '🎉 Welcome to EduQuest - Safe & Fun Learning Awaits!',
        message: `
          Hi ${user.displayName || user.name}! 👋

          🎉 Welcome to EduQuest - Level Up Learning! 🎓

          We're thrilled to have you join our safe and educational learning community!

          🔒 YOUR SAFETY IS OUR PRIORITY:
          ✅ 100% Safe & Secure Platform
          ✅ No Personal Data Sharing
          ✅ Age-Appropriate Content Only
          ✅ Privacy Protected at All Times
          ✅ COPPA & GDPR Compliant

          🌟 AMAZING BENEFITS WAITING FOR YOU:
          🎯 Personalized Learning Experience
          📚 Multi-Language Support (English, Hindi, Marathi)
          🤖 AI Tutor Available 24/7
          🎮 Gamified Learning with Rewards
          🐾 Collect Adorable Virtual Pets
          🔥 Build Learning Streaks & Achievements
          📊 Track Your Progress & Accuracy
          🏆 Unlock Levels & Earn Badges

          🎓 EDUCATIONAL EXCELLENCE:
          • 180+ Carefully Crafted Questions
          • Age-Appropriate Content (8-16 years)
          • Interactive Quizzes & Games
          • Real-Time Feedback & Explanations
          • Progress Tracking for Parents

          🚀 READY TO START YOUR LEARNING ADVENTURE?
          1. Choose your age group for personalized content
          2. Explore subjects that interest you
          3. Take fun quizzes and earn rewards
          4. Collect virtual pets as you learn
          5. Build your daily learning streak!

          💡 NEED HELP? Our friendly AI assistant is always ready to help you learn and grow!

          Let's make learning fun, safe, and rewarding together! 🌈

          Happy Learning!
          The EduQuest Team 💙

          ---
          📧 Questions? Reply to this email anytime!
          🌐 Visit: EduQuest Learning Platform
          🔒 Privacy Policy: We never share your data
        `
      };

      // Send email using EmailJS (you'll need to set up EmailJS)
      await this.sendEmailNotification(emailData);

    } catch (error) {
      console.error('Welcome email error:', error);
    }
  }

  // Send email notification using EmailJS
  private async sendEmailNotification(emailData: any): Promise<void> {
    try {
      // EmailJS configuration - replace with your service details
      const serviceId = process.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id';
      const templateId = process.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id';
      const publicKey = process.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key';

      // Load EmailJS if not already loaded
      if (!window.emailjs) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
        document.head.appendChild(script);
        
        await new Promise(resolve => {
          script.onload = resolve;
        });

        window.emailjs.init(publicKey);
      }

      await window.emailjs.send(serviceId, templateId, emailData);
      console.log('Welcome email sent successfully!');

    } catch (error) {
      console.error('Email sending error:', error);
    }
  }

  // Send progress notification email
  async sendProgressNotification(user: User, progress: any): Promise<void> {
    try {
      const emailData = {
        to_email: user.email,
        to_name: user.name,
        from_name: 'EduQuest Team',
        subject: 'Great Progress on EduQuest! 🎉',
        message: `
          Hi ${user.name}! 🌟

          Amazing work on EduQuest today! Here's your progress update:

          🔥 Day Streak: ${progress.dayStreak} days
          🎯 Questions Answered: ${progress.questions}
          ⭐ Accuracy: ${progress.accuracy}%

          ${progress.dayStreak >= 7 ? '🏆 Wow! You\'ve maintained a 7-day streak! You\'re on fire!' : ''}
          ${progress.accuracy >= 80 ? '🎯 Excellent accuracy! You\'re really mastering the material!' : ''}

          Keep up the fantastic work! Your dedication to learning is inspiring! 💪

          Ready for tomorrow's challenge? 🚀
          The EduQuest Team
        `
      };

      await this.sendEmailNotification(emailData);

    } catch (error) {
      console.error('Progress notification error:', error);
    }
  }

  // Check if user is authenticated on app load
  async checkAuthStatus(): Promise<void> {
    try {
      this.updateState({ isLoading: true });

      const storedUser = localStorage.getItem('eduquest_user');
      const storedToken = localStorage.getItem('eduquest_token');

      if (storedUser && storedToken) {
        const user = JSON.parse(storedUser);
        
        // Verify token is still valid (optional)
        // const isValid = await this.verifyToken(storedToken);
        
        this.updateState({
          user,
          isAuthenticated: true,
          isLoading: false
        });
      } else {
        this.updateState({ isLoading: false });
      }
    } catch (error) {
      console.error('Auth check error:', error);
      this.updateState({ isLoading: false });
    }
  }

  // Sign out
  async signOut(): Promise<void> {
    try {
      // Clear local storage
      localStorage.removeItem('eduquest_user');
      localStorage.removeItem('eduquest_token');

      // Sign out from Google
      if (window.google) {
        window.google.accounts.id.disableAutoSelect();
      }

      this.updateState({
        user: null,
        isAuthenticated: false,
        isLoading: false
      });

    } catch (error) {
      console.error('Sign out error:', error);
    }
  }

  // Get current auth state
  getAuthState(): AuthState {
    return this.authState;
  }

  // Get current state (alias for getAuthState)
  getState(): AuthState {
    return this.authState;
  }

  // Get current user
  getCurrentUser(): User | null {
    return this.authState.user;
  }
}

// Export singleton instance
export const authService = AuthService.getInstance();

// Type declarations for Google Identity Services
declare global {
  interface Window {
    google: any;
    emailjs: any;
  }
}