function moneySplitter(total) {
  splitThree(total);
}

function splitThree(integer) {
  let results = [];
  let result = integer / 3;
  result = Math.round(result * 100) / 100;
  for (var i=0; i<3; i++) {
    results.push(result);
  };
  // console.log(results);
  return results;
};