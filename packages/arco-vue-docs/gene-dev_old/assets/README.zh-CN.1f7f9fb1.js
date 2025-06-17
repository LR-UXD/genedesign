import {
  _ as v,
  d as x,
  u as A,
  r as a,
  o as B,
  c as k,
  w as t,
  a as u,
  e as o,
  b as n,
  m as T,
} from './index.9c61ea88.js';
import { D as w, a as M } from './type.f19c84ec.js';

const b = [
  {
    version: '2.42.1',
    date: '2023-02-03',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} \u95EE\u9898\u4FEE\u590D',
        list: [
          `<p>\u4FEE\u590Demits \u7684 ts \u58F0\u660E\u9519\u8BEF (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2077">#2077</a>)</p>
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
          `<p>\u589E\u52A0 scrollLeft \u548C scrollTop \u65B9\u6CD5 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1909">#1909</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.37.2',
    date: '2022-09-21',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} \u95EE\u9898\u4FEE\u590D',
        list: [
          `<p>\u4FEE\u590D\u5728 Firefox \u4E0B\u7684\u6837\u5F0F\u95EE\u9898 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1655">#1655</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.37.1',
    date: '2022-09-16',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} \u65B0\u589E\u529F\u80FD',
        list: [
          `<p>\u589E\u52A0\u865A\u62DF\u6EDA\u52A8\u6761\u7EC4\u4EF6 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1634">#1634</a>)</p>
`,
          `<p>table\u3001select\u3001list\u3001cascader\u3001dropdown \u7EC4\u4EF6\u66FF\u6362\u865A\u62DF\u6EDA\u52A8\u6761 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1634">#1634</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.30.1-beta.1',
    date: '2022-06-10',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} \u65B0\u589E\u529F\u80FD',
        list: [
          `<p>\u589E\u52A0\u865A\u62DF\u6EDA\u52A8\u6761\u7EC4\u4EF6 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1098">#1098</a>)</p>
`,
          `<p>table\u3001select\u3001list \u7EC4\u4EF6\u66FF\u6362\u865A\u62DF\u6EDA\u52A8\u6761 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1098">#1098</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const N = x({
  name: 'ArcoMain',
  components: { DemoBasic: w, DemoType: M },
  setup() {
    const { locale: r } = A();
    return {
      locale: r,
      data: {
        meta: { type: '\u7EC4\u4EF6', category: '\u5176\u4ED6' },
        title: '\u6EDA\u52A8\u6761 Scrollbar',
        description:
          '\u7528\u4E8E\u66FF\u6362\u6D4F\u89C8\u5668\u9ED8\u8BA4\u6EDA\u52A8\u6761\u6837\u5F0F\u3002',
      },
      changelog: typeof b === 'undefined' ? void 0 : b,
      getMessage: (m, g) => (r.value === 'zh-CN' ? m : g),
    };
  },
});
function V(r, l, y, C, m, g) {
  const D = a('demo-basic');
  const E = a('demo-type');
  const s = a('a-th');
  const d = a('a-tr');
  const f = a('a-thead');
  const e = a('a-td');
  const p = a('a-tbody');
  const i = a('a-table');
  const F = a('arco-article');
  return (
    B(),
    k(
      F,
      T(r.data, { changelog: r.changelog }),
      {
        default: t(() => [
          u(D),
          u(E),
          l[44] ||
            (l[44] = o(
              'h3',
              { id: 'scrollbar Props' },
              [o('code', null, '<scrollbar>'), n(' Props')],
              -1
            )),
          u(
            i,
            { class: 'component-api-table' },
            {
              default: t(() => [
                l[16] ||
                  (l[16] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                u(f, null, {
                  default: t(() => [
                    u(d, null, {
                      default: t(() => [
                        u(s, null, {
                          default: t(
                            () => l[0] || (l[0] = [n('\u53C2\u6570\u540D')])
                          ),
                          _: 1,
                        }),
                        u(s, null, {
                          default: t(
                            () => l[1] || (l[1] = [n('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        u(s, null, {
                          default: t(
                            () => l[2] || (l[2] = [n('\u7C7B\u578B')])
                          ),
                          _: 1,
                        }),
                        u(s, null, {
                          default: t(
                            () => l[3] || (l[3] = [n('\u9ED8\u8BA4\u503C')])
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
                    u(d, null, {
                      default: t(() => [
                        u(e, null, {
                          default: t(() => l[4] || (l[4] = [n('type')])),
                          _: 1,
                        }),
                        u(e, null, {
                          default: t(
                            () => l[5] || (l[5] = [n('\u7C7B\u578B')])
                          ),
                          _: 1,
                        }),
                        u(e, null, {
                          default: t(
                            () =>
                              l[6] ||
                              (l[6] = [
                                o('code', null, "'track' | 'embed'", -1),
                              ])
                          ),
                          _: 1,
                        }),
                        u(e, null, {
                          default: t(
                            () =>
                              l[7] || (l[7] = [o('code', null, "'embed'", -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(d, null, {
                      default: t(() => [
                        u(e, null, {
                          default: t(() => l[8] || (l[8] = [n('outer-class')])),
                          _: 1,
                        }),
                        u(e, null, {
                          default: t(
                            () =>
                              l[9] ||
                              (l[9] = [n('\u5916\u5C42\u7684\u7C7B\u540D')])
                          ),
                          _: 1,
                        }),
                        u(e, null, {
                          default: t(
                            () =>
                              l[10] ||
                              (l[10] = [
                                o('code', null, 'string|object|array', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        u(e, null, {
                          default: t(
                            () => l[11] || (l[11] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(d, null, {
                      default: t(() => [
                        u(e, null, {
                          default: t(
                            () => l[12] || (l[12] = [n('outer-style')])
                          ),
                          _: 1,
                        }),
                        u(e, null, {
                          default: t(
                            () =>
                              l[13] ||
                              (l[13] = [n('\u5916\u5C42\u7684\u6837\u5F0F')])
                          ),
                          _: 1,
                        }),
                        u(e, null, {
                          default: t(
                            () =>
                              l[14] ||
                              (l[14] = [o('code', null, 'StyleValue', -1)])
                          ),
                          _: 1,
                        }),
                        u(e, null, {
                          default: t(
                            () => l[15] || (l[15] = [o('code', null, '-', -1)])
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
          l[45] ||
            (l[45] = o(
              'h3',
              { id: 'scrollbar Events' },
              [o('code', null, '<scrollbar>'), n(' Events')],
              -1
            )),
          u(
            i,
            { class: 'component-api-table' },
            {
              default: t(() => [
                l[23] ||
                  (l[23] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                u(f, null, {
                  default: t(() => [
                    u(d, null, {
                      default: t(() => [
                        u(s, null, {
                          default: t(
                            () => l[17] || (l[17] = [n('\u4E8B\u4EF6\u540D')])
                          ),
                          _: 1,
                        }),
                        u(s, null, {
                          default: t(
                            () => l[18] || (l[18] = [n('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        u(s, null, {
                          default: t(
                            () => l[19] || (l[19] = [n('\u53C2\u6570')])
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
                    u(d, null, {
                      default: t(() => [
                        u(e, null, {
                          default: t(() => l[20] || (l[20] = [n('scroll')])),
                          _: 1,
                        }),
                        u(e, null, {
                          default: t(
                            () =>
                              l[21] ||
                              (l[21] = [n('\u6EDA\u52A8\u65F6\u89E6\u53D1')])
                          ),
                          _: 1,
                        }),
                        u(e, null, {
                          default: t(() => l[22] || (l[22] = [n('-')])),
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
          l[46] ||
            (l[46] = o(
              'h3',
              { id: 'scrollbar Methods' },
              [o('code', null, '<scrollbar>'), n(' Methods')],
              -1
            )),
          u(
            i,
            { class: 'component-api-table' },
            {
              default: t(() => [
                l[43] ||
                  (l[43] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                u(f, null, {
                  default: t(() => [
                    u(d, null, {
                      default: t(() => [
                        u(s, null, {
                          default: t(
                            () => l[24] || (l[24] = [n('\u65B9\u6CD5\u540D')])
                          ),
                          _: 1,
                        }),
                        u(s, null, {
                          default: t(
                            () => l[25] || (l[25] = [n('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        u(s, null, {
                          default: t(
                            () => l[26] || (l[26] = [n('\u53C2\u6570')])
                          ),
                          _: 1,
                        }),
                        u(s, null, {
                          default: t(
                            () => l[27] || (l[27] = [n('\u8FD4\u56DE\u503C')])
                          ),
                          _: 1,
                        }),
                        u(s, null, {
                          default: t(
                            () => l[28] || (l[28] = [n('\u7248\u672C')])
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
                    u(d, null, {
                      default: t(() => [
                        u(e, null, {
                          default: t(() => l[29] || (l[29] = [n('scrollTo')])),
                          _: 1,
                        }),
                        u(e, null, {
                          default: t(
                            () => l[30] || (l[30] = [n('\u6EDA\u52A8')])
                          ),
                          _: 1,
                        }),
                        u(e, null, {
                          default: t(
                            () =>
                              l[31] ||
                              (l[31] = [
                                n('options: '),
                                o(
                                  'code',
                                  null,
                                  'number | {left?: number;top?: number}',
                                  -1
                                ),
                                o('br', null, null, -1),
                                n('y: '),
                                o('code', null, 'number', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        u(e, null, {
                          default: t(() => l[32] || (l[32] = [n('-')])),
                          _: 1,
                        }),
                        u(e),
                      ]),
                      _: 1,
                    }),
                    u(d, null, {
                      default: t(() => [
                        u(e, null, {
                          default: t(() => l[33] || (l[33] = [n('scrollTop')])),
                          _: 1,
                        }),
                        u(e, null, {
                          default: t(
                            () =>
                              l[34] || (l[34] = [n('\u7EB5\u5411\u6EDA\u52A8')])
                          ),
                          _: 1,
                        }),
                        u(e, null, {
                          default: t(
                            () =>
                              l[35] ||
                              (l[35] = [
                                n('top: '),
                                o('code', null, 'number', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        u(e, null, {
                          default: t(() => l[36] || (l[36] = [n('-')])),
                          _: 1,
                        }),
                        u(e, null, {
                          default: t(() => l[37] || (l[37] = [n('2.40.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(d, null, {
                      default: t(() => [
                        u(e, null, {
                          default: t(
                            () => l[38] || (l[38] = [n('scrollLeft')])
                          ),
                          _: 1,
                        }),
                        u(e, null, {
                          default: t(
                            () =>
                              l[39] || (l[39] = [n('\u6A2A\u5411\u6EDA\u52A8')])
                          ),
                          _: 1,
                        }),
                        u(e, null, {
                          default: t(
                            () =>
                              l[40] ||
                              (l[40] = [
                                n('left: '),
                                o('code', null, 'number', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        u(e, null, {
                          default: t(() => l[41] || (l[41] = [n('-')])),
                          _: 1,
                        }),
                        u(e, null, {
                          default: t(() => l[42] || (l[42] = [n('2.40.0')])),
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
const _ = v(N, [['render', V]]);
export { _ as default };
