const cors = require('cors');
const express = require('express');
const app = express();

//Handle CORS (Cross-Origin Resource Sharing)
app.use(cors({
    origin: ['http://localhost:5173', 'http://127.0.0.1:5173']
}));

app.use(express.json())



app.get('/', (req, res) =>{
    res.send('Hello from Express')
});

app.get('/about', (req, res) => {
    res.send('This is the about page')
});

app.get('/contact', (req, res) => {
    res.send('This is the contact page')
});

app.get('/products', (req, res) =>{
    res.json([
        {id:1, name: 'Laptop', price: 1299},
        {id:2, name: 'Mouse', price: 50}
    ])
});

app.get('/products/:id', (req, res) =>{
    const id = Number(req.params.id);

    const products = [
        {id:1, name: 'Laptop', price: 1299},
        {id:2, name: 'Mouse', price: 50}
    ];

    const requestedProduct = products.find((product) => product.id === id);
    res.json(requestedProduct);
});

app.get('/message', (req, res) => {
    res.send({message: 'Grabe dami mong sinabe wala namang nangyari'})
});

//start node server on port 3000
app.listen(3000, () => {
    console.log("The server is running")
});