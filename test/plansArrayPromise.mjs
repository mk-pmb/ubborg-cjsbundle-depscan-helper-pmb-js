// -*- coding: utf-8, tab-width: 2 -*-

import test from 'p-tape';
import pImmediate from 'p-immediate';

import relateCjsBundles from '..';

test('Verify plans array', async(t) => {
  t.plan(2);
  const bunStub = {
    async fancies(resType, spec, ...extra) {
      if (extra.length) { return; }
      if (resType !== 'bundle') { return; }
      await pImmediate();
      return { fancy: spec };
    },
  };

  const plansPr = relateCjsBundles(bunStub, `
    import tape from 'p-tape';
    require('"exotic" ' + "package 'name'");
    We don't even care about "inconsistent' quotes" here
  `, 'fancies');

  t.same(Array.isArray(plansPr), false);
  const plans = await plansPr;
  t.same(plans, [
    { fancy: 'cjs:p-tape' },
    { fancy: `cjs:"exotic" ' + "package 'name'` },
    { fancy: `cjs:t even care about "inconsistent' quotes` } ,
  ]);
});
