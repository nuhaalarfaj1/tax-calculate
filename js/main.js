
// calculate
function caltax(){
    
    var price = document.getElementById("mealprice").value
    
    
   var cheap = price * 0.15;
   var lesscheap = price * 0.18;
   var generous = price *0.20;
   var taxDiv = document.getElementById("tax");
   taxDiv.innerText = "15%:"  + cheap + ",18%:"  + lesscheap +"20%:"+generous;
           
    }
