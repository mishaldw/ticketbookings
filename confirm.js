window.onload = function () {
    const summaryTableHTML = localStorage.getItem('summaryTableHTML');

// Display the summaryTableHTML in the #summary-table div
document.getElementById('summary-table').innerHTML = summaryTableHTML;
    // Retrieve stored values from local storage
    const fullName = localStorage.getItem('fullName');
    const mobileNumber = localStorage.getItem('mobileNumber');
    const email = localStorage.getItem('email');
    const gender = localStorage.getItem('gender');
    
  
   
      
  
    // Populate the order summary
    document.getElementById('name').textContent = fullName;
    document.getElementById('mobile').textContent = mobileNumber;
    document.getElementById('email').textContent = email;
    document.getElementById('gender').textContent = gender;
  
    // ... rest of the code
    
  };
  
  
  