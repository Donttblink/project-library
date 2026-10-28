const myLibrary = [];
const shelf = document.querySelector(".shelf");
const form = document.querySelector(".book-form");
const newBook = document.querySelector;

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.id = crypto.randomUUID();
  this.height = Math.random() * 180 + 200;
  this.width = `${pages / 5}`;
  this.read = read;
}

Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
  return book;
}

addBookToLibrary(
  "Harry Potter and the philosopher's stone",
  "J.K Rowling",
  398,
  true,
);

addBookToLibrary(
  "Harry Potter and the chamber of secrets",
  "J.K Rowling",
  498,
  true,
);

addBookToLibrary(
  "Harry Potter and the prisoner of Azkaban",
  "J.K Rowling",
  598,
  true,
);

function createBook(book) {
  const bookCard = document.createElement("div");
  const title = document.createElement("h3");
  const author = document.createElement("p");
  const pages = document.createElement("p");
  const readToggle = document.createElement("input");
  const remove = document.createElement("button");
  const id = book.id;

  title.textContent = `${book.title}`;
  author.textContent = `${book.author}`;
  pages.textContent = `${book.pages}`;
  readToggle.type = "checkbox";
  readToggle.checked = book.read;
  remove.textContent = "x";

  title.classList.add("book-card-title");
  author.classList.add("book-card-author");
  pages.classList.add("book-card-pages");
  readToggle.classList.add("read-toggle");
  remove.classList.add("remove-btn");

  bookCard.appendChild(remove);
  bookCard.appendChild(title);
  bookCard.appendChild(author);
  bookCard.appendChild(pages);
  bookCard.appendChild(readToggle);

  bookCard.classList.add("book");
  bookCard.style.height = `${book.height}px`;
  bookCard.style.width = `${book.width}px`;

  readToggle.addEventListener("change", function (e) {
    book.toggleRead();
  });

  remove.addEventListener("click", () => {
    bookCard.remove();
    const index = myLibrary.findIndex((item) => item.id === id);
    myLibrary.splice(index, 1);
  });

  return bookCard;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const title = e.target.elements["book-name"].value;
  const author = e.target.elements["author-name"].value;
  const pages = Number(e.target.elements["book-length"].value);
  const read = e.target.elements["read"].checked;

  shelf.appendChild(createBook(addBookToLibrary(title, author, pages, read)));
  e.target.reset();
});

function fillBookShelf() {
  myLibrary.forEach((book) => {
    shelf.appendChild(createBook(book));
  });
}

fillBookShelf();
