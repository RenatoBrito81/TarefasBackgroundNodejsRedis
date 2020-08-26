//Importa as bibliotecas
import queue from "bull";
import * as jobs from "../jobs";

const queues = Object.values(jobs).map(job => ({
    bull: new queue(job.key, process.env.REDIS_HOST, process.env.REDIS_PORT),
    name: job.key,
    handle: job.handle,
    options: job.options
}));

export default {
    queues,
    add(name, data){
        const queue = this.queues.find(queue => queue.name === name);

        return queue.bull.add(data, queue.options);
    },
    process(){
        return this.queues.forEach(queue => {
            queue.bull.process(queue.handle);

            queue.bull.on("falied", (job, err) => {
                console.log("Job failed ", queue.key, job.data);
                console.log(err);
            });
        });
    }
}