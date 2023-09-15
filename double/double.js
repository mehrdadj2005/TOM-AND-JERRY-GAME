

let body = document.querySelector('body')

let spans = document.querySelectorAll('.asd')

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

let time = document.querySelector('#time')

let y = false
body.addEventListener('keydown', (e) => {
    if (e.code === 'KeyQ') {
        asd(span1)
        span1.style = 'animation-name: show;display: inline-block;'
        chekShowCharacter()
    } else if (e.code === 'KeyW') {
        asd(span2)
        span2.style = 'animation-name: show;display: inline-block;'
        chekShowCharacter()
    } else if (e.code === 'KeyE') {
        asd(span3)
        span3.style = 'animation-name: show;display: inline-block;'
        chekShowCharacter()
    } else if (e.code === 'KeyA') {
        asd(span4)
        span4.style = 'animation-name: show;display: inline-block;'
        chekShowCharacter()
    } else if (e.code === 'KeyS') {
        asd(span5)
        span5.style = 'animation-name: show;display: inline-block;'
        chekShowCharacter()
    } else if (e.code === 'KeyD') {
        asd(span6)
        span6.style = 'animation-name: show;display: inline-block;'
        chekShowCharacter()
    } else if (e.code === 'KeyZ') {
        asd(span7)
        span7.style = 'animation-name: show;display: inline-block;'
        chekShowCharacter()
    } else if (e.code === 'KeyX') {
        asd(span8)
        span8.style = 'animation-name: show;display: inline-block;'
        chekShowCharacter()
    } else if (e.code === 'KeyC') {
        asd(span9)
        span9.style = 'animation-name: show;display: inline-block;'
        chekShowCharacter()
    }
    if (y == false) {
        y = true
        timer()
    }
})

function asd(e) {
    let x = setInterval(() => {
        e.style = 'animation-name: none;'
        clearInterval(x)
    }, 1000);
}

let x = 0
function chekShowCharacter() {
    x += 1
    // console.log(x);
    return x
}

setInterval(() => {
    if (x == 0) {
        console.log('زهر خر ، کره مار');
    }
    x = 0
}, 5000);

body.addEventListener('click', (e) => {
    if (e.target.classList == 'xxx') {
        hel.textContent -= 1
    }
    if (hel.textContent == 0) {
        body.style = 'display:none;'
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
    }, 1000);
}