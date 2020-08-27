//Importa as bibliotecas da aplicação
import "dotenv/config";
import Queue from "../src/app/lib/queue";

//Chama a fila de backuground
Queue.process()