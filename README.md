# Birthday Website

A React + Vite birthday surprise site, built from the Figma design "brithdaywebsite".

## Run it locally

1. Install Node.js 18 or newer.
2. Open this folder in VS Code.
3. In the terminal, run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the address shown in the terminal (usually http://localhost:5173).

To build for production: `npm run build`. Preview the build with `npm run preview`.

## Where to edit

- **Text and messages:** `src/data/birthdayData.js`. All the copy lives here.
- **Colours, fonts, spacing:** `src/index.css` (the design tokens are at the top).
- **Sections:** one component per section in `src/components/`.
- **Section order:** `src/App.jsx`.

## Notes

- The Memories section was removed because there are no photos yet. To add it back, add photos to `public/images/` and build a gallery component.
- There is no music. To add it, put an audio file in `public/audio/` and add a play/pause button.
- The cake is a drawn SVG stand-in, because the Figma artwork could not be downloaded.
- The copy is placeholder text from the Figma design. Replace it in `birthdayData.js`.
