function isDeepEqual(a, b) {
    // Check if the input types are the same
    if (typeof a !== typeof b) {
      return false;
    }
  
    // If the input is a primitive type, compare the values directly
    if (typeof a !== 'object' || a === null) {
      return a === b;
    }
  
    // Get the keys of the objects
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
  
    // Check if the objects have the same number of keys
    if (keysA.length !== keysB.length) {
      return false;
    }
  
    // Recursively compare the values of each key
    for (const key in a) {
      if (!isDeepEqual(a[key], b[key])) {
        return false;
      }
    }
  
    // If all checks pass, the objects are equal
    return true;
  }
  


const a = { prop1: 1, list: [1, 2, 3], o: { x: 2 } };
const b = { list: [1, 2, 3], o: { x: 2 } };
console.log(isDeepEqual(a, b)); 

b.prop1 = 1;
console.log(isDeepEqual(a, b)); 


const c = { prop1: 1, list: [1, 2, 3], o: { x: 2 } };
const d = { prop1: 1, list: [1, 2, 3], o: { x: 2 } };
console.log(isDeepEqual(c, d)); 


const e = { prop1: 1, list: [1, 2, 3], o: { x: 2 } };
const f = [1, [1, 2, 3], { x: 2 }, {x:2}];
console.log(isDeepEqual(e, f)); 