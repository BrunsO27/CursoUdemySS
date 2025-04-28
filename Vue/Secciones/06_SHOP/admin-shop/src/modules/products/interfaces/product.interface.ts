import type { User } from '@/modules/auth/interfaces/user.interface';

export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  slug: string;
  stock: number;
  sizes: string[];
  gender: string;
  tags: string[];
  images: string[];
  user: User;
}

export enum Size {
  L = 'l',
  M = 'M',
  S = 'S',
  Xl = 'Xl',
  Xs = 'Xs',
  Xxl = 'Xxl',
}
