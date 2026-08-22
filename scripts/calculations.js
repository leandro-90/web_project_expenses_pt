let budgetValue = 0;
let totalExpensesValue = 0;
let balanceColor = "green";

let expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];

for (let value of expenseEntries) {
  totalExpensesValue += value[1];
}

function calculateAverageExpense() {
  if (expenseEntries.length === 0) {
    return 0;
  }

  return totalExpensesValue / expenseEntries.length;
}

function calculateBalance() {
  return budgetValue - totalExpensesValue;
}

function updateBalanceColor() {
  const balance = calculateBalance();
  const warningLimit = budgetValue * 0.25;

  if (balance < 0) {
    balanceColor = "red";
  } else if (balance < warningLimit) {
    balanceColor = "orange";
  } else {
    balanceColor = "green";
  }
}

function calculateCategoryExpenses(category) {
  let categoryTotal = 0;

  for (const expense of expenseEntries) {
    if (expense[0] === category) {
      categoryTotal += expense[1];
    }
  }

  return categoryTotal;
}

function calculateLargestCategory() {
  const categories = [
    "groceries",
    "restaurants",
    "transport",
    "home",
    "subscriptions",
  ];
  let largestCategory = categories[0];
  let largestTotal = calculateCategoryExpenses(largestCategory);

  for (const category of categories) {
    const categoryTotal = calculateCategoryExpenses(category);

    if (categoryTotal > largestTotal) {
      largestTotal = categoryTotal;
      largestCategory = category;
    }
  }

  return largestCategory;
}

function addExpenseEntry(entry) {
  expenseEntries.push(entry);
  totalExpensesValue += entry[1];
}
