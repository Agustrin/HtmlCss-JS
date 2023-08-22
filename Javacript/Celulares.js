class Celular {
    constructor(color,peso,rdp,rdc,ram) {
        this.color=color;
        this.peso=peso;
        this.rdp=rdp;
        this.rdc=rdc;
        this.ram=ram;
        this.encapa=false;
    }
    prender() {
        if(this.encapa == false) {
            document.write("telefono encendido <br>");
            this.encapa=true;
        } else {
            document.write("este telefono ya esta encendido<br>");
        }
    }
    apagar() {
        if(this.encapa == true) {
            document.write("telefono apagado <br>");
            this.encapa=false;
        } else {
            document.write("este telefono ya esta apagado<br>");
        }
    }
    reiniciar() {
        if (this.encapa) {
            document.write("telefono reiniciado<br>");
        } else {
            document.write("el telefono esta apagado<br>");
        }
    }
    camara() {
        document.write(`foto tomada con resolucion
        ${this.rdc} <br>`);
    }
    grabar() {
        document.write(`video grabado con resolucion
        ${this.rdc} <br>`);
    }
    info() {
        return `Telefono de color <b>${this.color}</b> con un peso de <b>${this.peso}g</b><br>, 
        una resolucion de pantalla de <b>${this.rdp}p</b> <br>y camara con resolucion <b>${this.rdc}</b>  y 
        <b>${this.ram}GBs</b> de ram <hr>`
    }
}

let telefono1 = new Celular("red",150,6,"hd",8);
let telefono2 = new Celular("blue",200,4,"full hd 4k",12);
let telefono3 = new Celular("black",130,5,"baja",4);

document.write(telefono1.info());
document.write(telefono2.info());
document.write(telefono3.info());