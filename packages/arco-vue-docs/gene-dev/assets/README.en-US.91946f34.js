import {
  _ as z,
  d as Y,
  u as I,
  r as f,
  o as N,
  c as U,
  w as t,
  e as o,
  a as u,
  b as d,
  m as V,
} from './index.9c61ea88.js';
import {
  D as W,
  a as $,
  b as Z,
  c as J,
  d as R,
  e as j,
  f as L,
  g as O,
  h as X,
  i as q,
  j as G,
  k as K,
} from './use-12-hours.e1f01e72.js';

const b = [
  {
    version: '2.56.0',
    date: '2024-07-26',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>TriggerProps property not correctly passed through (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/3178">#3178</a>)</p>
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
          `<p>Fix issue with read-only mode still being editable (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/3173">#3173</a>)</p>
`,
          `<p>Added <code>placeholder</code> type definition (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/3173">#3173</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.44.6',
    date: '2023-03-31',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the bubbling behavior of the clear event. (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2271">#2271</a>)</p>
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
          `<p><code>time-picker</code> supports prefix slots (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1997">#1997</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.35.1',
    date: '2022-08-19',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix default value of size property in time-picker (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1513">#1513</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const Q = Y({
  name: 'ArcoMain',
  components: {
    DemoBasic: W,
    DemoRangepicker: $,
    DemoControl: Z,
    DemoDefaultValue: J,
    DemoSize: R,
    DemoDisabled: j,
    DemoDisabledTime: L,
    DemoDisableConfirm: O,
    DemoFormat: X,
    DemoStep: q,
    DemoExtra: G,
    DemoUse12Hours: K,
  },
  setup() {
    const { locale: s } = I();
    return {
      locale: s,
      data: {
        meta: { type: 'Component', category: 'Data Entry' },
        title: 'TimePicker',
        description:
          'Select the time on the pop-up panel to conveniently complete the time input control.',
      },
      changelog: typeof b === 'undefined' ? void 0 : b,
      getMessage: (a, g) => (s.value === 'zh-CN' ? a : g),
    };
  },
});
function _(s, l, y, x, a, g) {
  const D = f('demo-basic');
  const v = f('demo-rangepicker');
  const k = f('demo-control');
  const S = f('demo-default-value');
  const M = f('demo-size');
  const w = f('demo-disabled');
  const T = f('demo-disabled-time');
  const A = f('demo-disable-confirm');
  const P = f('demo-format');
  const H = f('demo-step');
  const F = f('demo-extra');
  const C = f('demo-use-12-hours');
  const E = f('anchor-head');
  const i = f('a-th');
  const e = f('a-tr');
  const r = f('a-thead');
  const n = f('a-td');
  const p = f('a-tbody');
  const m = f('a-table');
  const B = f('arco-article');
  return (
    N(),
    U(
      B,
      V(s.data, { changelog: s.changelog }),
      {
        default: t(() => [
          l[223] ||
            (l[223] = o(
              'p',
              null,
              [o('em', null, 'Auto translate by google.')],
              -1
            )),
          u(D),
          u(v),
          u(k),
          u(S),
          u(M),
          u(w),
          u(T),
          u(A),
          u(P),
          u(H),
          u(F),
          u(C),
          u(
            E,
            { level: '2', href: 'API' },
            { default: t(() => l[0] || (l[0] = [d('API')])), _: 1 }
          ),
          l[224] ||
            (l[224] = o(
              'h3',
              { id: 'time-picker Props' },
              [o('code', null, '<time-picker>'), d(' Props')],
              -1
            )),
          u(
            m,
            { class: 'component-api-table' },
            {
              default: t(() => [
                l[97] ||
                  (l[97] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                u(r, null, {
                  default: t(() => [
                    u(e, null, {
                      default: t(() => [
                        u(i, null, {
                          default: t(() => l[1] || (l[1] = [d('Attribute')])),
                          _: 1,
                        }),
                        u(i, null, {
                          default: t(() => l[2] || (l[2] = [d('Description')])),
                          _: 1,
                        }),
                        u(i, null, {
                          default: t(() => l[3] || (l[3] = [d('Type')])),
                          _: 1,
                        }),
                        u(i, null, {
                          default: t(() => l[4] || (l[4] = [d('Default')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                u(p, null, {
                  default: t(() => [
                    u(e, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(() => l[5] || (l[5] = [d('type')])),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () => l[6] || (l[6] = [d('Selector type')])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[7] ||
                              (l[7] = [
                                o('code', null, "'time' | 'time-range'", -1),
                              ])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[8] || (l[8] = [o('code', null, "'time'", -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(
                            () =>
                              l[9] ||
                              (l[9] = [
                                d('model-value '),
                                o('strong', null, '(v-model)', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(() => l[10] || (l[10] = [d('Value')])),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[11] ||
                              (l[11] = [
                                o(
                                  'code',
                                  null,
                                  'string | number | Date | Array<string | number | Date>',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () => l[12] || (l[12] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(
                            () => l[13] || (l[13] = [d('default-value')])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () => l[14] || (l[14] = [d('Default value')])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[15] ||
                              (l[15] = [
                                o(
                                  'code',
                                  null,
                                  'string | number | Date | Array<string | number | Date>',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () => l[16] || (l[16] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(() => l[17] || (l[17] = [d('disabled')])),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () => l[18] || (l[18] = [d('Whether to disable')])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[19] ||
                              (l[19] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[20] || (l[20] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(
                            () => l[21] || (l[21] = [d('allow-clear')])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[22] || (l[22] = [d('Whether to allow clear')])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[23] ||
                              (l[23] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[24] || (l[24] = [o('code', null, 'true', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(() => l[25] || (l[25] = [d('readonly')])),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[26] ||
                              (l[26] = [d('Whether it is read-only mode')])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[27] ||
                              (l[27] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[28] || (l[28] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(() => l[29] || (l[29] = [d('error')])),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[30] ||
                              (l[30] = [d('Whether it is an error state')])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[31] ||
                              (l[31] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[32] || (l[32] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(() => l[33] || (l[33] = [d('format')])),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[34] ||
                              (l[34] = [
                                d(
                                  'Display the format of the date, refer to [String Parsing Format](#String Parsing Format)'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[35] || (l[35] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[36] ||
                              (l[36] = [o('code', null, "'HH:mm:ss'", -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(
                            () => l[37] || (l[37] = [d('placeholder')])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () => l[38] || (l[38] = [d('Prompt copy')])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[39] ||
                              (l[39] = [
                                o('code', null, 'string | string[]', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () => l[40] || (l[40] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(() => l[41] || (l[41] = [d('size')])),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () => l[42] || (l[42] = [d('Input box size')])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[43] ||
                              (l[43] = [
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
                        u(n, null, {
                          default: t(
                            () =>
                              l[44] ||
                              (l[44] = [o('code', null, "'medium'", -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(
                            () => l[45] || (l[45] = [d('popup-container')])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[46] ||
                              (l[46] = [d('Mount container for pop-up box')])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[47] ||
                              (l[47] = [
                                o('code', null, 'string | HTMLElement', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () => l[48] || (l[48] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(
                            () => l[49] || (l[49] = [d('use12-hours')])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () => l[50] || (l[50] = [d('12 hour clock')])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[51] ||
                              (l[51] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[52] || (l[52] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(() => l[53] || (l[53] = [d('step')])),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[54] ||
                              (l[54] = [
                                d(
                                  'Set the hour/minute/second selection interval'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[55] ||
                              (l[55] = [
                                o(
                                  'code',
                                  null,
                                  '{ hour?: number; minute?: number; second?: number;}',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () => l[56] || (l[56] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(
                            () => l[57] || (l[57] = [d('disabled-hours')])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[58] ||
                              (l[58] = [d('Disabled partial hour options')])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[59] ||
                              (l[59] = [o('code', null, '() => number[]', -1)])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () => l[60] || (l[60] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(
                            () => l[61] || (l[61] = [d('disabled-minutes')])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[62] ||
                              (l[62] = [d('Disabled some minutes options')])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[63] ||
                              (l[63] = [
                                o(
                                  'code',
                                  null,
                                  '(selectedHour?: number) => number[]',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () => l[64] || (l[64] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(
                            () => l[65] || (l[65] = [d('disabled-seconds')])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[66] ||
                              (l[66] = [d('Disabled partial seconds option')])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[67] ||
                              (l[67] = [
                                o(
                                  'code',
                                  null,
                                  '(selectedHour?: number, selectedMinute?: number) => number[]',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () => l[68] || (l[68] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(
                            () =>
                              l[69] || (l[69] = [d('hide-disabled-options')])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[70] || (l[70] = [d('Hide prohibited options')])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[71] ||
                              (l[71] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[72] || (l[72] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(
                            () => l[73] || (l[73] = [d('disable-confirm')])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[74] ||
                              (l[74] = [
                                d(
                                  'Disable the confirmation step, click the time directly after opening, without clicking the confirmation button'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[75] ||
                              (l[75] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[76] || (l[76] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(() => l[77] || (l[77] = [d('position')])),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () => l[78] || (l[78] = [d('Pop-up position')])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[79] ||
                              (l[79] = [
                                o(
                                  'code',
                                  null,
                                  "'top' | 'tl' | 'tr' | 'bottom' | 'bl' | 'br'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[80] || (l[80] = [o('code', null, "'bl'", -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(
                            () =>
                              l[81] ||
                              (l[81] = [
                                d('popup-visible '),
                                o('strong', null, '(v-model)', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[82] ||
                              (l[82] = [
                                d('Control the pop-up box to open or close'),
                              ])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[83] ||
                              (l[83] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () => l[84] || (l[84] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(
                            () =>
                              l[85] || (l[85] = [d('default-popup-visible')])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[86] ||
                              (l[86] = [
                                d(
                                  'The pop-up box is opened or closed by default'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[87] ||
                              (l[87] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[88] || (l[88] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(
                            () => l[89] || (l[89] = [d('trigger-props')])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[90] ||
                              (l[90] = [
                                d('You can pass in the parameters of the '),
                                o('code', null, 'Trigger', -1),
                                d(' component'),
                              ])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[91] ||
                              (l[91] = [o('code', null, 'TriggerProps', -1)])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () => l[92] || (l[92] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(
                            () => l[93] || (l[93] = [d('unmount-on-close')])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[94] ||
                              (l[94] = [
                                d(
                                  'Whether to destroy the dom structure after closing'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[95] ||
                              (l[95] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[96] || (l[96] = [o('code', null, 'false', -1)])
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
          l[225] ||
            (l[225] = o(
              'h3',
              { id: 'time-picker Events' },
              [o('code', null, '<time-picker>'), d(' Events')],
              -1
            )),
          u(
            m,
            { class: 'component-api-table' },
            {
              default: t(() => [
                l[113] ||
                  (l[113] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                u(r, null, {
                  default: t(() => [
                    u(e, null, {
                      default: t(() => [
                        u(i, null, {
                          default: t(
                            () => l[98] || (l[98] = [d('Event Name')])
                          ),
                          _: 1,
                        }),
                        u(i, null, {
                          default: t(
                            () => l[99] || (l[99] = [d('Description')])
                          ),
                          _: 1,
                        }),
                        u(i, null, {
                          default: t(
                            () => l[100] || (l[100] = [d('Parameters')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                u(p, null, {
                  default: t(() => [
                    u(e, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(() => l[101] || (l[101] = [d('change')])),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[102] ||
                              (l[102] = [d('The component value changes')])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[103] ||
                              (l[103] = [
                                d('timeString: '),
                                o(
                                  'code',
                                  null,
                                  'string | Array<string | undefined> | undefined',
                                  -1
                                ),
                                o('br', null, null, -1),
                                d('time: '),
                                o(
                                  'code',
                                  null,
                                  'date | Array<date | undefined> | undefined',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(() => l[104] || (l[104] = [d('select')])),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[105] ||
                              (l[105] = [
                                d(
                                  'Select time but do not trigger component value change'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[106] ||
                              (l[106] = [
                                d('timeString: '),
                                o(
                                  'code',
                                  null,
                                  'string | Array<string | undefined>',
                                  -1
                                ),
                                o('br', null, null, -1),
                                d('time: '),
                                o(
                                  'code',
                                  null,
                                  'Date | Array<Date | undefined>',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(() => l[107] || (l[107] = [d('clear')])),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[108] || (l[108] = [d('Click the clear button')])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(() => l[109] || (l[109] = [d('-')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(
                            () =>
                              l[110] || (l[110] = [d('popup-visible-change')])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[111] ||
                              (l[111] = [d('Pop-up box expand and collapse')])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[112] ||
                              (l[112] = [
                                d('visible: '),
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
          l[226] ||
            (l[226] = o(
              'h3',
              { id: 'time-picker Slots' },
              [o('code', null, '<time-picker>'), d(' Slots')],
              -1
            )),
          u(
            m,
            { class: 'component-api-table' },
            {
              default: t(() => [
                l[128] ||
                  (l[128] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                u(r, null, {
                  default: t(() => [
                    u(e, null, {
                      default: t(() => [
                        u(i, null, {
                          default: t(
                            () => l[114] || (l[114] = [d('Slot Name')])
                          ),
                          _: 1,
                        }),
                        u(i, null, {
                          default: t(
                            () => l[115] || (l[115] = [d('Description')])
                          ),
                          _: 1,
                        }),
                        u(i, null, {
                          default: t(
                            () => l[116] || (l[116] = [d('Parameters')])
                          ),
                          _: 1,
                        }),
                        u(i, null, {
                          default: t(() => l[117] || (l[117] = [d('version')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                u(p, null, {
                  default: t(() => [
                    u(e, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(() => l[118] || (l[118] = [d('prefix')])),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () => l[119] || (l[119] = [d('Input box prefix')])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(() => l[120] || (l[120] = [d('-')])),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(() => l[121] || (l[121] = [d('2.41.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(
                            () => l[122] || (l[122] = [d('suffix-icon')])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[123] || (l[123] = [d('Input box suffix icon')])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(() => l[124] || (l[124] = [d('-')])),
                          _: 1,
                        }),
                        u(n),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(() => l[125] || (l[125] = [d('extra')])),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () => l[126] || (l[126] = [d('Extra footer')])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(() => l[127] || (l[127] = [d('-')])),
                          _: 1,
                        }),
                        u(n),
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
          l[227] ||
            (l[227] = o(
              'h3',
              { id: 'String parsing format' },
              'String parsing format',
              -1
            )),
          u(
            m,
            { class: 'component-api-table' },
            {
              default: t(() => [
                l[222] ||
                  (l[222] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                u(r, null, {
                  default: t(() => [
                    u(e, null, {
                      default: t(() => [
                        u(i, null, {
                          default: t(() => l[129] || (l[129] = [d('Format')])),
                          _: 1,
                        }),
                        u(i, null, {
                          default: t(() => l[130] || (l[130] = [d('Output')])),
                          _: 1,
                        }),
                        u(i, null, {
                          default: t(
                            () => l[131] || (l[131] = [d('Description')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                u(p, null, {
                  default: t(() => [
                    u(e, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(
                            () =>
                              l[132] || (l[132] = [o('code', null, 'YY', -1)])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(() => l[133] || (l[133] = [d('21')])),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () => l[134] || (l[134] = [d('Two-digit year')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(
                            () =>
                              l[135] || (l[135] = [o('code', null, 'YYYY', -1)])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(() => l[136] || (l[136] = [d('2021')])),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () => l[137] || (l[137] = [d('Four-digit year')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(
                            () =>
                              l[138] || (l[138] = [o('code', null, 'M', -1)])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(() => l[139] || (l[139] = [d('1-12')])),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[140] || (l[140] = [d('Month, starting from 1')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(
                            () =>
                              l[141] || (l[141] = [o('code', null, 'MM', -1)])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(() => l[142] || (l[142] = [d('01-12')])),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () => l[143] || (l[143] = [d('Month, two digits')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(
                            () =>
                              l[144] || (l[144] = [o('code', null, 'MMM', -1)])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(() => l[145] || (l[145] = [d('Jan-Dec')])),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[146] || (l[146] = [d('Abbreviated month name')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(
                            () =>
                              l[147] || (l[147] = [o('code', null, 'MMMM', -1)])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () => l[148] || (l[148] = [d('January-December')])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () => l[149] || (l[149] = [d('Full month name')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(
                            () =>
                              l[150] || (l[150] = [o('code', null, 'D', -1)])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(() => l[151] || (l[151] = [d('1-31')])),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () => l[152] || (l[152] = [d('Day of the month')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(
                            () =>
                              l[153] || (l[153] = [o('code', null, 'DD', -1)])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(() => l[154] || (l[154] = [d('01-31')])),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[155] ||
                              (l[155] = [d('Day of the month, two digits')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(
                            () =>
                              l[156] || (l[156] = [o('code', null, 'd', -1)])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(() => l[157] || (l[157] = [d('0-6')])),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[158] ||
                              (l[158] = [d('Day of the week, Sunday is 0')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(
                            () =>
                              l[159] || (l[159] = [o('code', null, 'dd', -1)])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(() => l[160] || (l[160] = [d('Su-Sa')])),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[161] ||
                              (l[161] = [
                                d('The shortest name of the day of the week'),
                              ])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(
                            () =>
                              l[162] || (l[162] = [o('code', null, 'ddd', -1)])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(() => l[163] || (l[163] = [d('Sun-Sat')])),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[164] ||
                              (l[164] = [
                                d('Abbreviated name of the day of the week'),
                              ])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(
                            () =>
                              l[165] || (l[165] = [o('code', null, 'dddd', -1)])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () => l[166] || (l[166] = [d('Sunday-Saturday')])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[167] ||
                              (l[167] = [d('The name of the day of the week')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(
                            () =>
                              l[168] || (l[168] = [o('code', null, 'H', -1)])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(() => l[169] || (l[169] = [d('0-23')])),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(() => l[170] || (l[170] = [d('Hour')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(
                            () =>
                              l[171] || (l[171] = [o('code', null, 'HH', -1)])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(() => l[172] || (l[172] = [d('00-23')])),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () => l[173] || (l[173] = [d('Hour, two digits')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(
                            () =>
                              l[174] || (l[174] = [o('code', null, 'h', -1)])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(() => l[175] || (l[175] = [d('1-12')])),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[176] || (l[176] = [d('Hour, 12-hour clock')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(
                            () =>
                              l[177] || (l[177] = [o('code', null, 'hh', -1)])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(() => l[178] || (l[178] = [d('01-12')])),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[179] ||
                              (l[179] = [d('Hour, 12-hour clock, two digits')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(
                            () =>
                              l[180] || (l[180] = [o('code', null, 'm', -1)])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(() => l[181] || (l[181] = [d('0-59')])),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(() => l[182] || (l[182] = [d('Minute')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(
                            () =>
                              l[183] || (l[183] = [o('code', null, 'mm', -1)])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(() => l[184] || (l[184] = [d('00-59')])),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () => l[185] || (l[185] = [d('Minute, two digits')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(
                            () =>
                              l[186] || (l[186] = [o('code', null, 's', -1)])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(() => l[187] || (l[187] = [d('0-59')])),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(() => l[188] || (l[188] = [d('Second')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(
                            () =>
                              l[189] || (l[189] = [o('code', null, 'ss', -1)])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(() => l[190] || (l[190] = [d('00-59')])),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () => l[191] || (l[191] = [d('Second, two digits')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(
                            () =>
                              l[192] || (l[192] = [o('code', null, 'S', -1)])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(() => l[193] || (l[193] = [d('0-9')])),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[194] ||
                              (l[194] = [
                                d('Hundreds of milliseconds, one digits'),
                              ])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(
                            () =>
                              l[195] || (l[195] = [o('code', null, 'SS', -1)])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(() => l[196] || (l[196] = [d('00-99')])),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[197] ||
                              (l[197] = [d('Tens of milliseconds, two digits')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(
                            () =>
                              l[198] || (l[198] = [o('code', null, 'SSS', -1)])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(() => l[199] || (l[199] = [d('000-999')])),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[200] ||
                              (l[200] = [d('Millisecond, three digits')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(
                            () =>
                              l[201] || (l[201] = [o('code', null, 'Z', -1)])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(() => l[202] || (l[202] = [d('-5:00')])),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () => l[203] || (l[203] = [d('UTC offset')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(
                            () =>
                              l[204] || (l[204] = [o('code', null, 'ZZ', -1)])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(() => l[205] || (l[205] = [d('-0500')])),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[206] ||
                              (l[206] = [
                                d('UTC offset, add 0 in front of the number'),
                              ])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(
                            () =>
                              l[207] || (l[207] = [o('code', null, 'A', -1)])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(() => l[208] || (l[208] = [d('AM PM')])),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(() => l[209] || (l[209] = [d('-')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(
                            () =>
                              l[210] || (l[210] = [o('code', null, 'a', -1)])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(() => l[211] || (l[211] = [d('am pm')])),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(() => l[212] || (l[212] = [d('-')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(
                            () =>
                              l[213] || (l[213] = [o('code', null, 'Do', -1)])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () => l[214] || (l[214] = [d('1st... 3st')])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[215] ||
                              (l[215] = [d('Day of month with serial number')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(
                            () =>
                              l[216] || (l[216] = [o('code', null, 'X', -1)])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () => l[217] || (l[217] = [d('1410715640.579')])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () => l[218] || (l[218] = [d('Unix timestamp')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(
                            () =>
                              l[219] || (l[219] = [o('code', null, 'x', -1)])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () => l[220] || (l[220] = [d('1410715640579')])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[221] ||
                              (l[221] = [d('Unix millisecond timestamp')])
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
const ll = z(Q, [['render', _]]);
export { ll as default };
