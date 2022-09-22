import MarkdownIt from 'markdown-it';
import MdDocument from './document.md?raw';
import 'github-markdown-css';

const md = new MarkdownIt();
const el = document.getElementById('markdown') as HTMLDivElement;
el.innerHTML = md.render(MdDocument);
