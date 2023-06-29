let myLibrary = [];

const newBookButton = document.querySelector(".newBook");
const submitButton = document.querySelector(".submit");

newBookButton.addEventListener("click", displayForm);
submitButton.addEventListener("click", addBookToLibrary);

function Book(title, author, pages, status) {
  // the constructor
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.status = status
}

function addBookToLibrary() {
  event.preventDefault();

  let titleValue = document.querySelector("#title").value;
  let authorValue = document.querySelector("#author").value;
  let pagesValue = document.querySelector("#pages").value;
  let statusValue = document.querySelector("#status").value;

  let newAddition = new Book(titleValue, authorValue, pagesValue, statusValue);
  if (myLibrary.some((book) => book.title === newAddition.title)) {
    alert("This book is already in your library");
    return;
  } else {
      myLibrary.push(newAddition);
  }
  displayLibrary();
}

function displayLibrary() {
  let tableRef = document.getElementById("bookTable");

  let i = 0;
  while(myLibrary[i]) {
    let newRow = tableRef.insertRow();
    let bookInfo = Object.values(myLibrary[i]);
    bookInfo.forEach((value) => {
      let newCell = newRow.insertCell();
      let newText = document.createTextNode(value);
      newCell.appendChild(newText);
    })
    i++;
  }
}

function displayForm() {
  let newBookForm = document.getElementById("newBookForm");
  if(newBookForm.style.display === "none") {
    newBookForm.style.display = "block"
  } else {
    newBookForm.style.display = "none"
  }
}

displayLibrary();