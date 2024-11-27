// api/fetch-page.js
module.exports = async (req, res) => {
    const { url } = req.query; // Get the URL parameter

    if (!url) {
        return res.status(400).json({ error: 'URL is required' });
    }

    try {
        // Fetch the target URL through the proxy
        const proxyUrl = 'http://174.138.54.65'; // Proxy IP address
        const fullUrl = `${proxyUrl}?url=${encodeURIComponent(url)}`;

        const response = await fetch(fullUrl);
        const htmlContent = await response.text();

        // Return the HTML content of the page
        res.setHeader('Content-Type', 'text/html');
        res.status(200).send(htmlContent);
    } catch (error) {
        console.error('Error fetching the page:', error);
        res.status(500).json({ error: 'Failed to fetch page via proxy' });
    }
};
