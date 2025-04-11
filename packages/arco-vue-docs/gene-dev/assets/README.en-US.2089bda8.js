import {
  _ as T,
  d as D,
  u as B,
  r as i,
  o as E,
  c as M,
  w as e,
  e as o,
  a as t,
  b as u,
  m as A,
} from './index.9c61ea88.js';
import { D as P, a as N } from './prefix.08a25913.js';

const x = [
  {
    version: '2.52.1',
    date: '2023-10-13',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fixed the issue where the <code>disabled</code> attribute does not work properly under text-area (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2723">#2723</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.47.0',
    date: '2023-06-02',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>Add <code>prefix</code> attribute to search event (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2356">#2356</a>)</p>
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
        typeText: '\u{1F195} Feature',
        list: [
          `<p>add focus and blur methods (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2022">#2022</a>)</p>
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
          `<p>Fix the problem that the Enter key is invalid in textarea mode (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2013">#2013</a>)</p>
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
          `<p>Fix missing textarea styles when loading on demand (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1227">#1227</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.29.0',
    date: '2022-05-27',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fixed the cursor movement problem after typing in textarea mode (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1204">#1204</a>)</p>
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
    version: '2.22.1',
    date: '2022-04-02',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem of warning prompts in the development environment (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/925">#925</a>)</p>
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
          `<p>Fix v-model two-way binding error when selecting value (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/908">#908</a>)</p>
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
          `<p>The drop-down menu under the text field type is displayed following the prompt text (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/482">#482</a>)</p>
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
          `<p>Add <code>type</code> prop (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/205">#205</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const S = D({
  name: 'ArcoMain',
  components: { DemoBasic: P, DemoPrefix: N },
  setup() {
    const { locale: r } = B();
    return {
      locale: r,
      data: {
        meta: { type: 'Component', category: 'Data Entry' },
        title: 'Mention',
        description:
          'Used to mention someone or something in the input, often used for posting, chatting or commenting.',
      },
      changelog: typeof x === 'undefined' ? void 0 : x,
      getMessage: (g, m) => (r.value === 'zh-CN' ? g : m),
    };
  },
});
function C(r, l, v, b, g, m) {
  const y = i('demo-basic');
  const w = i('demo-prefix');
  const k = i('anchor-head');
  const s = i('a-th');
  const d = i('a-tr');
  const a = i('a-thead');
  const n = i('a-td');
  const f = i('a-tbody');
  const p = i('a-table');
  const F = i('arco-article');
  return (
    E(),
    M(
      F,
      A(r.data, { changelog: r.changelog }),
      {
        default: e(() => [
          l[91] ||
            (l[91] = o(
              'p',
              null,
              [o('em', null, 'Auto translate by google.')],
              -1
            )),
          t(y),
          t(w),
          t(
            k,
            { level: '2', href: 'API' },
            { default: e(() => l[0] || (l[0] = [u('API')])), _: 1 }
          ),
          l[92] ||
            (l[92] = o(
              'h3',
              { id: 'mention Props' },
              [o('code', null, '<mention>'), u(' Props')],
              -1
            )),
          t(
            p,
            { class: 'component-api-table' },
            {
              default: e(() => [
                l[39] ||
                  (l[39] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(a, null, {
                  default: e(() => [
                    t(d, null, {
                      default: e(() => [
                        t(s, null, {
                          default: e(() => l[1] || (l[1] = [u('Attribute')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(() => l[2] || (l[2] = [u('Description')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(() => l[3] || (l[3] = [u('Type')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(() => l[4] || (l[4] = [u('Default')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(() => l[5] || (l[5] = [u('version')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(f, null, {
                  default: e(() => [
                    t(d, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () =>
                              l[6] ||
                              (l[6] = [
                                u('model-value '),
                                o('strong', null, '(v-model)', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[7] || (l[7] = [u('Value')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[8] || (l[8] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[9] || (l[9] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () => l[10] || (l[10] = [u('default-value')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[11] ||
                              (l[11] = [
                                u('Default value (uncontrolled state)'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[12] || (l[12] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[13] || (l[13] = [o('code', null, "''", -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[14] || (l[14] = [u('data')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[15] ||
                              (l[15] = [u('Data for automatic completion')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[16] ||
                              (l[16] = [
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
                          default: e(
                            () => l[17] || (l[17] = [o('code', null, '[]', -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[18] || (l[18] = [u('prefix')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[19] ||
                              (l[19] = [
                                u('Keywords that trigger auto-completion'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[20] ||
                              (l[20] = [
                                o('code', null, 'string | string[]', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[21] || (l[21] = [o('code', null, "'@'", -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[22] || (l[22] = [u('split')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[23] ||
                              (l[23] = [
                                u(
                                  'Before and after the selected item separator'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[24] || (l[24] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[25] || (l[25] = [o('code', null, "' '", -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[26] || (l[26] = [u('type')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[27] ||
                              (l[27] = [u('default input or textarea')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[28] ||
                              (l[28] = [
                                o('code', null, "'input' | 'textarea'", -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[29] ||
                              (l[29] = [o('code', null, "'input'", -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[30] || (l[30] = [u('disabled')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[31] || (l[31] = [u('Whether to disable')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[32] ||
                              (l[32] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
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
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () => l[34] || (l[34] = [u('allow-clear')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[35] ||
                              (l[35] = [
                                u('Whether to allow the input to be cleared'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[36] ||
                              (l[36] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[37] || (l[37] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[38] || (l[38] = [u('2.23.0')])),
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
          l[93] ||
            (l[93] = o(
              'h3',
              { id: 'mention Events' },
              [o('code', null, '<mention>'), u(' Events')],
              -1
            )),
          t(
            p,
            { class: 'component-api-table' },
            {
              default: e(() => [
                l[65] ||
                  (l[65] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(a, null, {
                  default: e(() => [
                    t(d, null, {
                      default: e(() => [
                        t(s, null, {
                          default: e(
                            () => l[40] || (l[40] = [u('Event Name')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(
                            () => l[41] || (l[41] = [u('Description')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(
                            () => l[42] || (l[42] = [u('Parameters')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(() => l[43] || (l[43] = [u('version')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(f, null, {
                  default: e(() => [
                    t(d, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[44] || (l[44] = [u('change')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[45] ||
                              (l[45] = [u('Triggered when the value changes')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[46] ||
                              (l[46] = [
                                u('value: '),
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
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[47] || (l[47] = [u('search')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[48] ||
                              (l[48] = [
                                u(
                                  'Trigger on dynamic search prefix, version 2.47.0 adds prefix param'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[49] ||
                              (l[49] = [
                                u('value: '),
                                o('code', null, 'string', -1),
                                o('br', null, null, -1),
                                u('prefix: '),
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
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[50] || (l[50] = [u('select')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[51] ||
                              (l[51] = [
                                u(
                                  'Triggered when the drop-down option is selected'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[52] ||
                              (l[52] = [
                                u('value: '),
                                o(
                                  'code',
                                  null,
                                  'string | number | Record<string, any> | undefined',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[53] || (l[53] = [u('clear')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[54] ||
                              (l[54] = [
                                u(
                                  'Triggered when the user clicks the clear button'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[55] || (l[55] = [u('-')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[56] || (l[56] = [u('2.23.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[57] || (l[57] = [u('focus')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[58] ||
                              (l[58] = [
                                u('Emitted when the text box gets focus'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[59] ||
                              (l[59] = [
                                u('ev: '),
                                o('code', null, 'FocusEvent', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[60] || (l[60] = [u('2.42.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[61] || (l[61] = [u('blur')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[62] ||
                              (l[62] = [
                                u('Emitted when the text box loses focus'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[63] ||
                              (l[63] = [
                                u('ev: '),
                                o('code', null, 'FocusEvent', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[64] || (l[64] = [u('2.42.0')])),
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
          l[94] ||
            (l[94] = o(
              'h3',
              { id: 'mention Methods' },
              [o('code', null, '<mention>'), u(' Methods')],
              -1
            )),
          t(
            p,
            { class: 'component-api-table' },
            {
              default: e(() => [
                l[81] ||
                  (l[81] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(a, null, {
                  default: e(() => [
                    t(d, null, {
                      default: e(() => [
                        t(s, null, {
                          default: e(() => l[66] || (l[66] = [u('Method')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(
                            () => l[67] || (l[67] = [u('Description')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(
                            () => l[68] || (l[68] = [u('Parameters')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(() => l[69] || (l[69] = [u('Return')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(() => l[70] || (l[70] = [u('version')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(f, null, {
                  default: e(() => [
                    t(d, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[71] || (l[71] = [u('focus')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[72] || (l[72] = [u('Make the input box focus')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[73] || (l[73] = [u('-')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[74] || (l[74] = [u('-')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[75] || (l[75] = [u('2.24.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[76] || (l[76] = [u('blur')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[77] ||
                              (l[77] = [u('Make the input box lose focus')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[78] || (l[78] = [u('-')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[79] || (l[79] = [u('-')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[80] || (l[80] = [u('2.24.0')])),
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
          l[95] ||
            (l[95] = o(
              'h3',
              { id: 'mention Slots' },
              [o('code', null, '<mention>'), u(' Slots')],
              -1
            )),
          t(
            p,
            { class: 'component-api-table' },
            {
              default: e(() => [
                l[90] ||
                  (l[90] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(a, null, {
                  default: e(() => [
                    t(d, null, {
                      default: e(() => [
                        t(s, null, {
                          default: e(() => l[82] || (l[82] = [u('Slot Name')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(
                            () => l[83] || (l[83] = [u('Description')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(
                            () => l[84] || (l[84] = [u('Parameters')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(() => l[85] || (l[85] = [u('version')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(f, null, {
                  default: e(() => [
                    t(d, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[86] || (l[86] = [u('option')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[87] ||
                              (l[87] = [u('Display content of options')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[88] ||
                              (l[88] = [
                                u('data: '),
                                o('code', null, 'OptionInfo', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[89] || (l[89] = [u('2.13.0')])),
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
const $ = T(S, [['render', C]]);
export { $ as default };
