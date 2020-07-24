// -*- coding: utf-8, tab-width: 2 -*-

function scan(ln) {
  const tr = ln.trim();
  if (tr.startsWith('#')) { return; }
  if (tr.startsWith('//')) { return; }
  return tr.split(/(['"])/).slice(2, -2).join('');
}

async function relateCjsBundles(bun, fakeCode, kind) {
  const verbMtd = bun[kind || 'needs'];
  const ids = fakeCode.split(/\n/).map(scan).filter(Boolean);
  function relate(id) { return verbMtd('bundle', 'cjs:' + id); }
  return Promise.all(ids.map(relate));
}

export default relateCjsBundles;
