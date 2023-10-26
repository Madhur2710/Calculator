const sol=document.querySelector('.solution');
const numbers=document.querySelectorAll('.numbers');
const functions=document.querySelectorAll('.functions');
const final = document.querySelectorAll('.o');

//convert C to AC if soln is empty
// try to equate class name ,while putting signs on the webpage

// console.log('chalra');
// final.forEach((item)=>{
//     item.addEventListener('click',(e)=>{
//     console.log(typeof(e.target.textContent));
//     })
// });

let a=0,b=0 ,ans ;
let sign;

numbers.forEach((item) => {
    item.addEventListener('click',(e)=>{
        a = sol.textContent;
        a=10*a + Number(e.target.textContent);
        sol.textContent= a;
    })
})

final.forEach((item)=>{
    item.addEventListener('click',(e)=>{
        if(e.target.textContent==" Ans "){
            a=Number(a);
            b=Number(b);
            if(sign=='Add'){
                ans=a+b;
            }
            if(sign=='Subtract'){
                ans=b-a;
            }
            if(sign=='Multiply'){
                ans=a*b;
            }
            if(sign=='Divide'){
               ans=b/a;
            }
            sol.textContent= ans;
        }

        if(e.target.textContent==" C "){
            sol.textContent='';
        }
    })
})

    
functions.forEach((item)=>{
    item.addEventListener('click',(e)=>{
        b=sol.textContent;
        sol.textContent='0';
        sign=e.target.textContent;
    })
})





