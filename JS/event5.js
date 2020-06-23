function closeMe(){
    /*Find the element*/
    x=document.getElementById("demo");
    //option 1:change directly
   x.style.display="none";
    //option 2:change class
    x.className="closed";
}

function openMe(){
    x=document.getElementById("demo");
    x.style.display="block";
    x.className="open";
}