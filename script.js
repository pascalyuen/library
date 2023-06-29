let myLibrary = [];

const newBookButton = document.querySelector(".new-book");
const submitButton = document.querySelector(".submit");
const newBookForm = document.getElementById("new-book-form");
const tableBody = document.getElementById("table-body");

newBookButton.addEventListener("click", displayForm);
submitButton.addEventListener("click", addBookToLibrary);

function Book(title, author, pages, status) {
  // the constructor
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.status = status
}

function addExampleBook() {
  const EXAMPLE_BOOK = new Book("Harry Potter and the Philosopher\'s Stone (Example)",
                               "J. K. Rowling",
                               336,
                               "Finished");
  myLibrary.push(EXAMPLE_BOOK);
}

function addBookToLibrary() {
  event.preventDefault();

  let titleValue = document.querySelector("#title").value;
  let authorValue = document.querySelector("#author").value;
  let pagesValue = document.querySelector("#pages").value;
  let statusValue = document.querySelector("#status").value;

  // Check if new entry already exists in array
  let newItem = new Book(titleValue, authorValue, pagesValue, statusValue);
  if (myLibrary.some((book) => book.title === newItem.title)) {
    alert("This book is already in your library");
    return;
  } 

  myLibrary.push(newItem);
  displayLibrary();
}

function displayLibrary() {
  // let tableRef = document.getElementById("table-body");
  // let newRow = tableRef.insertRow();
  // let newBook = Object.values(myLibrary[myLibrary.length - 1]);

  // newBook.forEach((value) => {
  // let newCell = newRow.insertCell();
  // let newText = document.createTextNode(value);
  // newCell.appendChild(newText);
  // })
  // // Cell for the delete button
  // newRow.insertCell();

  let newBook = myLibrary[myLibrary.length - 1];

  const newEntry = `
    <tr>
      <td>${newBook.title}</td>
      <td>${newBook.author}</td>
      <td>${newBook.pages}</td>
      <td>${newBook.status}</td>
      <td><button class="delete">Delete</button></td>
    </tr>
  `;
  tableBody.insertAdjacentHTML("afterbegin", newEntry);
}

function displayForm() {
  if(newBookForm.style.display === "" || newBookForm.style.display === "none") {
    newBookForm.style.display = "block";
  } else {
    newBookForm.style.display = "none";
  }
}

addExampleBook();
displayLibrary();