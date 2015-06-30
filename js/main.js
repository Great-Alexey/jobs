var a = $('.top li a');
function active(){
    var b = $('.news');
    for(i=0;i<a.length;i++){
        if(a[i]===this){
            a[i].className='active';
            b[i].style.display='block';
        }
        else{
            a[i].className=' ';
            b[i].style.display='none';
        }
}
}
for(i=0;i<a.length;i++){
    a[i].addEventListener("click", active, false);
}

var i=0;
$('#cont1').click(function(){
    if(i===0){
        $('.cont').css({'margin-top': '-366px'});
        $('#cont1').attr('src',"img/16.1.png");
        i=1;
    }
    else{
        $('.cont').css({'margin-top': '0px'});
        $('#cont1').attr('src',"img/16.png");
        i=0;
    }
});

function toggleText() {
    var $this = $(this),
        $cont = $this.parents('.cont'),
        i = $this.data('toggle');
    
    if(!i || i === '0'){
        $cont.css({'margin-top': '-366px'});
            
            $this.attr('src',"img/16.1.png");
        
        $this.data('toggle', 1);
    } else{
        $cont.css({'margin-top': '0px'});
            
            $this.attr('src',"img/16.png");
               
        $this.data('toggle', 0);
    }
    
}
$('#cont1').click(toggleText);
$('#cont2').click(toggleText);