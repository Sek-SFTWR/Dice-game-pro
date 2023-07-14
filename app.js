// toglogchiin eeljiig hadgalh huwisagch  togloch1 =0 , toglogch2 =1 .
var  activePlayer = 1;

// toglogchdiin tsugluulsan onoog hadgalah huwisagch
 var scores = [0,0];
// toglogchiin eeljndee tsugluulsan onoog hadgalah huwisagch
 var roundScore = 0;
// shoo ali talaaraa buusaniig hadgalah huwisagch hrgteu , 1-6 gesen utgiig ene huwisagchd sanamsargvigeer vvsgej ugnu.
 var diceNumber = Math.floor(Math.random()*6) + 1 ;
   
 window.document.getElementById('score-0').textContent = 0;
window.document.getElementById('score-1').textContent = 0;


window.document.getElementById('current-0').textContent = 0;
window.document.getElementById('current-1').textContent = 0;


//togloom ehlehed beldeh

 var diceDom = window.document.querySelector('.dice');

window.document.querySelector(".btn-roll").addEventListener("click",function (){

    var diceNumber = Math.floor(Math.random()*6) + 1 ;
    
    diceDom.style.display = "block";
    diceDom.src = "dice-"+diceNumber+ ".png";
    
    if(diceNumber !== 1) {
        roundScore +=diceNumber;  
        document.getElementById("current-"+activePlayer).textContent=roundScore;
    }else {
         roundScore = 0;
        document.getElementById("current-"+activePlayer).textContent = 0;
        activePlayer === 0 ? (activePlayer=1):(activePlayer=0);
        //ulaan tsegiig shiljvvleh
         document.querySelector(".player-0-panel").classList.toggle("active");
         document.querySelector(".player-1-panel").classList.toggle("active");
         // shoog tvr alga bolgono
         diceDom.style.display = "none";
            }
      
});

