function takeANumber(currLine, name) {
  currLine.push(name);
  return `Welcome, ${name}. You are number ${currLine.length} in line.`;
}

function nowServing(currLine) {
  if (currLine.length === 0) {
    "There is nobody waiting to be served!";
  } else {
    let firstPerson = currLine.shift();
    return `Currently serving ${firstPerson}.`;
  }
}
