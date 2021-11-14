const apiConfig = {
  baseUrl: 'http://api.themoviedb.org/3/',
  apiKey: '30827f13acfa4103ba320d9f341a0260',
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;