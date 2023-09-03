const myLibrary = [];

function Book() {
    
}

function addBookToLibrary() {
  
}




const addBookBtn = document.querySelector(".add-book-btn");

const openModal = document.querySelector(".open-modal");

const cancelBtn = document.querySelector(".cancel-btn");

addBookBtn.addEventListener("click", () => {
    openModal.showModal();
});
 

cancelBtn.addEventListener("click", () => {
    openModal.close();
});




