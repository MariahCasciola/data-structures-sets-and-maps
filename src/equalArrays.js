/**
 * return true if two arrays are equal, false otherwise
 */
function isEqual(a1, a2) {
  let sorteda1 = a1.sort();
  let sorteda2 = a2.sort();
  return sorteda1.every((element, index) => element === sorteda2[index]);
  // returns true if a1 and a2 are equal
  // otherwis returns false
}

module.exports = isEqual;
