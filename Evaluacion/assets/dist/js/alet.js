let nc, c, co, cco, n

form1.addEventListener("submit", (e)=>{
    e.preventDefault();
    leer_datos();
    

})

function leer_datos(){
    nc = document.getElementById("nc").value
    c = document.getElementById("c").value
    co = document.getElementById("co").value
    cco = document.getElementById("cco").value
    n = document.getElementById("n").value
    enviarData();
}

function enviarData(){

    document.getElementById("nc").value = nc 
    document.getElementById("c").value = c
    document.getElementById("co").value = co
    document.getElementById("cco").value = cco
    document.getElementById("n").value = n

}
