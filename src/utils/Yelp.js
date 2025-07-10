const Yelp = {
  search(term, location, sortBy) {
    return fetch(`http://localhost:4000/api/search?term=${term}&location=${location}&sortBy=${sortBy}`)
      .then(res => res.json())
      .then(businesses => {
        if (!Array.isArray(businesses)) return [];

        return businesses;
      })
      .catch(err => {
        console.error('Frontend Yelp proxy error:', err);
        return [];
      });
  }
};


export default Yelp;