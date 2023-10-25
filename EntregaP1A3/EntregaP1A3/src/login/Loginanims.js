//  ANIMAÇÕES DA TELA DE LOGIN
var usuario = document.getElementById('Usertext');
var senha = document.getElementById('Senhatext');
var login = document.querySelector('.login');


   usuario.addEventListener("mouseover", ()=>{
        usuario.style.fontSize = "42px";
})
   usuario.addEventListener("mouseout", ()=>{
        usuario.style.fontSize = '30px';
   })
   senha.addEventListener("mouseover", ()=>{
       senha.style.fontSize = "42px";
       
})
   senha.addEventListener("mouseout", ()=>{
       senha.style.fontSize = '30px';
})
   login.addEventListener('mouseover', ()=>{
       login.style.width = '200px';
   })
   login.addEventListener('mouseout', ()=>{
           login.style.width = '180px';
           login.style.height = '50px';
           login.style.fontSize = '30px';
   })