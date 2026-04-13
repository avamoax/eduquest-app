export type PetRarity = 'COMMON' | 'RARE' | 'EPIC' | 'LEGENDARY';

export interface Pet {
  id: string;
  name: string;
  emoji: string;
  rarity: PetRarity;
  pointsRequired: number;
  unlocked: boolean;
  backgroundColor?: string;
}

export const PET_RARITY_COLORS: Record<PetRarity, string> = {
  COMMON: 'bg-blue-100',
  RARE: 'bg-purple-100',
  EPIC: 'bg-orange-100',
  LEGENDARY: 'bg-yellow-100',
};

