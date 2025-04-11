import {
  _ as z,
  d as k,
  u as T,
  r as s,
  o as S,
  c as w,
  w as t,
  a as l,
  b as o,
  e as d,
  m as I,
} from './index.9c61ea88.js';
import {
  D as M,
  a as N,
  b as q,
  c as $,
  d as j,
  e as V,
} from './image-url.c376073b.js';
import './index.add6d80b.js';
import './index.71fb9fd7.js';

const m = [
  {
    version: '2.54.3',
    date: '2024-01-19',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} \u95EE\u9898\u4FEE\u590D',
        list: [
          `<p>\u4FEE\u590D\u5934\u50CF\u7EC4\u6C14\u6CE1\u4E2D\u90E8\u5206\u5934\u50CF\u4E0D\u663E\u793A\u95EE\u9898 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2925">#2925</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.52.0',
    date: '2023-09-22',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} \u65B0\u589E\u529F\u80FD',
        list: [
          `<p>\u6DFB\u52A0\u4E86\u65B0\u7684 <code>ObjectFit</code> \u5C5E\u6027 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2691">#2691</a>)</p>
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
          `<p>\u589E\u52A0 image-url \u5C5E\u6027\uFF0C\u652F\u6301\u4F7F\u7528\u56FE\u7247\u5730\u5740 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1810">#1810</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.21.0',
    date: '2022-03-25',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} \u95EE\u9898\u4FEE\u590D',
        list: [
          `<p>\u4FEE\u590D\u6CA1\u6709\u5185\u5BB9\u65F6\u4F1A\u51FA\u73B0\u8B66\u544A\u63D0\u793A\u7684\u95EE\u9898 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/870">#870</a>)</p>
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
        type: 'enhancement',
        typeText: '\u{1F48E} \u529F\u80FD\u4F18\u5316',
        list: [
          `<p>\u4F7F\u7528 Context \u65B9\u5F0F\u4F18\u5316\u7EC4\u4EF6 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/773">#773</a>)</p>
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
          `<p>\u652F\u6301 <code>maxStyle</code> \u548C <code>maxPopoverTriggerProps</code> \u5C5E\u6027 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/242">#242</a>)</p>
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
    DemoBasic: M,
    DemoSize: N,
    DemoGroup: q,
    DemoIcon: $,
    DemoFit: j,
    DemoImageUrl: V,
  },
  setup() {
    const { locale: r } = T();
    return {
      locale: r,
      data: {
        meta: { type: '\u7EC4\u4EF6', category: '\u6570\u636E\u5C55\u793A' },
        title: '\u5934\u50CF Avatar',
        description:
          '\u7528\u4F5C\u5934\u50CF\u663E\u793A\uFF0C\u53EF\u4EE5\u4E3A\u56FE\u7247\u3001\u56FE\u6807\u6216\u5B57\u7B26\u5F62\u5F0F\u5C55\u793A\u3002',
      },
      changelog: typeof m === 'undefined' ? void 0 : m,
      getMessage: (p, C) => (r.value === 'zh-CN' ? p : C),
    };
  },
});
function G(r, u, g, E, p, C) {
  const B = s('demo-basic');
  const A = s('demo-size');
  const x = s('demo-group');
  const v = s('demo-icon');
  const b = s('demo-fit');
  const D = s('demo-image-url');
  const y = s('anchor-head');
  const f = s('a-th');
  const e = s('a-tr');
  const i = s('a-thead');
  const n = s('a-td');
  const F = s('a-tbody');
  const a = s('a-table');
  const P = s('arco-article');
  return (
    S(),
    w(
      P,
      I(r.data, { changelog: r.changelog }),
      {
        default: t(() => [
          l(B),
          l(A),
          l(x),
          l(v),
          l(b),
          l(D),
          l(
            y,
            { level: '2', href: 'API' },
            { default: t(() => u[0] || (u[0] = [o('API')])), _: 1 }
          ),
          u[93] ||
            (u[93] = d(
              'h3',
              { id: 'avatar Props' },
              [d('code', null, '<avatar>'), o(' Props')],
              -1
            )),
          l(
            a,
            { class: 'component-api-table' },
            {
              default: t(() => [
                u[36] ||
                  (u[36] = d(
                    'colgroup',
                    null,
                    [d('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                l(i, null, {
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
                        l(f, null, {
                          default: t(
                            () => u[5] || (u[5] = [o('\u7248\u672C')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                l(F, null, {
                  default: t(() => [
                    l(e, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[6] || (u[6] = [o('shape')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[7] ||
                              (u[7] = [
                                o(
                                  '\u5934\u50CF\u7684\u5F62\u72B6\uFF0C\u6709\u5706\u5F62(circle)\u548C\u6B63\u65B9\u5F62(square)\u4E24\u79CD'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[8] ||
                              (u[8] = [
                                d('code', null, "'circle' | 'square'", -1),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[9] || (u[9] = [d('code', null, "'circle'", -1)])
                          ),
                          _: 1,
                        }),
                        l(n),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[10] || (u[10] = [o('image-url')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[11] ||
                              (u[11] = [
                                o(
                                  '\u81EA\u5B9A\u4E49\u5934\u50CF\u56FE\u7247\u5730\u5740\uFF0C\u5982\u679C\u4F20\u5165\u8BE5\u5C5E\u6027\uFF0C\u4F1A\u9ED8\u8BA4\u6E32\u67D3img\u6807\u7B7E'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[12] || (u[12] = [d('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () => u[13] || (u[13] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(() => u[14] || (u[14] = [o('2.40.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[15] || (u[15] = [o('size')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[16] ||
                              (u[16] = [
                                o(
                                  '\u5934\u50CF\u7684\u5C3A\u5BF8\u5927\u5C0F\uFF0C\u5355\u4F4D\u662F '
                                ),
                                d('code', null, 'px', -1),
                                o(
                                  '\u3002\u672A\u586B\u5199\u65F6\u4F7F\u7528\u6837\u5F0F\u4E2D\u7684\u5927\u5C0F '
                                ),
                                d('code', null, '40px', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[17] || (u[17] = [d('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () => u[18] || (u[18] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        l(n),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(
                            () => u[19] || (u[19] = [o('auto-fix-font-size')])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[20] ||
                              (u[20] = [
                                o(
                                  '\u662F\u5426\u81EA\u52A8\u6839\u636E\u5934\u50CF\u5C3A\u5BF8\u8C03\u6574\u5B57\u4F53\u5927\u5C0F'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[21] ||
                              (u[21] = [d('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[22] || (u[22] = [d('code', null, 'true', -1)])
                          ),
                          _: 1,
                        }),
                        l(n),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(
                            () => u[23] || (u[23] = [o('trigger-type')])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[24] ||
                              (u[24] = [
                                o(
                                  '\u53EF\u70B9\u51FB\u7684\u5934\u50CF\u4EA4\u4E92\u7C7B\u578B'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[25] ||
                              (u[25] = [
                                d('code', null, "'mask' | 'button'", -1),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[26] ||
                              (u[26] = [d('code', null, "'button'", -1)])
                          ),
                          _: 1,
                        }),
                        l(n),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(
                            () => u[27] || (u[27] = [o('trigger-icon-style')])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[28] ||
                              (u[28] = [
                                o('\u4EA4\u4E92\u56FE\u6807\u7684\u6837\u5F0F'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[29] ||
                              (u[29] = [d('code', null, 'CSSProperties', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () => u[30] || (u[30] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        l(n),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(
                            () => u[31] || (u[31] = [o('object-fit')])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[32] ||
                              (u[32] = [
                                o(
                                  '\u56FE\u7247\u5728\u5BB9\u5668\u5185\u7684\u7684\u9002\u5E94\u7C7B\u578B'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[33] ||
                              (u[33] = [d('code', null, 'ObjectFit', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () => u[34] || (u[34] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(() => u[35] || (u[35] = [o('2.52.0')])),
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
          u[94] ||
            (u[94] = d(
              'h3',
              { id: 'avatar Events' },
              [d('code', null, '<avatar>'), o(' Events')],
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
                l(i, null, {
                  default: t(() => [
                    l(e, null, {
                      default: t(() => [
                        l(f, null, {
                          default: t(
                            () => u[37] || (u[37] = [o('\u4E8B\u4EF6\u540D')])
                          ),
                          _: 1,
                        }),
                        l(f, null, {
                          default: t(
                            () => u[38] || (u[38] = [o('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        l(f, null, {
                          default: t(
                            () => u[39] || (u[39] = [o('\u53C2\u6570')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                l(F, null, {
                  default: t(() => [
                    l(e, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[40] || (u[40] = [o('click')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[41] || (u[41] = [o('\u70B9\u51FB\u56DE\u8C03')])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[42] ||
                              (u[42] = [
                                o('ev: '),
                                d('code', null, 'MouseEvent', -1),
                              ])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[43] || (u[43] = [o('error')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[44] ||
                              (u[44] = [
                                o('\u56FE\u7247\u52A0\u8F7D\u9519\u8BEF'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(() => u[45] || (u[45] = [o('-')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[46] || (u[46] = [o('load')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[47] ||
                              (u[47] = [
                                o('\u56FE\u7247\u52A0\u8F7D\u6210\u529F'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(() => u[48] || (u[48] = [o('-')])),
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
          u[95] ||
            (u[95] = d(
              'h3',
              { id: 'avatar Slots' },
              [d('code', null, '<avatar>'), o(' Slots')],
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
                l(i, null, {
                  default: t(() => [
                    l(e, null, {
                      default: t(() => [
                        l(f, null, {
                          default: t(
                            () => u[50] || (u[50] = [o('\u63D2\u69FD\u540D')])
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
                l(F, null, {
                  default: t(() => [
                    l(e, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(
                            () => u[53] || (u[53] = [o('trigger-icon')])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[54] ||
                              (u[54] = [
                                o(
                                  '\u53EF\u70B9\u51FB\u7684\u5934\u50CF\u4EA4\u4E92\u56FE\u6807'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(() => u[55] || (u[55] = [o('-')])),
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
          u[96] ||
            (u[96] = d(
              'h3',
              { id: 'avatar-group Props' },
              [d('code', null, '<avatar-group>'), o(' Props')],
              -1
            )),
          l(
            a,
            { class: 'component-api-table' },
            {
              default: t(() => [
                u[92] ||
                  (u[92] = d(
                    'colgroup',
                    null,
                    [d('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                l(i, null, {
                  default: t(() => [
                    l(e, null, {
                      default: t(() => [
                        l(f, null, {
                          default: t(
                            () => u[57] || (u[57] = [o('\u53C2\u6570\u540D')])
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
                            () => u[59] || (u[59] = [o('\u7C7B\u578B')])
                          ),
                          _: 1,
                        }),
                        l(f, null, {
                          default: t(
                            () => u[60] || (u[60] = [o('\u9ED8\u8BA4\u503C')])
                          ),
                          _: 1,
                        }),
                        l(f, null, {
                          default: t(
                            () => u[61] || (u[61] = [o('\u7248\u672C')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                l(F, null, {
                  default: t(() => [
                    l(e, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[62] || (u[62] = [o('shape')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[63] ||
                              (u[63] = [
                                o(
                                  '\u5934\u50CF\u7684\u5F62\u72B6\uFF0C\u6709\u5706\u5F62(circle)\u548C\u6B63\u65B9\u5F62(square)\u4E24\u79CD'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[64] ||
                              (u[64] = [
                                d('code', null, "'circle' | 'square'", -1),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[65] ||
                              (u[65] = [d('code', null, "'circle'", -1)])
                          ),
                          _: 1,
                        }),
                        l(n),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[66] || (u[66] = [o('size')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[67] ||
                              (u[67] = [
                                o(
                                  '\u5934\u50CF\u7684\u5C3A\u5BF8\u5927\u5C0F\uFF0C\u5355\u4F4D\u662F '
                                ),
                                d('code', null, 'px', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[68] || (u[68] = [d('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () => u[69] || (u[69] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        l(n),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(
                            () => u[70] || (u[70] = [o('auto-fix-font-size')])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[71] ||
                              (u[71] = [
                                o(
                                  '\u662F\u5426\u81EA\u52A8\u6839\u636E\u5934\u50CF\u5C3A\u5BF8\u8C03\u6574\u5B57\u4F53\u5927\u5C0F'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[72] ||
                              (u[72] = [d('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[73] || (u[73] = [d('code', null, 'true', -1)])
                          ),
                          _: 1,
                        }),
                        l(n),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[74] || (u[74] = [o('max-count')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[75] ||
                              (u[75] = [
                                o(
                                  '\u5934\u50CF\u7EC4\u6700\u591A\u663E\u793A\u7684\u5934\u50CF\u6570\u91CF\uFF0C\u591A\u4F59\u5934\u50CF\u5C06\u4EE5 '
                                ),
                                d('code', null, '+x', -1),
                                o(' \u7684\u5F62\u5F0F\u5C55\u793A\u3002'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[76] || (u[76] = [d('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () => u[77] || (u[77] = [d('code', null, '0', -1)])
                          ),
                          _: 1,
                        }),
                        l(n),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(
                            () => u[78] || (u[78] = [o('z-index-ascend')])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[79] ||
                              (u[79] = [
                                o(
                                  '\u5934\u50CF\u7EC4\u5185\u7684\u5934\u50CF '
                                ),
                                d('code', null, 'z-index', -1),
                                o(
                                  ' \u9012\u589E\uFF0C\u9ED8\u8BA4\u662F\u9012\u51CF\u3002'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[80] ||
                              (u[80] = [d('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[81] || (u[81] = [d('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        l(n),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[82] || (u[82] = [o('max-style')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[83] ||
                              (u[83] = [
                                o('\u591A\u4F59\u5934\u50CF\u6837\u5F0F\u3002'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[84] ||
                              (u[84] = [d('code', null, 'CSSProperties', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () => u[85] || (u[85] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(() => u[86] || (u[86] = [o('2.7.0')])),
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
                              u[87] ||
                              (u[87] = [o('max-popover-trigger-props')])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[88] ||
                              (u[88] = [
                                o(
                                  '\u591A\u4F59\u5934\u50CF\u6C14\u6CE1\u7684 '
                                ),
                                d('code', null, 'TriggerProps', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[89] ||
                              (u[89] = [d('code', null, 'TriggerProps', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () => u[90] || (u[90] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(() => u[91] || (u[91] = [o('2.7.0')])),
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
const K = z(O, [['render', G]]);
export { K as default };
