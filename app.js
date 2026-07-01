/* Arquivo Kotovey — chrome compartilhado + interações.
   Cada página só declara <body data-page="..."> e o resto é montado aqui. */

(function () {
  var PAGES = [
    { href: "index.html",      key: "inicio",     label: "Início" },
    { href: "historia.html",   key: "historia",   label: "História" },
    { href: "diario.html",     key: "diario",     label: "Diário" },
    { href: "arvore.html",     key: "arvore",     label: "Árvore" },
    { href: "familias.html",   key: "familias",   label: "Famílias" },
    { href: "documentos.html", key: "documentos", label: "Documentos" },
    { href: "galeria.html",    key: "galeria",    label: "Galeria" },
    { href: "arte.html",       key: "arte",       label: "Arte" },
  ];

  var active = document.body.getAttribute("data-page");

  // ---- tema (aplicado o quanto antes via inline no <head>) ----
  window.alternarTema = function () {
    var atual = document.documentElement.getAttribute("data-theme");
    var novo = atual === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", novo);
    try { localStorage.setItem("tema", novo); } catch (e) {}
  };

  // ---- grão ----
  var grao = document.createElement("div");
  grao.className = "grao";
  document.body.appendChild(grao);

  // ---- nav ----
  function links(cls) {
    return PAGES.map(function (p) {
      return '<a href="' + p.href + '"' + (p.key === active ? ' class="on"' : "") + ">" + p.label + "</a>";
    }).join("");
  }

  var nav = document.createElement("nav");
  nav.className = "nav";
  nav.innerHTML =
    '<div class="nav-in">' +
      '<a class="marca" href="index.html"><b>Kotovey</b><span class="cir">Кутовий</span></a>' +
      '<div class="nav-links">' + links() + "</div>" +
      '<div class="nav-tools">' +
        '<button class="icon-btn" onclick="alternarTema()" aria-label="Tema claro/escuro">☾</button>' +
        '<button class="icon-btn burger" aria-label="Menu" onclick="document.getElementById(\'navm\').classList.toggle(\'open\')">☰</button>' +
      "</div>" +
    "</div>" +
    '<div class="nav-mobile" id="navm">' + links() + "</div>";
  document.body.insertBefore(nav, document.body.firstChild);

  // ---- footer ----
  var foot = document.createElement("footer");
  foot.innerHTML =
    '<div class="foot-in">' +
      '<div class="col-brand">' +
        '<b>Kotovey</b> &nbsp;<span class="cir">Кутовий</span>' +
        "<p>Registro público da pesquisa genealógica sobre a origem da família e seus descendentes. " +
        "Um trabalho de todos os ramos da família — conduzido, não protagonizado.</p>" +
      "</div>" +
      '<div class="foot-links">' +
        PAGES.map(function (p) { return '<a href="' + p.href + '">' + p.label + "</a>"; }).join("") +
      "</div>" +
    "</div>" +
    '<div class="colofon">' +
      "<span>Pesquisa conduzida por Miguel Kotowey · desde 02/04/2024</span>" +
      "<span>Informações sujeitas a atualização · fontes documentais</span>" +
    "</div>";
  document.body.appendChild(foot);

  // ---- lightbox de galeria ----
  var lb = document.createElement("div");
  lb.className = "lb";
  lb.innerHTML = '<span class="x">✕</span><img alt=""><div class="cap"></div>';
  document.body.appendChild(lb);
  var lbImg = lb.querySelector("img"), lbCap = lb.querySelector(".cap");
  document.addEventListener("click", function (e) {
    var fig = e.target.closest && e.target.closest(".gitem");
    if (fig && fig.querySelector("img")) {
      lbImg.src = fig.querySelector("img").src;
      var cap = fig.querySelector("figcaption");
      lbCap.textContent = cap ? cap.textContent : "";
      lb.classList.add("open");
    } else if (e.target.closest && e.target.closest(".lb")) {
      lb.classList.remove("open");
    }
  });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") lb.classList.remove("open"); });

  // ---- reveal on scroll ----
  var io = new IntersectionObserver(function (ents) {
    ents.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("reveal"); io.unobserve(en.target); } });
  }, { threshold: 0.08 });
  document.querySelectorAll("[data-reveal]").forEach(function (el) { io.observe(el); });

  // ---- perfil orientado a dados (perfil.html#slug) ----
  if (active === "perfil" && window.PESSOAS) {
    var slug = (location.hash || "").replace("#", "") || "demetrio";
    var p = window.PESSOAS[slug];
    var el = document.getElementById("perfil");
    if (!p) { el.innerHTML = '<p class="intro">Perfil não encontrado.</p>'; return; }
    document.title = p.nome + " — Arquivo Kotovey";
    var rows = p.campos.map(function (c) {
      return '<div class="row"><div class="k">' + c[0] + '</div><div class="v">' + c[1] + "</div></div>";
    }).join("");
    var qv = p.q && window.qualidadeRegistro ? window.qualidadeRegistro(p.q) : null;
    var qpanel = qv ?
      '<div class="qpanel">' +
        '<div class="qhead">' +
          '<span class="' + (qv.confirmado ? "badge-confirmado" : "badge-especulacao") + '">' +
            (qv.confirmado ? "Confirmado por documento" : "Sem documento confirmando") + "</span>" +
          '<span class="qbadge ' + qv.cls + '">' + qv.nivel + " · " + qv.score + "/100</span>" +
        "</div>" +
        '<div class="qbar"><i style="width:' + qv.score + '%"></i></div>' +
        '<div class="qbreak">' + p.q.conc + " concretos · " + p.q.hip + " hipotéticos · " + p.q.doc + " documento(s)</div>" +
      "</div>" : "";
    el.innerHTML =
      '<div class="btn-row" style="margin-bottom:30px"><a class="btn" href="arvore.html">← Retornar à árvore</a></div>' +
      '<div class="perfil-head"><h1>' + p.nome + "</h1>" +
        (p.orig ? '<span class="perfil-orig">' + p.orig + "</span>" : "") + "</div>" +
      (p.rel ? '<p class="intro">' + p.rel + "</p>" : "") +
      '<div class="perfil-grid">' + rows + "</div>" +
      qpanel +
      (p.nota ? '<div class="perfil-note">' + p.nota + "</div>" : "") +
      (p.docs ? '<div class="btn-row">' + p.docs + "</div>" : "") +
      '<div class="btn-row" style="margin-top:46px"><a class="btn" href="arvore.html">← Retornar à árvore</a></div>';
    window.addEventListener("hashchange", function () { location.reload(); });
  }

  // ---- selo de qualidade nos cards da árvore ----
  if (active === "arvore" && window.PESSOAS && window.qualidadeRegistro) {
    document.querySelectorAll('.pcard[href*="perfil.html#"]').forEach(function (card) {
      var slug = card.getAttribute("href").split("#")[1];
      var p = window.PESSOAS[slug];
      if (!p || !p.q) return;
      var qv = window.qualidadeRegistro(p.q);
      var foot = card.querySelector(".cardfoot");
      if (!foot) return;
      var chip = document.createElement("div");
      chip.className = "qline";
      chip.innerHTML =
        (qv.confirmado ? '<span class="badge-confirmado">Confirmado</span>' : "") +
        '<span class="qbadge ' + qv.cls + '">' + qv.nivel + "</span>";
      foot.insertBefore(chip, foot.firstChild);
    });
  }
})();
