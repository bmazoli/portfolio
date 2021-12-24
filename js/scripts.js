/*declaro las variables*/ 
const toggleTheme=document.getElementById('toggle-theme');
const toggleIcon=document.getElementById('toggle-icon');
const toggleText=document.getElementById('toggle-text'); 
const toggleColors=document.getElementById('toggle-colors');

/* en rootstyle traigo todas las variables de mi archivo css
    y a traves de rootstyle cambiamos el color */
const rootStyle = document.documentElement.style;
/*ahora escuchamos los clics dentro de theme, y cuando pase 
eso le cambiamos la clase al body, y cambiamos el icono al sol y el texto*/

toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark");
if (toggleIcon.src.includes("moon.svg")) {
    toggleIcon.src = "assets/icons/sun.svg";
    toggleText.textContent = "Light Mode";
} else{
    toggleIcon.src = "/assets/icons/moon.svg";
    toggleText.textContent = "Dark Mode";
}

});

toggleColors.addEventListener("click", (e) => {
 rootStyle.setProperty("--primary-color", e.target.dataset.color);
});

