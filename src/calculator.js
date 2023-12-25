// const calculator = {
//   add(a, b) {
//     if (typeof a === 'number' && typeof b === 'number') {
//       const result = a + b;
//       if (Number.isNaN(result)) {
//         return undefined;
//       }
//       return result;
//     }
//     return undefined;
//   },

//   subtract(a, b) {
//     if (typeof a === 'number' && typeof b === 'number') {
//       const result = a - b;
//       if (Number.isNaN(result)) {
//         return undefined;
//       }
//       return result;
//     }
//     return undefined;
//   },

//   divide(a, b) {
//     if (typeof a === 'number' && typeof b === 'number') {
//       const result = a / b;
//       if (Number.isNaN(result)) {
//         return undefined;
//       }
//       return result;
//     }
//     return undefined;
//   },

//   multiply(a, b) {
//     if (typeof a === 'number' && typeof b === 'number') {
//       const result = a * b;
//       if (Number.isNaN(result)) {
//         return undefined;
//       }
//       return result;
//     }
//     return undefined;
//   },
// };

function createMethod(fn) {
  return (a, b) => {
    if (typeof a === 'number' && typeof b === 'number') {
      const result = fn(a, b);
      if (Number.isNaN(result)) {
        return undefined;
      }
      return result;
    }
    return undefined;
  };
}

const calculator = {
  add: createMethod((a, b) => a + b),
  subtract: createMethod((a, b) => a - b),
  divide: createMethod((a, b) => a / b),
  multiply: createMethod((a, b) => a * b),
};

export default calculator;
