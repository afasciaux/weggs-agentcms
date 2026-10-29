import { jsx as e, jsxs as a, Fragment as u } from "react/jsx-runtime";
import { i18n as S, pickPublicLocale as k, canonicalUrl as T, pickFormat as b, postSortMillis as C, buildTermUrl as E, toast as z } from "@agent-cms/runtime";
import { useState as y, useEffect as L } from "react";
import { useTranslation as I } from "react-i18next";
const N = `@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap");

:root {
  --wp-font: "Manrope", sans-serif;
  --wp-navy: #0d1b3e;
  --wp-navy-2: #162050;
  --wp-navy-3: #1e2d5a;
  --wp-blue: #2563eb;
  --wp-blue-hover: #1d4ed8;
  --wp-blue-light: #dbeafe;
  --wp-bg: #f8faff;
  --wp-bg-2: #f1f5f9;
  --wp-text: #1e293b;
  --wp-muted: #64748b;
  --wp-white: #ffffff;
  --wp-border: #e2e8f0;
  --wp-radius: 12px;
  --wp-shadow: 0 2px 16px rgba(13,27,62,.07);
  --wp-shadow-hover: 0 8px 32px rgba(13,27,62,.14);
  --wp-max: 1200px;
  --wp-header-h: 68px;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

body.weggs-pets {
  font-family: var(--wp-font);
  background: var(--wp-bg);
  color: var(--wp-text);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

/* UTILITIES */
.weggs-pets-container { max-width: var(--wp-max); margin: 0 auto; padding: 0 1.5rem; }
.weggs-pets-sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }
.weggs-pets-muted { color: var(--wp-muted); font-size: .875rem; }

/* HEADER */
.weggs-pets-header { position: sticky; top: 0; z-index: 100; background: var(--wp-navy); box-shadow: 0 2px 16px rgba(0,0,0,.25); }
.weggs-pets-header__inner { display: flex; align-items: center; gap: 1rem; height: var(--wp-header-h); }
.weggs-pets-brand { color: var(--wp-white); font-weight: 800; font-size: 1.2rem; text-decoration: none; white-space: nowrap; flex-shrink: 0; letter-spacing: -.02em; }
.weggs-pets-brand:hover { color: var(--wp-blue-light); }
.weggs-pets-nav { flex: 1; }
.weggs-pets-nav ul { display: flex; list-style: none; gap: .25rem; align-items: center; }
.weggs-pets-nav a { color: rgba(255,255,255,.82); text-decoration: none; padding: .45rem .875rem; border-radius: 8px; font-weight: 500; font-size: .9375rem; transition: all .15s; }
.weggs-pets-nav a:hover, .weggs-pets-nav a[aria-current="page"] { color: var(--wp-white); background: rgba(255,255,255,.12); }
.weggs-pets-header__actions { display: flex; align-items: center; gap: .5rem; flex-shrink: 0; }
.weggs-pets-search-btn { background: rgba(255,255,255,.1); border: 1px solid rgba(255,255,255,.18); cursor: pointer; color: rgba(255,255,255,.9); padding: .4rem .875rem; border-radius: 8px; font-family: var(--wp-font); font-size: .875rem; font-weight: 500; display: flex; align-items: center; gap: .375rem; transition: all .15s; }
.weggs-pets-search-btn:hover { background: rgba(255,255,255,.18); color: var(--wp-white); }
.weggs-pets-burger { display: none; background: none; border: none; cursor: pointer; color: var(--wp-white); padding: .5rem; font-size: 1.375rem; line-height: 1; }

/* HERO BANNER (with image) */
.weggs-pets-hero-banner { position: relative; min-height: 500px; display: flex; align-items: center; overflow: hidden; background: var(--wp-navy-2); }
.weggs-pets-hero-banner__img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; filter: brightness(.5) saturate(1.1); }
.weggs-pets-hero-banner__overlay { position: absolute; inset: 0; background: linear-gradient(to right, rgba(13,27,62,.88) 40%, rgba(13,27,62,.3) 100%); }
.weggs-pets-hero-banner__content { position: relative; z-index: 1; color: var(--wp-white); padding: 5rem 0; }
.weggs-pets-hero-banner__tag { display: inline-block; background: var(--wp-blue); color: var(--wp-white); padding: .25rem .875rem; border-radius: 100px; font-size: .8125rem; font-weight: 700; letter-spacing: .05em; text-transform: uppercase; margin-bottom: 1.25rem; }
.weggs-pets-hero-banner__title { font-size: clamp(2rem,5vw,3.25rem); font-weight: 800; line-height: 1.12; letter-spacing: -.025em; margin-bottom: 1rem; max-width: 680px; }
.weggs-pets-hero-banner__subtitle { font-size: 1.125rem; opacity: .88; max-width: 540px; line-height: 1.65; }

/* GRADIENT HERO (no image) */
.weggs-pets-hero { background: linear-gradient(135deg, var(--wp-navy) 0%, var(--wp-navy-3) 100%); color: var(--wp-white); padding: 4.5rem 0; text-align: center; }
.weggs-pets-hero h1 { font-size: clamp(1.75rem,4vw,2.75rem); font-weight: 800; letter-spacing: -.025em; margin-bottom: .75rem; }
.weggs-pets-lead { font-size: 1.125rem; opacity: .85; max-width: 520px; margin: 0 auto; }

/* MAIN */
.weggs-pets-main { min-height: 60vh; }
.weggs-pets-section { padding: 3rem 0; }
.weggs-pets-section-title { font-size: 1.375rem; font-weight: 700; margin-bottom: 2rem; color: var(--wp-navy); letter-spacing: -.01em; }

/* CARDS GRID */
.weggs-pets-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.75rem; }
.weggs-pets-card { background: var(--wp-white); border-radius: var(--wp-radius); box-shadow: var(--wp-shadow); overflow: hidden; transition: transform .2s, box-shadow .2s; display: flex; flex-direction: column; }
.weggs-pets-card:hover { transform: translateY(-4px); box-shadow: var(--wp-shadow-hover); }
.weggs-pets-card__media { aspect-ratio: 16/9; overflow: hidden; display: block; flex-shrink: 0; }
.weggs-pets-card__media img { width: 100%; height: 100%; object-fit: cover; transition: transform .35s; display: block; }
.weggs-pets-card:hover .weggs-pets-card__media img { transform: scale(1.05); }
.weggs-pets-card__body { padding: 1.25rem 1.5rem 1.5rem; display: flex; flex-direction: column; flex: 1; }
.weggs-pets-eyebrow { display: inline-block; color: var(--wp-blue); font-size: .8125rem; font-weight: 700; text-transform: uppercase; letter-spacing: .05em; text-decoration: none; margin-bottom: .5rem; }
.weggs-pets-eyebrow:hover { text-decoration: underline; }
.weggs-pets-card__title { font-size: 1.0625rem; font-weight: 700; line-height: 1.35; margin-bottom: .625rem; }
.weggs-pets-card__title a { color: var(--wp-navy); text-decoration: none; }
.weggs-pets-card__title a:hover { color: var(--wp-blue); }
.weggs-pets-card__excerpt { font-size: .9rem; color: var(--wp-muted); line-height: 1.55; flex: 1; }

/* SINGLE */
.weggs-pets-single { max-width: 780px; margin: 0 auto; padding: 2.5rem 1.5rem 4rem; }
.weggs-pets-single__hero { border-radius: var(--wp-radius); overflow: hidden; margin-bottom: 2.5rem; aspect-ratio: 16/9; }
.weggs-pets-single__hero img { width: 100%; height: 100%; object-fit: cover; display: block; }
.weggs-pets-single__meta { display: flex; align-items: center; flex-wrap: wrap; gap: .75rem; margin-bottom: .875rem; font-size: .875rem; color: var(--wp-muted); }
.weggs-pets-single__meta a { color: var(--wp-muted); text-decoration: none; }
.weggs-pets-single__meta a:hover { color: var(--wp-blue); }
.weggs-pets-single__title { font-size: clamp(1.625rem,3.5vw,2.25rem); font-weight: 800; line-height: 1.18; letter-spacing: -.025em; margin-bottom: 1.5rem; color: var(--wp-navy); }
.weggs-pets-single__excerpt { font-size: 1.0625rem; color: var(--wp-muted); border-left: 3px solid var(--wp-blue); padding-left: 1.25rem; margin-bottom: 2rem; line-height: 1.7; }

/* PROSE */
.weggs-pets-prose h2 { font-size: 1.5rem; font-weight: 700; color: var(--wp-navy); margin: 2.25rem 0 .75rem; letter-spacing: -.015em; }
.weggs-pets-prose h3 { font-size: 1.2rem; font-weight: 700; color: var(--wp-navy); margin: 1.75rem 0 .625rem; }
.weggs-pets-prose p { margin-bottom: 1.25rem; line-height: 1.8; }
.weggs-pets-prose ul, .weggs-pets-prose ol { padding-left: 1.5rem; margin-bottom: 1.25rem; }
.weggs-pets-prose li { margin-bottom: .375rem; line-height: 1.7; }
.weggs-pets-prose a { color: var(--wp-blue); }
.weggs-pets-prose a:hover { text-decoration: none; }
.weggs-pets-prose strong { font-weight: 700; color: var(--wp-navy); }
.weggs-pets-prose img { max-width: 100%; border-radius: 8px; margin: 1rem 0; display: block; }
.weggs-pets-prose blockquote { border-left: 3px solid var(--wp-blue); padding-left: 1.25rem; color: var(--wp-muted); font-style: italic; margin: 1.5rem 0; }
.weggs-pets-prose hr { border: none; border-top: 1px solid var(--wp-border); margin: 2rem 0; }

/* TAGS */
.weggs-pets-tags { display: flex; flex-wrap: wrap; gap: .5rem; margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid var(--wp-border); list-style: none; }
.weggs-pets-tag { background: var(--wp-blue-light); color: var(--wp-navy-2); padding: .3rem .875rem; border-radius: 100px; font-size: .8125rem; font-weight: 500; text-decoration: none; display: inline-block; }
.weggs-pets-tag:hover { background: var(--wp-blue); color: var(--wp-white); }

/* ARCHIVE HEADER */
.weggs-pets-archive-header { background: linear-gradient(135deg, var(--wp-navy) 0%, var(--wp-navy-3) 100%); color: var(--wp-white); padding: 3.5rem 0; }
.weggs-pets-archive-header h1 { font-size: clamp(1.75rem,4vw,2.5rem); font-weight: 800; letter-spacing: -.025em; }
.weggs-pets-archive-header p { margin-top: .625rem; opacity: .85; font-size: 1.0625rem; }

/* AUTHOR */
.weggs-pets-author-card { display: flex; align-items: center; gap: 1.5rem; }
.weggs-pets-author-avatar { width: 80px; height: 80px; border-radius: 50%; object-fit: cover; flex-shrink: 0; }
.weggs-pets-author-initials { width: 80px; height: 80px; border-radius: 50%; background: var(--wp-blue); color: var(--wp-white); display: flex; align-items: center; justify-content: center; font-size: 1.75rem; font-weight: 700; flex-shrink: 0; }
.weggs-pets-author-name { font-size: 1.75rem; font-weight: 800; }
.weggs-pets-author-bio { margin-top: .375rem; opacity: .85; }

/* LINKS */
.weggs-pets-more { text-align: center; margin-top: 2.5rem; }
.weggs-pets-back { margin: 2rem 0; }
.weggs-pets-more a, .weggs-pets-back a { color: var(--wp-blue); font-weight: 600; text-decoration: none; padding: .625rem 1.5rem; border: 2px solid var(--wp-blue); border-radius: 100px; display: inline-flex; align-items: center; gap: .375rem; transition: all .15s; }
.weggs-pets-more a:hover, .weggs-pets-back a:hover { background: var(--wp-blue); color: var(--wp-white); }

/* 404 */
.weggs-pets-404 { text-align: center; padding: 7rem 1.5rem; }
.weggs-pets-404__num { font-size: 8rem; font-weight: 900; color: var(--wp-navy); opacity: .08; line-height: 1; }
.weggs-pets-404 h2 { font-size: 1.75rem; font-weight: 700; color: var(--wp-navy); margin-top: -3rem; margin-bottom: 1rem; }
.weggs-pets-404 p { color: var(--wp-muted); margin-bottom: 2rem; }

/* FOOTER */
.weggs-pets-footer { background: var(--wp-navy); color: rgba(255,255,255,.75); padding: 2.5rem 0; margin-top: 4rem; }
.weggs-pets-footer__inner { display: flex; align-items: center; justify-content: space-between; gap: 1.5rem; flex-wrap: wrap; }
.weggs-pets-footer nav ul { display: flex; flex-wrap: wrap; gap: .375rem; list-style: none; }
.weggs-pets-footer nav a { color: rgba(255,255,255,.75); text-decoration: none; padding: .3rem .75rem; border-radius: 6px; font-size: .9rem; transition: all .15s; }
.weggs-pets-footer nav a:hover { color: var(--wp-white); background: rgba(255,255,255,.1); }
.weggs-pets-footer .weggs-pets-muted { color: rgba(255,255,255,.4); }

/* RESPONSIVE */
@media (max-width: 768px) {
  .weggs-pets-nav { display: none; }
  .weggs-pets-nav.is-open { display: block; width: 100%; order: 3; }
  .weggs-pets-nav.is-open ul { flex-direction: column; gap: .25rem; padding: .5rem 0 .75rem; }
  .weggs-pets-burger { display: flex; }
  .weggs-pets-header__inner { flex-wrap: wrap; height: auto; padding: .75rem 1.5rem; }
  .weggs-pets-hero-banner { min-height: 360px; }
  .weggs-pets-hero-banner__content { padding: 3rem 0; }
  .weggs-pets-author-card { flex-direction: column; text-align: center; }
  .weggs-pets-footer__inner { flex-direction: column; gap: 1rem; }
}
`, A = `// Weggs Pets — runtime menu loader, uploaded as theme-assets/weggs-pets-menu.js.
// Refreshes [data-cms-menu="header|footer"] from data/menu.json (the
// admin rewrites it whenever menus, posts or categories change) and
// wires the mobile burger. Fails silently: the statically rendered
// menu stays in place.
(function () {
  "use strict";
  // Sites hosted in a sub-folder carry <meta name="x-cms-base" content="/repo/">.
  var meta = document.querySelector('meta[name="x-cms-base"]');
  var BASE = (meta && meta.getAttribute("content")) || "/";
  if (BASE.charAt(BASE.length - 1) !== "/") BASE += "/";
  function withBase(url) {
    if (!url || BASE === "/" || /^([a-z][a-z0-9+.-]*:|\\/\\/|#)/i.test(url) || url.indexOf(BASE) === 0) return url;
    return BASE + url.replace(/^\\//, "");
  }
  var here = location.pathname.replace(/\\/$/, "/index.html");

  function render(items) {
    var ul = document.createElement("ul");
    items.forEach(function (item) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = withBase(item.href);
      a.textContent = item.label;
      // Anchors ("/index.html#menu") are sections, not the current page.
      if (a.pathname === here && !a.hash) a.setAttribute("aria-current", "page");
      li.appendChild(a);
      if (item.children && item.children.length) li.appendChild(render(item.children));
      ul.appendChild(li);
    });
    return ul;
  }

  function fill(menu) {
    ["header", "footer"].forEach(function (slot) {
      var host = document.querySelector('[data-cms-menu="' + slot + '"]');
      if (!host || !Array.isArray(menu[slot])) return;
      var old = host.querySelector("ul");
      var next = render(menu[slot]);
      if (old) host.replaceChild(next, old);
      else host.appendChild(next);
    });
  }

  function wireBurger() {
    var button = document.querySelector("[data-weggs-pets-burger]");
    var nav = document.getElementById("weggs-pets-nav");
    if (!button || !nav) return;
    button.addEventListener("click", function () {
      var open = button.getAttribute("aria-expanded") !== "true";
      button.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("is-open", open);
    });
  }

  function start() {
    wireBurger();
    fetch(withBase("/data/menu.json"), { credentials: "omit" })
      .then(function (res) {
        if (!res.ok) throw new Error("HTTP " + res.status);
        return res.json();
      })
      .then(fill)
      .catch(function () {});
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
`, H = `# Weggs Pets

Thème convivial pour sites animaliers — bleu nuit, hero banner, navigation par catégories

An AgentCMS theme. Install the ZIP from the admin: **Themes → Install theme**.

## Develop

\`\`\`bash
npm install
npm run build     # type-check, build dist/bundle.js, pack weggs-pets.zip
npm run check     # validate the package + render a demo site with it
npm run preview   # render the demo site and take screenshots
npm run serve     # serve the demo site on http://localhost:4321/
\`\`\`

Bump \`version\` in \`manifest.json\`, \`src/manifest.tsx\` and \`package.json\` for each release: installing a newer ZIP upgrades the theme in place.
`;
function m(t, r) {
  const n = S.getFixedT(k(r || t.settings.language || "en"), "theme-weggs-pets");
  return (s) => n(`public.${s}`);
}
function f({ items: t, currentPath: r }) {
  return /* @__PURE__ */ e("ul", { children: t.map((n) => {
    const s = r !== void 0 && n.href === `/${r}`;
    return /* @__PURE__ */ a("li", { children: [
      /* @__PURE__ */ e("a", { href: n.href, "aria-current": s ? "page" : void 0, children: n.label }),
      n.children && n.children.length > 0 && /* @__PURE__ */ e(f, { items: n.children, currentPath: r })
    ] }, n.id);
  }) });
}
function F({ site: t, currentPath: r, locale: n }) {
  var i;
  const s = m(t, n), l = ((i = t.settings.enabledPlugins) == null ? void 0 : i["agentcms-search"]) !== !1;
  return /* @__PURE__ */ e("header", { className: "weggs-pets-header", children: /* @__PURE__ */ a("div", { className: "weggs-pets-container weggs-pets-header__inner", children: [
    /* @__PURE__ */ e("a", { className: "weggs-pets-brand", href: t.homePath ?? "/index.html", children: t.settings.title }),
    /* @__PURE__ */ a("button", { className: "weggs-pets-burger", type: "button", "aria-expanded": "false", "aria-controls": "weggs-pets-nav", "data-weggs-pets-burger": !0, children: [
      /* @__PURE__ */ e("span", { className: "weggs-pets-sr-only", children: s("menu") }),
      /* @__PURE__ */ e("span", { "aria-hidden": "true", children: "☰" })
    ] }),
    /* @__PURE__ */ e("nav", { id: "weggs-pets-nav", className: "weggs-pets-nav", "aria-label": s("mainNav"), "data-cms-menu": "header", children: /* @__PURE__ */ e(f, { items: t.resolvedMenus.header, currentPath: r }) }),
    l && /* @__PURE__ */ e("div", { className: "weggs-pets-header__actions", children: /* @__PURE__ */ a("button", { type: "button", className: "weggs-pets-search-btn", "data-cms-search": !0, "aria-label": "Rechercher", children: [
      /* @__PURE__ */ a("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [
        /* @__PURE__ */ e("circle", { cx: "11", cy: "11", r: "8" }),
        /* @__PURE__ */ e("path", { d: "m21 21-4.35-4.35" })
      ] }),
      "Rechercher"
    ] }) }),
    /* @__PURE__ */ e("div", { "data-cms-langswitch": "header" })
  ] }) });
}
function U({ site: t, locale: r }) {
  const n = m(t, r);
  return /* @__PURE__ */ e("footer", { className: "weggs-pets-footer", children: /* @__PURE__ */ a("div", { className: "weggs-pets-container weggs-pets-footer__inner", children: [
    /* @__PURE__ */ e("nav", { "aria-label": n("footerNav"), "data-cms-menu": "footer", children: /* @__PURE__ */ e(f, { items: t.resolvedMenus.footer }) }),
    /* @__PURE__ */ a("p", { className: "weggs-pets-muted", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " ",
      t.settings.title
    ] }),
    /* @__PURE__ */ e("div", { "data-cms-langswitch": "footer" })
  ] }) });
}
function R({ site: t, pageTitle: r, pageDescription: n, ogImage: s, currentPath: l, currentLocale: i, children: p }) {
  const g = i || t.settings.language || "en", c = t.settings.title || "", o = r ? r.includes(c) ? r : `${r} — ${c}` : c, d = t.settings.baseUrl && l ? T(t.settings.baseUrl, l) : void 0;
  return /* @__PURE__ */ a("html", { lang: g, children: [
    /* @__PURE__ */ a("head", { children: [
      /* @__PURE__ */ e("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ e("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ e("title", { children: o }),
      n && /* @__PURE__ */ e("meta", { name: "description", content: n }),
      d && /* @__PURE__ */ e("link", { rel: "canonical", href: d }),
      /* @__PURE__ */ e("meta", { property: "og:title", content: o }),
      n && /* @__PURE__ */ e("meta", { property: "og:description", content: n }),
      s && /* @__PURE__ */ e("meta", { property: "og:image", content: s }),
      d && /* @__PURE__ */ e("meta", { property: "og:url", content: d }),
      /* @__PURE__ */ e("link", { rel: "stylesheet", href: `/${t.themeCssPath}` }),
      /* @__PURE__ */ e("script", { src: "/theme-assets/weggs-pets-menu.js", defer: !0 }),
      /* @__PURE__ */ e("meta", { name: "x-cms-head-extra" })
    ] }),
    /* @__PURE__ */ a("body", { className: "weggs-pets", children: [
      /* @__PURE__ */ e(F, { site: t, currentPath: l, locale: g }),
      /* @__PURE__ */ e("main", { className: "weggs-pets-main", children: p }),
      /* @__PURE__ */ e(U, { site: t, locale: g }),
      /* @__PURE__ */ e("script", { type: "application/x-cms-body-end" })
    ] })
  ] });
}
function P({ post: t }) {
  var n;
  const r = b(t.hero, "small");
  return /* @__PURE__ */ a("article", { className: "weggs-pets-card", children: [
    r && /* @__PURE__ */ e("a", { href: `/${t.url}`, className: "weggs-pets-card__media", tabIndex: -1, "aria-hidden": "true", children: /* @__PURE__ */ e("img", { src: r, alt: ((n = t.hero) == null ? void 0 : n.alt) ?? "", loading: "lazy" }) }),
    /* @__PURE__ */ a("div", { className: "weggs-pets-card__body", children: [
      t.category && /* @__PURE__ */ e("a", { className: "weggs-pets-eyebrow", href: t.category.url, children: t.category.name }),
      /* @__PURE__ */ e("h2", { className: "weggs-pets-card__title", children: /* @__PURE__ */ e("a", { href: `/${t.url}`, children: t.title }) }),
      t.excerpt && /* @__PURE__ */ e("p", { className: "weggs-pets-card__excerpt", children: t.excerpt }),
      t.dateLabel && /* @__PURE__ */ e("p", { className: "weggs-pets-muted", style: { marginTop: ".75rem" }, children: t.dateLabel })
    ] })
  ] });
}
function v({ posts: t, site: r }) {
  return t.length === 0 ? /* @__PURE__ */ e("p", { className: "weggs-pets-muted", children: m(r)("empty") }) : /* @__PURE__ */ e("div", { className: "weggs-pets-grid", children: t.map((n) => /* @__PURE__ */ e(P, { post: n }, n.id)) });
}
function j({ site: t, posts: r, staticPage: n, archivesLink: s }) {
  const l = m(t), i = t.themeConfig, p = (i == null ? void 0 : i.heroImageUrl) ?? "", g = (i == null ? void 0 : i.heroTitle) || t.settings.title, c = (i == null ? void 0 : i.heroSubtitle) || t.settings.description;
  return n ? /* @__PURE__ */ e("div", { className: "weggs-pets-container weggs-pets-prose", dangerouslySetInnerHTML: { __html: n.bodyHtml } }) : /* @__PURE__ */ a(u, { children: [
    p ? /* @__PURE__ */ a("div", { className: "weggs-pets-hero-banner", children: [
      /* @__PURE__ */ e("img", { className: "weggs-pets-hero-banner__img", src: p, alt: "" }),
      /* @__PURE__ */ e("div", { className: "weggs-pets-hero-banner__overlay" }),
      /* @__PURE__ */ a("div", { className: "weggs-pets-hero-banner__content weggs-pets-container", children: [
        /* @__PURE__ */ e("div", { className: "weggs-pets-hero-banner__tag", children: "🐾 Chiens & Chats" }),
        /* @__PURE__ */ e("h1", { className: "weggs-pets-hero-banner__title", children: g }),
        c && /* @__PURE__ */ e("p", { className: "weggs-pets-hero-banner__subtitle", children: c })
      ] })
    ] }) : /* @__PURE__ */ e("div", { className: "weggs-pets-hero", children: /* @__PURE__ */ a("div", { className: "weggs-pets-container", children: [
      /* @__PURE__ */ e("h1", { children: g }),
      c && /* @__PURE__ */ e("p", { className: "weggs-pets-lead", children: c })
    ] }) }),
    /* @__PURE__ */ a("div", { className: "weggs-pets-container weggs-pets-section", children: [
      /* @__PURE__ */ e("h2", { className: "weggs-pets-section-title", children: l("latestPosts") }),
      /* @__PURE__ */ e(v, { posts: r, site: t }),
      s && /* @__PURE__ */ e("p", { className: "weggs-pets-more", children: /* @__PURE__ */ e("a", { href: s.href, children: s.label }) })
    ] })
  ] });
}
function B({ site: t, post: r, bodyHtml: n, author: s, hero: l, primaryTerm: i, tags: p }) {
  const g = m(t), c = b(l, "large"), o = r.type === "post", d = new Date(C(r));
  let h = "";
  try {
    h = new Intl.DateTimeFormat(t.settings.language || "en", { dateStyle: "long" }).format(d);
  } catch {
    h = d.toDateString();
  }
  return /* @__PURE__ */ a("article", { className: "weggs-pets-single", children: [
    /* @__PURE__ */ a("header", { children: [
      o && i && /* @__PURE__ */ e("a", { className: "weggs-pets-eyebrow", href: `/${E(i)}`, children: i.name }),
      /* @__PURE__ */ e("h1", { className: "weggs-pets-single__title", children: r.title }),
      o && /* @__PURE__ */ a("p", { className: "weggs-pets-single__meta", children: [
        s && /* @__PURE__ */ a("span", { children: [
          g("by"),
          " ",
          s.url ? /* @__PURE__ */ e("a", { href: s.url, children: s.displayName }) : s.displayName
        ] }),
        /* @__PURE__ */ e("time", { dateTime: d.toISOString(), children: h })
      ] }),
      r.excerpt && /* @__PURE__ */ e("p", { className: "weggs-pets-single__excerpt", children: r.excerpt })
    ] }),
    c && /* @__PURE__ */ e("div", { className: "weggs-pets-single__hero", children: /* @__PURE__ */ e("img", { src: c, alt: (l == null ? void 0 : l.alt) ?? "" }) }),
    /* @__PURE__ */ e("div", { className: "weggs-pets-prose", dangerouslySetInnerHTML: { __html: n } }),
    o && p.length > 0 && /* @__PURE__ */ e("ul", { className: "weggs-pets-tags", "aria-label": g("tags"), children: p.map((x) => /* @__PURE__ */ e("li", { children: /* @__PURE__ */ a("span", { className: "weggs-pets-tag", children: [
      "#",
      x.name
    ] }) }, x.id)) }),
    /* @__PURE__ */ e("p", { className: "weggs-pets-back", children: /* @__PURE__ */ a("a", { href: t.homePath ?? "/index.html", children: [
      "← ",
      g("backHome")
    ] }) })
  ] });
}
function M({ site: t, term: r, posts: n, archivesLink: s }) {
  return /* @__PURE__ */ a(u, { children: [
    /* @__PURE__ */ e("div", { className: "weggs-pets-archive-header", children: /* @__PURE__ */ a("div", { className: "weggs-pets-container", children: [
      /* @__PURE__ */ e("h1", { children: r.name }),
      r.description && /* @__PURE__ */ e("p", { children: r.description })
    ] }) }),
    /* @__PURE__ */ a("div", { className: "weggs-pets-container weggs-pets-section", children: [
      /* @__PURE__ */ e(v, { posts: n, site: t }),
      s && /* @__PURE__ */ e("p", { className: "weggs-pets-more", children: /* @__PURE__ */ e("a", { href: s.href, children: s.label }) })
    ] })
  ] });
}
function $({ site: t, author: r, posts: n }) {
  const s = b(r.avatar, "small"), l = r.displayName.split(" ").map((i) => i[0]).join("").slice(0, 2).toUpperCase();
  return /* @__PURE__ */ a(u, { children: [
    /* @__PURE__ */ e("div", { className: "weggs-pets-archive-header", children: /* @__PURE__ */ e("div", { className: "weggs-pets-container", children: /* @__PURE__ */ a("div", { className: "weggs-pets-author-card", children: [
      s ? /* @__PURE__ */ e("img", { className: "weggs-pets-author-avatar", src: s, alt: "", width: 80, height: 80 }) : /* @__PURE__ */ e("div", { className: "weggs-pets-author-initials", "aria-hidden": "true", children: l }),
      /* @__PURE__ */ a("div", { children: [
        /* @__PURE__ */ e("h1", { className: "weggs-pets-author-name", children: r.displayName }),
        r.title && /* @__PURE__ */ e("p", { style: { marginTop: ".25rem", opacity: 0.8 }, children: r.title }),
        r.bio && /* @__PURE__ */ e("p", { className: "weggs-pets-author-bio", children: r.bio })
      ] })
    ] }) }) }),
    /* @__PURE__ */ e("div", { className: "weggs-pets-container weggs-pets-section", children: /* @__PURE__ */ e(v, { posts: n, site: t }) })
  ] });
}
function D({ site: t, message: r }) {
  const n = m(t);
  return /* @__PURE__ */ a("div", { className: "weggs-pets-container weggs-pets-404", children: [
    /* @__PURE__ */ e("div", { className: "weggs-pets-404__num", "aria-hidden": "true", children: "404" }),
    /* @__PURE__ */ e("h2", { children: n("notFoundTitle") }),
    /* @__PURE__ */ e("p", { children: r ?? n("notFoundText") }),
    /* @__PURE__ */ e("p", { className: "weggs-pets-more", children: /* @__PURE__ */ a("a", { href: t.homePath ?? "/index.html", children: [
      "← ",
      n("backHome")
    ] }) })
  ] });
}
const w = {
  heroImageUrl: "",
  heroTitle: "",
  heroSubtitle: "",
  accentColor: "#2563eb"
}, O = {
  heroImageUrl: { description: "URL of the full-width banner image on the home page (leave empty to use a gradient).", format: "URL" },
  heroTitle: { description: "Title displayed on the hero banner (default: site title)." },
  heroSubtitle: { description: "Subtitle / tagline displayed on the hero banner (default: site description)." },
  accentColor: { description: "Accent color for links, buttons and highlights.", format: "hex color" }
}, _ = (t) => /^#[0-9a-f]{3,8}$/i.test(t) ? t : "#2563eb";
function q(t, r) {
  const n = { ...w, ...r ?? {} };
  return n.accentColor === w.accentColor ? t : `${t}
:root{--wp-blue:${_(n.accentColor)};--wp-blue-hover:color-mix(in srgb,${_(n.accentColor)} 80%,#000)}
`;
}
function W({ config: t, save: r }) {
  const { t: n } = I("theme-weggs-pets"), [s, l] = y({ ...w, ...t }), [i, p] = y(!1);
  L(() => l({ ...w, ...t }), [t]);
  function g(o, d) {
    l((h) => ({ ...h, [o]: d }));
  }
  async function c(o) {
    o.preventDefault(), p(!0);
    try {
      await r(s), z.success(n("settings.saved"));
    } finally {
      p(!1);
    }
  }
  return /* @__PURE__ */ a("form", { onSubmit: c, "data-form-type": "other", className: "max-w-xl space-y-4", children: [
    /* @__PURE__ */ e("h1", { className: "text-xl font-semibold", children: n("settings.title") }),
    /* @__PURE__ */ a("div", { className: "space-y-1", children: [
      /* @__PURE__ */ e("label", { className: "label", htmlFor: "wp-hero-url", children: n("settings.heroImageUrl") }),
      /* @__PURE__ */ e(
        "input",
        {
          id: "wp-hero-url",
          type: "url",
          className: "input w-full",
          value: s.heroImageUrl,
          onChange: (o) => g("heroImageUrl", o.target.value),
          placeholder: "https://…"
        }
      ),
      /* @__PURE__ */ e("p", { className: "text-xs text-surface-500", children: n("settings.heroImageUrlHelp") })
    ] }),
    /* @__PURE__ */ a("div", { className: "space-y-1", children: [
      /* @__PURE__ */ e("label", { className: "label", htmlFor: "wp-hero-title", children: n("settings.heroTitle") }),
      /* @__PURE__ */ e(
        "input",
        {
          id: "wp-hero-title",
          type: "text",
          className: "input w-full",
          value: s.heroTitle,
          onChange: (o) => g("heroTitle", o.target.value)
        }
      ),
      /* @__PURE__ */ e("p", { className: "text-xs text-surface-500", children: n("settings.heroTitleHelp") })
    ] }),
    /* @__PURE__ */ a("div", { className: "space-y-1", children: [
      /* @__PURE__ */ e("label", { className: "label", htmlFor: "wp-hero-sub", children: n("settings.heroSubtitle") }),
      /* @__PURE__ */ e(
        "input",
        {
          id: "wp-hero-sub",
          type: "text",
          className: "input w-full",
          value: s.heroSubtitle,
          onChange: (o) => g("heroSubtitle", o.target.value)
        }
      ),
      /* @__PURE__ */ e("p", { className: "text-xs text-surface-500", children: n("settings.heroSubtitleHelp") })
    ] }),
    /* @__PURE__ */ a("div", { className: "space-y-1", children: [
      /* @__PURE__ */ e("label", { className: "label", htmlFor: "wp-accent", children: n("settings.accentColor") }),
      /* @__PURE__ */ a("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ e(
          "input",
          {
            id: "wp-accent",
            type: "color",
            value: s.accentColor,
            onChange: (o) => g("accentColor", o.target.value)
          }
        ),
        /* @__PURE__ */ e(
          "input",
          {
            type: "text",
            className: "input",
            value: s.accentColor,
            onChange: (o) => g("accentColor", o.target.value),
            style: { width: "120px" }
          }
        )
      ] }),
      /* @__PURE__ */ e("p", { className: "text-xs text-surface-500", children: n("settings.accentColorHelp") })
    ] }),
    /* @__PURE__ */ e("button", { type: "submit", className: "btn btn-primary", disabled: i, children: /* @__PURE__ */ e("span", { children: i ? "…" : n("settings.save") }) })
  ] });
}
const G = {
  en: {
    public: {
      menu: "Menu",
      mainNav: "Main navigation",
      footerNav: "Footer navigation",
      tags: "Tags",
      empty: "Nothing published yet.",
      notFoundTitle: "Page not found",
      notFoundText: "The page you are looking for does not exist or has been moved.",
      backHome: "Back to home",
      by: "By",
      latestPosts: "Latest articles",
      readMore: "Read more"
    },
    settings: {
      navLabel: "Weggs Pets",
      title: "Weggs Pets settings",
      heroImageUrl: "Hero banner image URL",
      heroImageUrlHelp: "Full URL of the image shown behind the home page banner. Leave empty for a gradient background.",
      heroTitle: "Banner title",
      heroTitleHelp: "Leave empty to use the site title.",
      heroSubtitle: "Banner subtitle",
      heroSubtitleHelp: "Leave empty to use the site description.",
      accentColor: "Accent color",
      accentColorHelp: "Used for links, buttons and highlights (hex, e.g. #2563eb).",
      save: "Save",
      saved: "Saved — theme CSS updated."
    }
  },
  fr: {
    public: {
      menu: "Menu",
      mainNav: "Navigation principale",
      footerNav: "Pied de page",
      tags: "Étiquettes",
      empty: "Rien de publié pour le moment.",
      notFoundTitle: "Page introuvable",
      notFoundText: "La page que vous cherchez n'existe pas ou a été déplacée.",
      backHome: "Retour à l'accueil",
      by: "Par",
      latestPosts: "Derniers articles",
      readMore: "Lire la suite"
    },
    settings: {
      navLabel: "Weggs Pets",
      title: "Réglages Weggs Pets",
      heroImageUrl: "URL de l'image de bannière",
      heroImageUrlHelp: "URL complète de l'image affichée derrière la bannière de la page d'accueil. Laisser vide pour un fond dégradé.",
      heroTitle: "Titre de la bannière",
      heroTitleHelp: "Laisser vide pour utiliser le titre du site.",
      heroSubtitle: "Sous-titre de la bannière",
      heroSubtitleHelp: "Laisser vide pour utiliser la description du site.",
      accentColor: "Couleur d'accent",
      accentColorHelp: "Utilisée pour les liens, boutons et surlignages (hex, ex: #2563eb).",
      save: "Enregistrer",
      saved: "Enregistré — CSS du thème mis à jour."
    }
  }
}, J = {
  id: "weggs-pets",
  name: "Weggs Pets",
  version: "1.0.0",
  description: "Thème convivial pour sites animaliers — bleu nuit, hero banner, navigation par catégories",
  readme: H,
  scssEntry: "theme.css",
  cssText: N,
  // Uploaded as theme-assets/weggs-pets-menu.js; fills the menus from
  // data/menu.json so menu edits don't require regenerating every page.
  jsText: A,
  // Image variants generated for every upload while this theme is active.
  imageFormats: {
    inputFormats: [".jpg", ".jpeg", ".png", ".webp", ".gif"],
    outputFormat: "webp",
    quality: 80,
    defaultFormat: "medium",
    formats: {
      small: { width: 480, height: 320, fit: "cover" },
      medium: { width: 960, height: 640, fit: "cover" },
      large: { width: 1600, height: 900, fit: "cover" }
    }
  },
  templates: {
    base: R,
    home: j,
    single: B,
    category: M,
    author: $,
    notFound: D
  },
  // /theme-settings page; the saved config is baked into the uploaded CSS.
  settings: { navLabelKey: "settings.navLabel", defaultConfig: w, component: W, schema: O },
  compileCss: (t) => q(N, t),
  // Translations, namespace "theme-weggs-pets" (admin UI + public labels).
  i18n: G
};
export {
  J as default
};
