// ==========================================================================
// INTERACTIVE RATING LOGIC
// ==========================================================================

// 1. Capture the structural form element
const ratingForm = document.querySelector('#rating-form');

// 2. Capture the thank you container section
const thankYouState = document.querySelector('#thank-you-state');

// 3. Capture the dynamic rating value injector slot
const selectedRatingValue = document.querySelector('#selected-rating-value');

// Listen for the form submission event
ratingForm.addEventListener('submit', function (event) {
  
  // Prevent the page from reloading (default browser behavior)
  event.preventDefault();

  // Find which radio button was checked by the user
  const checkedRadio = ratingForm.querySelector('input[name="rating_score"]:checked');

  // SECURITY GUARD: If the user didn't select any number, stop here!
  if (!checkedRadio) return;

  // Extract the numeric value (1 to 5) from the selected radio button
  const ratingResult = checkedRadio.value;

  // Inject the number into our empty span slot in the Thank You screen
  selectedRatingValue.textContent = ratingResult;

  // TOGGLE STATES (The magic switch using our CSS custom attributes)
  ratingForm.setAttribute('data-state', 'hidden');
  
  thankYouState.setAttribute('data-state', 'active');
  thankYouState.setAttribute('aria-hidden', 'false');
});

// 4. Capture the reset button from HTML
const resetButton = document.querySelector('#reset-button');

// Listen for a click event on this reset button
resetButton.addEventListener('click', function () {
  
  ratingForm.setAttribute('data-state', 'active');

  thankYouState.setAttribute('data-state', 'hidden');
  thankYouState.setAttribute('aria-hidden', 'true');

  ratingForm.reset();
});
