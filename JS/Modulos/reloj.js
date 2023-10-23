const d = document;
export function relojDigital(selector,inicioBtn,pausaBtn) {
let clock;
d.addEventListener("click", e=>{
    if(e.target.matches(inicioBtn)){
    clock = setInterval(()=>{
        let date = new Date();
        let hora = date.getHours();
        let min = date.getMinutes();
        let sec = date.getSeconds();
        let time;
        if (hora > 12) {
            hora= hora - 12;
            time= (`pm`)
        } else {
            time= (`am`)
        }

        if(hora < 10){
            hora= (`0${hora}`);
        }

        if(min < 10){
        min= (`0${min}`);
        }

        if(sec < 10){
            sec= (`0${sec}`);
        }
        d.querySelector(selector).innerHTML= `${hora}:${min}:${sec} 
        ${time}`
        },1000);
    
        e.target.disabled= true;
    }
    
    if(e.target.matches(pausaBtn)){
    clearInterval(clock);
    d.querySelector(inicioBtn).disabled= false;
    }
    })
}