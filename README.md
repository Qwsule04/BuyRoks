# BuyRoks

Final project for WEB Technologies 1 (Front End), Group MT-2505, Team 27.

BuyRoks is a pet rocks shop website: you can browse and search the rock catalog, save rocks to a wishlist, read reviews and create a demo account.

Live website: https://qwsule04.github.io/BuyRoks/

Repository: https://github.com/Qwsule04/BuyRoks

## Team

- Mukashev Aidos
- Nurbek Myktybek
- Sakat Kabdrash

## How to open

Open the live website link, or download the project and open index.html in a browser. jQuery and Bootstrap CSS load from a CDN, so an internet connection is needed.

## Files

```
index.html         catalog, search with categories, wishlist
about.html         about us, welcome message, FAQ, contact form
reviews.html       customer reviews, leave a review form
register.html      registration form
demo-result.html   result page for the demo forms
css/               style.css, responsive.css, wishlist.css, register.css
js/                theme.js, about.js, faq.js, search.js, wishlist.js, register.js
images/            all images
```

## jQuery features

| Task | Feature | Page | File |
|---|---|---|---|
| 1 | Welcome message, theme switch | about.html, all pages | js/about.js, js/theme.js |
| 2 | FAQ with slideToggle, fading status message | about.html | js/faq.js |
| 3 | Search with categories | index.html | js/search.js |
| 4 | Wishlist (add / remove) | index.html | js/wishlist.js |
| 5 | Registration form validation | register.html | js/register.js |

## Contribution

- Mukashev Aidos: Task 4 (wishlist), Task 5 (registration form validation), testing (Task 8), README (Task 9)
- Nurbek Myktybek: Task 1 (welcome message), Task 2 (FAQ)
- Sakat Kabdrash: Task 1 (theme switch), Task 3 (search with categories)

## Limitations

The site is frontend only. Forms are checked in the browser, nothing is sent or stored. The wishlist is cleared when the page is reloaded.
