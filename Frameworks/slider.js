$(document).ready(function(){

    //slider
    var slidercounter = 1;
    
        setInterval(function(){
    
            if(slidercounter<3){
                 $(".slider-content").animate({"left":"-=300px"}, 5000)
                 slidercounter++
            }
            else{
                $(".slider-content").animate({"left":"0px"}, 1000)
                slidercounter=1;
            }
    
        })
    //End of document ready
    })