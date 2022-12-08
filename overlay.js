// const openModalButtons = document.querySelectorAll("[data-modal-target]");
// const closeModalButtons = document.querySelectorAll("[data-close-button]");
// const overlay = document.getElementById("overlay");

// openModalButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const modal = document.querySelector(button.dataset.modalTarget);
//     openModal(modal);
//   });
// });

// overlay.addEventListener("click", () => {
//   const modals = document.querySelectorAll(".modal.active");
//   modals.forEach((modal) => {
//     closeModal(modal);
//   });
// });

// closeModalButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const modal = button.closest(".modal");
//     closeModal(modal);
//   });
// });

// function openModal(modal) {
//   if (modal == null) return;
//   modal.classList.add("active");
//   overlay.classList.add("active");
// }

// function closeModal(modal) {
//   if (modal == null) return;
//   modal.classList.remove("active");
//   overlay.classList.remove("active");
// }
const balance = document.getElementById("balance");
const money_plus = document.getElementById("money-plus");
const money_minus = document.getElementById("money-minus");
const list = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");

const localStorageTransactions = JSON.parse(
  localStorage.getItem("transactions")
);

let transactions =
  localStorage.getItem("transactions") !== null ? localStorageTransactions : [];

// Add transaction
function addTransaction(e) {
  e.preventDefault();

  if (text.value.trim() === "" || amount.value.trim() === "") {
    alert("Please add a text and amount");
  } else {
    const transaction = {
      id: generateID(),
      text: text.value,
      amount: +amount.value
    };

    transactions.push(transaction);

    addTransactionDOM(transaction);

    updateValues();

    updateLocalStorage();

    text.value = "";
    amount.value = "";
  }
}

//generate random ID
function generateID() {
  return Math.floor(Math.random() * 100000000);
}

//Add transactions to DOM list
function addTransactionDOM(transaction) {
  //get sign
  const sign = transaction.amount < 0 ? "-" : "+";

  const item = document.createElement("li");

  // Add class based on value
  item.classList.add(transaction.amount < 0 ? "minus" : "plus");

  item.innerHTML = `
    
        ${transaction.text} <span>${sign}${Math.abs(transaction.amount)}</span>
        <button class="delete-btn" onclick="removeTransaction(${
          transaction.id
        })">x</button>
    `;

  list.appendChild(item);
}

//update the balance, income and expense
function updateValues() {
  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  balance.innerText = `${total}₮`;
  money_plus.innerText = `${income}₮`;
  money_minus.innerText = `${expense}₮`;
}

//Remove transaction by ID
function removeTransaction(id) {
  transactions = transactions.filter((transaction) => transaction.id !== id);

  updateLocalStorage();

  init();
}

//update local storage transactions
function updateLocalStorage() {
  localStorage.setItem("transactions", JSON.stringify(transactions));
}

//Init app
function init() {
  list.innerHTML = "";

  transactions.forEach(addTransactionDOM);
  updateValues();
}

init();
form.addEventListener("submit", addTransaction);
