const myLibrary = [];

const addbutton = document.querySelector(".addbook");
const dialog = document.querySelector("#dialog");
const closedialog = document.querySelector(".close");

function Book(name,author,title,id) {
    this.name = name;
    this.author = author;
    this.title = title;
    this.id = crypto.randomUUID();
}

function addBookToLibrary() {
  // take params, create a book then store it in the array
}

addbutton.addEventListener("click", () => {
  dialog.showModal();
})

closedialog.addEventListener("click", (e) => {
  e.preventDefault();
  dialog.close();
})