import {
  _ as z,
  d as I,
  u as C,
  r as i,
  o as N,
  c as V,
  w as e,
  e as o,
  a as t,
  b as u,
  m as L,
} from './index.9c61ea88.js';
import {
  D as O,
  a as $,
  b as j,
  c as R,
  d as q,
  e as G,
  f as K,
  g as U,
  h as H,
  i as J,
  j as Q,
} from './password.62d1f898.js';

const b = [
  {
    version: '2.57.0',
    date: '2025-03-10',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>Added &#39;prepend&#39; and &#39;append&#39; attributes (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/3452">#3452</a>)</p>
`,
        ],
      },
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the preValue calculation error in the input component (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/3427">#3427</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.55.3',
    date: '2024-06-07',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>fix display of allow-clear input button in read-only state (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/3172">#3172</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.54.3',
    date: '2024-01-19',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>fix spelling mistakes (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2924">#2924</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.54.2',
    date: '2024-01-11',
    list: [
      {
        type: 'style',
        typeText: '\u{1F485} Style',
        list: [
          `<p>Fix overlapping styles of neighboring components in input-group (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2889">#2889</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.54.1',
    date: '2023-12-28',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>Enhance the input-password props (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2784">#2784</a>)</p>
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
          `<p>fix issue with content modification at maximum value using non-input method (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2188">#2188</a>)</p>
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
          `<p>Fix the problem that the custom calculation character length will not be limited by <code>max-length</code> (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1942">#1942</a>)</p>
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
          `<p>Fix <code>change</code> event trigger logic problem (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1990">#1990</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.39.2',
    date: '2022-12-02',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix change event triggering issue and clear clearing issue (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1912">#1912</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.38.1',
    date: '2022-11-04',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem of component cursor reporting error in some scenarios (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1820">#1820</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.37.3',
    date: '2022-09-23',
    list: [
      {
        type: 'enhancement',
        typeText: '\u{1F48E} Enhancement',
        list: [
          `<p>It is no longer possible to input content from the middle when optimizing the max limit (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1672">#1672</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.36.0',
    date: '2022-09-02',
    list: [
      {
        type: 'enhancement',
        typeText: '\u{1F48E} Enhancement',
        list: [
          `<p>Modify password input box icon (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1436">#1436</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.30.0',
    date: '2022-06-10',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem that form validation will not be triggered after input method (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1263">#1263</a>)</p>
`,
          `<p>Fixed height issue when using front and back labels in Drawer (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1263">#1263</a>)</p>
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
          `<p>Add input-attrs attribute (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1106">#1106</a>)</p>
`,
          `<p>Modify the blur event trigger sequence to after change (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1106">#1106</a>)</p>
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
        type: 'enhancement',
        typeText: '\u{1F48E} Enhancement',
        list: [
          `<p>The <code>clear</code> event of the input class component will also trigger the <code>change</code> event (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/951">#951</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.18.0-beta.3',
    date: '2022-02-26',
    list: [
      {
        type: 'enhancement',
        typeText: '\u{1F48E} Enhancement',
        list: [
          `<p>modelValue support null (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/743">#743</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.17.0',
    date: '2022-02-11',
    list: [
      {
        type: 'enhancement',
        typeText: '\u{1F48E} Enhancement',
        list: [
          `<p>Increase the transparent transmission of some original attributes of the input element (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/664">#664</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.16.2',
    date: '2022-01-24',
    list: [
      {
        type: 'style',
        typeText: '\u{1F485} Style',
        list: [
          `<p>Fix <code>input-group</code> with rounded corners of input components (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/640">#640</a>)</p>
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
          `<p>The <code>&lt;input-search&gt;</code> component adds the ability to customize the content of the search button (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/625">#625</a>)</p>
`,
        ],
      },
      {
        type: 'style',
        typeText: '\u{1F485} Style',
        list: [
          `<p>Fix <code>&lt;input-group&gt;</code> component wrapping <code>&lt;select&gt;</code> component style issue (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/588">#588</a>)</p>
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
        type: 'style',
        typeText: '\u{1F485} Style',
        list: [
          `<p>Fix the problem of wrong background color in dark mode (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/560">#560</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.14.3',
    date: '2022-01-12',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem that the input-search attribute is invalid in button mode (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/552">#552</a>)</p>
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
          `<p>Fix the problem of wrong font color in disabled state in Safari browser (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/536">#536</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.14.0',
    date: '2022-01-07',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix change event trigger issue (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/516">#516</a>)</p>
`,
          `<p>Fix the problem that the style setting is in the wrong position when there are front and rear tags (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/516">#516</a>)</p>
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
          `<p>The change event is only triggered when the value changes (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/452">#452</a>)</p>
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
    version: '2.7.0',
    date: '2021-11-26',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem that the enter key of the numeric keyboard does not trigger <code>press-enter</code> (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/273">#273</a>)</p>
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
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>Add <code>wordLength</code> prop (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/91">#91</a>)</p>
`,
        ],
      },
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Remove <code>preventDefault</code> of keyDown event (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/84">#84</a>)</p>
`,
          `<p>Fix the issue that the <code>a-input-number</code> component <code>model-value</code> does not take effect when the default value is 0 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/75">#75</a>)</p>
`,
          `<p>Fix the problem that <code>input-search</code> and <code>input-password</code> do not support <code>slot</code> (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/63">#63</a>)</p>
`,
          `<p>Fix the problem that the cursor position is lost when <code>input-password</code> is switched to the visible state of the password (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/63">#63</a>)</p>
`,
        ],
      },
      {
        type: 'style',
        typeText: '\u{1F485} Style',
        list: [
          `<p>Modify the style of <code>clear-btn</code> to solve the problem that <code>select-view</code> may jitter (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/70">#70</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const X = I({
  name: 'ArcoMain',
  components: {
    DemoBasic: O,
    DemoStatus: $,
    DemoSize: j,
    DemoPrefix: R,
    DemoPrepend: q,
    DemoWordLimit: G,
    DemoGroup: K,
    DemoSearch: U,
    DemoSearchButton: H,
    DemoSearchLoading: J,
    DemoPassword: Q,
  },
  setup() {
    const { locale: f } = C();
    return {
      locale: f,
      data: {
        meta: { type: 'Component', category: 'Data Entry' },
        title: 'Input',
        description:
          'Basic form components have been expanded on the basis of native controls and can be used in combination.',
      },
      changelog: typeof b === 'undefined' ? void 0 : b,
      getMessage: (g, m) => (f.value === 'zh-CN' ? g : m),
    };
  },
});
function Y(f, l, x, v, g, m) {
  const y = i('demo-basic');
  const w = i('demo-status');
  const k = i('demo-size');
  const T = i('demo-prefix');
  const F = i('demo-prepend');
  const D = i('demo-word-limit');
  const E = i('demo-group');
  const B = i('demo-search');
  const P = i('demo-search-button');
  const S = i('demo-search-loading');
  const A = i('demo-password');
  const M = i('anchor-head');
  const s = i('a-th');
  const d = i('a-tr');
  const r = i('a-thead');
  const n = i('a-td');
  const a = i('a-tbody');
  const p = i('a-table');
  const W = i('arco-article');
  return (
    N(),
    V(
      W,
      L(f.data, { changelog: f.changelog }),
      {
        default: e(() => [
          l[184] ||
            (l[184] = o(
              'p',
              null,
              [o('em', null, 'Auto translate by google.')],
              -1
            )),
          t(y),
          t(w),
          t(k),
          t(T),
          t(F),
          t(D),
          t(E),
          t(B),
          t(P),
          t(S),
          t(A),
          t(
            M,
            { level: '2', href: 'API' },
            { default: e(() => l[0] || (l[0] = [u('API')])), _: 1 }
          ),
          l[185] ||
            (l[185] = o(
              'h3',
              { id: 'input Props' },
              [o('code', null, '<input>'), u(' Props')],
              -1
            )),
          t(
            p,
            { class: 'component-api-table' },
            {
              default: e(() => [
                l[70] ||
                  (l[70] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(r, null, {
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
                t(a, null, {
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
                          default: e(() => l[14] || (l[14] = [u('size')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[15] || (l[15] = [u('Input size')])
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
                                  "'mini' | 'small' | 'medium' | 'large'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[17] ||
                              (l[17] = [o('code', null, "'medium'", -1)])
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
                            () => l[18] || (l[18] = [u('allow-clear')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[19] ||
                              (l[19] = [
                                u('Whether to allow the input to be cleared'),
                              ])
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
                          default: e(() => l[22] || (l[22] = [u('disabled')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[23] || (l[23] = [u('Whether to disable')])
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
                          default: e(() => l[26] || (l[26] = [u('readonly')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[27] || (l[27] = [u('Whether it is read-only')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[28] ||
                              (l[28] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
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
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[30] || (l[30] = [u('error')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[31] ||
                              (l[31] = [u('Whether it is an error state')])
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
                            () => l[34] || (l[34] = [u('placeholder')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[35] || (l[35] = [u('Prompt text')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[36] || (l[36] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[37] || (l[37] = [o('code', null, '-', -1)])
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
                            () => l[38] || (l[38] = [u('max-length')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[39] ||
                              (l[39] = [
                                u(
                                  'Enter the maximum length of the value, the errorOnly attribute was added in version 2.12.0'
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
                                  'number | { length: number; errorOnly?: boolean }',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[41] || (l[41] = [o('code', null, '0', -1)])
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
                            () => l[42] || (l[42] = [u('show-word-limit')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[43] ||
                              (l[43] = [u('Whether to display word count')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[44] ||
                              (l[44] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
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
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () => l[46] || (l[46] = [u('word-length')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[47] ||
                              (l[47] = [u('Calculation method of word length')])
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
                                  '(value: string) => number',
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
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () => l[50] || (l[50] = [u('word-slice')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[51] ||
                              (l[51] = [
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
                              l[52] ||
                              (l[52] = [
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
                            () => l[53] || (l[53] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[54] || (l[54] = [u('2.12.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () => l[55] || (l[55] = [u('input-attrs')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[56] ||
                              (l[56] = [
                                u('Attributes of inner input elements'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[57] || (l[57] = [o('code', null, 'object', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[58] || (l[58] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[59] || (l[59] = [u('2.27.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[60] || (l[60] = [u('prepend')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[61] || (l[61] = [u('Prepend')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[62] || (l[62] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[63] || (l[63] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[64] || (l[64] = [u('2.57.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[65] || (l[65] = [u('append')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[66] || (l[66] = [u('Append')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[67] || (l[67] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[68] || (l[68] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[69] || (l[69] = [u('2.57.0')])),
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
              { id: 'input Events' },
              [o('code', null, '<input>'), u(' Events')],
              -1
            )),
          t(
            p,
            { class: 'component-api-table' },
            {
              default: e(() => [
                l[92] ||
                  (l[92] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(r, null, {
                  default: e(() => [
                    t(d, null, {
                      default: e(() => [
                        t(s, null, {
                          default: e(
                            () => l[71] || (l[71] = [u('Event Name')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(
                            () => l[72] || (l[72] = [u('Description')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(
                            () => l[73] || (l[73] = [u('Parameters')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(a, null, {
                  default: e(() => [
                    t(d, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[74] || (l[74] = [u('input')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[75] ||
                              (l[75] = [u('Triggered when the user enters')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[76] ||
                              (l[76] = [
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
                          default: e(() => l[77] || (l[77] = [u('change')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[78] ||
                              (l[78] = [
                                u(
                                  'Only triggered when the input box is out of focus or when you press Enter'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[79] ||
                              (l[79] = [
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
                          default: e(
                            () => l[80] || (l[80] = [u('press-enter')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[81] ||
                              (l[81] = [
                                u('Triggered when the user presses enter'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[82] ||
                              (l[82] = [
                                u('ev: '),
                                o('code', null, 'KeyboardEvent', -1),
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
                          default: e(() => l[83] || (l[83] = [u('clear')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[84] ||
                              (l[84] = [
                                u(
                                  'Triggered when the user clicks the clear button'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[85] ||
                              (l[85] = [
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
                          default: e(() => l[86] || (l[86] = [u('focus')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[87] ||
                              (l[87] = [
                                u('Triggered when the input box gets focus'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[88] ||
                              (l[88] = [
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
                          default: e(() => l[89] || (l[89] = [u('blur')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[90] ||
                              (l[90] = [
                                u('Triggered when the input box loses focus'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[91] ||
                              (l[91] = [
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
          l[187] ||
            (l[187] = o(
              'h3',
              { id: 'input Methods' },
              [o('code', null, '<input>'), u(' Methods')],
              -1
            )),
          t(
            p,
            { class: 'component-api-table' },
            {
              default: e(() => [
                l[105] ||
                  (l[105] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(r, null, {
                  default: e(() => [
                    t(d, null, {
                      default: e(() => [
                        t(s, null, {
                          default: e(() => l[93] || (l[93] = [u('Method')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(
                            () => l[94] || (l[94] = [u('Description')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(
                            () => l[95] || (l[95] = [u('Parameters')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(() => l[96] || (l[96] = [u('Return')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(a, null, {
                  default: e(() => [
                    t(d, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[97] || (l[97] = [u('focus')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[98] || (l[98] = [u('Make the input box focus')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[99] || (l[99] = [u('-')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[100] || (l[100] = [u('-')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[101] || (l[101] = [u('blur')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[102] ||
                              (l[102] = [u('Make the input box lose focus')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[103] || (l[103] = [u('-')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[104] || (l[104] = [u('-')])),
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
          l[188] ||
            (l[188] = o(
              'h3',
              { id: 'input Slots' },
              [o('code', null, '<input>'), u(' Slots')],
              -1
            )),
          t(
            p,
            { class: 'component-api-table' },
            {
              default: e(() => [
                l[121] ||
                  (l[121] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(r, null, {
                  default: e(() => [
                    t(d, null, {
                      default: e(() => [
                        t(s, null, {
                          default: e(
                            () => l[106] || (l[106] = [u('Slot Name')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(
                            () => l[107] || (l[107] = [u('Description')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(
                            () => l[108] || (l[108] = [u('Parameters')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(a, null, {
                  default: e(() => [
                    t(d, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[109] || (l[109] = [u('append')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[110] || (l[110] = [u('Append')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[111] || (l[111] = [u('-')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[112] || (l[112] = [u('prepend')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[113] || (l[113] = [u('Prepend')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[114] || (l[114] = [u('-')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[115] || (l[115] = [u('suffix')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[116] || (l[116] = [u('Suffix')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[117] || (l[117] = [u('-')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[118] || (l[118] = [u('prefix')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[119] || (l[119] = [u('Prefix')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[120] || (l[120] = [u('-')])),
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
              { id: 'input-password Props' },
              [o('code', null, '<input-password>'), u(' Props')],
              -1
            )),
          t(
            p,
            { class: 'component-api-table' },
            {
              default: e(() => [
                l[138] ||
                  (l[138] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(r, null, {
                  default: e(() => [
                    t(d, null, {
                      default: e(() => [
                        t(s, null, {
                          default: e(
                            () => l[122] || (l[122] = [u('Attribute')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(
                            () => l[123] || (l[123] = [u('Description')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(() => l[124] || (l[124] = [u('Type')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(() => l[125] || (l[125] = [u('Default')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(a, null, {
                  default: e(() => [
                    t(d, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () =>
                              l[126] ||
                              (l[126] = [
                                u('visibility '),
                                o('strong', null, '(v-model)', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[127] || (l[127] = [u('Whether is visible')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[128] ||
                              (l[128] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[129] || (l[129] = [o('code', null, '-', -1)])
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
                            () => l[130] || (l[130] = [u('default-visibility')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[131] || (l[131] = [u('Default visibility')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[132] ||
                              (l[132] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[133] || (l[133] = [o('code', null, 'true', -1)])
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
                            () => l[134] || (l[134] = [u('invisible-button')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[135] ||
                              (l[135] = [u('Whether to show visible buttons')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[136] ||
                              (l[136] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[137] || (l[137] = [o('code', null, 'true', -1)])
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
          l[190] ||
            (l[190] = o(
              'h3',
              { id: 'input-password Events' },
              [o('code', null, '<input-password>'), u(' Events')],
              -1
            )),
          t(
            p,
            { class: 'component-api-table' },
            {
              default: e(() => [
                l[145] ||
                  (l[145] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(r, null, {
                  default: e(() => [
                    t(d, null, {
                      default: e(() => [
                        t(s, null, {
                          default: e(
                            () => l[139] || (l[139] = [u('Event Name')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(
                            () => l[140] || (l[140] = [u('Description')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(
                            () => l[141] || (l[141] = [u('Parameters')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(a, null, {
                  default: e(() => [
                    t(d, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () => l[142] || (l[142] = [u('visibility-change')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[143] ||
                              (l[143] = [u('Callback when visibility changes')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[144] ||
                              (l[144] = [
                                u('visible: '),
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
          l[191] ||
            (l[191] = o(
              'h3',
              { id: 'input-search Props' },
              [o('code', null, '<input-search>'), u(' Props')],
              -1
            )),
          t(
            p,
            { class: 'component-api-table' },
            {
              default: e(() => [
                l[176] ||
                  (l[176] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(r, null, {
                  default: e(() => [
                    t(d, null, {
                      default: e(() => [
                        t(s, null, {
                          default: e(
                            () => l[146] || (l[146] = [u('Attribute')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(
                            () => l[147] || (l[147] = [u('Description')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(() => l[148] || (l[148] = [u('Type')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(() => l[149] || (l[149] = [u('Default')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(() => l[150] || (l[150] = [u('version')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(a, null, {
                  default: e(() => [
                    t(d, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () => l[151] || (l[151] = [u('search-button')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[152] ||
                              (l[152] = [
                                u('Whether it is the rear button mode'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[153] ||
                              (l[153] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[154] ||
                              (l[154] = [o('code', null, 'false', -1)])
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
                          default: e(() => l[155] || (l[155] = [u('loading')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[156] ||
                              (l[156] = [u('Whether it is loading state')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[157] ||
                              (l[157] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[158] ||
                              (l[158] = [o('code', null, 'false', -1)])
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
                            () => l[159] || (l[159] = [u('disabled')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[160] || (l[160] = [u('Whether to disable')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[161] ||
                              (l[161] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[162] ||
                              (l[162] = [o('code', null, 'false', -1)])
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
                          default: e(() => l[163] || (l[163] = [u('size')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[164] || (l[164] = [u('Input size')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[165] ||
                              (l[165] = [
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
                        t(n, null, {
                          default: e(
                            () =>
                              l[166] ||
                              (l[166] = [o('code', null, "'medium'", -1)])
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
                            () => l[167] || (l[167] = [u('button-text')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[168] ||
                              (l[168] = [
                                u(
                                  'The text of the search button will replace the original icon after use'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[169] ||
                              (l[169] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[170] || (l[170] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[171] || (l[171] = [u('2.16.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () => l[172] || (l[172] = [u('button-props')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[173] || (l[173] = [u('Button props')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[174] ||
                              (l[174] = [o('code', null, 'ButtonProps', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[175] || (l[175] = [o('code', null, '-', -1)])
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
          l[192] ||
            (l[192] = o(
              'h3',
              { id: 'input-search Events' },
              [o('code', null, '<input-search>'), u(' Events')],
              -1
            )),
          t(
            p,
            { class: 'component-api-table' },
            {
              default: e(() => [
                l[183] ||
                  (l[183] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(r, null, {
                  default: e(() => [
                    t(d, null, {
                      default: e(() => [
                        t(s, null, {
                          default: e(
                            () => l[177] || (l[177] = [u('Event Name')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(
                            () => l[178] || (l[178] = [u('Description')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(
                            () => l[179] || (l[179] = [u('Parameters')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(a, null, {
                  default: e(() => [
                    t(d, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[180] || (l[180] = [u('search')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[181] ||
                              (l[181] = [
                                u(
                                  'Triggered when the search button is clicked'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[182] ||
                              (l[182] = [
                                u('value: '),
                                o('code', null, 'string', -1),
                                o('br', null, null, -1),
                                u('ev: '),
                                o('code', null, 'MouseEvent', -1),
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
        ]),
        _: 1,
      },
      16,
      ['changelog']
    )
  );
}
const _ = z(X, [['render', Y]]);
export { _ as default };
