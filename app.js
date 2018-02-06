import cheerio from "cheerio";
let html = `<div>
  <a href="1">1</a>
  <a href="2">2</a>
  <a href="3">3</a>
</div>`;
// This is OK
let $html1 = cheerio.load(html);
console.log($html1.root().find('a'));
// This isn't
let $html2 = cheerio(html);
console.log($html2.find('a'));
//# sourceMappingURL=app.js.map