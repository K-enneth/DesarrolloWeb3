async function obtenerDatosDelJSON() {
    const $materias = document.getElementById("materias");

let html = "";

try {
    let res = await fetch("JS/mat.json");


    if (!res.ok) {
    throw "Error al acceder al archivo JSON";
    }

    let json = await res.json();


    json.materias.forEach((el) => {
    html += `
        <div >
        <h4>${el.nombre}</h4>
        <h5>${el.docente}</h5>
        <p>${el.desc}</p>
        <br></br>
        </div>
    `;
    });

    $materias.innerHTML = html;
} catch (error) {
    console.warn(error);
}
}

obtenerDatosDelJSON();