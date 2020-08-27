<h1 align="center">Tarefas em Background com Node.js, Redis e Bull</h1>

### Descrição
Exemplo de API para cadastro de usuário executado através de fila de tarefa em background utilizando o Bull e Redis.


### Utilização
Para a API funcionar será necessário fornecer as credenciais de acesso ao servidor de e-mail e acesso do banco Redis, conforme exemplificado no arquivo .env.example.


### Dependência
- Express = npm install express
- Nodemailer = npm install nodemailer
- Password-Gerenerator = npm install password-generator -g
- DotEnv = npm install dotenv
- Bull = npm install bull --save
- BullBoard  = npm install bull-board
- Redis = Não será necessário adicionar diretamente, pois a API do Bull já faz automaticamente (somente para conhecimento: npm install redis)

### Execução
- Para executar a API será necessário dois terminais no VS Code:
   -- No primeiro terminal executar "npm start" para iniciar o servidor Express
   -- No segundo terminar executar "npm run queue" para iniciar o serviço da fila em background


### Autor
Renato Brito