var IBRA0206 = {
    init: function(){
    var box = document.createElement("div");
    box.classList.add("box");   
    box.textContent = "IBRA0206";    
    var boxes = document.getElementById("boxes");    
    boxes.appendChild(box);
    
    box.addEventListener("click", bclick);
    box.addEventListener("mouseover", toggleHighlight);
    box.addEventListener("mouseout", toggleHighlight);     
        
    function bclick(ev){
        ev.currentTarget.style.borderColor = "purple";
        ev.currentTarget.style.backgroundColor = "green";
    }    
        
    function toggleHighlight(ev){
        ev.currentTarget.classList.toggle("highlight");
        }
        
    }
   
};
