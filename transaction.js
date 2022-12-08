class Transactipn {
  constructor(income, expense) {
    this.income = income;
    this.expense = expense;
  }
  balance() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}
