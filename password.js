/*createElements();
function createElements(){
var elementsList= document.getElementById('passwordsFactory')
var mainElement = document.createElement('div');


var logo=document.createElement('div');
logo.innerHTML= "PASSWORD GENERATOR";
logo.setAttribute('id', 'logo');
mainElement.appendChild(logo);
var br=document.createElement('br');
 mainElement.appendChild(br);


var lengthLabel=document.createElement('label');
lengthLabel.innerHTML="Give me password length:";
lengthLabel.setAttribute('id', 'lengthLabel');
mainElement.appendChild(lengthLabel);
var br=document.createElement('br');
 mainElement.appendChild(br);

 var lengthText=document.createElement('input');
 lengthText.setAttribute('id', 'lengthInput');
 mainElement.appendChild(lengthText);
 //var br=document.createElement('br');
  //mainElement.appendChild(br);

  var okButton=document.createElement('button');
  okButton.innerHTML="OK";
  okButton.setAttribute('id', 'okButton');
  mainElement.appendChild(okButton);
  var br=document.createElement('br');
   mainElement.appendChild(br);

   var signsLabel=document.createElement('label');
   signsLabel.innerHTML='Do you want special signs?';
   signsLabel.setAttribute('id', 'signsLabel');
   mainElement.appendChild(signsLabel);
   var br=document.createElement('br');
    mainElement.appendChild(br);

    var yes=document.createElement('input');
    yes.setAttribute('radio', 'yes');
    yes.setAttribute('id', 'yesInput');
    mainElement.appendChild(yes);

    var no=document.createElement('input');
    no.setAttribute('radio', 'checked');
    no.setAttribute('id', 'noInput');
    mainElement.appendChild(no);
    var br=document.createElement('br');
     mainElement.appendChild(br);

    var goButton=document.createElement('button');
    goButton.innerHTML="GO!";
    goButton.setAttribute('id', 'goButton');
    mainElement.appendChild(goButton);
    var br=document.createElement('br');
     mainElement.appendChild(br);

     var done=document.createElement('input');
     done.setAttribute('id', 'doneInput');
     mainElement.appendChild(done);

     elementsList.appendChild(mainElement);
   }*/
const passLength = document.querySelector('#length2');
const okButton = document.querySelector('#ok');
okButton.addEventListener('click', function getLength(){
  let number=document.querySelector('#length2').value;
  if (number<6) {
    alert ("Not enough characters");
  }
  else if (number>15) {
    alert ("Too many characters");
  }
  else { write.innerHTML=number;}
} )

const yesSpecial = document.querySelector('#yes');
const noSpecial = document.querySelector('#no');

//  połącz długość hasła z losowaniem wybranych znaków
yesSpecial.addEventListener('click', function checkLength () {


})
//  tu losowanie wybranej długości hasła
noSpecial.addEventListener('click', )

yesSpecial.addEventListener('click', function randomSpecial() {
const special = querySelector('#yes').value;
if (special) {
  console.log("1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM`!@#$%^&*()_+=-");  // ????????
}
else { } // ????????????????
})

noSpecial.addEventListener('click', function randomOrdinary () {
const ordinary = document.querySelector('#no').value;
if (ordinary) {
  console.console.log("1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM");
}
})

const goButton = document.querySelector('#go');
goButton.addEventListener('click', function randomPassword (){
const randomPass= document.querySelector('#   '); // co ma tu złapać?????

})

const readyPass = document.querySelector('#output');
readyPass.addEventListener('   ', function writePass() {
write.innerHTML= randomPass;
})
  // wypisz gotowe hasło
