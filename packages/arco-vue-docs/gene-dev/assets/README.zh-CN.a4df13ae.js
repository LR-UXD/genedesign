import {
  _ as x,
  d as y,
  u as z,
  r as s,
  o as A,
  c as N,
  w as t,
  a as l,
  b as d,
  e as o,
  m as w,
} from './index.9c61ea88.js';
import { D as P, a as M } from './nested.265e9dd4.js';

const m = [
  {
    version: '2.16.0',
    date: '2022-01-21',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} \u65B0\u589E\u529F\u80FD',
        list: [
          `<p>\u5C5E\u6027 <code>min</code> <code>max</code> \u652F\u6301\u8BBE\u7F6E px (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/607">#607</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const $ = y({
  name: 'ArcoMain',
  components: { DemoBasic: P, DemoNested: M },
  setup() {
    const { locale: r } = z();
    return {
      locale: r,
      data: {
        meta: { type: '\u7EC4\u4EF6', category: '\u5176\u4ED6' },
        title: '\u9762\u677F\u5206\u5272 Split',
        description:
          '\u5C06\u9762\u677F\u5206\u5272\u6210\u4E24\u90E8\u5206\u3002',
      },
      changelog: typeof m === 'undefined' ? void 0 : m,
      getMessage: (a, E) => (r.value === 'zh-CN' ? a : E),
    };
  },
});
function k(r, u, C, g, a, E) {
  const D = s('demo-basic');
  const B = s('demo-nested');
  const b = s('anchor-head');
  const f = s('a-th');
  const e = s('a-tr');
  const F = s('a-thead');
  const n = s('a-td');
  const i = s('a-tbody');
  const p = s('a-table');
  const v = s('arco-article');
  return (
    A(),
    N(
      v,
      w(r.data, { changelog: r.changelog }),
      {
        default: t(() => [
          l(D),
          l(B),
          l(
            b,
            { level: '2', href: 'API' },
            { default: t(() => u[0] || (u[0] = [d('API')])), _: 1 }
          ),
          u[63] ||
            (u[63] = o(
              'h3',
              { id: 'split Props' },
              [o('code', null, '<split>'), d(' Props')],
              -1
            )),
          l(
            p,
            { class: 'component-api-table' },
            {
              default: t(() => [
                u[33] ||
                  (u[33] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                l(F, null, {
                  default: t(() => [
                    l(e, null, {
                      default: t(() => [
                        l(f, null, {
                          default: t(
                            () => u[1] || (u[1] = [d('\u53C2\u6570\u540D')])
                          ),
                          _: 1,
                        }),
                        l(f, null, {
                          default: t(
                            () => u[2] || (u[2] = [d('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        l(f, null, {
                          default: t(
                            () => u[3] || (u[3] = [d('\u7C7B\u578B')])
                          ),
                          _: 1,
                        }),
                        l(f, null, {
                          default: t(
                            () => u[4] || (u[4] = [d('\u9ED8\u8BA4\u503C')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                l(i, null, {
                  default: t(() => [
                    l(e, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[5] || (u[5] = [d('component')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[6] ||
                              (u[6] = [
                                d('\u5206\u5272\u6846\u7684 html \u6807\u7B7E'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[7] || (u[7] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[8] || (u[8] = [o('code', null, "'div'", -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[9] || (u[9] = [d('direction')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[10] ||
                              (u[10] = [d('\u5206\u5272\u7684\u65B9\u5411')])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[11] ||
                              (u[11] = [
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
                        l(n, null, {
                          default: t(
                            () =>
                              u[12] ||
                              (u[12] = [o('code', null, "'horizontal'", -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(
                            () =>
                              u[13] ||
                              (u[13] = [
                                d('size '),
                                o('strong', null, '(v-model)', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[14] ||
                              (u[14] = [
                                d(
                                  '\u5206\u5272\u7684\u5927\u5C0F\uFF0C\u53EF\u4EE5\u662F 0~1 \u4EE3\u8868\u767E\u5206\u6BD4\uFF0C\u6216\u5177\u4F53\u6570\u503C\u7684\u50CF\u7D20\uFF0C\u5982 300px'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[15] ||
                              (u[15] = [o('code', null, 'number|string', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () => u[16] || (u[16] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(
                            () => u[17] || (u[17] = [d('default-size')])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[18] ||
                              (u[18] = [
                                d(
                                  '\u9ED8\u8BA4\u5206\u5272\u7684\u5927\u5C0F\uFF0C\u53EF\u4EE5\u662F 0~1 \u4EE3\u8868\u767E\u5206\u6BD4\uFF0C\u6216\u5177\u4F53\u6570\u503C\u7684\u50CF\u7D20\uFF0C\u5982 300px'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[19] ||
                              (u[19] = [o('code', null, 'number|string', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[20] || (u[20] = [o('code', null, '0.5', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[21] || (u[21] = [d('min')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[22] ||
                              (u[22] = [
                                d(
                                  '\u6700\u5C0F\u9608\u503C\uFF0C\u53EF\u4EE5\u662F 0~1 \u4EE3\u8868\u767E\u5206\u6BD4\uFF0C\u6216\u5177\u4F53\u6570\u503C\u7684\u50CF\u7D20\uFF0C\u5982 300px'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[23] ||
                              (u[23] = [o('code', null, 'number|string', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () => u[24] || (u[24] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[25] || (u[25] = [d('max')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[26] ||
                              (u[26] = [
                                d(
                                  '\u6700\u5927\u9608\u503C\uFF0C\u53EF\u4EE5\u662F 0~1 \u4EE3\u8868\u767E\u5206\u6BD4\uFF0C\u6216\u5177\u4F53\u6570\u503C\u7684\u50CF\u7D20\uFF0C\u5982 300px'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[27] ||
                              (u[27] = [o('code', null, 'number|string', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () => u[28] || (u[28] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[29] || (u[29] = [d('disabled')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[30] || (u[30] = [d('\u662F\u5426\u7981\u7528')])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[31] ||
                              (u[31] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[32] || (u[32] = [o('code', null, 'false', -1)])
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
          u[64] ||
            (u[64] = o(
              'h3',
              { id: 'split Events' },
              [o('code', null, '<split>'), d(' Events')],
              -1
            )),
          l(
            p,
            { class: 'component-api-table' },
            {
              default: t(() => [
                u[46] ||
                  (u[46] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                l(F, null, {
                  default: t(() => [
                    l(e, null, {
                      default: t(() => [
                        l(f, null, {
                          default: t(
                            () => u[34] || (u[34] = [d('\u4E8B\u4EF6\u540D')])
                          ),
                          _: 1,
                        }),
                        l(f, null, {
                          default: t(
                            () => u[35] || (u[35] = [d('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        l(f, null, {
                          default: t(
                            () => u[36] || (u[36] = [d('\u53C2\u6570')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                l(i, null, {
                  default: t(() => [
                    l(e, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(
                            () => u[37] || (u[37] = [d('move-start')])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[38] ||
                              (u[38] = [
                                d(
                                  '\u5F00\u59CB\u62D6\u62FD\u4E4B\u524D\u89E6\u53D1'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(() => u[39] || (u[39] = [d('-')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[40] || (u[40] = [d('moving')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[41] ||
                              (u[41] = [d('\u62D6\u62FD\u65F6\u89E6\u53D1')])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(() => u[42] || (u[42] = [d('-')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[43] || (u[43] = [d('move-end')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[44] ||
                              (u[44] = [
                                d(
                                  '\u62D6\u62FD\u7ED3\u675F\u4E4B\u540E\u89E6\u53D1'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(() => u[45] || (u[45] = [d('-')])),
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
          u[65] ||
            (u[65] = o(
              'h3',
              { id: 'split Slots' },
              [o('code', null, '<split>'), d(' Slots')],
              -1
            )),
          l(
            p,
            { class: 'component-api-table' },
            {
              default: t(() => [
                u[62] ||
                  (u[62] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                l(F, null, {
                  default: t(() => [
                    l(e, null, {
                      default: t(() => [
                        l(f, null, {
                          default: t(
                            () => u[47] || (u[47] = [d('\u63D2\u69FD\u540D')])
                          ),
                          _: 1,
                        }),
                        l(f, null, {
                          default: t(
                            () => u[48] || (u[48] = [d('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        l(f, null, {
                          default: t(
                            () => u[49] || (u[49] = [d('\u53C2\u6570')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                l(i, null, {
                  default: t(() => [
                    l(e, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[50] || (u[50] = [d('first')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[51] ||
                              (u[51] = [
                                d(
                                  '\u7B2C\u4E00\u4E2A\u9762\u677F\u7684\u5185\u5BB9'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(() => u[52] || (u[52] = [d('-')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(
                            () => u[53] || (u[53] = [d('resize-trigger')])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[54] ||
                              (u[54] = [
                                d('\u4F38\u7F29\u6746\u7684\u5185\u5BB9'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(() => u[55] || (u[55] = [d('-')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(
                            () => u[56] || (u[56] = [d('resize-trigger-icon')])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[57] ||
                              (u[57] = [
                                d('\u4F38\u7F29\u6746\u7684\u56FE\u6807'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(() => u[58] || (u[58] = [d('-')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[59] || (u[59] = [d('second')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[60] ||
                              (u[60] = [
                                d(
                                  '\u7B2C\u4E8C\u4E2A\u9762\u677F\u7684\u5185\u5BB9'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(() => u[61] || (u[61] = [d('-')])),
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
const V = x($, [['render', k]]);
export { V as default };
