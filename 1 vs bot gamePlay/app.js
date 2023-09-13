// Frahad Ahmadi
// Mehrdad Jokari

// selects-----
let time=document.querySelector('#time')
let start=document.querySelector('#start>button')
let dmage=document.querySelector('#dmage')
let firstImg=document.querySelectorAll('.firstImg')
let targetImg=document.querySelectorAll('.targetImg')


// when user click on start button
start.addEventListener('click',startGame)

// function is about start the game
function startGame() {
    // call timer for game
    timer()
    start.disabled = true

    target()

}

// defualt timer for game
let min=1
let sec=59

time.textContent=`${min} : ${sec}`
// function is about timer in the game
function timer() {
    // every 1second these are called
   const timerPart=setInterval(() => {
        sec-=1
        if (sec==0 && min==0) {
            time.textContent=`0 : 00`
            clearInterval(target())
            // stop the timer
            clearInterval(timerPart)
        } else {
            if (sec < 0) {
                sec = 59
                min = 0
            }
            if (sec<10) {
                sec=`0${sec}`
            }
            time.textContent=`${min} : ${sec}`
        }
    }, 1000);
}

function randomTarget() {
    let random=Math.floor(Math.random()*targetImg.length)
    return targetImg[random]
}
function target() {
    // every 1sec these will be called
    const imageTarget=setInterval(() => {
        let ourTarget=randomTarget();
        ourTarget.style="z-index: 1;"
        const x=setTimeout(() => {
            ourTarget.style="z-index: -1;"
        }, 500);
    }, 1000);
    return imageTarget
}

let heart=5
dmage.textContent=heart
targetImg.forEach((item,index)=>{
   item.addEventListener("click",()=>{
    heart-=1
    dmage.textContent=heart
    console.log(index);
   })
});