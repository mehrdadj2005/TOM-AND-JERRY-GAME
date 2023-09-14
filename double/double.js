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

body.addEventListener('keydown', (e) => {
    if (e.code === 'KeyQ') {
        asd()
        span1.style = 'background-color: red;'
    } else if (e.code === 'KeyW') {
        asd()
        span2.style = 'background-color: red;'
    } else if (e.code === 'KeyE') {
        asd()
        span3.style = 'background-color: red;'
    } else if (e.code === 'KeyA') {
        asd()
        span4.style = 'background-color: red;'
    } else if (e.code === 'KeyS') {
        asd()
        span5.style = 'background-color: red;'
    } else if (e.code === 'KeyD') {
        asd()
        span6.style = 'background-color: red;'
    } else if (e.code === 'KeyZ') {
        asd()
        span7.style = 'background-color: red;'
    } else if (e.code === 'KeyX') {
        asd()
        span8.style = 'background-color: red;'
    } else if (e.code === 'KeyC') {
        asd()
        span9.style = 'background-color: red;'
    }
})


function asd() {
    document.querySelector('#span1').style = 'background-color: green;'
    document.querySelector('#span2').style = 'background-color: green;'
    document.querySelector('#span3').style = 'background-color: green;'
    document.querySelector('#span4').style = 'background-color: green;'
    document.querySelector('#span5').style = 'background-color: green;'
    document.querySelector('#span6').style = 'background-color: green;'
    document.querySelector('#span7').style = 'background-color: green;'
    document.querySelector('#span8').style = 'background-color: green;'
    document.querySelector('#span9').style = 'background-color: green;'
}