let input = document.getElementById('display');
let buttons = document.querySelectorAll('.button');
let string = '';
let arr = Array.from('button');
arr.forEach('button')=>{
button.addEventListener('click',(e){
  if(e.taget.innerHTML == '='){
    string = eval(string);
    input.value = string;
  }
  else if(e.target.innerHTML == 'C'){
  string = '';
    input.value = string;
  }
  else{
    string += e.taget.innerHTML;
    input.value = string;
  }
})}
                  
