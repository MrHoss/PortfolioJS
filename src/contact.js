//Função de enviar dados do formulário por email
const whatsapp = "5555984071157";
const email = "danielsouzaT99@hotmail.com";
const subject = document.getElementById('mailSubject').value;
const mail = `${document.getElementById('mailCC1').value}@${document.getElementById('mailCC2').value}`;
const message = document.getElementById('mailMessage').value;
function sendMail() {
    const link = `mailto:${email}?cc=${mail}&subject=${subject}&body=${message}`;
    window.location.href = link;
}
//Função de enviar dados do formulário por Whatsapp
function sendWpp() {
    
    const link = `https://wa.me/${whatsapp}?text=Olá estou entrando em contato a partir do formulário de seu portfólio, meu nome é ${subject} e meu email é ${mail}. ${message}`;
    window.location.href = link;
}