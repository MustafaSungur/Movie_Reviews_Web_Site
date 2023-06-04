function request(query) {
  return new Promise(async (resolve, reject) => {
    const response = await fetch(
      `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${query}&api-key=${process.env.REACT_APP_API_KEY}`
    );
    const result = await response.json();

    if (response.ok) {
      resolve(result);
    } else {
      reject(result);
    }
  });
}

export const get = (query) => request(query);
