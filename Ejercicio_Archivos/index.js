const fs = require("node:fs");

console.log("Voy a leer los archivos de manera ordenada:");

fs.readFile("./archivo1.txt", "utf-8", (err, data) => {
  //archivo 1
  if (err) {
    console.log("error al leer el archivo 1");
  } else {
    console.log("contenido del archivo 1:", data);
    console.log("terminé de leer el archivo 1");

    fs.readFile("./archivo2.txt", "utf-8", (err, data) => {
      //archivo 2
      if (err) {
        console.log("error al leer el archivo 2");
      } else {
        console.log("contenido del archivo 2:", data);
        console.log("terminé de leer el archivo 2");

        fs.readFile("./archivo3.txt", "utf-8", (err, data) => {
          //archivo 3
          if (err) {
            console.log("error al leer el archivo 3");
          } else {
            console.log("contenido del archivo 3:", data);
            console.log("terminé de leer el archivo 3");

            fs.readFile("./archivo4.txt", "utf-8", (err, data) => {
              //archivo 4
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
