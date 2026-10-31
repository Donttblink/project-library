const myLibrary = [];
const shelf = document.querySelector(".shelf");
const form = document.querySelector(".book-form");
const newBook = document.querySelector(".new-book");
const spineColors = [
  "#cab891",
  "#70683b",
  "#81231e",
  "#5f6a54",
  "#2b2c1e",
  "#b9b59f",
  "#bf9f4c",
  "#6f634d",
  "#314837",
  "#152c18",
  "#8da683",
  "#be8f3c",
  "#d99d29",
  "#f2dcb1",
  "#dc8920",
];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.id = crypto.randomUUID();
  this.height = Math.random() * 40 + 60;
  this.width = `${pages / 5}`;
  this.read = read;
  this.color = spineColors[Math.floor(Math.random() * spineColors.length)];
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

newBook.addEventListener("click", () => {
  !form.classList.contains("form-hidden")
    ? form.classList.add("form-hidden")
    : form.classList.remove("form-hidden");
});

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
  remove.textContent = "×";

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
  bookCard.style.height = `${book.height}%`;
  bookCard.style.width = `${book.width}px`;
  bookCard.style.setProperty("--spine", book.color);

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
  form.classList.add("form-hidden");
});

function fillBookShelf() {
  myLibrary.forEach((book) => {
    shelf.appendChild(createBook(book));
  });
}

fillBookShelf();
