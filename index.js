const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello DevOps CI/CD 🚀');
});

app.get('/health', (req, res) => {
    res.json({
        status: 'OK',
        message: 'Application is healthy'
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});