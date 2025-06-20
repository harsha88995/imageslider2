let index=1;

document.getElementById("next").addEventListener("click",function(){
    index += 1;
    if(index>13){
        alert("You have add images!");
        index=1;
    }
    document.getElementById("slide").setAttribute("src","images/"+index+".png");
    
    }
)
document.getElementById("prev").addEventListener("click",function(){
    index -= 1;
    if(index<1){
        alert("You have add images!");
        index=13;
    }
    document.getElementById("slide").setAttribute("src","images/"+index+".png");
    }
)