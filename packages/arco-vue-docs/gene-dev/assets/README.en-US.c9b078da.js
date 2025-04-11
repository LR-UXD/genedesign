import {
  _ as B,
  d as C,
  u as I,
  r as i,
  o as M,
  c as $,
  w as u,
  e as o,
  a as n,
  b as e,
  m as z,
} from './index.9c61ea88.js';
import {
  D as E,
  a as O,
  b as S,
  c as W,
  d as H,
  e as J,
  f as L,
  g as U,
  h as q,
  i as K,
  j as Q,
} from './grid-responsive.9a9df755.js';

const b = [
  {
    version: '2.49.3',
    date: '2023-08-04',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>fix the problem of using v-show in a-grid-item, the initial value is false, but it is still displayed (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2604">#2604</a>)</p>
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
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix gutter attribute type detection problem (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1052">#1052</a>)</p>
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
        typeText: '\u{1F195} Feature',
        list: [
          `<p><code>a-col</code> will be hidden when colspan is 0 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/797">#797</a>)</p>
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
        typeText: '\u{1F195} Feature',
        list: [
          `<p>support responsive configure (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/693">#693</a>)</p>
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
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix component name registration error problem (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/581">#581</a>)</p>
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
        typeText: '\u{1F195} Feature',
        list: [
          `<p>Added grid-based layout components <code>Grid</code> <code>Grid.Item</code> (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/576">#576</a>)</p>
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
          `<p>add property <code>wrap</code> to <code>Row</code> (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/471">#471</a>)</p>
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
        typeText: '\u{1F195} Feature',
        list: [
          `<p>add <code>flex</code> property to <code>a-col</code> (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/340">#340</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const X = C({
  name: 'ArcoMain',
  components: {
    DemoBasic: E,
    DemoOffset: O,
    DemoGutter: S,
    DemoFlexJustify: W,
    DemoFlexAlign: H,
    DemoOrder: J,
    DemoAdaptation: L,
    DemoAdaptationObject: U,
    DemoFlex: q,
    DemoGrid: K,
    DemoGridResponsive: Q,
  },
  setup() {
    const { locale: f } = I();
    return {
      locale: f,
      data: {
        meta: { type: 'Component', category: 'Layout' },
        title: 'Grid',
        description:
          'Grid can effectively ensure the consistency and logic of the page, strengthen teamwork and unity.',
      },
      changelog: typeof b === 'undefined' ? void 0 : b,
      getMessage: (m, g) => (f.value === 'zh-CN' ? m : g),
    };
  },
});
function Y(f, l, x, v, m, g) {
  const y = i('demo-basic');
  const w = i('demo-offset');
  const D = i('demo-gutter');
  const k = i('demo-flex-justify');
  const R = i('demo-flex-align');
  const T = i('demo-order');
  const V = i('demo-adaptation');
  const A = i('demo-adaptation-object');
  const F = i('demo-flex');
  const P = i('demo-grid');
  const N = i('demo-grid-responsive');
  const j = i('anchor-head');
  const s = i('a-th');
  const d = i('a-tr');
  const r = i('a-thead');
  const t = i('a-td');
  const p = i('a-tbody');
  const a = i('a-table');
  const G = i('arco-article');
  return (
    M(),
    $(
      G,
      z(f.data, { changelog: f.changelog }),
      {
        default: u(() => [
          l[146] ||
            (l[146] = o(
              'p',
              null,
              [o('em', null, 'Auto translate by google.')],
              -1
            )),
          n(y),
          n(w),
          n(D),
          n(k),
          n(R),
          n(T),
          n(V),
          n(A),
          n(F),
          n(P),
          n(N),
          n(
            j,
            { level: '2', href: 'API' },
            { default: u(() => l[0] || (l[0] = [e('API')])), _: 1 }
          ),
          l[147] ||
            (l[147] = o(
              'h3',
              { id: 'row Props' },
              [o('code', null, '<row>'), e(' Props')],
              -1
            )),
          n(
            a,
            { class: 'component-api-table' },
            {
              default: u(() => [
                l[27] ||
                  (l[27] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                n(r, null, {
                  default: u(() => [
                    n(d, null, {
                      default: u(() => [
                        n(s, null, {
                          default: u(() => l[1] || (l[1] = [e('Attribute')])),
                          _: 1,
                        }),
                        n(s, null, {
                          default: u(() => l[2] || (l[2] = [e('Description')])),
                          _: 1,
                        }),
                        n(s, null, {
                          default: u(() => l[3] || (l[3] = [e('Type')])),
                          _: 1,
                        }),
                        n(s, null, {
                          default: u(() => l[4] || (l[4] = [e('Default')])),
                          _: 1,
                        }),
                        n(s, null, {
                          default: u(() => l[5] || (l[5] = [e('version')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                n(p, null, {
                  default: u(() => [
                    n(d, null, {
                      default: u(() => [
                        n(t, null, {
                          default: u(() => l[6] || (l[6] = [e('gutter')])),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () =>
                              l[7] ||
                              (l[7] = [
                                e('Grid interval in '),
                                o('code', null, 'px', -1),
                                e(
                                  '. Pass in the responsive object like {xs: 4, sm: 6, md: 12}. Pass in the array [horizontal spacing, vertical spacing] to set two directions.'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () =>
                              l[8] ||
                              (l[8] = [
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
                        n(t, null, {
                          default: u(
                            () => l[9] || (l[9] = [o('code', null, '0', -1)])
                          ),
                          _: 1,
                        }),
                        n(t),
                      ]),
                      _: 1,
                    }),
                    n(d, null, {
                      default: u(() => [
                        n(t, null, {
                          default: u(() => l[10] || (l[10] = [e('justify')])),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () =>
                              l[11] ||
                              (l[11] = [
                                e('Horizontal alignment ('),
                                o('code', null, 'justify-content', -1),
                                e(')'),
                              ])
                          ),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () =>
                              l[12] ||
                              (l[12] = [
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
                        n(t, null, {
                          default: u(
                            () =>
                              l[13] ||
                              (l[13] = [o('code', null, "'start'", -1)])
                          ),
                          _: 1,
                        }),
                        n(t),
                      ]),
                      _: 1,
                    }),
                    n(d, null, {
                      default: u(() => [
                        n(t, null, {
                          default: u(() => l[14] || (l[14] = [e('align')])),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () =>
                              l[15] ||
                              (l[15] = [
                                e('Vertical alignment ('),
                                o('code', null, 'align-items', -1),
                                e(')'),
                              ])
                          ),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () =>
                              l[16] ||
                              (l[16] = [
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
                        n(t, null, {
                          default: u(
                            () =>
                              l[17] ||
                              (l[17] = [o('code', null, "'start'", -1)])
                          ),
                          _: 1,
                        }),
                        n(t),
                      ]),
                      _: 1,
                    }),
                    n(d, null, {
                      default: u(() => [
                        n(t, null, {
                          default: u(() => l[18] || (l[18] = [e('div')])),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () =>
                              l[19] ||
                              (l[19] = [
                                e('Enabling this option '),
                                o('code', null, 'Row', -1),
                                e(' and '),
                                o('code', null, 'Col', -1),
                                e(
                                  ' will be treated as divs without any Grid-related classes and styles'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () =>
                              l[20] ||
                              (l[20] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () =>
                              l[21] || (l[21] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        n(t),
                      ]),
                      _: 1,
                    }),
                    n(d, null, {
                      default: u(() => [
                        n(t, null, {
                          default: u(() => l[22] || (l[22] = [e('wrap')])),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () =>
                              l[23] ||
                              (l[23] = [
                                e('Whether '),
                                o('code', null, 'Col', -1),
                                e(' can wrap onto multiple lines'),
                              ])
                          ),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () =>
                              l[24] ||
                              (l[24] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () =>
                              l[25] || (l[25] = [o('code', null, 'true', -1)])
                          ),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(() => l[26] || (l[26] = [e('2.13.0')])),
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
          l[148] ||
            (l[148] = o(
              'h3',
              { id: 'col Props' },
              [o('code', null, '<col>'), e(' Props')],
              -1
            )),
          n(
            a,
            { class: 'component-api-table' },
            {
              default: u(() => [
                l[74] ||
                  (l[74] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                n(r, null, {
                  default: u(() => [
                    n(d, null, {
                      default: u(() => [
                        n(s, null, {
                          default: u(() => l[28] || (l[28] = [e('Attribute')])),
                          _: 1,
                        }),
                        n(s, null, {
                          default: u(
                            () => l[29] || (l[29] = [e('Description')])
                          ),
                          _: 1,
                        }),
                        n(s, null, {
                          default: u(() => l[30] || (l[30] = [e('Type')])),
                          _: 1,
                        }),
                        n(s, null, {
                          default: u(() => l[31] || (l[31] = [e('Default')])),
                          _: 1,
                        }),
                        n(s, null, {
                          default: u(() => l[32] || (l[32] = [e('version')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                n(p, null, {
                  default: u(() => [
                    n(d, null, {
                      default: u(() => [
                        n(t, null, {
                          default: u(() => l[33] || (l[33] = [e('span')])),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () => l[34] || (l[34] = [e('Number of grid space')])
                          ),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () =>
                              l[35] || (l[35] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () => l[36] || (l[36] = [o('code', null, '24', -1)])
                          ),
                          _: 1,
                        }),
                        n(t),
                      ]),
                      _: 1,
                    }),
                    n(d, null, {
                      default: u(() => [
                        n(t, null, {
                          default: u(() => l[37] || (l[37] = [e('offset')])),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () =>
                              l[38] ||
                              (l[38] = [
                                e(
                                  'The number of grids on the left side of the grid. There can be no grids in the grid.'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () =>
                              l[39] || (l[39] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () => l[40] || (l[40] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        n(t),
                      ]),
                      _: 1,
                    }),
                    n(d, null, {
                      default: u(() => [
                        n(t, null, {
                          default: u(() => l[41] || (l[41] = [e('order')])),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () => l[42] || (l[42] = [e('Sort elements')])
                          ),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () =>
                              l[43] || (l[43] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () => l[44] || (l[44] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        n(t),
                      ]),
                      _: 1,
                    }),
                    n(d, null, {
                      default: u(() => [
                        n(t, null, {
                          default: u(() => l[45] || (l[45] = [e('xs')])),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () =>
                              l[46] || (l[46] = [e('<576px responsive grid')])
                          ),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () =>
                              l[47] ||
                              (l[47] = [
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
                        n(t, null, {
                          default: u(
                            () => l[48] || (l[48] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        n(t),
                      ]),
                      _: 1,
                    }),
                    n(d, null, {
                      default: u(() => [
                        n(t, null, {
                          default: u(() => l[49] || (l[49] = [e('sm')])),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () =>
                              l[50] || (l[50] = [e('>= 576px responsive grid')])
                          ),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () =>
                              l[51] ||
                              (l[51] = [
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
                        n(t, null, {
                          default: u(
                            () => l[52] || (l[52] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        n(t),
                      ]),
                      _: 1,
                    }),
                    n(d, null, {
                      default: u(() => [
                        n(t, null, {
                          default: u(() => l[53] || (l[53] = [e('md')])),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () =>
                              l[54] || (l[54] = [e('>= 768px responsive grid')])
                          ),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () =>
                              l[55] ||
                              (l[55] = [
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
                        n(t, null, {
                          default: u(
                            () => l[56] || (l[56] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        n(t),
                      ]),
                      _: 1,
                    }),
                    n(d, null, {
                      default: u(() => [
                        n(t, null, {
                          default: u(() => l[57] || (l[57] = [e('lg')])),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () =>
                              l[58] || (l[58] = [e('>= 992px responsive grid')])
                          ),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () =>
                              l[59] ||
                              (l[59] = [
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
                        n(t, null, {
                          default: u(
                            () => l[60] || (l[60] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        n(t),
                      ]),
                      _: 1,
                    }),
                    n(d, null, {
                      default: u(() => [
                        n(t, null, {
                          default: u(() => l[61] || (l[61] = [e('xl')])),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () =>
                              l[62] ||
                              (l[62] = [e('>= 1200px responsive grid')])
                          ),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () =>
                              l[63] ||
                              (l[63] = [
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
                        n(t, null, {
                          default: u(
                            () => l[64] || (l[64] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        n(t),
                      ]),
                      _: 1,
                    }),
                    n(d, null, {
                      default: u(() => [
                        n(t, null, {
                          default: u(() => l[65] || (l[65] = [e('xxl')])),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () =>
                              l[66] ||
                              (l[66] = [e('>= 1600px responsive grid')])
                          ),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () =>
                              l[67] ||
                              (l[67] = [
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
                        n(t, null, {
                          default: u(
                            () => l[68] || (l[68] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        n(t),
                      ]),
                      _: 1,
                    }),
                    n(d, null, {
                      default: u(() => [
                        n(t, null, {
                          default: u(() => l[69] || (l[69] = [e('flex')])),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () =>
                              l[70] ||
                              (l[70] = [e('Set flex layout properties')])
                          ),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () =>
                              l[71] ||
                              (l[71] = [
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
                        n(t, null, {
                          default: u(
                            () => l[72] || (l[72] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(() => l[73] || (l[73] = [e('2.10.0')])),
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
          l[149] ||
            (l[149] = o(
              'h3',
              { id: 'grid Props (2.15.0)' },
              [o('code', null, '<grid>'), e(' Props (2.15.0)')],
              -1
            )),
          l[150] ||
            (l[150] = o(
              'p',
              null,
              [
                e('Responsive configuration has been supported since '),
                o('code', null, '2.18.0'),
                e(', the specific configuration '),
                o(
                  'a',
                  { class: 'link', href: '#responsivevalue' },
                  'ResponsiveValue'
                ),
              ],
              -1
            )),
          n(
            a,
            { class: 'component-api-table' },
            {
              default: u(() => [
                l[99] ||
                  (l[99] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                n(r, null, {
                  default: u(() => [
                    n(d, null, {
                      default: u(() => [
                        n(s, null, {
                          default: u(() => l[75] || (l[75] = [e('Attribute')])),
                          _: 1,
                        }),
                        n(s, null, {
                          default: u(
                            () => l[76] || (l[76] = [e('Description')])
                          ),
                          _: 1,
                        }),
                        n(s, null, {
                          default: u(() => l[77] || (l[77] = [e('Type')])),
                          _: 1,
                        }),
                        n(s, null, {
                          default: u(() => l[78] || (l[78] = [e('Default')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                n(p, null, {
                  default: u(() => [
                    n(d, null, {
                      default: u(() => [
                        n(t, null, {
                          default: u(() => l[79] || (l[79] = [e('cols')])),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () =>
                              l[80] ||
                              (l[80] = [
                                e('Number of columns displayed in each row'),
                              ])
                          ),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () =>
                              l[81] ||
                              (l[81] = [
                                o('code', null, 'number | ResponsiveValue', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () => l[82] || (l[82] = [o('code', null, '24', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    n(d, null, {
                      default: u(() => [
                        n(t, null, {
                          default: u(() => l[83] || (l[83] = [e('row-gap')])),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () =>
                              l[84] || (l[84] = [e('The space in row-to-row')])
                          ),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () =>
                              l[85] ||
                              (l[85] = [
                                o('code', null, 'number | ResponsiveValue', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () => l[86] || (l[86] = [o('code', null, '0', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    n(d, null, {
                      default: u(() => [
                        n(t, null, {
                          default: u(() => l[87] || (l[87] = [e('col-gap')])),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () =>
                              l[88] ||
                              (l[88] = [e('The space in column-to-column')])
                          ),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () =>
                              l[89] ||
                              (l[89] = [
                                o('code', null, 'number | ResponsiveValue', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () => l[90] || (l[90] = [o('code', null, '0', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    n(d, null, {
                      default: u(() => [
                        n(t, null, {
                          default: u(() => l[91] || (l[91] = [e('collapsed')])),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () => l[92] || (l[92] = [e('Whether to collapsed')])
                          ),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () =>
                              l[93] ||
                              (l[93] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () =>
                              l[94] || (l[94] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    n(d, null, {
                      default: u(() => [
                        n(t, null, {
                          default: u(
                            () => l[95] || (l[95] = [e('collapsed-rows')])
                          ),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () =>
                              l[96] ||
                              (l[96] = [
                                e('Number of rows displayed when collapsed'),
                              ])
                          ),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () =>
                              l[97] || (l[97] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () => l[98] || (l[98] = [o('code', null, '1', -1)])
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
          l[151] ||
            (l[151] = o(
              'h3',
              { id: 'grid-item Props (2.15.0)' },
              [o('code', null, '<grid-item>'), e(' Props (2.15.0)')],
              -1
            )),
          l[152] ||
            (l[152] = o(
              'p',
              null,
              [
                e('Responsive configuration has been supported since '),
                o('code', null, '2.18.0'),
                e(', the specific configuration '),
                o(
                  'a',
                  { class: 'link', href: '#responsivevalue' },
                  'ResponsiveValue'
                ),
              ],
              -1
            )),
          n(
            a,
            { class: 'component-api-table' },
            {
              default: u(() => [
                l[116] ||
                  (l[116] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                n(r, null, {
                  default: u(() => [
                    n(d, null, {
                      default: u(() => [
                        n(s, null, {
                          default: u(
                            () => l[100] || (l[100] = [e('Attribute')])
                          ),
                          _: 1,
                        }),
                        n(s, null, {
                          default: u(
                            () => l[101] || (l[101] = [e('Description')])
                          ),
                          _: 1,
                        }),
                        n(s, null, {
                          default: u(() => l[102] || (l[102] = [e('Type')])),
                          _: 1,
                        }),
                        n(s, null, {
                          default: u(() => l[103] || (l[103] = [e('Default')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                n(p, null, {
                  default: u(() => [
                    n(d, null, {
                      default: u(() => [
                        n(t, null, {
                          default: u(() => l[104] || (l[104] = [e('span')])),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () =>
                              l[105] ||
                              (l[105] = [e('Number of grids spanned')])
                          ),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () =>
                              l[106] ||
                              (l[106] = [
                                o('code', null, 'number | ResponsiveValue', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () =>
                              l[107] || (l[107] = [o('code', null, '1', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    n(d, null, {
                      default: u(() => [
                        n(t, null, {
                          default: u(() => l[108] || (l[108] = [e('offset')])),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () =>
                              l[109] ||
                              (l[109] = [e('Number of grids on the left')])
                          ),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () =>
                              l[110] ||
                              (l[110] = [
                                o('code', null, 'number | ResponsiveValue', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () =>
                              l[111] || (l[111] = [o('code', null, '0', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    n(d, null, {
                      default: u(() => [
                        n(t, null, {
                          default: u(() => l[112] || (l[112] = [e('suffix')])),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () =>
                              l[113] || (l[113] = [e('Is it a suffix element')])
                          ),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () =>
                              l[114] ||
                              (l[114] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () =>
                              l[115] ||
                              (l[115] = [o('code', null, 'false', -1)])
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
          l[153] ||
            (l[153] = o(
              'h3',
              { id: 'ResponsiveValue' },
              'ResponsiveValue',
              -1
            )),
          n(
            a,
            { class: 'component-api-table' },
            {
              default: u(() => [
                l[145] ||
                  (l[145] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                n(r, null, {
                  default: u(() => [
                    n(d, null, {
                      default: u(() => [
                        n(s, null, {
                          default: u(() => l[117] || (l[117] = [e('Name')])),
                          _: 1,
                        }),
                        n(s, null, {
                          default: u(
                            () => l[118] || (l[118] = [e('Description')])
                          ),
                          _: 1,
                        }),
                        n(s, null, {
                          default: u(() => l[119] || (l[119] = [e('Type')])),
                          _: 1,
                        }),
                        n(s, null, {
                          default: u(() => l[120] || (l[120] = [e('Default')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                n(p, null, {
                  default: u(() => [
                    n(d, null, {
                      default: u(() => [
                        n(t, null, {
                          default: u(() => l[121] || (l[121] = [e('xxl')])),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () =>
                              l[122] ||
                              (l[122] = [
                                e('>= 1600px responsive configuration'),
                              ])
                          ),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () =>
                              l[123] ||
                              (l[123] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () =>
                              l[124] || (l[124] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    n(d, null, {
                      default: u(() => [
                        n(t, null, {
                          default: u(() => l[125] || (l[125] = [e('xl')])),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () =>
                              l[126] ||
                              (l[126] = [
                                e('>= 1200px responsive configuration'),
                              ])
                          ),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () =>
                              l[127] ||
                              (l[127] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () =>
                              l[128] || (l[128] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    n(d, null, {
                      default: u(() => [
                        n(t, null, {
                          default: u(() => l[129] || (l[129] = [e('lg')])),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () =>
                              l[130] ||
                              (l[130] = [
                                e('>= 992px responsive configuration'),
                              ])
                          ),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () =>
                              l[131] ||
                              (l[131] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () =>
                              l[132] || (l[132] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    n(d, null, {
                      default: u(() => [
                        n(t, null, {
                          default: u(() => l[133] || (l[133] = [e('md')])),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () =>
                              l[134] ||
                              (l[134] = [
                                e('>= 768px responsive configuration'),
                              ])
                          ),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () =>
                              l[135] ||
                              (l[135] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () =>
                              l[136] || (l[136] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    n(d, null, {
                      default: u(() => [
                        n(t, null, {
                          default: u(() => l[137] || (l[137] = [e('sm')])),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () =>
                              l[138] ||
                              (l[138] = [
                                e('>= 576px responsive configuration'),
                              ])
                          ),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () =>
                              l[139] ||
                              (l[139] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () =>
                              l[140] || (l[140] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    n(d, null, {
                      default: u(() => [
                        n(t, null, {
                          default: u(() => l[141] || (l[141] = [e('xs')])),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () =>
                              l[142] ||
                              (l[142] = [e('<576px responsive configuration')])
                          ),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () =>
                              l[143] ||
                              (l[143] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        n(t, null, {
                          default: u(
                            () =>
                              l[144] || (l[144] = [o('code', null, '-', -1)])
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
const h = B(X, [['render', Y]]);
export { h as default };
