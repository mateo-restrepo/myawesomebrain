let password1, password2, 
    pwMatch =  false;
    pwMessage = document.getElementById('pw-message');

function comparePasswords(){
    password1 = document.getElementById('inputPasswword').value;
    password2 = document.getElementById('repeatPasswword').value;
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
function confirmSending(){
    if(pwMatch){
        alert('Registro exitoso')
    }
    else{
        alert('Ingresa los campos requeridos de manera correcta')
    }
}
