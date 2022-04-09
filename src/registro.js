let pwMatch =  false;
let pwMessage = document.getElementById('pw-message');

class Player{
    constructor(nickname, email, password){
        this.nickname = nickname;
        this.email = email;
        this.password = password
    }
}

// Función para confirmar Contraseña 
function comparePasswords(){
    const password1 = document.getElementById('inputPassword').value;
    const password2 = document.getElementById('repeatPassword').value;
    if(password1.length > 0 || password2.length > 0){
        if(password1 != password2 ){
            pwMatch = false;
            pwMessage.innerHTML = '*las contraseñas no coinciden';
        }
        else{
            pwMessage.innerHTML = '';
            pwMatch = true;
        }
    }
}

function isLen8(word){
    if(word.length >= 8){
        return true
    }
    else{
        return false
    }
}

// Simulador Registro de Usuario

function confirmSending(){
    if(pwMatch){
        let players = [];
        if(localStorage.players){
            players = JSON.parse(localStorage.getItem('players'));
        }else{
            players = [];
        }
        const nickname = document.getElementById('nickname').value;
        const email = document.getElementById('emailInput').value;
        const passw = document.getElementById('inputPassword').value;
        const validPassw = isLen8(passw);
        let repeated = false;
        if(nickname && email && validPassw){
            if(players.length > 0){
                for(player of players){
                    if(player.nickname == nickname){
                        pwMessage.innerHTML = 'nickname no disponible';
                        repeated = true;
                        break;
                    }
                    else if(player.email == email){
                        pwMessage.innerHTML = 'Intenta con otro correo electrónico';
                        repeated = true;
                        break;
                    } 
                }
            } 
            if(!repeated){
                const player = new Player(nickname, email, passw);
                players.push(player);
                localStorage.players = JSON.stringify(players);
                localStorage.nickname = player.nickname;
                window.location.href = 'https://mateo-restrepo.github.io/myawesomebrain/index.html';
            }          
        } else{
            if(!validPassw){
                pwMessage.innerHTML = '*La contraseña debe tener mínimo 8 carácteres'
            } else {
                pwMessage.innerHTML = '*Asegúrate de completar los campos'
            }
        }
    }
}     
