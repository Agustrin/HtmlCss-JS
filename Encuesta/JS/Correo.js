const form = document.getElementById('form');
const p2 = document.getElementById('p2');
const p4 = document.getElementById('p4');
const p5 = document.getElementById('p5');
const p10 = document.getElementById('p10');
let p2array = [];
let p4array = [];
let p5array = [];
let p10array = [];

function check(event) {
    if(event.srcElement.localName != "input" || event.srcElement.localName == "label") {
        return;
    }
    if(event.srcElement.name=="p2") {
        if(event.srcElement.checked && !p2array.includes(event.srcElement.defaultValue)) {
            p2array.push(event.srcElement.defaultValue);
        } else {
            p2array.splice(p2array.indexOf(event.srcElement.defaultValue),1);
        }
    } else if(event.srcElement.name=="p4") {
        if(event.srcElement.checked && !p4array.includes(event.srcElement.defaultValue)) {
            p4array.push(event.srcElement.defaultValue);
        } else {
            p4array.splice(p4array.indexOf(event.srcElement.defaultValue),1);
        }
    } else if(event.srcElement.name=="p5") {
        if(event.srcElement.checked && !p5array.includes(event.srcElement.defaultValue)) {
            p5array.push(event.srcElement.defaultValue);
        } else {
            p5array.splice(p5array.indexOf(event.srcElement.defaultValue),1);
        }
    } else if(event.srcElement.name=="p10") {
        if(event.srcElement.checked && !p10array.includes(event.srcElement.defaultValue)) {
            p10array.push(event.srcElement.defaultValue);
        } else {
            p10array.splice(p10array.indexOf(event.srcElement.defaultValue),1);
        }
    }
}

p2.addEventListener('click', (event) => {check(event);});
p4.addEventListener('click', (event) => {check(event);});
p5.addEventListener('click', (event) => {check(event);});
p10.addEventListener('click', (event) => {check(event);});

form.addEventListener('submit', e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    console.log(data.p2);
    window.location.href=`mailto:agustrin.najarro@gmail.com.to?
    subject=isme&body=nombre%3A%20${data.nombre}%0Aapellido%3A%20${data.apellido}%0Acorreo%3A%20${data.correo}%0A%0Arespuestas%3A%20%0Ap1%3A%20${data.p1}%0Ap2%3A%20${p2array}%0Ap3%3A%20${data.p3}%0Ap4%3A%20${p4array}%0Ap5%3A%20${p5array}%0Ap6%3A%20${data.p6}%0Ap7%3A%20${data.p7}%0Ap8%3A%20${data.p8}%0Ap9%3A%20${data.p9}%0Ap10%3A%20${p10array}`
});

