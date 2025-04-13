
// Auto highlight current nav link
document.addEventListener('DOMContentLoaded', () => {
  const currentPage = location.pathname.split("/").pop();
  document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
});




  // Toggle timeline visibility inside a career card
function toggleTimeline(cardBody) {
  const timeline = cardBody.querySelector('.timeline');
  if (timeline) {
    timeline.classList.toggle('d-none');
  }
}


// Language cards and modal functionality:

const languages = [
  {
    name: "Python",
    icon: '<i class="fab fa-python"></i>',
    description: "Python is a powerful high-level programming language. Ideal for data science, automation, and backend development.",
    links: [
      { name: "W3Schools", url: "https://www.w3schools.com/python/" },
      { name: "Codewars", url: "https://www.codewars.com" },
      { name: "Python Docs", url: "https://docs.python.org/3/" }
    ]
  },
  {
    name: "JavaScript",
    icon: '<i class="fab fa-js-square"></i>',
    description: "JavaScript is essential for web development. Used for frontend and backend with Node.js.",
    links: [
      { name: "W3Schools", url: "https://www.w3schools.com/js/" },
      { name: "Codewars", url: "https://www.codewars.com" },
      { name: "MDN", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" }
    ]
  },
  {
    name: "C++",
    icon: '<i class="fas fa-code"></i>',
    description: "C++ is widely used for system/software development and game engines.",
    links: [
      { name: "W3Schools", url: "https://www.w3schools.com/cpp/" },
      { name: "Codewars", url: "https://www.codewars.com" },
      { name: "TutorialsPoint", url: "https://www.tutorialspoint.com/cplusplus/index.htm" }
    ]
  }
];

let currentIndex = 0;

function renderLanguageCards() {
  const wrapper = document.getElementById("slider-wrapper");
  wrapper.innerHTML = "";

  languages.forEach((lang, index) => {
    const card = document.createElement("div");
    card.className = "language-card";
    card.innerHTML = `
      <div class="language-icon">${lang.icon}</div>
      <h5>${lang.name}</h5>
    `;
    card.addEventListener("click", () => openModal(lang));
    wrapper.appendChild(card);
  });

  updateSlider();
}

function updateSlider() {
  const wrapper = document.getElementById("slider-wrapper");
  const cardWidth = wrapper.children[0]?.offsetWidth + 20; // 20px margin
  wrapper.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

function openModal(language) {
  document.getElementById("modalTitle").textContent = language.name;
  document.getElementById("modalDescription").textContent = language.description;
  const links = language.links.map(link => `<a href="${link.url}" target="_blank" class="d-block mb-2">${link.name}</a>`).join('');
  document.getElementById("modalLinks").innerHTML = links;

  const modal = new bootstrap.Modal(document.getElementById('languageModal'));
  modal.show();
}

document.addEventListener("DOMContentLoaded", () => {
  renderLanguageCards();

  document.getElementById("nextBtn").addEventListener("click", () => {
    if (currentIndex < languages.length - 1) {
      currentIndex++;
      updateSlider();
    }
  });

  document.getElementById("prevBtn").addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });
});
// current-projects :


document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.project-card');
  const projectTitle = document.getElementById('project-title');
  const projectDescription = document.getElementById('project-description');

  const projectDetails = [
    {
      title: 'Project One',
      description: 'This is a placeholder description for Project One. Built using React and Firebase.'
    },
    {
      title: 'Project Two',
      description: 'This is a placeholder description for Project Two. Built using HTML, CSS, and JavaScript.'
    },

    {
      title: 'Project Three',
      description: 'This is a placeholder description for Project Three. Built using Node.js and Express.'
    }



  ];

  // Flip Card on Click
  cards.forEach((card, index) => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  });

  // Slider Controls
  const slider = document.querySelector('.project-slider');
  const nextBtn = document.querySelector('.slider-arrow.next');
  const prevBtn = document.querySelector('.slider-arrow.prev');

  let currentIndex = 0;

  function updateSlider() {
    const offset = currentIndex * slider.offsetWidth;
    slider.scrollTo({ left: offset, behavior: 'smooth' });
    projectTitle.textContent = projectDetails[currentIndex].title;
    projectDescription.textContent = projectDetails[currentIndex].description;
  }

  nextBtn.addEventListener('click', () => {
    if (currentIndex < cards.length - 1) {
      currentIndex++;
      updateSlider();
    }
  });

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });

  updateSlider();
});


// Completed Projects Data
const completedProjects = [
  {
    title: "Portfolio Website",
    summary: "A personal responsive portfolio built with HTML, CSS, and JS.",
    image: "img/Proj 1.jpg",
    github: "https://github.com/example/portfolio"
  },
  {
    title: "Weather App",
    summary: "A weather forecasting app using OpenWeatherMap API.",
    image: "img/Proj 2.jpg",
    github: "https://github.com/example/weather-app"
  },
  {
    title: "Todo List",
    summary: "A dynamic todo list with local storage support.",
    image: "img/Proj 3.jpg",
    github: "https://github.com/example/todo-list"
  }
];

let currentCompletedIndex = 0;
const completedCardStack = document.getElementById('completedCardStack');

function renderCompletedProject(index) {
  completedCardStack.innerHTML = ''; // Clear previous

  const project = completedProjects[index];

  const card = document.createElement('div');
  card.className = 'completed-project-card';

  card.innerHTML = `
    <div class="card-inner">
      <div class="card-front">
        <img src="${project.image}" alt="${project.title}">
        <button class="btn btn-outline-primary mt-3 flip-btn">Click for more</button>
      </div>
      <div class="card-back">
        <div>
          <h5>${project.title}</h5>
          <p class="small">${project.summary}</p>
        </div>
        <a href="${project.github}" target="_blank" class="btn btn-primary mt-3">View GitHub</a>
      </div>
    </div>
  `;

  completedCardStack.appendChild(card);

  // Flip button action
  card.querySelector('.flip-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    card.querySelector('.card-inner').classList.toggle('flipped');
  });

  // Update sidebar text
  document.getElementById('completedTitle').innerText = project.title;
  document.getElementById('completedSummary').innerText = project.summary;
}

document.getElementById('prevCompleted').addEventListener('click', () => {
  currentCompletedIndex = (currentCompletedIndex - 1 + completedProjects.length) % completedProjects.length;
  renderCompletedProject(currentCompletedIndex);
});

document.getElementById('nextCompleted').addEventListener('click', () => {
  currentCompletedIndex = (currentCompletedIndex + 1) % completedProjects.length;
  renderCompletedProject(currentCompletedIndex);
});

// Initial render
renderCompletedProject(currentCompletedIndex);
