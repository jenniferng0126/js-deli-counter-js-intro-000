function takeANumber(currLine, name) {
  currLine.push(name);
  return `Welcome, ${name}. You are number ${currLine.length + 1} in line.`;
}
