import {
  _ as z,
  d as A,
  u as S,
  r as s,
  o as T,
  c as w,
  w as e,
  a as t,
  b as u,
  e as n,
  m as N,
} from './index.9c61ea88.js';
import {
  D as P,
  a as M,
  b as V,
  c as $,
  d as I,
  e as c,
} from './split.74ae88f8.js';

const y = [
  {
    version: '2.39.0',
    date: '2022-11-18',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} \u95EE\u9898\u4FEE\u590D',
        list: [
          `<p>\u4FEE\u590D\u5206\u9694\u7B26\u95F4\u8DDD (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1864">#1864</a>)</p>
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
        type: 'feature',
        typeText: '\u{1F195} \u65B0\u589E\u529F\u80FD',
        list: [
          `<p>\u589E\u52A0<code>split</code>\u63D2\u69FD (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1774">#1774</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.30.1',
    date: '2022-06-10',
    list: [
      {
        type: 'style',
        typeText: '\u{1F485} \u6837\u5F0F\u66F4\u65B0',
        list: [
          `<p>\u4EC5\u5728\u6A2A\u5411\u6A21\u5F0F\u4F7F\u7528 flex \u5E03\u5C40\u7684 item (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1277">#1277</a>)</p>
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
        type: 'style',
        typeText: '\u{1F485} \u6837\u5F0F\u66F4\u65B0',
        list: [
          `<p>space-item \u4FEE\u6539\u4E3A flex \u5E03\u5C40\uFF0C\u89E3\u51B3\u884C\u5185\u5143\u7D20\u5782\u76F4\u5C45\u4E2D\u95EE\u9898 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1273">#1273</a>)</p>
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
        typeText: '\u{1F41B} \u95EE\u9898\u4FEE\u590D',
        list: [
          `<p>\u4FEE\u590D\u5B50\u7EC4\u4EF6\u4F7F\u7528 key \u5931\u6548\u7684\u95EE\u9898 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1223">#1223</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.25.1',
    date: '2022-04-27',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} \u95EE\u9898\u4FEE\u590D',
        list: [
          `<p>\u4FEE\u590D size \u5C5E\u6027\u7C7B\u578B\u68C0\u6D4B\u95EE\u9898 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1052">#1052</a>)</p>
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
        type: 'feature',
        typeText: '\u{1F195} \u65B0\u589E\u529F\u80FD',
        list: [
          `<p>\u65B0\u589E\u5C5E\u6027 <code>fill</code> (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/415">#415</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.9.0',
    date: '2021-12-03',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} \u95EE\u9898\u4FEE\u590D',
        list: [
          `<p>\u4FEE\u590D\u6E32\u67D3 v-if \u8282\u70B9\u7684\u95EE\u9898 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/318">#318</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const R = A({
  name: 'ArcoMain',
  components: {
    DemoBasic: P,
    DemoVertical: M,
    DemoSize: V,
    DemoAlign: $,
    DemoWrap: I,
    DemoSplit: c,
  },
  setup() {
    const { locale: i } = S();
    return {
      locale: i,
      data: {
        meta: { type: '\u7EC4\u4EF6', category: '\u5E03\u5C40' },
        title: '\u95F4\u8DDD Space',
        description: '\u8BBE\u7F6E\u7EC4\u4EF6\u4E4B\u95F4\u7684\u95F4\u8DDD',
      },
      changelog: typeof y === 'undefined' ? void 0 : y,
      getMessage: (p, r) => (i.value === 'zh-CN' ? p : r),
    };
  },
});
function W(i, l, F, b, p, r) {
  const v = s('demo-basic');
  const x = s('demo-vertical');
  const k = s('demo-size');
  const C = s('demo-align');
  const _ = s('demo-wrap');
  const B = s('demo-split');
  const f = s('anchor-head');
  const a = s('a-th');
  const d = s('a-tr');
  const m = s('a-thead');
  const o = s('a-td');
  const g = s('a-tbody');
  const D = s('a-table');
  const E = s('arco-article');
  return (
    T(),
    w(
      E,
      N(i.data, { changelog: i.changelog }),
      {
        default: e(() => [
          t(v),
          t(x),
          t(k),
          t(C),
          t(_),
          t(B),
          t(
            f,
            { level: '2', href: 'API' },
            { default: e(() => l[0] || (l[0] = [u('API')])), _: 1 }
          ),
          l[36] ||
            (l[36] = n(
              'h3',
              { id: 'space Props' },
              [n('code', null, '<space>'), u(' Props')],
              -1
            )),
          t(
            D,
            { class: 'component-api-table' },
            {
              default: e(() => [
                l[27] ||
                  (l[27] = n(
                    'colgroup',
                    null,
                    [n('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(m, null, {
                  default: e(() => [
                    t(d, null, {
                      default: e(() => [
                        t(a, null, {
                          default: e(
                            () => l[1] || (l[1] = [u('\u53C2\u6570\u540D')])
                          ),
                          _: 1,
                        }),
                        t(a, null, {
                          default: e(
                            () => l[2] || (l[2] = [u('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        t(a, null, {
                          default: e(
                            () => l[3] || (l[3] = [u('\u7C7B\u578B')])
                          ),
                          _: 1,
                        }),
                        t(a, null, {
                          default: e(
                            () => l[4] || (l[4] = [u('\u9ED8\u8BA4\u503C')])
                          ),
                          _: 1,
                        }),
                        t(a, null, {
                          default: e(
                            () => l[5] || (l[5] = [u('\u7248\u672C')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(g, null, {
                  default: e(() => [
                    t(d, null, {
                      default: e(() => [
                        t(o, null, {
                          default: e(() => l[6] || (l[6] = [u('align')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[7] || (l[7] = [u('\u5BF9\u9F50\u65B9\u5F0F')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[8] ||
                              (l[8] = [
                                n(
                                  'code',
                                  null,
                                  "'start' | 'end' | 'center' | 'baseline'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () => l[9] || (l[9] = [n('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(o),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(o, null, {
                          default: e(() => l[10] || (l[10] = [u('direction')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[11] || (l[11] = [u('\u95F4\u8DDD\u65B9\u5411')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[12] ||
                              (l[12] = [
                                n(
                                  'code',
                                  null,
                                  "'vertical' | 'horizontal'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[13] ||
                              (l[13] = [n('code', null, "'horizontal'", -1)])
                          ),
                          _: 1,
                        }),
                        t(o),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(o, null, {
                          default: e(() => l[14] || (l[14] = [u('size')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[15] ||
                              (l[15] = [
                                u(
                                  '\u95F4\u8DDD\u5927\u5C0F\uFF0C\u652F\u6301\u5206\u522B\u5236\u5B9A\u6A2A\u5411\u548C\u7AD6\u5411\u7684\u95F4\u8DDD'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[16] ||
                              (l[16] = [
                                n(
                                  'code',
                                  null,
                                  "number | 'mini' | 'small' | 'medium' | 'large' | [SpaceSize, SpaceSize]",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[17] ||
                              (l[17] = [n('code', null, "'small'", -1)])
                          ),
                          _: 1,
                        }),
                        t(o),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(o, null, {
                          default: e(() => l[18] || (l[18] = [u('wrap')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[19] ||
                              (l[19] = [
                                u(
                                  '\u73AF\u7ED5\u7C7B\u578B\u7684\u95F4\u8DDD\uFF0C\u7528\u4E8E\u6298\u884C\u7684\u573A\u666F\u3002'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[20] ||
                              (l[20] = [n('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[21] || (l[21] = [n('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(o),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(o, null, {
                          default: e(() => l[22] || (l[22] = [u('fill')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[23] || (l[23] = [u('\u5145\u6EE1\u6574\u884C')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[24] ||
                              (l[24] = [n('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[25] || (l[25] = [n('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(() => l[26] || (l[26] = [u('2.11.0')])),
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
          l[37] ||
            (l[37] = n(
              'h3',
              { id: 'space Slots' },
              [n('code', null, '<space>'), u(' Slots')],
              -1
            )),
          t(
            D,
            { class: 'component-api-table' },
            {
              default: e(() => [
                l[34] ||
                  (l[34] = n(
                    'colgroup',
                    null,
                    [n('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(m, null, {
                  default: e(() => [
                    t(d, null, {
                      default: e(() => [
                        t(a, null, {
                          default: e(
                            () => l[28] || (l[28] = [u('\u63D2\u69FD\u540D')])
                          ),
                          _: 1,
                        }),
                        t(a, null, {
                          default: e(
                            () => l[29] || (l[29] = [u('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        t(a, null, {
                          default: e(
                            () => l[30] || (l[30] = [u('\u53C2\u6570')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(g, null, {
                  default: e(() => [
                    t(d, null, {
                      default: e(() => [
                        t(o, null, {
                          default: e(() => l[31] || (l[31] = [u('split')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[32] ||
                              (l[32] = [u('\u8BBE\u7F6E\u5206\u9694\u7B26')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(() => l[33] || (l[33] = [u('-')])),
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
            f,
            { level: '2', href: 'Type' },
            { default: e(() => l[35] || (l[35] = [u('Type')])), _: 1 }
          ),
          l[38] ||
            (l[38] = n(
              'pre',
              { class: 'code-content' },
              [
                n('code', { class: 'language-lang' }, [
                  n('span', { class: 'token keyword' }, 'type'),
                  u(),
                  n('span', { class: 'token class-name' }, 'SpaceSize'),
                  u(),
                  n('span', { class: 'token operator' }, '='),
                  u(),
                  n('span', { class: 'token builtin' }, 'number'),
                  u(),
                  n('span', { class: 'token operator' }, '|'),
                  u(),
                  n('span', { class: 'token string' }, "'mini'"),
                  u(),
                  n('span', { class: 'token operator' }, '|'),
                  u(),
                  n('span', { class: 'token string' }, "'small'"),
                  u(),
                  n('span', { class: 'token operator' }, '|'),
                  u(),
                  n('span', { class: 'token string' }, "'medium'"),
                  u(),
                  n('span', { class: 'token operator' }, '|'),
                  u(),
                  n('span', { class: 'token string' }, "'large'"),
                  n('span', { class: 'token punctuation' }, ';'),
                  u(`
`),
                ]),
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
const G = z(R, [['render', W]]);
export { G as default };
