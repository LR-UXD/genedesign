import type { App } from 'vue';
import type { ArcoOptions } from '../_utils/types';
import { setGlobalConfig, getComponentPrefix } from '../_utils/global-config';
import _Anime from './anime.vue';

const Anime = Object.assign(_Anime, {
    install: (app: App, options?: ArcoOptions) => {
        setGlobalConfig(app, options);
        const componentPrefix = getComponentPrefix(options);

        app.component(componentPrefix + _Anime.name, _Anime);
    },
});

export type AnimeInstance = InstanceType<typeof _Anime>;

export default Anime;
