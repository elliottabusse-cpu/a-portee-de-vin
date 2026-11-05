/* À portée de vin — scripts communs */
(function () {
  var calme = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function $(s, c) { return (c || document).querySelector(s); }
  function $$(s, c) { return [].slice.call((c || document).querySelectorAll(s)); }
  function lire(k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } }
  function ecrire(k, v) { try { window.localStorage.setItem(k, v); } catch (e) {} }
  var fmt = function (n, d) { return n.toLocaleString('fr-FR', { minimumFractionDigits: d || 0, maximumFractionDigits: d || 0 }); };

  /* ---------- Porte d'âge : simple fenêtre ---------- */
  var age = $('#age');
  var ok = lire('casier-majeur');
  if (age && !(ok && Date.now() - Number(ok) < 30 * 864e5)) {
    age.classList.add('on'); age.setAttribute('aria-hidden', 'false'); document.body.classList.add('lock');
    var oui = $('[data-age="oui"]', age); setTimeout(function () { oui && oui.focus(); }, 60);
    oui.addEventListener('click', function () {
      ecrire('casier-majeur', String(Date.now()));
      age.classList.remove('on'); age.setAttribute('aria-hidden', 'true'); document.body.classList.remove('lock');
    });
    $('[data-age="non"]', age).addEventListener('click', function () {
      $('.rangee', age).hidden = true; $('.refus', age).hidden = false;
    });
  }

  /* ---------- Fondu entre les pages ---------- */
  var voile = $('.voile-page');
  window.allerVers = function (href) {
    if (!voile || calme) { window.location.href = href; return; }
    voile.classList.add('sortie');
    setTimeout(function () { window.location.href = href; }, 430);
  };
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href]');
    if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || a.target) return;
    var h = a.getAttribute('href');
    if (!h || h.charAt(0) === '#' || /^[a-z]+:/i.test(h)) return;
    var page = window.location.pathname.split('/').pop() || 'index.html';
    if (h.indexOf('#') > 0 && h.split('#')[0] === page) return;
    e.preventDefault(); window.allerVers(h);
  });
  window.addEventListener('pageshow', function () { if (voile) voile.classList.remove('sortie'); });

  /* ---------- Menu mobile ---------- */
  var burger = $('.burger'), tiroir = $('.tiroir');
  if (burger && tiroir) burger.addEventListener('click', function () {
    var o = tiroir.classList.toggle('on');
    burger.setAttribute('aria-expanded', o ? 'true' : 'false');
    document.body.classList.toggle('lock', o);
  });

  /* ---------- Apparitions, compteurs ---------- */
  function compter(el) {
    var cible = parseFloat(el.dataset.cible), dec = parseInt(el.dataset.dec || '0', 10);
    if (calme) { el.textContent = fmt(cible, dec); return; }
    var t0 = null;
    function pas(t) { if (!t0) t0 = t; var p = Math.min(1, (t - t0) / 1500), e = 1 - Math.pow(1 - p, 3); el.textContent = fmt(cible * e, dec); if (p < 1) requestAnimationFrame(pas); }
    requestAnimationFrame(pas);
  }
  var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (!e.isIntersecting) return; io.unobserve(e.target);
      if (e.target.classList.contains('revele')) e.target.classList.add('vu');
      if (e.target.dataset.cible) compter(e.target);
    });
  }, { threshold: .2 }) : null;
  $$('.revele, [data-cible]').forEach(function (el) { if (io) io.observe(el); else el.classList.add('vu'); });

  /* ---------- Vidéos : lecture seulement à l'écran ---------- */
  $$('video[data-auto]').forEach(function (v) {
    if (calme) { v.removeAttribute('autoplay'); v.pause(); return; }
    if (!('IntersectionObserver' in window)) return;
    new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { var p = v.play(); p && p.catch(function () {}); } else v.pause(); }); }, { threshold: .1 }).observe(v);
  });

  /* ---------- Scènes 3D ---------- */
  // les étiquettes des bouteilles utilisent des polices qui n'apparaissent pas dans la page : on les charge avant de dessiner
  var polices = document.fonts ? document.fonts.ready.then(function () {
    return Promise.all(["500 40px 'Cormorant Garamond'", "italic 500 40px 'Cormorant Garamond'", "600 40px 'Cormorant Garamond'", "500 20px 'Azeret Mono'", "600 20px 'Azeret Mono'"].map(function (f) { return document.fonts.load(f).catch(function () {}); }));
  }).catch(function () {}) : Promise.resolve();
  var cave = $('.cave');
  if (cave && window.initCave) polices.then(function () {
    window.initCave(cave, $$('.cave__liens a').map(function (a, i) { return { n: i, href: a.getAttribute('href'), lien: a }; }), { etiquettes: true });
  });
  // cave du casier suivant : créée à l'approche, pour ne pas alourdir le chargement
  $$('.suivant__cave').forEach(function (el) {
    if (!window.initCave) return;
    var bloc = el.closest('.suivant'), fait = false;
    function lancer() {
      if (fait) return; fait = true;
      polices.then(function () {
        if (el.dataset.hrefs) window.initCave(el, el.dataset.hrefs.split(',').map(function (h, i) { return { n: i, href: h, lien: null }; }), { marge: 26 });
        else window.initCave(el, [{ n: +bloc.dataset.cave, href: bloc.getAttribute('href'), lien: null }], { declencheur: bloc, marge: 30 });
      });
    }
    if ('IntersectionObserver' in window) new IntersectionObserver(function (es, ob) { if (es[0].isIntersecting) { ob.disconnect(); lancer(); } }, { rootMargin: '400px 0px' }).observe(el);
    else lancer();
  });
  var verres = $('.verres__scene');
  if (verres && window.initVerres) polices.then(function () { window.initVerres(verres, [{ remplissage: .5 }, { remplissage: .7 }]); });

  /* ---------- Loi : deux côtés, interdit / autorisé ---------- */
  var cotes = $('#cotes');
  if (cotes) {
    var onglets = $$('.cote', cotes);
    var choisir = function (b) {
      onglets.forEach(function (o) {
        var actif = o === b;
        o.setAttribute('aria-selected', actif ? 'true' : 'false'); o.tabIndex = actif ? 0 : -1;
        document.getElementById(o.getAttribute('aria-controls')).hidden = !actif;
      });
    };
    onglets.forEach(function (o, k) {
      o.addEventListener('click', function () { choisir(o); });
      o.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { e.preventDefault(); var n = onglets[(k + 1) % 2]; n.focus(); choisir(n); }
      });
    });
  }

  /* ---------- Loi : horloge d'Aix, cadran de 12 h (le deuxième tour passe de midi à minuit) ---------- */
  var heure = $('#heure'), cadran = $('#cadran');
  if (heure && cadran) {
    var dans = true, out = $('#heure-out'), verdict = $('#verdict'), arc = $('#arc-interdit'), periode = $('#periode');
    var aigH = $('.aiguille--h', cadran), aigM = $('.aiguille--m', cadran), angH = null, angM = null;
    var pres = function (ancien, cible) { if (ancien === null) return cible; var d = ((cible - ancien) % 360 + 540) % 360 - 180; return ancien + d; };
    // secteur du cadran entre deux positions d'heure (cadran de 12 h)
    var secteur = function (h1, h2, r1, r2) {
      function pt(h, r) { var a = (h % 12) * 30 * Math.PI / 180; return (200 + r * Math.sin(a)).toFixed(2) + ' ' + (200 - r * Math.cos(a)).toFixed(2); }
      var ecart = h2 - h1; if (ecart <= 0) return '';
      var bal = ecart * 30 > 180 ? 1 : 0;
      if (ecart >= 12) return 'M200 ' + (200 - r2) + ' A' + r2 + ' ' + r2 + ' 0 1 1 199.99 ' + (200 - r2) + ' Z';
      return 'M' + pt(h1, r2) + ' A' + r2 + ' ' + r2 + ' 0 ' + bal + ' 1 ' + pt(h2, r2) + ' L' + pt(h2, r1) + ' A' + r1 + ' ' + r1 + ' 0 ' + bal + ' 0 ' + pt(h1, r1) + ' Z';
    };
    var texteHeure = function (h) { var hh = Math.floor(h), mm = Math.round((h - hh) * 60); return hh + ' h ' + (mm < 10 ? '0' : '') + mm; };
    var maj = function () {
      var h = parseFloat(heure.value), debutNuit = 22;
      out.textContent = texteHeure(h);
      cadran.setAttribute('aria-valuenow', h); cadran.setAttribute('aria-valuetext', texteHeure(h));
      angH = pres(angH, (h % 12) * 30); angM = pres(angM, (h % 1) * 360);
      aigH.style.transform = 'rotate(' + angH + 'deg)'; aigM.style.transform = 'rotate(' + angM + 'deg)';
      periode.textContent = h < 6 ? 'NUIT' : h < 12 ? 'MATIN' : h < 18 ? 'APRÈS-MIDI' : 'SOIR';
      // la zone interdite affichée dépend du tour en cours : le soir (21 h ou 22 h à minuit), puis la nuit (minuit à 8 h)
      arc.setAttribute('d', h >= 12 ? secteur(debutNuit - 12, 12, 150, 172) : secteur(0, 8, 150, 172));
      arc.classList.toggle('hors', !dans);
      var nuit = (h >= 22 || h < 8), c, t, p;
      if (dans && nuit) { c = 'non'; t = 'Retrait impossible'; p = 'En Gironde, entre 22 h et 8 h, seules les boissons sans alcool peuvent être vendues à emporter, vente à distance comprise. Ni la licence ni la formation de vente de nuit n’y changent rien.'; }
      else if (!dans && nuit) { c = 'reserve'; t = 'Possible, sous condition'; p = 'Ailleurs en France, vendre entre 22 h et 8 h exige la formation de vente de nuit, sauf arrêté local plus strict.'; }
      else { c = ''; t = 'Retrait possible'; p = 'Aux heures de jour, retirer une commande payée en ligne est une vente à emporter classique, sous petite licence à emporter.'; }
      verdict.className = 'verdict ' + c; verdict.innerHTML = '<b>' + t + '</b><p>' + p + '</p>';
    };
    var valeur = parseFloat(heure.value); // valeur continue pendant qu'on tourne l'aiguille
    var regler = function (h) {
      valeur = ((h % 24) + 24) % 24;
      var q = (Math.round(valeur * 4) / 4) % 24;
      if (String(q) !== heure.value) { heure.value = q; maj(); }
    };
    // l'angle ne donne l'heure qu'à 12 h près : on garde, des deux heures possibles, la plus proche de l'heure courante
    var depuisPointeur = function (e) {
      var r = cadran.getBoundingClientRect(), x = e.clientX - (r.left + r.width / 2), y = e.clientY - (r.top + r.height / 2);
      var h12 = ((Math.atan2(x, -y) * 180 / Math.PI + 360) % 360) / 30;
      var dist = function (a) { var d = Math.abs(a - valeur) % 24; return Math.min(d, 24 - d); };
      regler(dist(h12) <= dist(h12 + 12) ? h12 : h12 + 12);
    };
    cadran.addEventListener('pointerdown', function (e) { e.preventDefault(); try { cadran.setPointerCapture(e.pointerId); } catch (x) {} cadran.classList.add('tient'); valeur = parseFloat(heure.value); depuisPointeur(e); cadran.focus({ preventScroll: true }); });
    cadran.addEventListener('pointermove', function (e) { if (cadran.classList.contains('tient')) depuisPointeur(e); });
    ['pointerup', 'pointercancel', 'lostpointercapture'].forEach(function (t) { cadran.addEventListener(t, function () { cadran.classList.remove('tient'); valeur = parseFloat(heure.value); }); });
    cadran.addEventListener('keydown', function (e) {
      var d = { ArrowRight: .25, ArrowUp: .25, ArrowLeft: -.25, ArrowDown: -.25, PageUp: 1, PageDown: -1 }[e.key];
      if (d) { e.preventDefault(); regler(parseFloat(heure.value) + d); }
    });
    heure.addEventListener('input', function () { valeur = parseFloat(heure.value); maj(); });
    $$('.lieu button').forEach(function (b) {
      b.addEventListener('click', function () {
        dans = b.dataset.lieu === 'dans';
        $$('.lieu button').forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
        maj();
      });
    });
    maj();
  }

  /* ---------- Concept : démo du téléphone ---------- */
  var demo = $('#demo');
  if (demo) {
    var ecran = $('.iphone__ecran', demo), doigt = $('.doigt', demo), badge = $('.panier i', demo);
    var btnsEtape = $$('.etapes button', demo), vues = $$('.vue', demo), barres = $$('.etapes .barre', demo);
    var timers = [], auto = !calme, courant = -1, lecture = $('[data-ctrl="lecture"]', demo);
    var T = vues.map(function (v) { return v.dataset.vue; });
    var DUREES = { choix: 4200, age: 4600, paie: 4200, retrait: 4600 };
    function plus(f, ms) { timers.push(setTimeout(f, ms)); }
    function stop() { timers.forEach(clearTimeout); timers = []; }
    function viser(el, tap) {
      if (!el) return;
      var r = el.getBoundingClientRect(), e = ecran.getBoundingClientRect();
      var s = e.width / ecran.offsetWidth || 1;
      doigt.style.left = ((r.left - e.left) / s + r.width / s / 2) + 'px';
      doigt.style.top = ((r.top - e.top) / s + r.height / s / 2) + 'px';
      doigt.classList.add('on');
      if (tap) plus(function () { doigt.classList.add('tape'); el.classList.add('tape'); plus(function () { doigt.classList.remove('tape'); el.classList.remove('tape'); }, 180); }, 750);
    }
    function reinit(i) {
      var v = vues[i];
      if (T[i] === 'choix') { badge.classList.remove('on'); $$('.ajout', v).forEach(function (b) { b.classList.remove('fait'); b.textContent = 'Ajouter'; }); }
      if (T[i] === 'paie') { $('.app-btn', v).hidden = false; var et = $('.etat', v); et.classList.remove('on'); et.innerHTML = '<span class="spin"></span>Paiement en cours'; }
      if (T[i] === 'age') { $('.coche', v).classList.remove('on'); $('.statut-age', v).textContent = 'Lecture de la pièce d’identité…'; }
      if (T[i] === 'retrait') { $('.mini-cave', v).classList.remove('ouvre'); }
    }
    function etatFinal(i) {
      var v = vues[i];
      if (T[i] === 'choix') { badge.classList.add('on'); var a = $('.ajout', v); a.classList.add('fait'); a.textContent = 'Ajouté'; }
      if (T[i] === 'paie') { $('.app-btn', v).hidden = true; var et = $('.etat', v); et.classList.add('on'); et.textContent = 'Paiement accepté'; }
      if (T[i] === 'age') { $('.coche', v).classList.add('on'); $('.statut-age', v).textContent = 'Majorité vérifiée'; }
      if (T[i] === 'retrait') { $('.mini-cave', v).classList.add('ouvre'); }
    }
    function montrer(i) {
      vues.forEach(function (v, k) { v.classList.toggle('on', k === i); v.classList.toggle('sortie', k === courant && k !== i); v.setAttribute('aria-hidden', k === i ? 'false' : 'true'); });
      btnsEtape.forEach(function (b, k) { b.setAttribute('aria-selected', k === i ? 'true' : 'false'); b.tabIndex = k === i ? 0 : -1; });
      barres.forEach(function (b) { b.style.transition = 'none'; b.style.width = '0'; });
      courant = i;
    }
    function jouer(i) {
      stop(); reinit(i); montrer(i);
      if (calme) { etatFinal(i); doigt.classList.remove('on'); return; }
      var v = vues[i], barre = barres[i];
      if (auto) { requestAnimationFrame(function () { barre.style.transition = 'width ' + DUREES[T[i]] + 'ms linear'; barre.style.width = '100%'; }); }
      if (T[i] === 'choix') {
        var a = $('.ajout', v);
        plus(function () { viser(a, true); }, 500);
        plus(function () { a.classList.add('fait'); a.textContent = 'Ajouté'; badge.classList.add('on'); }, 1350);
        plus(function () { viser($('.app-btn', v), true); }, 2100);
      }
      if (T[i] === 'paie') {
        plus(function () { viser($('.app-btn', v), true); }, 600);
        plus(function () { $('.app-btn', v).hidden = true; $('.etat', v).classList.add('on'); doigt.classList.remove('on'); }, 1450);
        plus(function () { $('.etat', v).textContent = 'Paiement accepté'; }, 2700);
      }
      if (T[i] === 'age') {
        doigt.classList.remove('on');
        plus(function () { $('.coche', v).classList.add('on'); $('.statut-age', v).textContent = 'Majorité vérifiée'; }, 3300);
      }
      if (T[i] === 'retrait') {
        plus(function () { viser($('.code', v), false); }, 300);
        plus(function () { doigt.classList.remove('on'); $('.mini-cave', v).classList.add('ouvre'); }, 1400);
      }
      if (auto) plus(function () { jouer((i + 1) % vues.length); }, DUREES[T[i]]);
    }
    btnsEtape.forEach(function (b, i) {
      b.addEventListener('click', function () { auto = false; lecture.textContent = 'Lecture automatique'; jouer(i); });
      b.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') { e.preventDefault(); auto = false; jouer((i + 1) % 4); btnsEtape[(i + 1) % 4].focus(); }
        if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') { e.preventDefault(); auto = false; jouer((i + 3) % 4); btnsEtape[(i + 3) % 4].focus(); }
      });
    });
    lecture.addEventListener('click', function () {
      auto = !auto; lecture.textContent = auto ? 'Mettre en pause' : 'Lecture automatique';
      if (auto) jouer(courant < 0 ? 0 : courant); else { stop(); barres.forEach(function (b) { b.style.transition = 'none'; b.style.width = '0'; }); }
    });
    lecture.textContent = auto ? 'Mettre en pause' : 'Lecture automatique';
    if (calme) { montrer(0); etatFinal(0); }
    else if ('IntersectionObserver' in window) {
      var lance = false;
      new IntersectionObserver(function (es) { if (es[0].isIntersecting && !lance) { lance = true; jouer(0); } }, { threshold: .35 }).observe(demo);
    } else jouer(0);
  }

  /* ---------- Viabilité : combien de bouteilles vendre ---------- */
  var sim = $('#simulateur');
  if (sim) {
    var scen = {
      prudent: { prix: 11, marge: 30, casier: 1300, autres: 400 },
      notre: { prix: 15, marge: 40, casier: 238, autres: 250 },
      optimiste: { prix: 19, marge: 45, casier: 238, autres: 100 }
    };
    var el = function (id) { return document.getElementById(id); };
    var eur = function (v) { return fmt(v, v % 1 ? 2 : 0) + ' €'; };
    var eur2 = function (v) { return fmt(v, 2) + ' €'; };
    var affiche = 98;
    function anime(vers) {
      var de = affiche; affiche = vers;
      if (calme) { el('seuil').textContent = fmt(vers); return; }
      var t0 = null;
      function pas(t) { if (!t0) t0 = t; var p = Math.min(1, (t - t0) / 500), e = 1 - Math.pow(1 - p, 3); el('seuil').textContent = fmt(Math.round(de + (vers - de) * e)); if (p < 1) requestAnimationFrame(pas); }
      requestAnimationFrame(pas);
    }
    function calcul() {
      var prix = +el('prix').value, marge = +el('marge').value / 100, casier = +$('input[name=casier]:checked').value, autres = +el('autres').value, salaire = +$('input[name=salaire]:checked').value;
      el('o-prix').textContent = eur(prix); el('o-marge').textContent = fmt(marge * 100) + ' %'; el('o-autres').textContent = eur(autres);
      var ht = prix / 1.2, tva = prix - ht, mb = ht * marge, achat = ht - mb, cf = casier + autres + salaire;
      var n = Math.ceil(cf / mb - 1e-9), jour = n / 30;
      anime(n);
      el('r-jour').textContent = fmt(jour, jour < 10 ? 1 : 0) + ' bouteilles';
      el('r-rempl').textContent = fmt(n / 42, 1) + ' par mois';
      el('r-ca').textContent = fmt(Math.round(n * prix)) + ' € TTC par mois';
      el('b-tva').style.flexGrow = tva; el('b-achat').style.flexGrow = achat; el('b-marge').style.flexGrow = mb;
      el('l-tva').textContent = eur2(tva); el('l-achat').textContent = eur2(achat); el('l-marge').textContent = eur2(mb);
      el('c-couts').innerHTML = fmt(casier) + ' € de casier + ' + fmt(autres) + ' € d’autres coûts' + (salaire ? ' + ' + fmt(salaire) + ' € de salaire' : '') + ' = <b>' + fmt(cf) + ' €</b>';
      el('r-unite').textContent = salaire ? 'bouteilles à vendre chaque mois pour payer le casier et un salaire' : 'bouteilles à vendre chaque mois pour payer le casier';
      el('c-seuil').innerHTML = fmt(cf) + ' € ÷ ' + eur2(mb) + ' de marge = <b>' + fmt(n) + ' bouteilles</b>';
      var k = Math.min(40, Math.ceil(jour)), html = '';
      for (var i = 0; i < k; i++) html += '<img src="assets/img/bouteille-rouge.png" alt=""' + (i === k - 1 && jour % 1 && jour < 40 ? ' class="partielle"' : '') + '>';
      el('btl-jour').innerHTML = html;
      el('btl-txt').textContent = jour > 40 ? 'Plus de 40 bouteilles par jour : le casier ne désemplit pas.' : 'Une bouteille dessinée = une bouteille vendue par jour.';
    }
    function appliquer(nom) {
      var s = scen[nom];
      el('prix').value = s.prix; el('marge').value = s.marge; el('autres').value = s.autres;
      $('input[name=casier][value="' + s.casier + '"]').checked = true;
      $$('.scenarios button').forEach(function (x) { x.setAttribute('aria-pressed', x.dataset.sc === nom ? 'true' : 'false'); });
      calcul();
    }
    $$('.scenarios button').forEach(function (b) { b.addEventListener('click', function () { appliquer(b.dataset.sc); }); });
    $$('input', sim).forEach(function (i) { i.addEventListener('input', function () { if (i.name !== 'salaire') $$('.scenarios button').forEach(function (x) { x.setAttribute('aria-pressed', 'false'); }); calcul(); }); });
    calcul();
  }
})();
