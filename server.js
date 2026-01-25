const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Route for homepage - serve resume.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'resume.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log(`Homepage (/) serves resume.html`);
    console.log(`\nAvailable pages:`);
    console.log(`  - http://localhost:${PORT}/ (Resume - Homepage)`);
    console.log(`  - http://localhost:${PORT}/html/cover-letter.html`);
    console.log(`  - http://localhost:${PORT}/html/career-goals.html`);
});

