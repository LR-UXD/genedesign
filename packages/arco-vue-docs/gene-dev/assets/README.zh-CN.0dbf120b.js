import {
  _ as x,
  d as D,
  u as A,
  r as s,
  o as B,
  c as k,
  w as u,
  a as t,
  b as n,
  e as d,
  m as T,
} from './index.9c61ea88.js';
import { D as w } from './basic.c540cd1d.js';

const E = [
  {
    version: '2.56.2',
    date: '2024-09-13',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} \u95EE\u9898\u4FEE\u590D',
        list: [
          `<p>\u4FEE\u590Dmodes \u4E0D\u751F\u6548\u95EE\u9898 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/3281">#3281</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  { version: '2.53.3', date: '2023-11-24', list: [], extra: [] },
  {
    version: '2.53.0',
    date: '2023-11-03',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} \u65B0\u589E\u529F\u80FD',
        list: [
          `<p>\u65B0\u589E <code>header</code> \u548C <code>default</code> \u63D2\u69FD (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2674">#2674</a>)</p>
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
        type: 'style',
        typeText: '\u{1F485} \u6837\u5F0F\u66F4\u65B0',
        list: [
          `<p>\u4FEE\u590D\u4E00\u4E9B\u6837\u5F0F\u95EE\u9898 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2239">#2239</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.44.1',
    date: '2023-03-10',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} \u95EE\u9898\u4FEE\u590D',
        list: [
          `<p><strong>calendar:</strong> \u4FEE\u590D\u5185\u90E8 import \u8DEF\u5F84\u95EE\u9898</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.44.0',
    date: '2023-03-10',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} \u65B0\u589E\u529F\u80FD',
        list: [
          `<p>\u65B0\u589E\u65E5\u5386\u7EC4\u4EF6 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2217">#2217</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const N = D({
  name: 'ArcoMain',
  components: { DemoBasic: w },
  setup() {
    const { locale: r } = A();
    return {
      locale: r,
      data: {
        meta: { type: '\u7EC4\u4EF6', category: '\u6570\u636E\u5C55\u793A' },
        title: '\u65E5\u5386 Calendar',
        description: '\u65E5\u5386\u7EC4\u4EF6\u3002',
      },
      changelog: typeof E === 'undefined' ? void 0 : E,
      getMessage: (m, g) => (r.value === 'zh-CN' ? m : g),
    };
  },
});
function P(r, l, F, y, m, g) {
  const b = s('demo-basic');
  const v = s('anchor-head');
  const a = s('a-th');
  const o = s('a-tr');
  const f = s('a-thead');
  const e = s('a-td');
  const p = s('a-tbody');
  const i = s('a-table');
  const C = s('arco-article');
  return (
    B(),
    k(
      C,
      T(r.data, { changelog: r.changelog }),
      {
        default: u(() => [
          t(b),
          t(
            v,
            { level: '2', href: 'API' },
            { default: u(() => l[0] || (l[0] = [n('API')])), _: 1 }
          ),
          l[49] ||
            (l[49] = d(
              'h3',
              { id: 'calendar Props' },
              [d('code', null, '<calendar>'), n(' Props')],
              -1
            )),
          t(
            i,
            { class: 'component-api-table' },
            {
              default: u(() => [
                l[25] ||
                  (l[25] = d(
                    'colgroup',
                    null,
                    [d('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(f, null, {
                  default: u(() => [
                    t(o, null, {
                      default: u(() => [
                        t(a, null, {
                          default: u(
                            () => l[1] || (l[1] = [n('\u53C2\u6570\u540D')])
                          ),
                          _: 1,
                        }),
                        t(a, null, {
                          default: u(
                            () => l[2] || (l[2] = [n('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        t(a, null, {
                          default: u(
                            () => l[3] || (l[3] = [n('\u7C7B\u578B')])
                          ),
                          _: 1,
                        }),
                        t(a, null, {
                          default: u(
                            () => l[4] || (l[4] = [n('\u9ED8\u8BA4\u503C')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(p, null, {
                  default: u(() => [
                    t(o, null, {
                      default: u(() => [
                        t(e, null, {
                          default: u(
                            () =>
                              l[5] ||
                              (l[5] = [
                                n('model-value '),
                                d('strong', null, '(v-model)', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(
                            () => l[6] || (l[6] = [n('\u7ED1\u5B9A\u503C')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(
                            () => l[7] || (l[7] = [d('code', null, 'date', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(
                            () => l[8] || (l[8] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(o, null, {
                      default: u(() => [
                        t(e, null, {
                          default: u(
                            () => l[9] || (l[9] = [n('default-value')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(
                            () =>
                              l[10] ||
                              (l[10] = [
                                n(
                                  '\u9ED8\u8BA4\u503C\uFF08\u975E\u53D7\u63A7\u72B6\u6001\uFF09'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(
                            () =>
                              l[11] || (l[11] = [d('code', null, 'date', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(
                            () => l[12] || (l[12] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(o, null, {
                      default: u(() => [
                        t(e, null, {
                          default: u(() => l[13] || (l[13] = [n('mode')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(
                            () => l[14] || (l[14] = [n('\u6A21\u5F0F')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(
                            () =>
                              l[15] ||
                              (l[15] = [
                                d('code', null, "'month' | 'year'", -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(
                            () => l[16] || (l[16] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(o, null, {
                      default: u(() => [
                        t(e, null, {
                          default: u(
                            () => l[17] || (l[17] = [n('default-mode')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(
                            () =>
                              l[18] || (l[18] = [n('\u9ED8\u8BA4\u6A21\u5F0F')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(
                            () =>
                              l[19] ||
                              (l[19] = [
                                d('code', null, "'month' | 'year'", -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(
                            () =>
                              l[20] ||
                              (l[20] = [d('code', null, "'month'", -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(o, null, {
                      default: u(() => [
                        t(e, null, {
                          default: u(() => l[21] || (l[21] = [n('modes')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(
                            () =>
                              l[22] ||
                              (l[22] = [n('\u663E\u793A\u7684\u6A21\u5F0F')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(
                            () =>
                              l[23] ||
                              (l[23] = [
                                d('code', null, "('month' | 'year')[]", -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(
                            () =>
                              l[24] ||
                              (l[24] = [
                                d('code', null, "['month', 'year']", -1),
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
          l[50] ||
            (l[50] = d(
              'h3',
              { id: 'calendar Events' },
              [d('code', null, '<calendar>'), n(' Events')],
              -1
            )),
          t(
            i,
            { class: 'component-api-table' },
            {
              default: u(() => [
                l[35] ||
                  (l[35] = d(
                    'colgroup',
                    null,
                    [d('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(f, null, {
                  default: u(() => [
                    t(o, null, {
                      default: u(() => [
                        t(a, null, {
                          default: u(
                            () => l[26] || (l[26] = [n('\u4E8B\u4EF6\u540D')])
                          ),
                          _: 1,
                        }),
                        t(a, null, {
                          default: u(
                            () => l[27] || (l[27] = [n('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        t(a, null, {
                          default: u(
                            () => l[28] || (l[28] = [n('\u53C2\u6570')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(p, null, {
                  default: u(() => [
                    t(o, null, {
                      default: u(() => [
                        t(e, null, {
                          default: u(() => l[29] || (l[29] = [n('change')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(
                            () =>
                              l[30] ||
                              (l[30] = [
                                n(
                                  '\u9009\u62E9\u7684\u65E5\u671F\u6539\u53D8\u65F6\u89E6\u53D1'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(
                            () =>
                              l[31] ||
                              (l[31] = [
                                n('date: '),
                                d('code', null, 'Date', -1),
                              ])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(o, null, {
                      default: u(() => [
                        t(e, null, {
                          default: u(
                            () => l[32] || (l[32] = [n('panel-change')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(
                            () =>
                              l[33] ||
                              (l[33] = [
                                n(
                                  '\u65E5\u671F\u9762\u677F\u6539\u53D8\u65F6\u89E6\u53D1'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(
                            () =>
                              l[34] ||
                              (l[34] = [
                                n('date: '),
                                d('code', null, 'Date', -1),
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
          l[51] ||
            (l[51] = d(
              'h3',
              { id: 'calendar Slots' },
              [d('code', null, '<calendar>'), n(' Slots')],
              -1
            )),
          t(
            i,
            { class: 'component-api-table' },
            {
              default: u(() => [
                l[48] ||
                  (l[48] = d(
                    'colgroup',
                    null,
                    [d('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(f, null, {
                  default: u(() => [
                    t(o, null, {
                      default: u(() => [
                        t(a, null, {
                          default: u(
                            () => l[36] || (l[36] = [n('\u63D2\u69FD\u540D')])
                          ),
                          _: 1,
                        }),
                        t(a, null, {
                          default: u(
                            () => l[37] || (l[37] = [n('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        t(a, null, {
                          default: u(
                            () => l[38] || (l[38] = [n('\u53C2\u6570')])
                          ),
                          _: 1,
                        }),
                        t(a, null, {
                          default: u(
                            () => l[39] || (l[39] = [n('\u7248\u672C')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(p, null, {
                  default: u(() => [
                    t(o, null, {
                      default: u(() => [
                        t(e, null, {
                          default: u(() => l[40] || (l[40] = [n('header')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(
                            () =>
                              l[41] ||
                              (l[41] = [
                                n('\u81EA\u5B9A\u4E49\u5934\u90E8\u5185\u5BB9'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(
                            () =>
                              l[42] ||
                              (l[42] = [
                                n('year: '),
                                d('code', null, 'number', -1),
                                d('br', null, null, -1),
                                n('month: '),
                                d('code', null, 'number', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(() => l[43] || (l[43] = [n('2.53.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(o, null, {
                      default: u(() => [
                        t(e, null, {
                          default: u(() => l[44] || (l[44] = [n('default')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(
                            () =>
                              l[45] ||
                              (l[45] = [
                                n(
                                  '\u81EA\u5B9A\u4E49\u5355\u5143\u683C\u5185\u5BB9'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(
                            () =>
                              l[46] ||
                              (l[46] = [
                                n('year: '),
                                d('code', null, 'number', -1),
                                d('br', null, null, -1),
                                n('month: '),
                                d('code', null, 'number', -1),
                                d('br', null, null, -1),
                                n('date: '),
                                d('code', null, 'number', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(() => l[47] || (l[47] = [n('2.53.0')])),
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
const I = x(N, [['render', P]]);
export { I as default };
