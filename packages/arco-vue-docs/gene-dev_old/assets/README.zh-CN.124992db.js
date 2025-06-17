import {
  _ as N,
  d as k,
  u as I,
  r as s,
  o as $,
  c as z,
  w as t,
  a as u,
  b as n,
  e as o,
  m as T,
} from './index.9c61ea88.js';
import {
  D as V,
  a as R,
  b as G,
  c as H,
  d as j,
  e as q,
  f as J,
  g as K,
  h as L,
} from './actions.124e972b.js';

const C = [
  {
    version: '2.56.2',
    date: '2024-09-13',
    list: [
      {
        type: 'typescript',
        typeText: '\u{1F18E} \u7C7B\u578B\u4FEE\u6B63',
        list: [
          `<p>\u66F4\u65B0headerStyle\u4E0EbodyStyle\u7684\u7C7B\u578B (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/3268">#3268</a>)</p>
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
        typeText: '\u{1F41B} \u95EE\u9898\u4FEE\u590D',
        list: [
          `<p>\u4FEE\u590D slots \u5185\u5BB9\u5B58\u5728\u4E0D\u66F4\u65B0\u7684\u95EE\u9898 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/380">#380</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const O = k({
  name: 'ArcoMain',
  components: {
    DemoBasic: V,
    DemoHoverable: R,
    DemoBordered: G,
    DemoContent: H,
    DemoMeta: j,
    DemoRow: q,
    DemoGrid: J,
    DemoInner: K,
    DemoActions: L,
  },
  setup() {
    const { locale: r } = I();
    return {
      locale: r,
      data: {
        meta: { type: '\u7EC4\u4EF6', category: '\u6570\u636E\u5C55\u793A' },
        title: '\u5361\u7247 Card',
        description:
          '\u5C06\u4FE1\u606F\u5206\u7C7B\u540E\u5206\u6807\u9898\u3001\u8BE6\u60C5\u7B49\u533A\u57DF\u805A\u5408\u5C55\u73B0\uFF0C\u4E00\u822C\u4F5C\u4E3A\u7B80\u6D01\u4ECB\u7ECD\u6216\u8005\u4FE1\u606F\u7684\u5927\u76D8\u548C\u5165\u53E3\u3002',
      },
      changelog: typeof C === 'undefined' ? void 0 : C,
      getMessage: (p, F) => (r.value === 'zh-CN' ? p : F),
    };
  },
});
function Q(r, l, g, D, p, F) {
  const E = s('demo-basic');
  const b = s('demo-hoverable');
  const A = s('demo-bordered');
  const B = s('demo-content');
  const y = s('demo-meta');
  const v = s('demo-row');
  const x = s('demo-grid');
  const P = s('demo-inner');
  const w = s('demo-actions');
  const S = s('anchor-head');
  const f = s('a-th');
  const e = s('a-tr');
  const a = s('a-thead');
  const d = s('a-td');
  const i = s('a-tbody');
  const m = s('a-table');
  const M = s('arco-article');
  return (
    $(),
    z(
      M,
      T(r.data, { changelog: r.changelog }),
      {
        default: t(() => [
          u(E),
          u(b),
          u(A),
          u(B),
          u(y),
          u(v),
          u(x),
          u(P),
          u(w),
          u(
            S,
            { level: '2', href: 'API' },
            { default: t(() => l[0] || (l[0] = [n('API')])), _: 1 }
          ),
          l[89] ||
            (l[89] = o(
              'h3',
              { id: 'card Props' },
              [o('code', null, '<card>'), n(' Props')],
              -1
            )),
          u(
            m,
            { class: 'component-api-table' },
            {
              default: t(() => [
                l[37] ||
                  (l[37] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                u(a, null, {
                  default: t(() => [
                    u(e, null, {
                      default: t(() => [
                        u(f, null, {
                          default: t(
                            () => l[1] || (l[1] = [n('\u53C2\u6570\u540D')])
                          ),
                          _: 1,
                        }),
                        u(f, null, {
                          default: t(
                            () => l[2] || (l[2] = [n('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        u(f, null, {
                          default: t(
                            () => l[3] || (l[3] = [n('\u7C7B\u578B')])
                          ),
                          _: 1,
                        }),
                        u(f, null, {
                          default: t(
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
                u(i, null, {
                  default: t(() => [
                    u(e, null, {
                      default: t(() => [
                        u(d, null, {
                          default: t(() => l[5] || (l[5] = [n('bordered')])),
                          _: 1,
                        }),
                        u(d, null, {
                          default: t(
                            () =>
                              l[6] ||
                              (l[6] = [n('\u662F\u5426\u6709\u8FB9\u6846')])
                          ),
                          _: 1,
                        }),
                        u(d, null, {
                          default: t(
                            () =>
                              l[7] || (l[7] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        u(d, null, {
                          default: t(
                            () => l[8] || (l[8] = [o('code', null, 'true', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(d, null, {
                          default: t(() => l[9] || (l[9] = [n('loading')])),
                          _: 1,
                        }),
                        u(d, null, {
                          default: t(
                            () =>
                              l[10] ||
                              (l[10] = [
                                n('\u662F\u5426\u4E3A\u52A0\u8F7D\u4E2D'),
                              ])
                          ),
                          _: 1,
                        }),
                        u(d, null, {
                          default: t(
                            () =>
                              l[11] ||
                              (l[11] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        u(d, null, {
                          default: t(
                            () =>
                              l[12] || (l[12] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(d, null, {
                          default: t(() => l[13] || (l[13] = [n('hoverable')])),
                          _: 1,
                        }),
                        u(d, null, {
                          default: t(
                            () =>
                              l[14] ||
                              (l[14] = [n('\u662F\u5426\u53EF\u60AC\u6D6E')])
                          ),
                          _: 1,
                        }),
                        u(d, null, {
                          default: t(
                            () =>
                              l[15] ||
                              (l[15] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        u(d, null, {
                          default: t(
                            () =>
                              l[16] || (l[16] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(d, null, {
                          default: t(() => l[17] || (l[17] = [n('size')])),
                          _: 1,
                        }),
                        u(d, null, {
                          default: t(
                            () =>
                              l[18] || (l[18] = [n('\u5361\u7247\u5C3A\u5BF8')])
                          ),
                          _: 1,
                        }),
                        u(d, null, {
                          default: t(
                            () =>
                              l[19] ||
                              (l[19] = [
                                o('code', null, "'medium' | 'small'", -1),
                              ])
                          ),
                          _: 1,
                        }),
                        u(d, null, {
                          default: t(
                            () =>
                              l[20] ||
                              (l[20] = [o('code', null, "'medium'", -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(d, null, {
                          default: t(
                            () => l[21] || (l[21] = [n('header-style')])
                          ),
                          _: 1,
                        }),
                        u(d, null, {
                          default: t(
                            () =>
                              l[22] ||
                              (l[22] = [
                                n(
                                  '\u81EA\u5B9A\u4E49\u6807\u9898\u533A\u57DF\u6837\u5F0F'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        u(d, null, {
                          default: t(
                            () =>
                              l[23] ||
                              (l[23] = [o('code', null, 'CSSProperties', -1)])
                          ),
                          _: 1,
                        }),
                        u(d, null, {
                          default: t(
                            () =>
                              l[24] ||
                              (l[24] = [o('code', null, '() => ({})', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(d, null, {
                          default: t(
                            () => l[25] || (l[25] = [n('body-style')])
                          ),
                          _: 1,
                        }),
                        u(d, null, {
                          default: t(
                            () =>
                              l[26] ||
                              (l[26] = [
                                n(
                                  '\u5185\u5BB9\u533A\u57DF\u81EA\u5B9A\u4E49\u6837\u5F0F'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        u(d, null, {
                          default: t(
                            () =>
                              l[27] ||
                              (l[27] = [o('code', null, 'CSSProperties', -1)])
                          ),
                          _: 1,
                        }),
                        u(d, null, {
                          default: t(
                            () =>
                              l[28] ||
                              (l[28] = [o('code', null, '() => ({})', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(d, null, {
                          default: t(() => l[29] || (l[29] = [n('title')])),
                          _: 1,
                        }),
                        u(d, null, {
                          default: t(
                            () =>
                              l[30] || (l[30] = [n('\u5361\u7247\u6807\u9898')])
                          ),
                          _: 1,
                        }),
                        u(d, null, {
                          default: t(
                            () =>
                              l[31] || (l[31] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        u(d, null, {
                          default: t(
                            () => l[32] || (l[32] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(d, null, {
                          default: t(() => l[33] || (l[33] = [n('extra')])),
                          _: 1,
                        }),
                        u(d, null, {
                          default: t(
                            () =>
                              l[34] ||
                              (l[34] = [
                                n(
                                  '\u5361\u7247\u53F3\u4E0A\u89D2\u7684\u64CD\u4F5C\u533A\u57DF'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        u(d, null, {
                          default: t(
                            () =>
                              l[35] || (l[35] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        u(d, null, {
                          default: t(
                            () => l[36] || (l[36] = [o('code', null, '-', -1)])
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
          l[90] ||
            (l[90] = o(
              'h3',
              { id: 'card Slots' },
              [o('code', null, '<card>'), n(' Slots')],
              -1
            )),
          u(
            m,
            { class: 'component-api-table' },
            {
              default: t(() => [
                l[53] ||
                  (l[53] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                u(a, null, {
                  default: t(() => [
                    u(e, null, {
                      default: t(() => [
                        u(f, null, {
                          default: t(
                            () => l[38] || (l[38] = [n('\u63D2\u69FD\u540D')])
                          ),
                          _: 1,
                        }),
                        u(f, null, {
                          default: t(
                            () => l[39] || (l[39] = [n('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        u(f, null, {
                          default: t(
                            () => l[40] || (l[40] = [n('\u53C2\u6570')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                u(i, null, {
                  default: t(() => [
                    u(e, null, {
                      default: t(() => [
                        u(d, null, {
                          default: t(() => l[41] || (l[41] = [n('actions')])),
                          _: 1,
                        }),
                        u(d, null, {
                          default: t(
                            () =>
                              l[42] ||
                              (l[42] = [
                                n(
                                  '\u5361\u7247\u5E95\u90E8\u7684\u64CD\u4F5C\u7EC4'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        u(d, null, {
                          default: t(() => l[43] || (l[43] = [n('-')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(d, null, {
                          default: t(() => l[44] || (l[44] = [n('cover')])),
                          _: 1,
                        }),
                        u(d, null, {
                          default: t(
                            () =>
                              l[45] || (l[45] = [n('\u5361\u7247\u5C01\u9762')])
                          ),
                          _: 1,
                        }),
                        u(d, null, {
                          default: t(() => l[46] || (l[46] = [n('-')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(d, null, {
                          default: t(() => l[47] || (l[47] = [n('extra')])),
                          _: 1,
                        }),
                        u(d, null, {
                          default: t(
                            () =>
                              l[48] ||
                              (l[48] = [
                                n(
                                  '\u5361\u7247\u53F3\u4E0A\u89D2\u7684\u64CD\u4F5C\u533A\u57DF'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        u(d, null, {
                          default: t(() => l[49] || (l[49] = [n('-')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(d, null, {
                          default: t(() => l[50] || (l[50] = [n('title')])),
                          _: 1,
                        }),
                        u(d, null, {
                          default: t(
                            () =>
                              l[51] || (l[51] = [n('\u5361\u7247\u6807\u9898')])
                          ),
                          _: 1,
                        }),
                        u(d, null, {
                          default: t(() => l[52] || (l[52] = [n('-')])),
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
          l[91] ||
            (l[91] = o(
              'h3',
              { id: 'card-meta Props' },
              [o('code', null, '<card-meta>'), n(' Props')],
              -1
            )),
          u(
            m,
            { class: 'component-api-table' },
            {
              default: t(() => [
                l[66] ||
                  (l[66] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                u(a, null, {
                  default: t(() => [
                    u(e, null, {
                      default: t(() => [
                        u(f, null, {
                          default: t(
                            () => l[54] || (l[54] = [n('\u53C2\u6570\u540D')])
                          ),
                          _: 1,
                        }),
                        u(f, null, {
                          default: t(
                            () => l[55] || (l[55] = [n('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        u(f, null, {
                          default: t(
                            () => l[56] || (l[56] = [n('\u7C7B\u578B')])
                          ),
                          _: 1,
                        }),
                        u(f, null, {
                          default: t(
                            () => l[57] || (l[57] = [n('\u9ED8\u8BA4\u503C')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                u(i, null, {
                  default: t(() => [
                    u(e, null, {
                      default: t(() => [
                        u(d, null, {
                          default: t(() => l[58] || (l[58] = [n('title')])),
                          _: 1,
                        }),
                        u(d, null, {
                          default: t(
                            () => l[59] || (l[59] = [n('\u6807\u9898')])
                          ),
                          _: 1,
                        }),
                        u(d, null, {
                          default: t(
                            () =>
                              l[60] || (l[60] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        u(d, null, {
                          default: t(
                            () => l[61] || (l[61] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(d, null, {
                          default: t(
                            () => l[62] || (l[62] = [n('description')])
                          ),
                          _: 1,
                        }),
                        u(d, null, {
                          default: t(
                            () => l[63] || (l[63] = [n('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        u(d, null, {
                          default: t(
                            () =>
                              l[64] || (l[64] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        u(d, null, {
                          default: t(
                            () => l[65] || (l[65] = [o('code', null, '-', -1)])
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
          l[92] ||
            (l[92] = o(
              'h3',
              { id: 'card-meta Slots' },
              [o('code', null, '<card-meta>'), n(' Slots')],
              -1
            )),
          u(
            m,
            { class: 'component-api-table' },
            {
              default: t(() => [
                l[79] ||
                  (l[79] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                u(a, null, {
                  default: t(() => [
                    u(e, null, {
                      default: t(() => [
                        u(f, null, {
                          default: t(
                            () => l[67] || (l[67] = [n('\u63D2\u69FD\u540D')])
                          ),
                          _: 1,
                        }),
                        u(f, null, {
                          default: t(
                            () => l[68] || (l[68] = [n('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        u(f, null, {
                          default: t(
                            () => l[69] || (l[69] = [n('\u53C2\u6570')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                u(i, null, {
                  default: t(() => [
                    u(e, null, {
                      default: t(() => [
                        u(d, null, {
                          default: t(
                            () => l[70] || (l[70] = [n('description')])
                          ),
                          _: 1,
                        }),
                        u(d, null, {
                          default: t(
                            () => l[71] || (l[71] = [n('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        u(d, null, {
                          default: t(() => l[72] || (l[72] = [n('-')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(d, null, {
                          default: t(() => l[73] || (l[73] = [n('title')])),
                          _: 1,
                        }),
                        u(d, null, {
                          default: t(
                            () => l[74] || (l[74] = [n('\u6807\u9898')])
                          ),
                          _: 1,
                        }),
                        u(d, null, {
                          default: t(() => l[75] || (l[75] = [n('-')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(d, null, {
                          default: t(() => l[76] || (l[76] = [n('avatar')])),
                          _: 1,
                        }),
                        u(d, null, {
                          default: t(
                            () => l[77] || (l[77] = [n('\u5934\u50CF')])
                          ),
                          _: 1,
                        }),
                        u(d, null, {
                          default: t(() => l[78] || (l[78] = [n('-')])),
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
          l[93] ||
            (l[93] = o(
              'h3',
              { id: 'card-grid Props' },
              [o('code', null, '<card-grid>'), n(' Props')],
              -1
            )),
          u(
            m,
            { class: 'component-api-table' },
            {
              default: t(() => [
                l[88] ||
                  (l[88] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                u(a, null, {
                  default: t(() => [
                    u(e, null, {
                      default: t(() => [
                        u(f, null, {
                          default: t(
                            () => l[80] || (l[80] = [n('\u53C2\u6570\u540D')])
                          ),
                          _: 1,
                        }),
                        u(f, null, {
                          default: t(
                            () => l[81] || (l[81] = [n('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        u(f, null, {
                          default: t(
                            () => l[82] || (l[82] = [n('\u7C7B\u578B')])
                          ),
                          _: 1,
                        }),
                        u(f, null, {
                          default: t(
                            () => l[83] || (l[83] = [n('\u9ED8\u8BA4\u503C')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                u(i, null, {
                  default: t(() => [
                    u(e, null, {
                      default: t(() => [
                        u(d, null, {
                          default: t(() => l[84] || (l[84] = [n('hoverable')])),
                          _: 1,
                        }),
                        u(d, null, {
                          default: t(
                            () =>
                              l[85] ||
                              (l[85] = [
                                n('\u662F\u5426\u53EF\u4EE5\u60AC\u6D6E'),
                              ])
                          ),
                          _: 1,
                        }),
                        u(d, null, {
                          default: t(
                            () =>
                              l[86] ||
                              (l[86] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        u(d, null, {
                          default: t(
                            () =>
                              l[87] || (l[87] = [o('code', null, 'false', -1)])
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
const X = N(O, [['render', Q]]);
export { X as default };
