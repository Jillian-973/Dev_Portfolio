// Correspondance des technologies -> logo + nom
const STACKS = {
  html5: ["img/logos/html5.svg", "HTML5"],
  css3: ["img/logos/css3.svg", "CSS3"],
  javascript: ["img/logos/javascript.svg", "JavaScript"],
  sass: ["img/logos/sass.svg", "Sass"],
  nodejs: ["img/logos/nodejs.svg", "Node.js"],
  express: ["img/logos/express.svg", "Express"],
  php: ["img/logos/php.svg", "PHP"],
  ejs: ["img/logos/ejs.svg", "EJS"],
  mysql: ["img/logos/mysql.svg", "MySQL"],
  mongodb: ["img/logos/mongodb.svg", "MongoDB"],
  prisma: ["img/logos/prisma.svg", "Prisma"],
  wordpress: ["img/logos/wordpress.svg", "WordPress"],
  prestashop: ["img/logos/prestashop.svg", "PrestaShop"],
  unity: ["img/logos/unity.svg", "Unity"],
  csharp: ["img/logos/csharp.svg", "C#"],
  unrealengine: ["img/logos/unrealengine.svg", "Unreal Engine"],
  cplusplus: ["img/logos/cplusplus.svg", "C++"],
  godot: ["img/logos/godot.svg", "Godot"],
  git: ["img/logos/git.svg", "Git"],
  github: ["img/logos/github.svg", "GitHub"],
  figma: ["img/logos/figma.svg", "Figma"],
  puppeteer: ["img/logos/puppeteer.svg", "Puppeteer"],
  postgresql: ["img/logos/postgresql.svg", "PostgreSQL"],
  neon: ["img/logos/neon.svg", "Neon"],
  nuxt: ["img/logos/nuxt.svg", "Nuxt"],
  tailwindcss: ["img/logos/tailwindcss.svg", "Tailwind CSS"],
  vue: ["img/logos/vue.svg", "Vue.js"],
  react: ["img/logos/react.svg", "React"],
  symfony: ["img/logos/symfony.svg", "Symfony"],
  typescript: ["img/logos/typescript.svg", "TypeScript"],
  vercel: ["img/logos/vercel.svg", "Vercel"],
  calendly: ["img/logos/calendly.svg", "Calendly"],
  nuxtui: ["img/logos/nuxtui.svg", "Nuxt UI"],
};

