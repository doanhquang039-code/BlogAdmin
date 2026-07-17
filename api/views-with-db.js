// Serverless function with Redis/KV storage (Production-ready)
// Works with Vercel KV, Upstash Redis, or any Redis provider

// Option 1: Using Vercel KV (Recommended for Vercel deployments)
/*
import { kv } from '@vercel/kv';

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    
    const KEY = 'portfolio:views';
    
    try {
        if (req.method === 'POST') {
            const count = await kv.incr(KEY);
            return res.status(200).json({ count });
        }
        
        if (req.method === 'GET') {
            const count = await kv.get(KEY) || 0;
            return res.status(200).json({ count });
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
    
    return res.status(405).json({ error: 'Method not allowed' });
}
*/

// Option 2: Using Upstash Redis (Works anywhere)
import { Redis } from '@upstash/redis';

const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    
    const KEY = 'portfolio:views';
    
    try {
        if (req.method === 'POST') {
            // Increment counter
            const count = await redis.incr(KEY);
            return res.status(200).json({ count, timestamp: Date.now() });
        }
        
        if (req.method === 'GET') {
            // Get current count
            const count = await redis.get(KEY) || 0;
            return res.status(200).json({ count, timestamp: Date.now() });
        }
        
        return res.status(405).json({ error: 'Method not allowed' });
    } catch (error) {
        console.error('Redis error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

// Netlify version with Upstash
/*
import { Redis } from '@upstash/redis';

const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

exports.handler = async function(event, context) {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json'
    };
    
    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 200, headers, body: '' };
    }
    
    const KEY = 'portfolio:views';
    
    try {
        if (event.httpMethod === 'POST') {
            const count = await redis.incr(KEY);
            return {
                statusCode: 200,
                headers,
                body: JSON.stringify({ count })
            };
        }
        
        if (event.httpMethod === 'GET') {
            const count = await redis.get(KEY) || 0;
            return {
                statusCode: 200,
                headers,
                body: JSON.stringify({ count })
            };
        }
    } catch (error) {
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: error.message })
        };
    }
    
    return {
        statusCode: 405,
        headers,
        body: JSON.stringify({ error: 'Method not allowed' })
    };
};
*/
