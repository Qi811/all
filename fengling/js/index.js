$(function(){
    var varbar = $(".varbar").offset.top;
    var scTop = 0;
    $(document).scroll(function(){
        scTop = $(this).scrollTop();
        if(scTop >= varbar){
            $(".varbar").addClass("fixDiv");
        }else{
            $(".varbar").removeclass("fixDiv");
        }
    })
})