const http = require('node:http')
const productos = require('./productos')

const server = http.createServer((request,response) => {
    if (request.method === 'GET'){
        processGet(request, response)
    }else if (request.method === 'POST'){
        processPOST(request,response)
    }else{
        response.statusCode = 501
        response.end('Metodo no implementado')
    }
    //response.end('servidor desarrollado con modulo nativo http')
})

function processPOST(request, response){ //se prueba en postman
    if (request.url === '/productos'){
        let body = ''
        require.on('data', content => { //content son las distintas partes que van llegando del body
            body += content
        })

        request.on('end', () =>{
            body = JSON.parse(body)
            productos.infoProductos.productos.push(body)
            response.statusCode = 201
            response.end(JSON.stringify(body))
        })
    }
}

function processGet(request, response){
    if (request.url === '/'){
        response.end('servidor desarrollado con modulo nativo http')
    } else if (request.url === '/productos'){
        response.end(JSON.stringify(productos.infoProductos.productos))
    } else if (request.url.startsWith('/productos/')){
        const partesPath = request.url.split('/')
        const idProducto = partesPath[2]
        const producto = productos.infoProductos.productos.find(p => p.id == idProducto)
        if (producto){
            response.end(JSON.stringify(producto))
        }else{
            response.statusCode = 404
            response.end(`El id ${producto} no existe.`)
        }
    } else {
        response.statusCode = 404
        response.end(`El path ${request.url} no existe`)
    }
}

const port = 3000
server.listen(port,() =>{
    console.log(`servidor escuchando en el puerto ${port}`)
})
