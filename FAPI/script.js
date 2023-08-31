// ......................Calback..............................//
/*

const calculate= function calculator(a,b,callback){
    return callback(a,b);
} ;

function addition(a,b){
    return a+b;
}

console.log(calculate(10,20,addition));

function subtraction(a,b){
    return a-b

}
console.log(calculate( 40,20,subtraction))

const multi=(a,b)=> a*b;
console.log(calculate(20,5,multi));

const divided=function(a,b){
    return a/b;
}
console.log(calculate(100,2,divided));
// Promises//
// promises me three state hota hain//
// then(),catch(),pending();
// example//
 const Ans=new Promise((res,rej)=>{
    var a =10;
  if(a >50){
    return res(" a is Greater then fifty");
  }else{
    return rej("A is less then fifty");
  }
});
Ans.then((data)=>{
    console.log(`${data}`);
}).catch((data)=>{
    console.log(`${data}`)
}).finally('"hello guyss')
*/
//...................... 2Example.......................//
// sab se phaile 10 print ho//
// second me phaile 20 print ho//
// third me phai 30 pahile print ho//
// fourth me phaile 40 print ho
// fifth me phaile 50 print ho//
/*
const ans = new Promise((res, rej) => {
  return res("sab se phaile 10 print ho");
});
P1 = ans.then((data) => {
  console.log(`${data}`);
  return new Promise((res, rej) => {
    return res("second me phaile 20 print ho");
  });
});
P2 = P1.then((data) => {
  console.log(`${data}`);
  return new Promise((res, rej) => {
    return res("third me phai 30 pahile print ho");
  });
});
P3 = P2.then((data) => {
  console.log(`${data}`);
  return new Promise((res, rej) => {
    res("fourth me phaile 40 print ho");
  });
});
P4 = P3.then((data) => {
  console.log(`${data}`);

    return new Promise((res, rej) => {
        res("fifth me phaile 50 print ho");
    
  });
});
P4.then((data) => {
  console.log(`${data}`);
});
*/
//  ......................ASYNC AWAIT/............................/
//  async function foo(){
//   let resp=  await fetch('https://randomuser.me/api/');
//   let bigdata= await resp.json();
//   console.log(bigdata);
   
    
// }
// console.log(foo())

// ........................EVENTS  input.................................
 /*
const forms=document.getElementById("tuser");
console.log(forms);
const buttons=document.getElementById('btns');
console.log(buttons);
const paragraph=document.getElementById('para');
console.log(paragraph);

function Showuser(val){
    paragraph.innerText=val
    // paragraph.innerHTML=val

    console.log("function calling")

}

buttons.addEventListener('click',function(){
    Showuser(tuser.value);
   
})
 */
const forms=document.getElementById("tuser");
console.log(forms);
const buttons=document.getElementById('btns');
console.log(buttons);
const paragraph=document.getElementById('para');
console.log(paragraph);
buttons.addEventListener('click',(ev)=>{
    console.log(typeof forms.value)//string dega//

   parseInt(forms.value);`//Number dega`
   for(let i =0; i<=0; i++){
    paragraph.innerHTML+= `<h1>${i}</h1>`
   }


});



 