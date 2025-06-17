import {
  _ as w,
  d as P,
  u as z,
  r as s,
  o as N,
  c as I,
  w as n,
  a as l,
  b as o,
  e as d,
  m as M,
} from './index.9c61ea88.js';
import {
  D as T,
  a as $,
  b as V,
  c as _,
  d as S,
  e as R,
} from './fade.eadf3b73.js';

const A = [
  {
    version: '2.39.2',
    date: '2022-12-02',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} \u95EE\u9898\u4FEE\u590D',
        list: [
          `<p>\u4FEE\u590D <code>Carousel</code> \u900F\u660E\u80CC\u666F\u56FE\u7247\u65E0\u6CD5\u906E\u7F69\u4E0A\u4E00\u5F20\u56FE\u7247\u7684\u95EE\u9898 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1901">#1901</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.26.0',
    date: '2022-04-29',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} \u95EE\u9898\u4FEE\u590D',
        list: [
          `<p>\u4FEE\u590D <code>trigger</code> \u548C <code>autoPlay</code> \u5C5E\u6027\u8BBE\u7F6E\u5931\u6548\u7684\u95EE\u9898 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1059">#1059</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.10.0',
    date: '2021-12-10',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} \u95EE\u9898\u4FEE\u590D',
        list: [
          `<p>out \u5B50\u9879\u5185\u672A\u9690\u85CF (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/343">#343</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const W = P({
  name: 'ArcoMain',
  components: {
    DemoBasic: T,
    DemoAuto: $,
    DemoIndicator: V,
    DemoDirection: _,
    DemoCard: S,
    DemoFade: R,
  },
  setup() {
    const { locale: a } = z();
    return {
      locale: a,
      data: {
        meta: { type: '\u7EC4\u4EF6', category: '\u6570\u636E\u5C55\u793A' },
        title: '\u56FE\u7247\u8F6E\u64AD Carousel',
        description:
          '\u7528\u4E8E\u5C55\u793A\u591A\u5F20\u56FE\u7247\u3001\u89C6\u9891\u6216\u5185\u5D4C\u6846\u67B6\u7B49\u5185\u5BB9\u7684\u5FAA\u73AF\u64AD\u653E\uFF0C\u652F\u6301\u7CFB\u7EDF\u81EA\u52A8\u64AD\u653E\u6216\u7528\u6237\u624B\u52A8\u5207\u6362\u3002',
      },
      changelog: typeof A === 'undefined' ? void 0 : A,
      getMessage: (f, i) => (a.value === 'zh-CN' ? f : i),
    };
  },
});
function j(a, u, g, E, f, i) {
  const C = s('demo-basic');
  const D = s('demo-auto');
  const B = s('demo-indicator');
  const b = s('demo-direction');
  const v = s('demo-card');
  const y = s('demo-fade');
  const x = s('anchor-head');
  const r = s('a-th');
  const e = s('a-tr');
  const m = s('a-thead');
  const t = s('a-td');
  const p = s('a-tbody');
  const F = s('a-table');
  const k = s('arco-article');
  return (
    N(),
    I(
      k,
      M(a.data, { changelog: a.changelog }),
      {
        default: n(() => [
          l(C),
          l(D),
          l(B),
          l(b),
          l(v),
          l(y),
          l(
            x,
            { level: '2', href: 'API' },
            { default: n(() => u[0] || (u[0] = [o('API')])), _: 1 }
          ),
          u[65] ||
            (u[65] = d(
              'h3',
              { id: 'carousel Props' },
              [d('code', null, '<carousel>'), o(' Props')],
              -1
            )),
          l(
            F,
            { class: 'component-api-table' },
            {
              default: n(() => [
                u[57] ||
                  (u[57] = d(
                    'colgroup',
                    null,
                    [d('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                l(m, null, {
                  default: n(() => [
                    l(e, null, {
                      default: n(() => [
                        l(r, null, {
                          default: n(
                            () => u[1] || (u[1] = [o('\u53C2\u6570\u540D')])
                          ),
                          _: 1,
                        }),
                        l(r, null, {
                          default: n(
                            () => u[2] || (u[2] = [o('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        l(r, null, {
                          default: n(
                            () => u[3] || (u[3] = [o('\u7C7B\u578B')])
                          ),
                          _: 1,
                        }),
                        l(r, null, {
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
                l(p, null, {
                  default: n(() => [
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () =>
                              u[5] ||
                              (u[5] = [
                                o('current '),
                                d('strong', null, '(v-model)', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[6] ||
                              (u[6] = [
                                o('\u5F53\u524D\u5C55\u793A\u7D22\u5F15'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[7] || (u[7] = [d('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[8] || (u[8] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () => u[9] || (u[9] = [o('default-current')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[10] ||
                              (u[10] = [
                                o('\u5F53\u524D\u5C55\u793A\u7D22\u5F15'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[11] || (u[11] = [d('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[12] || (u[12] = [d('code', null, '1', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[13] || (u[13] = [o('auto-play')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[14] ||
                              (u[14] = [
                                o(
                                  '\u662F\u5426\u81EA\u52A8\u5FAA\u73AF\u5C55\u793A\uFF0C\u6216\u8005\u4F20\u5165 '
                                ),
                                d(
                                  'code',
                                  null,
                                  '{ interval: \u81EA\u52A8\u5207\u6362\u7684\u65F6\u95F4\u95F4\u9694(\u9ED8\u8BA4: 3000), hoverToPause: \u9F20\u6807\u60AC\u6D6E\u65F6\u662F\u5426\u6682\u505C\u81EA\u52A8\u5207\u6362(\u9ED8\u8BA4: true) }',
                                  -1
                                ),
                                o(' \u8FDB\u884C\u9AD8\u7EA7\u914D\u7F6E'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[15] ||
                              (u[15] = [
                                d(
                                  'code',
                                  null,
                                  'boolean | CarouselAutoPlayConfig',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[16] || (u[16] = [d('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () => u[17] || (u[17] = [o('move-speed')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[18] ||
                              (u[18] = [
                                o(
                                  '\u5E7B\u706F\u7247\u79FB\u52A8\u901F\u7387(ms)'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[19] || (u[19] = [d('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[20] || (u[20] = [d('code', null, '500', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () => u[21] || (u[21] = [o('animation-name')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[22] || (u[22] = [o('\u5207\u6362\u52A8\u753B')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[23] ||
                              (u[23] = [
                                d(
                                  'code',
                                  null,
                                  "'slide' | 'fade' | 'card'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[24] ||
                              (u[24] = [d('code', null, "'slide'", -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[25] || (u[25] = [o('trigger')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[26] ||
                              (u[26] = [
                                o(
                                  '\u5E7B\u706F\u7247\u5207\u6362\u89E6\u53D1\u65B9\u5F0F, click/hover \u6307\u793A\u5668'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[27] ||
                              (u[27] = [
                                d('code', null, "'click' | 'hover'", -1),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[28] ||
                              (u[28] = [d('code', null, "'click'", -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[29] || (u[29] = [o('direction')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[30] ||
                              (u[30] = [
                                o('\u5E7B\u706F\u7247\u79FB\u52A8\u65B9\u5411'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[31] ||
                              (u[31] = [
                                d(
                                  'code',
                                  null,
                                  "'horizontal' | 'vertical'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[32] ||
                              (u[32] = [d('code', null, "'horizontal'", -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () => u[33] || (u[33] = [o('show-arrow')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[34] ||
                              (u[34] = [
                                o(
                                  '\u5207\u6362\u7BAD\u5934\u663E\u793A\u65F6\u673A'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[35] ||
                              (u[35] = [
                                d(
                                  'code',
                                  null,
                                  "'always' | 'hover' | 'never'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[36] ||
                              (u[36] = [d('code', null, "'always'", -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () => u[37] || (u[37] = [o('arrow-class')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[38] ||
                              (u[38] = [
                                o('\u5207\u6362\u7BAD\u5934\u6837\u5F0F'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[39] || (u[39] = [d('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[40] || (u[40] = [d('code', null, "''", -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () => u[41] || (u[41] = [o('indicator-type')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[42] ||
                              (u[42] = [
                                o(
                                  '\u6307\u793A\u5668\u7C7B\u578B\uFF0C\u53EF\u4E3A\u5C0F\u65B9\u5757\u548C\u5C0F\u5706\u70B9\u6216\u4E0D\u663E\u793A'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[43] ||
                              (u[43] = [
                                d(
                                  'code',
                                  null,
                                  "'line' | 'dot' | 'slider' | 'never'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[44] || (u[44] = [d('code', null, "'dot'", -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () => u[45] || (u[45] = [o('indicator-position')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[46] ||
                              (u[46] = [o('\u6307\u793A\u5668\u4F4D\u7F6E')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[47] ||
                              (u[47] = [
                                d(
                                  'code',
                                  null,
                                  "'bottom' | 'top' | 'left' | 'right' | 'outer'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[48] ||
                              (u[48] = [d('code', null, "'bottom'", -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () => u[49] || (u[49] = [o('indicator-class')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[50] ||
                              (u[50] = [
                                o('\u6307\u793A\u5668\u7684\u6837\u5F0F'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[51] || (u[51] = [d('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[52] || (u[52] = [d('code', null, "''", -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () =>
                              u[53] ||
                              (u[53] = [o('transition-timing-function')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[54] ||
                              (u[54] = [
                                o(
                                  '\u8FC7\u6E21\u901F\u5EA6\u66F2\u7EBF, \u9ED8\u8BA4\u5300\u901F '
                                ),
                                d(
                                  'a',
                                  {
                                    class: 'link',
                                    href: 'https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-timing-function',
                                  },
                                  'transition-timing-function',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[55] || (u[55] = [d('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[56] ||
                              (u[56] = [
                                d(
                                  'code',
                                  null,
                                  "'cubic-bezier(0.34, 0.69, 0.1, 1)'",
                                  -1
                                ),
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
          u[66] ||
            (u[66] = d(
              'h3',
              { id: 'carousel Events' },
              [d('code', null, '<carousel>'), o(' Events')],
              -1
            )),
          l(
            F,
            { class: 'component-api-table' },
            {
              default: n(() => [
                u[64] ||
                  (u[64] = d(
                    'colgroup',
                    null,
                    [d('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                l(m, null, {
                  default: n(() => [
                    l(e, null, {
                      default: n(() => [
                        l(r, null, {
                          default: n(
                            () => u[58] || (u[58] = [o('\u4E8B\u4EF6\u540D')])
                          ),
                          _: 1,
                        }),
                        l(r, null, {
                          default: n(
                            () => u[59] || (u[59] = [o('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        l(r, null, {
                          default: n(
                            () => u[60] || (u[60] = [o('\u53C2\u6570')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                l(p, null, {
                  default: n(() => [
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[61] || (u[61] = [o('change')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[62] ||
                              (u[62] = [
                                o(
                                  '\u5E7B\u706F\u7247\u53D1\u751F\u5207\u6362\u65F6\u7684\u56DE\u8C03\u51FD\u6570'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[63] ||
                              (u[63] = [
                                o('index: '),
                                d('code', null, 'number', -1),
                                d('br', null, null, -1),
                                o('prevIndex: '),
                                d('code', null, 'number', -1),
                                d('br', null, null, -1),
                                o('isManual: '),
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
        ]),
        _: 1,
      },
      16,
      ['changelog']
    )
  );
}
const H = w(W, [['render', j]]);
export { H as default };
