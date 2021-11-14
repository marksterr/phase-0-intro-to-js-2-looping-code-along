function writeCards(names, adjective) {
  let result = [];
  for (let i = 0; i < names.length; i++) {
    result.push(`Thank you, ${names[i]}, for the wonderful ${adjective} gift!`);
  }
  return result;
}

function countDown(num) {
  for (let i = num; i > -1; i--) {
    console.log(i);
  }
}
