let plaintextInput = document.querySelector("#plaintext");
let keyInput = document.querySelector("#key");
let encryptInput = document.querySelector("#encrypt");

let plaintext = plaintextInput.value;
plaintextInput.addEventListener("input", characterEntered, false);
keyInput.addEventListener("input" , numberEntered , false);

function characterEntered(e) {
  plaintext = e.target.value;
  plaintext = plaintext.toLowerCase();
  plaintext = plaintext.replace(/[^a-z]/, '');

  e.target.value = plaintext;
  startEncrypt();
}

function numberEntered(e){
  startEncrypt();
}


function startEncrypt() {
  let encrypted = "";
  let key = keyInput.value? Number(keyInput.value) :0 ;
  console.log(key);

  for (letter of plaintext) {
    encrypted += shiftLetter(letter, key);
  }

  console.log(encrypted)
  encryptInput.value = encrypted;

}
startEncrypt();

function shiftLetter(letter, key) {
  let newletter = "";

  let lettercode = letter.charCodeAt(0);
  let newlettercode = lettercode + (key % 26);

  if (newlettercode < 97) {
    newlettercode += 26;
  } else if (newlettercode > 122) {
    newlettercode -= 26;
  }
  newletter = String.fromCharCode(newlettercode);
  return newletter;
}