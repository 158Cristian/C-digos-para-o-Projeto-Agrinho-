function showToast(message) {
    const toastEl = document.getElementById('customToast');
    const toastBody = toastEl.querySelector('.toast-body');
    toastBody.textContent = `Você clicou na imagem: ${message}`;
    const toast = new bootstrap.Toast(toastEl);
    toast.show();
}

// Rolagem suave para os links de navegação rápida
document.querySelectorAll('.quick-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Inicializar tooltips
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(element => {
        new bootstrap.Tooltip(element);
    });
});