
const $form = document.querySelector('form');
const $idInput = document.querySelector('#id');
const $pwInput = document.querySelector('#password');
const $loginButton = document.querySelector('#login-button');

// $form.addEventListener('keydown', activeButton)

// const $loginInputs = document.querySelectorAll('.login__inpug');
// $loginInputs.forEach((loginInput) => {
//     loginInput.addEventListener('keyup', activeButton);
// })

$idInput.addEventListener('keyup', activeButton);
$pwInput.addEventListener('keyup', activeButton);

function activeButton() {
    const idInputVal = $idInput.value;
    const pwInputVal = $pwInput.value;

    if(idInputVal.length > 0 && pwInputVal.length > 0) {
        if(!$loginButton.classList.contains('active')) {
            $loginButton.classList.add('active');
        }
    } else {
        $loginButton.classList.remove('active');
    }
}