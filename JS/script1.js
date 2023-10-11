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