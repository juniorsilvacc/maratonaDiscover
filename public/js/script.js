const Modal = {
    open(){
        // Abrir modal
        document.querySelector(".modal-overlay")
        .classList.add("active")
        // Adicionar a class active ao modal
    },
    close(){
        // Fechar o modal
        document.querySelector(".modal-overlay")
        .classList.remove("active")
        // remover a class active do modal
    }
}