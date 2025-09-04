import type { App } from 'vue';
import type { ArcoOptions } from '../_utils/types';
import { setGlobalConfig, getComponentPrefix } from '../_utils/global-config';
import _glassButton from './glass-button.vue';

const GlassButton = Object.assign(_glassButton, {
    install: (app: App, options?: ArcoOptions) => {
        setGlobalConfig(app, options);
        const componentPrefix = getComponentPrefix(options);

        app.component(componentPrefix + _glassButton.name, _glassButton);
    },
});

export type GlassButtonInstance = InstanceType<typeof _glassButton>;
export type { GlassButtonProps } from './interface';


export default GlassButton;


