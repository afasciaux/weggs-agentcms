# Weggs Slider

Carousel slider pour les sections de la home

An AgentCMS plugin. Install the ZIP from the admin: **Plugins → Install plugin**.

## Develop

```bash
npm install
npm run build     # type-check, build dist/bundle.js, pack weggs-slider.zip
npm run check     # validate the package + render a demo site with it
npm run preview   # render the demo site and take screenshots
npm run serve     # serve the demo site on http://localhost:4321/
```

Bump `version` in `manifest.json`, `src/manifest.tsx` and `package.json` for each release: installing a newer ZIP upgrades the plugin in place.
