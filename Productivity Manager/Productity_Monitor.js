// localStorage.clear();
//Make a blank array to hold task
let currentTask = [];


//-----------------Each page show and hide karne ke liye------------
function Fullelem(){
    var DivAllelem = document.querySelector(".Allelem");
    var Allelem = document.querySelectorAll(".elem");
    var allFullelem = document.querySelectorAll('.Fullelem')
    var allBackBtn = document.querySelectorAll('.Fullelem .back')

    Allelem.forEach(function(elem){
        elem.addEventListener('click',function(){
            console.log(allFullelem[elem.id]);
            allFullelem[elem.id].style.display = 'block'
            DivAllelem.style.display='none'
        })
        
    })

    allBackBtn.forEach(function(back){
    back.addEventListener('click',function(){
        console.log(allFullelem[back.id]);
        allFullelem[back.id].style.display = 'none'
        DivAllelem.style.display=''
        
    })
    
})

}

Fullelem();


function GetData(){

    
    // Localstorage me currenttask key ko check karta hai
    //key milne par data ko array me add kar dena jise "RenderTask()" se webpage me show kar dete hai
    if(localStorage.getItem('currentTask')){
        currentTask = JSON.parse(localStorage.getItem('currentTask'));
    }else{
        currentTask = [];
    }
}
GetData();


//-----------------Webpage me task show karne ke liye------------
function RenderTask(){
    let allTask = document.querySelector('.alltask');

    let sum = '';
    currentTask.forEach((elem,index)=>{
    sum= sum +  `<details class="task-box" role="listitem">
                    <summary >
                            <h1>${elem.task} <span class=${elem.imp}>imp</span> </h1>
                            <button id=${index}>Mark as Completed</button>
                    </summary>
                    <div class="task-details">
                       <p>${elem.detail}</p>
                    </div>
                </details>`
    });
    allTask.innerHTML = sum;
    MarkBtnClick();
}


RenderTask();

//-----------------Mark as complete Btn ka click event-------------
function MarkBtnClick(){
    let Markbutton = document.querySelectorAll('.task-box button')

    Markbutton.forEach((button)=>{
        button.addEventListener('click',function(){
            currentTask.splice(button.id,1)
            console.log(currentTask);

            localStorage.setItem('currentTask',JSON.stringify(currentTask));
            RenderTask();
        })
    })

}


//------------------Form submit event----------------------
function formSubmit(){
  
    let frm = document.querySelector('.todo-list-fullpage form')
    let taskInput = document.querySelector('.todo-list-fullpage form input')
    let taskDetailInput =document.querySelector('.todo-list-fullpage form textarea')
    let Checkbox = document.querySelector('#check')
        
    frm.addEventListener('submit',function(dets){
        dets.preventDefault();
        currentTask.push({
            task:taskInput.value,
            detail:taskDetailInput.value,
            imp:Checkbox.checked
        });
        
        localStorage.setItem('currentTask',JSON.stringify(currentTask));
        
        //Task ko Render karne ke liye
        RenderTask();
        frm.reset();

    })

}

formSubmit();

//------------------Planner Input Event----------------------
// Show hours label and input box
let plansArray = [];

localStorage.getItem('plansArray')? plansArray = JSON.parse(localStorage.getItem('plansArray')): plansArray = [];
console.log(plansArray);


function ShowHoursLabel(){

let hour = Array.from({length:18},(elem,index)=>{
    return index;
});

let Plans ='';
hour.forEach((elem,index)=>{
    // console.log(`${6+elem}:00-${7+elem}:00`);
    Plans= Plans + `<div class="planner-time">
                            <h2>${6+elem}:00 - ${7+elem}:00</h2>
                            <input id="${index}" placeholder="..." class="plan-input" value = "${plansArray[index] != undefined ? plansArray[index]:''}"></input>
                    </div>`
});

// console.log(Plans);

let dailyPlanDiv = document.querySelector('.daily-plan');
dailyPlanDiv.innerHTML = Plans;

}

ShowHoursLabel();

// Input box me kuch likhne par Array and localstorage me save karne ke liye
function SaveInputsToLocalstorage(){
    let planInputs = document.querySelectorAll('.plan-input');
    let plannerBox = document.querySelectorAll('.planner-time')
    planInputs.forEach((input)=>{
        input.addEventListener('input',function(){
            plansArray[input.id] = input.value;
            localStorage.setItem('plansArray',JSON.stringify(plansArray))
            // plannerBox[input.id].style.backgroundColor = "Red"
        })
    })
}

SaveInputsToLocalstorage();

///-----------------------------Motivational quote page------------------------

