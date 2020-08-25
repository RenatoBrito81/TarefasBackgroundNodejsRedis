//Importa as bibliotecas
import passwordGenerator from "password-generator";
import mail from "../lib/mail";

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

        //Envia o e-mail para o usuário
        await mail.sendMail({
            from: "HW <cadastro@hw.com.br>",
            to: `${name} <${email}>`,
            subject: "Cadastro de acesso ao HW",
            html: `Olá ${name} bem vindo ao HW!!!<br><br>Sua senha temporária para acessar o HW foi definida como: ${user.password}<br>Por favor alterar a senha quando fizer o primeiro acesso.<br><br>Obrigado!!!`
        });

        //Retorna o objeto com os dados do usuário
        return res.json(user);
    }
}