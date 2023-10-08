const userName = "MrHoss"; // Nome de usuário do GitHub
const maxPages = 2; // Número máximo de páginas do JSON do GitHub
const repositoryList = document.querySelector('.repository-list'); // ID ou classe do elemento que vai ficar a lista de repositórios
const loadingModel = document.querySelector("#repository-list-load"); // Elemento de carregamento enquanto não retorna a resposta do JSON

// Função que faz a leitura do JSON do GitHub
const getReposJson = async function () {
    let content = [];

    // Adicione os projetos diretamente ao objeto content
    content.unshift(
        {
            name: "Solubot",
            html_url: "/",//"https://solubot.com.br",
            description: "Sistema de multiatendimento desenvolvido em TypeScript, JavaScript, React e outras tecnologias.",
            language: "TypeScript",
        },
        {
            name: "devAPI",
            html_url: "/",//"https://dev.solubot.com.br/docs",
            description: "API para integração com WhatsApp.",
            language: "JavaScript",
        },
    );

    for (let i = 1; i <= maxPages; i++) {
        let apiGithub = await fetch(`https://api.github.com/users/${userName}/repos?&sort=pushed&per_page=100&page=${i}`);
        if (apiGithub.status == 200) {
            let data = await apiGithub.json();
            content = content.concat(data);
        }
    }

    showRepositories(content); // Chama a função que irá criar a apresentação em HTML para ficar visível no site
};
getReposJson();

// Apresentação dos dados do JSON no HTML
const showRepositories = function (data) {
    for (const repository of data) {
        loadingModel.style.display = 'none'; // Oculta o elemento de carregamento após o retorno do JSON
        let listItem = document.createElement('li');
        listItem.classList.add('repository');
        listItem.innerHTML = `<a href=${repository.html_url}><div>
            <h5>${repository.name}</h5>
            <div class="separator"></div>
            <span>${repository.description ?? ""}</span> <br/><br/>
            <span>${devicons[repository.language]/*Adiciona o ícone da respectiva linguagem */}</span> <br /></div>
            </a>`;
        repositoryList.append(listItem); // Adiciona o conteúdo do JSON ao objeto do HTML
    }
}

// Ícones das linguagens dos projetos
const devicons = {
    JavaScript: '<i class="devicon-javascript-plain devicon-icon"></i> Javascript',
    TypeScript: '<i class="devicon-typescript-plain devicon-icon"></i> Typescript',
    Python: '<i class="devicon-python-plain devicon-icon"></i> Python',
    Jinja: '<i class="devicon-python-plain devicon-icon"></i> Python',
    Java: '<i class="devicon-java-plain devicon-icon"></i> Java',
    HTML: '<i class="devicon-html5-plain devicon-icon"></i> HTML',
    CSS: '<i class="devicon-css3-plain devicon-icon"></i> CSS',
    PHP: '<i class="devicon-php-plain devicon-icon"></i> PHP',
    Rust: '<i class="devicon-rust-plain devicon-icon"></i> Rust',
    null: '<i class="devicon-markdown-original devicon-icon"></i> Markdown',
    undefined: ''
}
