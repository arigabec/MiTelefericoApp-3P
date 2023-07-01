# Aplicación de información del Teleférico de La Paz 🚠

Estudiantes: Ariane Garrett y Ambar Rojas

## Resumen
El siguiente proyecto posee:

* Una pantalla inicial donde puede acceder a la información de cada linea que posee el Teleferico de La Paz y la sección de eventos.
  
* Si selecciona cualquiera de las lineas accederá a otra pantalla con información de la linea tal sea:
    * Mapa de Ruta
    * Horarios
    * Estado de la línea (activa o en mantenimiento)
    * Tiempo de llegada de la siguiente cabina

 * A su vez, posee una pagina donde podrá realizar una busqueda por zonas donde se verán las lineas del teleférico disponibles.

 * Cuenta con un buzón de sugerencias donde el usuario puede escribir su queja, otorgando su correo electrónico y su mensaje a enviar.


## Video explicativo
El link donde se encuentra el video explicativo del parcial es el siguiente:
https://drive.google.com/drive/folders/10Z6b_TXVZiRfo8-VW1ZzOKse6AUq0InH?usp=sharing

## Primeras configuraciones
Para iniciar el proyecto, debemos clonar el repositorio con el siguiente comando:

```bash
git clone https://github.com/arigabec/MiTelefericoApp-3P.git
```
Una vez obtenido el proyecto completo debemos ejecutar los siguientes comandos en la rama *main*, en la carpeta donde clonamos el proyecto,
ya que ahí se encuentra el contenido de la página.

### Instrucciones para instalar el proyecto - parte frontend
Ejecutar los siguientes comandos para levantar el frontend:

```
cd .\mi-teleferico-frontend\
npm install
npm run dev
```

### Instrucciones para instalar el proyecto - parte backend
Ejecutar los siguientes comandos para levantar el backend:

```
cd .\mi-teleferico-backend\
npm install
npm i @strapi/strapi // en caso de que tenga fallas las instalación
npm run develop
```

## Desarrollo
Para poder trabajar en el proyecto adecuadamente se utilizó Vite + React.js para poder visualizar la página en funcionamiento y Material UI para darle estilos a la misma. Además, la base de datos se encuentra hosteada en Strapi, y contiene la información de las líneas y eventos, y también almacena las sugerencias enviadas por los usuarios.

### React Router DOM
Se utilizó el enrutador para definir las rutas de cada página, en este caso

- /info: nos redirige a la página principal del proyecto, donde se encuentran las líneas del teleférico y los eventos del momento.
- /buscar: nos redirige a la página de búsqueda por zonas y de buzón de sugerencias.
- /linea: nos redirige a la página informativa de cada línea.
- /mapa: nos redirige a la página donde podemos ver el mapa completo de líneas, además de anuncios sobre las mismas. 

### React Hook Form
Se utilizó React Hook Form para la validación de campos a la hora de enviar una sugerencia, de forma que siempre sea requerido ingresar el correo del usuario además del mensaje a enviar.

### Strapi
Se utilizó Strapi para hostear la base de datos que contiene la informacións sobre:
- Líneas → nombre, zona, duración, logo, imagen
- Evento → titulo, descripcion, imagen
- Sugerencia → correo, mensaje

Para poder ejecutar la base de datos de manera correcta, se debe crear el archivo .env dentro de la carpeta de backend, y copiar el siguiente código dentro de este archivo:

```
HOST=0.0.0.0
PORT=1337
APP_KEYS=CAail87v4mPtFGdNkGv9Ng==,SzSHbhPeUJuoJ38KX/8OVg==,285oeUvhlvSN4lQtTDpHAQ==,WW+svYa65116Q+0+zvDmzA==
API_TOKEN_SALT=YoiIxtI0roWLu4fZqKdKCA==
ADMIN_JWT_SECRET=QcKsUHV/uDh2Ju44pr3Y3Q==
TRANSFER_TOKEN_SALT=LwVEFTlI6D+jXY8SCxL84w==
# Database
DATABASE_CLIENT=postgres
DATABASE_HOST=dpg-cicsr8h8g3n04mf877h0-a.oregon-postgres.render.com
DATABASE_PORT=5432
DATABASE_NAME=dbecommerce_be7h
DATABASE_USERNAME=arigabec
DATABASE_PASSWORD=DyqGLtnTapJJgwV4301oXGtKGlTnCZdX
DATABASE_SSL=true
JWT_SECRET=BtU9y7F1ATlGaSQ4GeqbRg==
```

### API && Axios
Para poder trabajar con ciertos componentes del proyecto, se utilizaron los métodos:
- GET, que permite obtener datos de la base hosteada en Strapi y poder mostrar información de la página, por ejemplo, la información sobre las líneas y eventos.
- POST, que permite añadir datos a la base de datos, en este caso, guardar las sugerencias enviadas por los usuarios.

Para esto se utilizó el servicio de Axios que permite trabajar con ambos métodos de forma efectiva.