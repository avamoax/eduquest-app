export interface Subject {
  id: string;
  name: string;
  emoji: string;
  color: string;
}

export interface SubjectProgress {
  id: string;
  name: string;
  emoji: string;
  lessonsCompleted: number;
  totalLessons: number;
  backgroundColor?: string;
}

export interface SubjectTopic {
  id: string;
  title: string;
  description?: string;
  lessonsCount?: number;
  completedLessons?: number;
  icon?: string;
}

export interface ClassSchedule {
  id: string;
  subject: string;
  startTime: string;
  endTime: string;
  location: string;
  emoji: string;
  teacher?: {
    name: string;
    avatar?: string;
  };
  isActive?: boolean;
  isPast?: boolean;
}
