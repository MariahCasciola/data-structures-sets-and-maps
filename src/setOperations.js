/**
 * return the union of two sets
 */
function union(s1, s2) {
  // Write a function that accepts two Sets and returns the union of the two Sets.
  return new Set([...s1, ...s2]);
}

/**
 * return the intersection of two sets
 */
function intersect(s1, s2) {
  // Write a function that accepts two Sets and return the Set containing the elements that appear in both Sets.
  const intersection = new Set();
  for (let element of s1) {
    if (s2.has(element)) {
      intersection.add(element);
    }
  }
  return intersection;
}

/**
 * return the difference of two sets
 */
function difference(s1, s2) {
    
}

module.exports = { union, intersect, difference };
