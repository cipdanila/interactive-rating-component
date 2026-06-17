// ==========================================================================
// INTERACTIVE RATING LOGIC
// ==========================================================================

// 1. Capture the structural form element
const ratingForm = document.querySelector('#rating-form');

// 2. Capture the thank you container section
const thankYouState = document.querySelector('#thank-you-state');

const submitButton = document.querySelector('.submit-button');
const selectedRatingValue = document.querySelector('#selected-rating-value');

// Listen for the form submission event
ratingForm.addEventListener('submit', function (event) {
  
  // 1. Prevent the page from reloading (default browser behavior)
  event.preventDefault();

  // 2. Find which radio button was checked by the user
  const checkedRadio = ratingForm.querySelector('input[name="rating_score"]:checked');

  // 3. SECURITY GUARD: If the user didn't select any number, stop here!
  if (!checkedRadio) return;

  // 4. Extract the numeric value (1 to 5) from the selected radio button
  const ratingResult = checkedRadio.value;

  // 5. Inject the number into our empty span slot in the Thank You screen
  selectedRatingValue.textContent = ratingResult;

  // 6. TOGGLE STATES (The magic switch using our CSS custom attributes)
  ratingForm.setAttribute('data-state', 'hidden');
  
  thankYouState.setAttribute('data-state', 'active');
  thankYouState.setAttribute('aria-hidden', 'false');
});

// 1. Capture the new reset button from HTML
const resetButton = document.querySelector('#reset-button');

// 2. Listen for a click event on this new button
resetButton.addEventListener('click', function () {
  
  ratingForm.setAttribute('data-state', 'active');

  thankYouState.setAttribute('data-state', 'hidden');
  thankYouState.setAttribute('aria-hidden', 'true');

  ratingForm.reset();
});
