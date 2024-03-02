# API de Gestión de Tareas

Esta es una API RESTful construida con Node.js y Express.js para gestionar tareas. Permite realizar operaciones CRUD (Crear, Leer, Actualizar y Borrar) sobre las tareas almacenadas en memoria.

## Rutas y Funcionalidades

- **Obtener todas las tareas**
  - Método: GET
  - Ruta: `/api/v1/tasks/getall`
  - Descripción: Devuelve todas las tareas almacenadas en el servidor.

- **Obtener una tarea por su ID**
  - Método: GET
  - Ruta: `/api/v1/tasks/getbyid/:id`
  - Descripción: Devuelve una tarea específica identificada por su ID.

- **Crear una nueva tarea**
  - Método: POST
  - Ruta: `/api/v1/tasks/new`
  - Descripción: Crea una nueva tarea con los datos proporcionados en el cuerpo de la solicitud.

- **Actualizar una tarea existente**
  - Método: PUT
  - Ruta: `/api/v1/tasks/update/:id`
  - Descripción: Actualiza una tarea existente identificada por su ID con los datos proporcionados en el cuerpo de la solicitud.

- **Eliminar una tarea por su ID**
  - Método: DELETE
  - Ruta: `/api/v1/tasks/delete/:id`
  - Descripción: Elimina una tarea específica identificada por su ID.

## Ejemplo de Uso

Para probar la API, puedes usar herramientas como Postman o Insomnia. A continuación, se muestra un ejemplo de cómo crear una nueva tarea utilizando Postman:

1. Hacer una solicitud POST a `http://localhost:3000/api/v1/tasks/new` con el siguiente cuerpo JSON:

```json
{
  "name": "Completar informe mensual",
  "description": "Revisar los datos del mes y redactar el informe correspondiente.",
  "dueDate": "2024-03-15"
}
