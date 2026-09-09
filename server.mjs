import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
const root=fileURLToPath(new URL('./dist/',import.meta.url));
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.webp':'image/webp','.jpg':'image/jpeg','.png':'image/png'};
createServer(async(req,res)=>{try{let path=decodeURIComponent(new URL(req.url,'http://localhost').pathname);if(path.endsWith('/'))path+='index.html';const file=resolve(root,'.'+path);if(!file.startsWith(root.endsWith(sep)?root:root+sep)){res.writeHead(403);res.end();return}const body=await readFile(file);res.writeHead(200,{'Content-Type':types[extname(file)]||'application/octet-stream'});res.end(body)}catch{res.writeHead(404);res.end('Page not found')}}).listen(3000,'127.0.0.1',()=>console.log('Open http://localhost:3000 — Ctrl+C to stop'));
