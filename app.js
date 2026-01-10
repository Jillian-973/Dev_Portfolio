// Données des projets
const projectsData = {
  1: {
    image: 'img/chronoquest.png',
    title: 'Chronoquest',
    description: 'Projet de partiel : conception d\'un site web en html CSS et Javascript sur un sujet donné (toutes les infos sont présentes sur le site).',
    link: 'https://jillian-973.github.io/Chrono_quest/',
    tags: ['HTML', 'CSS', 'JavaScript']
  },
  2: {
    image: 'img/melon.png',
    title: 'JetGun',
    description: 'Jeu en 2.5D que j\'ai pu coder en tant que dev en équipe de game developpeur et game designer',
    link: 'https://jillian-973.github.io/JetGun/',
    tags: ['C#']
  },
  3: {
    image: 'img/quizz.png',
    title: 'Jeu Quizz FDD',
    description: 'Jeu quizz sur des fruits du demon de l\'anime one piece réalisé en cours afin de s\'entrainer au JavaScript, le défi était de faire un quizz sur une one page avec plusieurs display qui s\'affichent au fur et à mesure que le quizz avance.',
    link: 'https://jillian-973.github.io/Quizz_FDD/',
    tags: ['HTML', 'CSS', 'JavaScript']
  },
  4: {
    image: 'img/site yoga.png',
    title: 'Yoga Center',
    description: 'Site vitrine sur un potentiel site pour réserver des cours de yoga avec un professeur (Avec responsive)',
    link: 'https://jillian-973.github.io/Yoga_center/',
    tags: ['HTML', 'CSS']
  },
  5: {
    image: 'img/adopt.png',
    title: 'Adopte un chien',
    description: 'Site vitrine sur un potentiel site d\'adoption de chien (Avec responsive)',
    link: 'https://jillian-973.github.io/Adopte_chien/',
    tags: [ 'HTML', 'CSS']
  },
  6: {
    image: 'img/embleme.jpg',
    title: 'Agence Belmont',
    description: 'Site imaginaire d\'une agence pour problème paranormal inspiré de l\'univers de castlevania pour s\'entrainer au JavaScript',
    link: 'https://jillian-973.github.io/Agence_Belmont/',
    tags: ['HTML', 'CSS', 'JavaScript' ]
  },
    7: {
    image: 'img/meteo.png',
    title: 'Météo France',
    description: 'Site météorologique utilisant une API pour récupérer les données météo en fonction de la ville entrée par l\'utilisateur. Afin de s\'entrainer au JavaScript et à l\'utilisation d\'API.',
    link: 'https://jillian-973.github.io/Meteo_France/',
    tags: ['HTML', 'CSS', 'JavaScript' ]
  }
};

// Header au scroll
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Menu hamburger
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Fermer le menu au clic sur un lien
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

// Animation des barres de compétences au scroll
const observerOptions = {
  threshold: 0.5,
  rootMargin: "0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const progressBars = entry.target.querySelectorAll(".skill-progress");
      progressBars.forEach((bar) => {
        const progress = bar.getAttribute("data-progress");
        bar.style.width = progress + "%";
      });
    }
  });
}, observerOptions);

document.querySelectorAll(".competence-category").forEach((category) => {
  observer.observe(category);
});

// Gestion de la modal des projets
const modal = document.getElementById("projectModal");
const modalClose = document.getElementById("modalClose");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalDescription = document.getElementById("modalDescription");

document.querySelectorAll;


//pop up

function openProjectPopup(projectId) {
  const project = projectsData[projectId];
  if (!project) return;

  // Créer l'overlay
  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    animation: fadeIn 0.3s;
  `;

  // Créer la pop-up
  const popup = document.createElement('div');
  popup.style.cssText = `
    background: white;
    border-radius: 16px;
    padding: 0;
    max-width: 600px;
    width: 90%;
    max-height: 90vh;
    overflow-y: auto;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
    position: relative;
    animation: slideUp 0.3s;
  `;

  // Bouton de fermeture
  const closeBtn = document.createElement('button');
  closeBtn.innerHTML = '&times;';
  closeBtn.style.cssText = `
    position: absolute;
    top: 20px;
    right: 20px;
    background: white;
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-size: 28px;
    cursor: pointer;
    color: #333;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
  `;
  closeBtn.onmouseover = () => {
    closeBtn.style.transform = 'rotate(90deg)';
    closeBtn.style.background = '#f0f0f0';
  };
  closeBtn.onmouseout = () => {
    closeBtn.style.transform = 'rotate(0deg)';
    closeBtn.style.background = 'white';
  };

  // Image
  const img = document.createElement('img');
  img.src = project.image;
  img.alt = project.title;
  img.style.cssText = `
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 16px 16px 0 0;
  `;

  // Conteneur du contenu
  const content = document.createElement('div');
  content.style.cssText = `
    padding: 30px;
  `;

  // Titre
  const titleEl = document.createElement('h2');
  titleEl.textContent = project.title;
  titleEl.style.cssText = `
    margin: 0 0 15px 0;
    font-size: 28px;
    color: #222;
    font-weight: 700;
  `;

  // Tags
  const tagsContainer = document.createElement('div');
  tagsContainer.style.cssText = `
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 20px;
  `;
  project.tags.forEach(tag => {
    const tagEl = document.createElement('span');
    tagEl.textContent = tag;
    tagEl.style.cssText = `
      background: #ff6b35;
      color: #ffffff;
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 13px;
      font-weight: 500;
    `;
    tagsContainer.appendChild(tagEl);
  });

  // Description
  const descEl = document.createElement('p');
  descEl.textContent = project.description;
  descEl.style.cssText = `
    margin: 0 0 25px 0;
    font-size: 16px;
    line-height: 1.7;
    color: #555;
  `;

  // Lien
  const linkEl = document.createElement('a');
  linkEl.href = project.link;
  linkEl.textContent = 'Voir le projet';
  linkEl.style.cssText = `
    display: inline-block;
    background: linear-gradient(135deg, #ff6b35 60%, #333 100%);
    color: white;
    padding: 14px 32px;
    text-decoration: none;
    border-radius: 8px;
    font-weight: 600;
    transition: all 0.3s;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
  `;
  linkEl.onmouseover = () => {
    linkEl.style.transform = 'translateY(-2px)';
    linkEl.style.boxShadow = '0 6px 20px #ff6b35';
  };
  linkEl.onmouseout = () => {
    linkEl.style.transform = 'translateY(0)';
    linkEl.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)';
  };

  // Assembler le contenu
  content.appendChild(titleEl);
  content.appendChild(tagsContainer);
  content.appendChild(descEl);
  content.appendChild(linkEl);

  // Assembler la pop-up
  popup.appendChild(closeBtn);
  popup.appendChild(img);
  popup.appendChild(content);
  overlay.appendChild(popup);

  // Ajouter les animations CSS
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes slideUp {
      from { 
        opacity: 0;
        transform: translateY(30px);
      }
      to { 
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;
  document.head.appendChild(style);

  // Fonction de fermeture
  const closePopup = () => {
    overlay.style.animation = 'fadeOut 0.3s';
    setTimeout(() => overlay.remove(), 300);
  };
  closeBtn.onclick = closePopup;
  overlay.onclick = (e) => {
    if (e.target === overlay) closePopup();
  };

  // Ajouter au DOM
  document.body.appendChild(overlay);
}

// Initialiser les événements sur les cartes de projet
document.addEventListener('DOMContentLoaded', () => {
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
      const projectId = card.getAttribute('data-project');
      openProjectPopup(projectId);
    });
  });
});