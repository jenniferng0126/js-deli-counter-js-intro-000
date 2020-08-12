function takeANumber(currLine, name) {
  currLine.push(name);
  return `Welcome, ${name}. You are number ${currLine.length} in line.`;
}
