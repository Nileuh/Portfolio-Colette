document.addEventListener('DOMContentLoaded', function() {
    // Gestion de la modale pour les projets
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const modal = document.getElementById('project-modal');
    const closeButton = document.querySelector('.close-button');
    const modalTitle = document.getElementById('modal-title');
    const modalVideoContainer = document.getElementById('modal-video-container');
    const modalDescription = document.getElementById('modal-description');
    const modalRole = document.getElementById('modal-role');
    const modalSoftware = document.getElementById('modal-software');

    // Données de vos projets (remplacez par vos vrais projets)
    const projects = {
        1: {
            title: 'Projet Court-Métrage "L\'Envol"',
            videoUrl: 'https://player.vimeo.com/video/VOTRE_ID_VIDEO_VIMEO_1?h=abc123def4&color=00bcd4&byline=0&portrait=0', // Remplacez par votre ID Vimeo/YouTube
            description: 'Animation de personnages 3D pour un court-métrage primé. Responsable de l\'animation de plusieurs séquences clés, de l\'émotion et de la fluidité des mouvements.',
            role: 'Animateur principal 3D',
            software: 'Maya, ZBrush'
        },
        2: {
            title: 'Série Animée "Aventures Pixel"',
            videoUrl: 'https://www.youtube.com/embed/VOTRE_ID_VIDEO_YOUTUBE_2', // Remplacez par votre ID YouTube
            description: 'Création d\'animations 2D pour la première saison d\'une série animée jeunesse. Focus sur l\'expressivité des personnages et les scènes d\'action comiques.',
            role: 'Animateur 2D',
            software: 'Toon Boom Harmony, After Effects'
        },
        // Ajoutez plus de projets ici avec leurs détails
        /*
        3: {
            title: 'Votre Titre Projet 3',
            videoUrl: 'URL_VIDEO',
            description: 'Description de votre projet.',
            role: 'Votre rôle',
            software: 'Logiciels utilisés'
        }
        */
    };

    portfolioItems.forEach(item => {
        item.addEventListener('click', function() {
            const projectId = this.dataset.projectId;
            const project = projects[projectId];

            if (project) {
                modalTitle.textContent = project.title;
                // Vérifier si c'est Vimeo ou YouTube pour créer le bon iframe
                if (project.videoUrl.includes('vimeo.com')) {
                    modalVideoContainer.innerHTML = `<iframe src="${project.videoUrl}" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
                } else if (project.videoUrl.includes('youtube.com')) {
                    modalVideoContainer.innerHTML = `<iframe src="${project.videoUrl}" width="640" height="360" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
                } else {
                    modalVideoContainer.innerHTML = `<p>Vidéo non disponible ou format non pris en charge.</p>`;
                }
                
                modalDescription.textContent = project.description;
                modalRole.textContent = project.role;
                modalSoftware.textContent = project.software;
                modal.style.display = 'flex'; // Utilise flex pour centrer la modale
            }
        });
    });

    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
        modalVideoContainer.innerHTML = ''; // Arrête la lecture de la vidéo en vidant le contenu
    });

    // Fermer la modale si l'utilisateur clique en dehors de la modale
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            modalVideoContainer.innerHTML = ''; // Arrête la lecture
        }
    });

    // Optionnel: Navigation fluide (smooth scroll)
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});