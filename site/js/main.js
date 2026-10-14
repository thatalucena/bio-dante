/* Bio Gustavo Macedo · Forno Lab
   O conteúdo está todo no HTML; este arquivo só adiciona movimento,
   o aviso de link pendente e a abertura dos detalhes em navegadores antigos. */
(function () {
  'use strict';

  var root = document.documentElement;
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasGsap = !!(window.gsap && window.ScrollTrigger);

  /* ---------- aviso para links ainda não configurados ---------- */
  var toastEl = document.getElementById('toast');
  var toastTimer = null;
  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove('show'); }, 2400);
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[data-todo]');
    if (!a) return;
    e.preventDefault();
    toast(a.getAttribute('data-todo') + ' entra aqui. Link em configuração.');
  });

  /* ---------- detalhes (dialog) ----------
     commandfor/command abre e fecha sem JS nos navegadores atuais.
     Nos que não suportam, o clique é tratado aqui. */
  var dialogs = [].slice.call(document.querySelectorAll('dialog.sheet'));
  var nativeCommands = 'commandForElement' in HTMLButtonElement.prototype;
  if (!nativeCommands) {
    document.addEventListener('click', function (e) {
      var btn = e.target.closest('button[commandfor]');
      if (!btn) return;
      var dlg = document.getElementById(btn.getAttribute('commandfor'));
      if (!dlg) return;
      var cmd = btn.getAttribute('command');
      if (cmd === 'show-modal' && !dlg.open) dlg.showModal();
      else if (cmd === 'close') dlg.close();
    });
  }
  // fechar ao clicar fora (onde closedby="any" ainda não existe)
  dialogs.forEach(function (dlg) {
    dlg.addEventListener('click', function (e) {
      if (e.target === dlg) dlg.close();
    });
  });

  /* ---------- sem GSAP ou com movimento reduzido: conteúdo direto ---------- */
  if (!hasGsap || reduce) {
    root.classList.remove('anim');
    return;
  }

  var gsap = window.gsap;
  var ScrollTrigger = window.ScrollTrigger;
  gsap.registerPlugin(ScrollTrigger);
  window.__bioAnim = true;

  /* ---------- scroll suave (Lenis + GSAP) ---------- */
  var lenis = null;
  if (window.Lenis) {
    lenis = new window.Lenis({ duration: 1.1, smoothWheel: true });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
    gsap.ticker.lagSmoothing(0);

    // pausa o scroll da página enquanto um detalhe está aberto
    var mo = new MutationObserver(function () {
      var anyOpen = dialogs.some(function (d) { return d.open; });
      if (anyOpen) lenis.stop(); else lenis.start();
    });
    dialogs.forEach(function (d) { mo.observe(d, { attributes: true, attributeFilter: ['open'] }); });
  }

  /* ---------- entrada do topo ---------- */
  var heroEls = gsap.utils.toArray('[data-hero]');
  var revealEls = gsap.utils.toArray('[data-reveal]');
  gsap.set(heroEls.concat(revealEls), { autoAlpha: 0 });
  root.classList.remove('anim');

  gsap.timeline({ defaults: { duration: 0.6, ease: 'power3.out' } })
    .fromTo(heroEls[0], { autoAlpha: 0, scale: 0.92 }, { autoAlpha: 1, scale: 1, duration: 0.7 })
    .fromTo(heroEls.slice(1), { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, stagger: 0.06 }, '-=0.45');

  /* ---------- revelação das seções no scroll ---------- */
  ScrollTrigger.batch(revealEls, {
    start: 'top 92%',
    once: true,
    onEnter: function (batch) {
      gsap.fromTo(batch, { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.6, ease: 'power3.out', stagger: 0.07, overwrite: true });
    }
  });
  // garante que nada fique invisível se o ScrollTrigger não disparar (ex.: página impressa)
  window.addEventListener('beforeprint', function () { gsap.set(revealEls, { autoAlpha: 1, y: 0 }); });

  /* ---------- microinterações ---------- */
  var canHover = window.matchMedia('(hover: hover)').matches;

  // pressionar: leve afundada em tudo que é clicável
  gsap.utils.toArray('.cta, .more, a.soc, .lk, .wa-b, .sh-btn, .cover').forEach(function (el) {
    el.addEventListener('pointerdown', function () { gsap.to(el, { scale: 0.97, duration: 0.12, ease: 'power2.out' }); });
    ['pointerup', 'pointerleave', 'pointercancel'].forEach(function (ev) {
      el.addEventListener(ev, function () { gsap.to(el, { scale: 1, duration: 0.3, ease: 'back.out(2)' }); });
    });
  });

  if (canHover) {
    // seta do botão do quiz
    var go = document.querySelector('.cta-go');
    var cta = document.querySelector('.cta');
    if (go && cta) {
      cta.addEventListener('pointerenter', function () { gsap.to(go, { x: 4, duration: 0.25, ease: 'power2.out' }); });
      cta.addEventListener('pointerleave', function () { gsap.to(go, { x: 0, duration: 0.3, ease: 'power2.out' }); });
    }
    // cards sobem um pouco
    gsap.utils.toArray('a.soc, .lk, .cover').forEach(function (el) {
      el.addEventListener('pointerenter', function () { gsap.to(el, { y: -3, duration: 0.25, ease: 'power2.out' }); });
      el.addEventListener('pointerleave', function () { gsap.to(el, { y: 0, duration: 0.3, ease: 'power2.out' }); });
    });
  }
})();
