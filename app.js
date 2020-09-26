const rock = document.querySelector(".sub1");
const paper = document.querySelector(".sub2");
const scissor = document.querySelector(".sub3");
const div = document.querySelector(".res");
const score1 = document.querySelector(".sc1");
const score2 = document.querySelector(".sc2");
// const val = document.querySelector(".val").innerHTML;
// val = 0;
// console.log(val);
const paper1 = document.getElementById("cimage");
paper1.setAttribute( "src", ""); 
// paper1.style.float = "right"
paper1.style.background= "white";

let uscore=0;
let cscore=0;

const Score =()=>{
let userscore = document.querySelector(".sc1 h5");
let compscore = document.querySelector(".sc2 h5");
userscore.textContent = uscore;
compscore.textContent = cscore;
}

// console.log(paper1);

rock.addEventListener("click", OnClick);


function OnClick(e){
    const number = Math.floor(Math.random()*3+1);
console.log(number);
   document.getElementById("image").src = "images/rock.png";
   document.getElementById("image").style.float= "left";
//    document.getElementById("image").style.marginRight = "1080px";

//  imageRender();
    
if (number==1){
    div.innerText = "Draw";
    paper1.setAttribute("src", "images/rock.png");
}
else  if (number == 2){
    div.innerText = "Computer Wins";
    paper1.setAttribute("src", "images/paper.png");
    cscore++;
    Score();
}
else 
{
    div.innerText = "User Wins";
    paper1.setAttribute("src", "images/scissor.png");
    uscore++;
    Score();
   
}

    e.preventDefault();
}



paper.addEventListener("click", OnClick1);

function OnClick1(e){
    const number = Math.floor(Math.random()*3+1);
console.log(number);
   
      document.getElementById("image").src = "images/paper.png";
      document.getElementById("image").style.float= "left";
    // imageRender();
       
   if (number==1){
       div.innerText = "User Wins";
       paper1.setAttribute("src", "images/rock.png");
       uscore++;
       Score();
       
   }
   else  if (number == 2){
       div.innerText = "Draw";
       paper1.setAttribute("src", "images/paper.png");
       
   }
   else 
   {
       div.innerText = "Computer Wins";
       paper1.setAttribute("src", "images/scissor.png");
       cscore++;
       Score();
      
   }
   
       e.preventDefault();
   }

scissor.addEventListener("click", OnClick2);

function OnClick2(e){
    
    const number = Math.floor(Math.random()*3+1);
    console.log(number);
  document.getElementById("image").src = "images/scissor.png";
  document.getElementById("image").style.float= "left";
    // imageRender();
       
   if (number==1){
       div.innerText = "Computer Wins";
       paper1.setAttribute("src", "images/rock.png");
       cscore++;
       Score();
   }
   else  if (number == 2){
       div.innerText = "User Wins";
       paper1.setAttribute("src", "images/paper.png");
       uscore++;
       Score();
       
   }
   else 
   {
       div.innerText = "Draw";
       paper1.setAttribute("src", "images/scissor.png");
      
   }
   
       e.preventDefault();
   }