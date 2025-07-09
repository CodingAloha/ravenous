import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();
// console.log('Loaded Yelp API key:', apiKey ? 'Loaded' : 'Missing');
const app = express();
const PORT = process.env.PORT || 4000;
const apiKey = process.env.YELP_API_KEY;

app.use(cors());
app.use(express.json());

app.get('/api/search', async (req, res) => {
  const { term, location, sortBy } = req.query;

  try {
    const response = await axios.get('https://api.yelp.com/v3/businesses/search', {
      headers: {
        Authorization: `Bearer ${process.env.YELP_API_KEY}`,
      },
      params: {
        term,
        location,
        sort_by: sortBy,
      },
    });

    const formatted = response.data.businesses.map(business => ({
      id: business.id,
      imageSrc: business.image_url,
      name: business.name,
      address: business.location.address1,
      city: business.location.city,
      state: business.location.state,
      zipCode: business.location.zip_code,
      category: business.categories[0]?.title,
      rating: business.rating,
      reviewCount: business.review_count
    }));

    res.json(formatted);
  } catch (error) {
    console.error('Yelp API error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to fetch from Yelp API' });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
