//Importa as bibliotecas
import nodemailer from "nodemailer";
import mailConfig from '../config/mail';

//Função para comunicação com o servidor de e-mail
export default nodemailer.createTransport(mailConfig);