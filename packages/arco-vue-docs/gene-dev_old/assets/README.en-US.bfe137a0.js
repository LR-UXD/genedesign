import {
  _ as V,
  d as z,
  u as I,
  r as s,
  o as M,
  c as N,
  w as u,
  e as o,
  a as t,
  b as e,
  m as E,
} from './index.9c61ea88.js';
import {
  D as W,
  a as C,
  b as R,
  c as $,
  d as H,
  e as G,
  f as j,
  g as O,
  h as U,
} from './virtual-list.2861475e.js';

const b = [
  {
    version: '2.49.0',
    date: '2023-07-21',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>Scroll maxHeight supports string type (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2544">#2544</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.48.0',
    date: '2023-06-30',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>fix virtual-list scrolling position is wrong when data is modified (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2502">#2502</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.44.6',
    date: '2023-03-31',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix an issue that may trigger reach-bottom when scrolling up (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2295">#2295</a>)</p>
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
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>list supports backend data pagination (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2199">#2199</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.40.1',
    date: '2022-12-23',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem that the scroll bar appears in the grid list mode (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1970">#1970</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.40.0',
    date: '2022-12-09',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem that the scrollbar attribute fails when passing the virtual scrollbar attribute (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1929">#1929</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.37.2',
    date: '2022-09-21',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix loading more scrollbar heights in use (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1658">#1658</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.37.0',
    date: '2022-09-16',
    list: [
      {
        type: 'enhancement',
        typeText: '\u{1F48E} Enhancement',
        list: [
          `<p>add usage demo (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1625">#1625</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.29.1',
    date: '2022-06-02',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fixed an issue where reachBottom would not trigger in some cases (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1228">#1228</a>)</p>
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
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem that the pagination property is invalid (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1125">#1125</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.26.0',
    date: '2022-04-29',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>support <code>empty</code> slot (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1045">#1045</a>)</p>
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
          `<p>Added <code>#scroll-loading</code> slot (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/838">#838</a>)</p>
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
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>List items should be rendered as div (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/776">#776</a>)</p>
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
        type: 'attention',
        typeText: '\u26A0\uFE0F Important Attention',
        list: [
          `<p>The spin component is rendered by default to prevent the component from remounting when switching states (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/730">#730</a>)</p>
`,
          `<p>Supports rendering of any child element (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/730">#730</a>)</p>
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
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>Add the display of empty data (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/296">#296</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const q = z({
  name: 'ArcoMain',
  components: {
    DemoBasic: W,
    DemoSize: C,
    DemoMeta: R,
    DemoActions: $,
    DemoActionsLayout: H,
    DemoGrid: G,
    DemoResponsiveGrid: j,
    DemoScroll: O,
    DemoVirtualList: U,
  },
  setup() {
    const { locale: p } = I();
    return {
      locale: p,
      data: {
        meta: { type: 'Component', category: 'Data Display' },
        title: 'List',
        description:
          'The most basic list display, which can carry text, lists, pictures, and paragraphs, and is often used in the background data display page.',
      },
      changelog: typeof b === 'undefined' ? void 0 : b,
      getMessage: (m, g) => (p.value === 'zh-CN' ? m : g),
    };
  },
});
function J(p, l, x, y, m, g) {
  const v = s('demo-basic');
  const w = s('demo-size');
  const T = s('demo-meta');
  const D = s('demo-actions');
  const P = s('demo-actions-layout');
  const k = s('demo-grid');
  const F = s('demo-responsive-grid');
  const S = s('demo-scroll');
  const A = s('demo-virtual-list');
  const B = s('anchor-head');
  const i = s('a-th');
  const d = s('a-tr');
  const r = s('a-thead');
  const n = s('a-td');
  const f = s('a-tbody');
  const a = s('a-table');
  const L = s('arco-article');
  return (
    M(),
    N(
      L,
      E(p.data, { changelog: p.changelog }),
      {
        default: u(() => [
          l[183] ||
            (l[183] = o(
              'p',
              null,
              [o('em', null, 'Auto translate by google.')],
              -1
            )),
          t(v),
          t(w),
          t(T),
          t(D),
          t(P),
          t(k),
          t(F),
          t(S),
          t(A),
          t(
            B,
            { level: '2', href: 'API' },
            { default: u(() => l[0] || (l[0] = [e('API')])), _: 1 }
          ),
          l[184] ||
            (l[184] = o(
              'h3',
              { id: 'list Props' },
              [o('code', null, '<list>'), e(' Props')],
              -1
            )),
          t(
            a,
            { class: 'component-api-table' },
            {
              default: u(() => [
                l[55] ||
                  (l[55] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(r, null, {
                  default: u(() => [
                    t(d, null, {
                      default: u(() => [
                        t(i, null, {
                          default: u(() => l[1] || (l[1] = [e('Attribute')])),
                          _: 1,
                        }),
                        t(i, null, {
                          default: u(() => l[2] || (l[2] = [e('Description')])),
                          _: 1,
                        }),
                        t(i, null, {
                          default: u(() => l[3] || (l[3] = [e('Type')])),
                          _: 1,
                        }),
                        t(i, null, {
                          default: u(() => l[4] || (l[4] = [e('Default')])),
                          _: 1,
                        }),
                        t(i, null, {
                          default: u(() => l[5] || (l[5] = [e('version')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(f, null, {
                  default: u(() => [
                    t(d, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(() => l[6] || (l[6] = [e('data')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[7] ||
                              (l[7] = [
                                e('List data, need to be used with '),
                                o('code', null, 'item', -1),
                                e(' slot at the same time'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[8] || (l[8] = [o('code', null, 'any[]', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () => l[9] || (l[9] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(() => l[10] || (l[10] = [e('size')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(() => l[11] || (l[11] = [e('List size')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[12] ||
                              (l[12] = [
                                o(
                                  'code',
                                  null,
                                  "'small' | 'medium' | 'large'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[13] ||
                              (l[13] = [o('code', null, "'medium'", -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(() => l[14] || (l[14] = [e('bordered')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[15] ||
                              (l[15] = [e('Whether to show the border')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[16] ||
                              (l[16] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[17] || (l[17] = [o('code', null, 'true', -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(() => l[18] || (l[18] = [e('split')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[19] ||
                              (l[19] = [e('Whether to show the dividing line')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[20] ||
                              (l[20] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[21] || (l[21] = [o('code', null, 'true', -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(() => l[22] || (l[22] = [e('loading')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[23] ||
                              (l[23] = [e('Whether it is loading state')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[24] ||
                              (l[24] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[25] || (l[25] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(() => l[26] || (l[26] = [e('hoverable')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[27] ||
                              (l[27] = [
                                e('Whether to display the selected style'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[28] ||
                              (l[28] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[29] || (l[29] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(
                            () => l[30] || (l[30] = [e('pagination-props')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[31] ||
                              (l[31] = [e('List pagination configuration')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[32] ||
                              (l[32] = [o('code', null, 'PaginationProps', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () => l[33] || (l[33] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(
                            () => l[34] || (l[34] = [e('grid-props')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[35] || (l[35] = [e('List grid configuration')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[36] || (l[36] = [o('code', null, 'object', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () => l[37] || (l[37] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(
                            () => l[38] || (l[38] = [e('max-height')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[39] ||
                              (l[39] = [e('Maximum height of the list')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[40] ||
                              (l[40] = [o('code', null, 'string | number', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () => l[41] || (l[41] = [o('code', null, '0', -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(
                            () => l[42] || (l[42] = [e('bottom-offset')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[43] ||
                              (l[43] = [
                                e(
                                  'Trigger the distance threshold to reach the bottom'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[44] || (l[44] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () => l[45] || (l[45] = [o('code', null, '0', -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(
                            () => l[46] || (l[46] = [e('virtual-list-props')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[47] ||
                              (l[47] = [
                                e(
                                  'Pass virtual list properties, pass in this parameter to turn on virtual scrolling '
                                ),
                                o(
                                  'a',
                                  { class: 'link', href: '#VirtualListProps' },
                                  'VirtualListProps',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[48] ||
                              (l[48] = [
                                o('code', null, 'VirtualListProps', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () => l[49] || (l[49] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(() => l[50] || (l[50] = [e('scrollbar')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[51] ||
                              (l[51] = [
                                e('Whether to enable virtual scroll bar'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[52] ||
                              (l[52] = [
                                o('code', null, 'boolean | ScrollbarProps', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[53] || (l[53] = [o('code', null, 'true', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(() => l[54] || (l[54] = [e('2.38.0')])),
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
          l[185] ||
            (l[185] = o(
              'h3',
              { id: 'list Events' },
              [o('code', null, '<list>'), e(' Events')],
              -1
            )),
          t(
            a,
            { class: 'component-api-table' },
            {
              default: u(() => [
                l[71] ||
                  (l[71] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(r, null, {
                  default: u(() => [
                    t(d, null, {
                      default: u(() => [
                        t(i, null, {
                          default: u(
                            () => l[56] || (l[56] = [e('Event Name')])
                          ),
                          _: 1,
                        }),
                        t(i, null, {
                          default: u(
                            () => l[57] || (l[57] = [e('Description')])
                          ),
                          _: 1,
                        }),
                        t(i, null, {
                          default: u(
                            () => l[58] || (l[58] = [e('Parameters')])
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
                  default: u(() => [
                    t(d, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(() => l[59] || (l[59] = [e('scroll')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[60] ||
                              (l[60] = [e('Triggered when the list scrolls')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(() => l[61] || (l[61] = [e('-')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(
                            () => l[62] || (l[62] = [e('reach-bottom')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[63] ||
                              (l[63] = [
                                e('Triggered when the list reaches the bottom'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(() => l[64] || (l[64] = [e('-')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(
                            () => l[65] || (l[65] = [e('page-change')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[66] ||
                              (l[66] = [
                                e(
                                  'Triggered when the table pagination changes'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[67] ||
                              (l[67] = [
                                e('page: '),
                                o('code', null, 'number', -1),
                              ])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(
                            () => l[68] || (l[68] = [e('page-size-change')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[69] ||
                              (l[69] = [
                                e(
                                  'Triggered when the number of data per page of the table changes'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[70] ||
                              (l[70] = [
                                e('pageSize: '),
                                o('code', null, 'number', -1),
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
          l[186] ||
            (l[186] = o(
              'h3',
              { id: 'list Methods' },
              [o('code', null, '<list>'), e(' Methods')],
              -1
            )),
          t(
            a,
            { class: 'component-api-table' },
            {
              default: u(() => [
                l[80] ||
                  (l[80] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(r, null, {
                  default: u(() => [
                    t(d, null, {
                      default: u(() => [
                        t(i, null, {
                          default: u(() => l[72] || (l[72] = [e('Method')])),
                          _: 1,
                        }),
                        t(i, null, {
                          default: u(
                            () => l[73] || (l[73] = [e('Description')])
                          ),
                          _: 1,
                        }),
                        t(i, null, {
                          default: u(
                            () => l[74] || (l[74] = [e('Parameters')])
                          ),
                          _: 1,
                        }),
                        t(i, null, {
                          default: u(() => l[75] || (l[75] = [e('Return')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(f, null, {
                  default: u(() => [
                    t(d, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(
                            () => l[76] || (l[76] = [e('scrollIntoView')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[77] ||
                              (l[77] = [e('Virtual scroll to an element')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[78] ||
                              (l[78] = [
                                e('options: '),
                                o(
                                  'code',
                                  null,
                                  "{ index?: number; key?: number | string; align: 'auto' | 'top' | 'bottom'}",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(() => l[79] || (l[79] = [e('-')])),
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
          l[187] ||
            (l[187] = o(
              'h3',
              { id: 'list Slots' },
              [o('code', null, '<list>'), e(' Slots')],
              -1
            )),
          t(
            a,
            { class: 'component-api-table' },
            {
              default: u(() => [
                l[101] ||
                  (l[101] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(r, null, {
                  default: u(() => [
                    t(d, null, {
                      default: u(() => [
                        t(i, null, {
                          default: u(() => l[81] || (l[81] = [e('Slot Name')])),
                          _: 1,
                        }),
                        t(i, null, {
                          default: u(
                            () => l[82] || (l[82] = [e('Description')])
                          ),
                          _: 1,
                        }),
                        t(i, null, {
                          default: u(
                            () => l[83] || (l[83] = [e('Parameters')])
                          ),
                          _: 1,
                        }),
                        t(i, null, {
                          default: u(() => l[84] || (l[84] = [e('version')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(f, null, {
                  default: u(() => [
                    t(d, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(
                            () => l[85] || (l[85] = [e('scroll-loading')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[86] ||
                              (l[86] = [
                                e(
                                  'When scrolling loading state, scroll to the bottom tip'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(() => l[87] || (l[87] = [e('-')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(() => l[88] || (l[88] = [e('2.20.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(() => l[89] || (l[89] = [e('item')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(() => l[90] || (l[90] = [e('List Item')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[91] ||
                              (l[91] = [
                                e('index: '),
                                o('code', null, 'number', -1),
                                o('br', null, null, -1),
                                e('item: '),
                                o('code', null, 'any', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(() => l[92] || (l[92] = [e('empty')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(() => l[93] || (l[93] = [e('Empty')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(() => l[94] || (l[94] = [e('-')])),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(() => l[95] || (l[95] = [e('footer')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(() => l[96] || (l[96] = [e('Footer')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(() => l[97] || (l[97] = [e('-')])),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(() => l[98] || (l[98] = [e('header')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(() => l[99] || (l[99] = [e('Header')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(() => l[100] || (l[100] = [e('-')])),
                          _: 1,
                        }),
                        t(n),
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
          l[188] ||
            (l[188] = o(
              'h3',
              { id: 'list-item Props' },
              [o('code', null, '<list-item>'), e(' Props')],
              -1
            )),
          t(
            a,
            { class: 'component-api-table' },
            {
              default: u(() => [
                l[110] ||
                  (l[110] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(r, null, {
                  default: u(() => [
                    t(d, null, {
                      default: u(() => [
                        t(i, null, {
                          default: u(
                            () => l[102] || (l[102] = [e('Attribute')])
                          ),
                          _: 1,
                        }),
                        t(i, null, {
                          default: u(
                            () => l[103] || (l[103] = [e('Description')])
                          ),
                          _: 1,
                        }),
                        t(i, null, {
                          default: u(() => l[104] || (l[104] = [e('Type')])),
                          _: 1,
                        }),
                        t(i, null, {
                          default: u(() => l[105] || (l[105] = [e('Default')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(f, null, {
                  default: u(() => [
                    t(d, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(
                            () => l[106] || (l[106] = [e('action-layout')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[107] ||
                              (l[107] = [
                                e('Operation group arrangement direction'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[108] ||
                              (l[108] = [o('code', null, 'Direction', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[109] ||
                              (l[109] = [o('code', null, "'horizontal'", -1)])
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
          l[189] ||
            (l[189] = o(
              'h3',
              { id: 'list-item Slots' },
              [o('code', null, '<list-item>'), e(' Slots')],
              -1
            )),
          t(
            a,
            { class: 'component-api-table' },
            {
              default: u(() => [
                l[123] ||
                  (l[123] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(r, null, {
                  default: u(() => [
                    t(d, null, {
                      default: u(() => [
                        t(i, null, {
                          default: u(
                            () => l[111] || (l[111] = [e('Slot Name')])
                          ),
                          _: 1,
                        }),
                        t(i, null, {
                          default: u(
                            () => l[112] || (l[112] = [e('Description')])
                          ),
                          _: 1,
                        }),
                        t(i, null, {
                          default: u(
                            () => l[113] || (l[113] = [e('Parameters')])
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
                  default: u(() => [
                    t(d, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(() => l[114] || (l[114] = [e('meta')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () => l[115] || (l[115] = [e('Meta data')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(() => l[116] || (l[116] = [e('-')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(() => l[117] || (l[117] = [e('extra')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () => l[118] || (l[118] = [e('Extra content')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(() => l[119] || (l[119] = [e('-')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(() => l[120] || (l[120] = [e('actions')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(() => l[121] || (l[121] = [e('Actions')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(() => l[122] || (l[122] = [e('-')])),
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
          l[190] ||
            (l[190] = o(
              'h3',
              { id: 'list-item-meta Props' },
              [o('code', null, '<list-item-meta>'), e(' Props')],
              -1
            )),
          t(
            a,
            { class: 'component-api-table' },
            {
              default: u(() => [
                l[136] ||
                  (l[136] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(r, null, {
                  default: u(() => [
                    t(d, null, {
                      default: u(() => [
                        t(i, null, {
                          default: u(
                            () => l[124] || (l[124] = [e('Attribute')])
                          ),
                          _: 1,
                        }),
                        t(i, null, {
                          default: u(
                            () => l[125] || (l[125] = [e('Description')])
                          ),
                          _: 1,
                        }),
                        t(i, null, {
                          default: u(() => l[126] || (l[126] = [e('Type')])),
                          _: 1,
                        }),
                        t(i, null, {
                          default: u(() => l[127] || (l[127] = [e('Default')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(f, null, {
                  default: u(() => [
                    t(d, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(() => l[128] || (l[128] = [e('title')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(() => l[129] || (l[129] = [e('Title')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[130] ||
                              (l[130] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[131] || (l[131] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(
                            () => l[132] || (l[132] = [e('description')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () => l[133] || (l[133] = [e('Description')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[134] ||
                              (l[134] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[135] || (l[135] = [o('code', null, '-', -1)])
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
          l[191] ||
            (l[191] = o(
              'h3',
              { id: 'list-item-meta Slots' },
              [o('code', null, '<list-item-meta>'), e(' Slots')],
              -1
            )),
          t(
            a,
            { class: 'component-api-table' },
            {
              default: u(() => [
                l[149] ||
                  (l[149] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(r, null, {
                  default: u(() => [
                    t(d, null, {
                      default: u(() => [
                        t(i, null, {
                          default: u(
                            () => l[137] || (l[137] = [e('Slot Name')])
                          ),
                          _: 1,
                        }),
                        t(i, null, {
                          default: u(
                            () => l[138] || (l[138] = [e('Description')])
                          ),
                          _: 1,
                        }),
                        t(i, null, {
                          default: u(
                            () => l[139] || (l[139] = [e('Parameters')])
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
                  default: u(() => [
                    t(d, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(() => l[140] || (l[140] = [e('avatar')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(() => l[141] || (l[141] = [e('Avatar')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(() => l[142] || (l[142] = [e('-')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(() => l[143] || (l[143] = [e('title')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(() => l[144] || (l[144] = [e('Title')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(() => l[145] || (l[145] = [e('-')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(
                            () => l[146] || (l[146] = [e('description')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () => l[147] || (l[147] = [e('Description')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(() => l[148] || (l[148] = [e('-')])),
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
          l[192] ||
            (l[192] = o(
              'h3',
              { id: 'VirtualListProps' },
              'VirtualListProps',
              -1
            )),
          t(
            a,
            { class: 'component-api-table' },
            {
              default: u(() => [
                l[182] ||
                  (l[182] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(r, null, {
                  default: u(() => [
                    t(d, null, {
                      default: u(() => [
                        t(i, null, {
                          default: u(() => l[150] || (l[150] = [e('Name')])),
                          _: 1,
                        }),
                        t(i, null, {
                          default: u(
                            () => l[151] || (l[151] = [e('Description')])
                          ),
                          _: 1,
                        }),
                        t(i, null, {
                          default: u(() => l[152] || (l[152] = [e('Type')])),
                          _: 1,
                        }),
                        t(i, null, {
                          default: u(() => l[153] || (l[153] = [e('Default')])),
                          _: 1,
                        }),
                        t(i, null, {
                          default: u(() => l[154] || (l[154] = [e('version')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(f, null, {
                  default: u(() => [
                    t(d, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(() => l[155] || (l[155] = [e('height')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[156] || (l[156] = [e('Viewable area height')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[157] ||
                              (l[157] = [
                                o('code', null, 'number | string', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[158] || (l[158] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(
                            () => l[159] || (l[159] = [e('threshold')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[160] ||
                              (l[160] = [
                                e(
                                  'The threshold of the number of elements to enable virtual scrolling. When the number of data is less than the threshold, virtual scrolling will not be enabled.'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[161] ||
                              (l[161] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[162] || (l[162] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(
                            () => l[163] || (l[163] = [e('isStaticItemHeight')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[164] ||
                              (l[164] = [
                                e(
                                  '(Repealed) Is the element height fixed. Version 2.18.0 deprecated, please use '
                                ),
                                o('code', null, 'fixedSize', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[165] ||
                              (l[165] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[166] ||
                              (l[166] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(
                            () => l[167] || (l[167] = [e('fixedSize')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[168] ||
                              (l[168] = [e('Is the element height fixed.')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[169] ||
                              (l[169] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[170] ||
                              (l[170] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(() => l[171] || (l[171] = [e('2.34.1')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(
                            () => l[172] || (l[172] = [e('estimatedSize')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[173] ||
                              (l[173] = [e('Is the element height fixed.')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[174] ||
                              (l[174] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[175] || (l[175] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(() => l[176] || (l[176] = [e('2.34.1')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(() => l[177] || (l[177] = [e('buffer')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[178] ||
                              (l[178] = [
                                e(
                                  'The number of elements mounted in advance outside the boundary of the viewport.'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[179] ||
                              (l[179] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[180] || (l[180] = [o('code', null, '10', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(() => l[181] || (l[181] = [e('2.34.1')])),
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
const X = V(q, [['render', J]]);
export { X as default };
