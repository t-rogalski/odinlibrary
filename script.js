const myLibrary = [];
const books = document.querySelector(".books");

const addbutton = document.querySelector(".addbook");
const dialog = document.querySelector("#dialog");
const closedialog = document.querySelector(".close");
const confirmBtn = document.querySelector("#confirmBtn");

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");

function Book(title,author,pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(newBook) {
  myLibrary[newBook.id] = newBook;
  const book = document.createElement("div");

  const options = document.createElement("div");
  const ptitle = document.createElement("p");
  const pauthor = document.createElement("p");
  const ppages = document.createElement("p");
  const read = document.createElement("button");
  const remove = document.createElement("button");

  ptitle.textContent = newBook.title;
  pauthor.textContent = newBook.author;
  ppages.textContent = newBook.pages;

  read.classList.add("deactive");
  read.textContent = "Read";

  remove.classList.add("remove");
  remove.textContent = "Remove";

  read.addEventListener("click", () => {
    read.classList.toggle("active");
    read.classList.toggle("deactive");
  })

  // remove.addEventListener("click", () => {

  // })

  options.appendChild(read);
  options.appendChild(remove);
  options.classList.add("options");

  book.appendChild(ptitle);
  book.appendChild(pauthor);
  book.appendChild(ppages);
  book.appendChild(options);

  book.classList.add("book");
  books.appendChild(book);
  dialog.close();

  
}

addbutton.addEventListener("click", () => {
  dialog.showModal();
})

closedialog.addEventListener("click", (e) => {
  e.preventDefault();
  dialog.close();
})

confirmBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const tit = title.value;
  const auth = author.value;
  const pag = pages.value;

  const newBook = new Book(tit, auth, pag);
  
  addBookToLibrary(newBook);
})