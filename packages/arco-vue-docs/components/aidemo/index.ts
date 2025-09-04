import type { App } from 'vue';
import type { ArcoOptions } from '../_utils/types';
import { setGlobalConfig, getComponentPrefix } from '../_utils/global-config';
import _AiDemo from './aidemo.vue';

const AiDemo = Object.assign(_AiDemo, {
    install: (app: App, options?: ArcoOptions) => {
        setGlobalConfig(app, options);
        const componentPrefix = getComponentPrefix(options);

        app.component(componentPrefix + _AiDemo.name, _AiDemo);
    },
});

export type AiDemoInstance = InstanceType<typeof _AiDemo>;

export default AiDemo;