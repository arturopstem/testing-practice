function analyzeArray(arr) {
  if (Array.isArray(arr)) {
    const { length } = arr;
    let average;
    let min;
    let max;
    if (length > 0 && arr.every((x) => typeof x === 'number')) {
      average = arr.reduce((acc, curr) => acc + curr, 0) / length;
      if (Number.isNaN(average)) {
        average = undefined;
      }

      max = Math.max(...arr);
      if (Number.isNaN(max)) {
        max = undefined;
      }

      min = Math.min(...arr);
      if (Number.isNaN(min)) {
        min = undefined;
      }
    } else {
      average = undefined;
      min = undefined;
      max = undefined;
    }

    return {
      average,
      length,
      min,
      max,
    };
  }
  return undefined;
}

export default analyzeArray;
