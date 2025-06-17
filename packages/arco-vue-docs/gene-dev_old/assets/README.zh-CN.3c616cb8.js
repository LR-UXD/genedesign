import {
  _ as x,
  d as P,
  u as w,
  r as s,
  o as N,
  c as M,
  w as t,
  a as l,
  e as d,
  b as o,
  m as S,
} from './index.9c61ea88.js';
import { D as k, a as T, b as $, c as I } from './color.0c2f3673.js';

const C = [
  {
    version: '2.18.0-beta.2',
    date: '2022-02-25',
    list: [
      {
        type: 'style',
        typeText: '\u{1F485} \u6837\u5F0F\u66F4\u65B0',
        list: [
          `<p>\u4F18\u5316\u663E\u793A\u52A8\u753B\uFF0C\u540C react \u7248\u672C\u4FDD\u6301\u4E00\u81F4 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/733">#733</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.17.0',
    date: '2022-02-11',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} \u95EE\u9898\u4FEE\u590D',
        list: [
          `<p>\u4FEE\u590D\u6309\u9700\u52A0\u8F7D\u65F6\u4E22\u5931 trigger \u6837\u5F0F\u7684\u95EE\u9898 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/674">#674</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const V = P({
  name: 'ArcoMain',
  components: { DemoBasic: k, DemoMini: T, DemoPosition: $, DemoColor: I },
  setup() {
    const { locale: i } = w();
    return {
      locale: i,
      data: {
        meta: { type: '\u7EC4\u4EF6', category: '\u6570\u636E\u5C55\u793A' },
        title: '\u6587\u5B57\u6C14\u6CE1 Tooltip',
        description:
          '\u9F20\u6807\u60AC\u505C\u3001\u805A\u7126\u6216\u70B9\u51FB\u5728\u67D0\u4E2A\u7EC4\u4EF6\u65F6\uFF0C\u5F39\u51FA\u7684\u6587\u5B57\u63D0\u793A\u3002',
      },
      changelog: typeof C === 'undefined' ? void 0 : C,
      getMessage: (F, m) => (i.value === 'zh-CN' ? F : m),
    };
  },
});
function z(i, u, g, E, F, m) {
  const B = s('demo-basic');
  const b = s('demo-mini');
  const A = s('demo-position');
  const D = s('demo-color');
  const v = s('anchor-head');
  const f = s('a-th');
  const e = s('a-tr');
  const p = s('a-thead');
  const n = s('a-td');
  const r = s('a-tbody');
  const a = s('a-table');
  const y = s('arco-article');
  return (
    N(),
    M(
      y,
      S(i.data, { changelog: i.changelog }),
      {
        default: t(() => [
          l(B),
          l(b),
          l(A),
          l(D),
          u[64] ||
            (u[64] = d(
              'p',
              null,
              [
                d('code', null, '<tooltip>'),
                o(' \u7EC4\u4EF6\u7EE7\u627F '),
                d('code', null, '<trigger>'),
                o(' \u7EC4\u4EF6\u7684\u5168\u90E8\u5C5E\u6027'),
              ],
              -1
            )),
          l(
            v,
            { level: '2', href: 'API' },
            { default: t(() => u[0] || (u[0] = [o('API')])), _: 1 }
          ),
          u[65] ||
            (u[65] = d(
              'h3',
              { id: 'tooltip Props' },
              [d('code', null, '<tooltip>'), o(' Props')],
              -1
            )),
          l(
            a,
            { class: 'component-api-table' },
            {
              default: t(() => [
                u[49] ||
                  (u[49] = d(
                    'colgroup',
                    null,
                    [d('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                l(p, null, {
                  default: t(() => [
                    l(e, null, {
                      default: t(() => [
                        l(f, null, {
                          default: t(
                            () => u[1] || (u[1] = [o('\u53C2\u6570\u540D')])
                          ),
                          _: 1,
                        }),
                        l(f, null, {
                          default: t(
                            () => u[2] || (u[2] = [o('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        l(f, null, {
                          default: t(
                            () => u[3] || (u[3] = [o('\u7C7B\u578B')])
                          ),
                          _: 1,
                        }),
                        l(f, null, {
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
                l(r, null, {
                  default: t(() => [
                    l(e, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(
                            () =>
                              u[5] ||
                              (u[5] = [
                                o('popup-visible '),
                                d('strong', null, '(v-model)', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[6] ||
                              (u[6] = [
                                o(
                                  '\u6587\u5B57\u6C14\u6CE1\u662F\u5426\u53EF\u89C1'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[7] || (u[7] = [d('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () => u[8] || (u[8] = [d('code', null, '-', -1)])
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
                            () => u[9] || (u[9] = [o('default-popup-visible')])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[10] ||
                              (u[10] = [
                                o(
                                  '\u6587\u5B57\u6C14\u6CE1\u9ED8\u8BA4\u662F\u5426\u53EF\u89C1\uFF08\u975E\u53D7\u63A7\u6A21\u5F0F\uFF09'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[11] ||
                              (u[11] = [d('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[12] || (u[12] = [d('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[13] || (u[13] = [o('content')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[14] ||
                              (u[14] = [
                                o('\u6587\u5B57\u6C14\u6CE1\u5185\u5BB9'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[15] || (u[15] = [d('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () => u[16] || (u[16] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[17] || (u[17] = [o('position')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[18] || (u[18] = [o('\u5F39\u51FA\u4F4D\u7F6E')])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[19] ||
                              (u[19] = [
                                d(
                                  'code',
                                  null,
                                  "'top' | 'tl' | 'tr' | 'bottom' | 'bl' | 'br' | 'left' | 'lt' | 'lb' | 'right' | 'rt' | 'rb'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[20] || (u[20] = [d('code', null, "'top'", -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[21] || (u[21] = [o('mini')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[22] ||
                              (u[22] = [
                                o(
                                  '\u662F\u5426\u5C55\u793A\u4E3A\u8FF7\u4F60\u5C3A\u5BF8'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[23] ||
                              (u[23] = [d('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[24] || (u[24] = [d('code', null, 'false', -1)])
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
                            () => u[25] || (u[25] = [o('background-color')])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[26] ||
                              (u[26] = [
                                o(
                                  '\u5F39\u51FA\u6846\u7684\u80CC\u666F\u989C\u8272'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[27] || (u[27] = [d('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () => u[28] || (u[28] = [d('code', null, '-', -1)])
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
                            () => u[29] || (u[29] = [o('content-class')])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[30] ||
                              (u[30] = [
                                o(
                                  '\u5F39\u51FA\u6846\u5185\u5BB9\u7684\u7C7B\u540D'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[31] ||
                              (u[31] = [d('code', null, 'ClassName', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () => u[32] || (u[32] = [d('code', null, '-', -1)])
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
                            () => u[33] || (u[33] = [o('content-style')])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[34] ||
                              (u[34] = [
                                o(
                                  '\u5F39\u51FA\u6846\u5185\u5BB9\u7684\u6837\u5F0F'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[35] ||
                              (u[35] = [d('code', null, 'CSSProperties', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () => u[36] || (u[36] = [d('code', null, '-', -1)])
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
                            () => u[37] || (u[37] = [o('arrow-class')])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[38] ||
                              (u[38] = [
                                o(
                                  '\u5F39\u51FA\u6846\u7BAD\u5934\u7684\u7C7B\u540D'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[39] ||
                              (u[39] = [d('code', null, 'ClassName', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () => u[40] || (u[40] = [d('code', null, '-', -1)])
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
                            () => u[41] || (u[41] = [o('arrow-style')])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[42] ||
                              (u[42] = [
                                o(
                                  '\u5F39\u51FA\u6846\u7BAD\u5934\u7684\u6837\u5F0F'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[43] ||
                              (u[43] = [d('code', null, 'CSSProperties', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () => u[44] || (u[44] = [d('code', null, '-', -1)])
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
                            () => u[45] || (u[45] = [o('popup-container')])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[46] ||
                              (u[46] = [
                                o(
                                  '\u5F39\u51FA\u6846\u7684\u6302\u8F7D\u5BB9\u5668'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[47] ||
                              (u[47] = [
                                d('code', null, 'string | HTMLElement', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () => u[48] || (u[48] = [d('code', null, '-', -1)])
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
          u[66] ||
            (u[66] = d(
              'h3',
              { id: 'tooltip Events' },
              [d('code', null, '<tooltip>'), o(' Events')],
              -1
            )),
          l(
            a,
            { class: 'component-api-table' },
            {
              default: t(() => [
                u[56] ||
                  (u[56] = d(
                    'colgroup',
                    null,
                    [d('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                l(p, null, {
                  default: t(() => [
                    l(e, null, {
                      default: t(() => [
                        l(f, null, {
                          default: t(
                            () => u[50] || (u[50] = [o('\u4E8B\u4EF6\u540D')])
                          ),
                          _: 1,
                        }),
                        l(f, null, {
                          default: t(
                            () => u[51] || (u[51] = [o('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        l(f, null, {
                          default: t(
                            () => u[52] || (u[52] = [o('\u53C2\u6570')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                l(r, null, {
                  default: t(() => [
                    l(e, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(
                            () => u[53] || (u[53] = [o('popup-visible-change')])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[54] ||
                              (u[54] = [
                                o(
                                  '\u6587\u5B57\u6C14\u6CE1\u663E\u793A\u72B6\u6001\u6539\u53D8\u65F6\u89E6\u53D1'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[55] ||
                              (u[55] = [
                                o('visible: '),
                                d('code', null, 'boolean', -1),
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
          u[67] ||
            (u[67] = d(
              'h3',
              { id: 'tooltip Slots' },
              [d('code', null, '<tooltip>'), o(' Slots')],
              -1
            )),
          l(
            a,
            { class: 'component-api-table' },
            {
              default: t(() => [
                u[63] ||
                  (u[63] = d(
                    'colgroup',
                    null,
                    [d('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                l(p, null, {
                  default: t(() => [
                    l(e, null, {
                      default: t(() => [
                        l(f, null, {
                          default: t(
                            () => u[57] || (u[57] = [o('\u63D2\u69FD\u540D')])
                          ),
                          _: 1,
                        }),
                        l(f, null, {
                          default: t(
                            () => u[58] || (u[58] = [o('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        l(f, null, {
                          default: t(
                            () => u[59] || (u[59] = [o('\u53C2\u6570')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                l(r, null, {
                  default: t(() => [
                    l(e, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[60] || (u[60] = [o('content')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () => u[61] || (u[61] = [o('\u5185\u5BB9')])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(() => u[62] || (u[62] = [o('-')])),
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
const R = x(V, [['render', z]]);
export { R as default };
