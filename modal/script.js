const close = document.getElementById('modal-close');
const open = document.getElementById('modal-open');
const modal = document.getElementById('modal');
const modalContainer = document.getElementById('container');

open.addEventListener('click', () => {
    modalContainer.style.display = 'flex';
});

close.addEventListener('click', () => {
    modalContainer.style.display = 'none';
});