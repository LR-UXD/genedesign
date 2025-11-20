import type { App } from 'vue';
import type { ArcoOptions } from '../_utils/types';
import { setGlobalConfig, getComponentPrefix } from '../_utils/global-config';
import _AiToolbar from './ai-toolbar.vue';

const AiToolbar = Object.assign(_AiToolbar, {
  install: (app: App, options?: ArcoOptions) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);

    app.component(componentPrefix + _AiToolbar.name, _AiToolbar as any);
  },
});

export type AiToolbarInstance = InstanceType<typeof _AiToolbar>;

export default AiToolbar;
