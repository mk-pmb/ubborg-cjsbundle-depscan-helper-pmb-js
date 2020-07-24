// -*- coding: utf-8, tab-width: 2 -*-

import test from 'p-tape';

import usageExample from '../usage_example';

test('Usage example', async(t) => {
  t.plan(1);
  const relations = [];
  const bunStub = {
    needs(resType, spec, ...extra) {
      relations.push({ resType, spec, nExtras: extra.length });
    },
  };

  const bunPr = usageExample(bunStub);

  const urdWa = 'cjs:ubborg-usecase-rescuedisk-pmb/src/workarounds/';
  t.same(relations, [
    { resType: 'bundle', spec: 'cjs:@types/ubborg-planner-pmb', nExtras: 0 },
    { resType: 'bundle', spec: urdWa, nExtras: 0 },
  ]);
});
