import {
  _ as x,
  d as k,
  u as P,
  r as f,
  o as T,
  c as w,
  w as n,
  a as l,
  e as d,
  b as o,
  m as N,
} from './index.9c61ea88.js';
import { D as S, a as M, b as $, c as I } from './type.7e1c514b.js';

const m = [
  {
    version: '2.57.0',
    date: '2025-03-10',
    list: [
      {
        type: 'enhancement',
        typeText: '\u{1F48E} \u529F\u80FD\u4F18\u5316',
        list: [
          `<p>\u4FEE\u590D\u6267\u884C onBeforeOk  \u65F6\u9519\u8BEF\u672A\u4F20\u64AD\u7684\u95EE\u9898 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/3407">#3407</a>)</p>
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
        typeText: '\u{1F48E} \u529F\u80FD\u4F18\u5316',
        list: [
          `<p>on-before-ok \u5C5E\u6027\u652F\u6301\u51FD\u6570\u8FD4\u56DE Promise (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1623">#1623</a>)</p>
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
        typeText: '\u{1F485} \u6837\u5F0F\u66F4\u65B0',
        list: [
          `<p>\u4FEE\u590D\u4E0D\u540C\u7C7B\u578B\u4E0B\u56FE\u6807\u9ED8\u8BA4\u9ED1\u8272\u7684\u95EE\u9898 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1366">#1366</a>)</p>
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
        typeText: '\u{1F485} \u6837\u5F0F\u66F4\u65B0',
        list: [
          `<p>\u4F18\u5316\u663E\u793A\u52A8\u753B (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/733">#733</a>)</p>
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
        typeText: '\u{1F485} \u6837\u5F0F\u66F4\u65B0',
        list: [
          `<p>\u4FEE\u6B63\u7EC4\u4EF6\u6837\u5F0F\u95EE\u9898\uFF0C\u5E76\u8C03\u6574\u6309\u94AE\u9ED8\u8BA4\u5927\u5C0F\u4E3A <code>mini</code>\uFF0C\u540CReact\u4FDD\u6301\u4E00\u81F4 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/390">#390</a>)</p>
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
        typeText: '\u{1F195} \u65B0\u589E\u529F\u80FD',
        list: [
          `<p>\u589E\u52A0 <code>on-before-ok</code> \u548C <code>on-before-cancel</code> \u5C5E\u6027\u4E8B\u4EF6 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/229">#229</a>)</p>
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
        typeText: '\u{1F41B} \u95EE\u9898\u4FEE\u590D',
        list: [
          `<p>\u4FEE\u590D <code>ok/cancel</code> \u6309\u94AE\u53C2\u6570\u4E22\u5931\u7684\u95EE\u9898 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/105">#105</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const V = k({
  name: 'ArcoMain',
  components: { DemoBasic: S, DemoCustom: M, DemoPosition: $, DemoType: I },
  setup() {
    const { locale: p } = P();
    return {
      locale: p,
      data: {
        meta: { type: '\u7EC4\u4EF6', category: '\u53CD\u9988' },
        title: '\u6C14\u6CE1\u786E\u8BA4\u6846 Popconfirm',
        description:
          '\u70B9\u51FB\u5143\u7D20\uFF0C\u5F39\u51FA\u6C14\u6CE1\u5F0F\u7684\u786E\u8BA4\u6846\u3002',
      },
      changelog: typeof m === 'undefined' ? void 0 : m,
      getMessage: (E, F) => (p.value === 'zh-CN' ? E : F),
    };
  },
});
function z(p, u, B, g, E, F) {
  const D = f('demo-basic');
  const C = f('demo-custom');
  const b = f('demo-position');
  const A = f('demo-type');
  const y = f('anchor-head');
  const s = f('a-th');
  const e = f('a-tr');
  const r = f('a-thead');
  const t = f('a-td');
  const i = f('a-tbody');
  const a = f('a-table');
  const v = f('arco-article');
  return (
    T(),
    w(
      v,
      N(p.data, { changelog: p.changelog }),
      {
        default: n(() => [
          l(D),
          l(C),
          l(b),
          l(A),
          u[97] ||
            (u[97] = d(
              'p',
              null,
              [
                d('code', null, '<popconfirm>'),
                o(' \u7EC4\u4EF6\u7EE7\u627F '),
                d('code', null, '<trigger>'),
                o(' \u7EC4\u4EF6\u7684\u5168\u90E8\u5C5E\u6027'),
              ],
              -1
            )),
          l(
            y,
            { level: '2', href: 'API' },
            { default: n(() => u[0] || (u[0] = [o('API')])), _: 1 }
          ),
          u[98] ||
            (u[98] = d(
              'h3',
              { id: 'popconfirm Props' },
              [d('code', null, '<popconfirm>'), o(' Props')],
              -1
            )),
          l(
            a,
            { class: 'component-api-table' },
            {
              default: n(() => [
                u[73] ||
                  (u[73] = d(
                    'colgroup',
                    null,
                    [d('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                l(r, null, {
                  default: n(() => [
                    l(e, null, {
                      default: n(() => [
                        l(s, null, {
                          default: n(
                            () => u[1] || (u[1] = [o('\u53C2\u6570\u540D')])
                          ),
                          _: 1,
                        }),
                        l(s, null, {
                          default: n(
                            () => u[2] || (u[2] = [o('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        l(s, null, {
                          default: n(
                            () => u[3] || (u[3] = [o('\u7C7B\u578B')])
                          ),
                          _: 1,
                        }),
                        l(s, null, {
                          default: n(
                            () => u[4] || (u[4] = [o('\u9ED8\u8BA4\u503C')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                l(i, null, {
                  default: n(() => [
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[5] || (u[5] = [o('content')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[6] || (u[6] = [o('\u5185\u5BB9')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[7] || (u[7] = [d('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[8] || (u[8] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[9] || (u[9] = [o('position')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[10] || (u[10] = [o('\u5F39\u51FA\u4F4D\u7F6E')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[11] ||
                              (u[11] = [
                                d(
                                  'code',
                                  null,
                                  "'top' | 'tl' | 'tr' | 'bottom' | 'bl' | 'br' | 'left' | 'lt' | 'lb' | 'right' | 'rt' | 'rb'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[12] || (u[12] = [d('code', null, "'top'", -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () =>
                              u[13] ||
                              (u[13] = [
                                o('popup-visible '),
                                d('strong', null, '(v-model)', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[14] ||
                              (u[14] = [
                                o(
                                  '\u6C14\u6CE1\u786E\u8BA4\u6846\u662F\u5426\u53EF\u89C1'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[15] ||
                              (u[15] = [d('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[16] || (u[16] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () =>
                              u[17] || (u[17] = [o('default-popup-visible')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[18] ||
                              (u[18] = [
                                o(
                                  '\u6C14\u6CE1\u786E\u8BA4\u6846\u9ED8\u8BA4\u662F\u5426\u53EF\u89C1\uFF08\u975E\u53D7\u63A7\u6A21\u5F0F\uFF09'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[19] ||
                              (u[19] = [d('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[20] || (u[20] = [d('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[21] || (u[21] = [o('type')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[22] ||
                              (u[22] = [
                                o(
                                  '\u6C14\u6CE1\u786E\u8BA4\u6846\u7684\u7C7B\u578B'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[23] ||
                              (u[23] = [
                                d(
                                  'code',
                                  null,
                                  "'info' | 'success' | 'warning' | 'error'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[24] || (u[24] = [d('code', null, "'info'", -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[25] || (u[25] = [o('ok-text')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[26] ||
                              (u[26] = [
                                o('\u786E\u8BA4\u6309\u94AE\u7684\u5185\u5BB9'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[27] || (u[27] = [d('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[28] || (u[28] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () => u[29] || (u[29] = [o('cancel-text')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[30] ||
                              (u[30] = [
                                o('\u53D6\u6D88\u6309\u94AE\u7684\u5185\u5BB9'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[31] || (u[31] = [d('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[32] || (u[32] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () => u[33] || (u[33] = [o('ok-loading')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[34] ||
                              (u[34] = [
                                o(
                                  '\u786E\u8BA4\u6309\u94AE\u662F\u5426\u4E3A\u52A0\u8F7D\u4E2D\u72B6\u6001'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[35] ||
                              (u[35] = [d('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[36] || (u[36] = [d('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () => u[37] || (u[37] = [o('ok-button-props')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[38] ||
                              (u[38] = [
                                o('\u786E\u8BA4\u6309\u94AE\u7684Props'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[39] ||
                              (u[39] = [d('code', null, 'ButtonProps', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[40] || (u[40] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () => u[41] || (u[41] = [o('cancel-button-props')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[42] ||
                              (u[42] = [
                                o('\u53D6\u6D88\u6309\u94AE\u7684Props'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[43] ||
                              (u[43] = [d('code', null, 'ButtonProps', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[44] || (u[44] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () => u[45] || (u[45] = [o('content-class')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[46] ||
                              (u[46] = [
                                o(
                                  '\u5F39\u51FA\u6846\u5185\u5BB9\u7684\u7C7B\u540D'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[47] ||
                              (u[47] = [d('code', null, 'ClassName', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[48] || (u[48] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () => u[49] || (u[49] = [o('content-style')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[50] ||
                              (u[50] = [
                                o(
                                  '\u5F39\u51FA\u6846\u5185\u5BB9\u7684\u6837\u5F0F'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[51] ||
                              (u[51] = [d('code', null, 'CSSProperties', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[52] || (u[52] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () => u[53] || (u[53] = [o('arrow-class')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[54] ||
                              (u[54] = [
                                o(
                                  '\u5F39\u51FA\u6846\u7BAD\u5934\u7684\u7C7B\u540D'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[55] ||
                              (u[55] = [d('code', null, 'ClassName', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[56] || (u[56] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () => u[57] || (u[57] = [o('arrow-style')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[58] ||
                              (u[58] = [
                                o(
                                  '\u5F39\u51FA\u6846\u7BAD\u5934\u7684\u6837\u5F0F'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[59] ||
                              (u[59] = [d('code', null, 'CSSProperties', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[60] || (u[60] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () => u[61] || (u[61] = [o('popup-container')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[62] ||
                              (u[62] = [
                                o('\u5F39\u51FA\u6846\u7684\u6302\u8F7D\u70B9'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[63] ||
                              (u[63] = [
                                d('code', null, 'string | HTMLElement', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[64] || (u[64] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () => u[65] || (u[65] = [o('on-before-ok')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[66] ||
                              (u[66] = [
                                o(
                                  '\u89E6\u53D1 ok \u4E8B\u4EF6\u524D\u7684\u56DE\u8C03\u51FD\u6570\u3002\u5982\u679C\u8FD4\u56DE false \u5219\u4E0D\u4F1A\u89E6\u53D1\u540E\u7EED\u4E8B\u4EF6\uFF0C\u4E5F\u53EF\u4F7F\u7528 done \u8FDB\u884C\u5F02\u6B65\u5173\u95ED\u3002'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[67] ||
                              (u[67] = [
                                d(
                                  'code',
                                  null,
                                  '( done: (closed: boolean) => void) => void | boolean | Promise<void | boolean>',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[68] || (u[68] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () => u[69] || (u[69] = [o('on-before-cancel')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[70] ||
                              (u[70] = [
                                o(
                                  '\u89E6\u53D1 cancel \u4E8B\u4EF6\u524D\u7684\u56DE\u8C03\u51FD\u6570\u3002\u5982\u679C\u8FD4\u56DE false \u5219\u4E0D\u4F1A\u89E6\u53D1\u540E\u7EED\u4E8B\u4EF6\u3002'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[71] ||
                              (u[71] = [d('code', null, '() => boolean', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[72] || (u[72] = [d('code', null, '-', -1)])
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
          u[99] ||
            (u[99] = d(
              'h3',
              { id: 'popconfirm Events' },
              [d('code', null, '<popconfirm>'), o(' Events')],
              -1
            )),
          l(
            a,
            { class: 'component-api-table' },
            {
              default: n(() => [
                u[86] ||
                  (u[86] = d(
                    'colgroup',
                    null,
                    [d('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                l(r, null, {
                  default: n(() => [
                    l(e, null, {
                      default: n(() => [
                        l(s, null, {
                          default: n(
                            () => u[74] || (u[74] = [o('\u4E8B\u4EF6\u540D')])
                          ),
                          _: 1,
                        }),
                        l(s, null, {
                          default: n(
                            () => u[75] || (u[75] = [o('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        l(s, null, {
                          default: n(
                            () => u[76] || (u[76] = [o('\u53C2\u6570')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                l(i, null, {
                  default: n(() => [
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () => u[77] || (u[77] = [o('popup-visible-change')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[78] ||
                              (u[78] = [
                                o(
                                  '\u6C14\u6CE1\u786E\u8BA4\u6846\u7684\u663E\u9690\u72B6\u6001\u6539\u53D8\u65F6\u89E6\u53D1'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[79] ||
                              (u[79] = [
                                o('visible: '),
                                d('code', null, 'boolean', -1),
                              ])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[80] || (u[80] = [o('ok')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[81] ||
                              (u[81] = [
                                o(
                                  '\u70B9\u51FB\u786E\u8BA4\u6309\u94AE\u65F6\u89E6\u53D1'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(() => u[82] || (u[82] = [o('-')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[83] || (u[83] = [o('cancel')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[84] ||
                              (u[84] = [
                                o(
                                  '\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\u65F6\u89E6\u53D1'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(() => u[85] || (u[85] = [o('-')])),
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
          u[100] ||
            (u[100] = d(
              'h3',
              { id: 'popconfirm Slots' },
              [d('code', null, '<popconfirm>'), o(' Slots')],
              -1
            )),
          l(
            a,
            { class: 'component-api-table' },
            {
              default: n(() => [
                u[96] ||
                  (u[96] = d(
                    'colgroup',
                    null,
                    [d('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                l(r, null, {
                  default: n(() => [
                    l(e, null, {
                      default: n(() => [
                        l(s, null, {
                          default: n(
                            () => u[87] || (u[87] = [o('\u63D2\u69FD\u540D')])
                          ),
                          _: 1,
                        }),
                        l(s, null, {
                          default: n(
                            () => u[88] || (u[88] = [o('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        l(s, null, {
                          default: n(
                            () => u[89] || (u[89] = [o('\u53C2\u6570')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                l(i, null, {
                  default: n(() => [
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[90] || (u[90] = [o('icon')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[91] || (u[91] = [o('\u56FE\u6807')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(() => u[92] || (u[92] = [o('-')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[93] || (u[93] = [o('content')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[94] || (u[94] = [o('\u5185\u5BB9')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(() => u[95] || (u[95] = [o('-')])),
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
const L = x(V, [['render', z]]);
export { L as default };
