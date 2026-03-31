Clase 2 31/03/2026
La idea de este año es armar una app que sea
Cliente - Sevidor
y que este cuatrimestre nos dedicamos en el SERVIDOR. (Backend)
Para lograr la comunicacion entre el c y s, se necesita un protocolo.
Un protocolo es un contrato definido previamente, que se conoce de ambos lados, 
Cuando el cliente necesite algo del servidor, el protocolo le dice de la manera que debe hacerlo y viceversa.
Nuestro Backend se desarrolla en Node. 
Y la parte del Cliente, React.
Clase 4 arrancamos el Servidor.

Protocolo:
'HTTP' -> Permite la comunicacion entre cliente y servidor.
Ventajas: Es un protocolo simple.
Ejemplo: Web Cinemark -> f12/inspeccionar/devtools -> Netwrork -> (filter) fetch/XHR (muestra las peticiones que el cliente le realiza al servidor.)
https://bff.cinemark.com.ar/api/cinema/theaters?limit=9007199254740991
api del cinemark que muestra las sucursales de los cines.

Cliente               <  -  >           Servidor:
.                                       Endpoint        -Base de Datos
|                                               |
.                   -                      Response:
Request:                                     Codigo
    Metodos:                                 Headers
        GET -> Otorgar la informacion        Body: JSON
        POST -> Crear
        PUT -> Modificar
        DELETE -> Eliminar
    Headers
    Body: JSON

200 Codigo de q esta todo bien
Códigos de error:
404 Not Found
400 Bad Request
500 Internal Server Error
etc…	

Servidor:
Ubuntu → Alpine → app

