import {
  _ as T,
  d as S,
  u as N,
  r as s,
  o as k,
  c as A,
  w as n,
  e,
  a as t,
  b as u,
  m as M,
} from './index.9c61ea88.js';
import { D as B, a as F, b as $, c as z } from './color.0c2f3673.js';

const b = [
  {
    version: '2.18.0-beta.2',
    date: '2022-02-25',
    list: [
      {
        type: 'style',
        typeText: '\u{1F485} Style',
        list: [
          `<p>Optimized display animation, consistent with the react version (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/733">#733</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.17.0',
    date: '2022-02-11',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the issue of losing trigger style when loading on demand (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/674">#674</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const I = S({
  name: 'ArcoMain',
  components: { DemoBasic: B, DemoMini: F, DemoPosition: $, DemoColor: z },
  setup() {
    const { locale: p } = N();
    return {
      locale: p,
      data: {
        meta: { type: 'Component', category: 'Data Display' },
        title: 'Tooltip',
        description:
          'A tooltip that popup when the mouse hovers, focus, or click on a component.',
      },
      changelog: typeof b === 'undefined' ? void 0 : b,
      getMessage: (m, g) => (p.value === 'zh-CN' ? m : g),
    };
  },
});
function V(p, l, y, v, m, g) {
  const E = s('demo-basic');
  const C = s('demo-mini');
  const w = s('demo-position');
  const x = s('demo-color');
  const D = s('anchor-head');
  const i = s('a-th');
  const d = s('a-tr');
  const f = s('a-thead');
  const o = s('a-td');
  const r = s('a-tbody');
  const a = s('a-table');
  const P = s('arco-article');
  return (
    k(),
    A(
      P,
      M(p.data, { changelog: p.changelog }),
      {
        default: n(() => [
          l[64] ||
            (l[64] = e(
              'p',
              null,
              [e('em', null, 'Auto translate by google.')],
              -1
            )),
          t(E),
          t(C),
          t(w),
          t(x),
          l[65] ||
            (l[65] = e(
              'p',
              null,
              [
                e('code', null, '<tooltip>'),
                u(' \u7EC4\u4EF6\u7EE7\u627F '),
                e('code', null, '<trigger>'),
                u(' \u7EC4\u4EF6\u7684\u5168\u90E8\u5C5E\u6027'),
              ],
              -1
            )),
          t(
            D,
            { level: '2', href: 'API' },
            { default: n(() => l[0] || (l[0] = [u('API')])), _: 1 }
          ),
          l[66] ||
            (l[66] = e(
              'h3',
              { id: 'tooltip Props' },
              [e('code', null, '<tooltip>'), u(' Props')],
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
                t(f, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(i, null, {
                          default: n(() => l[1] || (l[1] = [u('Attribute')])),
                          _: 1,
                        }),
                        t(i, null, {
                          default: n(() => l[2] || (l[2] = [u('Description')])),
                          _: 1,
                        }),
                        t(i, null, {
                          default: n(() => l[3] || (l[3] = [u('Type')])),
                          _: 1,
                        }),
                        t(i, null, {
                          default: n(() => l[4] || (l[4] = [u('Default')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(r, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(o, null, {
                          default: n(
                            () =>
                              l[5] ||
                              (l[5] = [
                                u('popup-visible '),
                                e('strong', null, '(v-model)', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[6] ||
                              (l[6] = [u('Whether the tooltip is visible')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[7] || (l[7] = [e('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
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
                        t(o, null, {
                          default: n(
                            () => l[9] || (l[9] = [u('default-popup-visible')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[10] ||
                              (l[10] = [
                                u(
                                  'Whether the tooltip is visible by default (uncontrolled mode)'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[11] ||
                              (l[11] = [e('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
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
                        t(o, null, {
                          default: n(() => l[13] || (l[13] = [u('content')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () => l[14] || (l[14] = [u('Tooltip content')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[15] || (l[15] = [e('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
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
                        t(o, null, {
                          default: n(() => l[17] || (l[17] = [u('position')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () => l[18] || (l[18] = [u('Popup position')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[19] ||
                              (l[19] = [
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
                        t(o, null, {
                          default: n(
                            () =>
                              l[20] || (l[20] = [e('code', null, "'top'", -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(o, null, {
                          default: n(() => l[21] || (l[21] = [u('mini')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[22] ||
                              (l[22] = [u('Whether to display as a mini size')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[23] ||
                              (l[23] = [e('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[24] || (l[24] = [e('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(o, null, {
                          default: n(
                            () => l[25] || (l[25] = [u('background-color')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[26] ||
                              (l[26] = [u('Background color of the popover')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[27] || (l[27] = [e('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () => l[28] || (l[28] = [e('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(o, null, {
                          default: n(
                            () => l[29] || (l[29] = [u('content-class')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[30] ||
                              (l[30] = [
                                u('The class name of the popup content'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[31] ||
                              (l[31] = [e('code', null, 'ClassName', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
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
                        t(o, null, {
                          default: n(
                            () => l[33] || (l[33] = [u('content-style')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[34] ||
                              (l[34] = [u('The style of the popup content')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[35] ||
                              (l[35] = [e('code', null, 'CSSProperties', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
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
                        t(o, null, {
                          default: n(
                            () => l[37] || (l[37] = [u('arrow-class')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[38] ||
                              (l[38] = [u('The class name of the popup arrow')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[39] ||
                              (l[39] = [e('code', null, 'ClassName', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
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
                        t(o, null, {
                          default: n(
                            () => l[41] || (l[41] = [u('arrow-style')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[42] ||
                              (l[42] = [u('The style of the popup arrow')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[43] ||
                              (l[43] = [e('code', null, 'CSSProperties', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
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
                        t(o, null, {
                          default: n(
                            () => l[45] || (l[45] = [u('popup-container')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[46] ||
                              (l[46] = [u('Mount container for popup')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[47] ||
                              (l[47] = [
                                e('code', null, 'string | HTMLElement', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
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
          l[67] ||
            (l[67] = e(
              'h3',
              { id: 'tooltip Events' },
              [e('code', null, '<tooltip>'), u(' Events')],
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
                t(f, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(i, null, {
                          default: n(
                            () => l[50] || (l[50] = [u('Event Name')])
                          ),
                          _: 1,
                        }),
                        t(i, null, {
                          default: n(
                            () => l[51] || (l[51] = [u('Description')])
                          ),
                          _: 1,
                        }),
                        t(i, null, {
                          default: n(
                            () => l[52] || (l[52] = [u('Parameters')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(r, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(o, null, {
                          default: n(
                            () => l[53] || (l[53] = [u('popup-visible-change')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[54] ||
                              (l[54] = [
                                u(
                                  'Emitted when the tooltip display status changes'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[55] ||
                              (l[55] = [
                                u('visible: '),
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
          l[68] ||
            (l[68] = e(
              'h3',
              { id: 'tooltip Slots' },
              [e('code', null, '<tooltip>'), u(' Slots')],
              -1
            )),
          t(
            a,
            { class: 'component-api-table' },
            {
              default: n(() => [
                l[63] ||
                  (l[63] = e(
                    'colgroup',
                    null,
                    [e('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(f, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(i, null, {
                          default: n(() => l[57] || (l[57] = [u('Slot Name')])),
                          _: 1,
                        }),
                        t(i, null, {
                          default: n(
                            () => l[58] || (l[58] = [u('Description')])
                          ),
                          _: 1,
                        }),
                        t(i, null, {
                          default: n(
                            () => l[59] || (l[59] = [u('Parameters')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(r, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(o, null, {
                          default: n(() => l[60] || (l[60] = [u('content')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(() => l[61] || (l[61] = [u('Content')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(() => l[62] || (l[62] = [u('-')])),
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
const L = T(I, [['render', V]]);
export { L as default };
