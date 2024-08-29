import { Config } from '@stencil/core';
import { ValueAccessorConfig, angularOutputTarget } from '@stencil/angular-output-target';

const angularValueAccessorBindings: ValueAccessorConfig[] = [
  {
    elementSelectors: ['inno-select[formControl]', 'inno-select[formControlName]', 'inno-select[ngModel]'],
    event: 'valueChanged',
    targetAttr: 'value',
    type: 'select',
  },
];

export const config: Config = {
  namespace: 'stencil-issue',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    angularOutputTarget({
      componentCorePackage: '@stiss',
      outputType: 'component',
      directivesProxyFile: 'lib/stencil-generated/components.ts',
      directivesArrayFile: 'lib/stencil-generated/index.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
  ],
  testing: {
    browserHeadless: "new",
  },
};
