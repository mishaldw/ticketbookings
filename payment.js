/*const summaryTableHTML = localStorage.getItem('summaryTableHTML');
  
    // Display summary table in the details page
    document.getElementById('summary-table').innerHTML = summaryTableHTML;*/
    window.onload = function () {
        const summaryTableHTML = localStorage.getItem('summaryTableHTML');
  
    // Display summary table in the details page
    document.getElementById('summary-table').innerHTML = summaryTableHTML;
        // Function to enable the "Pay" button if all fields are valid
        function enablePayButton() {
          const cardNumber = document.getElementById('card-number').value;
          const expiryDate = document.getElementById('expiry-date').value;
          const cvc = document.getElementById('cvc').value;
          const nameOnCard = document.getElementById('name-on-card').value;
      
          const isValid = cardNumber && expiryDate && cvc && nameOnCard;
      
          document.getElementById('pay-button').disabled = !isValid;
        }
      
        // Attach event listeners to form fields
        document.getElementById('card-number').addEventListener('input', enablePayButton);
        document.getElementById('expiry-date').addEventListener('input', enablePayButton);
        document.getElementById('cvc').addEventListener('input', enablePayButton);
        document.getElementById('name-on-card').addEventListener('input', enablePayButton);
      
        // Function to handle payment submission and redirection
        function submitPayment() {

            event.preventDefault();
            
          const cardNumber = document.getElementById('card-number').value;
          const expiryDate = document.getElementById('expiry-date').value;
          const cvc = document.getElementById('cvc').value;
          const nameOnCard = document.getElementById('name-on-card').value;
      
          // Validate form fields (you can add your own validation logic here)
          if (!cardNumber || !expiryDate || !cvc || !nameOnCard) {
            alert('Please fill out all fields before proceeding.');
            return;
          }
      
          // Perform payment processing here (replace with your actual payment processing code)
          const paymentInfo = {
            cardNumber: cardNumber,
            expiryDate: expiryDate,
            cvc: cvc,
            nameOnCard: nameOnCard
          };
      
          // Store payment information in local storageg
          localStorage.setItem('paymentInfo', JSON.stringify(paymentInfo));
      
          // Redirect to the confirmation page
          window.location.href = 'confirm.html';
        }
      
        // Attach event listener to the "Pay" button
        document.getElementById('pay-button').addEventListener('click', submitPayment);
      };
      