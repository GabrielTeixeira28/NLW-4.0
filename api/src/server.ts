import express from 'express';

const app =  express();

/* 
GET => BUSCA
POST => SALVAR
PUT => ALTERAR
DELETE => DELETAR
PATCH => ALTERAÇÃO ESPECIFICA
*/

// http://localhost:3333/users

app.get("/users", (requeste, response) => {
return response.json({ message: "Hello World"});
});

//1 param => Rota(Recurso API)
//2 param => request,response

app.post("/", (request, response) => {
    return response.json({message: "Os dados foram salvos com sucesso"});
});

app.listen(3333, () => console.log("Server is running"));

