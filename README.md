# Victor Trees website draft

This is a static HTML/CSS website. It is intentionally simple: each page is a separate `.html` file, styling is in `css/style.css`, and there is only minimal JavaScript in `js/main.js` for the mobile menu and publication filters.

## Structure

- `index.html` — homepage with hero, core expertise, research themes, key discoveries, featured MONKI block, and recent news.
- `research.html` — research overview organised around three application themes: Earth observation, Venus, and Earth-like exoplanets, with polarised radiative transfer as the methodological foundation.
- `software.html` — MONKI and numerical methods.
- `publications.html` — publication cards with filters, a short summary, and one figure placeholder per paper.
- `news.html` — news cards with one figure placeholder per news item.
- `talks.html` — selected talks and public lectures.
- `cv.html` — short web CV.
- `contact.html` — contact details and profile links.
- `credits.html` — image credits and source tracking for background images, theme images, news thumbnails, and publication figures.

## Adding a figure to a publication

1. Put the image in `img/papers/`, for example:

```text
img/papers/monki.jpg
```

2. In `publications.html`, replace this block:

```html
<div class="figure-placeholder">Add figure<br>img/papers/monki.jpg</div>
```

with:

```html
<img src="img/papers/monki.jpg" alt="Short description of the figure">
```

3. Edit the `<figcaption>` below the image.

## Adding a figure to a news item

Use the same approach, but put images in `img/news/`.



## Adding an image to a key discovery

Homepage key-discovery images belong in `img/discoveries/`, for example:

```text
img/discoveries/eclipse-clouds.jpg
img/discoveries/monki.jpg
img/discoveries/ocean-exoplanets.jpg
```

In `index.html`, replace the matching placeholder block with an `<img>` tag and edit the `alt` text.

## Adding an image to a research theme

Theme images belong in `img/themes/`, for example:

```text
img/themes/venus.jpg
```

Then replace the matching placeholder block in `index.html` or `research.html` with an `<img>` tag.

## Adding a new publication

Duplicate an existing `<article class="paper-card with-figure" ...>` block in `publications.html`, edit the title, authors, summary, tags, links, and figure path.

The filter buttons use the `data-tags` attribute, for example:

```html
<article class="paper-card with-figure" data-tags="earth methods">
```

Available filters are currently: `methods`, `earth`, `venus`, and `exoplanets`.


## Managing image credits

This website now has a dedicated credits page: `credits.html`.

Use the following workflow whenever you add or replace an image:

1. Put the image in the appropriate folder, for example `img/themes/`, `img/discoveries/`, `img/software/`, `img/papers/`, or `img/news/`.
2. Add or update the short figure caption near the image if it is a scientific figure.
3. Add or update the full credit on `credits.html`.
4. If the image comes from NASA, ESA, a journal, Wikimedia, or another external source, copy the exact credit line from the source page.
5. For your own figures, a useful default is: `Figure by Victor J. H. Trees, adapted from Trees et al. (year).`

The footer of each page links to `credits.html`. This keeps the website visually clean while still making the image sources transparent.

## Homepage solar-eclipse media links

The solar-eclipse clouds key-discovery card contains buttons for major media and institutional coverage, including CNN, The New York Times, NRC, BBC Sky at Night, KNMI, TU Delft, AGU Eos, USA Today, and Forbes. Edit these directly in `index.html`.

## Local preview

From this folder:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in a browser.

## Adding a full-page background image

This version is prepared for a background image behind all panels.

1. Put your chosen image here:

```text
img/backgrounds/background.jpg
```

2. Recommended export size: about 2400 x 1400 px or 2560 x 1440 px.
   Try to keep the file below about 1 MB.

3. The background is controlled in `css/style.css` by this variable:

```css
--site-bg-image: url("../img/backgrounds/background.jpg");
```

4. If you want to use another filename, either rename your file to
   `background.jpg` or change the CSS variable.

5. The current background is NASA SVS ID 11901, `c-1920.jpg`. The public credit in `credits.html` follows the NASA SVS wording:

   NASA Goddard Space Flight Center
   Cover image courtesy of NASA/JSC

   The credits page also lists the NASA SVS contributor credits for the item.


## Homepage discovery cards

The homepage `Key discoveries` section uses full-width cards. Replace the placeholder images in `img/discoveries/` and edit the media/news links directly in `index.html`.

## Adding the ESO/M. Kornmesser exoplanet image

For the Earth-like exoplanets theme image, download the image locally and save it as:

```text
img/themes/exoplanets.jpg
```

Do not hotlink the Delft Planetary URL. The public credit is already prepared in `credits.html` and in `img/IMAGE_CREDITS.txt`:

```text
Artist's impression of the TRAPPIST-1 planetary system. Credit: ESO/M. Kornmesser.
```

If you also want to use the same image in the ocean-detection key discovery card, save a copy as:

```text
img/discoveries/ocean-exoplanets.jpg
```

Alternatively, use one of your own Trees & Stam ocean-polarisation figures for the key discovery card and keep the ESO image only as the general exoplanets theme image.



## v16 image note

The ESO/M. Kornmesser exoplanet image is included as:

```text
img/themes/exoplanets.jpg
img/discoveries/ocean-exoplanets.jpg
```

The homepage now uses real `<img>` elements for these two cards. Figure captions are kept in normal document flow so they should not overlap with card headings.

## v17 background and colour note

This version uses the blue-toned NASA SVS Earth limb image as the site-wide background:

```text
img/backgrounds/background.jpg
```

The colour palette in `css/style.css` has been shifted from green/teal to a blue atmospheric palette so it matches the background better. The relevant variables are `--accent`, `--accent-dark`, and `--accent-soft`.


## Image credits

Public image credits are kept in `credits.html`. Internal tracking notes are kept in `img/IMAGE_CREDITS.txt`.


## Software/method figure sources

The figures in `img/software/` are web-ready PNG renders made from the cropped PDF figure files in `img/software/source-pdfs/`. Use the PNG files in the HTML pages for reliable browser display; keep the PDFs as the original figure sources.


## v31 publication context workflow

The publication page is now written as a selected-publications page with short context notes. Use the `paper-summary` paragraph for the one-line result, and the `paper-details` block for two short notes: what the figure shows and why the result matters. Longer narrative pieces should live on the News & stories page rather than in the main navigation.
