function sumStrings(a,b) {
  return ((!isNaN(parseInt(a)) ? BigInt(a):'') + (!isNaN(parseInt(b)) ? BigInt(b):'')).toString();
}