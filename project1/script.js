
// const header1=document.querySelector("#header1");
// console.log(header1);
// const Img=document.querySelector("#first");  

// header1.addEventListener('mousemove',function(event){
//    Img.style.left=event.x+ "px";
// })

// header1.addEventListener('mouseenter',function(){
    
//     Img.style.opacity=1;
 
//  })
//  header1.addEventListener('mouseleave',function(){
    
//     Img.style.opacity=0;
 
//  })

const header=document.querySelectorAll('.header');
// console.log(header);
header.forEach(function(val){
    // console.log(val);
    // console.log(val.childNodes);
    // console.log(val.childNodes[1]);

    val.addEventListener('mouseenter',function(){
        // console.log("MouseEnter");
        val.childNodes[1].style.opacity=1;
    });
    val.addEventListener("mouseleave",function(){
        // console.log("MouseEnter");
        // val.style.backgroundColor="transparent";
        val.childNodes[1].style.opacity=0;


    });
   val.addEventListener('mousemove',function(e){
    val.childNodes[1].style.left=e.x+"px";
   })




})


