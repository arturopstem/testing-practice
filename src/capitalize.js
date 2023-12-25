function capitalize(str) {
  if (typeof str === 'string') {
    if (str.length > 0) {
      return str.at(0).toUpperCase() + str.slice(1);
    }
    return '';
  }
  return undefined;
}

export default capitalize;
