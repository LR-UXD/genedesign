import {
  _ as I,
  d as R,
  u as $,
  r as s,
  o as K,
  c as j,
  w as e,
  e as o,
  a as t,
  b as n,
  m as H,
} from './index.9c61ea88.js';
import {
  D as U,
  a as q,
  b as G,
  c as J,
  d as O,
  e as Q,
  f as X,
  g as Y,
  h as Z,
  i as _,
  j as h,
  k as c,
  l as ll,
  m as tl,
  n as el,
  o as ul,
} from './fallback.4b26ed0d.js';

const b = [
  {
    version: '2.55.0',
    date: '2024-03-15',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>Added <code>input-value</code> related properties (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/3024">#3024</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.49.1',
    date: '2023-07-24',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem that the default value of the <code>border</code> attribute is wrong (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2580">#2580</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.49.0',
    date: '2023-07-21',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>Add header and footer visibility in empty data state (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2573">#2573</a>)</p>
`,
        ],
      },
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem that the border attribute is invalid (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2568">#2568</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.47.1',
    date: '2023-06-09',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem that the search content under the virtual list cannot be selected (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2488">#2488</a>)</p>
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
          `<p>Add header and footer slots (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2417">#2417</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.39.1',
    date: '2022-11-25',
    list: [
      {
        type: 'typescript',
        typeText: '\u{1F18E} TypeScript',
        list: [
          `<p>update the type of trigger-props (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1885">#1885</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.39.0',
    date: '2022-11-18',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>Replace the virtual scrollbar component and add the scrollbar property (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1872">#1872</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.32.1',
    date: '2022-07-01',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem of selected value in case of modelValue is 0 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1370">#1370</a>)</p>
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
        type: 'enhancement',
        typeText: '\u{1F48E} Enhancement',
        list: [
          `<p>When the component is out of focus in search mode, the input value will be cleared by default (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1232">#1232</a>)</p>
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
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>Default support to delete selected options by tag (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1206">#1206</a>)</p>
`,
        ],
      },
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>fixed the problem that drag and drop fails after setting fieldNames (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1207">#1207</a>)</p>
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
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>Added property <code>seletable</code> to support custom selectable nodes (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1119">#1119</a>)</p>
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
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>When the prop label-in-value is true, the actual parameter value of the event change is wrong (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/939">#939</a>)</p>
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
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>add property <code>fallback-option</code> (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/894">#894</a>)</p>
`,
        ],
      },
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem that the null value is displayed as empty (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/916">#916</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.21.0',
    date: '2022-03-25',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix <code>max-tags</code> parameter name is wrong, it should be <code>max-tag-count</code> (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/873">#873</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.11.0',
    date: '2021-12-17',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>fix the problem that search is invalid when rename the key field (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/405">#405</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.5.0',
    date: '2021-11-18',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>cannot select the option with key 0 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/185">#185</a>)</p>
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
        type: 'enhancement',
        typeText: '\u{1F48E} Enhancement',
        list: [
          `<p>The clickable range of options occupies the entire row by default (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/90">#90</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const nl = R({
  name: 'ArcoMain',
  components: {
    DemoBasic: U,
    DemoLabelInValue: q,
    DemoControl: G,
    DemoLoadMore: J,
    DemoSearch: O,
    DemoSearchRemote: Q,
    DemoSize: X,
    DemoDropdownSlots: Y,
    DemoTriggerElement: Z,
    DemoMultiple: _,
    DemoCheckable: h,
    DemoCheckedStrategy: c,
    DemoPopupVisible: ll,
    DemoFieldNames: tl,
    DemoVirtual: el,
    DemoFallback: ul,
  },
  setup() {
    const { locale: a } = $();
    return {
      locale: a,
      data: {
        meta: { type: 'Component', category: 'Data Entry' },
        title: 'TreeSelect',
        description: 'The tree structure data can be selected.',
      },
      changelog: typeof b === 'undefined' ? void 0 : b,
      getMessage: (m, g) => (a.value === 'zh-CN' ? m : g),
    };
  },
});
function ol(a, l, v, y, m, g) {
  const x = s('demo-basic');
  const T = s('demo-label-in-value');
  const k = s('demo-control');
  const w = s('demo-load-more');
  const D = s('demo-search');
  const F = s('demo-search-remote');
  const C = s('demo-size');
  const P = s('demo-dropdown-slots');
  const S = s('demo-trigger-element');
  const V = s('demo-multiple');
  const W = s('demo-checkable');
  const N = s('demo-checked-strategy');
  const B = s('demo-popup-visible');
  const A = s('demo-field-names');
  const L = s('demo-virtual');
  const E = s('demo-fallback');
  const z = s('anchor-head');
  const r = s('a-th');
  const d = s('a-tr');
  const i = s('a-thead');
  const u = s('a-td');
  const f = s('a-tbody');
  const p = s('a-table');
  const M = s('arco-article');
  return (
    K(),
    j(
      M,
      H(a.data, { changelog: a.changelog }),
      {
        default: e(() => [
          l[212] ||
            (l[212] = o(
              'p',
              null,
              [o('em', null, 'Auto translate by google.')],
              -1
            )),
          t(x),
          t(T),
          t(k),
          t(w),
          t(D),
          t(F),
          t(C),
          t(P),
          t(S),
          t(V),
          t(W),
          t(N),
          t(B),
          t(A),
          t(L),
          t(E),
          t(
            z,
            { level: '2', href: 'API' },
            { default: e(() => l[0] || (l[0] = [n('API')])), _: 1 }
          ),
          l[213] ||
            (l[213] = o(
              'h3',
              { id: 'tree-select Props' },
              [o('code', null, '<tree-select>'), n(' Props')],
              -1
            )),
          t(
            p,
            { class: 'component-api-table' },
            {
              default: e(() => [
                l[151] ||
                  (l[151] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(i, null, {
                  default: e(() => [
                    t(d, null, {
                      default: e(() => [
                        t(r, null, {
                          default: e(() => l[1] || (l[1] = [n('Attribute')])),
                          _: 1,
                        }),
                        t(r, null, {
                          default: e(() => l[2] || (l[2] = [n('Description')])),
                          _: 1,
                        }),
                        t(r, null, {
                          default: e(() => l[3] || (l[3] = [n('Type')])),
                          _: 1,
                        }),
                        t(r, null, {
                          default: e(() => l[4] || (l[4] = [n('Default')])),
                          _: 1,
                        }),
                        t(r, null, {
                          default: e(() => l[5] || (l[5] = [n('version')])),
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
                        t(u, null, {
                          default: e(() => l[6] || (l[6] = [n('disabled')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () => l[7] || (l[7] = [n('Whether to disable')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[8] || (l[8] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[9] || (l[9] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(u, null, {
                          default: e(() => l[10] || (l[10] = [n('loading')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[11] ||
                              (l[11] = [n('Whether it is loading state')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[12] ||
                              (l[12] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[13] || (l[13] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(u, null, {
                          default: e(() => l[14] || (l[14] = [n('error')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[15] ||
                              (l[15] = [n('Whether it is an error state')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[16] ||
                              (l[16] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[17] || (l[17] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(u, null, {
                          default: e(() => l[18] || (l[18] = [n('size')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[19] ||
                              (l[19] = [n('The size of the selection box.')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[20] ||
                              (l[20] = [
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
                        t(u, null, {
                          default: e(
                            () =>
                              l[21] ||
                              (l[21] = [o('code', null, "'medium'", -1)])
                          ),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(u, null, {
                          default: e(() => l[22] || (l[22] = [n('border')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[23] ||
                              (l[23] = [n('Whether to show the border')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[24] ||
                              (l[24] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[25] || (l[25] = [o('code', null, 'true', -1)])
                          ),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(u, null, {
                          default: e(
                            () => l[26] || (l[26] = [n('allow-search')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[27] ||
                              (l[27] = [n('Whether to allow searching')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[28] ||
                              (l[28] = [
                                o(
                                  'code',
                                  null,
                                  'boolean | { retainInputValue?: boolean }',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[29] ||
                              (l[29] = [
                                o(
                                  'code',
                                  null,
                                  'false (single) | true (multiple)',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(u, null, {
                          default: e(
                            () => l[30] || (l[30] = [n('allow-clear')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[31] || (l[31] = [n('Whether to allow clear')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[32] ||
                              (l[32] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[33] || (l[33] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(u, null, {
                          default: e(
                            () => l[34] || (l[34] = [n('placeholder')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () => l[35] || (l[35] = [n('Prompt copy')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[36] || (l[36] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () => l[37] || (l[37] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(u, null, {
                          default: e(
                            () => l[38] || (l[38] = [n('max-tag-count')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[39] ||
                              (l[39] = [
                                n(
                                  'The maximum number of labels displayed, only valid in multi-select mode'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[40] || (l[40] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () => l[41] || (l[41] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(u, null, {
                          default: e(() => l[42] || (l[42] = [n('multiple')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[43] ||
                              (l[43] = [
                                n('Whether to support multiple selection'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[44] ||
                              (l[44] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[45] || (l[45] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(u, null, {
                          default: e(
                            () => l[46] || (l[46] = [n('default-value')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () => l[47] || (l[47] = [n('Default value')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[48] ||
                              (l[48] = [
                                o(
                                  'code',
                                  null,
                                  'string | number | Array<string | number> | LabelValue | LabelValue[]',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () => l[49] || (l[49] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(u, null, {
                          default: e(
                            () =>
                              l[50] ||
                              (l[50] = [
                                n('model-value '),
                                o('strong', null, '(v-model)', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(() => l[51] || (l[51] = [n('Value')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[52] ||
                              (l[52] = [
                                o(
                                  'code',
                                  null,
                                  'string | number | Array<string | number> | LabelValue | LabelValue[]',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () => l[53] || (l[53] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(u, null, {
                          default: e(
                            () => l[54] || (l[54] = [n('field-names')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[55] ||
                              (l[55] = [
                                n('Specify the field name in the node data'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[56] ||
                              (l[56] = [o('code', null, 'TreeFieldNames', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () => l[57] || (l[57] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(u, null, {
                          default: e(() => l[58] || (l[58] = [n('data')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(() => l[59] || (l[59] = [n('Data')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[60] ||
                              (l[60] = [o('code', null, 'TreeNodeData[]', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () => l[61] || (l[61] = [o('code', null, '[]', -1)])
                          ),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(u, null, {
                          default: e(
                            () => l[62] || (l[62] = [n('label-in-value')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[63] ||
                              (l[63] = [
                                n(
                                  'Set the value format. The default is string, when set to true, the value format is: {label: string, value: string}'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[64] ||
                              (l[64] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[65] || (l[65] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(u, null, {
                          default: e(
                            () => l[66] || (l[66] = [n('tree-checkable')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[67] || (l[67] = [n('Whether to show checkbox')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[68] ||
                              (l[68] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[69] || (l[69] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(u, null, {
                          default: e(
                            () => l[70] || (l[70] = [n('tree-check-strictly')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[71] ||
                              (l[71] = [
                                n(
                                  'Whether the parent and child nodes are related'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[72] ||
                              (l[72] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[73] || (l[73] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(u, null, {
                          default: e(
                            () =>
                              l[74] || (l[74] = [n('tree-checked-strategy')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[75] || (l[75] = [n('Customized echo method')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[76] ||
                              (l[76] = [
                                o(
                                  'code',
                                  null,
                                  "'all' | 'parent' | 'child'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[77] || (l[77] = [o('code', null, "'all'", -1)])
                          ),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(u, null, {
                          default: e(
                            () => l[78] || (l[78] = [n('tree-props')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[79] ||
                              (l[79] = [
                                n('Can accept Props of all '),
                                o(
                                  'a',
                                  {
                                    class: 'link',
                                    href: '/vue/component/tree',
                                  },
                                  'Tree',
                                  -1
                                ),
                                n(' components'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[80] ||
                              (l[80] = [
                                o('code', null, 'Partial<TreeProps>', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () => l[81] || (l[81] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(u, null, {
                          default: e(
                            () => l[82] || (l[82] = [n('trigger-props')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[83] ||
                              (l[83] = [
                                n('Can accept Props of all '),
                                o(
                                  'a',
                                  {
                                    class: 'link',
                                    href: '/vue/component/trigger',
                                  },
                                  'Trigger',
                                  -1
                                ),
                                n(' components'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[84] ||
                              (l[84] = [
                                o('code', null, 'Partial<TriggerProps>', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () => l[85] || (l[85] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(u, null, {
                          default: e(
                            () =>
                              l[86] ||
                              (l[86] = [
                                n('popup-visible '),
                                o('strong', null, '(v-model)', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[87] ||
                              (l[87] = [n('Whether the pop-up box is visible')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[88] ||
                              (l[88] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () => l[89] || (l[89] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(u, null, {
                          default: e(
                            () =>
                              l[90] || (l[90] = [n('default-popup-visible')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[91] ||
                              (l[91] = [
                                n('Whether the default pop-up box is visible'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[92] ||
                              (l[92] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[93] || (l[93] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(u, null, {
                          default: e(
                            () => l[94] || (l[94] = [n('dropdown-style')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () => l[95] || (l[95] = [n('Drop-down box style')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[96] ||
                              (l[96] = [o('code', null, 'CSSProperties', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () => l[97] || (l[97] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(u, null, {
                          default: e(
                            () => l[98] || (l[98] = [n('dropdown-class-name')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[99] ||
                              (l[99] = [n('Drop-down box style class')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[100] ||
                              (l[100] = [
                                o('code', null, 'string | string[]', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[101] || (l[101] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(u, null, {
                          default: e(
                            () => l[102] || (l[102] = [n('filter-tree-node')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[103] ||
                              (l[103] = [n('Custom node filter function')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[104] ||
                              (l[104] = [
                                o(
                                  'code',
                                  null,
                                  '(searchKey: string, nodeData: TreeNodeData) => boolean',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[105] || (l[105] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(u, null, {
                          default: e(
                            () => l[106] || (l[106] = [n('load-more')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[107] || (l[107] = [n('Load data dynamically')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[108] ||
                              (l[108] = [
                                o(
                                  'code',
                                  null,
                                  '(nodeData: TreeNodeData) => Promise<void>',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[109] || (l[109] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(u, null, {
                          default: e(
                            () => l[110] || (l[110] = [n('disable-filter')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[111] ||
                              (l[111] = [n('Disable internal filtering logic')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[112] ||
                              (l[112] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[113] ||
                              (l[113] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(u, null, {
                          default: e(
                            () => l[114] || (l[114] = [n('popup-container')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[115] ||
                              (l[115] = [n('Mount container for pop-up box')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[116] ||
                              (l[116] = [
                                o('code', null, 'string | HTMLElement', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[117] || (l[117] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(u, null, {
                          default: e(
                            () => l[118] || (l[118] = [n('fallback-option')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[119] ||
                              (l[119] = [
                                n(
                                  'Customize node data for keys that do not match options'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[120] ||
                              (l[120] = [
                                o(
                                  'code',
                                  null,
                                  'boolean | ((key: number | string) => TreeNodeData | boolean)',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[121] || (l[121] = [o('code', null, 'true', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(() => l[122] || (l[122] = [n('2.22.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(u, null, {
                          default: e(
                            () => l[123] || (l[123] = [n('selectable')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[124] ||
                              (l[124] = [
                                n(
                                  'Set the nodes that can be selected, all can be selected by default'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[125] ||
                              (l[125] = [
                                o(
                                  'code',
                                  null,
                                  "boolean| 'leaf'| (( node: TreeNodeData, info: { isLeaf: boolean; level: number } ) => boolean)",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[126] || (l[126] = [o('code', null, 'true', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(() => l[127] || (l[127] = [n('2.27.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(u, null, {
                          default: e(
                            () => l[128] || (l[128] = [n('scrollbar')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[129] ||
                              (l[129] = [
                                n('Whether to enable virtual scroll bar'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[130] ||
                              (l[130] = [
                                o('code', null, 'boolean | ScrollbarProps', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[131] || (l[131] = [o('code', null, 'true', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(() => l[132] || (l[132] = [n('2.39.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(u, null, {
                          default: e(
                            () =>
                              l[133] || (l[133] = [n('show-header-on-empty')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[134] ||
                              (l[134] = [
                                n(
                                  'Whether to display the header in the empty state'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[135] ||
                              (l[135] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[136] ||
                              (l[136] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(u, null, {
                          default: e(
                            () =>
                              l[137] || (l[137] = [n('show-footer-on-empty')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[138] ||
                              (l[138] = [
                                n(
                                  'Whether to display the footer in the empty state'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[139] ||
                              (l[139] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[140] ||
                              (l[140] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(u, null, {
                          default: e(
                            () =>
                              l[141] ||
                              (l[141] = [
                                n('input-value '),
                                o('strong', null, '(v-model)', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[142] || (l[142] = [n('The value of the input')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[143] ||
                              (l[143] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[144] || (l[144] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(() => l[145] || (l[145] = [n('2.55.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(u, null, {
                          default: e(
                            () =>
                              l[146] || (l[146] = [n('default-input-value')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[147] ||
                              (l[147] = [
                                n(
                                  'The default value of the input (uncontrolled mode)'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[148] ||
                              (l[148] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[149] || (l[149] = [o('code', null, "''", -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(() => l[150] || (l[150] = [n('2.55.0')])),
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
          l[214] ||
            (l[214] = o(
              'h3',
              { id: 'tree-select Events' },
              [o('code', null, '<tree-select>'), n(' Events')],
              -1
            )),
          t(
            p,
            { class: 'component-api-table' },
            {
              default: e(() => [
                l[172] ||
                  (l[172] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(i, null, {
                  default: e(() => [
                    t(d, null, {
                      default: e(() => [
                        t(r, null, {
                          default: e(
                            () => l[152] || (l[152] = [n('Event Name')])
                          ),
                          _: 1,
                        }),
                        t(r, null, {
                          default: e(
                            () => l[153] || (l[153] = [n('Description')])
                          ),
                          _: 1,
                        }),
                        t(r, null, {
                          default: e(
                            () => l[154] || (l[154] = [n('Parameters')])
                          ),
                          _: 1,
                        }),
                        t(r, null, {
                          default: e(() => l[155] || (l[155] = [n('version')])),
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
                        t(u, null, {
                          default: e(() => l[156] || (l[156] = [n('change')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[157] ||
                              (l[157] = [n('Trigger when the value changes')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[158] ||
                              (l[158] = [
                                n('value: '),
                                o(
                                  'code',
                                  null,
                                  'string | number | LabelValue | Array<string | number> | LabelValue[] | undefined',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(u, null, {
                          default: e(
                            () =>
                              l[159] || (l[159] = [n('popup-visible-change')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[160] ||
                              (l[160] = [
                                n(
                                  'Triggered when the status of the drop-down box changes'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[161] ||
                              (l[161] = [
                                n('visible: '),
                                o('code', null, 'boolean', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(u, null, {
                          default: e(() => l[162] || (l[162] = [n('search')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[163] ||
                              (l[163] = [
                                n('Triggered when the search value changes'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[164] ||
                              (l[164] = [
                                n('searchKey: '),
                                o('code', null, 'string', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(u, null, {
                          default: e(() => l[165] || (l[165] = [n('clear')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[166] ||
                              (l[166] = [n('Triggered when clear is clicked')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(() => l[167] || (l[167] = [n('-')])),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(u, null, {
                          default: e(
                            () => l[168] || (l[168] = [n('input-value-change')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[169] ||
                              (l[169] = [
                                n(
                                  'Triggered when the value of the input changes'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[170] ||
                              (l[170] = [
                                n('inputValue: '),
                                o('code', null, 'string', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(() => l[171] || (l[171] = [n('2.55.0')])),
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
          l[215] ||
            (l[215] = o(
              'h3',
              { id: 'tree-select Slots' },
              [o('code', null, '<tree-select>'), n(' Slots')],
              -1
            )),
          t(
            p,
            { class: 'component-api-table' },
            {
              default: e(() => [
                l[211] ||
                  (l[211] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(i, null, {
                  default: e(() => [
                    t(d, null, {
                      default: e(() => [
                        t(r, null, {
                          default: e(
                            () => l[173] || (l[173] = [n('Slot Name')])
                          ),
                          _: 1,
                        }),
                        t(r, null, {
                          default: e(
                            () => l[174] || (l[174] = [n('Description')])
                          ),
                          _: 1,
                        }),
                        t(r, null, {
                          default: e(
                            () => l[175] || (l[175] = [n('Parameters')])
                          ),
                          _: 1,
                        }),
                        t(r, null, {
                          default: e(() => l[176] || (l[176] = [n('version')])),
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
                        t(u, null, {
                          default: e(() => l[177] || (l[177] = [n('trigger')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[178] || (l[178] = [n('Custom trigger element')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(() => l[179] || (l[179] = [n('-')])),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(u, null, {
                          default: e(() => l[180] || (l[180] = [n('prefix')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(() => l[181] || (l[181] = [n('Prefix')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(() => l[182] || (l[182] = [n('-')])),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(u, null, {
                          default: e(() => l[183] || (l[183] = [n('label')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () => l[184] || (l[184] = [n('Custom Label')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[185] ||
                              (l[185] = [
                                n('data: '),
                                o('code', null, 'mixed', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(u, null, {
                          default: e(() => l[186] || (l[186] = [n('header')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[187] ||
                              (l[187] = [n('The header of the drop-down box')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(() => l[188] || (l[188] = [n('-')])),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(u, null, {
                          default: e(() => l[189] || (l[189] = [n('loader')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[190] ||
                              (l[190] = [
                                n(
                                  'Customizing the content displayed during loading'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(() => l[191] || (l[191] = [n('-')])),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(u, null, {
                          default: e(() => l[192] || (l[192] = [n('empty')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[193] ||
                              (l[193] = [n('Custom empty data display')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(() => l[194] || (l[194] = [n('-')])),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(u, null, {
                          default: e(() => l[195] || (l[195] = [n('footer')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[196] ||
                              (l[196] = [n('The footer of the drop-down box')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(() => l[197] || (l[197] = [n('-')])),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(u, null, {
                          default: e(
                            () => l[198] || (l[198] = [n('tree-slot-extra')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[199] ||
                              (l[199] = [
                                n(
                                  'Render additional node content of the tree component'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(() => l[200] || (l[200] = [n('-')])),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(u, null, {
                          default: e(
                            () => l[201] || (l[201] = [n('tree-slot-title')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[202] ||
                              (l[202] = [
                                n(
                                  'Custom the node title of the tree component'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[203] ||
                              (l[203] = [
                                n('title: '),
                                o('code', null, 'string', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(u, null, {
                          default: e(
                            () => l[204] || (l[204] = [n('tree-slot-icon')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[205] ||
                              (l[205] = [
                                n('Custom node icon for the tree component'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[206] ||
                              (l[206] = [
                                n('node: '),
                                o('code', null, 'TreeNodeData', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(() => l[207] || (l[207] = [n('2.18.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(u, null, {
                          default: e(
                            () =>
                              l[208] ||
                              (l[208] = [n('tree-slot-switcher-icon')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[209] ||
                              (l[209] = [
                                n(
                                  'Custom switcher icon for the tree component'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(() => l[210] || (l[210] = [n('-')])),
                          _: 1,
                        }),
                        t(u),
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
const rl = I(nl, [['render', ol]]);
export { rl as default };
