// function shiftChar(char, key) {
//   if (/[^a-zA-Z]/.test(char)) {
//     return char;
//   }

//   const currentCode = char.charCodeAt();
//   let code;

//   if (/[a-z]/.test(char)) {
//     const virtualShift = currentCode + key - 97;
//     const baseCode = virtualShift < 0 ? 123 : 97;
//     code = baseCode + (virtualShift % 26);
//   }

//   if (/[A-Z]/.test(char)) {
//     const virtualShift = currentCode + key - 65;
//     const baseCode = virtualShift < 0 ? 91 : 65;
//     code = baseCode + (virtualShift % 26);
//   }

//   return String.fromCharCode(code);
// }

function shiftChar(char, key) {
  if (/[^a-zA-Z]/.test(char)) {
    return char;
  }

  const currentCode = char.charCodeAt();

  const lowLimitCode = /[A-Z]/.test(char) ? 65 : 97;
  const maxLimitCode = /[A-Z]/.test(char) ? 91 : 123;

  const virtualShift = currentCode + key - lowLimitCode;
  const baseCode = virtualShift < 0 ? maxLimitCode : lowLimitCode;

  const code = baseCode + (virtualShift % 26);

  return String.fromCharCode(code);
}

function ceaserCipher(str, key = 0) {
  if (typeof str === 'string' && Number.isSafeInteger(key)) {
    if (key === 0) {
      return str;
    }
    const { length } = str;
    let encryptedStr = '';
    for (let i = 0; i < length; i += 1) {
      encryptedStr += shiftChar(str.at(i), key);
    }
    return encryptedStr;
  }
  return undefined;
}

export default ceaserCipher;
