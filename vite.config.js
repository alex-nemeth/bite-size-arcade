import { resolve } from "path";
import { defineConfig } from "vite";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");

export default defineConfig({
    root,
    build: {
        outDir,
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(root, "index.html"),
                sketchbox: resolve(root, "games", "sketchbox.html"),
                tictactoe: resolve(root, "games", "tictactoe.html"),
                rockpaperscissors: resolve(
                    root,
                    "games",
                    "rockpaperscissors.html"
                ),
            },
        },
    },
});
