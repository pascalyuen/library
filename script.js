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

// Change read status of a book
Book.prototype.changeStatus = function () {
  if (this.status == "Reading") {
    this.status = "Finished";
  } else {
    this.status = "Reading";
  }
  displayLibrary();
}

// Add two example books to the array
function addExampleBook() {
  const EXAMPLE_BOOK_1 = new Book("Harry Potter and the Philosopher\'s Stone (Example)",
                               "J. K. Rowling",
                               336,
                               "Finished");
  const EXAMPLE_BOOK_2 = new Book("Harry Potter and the Chamber of Secrets (Example)",
                               "J. K. Rowling",
                               251,
                               "Reading");
  myLibrary.push(EXAMPLE_BOOK_1);
  myLibrary.push(EXAMPLE_BOOK_2);
}

// Add a new book to the array
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

// Loops through the array and displays each book on the page
function displayLibrary() {
  // Clear table
  tableBody.innerHTML = '';

  for (const[index, book] of myLibrary.entries()) {
    const newEntry = `
    <tr>
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.pages}</td>
      <td><button class="status", onclick="myLibrary[${index}].changeStatus()">${book.status}</button></td>
      <td><button class="delete", onclick="deleteBook(${index})">Delete</button></td>
    </tr>
  `;
  tableBody.insertAdjacentHTML("beforeend", newEntry);
  }
}

// Displays the add new book form when user clicks the "New Book" button
function displayForm() {
  if(newBookForm.style.display === "" || newBookForm.style.display === "none") {
    newBookForm.style.display = "block";
  } else {
    newBookForm.style.display = "none";
  }
}

// Add example book and display the initial library
addExampleBook();
displayLibrary();

// Delete Book
function deleteBook(index) {
  let text = "Are you sure you want to delete this book?"
  if (confirm(text)) {
    myLibrary.splice(index, 1);
    displayLibrary();
  };
}