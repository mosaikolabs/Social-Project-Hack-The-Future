// Script para agregar automáticamente el popup de aviso sobre datos ficticios a todas las páginas
(function() {
    'use strict';
    
    // Verificar si ya existe el popup para evitar duplicados
    if (document.getElementById('data-notice-popup')) {
        return;
    }
    
    // Crear el HTML del popup
    function createDataNoticePopup() {
        const popupHTML = `
            <aside class="data-notice-wrapper fixed bottom-4 left-4 z-50 max-w-md" id="data-notice-popup">
                <div class="data-notice-container bg-surface border border-border rounded-lg shadow-card p-4">
                    <div class="data-notice-content">
                        <div class="message-block mb-4">
                            <p class="text-text-primary text-sm leading-relaxed">
                                <strong>¡Aviso Importante!</strong> Este sitio web contiene datos ficticios para demostración y interacción con stakeholders. Los datos definitivos se implementarán próximamente.
                            </p>
                        </div>
                        <div class="data-notice-button-block flex justify-end">
                            <button type="button" id="data-notice-accept-button" 
                                    class="btn-primary text-sm px-4 py-2" 
                                    aria-label="Entendido">
                                Entendido
                            </button>
                        </div>
                    </div>
                </div>
            </aside>
        `;
        
        // Insertar el popup al final del body
        document.body.insertAdjacentHTML('beforeend', popupHTML);
    }
    
    // Funcionalidad del popup
    function initializeDataNoticePopup() {
        const dataNoticePopup = document.getElementById('data-notice-popup');
        const acceptButton = document.getElementById('data-notice-accept-button');
        
        if (!dataNoticePopup || !acceptButton) {
            console.warn('Data notice popup elements not found');
            return;
        }
        
        // Verificar si el usuario ya ha aceptado el aviso
        const hasAcceptedNotice = localStorage.getItem('data-notice-accepted');
        
        if (hasAcceptedNotice) {
            // Si ya aceptó, ocultar el popup
            dataNoticePopup.classList.add('hidden');
        } else {
            // Mostrar el popup después de un pequeño delay
            setTimeout(() => {
                dataNoticePopup.style.display = 'block';
            }, 1000);
        }
        
        // Manejar el clic en el botón "Entendido"
        acceptButton.addEventListener('click', function() {
            // Guardar en localStorage que el usuario aceptó
            localStorage.setItem('data-notice-accepted', 'true');
            
            // Animar la salida del popup
            dataNoticePopup.classList.add('hide-notice');
            
            // Ocultar completamente después de la animación
            setTimeout(() => {
                dataNoticePopup.classList.add('hidden');
            }, 500);
        });
        
        // Cerrar con la tecla Escape
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && !dataNoticePopup.classList.contains('hidden')) {
                acceptButton.click();
            }
        });
    }
    
    // Inicializar cuando el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            createDataNoticePopup();
            initializeDataNoticePopup();
        });
    } else {
        // Si el DOM ya está listo
        createDataNoticePopup();
        initializeDataNoticePopup();
    }
})(); 