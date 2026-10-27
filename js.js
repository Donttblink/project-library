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

function createBook(book) {
  const bookCard = document.createElement("div");
  const title = document.createElement("h3");
  const author = document.createElement("p");
  const pages = document.createElement("p");

  title.textContent = `${book.title}`;
  author.textContent = `${book.author}`;
  pages.textContent = `${book.pages}`;

  title.classList.add("book-card-title");
  author.classList.add("book-card-author");
  pages.classList.add("book-card-pages");

  bookCard.appendChild(title);
  bookCard.appendChild(author);
  bookCard.appendChild(pages);

  bookCard.classList.add("book");
  bookCard.style.height = `${Math.random() * 180 + 200}px`;
  bookCard.style.width = `${book.pages / 5}px`;

  return bookCard;
}

function fillBookShelf() {
  myLibrary.forEach((book) => {
    shelf.appendChild(createBook(book));
  });
}

fillBookShelf();
