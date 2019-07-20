const path = require('path');
const fs = require('fs');
const cheerio = require('cheerio');

const iconDir = path.join(__dirname, '../src/app/shared/components/icon/svg');

const svgFileNames = fs.readdirSync(iconDir)
.filter((svgFileName) => svgFileName.split('.').pop() === 'svg');

const symbolHtml = svgFileNames
.map((svgFileName) => {
  const location = path.join(iconDir, svgFileName);
  const content = fs.readFileSync(location, 'utf8');
  const $ = cheerio.load(content);
  const iconName = svgFileName.split('.').shift();
  // 移除title标签
  $('title').remove();
  // 在svg标签上添加id，并移除xmlns属性
  $('svg')
  .attr('id', iconName)
  .attr('xmlns', null)
  .attr('width', null)
  .attr('height', null);
  // 移除path和g标签上的fill属性
  $('path').attr('fill', null);
  $('g').attr('fill', null);
  // 把svg标签替换为symbol
  return $('body').html().replace(/svg/g, 'symbol');
})
.join('\n');

const ret = `<svg style="display:none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" >\n${symbolHtml}\n</svg>`;
const retFileName = path.join(iconDir, '../icon.component.html');

fs.writeFileSync(retFileName, ret);
