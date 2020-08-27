//Importa as bibliotecas da aplicação
import "dotenv/config";
import express from "express";
import userController from "./app/controller/userController";
import bullBoard from "bull-board";
import queue from "../src/app/lib/queue";

//Instância o servidor
const app = express();

//Instância bull-board
bullBoard.setQueues(queue.queues.map(queue => queue.bull));

//Configura o servidor para aceitar requisições no formato json
app.use(express.json());

//Configura a rota de POST
app.post("/users", userController.store);

//Configura a rota para utilizar o bull-board
app.use("/admin/queues", bullBoard.UI);

//Executa o servidor
app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server running on the port ${process.env.SERVER_PORT}`);
});