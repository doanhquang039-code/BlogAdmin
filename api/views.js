// Serverless function for view counter (Vercel/Netlify)
// Deploy this as a serverless function

let viewCount = 0; // In production, use database or KV store

// For Vercel
export default async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    
    if (req.method === 'POST') {
        // Increment counter
        viewCount++;
        return res.status(200).json({ count: viewCount, action: 'incremented' });
    }
    
    if (req.method === 'GET') {
        // Get current count
        return res.status(200).json({ count: viewCount });
    }
    
    return res.status(405).json({ error: 'Method not allowed' });
}

// For Netlify Functions
/*
exports.handler = async function(event, context) {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json'
    };
    
    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 200, headers, body: '' };
    }
    
    if (event.httpMethod === 'POST') {
        viewCount++;
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ count: viewCount })
        };
    }
    
    if (event.httpMethod === 'GET') {
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ count: viewCount })
        };
    }
    
    return {
        statusCode: 405,
        headers,
        body: JSON.stringify({ error: 'Method not allowed' })
    };
};
*/
