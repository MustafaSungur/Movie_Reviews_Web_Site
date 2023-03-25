function request(query) {
  return new Promise(async (resolve, reject) => {
    const response = await fetch(
      `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${query}&api-key=bpj1JPg1JnaxXFGlwTteC23IuxJsU4vZ`
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