// Données des projets
const projectsData = {
  1: {
    image: "img/chronoquest.png",
    title: "Chronoquest",
    description:
      "Projet de partiel : conception d'un site web en HTML, CSS et JavaScript sur un sujet donné (toutes les infos sont présentes sur le site). C'est le premier site \"complet\" que j'ai pu réaliser, j'ai pu m'entrainer à faire du responsive et à faire des animations en CSS et JavaScript, ainsi qu'un carrousel.",
    link: "https://jillian-973.github.io/Chrono_quest/",
    stack: ["html5", "css3", "javascript", "github"],
  },
  2: {
    image: "img/melon.png",
    title: "JetGun",
    description:
      "Jeu en 2.5D que j'ai pu coder en tant que dev en équipe de game developpeur et game designer, c'est le premier jeu complet que j'ai pu réaliser en situation professionnelle simulée. J'ai pu m'entrainer à coder en C# dans le moteur de jeu Unity, à faire du versionning avec git et à travailler en équipe.",
    link: "https://jillian-973.github.io/JetGun/",
    stack: ["csharp", "unity", "github"],
  },
  3: {
    image: "img/quizz.png",
    title: "Jeu Quizz FDD",
    description:
      "Jeu quizz sur des fruits du démon de l'anime One Piece réalisé en cours afin de s'entrainer au JavaScript. Le défi était de faire un quizz sur une one page avec plusieurs affichages qui apparaissent au fur et à mesure que le quizz avance.",
    link: "https://jillian-973.github.io/Quizz_FDD/",
    stack: ["html5", "css3", "javascript", "github"],
  },
  4: {
    image: "img/sniperGame.png",
    title: "Sniper Game",
    description:
      "Jeu de tir en 2D réalisé en cours avec JavaScript, HTML et CSS. J'ai pu m'entrainer à créer des animations et des interactions dynamiques. C'est une one page avec un start, game et game over qui s'affichent au fur et à mesure que le jeu avance ; j'ai aussi ajouté un système de score et de timer pour rendre le jeu plus intéressant.",
    link: "https://jillian-973.github.io/sniper_game/",
    stack: ["html5", "css3", "javascript", "github"],
  },
  5: {
    image: "img/memory.png",
    title: "Memory Game",
    description:
      "Jeu de mémoire réalisé en cours avec PHP. Memory Game est un jeu de plateau web classique où les joueurs doivent mémoriser et retrouver des paires de cartes identiques. Chaque session est entièrement gérée en PHP avec les sessions natives du serveur.",
    link: "https://github.com/Jillian-973/memory-game",
    stack: ["php", "github"],
  },
  6: {
    image: "img/meteo.png",
    title: "Météo France",
    description:
      "Site météorologique utilisant une API pour récupérer les données météo en fonction de la ville entrée par l'utilisateur, afin de s'entrainer au JavaScript et à l'utilisation d'API.",
    link: "https://jillian-973.github.io/Meteo_France/",
    stack: ["html5", "css3", "javascript", "github"],
  },
  7: {
    image: "img/darkheim.png",
    title: "Darkheim",
    description:
      "Jeu Rogue Like en 2D réalisé lors d'un concours \"Game Jam\" avec Godot. J'ai pu coder le personnage principal et les ennemis du jeu avec des mécaniques de déplacement, d'attaque et de détection. La map est générée de manière procédurale pour rendre chaque partie unique. Un projet réalisé en équipe avec d'autres game designers, l'occasion de m'entrainer à coder en GDScript dans le moteur Godot et à travailler en équipe.",
    link: "https://jillixn.itch.io/darkheim",
    stack: ["godot", "github"],
  },
  8: {
    image: "img/note-de-frais.png",
    title: "Note de frais",
    description:
      "Application de gestion de notes de frais réalisée en cours avec Node.js, Express et MongoDB. J'ai pu m'entrainer à créer une application full-stack avec une base de données NoSQL et à gérer les routes et les requêtes HTTP, tout en utilisant un nouvel outil : Puppeteer.",
    link: "https://github.com/Jillian-973/Note-de-frais-",
    stack: ["html5", "css3", "ejs", "nodejs", "express", "puppeteer", "mongodb", "github"],
  },
  9: {
    image: "img/invoice-generator.png",
    title: "Invoice Generator",
    description:
      "Application de génération de factures réalisée lors d'un projet personnel avec Node.js, Express et Puppeteer. C'était la première fois que je touchais vraiment au back-end et j'ai beaucoup appris sur la gestion de serveur et la génération de PDF avec Puppeteer. Un projet réalisé pour générer les factures de mon activité de freelance.",
    link: "#",
    stack: ["html5", "css3", "ejs", "nodejs", "express", "puppeteer", "github"],
  },
  10: {
    image: "img/mesotes.png",
    title: "Mésotès",
    description:
      "Site de centralisation des activités destinées à aider des apprenants à valider leur certification RS6891. Réalisé lors d'un stage pour un formateur en IA, avec Vue.js et Tailwind CSS.",
    challenge:
      "Première expérience avec Vue.js et création d'un chatbot.",
    link: "https://mesotes.fr/",
    stack: ["vue", "tailwindcss", "javascript", "github"],
  },
  11: {
    image: "img/etabli.png",
    title: "L'Établi",
    description:
      "Site fictif pour un atelier de réparation de vélo et des ateliers participatifs de réparation, avec un système de réservation intégré via Calendly.",
    challenge:
      "Connecter et exploiter l'API Calendly, avec une première expérience en TypeScript et Nuxt.",
    link: "#",
    stack: ["nuxt", "vue", "typescript", "vercel", "tailwindcss", "nuxtui", "calendly", "github"],
  },
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

function setMenu(open) {
  navMenu.classList.toggle("active", open);
  hamburger.setAttribute("aria-expanded", String(open));
  hamburger.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
}

hamburger.addEventListener("click", () => {
  setMenu(!navMenu.classList.contains("active"));
});

// Fermer le menu au clic sur un lien
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

// Fermer le menu avec la touche Échap
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && navMenu.classList.contains("active")) {
    setMenu(false);
    hamburger.focus();
  }
});

