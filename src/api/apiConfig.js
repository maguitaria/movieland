const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3",
  apiKey: "be8c638aadc1158ec1c842a0290024d1",
  w500Image: (imgPath) => `'https://image.tmdb.org/t/p/w500/${imgPath}`,
  originalImage: (imgPath) => `'https://image.tmdb.org/t/p/original/${imgPath}`,
};
export default apiConfig;