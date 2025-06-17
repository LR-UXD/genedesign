import {
  _ as y,
  d as x,
  u as P,
  r as f,
  o as w,
  c as N,
  w as t,
  a as l,
  e as d,
  b as o,
  m as M,
} from './index.9c61ea88.js';
import { D as S, a as k, b as T } from './position.4935b6bb.js';

const C = [
  {
    version: '2.18.0-beta.2',
    date: '2022-02-25',
    list: [
      {
        type: 'style',
        typeText: '\u{1F485} \u6837\u5F0F\u66F4\u65B0',
        list: [
          `<p>\u4F18\u5316\u663E\u793A\u52A8\u753B (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/733">#733</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const $ = x({
  name: 'ArcoMain',
  components: { DemoBasic: S, DemoTrigger: k, DemoPosition: T },
  setup() {
    const { locale: r } = P();
    return {
      locale: r,
      data: {
        meta: { type: '\u7EC4\u4EF6', category: '\u6570\u636E\u5C55\u793A' },
        title: '\u6C14\u6CE1\u5361\u7247 Popover',
        description:
          '\u9F20\u6807\u60AC\u505C\u3001\u805A\u7126\u6216\u70B9\u51FB\u5728\u67D0\u4E2A\u7EC4\u4EF6\u65F6\uFF0C\u5F39\u51FA\u7684\u6C14\u6CE1\u5F0F\u7684\u5361\u7247\u6D6E\u5C42\u3002\u53EF\u4EE5\u5BF9\u5361\u7247\u4E0A\u7684\u5143\u7D20\u8FDB\u884C\u64CD\u4F5C\u3002',
      },
      changelog: typeof C === 'undefined' ? void 0 : C,
      getMessage: (a, m) => (r.value === 'zh-CN' ? a : m),
    };
  },
});
function I(r, u, g, E, a, m) {
  const B = f('demo-basic');
  const D = f('demo-trigger');
  const b = f('demo-position');
  const v = f('anchor-head');
  const s = f('a-th');
  const e = f('a-tr');
  const p = f('a-thead');
  const n = f('a-td');
  const i = f('a-tbody');
  const F = f('a-table');
  const A = f('arco-article');
  return (
    w(),
    N(
      A,
      M(r.data, { changelog: r.changelog }),
      {
        default: t(() => [
          l(B),
          l(D),
          l(b),
          u[67] ||
            (u[67] = d(
              'p',
              null,
              [
                d('code', null, '<popover>'),
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
          u[68] ||
            (u[68] = d(
              'h3',
              { id: 'popover Props' },
              [d('code', null, '<popover>'), o(' Props')],
              -1
            )),
          l(
            F,
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
                        l(s, null, {
                          default: t(
                            () => u[1] || (u[1] = [o('\u53C2\u6570\u540D')])
                          ),
                          _: 1,
                        }),
                        l(s, null, {
                          default: t(
                            () => u[2] || (u[2] = [o('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        l(s, null, {
                          default: t(
                            () => u[3] || (u[3] = [o('\u7C7B\u578B')])
                          ),
                          _: 1,
                        }),
                        l(s, null, {
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
                l(i, null, {
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
                          default: t(() => u[13] || (u[13] = [o('title')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () => u[14] || (u[14] = [o('\u6807\u9898')])
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
                          default: t(() => u[17] || (u[17] = [o('content')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () => u[18] || (u[18] = [o('\u5185\u5BB9')])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[19] || (u[19] = [d('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () => u[20] || (u[20] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[21] || (u[21] = [o('trigger')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[22] || (u[22] = [o('\u89E6\u53D1\u65B9\u5F0F')])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[23] ||
                              (u[23] = [
                                d(
                                  'code',
                                  null,
                                  "'hover' | 'click' | 'focus' | 'contextMenu'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[24] ||
                              (u[24] = [d('code', null, "'hover'", -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[25] || (u[25] = [o('position')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[26] || (u[26] = [o('\u5F39\u51FA\u4F4D\u7F6E')])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[27] ||
                              (u[27] = [
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
                              u[28] || (u[28] = [d('code', null, "'top'", -1)])
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
          u[69] ||
            (u[69] = d(
              'h3',
              { id: 'popover Events' },
              [d('code', null, '<popover>'), o(' Events')],
              -1
            )),
          l(
            F,
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
                        l(s, null, {
                          default: t(
                            () => u[50] || (u[50] = [o('\u4E8B\u4EF6\u540D')])
                          ),
                          _: 1,
                        }),
                        l(s, null, {
                          default: t(
                            () => u[51] || (u[51] = [o('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        l(s, null, {
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
                l(i, null, {
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
          u[70] ||
            (u[70] = d(
              'h3',
              { id: 'popover Slots' },
              [d('code', null, '<popover>'), o(' Slots')],
              -1
            )),
          l(
            F,
            { class: 'component-api-table' },
            {
              default: t(() => [
                u[66] ||
                  (u[66] = d(
                    'colgroup',
                    null,
                    [d('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                l(p, null, {
                  default: t(() => [
                    l(e, null, {
                      default: t(() => [
                        l(s, null, {
                          default: t(
                            () => u[57] || (u[57] = [o('\u63D2\u69FD\u540D')])
                          ),
                          _: 1,
                        }),
                        l(s, null, {
                          default: t(
                            () => u[58] || (u[58] = [o('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        l(s, null, {
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
                l(i, null, {
                  default: t(() => [
                    l(e, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[60] || (u[60] = [o('title')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () => u[61] || (u[61] = [o('\u6807\u9898')])
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
                    l(e, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[63] || (u[63] = [o('content')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () => u[64] || (u[64] = [o('\u5185\u5BB9')])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(() => u[65] || (u[65] = [o('-')])),
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
const H = y($, [['render', I]]);
export { H as default };
