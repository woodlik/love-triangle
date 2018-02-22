/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let count = 0;
  for (let i = 0; i < preferences.length; i++) {
    let a = preferences[i];
    let b = preferences[(a - 1)];
    let c = preferences[(b - 1)];

    if ((c - 1) === i) {
      count += 1
    }
  }
  return (Math.floor(count / 3));
};
