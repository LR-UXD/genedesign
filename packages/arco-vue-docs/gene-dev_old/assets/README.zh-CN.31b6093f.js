import {
  _ as y,
  d as x,
  u as k,
  r as s,
  o as w,
  c as T,
  w as t,
  a as l,
  b as d,
  e as o,
  m as P,
} from './index.9c61ea88.js';
import { D as M, a as V, b as N } from './footer.c0d9405b.js';

const g = [
  {
    version: '2.52.0',
    date: '2023-09-22',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} \u65B0\u589E\u529F\u80FD',
        list: [
          `<p>\u589E\u52A0\u4E0B\u62C9\u83DC\u5355\u6EDA\u52A8\u4E8B\u4EF6 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2635">#2635</a>)</p>
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
        typeText: '\u{1F195} \u65B0\u589E\u529F\u80FD',
        list: [
          `<p>\u6DFB\u52A0\u865A\u62DF\u5217\u8868\u652F\u6301 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2596">#2596</a>)</p>
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
        typeText: '\u{1F195} \u65B0\u589E\u529F\u80FD',
        list: [
          `<p>\u589E\u52A0 focus \u548C blur \u65B9\u6CD5 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1809">#1809</a>)</p>
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
        typeText: '\u{1F195} \u65B0\u589E\u529F\u80FD',
        list: [
          `<p>\u589E\u52A0<code>footer</code>\u63D2\u69FD (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1445">#1445</a>)</p>
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
        typeText: '\u{1F195} \u65B0\u589E\u529F\u80FD',
        list: [
          `<p>\u589E\u52A0 allow-clear \u5C5E\u6027\u548C\u4E8B\u4EF6 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/951">#951</a>)</p>
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
        typeText: '\u{1F195} \u65B0\u589E\u529F\u80FD',
        list: [
          `<p>\u589E\u52A0 input \u4E2D\u7684\u63D2\u69FD\u548C option \u63D2\u69FD\u652F\u6301 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/482">#482</a>)</p>
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
        typeText: '\u{1F41B} \u95EE\u9898\u4FEE\u590D',
        list: [
          `<p>\u4FEE\u590D disabled \u4E0D\u53EF\u7528\u7684\u95EE\u9898 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/310">#310</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const S = x({
  name: 'ArcoMain',
  components: { DemoBasic: M, DemoStrict: V, DemoFooter: N },
  setup() {
    const { locale: r } = k();
    return {
      locale: r,
      data: {
        meta: { type: '\u7EC4\u4EF6', category: '\u6570\u636E\u8F93\u5165' },
        title: '\u81EA\u52A8\u8865\u5168 AutoComplete',
        description:
          '\u8F93\u5165\u6846\u7684\u81EA\u52A8\u8865\u5168\u529F\u80FD\u3002',
      },
      changelog: typeof g === 'undefined' ? void 0 : g,
      getMessage: (F, m) => (r.value === 'zh-CN' ? F : m),
    };
  },
});
function I(r, u, E, D, F, m) {
  const C = s('demo-basic');
  const A = s('demo-strict');
  const v = s('demo-footer');
  const B = s('anchor-head');
  const f = s('a-th');
  const e = s('a-tr');
  const i = s('a-thead');
  const n = s('a-td');
  const p = s('a-tbody');
  const a = s('a-table');
  const b = s('arco-article');
  return (
    w(),
    T(
      b,
      P(r.data, { changelog: r.changelog }),
      {
        default: t(() => [
          l(C),
          l(A),
          l(v),
          l(
            B,
            { level: '2', href: 'API' },
            { default: t(() => u[0] || (u[0] = [d('API')])), _: 1 }
          ),
          u[104] ||
            (u[104] = o(
              'h3',
              { id: 'auto-complete Props' },
              [o('code', null, '<auto-complete>'), d(' Props')],
              -1
            )),
          l(
            a,
            { class: 'component-api-table' },
            {
              default: t(() => [
                u[49] ||
                  (u[49] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                l(i, null, {
                  default: t(() => [
                    l(e, null, {
                      default: t(() => [
                        l(f, null, {
                          default: t(
                            () => u[1] || (u[1] = [d('\u53C2\u6570\u540D')])
                          ),
                          _: 1,
                        }),
                        l(f, null, {
                          default: t(
                            () => u[2] || (u[2] = [d('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        l(f, null, {
                          default: t(
                            () => u[3] || (u[3] = [d('\u7C7B\u578B')])
                          ),
                          _: 1,
                        }),
                        l(f, null, {
                          default: t(
                            () => u[4] || (u[4] = [d('\u9ED8\u8BA4\u503C')])
                          ),
                          _: 1,
                        }),
                        l(f, null, {
                          default: t(
                            () => u[5] || (u[5] = [d('\u7248\u672C')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                l(p, null, {
                  default: t(() => [
                    l(e, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(
                            () =>
                              u[6] ||
                              (u[6] = [
                                d('model-value '),
                                o('strong', null, '(v-model)', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () => u[7] || (u[7] = [d('\u7ED1\u5B9A\u503C')])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[8] || (u[8] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () => u[9] || (u[9] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        l(n),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(
                            () => u[10] || (u[10] = [d('default-value')])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[11] ||
                              (u[11] = [
                                d(
                                  '\u9ED8\u8BA4\u503C\uFF08\u975E\u53D7\u63A7\u6A21\u5F0F\uFF09'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[12] || (u[12] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () => u[13] || (u[13] = [o('code', null, "''", -1)])
                          ),
                          _: 1,
                        }),
                        l(n),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[14] || (u[14] = [d('disabled')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[15] || (u[15] = [d('\u662F\u5426\u7981\u7528')])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[16] ||
                              (u[16] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[17] || (u[17] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        l(n),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[18] || (u[18] = [d('data')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[19] ||
                              (u[19] = [
                                d(
                                  '\u7528\u4E8E\u81EA\u52A8\u63D0\u793A\u7684\u6570\u636E'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[20] ||
                              (u[20] = [
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
                        l(n, null, {
                          default: t(
                            () => u[21] || (u[21] = [o('code', null, '[]', -1)])
                          ),
                          _: 1,
                        }),
                        l(n),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(
                            () => u[22] || (u[22] = [d('popup-container')])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[23] ||
                              (u[23] = [
                                d(
                                  '\u5F39\u51FA\u6846\u7684\u6302\u8F7D\u5BB9\u5668'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[24] ||
                              (u[24] = [
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
                        l(n, null, {
                          default: t(
                            () => u[25] || (u[25] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        l(n),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[26] || (u[26] = [d('strict')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[27] ||
                              (u[27] = [
                                d(
                                  '\u662F\u5426\u4E3A\u4E25\u683C\u6821\u9A8C\u6A21\u5F0F'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[28] ||
                              (u[28] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[29] || (u[29] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        l(n),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(
                            () => u[30] || (u[30] = [d('filter-option')])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[31] ||
                              (u[31] = [
                                d(
                                  '\u81EA\u5B9A\u4E49\u9009\u9879\u8FC7\u6EE4\u65B9\u6CD5'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[32] ||
                              (u[32] = [o('code', null, 'FilterOption', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[33] || (u[33] = [o('code', null, 'true', -1)])
                          ),
                          _: 1,
                        }),
                        l(n),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(
                            () => u[34] || (u[34] = [d('trigger-props')])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[35] ||
                              (u[35] = [d('trigger \u7EC4\u4EF6\u5C5E\u6027')])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[36] ||
                              (u[36] = [o('code', null, 'TriggerProps', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () => u[37] || (u[37] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(() => u[38] || (u[38] = [d('2.14.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(
                            () => u[39] || (u[39] = [d('allow-clear')])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[40] ||
                              (u[40] = [
                                d(
                                  '\u662F\u5426\u5141\u8BB8\u6E05\u7A7A\u8F93\u5165\u6846'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[41] ||
                              (u[41] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[42] || (u[42] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(() => u[43] || (u[43] = [d('2.23.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(
                            () => u[44] || (u[44] = [d('virtual-list-props')])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[45] ||
                              (u[45] = [
                                d(
                                  '\u4F20\u9012\u865A\u62DF\u5217\u8868\u5C5E\u6027\uFF0C\u4F20\u5165\u6B64\u53C2\u6570\u4EE5\u5F00\u542F\u865A\u62DF\u6EDA\u52A8 '
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
                        l(n, null, {
                          default: t(
                            () =>
                              u[46] ||
                              (u[46] = [
                                o('code', null, 'VirtualListProps', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () => u[47] || (u[47] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(() => u[48] || (u[48] = [d('2.50.0')])),
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
          u[105] ||
            (u[105] = o(
              'h3',
              { id: 'auto-complete Events' },
              [o('code', null, '<auto-complete>'), d(' Events')],
              -1
            )),
          l(
            a,
            { class: 'component-api-table' },
            {
              default: t(() => [
                u[75] ||
                  (u[75] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                l(i, null, {
                  default: t(() => [
                    l(e, null, {
                      default: t(() => [
                        l(f, null, {
                          default: t(
                            () => u[50] || (u[50] = [d('\u4E8B\u4EF6\u540D')])
                          ),
                          _: 1,
                        }),
                        l(f, null, {
                          default: t(
                            () => u[51] || (u[51] = [d('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        l(f, null, {
                          default: t(
                            () => u[52] || (u[52] = [d('\u53C2\u6570')])
                          ),
                          _: 1,
                        }),
                        l(f, null, {
                          default: t(
                            () => u[53] || (u[53] = [d('\u7248\u672C')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                l(p, null, {
                  default: t(() => [
                    l(e, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[54] || (u[54] = [d('change')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[55] ||
                              (u[55] = [
                                d(
                                  '\u7ED1\u5B9A\u503C\u53D1\u751F\u6539\u53D8\u65F6\u89E6\u53D1'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[56] ||
                              (u[56] = [
                                d('value: '),
                                o('code', null, 'string', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[57] || (u[57] = [d('search')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[58] ||
                              (u[58] = [
                                d('\u7528\u6237\u641C\u7D22\u65F6\u89E6\u53D1'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[59] ||
                              (u[59] = [
                                d('value: '),
                                o('code', null, 'string', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[60] || (u[60] = [d('select')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[61] ||
                              (u[61] = [
                                d('\u9009\u62E9\u9009\u9879\u65F6\u89E6\u53D1'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[62] ||
                              (u[62] = [
                                d('value: '),
                                o('code', null, 'string', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[63] || (u[63] = [d('clear')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[64] ||
                              (u[64] = [
                                d(
                                  '\u7528\u6237\u70B9\u51FB\u6E05\u9664\u6309\u94AE\u65F6\u89E6\u53D1'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[65] ||
                              (u[65] = [
                                d('ev: '),
                                o('code', null, 'Event', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(() => u[66] || (u[66] = [d('2.23.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(
                            () => u[67] || (u[67] = [d('dropdown-scroll')])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[68] ||
                              (u[68] = [
                                d(
                                  '\u4E0B\u62C9\u83DC\u5355\u53D1\u751F\u6EDA\u52A8\u65F6\u89E6\u53D1'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[69] ||
                              (u[69] = [
                                d('ev: '),
                                o('code', null, 'Event', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(() => u[70] || (u[70] = [d('2.52.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(
                            () =>
                              u[71] || (u[71] = [d('dropdown-reach-bottom')])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[72] ||
                              (u[72] = [
                                d(
                                  '\u4E0B\u62C9\u83DC\u5355\u6EDA\u52A8\u5230\u5E95\u90E8\u65F6\u89E6\u53D1'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[73] ||
                              (u[73] = [
                                d('ev: '),
                                o('code', null, 'Event', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(() => u[74] || (u[74] = [d('2.52.0')])),
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
          u[106] ||
            (u[106] = o(
              'h3',
              { id: 'auto-complete Methods' },
              [o('code', null, '<auto-complete>'), d(' Methods')],
              -1
            )),
          l(
            a,
            { class: 'component-api-table' },
            {
              default: t(() => [
                u[91] ||
                  (u[91] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                l(i, null, {
                  default: t(() => [
                    l(e, null, {
                      default: t(() => [
                        l(f, null, {
                          default: t(
                            () => u[76] || (u[76] = [d('\u65B9\u6CD5\u540D')])
                          ),
                          _: 1,
                        }),
                        l(f, null, {
                          default: t(
                            () => u[77] || (u[77] = [d('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        l(f, null, {
                          default: t(
                            () => u[78] || (u[78] = [d('\u53C2\u6570')])
                          ),
                          _: 1,
                        }),
                        l(f, null, {
                          default: t(
                            () => u[79] || (u[79] = [d('\u8FD4\u56DE\u503C')])
                          ),
                          _: 1,
                        }),
                        l(f, null, {
                          default: t(
                            () => u[80] || (u[80] = [d('\u7248\u672C')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                l(p, null, {
                  default: t(() => [
                    l(e, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[81] || (u[81] = [d('focus')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[82] ||
                              (u[82] = [
                                d(
                                  '\u4F7F\u8F93\u5165\u6846\u83B7\u53D6\u7126\u70B9'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(() => u[83] || (u[83] = [d('-')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(() => u[84] || (u[84] = [d('-')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(() => u[85] || (u[85] = [d('2.40.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[86] || (u[86] = [d('blur')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[87] ||
                              (u[87] = [
                                d(
                                  '\u4F7F\u8F93\u5165\u6846\u5931\u53BB\u7126\u70B9'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(() => u[88] || (u[88] = [d('-')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(() => u[89] || (u[89] = [d('-')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(() => u[90] || (u[90] = [d('2.40.0')])),
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
          u[107] ||
            (u[107] = o(
              'h3',
              { id: 'auto-complete Slots' },
              [o('code', null, '<auto-complete>'), d(' Slots')],
              -1
            )),
          l(
            a,
            { class: 'component-api-table' },
            {
              default: t(() => [
                u[103] ||
                  (u[103] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                l(i, null, {
                  default: t(() => [
                    l(e, null, {
                      default: t(() => [
                        l(f, null, {
                          default: t(
                            () => u[92] || (u[92] = [d('\u63D2\u69FD\u540D')])
                          ),
                          _: 1,
                        }),
                        l(f, null, {
                          default: t(
                            () => u[93] || (u[93] = [d('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        l(f, null, {
                          default: t(
                            () => u[94] || (u[94] = [d('\u53C2\u6570')])
                          ),
                          _: 1,
                        }),
                        l(f, null, {
                          default: t(
                            () => u[95] || (u[95] = [d('\u7248\u672C')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                l(p, null, {
                  default: t(() => [
                    l(e, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[96] || (u[96] = [d('option')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[97] || (u[97] = [d('\u9009\u9879\u5185\u5BB9')])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[98] ||
                              (u[98] = [
                                d('data: '),
                                o('code', null, 'OptionInfo', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(() => u[99] || (u[99] = [d('2.13.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[100] || (u[100] = [d('footer')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[101] ||
                              (u[101] = [
                                d('\u5F39\u51FA\u6846\u7684\u9875\u811A'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(() => u[102] || (u[102] = [d('-')])),
                          _: 1,
                        }),
                        l(n),
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
const $ = y(S, [['render', I]]);
export { $ as default };
