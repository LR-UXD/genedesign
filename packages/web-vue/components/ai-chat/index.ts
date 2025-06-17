import type { App } from 'vue';
import type { ArcoOptions } from '../_utils/types';
import { setGlobalConfig, getComponentPrefix } from '../_utils/global-config';
import _AiChat from './ai-chat.vue';

const AiChat = Object.assign(_AiChat, {
    install: (app: App, options?: ArcoOptions) => {
        setGlobalConfig(app, options);
        const componentPrefix = getComponentPrefix(options);

        app.component(componentPrefix + _AiChat.name, _AiChat);
    },
});

export type AiChatInstance = InstanceType<typeof _AiChat>;

export default AiChat;