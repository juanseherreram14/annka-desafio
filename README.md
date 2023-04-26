Desafio Annka 

Para correr el entorno de desarrollo:
 
 instalar Node.js (version v16.14.0 o version LTS ) de la pagina nodejs.org
 
 clonar este repositorio
 
 --------------------------------
 Instalacion de dependencias: 
 para frontend: cd desafio-annka && yarn install o npm install 
 
 para backend: cd back-end && yarn install o npm install 
  
 ----------------------------------
 Correr ambos entornos:
 
 para frontend:yarn run start o npm start 
 
 para backend: cd back-end &&  npx ts-node-dev server.ts
 
 -------------------------------------
 para correr la BD mongoDB:
 $ brew install mongodb-community@5.0
 
 $ sudo mkdir -p /data/db
 
 $ sudo chown -R `id -un /data/db 
 
 $ brew services start mongodb-community@5.0
 
 $ mongo 
 
 
 esto iniciara la base de datos, que es donde se almacenara la informacion de la aplicacion.
 
 ----------------------------------------------------------------------------------------------
 
 a cada tarjeta de pokemon se le puede dar click, para ver los detalles de ese pokemon especifico.
 a cada pokemon se lo puede almacenar en la pokedex dando guardar
 en la parte superior se puede buscar a un pokemon especifico por nombre o numero. 
 en la pokedex se puede eliminar pokemons especificos. 
 
 
 
 
 
 

