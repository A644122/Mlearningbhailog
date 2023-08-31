const h4= document.querySelector('#first');

const  buttons=document.getElementById('btns');

var flage =0;
buttons.addEventListener('click',function(){
    if(flage==0){
        h4.innerHTML ="Friends";
        h4.style.color="purple";
        buttons.innerHTML="Add Friend"

        flage=1;
        
    }else{
        flage=0
        h4.innerHTML ="Strength";
        h4.style.color="blue";
        buttons.innerHTML="Remov Friend"

    }
    
});
