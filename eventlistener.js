// Event Listeners

// element.addEventListener("click",function)

const buttonTwo = document.querySelector('.btn-2');
function alertBtn(){
  alert('I also love Javascript');
}

buttonTwo.addEventListener("click", alertBtn);

// Mouseoveer

const newBackgroundColor = document.querySelector('.box-3');

function ChangeBgColor(){
  newBackgroundColor.style.backgroundColor = 'blue';
  
}
newBackgroundColor.addEventListener("mouseover", ChangeBgColor);
