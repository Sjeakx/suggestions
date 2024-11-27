const express = require('express');
const fetch = require('node-fetch');
const { SocksProxyAgent } = require('socks-proxy-agent');

const app = express();
const port = 3000;

// Define SOCKS Proxy
const SOCKS_PROXY = 'socks://184.181.217.210:4145';

app.get('/api/proxy', async (req, res) => {
  try {
    // Set up SOCKS Proxy Agent
    const agent = new SocksProxyAgent(SOCKS_PROXY);

    // Make a request via the SOCKS proxy (you can modify the target URL)
    const response = await fetch('https://api.ipify.org?format=json', { agent });

    const data = await response.json();
    res.json(data); // Respond with the IP data from the proxy request
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch data through proxy' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
