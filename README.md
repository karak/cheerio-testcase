# cheerio/TypeScript/babel-node bug test case

## Running

1. npm install
2. npm install -g babel-node
3. tsc
4. babel-node app.js

## Results

The first form (`cheerio.load(html)`) works fine, however the second (`cheerio(html)`) does not.
