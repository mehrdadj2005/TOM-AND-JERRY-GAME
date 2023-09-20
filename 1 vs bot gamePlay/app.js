// Frahad Ahmadi
// Mehrdad Jokari

// selects-----
let time = document.querySelector('#time')
let start = document.querySelector('#start')
let dmage = document.querySelector('#dmage')
let firstImg = document.querySelectorAll('.firstImg')
let targetImg = document.querySelectorAll('.targetImg')
let modal= document.querySelector("#modalFonishTimeGame")
let again = document.querySelector("#again")


// when user click on start button
start.addEventListener('click', startGame)

// function is about start the game
function startGame() {
    // call timer for game
    timer()
    start.disabled = true

    target()

    music()

}

// defualt timer for game

let sec = 30

time.textContent = `${sec} s`
// function is about timer in the game
function timer() {
    // every 1second these are called
    const timerPart = setInterval(() => {
        sec -= 1
        if (heart == 0 ) {
            clearInterval(timerPart)
        }
        if (sec == 0) {
            time.textContent = `00`
            clearInterval(target())
            // stop the timer
            clearInterval(timerPart)
            // finnish music

        } else {
            if (sec < 10) {
                sec = `0${sec}`
            }
            if (sec < 0) {
                sec = 0
            }
            time.textContent = `${sec} s`
        }
    }, 1000);
}
// choose random image 
function randomTarget() {
    let random = Math.floor(Math.random() * targetImg.length)
    return targetImg[random]
}

function target() {
    // every 1sec these will be called
    const imageTarget = setInterval(() => {
        // call random function
        let ourTarget = randomTarget();
        // give style to choose image
        ourTarget.style = "z-index: 1;"
        // ourTarget.style = 'animation-name: show;'

        if (dmage.textContent == 0) {
            clearInterval(imageTarget);
        }
        // after .5sec active this function
        const x = setTimeout(() => {
            ourTarget.style = "z-index: -1;"
        }, 500);
        // after 30sec the game dosen't show target for user because the is finish
        const endGame = setTimeout(() => {
            clearInterval(imageTarget);
        }, 30000);

    }, 1000);
    return imageTarget
}

// user has 5 damage
let heart = 5
dmage.textContent = heart
let body =document.querySelector('body').addEventListener("click", (e)=>{
    if (e.target.classList.contains("targetImg")) {
          // active this Instructions
          if (heart > 0) {
            heart -= 1
            dmage.textContent = heart

            // use silverBox modal 
            silverBox({
                position: "top-right",
                timer: 2000,
                // alertIcon: "success",
                title: {
                    text: "nice shot",
                    alertIcon: "success",


                },
                centerContent: true
            })

            // we dosen't Permission to heart to be under zero(0)
        } else if (heart <= 0) {
            heart = 0
            dmage.textContent = heart
        }
    }
})

// music part----------

// for game music
function music() {
    // play music
    let musicPart = new Audio("../music/Klaus Badelt - He's a Pirate (320).mp3")
    musicPart.play()
    // after 30sec game will show modal and pause music
    // const gameMusic = setTimeout(() => {
    //     // pause the music
    //     musicPart.pause()

    //     // call end modal
    //     modalFinishTime('موش فرار کرد و برنده شد')
    // }, 30000);
//  it's for show modal when mouse damage is 0
    const stopDedMusic = setInterval(() => {
        if (dmage.textContent == 0) {
            // pause the music
            musicPart.pause()

            // call end modal
            modalFinishTime('گربه موش رو خورد و برنده شد')
        }else if(time.textContent == 0){
             // pause the music
        musicPart.pause()

        // call end modal
        modalFinishTime('موش فرار کرد و برنده شد')
        }
    }, 100);
}

// modal part--------
let y = false
function modalFinishTime(e) {
    let h1Modal = document.querySelector('#modalFonishTimeGame h1')
    let black = document.querySelector('#black')

    black.style.display = 'block'
    modal.style.display = 'flex'

    h1Modal.textContent = e

}

again.addEventListener('click', againGame)
// when click on again in modal
function againGame() {
    black.style.display = 'none'
    sec = 30
    time.textContent = sec
    heart = 5
    dmage.textContent = 5
    start.disabled = false
}