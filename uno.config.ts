import { defineConfig, presetUno, presetIcons, presetWebFonts } from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      prefix: "i-",
      extraProperties: {
        display: "inline-block",
      },
    }),
    presetWebFonts({
      provider: "bunny", // 默认提供者
      fonts: {
        sans: "Noto Sans",
      },
    }),
  ],
});
