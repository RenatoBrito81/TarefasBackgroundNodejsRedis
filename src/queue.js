//Importa as bibliotecas da aplicação
import "dotenv/config";
import Queue from "../src/app/lib/queue";

//Processa a fila de background
Queue.process()