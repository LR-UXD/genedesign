import type { App } from 'vue';
import type { ArcoOptions } from '../_utils/types';
import { setGlobalConfig, getComponentPrefix } from '../_utils/global-config';
import _glassTooltip from './glass-tooltip.vue';

const GlassTooltip = Object.assign(_glassTooltip, {
    install: (app: App, options?: ArcoOptions) => {
        setGlobalConfig(app, options);
        const componentPrefix = getComponentPrefix(options);

        app.component(componentPrefix + _glassTooltip.name, _glassTooltip);
    },
});

export type GlassTooltipInstance = InstanceType<typeof _glassTooltip>;
export type { GlassTooltipProps } from './interface';


export default GlassTooltip;


