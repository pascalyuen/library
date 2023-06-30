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
  // Clear table
  tableBody.innerHTML = '';

  // Loops through library array and displays each book
  myLibrary.forEach(book => {
    const newEntry = `
    <tr>
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.pages}</td>
      <td>${book.status}</td>
      <td><button class="delete", onclick="deleteBook()">Delete</button></td>
    </tr>
  `;
  tableBody.insertAdjacentHTML("beforeend", newEntry);
  })
}

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
function deleteBook() {
  // console.log("the button is working")
  
}