
//------------------Navbar hide on scroll down & show on scroll up------------------
function Mousescroll(){
    let nav = document.getElementById("nav");


    document.addEventListener("wheel", function(event){
        if(event.deltaY > 0){
            // Scroll Down
            nav.style.position = "fixed";
            nav.style.top = "-100px";
            nav.style.transition = "top 0.5s";
            console.log("scroll down");
        }
        else{
            // Scroll Up
            nav.style.position = "fixed";
            nav.style.top = "0px";
            nav.style.transition = "top 0.5s";
            console.log("scroll up");
        }
    });

}
Mousescroll();

//--------------------Show All Student card---------------
function CourseCard(){
        
    let arr = [
        {
            Pic:"ccc.png",
            Course:"CCC (Course on Computer Concepts)",
            Batch_type:"OFFLINE",
            language:"HINGLISH",
            Fee:"5999",
            Discount:50,
            Discount_till:"Limited Time Discount"
        },
        {
            Pic:"ccc.png",
            Course:"Tally ( Latest tally prime )",
            Batch_type:"OFFLINE",
            language:"HINGLISH",
            Fee:"7999",
            Discount:50,
            Discount_till:"Limited Time Discount"
        },
        {
            Pic:"ccc.png",
            Course:"ADCA ( Advanced Diploma in Compurter Application )",
            Batch_type:"OFFLINE",
            language:"HINGLISH",
            Fee:"15999",
            Discount:50,
            Discount_till:"Limited Time Discount"
        },
        {
            Pic:"ccc.png",
            Course:"PGDCA ( Post Graduate Diploma in Computer Application )",
            Batch_type:"OFFLINE",
            language:"HINGLISH",
            Fee:"16999",
            Discount:50,
            Discount_till:"Limited Time Discount"
        },
        {
            Pic:"ccc.png",
            Course:"Microsoft Excel ( Basic )",
            Batch_type:"OFFLINE",
            language:"HINGLISH",
            Fee:"3999",
            Discount:50,
            Discount_till:"Limited Time Discount"
        },
        {
            Pic:"ccc.png",
            Course:"Microsoft Excel ( Advance )",
            Batch_type:"OFFLINE",
            language:"HINGLISH",
            Fee:"5999",
            Discount:50,
            Discount_till:"Limited Time Discount"
        }
    ]

    let sum = ''

    arr.forEach(function(elem,index){
        sum = sum + `<div class="course-wraper" id="0">
                            <a href="">
                                <div class="course-image">
                                    <img src=${elem.Pic} alt="">
                                </div>
                                <div class="course-body">
                                    <div class="top">
                                        <p class="course-name" >${elem.Course}</p>
                                        <div class="lag-btype">
                                            <div class="batch-mode">
                                                <h5 >${elem.Batch_type}</h5>
                                            </div>
                                            <div class="language">
                                                <h5 >${elem.language}</h5>
                                            </div>
                                        </div>
                                    </div>
                                    

                                    <div class="price-box">
                                        
                                        <span>${elem.Discount_till}</span>
                                        <div class="bottom">
                                            <div class="left">
                                                <p>₹ ${Math.floor(elem.Fee*elem.Discount/100)}</p>
                                                <small>₹ ${elem.Fee}</small>
                                            </div>

                                            <div class="right">
                                                <h5>${elem.Discount}% Off</h5>
                                            </div>
                                        </div>
                                        

                                    </div>
                                </div>
                            </a>
                            <a href="" ><div class="view-details">
                                View Details
                            </div></a>
                        </div>`
    });

    console.log(sum);

    let view3Bottom = document.querySelector('#view3 .bottom')
    let body = document.querySelector('body')
    view3Bottom.innerHTML = sum;
}

CourseCard();

//----------------- Goto All Student page---------------
function ShowAllStudent(){
        
    var btn = document.querySelector('.milestone')

    btn.addEventListener("click", function () {
        window.open("stu.html", "_blank");
    });

    //--------------------Goto sign in page---------------

    let BSignIn = document.getElementById("btnsignin")

    BSignIn.addEventListener('click',()=>{
        window.open("sign.html")
    })
}

ShowAllStudent();


//-----------------Course details------------------

function ShowCourseDetails(){
let cards = document.querySelectorAll('.card');
let allcourse = document.querySelectorAll('.course')
let allBackBtn = document.querySelectorAll('.course .back')

let view1 = document.querySelector('#view1')
let view2 = document.querySelector('#view2')
let frm = document.querySelector('.video-container')

cards.forEach(function(card){
    card.addEventListener('click',function(){
        console.log(card.id);
        allcourse[card.id].style.display = 'block';
        view1.style.display = 'none';
        view2.style.display = 'none';
        frm.style.display = 'none';
    })
});

allBackBtn.forEach(function(btn){
    btn.addEventListener('click',function(){
        console.log(btn);
        allcourse[btn.id].style.display = 'none';
        view1.style.display = 'block';
        view2.style.display = 'block';
        frm.style.display = 'block';
    })
});


allcourse.forEach(function(course){
    console.log('Hello');
    
})

}

ShowCourseDetails();