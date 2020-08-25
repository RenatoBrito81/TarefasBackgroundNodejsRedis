//Importa as bibliotecas da aplicação
import "dotenv/config";
import express from "express";
import userController from "./app/controller/userController";

//Instância o servidor
const app = express();

//Configura o servidor para aceitar requisições no formato json
app.use(express.json());

//Configura a rota de POST
app.post("/users", userController.store);

//Executa o servidor
app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server running on the port ${process.env.SERVER_PORT}`);
});