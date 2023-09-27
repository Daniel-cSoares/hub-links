function toggleMode(){
    const html = document.documentElement
    const profile = document.querySelector("#profile img")
    if (html.classList.contains("light")){
        html.classList.remove("light")
        profile.setAttribute("src", "./assets/my_avatar.png")
    }
    else{
        html.classList.add("light")
        profile.setAttribute("src", "./assets/my_avatar_light.png")
    }
    // Faz a mesma coisa
    // html.classList.toggle("light")
}