const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());


const blogRoutes = require('./routes/blogRoutes');
app.use('/blogs', blogRoutes);


app.listen(PORT, () => {
    console.log(`Server running successfully ${PORT} `);
});