import {
  _ as j,
  d as G,
  u as N,
  r as s,
  o as I,
  c as M,
  w as n,
  a as l,
  b as d,
  e as o,
  m as $,
} from './index.9c61ea88.js';
import {
  D as O,
  a as z,
  b as J,
  c as q,
  d as H,
  e as K,
  f as L,
  g as Q,
  h as S,
  i as U,
  j as W,
} from './grid-responsive.9a9df755.js';

const C = [
  {
    version: '2.49.3',
    date: '2023-08-04',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} \u95EE\u9898\u4FEE\u590D',
        list: [
          `<p>\u4FEE\u590Da-grid-item\u4E2D\u4F7F\u7528v-show\uFF0C\u521D\u59CB\u503C\u4E3Afalse\uFF0C\u4F46\u4ECD\u5C55\u793A\u51FA\u6765\u7684\u95EE\u9898 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2604">#2604</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.25.1',
    date: '2022-04-27',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} \u95EE\u9898\u4FEE\u590D',
        list: [
          `<p>\u4FEE\u590D gutter \u5C5E\u6027\u7C7B\u578B\u68C0\u6D4B\u95EE\u9898 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1052">#1052</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.19.0',
    date: '2022-03-11',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} \u65B0\u589E\u529F\u80FD',
        list: [
          `<p>\u5F53\u5217\u8DE8\u5EA6\u4E3A0\u7684\u65F6\u5019<code>a-col</code>\u5C06\u88AB\u9690\u85CF (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/797">#797</a>)</p>
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
        type: 'feature',
        typeText: '\u{1F195} \u65B0\u589E\u529F\u80FD',
        list: [
          `<p>\u652F\u6301\u54CD\u5E94\u5F0F\u914D\u7F6E (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/693">#693</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.15.1',
    date: '2022-01-15',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} \u95EE\u9898\u4FEE\u590D',
        list: [
          `<p>\u4FEE\u590D\u7EC4\u4EF6\u540D\u6CE8\u518C\u9519\u8BEF\u95EE\u9898 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/581">#581</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.15.0',
    date: '2022-01-14',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} \u65B0\u589E\u529F\u80FD',
        list: [
          `<p>\u65B0\u589E\u57FA\u4E8E grid \u7684\u5E03\u5C40\u7EC4\u4EF6 <code>Grid</code> <code>Grid.Item</code> (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/576">#576</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.13.0',
    date: '2021-12-31',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} \u65B0\u589E\u529F\u80FD',
        list: [
          `<p><code>Row</code> \u65B0\u589E\u5C5E\u6027 <code>wrap</code> (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/471">#471</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.10.0',
    date: '2021-12-10',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} \u65B0\u589E\u529F\u80FD',
        list: [
          `<p>\u7EC4\u4EF6 <code>a-col</code> \u65B0\u589E\u5C5E\u6027 <code>flex</code> (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/340">#340</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const X = G({
  name: 'ArcoMain',
  components: {
    DemoBasic: O,
    DemoOffset: z,
    DemoGutter: J,
    DemoFlexJustify: q,
    DemoFlexAlign: H,
    DemoOrder: K,
    DemoAdaptation: L,
    DemoAdaptationObject: Q,
    DemoFlex: S,
    DemoGrid: U,
    DemoGridResponsive: W,
  },
  setup() {
    const { locale: r } = N();
    return {
      locale: r,
      data: {
        meta: { type: '\u7EC4\u4EF6', category: '\u5E03\u5C40' },
        title: '\u6805\u683C Grid',
        description:
          '\u6805\u683C\u53EF\u4EE5\u6709\u6548\u7684\u4FDD\u8BC1\u9875\u9762\u7684\u4E00\u81F4\u6027\u3001\u903B\u8F91\u6027\u3001\u52A0\u5F3A\u56E2\u961F\u534F\u4F5C\u548C\u7EDF\u4E00\u3002',
      },
      changelog: typeof C === 'undefined' ? void 0 : C,
      getMessage: (a, m) => (r.value === 'zh-CN' ? a : m),
    };
  },
});
function Y(r, u, g, E, a, m) {
  const D = s('demo-basic');
  const x = s('demo-offset');
  const b = s('demo-gutter');
  const v = s('demo-flex-justify');
  const y = s('demo-flex-align');
  const B = s('demo-order');
  const A = s('demo-adaptation');
  const k = s('demo-adaptation-object');
  const w = s('demo-flex');
  const R = s('demo-grid');
  const V = s('demo-grid-responsive');
  const P = s('anchor-head');
  const f = s('a-th');
  const e = s('a-tr');
  const i = s('a-thead');
  const t = s('a-td');
  const p = s('a-tbody');
  const F = s('a-table');
  const T = s('arco-article');
  return (
    I(),
    M(
      T,
      $(r.data, { changelog: r.changelog }),
      {
        default: n(() => [
          l(D),
          l(x),
          l(b),
          l(v),
          l(y),
          l(B),
          l(A),
          l(k),
          l(w),
          l(R),
          l(V),
          l(
            P,
            { level: '2', href: 'API' },
            { default: n(() => u[0] || (u[0] = [d('API')])), _: 1 }
          ),
          u[146] ||
            (u[146] = o(
              'h3',
              { id: 'row Props' },
              [o('code', null, '<row>'), d(' Props')],
              -1
            )),
          l(
            F,
            { class: 'component-api-table' },
            {
              default: n(() => [
                u[27] ||
                  (u[27] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                l(i, null, {
                  default: n(() => [
                    l(e, null, {
                      default: n(() => [
                        l(f, null, {
                          default: n(
                            () => u[1] || (u[1] = [d('\u53C2\u6570\u540D')])
                          ),
                          _: 1,
                        }),
                        l(f, null, {
                          default: n(
                            () => u[2] || (u[2] = [d('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        l(f, null, {
                          default: n(
                            () => u[3] || (u[3] = [d('\u7C7B\u578B')])
                          ),
                          _: 1,
                        }),
                        l(f, null, {
                          default: n(
                            () => u[4] || (u[4] = [d('\u9ED8\u8BA4\u503C')])
                          ),
                          _: 1,
                        }),
                        l(f, null, {
                          default: n(
                            () => u[5] || (u[5] = [d('\u7248\u672C')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                l(p, null, {
                  default: n(() => [
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[6] || (u[6] = [d('gutter')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[7] ||
                              (u[7] = [
                                d(
                                  '\u6805\u683C\u95F4\u9694\uFF0C\u5355\u4F4D\u662F'
                                ),
                                o('code', null, 'px', -1),
                                d(
                                  ' \u6805\u683C\u95F4\u9694\u3002\u53EF\u4F20\u5165\u54CD\u5E94\u5F0F\u5BF9\u8C61\u5199\u6CD5 { xs: 4, sm: 6, md: 12}\uFF0C\u4F20\u5165\u6570\u7EC4 [ \u6C34\u5E73\u95F4\u8DDD\uFF0C \u5782\u76F4\u95F4\u8DDD ] \u6765\u8BBE\u7F6E\u4E24\u4E2A\u65B9\u5411\u3002'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[8] ||
                              (u[8] = [
                                o(
                                  'code',
                                  null,
                                  'number| ResponsiveValue| [number | ResponsiveValue, number | ResponsiveValue]',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[9] || (u[9] = [o('code', null, '0', -1)])
                          ),
                          _: 1,
                        }),
                        l(t),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[10] || (u[10] = [d('justify')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[11] ||
                              (u[11] = [
                                d('\u6C34\u5E73\u5BF9\u9F50\u65B9\u5F0F ('),
                                o('code', null, 'justify-content', -1),
                                d(')'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[12] ||
                              (u[12] = [
                                o(
                                  'code',
                                  null,
                                  "'start' | 'center' | 'end' | 'space-around' | 'space-between'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[13] ||
                              (u[13] = [o('code', null, "'start'", -1)])
                          ),
                          _: 1,
                        }),
                        l(t),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[14] || (u[14] = [d('align')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[15] ||
                              (u[15] = [
                                d('\u7AD6\u76F4\u5BF9\u9F50\u65B9\u5F0F ( '),
                                o('code', null, 'align-items', -1),
                                d(' )'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[16] ||
                              (u[16] = [
                                o(
                                  'code',
                                  null,
                                  "'start' | 'center' | 'end' | 'stretch'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[17] ||
                              (u[17] = [o('code', null, "'start'", -1)])
                          ),
                          _: 1,
                        }),
                        l(t),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[18] || (u[18] = [d('div')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[19] ||
                              (u[19] = [
                                d('\u5F00\u542F\u8FD9\u4E2A\u9009\u9879'),
                                o('code', null, 'Row', -1),
                                d('\u548C'),
                                o('code', null, 'Col', -1),
                                d(
                                  '\u90FD\u4F1A\u88AB\u5F53\u4F5Cdiv\u800C\u4E0D\u4F1A\u9644\u5E26\u4EFB\u4F55Grid\u76F8\u5173\u7684\u7C7B\u548C\u6837\u5F0F'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[20] ||
                              (u[20] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[21] || (u[21] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        l(t),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[22] || (u[22] = [d('wrap')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[23] ||
                              (u[23] = [
                                o('code', null, 'Col', -1),
                                d(' \u662F\u5426\u652F\u6301\u6362\u884C'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[24] ||
                              (u[24] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[25] || (u[25] = [o('code', null, 'true', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(() => u[26] || (u[26] = [d('2.13.0')])),
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
          u[147] ||
            (u[147] = o(
              'h3',
              { id: 'col Props' },
              [o('code', null, '<col>'), d(' Props')],
              -1
            )),
          l(
            F,
            { class: 'component-api-table' },
            {
              default: n(() => [
                u[74] ||
                  (u[74] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                l(i, null, {
                  default: n(() => [
                    l(e, null, {
                      default: n(() => [
                        l(f, null, {
                          default: n(
                            () => u[28] || (u[28] = [d('\u53C2\u6570\u540D')])
                          ),
                          _: 1,
                        }),
                        l(f, null, {
                          default: n(
                            () => u[29] || (u[29] = [d('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        l(f, null, {
                          default: n(
                            () => u[30] || (u[30] = [d('\u7C7B\u578B')])
                          ),
                          _: 1,
                        }),
                        l(f, null, {
                          default: n(
                            () => u[31] || (u[31] = [d('\u9ED8\u8BA4\u503C')])
                          ),
                          _: 1,
                        }),
                        l(f, null, {
                          default: n(
                            () => u[32] || (u[32] = [d('\u7248\u672C')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                l(p, null, {
                  default: n(() => [
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[33] || (u[33] = [d('span')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[34] ||
                              (u[34] = [
                                d('\u6805\u683C\u5360\u4F4D\u683C\u6570'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[35] || (u[35] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[36] || (u[36] = [o('code', null, '24', -1)])
                          ),
                          _: 1,
                        }),
                        l(t),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[37] || (u[37] = [d('offset')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[38] ||
                              (u[38] = [
                                d(
                                  '\u6805\u683C\u5DE6\u4FA7\u7684\u95F4\u9694\u683C\u6570\uFF0C\u95F4\u9694\u5185\u4E0D\u53EF\u4EE5\u6709\u6805\u683C'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[39] || (u[39] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[40] || (u[40] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        l(t),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[41] || (u[41] = [d('order')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[42] ||
                              (u[42] = [
                                d('\u5BF9\u5143\u7D20\u8FDB\u884C\u6392\u5E8F'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[43] || (u[43] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[44] || (u[44] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        l(t),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[45] || (u[45] = [d('xs')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[46] ||
                              (u[46] = [
                                d('< 576px \u54CD\u5E94\u5F0F\u6805\u683C'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[47] ||
                              (u[47] = [
                                o(
                                  'code',
                                  null,
                                  'number | { [key: string]: any }',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[48] || (u[48] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        l(t),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[49] || (u[49] = [d('sm')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[50] ||
                              (u[50] = [
                                d('>= 576px \u54CD\u5E94\u5F0F\u6805\u683C'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[51] ||
                              (u[51] = [
                                o(
                                  'code',
                                  null,
                                  'number | { [key: string]: any }',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[52] || (u[52] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        l(t),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[53] || (u[53] = [d('md')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[54] ||
                              (u[54] = [
                                d('>= 768px \u54CD\u5E94\u5F0F\u6805\u683C'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[55] ||
                              (u[55] = [
                                o(
                                  'code',
                                  null,
                                  'number | { [key: string]: any }',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[56] || (u[56] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        l(t),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[57] || (u[57] = [d('lg')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[58] ||
                              (u[58] = [
                                d('>= 992px \u54CD\u5E94\u5F0F\u6805\u683C'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[59] ||
                              (u[59] = [
                                o(
                                  'code',
                                  null,
                                  'number | { [key: string]: any }',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[60] || (u[60] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        l(t),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[61] || (u[61] = [d('xl')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[62] ||
                              (u[62] = [
                                d('>= 1200px \u54CD\u5E94\u5F0F\u6805\u683C'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[63] ||
                              (u[63] = [
                                o(
                                  'code',
                                  null,
                                  'number | { [key: string]: any }',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[64] || (u[64] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        l(t),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[65] || (u[65] = [d('xxl')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[66] ||
                              (u[66] = [
                                d('>= 1600px \u54CD\u5E94\u5F0F\u6805\u683C'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[67] ||
                              (u[67] = [
                                o(
                                  'code',
                                  null,
                                  'number | { [key: string]: any }',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[68] || (u[68] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        l(t),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[69] || (u[69] = [d('flex')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[70] ||
                              (u[70] = [
                                d('\u8BBE\u7F6E flex \u5E03\u5C40\u5C5E\u6027'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[71] ||
                              (u[71] = [
                                o(
                                  'code',
                                  null,
                                  "number | string | 'initial' | 'auto' | 'none'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[72] || (u[72] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(() => u[73] || (u[73] = [d('2.10.0')])),
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
          u[148] ||
            (u[148] = o(
              'h3',
              { id: 'grid Props (2.15.0)' },
              [o('code', null, '<grid>'), d(' Props (2.15.0)')],
              -1
            )),
          u[149] ||
            (u[149] = o(
              'p',
              null,
              [
                d('\u54CD\u5E94\u5F0F\u914D\u7F6E\u4ECE '),
                o('code', null, '2.18.0'),
                d(' \u5F00\u59CB\u652F\u6301\uFF0C\u5177\u4F53\u914D\u7F6E '),
                o(
                  'a',
                  { class: 'link', href: '#responsivevalue' },
                  'ResponsiveValue'
                ),
              ],
              -1
            )),
          l(
            F,
            { class: 'component-api-table' },
            {
              default: n(() => [
                u[99] ||
                  (u[99] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                l(i, null, {
                  default: n(() => [
                    l(e, null, {
                      default: n(() => [
                        l(f, null, {
                          default: n(
                            () => u[75] || (u[75] = [d('\u53C2\u6570\u540D')])
                          ),
                          _: 1,
                        }),
                        l(f, null, {
                          default: n(
                            () => u[76] || (u[76] = [d('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        l(f, null, {
                          default: n(
                            () => u[77] || (u[77] = [d('\u7C7B\u578B')])
                          ),
                          _: 1,
                        }),
                        l(f, null, {
                          default: n(
                            () => u[78] || (u[78] = [d('\u9ED8\u8BA4\u503C')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                l(p, null, {
                  default: n(() => [
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[79] || (u[79] = [d('cols')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[80] ||
                              (u[80] = [
                                d(
                                  '\u6BCF\u4E00\u884C\u5C55\u793A\u7684\u5217\u6570'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[81] ||
                              (u[81] = [
                                o('code', null, 'number | ResponsiveValue', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[82] || (u[82] = [o('code', null, '24', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[83] || (u[83] = [d('row-gap')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[84] ||
                              (u[84] = [
                                d(
                                  '\u884C\u4E0E\u884C\u4E4B\u95F4\u7684\u95F4\u8DDD'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[85] ||
                              (u[85] = [
                                o('code', null, 'number | ResponsiveValue', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[86] || (u[86] = [o('code', null, '0', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[87] || (u[87] = [d('col-gap')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[88] ||
                              (u[88] = [
                                d(
                                  '\u5217\u4E0E\u5217\u4E4B\u95F4\u7684\u95F4\u8DDD'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[89] ||
                              (u[89] = [
                                o('code', null, 'number | ResponsiveValue', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[90] || (u[90] = [o('code', null, '0', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[91] || (u[91] = [d('collapsed')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[92] || (u[92] = [d('\u662F\u5426\u6298\u53E0')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[93] ||
                              (u[93] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[94] || (u[94] = [o('code', null, 'false', -1)])
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
                            () => u[95] || (u[95] = [d('collapsed-rows')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[96] ||
                              (u[96] = [
                                d(
                                  '\u6298\u53E0\u65F6\u663E\u793A\u7684\u884C\u6570'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[97] || (u[97] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[98] || (u[98] = [o('code', null, '1', -1)])
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
          u[150] ||
            (u[150] = o(
              'h3',
              { id: 'grid-item Props (2.15.0)' },
              [o('code', null, '<grid-item>'), d(' Props (2.15.0)')],
              -1
            )),
          u[151] ||
            (u[151] = o(
              'p',
              null,
              [
                d('\u54CD\u5E94\u5F0F\u914D\u7F6E\u4ECE '),
                o('code', null, '2.18.0'),
                d(' \u5F00\u59CB\u652F\u6301\uFF0C\u5177\u4F53\u914D\u7F6E '),
                o(
                  'a',
                  { class: 'link', href: '#responsivevalue' },
                  'ResponsiveValue'
                ),
              ],
              -1
            )),
          l(
            F,
            { class: 'component-api-table' },
            {
              default: n(() => [
                u[116] ||
                  (u[116] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                l(i, null, {
                  default: n(() => [
                    l(e, null, {
                      default: n(() => [
                        l(f, null, {
                          default: n(
                            () => u[100] || (u[100] = [d('\u53C2\u6570\u540D')])
                          ),
                          _: 1,
                        }),
                        l(f, null, {
                          default: n(
                            () => u[101] || (u[101] = [d('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        l(f, null, {
                          default: n(
                            () => u[102] || (u[102] = [d('\u7C7B\u578B')])
                          ),
                          _: 1,
                        }),
                        l(f, null, {
                          default: n(
                            () => u[103] || (u[103] = [d('\u9ED8\u8BA4\u503C')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                l(p, null, {
                  default: n(() => [
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[104] || (u[104] = [d('span')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[105] ||
                              (u[105] = [d('\u8DE8\u8D8A\u7684\u683C\u6570')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[106] ||
                              (u[106] = [
                                o('code', null, 'number | ResponsiveValue', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[107] || (u[107] = [o('code', null, '1', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[108] || (u[108] = [d('offset')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[109] ||
                              (u[109] = [
                                d('\u5DE6\u4FA7\u7684\u95F4\u9694\u683C\u6570'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[110] ||
                              (u[110] = [
                                o('code', null, 'number | ResponsiveValue', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[111] || (u[111] = [o('code', null, '0', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[112] || (u[112] = [d('suffix')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[113] ||
                              (u[113] = [
                                d('\u662F\u5426\u662F\u540E\u7F00\u5143\u7D20'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[114] ||
                              (u[114] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[115] ||
                              (u[115] = [o('code', null, 'false', -1)])
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
          u[152] ||
            (u[152] = o(
              'h3',
              { id: 'ResponsiveValue' },
              'ResponsiveValue',
              -1
            )),
          l(
            F,
            { class: 'component-api-table' },
            {
              default: n(() => [
                u[145] ||
                  (u[145] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                l(i, null, {
                  default: n(() => [
                    l(e, null, {
                      default: n(() => [
                        l(f, null, {
                          default: n(
                            () => u[117] || (u[117] = [d('\u53C2\u6570\u540D')])
                          ),
                          _: 1,
                        }),
                        l(f, null, {
                          default: n(
                            () => u[118] || (u[118] = [d('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        l(f, null, {
                          default: n(
                            () => u[119] || (u[119] = [d('\u7C7B\u578B')])
                          ),
                          _: 1,
                        }),
                        l(f, null, {
                          default: n(
                            () => u[120] || (u[120] = [d('\u9ED8\u8BA4\u503C')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                l(p, null, {
                  default: n(() => [
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[121] || (u[121] = [d('xxl')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[122] ||
                              (u[122] = [
                                d('>= 1600px \u54CD\u5E94\u5F0F\u914D\u7F6E'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[123] ||
                              (u[123] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[124] || (u[124] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[125] || (u[125] = [d('xl')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[126] ||
                              (u[126] = [
                                d('>= 1200px \u54CD\u5E94\u5F0F\u914D\u7F6E'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[127] ||
                              (u[127] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[128] || (u[128] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[129] || (u[129] = [d('lg')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[130] ||
                              (u[130] = [
                                d('>= 992px \u54CD\u5E94\u5F0F\u914D\u7F6E'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[131] ||
                              (u[131] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[132] || (u[132] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[133] || (u[133] = [d('md')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[134] ||
                              (u[134] = [
                                d('>= 768px \u54CD\u5E94\u5F0F\u914D\u7F6E'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[135] ||
                              (u[135] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[136] || (u[136] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[137] || (u[137] = [d('sm')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[138] ||
                              (u[138] = [
                                d('>= 576px \u54CD\u5E94\u5F0F\u914D\u7F6E'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[139] ||
                              (u[139] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[140] || (u[140] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[141] || (u[141] = [d('xs')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[142] ||
                              (u[142] = [
                                d('< 576px \u54CD\u5E94\u5F0F\u914D\u7F6E'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[143] ||
                              (u[143] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[144] || (u[144] = [o('code', null, '-', -1)])
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
const h = j(X, [['render', Y]]);
export { h as default };
