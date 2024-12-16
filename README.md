# Memecoin Marketing Website

A customizable template website designed specifically for memecoin projects.

## Getting Started

### Required Assets

Before deploying, ensure you have the following assets ready:

pwd src:
├── assets
│   ├── about.png
│   ├── config.json
│   ├── logo.png
│   └── main.png

`config.json` structure:
```json
{
  "coinName": "ShibaRocket",
  "slogan": "Fueled by Shibas, Powered to the Stars!",
  "description": "ShibaRocket combines the love for Shiba Inu with a passion for intergalactic crypto adventures.",
  "telegram": "https://t.me/shibarocket",
  "twitter": "https://twitter.com/shibarocket",
  "about": "ShibaRocket is a community-driven cryptocurrency project inspired by the adventurous spirit of Shiba Inu and the boundless potential of blockchain technology. Our mission is to create an interstellar ecosystem where Shiba enthusiasts can connect, trade, and explore exciting opportunities in the crypto universe.",
  "address": "0x1234567890abcdef1234567890abcdef12345678",
  "footerText": "© 2024 ShibaRocket. To the stars and beyond!",
  "colorScheme": {
    "primary": "#5dbd73",
    "accent": "#f2cb05"
  }
}
```

Place your assets in the appropriate directories as specified in the project structure.

## How to use
1. Copy your assets to src/assets
2. Run `npm run build`
