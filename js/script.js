// Function to get and display the current date
function displayCurrentDate() {
    // Create a new Date object
    const currentDate = new Date();
    
    // Format the date as a readable string
    // Options for date formatting
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    
    // Format the date (e.g., "January 15, 2025")
    const formattedDate = currentDate.toLocaleDateString('en-US', options);
    
    // Get the element where we want to display the date
    const dateElement = document.getElementById('current-date');
    
    // Update the element's text content with the formatted date
    if (dateElement) {
        dateElement.textContent = formattedDate;
    }
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', displayCurrentDate);