async function GetQuote_Date_time(){
    let MotivationQuote = document.querySelector('.quote-card p')
    let MotivationAuthor = document.querySelector('.quote-card .author h2')
    let Day_TimeBox =document.querySelector('.day-time')
    let speak =document.querySelector('.motivation-fullpage .speak')

    
    let d = new Date();
    let day = d.toLocaleDateString("en-US", { weekday: "short" });
    let month = d.toLocaleDateString("en-US", { month: "long" });
    let year = d.getFullYear();
    
    
    Day_TimeBox.innerHTML= `<div class="box today">
    <h1>${d.getDate()} <span class="day">${day}</span><br> <span class="month" >${month}</span></h1>
    <h5>${year}</h5>
    </div>
    <div class="box day-lime">
    <h1>Quote of the Day.</h1>
    </div>`
    
    let response =await fetch('https://motivational-spark-api.vercel.app/api/quotes/random/10');
    let data =  await response.json()
    
    // console.log(data[0].quote);
    
    MotivationQuote.innerHTML = data[0].quote
    MotivationAuthor.innerHTML = data[0].author


    speak.addEventListener('click',()=>{
        let Date_voice = new SpeechSynthesisUtterance( `${d.getDate()} ${month}  ${year}`)
        speechSynthesis.speak(Date_voice);

        let msg = new SpeechSynthesisUtterance(`Today's quote of the day :- ${data[0].author} said, "${data[0].quote}"`);
        msg.lang = "hi-IN";
        speechSynthesis.speak(msg);
        console.log(`${d.getDate()} ${month}  ${year}`);
    })
    
}

GetQuote_Date_time();

//-----------------------------Pomodora page----------------------------


let Work_inputTime = 5;
let Break_inputTime = 2;

function GetUserinput(){
    let Setting = document.querySelector('.pomodoro-fullpage img');
    let inputBox = document.querySelector('.pomodoro-fullpage .user-input');
    let inputs = document.querySelectorAll('.pomodoro-fullpage input');

    let isVisible = false;
    // inputBox.style.left = '-100%';

    Setting.addEventListener('click',function(){
        if(isVisible == false){
            inputBox.style.left = '2.2rem';
            isVisible = true;
        }else{
            inputBox.style.left = '-100%';
            isVisible = false;
        }
    
    })

    
    inputs[0].addEventListener('input',function(){
        Work_inputTime = inputs[0].value
        totalsecond = Work_inputTime*60
        clearInterval(interval);
        console.log(Work_inputTime,Break_inputTime , totalsecond);
        AddTimer()
    })
    inputs[1].addEventListener('input',function(){
        Break_inputTime = inputs[1].value
        clearInterval(interval);
        console.log(Work_inputTime,Break_inputTime);
        AddTimer()
    })

    

}

GetUserinput();

let Title = document.querySelector('.pomodoro-main .top h1')
let Timebox = document.querySelector('.pomodoro-main .middle .time')

let isWorksession = true;
let totalsecond = Work_inputTime*60;
var interval=null

function AddTimer(){
    let minutes = Math.floor(totalsecond/60)
    let seconds = totalsecond%60
    console.log(minutes,seconds);
    
    Timebox.innerHTML = `${String(minutes).padStart("2","0")}:${String(seconds).padStart("2","0")}`
}

AddTimer();


function DTimer(){
        clearInterval(interval);
        if (isWorksession) {
            interval = setInterval(() => {
                if (totalsecond > 0) {
                    totalsecond--;
                    AddTimer();
                } else {
                    isWorksession = false;
                    Title.innerHTML = "Break";
                    Title.style.backgroundColor = "var(--blue)";
                    totalsecond = Break_inputTime*60;
                    AddTimer();
                    clearInterval(interval);
                }
            }, 1000);
        }else{
            interval = setInterval(() => {
                if (totalsecond > 0) {
                    totalsecond--;
                    AddTimer();
                } else {
                    isWorksession = true;
                    Title.innerHTML = "Work Session";
                    Title.style.backgroundColor = "var(--green)";
                    totalsecond = Work_inputTime*60;
                    AddTimer();
                    clearInterval(interval);
                }
            }, 1000);
        }

    }

// DTimer();

function ButtonsClickEvent(){
    let startBtn = document.querySelector('.pomodoro-main .bottom #start')
    let pauseBtn = document.querySelector('.pomodoro-main .bottom #pause')
    let resetBtn = document.querySelector('.pomodoro-main .bottom #reset')
    
    startBtn.addEventListener('click',()=>{
            DTimer();
    })
    
    pauseBtn.addEventListener('click',()=>{
            clearInterval(interval)
    })
    
    resetBtn.addEventListener('click',()=>{
            totalsecond=21
            AddTimer();
    })
}
ButtonsClickEvent();




