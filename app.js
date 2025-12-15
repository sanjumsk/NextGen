let nav = document.getElementById("nav");


window.addEventListener("wheel", function(event){
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
