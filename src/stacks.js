const stacksList = document.querySelector('.skill-list');//Elemento que ficará as tags de habilidades
const skillList = document.querySelector('.progressbar-container');//Elemento que ficará a lista de barra de habilidades
//Lista de Habilidades
const techStack = [
    {
        Language:"HTML",
        Skill:"80%"
    },
    {
        Language:"CSS",
        Skill:"80%"
    },
    {
        Language:"JavaScript",
        Skill:"70%"
    },
    {
        Language:"Python",
        Skill:"75%"
    },
    {
        Language:"PHP",
        Skill:"40%"
    },
    {
        Language:"Java",
        Skill:"50%"
    },
    {
        Language:"C#",
        Skill:"20%"
    },
    {
        Language:"ReactJS",
        Skill:"50%"
    },
    {
        Language:"NodeJS",
        Skill:"40%"
    },
    {
        Language:"Tkinter",
        Skill:"35%"
    },
    {
        Language:"Flask",
        Skill:"35%"
    },
    {
        Language:"Pandas",
        Skill:"60%"
    },
    {
        Language:"MySQL",
        Skill:"50%"
    },
    {
        Language:"WordPress",
        Skill:"80%"
    },
    {
        Language:"Bootstrap",
        Skill:"40%"
    },
    {
        Language:"Photoshop",
        Skill:"60%"
    },
    {
        Language:"GIMP",
        Skill:"70%"
    },
    {
        Language:"Linux",
        Skill:"70%"
    },
    {
        Language:"Windows",
        Skill:"65%"
    }

]

//Função que exibe as habilidades no HTML
const showStacks = function(data){
    //Para cada item da lista será criado as tags 
    for(const skill of data){
        let listItem = document.createElement('span');
        listItem.classList.add('skill-item');
        listItem.innerHTML = `${skill.Language}`;
        stacksList.append(listItem);
    }
    //Para cada item da lista de habilidades será criado as barras de progressos
    for(const skill of data){
        let listItem = document.createElement('div');
        listItem.classList.add('skill-progressbar');
        listItem.innerHTML =   `<label>${skill.Language}</label>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" aria-label="Basic example" style="width: ${skill.Skill}" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>`;

        skillList.append(listItem);
    }
}
showStacks(techStack);//Executa a função

