let myLibrary = [];
myLibrary.push({
  title: "HP",
  author: "JK",
  pages: 500,
  status: "finished"
})

function Book(title, author, pages, status) {
  // the constructor...
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.status = status
}

function addBookToLibrary() {
  event.preventDefault();
  // Add sample books to test the array
  let book1 = new Book("HP", "JK", 500, "finished");
  myLibrary.push(book1);
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

function displayToggle() {
  let newBookForm = document.getElementById("newBookForm");
  if(newBookForm.style.display === "none") {
    newBookForm.style.display = "block"
  } else {
    newBookForm.style.display = "none"
  }
}

displayLibrary();