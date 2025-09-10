import { nextTick } from 'vue';
import { mount } from '@vue/test-utils';
import Tooltip from '../index';

describe('Tooltip', () => {
  test('should render tooltip', async () => {
    const wrapper = mount(
      {
        template: [
          'top',
          'tl',
          'tr',
          'bottom',
          'bl',
          'br',
          'left',
          'lt',
          'lb',
          'right',
          'rt',
          'rb',
        ]
          .map(
            (item) =>
              `<a-tooltip content="content" :default-popup-visible="true" position="${item}" :render-to-body="false"><button>Button</button></a-tooltip>`
          )
          .join('/n'),
      },
      {
        global: {
          plugins: [Tooltip],
        },
      }
    );

    await nextTick();
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('should emit popupVisibleChange event', async () => {
    const wrapper = mount(Tooltip, {
      props: {
        mouseEnterDelay: 0,
        mouseLeaveDelay: 0,
      },
      slots: {
        default: '<button>Button</button>',
        content: 'Content',
      },
    });

    await wrapper.find('button').trigger('mouseenter');
    await wrapper.find('button').trigger('mouseleave');

    expect(wrapper.emitted('popupVisibleChange')).toHaveLength(2);
  });

  test('should show tooltip on focus and hide on blur', async () => {
    const wrapper = mount(Tooltip, {
      props: {
        focusDelay: 0,
        blurToClose: true,
      },
      slots: {
        default: '<button>Button</button>',
        content: 'Focus Content',
      },
    });

    const button = wrapper.find('button');

    // 测试焦点事件
    await button.trigger('focusin');
    expect(wrapper.emitted('popupVisibleChange')).toBeTruthy();
    expect(wrapper.emitted('popupVisibleChange')![0]).toEqual([true]);

    // 测试失焦事件  
    await button.trigger('focusout');
    expect(wrapper.emitted('popupVisibleChange')).toHaveLength(2);
    expect(wrapper.emitted('popupVisibleChange')![1]).toEqual([false]);
  });
});
