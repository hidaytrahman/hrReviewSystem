// Get Inputs
let rating = document.querySelector('#rating');
let reviewTitle = document.querySelector('#ratingTitle');
let reviewText = document.querySelector('#reviewText');
let addReviewBtn = document.querySelector('#addReviewBtn');

let reviewListDom = document.querySelector('.display-review-wrapper');

// Expenses Model
let reviews = [];


init();

// TODO: Save to the DB
// TODO: Update review
// TODO: Delete review

// Fire events
addReviewBtn.addEventListener('click', function(){

  if(rating.value.trim() == '') {
      invalidField(rating, 'Enter or select rating');
  } else if(ratingTitle.value.trim() == '') {
        invalidField(ratingTitle, 'Enter rating Title');
    } else if(reviewText.value.trim() == ''){
        invalidField(reviewText,'Enter review text');
    } else {
        reviewText.removeAttribute('style');
        ratingTitle.removeAttribute('style');

        // call add review
        addReview();
    }

});




// On key Enter
document.addEventListener('keyup', function(e){
    if(e.keyCode == 13){
        addReviewBtn.click();
    }
});


// -------------- Initialize -----------------//
function init() {
  userName.value= '';
  rating.value = '';
  reviewTitle.value = '';
  reviewText.value = '';
  rating.focus();

  console.log('reviews',reviews);
}


// Error message method
function invalidField(input, message) {
    alert(message);
    input.focus();
    input.style.borderBottom = '1px solid red';
}


// add review
function addReview() {
  let _createTime, _reviewTitle, _rating, _reviewText, _recommendationType, _reviewerName;

  // TODO : Get only day month and year
  const date = new Date();
  const todayDate = date;
  const positiveVal = 4;

  // TODO : logic for positive and negative
  if(rating.value >= positiveVal) {
      _recommendationType = "positive";
  } else {
      _recommendationType = "negative";
  }

   _createTime = todayDate;
   _reviewTitle = ratingTitle.value;
   _rating = rating.value;
   _reviewText = reviewText.value;

  // get user name from dom
  _reviewerName = userName.value;

  // adding data to the array
  reviews.push(
    {
      createdTime: _createTime,
      reviewTitle: _reviewTitle,
      rating: _rating,
      reviewText: _reviewText,
      recommendationType: _recommendationType,
      reviewer: {
        name: _reviewerName
      }
    }
  );

  // generate dom
  generateReviewDOM();

  // reset input stuff
  init();

}

// GENERATE DOM WITH THE REVIEW
function generateReviewDOM() {
  console.log('reviews after update',reviews);

  // remove content
  reviewListDom.innerHTML = '';

  for(let i = 0; i < reviews.length; i++) {

    let recommendation = reviews[i].recommendationType;
    let reviewDOM = `
    <div class="each-review">
      <div class="recommendation-type `+((recommendation === 'positive') ? 'positive' : 'negative')+`">`+recommendation+`</div>
      <div class="review-title">`+reviews[i].reviewTitle+`</div>
      <div class="review-rating">Review `+reviews[i].rating+`</div>
      <p class="review-description">
        `+reviews[i].reviewText+`
      </p>
      <div class="reviewer">`+reviews[i].reviewer.name+`</div>
      <div class="review-date">`+reviews[i].createdTime+` </div>
    </div>`;

    reviewListDom.insertAdjacentHTML('afterbegin',reviewDOM);
  }


}
