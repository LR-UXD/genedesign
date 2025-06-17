import {
  _ as L,
  d as V,
  u as M,
  r as i,
  o as I,
  c as $,
  w as e,
  e as d,
  a as t,
  b as u,
  m as j,
} from './index.9c61ea88.js';
import {
  D as U,
  a as H,
  b as q,
  c as G,
  d as J,
  e as K,
  f as Q,
  g as X,
  h as Y,
  i as Z,
  j as _,
  k as h,
  l as c,
  m as ll,
  n as tl,
} from './virtual.9d7410cd.js';

const b = [
  {
    version: '2.56.3',
    date: '2024-10-25',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>fix custom empty slot not working in some cases (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/3315">#3315</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.54.0',
    date: '2023-12-15',
    list: [
      {
        type: 'enhancement',
        typeText: '\u{1F48E} Enhancement',
        list: [
          `<p>Modifying <code>multiple</code> and <code>pathMode</code> will trigger changes in the binding value (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2867">#2867</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.51.1',
    date: '2023-09-08',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>fix empty state in Cascader Virtual list (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2686">#2686</a>)</p>
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
          `<p>Add virtual list support (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2577">#2577</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.46.0',
    date: '2023-05-12',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>support full path search (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2363">#2363</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.45.1',
    date: '2023-04-14',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the abnormal display of search results when the width of the control is short (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2326">#2326</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  { version: '2.40.0', date: '2022-12-09', list: [], extra: [] },
  {
    version: '2.38.0-beta.2',
    date: '2022-10-21',
    list: [
      {
        type: 'enhancement',
        typeText: '\u{1F48E} Enhancement',
        list: [
          `<p>When the submenus are all disabled when optimizing multi-selection, the parent prohibits the selection (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1771">#1771</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.34.1',
    date: '2022-08-05',
    list: [
      {
        type: 'style',
        typeText: '\u{1F485} Style',
        list: [
          `<p>Fix style issue when dropdown panel is empty (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1483">#1483</a>)</p>
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
          `<p>Fixed the wrong position of the horizontal scroll bar of the search drop-down menu (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1438">#1438</a>)</p>
`,
          `<p>Fix the problem that the cursor cannot be used after inputting content in search mode (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1438">#1438</a>)</p>
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
          `<p>Fix the problem that the value of the number type fails to match (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1230">#1230</a>)</p>
`,
        ],
      },
      {
        type: 'enhancement',
        typeText: '\u{1F48E} Enhancement',
        list: [
          `<p>cascader-panel adds keyboard events (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1230">#1230</a>)</p>
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
        type: 'attention',
        typeText: '\u26A0\uFE0F Important Attention',
        list: [
          `<p>Exposed parameter changed from CascaderOptionInfo to CascaderOption. Internal data is no longer included, user data is not affected (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1201">#1201</a>)</p>
`,
        ],
      },
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>Option value supports object format, add <code>value-key</code> attribute (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1201">#1201</a>)</p>
`,
          `<p>Add the <code>fallback</code> attribute to customize the display of options that do not exist (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1201">#1201</a>)</p>
`,
          `<p>Add the <code>expand-child</code> property to expand the submenu (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1201">#1201</a>)</p>
`,
        ],
      },
      {
        type: 'enhancement',
        typeText: '\u{1F48E} Enhancement',
        list: [
          `<p>Optimize submenu expansion logic and keyboard events (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1201">#1201</a>)</p>
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
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem that the multi-selection state is displayed incorrectly in the case of lazy loading (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1177">#1177</a>)</p>
`,
          `<p>Fix the problem that the lazy loading function is called multiple times when the selection box is clicked (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1177">#1177</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.25.2',
    date: '2022-04-27',
    list: [
      {
        type: 'style',
        typeText: '\u{1F485} Style',
        list: [
          `<p>Fixed the width of the search drop-down menu when it was blank (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1056">#1056</a>)</p>
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
          `<p>Fix the problem that the half-selected state of the checkbox is displayed incorrectly (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/963">#963</a>)</p>
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
          `<p>add empty slot (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/952">#952</a>)</p>
`,
        ],
      },
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem that lazy loaded isLeaf is invalid in version 2.22.0 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/952">#952</a>)</p>
`,
          `<p>Fixed an issue where the options property could not trigger an update in some cases (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/952">#952</a>)</p>
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
          `<p>Added <code>field-names</code> attribute to allow custom fields (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/912">#912</a>)</p>
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
          `<p>Add <code>cascader-panel</code> component (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/842">#842</a>)</p>
`,
        ],
      },
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem that the selected path of the drop-down menu may not match the current value (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/843">#843</a>)</p>
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
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>Added <code>#option</code>, <code>#label</code> slots (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/781">#781</a>)</p>
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
          `<p>Added <code>search-delay</code> property and defaulted to <code>500ms</code> (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/729">#729</a>)</p>
`,
          `<p>Add the <code>search-option-only-label</code> attribute and modify the default display path label of the options in the search drop-down menu (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/729">#729</a>)</p>
`,
        ],
      },
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem that the selection box display is not updated after the option is updated (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/727">#727</a>)</p>
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
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fixed an issue where disabled items could still be selected via radio selectors in strict mode (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/701">#701</a>)</p>
`,
          `<p>Fixed an issue where search results in strict mode did not include path options (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/701">#701</a>)</p>
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
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fixed an issue where the search could not be selected in <code>check-strictly</code> mode (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/627">#627</a>)</p>
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
          `<p>Add loading prop (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/558">#558</a>)</p>
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
          `<p>Added <code>load-more</code> attribute to support lazy loading of data (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/476">#476</a>)</p>
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
          `<p>Fix the problem that the level totalLevel is calculated incorrectly (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/399">#399</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.10.1',
    date: '2021-12-14',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem of counting errors when there is an empty sub-menu in multi-select mode (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/388">#388</a>)</p>
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
        type: 'enhancement',
        typeText: '\u{1F48E} Enhancement',
        list: [
          `<p>When the input box is editable, clicking will not close the drop-down menu (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/348">#348</a>)</p>
`,
        ],
      },
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>Add checkStrictly prop (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/349">#349</a>)</p>
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
          `<p>Add support for <code>tagProps</code> (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/307">#307</a>)</p>
`,
        ],
      },
      {
        type: 'style',
        typeText: '\u{1F485} Style',
        list: [
          `<p>Remove the option to select the bold effect (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/308">#308</a>)</p>
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
          `<p>Add <code>trigger-props</code> property (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/197">#197</a>)</p>
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
        type: 'attention',
        typeText: '\u26A0\uFE0F Important Attention',
        list: [
          `<p>Move the custom rendering of <code>options.label</code> added in 2.4.0 to <code>options.render</code> (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/183">#183</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.4.0',
    date: '2021-11-17',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>Add <code>options.value</code> number type and <code>options.label</code> custom rendering support (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/176">#176</a>)</p>
`,
        ],
      },
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem that the search input box cannot be scrolled (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/175">#175</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const el = V({
  name: 'ArcoMain',
  components: {
    DemoBasic: U,
    DemoClear: H,
    DemoDisabled: q,
    DemoFormat: G,
    DemoMultiple: J,
    DemoCheckStrictly: K,
    DemoLoading: Q,
    DemoLazyLoad: X,
    DemoSearch: Y,
    DemoPath: Z,
    DemoFallback: _,
    DemoFieldNames: h,
    DemoExpand: c,
    DemoPanel: ll,
    DemoVirtual: tl,
  },
  setup() {
    const { locale: p } = M();
    return {
      locale: p,
      data: {
        meta: { type: 'Component', category: 'Data Entry' },
        title: 'Cascader',
        description:
          'Refers to the use of multi-level classification to separate the options when the number of selector options is large.',
      },
      changelog: typeof b === 'undefined' ? void 0 : b,
      getMessage: (g, m) => (p.value === 'zh-CN' ? g : m),
    };
  },
});
function nl(p, l, y, v, g, m) {
  const x = i('demo-basic');
  const k = i('demo-clear');
  const w = i('demo-disabled');
  const T = i('demo-format');
  const F = i('demo-multiple');
  const D = i('demo-check-strictly');
  const C = i('demo-loading');
  const A = i('demo-lazy-load');
  const O = i('demo-search');
  const P = i('demo-path');
  const E = i('demo-fallback');
  const z = i('demo-field-names');
  const B = i('demo-expand');
  const R = i('demo-panel');
  const W = i('demo-virtual');
  const S = i('anchor-head');
  const s = i('a-th');
  const o = i('a-tr');
  const a = i('a-thead');
  const n = i('a-td');
  const r = i('a-tbody');
  const f = i('a-table');
  const N = i('arco-article');
  return (
    I(),
    $(
      N,
      j(p.data, { changelog: p.changelog }),
      {
        default: e(() => [
          l[308] ||
            (l[308] = d(
              'p',
              null,
              [d('em', null, 'Auto translate by google.')],
              -1
            )),
          t(x),
          t(k),
          t(w),
          t(T),
          t(F),
          t(D),
          t(C),
          t(A),
          t(O),
          t(P),
          t(E),
          t(z),
          t(B),
          t(R),
          t(W),
          t(
            S,
            { level: '2', href: 'API' },
            { default: e(() => l[0] || (l[0] = [u('API')])), _: 1 }
          ),
          l[309] ||
            (l[309] = d(
              'h3',
              { id: 'cascader Props' },
              [d('code', null, '<cascader>'), u(' Props')],
              -1
            )),
          t(
            f,
            { class: 'component-api-table' },
            {
              default: e(() => [
                l[144] ||
                  (l[144] = d(
                    'colgroup',
                    null,
                    [d('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(a, null, {
                  default: e(() => [
                    t(o, null, {
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
                t(r, null, {
                  default: e(() => [
                    t(o, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[6] || (l[6] = [u('path-mode')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[7] ||
                              (l[7] = [u('Whether the value is a path')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[8] || (l[8] = [d('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[9] || (l[9] = [d('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(o, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[10] || (l[10] = [u('multiple')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[11] ||
                              (l[11] = [
                                u(
                                  'Whether it is a multi-selection state (The search is turned on by default in the multi-select mode)'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[12] ||
                              (l[12] = [d('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[13] || (l[13] = [d('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(o, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () =>
                              l[14] ||
                              (l[14] = [
                                u('model-value '),
                                d('strong', null, '(v-model)', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[15] || (l[15] = [u('Value')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[16] ||
                              (l[16] = [
                                d(
                                  'code',
                                  null,
                                  'string| number| Record<string, any>| ( | string | number | Record<string, any> | (string | number | Record<string, any>)[] )[]| undefined',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[17] || (l[17] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(o, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () => l[18] || (l[18] = [u('default-value')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[19] ||
                              (l[19] = [
                                u('Default value (uncontrolled state)'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[20] ||
                              (l[20] = [
                                d(
                                  'code',
                                  null,
                                  'string| number| Record<string, any>| ( | string | number | Record<string, any> | (string | number | Record<string, any>)[] )[]| undefined',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[21] ||
                              (l[21] = [
                                d('code', null, "'' | undefined | []", -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(o, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[22] || (l[22] = [u('options')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[23] || (l[23] = [u('Options for cascader')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[24] ||
                              (l[24] = [
                                d('code', null, 'CascaderOption[]', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[25] || (l[25] = [d('code', null, '[]', -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(o, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[26] || (l[26] = [u('disabled')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[27] || (l[27] = [u('Whether to disable')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[28] ||
                              (l[28] = [d('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[29] || (l[29] = [d('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(o, null, {
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
                              (l[32] = [d('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[33] || (l[33] = [d('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(o, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[34] || (l[34] = [u('size')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[35] || (l[35] = [u('The size of the select')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[36] ||
                              (l[36] = [
                                d(
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
                              l[37] ||
                              (l[37] = [d('code', null, "'medium'", -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(o, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () => l[38] || (l[38] = [u('allow-search')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[39] ||
                              (l[39] = [u('Whether to allow searching')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[40] ||
                              (l[40] = [d('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[41] ||
                              (l[41] = [
                                d(
                                  'code',
                                  null,
                                  'false (single) | true (multiple)',
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
                    t(o, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () => l[42] || (l[42] = [u('allow-clear')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[43] || (l[43] = [u('Whether to allow clear')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[44] ||
                              (l[44] = [d('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[45] || (l[45] = [d('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(o, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () =>
                              l[46] ||
                              (l[46] = [
                                u('input-value '),
                                d('strong', null, '(v-model)', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[47] || (l[47] = [u('The value of the input')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[48] || (l[48] = [d('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[49] || (l[49] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(o, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () => l[50] || (l[50] = [u('default-input-value')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[51] ||
                              (l[51] = [
                                u(
                                  'The default value of the input (uncontrolled state)'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[52] || (l[52] = [d('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[53] || (l[53] = [d('code', null, "''", -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(o, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () =>
                              l[54] ||
                              (l[54] = [
                                u('popup-visible '),
                                d('strong', null, '(v-model)', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[55] ||
                              (l[55] = [u('Whether to show the dropdown')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[56] ||
                              (l[56] = [d('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[57] || (l[57] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(o, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () => l[58] || (l[58] = [u('expand-trigger')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[59] ||
                              (l[59] = [
                                u(
                                  'Expand the trigger method of the next level'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[60] ||
                              (l[60] = [
                                d('code', null, "'click' | 'hover'", -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[61] ||
                              (l[61] = [d('code', null, "'click'", -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(o, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () =>
                              l[62] || (l[62] = [u('default-popup-visible')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[63] ||
                              (l[63] = [
                                u(
                                  'Whether to display the dropdown by default (uncontrolled state)'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[64] ||
                              (l[64] = [d('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[65] || (l[65] = [d('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(o, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () => l[66] || (l[66] = [u('placeholder')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[67] || (l[67] = [u('Placeholder')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[68] || (l[68] = [d('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[69] || (l[69] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(o, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () => l[70] || (l[70] = [u('filter-option')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[71] ||
                              (l[71] = [u('Custom options filter method')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[72] ||
                              (l[72] = [
                                d(
                                  'code',
                                  null,
                                  '(inputValue: string, option: CascaderOption) => boolean',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[73] || (l[73] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(o, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () => l[74] || (l[74] = [u('popup-container')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[75] ||
                              (l[75] = [u('Mount container for popup')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[76] ||
                              (l[76] = [
                                d('code', null, 'string | HTMLElement', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[77] || (l[77] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(o, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () => l[78] || (l[78] = [u('max-tag-count')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[79] ||
                              (l[79] = [
                                u(
                                  'In multi-select mode, the maximum number of labels displayed. 0 means unlimited'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[80] || (l[80] = [d('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[81] || (l[81] = [d('code', null, '0', -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(o, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () => l[82] || (l[82] = [u('format-label')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[83] || (l[83] = [u('Format display content')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[84] ||
                              (l[84] = [
                                d(
                                  'code',
                                  null,
                                  '(options: CascaderOption[]) => string',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[85] || (l[85] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(o, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () => l[86] || (l[86] = [u('trigger-props')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[87] ||
                              (l[87] = [
                                u('Trigger props of the drop-down menu'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[88] ||
                              (l[88] = [d('code', null, 'TriggerProps', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[89] || (l[89] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(o, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () => l[90] || (l[90] = [u('check-strictly')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[91] ||
                              (l[91] = [
                                u('Whether to enable strict selection mode'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[92] ||
                              (l[92] = [d('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[93] || (l[93] = [d('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(o, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[94] || (l[94] = [u('load-more')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[95] ||
                              (l[95] = [
                                u(
                                  'Data lazy loading function, open the lazy loading function when it is passed in'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[96] ||
                              (l[96] = [
                                d(
                                  'code',
                                  null,
                                  '( option: CascaderOption, done: (children?: CascaderOption[]) => void) => void',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[97] || (l[97] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[98] || (l[98] = [u('2.13.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(o, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[99] || (l[99] = [u('loading')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[100] ||
                              (l[100] = [u('Whether it is loading state')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[101] ||
                              (l[101] = [d('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[102] ||
                              (l[102] = [d('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[103] || (l[103] = [u('2.15.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(o, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () =>
                              l[104] ||
                              (l[104] = [u('search-option-only-label')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[105] ||
                              (l[105] = [
                                u(
                                  'Whether the options in the search dropdown show only label'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[106] ||
                              (l[106] = [d('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[107] ||
                              (l[107] = [d('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[108] || (l[108] = [u('2.18.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(o, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () => l[109] || (l[109] = [u('search-delay')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[110] ||
                              (l[110] = [
                                u('Delay time to trigger search event'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[111] ||
                              (l[111] = [d('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[112] || (l[112] = [d('code', null, '500', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[113] || (l[113] = [u('2.18.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(o, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () => l[114] || (l[114] = [u('field-names')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[115] ||
                              (l[115] = [
                                u('Customize fields in '),
                                d('code', null, 'CascaderOption', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[116] ||
                              (l[116] = [
                                d('code', null, 'CascaderFieldNames', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[117] || (l[117] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[118] || (l[118] = [u('2.22.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(o, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () => l[119] || (l[119] = [u('value-key')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[120] ||
                              (l[120] = [
                                u(
                                  'Used to determine the option key value attribute name'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[121] ||
                              (l[121] = [d('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[122] ||
                              (l[122] = [d('code', null, "'value'", -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[123] || (l[123] = [u('2.29.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(o, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () => l[124] || (l[124] = [u('fallback')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[125] ||
                              (l[125] = [
                                u('Options that do not exist in custom values'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[126] ||
                              (l[126] = [
                                d(
                                  'code',
                                  null,
                                  'boolean| (( value: | string | number | Record<string, unknown> | (string | number | Record<string, unknown>)[] ) => string)',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[127] || (l[127] = [d('code', null, 'true', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[128] || (l[128] = [u('2.29.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(o, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () => l[129] || (l[129] = [u('expand-child')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[130] ||
                              (l[130] = [u('whether to expand the submenu')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[131] ||
                              (l[131] = [d('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[132] ||
                              (l[132] = [d('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[133] || (l[133] = [u('2.29.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(o, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () => l[134] || (l[134] = [u('virtual-list-props')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[135] ||
                              (l[135] = [
                                u(
                                  'Pass the virtual list attribute, pass in this parameter to turn on virtual scrolling '
                                ),
                                d(
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
                          default: e(
                            () =>
                              l[136] ||
                              (l[136] = [
                                d('code', null, 'VirtualListProps', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[137] || (l[137] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[138] || (l[138] = [u('2.49.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(o, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () => l[139] || (l[139] = [u('tag-nowrap')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[140] ||
                              (l[140] = [u('Tag content does not wrap')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[141] ||
                              (l[141] = [d('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[142] ||
                              (l[142] = [d('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[143] || (l[143] = [u('2.56.1')])),
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
          l[310] ||
            (l[310] = d(
              'h3',
              { id: 'cascader Events' },
              [d('code', null, '<cascader>'), u(' Events')],
              -1
            )),
          t(
            f,
            { class: 'component-api-table' },
            {
              default: e(() => [
                l[169] ||
                  (l[169] = d(
                    'colgroup',
                    null,
                    [d('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(a, null, {
                  default: e(() => [
                    t(o, null, {
                      default: e(() => [
                        t(s, null, {
                          default: e(
                            () => l[145] || (l[145] = [u('Event Name')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(
                            () => l[146] || (l[146] = [u('Description')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(
                            () => l[147] || (l[147] = [u('Parameters')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(r, null, {
                  default: e(() => [
                    t(o, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[148] || (l[148] = [u('change')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[149] ||
                              (l[149] = [
                                u('Triggered when the selected value changes'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[150] ||
                              (l[150] = [
                                u('value: '),
                                d(
                                  'code',
                                  null,
                                  'string | number | (string | number | (string | number)[])[] | undefined',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(o, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () => l[151] || (l[151] = [u('input-value-change')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[152] ||
                              (l[152] = [
                                u('Triggered when the input value changes'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[153] ||
                              (l[153] = [
                                u('value: '),
                                d('code', null, 'string', -1),
                              ])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(o, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[154] || (l[154] = [u('clear')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[155] ||
                              (l[155] = [
                                u('Triggered when the clear button is clicked'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[156] || (l[156] = [u('-')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(o, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[157] || (l[157] = [u('search')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[158] ||
                              (l[158] = [u('Triggered when the user searches')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[159] ||
                              (l[159] = [
                                u('value: '),
                                d('code', null, 'string', -1),
                              ])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(o, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () =>
                              l[160] || (l[160] = [u('popup-visible-change')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[161] ||
                              (l[161] = [
                                u(
                                  'Triggered when the display state of the dropdown changes'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[162] ||
                              (l[162] = [
                                u('visible: '),
                                d('code', null, 'boolean', -1),
                              ])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(o, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[163] || (l[163] = [u('focus')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[164] || (l[164] = [u('Triggered when focus')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[165] ||
                              (l[165] = [
                                u('ev: '),
                                d('code', null, 'FocusEvent', -1),
                              ])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(o, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[166] || (l[166] = [u('blur')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[167] || (l[167] = [u('Triggered when blur')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[168] ||
                              (l[168] = [
                                u('ev: '),
                                d('code', null, 'FocusEvent', -1),
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
          l[311] ||
            (l[311] = d(
              'h3',
              { id: 'cascader Slots' },
              [d('code', null, '<cascader>'), u(' Slots')],
              -1
            )),
          t(
            f,
            { class: 'component-api-table' },
            {
              default: e(() => [
                l[202] ||
                  (l[202] = d(
                    'colgroup',
                    null,
                    [d('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(a, null, {
                  default: e(() => [
                    t(o, null, {
                      default: e(() => [
                        t(s, null, {
                          default: e(
                            () => l[170] || (l[170] = [u('Slot Name')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(
                            () => l[171] || (l[171] = [u('Description')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(
                            () => l[172] || (l[172] = [u('Parameters')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(() => l[173] || (l[173] = [u('version')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(r, null, {
                  default: e(() => [
                    t(o, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[174] || (l[174] = [u('label')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[175] ||
                              (l[175] = [u('Display content of label')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[176] ||
                              (l[176] = [
                                u('data: '),
                                d('code', null, 'CascaderOption', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[177] || (l[177] = [u('2.18.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(o, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[178] || (l[178] = [u('prefix')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[179] || (l[179] = [u('Prefix')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[180] || (l[180] = [u('-')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[181] || (l[181] = [u('2.23.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(o, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () => l[182] || (l[182] = [u('arrow-icon')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[183] ||
                              (l[183] = [u('Arrow icon for select box')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[184] || (l[184] = [u('-')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[185] || (l[185] = [u('2.16.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(o, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () => l[186] || (l[186] = [u('loading-icon')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[187] ||
                              (l[187] = [u('Loading icon for select box')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[188] || (l[188] = [u('-')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[189] || (l[189] = [u('2.16.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(o, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () => l[190] || (l[190] = [u('search-icon')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[191] ||
                              (l[191] = [u('Search icon for select box')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[192] || (l[192] = [u('-')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[193] || (l[193] = [u('2.16.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(o, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[194] || (l[194] = [u('empty')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[195] ||
                              (l[195] = [
                                u('Display content when the option is empty'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[196] || (l[196] = [u('-')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[197] || (l[197] = [u('2.23.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(o, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[198] || (l[198] = [u('option')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[199] ||
                              (l[199] = [u('Display content of options')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[200] ||
                              (l[200] = [
                                u('data: '),
                                d('code', null, 'CascaderOption', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[201] || (l[201] = [u('2.18.0')])),
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
          l[312] ||
            (l[312] = d(
              'h3',
              { id: 'cascader-panel Props' },
              [d('code', null, '<cascader-panel>'), u(' Props')],
              -1
            )),
          t(
            f,
            { class: 'component-api-table' },
            {
              default: e(() => [
                l[256] ||
                  (l[256] = d(
                    'colgroup',
                    null,
                    [d('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(a, null, {
                  default: e(() => [
                    t(o, null, {
                      default: e(() => [
                        t(s, null, {
                          default: e(
                            () => l[203] || (l[203] = [u('Attribute')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(
                            () => l[204] || (l[204] = [u('Description')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(() => l[205] || (l[205] = [u('Type')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(() => l[206] || (l[206] = [u('Default')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(() => l[207] || (l[207] = [u('version')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(r, null, {
                  default: e(() => [
                    t(o, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () => l[208] || (l[208] = [u('path-mode')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[209] ||
                              (l[209] = [u('Whether the value is a path')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[210] ||
                              (l[210] = [d('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[211] ||
                              (l[211] = [d('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(o, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () => l[212] || (l[212] = [u('multiple')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[213] ||
                              (l[213] = [
                                u(
                                  'Whether it is a multi-selection state (The search is turned on by default in the multi-select mode)'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[214] ||
                              (l[214] = [d('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[215] ||
                              (l[215] = [d('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(o, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () =>
                              l[216] ||
                              (l[216] = [
                                u('model-value '),
                                d('strong', null, '(v-model)', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[217] || (l[217] = [u('Value')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[218] ||
                              (l[218] = [
                                d(
                                  'code',
                                  null,
                                  'string| number| Record<string, any>| ( | string | number | Record<string, any> | (string | number | Record<string, any>)[] )[]| undefined',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[219] || (l[219] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(o, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () => l[220] || (l[220] = [u('default-value')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[221] ||
                              (l[221] = [
                                u('Default value (uncontrolled state)'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[222] ||
                              (l[222] = [
                                d(
                                  'code',
                                  null,
                                  'string| number| Record<string, any>| ( | string | number | Record<string, any> | (string | number | Record<string, any>)[] )[]| undefined',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[223] ||
                              (l[223] = [
                                d('code', null, "'' | undefined | []", -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(o, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[224] || (l[224] = [u('options')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[225] || (l[225] = [u('Options for cascader')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[226] ||
                              (l[226] = [
                                d('code', null, 'CascaderOption[]', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[227] || (l[227] = [d('code', null, '[]', -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(o, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () => l[228] || (l[228] = [u('expand-trigger')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[229] ||
                              (l[229] = [
                                u(
                                  'Expand the trigger method of the next level'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[230] ||
                              (l[230] = [d('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[231] ||
                              (l[231] = [d('code', null, "'click'", -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(o, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () => l[232] || (l[232] = [u('check-strictly')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[233] ||
                              (l[233] = [
                                u('Whether to enable strict selection mode'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[234] ||
                              (l[234] = [d('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[235] ||
                              (l[235] = [d('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(o, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () => l[236] || (l[236] = [u('load-more')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[237] ||
                              (l[237] = [
                                u(
                                  'Data lazy loading function, open the lazy loading function when it is passed in'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[238] ||
                              (l[238] = [
                                d(
                                  'code',
                                  null,
                                  '( option: CascaderOption, done: (children?: CascaderOption[]) => void) => void',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[239] || (l[239] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[240] || (l[240] = [u('2.13.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(o, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () => l[241] || (l[241] = [u('field-names')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[242] ||
                              (l[242] = [
                                u('Customize fields in '),
                                d('code', null, 'CascaderOption', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[243] ||
                              (l[243] = [
                                d('code', null, 'CascaderFieldNames', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[244] || (l[244] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[245] || (l[245] = [u('2.22.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(o, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () => l[246] || (l[246] = [u('value-key')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[247] ||
                              (l[247] = [
                                u(
                                  'Used to determine the option key value attribute name'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[248] ||
                              (l[248] = [d('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[249] ||
                              (l[249] = [d('code', null, "'value'", -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[250] || (l[250] = [u('2.29.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(o, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () => l[251] || (l[251] = [u('expand-child')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[252] ||
                              (l[252] = [u('whether to expand the submenu')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[253] ||
                              (l[253] = [d('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[254] ||
                              (l[254] = [d('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[255] || (l[255] = [u('2.29.0')])),
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
          l[313] ||
            (l[313] = d(
              'h3',
              { id: 'cascader-panel Events' },
              [d('code', null, '<cascader-panel>'), u(' Events')],
              -1
            )),
          t(
            f,
            { class: 'component-api-table' },
            {
              default: e(() => [
                l[263] ||
                  (l[263] = d(
                    'colgroup',
                    null,
                    [d('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(a, null, {
                  default: e(() => [
                    t(o, null, {
                      default: e(() => [
                        t(s, null, {
                          default: e(
                            () => l[257] || (l[257] = [u('Event Name')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(
                            () => l[258] || (l[258] = [u('Description')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(
                            () => l[259] || (l[259] = [u('Parameters')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(r, null, {
                  default: e(() => [
                    t(o, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[260] || (l[260] = [u('change')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[261] ||
                              (l[261] = [
                                u('Triggered when the selected value changes'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[262] ||
                              (l[262] = [
                                u('value: '),
                                d(
                                  'code',
                                  null,
                                  'string | number | (string | number | (string | number)[])[] | undefined',
                                  -1
                                ),
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
          l[314] ||
            (l[314] = d(
              'h3',
              { id: 'cascader-panel Slots' },
              [d('code', null, '<cascader-panel>'), u(' Slots')],
              -1
            )),
          t(
            f,
            { class: 'component-api-table' },
            {
              default: e(() => [
                l[272] ||
                  (l[272] = d(
                    'colgroup',
                    null,
                    [d('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(a, null, {
                  default: e(() => [
                    t(o, null, {
                      default: e(() => [
                        t(s, null, {
                          default: e(
                            () => l[264] || (l[264] = [u('Slot Name')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(
                            () => l[265] || (l[265] = [u('Description')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(
                            () => l[266] || (l[266] = [u('Parameters')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(() => l[267] || (l[267] = [u('version')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(r, null, {
                  default: e(() => [
                    t(o, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[268] || (l[268] = [u('empty')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[269] ||
                              (l[269] = [
                                u('Display content when the option is empty'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[270] || (l[270] = [u('-')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[271] || (l[271] = [u('2.23.0')])),
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
          l[315] ||
            (l[315] = d('h3', { id: 'CascaderOption' }, 'CascaderOption', -1)),
          t(
            f,
            { class: 'component-api-table' },
            {
              default: e(() => [
                l[307] ||
                  (l[307] = d(
                    'colgroup',
                    null,
                    [d('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(a, null, {
                  default: e(() => [
                    t(o, null, {
                      default: e(() => [
                        t(s, null, {
                          default: e(() => l[273] || (l[273] = [u('Name')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(
                            () => l[274] || (l[274] = [u('Description')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(() => l[275] || (l[275] = [u('Type')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(() => l[276] || (l[276] = [u('Default')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(() => l[277] || (l[277] = [u('version')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(r, null, {
                  default: e(() => [
                    t(o, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[278] || (l[278] = [u('value')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[279] ||
                              (l[279] = [
                                u(
                                  'Option value, version 2.29.0 supports objects'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[280] ||
                              (l[280] = [
                                d(
                                  'code',
                                  null,
                                  'string | number | Record<string, any>',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[281] || (l[281] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(o, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[282] || (l[282] = [u('label')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[283] || (l[283] = [u('Option text')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[284] ||
                              (l[284] = [d('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[285] || (l[285] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(o, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[286] || (l[286] = [u('render')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[287] || (l[287] = [u('Custom render')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[288] ||
                              (l[288] = [d('code', null, 'RenderFunction', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[289] || (l[289] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(o, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () => l[290] || (l[290] = [u('disabled')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[291] || (l[291] = [u('Whether to disable')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[292] ||
                              (l[292] = [d('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[293] ||
                              (l[293] = [d('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(o, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () => l[294] || (l[294] = [u('tagProps')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[295] ||
                              (l[295] = [u('Displayed tag attributes')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[296] ||
                              (l[296] = [d('code', null, 'TagProps', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[297] || (l[297] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[298] || (l[298] = [u('2.8.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(o, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () => l[299] || (l[299] = [u('children')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[300] || (l[300] = [u('Next level options')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[301] ||
                              (l[301] = [
                                d('code', null, 'CascaderOption[]', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[302] || (l[302] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(o, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[303] || (l[303] = [u('isLeaf')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[304] ||
                              (l[304] = [u('Whether it is a leaf node')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[305] ||
                              (l[305] = [d('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[306] ||
                              (l[306] = [d('code', null, 'false', -1)])
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
        ]),
        _: 1,
      },
      16,
      ['changelog']
    )
  );
}
const ol = L(el, [['render', nl]]);
export { ol as default };
