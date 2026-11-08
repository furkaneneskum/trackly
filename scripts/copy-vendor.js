// Copies third-party assets into vendor/ so the site and the desktop app work offline.
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const vendorDir = path.join(root, 'vendor');
const interDir = path.join(vendorDir, 'inter');

fs.mkdirSync(interDir, { recursive: true });

fs.copyFileSync(
  path.join(root, 'node_modules', 'chart.js', 'dist', 'chart.umd.js'),
  path.join(vendorDir, 'chart.umd.js')
);

const fontFiles = path.join(root, 'node_modules', '@fontsource-variable', 'inter', 'files');
const subsets = [
  {
    name: 'latin-ext',
    range: 'U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF'
  },
  {
    name: 'latin',
    range: 'U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD'
  }
];

const css = subsets.map(({ name, range }) => {
  const file = `inter-${name}-wght-normal.woff2`;
  fs.copyFileSync(path.join(fontFiles, file), path.join(interDir, file));
  return `@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-display: swap;
  font-weight: 100 900;
  src: url(./${file}) format('woff2-variations'), url(./${file}) format('woff2');
  unicode-range: ${range};
}
`;
}).join('\n');

fs.writeFileSync(path.join(interDir, 'inter.css'), `/* Inter (variable), SIL Open Font License 1.1 — via @fontsource-variable/inter */\n${css}`);

console.log('vendor/ updated');
