createElements();
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
    yes.setAttribute('id', 'yes');
    mainElement.appendChild(yes);

    var no=document.createElement('input');
    no.setAttribute('radio', 'noInput');
    yes.setAttribute('id', 'yesInput');
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
   }
