export interface UserStats {
  dayStreak: number;
  totalPoints: number;
  accuracy: number;
  questionsAnswered: number;
}

export interface UserProfile {
  id: string;
  name: string;
  class: string;
  avatar?: string;
  about?: string;
}

export interface Activity {
  id: string;
  title: string;
  date: string;
  description: string;
  emoji: string;
  backgroundColor: string;
}

