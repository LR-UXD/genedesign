import {
  _ as z,
  d as P,
  u as M,
  r as d,
  o as N,
  c as T,
  w as n,
  a as l,
  b as o,
  e,
  m as $,
} from './index.9c61ea88.js';
import {
  D as I,
  a as S,
  b as V,
  c as j,
  d as L,
  e as R,
  f as q,
  g as G,
} from './trackColor.c284ede0.js';

const m = [
  {
    version: '2.38.0-beta.2',
    date: '2022-10-21',
    list: [
      {
        type: 'enhancement',
        typeText: '\u{1F48E} \u529F\u80FD\u4F18\u5316',
        list: [
          `<p>\u4F18\u5316\u5206\u5272\u70B9\u7684\u5C55\u793A\u903B\u8F91 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1755">#1755</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.12.0',
    date: '2021-12-24',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} \u95EE\u9898\u4FEE\u590D',
        list: [
          `<p>\u4FEE\u590D\u663E\u793A\u6570\u503C\u7CBE\u5EA6\u95EE\u9898 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/447">#447</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.7.0',
    date: '2021-11-26',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} \u65B0\u589E\u529F\u80FD',
        list: [
          `<p>\u589E\u52A0 <code>track-color</code> \u5C5E\u6027 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/277">#277</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const H = P({
  name: 'ArcoMain',
  components: {
    DemoBasic: I,
    DemoStatus: S,
    DemoCircle: V,
    DemoMini: j,
    DemoSize: L,
    DemoLinear: R,
    DemoSteps: q,
    DemoTrackColor: G,
  },
  setup() {
    const { locale: r } = M();
    return {
      locale: r,
      data: {
        meta: { type: '\u7EC4\u4EF6', category: '\u53CD\u9988' },
        title: '\u8FDB\u5EA6\u6761 Progress',
        description:
          '\u7ED9\u4E88\u7528\u6237\u5F53\u524D\u7CFB\u7EDF\u6267\u884C\u4E2D\u4EFB\u52A1\u8FD0\u884C\u72B6\u6001\u7684\u53CD\u9988\uFF0C\u591A\u7528\u4E8E\u8FD0\u884C\u4E00\u6BB5\u65F6\u95F4\u7684\u573A\u666F\uFF0C\u6709\u6548\u51CF\u8F7B\u7528\u6237\u5728\u7B49\u5F85\u4E2D\u4EA7\u751F\u7684\u7126\u8651\u611F\u3002',
      },
      changelog: typeof m === 'undefined' ? void 0 : m,
      getMessage: (f, i) => (r.value === 'zh-CN' ? f : i),
    };
  },
});
function J(r, u, p, F, f, i) {
  const g = d('demo-basic');
  const B = d('demo-status');
  const D = d('demo-circle');
  const E = d('demo-mini');
  const C = d('demo-size');
  const A = d('demo-linear');
  const b = d('demo-steps');
  const _ = d('demo-trackColor');
  const y = d('anchor-head');
  const a = d('a-th');
  const s = d('a-tr');
  const v = d('a-thead');
  const t = d('a-td');
  const x = d('a-tbody');
  const k = d('a-table');
  const w = d('arco-article');
  return (
    N(),
    T(
      w,
      $(r.data, { changelog: r.changelog }),
      {
        default: n(() => [
          l(g),
          l(B),
          l(D),
          l(E),
          l(C),
          l(A),
          l(b),
          l(_),
          l(
            y,
            { level: '2', href: 'API' },
            { default: n(() => u[0] || (u[0] = [o('API')])), _: 1 }
          ),
          u[50] ||
            (u[50] = e(
              'h3',
              { id: 'progress Props' },
              [e('code', null, '<progress>'), o(' Props')],
              -1
            )),
          l(
            k,
            { class: 'component-api-table' },
            {
              default: n(() => [
                u[49] ||
                  (u[49] = e(
                    'colgroup',
                    null,
                    [e('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                l(v, null, {
                  default: n(() => [
                    l(s, null, {
                      default: n(() => [
                        l(a, null, {
                          default: n(
                            () => u[1] || (u[1] = [o('\u53C2\u6570\u540D')])
                          ),
                          _: 1,
                        }),
                        l(a, null, {
                          default: n(
                            () => u[2] || (u[2] = [o('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        l(a, null, {
                          default: n(
                            () => u[3] || (u[3] = [o('\u7C7B\u578B')])
                          ),
                          _: 1,
                        }),
                        l(a, null, {
                          default: n(
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
                l(x, null, {
                  default: n(() => [
                    l(s, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[5] || (u[5] = [o('type')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[6] ||
                              (u[6] = [
                                o('\u8FDB\u5EA6\u6761\u7684\u7C7B\u578B'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[7] ||
                              (u[7] = [
                                e('code', null, "'line' | 'circle'", -1),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[8] || (u[8] = [e('code', null, "'line'", -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(s, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[9] || (u[9] = [o('size')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[10] ||
                              (u[10] = [
                                o('\u8FDB\u5EA6\u6761\u7684\u5927\u5C0F'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[11] ||
                              (u[11] = [
                                e(
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
                              u[12] ||
                              (u[12] = [e('code', null, "'medium'", -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(s, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[13] || (u[13] = [o('percent')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[14] ||
                              (u[14] = [
                                o(
                                  '\u8FDB\u5EA6\u6761\u5F53\u524D\u7684\u767E\u5206\u6BD4'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[15] || (u[15] = [e('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[16] || (u[16] = [e('code', null, '0', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(s, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[17] || (u[17] = [o('steps')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[18] ||
                              (u[18] = [
                                o(
                                  '\u5F00\u542F\u6B65\u9AA4\u6761\u6A21\u5F0F\uFF0C\u5E76\u8BBE\u7F6E\u6B65\u9AA4\u6570'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[19] || (u[19] = [e('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[20] || (u[20] = [e('code', null, '0', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(s, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[21] || (u[21] = [o('animation')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[22] ||
                              (u[22] = [
                                o(
                                  '\u662F\u5426\u5F00\u542F\u8FC7\u6E21\u52A8\u753B'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[23] ||
                              (u[23] = [e('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[24] || (u[24] = [e('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(s, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () => u[25] || (u[25] = [o('stroke-width')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[26] ||
                              (u[26] = [
                                o('\u8FDB\u5EA6\u6761\u7684\u7EBF\u5BBD'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[27] || (u[27] = [e('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[28] || (u[28] = [e('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(s, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[29] || (u[29] = [o('width')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[30] ||
                              (u[30] = [
                                o('\u8FDB\u5EA6\u6761\u7684\u957F\u5EA6'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[31] ||
                              (u[31] = [e('code', null, 'number|string', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[32] || (u[32] = [e('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(s, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[33] || (u[33] = [o('color')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[34] ||
                              (u[34] = [
                                o('\u8FDB\u5EA6\u6761\u7684\u989C\u8272'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[35] ||
                              (u[35] = [e('code', null, 'string|object', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[36] || (u[36] = [e('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(s, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () => u[37] || (u[37] = [o('track-color')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[38] ||
                              (u[38] = [
                                o(
                                  '\u8FDB\u5EA6\u6761\u7684\u8F68\u9053\u989C\u8272'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[39] || (u[39] = [e('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[40] || (u[40] = [e('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(s, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[41] || (u[41] = [o('show-text')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[42] ||
                              (u[42] = [
                                o('\u662F\u5426\u663E\u793A\u6587\u5B57'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[43] ||
                              (u[43] = [e('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[44] || (u[44] = [e('code', null, 'true', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(s, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[45] || (u[45] = [o('status')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[46] ||
                              (u[46] = [o('\u8FDB\u5EA6\u6761\u72B6\u6001')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[47] ||
                              (u[47] = [
                                e(
                                  'code',
                                  null,
                                  "'normal' | 'success' | 'warning' | 'danger'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[48] || (u[48] = [e('code', null, '-', -1)])
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
const Q = z(H, [['render', J]]);
export { Q as default };
