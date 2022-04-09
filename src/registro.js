let password1, password2, pwMatch =  false;
let pwMessage = document.getElementById('pw-message');
let players;

class Player{
    constructor(nickname, email, password){
        this.nickname = nickname;
        this.email = email;
        this.password = password
    }
}

if(localStorage.players){
    players = JSON.parse(localStorage.getItem('players'));
}else{
    players = [];
}


// Función para confirmar Contraseña 
function comparePasswords(){
    password1 = document.getElementById('inputPassword').value;
    password2 = document.getElementById('repeatPassword').value;
    if(password1.length > 0 || password2.length > 0){
        if(password1 != password2 ){
            pwMatch = false;
            pwMessage.innerHTML = '*las contraseñas no coinciden';
            pwMessage.style.color = 'red';
            pwMessage.style.fontSize = '1.6rem';
        }
        else{
            pwMessage.innerHTML = '';
            pwMatch = true;
        }
    }
}

// Simulador Registro de Usuario

function confirmSending(){
    if(pwMatch){
        const nickname = document.getElementById('nickname').value;
        const email = document.getElementById('emailInput').value;
        const passw = document.getElementById('inputPassword').value;
        if(nickname && email){
            const player = new Player(nickname, email, passw);
            players.push(player);
            localStorage.players = JSON.stringify(players);
            localStorage.nickname = player.nickname;
            window.location.href = 'http://127.0.0.1:5500/public/';
        }
    }
    else{
        alert('El registro no se completó correctamente. Registra todos los campos y asegúrate de que las contraseñas coincidan')
    }
}     