// Animation de révélation au scroll
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document
  .querySelectorAll(
    ".skills-row, .project-card, .exp-card, .edu-item, .apropos-content"
  )
  .forEach((el) => {
    el.classList.add("reveal");
    revealObserver.observe(el);
  });

// Pop-up des projets
function openProjectPopup(projectId) {
  const project = projectsData[projectId];
  if (!project) return;

  const previouslyFocused = document.activeElement;

  const overlay = document.createElement("div");
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.setAttribute("aria-label", project.title);
  overlay.style.cssText = `
    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0, 0, 0, 0.7); display: flex; justify-content: center;
    align-items: center; z-index: 9999; padding: 20px; animation: fadeIn 0.3s;
    overscroll-behavior: contain;
  `;

  const popup = document.createElement("div");
  popup.style.cssText = `
    background: white; border-radius: 16px; max-width: 600px; width: 100%;
    max-height: 90vh; overflow-y: auto; box-shadow: 0 20px 60px rgba(0,0,0,0.4);
    position: relative; animation: slideUp 0.3s; overscroll-behavior: contain;
  `;

  const closeBtn = document.createElement("button");
  closeBtn.innerHTML = "&times;";
  closeBtn.setAttribute("aria-label", "Fermer");
  closeBtn.style.cssText = `
    position: absolute; top: 20px; right: 20px; background: white; border: none;
    width: 40px; height: 40px; border-radius: 50%; font-size: 28px; cursor: pointer;
    color: #333; box-shadow: 0 2px 10px rgba(0,0,0,0.2); z-index: 10; display: flex;
    align-items: center; justify-content: center;
    transition: transform 0.3s ease, background 0.3s ease;
  `;
  closeBtn.onmouseover = () => {
    closeBtn.style.transform = "rotate(90deg)";
    closeBtn.style.background = "#f0f0f0";
  };
  closeBtn.onmouseout = () => {
    closeBtn.style.transform = "rotate(0deg)";
    closeBtn.style.background = "white";
  };

  const img = document.createElement("img");
  img.src = project.image;
  img.alt = project.title;
  img.style.cssText = `
    width: 100%; height: 300px; object-fit: cover; border-radius: 16px 16px 0 0;
  `;

  const content = document.createElement("div");
  content.style.cssText = `padding: 30px;`;

  const titleEl = document.createElement("h2");
  titleEl.textContent = project.title;
  titleEl.style.cssText = `margin: 0 0 15px 0; font-size: 28px; color: #222; font-weight: 700;`;

  // Logos de la stack
  const stackContainer = document.createElement("div");
  stackContainer.style.cssText = `display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 20px;`;
  (project.stack || []).forEach((slug) => {
    const data = STACKS[slug];
    if (!data) return;
    const chip = document.createElement("span");
    chip.style.cssText = `
      display: inline-flex; align-items: center; gap: 8px; background: #f4f4f4;
      border: 1px solid #e9e9ec; border-radius: 10px; padding: 7px 13px 7px 10px;
      font-size: 14px; font-weight: 500; color: #333;
    `;
    const logo = document.createElement("img");
    logo.src = data[0];
    logo.alt = data[1];
    logo.style.cssText = `width: 20px; height: 20px; object-fit: contain;`;
    const label = document.createElement("span");
    label.textContent = data[1];
    chip.appendChild(logo);
    chip.appendChild(label);
    stackContainer.appendChild(chip);
  });

  const descEl = document.createElement("p");
  descEl.textContent = project.description;
  descEl.style.cssText = `margin: 0 0 25px 0; font-size: 16px; line-height: 1.7; color: #555;`;

  const linkEl = document.createElement("a");
  linkEl.href = project.link;
  linkEl.textContent = "Voir le projet";
  linkEl.target = "_blank";
  linkEl.rel = "noopener";
  linkEl.style.cssText = `
    display: inline-block; background: linear-gradient(135deg, #ff6b35 60%, #333 100%);
    color: white; padding: 14px 32px; text-decoration: none; border-radius: 8px;
    font-weight: 600; transition: transform 0.3s ease, box-shadow 0.3s ease; box-shadow: 0 4px 15px rgba(255,107,53,0.4);
  `;
  linkEl.onmouseover = () => {
    linkEl.style.transform = "translateY(-2px)";
    linkEl.style.boxShadow = "0 6px 20px #ff6b35";
  };
  linkEl.onmouseout = () => {
    linkEl.style.transform = "translateY(0)";
    linkEl.style.boxShadow = "0 4px 15px rgba(255,107,53,0.4)";
  };

  content.appendChild(titleEl);
  content.appendChild(stackContainer);
  content.appendChild(descEl);

  // Panneau "Le défi" du projet (style avertissement)
  if (project.challenge) {
    const challengeBox = document.createElement("div");
    challengeBox.style.cssText = `
      display: flex; align-items: flex-start; gap: 14px;
      background: #fff7ed; border: 1px solid #fed7aa; border-left: 4px solid #ff6b35;
      border-radius: 12px; padding: 16px 18px; margin: 0 0 25px 0;
    `;
    const icon = document.createElement("span");
    icon.setAttribute("aria-hidden", "true");
    icon.style.cssText = `flex-shrink: 0; line-height: 0; margin-top: 1px;`;
    icon.innerHTML = `<svg viewBox="0 0 24 24" width="24" height="24" fill="#ff6b35"><path d="M12 2 1 21h22L12 2zm0 6a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1zm0 9.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z"/></svg>`;
    const textWrap = document.createElement("div");
    const challengeTitle = document.createElement("p");
    challengeTitle.textContent = "Le défi";
    challengeTitle.style.cssText = `margin: 0 0 4px 0; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: #ff6b35;`;
    const challengeText = document.createElement("p");
    challengeText.textContent = project.challenge;
    challengeText.style.cssText = `margin: 0; font-size: 15px; line-height: 1.6; color: #7c4a1e;`;
    textWrap.appendChild(challengeTitle);
    textWrap.appendChild(challengeText);
    challengeBox.appendChild(icon);
    challengeBox.appendChild(textWrap);
    content.appendChild(challengeBox);
  }

  content.appendChild(linkEl);

  popup.appendChild(closeBtn);
  popup.appendChild(img);
  popup.appendChild(content);
  overlay.appendChild(popup);

  if (!document.getElementById("popup-anim")) {
    const style = document.createElement("style");
    style.id = "popup-anim";
    style.textContent = `
      @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      @keyframes fadeOut { from { opacity: 1; } to { opacity: 0; } }
      @keyframes slideUp {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `;
    document.head.appendChild(style);
  }

  const onKeydown = (e) => {
    if (e.key === "Escape") closePopup();
  };

  const closePopup = () => {
    document.removeEventListener("keydown", onKeydown);
    overlay.style.animation = "fadeOut 0.3s";
    setTimeout(() => overlay.remove(), 300);
    // Rendre le focus à l'élément qui a ouvert la modale
    if (previouslyFocused && typeof previouslyFocused.focus === "function") {
      previouslyFocused.focus();
    }
  };
  closeBtn.onclick = closePopup;
  overlay.onclick = (e) => {
    if (e.target === overlay) closePopup();
  };
  document.addEventListener("keydown", onKeydown);

  document.body.appendChild(overlay);
  // Déplacer le focus dans la modale
  closeBtn.focus();
}

// Initialiser les événements sur les cartes de projet (souris + clavier)
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".project-card").forEach((card) => {
    const id = card.getAttribute("data-project");
    const title = card.querySelector("h3");
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute(
      "aria-label",
      "Voir le projet " + (title ? title.textContent.trim() : "")
    );
    const open = () => openProjectPopup(id);
    card.addEventListener("click", open);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        open();
      }
    });
  });
});
