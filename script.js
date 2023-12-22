var timer = 60;
var newHit;
var score = 0;

function scoreInc(){
    score += 10;
    document.querySelector("#scoreVal").textContent=score
}

function makeNewHit(){
    newHit = Math.floor(Math.random()*10);
    // console.log(newHit);
    document.querySelector("#newHitVal").textContent = newHit;
}

function bubbleBana() {

    var clutter = "";
    for (var i = 1; i <= 152; i++) {
        var rn = Math.floor(Math.random() * 10)
        clutter += `<div class="circle">${rn}</div>`;
    }
    document.querySelector("#btm").innerHTML = clutter;
}

function timerChalao() {

    var tv = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerVal").textContent = timer;
        }
        else{
            clearInterval(tv);
            document.querySelector("#btm").innerHTML=`<h1>Game Over</h1>`
        }
    }, 1000)

}

document.querySelector("#btm").addEventListener("click",function(details){
   var newNo = Number(details.target.textContent)
    if(newNo === newHit){
        scoreInc();
        makeNewHit();
        bubbleBana();
    }
})

timerChalao();
bubbleBana();
makeNewHit();
