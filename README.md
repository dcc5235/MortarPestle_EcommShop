# Mortar & Pestle eCommerce Platform ![GitHub version doc](https://img.shields.io/badge/Version-1.0.0-red) ![GitHub last commit](https://img.shields.io/github/last-commit/dcc5235/Portfolio?style=flat-square) 

HTML5 | CSS3 | TAILWIND CSS | JAVASCRIPT | REST API

A full-featured e-commerce DEMO platform with landing page. Users are re-routed to the product shopping page from the landing page shop buttons where they can add items to the shopping basket, add additional items, and remote items from the shopping basket. 

## This is still a work in progress. However, you can demo what is available [here](https://mortarpestle.netlify.app/).

#### Landing Page
<img src="https://media-exp1.licdn.com/dms/image/C4E22AQEVKsLH7BMLtw/feedshare-shrink_800/0/1612224711679?e=1618444800&v=beta&t=8rtz30jDKrD9CasLh0PfK2OxegKT_kOdjHJKR0G4zeE" width="30%"><img src="https://media-exp1.licdn.com/dms/image/C4E22AQH9gR-AYTCSKA/feedshare-shrink_800/0/1612224711132?e=1618444800&v=beta&t=SjRBvdfrxIxznB_BZh15Tbklq72dQF9EGwjze3q9bf4" width="30%"><img src="https://media-exp1.licdn.com/dms/image/C4E22AQG2LbZIp2i4mQ/feedshare-shrink_800/0/1612224712116?e=1618444800&v=beta&t=iuwm0Bxmn_sLoVJjyy-B08eaOb8N2dpxIL9mNIUmFFk" width="30%">

#### Products Page
<img src="https://media-exp1.licdn.com/dms/image/C4E22AQEO1E9ZY3eOMw/feedshare-shrink_800/0/1615317914583?e=1618444800&v=beta&t=2d6WazK9NrOEfo2y4HOl7dBipE9YIMriNgg77JP3gJA" width="40%"><img src="https://media-exp1.licdn.com/dms/image/C4E22AQGk2GnW9xaKRg/feedshare-shrink_800/0/1615317911443?e=1618444800&v=beta&t=WHkPwhwEKBYq6WyHYnBWAVy_B1PkAdu_OMdrWK933x4" width="33%">

---

## Installation & Technologies
- Install [Node.js](https://nodejs.org/en/), current version. Must use v12+ if using Tailwind CSS.
- Install [Tailwind CSS](https://tailwindcss.com/docs/installation) using their documentation.
  - Run command line ```npm run build-css``` if following package.json file with script <br>
  ```"build-css": "tailwindcss build ./src/css/tailwind.css -o ./src/css/build-tailwind.css"```.
- Install [contentful](https://www.contentful.com/) headless CMS.
  - Run command line ```npm install contentful```.
  - Required to load product images. However, images and products.json file are included, as well.
- Install [PayPal API](https://developer.paypal.com/docs/api-basics/) for checkout buttons.
  - Sandbox account & REST API credentials are needed to test linked accounts.

## Highlights
- Product content loaded through the DOM
- Router directs users from landing page to products on click with shop button
- Product data added into basket and removed from basket, updated through local storage
- Headless CMS Contentful to store product data, retrieved data through API integration
- Partial integration of PayPal API which includes payment buttons

## Additional Features to Add
- Need to apply logic that transfers data from shopping bag to checkout page
- Full integration of PayPal API
- Optimize images for quicker load time

## Credits

- Design Inspiration from eCommerce platforms, including [Sephora](https://www.sephora.com/), [FabFitFun](https://fabfitfun.com/), [Tarte](https://tartecosmetics.com/), and [Ulta](https://www.ulta.com/).
- VIP Client Names used from a [name generator](https://www.name-generator.org.uk/quick/).
- SVG from [FabFitFun](https://fabfitfun.com/get-the-box/#plan=fffvip).
- Icons from [FontAwesome](https://fontawesome.com/).
- Photos from [Pexels](https://www.pexels.com/).
