function reverseString(str) {
  if (typeof str === 'string') {
    const { length } = str;
    let reversedStr = '';
    for (let i = length - 1; i >= 0; i -= 1) {
      reversedStr += str.at(i);
    }
    return reversedStr;
  }
  return undefined;
}

export default reverseString;
