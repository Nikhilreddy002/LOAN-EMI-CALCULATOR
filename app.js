let calculateloan=()=>{
    let loanamountbox=document.querySelector('#amount');
    let interestbox=document.querySelector('#interest');
    let emibox=document.querySelector('#emi');

loanamountbox.value=rangebox.value;
interestbox.value=rangebox.value*0.15;

let a=Number(rangebox.value);
let b=Number(interestbox.value);
emibox.value=Math.round((a+b)/24);
}
let rangebox=document.querySelector('#loan');
rangebox.addEventListener("input",function(){
    calculateloan();
});
