import { resolve } from "path";
import { defineConfig } from "vite";
import fs from "fs";

function getFiles(path){
  const files = fs.readdirSync(path);
  return files.map(file=>resolve(__dirname,path,file));
}

function getFilesRecursive(path){
  const originPath = resolve(__dirname,path);
  const filesCache = new Array(1000);
  const dirsCache = [originPath];
  
  while(dirsCache.length){
    const files = getFiles(dirsCache.pop());
    for(const file of files){
      if(!file.includes(".")){
        dirsCache.push(file);
        continue;
      }

      filesCache.push(file);
    }
  }
  
  return filesCache;
}

const files = getFilesRecursive(resolve(__dirname,"pages"));
const objectFile = {};
files.forEach(file=>objectFile[file] = file);

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        ...objectFile
      },
    },
  },
});