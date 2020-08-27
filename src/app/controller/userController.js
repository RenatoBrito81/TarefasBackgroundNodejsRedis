//Importa as bibliotecas
import passwordGenerator from "password-generator";
import queue from "../lib/queue";

export default{
    //Função para armazenar o nome e e-mail
    async store(req, res){
        //Determina o nome e e-mail
        const {name, email} = req.body;

        //Cria objeto com os dados do usuário
        const user = {
            name,
            email,
            password: passwordGenerator(15, false)
        };

        //Chama método para incluir o envio de e-mail na fila em background
        await queue.add("RegistrationMail", { user });

        //Retorna o objeto com os dados do usuário
        return res.json(user);
    }
}