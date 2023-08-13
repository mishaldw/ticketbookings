window.onload = function () {
    handleDateSelection();
    handleGuestSelection();
    handleDurationSelection();
  };
  
  function handleDateSelection() {
    const dateInput = document.getElementById('date');
    const selectedDate = dateInput.value;
    localStorage.setItem('selectedDate', selectedDate);
    updateSummaryTable();
    enableContinueButton();
  }
  
  function handleGuestSelection() {
    const ticketCategories = ['SL Adult', 'SL Child', 'Foreigner Adult', 'Foreigner Child', 'Infant'];
    const selectedGuests = {};
    ticketCategories.forEach(category => {
      const ticketCount = parseInt(document.getElementById(category.toLowerCase().replace(' ', '-')).value) || 0;
      selectedGuests[category] = ticketCount;
    });
    localStorage.setItem('selectedGuests', JSON.stringify(selectedGuests));
    updateSummaryTable();
    enableContinueButton();
  }
  
  function handleDurationSelection() {
    const durationSelect = document.getElementById('duration');
    const selectedDurations = Array.from(durationSelect.selectedOptions).map(option => option.value);
    localStorage.setItem('selectedDurations', JSON.stringify(selectedDurations));
    updateSummaryTable();
    enableContinueButton();
  }
  
  function updateSummaryTable() {
    const selectedDate = localStorage.getItem('selectedDate');
    const selectedGuests = JSON.parse(localStorage.getItem('selectedGuests'));
    const selectedDurations = JSON.parse(localStorage.getItem('selectedDurations'));
  
    const charges = {
      'SL Adult': { normal: 4, peak: 6 },
      'SL Child': { normal: 2, peak: 3 },
      'Foreigner Adult': { normal: 10, peak: 13 },
      'Foreigner Child': { normal: 5, peak: 8 },
      'Infant': { normal: 0, peak: 0 }
    };
  
    let totalPayable = 0;
    let summaryTableHTML = `<table><tr><th>Date</th><th>Time</th><th>Type</th><th>Ticket Category</th><th>Tickets</th><th>Charges</th></tr>`;
  
    for (const category in selectedGuests) {
      if (selectedGuests[category] > 0) {
        const ticketCount = selectedGuests[category];
        const normalCharge = charges[category].normal;
        const peakCharge = charges[category].peak;
  
        let selectedDurationCount = 0;
        if (selectedDurations.length > 0) {
          selectedDurationCount = selectedDurations.length;
        }
  
        const totalCharge = (ticketCount * normalCharge * selectedDurationCount) + ((ticketCount - 1) * peakCharge * selectedDurationCount);
        totalPayable += totalCharge;
  
        summaryTableHTML += `<tr><td>${selectedDate}</td><td>${selectedDurations.join(', ')}</td><td>${category.includes('SL') ? 'SL' : 'Foreigner'}</td><td>${category}</td><td>${ticketCount}</td><td>$${totalCharge}</td></tr>`;
      }
    }
  
    summaryTableHTML += `<tr><td colspan="5">Total Payable:</td><td>$${totalPayable}</td></tr></table>`;
    document.getElementById('summary-table').innerHTML = summaryTableHTML;

    localStorage.setItem('summaryTableHTML', summaryTableHTML);
  }

  
  
  
  
  
  
  function enableContinueButton() {
    const form = document.getElementById('ticket-form');
    const continueBtn = document.getElementById('continue-btn');
    if (form.checkValidity()) {
      continueBtn.removeAttribute('disabled');
    } else {
      continueBtn.setAttribute('disabled', 'disabled');
    }
  }
  
  document.getElementById('date').addEventListener('change', handleDateSelection);
  document.getElementById('duration').addEventListener('change', handleDurationSelection);
  document.getElementById('sl-adult').addEventListener('change', handleGuestSelection);
  document.getElementById('sl-child').addEventListener('change', handleGuestSelection);
  document.getElementById('foreigner-adult').addEventListener('change', handleGuestSelection);
  document.getElementById('foreigner-child').addEventListener('change', handleGuestSelection);
  document.getElementById('infant').addEventListener('change', handleGuestSelection);
  document.getElementById('ticket-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const form = event.target;
    if (form.checkValidity()) {
      window.location.href = 'details.html';
    } else {
      // Handle form validation errors if needed
    }
  });
  
  updateSummaryTable();
  
  // Your existing JavaScript code here, if any
  
  // Tickets page JavaScript
  document.getElementById('continue-btn').addEventListener('click', function () {
    // Code to store ticket details in local storage
    const tickets = [
      { category: 'SL Adult', quantity: 2, charge: 28 },
      { category: 'SL Child', quantity: 3, charge: 21 },
      { category: 'Foreigner Adult', quantity: 1, charge: 33 },
      { category: 'Foreigner Child', quantity: 2, charge: 36 },
      { category: 'Infant', quantity: 3, charge: 0 }
    ];
  
    localStorage.setItem('tickets', JSON.stringify(tickets));
  
    console.log("tickets");
    console.log(tickets)
  
    // Redirect to the Details page
    window.location.href = 'details2.html';
  });
  