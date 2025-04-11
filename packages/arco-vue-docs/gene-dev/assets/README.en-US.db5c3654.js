import {
  _ as z,
  d as I,
  u as _,
  r as s,
  o as M,
  c as V,
  w as e,
  e as u,
  a as t,
  b as o,
  m as W,
} from './index.9c61ea88.js';
import {
  D as $,
  a as L,
  b as U,
  c as j,
  d as R,
  e as q,
  f as G,
  g as H,
  h as J,
  i as K,
  j as O,
} from './changeable.3c6e44d0.js';

const b = [
  {
    version: '2.24.0',
    date: '2022-04-15',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem of index error when Steps and Step components are not in direct parent-child relationship (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/959">#959</a>)</p>
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
        type: 'enhancement',
        typeText: '\u{1F48E} Enhancement',
        list: [
          `<p>Use Context to optimize components (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/772">#772</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.14.2',
    date: '2022-01-10',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem that small can be enabled in dot mode (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/536">#536</a>)</p>
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
        type: 'style',
        typeText: '\u{1F485} Style',
        list: [
          `<p>Fix the wrong connection color problem in the next step (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/477">#477</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.9.0',
    date: '2021-12-03',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>add title props (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/316">#316</a>)</p>
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
        type: 'style',
        typeText: '\u{1F485} Style',
        list: [
          `<p>Fix the problem of the connection color of the vertical step bar (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/276">#276</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.6.1',
    date: '2021-11-24',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem that the <code>status</code> attribute in the <code>&lt;step&gt;</code> component does not take effect (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/209">#209</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const Q = I({
  name: 'ArcoMain',
  components: {
    DemoBasic: $,
    DemoDescription: L,
    DemoLabelPlacement: U,
    DemoError: j,
    DemoIcon: R,
    DemoLineLess: q,
    DemoVertical: G,
    DemoArrow: H,
    DemoDot: J,
    DemoNavigation: K,
    DemoChangeable: O,
  },
  setup() {
    const { locale: i } = _();
    return {
      locale: i,
      data: {
        meta: { type: 'Component', category: 'Navigation' },
        title: 'Steps',
        description:
          'Clearly indicate the task flow and the current degree of completion, and guide the user to follow the steps to complete the task.',
      },
      changelog: typeof b === 'undefined' ? void 0 : b,
      getMessage: (m, g) => (i.value === 'zh-CN' ? m : g),
    };
  },
});
function X(i, l, v, x, m, g) {
  const y = s('demo-basic');
  const D = s('demo-description');
  const w = s('demo-label-placement');
  const T = s('demo-error');
  const k = s('demo-icon');
  const N = s('demo-line-less');
  const P = s('demo-vertical');
  const S = s('demo-arrow');
  const F = s('demo-dot');
  const A = s('demo-navigation');
  const C = s('demo-changeable');
  const E = s('anchor-head');
  const r = s('a-th');
  const d = s('a-tr');
  const a = s('a-thead');
  const n = s('a-td');
  const p = s('a-tbody');
  const f = s('a-table');
  const B = s('arco-article');
  return (
    M(),
    V(
      B,
      W(i.data, { changelog: i.changelog }),
      {
        default: e(() => [
          l[83] ||
            (l[83] = u(
              'p',
              null,
              [u('em', null, 'Auto translate by google.')],
              -1
            )),
          t(y),
          t(D),
          t(w),
          t(T),
          t(k),
          t(N),
          t(P),
          t(S),
          t(F),
          t(A),
          t(C),
          t(
            E,
            { level: '2', href: 'API' },
            { default: e(() => l[0] || (l[0] = [o('API')])), _: 1 }
          ),
          l[84] ||
            (l[84] = u(
              'h3',
              { id: 'steps Props' },
              [u('code', null, '<steps>'), o(' Props')],
              -1
            )),
          t(
            f,
            { class: 'component-api-table' },
            {
              default: e(() => [
                l[41] ||
                  (l[41] = u(
                    'colgroup',
                    null,
                    [u('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(a, null, {
                  default: e(() => [
                    t(d, null, {
                      default: e(() => [
                        t(r, null, {
                          default: e(() => l[1] || (l[1] = [o('Attribute')])),
                          _: 1,
                        }),
                        t(r, null, {
                          default: e(() => l[2] || (l[2] = [o('Description')])),
                          _: 1,
                        }),
                        t(r, null, {
                          default: e(() => l[3] || (l[3] = [o('Type')])),
                          _: 1,
                        }),
                        t(r, null, {
                          default: e(() => l[4] || (l[4] = [o('Default')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(p, null, {
                  default: e(() => [
                    t(d, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[5] || (l[5] = [o('type')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[6] || (l[6] = [o('The type of the steps')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[7] ||
                              (l[7] = [
                                u(
                                  'code',
                                  null,
                                  "'default' | 'arrow' | 'dot' | 'navigation'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[8] ||
                              (l[8] = [u('code', null, "'default'", -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[9] || (l[9] = [o('direction')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[10] ||
                              (l[10] = [o('The direction of the steps')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[11] ||
                              (l[11] = [
                                u(
                                  'code',
                                  null,
                                  "'horizontal' | 'vertical'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[12] ||
                              (l[12] = [u('code', null, "'horizontal'", -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () => l[13] || (l[13] = [o('label-placement')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[14] ||
                              (l[14] = [
                                o(
                                  'The location where the label description is placed.'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[15] ||
                              (l[15] = [
                                u(
                                  'code',
                                  null,
                                  "'horizontal' | 'vertical'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[16] ||
                              (l[16] = [u('code', null, "'horizontal'", -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () =>
                              l[17] ||
                              (l[17] = [
                                o('current '),
                                u('strong', null, '(v-model)', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[18] || (l[18] = [o('Number of current step')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[19] || (l[19] = [u('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[20] || (l[20] = [u('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () => l[21] || (l[21] = [o('default-current')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[22] ||
                              (l[22] = [
                                o(
                                  'The default number of step (uncontrolled state)'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[23] || (l[23] = [u('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[24] || (l[24] = [u('code', null, '1', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[25] || (l[25] = [o('status')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[26] ||
                              (l[26] = [o('The status of the current step')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[27] ||
                              (l[27] = [
                                u(
                                  'code',
                                  null,
                                  "'wait' | 'process' | 'finish' | 'error'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[28] ||
                              (l[28] = [u('code', null, "'process'", -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[29] || (l[29] = [o('line-less')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[30] ||
                              (l[30] = [
                                o('Whether to use the connectionless style'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[31] ||
                              (l[31] = [u('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[32] || (l[32] = [u('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[33] || (l[33] = [o('small')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[34] ||
                              (l[34] = [o('Whether to use a small step bar')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[35] ||
                              (l[35] = [u('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[36] || (l[36] = [u('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () => l[37] || (l[37] = [o('changeable')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[38] ||
                              (l[38] = [o('Whether you can click to switch')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[39] ||
                              (l[39] = [u('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[40] || (l[40] = [u('code', null, 'false', -1)])
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
          l[85] ||
            (l[85] = u(
              'h3',
              { id: 'steps Events' },
              [u('code', null, '<steps>'), o(' Events')],
              -1
            )),
          t(
            f,
            { class: 'component-api-table' },
            {
              default: e(() => [
                l[48] ||
                  (l[48] = u(
                    'colgroup',
                    null,
                    [u('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(a, null, {
                  default: e(() => [
                    t(d, null, {
                      default: e(() => [
                        t(r, null, {
                          default: e(
                            () => l[42] || (l[42] = [o('Event Name')])
                          ),
                          _: 1,
                        }),
                        t(r, null, {
                          default: e(
                            () => l[43] || (l[43] = [o('Description')])
                          ),
                          _: 1,
                        }),
                        t(r, null, {
                          default: e(
                            () => l[44] || (l[44] = [o('Parameters')])
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
                  default: e(() => [
                    t(d, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[45] || (l[45] = [o('change')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[46] ||
                              (l[46] = [
                                o('Triggered when the number of steps changes'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[47] ||
                              (l[47] = [
                                o('step: '),
                                u('code', null, 'number', -1),
                                u('br', null, null, -1),
                                o('ev: '),
                                u('code', null, 'Event', -1),
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
          l[86] ||
            (l[86] = u(
              'h3',
              { id: 'step Props' },
              [u('code', null, '<step>'), o(' Props')],
              -1
            )),
          t(
            f,
            { class: 'component-api-table' },
            {
              default: e(() => [
                l[69] ||
                  (l[69] = u(
                    'colgroup',
                    null,
                    [u('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(a, null, {
                  default: e(() => [
                    t(d, null, {
                      default: e(() => [
                        t(r, null, {
                          default: e(() => l[49] || (l[49] = [o('Attribute')])),
                          _: 1,
                        }),
                        t(r, null, {
                          default: e(
                            () => l[50] || (l[50] = [o('Description')])
                          ),
                          _: 1,
                        }),
                        t(r, null, {
                          default: e(() => l[51] || (l[51] = [o('Type')])),
                          _: 1,
                        }),
                        t(r, null, {
                          default: e(() => l[52] || (l[52] = [o('Default')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(p, null, {
                  default: e(() => [
                    t(d, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[53] || (l[53] = [o('title')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[54] || (l[54] = [o('Title of the step')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[55] || (l[55] = [u('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[56] || (l[56] = [u('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () => l[57] || (l[57] = [o('description')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[58] || (l[58] = [o('Description of the step')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[59] || (l[59] = [u('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[60] || (l[60] = [u('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[61] || (l[61] = [o('status')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[62] || (l[62] = [o('Status of the step')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[63] ||
                              (l[63] = [
                                u(
                                  'code',
                                  null,
                                  "'wait' | 'process' | 'finish' | 'error'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[64] || (l[64] = [u('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[65] || (l[65] = [o('disabled')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[66] || (l[66] = [o('Whether to disable')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[67] ||
                              (l[67] = [u('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[68] || (l[68] = [u('code', null, 'false', -1)])
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
          l[87] ||
            (l[87] = u(
              'h3',
              { id: 'step Slots' },
              [u('code', null, '<step>'), o(' Slots')],
              -1
            )),
          t(
            f,
            { class: 'component-api-table' },
            {
              default: e(() => [
                l[82] ||
                  (l[82] = u(
                    'colgroup',
                    null,
                    [u('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(a, null, {
                  default: e(() => [
                    t(d, null, {
                      default: e(() => [
                        t(r, null, {
                          default: e(() => l[70] || (l[70] = [o('Slot Name')])),
                          _: 1,
                        }),
                        t(r, null, {
                          default: e(
                            () => l[71] || (l[71] = [o('Description')])
                          ),
                          _: 1,
                        }),
                        t(r, null, {
                          default: e(
                            () => l[72] || (l[72] = [o('Parameters')])
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
                  default: e(() => [
                    t(d, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[73] || (l[73] = [o('node')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[74] || (l[74] = [o('Node')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[75] ||
                              (l[75] = [
                                o('step: '),
                                u('code', null, 'number', -1),
                                u('br', null, null, -1),
                                o('status: '),
                                u('code', null, 'string', -1),
                              ])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[76] || (l[76] = [o('icon')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[77] || (l[77] = [o('Icon')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[78] ||
                              (l[78] = [
                                o('step: '),
                                u('code', null, 'number', -1),
                                u('br', null, null, -1),
                                o('status: '),
                                u('code', null, 'string', -1),
                              ])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () => l[79] || (l[79] = [o('description')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[80] || (l[80] = [o('Description')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[81] || (l[81] = [o('-')])),
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
const h = z(Q, [['render', X]]);
export { h as default };
