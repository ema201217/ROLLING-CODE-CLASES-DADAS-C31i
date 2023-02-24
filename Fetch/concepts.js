/* 
Los verbos HTTP GET, POST, PUT, PATCH y DELETE son utilizados para realizar operaciones en recursos de una aplicación web a través de la comunicación con un servidor web.

GET: Este verbo se utiliza para solicitar información de un recurso específico al servidor. Al hacer una solicitud GET, el servidor envía los datos solicitados al cliente. Este verbo no modifica ni actualiza el estado del recurso solicitado.

POST: El verbo POST se utiliza para enviar datos al servidor para crear un nuevo recurso. Cuando se realiza una solicitud POST, el servidor crea un nuevo recurso con los datos enviados por el cliente.

PUT: Este verbo se utiliza para actualizar un recurso existente. Cuando se realiza una solicitud PUT, el cliente envía datos que se utilizan para actualizar el recurso existente en el servidor.

PATCH: El verbo PATCH se utiliza para actualizar una parte específica de un recurso. Cuando se realiza una solicitud PATCH, el cliente envía datos que se utilizan para actualizar solo la parte especificada del recurso existente en el servidor.

DELETE: Este verbo se utiliza para eliminar un recurso existente en el servidor. Cuando se realiza una solicitud DELETE, el servidor elimina el recurso solicitado por el cliente.
*/

const updatePokemon = {
  name: "pikachu",
  habilidad: "electrico",
  imagen: ["https://img.com/pikachu", "https://img.com/pikachu2"],
};

fetch("https://pokeapi.co/api/v2/pokemon/1", {
  method: "PATCH",
  body: JSON.stringify(newPokemon),
  headers: {
    "Content-Type":"application/json"
  }
});
