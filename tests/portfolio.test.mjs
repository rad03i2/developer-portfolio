import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';

const html=await readFile(new URL('../index.html',import.meta.url),'utf8');
const js=await readFile(new URL('../script.js',import.meta.url),'utf8');
const css=await readFile(new URL('../style.css',import.meta.url),'utf8');
const readme=await readFile(new URL('../README.md',import.meta.url),'utf8');

test('page exposes required portfolio sections and metadata',()=>{
  for(const value of ['id="projects"','id="skills"','id="about"','name="description"','Radwan Abdulhadi Ahmed']) assert.ok(html.includes(value),value);
});

test('external links use safe opener relationship',()=>{
  const external=[...html.matchAll(/<a[^>]+target="_blank"[^>]*>/g)].map(m=>m[0]);
  assert.ok(external.length>=2);
  external.forEach(link=>assert.match(link,/rel="noopener noreferrer"/));
});

test('script includes real project URLs and bilingual persistence',()=>{
  assert.match(js,/github\.com\/rad03i2\/SmartFileManager/);
  assert.match(js,/github\.com\/rad03i2\/sinax2/);
  assert.match(js,/portfolio-lang/);
  assert.match(js,/رضوان عبدالهادي أحمد/);
});

test('responsive and reduced-motion styles exist',()=>{
  assert.match(css,/@media\(max-width:800px\)/);
  assert.match(css,/prefers-reduced-motion/);
});

test('README is bilingual and documents author',()=>{
  assert.match(readme,/## English/);
  assert.match(readme,/## العربية/);
  assert.match(readme,/Radwan Abdulhadi Ahmed/);
  assert.match(readme,/@rad03i2/);
});
