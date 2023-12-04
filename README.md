# NODE
Entorno de ejecución orientado a servidores, no funciona con navegador
## Caracteristicas
* Concurrencia: Monohilo con entradas y salidas asíncronas.
* Motor V8: Creado por google, este convierte el js a código máquina de manera rapida.
* Módulos: Todo lo que no sea sintaxis de programación, son módulos.
* Orientado a eventos: Existe un bucle de eventos que se ejecuta constantemente. Esto permite que el código se comporte de forma reactiva ante cualquier evento.
### EventLoop
Es un proceso con un bucle que gestiona, de forma asíncrona, todos los eventos de la aplicación.
AL ser monohilo, si ocurre lgún error, esto parará todo el proceso. Es necesario hacer uso de manejo de errores para no parar el proceso.
![Alt text](image.png)

### Herramientas para ser más felices
* Nodemon: Es un proceso que verifica constantemente si existen cambios. Generalmente se usa en ambiente de desarrollo.

    1.-Instalación
    2.- ~$ npm install -g nodemon
    3.- ~$ nodemon ruta/entorno.js

* PM2: Herramienta ideal para producción, tiene un monton de herramientas.
    1.- ~$npm install pm2 -g
    2.- ~$ pm2 satart ruta/entorno.js
    3.- ~$ pm2 status => nos muestra los procesos.
    4.- ~$ pm2 logs => Muestra todos los logs que se van generando.
    5.- ~$ pm2 stop Nro.Proceso o id => Detiene el proceso en ejecución.



