const mongoose = require('mongoose');
const Order = require('./order.model.js');

const path = require('path');
const express = require("express");
const fetch = require('node-fetch');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());

const uri = "mongodb+srv://aida-test:TestPass123@cluster0.b2vkp.mongodb.net/crypto-trading-bot?retryWrites=true&w=majority"
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection
connection.once("open", () => {
    console.log("Connected to mongodb insrtance")
})

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('/order-status', async (req, res) => {
    try {
        var order_id = req.query.order_id
        var crypto = require('crypto');

        var cb_access_timestamp = Math.floor(Date.now() / 1000); // in ms
        var cb_access_passphrase = '1bt3va474l1';
        var secret = 'bkT9d9+KrI2th9Ry2q+tzC6dH5zO6G47doqOLwWyvj0gAMl/bfKz0ivmACl2St+ZyMGuosHNxd7+fa19gnp5YA==';
        var requestPath = '/orders/' + order_id;
        // var body = JSON.stringify(req.body);
        var method = 'GET';

        // create the prehash string by concatenating required parts
        var message = cb_access_timestamp + method + requestPath;

        // decode the base64 secret
        var key = Buffer.from(secret, 'base64');

        // create a sha256 hmac with the secret
        var hmac = crypto.createHmac('sha256', key);

        // sign the require message with the hmac and finally base64 encode the result
        var cb_access_sign = hmac.update(message).digest('base64');

        const options = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'cb-access-key': '14cef4ea6456fd33f8d61303390ca033',
                'cb-access-passphrase': '1bt3va474l1',
                'cb-access-sign': cb_access_sign,
                'cb-access-timestamp': cb_access_timestamp
            },
        };

        let response = await fetch('https://api-public.sandbox.exchange.coinbase.com/orders/' + order_id, options)
        response = await response.json();
        res.json(response)

    } catch (err) {
        console.error('er==>>>', err);
    }

})

app.get('/fetch-orders', (req, res) => {
    Order
        .find()
        .then(orders => res.json(orders))
        .catch(err => res.status(400).json({ "message": "Cannot retrieve order" }))

})

app.post('/place-order', async (req, res) => {
    try {
        var crypto = require('crypto');

        var cb_access_timestamp = Math.floor(Date.now() / 1000); // in ms
        var cb_access_passphrase = '1bt3va474l1';
        var secret = 'bkT9d9+KrI2th9Ry2q+tzC6dH5zO6G47doqOLwWyvj0gAMl/bfKz0ivmACl2St+ZyMGuosHNxd7+fa19gnp5YA==';
        var requestPath = '/orders';
        var body = JSON.stringify(req.body);
        var method = 'POST';

        // create the prehash string by concatenating required parts
        var message = cb_access_timestamp + method + requestPath + body;

        // decode the base64 secret
        var key = Buffer.from(secret, 'base64');

        // create a sha256 hmac with the secret
        var hmac = crypto.createHmac('sha256', key);

        // sign the require message with the hmac and finally base64 encode the result
        var cb_access_sign = hmac.update(message).digest('base64');

        const options = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'cb-access-key': '14cef4ea6456fd33f8d61303390ca033',
                'cb-access-passphrase': '1bt3va474l1',
                'cb-access-sign': cb_access_sign,
                'cb-access-timestamp': cb_access_timestamp
            },
            body: JSON.stringify(req.body)
        };

        let response = await fetch('https://api-public.sandbox.exchange.coinbase.com/orders', options)
        response = await response.json();
        console.log('resnnpp===>>', response);

        const newOrder = new Order({
            orderID: response.id,
            productID: response.product_id,
            size: response.size,
            price: response.price,
            type: response.side
        })

        newOrder
            .save()
            .then(() => res.json("NewOrder saved successfully."))
            .catch((err) => res.status(400).json("An erro occured"))

    } catch (err) {
        console.error('er==>>>', err);
    }
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});