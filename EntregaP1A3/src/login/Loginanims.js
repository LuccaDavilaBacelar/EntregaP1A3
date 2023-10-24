//  ANIMAÇÕES DA TELA DE LOGIN
var usuario = document.getElementById('Usertext');
var senha = document.getElementById('Senhatext');
var cadastrar = document.querySelector('.login');


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
   cadastrar.addEventListener('mouseover', ()=>{
       cadastrar.style.width = '200px';
   })
   cadastrar.addEventListener('mouseout', ()=>{
           cadastrar.style.width = '180px';
           cadastrar.style.height = '50px';
           cadastrar.style.fontSize = '30px';
   })