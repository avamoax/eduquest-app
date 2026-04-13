export const theme = {
  palette: {
    primary: '#6366F1',
    primaryStrong: '#4F46E5',
    secondary: '#F59E0B',
    accent: '#EF4444',
    success: '#10B981',
    premium: '#8B5CF6',
    surface: '#FFFFFF',
    surfaceMuted: '#F8FAFC',
    textMuted: '#6B7280',
  },
  gradient: 'linear-gradient(135deg, #6366F1, #8B5CF6, #F59E0B)',
  shadows: {
    card: '0 10px 30px rgba(99, 102, 241, 0.08), 0 6px 10px rgba(15, 23, 42, 0.05)',
    soft: '0 8px 24px rgba(0, 0, 0, 0.06)',
    focus: '0 0 0 3px rgba(99, 102, 241, 0.35)',
  },
  radius: {
    card: 14,
    panel: 18,
    full: 9999,
  },
};

export type Theme = typeof theme;


