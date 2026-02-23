const stacksList = document.querySelector('.stack-list');//Elemento que ficará as tags de habilidades
const relevanceList = document.querySelector('.progressbar-container');//Elemento que ficará a lista de barra de habilidades
//Lista de Habilidades
const techStack = {
  "Backend Node.js": [
    { name: "NodeJS", years: 4 },
    { name: "ExpressJS", years: 4 },
    { name: "NestJS", years: 1 },
    { name: "Socket.IO", years: 4 },
    { name: "Node ORMs (Sequelize, Prisma, TypeORM)", years: 3 },
  ],
  "Backend Python": [
    { name: "Python", years: 5 },
    { name: "Django", years: 3 },
    { name: "Django REST Framework", years: 2 },
    { name: "Flask", years: 4 },
    { name: "Python ORMs (SQLAlchemy)", years: 2 },
    { name: "Tkinter", years: 1 },
    { name: "Data / Automation (Pandas, NumPy, Matplotlib, Scikit-learn, TensorFlow, PIL, OpenCV, Selenium)", years: 1 },
  ],
  "Backend Rust": [
    { name: "Rust", years: 2 },
    { name: "Rust ORMs / Web (Diesel, Actix-Web, Rocket)", years: 1.5 },
    { name: "Serde", years: 2 },
    { name: "Tokio", years: 1 },
  ],
  "Frontend": [
    { name: "HTML", years: 4 },
    { name: "CSS", years: 4 },
    { name: "JavaScript", years: 4 },
    { name: "TypeScript", years: 3.4 },
    { name: "ReactJS", years: 4 },
    { name: "Next.js", years: 1 },
    { name: "Material - UI", years: 3 },
    { name: "Bootstrap", years: 3 },
  ],
  "DevOps & Tools": [
    { name: "Docker", years: 2 },
    { name: "CI/CD (GitHub Actions, GitLab CI)", years: 2 },
    { name: "Cloud (Google Cloud)", years: 1 },
    { name: "Panels (aaPanel, cPanel)", years: 3 },
    { name: "GIT", years: 4.6 },
    { name: "PM2", years: 3 },
    { name: "Linux", years: 13 },
    { name: "Windows", years: 20 },
    { name: "Databases (MySQL, PostgreSQL, MongoDB, SQLite)", years: 5 },
  ]
};
const showStacks = function (data) {
  // Calcula o maior tempo de experiência
  const maxYears = Math.max(
    ...Object.values(techStack)
      .flat()
      .filter(skill => !["Linux", "Windows"].includes(skill.name)) // Exclui Linux e Windows do cálculo
      .map(skill => skill.years + 0.5)
  );

  for (const [category, skills] of Object.entries(data)) {
    // Container da categoria
    const categoryContainer = document.createElement('div');
    categoryContainer.classList.add('stack-category-container');

    // Título da categoria
    const categoryTitle = document.createElement('h4');
    categoryTitle.classList.add('stack-category-title');
    categoryTitle.innerText = category;
    categoryContainer.append(categoryTitle);
    
    
    const separator = document.createElement('div');
    separator.classList.add('separator');
    categoryContainer.append(separator);

    // Ordena habilidades por anos de experiência
    skills.sort((a, b) => b.years - a.years);

    for (const skill of skills) {
      const percent = Math.min((skill.years / maxYears) * 100, 100);

      const progressItem = document.createElement('div');
      progressItem.classList.add('stack-progressbar');
      progressItem.innerHTML = `
        <label>${skill.name}</label>
        <div class="progress">
          <div class="progress-bar" role="progressbar" style="width: ${percent}%">
            <span class="progress-text">${skill.years} ${skill.years < 2 ? "ano" : "anos"}</span>
          </div>
        </div>`;

      categoryContainer.append(progressItem);
    }

    // Adiciona o container da categoria na lista principal
    stacksList.append(categoryContainer);
  }
};

showStacks(techStack);

