function sumStrings(a,b) {
  return ((!isNaN(parseInt(a)) ? BigInt(a):'') + (!isNaN(parseInt(b)) ? BigInt(b):'')).toString();
}

// Really happy of the code after I've seen the other solutions when I solved the Kata.
