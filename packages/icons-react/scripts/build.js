const { readdirSync, writeFileSync, readFileSync } = require('fs');

// some helpful functions
const isSVG = file => /.svg$/.test(file);
const removeExtension = file => file.split('.')[0];
const toPascalCase = string =>
  string
    .match(/[a-z]+/gi)
    .map(word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase())
    .join('');

// getting all the icons
const icons = readdirSync('./src/svgs')
  .filter(isSVG)
  .map(removeExtension);

const attrsToString = attrs => {
  return Object.keys(attrs)
    .map(key => {
      if (key === 'width' || key === 'height' || key === 'fill') {
        return key + '={' + attrs[key] + '}';
      }
      if (key === 'otherProps') {
        return '{...otherProps}';
      }
      return key + '="' + attrs[key] + '"';
    })
    .join(' ');
};

const defaultAttrs = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 'size',
  height: 'size',
  viewBox: '0 0 32 32',
  fill: 'color',
  otherProps: '...otherProps',
};

const kebabToCamel = kebab => kebab.replace(/(\-\w)/g, s => s[1].toUpperCase());

const indexContent = [
  "import React from 'react';",
  '',
  icons
    .map(icon => {
      return `
export const ${toPascalCase(icon)} = (props: any) => {
  const { color, size, ...otherProps } = props;
  return (
    <svg ${attrsToString(defaultAttrs)}>
    ${kebabToCamel(
      readFileSync(`./src/svgs/${icon}.svg`)
        .toString()
        .split('\n')
        .splice(1)
        .join('\n')
        .trim(),
    )}
  );
};`;
    })
    .join('\n'),
].join('\n');

writeFileSync(`./src/index.tsx`, indexContent);

console.log('Icon component file created! ✅');
