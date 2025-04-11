import {
  _ as z,
  d as Y,
  u as N,
  r as e,
  o as U,
  c as V,
  w as n,
  a as l,
  b as d,
  e as o,
  m as $,
} from './index.9c61ea88.js';
import {
  D as I,
  a as Z,
  b as J,
  c as R,
  d as j,
  e as L,
  f as X,
  g as q,
  h as G,
  i as K,
  j as O,
  k as Q,
} from './use-12-hours.e1f01e72.js';

const D = [
  {
    version: '2.56.0',
    date: '2024-07-26',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} \u95EE\u9898\u4FEE\u590D',
        list: [
          `<p>triggerProps \u5C5E\u6027\u672A\u6B63\u786E\u900F\u4F20\u95EE\u9898 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/3178">#3178</a>)</p>
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
        typeText: '\u{1F41B} \u95EE\u9898\u4FEE\u590D',
        list: [
          `<p>\u4FEE\u590D\u53EA\u8BFB\u6A21\u5F0F\u4ECD\u53EF\u7F16\u8F91\u95EE\u9898 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/3173">#3173</a>)</p>
`,
          `<p>\u8865\u5145 <code>placeholder</code> \u7C7B\u578B\u5B9A\u4E49 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/3173">#3173</a>)</p>
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
        typeText: '\u{1F41B} \u95EE\u9898\u4FEE\u590D',
        list: [
          `<p>\u4FEE\u590D\u6E05\u9664\u4E8B\u4EF6\u5192\u6CE1\u884C\u4E3A (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2271">#2271</a>)</p>
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
        typeText: '\u{1F195} \u65B0\u589E\u529F\u80FD',
        list: [
          `<p><code>time-picker</code> \u652F\u6301 <code>prefix</code> \u63D2\u69FD\u3002 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1997">#1997</a>)</p>
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
        typeText: '\u{1F41B} \u95EE\u9898\u4FEE\u590D',
        list: [
          `<p>\u4FEE\u590D time-picker \u4E2D size \u5C5E\u6027\u7684\u9ED8\u8BA4\u503C\u95EE\u9898 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1513">#1513</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const W = Y({
  name: 'ArcoMain',
  components: {
    DemoBasic: I,
    DemoRangepicker: Z,
    DemoControl: J,
    DemoDefaultValue: R,
    DemoSize: j,
    DemoDisabled: L,
    DemoDisabledTime: X,
    DemoDisableConfirm: q,
    DemoFormat: G,
    DemoStep: K,
    DemoExtra: O,
    DemoUse12Hours: Q,
  },
  setup() {
    const { locale: r } = N();
    return {
      locale: r,
      data: {
        meta: { type: '\u7EC4\u4EF6', category: '\u6570\u636E\u8F93\u5165' },
        title: '\u65F6\u95F4\u9009\u62E9\u5668 TimePicker',
        description:
          '\u5728\u5F39\u51FA\u9762\u677F\u4E0A\u9009\u62E9\u65F6\u95F4\uFF0C\u4EE5\u4FBF\u6377\u5B8C\u6210\u65F6\u95F4\u8F93\u5165\u7684\u63A7\u4EF6\u3002',
      },
      changelog: typeof D === 'undefined' ? void 0 : D,
      getMessage: (p, E) => (r.value === 'zh-CN' ? p : E),
    };
  },
});
function _(r, u, g, C, p, E) {
  const a = e('demo-basic');
  const b = e('demo-rangepicker');
  const B = e('demo-control');
  const A = e('demo-default-value');
  const x = e('demo-size');
  const y = e('demo-disabled');
  const v = e('demo-disabled-time');
  const k = e('demo-disable-confirm');
  const M = e('demo-format');
  const S = e('demo-step');
  const T = e('demo-extra');
  const H = e('demo-use-12-hours');
  const P = e('anchor-head');
  const s = e('a-th');
  const f = e('a-tr');
  const F = e('a-thead');
  const t = e('a-td');
  const i = e('a-tbody');
  const m = e('a-table');
  const w = e('arco-article');
  return (
    U(),
    V(
      w,
      $(r.data, { changelog: r.changelog }),
      {
        default: n(() => [
          l(a),
          l(b),
          l(B),
          l(A),
          l(x),
          l(y),
          l(v),
          l(k),
          l(M),
          l(S),
          l(T),
          l(H),
          l(
            P,
            { level: '2', href: 'API' },
            { default: n(() => u[0] || (u[0] = [d('API')])), _: 1 }
          ),
          u[223] ||
            (u[223] = o(
              'h3',
              { id: 'time-picker Props' },
              [o('code', null, '<time-picker>'), d(' Props')],
              -1
            )),
          l(
            m,
            { class: 'component-api-table' },
            {
              default: n(() => [
                u[97] ||
                  (u[97] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                l(F, null, {
                  default: n(() => [
                    l(f, null, {
                      default: n(() => [
                        l(s, null, {
                          default: n(
                            () => u[1] || (u[1] = [d('\u53C2\u6570\u540D')])
                          ),
                          _: 1,
                        }),
                        l(s, null, {
                          default: n(
                            () => u[2] || (u[2] = [d('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        l(s, null, {
                          default: n(
                            () => u[3] || (u[3] = [d('\u7C7B\u578B')])
                          ),
                          _: 1,
                        }),
                        l(s, null, {
                          default: n(
                            () => u[4] || (u[4] = [d('\u9ED8\u8BA4\u503C')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                l(i, null, {
                  default: n(() => [
                    l(f, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[5] || (u[5] = [d('type')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[6] ||
                              (u[6] = [d('\u9009\u62E9\u5668\u7C7B\u578B')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[7] ||
                              (u[7] = [
                                o('code', null, "'time' | 'time-range'", -1),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[8] || (u[8] = [o('code', null, "'time'", -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () =>
                              u[9] ||
                              (u[9] = [
                                d('model-value '),
                                o('strong', null, '(v-model)', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[10] || (u[10] = [d('\u7ED1\u5B9A\u503C')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[11] ||
                              (u[11] = [
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
                        l(t, null, {
                          default: n(
                            () => u[12] || (u[12] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () => u[13] || (u[13] = [d('default-value')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[14] || (u[14] = [d('\u9ED8\u8BA4\u503C')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[15] ||
                              (u[15] = [
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
                        l(t, null, {
                          default: n(
                            () => u[16] || (u[16] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[17] || (u[17] = [d('disabled')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[18] || (u[18] = [d('\u662F\u5426\u7981\u7528')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[19] ||
                              (u[19] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[20] || (u[20] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () => u[21] || (u[21] = [d('allow-clear')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[22] ||
                              (u[22] = [
                                d('\u662F\u5426\u5141\u8BB8\u6E05\u9664'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[23] ||
                              (u[23] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[24] || (u[24] = [o('code', null, 'true', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[25] || (u[25] = [d('readonly')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[26] ||
                              (u[26] = [
                                d('\u662F\u5426\u4E3A\u53EA\u8BFB\u6A21\u5F0F'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[27] ||
                              (u[27] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[28] || (u[28] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[29] || (u[29] = [d('error')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[30] ||
                              (u[30] = [
                                d('\u662F\u5426\u4E3A\u9519\u8BEF\u72B6\u6001'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[31] ||
                              (u[31] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[32] || (u[32] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[33] || (u[33] = [d('format')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[34] ||
                              (u[34] = [
                                d(
                                  '\u5C55\u793A\u65E5\u671F\u7684\u683C\u5F0F\uFF0C\u53C2\u8003'
                                ),
                                o(
                                  'a',
                                  {
                                    class: 'link',
                                    href: '#%E5%AD%97%E7%AC%A6%E4%B8%B2%E8%A7%A3%E6%9E%90%E6%A0%BC%E5%BC%8F',
                                  },
                                  '\u5B57\u7B26\u4E32\u89E3\u6790\u683C\u5F0F',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[35] || (u[35] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[36] ||
                              (u[36] = [o('code', null, "'HH:mm:ss'", -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () => u[37] || (u[37] = [d('placeholder')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[38] || (u[38] = [d('\u63D0\u793A\u6587\u6848')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[39] ||
                              (u[39] = [
                                o('code', null, 'string | string[]', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[40] || (u[40] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[41] || (u[41] = [d('size')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[42] ||
                              (u[42] = [d('\u8F93\u5165\u6846\u5C3A\u5BF8')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[43] ||
                              (u[43] = [
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
                        l(t, null, {
                          default: n(
                            () =>
                              u[44] ||
                              (u[44] = [o('code', null, "'medium'", -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () => u[45] || (u[45] = [d('popup-container')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[46] ||
                              (u[46] = [
                                d(
                                  '\u5F39\u51FA\u6846\u7684\u6302\u8F7D\u5BB9\u5668'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[47] ||
                              (u[47] = [
                                o('code', null, 'string | HTMLElement', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[48] || (u[48] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () => u[49] || (u[49] = [d('use12-hours')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[50] || (u[50] = [d('12 \u5C0F\u65F6\u5236')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[51] ||
                              (u[51] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[52] || (u[52] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[53] || (u[53] = [d('step')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[54] ||
                              (u[54] = [
                                d(
                                  '\u8BBE\u7F6E \u65F6 / \u5206 / \u79D2 \u7684\u9009\u62E9\u95F4\u9694'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[55] ||
                              (u[55] = [
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
                        l(t, null, {
                          default: n(
                            () => u[56] || (u[56] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () => u[57] || (u[57] = [d('disabled-hours')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[58] ||
                              (u[58] = [
                                d(
                                  '\u7981\u7528\u7684\u90E8\u5206\u5C0F\u65F6\u9009\u9879'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[59] ||
                              (u[59] = [o('code', null, '() => number[]', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[60] || (u[60] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () => u[61] || (u[61] = [d('disabled-minutes')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[62] ||
                              (u[62] = [
                                d(
                                  '\u7981\u7528\u7684\u90E8\u5206\u5206\u949F\u9009\u9879'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[63] ||
                              (u[63] = [
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
                        l(t, null, {
                          default: n(
                            () => u[64] || (u[64] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () => u[65] || (u[65] = [d('disabled-seconds')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[66] ||
                              (u[66] = [
                                d(
                                  '\u7981\u7528\u7684\u90E8\u5206\u79D2\u6570\u9009\u9879'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[67] ||
                              (u[67] = [
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
                        l(t, null, {
                          default: n(
                            () => u[68] || (u[68] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () =>
                              u[69] || (u[69] = [d('hide-disabled-options')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[70] ||
                              (u[70] = [
                                d(
                                  '\u9690\u85CF\u7981\u6B62\u9009\u62E9\u7684\u9009\u9879'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[71] ||
                              (u[71] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[72] || (u[72] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () => u[73] || (u[73] = [d('disable-confirm')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[74] ||
                              (u[74] = [
                                d(
                                  '\u7981\u7528\u786E\u8BA4\u6B65\u9AA4\uFF0C\u5F00\u542F\u540E\u76F4\u63A5\u70B9\u9009\u65F6\u95F4\u4E0D\u9700\u8981\u70B9\u51FB\u786E\u8BA4\u6309\u94AE'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[75] ||
                              (u[75] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[76] || (u[76] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[77] || (u[77] = [d('position')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[78] ||
                              (u[78] = [d('\u5F39\u51FA\u7684\u4F4D\u7F6E')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[79] ||
                              (u[79] = [
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
                        l(t, null, {
                          default: n(
                            () =>
                              u[80] || (u[80] = [o('code', null, "'bl'", -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () =>
                              u[81] ||
                              (u[81] = [
                                d('popup-visible '),
                                o('strong', null, '(v-model)', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[82] ||
                              (u[82] = [
                                d(
                                  '\u63A7\u5236\u5F39\u51FA\u6846\u6253\u5F00\u6216\u8005\u5173\u95ED'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[83] ||
                              (u[83] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[84] || (u[84] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () =>
                              u[85] || (u[85] = [d('default-popup-visible')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[86] ||
                              (u[86] = [
                                d(
                                  '\u5F39\u51FA\u6846\u9ED8\u8BA4\u6253\u5F00\u6216\u8005\u5173\u95ED'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[87] ||
                              (u[87] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[88] || (u[88] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () => u[89] || (u[89] = [d('trigger-props')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[90] ||
                              (u[90] = [
                                d('\u53EF\u4EE5\u4F20\u5165 '),
                                o('code', null, 'Trigger', -1),
                                d(' \u7EC4\u4EF6\u7684\u53C2\u6570'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[91] ||
                              (u[91] = [o('code', null, 'TriggerProps', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[92] || (u[92] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () => u[93] || (u[93] = [d('unmount-on-close')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[94] ||
                              (u[94] = [
                                d(
                                  '\u662F\u5426\u5728\u5173\u95ED\u540E\u9500\u6BC1 dom \u7ED3\u6784'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[95] ||
                              (u[95] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[96] || (u[96] = [o('code', null, 'false', -1)])
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
          u[224] ||
            (u[224] = o(
              'h3',
              { id: 'time-picker Events' },
              [o('code', null, '<time-picker>'), d(' Events')],
              -1
            )),
          l(
            m,
            { class: 'component-api-table' },
            {
              default: n(() => [
                u[113] ||
                  (u[113] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                l(F, null, {
                  default: n(() => [
                    l(f, null, {
                      default: n(() => [
                        l(s, null, {
                          default: n(
                            () => u[98] || (u[98] = [d('\u4E8B\u4EF6\u540D')])
                          ),
                          _: 1,
                        }),
                        l(s, null, {
                          default: n(
                            () => u[99] || (u[99] = [d('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        l(s, null, {
                          default: n(
                            () => u[100] || (u[100] = [d('\u53C2\u6570')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                l(i, null, {
                  default: n(() => [
                    l(f, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[101] || (u[101] = [d('change')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[102] ||
                              (u[102] = [
                                d('\u7EC4\u4EF6\u503C\u53D1\u751F\u6539\u53D8'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[103] ||
                              (u[103] = [
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
                    l(f, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[104] || (u[104] = [d('select')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[105] ||
                              (u[105] = [
                                d(
                                  '\u9009\u62E9\u65F6\u95F4\u4F46\u672A\u89E6\u53D1\u7EC4\u4EF6\u503C\u53D8\u5316'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[106] ||
                              (u[106] = [
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
                    l(f, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[107] || (u[107] = [d('clear')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[108] ||
                              (u[108] = [
                                d('\u70B9\u51FB\u6E05\u9664\u6309\u94AE'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(() => u[109] || (u[109] = [d('-')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () =>
                              u[110] || (u[110] = [d('popup-visible-change')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[111] ||
                              (u[111] = [
                                d(
                                  '\u5F39\u51FA\u6846\u5C55\u5F00\u548C\u6536\u8D77'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[112] ||
                              (u[112] = [
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
          u[225] ||
            (u[225] = o(
              'h3',
              { id: 'time-picker Slots' },
              [o('code', null, '<time-picker>'), d(' Slots')],
              -1
            )),
          l(
            m,
            { class: 'component-api-table' },
            {
              default: n(() => [
                u[128] ||
                  (u[128] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                l(F, null, {
                  default: n(() => [
                    l(f, null, {
                      default: n(() => [
                        l(s, null, {
                          default: n(
                            () => u[114] || (u[114] = [d('\u63D2\u69FD\u540D')])
                          ),
                          _: 1,
                        }),
                        l(s, null, {
                          default: n(
                            () => u[115] || (u[115] = [d('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        l(s, null, {
                          default: n(
                            () => u[116] || (u[116] = [d('\u53C2\u6570')])
                          ),
                          _: 1,
                        }),
                        l(s, null, {
                          default: n(
                            () => u[117] || (u[117] = [d('\u7248\u672C')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                l(i, null, {
                  default: n(() => [
                    l(f, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[118] || (u[118] = [d('prefix')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[119] ||
                              (u[119] = [d('\u8F93\u5165\u6846\u524D\u7F00')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(() => u[120] || (u[120] = [d('-')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(() => u[121] || (u[121] = [d('2.41.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () => u[122] || (u[122] = [d('suffix-icon')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[123] ||
                              (u[123] = [
                                d('\u8F93\u5165\u6846\u540E\u7F00\u56FE\u6807'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(() => u[124] || (u[124] = [d('-')])),
                          _: 1,
                        }),
                        l(t),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[125] || (u[125] = [d('extra')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[126] ||
                              (u[126] = [d('\u989D\u5916\u7684\u9875\u811A')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(() => u[127] || (u[127] = [d('-')])),
                          _: 1,
                        }),
                        l(t),
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
          u[226] ||
            (u[226] = o(
              'h3',
              { id: '\u5B57\u7B26\u4E32\u89E3\u6790\u683C\u5F0F' },
              '\u5B57\u7B26\u4E32\u89E3\u6790\u683C\u5F0F',
              -1
            )),
          l(
            m,
            { class: 'component-api-table' },
            {
              default: n(() => [
                u[222] ||
                  (u[222] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                l(F, null, {
                  default: n(() => [
                    l(f, null, {
                      default: n(() => [
                        l(s, null, {
                          default: n(
                            () => u[129] || (u[129] = [d('\u683C\u5F0F')])
                          ),
                          _: 1,
                        }),
                        l(s, null, {
                          default: n(
                            () => u[130] || (u[130] = [d('\u8F93\u51FA')])
                          ),
                          _: 1,
                        }),
                        l(s, null, {
                          default: n(
                            () => u[131] || (u[131] = [d('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                l(i, null, {
                  default: n(() => [
                    l(f, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () =>
                              u[132] || (u[132] = [o('code', null, 'YY', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(() => u[133] || (u[133] = [d('21')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[134] ||
                              (u[134] = [
                                d('\u4E24\u4F4D\u6570\u7684\u5E74\u4EFD'),
                              ])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () =>
                              u[135] || (u[135] = [o('code', null, 'YYYY', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(() => u[136] || (u[136] = [d('2021')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[137] ||
                              (u[137] = [d('\u56DB\u4F4D\u6570\u5E74\u4EFD')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () =>
                              u[138] || (u[138] = [o('code', null, 'M', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(() => u[139] || (u[139] = [d('1-12')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[140] ||
                              (u[140] = [
                                d('\u6708\u4EFD\uFF0C\u4ECE 1 \u5F00\u59CB'),
                              ])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () =>
                              u[141] || (u[141] = [o('code', null, 'MM', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(() => u[142] || (u[142] = [d('01-12')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[143] ||
                              (u[143] = [
                                d('\u6708\u4EFD\uFF0C\u4E24\u4F4D\u6570'),
                              ])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () =>
                              u[144] || (u[144] = [o('code', null, 'MMM', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(() => u[145] || (u[145] = [d('Jan-Dec')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[146] ||
                              (u[146] = [
                                d('\u7F29\u5199\u7684\u6708\u4EFD\u540D\u79F0'),
                              ])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () =>
                              u[147] || (u[147] = [o('code', null, 'MMMM', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[148] || (u[148] = [d('January-December')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[149] ||
                              (u[149] = [
                                d('\u5B8C\u6574\u7684\u6708\u4EFD\u540D\u79F0'),
                              ])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () =>
                              u[150] || (u[150] = [o('code', null, 'D', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(() => u[151] || (u[151] = [d('1-31')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[152] ||
                              (u[152] = [
                                d('\u6708\u4EFD\u91CC\u7684\u4E00\u5929'),
                              ])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () =>
                              u[153] || (u[153] = [o('code', null, 'DD', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(() => u[154] || (u[154] = [d('01-31')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[155] ||
                              (u[155] = [
                                d(
                                  '\u6708\u4EFD\u91CC\u7684\u4E00\u5929\uFF0C\u4E24\u4F4D\u6570'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () =>
                              u[156] || (u[156] = [o('code', null, 'd', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(() => u[157] || (u[157] = [d('0-6')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[158] ||
                              (u[158] = [
                                d(
                                  '\u4E00\u5468\u4E2D\u7684\u4E00\u5929\uFF0C\u661F\u671F\u5929\u662F 0'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () =>
                              u[159] || (u[159] = [o('code', null, 'dd', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(() => u[160] || (u[160] = [d('Su-Sa')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[161] ||
                              (u[161] = [
                                d(
                                  '\u6700\u7B80\u5199\u7684\u4E00\u5468\u4E2D\u4E00\u5929\u7684\u540D\u79F0'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () =>
                              u[162] || (u[162] = [o('code', null, 'ddd', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(() => u[163] || (u[163] = [d('Sun-Sat')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[164] ||
                              (u[164] = [
                                d(
                                  '\u7B80\u5199\u7684\u4E00\u5468\u4E2D\u4E00\u5929\u7684\u540D\u79F0'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () =>
                              u[165] || (u[165] = [o('code', null, 'dddd', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[166] || (u[166] = [d('Sunday-Saturday')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[167] ||
                              (u[167] = [
                                d(
                                  '\u4E00\u5468\u4E2D\u4E00\u5929\u7684\u540D\u79F0'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () =>
                              u[168] || (u[168] = [o('code', null, 'H', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(() => u[169] || (u[169] = [d('0-23')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[170] || (u[170] = [d('\u5C0F\u65F6')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () =>
                              u[171] || (u[171] = [o('code', null, 'HH', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(() => u[172] || (u[172] = [d('00-23')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[173] ||
                              (u[173] = [
                                d('\u5C0F\u65F6\uFF0C\u4E24\u4F4D\u6570'),
                              ])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () =>
                              u[174] || (u[174] = [o('code', null, 'h', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(() => u[175] || (u[175] = [d('1-12')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[176] ||
                              (u[176] = [
                                d('\u5C0F\u65F6, 12 \u5C0F\u65F6\u5236'),
                              ])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () =>
                              u[177] || (u[177] = [o('code', null, 'hh', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(() => u[178] || (u[178] = [d('01-12')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[179] ||
                              (u[179] = [
                                d(
                                  '\u5C0F\u65F6, 12 \u5C0F\u65F6\u5236, \u4E24\u4F4D\u6570'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () =>
                              u[180] || (u[180] = [o('code', null, 'm', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(() => u[181] || (u[181] = [d('0-59')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[182] || (u[182] = [d('\u5206\u949F')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () =>
                              u[183] || (u[183] = [o('code', null, 'mm', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(() => u[184] || (u[184] = [d('00-59')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[185] ||
                              (u[185] = [
                                d('\u5206\u949F\uFF0C\u4E24\u4F4D\u6570'),
                              ])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () =>
                              u[186] || (u[186] = [o('code', null, 's', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(() => u[187] || (u[187] = [d('0-59')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(() => u[188] || (u[188] = [d('\u79D2')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () =>
                              u[189] || (u[189] = [o('code', null, 'ss', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(() => u[190] || (u[190] = [d('00-59')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[191] ||
                              (u[191] = [d('\u79D2\uFF0C\u4E24\u4F4D\u6570')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () =>
                              u[192] || (u[192] = [o('code', null, 'S', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(() => u[193] || (u[193] = [d('0-9')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[194] ||
                              (u[194] = [
                                d(
                                  '\u6570\u767E\u6BEB\u79D2\uFF0C\u4E00\u4F4D\u6570'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () =>
                              u[195] || (u[195] = [o('code', null, 'SS', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(() => u[196] || (u[196] = [d('00-99')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[197] ||
                              (u[197] = [
                                d(
                                  '\u51E0\u5341\u6BEB\u79D2\uFF0C\u4E24\u4F4D\u6570'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () =>
                              u[198] || (u[198] = [o('code', null, 'SSS', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(() => u[199] || (u[199] = [d('000-999')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[200] ||
                              (u[200] = [
                                d('\u6BEB\u79D2\uFF0C\u4E09\u4F4D\u6570\u5B57'),
                              ])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () =>
                              u[201] || (u[201] = [o('code', null, 'Z', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(() => u[202] || (u[202] = [d('-5:00')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[203] ||
                              (u[203] = [d('UTC \u7684\u504F\u79FB\u91CF')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () =>
                              u[204] || (u[204] = [o('code', null, 'ZZ', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(() => u[205] || (u[205] = [d('-0500')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[206] ||
                              (u[206] = [
                                d(
                                  'UTC \u7684\u504F\u79FB\u91CF\uFF0C\u6570\u5B57\u524D\u9762\u52A0\u4E0A 0'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () =>
                              u[207] || (u[207] = [o('code', null, 'A', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(() => u[208] || (u[208] = [d('AM PM')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(() => u[209] || (u[209] = [d('-')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () =>
                              u[210] || (u[210] = [o('code', null, 'a', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(() => u[211] || (u[211] = [d('am pm')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(() => u[212] || (u[212] = [d('-')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () =>
                              u[213] || (u[213] = [o('code', null, 'Do', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[214] || (u[214] = [d('1st... 3st')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[215] ||
                              (u[215] = [
                                d(
                                  '\u5E26\u5E8F\u53F7\u7684\u6708\u4EFD\u4E2D\u7684\u67D0\u5929'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () =>
                              u[216] || (u[216] = [o('code', null, 'X', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[217] || (u[217] = [d('1410715640.579')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[218] ||
                              (u[218] = [d('Unix \u65F6\u95F4\u6233')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () =>
                              u[219] || (u[219] = [o('code', null, 'x', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[220] || (u[220] = [d('1410715640579')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[221] ||
                              (u[221] = [
                                d('Unix \u6BEB\u79D2\u65F6\u95F4\u6233'),
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
const uu = z(W, [['render', _]]);
export { uu as default };
