const d = document;
export function validaciones(form) {
const $form = d.querySelector(form),
    inputs = `${form} [required]`,
    $inputs = d.querySelectorAll(inputs);

$inputs.forEach((el) => {
    const $span = d.createElement("span");
    $span.id = `${el.name}-error`;
    $span.innerText = el.title;
    $span.classList.add("form-error", "none");
    el.insertAdjacentElement("afterend", $span);
});

d.addEventListener("input", (e) => {
    if (!e.target.matches(inputs)) return false;

    let $input = e.target,
    pattern = $input.pattern || $input.dataset.pattern,
    $inputError = d.getElementById(`${$input.name}-error`),
    condition;

    if (pattern) {
      //console.log("El input tiene patrón");
    let regex = new RegExp(pattern);
    condition = !regex.exec($input.value);
    } else {
      //console.log("El input NO tiene patrón pero es requerido");
    condition = $input.value === "";
    }

    return condition
    ? $inputError.classList.add("is-active")
    : $inputError.classList.remove("is-active");
});

$form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Enviando Formulario");

    let $loader = document.querySelector("#loader"),
    $message = document.querySelector("#form-message");

    $loader.classList.remove("d-none");
    setTimeout(() => {
    $loader.classList.add("d-none");
    $message.classList.remove("d-none");
    setTimeout(() => $message.classList.add("d-none"), 3000);
    }, 3000);
});
}