
var peliculas = [{nombre: "Totoro"}, {nombre: "JohnWick"},{nombre: "Fast&Furious6"},{nombre: "JurassicPark"},{nombre: "Jaws"}];


function render() {

}

function list() {
    var listado = document.getElementById("listado");
    listado.innerHTML = "";
    peliculas.forEach((p) =>{
        row(listado, p);
    });
}

function row(listado, p){
    var div = document.createElement("div");
    
    div.setAttribute("class", "col");
    div.setAttribute("colspan","1");
    /*
    var nombreLabel = document.createElement("label");
    nombreLabel.appendChild(document.createTextNode("pelicula"));
    */
    var peliImg = document.createElement("img");
    peliImg.setAttribute("src", "images/" + p.nombre + ".jpg");
    peliImg.setAttribute("class", "icon");
    
    //div.append(nombreLabel, peliImg);
    div.append(peliImg);
    listado.appendChild(div);
}

function loaded(event){
    list();
}

document.addEventListener("DOMContentLoaded", loaded);