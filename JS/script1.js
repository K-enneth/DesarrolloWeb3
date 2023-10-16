const $nombre = document.getElementById("nombre");
$nombre.innerHTML = "Kenny Álvarez del Castillo Nava";
$nombre.style.textAlign = "center";
$nombre.style.color = "white";
$nombre.style.backgroundColor = "black";
$nombre.style.borderRadius = "1rem";

const $imagen = document.querySelector("img");
$imagen.style.borderRadius = "50%";
$imagen.style.filter = "brightness(50%)"
$imagen.style.transform = "rotate(-30deg)";

const $bio = document.getElementById("bio");
$bio.innerHTML = "Tengo 20 años, soy estudiante en desarrollo de videojuegos, me gustan los Jojo's y Yakuza, ya no se que más aaaa";
$bio.style.color = "purple";
$bio.style.textAlign = "center";
$bio.style.fontSize = "20px";

const $pasatiempos = document.getElementById("pasatiempos");
$pasatiempos.style.color = "yellow";
$pasatiempos.style.backgroundColor = "black";
$pasatiempos.style.padding = "2rem";

$pasatiempos.innerHTML = `
<li> Jugar videojuegos </li>
<li> Dibujar </li>
<li> Ver series </li>
<li> Hacer ejercicio </li>
`;

const $sociales = document.getElementById("sociales");
$sociales.style.color = "palegreen";
$sociales.style.backgroundColor = "black";
$sociales.style.padding = "2rem";

$sociales.innerHTML = `
<li> Twitter: @K_ennethh </li>
<li> Instagram:@k.vnnys </li>
<li> Correo: alcanamay@gmail.com </li>
<li> Número: 557879173 </li>
`

const $evento = document.getElementById("eventos");
$evento.innerHTML= "Eventos";

const $boton1 = document.getElementById("boton1");
$boton1.innerHTML= "Boton 1"

function colores(e) {
alert("Has presionado el primer boton");
e.target.style.backgroundColor = "black";
e.target.style.color = "red";
e.target.innerText = "Cambiaste mi color";
}

$boton1.addEventListener("click",colores);

const $boton2 = document.getElementById("boton2");
$boton2.innerHTML= "Presioname dos veces"

$boton2.addEventListener("dblclick", function(e){
alert(`El evento que has ejecutado es de tipo: ${e.type}`);
e.target.style.backgroundColor = "pink";
e.target.style.color = "black";
e.target.innerText = "Me presionaste dos veces"
})

const $radioThemes = document.querySelectorAll("input[name='theme']");
console.log($radioThemes);


document.addEventListener("click", (e) => {
console.log(e.target.matches("input[name='theme']"));
if (!e.target.matches("input[name='theme']")) return false;

$themeCSS = document.querySelector("#theme");
$themeCSS.href = e.target.dataset.theme;
alert(`Has activado el tema: ${e.target.dataset.name}`);
});