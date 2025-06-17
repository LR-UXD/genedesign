import {
  _ as v,
  d as w,
  u as k,
  r as s,
  o as P,
  c as S,
  w as t,
  a as l,
  b as d,
  e as o,
  m as T,
} from './index.9c61ea88.js';
import { D as N, a as j, b as H, c as M } from './countdown.b3b987a2.js';
import './index.2b17769d.js';
import './index.5bc6c633.js';

const g = [
  {
    version: '2.49.2',
    date: '2023-07-28',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} \u95EE\u9898\u4FEE\u590D',
        list: [
          `<p>\u4FEE\u590D <code>value-style</code> \u5728\u6570\u5B57\u5185\u5BB9\u65F6\u4E0D\u80FD\u4FEE\u6539\u5B57\u4F53\u5927\u5C0F\u7684\u95EE\u9898 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2600">#2600</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.32.0',
    date: '2022-06-24',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} \u65B0\u589E\u529F\u80FD',
        list: [
          `<p>\u652F\u6301\u81EA\u5B9A\u4E49\u663E\u793A\u503C\u6837\u5F0F (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1320">#1320</a>)</p>
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
        type: 'feature',
        typeText: '\u{1F195} \u65B0\u589E\u529F\u80FD',
        list: [
          `<p>\u589E\u52A0 <code>placeholder</code> \u5C5E\u6027\uFF0C\u7528\u4E8E\u65E0\u503C\u65F6\u663E\u793A (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1179">#1179</a>)</p>
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
        typeText: '\u{1F41B} \u95EE\u9898\u4FEE\u590D',
        list: [
          `<p>\u4FEE\u590D\u52A8\u6001\u8D4B\u503C\u95EE\u9898 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/534">#534</a>)</p>
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
        type: 'feature',
        typeText: '\u{1F195} \u65B0\u589E\u529F\u80FD',
        list: [
          `<p>value \u503C\u652F\u6301\u54CD\u5E94\u5F0F\u4FEE\u6539 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/514">#514</a>)</p>
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
        type: 'bugfix',
        typeText: '\u{1F41B} \u95EE\u9898\u4FEE\u590D',
        list: [
          `<p>\u4FEE\u590D precision \u4E3A 0 \u65F6\u6CA1\u6709\u751F\u6548\u7684\u95EE\u9898 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/357">#357</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const $ = w({
  name: 'ArcoMain',
  components: {
    DemoBasic: N,
    DemoPrefix: j,
    DemoAnimation: H,
    DemoCountdown: M,
  },
  setup() {
    const { locale: i } = k();
    return {
      locale: i,
      data: {
        meta: { type: '\u7EC4\u4EF6', category: '\u6570\u636E\u5C55\u793A' },
        title: '\u6570\u503C\u663E\u793A Statistic',
        description:
          '\u7A81\u51FA\u5C55\u793A\u67D0\u4E2A\u6216\u67D0\u7EC4\u6570\u5B57\u3001\u5E26\u63CF\u8FF0\u7684\u7EDF\u8BA1\u7C7B\u6570\u636E\u3002',
      },
      changelog: typeof g === 'undefined' ? void 0 : g,
      getMessage: (F, m) => (i.value === 'zh-CN' ? F : m),
    };
  },
});
function I(i, u, C, A, F, m) {
  const B = s('demo-basic');
  const E = s('demo-prefix');
  const D = s('demo-animation');
  const b = s('demo-countdown');
  const y = s('anchor-head');
  const e = s('a-th');
  const f = s('a-tr');
  const r = s('a-thead');
  const n = s('a-td');
  const p = s('a-tbody');
  const a = s('a-table');
  const x = s('arco-article');
  return (
    P(),
    S(
      x,
      T(i.data, { changelog: i.changelog }),
      {
        default: t(() => [
          l(B),
          l(E),
          l(D),
          l(b),
          l(
            y,
            { level: '2', href: 'API' },
            { default: t(() => u[0] || (u[0] = [d('API')])), _: 1 }
          ),
          u[122] ||
            (u[122] = o(
              'h3',
              { id: 'statistic Props' },
              [o('code', null, '<statistic>'), d(' Props')],
              -1
            )),
          l(
            a,
            { class: 'component-api-table' },
            {
              default: t(() => [
                u[60] ||
                  (u[60] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                l(r, null, {
                  default: t(() => [
                    l(f, null, {
                      default: t(() => [
                        l(e, null, {
                          default: t(
                            () => u[1] || (u[1] = [d('\u53C2\u6570\u540D')])
                          ),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(
                            () => u[2] || (u[2] = [d('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(
                            () => u[3] || (u[3] = [d('\u7C7B\u578B')])
                          ),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(
                            () => u[4] || (u[4] = [d('\u9ED8\u8BA4\u503C')])
                          ),
                          _: 1,
                        }),
                        l(e, null, {
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
                    l(f, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[6] || (u[6] = [d('title')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[7] ||
                              (u[7] = [
                                d('\u6570\u503C\u663E\u793A\u7684\u6807\u9898'),
                              ])
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
                    l(f, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[10] || (u[10] = [d('value')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[11] ||
                              (u[11] = [
                                d('\u6570\u503C\u663E\u793A\u7684\u503C'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[12] ||
                              (u[12] = [o('code', null, 'number | Date', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () => u[13] || (u[13] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        l(n),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[14] || (u[14] = [d('format')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[15] ||
                              (u[15] = [
                                d(
                                  '\u6570\u503C\u663E\u793A\u7684\u683C\u5F0F '
                                ),
                                o(
                                  'a',
                                  {
                                    class: 'link',
                                    href: 'https://day.js.org/docs/en/display/format',
                                  },
                                  'dayjs',
                                  -1
                                ),
                                d(
                                  '\uFF08\u65E5\u671F\u6A21\u5F0F\u4F7F\u7528\uFF09'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[16] || (u[16] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[17] ||
                              (u[17] = [o('code', null, "'HH:mm:ss'", -1)])
                          ),
                          _: 1,
                        }),
                        l(n),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[18] || (u[18] = [d('extra')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[19] ||
                              (u[19] = [
                                d('\u989D\u5916\u7684\u663E\u793A\u5185\u5BB9'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[20] || (u[20] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () => u[21] || (u[21] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        l(n),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[22] || (u[22] = [d('start')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[23] ||
                              (u[23] = [
                                d('\u662F\u5426\u5F00\u59CB\u52A8\u753B'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[24] ||
                              (u[24] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[25] || (u[25] = [o('code', null, 'true', -1)])
                          ),
                          _: 1,
                        }),
                        l(n),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[26] || (u[26] = [d('precision')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[27] ||
                              (u[27] = [
                                d(
                                  '\u5C0F\u6570\u4FDD\u7559\u4F4D\u6570\uFF08\u6570\u5B57\u6A21\u5F0F\u4F7F\u7528\uFF09'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[28] || (u[28] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () => u[29] || (u[29] = [o('code', null, '0', -1)])
                          ),
                          _: 1,
                        }),
                        l(n),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[30] || (u[30] = [d('separator')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[31] ||
                              (u[31] = [
                                d(
                                  '\u8FDB\u4F4D\u5206\u9694\u7B26\uFF08\u6570\u5B57\u6A21\u5F0F\u4F7F\u7528\uFF09'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[32] || (u[32] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () => u[33] || (u[33] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        l(n),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(
                            () => u[34] || (u[34] = [d('show-group-separator')])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[35] ||
                              (u[35] = [
                                d(
                                  '\u662F\u5426\u5C55\u793A\u8FDB\u4F4D\u5206\u9694\u7B26\uFF08\u6570\u5B57\u6A21\u5F0F\u4F7F\u7528\uFF09'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[36] ||
                              (u[36] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[37] || (u[37] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        l(n),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[38] || (u[38] = [d('animation')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[39] ||
                              (u[39] = [
                                d('\u662F\u5426\u5F00\u542F\u52A8\u753B'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[40] ||
                              (u[40] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[41] || (u[41] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        l(n),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(
                            () => u[42] || (u[42] = [d('animation-duration')])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[43] ||
                              (u[43] = [
                                d('\u52A8\u753B\u7684\u8FC7\u5EA6\u65F6\u95F4'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[44] || (u[44] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[45] || (u[45] = [o('code', null, '2000', -1)])
                          ),
                          _: 1,
                        }),
                        l(n),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(
                            () => u[46] || (u[46] = [d('value-from')])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[47] ||
                              (u[47] = [
                                d('\u52A8\u753B\u7684\u8D77\u59CB\u503C'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[48] || (u[48] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () => u[49] || (u[49] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        l(n),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(
                            () => u[50] || (u[50] = [d('placeholder')])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[51] ||
                              (u[51] = [
                                d(
                                  '\u63D0\u793A\u6587\u5B57\uFF08\u5F53 value \u4E3A undefined \u65F6\u663E\u793A\uFF09'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[52] || (u[52] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () => u[53] || (u[53] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(() => u[54] || (u[54] = [d('2.28.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(
                            () => u[55] || (u[55] = [d('value-style')])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[56] ||
                              (u[56] = [
                                d(
                                  '\u81EA\u5B9A\u4E49\u663E\u793A\u503C\u7684\u6837\u5F0F'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[57] ||
                              (u[57] = [o('code', null, 'CSSProperties', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () => u[58] || (u[58] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(() => u[59] || (u[59] = [d('2.32.0')])),
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
          u[123] ||
            (u[123] = o(
              'h3',
              { id: 'statistic Slots' },
              [o('code', null, '<statistic>'), d(' Slots')],
              -1
            )),
          l(
            a,
            { class: 'component-api-table' },
            {
              default: t(() => [
                u[76] ||
                  (u[76] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                l(r, null, {
                  default: t(() => [
                    l(f, null, {
                      default: t(() => [
                        l(e, null, {
                          default: t(
                            () => u[61] || (u[61] = [d('\u63D2\u69FD\u540D')])
                          ),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(
                            () => u[62] || (u[62] = [d('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(
                            () => u[63] || (u[63] = [d('\u53C2\u6570')])
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
                    l(f, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[64] || (u[64] = [d('title')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () => u[65] || (u[65] = [d('\u6807\u9898')])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(() => u[66] || (u[66] = [d('-')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[67] || (u[67] = [d('prefix')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () => u[68] || (u[68] = [d('\u524D\u7F00')])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(() => u[69] || (u[69] = [d('-')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[70] || (u[70] = [d('suffix')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () => u[71] || (u[71] = [d('\u540E\u7F00')])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(() => u[72] || (u[72] = [d('-')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[73] || (u[73] = [d('extra')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[74] || (u[74] = [d('\u989D\u5916\u5185\u5BB9')])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(() => u[75] || (u[75] = [d('-')])),
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
          u[124] ||
            (u[124] = o(
              'h3',
              { id: 'countdown Props' },
              [o('code', null, '<countdown>'), d(' Props')],
              -1
            )),
          l(
            a,
            { class: 'component-api-table' },
            {
              default: t(() => [
                u[107] ||
                  (u[107] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                l(r, null, {
                  default: t(() => [
                    l(f, null, {
                      default: t(() => [
                        l(e, null, {
                          default: t(
                            () => u[77] || (u[77] = [d('\u53C2\u6570\u540D')])
                          ),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(
                            () => u[78] || (u[78] = [d('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(
                            () => u[79] || (u[79] = [d('\u7C7B\u578B')])
                          ),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(
                            () => u[80] || (u[80] = [d('\u9ED8\u8BA4\u503C')])
                          ),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(
                            () => u[81] || (u[81] = [d('\u7248\u672C')])
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
                    l(f, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[82] || (u[82] = [d('title')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[83] ||
                              (u[83] = [
                                d('\u5012\u8BA1\u65F6\u7684\u6807\u9898'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[84] || (u[84] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () => u[85] || (u[85] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        l(n),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[86] || (u[86] = [d('value')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[87] ||
                              (u[87] = [d('\u5012\u8BA1\u65F6\u7684\u503C')])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[88] || (u[88] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[89] ||
                              (u[89] = [
                                o(
                                  'code',
                                  null,
                                  '() => Date.now() + 300000',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[90] || (u[90] = [d('now')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[91] ||
                              (u[91] = [
                                d(
                                  '\u7528\u4E8E\u4FEE\u6B63\u521D\u59CB\u5316\u65F6\u95F4\u663E\u793A\u4E0D\u6B63\u786E'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[92] || (u[92] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[93] ||
                              (u[93] = [
                                o('code', null, '() => Date.now()', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[94] || (u[94] = [d('format')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[95] ||
                              (u[95] = [
                                d(
                                  '\u5012\u8BA1\u65F6\u7684\u5C55\u793A\u683C\u5F0F '
                                ),
                                o(
                                  'a',
                                  {
                                    class: 'link',
                                    href: 'https://day.js.org/docs/en/display/format',
                                  },
                                  'dayjs',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[96] || (u[96] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[97] ||
                              (u[97] = [o('code', null, "'HH:mm:ss'", -1)])
                          ),
                          _: 1,
                        }),
                        l(n),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[98] || (u[98] = [d('start')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[99] ||
                              (u[99] = [
                                d('\u662F\u5426\u5F00\u59CB\u5012\u8BA1\u65F6'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[100] ||
                              (u[100] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[101] || (u[101] = [o('code', null, 'true', -1)])
                          ),
                          _: 1,
                        }),
                        l(n),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(
                            () => u[102] || (u[102] = [d('value-style')])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[103] ||
                              (u[103] = [
                                d(
                                  '\u81EA\u5B9A\u4E49\u663E\u793A\u503C\u7684\u6837\u5F0F'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[104] ||
                              (u[104] = [o('code', null, 'CSSProperties', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[105] || (u[105] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(() => u[106] || (u[106] = [d('2.32.0')])),
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
          u[125] ||
            (u[125] = o(
              'h3',
              { id: 'countdown Events' },
              [o('code', null, '<countdown>'), d(' Events')],
              -1
            )),
          l(
            a,
            { class: 'component-api-table' },
            {
              default: t(() => [
                u[114] ||
                  (u[114] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                l(r, null, {
                  default: t(() => [
                    l(f, null, {
                      default: t(() => [
                        l(e, null, {
                          default: t(
                            () => u[108] || (u[108] = [d('\u4E8B\u4EF6\u540D')])
                          ),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(
                            () => u[109] || (u[109] = [d('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(
                            () => u[110] || (u[110] = [d('\u53C2\u6570')])
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
                    l(f, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[111] || (u[111] = [d('finish')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[112] ||
                              (u[112] = [
                                d(
                                  '\u5012\u8BA1\u65F6\u5B8C\u6210\u540E\u89E6\u53D1\u7684\u56DE\u8C03'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(() => u[113] || (u[113] = [d('-')])),
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
          u[126] ||
            (u[126] = o(
              'h3',
              { id: 'countdown Slots' },
              [o('code', null, '<countdown>'), d(' Slots')],
              -1
            )),
          l(
            a,
            { class: 'component-api-table' },
            {
              default: t(() => [
                u[121] ||
                  (u[121] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                l(r, null, {
                  default: t(() => [
                    l(f, null, {
                      default: t(() => [
                        l(e, null, {
                          default: t(
                            () => u[115] || (u[115] = [d('\u63D2\u69FD\u540D')])
                          ),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(
                            () => u[116] || (u[116] = [d('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(
                            () => u[117] || (u[117] = [d('\u53C2\u6570')])
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
                    l(f, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[118] || (u[118] = [d('title')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () => u[119] || (u[119] = [d('\u6807\u9898')])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(() => u[120] || (u[120] = [d('-')])),
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
const G = v($, [['render', I]]);
export { G as default };
