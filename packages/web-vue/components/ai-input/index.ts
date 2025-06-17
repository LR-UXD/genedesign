import type { App } from 'vue';
import type { ArcoOptions } from '../_utils/types';
import { setGlobalConfig, getComponentPrefix } from '../_utils/global-config';
import _AiInput from './ai-input.vue';

const AiInput = Object.assign(_AiInput, {
    install: (app: App, options?: ArcoOptions) => {
        setGlobalConfig(app, options);
        const componentPrefix = getComponentPrefix(options);

        app.component(componentPrefix + _AiInput.name, _AiInput);
    },
});

export type AiInputInstance = InstanceType<typeof _AiInput>;

export default AiInput;
