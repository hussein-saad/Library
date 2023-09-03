function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


const addBookBtn = document.querySelector(".add-book-btn");

const openModal = document.querySelector(".open-modal");

const cancelBtn = document.querySelector(".cancel-btn");


addBookBtn.addEventListener("click", () => {
    openModal.showModal();
});


function clearModal() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("read").checked = false;
}


cancelBtn.addEventListener("click", () => {
    clearModal();
    openModal.close();
});


const getBookInfo = () => {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;
    return new Book(title, author, pages, read);
}





const submitBtn = document.querySelector(".add-btn");

submitBtn.addEventListener("click", () => {
    event.preventDefault();
    const book = getBookInfo();
    createBookCard(book);
    clearModal();
    openModal.close();
});


const createBookCard = (book) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("card");

    const cardInfo = document.createElement("div");
    cardInfo.classList.add("card-info");
    

    const title = document.createElement("h1");
    title.textContent = book.title;
    cardInfo.appendChild(title);

    const author = document.createElement("h3");
    author.textContent = "by  " + book.author;
    cardInfo.appendChild(author);

    const pages = document.createElement("p");
    pages.textContent = "pages: " + book.pages;
    cardInfo.appendChild(pages);
    
    bookCard.appendChild(cardInfo);

    const cardBtns = document.createElement("div");
    cardBtns.classList.add("card-btns");

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-book-btn");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", () => {
        const grid = document.querySelector(".grid");
        grid.removeChild(bookCard);
    });

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

    cardBtns.appendChild(readBtn);
    
    bookCard.appendChild(cardBtns);
    
    const grid = document.querySelector(".grid");
    grid.appendChild(bookCard);

}
