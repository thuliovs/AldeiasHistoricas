

// Accordions
function toggleAccordion(header) {
    const content = header.nextElementSibling;
    const icon = header.querySelector('.icon');

    if (content.classList.contains('show')) {
        content.style.maxHeight = null;
        content.classList.remove('show');
        header.classList.remove('open');
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
        content.classList.add('show');
        setTimeout(() => {
            content.style.maxHeight = content.scrollHeight + "px";
        }, 10);
        header.classList.add('open');

        document.querySelectorAll('.accordion-content').forEach((item) => {
            if (item !== content) {
                item.style.maxHeight = null;
                item.classList.remove('show');
            }
        });
        document.querySelectorAll('.accordion-header').forEach((item) => {
            if (item !== header) {
                item.classList.remove('open');
            }
        });
    }
}


// Modais
const registroModal = document.getElementById('registroModal');
const registroButton = document.getElementById('registroButton');
const registroCloseButton = registroModal.querySelector('.close-button');

const loginModal = document.getElementById('loginModal');
const loginButton = document.getElementById('loginButton');
const loginCloseButton = loginModal.querySelector('.close-button');

function openModal(modal) {
    modal.style.display = 'flex';
    const modalContent = modal.querySelector('.modal-content');
    modalContent.style.animation = 'modal-in 0.5s ease-out forwards';
}

function closeModal(modal) {
    const modalContent = modal.querySelector('.modal-content');
    modalContent.style.animation = 'modal-out 0.5s ease-in forwards';
    setTimeout(() => {
        modal.style.display = 'none';
    }, 500);
}

registroButton.addEventListener('click', () => openModal(registroModal));
loginButton.addEventListener('click', () => openModal(loginModal));

registroCloseButton.addEventListener('click', () => closeModal(registroModal));
loginCloseButton.addEventListener('click', () => closeModal(loginModal));

window.addEventListener('click', (event) => {
    if (event.target === registroModal) {
        closeModal(registroModal);
    }
    if (event.target === loginModal) {
        closeModal(loginModal);
    }
});

