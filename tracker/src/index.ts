import { ExpenseManager } from './expenseManager';
import { Category } from './enums';

const manager = new ExpenseManager();


manager.addExpense({
  id: 1,
  name: "Pizza",
  amount: 15,
  category: Category.Food,
  date: new Date("2025-03-25")
});

manager.addExpense({
  id: 2,
  name: "Bus ticket",
  amount: 3.5,
  category: Category.Transport,
  date: new Date("2025-03-26")
});


console.log("\n--- All Expenses ---");
manager.viewAllExpenses();

console.log(`\nTotal: $${manager.getTotalAmount()}`);

console.log("\n--- Food Expenses ---");
const foodExpenses = manager.filterByCategory(Category.Food);
foodExpenses.forEach(exp => {
  console.log(`${exp.name} - $${exp.amount}`);
});