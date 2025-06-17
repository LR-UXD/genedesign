import {
  _ as P,
  d as B,
  u as C,
  r as i,
  o as N,
  c as z,
  w as n,
  e as o,
  a as t,
  b as u,
  m as V,
} from './index.9c61ea88.js';
import {
  D as L,
  a as M,
  b as I,
  c as R,
  d as $,
  e as E,
} from './example.5e3b6068.js';

const b = [
  {
    version: '2.57.0',
    date: '2025-03-10',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>fixes the issue related to the layout distribution of span (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/3409">#3409</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.53.0',
    date: '2023-11-03',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem of invalid <code>span</code> attribute of <code>DescriptionsItem</code> component (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2765">#2765</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  { version: '2.39.0', date: '2022-11-18', list: [], extra: [] },
  {
    version: '2.38.0-beta.1',
    date: '2022-10-14',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>The <code>layout-fixed</code> of the table style in the description. The width will be evenly distributed when it&#39;s set to <code>fixed</code>. (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1670">#1670</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.20.0',
    date: '2022-03-18',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>The <code>column</code> property supports reactive configuration (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/839">#839</a>)</p>
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
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem of error when <code>data</code> is empty data (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/812">#812</a>)</p>
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
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>Added <code>descriptions-item</code> component (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/739">#739</a>)</p>
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
        typeText: '\u{1F195} Feature',
        list: [
          `<p>The index and data parameters are added to the Value and Label slots (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/470">#470</a>)</p>
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
          `<p>Add the <code>align</code> prop (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/268">#268</a>)</p>
`,
        ],
      },
      {
        type: 'style',
        typeText: '\u{1F485} Style',
        list: [
          `<p>Modify the style of the value area to support line-wrapping text (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/269">#269</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const G = B({
  name: 'ArcoMain',
  components: {
    DemoBasic: L,
    DemoSingle: M,
    DemoAlign: I,
    DemoBordered: R,
    DemoLayout: $,
    DemoExample: E,
  },
  setup() {
    const { locale: a } = C();
    return {
      locale: a,
      data: {
        meta: { type: 'Component', category: 'Data Display' },
        title: 'Descriptions',
        description:
          'Generally used for the information display of the detail page.',
      },
      changelog: typeof b === 'undefined' ? void 0 : b,
      getMessage: (m, g) => (a.value === 'zh-CN' ? m : g),
    };
  },
});
function U(a, l, y, x, m, g) {
  const v = i('demo-basic');
  const D = i('demo-single');
  const T = i('demo-align');
  const w = i('demo-bordered');
  const A = i('demo-layout');
  const S = i('demo-example');
  const F = i('anchor-head');
  const s = i('a-th');
  const d = i('a-tr');
  const r = i('a-thead');
  const e = i('a-td');
  const f = i('a-tbody');
  const p = i('a-table');
  const k = i('arco-article');
  return (
    N(),
    z(
      k,
      V(a.data, { changelog: a.changelog }),
      {
        default: n(() => [
          l[103] ||
            (l[103] = o(
              'p',
              null,
              [o('em', null, 'Auto translate by google.')],
              -1
            )),
          t(v),
          t(D),
          t(T),
          t(w),
          t(A),
          t(S),
          t(
            F,
            { level: '2', href: 'API' },
            { default: n(() => l[0] || (l[0] = [u('API')])), _: 1 }
          ),
          l[104] ||
            (l[104] = o(
              'h3',
              { id: 'descriptions Props' },
              [o('code', null, '<descriptions>'), u(' Props')],
              -1
            )),
          t(
            p,
            { class: 'component-api-table' },
            {
              default: n(() => [
                l[47] ||
                  (l[47] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(r, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(s, null, {
                          default: n(() => l[1] || (l[1] = [u('Attribute')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(() => l[2] || (l[2] = [u('Description')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(() => l[3] || (l[3] = [u('Type')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(() => l[4] || (l[4] = [u('Default')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(() => l[5] || (l[5] = [u('version')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(f, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[6] || (l[6] = [u('data')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[7] || (l[7] = [u('Data for descriptions')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[8] ||
                              (l[8] = [o('code', null, 'DescData[]', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[9] || (l[9] = [o('code', null, '[]', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[10] || (l[10] = [u('column')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[11] ||
                              (l[11] = [
                                u(
                                  'The number of data placed in each row. Version 2.20.0 supports reactive configuration, the configuration can refer to Grid'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[12] ||
                              (l[12] = [
                                o('code', null, 'number | ResponsiveValue', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[13] || (l[13] = [o('code', null, '3', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[14] || (l[14] = [u('title')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[15] || (l[15] = [u('Title of descriptions')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[16] || (l[16] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[17] || (l[17] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[18] || (l[18] = [u('layout')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[19] ||
                              (l[19] = [u('Arrangement of descriptions')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[20] ||
                              (l[20] = [
                                o(
                                  'code',
                                  null,
                                  "'horizontal' | 'vertical' | 'inline-horizontal' | 'inline-vertical'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[21] ||
                              (l[21] = [o('code', null, "'horizontal'", -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[22] || (l[22] = [u('align')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[23] ||
                              (l[23] = [u('Alignment position of text')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[24] ||
                              (l[24] = [
                                o(
                                  'code',
                                  null,
                                  'TextAlign | { label?: TextAlign; value?: TextAlign }',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[25] || (l[25] = [o('code', null, "'left'", -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[26] || (l[26] = [u('size')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[27] ||
                              (l[27] = [u('The size of the descriptions')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[28] ||
                              (l[28] = [
                                o(
                                  'code',
                                  null,
                                  "'mini' | 'small' | 'medium' | 'large'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[29] || (l[29] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[30] || (l[30] = [u('bordered')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[31] ||
                              (l[31] = [u('Whether to show the border')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[32] ||
                              (l[32] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[33] || (l[33] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(
                            () => l[34] || (l[34] = [u('label-style')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[35] || (l[35] = [u('Data label style')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[36] ||
                              (l[36] = [o('code', null, 'CSSProperties', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[37] || (l[37] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(
                            () => l[38] || (l[38] = [u('value-style')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[39] || (l[39] = [u('Data content style')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[40] ||
                              (l[40] = [o('code', null, 'CSSProperties', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[41] || (l[41] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(
                            () => l[42] || (l[42] = [u('table-layout')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[43] ||
                              (l[43] = [
                                u('The '),
                                o('code', null, 'layout-fixed', -1),
                                u(
                                  " of the table style in the description. The width will be evenly distributed when it's set to "
                                ),
                                o('code', null, 'fixed', -1),
                                u('.'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[44] ||
                              (l[44] = [
                                o('code', null, "'auto' | 'fixed'", -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[45] || (l[45] = [o('code', null, "'auto'", -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(() => l[46] || (l[46] = [u('2.38.0')])),
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
          l[105] ||
            (l[105] = o(
              'h3',
              { id: 'descriptions Slots' },
              [o('code', null, '<descriptions>'), u(' Slots')],
              -1
            )),
          t(
            p,
            { class: 'component-api-table' },
            {
              default: n(() => [
                l[60] ||
                  (l[60] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(r, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(s, null, {
                          default: n(() => l[48] || (l[48] = [u('Slot Name')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(
                            () => l[49] || (l[49] = [u('Description')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(
                            () => l[50] || (l[50] = [u('Parameters')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(f, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[51] || (l[51] = [u('value')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[52] || (l[52] = [u('Data value')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[53] ||
                              (l[53] = [
                                u('value: '),
                                o('code', null, 'string', -1),
                                o('br', null, null, -1),
                                u('index: '),
                                o('code', null, 'number', -1),
                                o('br', null, null, -1),
                                u('data: '),
                                o('code', null, 'DescData', -1),
                              ])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[54] || (l[54] = [u('label')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[55] || (l[55] = [u('Data label')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[56] ||
                              (l[56] = [
                                u('label: '),
                                o('code', null, 'string', -1),
                                o('br', null, null, -1),
                                u('index: '),
                                o('code', null, 'number', -1),
                                o('br', null, null, -1),
                                u('data: '),
                                o('code', null, 'DescData', -1),
                              ])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[57] || (l[57] = [u('title')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(() => l[58] || (l[58] = [u('Title')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(() => l[59] || (l[59] = [u('-')])),
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
          l[106] ||
            (l[106] = o(
              'h3',
              { id: 'descriptions-item Props' },
              [o('code', null, '<descriptions-item>'), u(' Props')],
              -1
            )),
          t(
            p,
            { class: 'component-api-table' },
            {
              default: n(() => [
                l[76] ||
                  (l[76] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(r, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(s, null, {
                          default: n(() => l[61] || (l[61] = [u('Attribute')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(
                            () => l[62] || (l[62] = [u('Description')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(() => l[63] || (l[63] = [u('Type')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(() => l[64] || (l[64] = [u('Default')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(() => l[65] || (l[65] = [u('version')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(f, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[66] || (l[66] = [u('span')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[67] || (l[67] = [u('number of columns')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[68] || (l[68] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[69] || (l[69] = [o('code', null, '1', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(() => l[70] || (l[70] = [u('2.18.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[71] || (l[71] = [u('label')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(() => l[72] || (l[72] = [u('Label')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[73] || (l[73] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[74] || (l[74] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(() => l[75] || (l[75] = [u('2.18.0')])),
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
          l[107] ||
            (l[107] = o(
              'h3',
              { id: 'descriptions-item Slots' },
              [o('code', null, '<descriptions-item>'), u(' Slots')],
              -1
            )),
          t(
            p,
            { class: 'component-api-table' },
            {
              default: n(() => [
                l[85] ||
                  (l[85] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(r, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(s, null, {
                          default: n(() => l[77] || (l[77] = [u('Slot Name')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(
                            () => l[78] || (l[78] = [u('Description')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(
                            () => l[79] || (l[79] = [u('Parameters')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(() => l[80] || (l[80] = [u('version')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(f, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[81] || (l[81] = [u('label')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(() => l[82] || (l[82] = [u('Label')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(() => l[83] || (l[83] = [u('-')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(() => l[84] || (l[84] = [u('2.18.0')])),
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
          l[108] || (l[108] = o('h3', { id: 'DescData' }, 'DescData', -1)),
          t(
            p,
            { class: 'component-api-table' },
            {
              default: n(() => [
                l[102] ||
                  (l[102] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(r, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(s, null, {
                          default: n(() => l[86] || (l[86] = [u('Name')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(
                            () => l[87] || (l[87] = [u('Description')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(() => l[88] || (l[88] = [u('Type')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(() => l[89] || (l[89] = [u('Default')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(f, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[90] || (l[90] = [u('label')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(() => l[91] || (l[91] = [u('Label')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[92] ||
                              (l[92] = [
                                o('code', null, 'string | RenderFunction', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[93] || (l[93] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[94] || (l[94] = [u('value')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(() => l[95] || (l[95] = [u('Data')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[96] ||
                              (l[96] = [
                                o('code', null, 'string | RenderFunction', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[97] || (l[97] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[98] || (l[98] = [u('span')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[99] || (l[99] = [u('number of columns')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[100] ||
                              (l[100] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[101] || (l[101] = [o('code', null, '1', -1)])
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
const q = P(G, [['render', U]]);
export { q as default };
