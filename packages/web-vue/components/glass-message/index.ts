import type { App } from 'vue';
import type { ArcoOptions } from '../_utils/types';
import { setGlobalConfig, getComponentPrefix } from '../_utils/global-config';
import _glassMessage from './glass-message.vue';

const GlassMessage = Object.assign(_glassMessage, {
    install: (app: App, options?: ArcoOptions) => {
        setGlobalConfig(app, options);
        const componentPrefix = getComponentPrefix(options);

        app.component(componentPrefix + _glassMessage.name, _glassMessage);
    },
});

export type GlassMessageInstance = InstanceType<typeof _glassMessage>;
export type { GlassMessageProps } from './interface';


export default GlassMessage;


