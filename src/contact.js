//Função de enviar dados do formulário por email
function sendMail() {
    var link = "mailto:danielsouzaT99@hotmail.com"
             + "?cc=" + escape(document.getElementById('mailCC1').value) + "@" + escape(document.getElementById('mailCC2').value)
             + "&subject=" + escape(document.getElementById('mailSubject').value)
             + "&body=" + escape(document.getElementById('mailMessage').value)
    ;
    window.location.href = link;
}
//Função de enviar dados do formulário por Whatsapp
function sendWpp() {
    var link = "https://wa.me/5555984071157?text="
            +"Nome: "+ escape(document.getElementById('mailSubject').value)
            +"%0AEmail: "+ escape(document.getElementById('mailCC1').value) + "@" + escape(document.getElementById('mailCC2').value)
            +"%0AMensagem: "+ escape(document.getElementById('mailMessage').value)
    ;
    window.location.href = link;
}