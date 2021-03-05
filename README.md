# Mortar & Pestle eCommerce Platform ![GitHub version doc](https://img.shields.io/badge/Version-1.0.0-red) ![GitHub last commit](https://img.shields.io/github/last-commit/dcc5235/Portfolio?style=flat-square) 

HTML5 | CSS3 | TAILWIND CSS | JAVASCRIPT | NODE.JS | REST API

A full-featured e-commerce platform with landing page. Users are re-routed to the product shopping page from the landing page shop buttons where they can add items to the shopping basket, add additional items, and remote items from the shopping basket. 

## This is still a work in progress. However, you can demo what is available [here](https://mortarpestle.netlify.app/).

---

## Installation & Technologies
- Install [Node.js](https://nodejs.org/en/), current version. Must use v12+ if using Tailwind CSS.
- Install [Tailwind CSS](https://tailwindcss.com/docs/installation) using their documentation.
  - Run command line ```npm run build-css``` if following package.json file with script <br>
  ```"build-css": "tailwindcss build ./src/css/tailwind.css -o ./src/css/build-tailwind.css"```.
- Install [contentful](https://www.contentful.com/) headless CMS.
  - Run command line ```npm install contentful```.
- Install [PayPal API](https://developer.paypal.com/docs/api-basics/) for checkout buttons.
  - Sandbox account & REST API credentials are needed to test linked accounts.

## Highlights
- Product content loaded through the DOM
- Router directs users from landing page to products on click with shop button
- Product data added into basket and removed from basket, updated through local storage
- Headless CMS Contentful to store product data, retrieved data through API integration

## Credits

- Design Inspiration from eCommerce platforms, including [Sephora](https://www.sephora.com/), [FabFitFun](https://fabfitfun.com/), [Tarte](https://tartecosmetics.com/), and [Ulta](https://www.ulta.com/).
- VIP Client Names used from a [name generator](https://www.name-generator.org.uk/quick/).
- SVG from [FabFitFun](https://fabfitfun.com/get-the-box/#plan=fffvip).
- Icons from [FontAwesome](https://fontawesome.com/).
- Photos from [Pexels](https://www.pexels.com/).
