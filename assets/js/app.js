document.addEventListener("DOMContentLoaded", function() {
    console.log("Page chargée avec succès !");
});


// Fonction pour animer les images sur survol
function animateImagesOnHover(containerId, imageUrls, delay = 100) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Conteneur avec l'ID "${containerId}" introuvable.`);
        return;
    }

    // Réinitialise le conteneur
    container.innerHTML = '';

    // Crée les éléments <img> pour chaque URL d'image
    imageUrls.forEach((url, index) => {
        const img = document.createElement('img');
        img.src = url;
        if (index === 0) img.classList.add('active'); // Rendre la première image active
        container.appendChild(img);
    });

    let currentIndex = 0;
    const images = container.querySelectorAll('img');
    let intervalId = null;

    // Fonction pour changer l'image
    function showNextImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }

    // Fonction pour démarrer l'animation
    function startAnimation() {
        if (!intervalId) {
            intervalId = setInterval(showNextImage, delay);
        }
    }

    // Fonction pour arrêter l'animation
    function stopAnimation() {
        clearInterval(intervalId);
        intervalId = null;
    }

    // Ajouter les événements de survol
    container.addEventListener('mouseover', startAnimation);
    container.addEventListener('mouseleave', stopAnimation);
}





const images1 = [
    'assets/images/Personne1/Property 1=Default.svg',
    'assets/images/Personne1/Property 1=Variant2.svg',
    'assets/images/Personne1/Property 1=Variant3.svg',
    'assets/images/Personne1/Property 1=Variant4.svg',
    'assets/images/Personne1/Property 1=Variant5.svg',
];

const image2=[
    'assets/images/Personne2/Property 1=Default.svg',
    'assets/images/Personne2/Property 1=Variant2.svg',
    'assets/images/Personne2/Property 1=Variant3.svg',
    'assets/images/Personne2/Property 1=Variant4.svg',
    'assets/images/Personne2/Property 1=Variant5.svg',
];
const image3=[
    'assets/images/Personne3/Property 1=Default.svg',
    'assets/images/Personne3/Property 1=Variant2.svg',
    'assets/images/Personne3/Property 1=Variant3.svg',
    'assets/images/Personne3/Property 1=Variant4.svg',
    'assets/images/Personne3/Property 1=Variant5.svg',
];


animateImagesOnHover('image-container', images1, 500); // Animation sur hover avec un délai de 2 secondes
animateImagesOnHover('image-container2', image2, 500); // Animation au survol pour Personne2
animateImagesOnHover('image-container3', image3, 500); // Animation sur hover avec un délai de 2 secondes


// Fonction pour une animation automatique (sans survol)
function animateImages(containerId, imageUrls, delay = 200) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Conteneur avec l'ID "${containerId}" introuvable.`);
        return;
    }

    // Réinitialise le conteneur
    container.innerHTML = '';

    // Crée les éléments <img> pour chaque URL d'image
    imageUrls.forEach((url, index) => {
        const img = document.createElement('img');
        img.src = url;
        if (index === 0) img.classList.add('active'); // Rendre la première image active
        container.appendChild(img);
    });

    let currentIndex = 0; // Index de l'image active
    const images = container.querySelectorAll('img');

    // Fonction pour changer l'image
    function showNextImage() {
        images[currentIndex].classList.remove('active'); // Masque l'image actuelle
        currentIndex = (currentIndex + 1) % images.length; // Passe à l'image suivante
        images[currentIndex].classList.add('active'); // Affiche la nouvelle image
    }

    // Lancer l'animation
    setInterval(showNextImage, delay);
}




const imageS=[
    'assets/images/Soleil/Property 1=0.svg',
    'assets/images/Soleil/Property 1=20.svg',
    'assets/images/Soleil/Property 1=40.svg',
    'assets/images/Soleil/Property 1=60.svg',
    'assets/images/Soleil/Property 1=90.svg',
    'assets/images/Soleil/Property 1=11.svg',
    'assets/images/Soleil/Property 1=130.svg',
    'assets/images/Soleil/Property 1=150.svg',
    'assets/images/Soleil/Property 1=0.svg',
];
animateImages('image-containerS', imageS, 200); // Animation automatique pour le soleil


function stopAnimation() {
    clearInterval(intervalId);
    intervalId = null;
    images.forEach(img => img.classList.remove('active'));
    images[0].classList.add('active'); // Retourne à la première image
}


// Sélection des éléments
const hoverZones = document.querySelectorAll('.hover-zone'); // Colonnes interactives
const mainImage = document.getElementById('main-image'); // Image principale
const hoverText = document.getElementById('hover-text'); // Texte dynamique

// Stocke l'image initiale et la position initiale du texte
const initialImage = mainImage.src;
const initialText = hoverText.textContent;

// Fonction pour ajuster la position du texte
function updateTextPosition(zone) {
    const zoneRect = zone.getBoundingClientRect(); // Récupère la position de la colonne
    const textContainer = document.getElementById('text-container');

    // Déplace le texte sous la colonne
    textContainer.style.position = 'absolute';
    textContainer.style.top = `${zoneRect.bottom + window.scrollY}px`; // Positionne le texte sous la colonne
    textContainer.style.left = `${zoneRect.left + window.scrollX}px`; // Aligne à gauche de la colonne
}

// Ajoute des événements de survol et de sortie à chaque colonne
hoverZones.forEach(zone => {
    // Survol : Change l'image et affiche le texte
    zone.addEventListener('mouseover', () => {
        const newImage = zone.getAttribute('data-image'); // Récupère l'image associée
        const newText = zone.getAttribute('data-text'); // Récupère le texte associé
        mainImage.src = newImage; // Met à jour l'image principale
        hoverText.textContent = newText; // Change le contenu du texte
        hoverText.classList.add('visible'); // Rend le texte visible
        updateTextPosition(zone); // Met à jour la position du texte
    });

    // Sortie : Rétablit l'image et le texte initial
    zone.addEventListener('mouseout', () => {
        mainImage.src = initialImage; // Réinitialise l'image
        hoverText.textContent = "Survolez une colonne pour afficher du texte."; // Texte par défaut
        hoverText.classList.remove('visible'); // Cache le texte
        hoverText.style.left = '0'; // Réinitialise la position horizontale du texte
        hoverText.style.top = '0'; // Réinitialise la position verticale du texte
    });
});
