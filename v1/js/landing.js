let userName = document.querySelector('#userName');
let goBtn = document.querySelector('#goBtn');

let reviewWrapperDom = document.querySelector('.review-wrapper');

goBtn.addEventListener('click', function(){
  if(userName.value.trim() == '') {
      invalidField(userName, 'Enter your name to start rating :) ');
  } else {
    this.parentElement.remove();
    reviewWrapperDom.style.display = 'block';

  }
});
