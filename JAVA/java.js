// Función para inicializar todos los iconos
function cargarIconos() {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Ejecutar cuando se cargue todo el DOM y recursos externos
window.addEventListener('load', cargarIconos);
document.addEventListener('DOMContentLoaded', cargarIconos);

// Control del Menú Móvil
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// Filtros del Portafolio
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => {
            btn.classList.remove('active', 'bg-[#FAF4D0]', 'text-black');
            btn.classList.add('bg-white/5', 'text-gray-300');
        });

        button.classList.add('active', 'bg-[#FAF4D0]', 'text-black');
        button.classList.remove('bg-white/5', 'text-gray-300');

        const filterValue = button.getAttribute('data-filter');

        projectCards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Modal de Reproductor de Vídeo
function openModal(videoUrl, title) {
    const modal = document.getElementById('video-modal');
    const iframe = document.getElementById('modal-iframe');
    const modalTitle = document.getElementById('modal-title');

    if (modal && iframe && modalTitle) {
        iframe.src = videoUrl + "?autoplay=1";
        modalTitle.textContent = title;
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }
}

function closeModal() {
    const modal = document.getElementById('video-modal');
    const iframe = document.getElementById('modal-iframe');

    if (modal && iframe) {
        iframe.src = "";
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }
}