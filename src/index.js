const helpMenu = () => {
    setTimeout(function(){
        document.getElementById('help-menu').style.display = 'none';
    }, 6000)
}

const greeting = (nickname) => {
    document.getElementById('greeting').innerHTML = `Hola, <span class="nickname">${nickname}</span>`;
}
if(localStorage.nickname){
    greeting(localStorage.nickname)
}



