const botao = document.querySelector("#button_news");
const campo_email = document.querySelector("#newsInputEmail");

botao.addEventListener('click', function(event){
    event.preventDefault();
    const resposta = document.createElement("span");
    const mensagem = document.createTextNode("E-mail salvo com Sucesso!");

    resposta.appendChild(mensagem);

   const a = document.querySelector(".news__form");

   //const a = campo_email.parentNode;

   //console.log(a);

    a.insertBefore(resposta, campo_email.parentNode);
})