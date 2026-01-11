//-------------------All Student Details and Show Cards ---------------

let arr = [
  { imgsrc: "stu1.png",  Name: "Amit",     Course: "CCC",  Batch: "10 AM" },
  { imgsrc: "stu1.png",  Name: "Ravi",     Course: "CCC",  Batch: "10 AM" },
  { imgsrc: "stu1.png",  Name: "Neha",     Course: "CCC",  Batch: "10 AM" },
  { imgsrc: "stu1.png",  Name: "Pooja",    Course: "CCC",  Batch: "10 AM" },
  { imgsrc: "stu1.png",  Name: "Rahul",    Course: "CCC",  Batch: "10 AM" },

  { imgsrc: "stu1.png",  Name: "Ankit",    Course: "CCC",  Batch: "12 PM" },
  { imgsrc: "stu1.png",  Name: "Suman",    Course: "CCC",  Batch: "12 PM" },
  { imgsrc: "stu1.png",  Name: "Vikas",    Course: "CCC",  Batch: "12 PM" },
  { imgsrc: "stu1.png",  Name: "Kajal",    Course: "CCC",  Batch: "12 PM" },
  { imgsrc: "stu1.png", Name: "Deepak",   Course: "CCC",  Batch: "12 PM" },

  { imgsrc: "stu1.png", Name: "Rohit",    Course: "ADCA", Batch: "2 PM" },
  { imgsrc: "stu1.png", Name: "Priya",    Course: "ADCA", Batch: "2 PM" },
  { imgsrc: "stu1.png", Name: "Manish",   Course: "ADCA", Batch: "2 PM" },
  { imgsrc: "stu1.png", Name: "Kiran",    Course: "ADCA", Batch: "2 PM" },
  { imgsrc: "stu1.png", Name: "Sneha",    Course: "ADCA", Batch: "2 PM" },

  { imgsrc: "stu1.png", Name: "Suresh",   Course: "DCA",  Batch: "4 PM" },
  { imgsrc: "stu1.png", Name: "Nikita",   Course: "DCA",  Batch: "4 PM" },
  { imgsrc: "stu1.png", Name: "Ajay",     Course: "DCA",  Batch: "4 PM" },
  { imgsrc: "stu1.png", Name: "Rina",     Course: "DCA",  Batch: "4 PM" },
  { imgsrc: "stu1.png", Name: "Mohit",    Course: "DCA",  Batch: "4 PM" },

  { imgsrc: "stu1.png", Name: "Sunita",   Course: "PGDCA", Batch: "6 PM" },
  { imgsrc: "stu1.png", Name: "Aakash",   Course: "PGDCA", Batch: "6 PM" },
  { imgsrc: "stu1.png", Name: "Reena",    Course: "PGDCA", Batch: "6 PM" },
  { imgsrc: "stu1.png", Name: "Naveen",   Course: "PGDCA", Batch: "6 PM" },
  { imgsrc: "stu1.png", Name: "Komal",    Course: "PGDCA", Batch: "6 PM" },

  { imgsrc: "stu1.png", Name: "Harish",   Course: "Tally", Batch: "8 AM" },
  { imgsrc: "stu1.png", Name: "Meena",    Course: "Tally", Batch: "8 AM" },
  { imgsrc: "stu1.png", Name: "Sanjay",   Course: "Tally", Batch: "8 AM" },
  { imgsrc: "stu1.png", Name: "Anjali",   Course: "Tally", Batch: "8 AM" },
  { imgsrc: "stu1.png", Name: "Ramesh",   Course: "Tally", Batch: "8 AM" }
];

sum = '';
arr.forEach(function(elem,index){
    sum = sum + 
    `<div class="card">
    <img src=${elem.imgsrc} alt="image not found">
            <h1><span>Name : ${elem.Name}</span></h1>
            <h1>Roll NO. : ${index+1}</h1>
            <h1>Course : ${elem.Course}</h1>
            <h1>Batch time : ${elem.Batch}</h1>
    </div> `
})

let center = document.getElementById('center')
center.innerHTML = sum;

//--------------------Goto sign in page---------------

let BSignIn = document.getElementById("btnsignin")

BSignIn.addEventListener('click',()=>{
    window.open("sign.html")
})

//--------------------Goto home page---------------

let BHome = document.getElementById("logo")

BHome.addEventListener('click',()=>{
    window.open("index.html")
})