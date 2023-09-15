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

let hel = document.querySelector('header h1')


body.addEventListener('keydown', (e) => {
    if (e.code === 'KeyQ') {
        asd()
        span1.style = 'animation-name: show;display: inline-block;'
    } else if (e.code === 'KeyW') {
        asd()
        span2.style = 'animation-name: show;display: inline-block;'
    } else if (e.code === 'KeyE') {
        asd()
        span3.style = 'animation-name: show;display: inline-block;'
    } else if (e.code === 'KeyA') {
        asd()
        span4.style = 'animation-name: show;display: inline-block;'
    } else if (e.code === 'KeyS') {
        asd()
        span5.style = 'animation-name: show;display: inline-block;'
    } else if (e.code === 'KeyD') {
        asd()
        span6.style = 'animation-name: show;display: inline-block;'
    } else if (e.code === 'KeyZ') {
        asd()
        span7.style = 'animation-name: show;display: inline-block;'
    } else if (e.code === 'KeyX') {
        asd()
        span8.style = 'animation-name: show;display: inline-block;'
    } else if (e.code === 'KeyC') {
        asd()
        span9.style = 'animation-name: show;display: inline-block;'
    }
})


function asd() {
    document.querySelector('#span1').style = 'animation-name: none;'
    document.querySelector('#span2').style = 'animation-name: none;'
    document.querySelector('#span3').style = 'animation-name: none;'
    document.querySelector('#span4').style = 'animation-name: none;'
    document.querySelector('#span5').style = 'animation-name: none;'
    document.querySelector('#span6').style = 'animation-name: none;'
    document.querySelector('#span7').style = 'animation-name: none;'
    document.querySelector('#span8').style = 'animation-name: none;'
    document.querySelector('#span9').style = 'animation-name: none;'
}

body.addEventListener('click', (e) => {
    if (e.target.classList == 'xxx') {
        hel.textContent -= 1
    }
    if (hel.textContent == 0) {
        body.style = 'display:none;'
    }
})




// // defualt timer for game
// let min=1
// let sec=59

// time.textContent=`${min} : ${sec}`
// // function is about timer in the game
// function timer() {
//     // every 1second these are called
//    const timerPart=setInterval(() => {
//         sec-=1
//         if (sec==0 && min==0) {
//             time.textContent=`0 : 00`
//             clearInterval(target())
//             // stop the timer
//             clearInterval(timerPart)
//         } else {
//             if (sec < 0) {
//                 sec = 59
//                 min = 0
//             }
//             if (sec<10) {
//                 sec=`0${sec}`
//             }
//             time.textContent=`${min} : ${sec}`
//         }
//     }, 1000);
// }