import type { Ref } from 'vue';
import { KEYBOARD_KEY, getKeyDownHandler } from '../../_utils/keyboard';

export const useTreeSelectKeyboard = ({
    popupVisible,
    loading,
    onPopupVisibleChange,
    enterToOpen = true,
}: {
    popupVisible: Ref<boolean>;
    loading?: Ref<boolean>;
    onPopupVisibleChange: (visible: boolean) => void;
    enterToOpen?: boolean;
}) => {
    const handleKeyDown = getKeyDownHandler(
        new Map([
            [
                KEYBOARD_KEY.ENTER,
                (e: Event) => {
                    // @ts-ignore
                    if (!loading?.value && !e.isComposing) {
                        if (!popupVisible.value && enterToOpen) {
                            onPopupVisibleChange(true);
                            e.preventDefault();
                        }
                    }
                },
            ],
            [
                KEYBOARD_KEY.SPACE,
                (e: Event) => {
                    // @ts-ignore
                    if (!loading?.value && !e.isComposing) {
                        if (!popupVisible.value && enterToOpen) {
                            onPopupVisibleChange(true);
                            e.preventDefault();
                        }
                    }
                },
            ],
            [
                KEYBOARD_KEY.ESC,
                (e: Event) => {
                    if (popupVisible.value) {
                        onPopupVisibleChange(false);
                        e.preventDefault();
                    }
                },
            ],
            [
                KEYBOARD_KEY.ARROW_DOWN,
                (e: Event) => {
                    if (popupVisible.value) {
                        // 让 Tree 组件处理箭头键导航
                        // 不阻止事件，让 Tree 组件处理
                    } else if (enterToOpen) {
                        // 如果下拉框未打开，箭头键也可以打开
                        onPopupVisibleChange(true);
                        e.preventDefault();
                    }
                },
            ],
            [
                KEYBOARD_KEY.ARROW_UP,
                (e: Event) => {
                    if (popupVisible.value) {
                        // 让 Tree 组件处理箭头键导航
                        // 不阻止事件，让 Tree 组件处理
                    } else if (enterToOpen) {
                        // 如果下拉框未打开，箭头键也可以打开
                        onPopupVisibleChange(true);
                        e.preventDefault();
                    }
                },
            ],
        ])
    );

    return {
        handleKeyDown,
    };
};
