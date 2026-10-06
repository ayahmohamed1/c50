# Our Little World — Digital Gift Web App

A 7-screen animated digital gift experience (envelope → greeting → photos →
letter → song → photo grid → video), built with React (Vite), Tailwind CSS,
Framer Motion, and Lucide icons.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To build for production / deployment:

```bash
npm run build
npm run preview   # sanity-check the production build locally
```

## Swapping in a new client

**Everything content-related lives in `src/ClientData.js`.** To personalize
the gift for a new client, you only need to touch two things:

1. **Assets** — drop the client's photos, song cover, audio file, video, and
   video poster frame into `src/assets/` (filenames are up to you).
2. **`src/ClientData.js`** — update the text fields and point each `src`
   value at the files you just added, e.g.:

   ```js
   twoPhotos: {
     heading: "Our First Photos",
     caption: "You & Me",
     photos: [
       { src: "/src/assets/first-photo-1.jpg", alt: "..." },
       { src: "/src/assets/first-photo-2.jpg", alt: "..." },
     ],
   },
   ```

No component files need to change. If you'd rather not commit media files to
the repo, you can also point any `src` field at a hosted URL (Cloudinary, S3,
etc.) instead of a local asset path — both work identically.

### Required assets checklist

| Client data key                | File(s) needed                          |
|---------------------------------|------------------------------------------|
| `twoPhotos.photos[0/1].src`     | 2 photos                                  |
| `fourPhotos.photos[0-3].src`    | 4 photos                                  |
| `song.coverArt`                 | 1 square-ish album art image              |
| `song.audioSrc`                 | 1 audio file (mp3/m4a/etc.)               |
| `video.videoSrc`                | 1 video file (mp4 recommended)            |
| `video.poster`                  | 1 still frame image for the video player  |
| `envelope.customImageSrc`       | optional — your own envelope illustration |

## Page flow

`src/App.jsx` owns a single `pageIndex` piece of state and renders one page
at a time, wrapped in `<AnimatePresence>` for the slide/fade transition
between screens. The order of pages is defined in the `PAGES` array at the
top of `App.jsx` — reorder, add, or remove entries there to change the flow.

```
EnvelopePage → GreetingPage → TwoPhotosPage → MessagePage
             → SongPage → FourPhotosPage → VideoPage
```

- **EnvelopePage** has no back/next arrows (it's the entry point). Tapping
  the envelope or the "open the envelope" button advances to the greeting.
- **TwoPhotosPage / MessagePage / SongPage / FourPhotosPage** all show the
  round back/next arrow pair plus a 4-dot progress indicator (`NavArrows`).
- **VideoPage** is the final screen — its back arrow returns to the photo
  grid, and a small home button resets all the way back to the envelope.

## Design system

- **Colors** — a blush pink palette defined as the `blush` scale in
  `tailwind.config.js` (50 lightest → 900 darkest), plus `paper` for the
  letter background and `ink` as a fallback text color.
- **Type** — `font-display` (Playfair Display) for headings, `font-script`
  (Dancing Script) for romantic accents/signatures, `font-body` (Cormorant
  Garamond) for paragraph text. All three are loaded via Google Fonts in
  `index.html`.
- **Texture** — a subtle dotted "paper grain" (`.grain-bg` in
  `src/index.css`) is layered under every page background.
- **Polaroids** — `src/components/Polaroid.jsx` is a single reusable
  component (white frame, slight rotation, soft shadow, hover-to-straighten)
  used by both the two-photo and four-photo pages.

## Tech stack

- React 18 + Vite
- Tailwind CSS 3
- Framer Motion (page transitions, vinyl spin, entrance animations)
- lucide-react (icons)
