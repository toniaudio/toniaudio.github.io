/* =====================================================================
   TONI AUDIO - SITO: lingua, catalogo e pagine dei plugin
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

  var DETAILS = window.TONI_DETAILS || {};
  var PAGE = document.body ? document.body.getAttribute("data-page") : "home";
  var ARROW = '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h12m0 0-5-5m5 5-5 5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var REQ_ICONS = {
    win: ICONS.win,
    mac: ICONS.mac,
    host: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M7 15V11M10 15V9M13 15v-3M16 15V8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
    hw: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>'
  };

  function findPlugin(id) {
    for (var i = 0; i < PLUGINS.length; i++) if (PLUGINS[i].id === id) return PLUGINS[i];
    return null;
  }
  function accentStyle(p) {
    var a = p.accent || ["#38e1ff", "#8b5cf6"];
    return "--a1:" + a[0] + ";--a2:" + a[1];
  }
  function media(p) {
    return p.image
      ? '<img src="' + esc(p.image) + '" alt="' + esc(p.name) + '" decoding="async">'
      : '<div class="ph"><div class="ph-grid"></div>' +
          (p.icon ? '<img class="ph-icon" src="' + esc(p.icon) + '" alt="">' : '<span class="ph-letter">' + esc(p.name.charAt(0)) + "</span>") +
          '<span class="ph-text">' + esc(t("card.placeholder")) + "</span></div>";
  }
  function statusPill(p) {
    var s = p.status || "soon";
    return '<span class="status status-' + esc(s) + '"><i></i>' + esc(t("status." + s)) + "</span>";
  }
  function badges(p) {
    var f = p.formats || {}, b = "";
    if (f.vst3Win) b += '<span class="compat">' + ICONS.win + esc(t("badge.win")) + "</span>";
    if (f.vst3Mac || f.au) b += '<span class="compat">' + ICONS.mac + esc(t("badge.mac")) + "</span>";
    return b;
  }
  function head(p, tagName) {
    return '<div class="card-head">' + (p.icon ? '<img class="card-icon" src="' + esc(p.icon) + '" alt="" width="44" height="44">' : "") +
      "<div><" + tagName + ">" + esc(p.name) + "</" + tagName + '><p class="card-tag">' + esc(pick(p.tag)) + "</p></div></div>";
  }
  function list(items) {
    return (items || []).map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("");
  }

  // ---------- Pagina "Plugin": anteprime cliccabili ----------
  function renderCatalog() {
    var grid = document.getElementById("plugin-grid");
    if (!grid) return;
    grid.innerHTML = PLUGINS.map(function (p) {
      var d = DETAILS[p.id] || {};
      return '<a class="card card-link" href="' + esc(p.id) + '.html" style="' + accentStyle(p) + '">' +
        '<div class="card-media">' + media(p) + statusPill(p) + "</div>" +
        '<div class="card-body">' + head(p, "h3") +
          '<p class="card-text">' + esc(pick(d.short) || pick(p.text)) + "</p>" +
          '<span class="card-more">' + esc(t("card.more")) + ARROW + "</span>" +
        "</div></a>";
    }).join("");
    var c = document.getElementById("plugin-count");
    if (c) c.textContent = t("plugins.count").replace("{n}", PLUGINS.length);
  }

  // ---------- Pagina di un plugin ----------
  function renderDetail() {
    var box = document.getElementById("detail");
    if (!box) return;
    var id = document.body.getAttribute("data-plugin");
    var p = findPlugin(id), d = DETAILS[id] || {};
    if (!p) { box.innerHTML = '<div class="wrap noscript-detail"><p>' + esc(t("detail.notfound")) + '</p></div>'; return; }
    document.title = p.name + " · " + pick(p.tag) + " · Toni Audio";
    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute("content", pick(d.short) || pick(p.text));

    var f = p.formats || {};
    var steps = (pick(d.how) || []).map(function (s, i) {
      return '<li class="step"><span class="step-n">' + (i + 1) + "</span><h3>" + esc(s[0]) + "</h3><p>" + esc(s[1]) + "</p></li>";
    }).join("");
    var specs = (pick(d.specs) || []).map(function (r) {
      return "<tr><th scope=\"row\">" + esc(r[0]) + "</th><td>" + esc(r[1]) + "</td></tr>";
    }).join("");
    var formats = [];
    if (f.vst3Win) formats.push("VST3 (Windows)");
    if (f.vst3Mac) formats.push("VST3 (macOS)");
    if (f.au) formats.push("Audio Unit (macOS)");
    if (f.standalone) formats.push("Standalone");
    specs += "<tr><th scope=\"row\">" + esc(t("detail.formats")) + "</th><td>" + esc(formats.join(" · ")) + "</td></tr>";

    function reqCol(icon, title, items, extraHtml) {
      return '<div class="req-col"><h3>' + REQ_ICONS[icon] + "<span>" + esc(title) + "</span></h3><ul>" + list(items) + (extraHtml || "") + "</ul></div>";
    }
    var reqs =
      reqCol("win", t("req.win.t"), [t("req.win.1"), t("req.win.3")]) +
      reqCol("mac", t("req.mac.t"), [t("req.mac.1"), t("req.mac.3")]) +
      reqCol("hw", t("detail.hw"), pick(d.hw)) +
      reqCol("host", t("req.host.t"), [t("req.host.1"), t("req.host.2"), t("req.host.3")], '<li class="muted">' + esc(t("req.host.4")) + "</li>");

    var others = PLUGINS.filter(function (o) { return o.id !== p.id; }).map(function (o) {
      return '<a class="mini" href="' + esc(o.id) + '.html" style="' + accentStyle(o) + '">' +
        (o.icon ? '<img src="' + esc(o.icon) + '" alt="" width="40" height="40">' : "") +
        "<span><b>" + esc(o.name) + "</b><small>" + esc(pick(o.tag)) + "</small></span>" + ARROW + "</a>";
    }).join("");

    box.innerHTML =
      '<div class="detail-page" style="' + accentStyle(p) + '">' +
      '<section class="page-hero detail-hero">' +
        '<div class="hero-bg" aria-hidden="true"><div class="orb orb-a1"></div><div class="orb orb-a2"></div></div>' +
        '<div class="wrap">' +
          '<nav class="crumbs" aria-label="Breadcrumb"><a href="./">' + esc(t("crumb.home")) + '</a><span aria-hidden="true">/</span>' +
            '<a href="plugins.html">' + esc(t("crumb.plugins")) + '</a><span aria-hidden="true">/</span><span aria-current="page">' + esc(p.name) + "</span></nav>" +
          '<div class="detail-top">' +
            '<div class="detail-intro">' + head(p, "h1") +
              '<p class="detail-lead">' + esc(pick(p.text)) + "</p>" +
              '<div class="card-badges">' + badges(p) + "</div>" +
              (f.standalone ? '<p class="card-standalone">' + esc(t("badge.standalone")) + "</p>" : "") +
              '<p class="detail-soon"><i></i>' + esc(t(p.status === "available" ? "status.available" : "detail.soon")) + "</p>" +
            "</div>" +
            '<figure class="detail-shot">' + media(p) + "</figure>" +
          "</div>" +
        "</div>" +
      "</section>" +

      '<section class="section section-tight"><div class="wrap overview">' +
        '<div><p class="kicker">' + esc(t("detail.overview")) + '</p><div class="prose">' +
          (pick(d.long) || []).map(function (x) { return "<p>" + esc(x) + "</p>"; }).join("") + "</div></div>" +
        '<aside class="highlights"><h2>' + esc(t("detail.features")) + '</h2><ul class="card-feats">' + list(pick(p.features)) + "</ul></aside>" +
      "</div></section>" +

      '<section class="section section-tight"><div class="wrap">' +
        '<div class="section-head"><p class="kicker">' + esc(p.name) + "</p><h2>" + esc(t("detail.how")) + "</h2></div>" +
        '<ol class="steps">' + steps + "</ol>" +
      "</div></section>" +

      '<section class="section section-tight"><div class="wrap">' +
        '<div class="section-head"><p class="kicker">' + esc(p.name) + "</p><h2>" + esc(t("detail.specs")) + "</h2></div>" +
        '<div class="spec-wrap"><table class="spec-table"><tbody>' + specs + "</tbody></table></div>" +
      "</div></section>" +

      '<section class="section section-tight" id="requirements"><div class="wrap">' +
        '<div class="section-head"><p class="kicker">' + esc(p.name) + "</p><h2>" + esc(t("detail.req")) + "</h2></div>" +
        '<div class="req-grid">' + reqs + "</div>" +
      "</div></section>" +

      '<section class="section section-tight"><div class="wrap">' +
        '<div class="others-head"><h2>' + esc(t("detail.others")) + '</h2><a class="btn btn-ghost" href="plugins.html">' + esc(t("detail.back")) + "</a></div>" +
        '<div class="others">' + others + "</div>" +
      "</div></section>" +
      "</div>";
  }

  function renderPage() {
    if (PAGE === "plugins") renderCatalog();
    else if (PAGE === "detail") renderDetail();
  }

  // ---------- Lingua ----------
  function applyLanguage(code) {
    current = I18N[code] ? code : "en";
    document.documentElement.lang = current;
    var pre = PAGE === "plugins" ? "meta.plugins." : "meta.";
    document.title = t(pre + "title");
    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute("content", t(pre + "desc"));
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
    renderPage();
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

  // ---------- Intestazione: si scurisce scorrendo ----------
  function initHeader() {
    var h = document.querySelector(".site-header");
    var onScroll = function () { h.classList.toggle("scrolled", window.scrollY > 12); };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // ---------- Niente zoom con le dita (Safari su iPhone ignora user-scalable=no) ----------
  ["gesturestart", "gesturechange", "gestureend"].forEach(function (type) {
    document.addEventListener(type, function (e) { e.preventDefault(); }, { passive: false });
  });
  document.addEventListener("touchmove", function (e) {
    if (e.touches && e.touches.length > 1) e.preventDefault();   // due dita: niente zoom
  }, { passive: false });

  document.addEventListener("DOMContentLoaded", function () {
    document.documentElement.classList.add("js");
    buildLanguageMenu();
    applyLanguage(initialLanguage());
    initHeader();
    var y = document.getElementById("year");
    if (y) y.textContent = String(Math.max(2026, new Date().getFullYear()));
  });
})();
