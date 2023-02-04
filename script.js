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

// async function main(){
//     // let res=await ADDRiddle('Why Are You Here?')
//     // setTimeout(()=>{
//     //     ADDRiddle('sd')

//     // },100)

//     // setTimeout(()=>{
//     //     ADDRiddle('Why Are You Here?')

//     // },200)
   
 
// }
// main()

// function makeid(length) {
//     let result = '';
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     const charactersLength = characters.length;
//     let counter = 0;
//     while (counter < length) {
//       result += characters.charAt(Math.floor(Math.random() * charactersLength));
//       counter += 1;
//     }
//     return result;
// }


// const code = document.getElementById("code");
// const code = document.getElementById("code");
const characters = "IRIX01";
const lineLength = 200;
const fontSize = 15;

function randomChar() {
  return characters[Math.floor(Math.random() * characters.length)];
}

function generateLine() {
  let line = "";
  for (let i = 0; i < lineLength; i++) {
    line += randomChar();
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


},100)
text='IRIX'
function updateText() {
    const centerLine = Code.childNodes[Math.floor(Code.childNodes.length / 2)];
    const randomLine = generateLine();
    const textLine = randomLine.substr(0, (randomLine.length - text.length) / 2) + text + randomLine.substr((randomLine.length - text.length) / 2);
    centerLine.innerHTML = textLine;
  }

  updateText()