function MovieList({ data }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto ">
      {!data ? (
        <div className="bg-red-500 text-center rounded text-white absolute top-1/3 left-1/3 w-28 text-lg p-2">
          No Movie
        </div>
      ) : (
        data.map((item, index) => (
          <div
            key={index}
            className="max-w-sm rounded overflow-hidden shadow-lg"
          >
            <img
              src={
                item.multimedia !== null
                  ? item.multimedia.src
                  : "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1156&q=80"
              }
              alt=""
              className="w-full"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{item.headline}</div>
              <div className="flex justify-between mt-3 border-teal-500 border-b">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">
                  {item.byline}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">
                  {item.publication_date}
                </span>
              </div>

              <p className="text-gray-700 text-base p-2 mb-3">
                {!item.summary_short ? "No Summary" : item.summary_short}
              </p>
              <a
                href={item.link.url}
                className="bg-emerald-600 px-6 py-1 hover:bg-emerald-700 transition rounded text-white text-center"
                target="_blank"
                rel="noreferrer"
              >
                More
              </a>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default MovieList;
