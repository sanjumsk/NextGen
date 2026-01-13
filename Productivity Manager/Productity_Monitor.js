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
    sum= sum +  `<div class="task">
                        <h1>${elem.task} <span class=${elem.imp}>imp</span> </h1>
                        <button id=${index}>Mark as Completed</button>
                    </div>`
    });
    allTask.innerHTML = sum;
    MarkBtnClick();
}


RenderTask();

//-----------------Mark as complete Btn ka click event-------------
function MarkBtnClick(){
    let Markbutton = document.querySelectorAll('.task button')

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

localStorage.getItem('plansArray')? plansArray = JSON.parse(localStorage.getItem('plansArray')):[];
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
                            <input id="${index}" placeholder="..." class="plan-input" value = ${localStorage.getItem('plansArray')? plansArray[index]:''}></input>
                    </div>`
});

// console.log(Plans);

let dailyPlanDiv = document.querySelector('.daily-plan');
dailyPlanDiv.innerHTML = Plans;

}

ShowHoursLabel();

// Input box me kuch likhne par Array and localstorage me save karne ke liye

let planInputs = document.querySelectorAll('.plan-input');
let plannerBox = document.querySelectorAll('.planner-time')
planInputs.forEach((input)=>{
    input.addEventListener('input',function(){
        plansArray[input.id] = input.value;
        localStorage.setItem('plansArray',JSON.stringify(plansArray))
        // plannerBox[input.id].style.backgroundColor = "Red"
    })
})