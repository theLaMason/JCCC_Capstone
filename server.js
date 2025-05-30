const { log } = require('console');
const express = require ('express');
const path = require ('path');
const app = express();
const PORT = process.env.PORT || 3000; 

//Serve static files 
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));


//Serve index.html 
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);  
});