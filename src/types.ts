export type Tab = 'digital-human' | 'courses' | 'certification' | 'profile';

export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  description: string;
  rating: number;
  highlight?: boolean;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  icon: string;
  lessons: number;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
}
