const { writeFileSync, readFileSync } = require('fs');

const kebabToCamel = kebab => kebab.replace(/(\-\w)/g, s => s[1].toUpperCase());

const toPascalCase = string =>
  string
    .match(/[a-z]+/gi)
    .map(word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase())
    .join('');

const colors = readFileSync('./src/scss/_color.scss')
  .toString()
  .split('\n')
  .filter(line => line.match(/\$.+;/g))
  .map(line => ({
    name: line.match(/\$(.+):/)[1],
    color: line.match(/#.{6}/)[0],
  }));

const indexContent = [
  "import './scss/index.scss';",
  '',
  colors
    .map(item => {
      return `export const ${toPascalCase(item.name)} = '${item.color}';`;
    })
    .join('\n'),
].join('\n');

writeFileSync(`./src/index.ts`, indexContent);

console.log('Color file created! ✅');
