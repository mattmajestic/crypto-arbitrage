const express = require('express');
const ccxt = require('ccxt');
const cors = require('cors');
const app = express();
const port = 3001; // You can choose any port that is free on your system

app.use(cors()); // Use CORS to allow requests from your Angular app

app.get('/arbitrage', async (req, res) => {
    const exchange2 = new ccxt.kraken();
    const symbol = 'BTC/USD';

    try {
        const price2 = await exchange2.fetchTicker(symbol);

        res.json({
            kraken: price2.last,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching arbitrage data');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
