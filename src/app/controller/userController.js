export default{
    //Função para armazenar o nome e e-mail
    async store(req, res){
        //Determina o nome e e-mail
        const {name, email} = req.body;

        //Cria objeto com os dados do usuário
        const user = {
            name,
            email,
            password: "123"
        };

        //Retorna o objeto do usuário
        return res.json(user);
    }
}