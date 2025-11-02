// Fichier JavaScript pour ArchitectePC
// Fonctionnalités interactives du site

// Fonction pour charger les composants Header et Footer
async function loadComponent(elementId, filePath) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) throw new Error(`Erreur chargement ${filePath}`);
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
    } catch (error) {
        console.error('Erreur:', error);
    }
}

// Fonction pour initialiser le modal du configurateur
function initConfiguratorModal() {
    // Attendre un peu pour que le DOM soit complètement chargé
    setTimeout(() => {
        const modal = document.getElementById('configuratorModal');
        const openBtnDesktop = document.getElementById('openConfiguratorModal');
        const openBtnMobile = document.getElementById('openConfiguratorModalMobile');
        const closeBtn = document.getElementById('closeModal');
        const closeModalBtn = document.getElementById('closeModalBtn');
        
        // Vérifier que tous les éléments existent
        if (!modal) {
            console.error('Modal non trouvé');
            return;
        }
        
        // Ouvrir le modal
        function openModal(e) {
            if (e) e.preventDefault();
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        
        // Fermer le modal
        function closeModal() {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
        
        // Événements pour les boutons spécifiques
        if (openBtnDesktop) {
            openBtnDesktop.addEventListener('click', openModal);
        }
        if (openBtnMobile) {
            openBtnMobile.addEventListener('click', openModal);
        }
        
        // Ajouter événement pour tous les éléments avec la classe 'open-configurator-modal'
        const configuratorTriggers = document.querySelectorAll('.open-configurator-modal');
        configuratorTriggers.forEach(trigger => {
            trigger.addEventListener('click', openModal);
        });
        
        if (closeBtn) {
            closeBtn.addEventListener('click', closeModal);
        }
        if (closeModalBtn) {
            closeModalBtn.addEventListener('click', closeModal);
        }
        
        // Fermer en cliquant sur l'overlay
        if (modal) {
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    closeModal();
                }
            });
        }
        
        // Fermer avec la touche Échap
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
                closeModal();
            }
        });
        
        console.log('Modal configurateur initialisé avec succès!');
    }, 100);
}

// Fonction pour initialiser le modal Page Unknown
function initPageUnknownModal() {
    setTimeout(() => {
        const modal = document.getElementById('pageUnknownModal');
        const closeBtn = document.getElementById('closePageUnknownModal');
        const closeModalBtn = document.getElementById('closePageUnknownModalBtn');
        
        // Vérifier que le modal existe
        if (!modal) {
            console.error('Modal Page Unknown non trouvé');
            return;
        }
        
        // Ouvrir le modal
        function openModal(e) {
            e.preventDefault();
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        
        // Fermer le modal
        function closeModal() {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
        
        // Trouver tous les éléments avec la classe 'open-page-unknown-modal'
        const unknownPageTriggers = document.querySelectorAll('.open-page-unknown-modal');
        unknownPageTriggers.forEach(trigger => {
            trigger.addEventListener('click', openModal);
        });
        
        // Événements de fermeture
        if (closeBtn) {
            closeBtn.addEventListener('click', closeModal);
        }
        if (closeModalBtn) {
            closeModalBtn.addEventListener('click', closeModal);
        }
        
        // Fermer en cliquant sur l'overlay
        if (modal) {
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    closeModal();
                }
            });
        }
        
        // Fermer avec la touche Échap
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
                closeModal();
            }
        });
        
        console.log('Modal Page Unknown initialisé avec succès!');
    }, 100);
}

document.addEventListener('DOMContentLoaded', async function() {
    // Charger tous les composants
    await loadComponent('header-placeholder', 'components/header.html');
    await loadComponent('footer-placeholder', 'components/footer.html');
    await loadComponent('modal-placeholder', 'components/modal-configurator.html');
    await loadComponent('modal-page-unknown-placeholder', 'components/modal-page-unknown.html');
    
    // Initialiser les modals après que tout soit chargé
    initConfiguratorModal();
    initPageUnknownModal();
    
    console.log('ArchitectePC chargé avec succès!');
});