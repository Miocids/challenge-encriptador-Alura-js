const textInput = document.querySelector('#phrase');
const textInputEncrypted = document.querySelector('#phrase-encrypted');

const suggest = document.querySelector('.form__suggest');
const desencryptMessage = document.querySelector('.desencrypt_message');
const desencryptResult = document.querySelector('.result_desencrypted');

const btnEncrypt = document.querySelector('#btn-encrypt');
const btnDesencrypt = document.querySelector('#btn-desencrypt');
const btnCopy = document.querySelector('#btn-copy');

const regexInput = /^[a-z0-9 ]*$/;

let message = true;
let result = false;

// Evalúa la frase usando una expresión regular
function encryptPhrase() {
  if (!regexInput.test(textInput.value) || textInput.value.length === 0) {
    suggest.style.display = "flex";

    message = true;
    showMessage()
    result = false;
    showResult();
  } else {
    suggest.style.display = "none";

    let phraseEncryted = textInput.value.
                                          replaceAll("e", "enter").
                                          replaceAll("i", "imes").
                                          replaceAll("a", "ai").
                                          replaceAll("o", "ober").
                                          replaceAll("u", "ufat");

    textInputEncrypted.value = phraseEncryted

    message = false;
    showMessage()
    result = true;
    showResult();

    textInput.value = '';
  }
}
btnEncrypt.addEventListener('click', encryptPhrase);

// Función que copia la frase encriptada en el textarea para desencriptar
function copy() {
  textInputEncrypted.select();
  document.execCommand("copy");
  textInputEncrypted.setAttribute('disabled', true);
  textInputEncrypted.value = '';
  alert("El texto ha sido copiado")
}
btnCopy.addEventListener('click', copy);

// Función inversa, para desencriptar
function desencryptPhrase() {
  let fraseDesencriptada = textInput.value.
                                        replaceAll("ufat", "u").
                                        replaceAll("ober", "o").
                                        replaceAll("ai", "a").
                                        replaceAll("imes", "i").
                                        replaceAll("enter", "e");
    textInputEncrypted.value = fraseDesencriptada;

  message = false;
  showMessage()
  result = true;
  showResult();

  textInput.value = '';
}
btnDesencrypt.addEventListener('click', desencryptPhrase);

// Función que muestra el mensaje de error si no se ingresa un texto
function showMessage() {
  if(message) {
    desencryptMessage.style.display = "block";
  } else {
    desencryptMessage.style.display = "none";
  }
}

// Función que muestra el resultado
function showResult() {
  if(result) {
    desencryptResult.style.display = "block";
  } else {
    desencryptResult.style.display = "none";
  }
}
