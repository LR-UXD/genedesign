import {
  _ as D,
  d as F,
  u as A,
  r as a,
  o as B,
  c as P,
  w as e,
  e as o,
  a as t,
  b as n,
  m as C,
} from './index.9c61ea88.js';
import {
  D as N,
  a as I,
  b as M,
  c as V,
  d as $,
  e as E,
} from './split.74ae88f8.js';

const b = [
  {
    version: '2.39.0',
    date: '2022-11-18',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>fix split margin (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1864">#1864</a>)</p>
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
        typeText: '\u{1F195} Feature',
        list: [
          `<p>add <code>split</code> slot (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1774">#1774</a>)</p>
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
        typeText: '\u{1F485} Style',
        list: [
          `<p>Items that use flex layout only in landscape mode (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1277">#1277</a>)</p>
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
        typeText: '\u{1F485} Style',
        list: [
          `<p>space-item is modified to flex layout to solve the problem of vertical centering of inline elements (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1273">#1273</a>)</p>
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
          `<p>Fix the problem that the child component uses the key to fail (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1223">#1223</a>)</p>
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
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix size attribute type detection problem (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1052">#1052</a>)</p>
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
        typeText: '\u{1F195} Feature',
        list: [
          `<p>add property <code>fill</code> (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/415">#415</a>)</p>
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
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem of rendering v-if nodes (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/318">#318</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const L = F({
  name: 'ArcoMain',
  components: {
    DemoBasic: N,
    DemoVertical: I,
    DemoSize: M,
    DemoAlign: V,
    DemoWrap: $,
    DemoSplit: E,
  },
  setup() {
    const { locale: p } = A();
    return {
      locale: p,
      data: {
        meta: { type: 'Component', category: 'Layout' },
        title: 'Space',
        description: 'Set the spacing between components.',
      },
      changelog: typeof b === 'undefined' ? void 0 : b,
      getMessage: (d, r) => (p.value === 'zh-CN' ? d : r),
    };
  },
});
function R(p, l, x, v, d, r) {
  const k = a('demo-basic');
  const _ = a('demo-vertical');
  const S = a('demo-size');
  const c = a('demo-align');
  const z = a('demo-wrap');
  const T = a('demo-split');
  const f = a('anchor-head');
  const u = a('a-th');
  const i = a('a-tr');
  const m = a('a-thead');
  const s = a('a-td');
  const g = a('a-tbody');
  const y = a('a-table');
  const w = a('arco-article');
  return (
    B(),
    P(
      w,
      C(p.data, { changelog: p.changelog }),
      {
        default: e(() => [
          l[36] ||
            (l[36] = o(
              'p',
              null,
              [o('em', null, 'Auto translate by google.')],
              -1
            )),
          t(k),
          t(_),
          t(S),
          t(c),
          t(z),
          t(T),
          t(
            f,
            { level: '2', href: 'API' },
            { default: e(() => l[0] || (l[0] = [n('API')])), _: 1 }
          ),
          l[37] ||
            (l[37] = o(
              'h3',
              { id: 'space Props' },
              [o('code', null, '<space>'), n(' Props')],
              -1
            )),
          t(
            y,
            { class: 'component-api-table' },
            {
              default: e(() => [
                l[27] ||
                  (l[27] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(m, null, {
                  default: e(() => [
                    t(i, null, {
                      default: e(() => [
                        t(u, null, {
                          default: e(() => l[1] || (l[1] = [n('Attribute')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(() => l[2] || (l[2] = [n('Description')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(() => l[3] || (l[3] = [n('Type')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(() => l[4] || (l[4] = [n('Default')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(() => l[5] || (l[5] = [n('version')])),
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
                    t(i, null, {
                      default: e(() => [
                        t(s, null, {
                          default: e(() => l[6] || (l[6] = [n('align')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(() => l[7] || (l[7] = [n('Alignment')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(
                            () =>
                              l[8] ||
                              (l[8] = [
                                o(
                                  'code',
                                  null,
                                  "'start' | 'end' | 'center' | 'baseline'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(
                            () => l[9] || (l[9] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(s),
                      ]),
                      _: 1,
                    }),
                    t(i, null, {
                      default: e(() => [
                        t(s, null, {
                          default: e(() => l[10] || (l[10] = [n('direction')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(
                            () => l[11] || (l[11] = [n('Spacing direction')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(
                            () =>
                              l[12] ||
                              (l[12] = [
                                o(
                                  'code',
                                  null,
                                  "'vertical' | 'horizontal'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(
                            () =>
                              l[13] ||
                              (l[13] = [o('code', null, "'horizontal'", -1)])
                          ),
                          _: 1,
                        }),
                        t(s),
                      ]),
                      _: 1,
                    }),
                    t(i, null, {
                      default: e(() => [
                        t(s, null, {
                          default: e(() => l[14] || (l[14] = [n('size')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(
                            () =>
                              l[15] ||
                              (l[15] = [
                                n(
                                  'Spacing size, support for setting horizontal and vertical spacing separately'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(
                            () =>
                              l[16] ||
                              (l[16] = [
                                o(
                                  'code',
                                  null,
                                  "number | 'mini' | 'small' | 'medium' | 'large' | [SpaceSize, SpaceSize]",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(
                            () =>
                              l[17] ||
                              (l[17] = [o('code', null, "'small'", -1)])
                          ),
                          _: 1,
                        }),
                        t(s),
                      ]),
                      _: 1,
                    }),
                    t(i, null, {
                      default: e(() => [
                        t(s, null, {
                          default: e(() => l[18] || (l[18] = [n('wrap')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(
                            () =>
                              l[19] ||
                              (l[19] = [
                                n(
                                  'The spacing of the wrapping type, used in the scene of wrapping.'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(
                            () =>
                              l[20] ||
                              (l[20] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(
                            () =>
                              l[21] || (l[21] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(s),
                      ]),
                      _: 1,
                    }),
                    t(i, null, {
                      default: e(() => [
                        t(s, null, {
                          default: e(() => l[22] || (l[22] = [n('fill')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(
                            () => l[23] || (l[23] = [n('fill the block')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(
                            () =>
                              l[24] ||
                              (l[24] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(
                            () =>
                              l[25] || (l[25] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(() => l[26] || (l[26] = [n('2.11.0')])),
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
          l[38] ||
            (l[38] = o(
              'h3',
              { id: 'space Slots' },
              [o('code', null, '<space>'), n(' Slots')],
              -1
            )),
          t(
            y,
            { class: 'component-api-table' },
            {
              default: e(() => [
                l[34] ||
                  (l[34] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(m, null, {
                  default: e(() => [
                    t(i, null, {
                      default: e(() => [
                        t(u, null, {
                          default: e(() => l[28] || (l[28] = [n('Slot Name')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () => l[29] || (l[29] = [n('Description')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () => l[30] || (l[30] = [n('Parameters')])
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
                    t(i, null, {
                      default: e(() => [
                        t(s, null, {
                          default: e(() => l[31] || (l[31] = [n('split')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(
                            () => l[32] || (l[32] = [n('Set separator')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(() => l[33] || (l[33] = [n('-')])),
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
            { default: e(() => l[35] || (l[35] = [n('Type')])), _: 1 }
          ),
          l[39] ||
            (l[39] = o(
              'pre',
              { class: 'code-content' },
              [
                o('code', { class: 'language-lang' }, [
                  o('span', { class: 'token keyword' }, 'type'),
                  n(),
                  o('span', { class: 'token class-name' }, 'SpaceSize'),
                  n(),
                  o('span', { class: 'token operator' }, '='),
                  n(),
                  o('span', { class: 'token builtin' }, 'number'),
                  n(),
                  o('span', { class: 'token operator' }, '|'),
                  n(),
                  o('span', { class: 'token string' }, "'mini'"),
                  n(),
                  o('span', { class: 'token operator' }, '|'),
                  n(),
                  o('span', { class: 'token string' }, "'small'"),
                  n(),
                  o('span', { class: 'token operator' }, '|'),
                  n(),
                  o('span', { class: 'token string' }, "'medium'"),
                  n(),
                  o('span', { class: 'token operator' }, '|'),
                  n(),
                  o('span', { class: 'token string' }, "'large'"),
                  o('span', { class: 'token punctuation' }, ';'),
                  n(`
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
const j = D(L, [['render', R]]);
export { j as default };
