const Yelp = {
  search(term, location, sortBy) {
    return fetch(`http://localhost:4000/api/search?term=${term}&location=${location}&sortBy=${sortBy}`)
      .then(res => res.json())
      .then(businesses => {
        if (!Array.isArray(businesses)) return [];

        return businesses.map(business => ({
          id: business.id,
          imageSrc: business.image_url || '',
          name: business.name || 'Unnamed Business',
          address: business.location?.address1 || 'Address unavailable',
          city: business.location?.city || '',
          state: business.location?.state || '',
          zipCode: business.location?.zip_code || '',
          category: business.categories?.[0]?.title || 'Uncategorized',
          rating: business.rating ?? 'N/A',
          reviewCount: business.review_count ?? 0,
        }));
      })
      .catch(err => {
        console.error('Frontend Yelp proxy error:', err);
        return [];
      });
  }
};


export default Yelp;