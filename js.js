const myLibrary = [];
const shelf = document.querySelector(".shelf");

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages) {
  const book = new Book(title, author, pages);
  myLibrary.push(book);
}

addBookToLibrary(
  "Harry Potter and the philosopher's stone",
  "J.K Rowling",
  398,
);

addBookToLibrary("Harry Potter and the chamber of secrets", "J.K Rowling", 498);

addBookToLibrary(
  "Harry Potter and the prisoner of Azkaban",
  "J.K Rowling",
  598,
);

function fillBookShelf() {
  myLibrary.forEach((book) => {
    let bookCard = document.createElement("div");
    bookCard.style.height = Math.random();
    ((bookCard.textContent = `${book.title}, ${book.author}, ${book.pages}`),
      shelf.appendChild(bookCard));
  });
}

fillBookShelf();
