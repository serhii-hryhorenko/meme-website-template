/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineConfig } from "vite";
import fs from "fs";
import path from "path";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function scssVarsPlugin(options: any = {}) {
  return {
    name: "scss-vars-plugin",

    buildStart() {
      const jsonPath =
        options.jsonPath || path.resolve(__dirname, "./src/assets/config.json");
      const scssPath =
        options.scssPath ||
        path.resolve(__dirname, "./src/assets/color-scheme.scss");

      let jsonData;
      try {
        jsonData = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));
        console.log("Parsed JSON data:", jsonData);
      } catch (error) {
        throw new Error(
          `Failed to read or parse JSON file at ${jsonPath}: ${error}`,
        );
      }

      let scssContent = "";
      for (const [key, value] of Object.entries(jsonData.colorScheme)) {
        if (Array.isArray(value)) {
          const scssList = value.join(", ");
          scssContent += `$${key}: (${scssList});\n`;
        } else if (typeof value === "string" || typeof value === "number") {
          scssContent += `$${key}: ${value};\n`;
        } else {
          console.warn(`Skipping unsupported value for key "${key}":`, value);
        }
      }

      if (!scssContent.trim()) {
        throw new Error(
          "SCSS content is empty. Ensure your JSON file contains valid data.",
        );
      }

      try {
        fs.writeFileSync(scssPath, scssContent, "utf-8");
        console.log("SCSS file generated at:", scssPath);
      } catch (error) {
        throw new Error(`Failed to write SCSS file at ${scssPath}: ${error}`);
      }
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [scssVarsPlugin(), react(), svgr()],
});
