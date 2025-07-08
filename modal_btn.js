const buttons = document.querySelectorAll('.heuristica-btn');
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modalContent');
    const modalClose = document.getElementById('modalClose');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
        modalContent.textContent = btn.getAttribute('data-info');
        modal.style.display = 'flex';
        });
    });

    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) modal.style.display = 'none';
    });


const techButtons = document.querySelectorAll('.tech-btn');
const techModal = document.getElementById('techModal');
const techModalContent = document.getElementById('techModalContent');
const techModalClose = document.getElementById('techModalClose');

techButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        techModalContent.textContent = btn.getAttribute('data-info');
        techModal.style.display = 'flex';
    });
});

techModalClose.addEventListener('click', () => {
    techModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === techModal) techModal.style.display = 'none';
});