let s = document.querySelector(".s")
let m = document.querySelector(".m")
let h = document.querySelector(".h")
let hours = document.querySelector(".hours")
let minutes = document.querySelector(".minutes")

function clock() {
    let data = new Date()

    let sec = data.getSeconds()
    let min = data.getMinutes()
    let hour = data.getHours()

    s.style.transform = `rotate(${sec * 6}deg)`
    m.style.transform = `rotate(${min * 6}deg)`
    h.style.transform = `rotate(${hour * 30}deg)`

    setTimeout(() => {
        clock()
    }, 1000);



    hours.innerHTML = data.getHours() < 10 ? '0' + data.getHours() : data.getHours()

    minutes.innerHTML = data.getMinutes() < 10 ? '0' + data.getMinutes() : data.getMinutes()
}

clock()

let tabsItem = document.querySelectorAll(".tabsItem");
let tabsContentItem = document.querySelectorAll(".tabsContentItem");

for (let i = 0; i < tabsItem.length; i++) {  
    tabsItem[i].addEventListener('click', function () {

    
        for (let k = 0; k < tabsItem.length; k++) {
            tabsItem[k].classList.remove('active');  
            tabsContentItem[k].classList.remove('active');  
        }

       
        tabsItem[i].classList.add('active');
        tabsContentItem[i].classList.add('active');
    });

}

let stopwatchBtn = document.querySelector('.stopwatch__btn')
let stopwatchseconds = document.querySelector('.stopwatch__seconds')
let stopwatchminutes = document.querySelector('.stopwatch__minutes')
let stopwatchhours = document.querySelector('.stopwatch__hours')
let lampa = document.querySelector('.tabsLink__span')
let foo 


function sec() {
    stopwatchseconds.innerHTML++

    if (stopwatchseconds.innerHTML > 59) {
        stopwatchseconds.innerHTML = 0
        stopwatchminutes.innerHTML++

    }
    else if(stopwatchminutes.innerHTML > 59){
        stopwatchminutes.innerHTML = 0
        stopwatchhours.innerHTML++
    }
    else if(stopwatchhours.innerHTML > 24){
        stopwatchhours.innerHTML = 0
    }




    foo = setTimeout(() => {
       sec()
    }, 1000);
}




    stopwatchBtn.addEventListener('click', () => {

        
        if (stopwatchBtn.innerText == 'START') {
            stopwatchBtn.innerText = 'STOP'
            lampa.classList.add('active')
            sec()
        }
        
        else if(stopwatchBtn.innerText == 'STOP') {
            stopwatchBtn.innerText = 'CLEAR'
            lampa.classList.remove('active')
            lampa.classList.add('active_clear')
            clearInterval(foo)
        }
        else {
            stopwatchBtn.innerText = 'START'
            lampa.classList.remove('active_clear')
            stopwatchseconds.innerHTML = 0
            stopwatchminutes.innerHTML = 0
            stopwatchhours.innerHTML = 0
    }
    })
    


