import { Expense } from "./interfaces";
import { Category } from "./enums";

export class ExpenseManager {
  private expenses: Expense[] = [];

  addExpense(expense: Expense): void {
    this.expenses.push(expense);
  }

  viewAllExpenses(): void {
    if (this.expenses.length === 0) {
      console.log("No expenses added.");
      return;
    }
    this.expenses.forEach(exp => {
      console.log(`${exp.id}: ${exp.name} - $${exp.amount} - ${exp.category} - ${exp.date.toDateString()}`);
    });
  }

  getTotalAmount(): number {
    return this.expenses.reduce((sum, exp) => sum + exp.amount, 0);
  }

  filterByCategory(category: Category): Expense[] {
    return this.expenses.filter(exp => exp.category === category);
  }
}