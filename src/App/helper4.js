export const fetchscrollingOpening = async(number) => {
  const fetchMovieData= await fetch(`https://swapi.co/api/films/${number}/`)
  const movieData = await fetchMovieData.json()
  const lineBreak = new RegExp(/\s{3,}/, 'g');
  const convertLineBreaks= movieData.opening_crawl.replace(lineBreak, '###');
  const splitCovertedBreaks = convertLineBreaks.split('###');
  return {body: splitCovertedBreaks, title: movieData.title, releaseDate: movieData.release_date};
};
