import {
  _ as x,
  d as D,
  u as S,
  r as s,
  o as N,
  c as M,
  w as n,
  e,
  a as t,
  b as o,
  m as k,
} from './index.9c61ea88.js';
import { D as A, a as B, b as $ } from './position.4935b6bb.js';

const b = [
  {
    version: '2.18.0-beta.2',
    date: '2022-02-25',
    list: [
      {
        type: 'style',
        typeText: '\u{1F485} Style',
        list: [
          `<p>Optimize display animation (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/733">#733</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const F = D({
  name: 'ArcoMain',
  components: { DemoBasic: A, DemoTrigger: B, DemoPosition: $ },
  setup() {
    const { locale: f } = S();
    return {
      locale: f,
      data: {
        meta: { type: 'Component', category: 'Data Display' },
        title: 'Popover',
        description:
          'When the mouse hovers, focus, or click on a component, a bubble-like card floating layer will pop up. You can manipulate the elements on the card.',
      },
      changelog: typeof b === 'undefined' ? void 0 : b,
      getMessage: (m, g) => (f.value === 'zh-CN' ? m : g),
    };
  },
});
function I(f, l, v, y, m, g) {
  const C = s('demo-basic');
  const E = s('demo-trigger');
  const T = s('demo-position');
  const P = s('anchor-head');
  const p = s('a-th');
  const d = s('a-tr');
  const r = s('a-thead');
  const u = s('a-td');
  const i = s('a-tbody');
  const a = s('a-table');
  const w = s('arco-article');
  return (
    N(),
    M(
      w,
      k(f.data, { changelog: f.changelog }),
      {
        default: n(() => [
          l[67] ||
            (l[67] = e(
              'p',
              null,
              [e('em', null, 'Auto translate by google.')],
              -1
            )),
          t(C),
          t(E),
          t(T),
          l[68] ||
            (l[68] = e(
              'p',
              null,
              [
                e('code', null, '<popover>'),
                o(' \u7EC4\u4EF6\u7EE7\u627F '),
                e('code', null, '<trigger>'),
                o(' \u7EC4\u4EF6\u7684\u5168\u90E8\u5C5E\u6027'),
              ],
              -1
            )),
          t(
            P,
            { level: '2', href: 'API' },
            { default: n(() => l[0] || (l[0] = [o('API')])), _: 1 }
          ),
          l[69] ||
            (l[69] = e(
              'h3',
              { id: 'popover Props' },
              [e('code', null, '<popover>'), o(' Props')],
              -1
            )),
          t(
            a,
            { class: 'component-api-table' },
            {
              default: n(() => [
                l[49] ||
                  (l[49] = e(
                    'colgroup',
                    null,
                    [e('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(r, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(p, null, {
                          default: n(() => l[1] || (l[1] = [o('Attribute')])),
                          _: 1,
                        }),
                        t(p, null, {
                          default: n(() => l[2] || (l[2] = [o('Description')])),
                          _: 1,
                        }),
                        t(p, null, {
                          default: n(() => l[3] || (l[3] = [o('Type')])),
                          _: 1,
                        }),
                        t(p, null, {
                          default: n(() => l[4] || (l[4] = [o('Default')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(i, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(
                            () =>
                              l[5] ||
                              (l[5] = [
                                o('popup-visible '),
                                e('strong', null, '(v-model)', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[6] ||
                              (l[6] = [o('Whether the popover is visible')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[7] || (l[7] = [e('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[8] || (l[8] = [e('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(
                            () => l[9] || (l[9] = [o('default-popup-visible')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[10] ||
                              (l[10] = [
                                o(
                                  'Whether the popover is visible by default (uncontrolled mode)'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[11] ||
                              (l[11] = [e('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[12] || (l[12] = [e('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[13] || (l[13] = [o('title')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(() => l[14] || (l[14] = [o('Title')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[15] || (l[15] = [e('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[16] || (l[16] = [e('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[17] || (l[17] = [o('content')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(() => l[18] || (l[18] = [o('Content')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[19] || (l[19] = [e('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[20] || (l[20] = [e('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[21] || (l[21] = [o('trigger')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[22] || (l[22] = [o('Trigger method')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[23] ||
                              (l[23] = [
                                e(
                                  'code',
                                  null,
                                  "'hover' | 'click' | 'focus' | 'contextMenu'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[24] ||
                              (l[24] = [e('code', null, "'hover'", -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[25] || (l[25] = [o('position')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[26] || (l[26] = [o('Pop-up position')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[27] ||
                              (l[27] = [
                                e(
                                  'code',
                                  null,
                                  "'top' | 'tl' | 'tr' | 'bottom' | 'bl' | 'br' | 'left' | 'lt' | 'lb' | 'right' | 'rt' | 'rb'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[28] || (l[28] = [e('code', null, "'top'", -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(
                            () => l[29] || (l[29] = [o('content-class')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[30] ||
                              (l[30] = [
                                o('The class name of the popup content'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[31] ||
                              (l[31] = [e('code', null, 'ClassName', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[32] || (l[32] = [e('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(
                            () => l[33] || (l[33] = [o('content-style')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[34] ||
                              (l[34] = [o('The style of the popup content')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[35] ||
                              (l[35] = [e('code', null, 'CSSProperties', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[36] || (l[36] = [e('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(
                            () => l[37] || (l[37] = [o('arrow-class')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[38] ||
                              (l[38] = [o('The class name of the popup arrow')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[39] ||
                              (l[39] = [e('code', null, 'ClassName', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[40] || (l[40] = [e('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(
                            () => l[41] || (l[41] = [o('arrow-style')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[42] ||
                              (l[42] = [o('The style of the popup arrow')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[43] ||
                              (l[43] = [e('code', null, 'CSSProperties', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[44] || (l[44] = [e('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(
                            () => l[45] || (l[45] = [o('popup-container')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[46] ||
                              (l[46] = [o('Mount container for pop-up box')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[47] ||
                              (l[47] = [
                                e('code', null, 'string | HTMLElement', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[48] || (l[48] = [e('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
              ]),
              _: 1,
            }
          ),
          l[70] ||
            (l[70] = e(
              'h3',
              { id: 'popover Events' },
              [e('code', null, '<popover>'), o(' Events')],
              -1
            )),
          t(
            a,
            { class: 'component-api-table' },
            {
              default: n(() => [
                l[56] ||
                  (l[56] = e(
                    'colgroup',
                    null,
                    [e('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(r, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(p, null, {
                          default: n(
                            () => l[50] || (l[50] = [o('Event Name')])
                          ),
                          _: 1,
                        }),
                        t(p, null, {
                          default: n(
                            () => l[51] || (l[51] = [o('Description')])
                          ),
                          _: 1,
                        }),
                        t(p, null, {
                          default: n(
                            () => l[52] || (l[52] = [o('Parameters')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(i, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(
                            () => l[53] || (l[53] = [o('popup-visible-change')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[54] ||
                              (l[54] = [
                                o(
                                  'Triggered when the text bubble display status changes'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[55] ||
                              (l[55] = [
                                o('visible: '),
                                e('code', null, 'boolean', -1),
                              ])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
              ]),
              _: 1,
            }
          ),
          l[71] ||
            (l[71] = e(
              'h3',
              { id: 'popover Slots' },
              [e('code', null, '<popover>'), o(' Slots')],
              -1
            )),
          t(
            a,
            { class: 'component-api-table' },
            {
              default: n(() => [
                l[66] ||
                  (l[66] = e(
                    'colgroup',
                    null,
                    [e('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(r, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(p, null, {
                          default: n(() => l[57] || (l[57] = [o('Slot Name')])),
                          _: 1,
                        }),
                        t(p, null, {
                          default: n(
                            () => l[58] || (l[58] = [o('Description')])
                          ),
                          _: 1,
                        }),
                        t(p, null, {
                          default: n(
                            () => l[59] || (l[59] = [o('Parameters')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(i, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[60] || (l[60] = [o('title')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(() => l[61] || (l[61] = [o('Title')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(() => l[62] || (l[62] = [o('-')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[63] || (l[63] = [o('content')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(() => l[64] || (l[64] = [o('Content')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(() => l[65] || (l[65] = [o('-')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
              ]),
              _: 1,
            }
          ),
        ]),
        _: 1,
      },
      16,
      ['changelog']
    )
  );
}
const z = x(F, [['render', I]]);
export { z as default };
