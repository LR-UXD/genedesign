import {
  _ as C,
  d as D,
  u as A,
  r as d,
  o as k,
  c as T,
  w as t,
  a as l,
  b as n,
  e as o,
  m as z,
} from './index.9c61ea88.js';
import { D as w, a as N, b as P } from './vertical.ff86f056.js';
import './index.add6d80b.js';

const f = [
  {
    version: '2.48.1',
    date: '2023-07-14',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} \u95EE\u9898\u4FEE\u590D',
        list: [
          `<p>\u4FEE\u590D\u7AD6\u5411\u81EA\u9002\u5E94\u9AD8\u5EA6 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2561">#2561</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.46.0',
    date: '2023-05-12',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} \u95EE\u9898\u4FEE\u590D',
        list: [
          `<p>\u4FEE\u590D margin \u65E0\u6CD5\u8BBE\u7F6E\u4E3A 0 \u7684\u95EE\u9898 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2390">#2390</a>)</p>
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
        type: 'bugfix',
        typeText: '\u{1F41B} \u95EE\u9898\u4FEE\u590D',
        list: [
          `<p>\u4FEE\u590D\u5206\u5272\u7EBF\u5C55\u793A\u9519\u8BEF\u7684\u95EE\u9898 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2205">#2205</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.39.2',
    date: '2022-12-02',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} \u95EE\u9898\u4FEE\u590D',
        list: [
          `<p>\u4FEE\u590D\u8BBE\u7F6E size \u65F6\uFF0C\u6837\u5F0F\u9519\u8BEF\u7684\u95EE\u9898 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1905">#1905</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.35.0',
    date: '2022-08-12',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} \u65B0\u589E\u529F\u80FD',
        list: [
          `<p>\u5206\u5272\u7EBF\u5BBD\u5EA6\u53CA\u6837\u5F0F\u8BBE\u7F6E (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1473">#1473</a>)</p>
`,
          `<p>\u5206\u5272\u7EBF\u8FB9\u8DDD\u8BBE\u7F6E (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1473">#1473</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const M = D({
  name: 'ArcoMain',
  components: { DemoBasic: w, DemoWithText: N, DemoVertical: P },
  setup() {
    const { locale: s } = A();
    return {
      locale: s,
      data: {
        meta: { type: '\u7EC4\u4EF6', category: '\u5E03\u5C40' },
        title: '\u5206\u5272\u7EBF Divider',
        description:
          '\u5212\u5206\u5185\u5BB9\u533A\u57DF\uFF0C\u5BF9\u6A21\u5757\u505A\u5206\u9694\u3002',
      },
      changelog: typeof f === 'undefined' ? void 0 : f,
      getMessage: (r, p) => (s.value === 'zh-CN' ? r : p),
    };
  },
});
function V(s, u, g, m, r, p) {
  const F = d('demo-basic');
  const B = d('demo-with-text');
  const v = d('demo-vertical');
  const b = d('anchor-head');
  const i = d('a-th');
  const a = d('a-tr');
  const x = d('a-thead');
  const e = d('a-td');
  const E = d('a-tbody');
  const _ = d('a-table');
  const y = d('arco-article');
  return (
    k(),
    T(
      y,
      z(s.data, { changelog: s.changelog }),
      {
        default: t(() => [
          l(F),
          l(B),
          l(v),
          l(
            b,
            { level: '2', href: 'API' },
            { default: t(() => u[0] || (u[0] = [n('API')])), _: 1 }
          ),
          u[30] ||
            (u[30] = o(
              'h3',
              { id: 'divider Props' },
              [o('code', null, '<divider>'), n(' Props')],
              -1
            )),
          l(
            _,
            { class: 'component-api-table' },
            {
              default: t(() => [
                u[29] ||
                  (u[29] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                l(x, null, {
                  default: t(() => [
                    l(a, null, {
                      default: t(() => [
                        l(i, null, {
                          default: t(
                            () => u[1] || (u[1] = [n('\u53C2\u6570\u540D')])
                          ),
                          _: 1,
                        }),
                        l(i, null, {
                          default: t(
                            () => u[2] || (u[2] = [n('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        l(i, null, {
                          default: t(
                            () => u[3] || (u[3] = [n('\u7C7B\u578B')])
                          ),
                          _: 1,
                        }),
                        l(i, null, {
                          default: t(
                            () => u[4] || (u[4] = [n('\u9ED8\u8BA4\u503C')])
                          ),
                          _: 1,
                        }),
                        l(i, null, {
                          default: t(
                            () => u[5] || (u[5] = [n('\u7248\u672C')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                l(E, null, {
                  default: t(() => [
                    l(a, null, {
                      default: t(() => [
                        l(e, null, {
                          default: t(() => u[6] || (u[6] = [n('direction')])),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(
                            () =>
                              u[7] ||
                              (u[7] = [
                                n(
                                  '\u5206\u5272\u7EBF\u7684\u65B9\u5411\uFF0C\u662F\u6C34\u5E73\u8FD8\u662F\u7AD6\u76F4'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(
                            () =>
                              u[8] ||
                              (u[8] = [
                                o(
                                  'code',
                                  null,
                                  "'horizontal' | 'vertical'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(
                            () =>
                              u[9] ||
                              (u[9] = [o('code', null, "'horizontal'", -1)])
                          ),
                          _: 1,
                        }),
                        l(e),
                      ]),
                      _: 1,
                    }),
                    l(a, null, {
                      default: t(() => [
                        l(e, null, {
                          default: t(
                            () => u[10] || (u[10] = [n('orientation')])
                          ),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(
                            () =>
                              u[11] ||
                              (u[11] = [
                                n(
                                  '\u5206\u5272\u7EBF\u6587\u5B57\u7684\u4F4D\u7F6E'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(
                            () =>
                              u[12] ||
                              (u[12] = [
                                o(
                                  'code',
                                  null,
                                  "'left' | 'center' | 'right'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(
                            () =>
                              u[13] ||
                              (u[13] = [o('code', null, "'center'", -1)])
                          ),
                          _: 1,
                        }),
                        l(e),
                      ]),
                      _: 1,
                    }),
                    l(a, null, {
                      default: t(() => [
                        l(e, null, {
                          default: t(() => u[14] || (u[14] = [n('type')])),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(
                            () =>
                              u[15] ||
                              (u[15] = [
                                n('\u5206\u5272\u7EBF\u6837\u5F0F\u7C7B\u578B'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(
                            () =>
                              u[16] ||
                              (u[16] = [
                                o(
                                  'code',
                                  null,
                                  "'solid' | 'dashed' | 'dotted' | 'double'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(
                            () => u[17] || (u[17] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(() => u[18] || (u[18] = [n('2.35.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(a, null, {
                      default: t(() => [
                        l(e, null, {
                          default: t(() => u[19] || (u[19] = [n('size')])),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(
                            () =>
                              u[20] ||
                              (u[20] = [
                                n(
                                  '\u5206\u5272\u7EBF\u5BBD\u5EA6/\u9AD8\u5EA6'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(
                            () =>
                              u[21] || (u[21] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(
                            () => u[22] || (u[22] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(() => u[23] || (u[23] = [n('2.35.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(a, null, {
                      default: t(() => [
                        l(e, null, {
                          default: t(() => u[24] || (u[24] = [n('margin')])),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(
                            () =>
                              u[25] ||
                              (u[25] = [
                                n(
                                  '\u5206\u5272\u7EBF\u4E0A\u4E0B margin (\u5782\u76F4\u65B9\u5411\u65F6\u4E3A\u5DE6\u53F3 margin)'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(
                            () =>
                              u[26] ||
                              (u[26] = [o('code', null, 'number | string', -1)])
                          ),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(
                            () => u[27] || (u[27] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(() => u[28] || (u[28] = [n('2.35.0')])),
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
const W = C(M, [['render', V]]);
export { W as default };
