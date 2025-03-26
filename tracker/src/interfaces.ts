import { Category } from './enums';

export interface Expense {
  id: number;
  name: string;
  amount: number;
  category: Category;
  date: Date;
}