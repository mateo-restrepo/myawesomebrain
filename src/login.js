let mes1 = document.getElementById('mes1');

const authenticatePlayer = () => {
    const players = JSON.parse(localStorage.getItem('players'));
    const email = document.getElementById('emailInput');
    const passw = document.getElementById('inputPassword');
    for(player of players){
        if(player.email == email.value){
            if(player.password == passw.value){
                console.log('pass bien');
                mes1.style.display = 'none';
                localStorage.nickname = player.nickname;
                window.location.href = 'http://127.0.0.1:5500/public/';
            }
            break;
        }
    }
    mes1.innerHTML = '*El correo o la constraseña son inválidas';
}