export const orderDesc = (array) => {
  array.results.sort((a, b) => parseFloat(b.vote_average) - parseFloat(a.vote_average));
  return array;
}