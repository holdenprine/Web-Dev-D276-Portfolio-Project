function displayCurrentDate() {
    
    const currentDate = new Date();
    
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    
    
    const formattedDate = currentDate.toLocaleDateString('en-US', options);
    
    const dateElement = document.getElementById('current-date');
    
    if (dateElement) {
        dateElement.textContent = formattedDate;
    }
}

document.addEventListener('DOMContentLoaded', displayCurrentDate);

function confirmConnection(pageName) {
    if (pageName === 'Unknown') {
        console.error('Error: Page did not load properly or path not recognized');
    } else {
        console.log(`Currently on ${pageName} page`);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const path = window.location.pathname;
    let pageName = 'Unknown';
    
    switch (true) {
        case path.includes('resume'):
            pageName = 'Resume';
            break;
        case path.includes('cover-letter'):
            pageName = 'Cover Letter';
            break;
        case path.includes('career-goals'):
            pageName = 'Career Goals';
            break;
        default:
            pageName = 'Unknown';
    }
    
    confirmConnection(pageName);
});

