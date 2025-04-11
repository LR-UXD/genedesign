import {
  _ as A,
  d as D,
  u as M,
  r as a,
  o as B,
  c as P,
  w as e,
  e as o,
  a as t,
  b as u,
  m as C,
} from './index.9c61ea88.js';
import { D as S, a as z, b as R, c as W } from './auto-size.195a70d9.js';

const x = [
  {
    version: '2.56.3',
    date: '2024-10-25',
    list: [
      {
        type: 'enhancement',
        typeText: '\u{1F48E} Enhancement',
        list: [
          `<p>Support textareaAttrs attribute for textarea (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/3303">#3303</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.28.0',
    date: '2022-05-20',
    list: [
      {
        type: 'style',
        typeText: '\u{1F485} Style',
        list: [
          `<p>Fix the display problem of the text box after setting the height style (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1176">#1176</a>)</p>
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
          `<p>Fix the problem that the downlink height setting is invalid in Firefox browser (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/536">#536</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.12.0',
    date: '2021-12-24',
    list: [
      {
        type: 'attention',
        typeText: '\u26A0\uFE0F Important Attention',
        list: [
          `<p>The calculation of max-length no longer excludes carriage returns, which is consistent with the React version (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/452">#452</a>)</p>
`,
        ],
      },
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p><code>max-length</code> adds <code>errorOnly</code> attribute and <code>word-slice</code> attribute (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/451">#451</a>)</p>
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
        type: 'style',
        typeText: '\u{1F485} Style',
        list: [
          `<p>Fix the style problem of prohibited mode (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/355">#355</a>)</p>
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
          `<p>Add support for min rows and max rows (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/309">#309</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.6.0',
    date: '2021-11-19',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>Add <code>word-length</code> attribute (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/199">#199</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.3.0',
    date: '2021-11-12',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem that <code>disabled</code> does not take effect (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/139">#139</a>)</p>
`,
          `<p>Fix the issue of missing <code>style/index.js</code> (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/139">#139</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.1.1',
    date: '2021-11-08',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem of internal loop update in <code>autoSize</code> mode (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/113">#113</a>)</p>
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
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem of inaccurate automatic height adjustment (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/78">#78</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const N = D({
  name: 'ArcoMain',
  components: {
    DemoBasic: S,
    DemoStatus: z,
    DemoWordLimit: R,
    DemoAutoSize: W,
  },
  setup() {
    const { locale: r } = M();
    return {
      locale: r,
      data: {
        meta: { type: 'Component', category: 'Data Entry' },
        title: 'Textarea',
        description:
          'Multi-line plain text edit control, suitable for a paragraph of opinion in the comment or feedback form.',
      },
      changelog: typeof x === 'undefined' ? void 0 : x,
      getMessage: (m, g) => (r.value === 'zh-CN' ? m : g),
    };
  },
});
function I(r, l, b, v, m, g) {
  const y = a('demo-basic');
  const w = a('demo-status');
  const k = a('demo-word-limit');
  const F = a('demo-auto-size');
  const E = a('anchor-head');
  const s = a('a-th');
  const d = a('a-tr');
  const i = a('a-thead');
  const n = a('a-td');
  const f = a('a-tbody');
  const p = a('a-table');
  const T = a('arco-article');
  return (
    B(),
    P(
      T,
      C(r.data, { changelog: r.changelog }),
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
          t(k),
          t(F),
          t(
            E,
            { level: '2', href: 'API' },
            { default: e(() => l[0] || (l[0] = [u('API')])), _: 1 }
          ),
          l[92] ||
            (l[92] = o(
              'h3',
              { id: 'textarea Props' },
              [o('code', null, '<textarea>'), u(' Props')],
              -1
            )),
          t(
            p,
            { class: 'component-api-table' },
            {
              default: e(() => [
                l[55] ||
                  (l[55] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(i, null, {
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
                          default: e(
                            () => l[14] || (l[14] = [u('placeholder')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[15] || (l[15] = [u('Placeholder')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[16] || (l[16] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[17] || (l[17] = [o('code', null, '-', -1)])
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
                          default: e(() => l[18] || (l[18] = [u('disabled')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[19] || (l[19] = [u('Whether to disable')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[20] ||
                              (l[20] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
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
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[22] || (l[22] = [u('error')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[23] ||
                              (l[23] = [u('Whether it is an error state')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[24] ||
                              (l[24] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
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
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () => l[26] || (l[26] = [u('max-length')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[27] ||
                              (l[27] = [
                                u(
                                  'Maximum length of input value, the errorOnly attribute was added in version 2.12.0'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[28] ||
                              (l[28] = [
                                o(
                                  'code',
                                  null,
                                  'number | { length: number; errorOnly?: boolean }',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[29] || (l[29] = [o('code', null, '0', -1)])
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
                            () => l[30] || (l[30] = [u('show-word-limit')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[31] ||
                              (l[31] = [u('Whether to display word count')])
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
                                u('Whether to allow clearing the text'),
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
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[38] || (l[38] = [u('auto-size')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[39] ||
                              (l[39] = [
                                u(
                                  'Whether to make the textarea adapt to the height of the content'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[40] ||
                              (l[40] = [
                                o(
                                  'code',
                                  null,
                                  'boolean | { minRows?: number; maxRows?: number }',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[41] || (l[41] = [o('code', null, 'false', -1)])
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
                            () => l[42] || (l[42] = [u('word-length')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[43] ||
                              (l[43] = [u('Calculation method of word length')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[44] ||
                              (l[44] = [
                                o(
                                  'code',
                                  null,
                                  '(value: string) => number',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[45] || (l[45] = [o('code', null, '-', -1)])
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
                            () => l[46] || (l[46] = [u('word-slice')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[47] ||
                              (l[47] = [
                                u(
                                  'Character interception method, used together with wordLength'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[48] ||
                              (l[48] = [
                                o(
                                  'code',
                                  null,
                                  '(value: string, maxLength: number) => string',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[49] || (l[49] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[50] || (l[50] = [u('2.12.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () => l[51] || (l[51] = [u('textarea-attrs')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[52] ||
                              (l[52] = [u('Attributes passed to textarea')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[53] ||
                              (l[53] = [
                                o('code', null, 'Record<string, any>', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[54] || (l[54] = [o('code', null, '-', -1)])
                          ),
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
          l[93] ||
            (l[93] = o(
              'h3',
              { id: 'textarea Events' },
              [o('code', null, '<textarea>'), u(' Events')],
              -1
            )),
          t(
            p,
            { class: 'component-api-table' },
            {
              default: e(() => [
                l[74] ||
                  (l[74] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(i, null, {
                  default: e(() => [
                    t(d, null, {
                      default: e(() => [
                        t(s, null, {
                          default: e(
                            () => l[56] || (l[56] = [u('Event Name')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(
                            () => l[57] || (l[57] = [u('Description')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(
                            () => l[58] || (l[58] = [u('Parameters')])
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
                  default: e(() => [
                    t(d, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[59] || (l[59] = [u('input')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[60] ||
                              (l[60] = [u('Emitted when the user enters')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[61] ||
                              (l[61] = [
                                u('value: '),
                                o('code', null, 'string', -1),
                                o('br', null, null, -1),
                                u('ev: '),
                                o('code', null, 'Event', -1),
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
                          default: e(() => l[62] || (l[62] = [u('change')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[63] ||
                              (l[63] = [
                                u(
                                  'Only emitted when the textarea is out of focus'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[64] ||
                              (l[64] = [
                                u('value: '),
                                o('code', null, 'string', -1),
                                o('br', null, null, -1),
                                u('ev: '),
                                o('code', null, 'Event', -1),
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
                          default: e(() => l[65] || (l[65] = [u('clear')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[66] ||
                              (l[66] = [
                                u('Emitted when the clear button is clicked'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[67] ||
                              (l[67] = [
                                u('ev: '),
                                o('code', null, 'MouseEvent', -1),
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
                          default: e(() => l[68] || (l[68] = [u('focus')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[69] ||
                              (l[69] = [
                                u('Emitted when the textarea gets focus'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[70] ||
                              (l[70] = [
                                u('ev: '),
                                o('code', null, 'FocusEvent', -1),
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
                          default: e(() => l[71] || (l[71] = [u('blur')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[72] ||
                              (l[72] = [
                                u('Emitted when the textarea loses focus'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[73] ||
                              (l[73] = [
                                u('ev: '),
                                o('code', null, 'FocusEvent', -1),
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
          l[94] ||
            (l[94] = o(
              'h3',
              { id: 'textarea Methods' },
              [o('code', null, '<textarea>'), u(' Methods')],
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
                t(i, null, {
                  default: e(() => [
                    t(d, null, {
                      default: e(() => [
                        t(s, null, {
                          default: e(() => l[75] || (l[75] = [u('Method')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(
                            () => l[76] || (l[76] = [u('Description')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(
                            () => l[77] || (l[77] = [u('Parameters')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(() => l[78] || (l[78] = [u('Return')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(() => l[79] || (l[79] = [u('version')])),
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
                          default: e(() => l[80] || (l[80] = [u('focus')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[81] || (l[81] = [u('Make the input box focus')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[82] || (l[82] = [u('-')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[83] || (l[83] = [u('-')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[84] || (l[84] = [u('2.24.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[85] || (l[85] = [u('blur')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[86] ||
                              (l[86] = [u('Make the input box lose focus')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[87] || (l[87] = [u('-')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[88] || (l[88] = [u('-')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[89] || (l[89] = [u('2.24.0')])),
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
const $ = A(N, [['render', I]]);
export { $ as default };
