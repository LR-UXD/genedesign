import type { App } from 'vue';
import type { ArcoOptions } from '../_utils/types';
import { setGlobalConfig, getComponentPrefix } from '../_utils/global-config';
import _glassDrawer from './glass-drawer.vue';

const GlassDrawer = Object.assign(_glassDrawer, {
    install: (app: App, options?: ArcoOptions) => {
        setGlobalConfig(app, options);
        const componentPrefix = getComponentPrefix(options);

        app.component(componentPrefix + _glassDrawer.name, _glassDrawer);
    },
});

export type GlassDrawerInstance = InstanceType<typeof _glassDrawer>;
export type { GlassDrawerProps } from './interface';


export default GlassDrawer;


