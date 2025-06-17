import {
  _ as w,
  d as M,
  u as N,
  r as d,
  o as P,
  c as I,
  w as t,
  a as u,
  b as e,
  e as o,
  m as V,
} from './index.9c61ea88.js';
import {
  D as $,
  a as z,
  b as R,
  c as S,
  d as j,
  e as q,
  f as G,
  g as H,
} from './tooltip.de2b4ba0.js';

const b = [
  {
    version: '2.57.0',
    date: '2025-03-10',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} \u95EE\u9898\u4FEE\u590D',
        list: [
          `<p>\u4FEE\u590D\u62D6\u52A8\u66F4\u6539\u6ED1\u5757\u503C\u5728\u79FB\u52A8\u7AEF\u65E0\u6548 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/3343">#3343</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.44.2',
    date: '2023-03-17',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} \u95EE\u9898\u4FEE\u590D',
        list: [
          `<p>\u4FEE\u590D\u5728 range \u6A21\u5F0F\u4E0B model-value \u7ED1\u5B9A\u9519\u8BEF\u7684\u95EE\u9898 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2241">#2241</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.42.1',
    date: '2023-02-03',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} \u95EE\u9898\u4FEE\u590D',
        list: [
          `<p>\u4F18\u5316\u6570\u5B57\u8F93\u5165\u6846\u65E0\u6548\u8F93\u5165\u65F6\u80FD\u591F\u81EA\u52A8\u4FEE\u590D (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1952">#1952</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.42.0',
    date: '2023-01-13',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} \u65B0\u589E\u529F\u80FD',
        list: [
          `<p>\u6DFB\u52A0show-tooltip\u5C5E\u6027 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2037">#2037</a>)</p>
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
          `<p>\u4FEE\u590D\u6ED1\u52A8\u8F93\u5165\u6761\u8BBE\u7F6E\u6700\u5C0F\u503C\u8D77\u59CB\u4F4D\u7F6E\u9519\u8BEF (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1826">#1826</a>)</p>
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
        type: 'bugfix',
        typeText: '\u{1F41B} \u95EE\u9898\u4FEE\u590D',
        list: [
          `<p>\u4FEE\u590D\u8F93\u5165\u6846\u6539\u53D8\u65F6\u4E0D\u4F1A\u89E6\u53D1 change \u7684\u95EE\u9898 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/775">#775</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.1.0',
    date: '2021-11-05',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} \u95EE\u9898\u4FEE\u590D',
        list: [
          `<p>\u4FEE\u590D\u70B9\u51FB\u53F3\u952E\u6CA1\u6709\u91CA\u653E\u62D6\u62FD\u4E8B\u4EF6\u7684\u95EE\u9898 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/97">#97</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const J = M({
  name: 'ArcoMain',
  components: {
    DemoBasic: $,
    DemoDisabled: z,
    DemoStep: R,
    DemoMarks: S,
    DemoRange: j,
    DemoInput: q,
    DemoVertical: G,
    DemoTooltip: H,
  },
  setup() {
    const { locale: r } = N();
    return {
      locale: r,
      data: {
        meta: { type: '\u7EC4\u4EF6', category: '\u6570\u636E\u8F93\u5165' },
        title: '\u6ED1\u52A8\u8F93\u5165\u6761 Slider',
        description:
          '\u6ED1\u52A8\u578B\u8F93\u5165\u5668\uFF0C\u5C55\u793A\u5F53\u524D\u503C\u548C\u53EF\u9009\u8303\u56F4\u3002',
      },
      changelog: typeof b === 'undefined' ? void 0 : b,
      getMessage: (f, i) => (r.value === 'zh-CN' ? f : i),
    };
  },
});
function K(r, l, F, E, f, i) {
  const v = d('demo-basic');
  const D = d('demo-disabled');
  const x = d('demo-step');
  const C = d('demo-marks');
  const y = d('demo-range');
  const A = d('demo-input');
  const B = d('demo-vertical');
  const k = d('demo-tooltip');
  const _ = d('anchor-head');
  const a = d('a-th');
  const s = d('a-tr');
  const p = d('a-thead');
  const n = d('a-td');
  const m = d('a-tbody');
  const g = d('a-table');
  const T = d('arco-article');
  return (
    P(),
    I(
      T,
      V(r.data, { changelog: r.changelog }),
      {
        default: t(() => [
          u(v),
          u(D),
          u(x),
          u(C),
          u(y),
          u(A),
          u(B),
          u(k),
          u(
            _,
            { level: '2', href: 'API' },
            { default: t(() => l[0] || (l[0] = [e('API')])), _: 1 }
          ),
          l[63] ||
            (l[63] = o(
              'h3',
              { id: 'slider Props' },
              [o('code', null, '<slider>'), e(' Props')],
              -1
            )),
          u(
            g,
            { class: 'component-api-table' },
            {
              default: t(() => [
                l[55] ||
                  (l[55] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                u(p, null, {
                  default: t(() => [
                    u(s, null, {
                      default: t(() => [
                        u(a, null, {
                          default: t(
                            () => l[1] || (l[1] = [e('\u53C2\u6570\u540D')])
                          ),
                          _: 1,
                        }),
                        u(a, null, {
                          default: t(
                            () => l[2] || (l[2] = [e('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        u(a, null, {
                          default: t(
                            () => l[3] || (l[3] = [e('\u7C7B\u578B')])
                          ),
                          _: 1,
                        }),
                        u(a, null, {
                          default: t(
                            () => l[4] || (l[4] = [e('\u9ED8\u8BA4\u503C')])
                          ),
                          _: 1,
                        }),
                        u(a, null, {
                          default: t(
                            () => l[5] || (l[5] = [e('\u7248\u672C')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                u(m, null, {
                  default: t(() => [
                    u(s, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(
                            () =>
                              l[6] ||
                              (l[6] = [
                                e('model-value '),
                                o('strong', null, '(v-model)', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () => l[7] || (l[7] = [e('\u7ED1\u5B9A\u503C')])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[8] ||
                              (l[8] = [
                                o(
                                  'code',
                                  null,
                                  'number | [number, number]',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () => l[9] || (l[9] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        u(n),
                      ]),
                      _: 1,
                    }),
                    u(s, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(
                            () => l[10] || (l[10] = [e('default-value')])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[11] ||
                              (l[11] = [
                                e(
                                  '\u9ED8\u8BA4\u503C\uFF08\u975E\u53D7\u63A7\u72B6\u6001\uFF09'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[12] ||
                              (l[12] = [
                                o(
                                  'code',
                                  null,
                                  'number | [number, number]',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () => l[13] || (l[13] = [o('code', null, '0', -1)])
                          ),
                          _: 1,
                        }),
                        u(n),
                      ]),
                      _: 1,
                    }),
                    u(s, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(() => l[14] || (l[14] = [e('step')])),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[15] ||
                              (l[15] = [e('\u6ED1\u52A8\u7684\u6B65\u957F')])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[16] || (l[16] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () => l[17] || (l[17] = [o('code', null, '1', -1)])
                          ),
                          _: 1,
                        }),
                        u(n),
                      ]),
                      _: 1,
                    }),
                    u(s, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(() => l[18] || (l[18] = [e('min')])),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[19] ||
                              (l[19] = [
                                e(
                                  '\u6ED1\u52A8\u8303\u56F4\u7684\u6700\u5C0F\u503C'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[20] || (l[20] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () => l[21] || (l[21] = [o('code', null, '0', -1)])
                          ),
                          _: 1,
                        }),
                        u(n),
                      ]),
                      _: 1,
                    }),
                    u(s, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(() => l[22] || (l[22] = [e('marks')])),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[23] ||
                              (l[23] = [
                                e('\u8BBE\u7F6E\u663E\u793A\u7684\u6807\u7B7E'),
                              ])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[24] ||
                              (l[24] = [
                                o('code', null, 'Record<number, string>', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () => l[25] || (l[25] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        u(n),
                      ]),
                      _: 1,
                    }),
                    u(s, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(() => l[26] || (l[26] = [e('max')])),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[27] ||
                              (l[27] = [
                                e(
                                  '\u6ED1\u52A8\u8303\u56F4\u7684\u6700\u5927\u503C'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[28] || (l[28] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[29] || (l[29] = [o('code', null, '100', -1)])
                          ),
                          _: 1,
                        }),
                        u(n),
                      ]),
                      _: 1,
                    }),
                    u(s, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(() => l[30] || (l[30] = [e('direction')])),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[31] ||
                              (l[31] = [
                                e(
                                  '\u6ED1\u52A8\u8F93\u5165\u6761\u7684\u65B9\u5411'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[32] ||
                              (l[32] = [o('code', null, 'Direction', -1)])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[33] ||
                              (l[33] = [o('code', null, "'horizontal'", -1)])
                          ),
                          _: 1,
                        }),
                        u(n),
                      ]),
                      _: 1,
                    }),
                    u(s, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(() => l[34] || (l[34] = [e('disabled')])),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[35] || (l[35] = [e('\u662F\u5426\u7981\u7528')])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[36] ||
                              (l[36] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[37] || (l[37] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        u(n),
                      ]),
                      _: 1,
                    }),
                    u(s, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(
                            () => l[38] || (l[38] = [e('show-ticks')])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[39] ||
                              (l[39] = [
                                e('\u662F\u5426\u663E\u793A\u523B\u5EA6\u7EBF'),
                              ])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[40] ||
                              (l[40] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[41] || (l[41] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        u(n),
                      ]),
                      _: 1,
                    }),
                    u(s, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(
                            () => l[42] || (l[42] = [e('show-input')])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[43] ||
                              (l[43] = [
                                e('\u662F\u5426\u663E\u793A\u8F93\u5165\u6846'),
                              ])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[44] ||
                              (l[44] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[45] || (l[45] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        u(n),
                      ]),
                      _: 1,
                    }),
                    u(s, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(() => l[46] || (l[46] = [e('range')])),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[47] ||
                              (l[47] = [
                                e(
                                  '\u662F\u5426\u5F00\u542F\u8303\u56F4\u9009\u62E9'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[48] ||
                              (l[48] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[49] || (l[49] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        u(n),
                      ]),
                      _: 1,
                    }),
                    u(s, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(
                            () => l[50] || (l[50] = [e('show-tooltip')])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[51] ||
                              (l[51] = [e('\u662F\u5426\u663E\u793Atooltip')])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[52] ||
                              (l[52] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[53] || (l[53] = [o('code', null, 'true', -1)])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(() => l[54] || (l[54] = [e('2.42.0')])),
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
          l[64] ||
            (l[64] = o(
              'h3',
              { id: 'slider Events' },
              [o('code', null, '<slider>'), e(' Events')],
              -1
            )),
          u(
            g,
            { class: 'component-api-table' },
            {
              default: t(() => [
                l[62] ||
                  (l[62] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                u(p, null, {
                  default: t(() => [
                    u(s, null, {
                      default: t(() => [
                        u(a, null, {
                          default: t(
                            () => l[56] || (l[56] = [e('\u4E8B\u4EF6\u540D')])
                          ),
                          _: 1,
                        }),
                        u(a, null, {
                          default: t(
                            () => l[57] || (l[57] = [e('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        u(a, null, {
                          default: t(
                            () => l[58] || (l[58] = [e('\u53C2\u6570')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                u(m, null, {
                  default: t(() => [
                    u(s, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(() => l[59] || (l[59] = [e('change')])),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[60] ||
                              (l[60] = [
                                e('\u503C\u6539\u53D8\u65F6\u89E6\u53D1'),
                              ])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[61] ||
                              (l[61] = [
                                e('value: '),
                                o(
                                  'code',
                                  null,
                                  'number | [number, number]',
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
        ]),
        _: 1,
      },
      16,
      ['changelog']
    )
  );
}
const Q = w(J, [['render', K]]);
export { Q as default };
