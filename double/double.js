let body = document.querySelector('body')

let spans = document.querySelectorAll('.imgHomeTop')

let span1 = document.querySelector('#span1')
let span2 = document.querySelector('#span2')
let span3 = document.querySelector('#span3')
let span4 = document.querySelector('#span4')
let span5 = document.querySelector('#span5')
let span6 = document.querySelector('#span6')
let span7 = document.querySelector('#span7')
let span8 = document.querySelector('#span8')
let span9 = document.querySelector('#span9')

let hel = document.querySelector('section h1')

let again = document.querySelector('#again')

let modal = document.querySelector('#modalFonishTimeGame')

let time = document.querySelector('#time')

let y = false
body.addEventListener('keydown', (e) => {
    if (e.code === 'KeyQ') {
        noneAnimation(span1)
        span1.style = 'animation-name: show;display: inline-block;'
    } else if (e.code === 'KeyW') {
        noneAnimation(span2)
        span2.style = 'animation-name: show;display: inline-block;'
    } else if (e.code === 'KeyE') {
        noneAnimation(span3)
        span3.style = 'animation-name: show;display: inline-block;'
    } else if (e.code === 'KeyA') {
        noneAnimation(span4)
        span4.style = 'animation-name: show;display: inline-block;'
    } else if (e.code === 'KeyS') {
        noneAnimation(span5)
        span5.style = 'animation-name: show;display: inline-block;'
    } else if (e.code === 'KeyD') {
        noneAnimation(span6)
        span6.style = 'animation-name: show;display: inline-block;'
    } else if (e.code === 'KeyZ') {
        noneAnimation(span7)
        span7.style = 'animation-name: show;display: inline-block;'
    } else if (e.code === 'KeyX') {
        noneAnimation(span8)
        span8.style = 'animation-name: show;display: inline-block;'
    } else if (e.code === 'KeyC') {
        noneAnimation(span9)
        span9.style = 'animation-name: show;display: inline-block;'
    }
    if (y == false) {
        y = true
        timer()
        music()
    }
})

function noneAnimation(e) {
    let x = setInterval(() => {
        e.style = 'animation-name: none;'
        clearInterval(x)
    }, 1000);
}

let x = 0

function chekShowCharacter() {
    x += 1
    // let modalTimer = setInterval(asm, 5000)
}

function asm() {
    if (x == 0) {
        // اگر کارکتر را نمایش نداد این مودال نمایش دهد
       
    }
    x = 0
}



body.addEventListener('click', (e) => {
    if (e.target.classList == 'jerryImg') {
        hel.textContent -= 1

        // use silverBox modal 
        silverBox({
            position: "top-right",
            timer: 2000,
            title: {
                text: "nice shot",
                alertIcon: "success",
            },
            centerContent: true
        })

    }
})

// defualt timer for game

let sec = 30

time.textContent = `${sec} s`
// function is about timer in the game
function timer() {
    // every 1second these are called
    const timerPart = setInterval(() => {
        sec -= 1
        if (sec == 0) {
            time.textContent = `00`
            // stop the timer
            clearInterval(timerPart)

        } else {
            if (sec < 10) {
                sec = `0${sec}`
            }
            if (sec < 0) {
                sec = 0
            }
            time.textContent = `${sec} s`
        }
        if (hel.textContent == 0) {
            // stop the timer
            clearInterval(timerPart)
        }
    }, 1000);
}



// for game music
function music() {
    // play music
    let musicPart = new Audio("../music/Klaus Badelt - He's a Pirate (320).mp3")
    musicPart.play()
    // after 30sec game will show modal and pause music
    // const gameMusic = setTimeout(() => {
    //         // pause the music
    //         musicPart.pause()
    //     // call end modal
    //     modalFinishTime('موش فرار کرد و برنده شد')
    // }, 30000);
    //  it's for show modal when mouse damage is 0
    const stopDedMusic = setInterval(() => {
        if (hel.textContent == 0) {
            // pause the music
            musicPart.pause()
            // call end modal
            modalFinishTime('گربه موش رو خورد و برنده شد')
            clearInterval(gameMusic)
        } else if (time.textContent == 0) {
            // pause the music
            musicPart.pause()
            // call end modal
            modalFinishTime('موش فرار کرد و برنده شد')
        }
    }, 100);
}

// modal part---------
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
    hel.textContent = 5
    y = false
}