const fs = window.require("fs");

console.log(fs);

const files = fs.readdirSync('C:/Users/lukes/Downloads', {withFileTypes: true});
// const files = fs.readdirSync('C:/');

const readFromDir = (dirName) => {
  return fs.readdirSync(dirName, {withFileTypes: true});
}

export default readFromDir;