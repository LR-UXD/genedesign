import {
  _ as P,
  d as k,
  u as M,
  r as e,
  o as R,
  c as $,
  w as n,
  a as u,
  b as o,
  e as d,
  m as I,
} from './index.9c61ea88.js';
import {
  D as T,
  a as V,
  b as z,
  c as S,
  d as G,
  e as H,
  f as j,
  g as q,
} from './grading.303671bb.js';

const C = [
  {
    version: '2.54.3',
    date: '2024-01-19',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} \u95EE\u9898\u4FEE\u590D',
        list: [
          `<p>\u4FEE\u590D\u5728<code>nuxt</code>\u4E2D\u56FE\u6807\u5143\u7D20\u7F3A\u5931\u7684\u95EE\u9898 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2930">#2930</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.18.0',
    date: '2022-03-04',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} \u65B0\u589E\u529F\u80FD',
        list: [
          `<p>\u589E\u52A0 color \u5C5E\u6027 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/770">#770</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const J = k({
  name: 'ArcoMain',
  components: {
    DemoBasic: T,
    DemoHalf: V,
    DemoColor: z,
    DemoReadonly: S,
    DemoClear: G,
    DemoCharacter: H,
    DemoCount: j,
    DemoGrading: q,
  },
  setup() {
    const { locale: s } = M();
    return {
      locale: s,
      data: {
        meta: { type: '\u7EC4\u4EF6', category: '\u6570\u636E\u8F93\u5165' },
        title: '\u8BC4\u5206 Rate',
        description:
          '\u7528\u4E8E\u8BC4\u5206\u6216\u6253\u661F\u7684\u7EC4\u4EF6\u3002',
      },
      changelog: typeof C === 'undefined' ? void 0 : C,
      getMessage: (i, g) => (s.value === 'zh-CN' ? i : g),
    };
  },
});
function K(s, l, F, b, i, g) {
  const B = e('demo-basic');
  const E = e('demo-half');
  const D = e('demo-color');
  const v = e('demo-readonly');
  const y = e('demo-clear');
  const x = e('demo-character');
  const A = e('demo-count');
  const _ = e('demo-grading');
  const w = e('anchor-head');
  const f = e('a-th');
  const a = e('a-tr');
  const r = e('a-thead');
  const t = e('a-td');
  const m = e('a-tbody');
  const p = e('a-table');
  const N = e('arco-article');
  return (
    R(),
    $(
      N,
      I(s.data, { changelog: s.changelog }),
      {
        default: n(() => [
          u(B),
          u(E),
          u(D),
          u(v),
          u(y),
          u(x),
          u(A),
          u(_),
          u(
            w,
            { level: '2', href: 'API' },
            { default: n(() => l[0] || (l[0] = [o('API')])), _: 1 }
          ),
          l[61] ||
            (l[61] = d(
              'h3',
              { id: 'rate Props' },
              [d('code', null, '<rate>'), o(' Props')],
              -1
            )),
          u(
            p,
            { class: 'component-api-table' },
            {
              default: n(() => [
                l[43] ||
                  (l[43] = d(
                    'colgroup',
                    null,
                    [d('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                u(r, null, {
                  default: n(() => [
                    u(a, null, {
                      default: n(() => [
                        u(f, null, {
                          default: n(
                            () => l[1] || (l[1] = [o('\u53C2\u6570\u540D')])
                          ),
                          _: 1,
                        }),
                        u(f, null, {
                          default: n(
                            () => l[2] || (l[2] = [o('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        u(f, null, {
                          default: n(
                            () => l[3] || (l[3] = [o('\u7C7B\u578B')])
                          ),
                          _: 1,
                        }),
                        u(f, null, {
                          default: n(
                            () => l[4] || (l[4] = [o('\u9ED8\u8BA4\u503C')])
                          ),
                          _: 1,
                        }),
                        u(f, null, {
                          default: n(
                            () => l[5] || (l[5] = [o('\u7248\u672C')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                u(m, null, {
                  default: n(() => [
                    u(a, null, {
                      default: n(() => [
                        u(t, null, {
                          default: n(() => l[6] || (l[6] = [o('count')])),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[7] ||
                              (l[7] = [o('\u8BC4\u5206\u7684\u603B\u6570')])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[8] || (l[8] = [d('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () => l[9] || (l[9] = [d('code', null, '5', -1)])
                          ),
                          _: 1,
                        }),
                        u(t),
                      ]),
                      _: 1,
                    }),
                    u(a, null, {
                      default: n(() => [
                        u(t, null, {
                          default: n(
                            () =>
                              l[10] ||
                              (l[10] = [
                                o('model-value '),
                                d('strong', null, '(v-model)', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () => l[11] || (l[11] = [o('\u7ED1\u5B9A\u503C')])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[12] || (l[12] = [d('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () => l[13] || (l[13] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        u(t),
                      ]),
                      _: 1,
                    }),
                    u(a, null, {
                      default: n(() => [
                        u(t, null, {
                          default: n(
                            () => l[14] || (l[14] = [o('default-value')])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () => l[15] || (l[15] = [o('\u9ED8\u8BA4\u503C')])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[16] || (l[16] = [d('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () => l[17] || (l[17] = [d('code', null, '0', -1)])
                          ),
                          _: 1,
                        }),
                        u(t),
                      ]),
                      _: 1,
                    }),
                    u(a, null, {
                      default: n(() => [
                        u(t, null, {
                          default: n(
                            () => l[18] || (l[18] = [o('allow-half')])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[19] ||
                              (l[19] = [
                                o('\u662F\u5426\u5141\u8BB8\u534A\u9009'),
                              ])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[20] ||
                              (l[20] = [d('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[21] || (l[21] = [d('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        u(t),
                      ]),
                      _: 1,
                    }),
                    u(a, null, {
                      default: n(() => [
                        u(t, null, {
                          default: n(
                            () => l[22] || (l[22] = [o('allow-clear')])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[23] ||
                              (l[23] = [
                                o('\u662F\u5426\u5141\u8BB8\u6E05\u9664'),
                              ])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[24] ||
                              (l[24] = [d('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[25] || (l[25] = [d('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        u(t),
                      ]),
                      _: 1,
                    }),
                    u(a, null, {
                      default: n(() => [
                        u(t, null, {
                          default: n(() => l[26] || (l[26] = [o('grading')])),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[27] ||
                              (l[27] = [
                                o(
                                  '\u662F\u5426\u5F00\u542F\u7B11\u8138\u5206\u7EA7'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[28] ||
                              (l[28] = [d('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[29] || (l[29] = [d('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        u(t),
                      ]),
                      _: 1,
                    }),
                    u(a, null, {
                      default: n(() => [
                        u(t, null, {
                          default: n(() => l[30] || (l[30] = [o('readonly')])),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[31] ||
                              (l[31] = [
                                o('\u662F\u5426\u4E3A\u53EA\u8BFB\u72B6\u6001'),
                              ])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[32] ||
                              (l[32] = [d('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[33] || (l[33] = [d('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        u(t),
                      ]),
                      _: 1,
                    }),
                    u(a, null, {
                      default: n(() => [
                        u(t, null, {
                          default: n(() => l[34] || (l[34] = [o('disabled')])),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[35] || (l[35] = [o('\u662F\u5426\u7981\u7528')])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[36] ||
                              (l[36] = [d('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[37] || (l[37] = [d('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        u(t),
                      ]),
                      _: 1,
                    }),
                    u(a, null, {
                      default: n(() => [
                        u(t, null, {
                          default: n(() => l[38] || (l[38] = [o('color')])),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () => l[39] || (l[39] = [o('\u989C\u8272')])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[40] ||
                              (l[40] = [
                                d(
                                  'code',
                                  null,
                                  'string | Record<string, string>',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () => l[41] || (l[41] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(() => l[42] || (l[42] = [o('2.18.0')])),
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
          l[62] ||
            (l[62] = d(
              'h3',
              { id: 'rate Events' },
              [d('code', null, '<rate>'), o(' Events')],
              -1
            )),
          u(
            p,
            { class: 'component-api-table' },
            {
              default: n(() => [
                l[53] ||
                  (l[53] = d(
                    'colgroup',
                    null,
                    [d('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                u(r, null, {
                  default: n(() => [
                    u(a, null, {
                      default: n(() => [
                        u(f, null, {
                          default: n(
                            () => l[44] || (l[44] = [o('\u4E8B\u4EF6\u540D')])
                          ),
                          _: 1,
                        }),
                        u(f, null, {
                          default: n(
                            () => l[45] || (l[45] = [o('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        u(f, null, {
                          default: n(
                            () => l[46] || (l[46] = [o('\u53C2\u6570')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                u(m, null, {
                  default: n(() => [
                    u(a, null, {
                      default: n(() => [
                        u(t, null, {
                          default: n(() => l[47] || (l[47] = [o('change')])),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[48] ||
                              (l[48] = [
                                o('\u503C\u6539\u53D8\u65F6\u89E6\u53D1'),
                              ])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[49] ||
                              (l[49] = [
                                o('value: '),
                                d('code', null, 'number', -1),
                              ])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(a, null, {
                      default: n(() => [
                        u(t, null, {
                          default: n(
                            () => l[50] || (l[50] = [o('hover-change')])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[51] ||
                              (l[51] = [
                                o(
                                  '\u9F20\u6807\u79FB\u52A8\u5230\u6570\u503C\u4E0A\u65F6\u89E6\u53D1'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[52] ||
                              (l[52] = [
                                o('value: '),
                                d('code', null, 'number', -1),
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
          l[63] ||
            (l[63] = d(
              'h3',
              { id: 'rate Slots' },
              [d('code', null, '<rate>'), o(' Slots')],
              -1
            )),
          u(
            p,
            { class: 'component-api-table' },
            {
              default: n(() => [
                l[60] ||
                  (l[60] = d(
                    'colgroup',
                    null,
                    [d('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                u(r, null, {
                  default: n(() => [
                    u(a, null, {
                      default: n(() => [
                        u(f, null, {
                          default: n(
                            () => l[54] || (l[54] = [o('\u63D2\u69FD\u540D')])
                          ),
                          _: 1,
                        }),
                        u(f, null, {
                          default: n(
                            () => l[55] || (l[55] = [o('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        u(f, null, {
                          default: n(
                            () => l[56] || (l[56] = [o('\u53C2\u6570')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                u(m, null, {
                  default: n(() => [
                    u(a, null, {
                      default: n(() => [
                        u(t, null, {
                          default: n(() => l[57] || (l[57] = [o('character')])),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () => l[58] || (l[58] = [o('\u7B26\u53F7')])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[59] ||
                              (l[59] = [
                                o('index: '),
                                d('code', null, 'number', -1),
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
        ]),
        _: 1,
      },
      16,
      ['changelog']
    )
  );
}
const Q = P(J, [['render', K]]);
export { Q as default };
