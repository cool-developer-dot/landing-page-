// Get modal elements
const modal = document.getElementById('paymentModal');
const payButton = document.querySelector('.pay-now-btn');

// Show modal when Pay Now button is clicked
payButton.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Handle form submission
document.getElementById('paymentForm').addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your payment processing logic here
    alert('Payment processing...');
}); 