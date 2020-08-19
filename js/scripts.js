const numArray = [0,1,2,3,4,5]
const doubledArray = numArray.map(function(element) {
  return element * 2;
});
doubledArray;

const nounsArray = ["who", "what", "where", "when", "why"]
const nounsUpper = nounsArray.map (function(noun) {
  return noun;
});
nounsUpper.toUppercase(" ");