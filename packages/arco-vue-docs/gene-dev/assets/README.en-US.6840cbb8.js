import {
  _ as B,
  d as P,
  u as A,
  r as i,
  o as S,
  c as W,
  w as u,
  e as o,
  a as t,
  b as e,
  m as N,
} from './index.9c61ea88.js';
import {
  D as q,
  a as M,
  b as $,
  c as z,
  d as I,
  e as V,
} from './ellipsis.996017a8.js';

const b = [
  {
    version: '2.51.0',
    date: '2023-09-01',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem of missing related component styles when importing on demand (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2682">#2682</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.49.2',
    date: '2023-07-28',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>enhanced typography styles for handling long words (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2583">#2583</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.41.0',
    date: '2022-12-30',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fixed ellipsis invalidation with parent container setting <code>white-space: nowrap</code> (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1995">#1995</a>)</p>
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
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>Omit mode adds support for CSS mode (experimental) (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1635">#1635</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.33.1',
    date: '2022-07-22',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>cancel click propagation of suffix icon (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1411">#1411</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.32.0',
    date: '2022-06-24',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>Added <code>tooltip-props</code> class property (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1338">#1338</a>)</p>
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
          `<p>fix the problem that event <code>edit-end</code> triggered twice when press enter (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1122">#1122</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.24.0',
    date: '2022-04-15',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>fixed the warning of <code>slots.default</code> (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/980">#980</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.22.0',
    date: '2022-04-01',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>fix the problem that copy does not work (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/915">#915</a>)</p>
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
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix <code>ellipsisText</code> not updating (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/833">#833</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.16.0',
    date: '2022-01-21',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>add property <code>copy-delay</code> support customize the delay time for the disappearance of copy success status (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/632">#632</a>)</p>
`,
        ],
      },
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem of warning in JSX usage (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/591">#591</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.2.0',
    date: '2021-11-10',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fixed the problem of unable input (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/121">#121</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const j = P({
  name: 'ArcoMain',
  components: {
    DemoBasic: q,
    DemoTitle: M,
    DemoText: $,
    DemoParagraph: z,
    DemoOperations: I,
    DemoEllipsis: V,
  },
  setup() {
    const { locale: a } = A();
    return {
      locale: a,
      data: {
        meta: { type: 'Component', category: 'Common' },
        title: 'Typography',
        description: 'Used to display titles, paragraphs, and text content.',
      },
      changelog: typeof b === 'undefined' ? void 0 : b,
      getMessage: (g, m) => (a.value === 'zh-CN' ? g : m),
    };
  },
});
function O(a, l, y, x, g, m) {
  const v = i('demo-basic');
  const T = i('demo-title');
  const C = i('demo-text');
  const k = i('demo-paragraph');
  const w = i('demo-operations');
  const E = i('demo-ellipsis');
  const D = i('anchor-head');
  const s = i('a-th');
  const d = i('a-tr');
  const f = i('a-thead');
  const n = i('a-td');
  const p = i('a-tbody');
  const r = i('a-table');
  const F = i('arco-article');
  return (
    S(),
    W(
      F,
      N(a.data, { changelog: a.changelog }),
      {
        default: u(() => [
          l[166] ||
            (l[166] = o(
              'p',
              null,
              [o('em', null, 'Auto translate by google.')],
              -1
            )),
          t(v),
          t(T),
          t(C),
          t(k),
          t(w),
          t(E),
          t(
            D,
            { level: '2', href: 'API' },
            { default: u(() => l[0] || (l[0] = [e('API')])), _: 1 }
          ),
          l[167] ||
            (l[167] = o(
              'h3',
              { id: 'Common Props' },
              [o('code', null, 'Common'), e(' Props')],
              -1
            )),
          t(
            r,
            { class: 'component-api-table' },
            {
              default: u(() => [
                l[77] ||
                  (l[77] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(f, null, {
                  default: u(() => [
                    t(d, null, {
                      default: u(() => [
                        t(s, null, {
                          default: u(() => l[1] || (l[1] = [e('Attribute')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: u(() => l[2] || (l[2] = [e('Description')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: u(() => l[3] || (l[3] = [e('Type')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: u(() => l[4] || (l[4] = [e('Default')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: u(() => l[5] || (l[5] = [e('version')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(p, null, {
                  default: u(() => [
                    t(d, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(() => l[6] || (l[6] = [e('type')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(() => l[7] || (l[7] = [e('Text type')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[8] ||
                              (l[8] = [
                                o(
                                  'code',
                                  null,
                                  "'primary' | 'secondary' | 'success' | 'danger' | 'warning'",
                                  -1
                                ),
                              ])
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
                          default: u(() => l[10] || (l[10] = [e('bold')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[11] ||
                              (l[11] = [e('Whether enable bold style')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[12] ||
                              (l[12] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[13] || (l[13] = [o('code', null, 'false', -1)])
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
                          default: u(() => l[14] || (l[14] = [e('mark')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () => l[15] || (l[15] = [e('Mark style')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[16] ||
                              (l[16] = [
                                o(
                                  'code',
                                  null,
                                  'boolean | { color: string }',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[17] || (l[17] = [o('code', null, 'false', -1)])
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
                          default: u(() => l[18] || (l[18] = [e('underline')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[19] ||
                              (l[19] = [e('Whether enable underline style')])
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
                              l[21] || (l[21] = [o('code', null, 'false', -1)])
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
                          default: u(() => l[22] || (l[22] = [e('delete')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[23] ||
                              (l[23] = [e('Whether enable delete style')])
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
                          default: u(() => l[26] || (l[26] = [e('code')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[27] ||
                              (l[27] = [e('Whether enable code style')])
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
                          default: u(() => l[30] || (l[30] = [e('disabled')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () => l[31] || (l[31] = [e('Whether disabled')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[32] ||
                              (l[32] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[33] || (l[33] = [o('code', null, 'false', -1)])
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
                          default: u(() => l[34] || (l[34] = [e('editable')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[35] || (l[35] = [e("Whether it's editable")])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[36] ||
                              (l[36] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[37] || (l[37] = [o('code', null, 'false', -1)])
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
                            () =>
                              l[38] ||
                              (l[38] = [
                                e('editing '),
                                o('strong', null, '(v-model)', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () => l[39] || (l[39] = [e("Whether it's editing")])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[40] ||
                              (l[40] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () => l[41] || (l[41] = [o('code', null, '-', -1)])
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
                            () => l[42] || (l[42] = [e('default-editing')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[43] || (l[43] = [e('Default editing state')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[44] ||
                              (l[44] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[45] || (l[45] = [o('code', null, 'false', -1)])
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
                            () =>
                              l[46] ||
                              (l[46] = [
                                e('edit-text '),
                                o('strong', null, '(v-model)', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(() => l[47] || (l[47] = [e('Edit text')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[48] || (l[48] = [o('code', null, 'string', -1)])
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
                          default: u(() => l[50] || (l[50] = [e('copyable')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[51] ||
                              (l[51] = [
                                e('Whether turn on copy functionality'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[52] ||
                              (l[52] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[53] || (l[53] = [o('code', null, 'false', -1)])
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
                          default: u(() => l[54] || (l[54] = [e('copy-text')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () => l[55] || (l[55] = [e('Copied text')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[56] || (l[56] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () => l[57] || (l[57] = [o('code', null, '-', -1)])
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
                            () => l[58] || (l[58] = [e('copy-delay')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[59] ||
                              (l[59] = [
                                e(
                                  'After the copy is successful, the delay time for the copy button to return to the clickable state, in milliseconds'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[60] || (l[60] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[61] || (l[61] = [o('code', null, '3000', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(() => l[62] || (l[62] = [e('2.16.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(() => l[63] || (l[63] = [e('ellipsis')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[64] ||
                              (l[64] = [
                                e('Automatic overflow omission, refer to '),
                                o(
                                  'a',
                                  { class: 'link', href: '#EllipsisConfig' },
                                  'EllipsisConfig',
                                  -1
                                ),
                                e(' for more information.'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[65] ||
                              (l[65] = [
                                o('code', null, 'boolean | EllipsisConfig', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[66] || (l[66] = [o('code', null, 'false', -1)])
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
                            () => l[67] || (l[67] = [e('edit-tooltip-props')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[68] ||
                              (l[68] = [
                                e('Edit button question prompt configuration'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[69] || (l[69] = [o('code', null, 'object', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () => l[70] || (l[70] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(() => l[71] || (l[71] = [e('2.32.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(
                            () => l[72] || (l[72] = [e('copy-tooltip-props')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[73] ||
                              (l[73] = [
                                e('Copy button question prompt configuration'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[74] || (l[74] = [o('code', null, 'object', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () => l[75] || (l[75] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(() => l[76] || (l[76] = [e('2.32.0')])),
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
          l[168] ||
            (l[168] = o(
              'h3',
              { id: 'Common Events' },
              [o('code', null, 'Common'), e(' Events')],
              -1
            )),
          t(
            r,
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
                t(f, null, {
                  default: u(() => [
                    t(d, null, {
                      default: u(() => [
                        t(s, null, {
                          default: u(
                            () => l[78] || (l[78] = [e('Event Name')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: u(
                            () => l[79] || (l[79] = [e('Description')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: u(
                            () => l[80] || (l[80] = [e('Parameters')])
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
                  default: u(() => [
                    t(d, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(
                            () => l[81] || (l[81] = [e('edit-start')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () => l[82] || (l[82] = [e('Edit start')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(() => l[83] || (l[83] = [e('-')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(() => l[84] || (l[84] = [e('change')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () => l[85] || (l[85] = [e('Edit content change')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[86] ||
                              (l[86] = [
                                e('text: '),
                                o('code', null, 'string', -1),
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
                          default: u(() => l[87] || (l[87] = [e('edit-end')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(() => l[88] || (l[88] = [e('Edit end')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(() => l[89] || (l[89] = [e('-')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(() => l[90] || (l[90] = [e('copy')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(() => l[91] || (l[91] = [e('Copy')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[92] ||
                              (l[92] = [
                                e('text: '),
                                o('code', null, 'string', -1),
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
                          default: u(() => l[93] || (l[93] = [e('ellipsis')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () => l[94] || (l[94] = [e('Ellipsis change')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[95] ||
                              (l[95] = [
                                e('isEllipsis: '),
                                o('code', null, 'boolean', -1),
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
                          default: u(() => l[96] || (l[96] = [e('expand')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[97] || (l[97] = [e('Expand collapse event')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[98] ||
                              (l[98] = [
                                e('expanded: '),
                                o('code', null, 'boolean', -1),
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
          l[169] ||
            (l[169] = o(
              'h3',
              { id: 'Common Slots' },
              [o('code', null, 'Common'), e(' Slots')],
              -1
            )),
          t(
            r,
            { class: 'component-api-table' },
            {
              default: u(() => [
                l[112] ||
                  (l[112] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(f, null, {
                  default: u(() => [
                    t(d, null, {
                      default: u(() => [
                        t(s, null, {
                          default: u(
                            () => l[100] || (l[100] = [e('Slot Name')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: u(
                            () => l[101] || (l[101] = [e('Description')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: u(
                            () => l[102] || (l[102] = [e('Parameters')])
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
                  default: u(() => [
                    t(d, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(
                            () => l[103] || (l[103] = [e('expand-node')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[104] || (l[104] = [e('Custom expand button')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[105] ||
                              (l[105] = [
                                e('expanded: '),
                                o('code', null, 'boolean', -1),
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
                            () => l[106] || (l[106] = [e('copy-icon')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[107] ||
                              (l[107] = [e('Custom copy button icon')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[108] ||
                              (l[108] = [
                                e('copied: '),
                                o('code', null, 'boolean', -1),
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
                            () => l[109] || (l[109] = [e('copy-tooltip')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[110] ||
                              (l[110] = [
                                e(
                                  'Customize the tooltip content of the copy button'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[111] ||
                              (l[111] = [
                                e('copied: '),
                                o('code', null, 'boolean', -1),
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
          l[170] ||
            (l[170] = o(
              'h3',
              { id: 'typography-title Props' },
              [o('code', null, '<typography-title>'), e(' Props')],
              -1
            )),
          t(
            r,
            { class: 'component-api-table' },
            {
              default: u(() => [
                l[121] ||
                  (l[121] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(f, null, {
                  default: u(() => [
                    t(d, null, {
                      default: u(() => [
                        t(s, null, {
                          default: u(
                            () => l[113] || (l[113] = [e('Attribute')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: u(
                            () => l[114] || (l[114] = [e('Description')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: u(() => l[115] || (l[115] = [e('Type')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: u(() => l[116] || (l[116] = [e('Default')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(p, null, {
                  default: u(() => [
                    t(d, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(() => l[117] || (l[117] = [e('heading')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[118] ||
                              (l[118] = [
                                e('Heading level, equivalent to '),
                                o('code', null, 'h1', -1),
                                e(),
                                o('code', null, 'h2', -1),
                                e(),
                                o('code', null, 'h3', -1),
                                e(),
                                o('code', null, 'h4', -1),
                                e(),
                                o('code', null, 'h5', -1),
                                e(),
                                o('code', null, 'h6', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[119] ||
                              (l[119] = [
                                o(
                                  'code',
                                  null,
                                  "'1' | '2' | '3' | '4' | '5' | '6'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[120] || (l[120] = [o('code', null, '1', -1)])
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
          l[171] ||
            (l[171] = o(
              'h3',
              { id: 'typography-paragraph Props' },
              [o('code', null, '<typography-paragraph>'), e(' Props')],
              -1
            )),
          t(
            r,
            { class: 'component-api-table' },
            {
              default: u(() => [
                l[134] ||
                  (l[134] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(f, null, {
                  default: u(() => [
                    t(d, null, {
                      default: u(() => [
                        t(s, null, {
                          default: u(
                            () => l[122] || (l[122] = [e('Attribute')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: u(
                            () => l[123] || (l[123] = [e('Description')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: u(() => l[124] || (l[124] = [e('Type')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: u(() => l[125] || (l[125] = [e('Default')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(p, null, {
                  default: u(() => [
                    t(d, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(
                            () => l[126] || (l[126] = [e('blockquote')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[127] ||
                              (l[127] = [e('Whether enable blockquote')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[128] ||
                              (l[128] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[129] ||
                              (l[129] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(() => l[130] || (l[130] = [e('spacing')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[131] ||
                              (l[131] = [
                                e(
                                  'The line height of the paragraph, the default line height is recommended for long text (more than 5 lines). '
                                ),
                                o('code', null, 'close', -1),
                                e(
                                  ' line height is recommended for short text (less than or equal to 3 lines).'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[132] ||
                              (l[132] = [
                                o('code', null, "'default' | 'close'", -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[133] ||
                              (l[133] = [o('code', null, "'default'", -1)])
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
          l[172] ||
            (l[172] = o('h3', { id: 'EllipsisConfig' }, 'EllipsisConfig', -1)),
          t(
            r,
            { class: 'component-api-table' },
            {
              default: u(() => [
                l[165] ||
                  (l[165] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(f, null, {
                  default: u(() => [
                    t(d, null, {
                      default: u(() => [
                        t(s, null, {
                          default: u(() => l[135] || (l[135] = [e('Name')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: u(
                            () => l[136] || (l[136] = [e('Description')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: u(() => l[137] || (l[137] = [e('Type')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: u(() => l[138] || (l[138] = [e('Default')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: u(() => l[139] || (l[139] = [e('version')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(p, null, {
                  default: u(() => [
                    t(d, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(() => l[140] || (l[140] = [e('rows')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[141] ||
                              (l[141] = [e('The number of omitted lines')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[142] ||
                              (l[142] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[143] || (l[143] = [o('code', null, '1', -1)])
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
                            () => l[144] || (l[144] = [e('expandable')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () => l[145] || (l[145] = [e('Whether expandable')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[146] ||
                              (l[146] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[147] ||
                              (l[147] = [o('code', null, 'false', -1)])
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
                            () => l[148] || (l[148] = [e('ellipsisStr')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () => l[149] || (l[149] = [e('Ellipsis string')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[150] ||
                              (l[150] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[151] ||
                              (l[151] = [o('code', null, "'...'", -1)])
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
                          default: u(() => l[152] || (l[152] = [e('suffix')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(() => l[153] || (l[153] = [e('Suffix')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[154] ||
                              (l[154] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[155] || (l[155] = [o('code', null, '-', -1)])
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
                            () => l[156] || (l[156] = [e('showTooltip')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[157] ||
                              (l[157] = [
                                e('Pop-up box when configuration is omitted'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[158] ||
                              (l[158] = [
                                o(
                                  'code',
                                  null,
                                  "boolean | { type: 'tooltip' | 'popover'; props: Record<string, any> }",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[159] ||
                              (l[159] = [o('code', null, 'false', -1)])
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
                          default: u(() => l[160] || (l[160] = [e('css')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[161] ||
                              (l[161] = [
                                e(
                                  'Whether to use CSS ellipsis (expansion, custom ellipsis and suffix are not supported in this mode)'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[162] ||
                              (l[162] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[163] ||
                              (l[163] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(() => l[164] || (l[164] = [e('2.37.0')])),
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
const H = B(j, [['render', O]]);
export { H as default };
