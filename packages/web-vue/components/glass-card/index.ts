import type { App } from 'vue';
import type { ArcoOptions } from '../_utils/types';
import { setGlobalConfig, getComponentPrefix } from '../_utils/global-config';
import _glassCard from './glass-card.vue';

const GlassCard = Object.assign(_glassCard, {
    install: (app: App, options?: ArcoOptions) => {
        setGlobalConfig(app, options);
        const componentPrefix = getComponentPrefix(options);

        app.component(componentPrefix + _glassCard.name, _glassCard);
    },
});

export type GlassCardInstance = InstanceType<typeof _glassCard>;
export type { GlassCardProps } from './interface';


export default GlassCard;


