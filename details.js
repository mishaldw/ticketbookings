// Retrieve summaryTableHTML from local storage
/*const summaryTableHTML = localStorage.getItem('summaryTableHTML');

// Display the summaryTableHTML in the #summary-table div
document.getElementById('summary-table').innerHTML = summaryTableHTML;*/
window.onload = function () {
    // Retrieve summary table HTML from local storage
    const summaryTableHTML = localStorage.getItem('summaryTableHTML');
  
    // Display summary table in the details page
    document.getElementById('summary-table').innerHTML = summaryTableHTML;
  
    // Enable "Continue with Purchase" button if all required fields are filled
    const form = document.getElementById('details-form');
    const continueBtn = document.getElementById('continue-btn');
    const mobileNumberInput = document.getElementById('mobile-number');
    const intlTelInput = window.intlTelInput(mobileNumberInput, {
      preferredCountries: ['us', 'gb'], // Specify preferred countries
      separateDialCode: true, // Show separate dial code input
    });
  
    form.addEventListener('input', () => {
      if (form.checkValidity()) {
        continueBtn.removeAttribute('disabled');
      } else {
        continueBtn.setAttribute('disabled', 'true');
      }
    });
  
    // Save details to local storage upon form submission
    form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      // Save details to local storage (you can adjust the keys as needed)
      localStorage.setItem('fullName', form['full-name'].value);
      localStorage.setItem('mobileNumber', formatPhoneNumber(intlTelInput.getNumber()));
      localStorage.setItem('email', form['email'].value);
      localStorage.setItem('gender', form['gender'].value);
  
      // Redirect to Payment page
      window.location.href = 'payment.html';
    });
  };
// Format phone number function
function formatPhoneNumber(phoneNumber) {
    const numericPhoneNumber = phoneNumber.replace(/\D/g, ''); // Remove non-numeric characters
    const countryCode = numericPhoneNumber.substring(0, 3); // Extract country code
    const areaCode = numericPhoneNumber.substring(3, 6); // Extract area code
    const subscriberNumber = numericPhoneNumber.substring(6); // Extract subscriber number
  
    // Format as (+123) 456-7890
    const formattedPhoneNumber = `(+${countryCode}) ${areaCode}-${subscriberNumber}`;
  
    return formattedPhoneNumber;
  }
  


