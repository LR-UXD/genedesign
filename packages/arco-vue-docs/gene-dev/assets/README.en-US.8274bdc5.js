import {
  _ as W,
  d as z,
  u as M,
  r as i,
  o as N,
  c as q,
  w as n,
  e as o,
  a as t,
  b as e,
  m as L,
} from './index.9c61ea88.js';
import {
  D as H,
  a as $,
  b as Q,
  c as U,
  d as G,
  e as K,
  f as O,
  g as J,
  h as X,
  i as Y,
  j as Z,
  k as _,
  l as h,
  m as c,
} from './scroll.5c7a2897.js';

const y = [
  {
    version: '2.57.0',
    date: '2025-03-10',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>fix where form id attribute was consumed and could not be propagated (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/3450">#3450</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  { version: '2.54.0', date: '2023-12-15', list: [], extra: [] },
  {
    version: '2.51.2',
    date: '2023-09-15',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>scroll-to-first-error throws error in nested form items (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2707">#2707</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.51.0',
    date: '2023-09-01',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>add scroll into view to the field (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2680">#2680</a>)</p>
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
          `<p>Fix the problem that the array format is not supported in the field attribute (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2242">#2242</a>)</p>
`,
        ],
      },
      {
        type: 'enhancement',
        typeText: '\u{1F48E} Enhancement',
        list: [
          `<p>Add Chinese inspection information (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2240">#2240</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.43.2',
    date: '2023-02-24',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix invalidation of validateStatus of FormItem (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2158">#2158</a>)</p>
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
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p><code>form-item</code> supports tooltip property (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1991">#1991</a>)</p>
`,
          `<p><code>form-item</code> supports asteriskPosition property (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1991">#1991</a>)</p>
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
          `<p>Fix the bug that <code>validate-status</code> attribute of <code>Form</code> component does not take effect in <code>date-picker</code> component. (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1928">#1928</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.38.0',
    date: '2022-10-28',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Do not modify the original object data of the rule (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1779">#1779</a>)</p>
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
          `<p>Fix form-item content may exceed limit width (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1437">#1437</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.31.0',
    date: '2022-06-17',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>Added parameter support for resetFields and clearValidate methods (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1305">#1305</a>)</p>
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
          `<p>Rendering elements that support modifying form item labels (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/919">#919</a>)</p>
`,
        ],
      },
      {
        type: 'style',
        typeText: '\u{1F485} Style',
        list: [
          `<p>Form item content style increases maximum width to prevent overflow (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/919">#919</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.20.1',
    date: '2022-03-21',
    list: [
      {
        type: 'style',
        typeText: '\u{1F485} Style',
        list: [
          `<p>Fix <code>form-item</code> asterisk compatibility with windicss (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/854">#854</a>)</p>
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
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem that the <code>field</code> property of <code>form-item</code> is invalid when there is an array in it (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/807">#807</a>)</p>
`,
          `<p>Fixed the issue that some component functions are still available after <code>disabled</code> is enabled (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/807">#807</a>)</p>
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
          `<p>Fix the problem of reset method invalid in nested data (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/768">#768</a>)</p>
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
        type: 'enhancement',
        typeText: '\u{1F48E} Enhancement',
        list: [
          `<p>When <code>auto-label-width</code> is enabled, label wrapping is not allowed to prevent calculation errors after wrapping (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/738">#738</a>)</p>
`,
        ],
      },
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>Validated error info add label property (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/724">#724</a>)</p>
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
        type: 'attention',
        typeText: '\u26A0\uFE0F Important Attention',
        list: [
          `<p><form-item> component refactoring to use context to manage input components. If the user has a custom input component, you can refer to the <code>custom input component</code> example to change. (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/697">#697</a>)</p>
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
          `<p>Added feedback icon function for forms and corresponding input components (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/622">#622</a>)</p>
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
          `<p>Label-col uses flex layout to solve the problem of wrong height under mini size (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/536">#536</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.14.1',
    date: '2022-01-08',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem of the default size and style of the form (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/526">#526</a>)</p>
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
        type: 'attention',
        typeText: '\u26A0\uFE0F Important Attention',
        list: [
          `<p>The <code>form-item</code> component adds a new <code>content-wrapper</code> div element to wrap the original <code>content</code> div element to support the new layout (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/488">#488</a>)</p>
`,
        ],
      },
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>Added <code>autoLabelWidth</code> property to support adaptive label width (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/486">#486</a>)</p>
`,
          `<p>Added <code>labelColFlex</code> property to support label width setting (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/486">#486</a>)</p>
`,
          `<p>Add <code>mergeProps</code> attribute, support custom attributes and event override (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/486">#486</a>)</p>
`,
        ],
      },
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem that the help content of the form item is displayed incorrectly (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/480">#480</a>)</p>
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
          `<p><code>form-item</code> adds layout and class name related attributes (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/361">#361</a>)</p>
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
          `<p>Fix the problem of invalid setting of null value in <code>setFields</code> method (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/311">#311</a>)</p>
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
          `<p>Add <code>rules</code> prop (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/271">#271</a>)</p>
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
          `<p>Fix the problem that the additional content style of the form does not take effect (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/208">#208</a>)</p>
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
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem that the input of null in the <code>filed</code> field causes an error to be reported (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/173">#173</a>)</p>
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
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>Add <code>setFields</code> method (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/150">#150</a>)</p>
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
          `<p>Add <code>hideAsterisk</code> prop (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/94">#94</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const ll = z({
  name: 'ArcoMain',
  components: {
    DemoBasic: H,
    DemoLayout: $,
    DemoExtra: Q,
    DemoNest: U,
    DemoGrid: G,
    DemoAutoWidth: K,
    DemoValidation: O,
    DemoValidation2: J,
    DemoStatus: X,
    DemoDynamic: Y,
    DemoDisabled: Z,
    DemoAsync: _,
    DemoCustom: h,
    DemoScroll: c,
  },
  setup() {
    const { locale: p } = M();
    return {
      locale: p,
      data: {
        meta: { type: 'Component', category: 'Data Entry' },
        title: 'Form',
        description:
          'A form with data collection, verification and submission functions, including checkboxes, radio buttons, input boxes, drop-down selection boxes and other elements.',
      },
      changelog: typeof y === 'undefined' ? void 0 : y,
      getMessage: (g, b) => (p.value === 'zh-CN' ? g : b),
    };
  },
});
function tl(p, l, v, x, g, b) {
  const k = i('demo-basic');
  const F = i('demo-layout');
  const w = i('demo-extra');
  const T = i('demo-nest');
  const D = i('demo-grid');
  const A = i('demo-auto-width');
  const R = i('demo-validation');
  const E = i('demo-validation2');
  const I = i('demo-status');
  const V = i('demo-dynamic');
  const B = i('demo-disabled');
  const j = i('demo-async');
  const C = i('demo-custom');
  const S = i('demo-scroll');
  const m = i('anchor-head');
  const s = i('a-th');
  const d = i('a-tr');
  const r = i('a-thead');
  const u = i('a-td');
  const a = i('a-tbody');
  const f = i('a-table');
  const P = i('arco-article');
  return (
    N(),
    q(
      P,
      L(p.data, { changelog: p.changelog }),
      {
        default: n(() => [
          l[401] ||
            (l[401] = o(
              'p',
              null,
              [o('em', null, 'Auto translate by google.')],
              -1
            )),
          t(k),
          t(F),
          t(w),
          t(T),
          t(D),
          t(A),
          t(R),
          t(E),
          t(I),
          t(V),
          t(B),
          t(j),
          t(C),
          t(S),
          t(
            m,
            { level: '2', href: 'API' },
            { default: n(() => l[0] || (l[0] = [e('API')])), _: 1 }
          ),
          l[402] ||
            (l[402] = o(
              'h3',
              { id: 'form Props' },
              [o('code', null, '<form>'), e(' Props')],
              -1
            )),
          t(
            f,
            { class: 'component-api-table' },
            {
              default: n(() => [
                l[52] ||
                  (l[52] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(r, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(s, null, {
                          default: n(() => l[1] || (l[1] = [e('Attribute')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(() => l[2] || (l[2] = [e('Description')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(() => l[3] || (l[3] = [e('Type')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(() => l[4] || (l[4] = [e('Default')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(() => l[5] || (l[5] = [e('version')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(a, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(
                            () =>
                              l[6] ||
                              (l[6] = [
                                e('model '),
                                o('strong', null, '(required)', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[7] || (l[7] = [e('Form data object')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[8] || (l[8] = [o('code', null, 'object', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[9] || (l[9] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[10] || (l[10] = [e('layout')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[11] ||
                              (l[11] = [
                                e(
                                  'The layout of the form, including horizontal, vertical, and multi-column'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[12] ||
                              (l[12] = [
                                o(
                                  'code',
                                  null,
                                  "'horizontal' | 'vertical' | 'inline'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[13] ||
                              (l[13] = [o('code', null, "'horizontal'", -1)])
                          ),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[14] || (l[14] = [e('size')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[15] || (l[15] = [e('The size of the form')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
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
                        t(u, null, {
                          default: n(
                            () =>
                              l[17] ||
                              (l[17] = [o('code', null, "'medium'", -1)])
                          ),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(
                            () => l[18] || (l[18] = [e('label-col-props')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[19] ||
                              (l[19] = [
                                e(
                                  'Label element layout options. The parameters are the same as the '
                                ),
                                o('code', null, '<col>', -1),
                                e(' component'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[20] || (l[20] = [o('code', null, 'object', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[21] ||
                              (l[21] = [
                                o('code', null, 'span: 5, offset: 0', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(
                            () => l[22] || (l[22] = [e('wrapper-col-props')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[23] ||
                              (l[23] = [
                                e(
                                  'Form control layout options. The parameters are the same as the '
                                ),
                                o('code', null, '<col>', -1),
                                e(' component'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[24] || (l[24] = [o('code', null, 'object', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[25] ||
                              (l[25] = [
                                o('code', null, 'span: 19, offset: 0', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(
                            () => l[26] || (l[26] = [e('label-align')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[27] ||
                              (l[27] = [e('Alignment direction of the label')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[28] ||
                              (l[28] = [
                                o('code', null, "'left' | 'right'", -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[29] ||
                              (l[29] = [o('code', null, "'right'", -1)])
                          ),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[30] || (l[30] = [e('disabled')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[31] ||
                              (l[31] = [e('Whether to disable the form')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[32] ||
                              (l[32] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[33] || (l[33] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[34] || (l[34] = [e('rules')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[35] ||
                              (l[35] = [e('Form item validation rules')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[36] ||
                              (l[36] = [
                                o(
                                  'code',
                                  null,
                                  'Record<string, FieldRule | FieldRule[]>',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[37] || (l[37] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(
                            () => l[38] || (l[38] = [e('auto-label-width')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[39] ||
                              (l[39] = [
                                e(
                                  'Whether to enable automatic label width, it only takes effect under '
                                ),
                                o('code', null, 'layout="horizontal"', -1),
                                e('.'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[40] ||
                              (l[40] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[41] || (l[41] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(() => l[42] || (l[42] = [e('2.13.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[43] || (l[43] = [e('id')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[44] ||
                              (l[44] = [
                                e('Form '),
                                o('code', null, 'id', -1),
                                e(' attribute and form control '),
                                o('code', null, 'id', -1),
                                e(' prefix'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[45] || (l[45] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[46] || (l[46] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(
                            () =>
                              l[47] || (l[47] = [e('scroll-to-first-error')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[48] ||
                              (l[48] = [
                                e(
                                  'Scroll to the first error field after verification fails'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[49] ||
                              (l[49] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[50] || (l[50] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(() => l[51] || (l[51] = [e('2.51.0')])),
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
          l[403] ||
            (l[403] = o(
              'h3',
              { id: 'form Events' },
              [o('code', null, '<form>'), e(' Events')],
              -1
            )),
          t(
            f,
            { class: 'component-api-table' },
            {
              default: n(() => [
                l[65] ||
                  (l[65] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(r, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(s, null, {
                          default: n(
                            () => l[53] || (l[53] = [e('Event Name')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(
                            () => l[54] || (l[54] = [e('Description')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(
                            () => l[55] || (l[55] = [e('Parameters')])
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
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[56] || (l[56] = [e('submit')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[57] ||
                              (l[57] = [
                                e('Triggered when the form is submitted'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[58] ||
                              (l[58] = [
                                e('data: '),
                                o(
                                  'code',
                                  null,
                                  '{values: Record<string, any>; errors: Record<string, ValidatedError> | undefined}',
                                  -1
                                ),
                                o('br', null, null, -1),
                                e('ev: '),
                                o('code', null, 'Event', -1),
                              ])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(
                            () => l[59] || (l[59] = [e('submit-success')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[60] ||
                              (l[60] = [
                                e('Triggered when verification is successful'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[61] ||
                              (l[61] = [
                                e('values: '),
                                o('code', null, 'Record<string, any>', -1),
                                o('br', null, null, -1),
                                e('ev: '),
                                o('code', null, 'Event', -1),
                              ])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(
                            () => l[62] || (l[62] = [e('submit-failed')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[63] ||
                              (l[63] = [
                                e('Triggered when verification failed'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[64] ||
                              (l[64] = [
                                e('data: '),
                                o(
                                  'code',
                                  null,
                                  '{values: Record<string, any>; errors: Record<string, ValidatedError>}',
                                  -1
                                ),
                                o('br', null, null, -1),
                                e('ev: '),
                                o('code', null, 'Event', -1),
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
          l[404] ||
            (l[404] = o(
              'h3',
              { id: 'form Methods' },
              [o('code', null, '<form>'), e(' Methods')],
              -1
            )),
          t(
            f,
            { class: 'component-api-table' },
            {
              default: n(() => [
                l[96] ||
                  (l[96] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(r, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(s, null, {
                          default: n(() => l[66] || (l[66] = [e('Method')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(
                            () => l[67] || (l[67] = [e('Description')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(
                            () => l[68] || (l[68] = [e('Parameters')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(() => l[69] || (l[69] = [e('Return')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(() => l[70] || (l[70] = [e('version')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(a, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[71] || (l[71] = [e('validate')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[72] || (l[72] = [e('Verify all form data')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[73] ||
                              (l[73] = [
                                e('callback: '),
                                o(
                                  'code',
                                  null,
                                  '(errors: undefined | Record<string, ValidatedError>) => void',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[74] ||
                              (l[74] = [
                                e(
                                  'Promise<undefined | Record<string, ValidatedError>>'
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
                      default: n(() => [
                        t(u, null, {
                          default: n(
                            () => l[75] || (l[75] = [e('validateField')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[76] ||
                              (l[76] = [e('Validate part of the form data')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[77] ||
                              (l[77] = [
                                e('field: '),
                                o('code', null, 'string | string[]', -1),
                                o('br', null, null, -1),
                                e('callback: '),
                                o(
                                  'code',
                                  null,
                                  '(errors: undefined | Record<string, ValidatedError>) => void',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[78] ||
                              (l[78] = [
                                e(
                                  'Promise<undefined | Record<string, ValidatedError>>'
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
                      default: n(() => [
                        t(u, null, {
                          default: n(
                            () => l[79] || (l[79] = [e('resetFields')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[80] || (l[80] = [e('Reset form data')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[81] ||
                              (l[81] = [
                                e('field: '),
                                o('code', null, 'string | string[]', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(() => l[82] || (l[82] = [e('-')])),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(
                            () => l[83] || (l[83] = [e('clearValidate')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[84] ||
                              (l[84] = [e('Clear verification status')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[85] ||
                              (l[85] = [
                                e('field: '),
                                o('code', null, 'string | string[]', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(() => l[86] || (l[86] = [e('-')])),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[87] || (l[87] = [e('setFields')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[88] ||
                              (l[88] = [
                                e('Set the value and status of the form item'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[89] ||
                              (l[89] = [
                                e('data: '),
                                o(
                                  'code',
                                  null,
                                  'Record<string, FieldData>',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(() => l[90] || (l[90] = [e('-')])),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(
                            () => l[91] || (l[91] = [e('scrollToField')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[92] ||
                              (l[92] = [e('Scroll to the specified form item')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[93] ||
                              (l[93] = [
                                e('field: '),
                                o('code', null, 'string', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(() => l[94] || (l[94] = [e('-')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(() => l[95] || (l[95] = [e('2.51.0')])),
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
          l[405] ||
            (l[405] = o(
              'h3',
              { id: 'form-item Props' },
              [o('code', null, '<form-item>'), e(' Props')],
              -1
            )),
          t(
            f,
            { class: 'component-api-table' },
            {
              default: n(() => [
                l[227] ||
                  (l[227] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(r, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(s, null, {
                          default: n(() => l[97] || (l[97] = [e('Attribute')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(
                            () => l[98] || (l[98] = [e('Description')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(() => l[99] || (l[99] = [e('Type')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(() => l[100] || (l[100] = [e('Default')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(() => l[101] || (l[101] = [e('version')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(a, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[102] || (l[102] = [e('field')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[103] ||
                              (l[103] = [
                                e(
                                  'The path of the form element in the data object (required for the data item)'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[104] ||
                              (l[104] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[105] || (l[105] = [o('code', null, "''", -1)])
                          ),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[106] || (l[106] = [e('label')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[107] || (l[107] = [e('Label text')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[108] ||
                              (l[108] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
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
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[110] || (l[110] = [e('tooltip')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[111] || (l[111] = [e('Tooltip text')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[112] ||
                              (l[112] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[113] || (l[113] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(() => l[114] || (l[114] = [e('2.41.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(
                            () => l[115] || (l[115] = [e('show-colon')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[116] ||
                              (l[116] = [e('Whether to show a colon')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[117] ||
                              (l[117] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[118] ||
                              (l[118] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(
                            () => l[119] || (l[119] = [e('no-style')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[120] ||
                              (l[120] = [e('Whether to remove the style')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[121] ||
                              (l[121] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[122] ||
                              (l[122] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(
                            () => l[123] || (l[123] = [e('disabled')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[124] || (l[124] = [e('Whether to disable')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[125] ||
                              (l[125] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[126] || (l[126] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[127] || (l[127] = [e('help')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[128] || (l[128] = [e('Help copywriting')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[129] ||
                              (l[129] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[130] || (l[130] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[131] || (l[131] = [e('extra')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[132] ||
                              (l[132] = [e('Additional display copy')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[133] ||
                              (l[133] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[134] || (l[134] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(
                            () => l[135] || (l[135] = [e('required')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[136] || (l[136] = [e('Is it required')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[137] ||
                              (l[137] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[138] ||
                              (l[138] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(
                            () => l[139] || (l[139] = [e('asterisk-position')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[140] ||
                              (l[140] = [
                                e(
                                  'Optionally place an asterisk before/after the label'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[141] ||
                              (l[141] = [
                                o('code', null, "'start' | 'end'", -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[142] ||
                              (l[142] = [o('code', null, "'start'", -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(() => l[143] || (l[143] = [e('2.41.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[144] || (l[144] = [e('rules')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[145] ||
                              (l[145] = [
                                e(
                                  'Form item validation rules (The priority is higher than the rules of form)'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[146] ||
                              (l[146] = [
                                o('code', null, 'FieldRule | FieldRule[]', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[147] || (l[147] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(
                            () => l[148] || (l[148] = [e('validate-status')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[149] || (l[149] = [e('Validate status')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[150] ||
                              (l[150] = [
                                o(
                                  'code',
                                  null,
                                  "'success' | 'warning' | 'error' | 'validating'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[151] || (l[151] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(
                            () => l[152] || (l[152] = [e('validate-trigger')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[153] ||
                              (l[153] = [
                                e('The event that triggers the verification'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[154] ||
                              (l[154] = [
                                o(
                                  'code',
                                  null,
                                  "'change' | 'input' | 'focus' | 'blur'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[155] ||
                              (l[155] = [o('code', null, "'change'", -1)])
                          ),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(
                            () => l[156] || (l[156] = [e('label-col-props')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[157] ||
                              (l[157] = [
                                e(
                                  'Label element layout options. The parameters are the same as the '
                                ),
                                o('code', null, '<col>', -1),
                                e(' component'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[158] ||
                              (l[158] = [o('code', null, 'object', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[159] || (l[159] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(
                            () => l[160] || (l[160] = [e('wrapper-col-props')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[161] ||
                              (l[161] = [
                                e(
                                  'Form control layout options. The parameters are the same as the '
                                ),
                                o('code', null, '<col>', -1),
                                e(' component'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[162] ||
                              (l[162] = [o('code', null, 'object', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[163] || (l[163] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(
                            () => l[164] || (l[164] = [e('hide-label')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[165] ||
                              (l[165] = [e('Whether to hide the label')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[166] ||
                              (l[166] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[167] ||
                              (l[167] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(
                            () => l[168] || (l[168] = [e('hide-asterisk')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[169] ||
                              (l[169] = [e('Whether to hide the asterisk')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[170] ||
                              (l[170] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[171] ||
                              (l[171] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(
                            () => l[172] || (l[172] = [e('label-col-style')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[173] ||
                              (l[173] = [
                                e(
                                  'The style of the label element layout component'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[174] ||
                              (l[174] = [o('code', null, 'object', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[175] || (l[175] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(() => l[176] || (l[176] = [e('2.10.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(
                            () => l[177] || (l[177] = [e('wrapper-col-style')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[178] ||
                              (l[178] = [
                                e(
                                  'The style of the form control layout component'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[179] ||
                              (l[179] = [o('code', null, 'object', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[180] || (l[180] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(() => l[181] || (l[181] = [e('2.10.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(
                            () => l[182] || (l[182] = [e('row-props')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[183] ||
                              (l[183] = [
                                e(
                                  'Form item layout options. The parameters are the same as the '
                                ),
                                o('code', null, '<row>', -1),
                                e(' component'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[184] ||
                              (l[184] = [o('code', null, 'object', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[185] || (l[185] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(() => l[186] || (l[186] = [e('2.10.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(
                            () => l[187] || (l[187] = [e('row-class')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[188] ||
                              (l[188] = [
                                e(
                                  'The class of the form item layout component'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[189] ||
                              (l[189] = [
                                o('code', null, 'string|array|object', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[190] || (l[190] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(() => l[191] || (l[191] = [e('2.10.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(
                            () => l[192] || (l[192] = [e('content-class')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[193] ||
                              (l[193] = [
                                e(
                                  'The class of the form control wrapping layer'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[194] ||
                              (l[194] = [
                                o('code', null, 'string|array|object', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[195] || (l[195] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(() => l[196] || (l[196] = [e('2.10.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(
                            () => l[197] || (l[197] = [e('content-flex')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[198] ||
                              (l[198] = [
                                e(
                                  'Whether to enable flex layout in the content layer'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[199] ||
                              (l[199] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[200] || (l[200] = [o('code', null, 'true', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(() => l[201] || (l[201] = [e('2.13.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(
                            () => l[202] || (l[202] = [e('merge-props')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[203] ||
                              (l[203] = [
                                e(
                                  '(Repealed) Control the Props passed to the child element. The default includes disabled, error, size, events and additional attributes on FormItem. Version 2.18.0 deprecated'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[204] ||
                              (l[204] = [
                                o(
                                  'code',
                                  null,
                                  'boolean | ((props: Record<string, any>) => Record<string, any>)',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[205] || (l[205] = [o('code', null, 'true', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(() => l[206] || (l[206] = [e('2.13.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(
                            () => l[207] || (l[207] = [e('label-col-flex')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[208] ||
                              (l[208] = [
                                e('Set the flex property of the label '),
                                o('code', null, 'Col', -1),
                                e(
                                  ' component. When set, the flex property of the form '
                                ),
                                o('code', null, 'Col', -1),
                                e(' component will be set to '),
                                o('code', null, 'auto', -1),
                                e('.'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[209] ||
                              (l[209] = [o('code', null, 'number|string', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[210] || (l[210] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(() => l[211] || (l[211] = [e('2.13.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(
                            () => l[212] || (l[212] = [e('feedback')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[213] ||
                              (l[213] = [
                                e(
                                  'Whether to show the feedback icon for the form control'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[214] ||
                              (l[214] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[215] ||
                              (l[215] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(() => l[216] || (l[216] = [e('2.16.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(
                            () => l[217] || (l[217] = [e('label-component')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[218] ||
                              (l[218] = [
                                e(
                                  'The element that the form item label renders'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[219] ||
                              (l[219] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[220] ||
                              (l[220] = [o('code', null, "'label'", -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(() => l[221] || (l[221] = [e('2.22.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(
                            () => l[222] || (l[222] = [e('label-attrs')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[223] ||
                              (l[223] = [
                                e('Attributes of the form item element'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[224] ||
                              (l[224] = [o('code', null, 'object', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[225] || (l[225] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(() => l[226] || (l[226] = [e('2.22.0')])),
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
          l[406] ||
            (l[406] = o(
              'h3',
              { id: 'form-item Slots' },
              [o('code', null, '<form-item>'), e(' Slots')],
              -1
            )),
          t(
            f,
            { class: 'component-api-table' },
            {
              default: n(() => [
                l[240] ||
                  (l[240] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(r, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(s, null, {
                          default: n(
                            () => l[228] || (l[228] = [e('Slot Name')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(
                            () => l[229] || (l[229] = [e('Description')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(
                            () => l[230] || (l[230] = [e('Parameters')])
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
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[231] || (l[231] = [e('label')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(() => l[232] || (l[232] = [e('Label')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(() => l[233] || (l[233] = [e('-')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[234] || (l[234] = [e('help')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[235] || (l[235] = [e('Help message')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(() => l[236] || (l[236] = [e('-')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[237] || (l[237] = [e('extra')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[238] || (l[238] = [e('Extra content')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(() => l[239] || (l[239] = [e('-')])),
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
          t(
            m,
            { level: '2', href: 'Type' },
            { default: n(() => l[241] || (l[241] = [e('Type')])), _: 1 }
          ),
          l[407] || (l[407] = o('h3', { id: 'FieldRule' }, 'FieldRule', -1)),
          t(
            f,
            { class: 'component-api-table' },
            {
              default: n(() => [
                l[330] ||
                  (l[330] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(r, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(s, null, {
                          default: n(() => l[242] || (l[242] = [e('Name')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(
                            () => l[243] || (l[243] = [e('Description')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(() => l[244] || (l[244] = [e('Type')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(() => l[245] || (l[245] = [e('Default')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(a, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[246] || (l[246] = [e('type')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[247] ||
                              (l[247] = [
                                e(
                                  'The type of the value to be checked, the default is '
                                ),
                                o('code', null, "'string'", -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[248] ||
                              (l[248] = [
                                o(
                                  'code',
                                  null,
                                  "'string' | 'number' | 'boolean' | 'array' | 'object' | 'email' | 'url' | 'ip'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[249] || (l[249] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(
                            () => l[250] || (l[250] = [e('required')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[251] || (l[251] = [e('Is it required')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[252] ||
                              (l[252] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[253] ||
                              (l[253] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[254] || (l[254] = [e('message')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[255] ||
                              (l[255] = [
                                e(
                                  'Information displayed when verification fails'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[256] ||
                              (l[256] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[257] || (l[257] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[258] || (l[258] = [e('length')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[259] ||
                              (l[259] = [e('Check length (string, array)')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[260] ||
                              (l[260] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[261] || (l[261] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(
                            () => l[262] || (l[262] = [e('maxLength')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[263] ||
                              (l[263] = [e('Maximum length (string)')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[264] ||
                              (l[264] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[265] || (l[265] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(
                            () => l[266] || (l[266] = [e('minLength')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[267] ||
                              (l[267] = [e('Minimum length (string)')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[268] ||
                              (l[268] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[269] || (l[269] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[270] || (l[270] = [e('match')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[271] || (l[271] = [e('Match check (string)')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[272] ||
                              (l[272] = [o('code', null, 'RegExp', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[273] || (l[273] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(
                            () => l[274] || (l[274] = [e('uppercase')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[275] || (l[275] = [e('Uppercase (string)')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[276] ||
                              (l[276] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[277] ||
                              (l[277] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(
                            () => l[278] || (l[278] = [e('lowercase')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[279] || (l[279] = [e('Lowercase (string)')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[280] ||
                              (l[280] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[281] ||
                              (l[281] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[282] || (l[282] = [e('min')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[283] || (l[283] = [e('Minimum (number)')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[284] ||
                              (l[284] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[285] || (l[285] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[286] || (l[286] = [e('max')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[287] || (l[287] = [e('Maximum (number)')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[288] ||
                              (l[288] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[289] || (l[289] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[290] || (l[290] = [e('equal')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[291] || (l[291] = [e('Check value (number)')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[292] ||
                              (l[292] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[293] || (l[293] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(
                            () => l[294] || (l[294] = [e('positive')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[295] ||
                              (l[295] = [e('Positive number (number)')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[296] ||
                              (l[296] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[297] ||
                              (l[297] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(
                            () => l[298] || (l[298] = [e('negative')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[299] ||
                              (l[299] = [e('Negative number (number)')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[300] ||
                              (l[300] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[301] ||
                              (l[301] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[302] || (l[302] = [e('true')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[303] ||
                              (l[303] = [
                                e('Whether it is '),
                                o('code', null, 'true', -1),
                                e(' (boolean)'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[304] ||
                              (l[304] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[305] ||
                              (l[305] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[306] || (l[306] = [e('false')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[307] ||
                              (l[307] = [
                                e('Whether it is '),
                                o('code', null, 'false', -1),
                                e(' (boolean)'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[308] ||
                              (l[308] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[309] ||
                              (l[309] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(
                            () => l[310] || (l[310] = [e('includes')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[311] ||
                              (l[311] = [
                                e(
                                  'Does the array contain the given value (array)'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[312] ||
                              (l[312] = [o('code', null, 'any[]', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[313] || (l[313] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(
                            () => l[314] || (l[314] = [e('deepEqual')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[315] ||
                              (l[315] = [e('Are array elements equal (array)')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[316] || (l[316] = [o('code', null, 'any', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[317] || (l[317] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[318] || (l[318] = [e('empty')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[319] || (l[319] = [e('Is it empty (object)')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[320] ||
                              (l[320] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[321] ||
                              (l[321] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[322] || (l[322] = [e('hasKeys')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[323] ||
                              (l[323] = [
                                e(
                                  'Does the object contain the given attribute (object)'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[324] ||
                              (l[324] = [o('code', null, 'string[]', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[325] || (l[325] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(
                            () => l[326] || (l[326] = [e('validator')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[327] ||
                              (l[327] = [e('Custom verification rules')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[328] ||
                              (l[328] = [
                                o(
                                  'code',
                                  null,
                                  '( value: FieldValue | undefined, callback: (error?: string) => void ) => void',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[329] || (l[329] = [o('code', null, '-', -1)])
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
          l[408] || (l[408] = o('h3', { id: 'FieldData' }, 'FieldData', -1)),
          t(
            f,
            { class: 'component-api-table' },
            {
              default: n(() => [
                l[347] ||
                  (l[347] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(r, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(s, null, {
                          default: n(() => l[331] || (l[331] = [e('Name')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(
                            () => l[332] || (l[332] = [e('Description')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(() => l[333] || (l[333] = [e('Type')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(() => l[334] || (l[334] = [e('Default')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(a, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[335] || (l[335] = [e('value')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[336] || (l[336] = [e('Field value')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[337] || (l[337] = [o('code', null, 'any', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[338] || (l[338] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[339] || (l[339] = [e('status')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[340] || (l[340] = [e('Field status')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[341] ||
                              (l[341] = [o('code', null, 'ValidateStatus', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[342] || (l[342] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[343] || (l[343] = [e('message')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[344] || (l[344] = [e('Field error message')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[345] ||
                              (l[345] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[346] || (l[346] = [o('code', null, '-', -1)])
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
          l[409] ||
            (l[409] = o('h3', { id: 'ValidatedError' }, 'ValidatedError', -1)),
          t(
            f,
            { class: 'component-api-table' },
            {
              default: n(() => [
                l[378] ||
                  (l[378] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(r, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(s, null, {
                          default: n(() => l[348] || (l[348] = [e('Name')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(
                            () => l[349] || (l[349] = [e('Description')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(() => l[350] || (l[350] = [e('Type')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(() => l[351] || (l[351] = [e('Default')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(() => l[352] || (l[352] = [e('version')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(a, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[353] || (l[353] = [e('label')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[354] || (l[354] = [e('Label text')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[355] ||
                              (l[355] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[356] || (l[356] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(() => l[357] || (l[357] = [e('2.18.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[358] || (l[358] = [e('field')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[359] || (l[359] = [e('Field name')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[360] ||
                              (l[360] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[361] || (l[361] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[362] || (l[362] = [e('value')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[363] || (l[363] = [e('Field value')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[364] || (l[364] = [o('code', null, 'any', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[365] || (l[365] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[366] || (l[366] = [e('type')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[367] || (l[367] = [e('Field Type')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[368] ||
                              (l[368] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[369] || (l[369] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(
                            () => l[370] || (l[370] = [e('isRequiredError')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[371] ||
                              (l[371] = [
                                e('Is it a '),
                                o('code', null, 'required', -1),
                                e(' error'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[372] ||
                              (l[372] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[373] ||
                              (l[373] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[374] || (l[374] = [e('message')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[375] || (l[375] = [e('Error message')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[376] ||
                              (l[376] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[377] || (l[377] = [o('code', null, '-', -1)])
                          ),
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
          l[410] ||
            (l[410] = o(
              'h3',
              { id: 'FormItemEventHandler' },
              'FormItemEventHandler',
              -1
            )),
          t(
            f,
            { class: 'component-api-table' },
            {
              default: n(() => [
                l[399] ||
                  (l[399] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(r, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(s, null, {
                          default: n(() => l[379] || (l[379] = [e('Name')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(
                            () => l[380] || (l[380] = [e('Description')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(() => l[381] || (l[381] = [e('Type')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(() => l[382] || (l[382] = [e('Default')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(a, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(
                            () => l[383] || (l[383] = [e('onChange')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[384] || (l[384] = [e('onChange')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[385] ||
                              (l[385] = [
                                o('code', null, '(ev?: Event) => void', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[386] || (l[386] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[387] || (l[387] = [e('onInput')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(() => l[388] || (l[388] = [e('onInput')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[389] ||
                              (l[389] = [
                                o('code', null, '(ev?: Event) => void', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[390] || (l[390] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[391] || (l[391] = [e('onFocus')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(() => l[392] || (l[392] = [e('onFocus')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[393] ||
                              (l[393] = [
                                o('code', null, '(ev?: Event) => void', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[394] || (l[394] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[395] || (l[395] = [e('onBlur')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(() => l[396] || (l[396] = [e('onBlur')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[397] ||
                              (l[397] = [
                                o('code', null, '(ev?: Event) => void', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[398] || (l[398] = [o('code', null, '-', -1)])
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
          l[411] ||
            (l[411] = o('h3', { id: 'useFormItem' }, 'useFormItem', -1)),
          l[412] ||
            (l[412] = o(
              'pre',
              { class: 'code-content' },
              [
                o('code', { class: 'language-lang' }, [
                  o('span', { class: 'token keyword' }, 'const'),
                  e(),
                  o(
                    'span',
                    { class: 'token function-variable function' },
                    'useFormItem'
                  ),
                  e(),
                  o('span', { class: 'token operator' }, '='),
                  e(),
                  o('span', { class: 'token punctuation' }, '('),
                  e('data'),
                  o('span', { class: 'token operator' }, ':'),
                  e(),
                  o('span', { class: 'token punctuation' }, '{'),
                  e(`
  size`),
                  o('span', { class: 'token operator' }, '?'),
                  o('span', { class: 'token operator' }, ':'),
                  e(' Ref'),
                  o('span', { class: 'token operator' }, '<'),
                  e('Size '),
                  o('span', { class: 'token operator' }, '|'),
                  e(),
                  o('span', { class: 'token keyword' }, 'undefined'),
                  o('span', { class: 'token operator' }, '>'),
                  o('span', { class: 'token punctuation' }, ';'),
                  e(`
  disabled`),
                  o('span', { class: 'token operator' }, '?'),
                  o('span', { class: 'token operator' }, ':'),
                  e(' Ref'),
                  o('span', { class: 'token operator' }, '<'),
                  o('span', { class: 'token builtin' }, 'boolean'),
                  o('span', { class: 'token operator' }, '>'),
                  o('span', { class: 'token punctuation' }, ';'),
                  e(`
  error`),
                  o('span', { class: 'token operator' }, '?'),
                  o('span', { class: 'token operator' }, ':'),
                  e(' Ref'),
                  o('span', { class: 'token operator' }, '<'),
                  o('span', { class: 'token builtin' }, 'boolean'),
                  o('span', { class: 'token operator' }, '>'),
                  o('span', { class: 'token punctuation' }, ';'),
                  e(`
`),
                  o('span', { class: 'token punctuation' }, '}'),
                  o('span', { class: 'token punctuation' }, ')'),
                  e(),
                  o('span', { class: 'token operator' }, '=>'),
                  e(),
                  o('span', { class: 'token punctuation' }, '{'),
                  e(`
  mergedSize`),
                  o('span', { class: 'token operator' }, ':'),
                  e('Ref'),
                  o('span', { class: 'token operator' }, '<'),
                  e('Size'),
                  o('span', { class: 'token operator' }, '>'),
                  o('span', { class: 'token punctuation' }, ';'),
                  e(`
  mergedDisabled`),
                  o('span', { class: 'token operator' }, ':'),
                  e('Ref'),
                  o('span', { class: 'token operator' }, '<'),
                  o('span', { class: 'token builtin' }, 'boolean'),
                  o('span', { class: 'token operator' }, '>'),
                  o('span', { class: 'token punctuation' }, ';'),
                  e(`
  mergedError`),
                  o('span', { class: 'token operator' }, ':'),
                  e('Ref'),
                  o('span', { class: 'token operator' }, '<'),
                  o('span', { class: 'token builtin' }, 'boolean'),
                  o('span', { class: 'token operator' }, '>'),
                  o('span', { class: 'token punctuation' }, ';'),
                  e(`
  feedback`),
                  o('span', { class: 'token operator' }, ':'),
                  e('Ref'),
                  o('span', { class: 'token operator' }, '<'),
                  o('span', { class: 'token builtin' }, 'string'),
                  o('span', { class: 'token operator' }, '>'),
                  o('span', { class: 'token punctuation' }, ';'),
                  e(`
  eventHandlers`),
                  o('span', { class: 'token operator' }, ':'),
                  e('Ref'),
                  o('span', { class: 'token operator' }, '<'),
                  e('FormItemEventHandler'),
                  o('span', { class: 'token operator' }, '>'),
                  o('span', { class: 'token punctuation' }, ';'),
                  e(`
`),
                  o('span', { class: 'token punctuation' }, '}'),
                  e(`
`),
                ]),
              ],
              -1
            )),
          t(
            m,
            { level: '2', href: 'FAQ' },
            { default: n(() => l[400] || (l[400] = [e('FAQ')])), _: 1 }
          ),
          l[413] ||
            (l[413] = o(
              'h3',
              { id: 'About the field attribute of form-item' },
              [
                e('About the '),
                o('code', null, 'field'),
                e(' attribute of '),
                o('code', null, 'form-item'),
              ],
              -1
            )),
          l[414] ||
            (l[414] = o(
              'p',
              null,
              [
                e('The value of the '),
                o('code', null, 'field'),
                e(
                  ' attribute is the path string to get the corresponding value of the current '
                ),
                o('code', null, 'form-item'),
                e('. Array division can also use '),
                o('code', null, '[]'),
                e(', for example '),
                o('code', null, 'field="people[2].id"'),
              ],
              -1
            )),
          l[415] ||
            (l[415] = o(
              'p',
              null,
              'For example, the data structure passed into the model property is:',
              -1
            )),
          l[416] ||
            (l[416] = o(
              'pre',
              { class: 'code-content' },
              [
                o('code', { class: 'language-lang' }, [
                  o('span', { class: 'token keyword' }, 'const'),
                  e(' data '),
                  o('span', { class: 'token operator' }, '='),
                  e(),
                  o('span', { class: 'token function' }, 'reactive'),
                  o('span', { class: 'token punctuation' }, '('),
                  o('span', { class: 'token punctuation' }, '{'),
                  e(`
   name`),
                  o('span', { class: 'token operator' }, ':'),
                  o('span', { class: 'token string' }, "'xiaoming'"),
                  o('span', { class: 'token punctuation' }, ','),
                  e(`
   people`),
                  o('span', { class: 'token operator' }, ':'),
                  o('span', { class: 'token punctuation' }, '['),
                  e(`
     `),
                  o('span', { class: 'token punctuation' }, '{'),
                  e(`
       id`),
                  o('span', { class: 'token operator' }, ':'),
                  o('span', { class: 'token string' }, "'1111'"),
                  e(`
     `),
                  o('span', { class: 'token punctuation' }, '}'),
                  o('span', { class: 'token punctuation' }, ','),
                  e(`
     `),
                  o('span', { class: 'token punctuation' }, '{'),
                  e(`
       `),
                  o('span', { class: 'token comment' }, '// bind this value'),
                  e(`
       id`),
                  o('span', { class: 'token operator' }, ':'),
                  o('span', { class: 'token string' }, "'2222'"),
                  e(`
     `),
                  o('span', { class: 'token punctuation' }, '}'),
                  e(`
   `),
                  o('span', { class: 'token punctuation' }, ']'),
                  e(`
`),
                  o('span', { class: 'token punctuation' }, '}'),
                  o('span', { class: 'token punctuation' }, ')'),
                  e(`
`),
                ]),
              ],
              -1
            )),
          l[417] ||
            (l[417] = o(
              'p',
              null,
              [
                e(
                  'At this point, if you want to specify the value corresponding to the current '
                ),
                o('code', null, 'form-item'),
                e(' as '),
                o('code', null, "id: '2222'"),
                e(', you need to set '),
                o('code', null, 'field="people.2.id"'),
                e(', and the separator in the value needs to use '),
                o('code', null, '.'),
              ],
              -1
            )),
          l[418] ||
            (l[418] = o(
              'h3',
              { id: 'About using clickable elements in the label slot' },
              'About using clickable elements in the label slot',
              -1
            )),
          l[419] ||
            (l[419] = o(
              'p',
              null,
              [
                e('The title area of the form component is wrapped with the '),
                o('code', null, 'label'),
                e(
                  ' element by default, which will activate the input component when clicked. If you put a clickable component in it, it will affect its normal function.'
                ),
                o('br'),
                e('At this point, you can use the '),
                o('code', null, 'label-component'),
                e(' attribute to modify the wrapping element to '),
                o('code', null, 'span'),
                e(' to solve this problem.'),
              ],
              -1
            )),
        ]),
        _: 1,
      },
      16,
      ['changelog']
    )
  );
}
const el = W(ll, [['render', tl]]);
export { el as default };
