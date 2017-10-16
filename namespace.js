var = IBRA0206 {
    init: function(){
    var box = document.createElement("div");
    box.classList.add("box");   
    box.textContent = "IBRA0206";    
    var boxes = document.querySelector("#boxes");    
    boxes.appendChild(box);
    
    box.addEventListener("click", changeColour);
    box.addEventListener("mouseOver", toggleHighlight);
    box.addEventListener("mouseOn", toggleHighlight)     
        
    function changeColour(ev){
        ev.currentTarget.style.borderColor = "pink";
        ev.currentTarget.style.backgroundColor = "green";
    }    
        
    function toggleHighlight(ev){
        ev.currentTarget.classList.toggle("highlight");
        }
        
    }
   
}