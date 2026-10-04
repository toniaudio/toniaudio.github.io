/* =====================================================================
   TONI AUDIO - SITO: lingua, schede dei plugin, animazioni
   ===================================================================== */
(function () {
  "use strict";

  var LANGS = window.TONI_LANGS, I18N = window.TONI_I18N, PLUGINS = window.TONI_PLUGINS || [];
  var STORE_KEY = "toni-lang";
  var current = "en";

  // ---------- Bandiere (SVG: si vedono uguali su ogni sistema, anche Windows) ----------
  var FLAGS = {
    en: '<svg viewBox="0 0 60 30" aria-hidden="true"><clipPath id="fgb"><path d="M0 0v30h60V0z"/></clipPath><clipPath id="fgb2"><path d="M30 15h30v15zv15H0zH0V0zV0h30z"/></clipPath><g clip-path="url(#fgb)"><path d="M0 0v30h60V0z" fill="#012169"/><path d="M0 0l60 30m0-30L0 30" stroke="#fff" stroke-width="6"/><path d="M0 0l60 30m0-30L0 30" clip-path="url(#fgb2)" stroke="#C8102E" stroke-width="4"/><path d="M30 0v30M0 15h60" stroke="#fff" stroke-width="10"/><path d="M30 0v30M0 15h60" stroke="#C8102E" stroke-width="6"/></g></svg>',
    it: '<svg viewBox="0 0 3 2" aria-hidden="true"><path fill="#009246" d="M0 0h1v2H0z"/><path fill="#fff" d="M1 0h1v2H1z"/><path fill="#ce2b37" d="M2 0h1v2H2z"/></svg>',
    es: '<svg viewBox="0 0 3 2" aria-hidden="true"><path fill="#aa151b" d="M0 0h3v2H0z"/><path fill="#f1bf00" d="M0 .5h3v1H0z"/></svg>',
    de: '<svg viewBox="0 0 5 3" aria-hidden="true"><path d="M0 0h5v1H0z"/><path fill="#d00" d="M0 1h5v1H0z"/><path fill="#ffce00" d="M0 2h5v1H0z"/></svg>',
    fr: '<svg viewBox="0 0 3 2" aria-hidden="true"><path fill="#002395" d="M0 0h1v2H0z"/><path fill="#fff" d="M1 0h1v2H1z"/><path fill="#ed2939" d="M2 0h1v2H2z"/></svg>'
  };

  var ICONS = {
    win: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M3 5.1 10.4 4v7.1H3zm0 13.8 7.4 1.1v-7H3zM11.3 3.9 21 2.5v8.6h-9.7zm0 16.2 9.7 1.4v-8.5h-9.7z"/></svg>',
    mac: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M16.4 12.6c0-2.4 2-3.6 2.1-3.7-1.1-1.7-2.9-1.9-3.5-1.9-1.5-.2-2.9.9-3.7.9s-1.9-.9-3.2-.8C6.5 7.1 5 8.1 4.1 9.6c-1.8 3.1-.5 7.7 1.3 10.2.8 1.2 1.8 2.6 3.1 2.5 1.3 0 1.7-.8 3.2-.8s1.9.8 3.2.8c1.3 0 2.2-1.2 3-2.5.9-1.4 1.3-2.7 1.3-2.8 0 0-2.7-1-2.8-4.4zM14 5.4c.7-.8 1.1-1.9 1-3-1 0-2.1.7-2.8 1.5-.6.7-1.2 1.8-1 2.9 1 .1 2.1-.6 2.8-1.4z"/></svg>'
  };

  function t(key) {
    var d = I18N[current] || {};
    return d[key] != null ? d[key] : (I18N.en[key] != null ? I18N.en[key] : key);
  }
  function pick(obj) { return obj ? (obj[current] != null ? obj[current] : obj.en) : ""; }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  // ---------- Schede dei plugin ----------
  function renderPlugins() {
    var grid = document.getElementById("plugin-grid");
    if (!grid) return;
    grid.innerHTML = PLUGINS.map(function (p, i) {
      var a = p.accent || ["#38e1ff", "#8b5cf6"];
      var media = p.image
        ? '<img src="' + esc(p.image) + '" alt="' + esc(p.name) + '" loading="lazy" decoding="async">'
        : '<div class="ph"><div class="ph-grid"></div>' +
            (p.icon ? '<img class="ph-icon" src="' + esc(p.icon) + '" alt="">' : '<span class="ph-letter">' + esc(p.name.charAt(0)) + "</span>") +
            '<span class="ph-text">' + esc(t("card.placeholder")) + "</span></div>";
      var f = p.formats || {};
      var badges = "";
      if (f.vst3Win) badges += '<span class="compat">' + ICONS.win + esc(t("badge.win")) + "</span>";
      if (f.vst3Mac || f.au) badges += '<span class="compat">' + ICONS.mac + esc(t("badge.mac")) + "</span>";
      var feats = (pick(p.features) || []).map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("");
      return '<article class="card reveal" style="--a1:' + a[0] + ";--a2:" + a[1] + ";--d:" + (i * 90) + 'ms">' +
        '<div class="card-media">' + media +
          '<span class="status status-' + esc(p.status || "soon") + '"><i></i>' + esc(t("status." + (p.status || "soon"))) + "</span>" +
        "</div>" +
        '<div class="card-body">' +
          '<div class="card-head">' + (p.icon ? '<img class="card-icon" src="' + esc(p.icon) + '" alt="" width="44" height="44">' : "") +
            "<div><h3>" + esc(p.name) + '</h3><p class="card-tag">' + esc(pick(p.tag)) + "</p></div></div>" +
          '<p class="card-text">' + esc(pick(p.text)) + "</p>" +
          '<ul class="card-feats">' + feats + "</ul>" +
          '<div class="card-badges">' + badges + "</div>" +
          (f.standalone ? '<p class="card-standalone">' + esc(t("badge.standalone")) + "</p>" : "") +
        "</div></article>";
    }).join("");
    observeReveal(grid.querySelectorAll(".reveal"));
  }

  // ---------- Lingua ----------
  function applyLanguage(code) {
    current = I18N[code] ? code : "en";
    document.documentElement.lang = current;
    document.title = t("meta.title");
    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute("content", t("meta.desc"));
    Array.prototype.forEach.call(document.querySelectorAll("[data-i18n]"), function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    Array.prototype.forEach.call(document.querySelectorAll("[data-i18n-aria]"), function (el) {
      el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria")));
    });
    var btn = document.getElementById("lang-btn");
    if (btn) {
      btn.querySelector(".flag").innerHTML = FLAGS[current];
      btn.querySelector(".lang-code").textContent = current.toUpperCase();
    }
    Array.prototype.forEach.call(document.querySelectorAll("#lang-menu [role=option]"), function (li) {
      li.setAttribute("aria-selected", li.getAttribute("data-lang") === current ? "true" : "false");
    });
    renderPlugins();
    try { localStorage.setItem(STORE_KEY, current); } catch (e) { /* navigazione privata: va bene lo stesso */ }
  }

  function initialLanguage() {
    try {
      var saved = localStorage.getItem(STORE_KEY);
      if (saved && I18N[saved]) return saved;
    } catch (e) { /* niente memoria: si usa la lingua del browser */ }
    var list = navigator.languages || [navigator.language || "en"];
    for (var i = 0; i < list.length; i++) {
      var c = String(list[i]).slice(0, 2).toLowerCase();
      if (I18N[c]) return c;
    }
    return "en";
  }

  function buildLanguageMenu() {
    var btn = document.getElementById("lang-btn"), menu = document.getElementById("lang-menu");
    if (!btn || !menu) return;
    menu.innerHTML = LANGS.map(function (l) {
      return '<li role="option" tabindex="-1" data-lang="' + l.code + '"><span class="flag">' + FLAGS[l.code] + "</span>" +
             '<span class="lang-name">' + esc(l.name) + '</span><span class="lang-iso">' + l.code.toUpperCase() + "</span></li>";
    }).join("");
    var items = function () { return Array.prototype.slice.call(menu.querySelectorAll("[role=option]")); };

    function open() {
      menu.hidden = false; btn.setAttribute("aria-expanded", "true");
      var sel = menu.querySelector('[aria-selected="true"]') || items()[0];
      if (sel) sel.focus();
    }
    function close(focusBtn) {
      menu.hidden = true; btn.setAttribute("aria-expanded", "false");
      if (focusBtn) btn.focus();
    }
    btn.addEventListener("click", function (e) { e.stopPropagation(); menu.hidden ? open() : close(false); });
    menu.addEventListener("click", function (e) {
      var li = e.target.closest("[role=option]");
      if (li) { applyLanguage(li.getAttribute("data-lang")); close(true); }
    });
    menu.addEventListener("keydown", function (e) {
      var list = items(), i = list.indexOf(document.activeElement);
      if (e.key === "ArrowDown") { e.preventDefault(); list[(i + 1) % list.length].focus(); }
      else if (e.key === "ArrowUp") { e.preventDefault(); list[(i - 1 + list.length) % list.length].focus(); }
      else if (e.key === "Enter" || e.key === " ") { e.preventDefault(); if (list[i]) { applyLanguage(list[i].getAttribute("data-lang")); close(true); } }
      else if (e.key === "Escape" || e.key === "Tab") { close(e.key === "Escape"); }
    });
    document.addEventListener("click", function (e) { if (!menu.hidden && !e.target.closest(".lang")) close(false); });
  }

  // ---------- Animazioni all'ingresso nella pagina ----------
  var io = ("IntersectionObserver" in window) ? new IntersectionObserver(function (entries) {
    entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { threshold: 0.12 }) : null;
  function observeReveal(nodes) {
    Array.prototype.forEach.call(nodes, function (n) { io ? io.observe(n) : n.classList.add("in"); });
  }

  // ---------- Intestazione: si scurisce scorrendo ----------
  function initHeader() {
    var h = document.querySelector(".site-header");
    var onScroll = function () { h.classList.toggle("scrolled", window.scrollY > 12); };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // ---------- Bagliore che segue il mouse sulle schede ----------
  function initGlow() {
    document.addEventListener("pointermove", function (e) {
      var card = e.target.closest && e.target.closest(".card");
      if (!card) return;
      var r = card.getBoundingClientRect();
      card.style.setProperty("--mx", (e.clientX - r.left) + "px");
      card.style.setProperty("--my", (e.clientY - r.top) + "px");
    }, { passive: true });
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.documentElement.classList.add("js");
    buildLanguageMenu();
    applyLanguage(initialLanguage());
    observeReveal(document.querySelectorAll(".reveal:not(.card)"));
    initHeader();
    initGlow();
    var y = document.getElementById("year");
    if (y) y.textContent = String(Math.max(2026, new Date().getFullYear()));
  });
})();
