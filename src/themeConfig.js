const themeConfig = document.querySelector(".themeconfig");
const themeSetter = document.querySelector("#themeset button");
themeSetter.addEventListener("click", function () {themeSet(window.localStorage.getItem("theme")); });
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && window.localStorage.getItem("theme") === null) {
    themeConfig.setAttribute("href","assets/styles/themeDark.css");
    window.localStorage.setItem("theme","dark")
}else if(window.localStorage.getItem("theme")==="dark"){
    themeConfig.setAttribute("href","assets/styles/themeDark.css");
    window.localStorage.setItem("theme","dark")
}else{
    themeConfig.setAttribute("href","assets/styles/themeLight.css");
    window.localStorage.setItem("theme","light")
}
function themeSet(theme){
    if (theme === "light"){
        themeConfig.setAttribute("href","assets/styles/themeDark.css");
        window.localStorage.setItem("theme","dark")
    }else{
        themeConfig.setAttribute("href","assets/styles/themeLight.css");
        window.localStorage.setItem("theme","light")
    }
}
