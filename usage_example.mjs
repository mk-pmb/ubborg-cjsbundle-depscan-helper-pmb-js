import relateCjsBundles from '.';
// In your project: … from 'ubborg-cjsbundle-depscan-helper-pmb';

export default async(bun) => {
  relateCjsBundles(bun, `
    import plannerTypes from '@types/ubborg-planner-pmb';
    require('ubborg-usecase-rescuedisk-pmb/src/workarounds/');
  `);
};
