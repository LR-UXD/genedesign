import {
  _ as E,
  d as S,
  u as D,
  r as s,
  o as F,
  c as B,
  w as n,
  e as o,
  a as t,
  b as e,
  m as N,
} from './index.9c61ea88.js';
import { D as A, a as I, b as M, c as $ } from './type.7e1c514b.js';

const g = [
  {
    version: '2.57.0',
    date: '2025-03-10',
    list: [
      {
        type: 'enhancement',
        typeText: '\u{1F48E} Enhancement',
        list: [
          `<p>fix re-throw error in onBeforeOk for proper error handling (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/3407">#3407</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.36.1',
    date: '2022-09-09',
    list: [
      {
        type: 'enhancement',
        typeText: '\u{1F48E} Enhancement',
        list: [
          `<p>The on-before-ok property supports function returning a Promise (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1623">#1623</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.32.1',
    date: '2022-07-01',
    list: [
      {
        type: 'style',
        typeText: '\u{1F485} Style',
        list: [
          `<p>Fix the problem that the icons under different types are black by default (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1366">#1366</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
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
  {
    version: '2.10.1',
    date: '2021-12-14',
    list: [
      {
        type: 'style',
        typeText: '\u{1F485} Style',
        list: [
          `<p>Fix the component style problem, and adjust the default size of the button to <code>mini</code>, which is consistent with React (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/390">#390</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.7.0',
    date: '2021-11-26',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>Added <code>on-before-ok</code> and <code>on-before-cancel</code> property events (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/229">#229</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.1.1',
    date: '2021-11-08',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem that the parameters of the <code>ok/cancel</code> button are lost (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/105">#105</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const z = S({
  name: 'ArcoMain',
  components: { DemoBasic: A, DemoCustom: I, DemoPosition: M, DemoType: $ },
  setup() {
    const { locale: r } = D();
    return {
      locale: r,
      data: {
        meta: { type: 'Component', category: 'Feedback' },
        title: 'Popconfirm',
        description: 'Click on the element and a popconfirm will pop up.',
      },
      changelog: typeof g === 'undefined' ? void 0 : g,
      getMessage: (m, b) => (r.value === 'zh-CN' ? m : b),
    };
  },
});
function V(r, l, y, v, m, b) {
  const k = s('demo-basic');
  const x = s('demo-custom');
  const T = s('demo-position');
  const w = s('demo-type');
  const P = s('anchor-head');
  const f = s('a-th');
  const d = s('a-tr');
  const i = s('a-thead');
  const u = s('a-td');
  const p = s('a-tbody');
  const a = s('a-table');
  const C = s('arco-article');
  return (
    F(),
    B(
      C,
      N(r.data, { changelog: r.changelog }),
      {
        default: n(() => [
          l[97] ||
            (l[97] = o(
              'p',
              null,
              [o('em', null, 'Auto translate by google.')],
              -1
            )),
          t(k),
          t(x),
          t(T),
          t(w),
          l[98] ||
            (l[98] = o(
              'p',
              null,
              [
                o('code', null, '<popconfirm>'),
                e(' \u7EC4\u4EF6\u7EE7\u627F '),
                o('code', null, '<trigger>'),
                e(' \u7EC4\u4EF6\u7684\u5168\u90E8\u5C5E\u6027'),
              ],
              -1
            )),
          t(
            P,
            { level: '2', href: 'API' },
            { default: n(() => l[0] || (l[0] = [e('API')])), _: 1 }
          ),
          l[99] ||
            (l[99] = o(
              'h3',
              { id: 'popconfirm Props' },
              [o('code', null, '<popconfirm>'), e(' Props')],
              -1
            )),
          t(
            a,
            { class: 'component-api-table' },
            {
              default: n(() => [
                l[73] ||
                  (l[73] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(i, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(f, null, {
                          default: n(() => l[1] || (l[1] = [e('Attribute')])),
                          _: 1,
                        }),
                        t(f, null, {
                          default: n(() => l[2] || (l[2] = [e('Description')])),
                          _: 1,
                        }),
                        t(f, null, {
                          default: n(() => l[3] || (l[3] = [e('Type')])),
                          _: 1,
                        }),
                        t(f, null, {
                          default: n(() => l[4] || (l[4] = [e('Default')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(p, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[5] || (l[5] = [e('content')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(() => l[6] || (l[6] = [e('Content')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[7] || (l[7] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[8] || (l[8] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[9] || (l[9] = [e('position')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[10] || (l[10] = [e('Popup position')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[11] ||
                              (l[11] = [
                                o(
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
                              l[12] || (l[12] = [o('code', null, "'top'", -1)])
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
                            () =>
                              l[13] ||
                              (l[13] = [
                                e('popup-visible '),
                                o('strong', null, '(v-model)', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[14] ||
                              (l[14] = [e('Whether the popconfirm is visible')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[15] ||
                              (l[15] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[16] || (l[16] = [o('code', null, '-', -1)])
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
                            () =>
                              l[17] || (l[17] = [e('default-popup-visible')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[18] ||
                              (l[18] = [
                                e(
                                  'Whether the popconfirm is visible by default (uncontrolled mode)'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[19] ||
                              (l[19] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[20] || (l[20] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[21] || (l[21] = [e('type')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[22] || (l[22] = [e('Types of the popconfirm')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[23] ||
                              (l[23] = [
                                o(
                                  'code',
                                  null,
                                  "'info' | 'success' | 'warning' | 'error'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[24] || (l[24] = [o('code', null, "'info'", -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[25] || (l[25] = [e('ok-text')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[26] ||
                              (l[26] = [e('The content of the ok button')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[27] || (l[27] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[28] || (l[28] = [o('code', null, '-', -1)])
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
                            () => l[29] || (l[29] = [e('cancel-text')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[30] ||
                              (l[30] = [e('The content of the cancel button')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[31] || (l[31] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[32] || (l[32] = [o('code', null, '-', -1)])
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
                            () => l[33] || (l[33] = [e('ok-loading')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[34] ||
                              (l[34] = [
                                e(
                                  'Whether the ok button is in the loading state'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[35] ||
                              (l[35] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[36] || (l[36] = [o('code', null, 'false', -1)])
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
                            () => l[37] || (l[37] = [e('ok-button-props')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[38] || (l[38] = [e('Props of ok button')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[39] ||
                              (l[39] = [o('code', null, 'ButtonProps', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[40] || (l[40] = [o('code', null, '-', -1)])
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
                            () => l[41] || (l[41] = [e('cancel-button-props')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[42] || (l[42] = [e('Props of cancel button')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[43] ||
                              (l[43] = [o('code', null, 'ButtonProps', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[44] || (l[44] = [o('code', null, '-', -1)])
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
                            () => l[45] || (l[45] = [e('content-class')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[46] ||
                              (l[46] = [
                                e('The class name of the popup content'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[47] ||
                              (l[47] = [o('code', null, 'ClassName', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[48] || (l[48] = [o('code', null, '-', -1)])
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
                            () => l[49] || (l[49] = [e('content-style')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[50] ||
                              (l[50] = [e('The style of the popup content')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[51] ||
                              (l[51] = [o('code', null, 'CSSProperties', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[52] || (l[52] = [o('code', null, '-', -1)])
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
                            () => l[53] || (l[53] = [e('arrow-class')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[54] ||
                              (l[54] = [e('The class name of the popup arrow')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[55] ||
                              (l[55] = [o('code', null, 'ClassName', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[56] || (l[56] = [o('code', null, '-', -1)])
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
                            () => l[57] || (l[57] = [e('arrow-style')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[58] ||
                              (l[58] = [e('The style of the popup arrow')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[59] ||
                              (l[59] = [o('code', null, 'CSSProperties', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[60] || (l[60] = [o('code', null, '-', -1)])
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
                            () => l[61] || (l[61] = [e('popup-container')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[62] ||
                              (l[62] = [e('Mount container for popup')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[63] ||
                              (l[63] = [
                                o('code', null, 'string | HTMLElement', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[64] || (l[64] = [o('code', null, '-', -1)])
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
                            () => l[65] || (l[65] = [e('on-before-ok')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[66] ||
                              (l[66] = [
                                e(
                                  'The callback function before the ok event is triggered. If false is returned, subsequent events will not be triggered, and done can also be used to close asynchronously.'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[67] ||
                              (l[67] = [
                                o(
                                  'code',
                                  null,
                                  '( done: (closed: boolean) => void) => void | boolean | Promise<void | boolean>',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[68] || (l[68] = [o('code', null, '-', -1)])
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
                            () => l[69] || (l[69] = [e('on-before-cancel')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[70] ||
                              (l[70] = [
                                e(
                                  'The callback function before the cancel event is triggered. If it returns false, no subsequent events will be triggered.'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[71] ||
                              (l[71] = [o('code', null, '() => boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[72] || (l[72] = [o('code', null, '-', -1)])
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
          l[100] ||
            (l[100] = o(
              'h3',
              { id: 'popconfirm Events' },
              [o('code', null, '<popconfirm>'), e(' Events')],
              -1
            )),
          t(
            a,
            { class: 'component-api-table' },
            {
              default: n(() => [
                l[86] ||
                  (l[86] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(i, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(f, null, {
                          default: n(
                            () => l[74] || (l[74] = [e('Event Name')])
                          ),
                          _: 1,
                        }),
                        t(f, null, {
                          default: n(
                            () => l[75] || (l[75] = [e('Description')])
                          ),
                          _: 1,
                        }),
                        t(f, null, {
                          default: n(
                            () => l[76] || (l[76] = [e('Parameters')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(p, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(
                            () => l[77] || (l[77] = [e('popup-visible-change')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[78] ||
                              (l[78] = [
                                e(
                                  'Triggered when the visible or hidden state of the bubble confirmation box changes'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[79] ||
                              (l[79] = [
                                e('visible: '),
                                o('code', null, 'boolean', -1),
                              ])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[80] || (l[80] = [e('ok')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[81] ||
                              (l[81] = [
                                e(
                                  'Triggered when the confirm button is clicked'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(() => l[82] || (l[82] = [e('-')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[83] || (l[83] = [e('cancel')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[84] ||
                              (l[84] = [
                                e(
                                  'Triggered when the cancel button is clicked'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(() => l[85] || (l[85] = [e('-')])),
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
          l[101] ||
            (l[101] = o(
              'h3',
              { id: 'popconfirm Slots' },
              [o('code', null, '<popconfirm>'), e(' Slots')],
              -1
            )),
          t(
            a,
            { class: 'component-api-table' },
            {
              default: n(() => [
                l[96] ||
                  (l[96] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(i, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(f, null, {
                          default: n(() => l[87] || (l[87] = [e('Slot Name')])),
                          _: 1,
                        }),
                        t(f, null, {
                          default: n(
                            () => l[88] || (l[88] = [e('Description')])
                          ),
                          _: 1,
                        }),
                        t(f, null, {
                          default: n(
                            () => l[89] || (l[89] = [e('Parameters')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(p, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[90] || (l[90] = [e('icon')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(() => l[91] || (l[91] = [e('Icon')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(() => l[92] || (l[92] = [e('-')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[93] || (l[93] = [e('content')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(() => l[94] || (l[94] = [e('Content')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(() => l[95] || (l[95] = [e('-')])),
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
const O = E(z, [['render', V]]);
export { O as default };
