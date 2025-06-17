import {
  _ as E,
  d as P,
  u as M,
  r,
  o as F,
  c as A,
  w as u,
  e as o,
  a as t,
  b as e,
  m as C,
} from './index.9c61ea88.js';
import { D as S, a as V, b as N } from './footer.c0d9405b.js';

const v = [
  {
    version: '2.52.0',
    date: '2023-09-22',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>add dropdown scroll event (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2635">#2635</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.50.0',
    date: '2023-08-11',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>add virtual list support (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2596">#2596</a>)</p>
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
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>Add focus and blur methods (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1809">#1809</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.34.0',
    date: '2022-07-29',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>add <code>footer</code> slot (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1445">#1445</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.23.0',
    date: '2022-04-08',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>Added allow-clear property and event (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/951">#951</a>)</p>
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
          `<p>Increase input slot and option slot support (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/482">#482</a>)</p>
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
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem that disabled is unavailable (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/310">#310</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const B = P({
  name: 'ArcoMain',
  components: { DemoBasic: S, DemoStrict: V, DemoFooter: N },
  setup() {
    const { locale: f } = M();
    return {
      locale: f,
      data: {
        meta: { type: 'Component', category: 'Data Entry' },
        title: 'AutoComplete',
        description: 'The auto-complete function of the input.',
      },
      changelog: typeof v === 'undefined' ? void 0 : v,
      getMessage: (m, g) => (f.value === 'zh-CN' ? m : g),
    };
  },
});
function I(f, l, b, y, m, g) {
  const x = r('demo-basic');
  const w = r('demo-strict');
  const T = r('demo-footer');
  const D = r('anchor-head');
  const s = r('a-th');
  const d = r('a-tr');
  const i = r('a-thead');
  const n = r('a-td');
  const a = r('a-tbody');
  const p = r('a-table');
  const k = r('arco-article');
  return (
    F(),
    A(
      k,
      C(f.data, { changelog: f.changelog }),
      {
        default: u(() => [
          l[104] ||
            (l[104] = o(
              'p',
              null,
              [o('em', null, 'Auto translate by google.')],
              -1
            )),
          t(x),
          t(w),
          t(T),
          t(
            D,
            { level: '2', href: 'API' },
            { default: u(() => l[0] || (l[0] = [e('API')])), _: 1 }
          ),
          l[105] ||
            (l[105] = o(
              'h3',
              { id: 'auto-complete Props' },
              [o('code', null, '<auto-complete>'), e(' Props')],
              -1
            )),
          t(
            p,
            { class: 'component-api-table' },
            {
              default: u(() => [
                l[49] ||
                  (l[49] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(i, null, {
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
                t(a, null, {
                  default: u(() => [
                    t(d, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(
                            () =>
                              l[6] ||
                              (l[6] = [
                                e('model-value '),
                                o('strong', null, '(v-model)', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(() => l[7] || (l[7] = [e('Value')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[8] || (l[8] = [o('code', null, 'string', -1)])
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
                          default: u(
                            () => l[10] || (l[10] = [e('default-value')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[11] ||
                              (l[11] = [e('Default value (uncontrolled mode)')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[12] || (l[12] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () => l[13] || (l[13] = [o('code', null, "''", -1)])
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
                          default: u(() => l[14] || (l[14] = [e('disabled')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () => l[15] || (l[15] = [e('Whether to disable')])
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
                          default: u(() => l[18] || (l[18] = [e('data')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[19] ||
                              (l[19] = [e('Data used for auto-complete')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[20] ||
                              (l[20] = [
                                o(
                                  'code',
                                  null,
                                  '(string | number | SelectOptionData | SelectOptionGroup)[]',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () => l[21] || (l[21] = [o('code', null, '[]', -1)])
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
                            () => l[22] || (l[22] = [e('popup-container')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[23] ||
                              (l[23] = [e('Mount container for popup')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[24] ||
                              (l[24] = [
                                o(
                                  'code',
                                  null,
                                  'string | HTMLElement | null | undefined',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () => l[25] || (l[25] = [o('code', null, '-', -1)])
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
                          default: u(() => l[26] || (l[26] = [e('strict')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[27] ||
                              (l[27] = [
                                e('Whether it is strict verification mode'),
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
                            () => l[30] || (l[30] = [e('filter-option')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[31] ||
                              (l[31] = [e('Custom option filtering method')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[32] ||
                              (l[32] = [o('code', null, 'FilterOption', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[33] || (l[33] = [o('code', null, 'true', -1)])
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
                            () => l[34] || (l[34] = [e('trigger-props')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () => l[35] || (l[35] = [e('trigger props')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[36] ||
                              (l[36] = [o('code', null, 'TriggerProps', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () => l[37] || (l[37] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(() => l[38] || (l[38] = [e('2.14.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(
                            () => l[39] || (l[39] = [e('allow-clear')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[40] ||
                              (l[40] = [
                                e('Whether to allow the input to be cleared'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[41] ||
                              (l[41] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[42] || (l[42] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(() => l[43] || (l[43] = [e('2.23.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(
                            () => l[44] || (l[44] = [e('virtual-list-props')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[45] ||
                              (l[45] = [
                                e(
                                  'Pass the virtual list attribute, pass in this parameter to turn on virtual scrolling '
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
                              l[46] ||
                              (l[46] = [
                                o('code', null, 'VirtualListProps', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () => l[47] || (l[47] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(() => l[48] || (l[48] = [e('2.50.0')])),
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
              { id: 'auto-complete Events' },
              [o('code', null, '<auto-complete>'), e(' Events')],
              -1
            )),
          t(
            p,
            { class: 'component-api-table' },
            {
              default: u(() => [
                l[75] ||
                  (l[75] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(i, null, {
                  default: u(() => [
                    t(d, null, {
                      default: u(() => [
                        t(s, null, {
                          default: u(
                            () => l[50] || (l[50] = [e('Event Name')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: u(
                            () => l[51] || (l[51] = [e('Description')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: u(
                            () => l[52] || (l[52] = [e('Parameters')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: u(() => l[53] || (l[53] = [e('version')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(a, null, {
                  default: u(() => [
                    t(d, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(() => l[54] || (l[54] = [e('change')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[55] ||
                              (l[55] = [e('Emitted when the value changes')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[56] ||
                              (l[56] = [
                                e('value: '),
                                o('code', null, 'string', -1),
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
                          default: u(() => l[57] || (l[57] = [e('search')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[58] ||
                              (l[58] = [e('Emitted when the user searches')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[59] ||
                              (l[59] = [
                                e('value: '),
                                o('code', null, 'string', -1),
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
                          default: u(() => l[60] || (l[60] = [e('select')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[61] ||
                              (l[61] = [
                                e('Emitted when an option is selected'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[62] ||
                              (l[62] = [
                                e('value: '),
                                o('code', null, 'string', -1),
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
                          default: u(() => l[63] || (l[63] = [e('clear')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[64] ||
                              (l[64] = [
                                e(
                                  'Triggered when the user clicks the clear button'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[65] ||
                              (l[65] = [
                                e('ev: '),
                                o('code', null, 'Event', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(() => l[66] || (l[66] = [e('2.23.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(
                            () => l[67] || (l[67] = [e('dropdown-scroll')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[68] ||
                              (l[68] = [
                                e('Triggered when the drop-down scrolls'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[69] ||
                              (l[69] = [
                                e('ev: '),
                                o('code', null, 'Event', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(() => l[70] || (l[70] = [e('2.52.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(
                            () =>
                              l[71] || (l[71] = [e('dropdown-reach-bottom')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[72] ||
                              (l[72] = [
                                e(
                                  'Triggered when the drop-down menu is scrolled to the bottom'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[73] ||
                              (l[73] = [
                                e('ev: '),
                                o('code', null, 'Event', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(() => l[74] || (l[74] = [e('2.52.0')])),
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
              { id: 'auto-complete Methods' },
              [o('code', null, '<auto-complete>'), e(' Methods')],
              -1
            )),
          t(
            p,
            { class: 'component-api-table' },
            {
              default: u(() => [
                l[91] ||
                  (l[91] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(i, null, {
                  default: u(() => [
                    t(d, null, {
                      default: u(() => [
                        t(s, null, {
                          default: u(() => l[76] || (l[76] = [e('Method')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: u(
                            () => l[77] || (l[77] = [e('Description')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: u(
                            () => l[78] || (l[78] = [e('Parameters')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: u(() => l[79] || (l[79] = [e('Return')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: u(() => l[80] || (l[80] = [e('version')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(a, null, {
                  default: u(() => [
                    t(d, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(() => l[81] || (l[81] = [e('focus')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[82] || (l[82] = [e('Make the input box focus')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(() => l[83] || (l[83] = [e('-')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(() => l[84] || (l[84] = [e('-')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(() => l[85] || (l[85] = [e('2.40.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(() => l[86] || (l[86] = [e('blur')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[87] ||
                              (l[87] = [e('Make the input box lose focus')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(() => l[88] || (l[88] = [e('-')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(() => l[89] || (l[89] = [e('-')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(() => l[90] || (l[90] = [e('2.40.0')])),
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
          l[108] ||
            (l[108] = o(
              'h3',
              { id: 'auto-complete Slots' },
              [o('code', null, '<auto-complete>'), e(' Slots')],
              -1
            )),
          t(
            p,
            { class: 'component-api-table' },
            {
              default: u(() => [
                l[103] ||
                  (l[103] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(i, null, {
                  default: u(() => [
                    t(d, null, {
                      default: u(() => [
                        t(s, null, {
                          default: u(() => l[92] || (l[92] = [e('Slot Name')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: u(
                            () => l[93] || (l[93] = [e('Description')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: u(
                            () => l[94] || (l[94] = [e('Parameters')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: u(() => l[95] || (l[95] = [e('version')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(a, null, {
                  default: u(() => [
                    t(d, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(() => l[96] || (l[96] = [e('option')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[97] ||
                              (l[97] = [e('Display content of options')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[98] ||
                              (l[98] = [
                                e('data: '),
                                o('code', null, 'OptionInfo', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(() => l[99] || (l[99] = [e('2.13.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(() => l[100] || (l[100] = [e('footer')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[101] ||
                              (l[101] = [e('The footer of the popup menu box')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(() => l[102] || (l[102] = [e('-')])),
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
        ]),
        _: 1,
      },
      16,
      ['changelog']
    )
  );
}
const $ = E(B, [['render', I]]);
export { $ as default };
