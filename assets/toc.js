/* Builds a contents list for a case study from the headings that are
   already on the page, and marks the current section while reading.

   Progressive enhancement on purpose: with JavaScript off the page is
   exactly what it was before, minus the contents block. Nothing in the
   case study depends on this running.

   It exists because the research on product-management portfolios is
   consistent on one point: the first pass over a case study is a skim,
   and a reader who cannot see the shape of the page in one glance
   leaves before the outcomes. */
(function () {
  'use strict';

  var main = document.getElementById('main');
  if (!main) return;

  // Only headings that carry a section label above them. The case
  // studies also use h2.sh for the steps inside a walkthrough, and
  // those are part of a section rather than sections themselves.
  var heads = [];
  Array.prototype.forEach.call(main.querySelectorAll('h2.sh'), function (h) {
    var prev = h.previousElementSibling;
    if (prev && prev.classList.contains('sl')) heads.push(h);
  });
  if (heads.length < 4) return; // too short to need one

  function slug(text) {
    return text.toLowerCase().trim()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .slice(0, 48);
  }

  var items = [];

  heads.forEach(function (h) {
    var id = h.id;
    if (!id) {
      var base = slug(h.textContent) || 'section';
      id = base;
      // Check the whole document, not just the ids this script made.
      // Two pages already carry a hand-written id="research".
      var n = 2;
      while (document.getElementById(id)) { id = base + '-' + n++; }
      h.id = id;
    }
    // Prefer the small label above the heading ("Research", "Delivery"),
    // which is shorter and reads better in a list than the full heading.
    var label = null;
    var prev = h.previousElementSibling;
    if (prev && prev.classList.contains('sl')) label = prev.textContent.trim();
    items.push({ id: id, label: label || h.textContent.trim(), el: h });
  });

  var nav = document.createElement('nav');
  nav.className = 'toc';
  nav.setAttribute('aria-label', 'Case study contents');

  var heading = document.createElement('h2');
  heading.className = 'toc-h';
  heading.textContent = 'Contents';
  nav.appendChild(heading);

  var list = document.createElement('ol');
  items.forEach(function (item) {
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.href = '#' + item.id;
    a.textContent = item.label;
    li.appendChild(a);
    list.appendChild(li);
    item.link = a;
  });
  nav.appendChild(list);

  // Sits directly after the hero, where a reader lands.
  // Wrapped in the page's own container so the contents block sits on
  // the same left edge as everything else on the page.
  var wrap = document.createElement('div');
  wrap.className = 'w toc-wrap';
  wrap.appendChild(nav);

  var hero = main.querySelector('section.hero') || main.querySelector('.hero');
  if (hero) hero.insertAdjacentElement('afterend', wrap);
  else main.insertBefore(wrap, main.firstChild);

  // Current-section marking. IntersectionObserver rather than a scroll
  // listener, so this costs nothing per frame.
  if (!('IntersectionObserver' in window)) return;

  var LINE = 96; // just below the fixed page header

  function mark() {
    var current = null;
    for (var i = 0; i < items.length; i++) {
      if (items[i].el.getBoundingClientRect().top <= LINE) current = items[i];
      else break;
    }
    // Before the first heading, nothing is current rather than everything.
    items.forEach(function (item) {
      var on = item === current;
      item.link.classList.toggle('is-current', on);
      if (on) item.link.setAttribute('aria-current', 'true');
      else item.link.removeAttribute('aria-current');
    });
  }

  // The observer is only a cheap trigger to recompute. Each heading
  // crossing the line fires it, and mark() reads real positions, so the
  // marking is correct however tall the section is.
  var observer = new IntersectionObserver(mark, {
    rootMargin: '-' + LINE + 'px 0px 0px 0px',
    threshold: 0
  });
  items.forEach(function (item) { observer.observe(item.el); });
  mark();
})();
