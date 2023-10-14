var usuario = document.getElementById('Usertext');

usuario.addEventListener("mouseover", ()=>{
        usuario.style.fontSize = "42px";
})
usuario.addEventListener("mouseout", ()=>{
    setTimeout(()=>{
        usuario.style.fontSize = '30px';
    }, 1000)
})