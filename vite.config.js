import { resolve } from "path";
import { defineConfig } from "vite";
import fs from "fs";

const files = fs.readdirSync(resolve(__dirname,"pages"));

const objectFile = {};

for (const file of files){
    const fileName = file.replace(".html","");
    objectFile[fileName] = resolve(file);
}

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