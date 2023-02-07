const Code=document.getElementById("Code")
let CodeLines=document.getElementsByClassName('codeline')
let AddedLines=0





// setTimeout(()=>{ADDRiddle('Why Are You Here?')},200)
function ADDRiddle(Riddle){
    [].forEach.call(CodeLines, element => {
        element.classList.remove("activeLine")
    });
    // Riddle.forEach(element => {
        
    // });
    AddedLines++
    let line=document.createElement('div')
    line.className='codeline'
    line.classList.add('activeLine')
    line.id= AddedLines+"Line"

    line.textContent=Riddle
    Code.appendChild(line)
    let j=0
    
    
}

const characters = "IRIX01";
const lineLength = 200;
const fontSize = 15;

function randomChar(r,word) {
  if(r<10){
    return word;

  }else{
    return characters[Math.floor(Math.random() * characters.length)];

  }
}
sentenceCounter=0
function generateLine() {
  let line = "";
  sentence=['Why Are You here?','Maybe The World Needed You Here','   IRIX ','  Who Are You??  ', "Robot: Who are you humans?","Alien: What brings you to our planet?","What is Your Purpose?","Robot: Why have you come to our world?","Do You Have a Message for Us?","Alien: What is your mission on our planet?","What is Your Intention?","Alien: Where do you come from?","What Do You Seek?","Robot: What is your purpose in exploring our world?","What is Your Quest?",'RHYS JOSMIN']
  sentenceCounter+=Math.random()/100
  if(sentenceCounter>sentence.length-1){
    sentenceCounter=0
  }
  
  for (let i = 0; i < lineLength; i++) {
    line += randomChar(Math.random()*100,sentence[Math.round(sentenceCounter+Math.random()/100)]);
  }
  return line;
}

function updateLines() {
  const numLines = Math.ceil((window.innerHeight / fontSize)*2);
  Code.innerHTML = "";
  for (let i = 0; i < numLines; i++) {
    const lineDiv = document.createElement("div");
    lineDiv.innerHTML = generateLine();
    lineDiv.style.top = i * fontSize + "px";
    lineDiv.style.fontSize = fontSize + "px";
    lineDiv.classList.add("codeline");
   
        Code.appendChild(lineDiv);
   
  }
}

updateLines();
window.addEventListener("resize", updateText);
setInterval(()=>{
    updateLines(); 


},200)
text='IRIX'
function updateText() {
    const centerLine = Code.childNodes[Math.floor(Code.childNodes.length / 2)];
    const randomLine = generateLine();
    const textLine = randomLine.substr(0, (randomLine.length - text.length) / 2) + text + randomLine.substr((randomLine.length - text.length) / 2);
    centerLine.innerHTML = textLine;
  }

  updateText()