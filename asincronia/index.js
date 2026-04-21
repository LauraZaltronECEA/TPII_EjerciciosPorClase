const { rejects } = require("node:assert");
const fs = require("node:fs");

console.log("Voy a leer los archivos de manera ordenada:");

//Async / Await. 
//Siempre van JUNTOS. si una funct tiene un async,
//al momento de llamar a la funcion, se utiliza un await antes.
//Escribo la funcion pero le pongo async antes.
async function leerArchivo(archivo){
  return new Promise((resolve, reject) => {
    fs.readFile(archivo, "utf-8", (err,data) =>{
      if(err){
        reject()
      }else{
        resolve(data)
      }  
    })
  })
}
//Siempre los await los tenemos que llamar dentro de una funcion tambien async.
async function leerTodosArchivos() {
    for(let i = 1; i <= 4; i++){
        let data = await leerArchivo('./archivo' + i + '.txt') //Utilizo await antes de llamar la funcion
        console.log(data)
    }       
}

leerTodosArchivos()


//Promesas
//Recibimos 2 funciones, una cuando la promesa se cumple, y otra cuando no se cumple(cuando recibimos un error.)

function leerArchivo(archivo){
  return new Promise((resolve, reject) => { //params obligatorios, usualmente llamados resolve y reject.
    fs.readFile(archivo, "utf-8", (err,data) =>{//pasamos el fs.readFile con nuestro archivo
      if(err){//si error(La promesa no se cumple)
        reject()//acciona el reject
      }else{//si no error (La promesa se cumple)
        resolve(data)//acciona el resolve con lo que le pases de data.(en este caso, contenido del archivo)
      }  
    })
  })
}

function resolvePromesa(data, archivo, proximoArchivo){
  console.log(data)
  console.log("Termine de leer el " + archivo)
  if (proximoArchivo){
    return leerArchivo(proximoArchivo)
  }
}

leerArchivo("./archivo1.txt")//Esto devuelve la PROMESA
  .then(data =>{
  return resolvePromesa(data, "archivo 1", "./archivo2.txt")
})
  .then(data =>{
  return resolvePromesa(data, "archivo 2", "./archivo3.txt")
})   
  .then(data =>{
  return resolvePromesa(data, "archivo 3", "./archivo4.txt")
})   
  .then(data =>{
  return resolvePromesa(data, "archivo 4", null)
})   


//callback hell
fs.readFile("./archivo1.txt", "utf-8", (err, data) => {
  //archivo 1
  if (err) {
    console.log("error al leer el archivo 1");
  } else {
    console.log("contenido del archivo 1:", data);
    console.log("terminé de leer el archivo 1");

    //archivo 2
    fs.readFile("./archivo2.txt", "utf-8", (err, data) => {
      
      if (err) {
        console.log("error al leer el archivo 2");
      } else {
        console.log("contenido del archivo 2:", data);
        console.log("terminé de leer el archivo 2");
        
        //archivo 3
        fs.readFile("./archivo3.txt", "utf-8", (err, data) => {
          
          if (err) {
            console.log("error al leer el archivo 3");
          } else {
            console.log("contenido del archivo 3:", data);
            console.log("terminé de leer el archivo 3");

            //archivo 4
            fs.readFile("./archivo4.txt", "utf-8", (err, data) => {
              
              if (err) {
                console.log("error al leer el archivo 4");
              } else {
                console.log("contenido del archivo 4:", data);
                console.log("terminé de leer el archivo 4");
              }
            });
          }
        });
      }
    });
  }
});
