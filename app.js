function moneySplitter(total, count) {
  console.log(splitThree(total));
  console.log(validate(splitThree(total), total));

  validate(splitThree(total), total);
};

function splitThree(integer) {
  let results = [];
  let result = integer / 3;
  result = Math.round(result * 100) / 100;
  for (var i=0; i<3; i++) {
    results.push(result);
  };
  return results;
};

function validate(list, total) {
  let sum = list.reduce((a, b) => a + b, 0);
  if (sum < total) {
    for(var i=0; i<list.length; i++) {
      list[i] += 0.01;
    };
  } else if (sum > total) {
    for(var i=0; i<list.length; i++) {
      list[i] -= 0.01;
    };
  };
  return list
};

moneySplitter(800.0);