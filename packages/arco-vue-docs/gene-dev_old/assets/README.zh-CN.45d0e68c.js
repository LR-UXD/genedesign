import {
  _ as N,
  d as P,
  u as T,
  r as d,
  o as k,
  c as w,
  w as t,
  a as l,
  b as o,
  e,
  m as $,
} from './index.9c61ea88.js';
import {
  D as I,
  a as V,
  b as z,
  c as j,
  d as R,
  e as S,
  f as q,
} from './color.5784701b.js';
import './index.add6d80b.js';

const p = [
  {
    version: '2.47.1',
    date: '2023-06-09',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} \u95EE\u9898\u4FEE\u590D',
        list: [
          `<p>\u4FEE\u590D\u7EC4\u4EF6\u5728\u81EA\u5B9A\u4E49 <code>prefix-cls</code> \u65F6\u5931\u6548\u7684\u95EE\u9898 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2476">#2476</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  { version: '2.40.1', date: '2022-12-23', list: [], extra: [] },
  {
    version: '2.12.0',
    date: '2021-12-24',
    list: [
      {
        type: 'enhancement',
        typeText: '\u{1F48E} \u529F\u80FD\u4F18\u5316',
        list: [
          `<p>count \u4E3A 0 \u65F6\u4E0D\u518D\u6E32\u67D3\u5FBD\u6807 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/445">#445</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const G = P({
  name: 'ArcoMain',
  components: {
    DemoBasic: I,
    DemoAlone: V,
    DemoDot: z,
    DemoText: j,
    DemoMax: R,
    DemoStatus: S,
    DemoColor: q,
  },
  setup() {
    const { locale: a } = T();
    return {
      locale: a,
      data: {
        meta: { type: '\u7EC4\u4EF6', category: '\u6570\u636E\u5C55\u793A' },
        title: '\u5FBD\u6807\u6570 Badge',
        description:
          '\u4E00\u822C\u51FA\u73B0\u5728\u56FE\u6807\u6216\u6587\u5B57\u7684\u53F3\u4E0A\u89D2\u3002\u63D0\u4F9B\u53CA\u65F6\u3001\u91CD\u8981\u7684\u4FE1\u606F\u63D0\u793A\u3002',
      },
      changelog: typeof p === 'undefined' ? void 0 : p,
      getMessage: (f, m) => (a.value === 'zh-CN' ? f : m),
    };
  },
});
function H(a, u, i, g, f, m) {
  const F = d('demo-basic');
  const B = d('demo-alone');
  const D = d('demo-dot');
  const E = d('demo-text');
  const _ = d('demo-max');
  const C = d('demo-status');
  const A = d('demo-color');
  const x = d('anchor-head');
  const r = d('a-th');
  const s = d('a-tr');
  const b = d('a-thead');
  const n = d('a-td');
  const y = d('a-tbody');
  const v = d('a-table');
  const M = d('arco-article');
  return (
    k(),
    w(
      M,
      $(a.data, { changelog: a.changelog }),
      {
        default: t(() => [
          l(F),
          l(B),
          l(D),
          l(E),
          l(_),
          l(C),
          l(A),
          l(
            x,
            { level: '2', href: 'API' },
            { default: t(() => u[0] || (u[0] = [o('API')])), _: 1 }
          ),
          u[38] ||
            (u[38] = e(
              'h3',
              { id: 'badge Props' },
              [e('code', null, '<badge>'), o(' Props')],
              -1
            )),
          l(
            v,
            { class: 'component-api-table' },
            {
              default: t(() => [
                u[37] ||
                  (u[37] = e(
                    'colgroup',
                    null,
                    [e('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                l(b, null, {
                  default: t(() => [
                    l(s, null, {
                      default: t(() => [
                        l(r, null, {
                          default: t(
                            () => u[1] || (u[1] = [o('\u53C2\u6570\u540D')])
                          ),
                          _: 1,
                        }),
                        l(r, null, {
                          default: t(
                            () => u[2] || (u[2] = [o('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        l(r, null, {
                          default: t(
                            () => u[3] || (u[3] = [o('\u7C7B\u578B')])
                          ),
                          _: 1,
                        }),
                        l(r, null, {
                          default: t(
                            () => u[4] || (u[4] = [o('\u9ED8\u8BA4\u503C')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                l(y, null, {
                  default: t(() => [
                    l(s, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[5] || (u[5] = [o('text')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[6] ||
                              (u[6] = [
                                o('\u81EA\u5B9A\u4E49\u63D0\u793A\u5185\u5BB9'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[7] || (u[7] = [e('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () => u[8] || (u[8] = [e('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(s, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[9] || (u[9] = [o('dot')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[10] ||
                              (u[10] = [
                                o('\u663E\u793A\u4E3A\u5C0F\u7EA2\u70B9'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[11] ||
                              (u[11] = [e('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[12] || (u[12] = [e('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(s, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[13] || (u[13] = [o('dot-style')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[14] ||
                              (u[14] = [o('\u5FBD\u6807\u7684\u6837\u5F0F')])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[15] || (u[15] = [e('code', null, 'object', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () => u[16] || (u[16] = [e('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(s, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[17] || (u[17] = [o('max-count')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[18] ||
                              (u[18] = [
                                o(
                                  '\u5FBD\u6807\u6700\u5927\u663E\u793A\u6570\u503C\uFF0C\u5982\u679Ccount\u8D85\u8FC7\u8FD9\u4E2A\u6570\u503C\u4F1A\u663E\u793A\u4E3AmaxCount'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[19] || (u[19] = [e('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () => u[20] || (u[20] = [e('code', null, '99', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(s, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[21] || (u[21] = [o('offset')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[22] ||
                              (u[22] = [
                                o(
                                  '\u8BBE\u7F6E\u5FBD\u6807\u4F4D\u7F6E\u7684\u504F\u79FB'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[23] ||
                              (u[23] = [e('code', null, 'number[]', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () => u[24] || (u[24] = [e('code', null, '[]', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(s, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[25] || (u[25] = [o('color')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[26] ||
                              (u[26] = [
                                o('\u5185\u7F6E\u7684\u4E00\u4E9B\u989C\u8272'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[27] ||
                              (u[27] = [
                                e('code', null, 'ColorType | string', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () => u[28] || (u[28] = [e('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(s, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[29] || (u[29] = [o('status')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[30] ||
                              (u[30] = [
                                o('\u5FBD\u6807\u7684\u72B6\u6001\u7C7B\u578B'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[31] ||
                              (u[31] = [
                                e(
                                  'code',
                                  null,
                                  "'normal' | 'processing' | 'success' | 'warning' | 'danger'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () => u[32] || (u[32] = [e('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(s, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[33] || (u[33] = [o('count')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[34] ||
                              (u[34] = [
                                o('\u5FBD\u6807\u663E\u793A\u7684\u6570\u5B57'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[35] || (u[35] = [e('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () => u[36] || (u[36] = [e('code', null, '-', -1)])
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
const O = N(G, [['render', H]]);
export { O as default };
