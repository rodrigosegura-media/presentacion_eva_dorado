let currentImages = [];
        let currentIndex = 0;

        function openGallery(imagesArray, title) {
            currentImages = imagesArray;
            currentIndex = 0;
            document.getElementById('gallery-title').textContent = title;
            updateGalleryImage();
            
            const modal = document.getElementById('photo-modal');
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            
            // Recargar iconos de Lucide en el modal
            if (typeof lucide !== 'undefined') { lucide.createIcons(); }
        }

        function closeGallery() {
            const modal = document.getElementById('photo-modal');
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }

        function updateGalleryImage() {
            const imgElement = document.getElementById('gallery-img');
            const counterElement = document.getElementById('gallery-counter');
            
            imgElement.src = currentImages[currentIndex];
            counterElement.textContent = `Foto ${currentIndex + 1} de ${currentImages.length}`;
        }

        function nextPhoto() {
            currentIndex = (currentIndex + 1) % currentImages.length;
            updateGalleryImage();
        }

        function prevPhoto() {
            currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
            updateGalleryImage();
        }

        // Permitir pasar fotos con las teclas del teclado (Flecha izquierda / derecha / Escape)
        document.addEventListener('keydown', (e) => {
            const modal = document.getElementById('photo-modal');
            if (!modal.classList.contains('hidden')) {
                if (e.key === 'ArrowRight') nextPhoto();
                if (e.key === 'ArrowLeft') prevPhoto();
                if (e.key === 'Escape') closeGallery();
            }
        });