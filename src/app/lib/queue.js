//Importa as bibliotecas
import Queue from "bull";
import redisConfig from "../config/redis";
import * as jobs from "../jobs";

//
const queues = Object.values(jobs).map(job => ({
    bull: new Queue(job.key, redisConfig),
    name: job.key,
    handle: job.handle,
    options: job.options,
}));

export default {
    //Fila de background
    queues,

    //Função para adicionar um processo na fila de background
    add(name, data) {
        //Procura na fila pela tarefa passada
        const queue = this.queues.find(queue => queue.name === name);

        //Adiciona a tarefa na fila de backuground
        return queue.bull.add(data, queue.options);
    },

    //Função para processar a fila de backuground
    process() {
        return this.queues.forEach(queue => {
            //Processa o item da fila
            queue.bull.process(queue.handle);
            
            //Executa evento em caso de falha da tarefa
            queue.bull.on("failed", (job, err) => {
                console.log("Job failed ", queue.key, job.data);
                console.log(err);
            });

            //Executa evento ao completar a tarefa
            queue.bull.on("completed", (job, err) => {
                done();
            });
        });
    }
};