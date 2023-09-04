class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
    this.createBookCard(book);
  }

  removeBook(book) {
    const index = this.books.indexOf(book);
    if (index !== -1) {
      this.books.splice(index, 1);
    }
    this.removeBookCard(book);
  }

  createBookCard(book) {
    const bookCard = document.createElement("div");
    bookCard.classList.add("card");

    const cardInfo = document.createElement("div");
    cardInfo.classList.add("card-info");

    const title = document.createElement("h1");
    title.textContent = book.title;
    cardInfo.appendChild(title);

    const author = document.createElement("h3");
    author.textContent = "by " + book.author;
    cardInfo.appendChild(author);

    const pages = document.createElement("p");
    pages.textContent = "pages: " + book.pages;
    cardInfo.appendChild(pages);

    bookCard.appendChild(cardInfo);

    const cardBtns = document.createElement("div");
    cardBtns.classList.add("card-btns");

    const deleteBtn = this.createDeleteButton(book, bookCard);
    cardBtns.appendChild(deleteBtn);

    const readBtn = document.createElement("button");
    readBtn.classList.add("edit-btn");
    readBtn.textContent = book.read ? "Read" : "Not Read";
    readBtn.style.backgroundColor = book.read ? "rgb(40, 112, 237)" : "rgb(233, 62, 62)";
    readBtn.addEventListener("click", () => {
      book.read = !book.read;
      readBtn.textContent = book.read ? "Read" : "Not Read";
      readBtn.style.backgroundColor = book.read ? "rgb(40, 112, 237)" : "rgb(233, 62, 62)";
    });

    readBtn.style.cursor = "pointer";

    cardBtns.appendChild(readBtn);

    bookCard.appendChild(cardBtns);

    const grid = document.querySelector(".grid");
    grid.appendChild(bookCard);

  }

  createDeleteButton(book, bookCard) {
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-book-btn");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.cursor = "pointer";

    deleteBtn.addEventListener("click", () => {
      const grid = document.querySelector(".grid");
      grid.removeChild(bookCard);
      this.removeBook(book);
    });

    return deleteBtn;
  }

  removeBookCard(book) {
    // Remove the book card from the DOM
    const grid = document.querySelector(".grid");
    const bookCards = grid.getElementsByClassName("card");
    for (let i = 0; i < bookCards.length; i++) {
      const card = bookCards[i];
      const titleElement = card.querySelector("h1");
      if (titleElement.textContent === book.title) {
        grid.removeChild(card);
        break;
      }
    }
  }
}



const library = new Library();

const addBookBtn = document.querySelector(".add-book-btn");
const openModal = document.querySelector(".open-modal");
const cancelBtn = document.querySelector(".cancel-btn");

addBookBtn.addEventListener("click", () => {
  addBookBtn.style.cursor = "pointer";
  openModal.showModal();
});

function clearModal() {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("pages").value = "";
  document.getElementById("read").checked = false;
}

cancelBtn.addEventListener("click", () => {
  cancelBtn.style.cursor = "pointer";
  clearModal();
  openModal.close();
});

const getBookInfo = () => {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;
  return new Book(title, author, pages, read);
};

const submitBtn = document.querySelector(".add-btn");

submitBtn.addEventListener("click", () => {
  submitBtn.style.cursor = "pointer";
  event.preventDefault();
  const book = getBookInfo();
  library.addBook(book);
  clearModal();
  openModal.close();
});