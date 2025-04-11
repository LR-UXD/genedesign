import {
  _ as V,
  d as B,
  u as I,
  r as s,
  o as N,
  c as M,
  w as t,
  e as o,
  a as e,
  b as u,
  m as $,
} from './index.9c61ea88.js';
import {
  D as j,
  a as W,
  b as L,
  c as O,
  d as R,
  e as U,
  f as q,
  g as G,
  h as H,
  i as J,
} from './icon.834e2941.js';
import './index.2b17769d.js';
import './index.5bc6c633.js';

const b = [
  {
    version: '2.52.1',
    date: '2023-10-13',
    list: [
      {
        type: 'enhancement',
        typeText: '\u{1F48E} Enhancement',
        list: [
          `<p>Optimize handling of <code>undefined</code> and <code>null</code> values (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2737">#2737</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.45.0',
    date: '2023-04-07',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>add text props (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2223">#2223</a>)</p>
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
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem that the custom color style is wrong when the type is <code>line</code> (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2044">#2044</a>)</p>
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
          `<p>Fixed the switch component whose type is line, size is small, and the checked state dot offset is incorrect (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1975">#1975</a>)</p>
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
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix value of hook before state change (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1859">#1859</a>)</p>
`,
          `<p>Fix style token issue (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1859">#1859</a>)</p>
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
          `<p>support <code>beforeChange</code> intercept change event (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1626">#1626</a>)</p>
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
        type: 'style',
        typeText: '\u{1F485} Style',
        list: [
          `<p>Fixed the occasional jitter problem of switch animation (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/656">#656</a>)</p>
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
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>Added <code>checked-value</code> and <code>unchecked-value</code> attributes (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/444">#444</a>)</p>
`,
          `<p>Added <code>checked-color</code> and <code>unchecked-color</code> attributes (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/444">#444</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const K = B({
  name: 'ArcoMain',
  components: {
    DemoBasic: j,
    DemoType: W,
    DemoSize: L,
    DemoDisabled: O,
    DemoColor: R,
    DemoValue: U,
    DemoChangeIntercept: q,
    DemoLoading: G,
    DemoText: H,
    DemoIcon: J,
  },
  setup() {
    const { locale: a } = I();
    return {
      locale: a,
      data: {
        meta: { type: 'Component', category: 'Data Entry' },
        title: 'Switch',
        description:
          'Mutually exclusive operation controls, users can turn on or turn off a certain function.',
      },
      changelog: typeof b === 'undefined' ? void 0 : b,
      getMessage: (m, g) => (a.value === 'zh-CN' ? m : g),
    };
  },
});
function Q(a, l, v, y, m, g) {
  const w = s('demo-basic');
  const x = s('demo-type');
  const k = s('demo-size');
  const D = s('demo-disabled');
  const T = s('demo-color');
  const F = s('demo-value');
  const z = s('demo-change-intercept');
  const C = s('demo-loading');
  const E = s('demo-text');
  const P = s('demo-icon');
  const A = s('anchor-head');
  const i = s('a-th');
  const d = s('a-tr');
  const f = s('a-thead');
  const n = s('a-td');
  const r = s('a-tbody');
  const p = s('a-table');
  const S = s('arco-article');
  return (
    N(),
    M(
      S,
      $(a.data, { changelog: a.changelog }),
      {
        default: t(() => [
          l[95] ||
            (l[95] = o(
              'p',
              null,
              [o('em', null, 'Auto translate by google.')],
              -1
            )),
          e(w),
          e(x),
          e(k),
          e(D),
          e(T),
          e(F),
          e(z),
          e(C),
          e(E),
          e(P),
          e(
            A,
            { level: '2', href: 'API' },
            { default: t(() => l[0] || (l[0] = [u('API')])), _: 1 }
          ),
          l[96] ||
            (l[96] = o(
              'h3',
              { id: 'switch Props' },
              [o('code', null, '<switch>'), u(' Props')],
              -1
            )),
          e(
            p,
            { class: 'component-api-table' },
            {
              default: t(() => [
                l[65] ||
                  (l[65] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                e(f, null, {
                  default: t(() => [
                    e(d, null, {
                      default: t(() => [
                        e(i, null, {
                          default: t(() => l[1] || (l[1] = [u('Attribute')])),
                          _: 1,
                        }),
                        e(i, null, {
                          default: t(() => l[2] || (l[2] = [u('Description')])),
                          _: 1,
                        }),
                        e(i, null, {
                          default: t(() => l[3] || (l[3] = [u('Type')])),
                          _: 1,
                        }),
                        e(i, null, {
                          default: t(() => l[4] || (l[4] = [u('Default')])),
                          _: 1,
                        }),
                        e(i, null, {
                          default: t(() => l[5] || (l[5] = [u('version')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                e(r, null, {
                  default: t(() => [
                    e(d, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () =>
                              l[6] ||
                              (l[6] = [
                                u('model-value '),
                                o('strong', null, '(v-model)', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(() => l[7] || (l[7] = [u('Value')])),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[8] ||
                              (l[8] = [
                                o('code', null, 'string|number|boolean', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () => l[9] || (l[9] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        e(n),
                      ]),
                      _: 1,
                    }),
                    e(d, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () => l[10] || (l[10] = [u('default-checked')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[11] ||
                              (l[11] = [
                                u(
                                  'Default selected state (uncontrolled state)'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[12] ||
                              (l[12] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[13] || (l[13] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        e(n),
                      ]),
                      _: 1,
                    }),
                    e(d, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(() => l[14] || (l[14] = [u('disabled')])),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () => l[15] || (l[15] = [u('Whether to disable')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[16] ||
                              (l[16] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[17] || (l[17] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        e(n),
                      ]),
                      _: 1,
                    }),
                    e(d, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(() => l[18] || (l[18] = [u('loading')])),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[19] ||
                              (l[19] = [u('Whether it is loading state')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[20] ||
                              (l[20] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[21] || (l[21] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        e(n),
                      ]),
                      _: 1,
                    }),
                    e(d, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(() => l[22] || (l[22] = [u('type')])),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () => l[23] || (l[23] = [u('Type of switch')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[24] ||
                              (l[24] = [
                                o(
                                  'code',
                                  null,
                                  "'circle' | 'round' | 'line'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[25] ||
                              (l[25] = [o('code', null, "'circle'", -1)])
                          ),
                          _: 1,
                        }),
                        e(n),
                      ]),
                      _: 1,
                    }),
                    e(d, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(() => l[26] || (l[26] = [u('size')])),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () => l[27] || (l[27] = [u('Size of switch')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[28] ||
                              (l[28] = [
                                o('code', null, "'small' | 'medium'", -1),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[29] ||
                              (l[29] = [o('code', null, "'medium'", -1)])
                          ),
                          _: 1,
                        }),
                        e(n),
                      ]),
                      _: 1,
                    }),
                    e(d, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () => l[30] || (l[30] = [u('checked-value')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () => l[31] || (l[31] = [u('Value when checked')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[32] ||
                              (l[32] = [
                                o('code', null, 'string|number|boolean', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[33] || (l[33] = [o('code', null, 'true', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(() => l[34] || (l[34] = [u('2.12.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    e(d, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () => l[35] || (l[35] = [u('unchecked-value')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () => l[36] || (l[36] = [u('Value when unchecked')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[37] ||
                              (l[37] = [
                                o('code', null, 'string|number|boolean', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[38] || (l[38] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(() => l[39] || (l[39] = [u('2.12.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    e(d, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () => l[40] || (l[40] = [u('checked-color')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[41] ||
                              (l[41] = [
                                u('The color of the switch when checked'),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[42] || (l[42] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () => l[43] || (l[43] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(() => l[44] || (l[44] = [u('2.12.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    e(d, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () => l[45] || (l[45] = [u('unchecked-color')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[46] ||
                              (l[46] = [
                                u('The color of the switch when unchecked'),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[47] || (l[47] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () => l[48] || (l[48] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(() => l[49] || (l[49] = [u('2.12.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    e(d, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () => l[50] || (l[50] = [u('before-change')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[51] ||
                              (l[51] = [
                                u(
                                  'before-change hook before the switch state changes. If false is returned or a Promise is returned and then is rejected, will stop switching'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[52] ||
                              (l[52] = [
                                o(
                                  'code',
                                  null,
                                  '( newValue: string | number | boolean) => Promise<boolean | void> | boolean | void',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () => l[53] || (l[53] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(() => l[54] || (l[54] = [u('2.37.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    e(d, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () => l[55] || (l[55] = [u('checked-text')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[56] ||
                              (l[56] = [
                                u(
                                  'Copywriting when opened (not effective when '
                                ),
                                o('code', null, "type='line'", -1),
                                u(' and '),
                                o('code', null, "size='small'", -1),
                                u(')'),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[57] || (l[57] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () => l[58] || (l[58] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(() => l[59] || (l[59] = [u('2.45.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    e(d, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () => l[60] || (l[60] = [u('unchecked-text')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[61] ||
                              (l[61] = [
                                u(
                                  'Copywriting when closed (not effective when '
                                ),
                                o('code', null, "type='line'", -1),
                                u(' and '),
                                o('code', null, "size='small'", -1),
                                u(')'),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[62] || (l[62] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () => l[63] || (l[63] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(() => l[64] || (l[64] = [u('2.45.0')])),
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
          l[97] ||
            (l[97] = o(
              'h3',
              { id: 'switch Events' },
              [o('code', null, '<switch>'), u(' Events')],
              -1
            )),
          e(
            p,
            { class: 'component-api-table' },
            {
              default: t(() => [
                l[78] ||
                  (l[78] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                e(f, null, {
                  default: t(() => [
                    e(d, null, {
                      default: t(() => [
                        e(i, null, {
                          default: t(
                            () => l[66] || (l[66] = [u('Event Name')])
                          ),
                          _: 1,
                        }),
                        e(i, null, {
                          default: t(
                            () => l[67] || (l[67] = [u('Description')])
                          ),
                          _: 1,
                        }),
                        e(i, null, {
                          default: t(
                            () => l[68] || (l[68] = [u('Parameters')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                e(r, null, {
                  default: t(() => [
                    e(d, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(() => l[69] || (l[69] = [u('change')])),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[70] ||
                              (l[70] = [u('Trigger when the value changes')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[71] ||
                              (l[71] = [
                                u('value: '),
                                o(
                                  'code',
                                  null,
                                  'boolean | string | number',
                                  -1
                                ),
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
                    e(d, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(() => l[72] || (l[72] = [u('focus')])),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[73] ||
                              (l[73] = [
                                u('Triggered when the component gets focus'),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[74] ||
                              (l[74] = [
                                u('ev: '),
                                o('code', null, 'FocusEvent', -1),
                              ])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    e(d, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(() => l[75] || (l[75] = [u('blur')])),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[76] ||
                              (l[76] = [
                                u('Fired when the component loses focus'),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[77] ||
                              (l[77] = [
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
          l[98] ||
            (l[98] = o(
              'h3',
              { id: 'switch Slots' },
              [o('code', null, '<switch>'), u(' Slots')],
              -1
            )),
          e(
            p,
            { class: 'component-api-table' },
            {
              default: t(() => [
                l[94] ||
                  (l[94] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                e(f, null, {
                  default: t(() => [
                    e(d, null, {
                      default: t(() => [
                        e(i, null, {
                          default: t(() => l[79] || (l[79] = [u('Slot Name')])),
                          _: 1,
                        }),
                        e(i, null, {
                          default: t(
                            () => l[80] || (l[80] = [u('Description')])
                          ),
                          _: 1,
                        }),
                        e(i, null, {
                          default: t(
                            () => l[81] || (l[81] = [u('Parameters')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                e(r, null, {
                  default: t(() => [
                    e(d, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () => l[82] || (l[82] = [u('checked-icon')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[83] ||
                              (l[83] = [
                                u('The icon on the button when opened'),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(() => l[84] || (l[84] = [u('-')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    e(d, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () => l[85] || (l[85] = [u('unchecked-icon')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[86] ||
                              (l[86] = [
                                u('The icon on the button when closed'),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(() => l[87] || (l[87] = [u('-')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    e(d, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(() => l[88] || (l[88] = [u('checked')])),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[89] ||
                              (l[89] = [
                                u(
                                  'Copywriting when opened (not effective when '
                                ),
                                o('code', null, "type='line'", -1),
                                u(' and '),
                                o('code', null, "size='small'", -1),
                                u(')'),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(() => l[90] || (l[90] = [u('-')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    e(d, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(() => l[91] || (l[91] = [u('unchecked')])),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[92] ||
                              (l[92] = [
                                u(
                                  'Copywriting when closed (not effective when '
                                ),
                                o('code', null, "type='line'", -1),
                                u(' and '),
                                o('code', null, "size='small'", -1),
                                u(')'),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(() => l[93] || (l[93] = [u('-')])),
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
const h = V(K, [['render', Q]]);
export { h as default };
