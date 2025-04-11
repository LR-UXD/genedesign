import {
  _ as P,
  d as R,
  u as O,
  r as s,
  o as M,
  c as N,
  w as n,
  a as u,
  b as t,
  e as d,
  m as S,
} from './index.9c61ea88.js';
import {
  D as $,
  a as I,
  b as V,
  c as G,
  d as L,
  e as j,
  f as q,
  g as H,
  h as J,
} from './custom.2daa3be1.js';

const b = [
  {
    version: '2.56.2',
    date: '2024-09-13',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} \u95EE\u9898\u4FEE\u590D',
        list: [
          `<p>\u4FEE\u590D\u672A\u7EE7\u627F\u6CE8\u5165\u7684size\u95EE\u9898 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/3267">#3267</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.38.1',
    date: '2022-11-04',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} \u95EE\u9898\u4FEE\u590D',
        list: [
          `<p>\u4FEE\u590D <code>radio-group</code> \u91CD\u7F6E\u503C\u65F6\u72B6\u6001\u6CA1\u6709\u91CD\u7F6E\u7684\u95EE\u9898 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1813">#1813</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.38.0',
    date: '2022-10-28',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} \u95EE\u9898\u4FEE\u590D',
        list: [
          `<p>\u4FEE\u590D\u6E05\u9664 model-value \u65F6\u72B6\u6001\u672A\u6E05\u9664\u7684\u95EE\u9898 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1794">#1794</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.27.0',
    date: '2022-05-13',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} \u65B0\u589E\u529F\u80FD',
        list: [
          `<p><code>radio-group</code> \u652F\u6301 <code>options</code> \u5C5E\u6027 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1090">#1090</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.18.0',
    date: '2022-03-04',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} \u65B0\u589E\u529F\u80FD',
        list: [
          `<p>\u589E\u52A0 radio \u63D2\u69FD\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u5355\u9009\u6846 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/769">#769</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.18.0-beta.1',
    date: '2022-02-18',
    list: [
      {
        type: 'attention',
        typeText: '\u26A0\uFE0F \u91CD\u70B9\u6CE8\u610F',
        list: [
          `<p>\u5916\u5C42\u5305\u88F9 DOM \u4ECE span \u6539\u4E3A label (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/697">#697</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.8.0',
    date: '2021-12-01',
    list: [
      {
        type: 'style',
        typeText: '\u{1F485} \u6837\u5F0F\u66F4\u65B0',
        list: [
          `<p>\u53BB\u9664 button \u6A21\u5F0F\u4E0B\u9009\u4E2D\u52A0\u7C97\u7684\u6548\u679C (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/308">#308</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const K = R({
  name: 'ArcoMain',
  components: {
    DemoBasic: $,
    DemoControl: I,
    DemoGroup: V,
    DemoOptions: G,
    DemoDirection: L,
    DemoButton: j,
    DemoSize: q,
    DemoLayout: H,
    DemoCustom: J,
  },
  setup() {
    const { locale: p } = O();
    return {
      locale: p,
      data: {
        meta: { type: '\u7EC4\u4EF6', category: '\u6570\u636E\u8F93\u5165' },
        title: '\u5355\u9009\u6846 Radio',
        description:
          '\u5728\u4E00\u7EC4\u76F8\u5173\u4E14\u4E92\u65A5\u6570\u636E\u4E2D\uFF0C\u7528\u6237\u4EC5\u80FD\u9009\u62E9\u4E00\u4E2A\u9009\u9879\u3002',
      },
      changelog: typeof b === 'undefined' ? void 0 : b,
      getMessage: (m, g) => (p.value === 'zh-CN' ? m : g),
    };
  },
});
function Q(p, l, C, F, m, g) {
  const E = s('demo-basic');
  const D = s('demo-control');
  const v = s('demo-group');
  const y = s('demo-options');
  const B = s('demo-direction');
  const x = s('demo-button');
  const A = s('demo-size');
  const k = s('demo-layout');
  const w = s('demo-custom');
  const z = s('anchor-head');
  const e = s('a-th');
  const f = s('a-tr');
  const i = s('a-thead');
  const o = s('a-td');
  const r = s('a-tbody');
  const a = s('a-table');
  const T = s('arco-article');
  return (
    M(),
    N(
      T,
      S(p.data, { changelog: p.changelog }),
      {
        default: n(() => [
          u(E),
          u(D),
          u(v),
          u(y),
          u(B),
          u(x),
          u(A),
          u(k),
          u(w),
          u(
            z,
            { level: '2', href: 'API' },
            { default: n(() => l[0] || (l[0] = [t('API')])), _: 1 }
          ),
          l[114] ||
            (l[114] = d(
              'h3',
              { id: 'radio Props' },
              [d('code', null, '<radio>'), t(' Props')],
              -1
            )),
          u(
            a,
            { class: 'component-api-table' },
            {
              default: n(() => [
                l[25] ||
                  (l[25] = d(
                    'colgroup',
                    null,
                    [d('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                u(i, null, {
                  default: n(() => [
                    u(f, null, {
                      default: n(() => [
                        u(e, null, {
                          default: n(
                            () => l[1] || (l[1] = [t('\u53C2\u6570\u540D')])
                          ),
                          _: 1,
                        }),
                        u(e, null, {
                          default: n(
                            () => l[2] || (l[2] = [t('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        u(e, null, {
                          default: n(
                            () => l[3] || (l[3] = [t('\u7C7B\u578B')])
                          ),
                          _: 1,
                        }),
                        u(e, null, {
                          default: n(
                            () => l[4] || (l[4] = [t('\u9ED8\u8BA4\u503C')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                u(r, null, {
                  default: n(() => [
                    u(f, null, {
                      default: n(() => [
                        u(o, null, {
                          default: n(
                            () =>
                              l[5] ||
                              (l[5] = [
                                t('model-value '),
                                d('strong', null, '(v-model)', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: n(
                            () => l[6] || (l[6] = [t('\u7ED1\u5B9A\u503C')])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: n(
                            () =>
                              l[7] ||
                              (l[7] = [
                                d(
                                  'code',
                                  null,
                                  'string | number | boolean',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: n(
                            () => l[8] || (l[8] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(f, null, {
                      default: n(() => [
                        u(o, null, {
                          default: n(
                            () => l[9] || (l[9] = [t('default-checked')])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: n(
                            () =>
                              l[10] ||
                              (l[10] = [
                                t(
                                  '\u9ED8\u8BA4\u662F\u5426\u9009\u4E2D\uFF08\u975E\u53D7\u63A7\u72B6\u6001\uFF09'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: n(
                            () =>
                              l[11] ||
                              (l[11] = [d('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: n(
                            () =>
                              l[12] || (l[12] = [d('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(f, null, {
                      default: n(() => [
                        u(o, null, {
                          default: n(() => l[13] || (l[13] = [t('value')])),
                          _: 1,
                        }),
                        u(o, null, {
                          default: n(
                            () =>
                              l[14] ||
                              (l[14] = [
                                t('\u9009\u9879\u7684 '),
                                d('code', null, 'value', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: n(
                            () =>
                              l[15] ||
                              (l[15] = [
                                d(
                                  'code',
                                  null,
                                  'string | number | boolean',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: n(
                            () =>
                              l[16] || (l[16] = [d('code', null, 'true', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(f, null, {
                      default: n(() => [
                        u(o, null, {
                          default: n(() => l[17] || (l[17] = [t('type')])),
                          _: 1,
                        }),
                        u(o, null, {
                          default: n(
                            () =>
                              l[18] ||
                              (l[18] = [t('\u5355\u9009\u7684\u7C7B\u578B')])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: n(
                            () =>
                              l[19] ||
                              (l[19] = [
                                d('code', null, "'radio' | 'button'", -1),
                              ])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: n(
                            () =>
                              l[20] ||
                              (l[20] = [d('code', null, "'radio'", -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(f, null, {
                      default: n(() => [
                        u(o, null, {
                          default: n(() => l[21] || (l[21] = [t('disabled')])),
                          _: 1,
                        }),
                        u(o, null, {
                          default: n(
                            () =>
                              l[22] || (l[22] = [t('\u662F\u5426\u7981\u7528')])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: n(
                            () =>
                              l[23] ||
                              (l[23] = [d('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: n(
                            () =>
                              l[24] || (l[24] = [d('code', null, 'false', -1)])
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
          l[115] ||
            (l[115] = d(
              'h3',
              { id: 'radio Events' },
              [d('code', null, '<radio>'), t(' Events')],
              -1
            )),
          u(
            a,
            { class: 'component-api-table' },
            {
              default: n(() => [
                l[32] ||
                  (l[32] = d(
                    'colgroup',
                    null,
                    [d('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                u(i, null, {
                  default: n(() => [
                    u(f, null, {
                      default: n(() => [
                        u(e, null, {
                          default: n(
                            () => l[26] || (l[26] = [t('\u4E8B\u4EF6\u540D')])
                          ),
                          _: 1,
                        }),
                        u(e, null, {
                          default: n(
                            () => l[27] || (l[27] = [t('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        u(e, null, {
                          default: n(
                            () => l[28] || (l[28] = [t('\u53C2\u6570')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                u(r, null, {
                  default: n(() => [
                    u(f, null, {
                      default: n(() => [
                        u(o, null, {
                          default: n(() => l[29] || (l[29] = [t('change')])),
                          _: 1,
                        }),
                        u(o, null, {
                          default: n(
                            () =>
                              l[30] ||
                              (l[30] = [
                                t('\u503C\u6539\u53D8\u65F6\u89E6\u53D1'),
                              ])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: n(
                            () =>
                              l[31] ||
                              (l[31] = [
                                t('value: '),
                                d(
                                  'code',
                                  null,
                                  'string | number | boolean',
                                  -1
                                ),
                                d('br', null, null, -1),
                                t('ev: '),
                                d('code', null, 'Event', -1),
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
          l[116] ||
            (l[116] = d(
              'h3',
              { id: 'radio Slots' },
              [d('code', null, '<radio>'), t(' Slots')],
              -1
            )),
          u(
            a,
            { class: 'component-api-table' },
            {
              default: n(() => [
                l[41] ||
                  (l[41] = d(
                    'colgroup',
                    null,
                    [d('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                u(i, null, {
                  default: n(() => [
                    u(f, null, {
                      default: n(() => [
                        u(e, null, {
                          default: n(
                            () => l[33] || (l[33] = [t('\u63D2\u69FD\u540D')])
                          ),
                          _: 1,
                        }),
                        u(e, null, {
                          default: n(
                            () => l[34] || (l[34] = [t('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        u(e, null, {
                          default: n(
                            () => l[35] || (l[35] = [t('\u53C2\u6570')])
                          ),
                          _: 1,
                        }),
                        u(e, null, {
                          default: n(
                            () => l[36] || (l[36] = [t('\u7248\u672C')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                u(r, null, {
                  default: n(() => [
                    u(f, null, {
                      default: n(() => [
                        u(o, null, {
                          default: n(() => l[37] || (l[37] = [t('radio')])),
                          _: 1,
                        }),
                        u(o, null, {
                          default: n(
                            () =>
                              l[38] ||
                              (l[38] = [
                                t('\u81EA\u5B9A\u4E49\u5355\u9009\u6846'),
                              ])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: n(
                            () =>
                              l[39] ||
                              (l[39] = [
                                t('checked: '),
                                d('code', null, 'boolean', -1),
                                d('br', null, null, -1),
                                t('disabled: '),
                                d('code', null, 'boolean', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: n(() => l[40] || (l[40] = [t('2.18.0')])),
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
          l[117] ||
            (l[117] = d(
              'h3',
              { id: 'radio-group Props' },
              [d('code', null, '<radio-group>'), t(' Props')],
              -1
            )),
          u(
            a,
            { class: 'component-api-table' },
            {
              default: n(() => [
                l[76] ||
                  (l[76] = d(
                    'colgroup',
                    null,
                    [d('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                u(i, null, {
                  default: n(() => [
                    u(f, null, {
                      default: n(() => [
                        u(e, null, {
                          default: n(
                            () => l[42] || (l[42] = [t('\u53C2\u6570\u540D')])
                          ),
                          _: 1,
                        }),
                        u(e, null, {
                          default: n(
                            () => l[43] || (l[43] = [t('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        u(e, null, {
                          default: n(
                            () => l[44] || (l[44] = [t('\u7C7B\u578B')])
                          ),
                          _: 1,
                        }),
                        u(e, null, {
                          default: n(
                            () => l[45] || (l[45] = [t('\u9ED8\u8BA4\u503C')])
                          ),
                          _: 1,
                        }),
                        u(e, null, {
                          default: n(
                            () => l[46] || (l[46] = [t('\u7248\u672C')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                u(r, null, {
                  default: n(() => [
                    u(f, null, {
                      default: n(() => [
                        u(o, null, {
                          default: n(
                            () =>
                              l[47] ||
                              (l[47] = [
                                t('model-value '),
                                d('strong', null, '(v-model)', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: n(
                            () => l[48] || (l[48] = [t('\u7ED1\u5B9A\u503C')])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: n(
                            () =>
                              l[49] ||
                              (l[49] = [
                                d(
                                  'code',
                                  null,
                                  'string | number | boolean',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: n(
                            () => l[50] || (l[50] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        u(o),
                      ]),
                      _: 1,
                    }),
                    u(f, null, {
                      default: n(() => [
                        u(o, null, {
                          default: n(
                            () => l[51] || (l[51] = [t('default-value')])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: n(
                            () =>
                              l[52] ||
                              (l[52] = [
                                t(
                                  '\u9ED8\u8BA4\u503C\uFF08\u975E\u53D7\u63A7\u72B6\u6001\uFF09'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: n(
                            () =>
                              l[53] ||
                              (l[53] = [
                                d(
                                  'code',
                                  null,
                                  'string | number | boolean',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: n(
                            () => l[54] || (l[54] = [d('code', null, "''", -1)])
                          ),
                          _: 1,
                        }),
                        u(o),
                      ]),
                      _: 1,
                    }),
                    u(f, null, {
                      default: n(() => [
                        u(o, null, {
                          default: n(() => l[55] || (l[55] = [t('type')])),
                          _: 1,
                        }),
                        u(o, null, {
                          default: n(
                            () =>
                              l[56] ||
                              (l[56] = [
                                t('\u5355\u9009\u6846\u7EC4\u7684\u7C7B\u578B'),
                              ])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: n(
                            () =>
                              l[57] ||
                              (l[57] = [
                                d('code', null, "'radio' | 'button'", -1),
                              ])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: n(
                            () =>
                              l[58] ||
                              (l[58] = [d('code', null, "'radio'", -1)])
                          ),
                          _: 1,
                        }),
                        u(o),
                      ]),
                      _: 1,
                    }),
                    u(f, null, {
                      default: n(() => [
                        u(o, null, {
                          default: n(() => l[59] || (l[59] = [t('size')])),
                          _: 1,
                        }),
                        u(o, null, {
                          default: n(
                            () =>
                              l[60] ||
                              (l[60] = [
                                t('\u5355\u9009\u6846\u7EC4\u7684\u5C3A\u5BF8'),
                              ])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: n(
                            () =>
                              l[61] ||
                              (l[61] = [
                                d(
                                  'code',
                                  null,
                                  "'mini' | 'small' | 'medium' | 'large'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: n(
                            () => l[62] || (l[62] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        u(o),
                      ]),
                      _: 1,
                    }),
                    u(f, null, {
                      default: n(() => [
                        u(o, null, {
                          default: n(() => l[63] || (l[63] = [t('options')])),
                          _: 1,
                        }),
                        u(o, null, {
                          default: n(
                            () => l[64] || (l[64] = [t('\u9009\u9879')])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: n(
                            () =>
                              l[65] ||
                              (l[65] = [
                                d(
                                  'code',
                                  null,
                                  'Array<string | number | RadioOption>',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: n(
                            () => l[66] || (l[66] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: n(() => l[67] || (l[67] = [t('2.27.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(f, null, {
                      default: n(() => [
                        u(o, null, {
                          default: n(() => l[68] || (l[68] = [t('direction')])),
                          _: 1,
                        }),
                        u(o, null, {
                          default: n(
                            () =>
                              l[69] ||
                              (l[69] = [
                                t('\u5355\u9009\u6846\u7EC4\u7684\u65B9\u5411'),
                              ])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: n(
                            () =>
                              l[70] ||
                              (l[70] = [
                                d(
                                  'code',
                                  null,
                                  "'horizontal' | 'vertical'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: n(
                            () =>
                              l[71] ||
                              (l[71] = [d('code', null, "'horizontal'", -1)])
                          ),
                          _: 1,
                        }),
                        u(o),
                      ]),
                      _: 1,
                    }),
                    u(f, null, {
                      default: n(() => [
                        u(o, null, {
                          default: n(() => l[72] || (l[72] = [t('disabled')])),
                          _: 1,
                        }),
                        u(o, null, {
                          default: n(
                            () =>
                              l[73] || (l[73] = [t('\u662F\u5426\u7981\u7528')])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: n(
                            () =>
                              l[74] ||
                              (l[74] = [d('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: n(
                            () =>
                              l[75] || (l[75] = [d('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        u(o),
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
          l[118] ||
            (l[118] = d(
              'h3',
              { id: 'radio-group Events' },
              [d('code', null, '<radio-group>'), t(' Events')],
              -1
            )),
          u(
            a,
            { class: 'component-api-table' },
            {
              default: n(() => [
                l[83] ||
                  (l[83] = d(
                    'colgroup',
                    null,
                    [d('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                u(i, null, {
                  default: n(() => [
                    u(f, null, {
                      default: n(() => [
                        u(e, null, {
                          default: n(
                            () => l[77] || (l[77] = [t('\u4E8B\u4EF6\u540D')])
                          ),
                          _: 1,
                        }),
                        u(e, null, {
                          default: n(
                            () => l[78] || (l[78] = [t('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        u(e, null, {
                          default: n(
                            () => l[79] || (l[79] = [t('\u53C2\u6570')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                u(r, null, {
                  default: n(() => [
                    u(f, null, {
                      default: n(() => [
                        u(o, null, {
                          default: n(() => l[80] || (l[80] = [t('change')])),
                          _: 1,
                        }),
                        u(o, null, {
                          default: n(
                            () =>
                              l[81] ||
                              (l[81] = [
                                t('\u503C\u6539\u53D8\u65F6\u89E6\u53D1'),
                              ])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: n(
                            () =>
                              l[82] ||
                              (l[82] = [
                                t('value: '),
                                d(
                                  'code',
                                  null,
                                  'string | number | boolean',
                                  -1
                                ),
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
          l[119] ||
            (l[119] = d(
              'h3',
              { id: 'radio-group Slots' },
              [d('code', null, '<radio-group>'), t(' Slots')],
              -1
            )),
          u(
            a,
            { class: 'component-api-table' },
            {
              default: n(() => [
                l[96] ||
                  (l[96] = d(
                    'colgroup',
                    null,
                    [d('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                u(i, null, {
                  default: n(() => [
                    u(f, null, {
                      default: n(() => [
                        u(e, null, {
                          default: n(
                            () => l[84] || (l[84] = [t('\u63D2\u69FD\u540D')])
                          ),
                          _: 1,
                        }),
                        u(e, null, {
                          default: n(
                            () => l[85] || (l[85] = [t('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        u(e, null, {
                          default: n(
                            () => l[86] || (l[86] = [t('\u53C2\u6570')])
                          ),
                          _: 1,
                        }),
                        u(e, null, {
                          default: n(
                            () => l[87] || (l[87] = [t('\u7248\u672C')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                u(r, null, {
                  default: n(() => [
                    u(f, null, {
                      default: n(() => [
                        u(o, null, {
                          default: n(() => l[88] || (l[88] = [t('radio')])),
                          _: 1,
                        }),
                        u(o, null, {
                          default: n(
                            () =>
                              l[89] ||
                              (l[89] = [
                                t('\u81EA\u5B9A\u4E49\u5355\u9009\u6846'),
                              ])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: n(
                            () =>
                              l[90] ||
                              (l[90] = [
                                t('checked: '),
                                d('code', null, 'boolean', -1),
                                d('br', null, null, -1),
                                t('disabled: '),
                                d('code', null, 'boolean', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: n(() => l[91] || (l[91] = [t('2.27.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(f, null, {
                      default: n(() => [
                        u(o, null, {
                          default: n(() => l[92] || (l[92] = [t('label')])),
                          _: 1,
                        }),
                        u(o, null, {
                          default: n(
                            () =>
                              l[93] ||
                              (l[93] = [t('radio \u6587\u6848\u5185\u5BB9')])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: n(
                            () =>
                              l[94] ||
                              (l[94] = [
                                t('data: '),
                                d('code', null, 'RadioOption', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: n(() => l[95] || (l[95] = [t('2.27.0')])),
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
          l[120] ||
            (l[120] = d('h3', { id: 'RadioOption' }, 'RadioOption', -1)),
          u(
            a,
            { class: 'component-api-table' },
            {
              default: n(() => [
                l[113] ||
                  (l[113] = d(
                    'colgroup',
                    null,
                    [d('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                u(i, null, {
                  default: n(() => [
                    u(f, null, {
                      default: n(() => [
                        u(e, null, {
                          default: n(
                            () => l[97] || (l[97] = [t('\u53C2\u6570\u540D')])
                          ),
                          _: 1,
                        }),
                        u(e, null, {
                          default: n(
                            () => l[98] || (l[98] = [t('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        u(e, null, {
                          default: n(
                            () => l[99] || (l[99] = [t('\u7C7B\u578B')])
                          ),
                          _: 1,
                        }),
                        u(e, null, {
                          default: n(
                            () => l[100] || (l[100] = [t('\u9ED8\u8BA4\u503C')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                u(r, null, {
                  default: n(() => [
                    u(f, null, {
                      default: n(() => [
                        u(o, null, {
                          default: n(() => l[101] || (l[101] = [t('label')])),
                          _: 1,
                        }),
                        u(o, null, {
                          default: n(
                            () => l[102] || (l[102] = [t('\u6587\u6848')])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: n(
                            () =>
                              l[103] ||
                              (l[103] = [d('code', null, 'RenderContent', -1)])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: n(
                            () =>
                              l[104] || (l[104] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(f, null, {
                      default: n(() => [
                        u(o, null, {
                          default: n(() => l[105] || (l[105] = [t('value')])),
                          _: 1,
                        }),
                        u(o, null, {
                          default: n(
                            () =>
                              l[106] ||
                              (l[106] = [
                                t('\u9009\u9879\u7684 '),
                                d('code', null, 'value', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: n(
                            () =>
                              l[107] ||
                              (l[107] = [
                                d('code', null, 'string | number', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: n(
                            () =>
                              l[108] || (l[108] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(f, null, {
                      default: n(() => [
                        u(o, null, {
                          default: n(
                            () => l[109] || (l[109] = [t('disabled')])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: n(
                            () =>
                              l[110] ||
                              (l[110] = [t('\u662F\u5426\u7981\u7528')])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: n(
                            () =>
                              l[111] ||
                              (l[111] = [d('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: n(
                            () =>
                              l[112] ||
                              (l[112] = [d('code', null, 'false', -1)])
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
        ]),
        _: 1,
      },
      16,
      ['changelog']
    )
  );
}
const X = P(K, [['render', Q]]);
export { X as default };
