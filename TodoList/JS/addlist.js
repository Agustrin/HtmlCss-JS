let task= 0;
let pentask= 0;
const input = document.querySelector('input[type="text"]');

function addtask(){
    task+=1;
    pentask+= 1;
    let texttask= input.value;

    list.innerHTML += `
    <div class="task" id="${task}">
        <label><input type="checkbox"> ${texttask}</label>
        <img src="../Multimedia/x.png" alt="deletetask">
    </div>`
    input.value='';
    checkcon();
}
function checkcon() {
    let checkbox= list.querySelectorAll('input[type="checkbox"]:checked');
    pentask= (list.querySelectorAll('input[type="checkbox"]').length)-(checkbox.length) 
    con.innerHTML = `<p>Tareas pendientes: ${pentask}  Tareas completadas: ${checkbox.length}</p>`
}
function deletetask(id) {
    let deletet = document.getElementById(id);
    list.removeChild(deletet);
    pentask--;
    checkcon();
}

newtask.addEventListener('submit', addtask);
list.addEventListener('click', (event)=>{
    //console.log(event); pointer event
    if(event.srcElement.nodeName == 'INPUT') {
        checkcon();
    } else if(event.srcElement.nodeName == 'IMG') {
        deletetask(event.srcElement.parentNode.id);
    }
});