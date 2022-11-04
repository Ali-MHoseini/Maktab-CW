const $ = document;
const timeSec = $.getElementById("timeSec");
const timeMin = $.getElementById("timeMin");
const timeHour = $.getElementById("timeHour");
const btnPlay = $.getElementById("btnPlay");
const btnStop = $.getElementById("btnStop");
const btnReset = $.getElementById("btnReset");

let ntimeSec = 0;
let ntimeMin =0;
let ntimeHour = 0
let play;

btnStop.disabled = true;

//--------------------------------------------
btnPlay.addEventListener("click", () => {
    play = setInterval(() => {
        ntimeSec +=1 ;
        if(ntimeSec == 60) {
            ntimeMin += 1;
            ntimeSec = 00;
        }
        if (ntimeMin == 60) {
            ntimeHour +=1;
            ntimeMin = 00;
        }
        timeSec.innerText = ntimeSec.toString().padStart(2, "0");
        timeHour.innerText = ntimeHour.toString().padStart(2, "0");
        timeMin.innerText = ntimeMin.toString().padStart(2, "0");

    }, 1000);
    btnPlay.disabled = true;
    btnStop.disabled = false;
})

btnStop.addEventListener('click', () => {
    clearInterval(play);
    btnPlay.disabled = false;
})

btnReset.addEventListener('click',() => {
    ntimeSec = 0;
    ntimeMin = 0;
    ntimeHour = 0;
    timeSec.innerText = ntimeSec.toString().padStart(2, "0");
    timeHour.innerText = ntimeHour.toString().padStart(2, "0");
    timeMin.innerText = ntimeMin.toString().padStart(2, "0");
})

