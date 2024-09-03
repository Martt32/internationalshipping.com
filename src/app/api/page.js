// pages/api/tracking.js

export default async function handler(req, res) {
    if (req.method === 'GET') {
      const { carrier, trackingNumber } = req.query;
  
      // Replace <API_TOKEN> with your actual Shippo API token
      const response = await fetch(`https://api.goshippo.com/tracks/${carrier}/${trackingNumber}`, {
        method: 'GET',
        headers: {
          'Authorization': 'ShippoToken shippo_live_1aebb824c6516c0d8a0ed2b77b53702c39e2e3f9',
        },
      });
  
      if (!response.ok) {
        return res.status(response.status).json({ error: 'Failed to fetch tracking details' });
      }
  
      const data = await response.json();
      return res.status(200).json(data);
    } else {
      // Handle any other HTTP methods
      // res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  