
let video = document.getElementById('video')
let control = document.getElementById('control')
let getSrc = image.getAtribute('src')

function retroceder(){
    video.currentTime -= 15;
}

function avancar() {
    video.currentTime += 15;
}

function play() {
    video.play();
    
}

function Stop() {
    video.pause();
    video.currentTime = 0;
}

function diminuirVel() {
    video.playbackRate -= 0.5;
}

function aumentarVel() {
    video.playbackRate += 0.5;
}

function showControl(){
    control.style.visibility = 'visible'
}

function hideControl(){
    control.style.visibility = 'hidden'
}

