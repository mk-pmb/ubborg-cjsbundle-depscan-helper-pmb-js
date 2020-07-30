// -*- coding: utf-8, tab-width: 2 -*-

function scan(ln) {
  const tr = ln.trim();
  if (tr.startsWith('#')) { return; }
  if (tr.startsWith('//')) { return; }
  return tr.split(/(['"])/).slice(2, -2).join('');
}

const rcb = async function relateCjsBundles(bun, fakeCode, opt) {
  if (!opt) { return rcb(bun, fakeCode, true); }
  if (typeof opt === 'string') { return rcb(bun, fakeCode, { kind: opt }); }
  const verbMtd = bun[opt.kind || 'needs'];

  const ids = fakeCode.split(/\n/).map(scan).filter(Boolean);
  const nHas = ids.length;
  let { nMin } = opt;
  if (!Number.isFinite(nMin)) { nMin = 1; }
  if (nHas < nMin) {
    throw new RangeError(`Found too few module IDs: ${nHas} < ${nMin}`);
  }

  function relate(id) { return verbMtd('bundle', 'cjs:' + id); }
  return Promise.all(ids.map(relate));
};

export default rcb;
