const sol=document.querySelector('.solution');
const numbers=document.querySelectorAll('.numbers');
const functions=document.querySelectorAll('.functions');
const final = document.querySelectorAll('.o');

//convert C to AC if soln is empty

let a=0,b=0 ,ans, sign ;

numbers.forEach((item) => {
    item.addEventListener('click',(e)=>{
        if(
            sol.textContent.charAt(sol.textContent.length-1)=='+' ||
            sol.textContent.charAt(sol.textContent.length-1)=='-' ||
            sol.textContent.charAt(sol.textContent.length-1)=='*' ||
            sol.textContent.charAt(sol.textContent.length-1)=='/'
        ){
            a=0;
        }
        a=10*a + Number(e.target.textContent);
        sol.textContent+=Number(e.target.textContent);
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
            sol.textContent= Number(ans);
        }

        if(e.target.textContent==" C "){
            sol.textContent='';
        }
    })
})

functions.forEach((item)=>{
    item.addEventListener('click',(e)=>{
        b=sol.textContent;
        if(e.target.textContent=='Add'){
            sol.textContent+='+';
        }
        if(e.target.textContent=='Subtract'){
            sol.textContent+='-';
        }
        if(e.target.textContent=='Multiply'){
            sol.textContent+='*';
        }
        if(e.target.textContent=='Divide'){
            sol.textContent+='/';
        }
        sign=e.target.textContent;
    })
})




