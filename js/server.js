import http from 'http';
import path from 'path';
import fs from 'fs';

const port = 3000;

const server = http.createServer((req,res)=>{
    console.log("petición recibida: ", req.url)
})

server.listen(port, ()=>{
    console.log(`servidor activo en el puerto: http://localhost:${port}`)
})