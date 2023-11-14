function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // Esconder todos os conteúdos das abas
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Desativar todas as abas
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Mostrar o conteúdo da aba selecionada e destacar a aba
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Abra a primeira aba por padrão
document.getElementById("Tab1").style.display = "block";




