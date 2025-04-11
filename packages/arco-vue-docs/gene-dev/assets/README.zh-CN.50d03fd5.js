import {
  _ as v,
  d as x,
  u as k,
  r as s,
  o as T,
  c as P,
  w as t,
  a as l,
  b as e,
  e as o,
  m as z,
} from './index.9c61ea88.js';
import { D as M, a as N, b as w } from './rtl.b86a56c5.js';

const m = [
  {
    version: '2.48.0',
    date: '2023-06-30',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} \u65B0\u589E\u529F\u80FD',
        list: [
          `<p>\u589E\u52A0 <code>exchangeTime</code> \u5C5E\u6027 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2529">#2529</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.47.0',
    date: '2023-06-02',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} \u65B0\u589E\u529F\u80FD',
        list: [
          `<p>empty slots \u589E\u52A0component \u5C5E\u6027 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2448">#2448</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.28.0',
    date: '2022-05-20',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} \u65B0\u589E\u529F\u80FD',
        list: [
          `<p>\u589E\u52A0 <code>empty</code> \u548C <code>loading</code> \u63D2\u69FD (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1180">#1180</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.25.1',
    date: '2022-04-27',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} \u95EE\u9898\u4FEE\u590D',
        list: [
          `<p>\u4FEE\u590D size \u5C5E\u6027\u7684\u8BBE\u7F6E\u5728\u67D0\u4E9B\u7EC4\u4EF6\u4E2D\u5931\u6548\u7684\u95EE\u9898 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1051">#1051</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.25.0',
    date: '2022-04-22',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} \u65B0\u589E\u529F\u80FD',
        list: [
          `<p>\u589E\u52A0 updateAtScroll \u5C5E\u6027 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1015">#1015</a>)</p>
`,
          `<p>\u6DFB\u52A0 <code>global</code> \u5C5E\u6027 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/933">#933</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.14.1',
    date: '2022-01-08',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} \u95EE\u9898\u4FEE\u590D',
        list: [
          `<p>\u4FEE\u590D\u6309\u9700\u52A0\u8F7D\u6837\u5F0F\u95EE\u9898 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/526">#526</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.14.0',
    date: '2022-01-07',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} \u65B0\u589E\u529F\u80FD',
        list: [
          `<p>\u589E\u52A0 <code>size</code> \u5C5E\u6027 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/513">#513</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const S = x({
  name: 'ArcoMain',
  components: { DemoBasic: M, DemoEmpty: N, DemoRtl: w },
  setup() {
    const { locale: a } = k();
    return {
      locale: a,
      data: {
        meta: { type: '\u7EC4\u4EF6', category: '\u901A\u7528' },
        title: '\u5168\u5C40\u914D\u7F6E ConfigProvider',
        description:
          '\u5728\u5E94\u7528\u7684\u6700\u5916\u5C42\u8FDB\u884C\u914D\u7F6E\uFF0C\u4E00\u6B21\u8BBE\u7F6E\uFF0C\u5168\u5C40\u751F\u6548\u3002\u4E00\u822C\u7528\u4E8E\u8BBE\u7F6E\u56FD\u9645\u5316\u8BED\u8A00\u7B49\u529F\u80FD\u3002',
      },
      changelog: typeof m === 'undefined' ? void 0 : m,
      getMessage: (r, i) => (a.value === 'zh-CN' ? r : i),
    };
  },
});
function V(a, u, C, A, r, i) {
  const D = s('demo-basic');
  const B = s('demo-empty');
  const y = s('demo-rtl');
  const p = s('anchor-head');
  const f = s('a-th');
  const d = s('a-tr');
  const F = s('a-thead');
  const n = s('a-td');
  const E = s('a-tbody');
  const g = s('a-table');
  const b = s('arco-article');
  return (
    T(),
    P(
      b,
      z(a.data, { changelog: a.changelog }),
      {
        default: t(() => [
          l(D),
          l(B),
          l(y),
          l(
            p,
            { level: '2', href: 'API' },
            { default: t(() => u[0] || (u[0] = [e('API')])), _: 1 }
          ),
          u[58] ||
            (u[58] = o(
              'h3',
              { id: 'config-provider Props' },
              [o('code', null, '<config-provider>'), e(' Props')],
              -1
            )),
          l(
            g,
            { class: 'component-api-table' },
            {
              default: t(() => [
                u[43] ||
                  (u[43] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                l(F, null, {
                  default: t(() => [
                    l(d, null, {
                      default: t(() => [
                        l(f, null, {
                          default: t(
                            () => u[1] || (u[1] = [e('\u53C2\u6570\u540D')])
                          ),
                          _: 1,
                        }),
                        l(f, null, {
                          default: t(
                            () => u[2] || (u[2] = [e('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        l(f, null, {
                          default: t(
                            () => u[3] || (u[3] = [e('\u7C7B\u578B')])
                          ),
                          _: 1,
                        }),
                        l(f, null, {
                          default: t(
                            () => u[4] || (u[4] = [e('\u9ED8\u8BA4\u503C')])
                          ),
                          _: 1,
                        }),
                        l(f, null, {
                          default: t(
                            () => u[5] || (u[5] = [e('\u7248\u672C')])
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
                    l(d, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[6] || (u[6] = [e('prefix-cls')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[7] ||
                              (u[7] = [
                                e('\u7EC4\u4EF6\u7C7B\u540D\u524D\u7F00'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[8] || (u[8] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () => u[9] || (u[9] = [o('code', null, "'a'", -1)])
                          ),
                          _: 1,
                        }),
                        l(n),
                      ]),
                      _: 1,
                    }),
                    l(d, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[10] || (u[10] = [e('locale')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[11] ||
                              (u[11] = [e('\u914D\u7F6E\u8BED\u8A00\u5305')])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[12] ||
                              (u[12] = [o('code', null, 'GeneLang', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () => u[13] || (u[13] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        l(n),
                      ]),
                      _: 1,
                    }),
                    l(d, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[14] || (u[14] = [e('size')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () => u[15] || (u[15] = [e('\u5927\u5C0F')])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[16] || (u[16] = [o('code', null, 'Size', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () => u[17] || (u[17] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(() => u[18] || (u[18] = [e('2.14.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(d, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[19] || (u[19] = [e('global')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[20] ||
                              (u[20] = [
                                e('\u662F\u5426\u5168\u5C40\u751F\u6548'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[21] ||
                              (u[21] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[22] || (u[22] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(() => u[23] || (u[23] = [e('2.25.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(d, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(
                            () => u[24] || (u[24] = [e('update-at-scroll')])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[25] ||
                              (u[25] = [
                                e(
                                  '\u662F\u5426\u5728\u5BB9\u5668\u6EDA\u52A8\u65F6\u66F4\u65B0\u5F39\u51FA\u6846\u7684\u4F4D\u7F6E'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[26] ||
                              (u[26] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[27] || (u[27] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(() => u[28] || (u[28] = [e('2.25.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(d, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(
                            () => u[29] || (u[29] = [e('scroll-to-close')])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[30] ||
                              (u[30] = [
                                e(
                                  '\u662F\u5426\u5728\u6EDA\u52A8\u65F6\u5173\u95ED\u5F39\u51FA\u6846'
                                ),
                              ])
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
                        l(n, null, {
                          default: t(() => u[33] || (u[33] = [e('2.46.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(d, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(
                            () => u[34] || (u[34] = [e('exchange-time')])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[35] ||
                              (u[35] = [
                                e('\u662F\u5426\u4EA4\u6362\u65F6\u95F4'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[36] ||
                              (u[36] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[37] || (u[37] = [o('code', null, 'true', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(() => u[38] || (u[38] = [e('2.48.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(d, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[39] || (u[39] = [e('rtl')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[40] ||
                              (u[40] = [
                                e(
                                  '\u89C6\u56FE\u7684\u8868\u73B0\u5F62\u5F0F\u662F\u4ECE\u53F3\u5F00\u59CB\u5411\u5DE6\u7ED3\u675F'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[41] ||
                              (u[41] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[42] || (u[42] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        l(n),
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
          u[59] ||
            (u[59] = o(
              'h3',
              { id: 'config-provider Slots' },
              [o('code', null, '<config-provider>'), e(' Slots')],
              -1
            )),
          l(
            g,
            { class: 'component-api-table' },
            {
              default: t(() => [
                u[56] ||
                  (u[56] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                l(F, null, {
                  default: t(() => [
                    l(d, null, {
                      default: t(() => [
                        l(f, null, {
                          default: t(
                            () => u[44] || (u[44] = [e('\u63D2\u69FD\u540D')])
                          ),
                          _: 1,
                        }),
                        l(f, null, {
                          default: t(
                            () => u[45] || (u[45] = [e('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        l(f, null, {
                          default: t(
                            () => u[46] || (u[46] = [e('\u53C2\u6570')])
                          ),
                          _: 1,
                        }),
                        l(f, null, {
                          default: t(
                            () => u[47] || (u[47] = [e('\u7248\u672C')])
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
                    l(d, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[48] || (u[48] = [e('loading')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[49] ||
                              (u[49] = [
                                e(
                                  '\u81EA\u5B9A\u4E49\u52A0\u8F7D\u4E2D\u5143\u7D20'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(() => u[50] || (u[50] = [e('-')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(() => u[51] || (u[51] = [e('2.28.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(d, null, {
                      default: t(() => [
                        l(n, null, {
                          default: t(() => u[52] || (u[52] = [e('empty')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[53] ||
                              (u[53] = [
                                e(
                                  '\u81EA\u5B9A\u4E49\u7A7A\u72B6\u6001\u5143\u7D20'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(
                            () =>
                              u[54] ||
                              (u[54] = [
                                e('component: '),
                                o('code', null, 'string', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: t(() => u[55] || (u[55] = [e('2.28.0')])),
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
          l(
            p,
            { level: '2', href: 'FAQ' },
            { default: t(() => u[57] || (u[57] = [e('FAQ')])), _: 1 }
          ),
          u[60] ||
            (u[60] = o(
              'h3',
              { id: '\u5168\u5C40\u914D\u7F6E' },
              '\u5168\u5C40\u914D\u7F6E',
              -1
            )),
          u[61] ||
            (u[61] = o(
              'p',
              null,
              [
                o('code', null, 'global'),
                e(' \u5C5E\u6027\u8BBE\u7F6E\u4E3A '),
                o('code', null, 'true'),
                e(
                  ' \u65F6\uFF0C\u4F1A\u5C06\u914D\u7F6E\u5185\u5BB9\u6CE8\u5165\u5230 Vue AppContext \u4E2D\uFF0C\u4E00\u822C\u7528\u4E8E\u89E3\u51B3\u4F7F\u7528 Modal\u3001Message \u7EC4\u4EF6\u7684\u51FD\u6570\u5F0F\u8C03\u7528\u65B9\u6CD5\u65F6\uFF0C\u914D\u7F6E\u5185\u5BB9\u65E0\u6CD5\u751F\u6548\u7684\u95EE\u9898\u3002'
                ),
              ],
              -1
            )),
          u[62] ||
            (u[62] = o(
              'h3',
              { id: '\u81EA\u5B9A\u4E49\u7A7A\u72B6\u6001\u5C55\u793A' },
              '\u81EA\u5B9A\u4E49\u7A7A\u72B6\u6001\u5C55\u793A',
              -1
            )),
          u[63] ||
            (u[63] = o(
              'p',
              null,
              [
                e('\u53EF\u4EE5\u5728 '),
                o('code', null, '#empty'),
                e(
                  ' \u4E2D\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5E93\u5168\u5C40\u7684\u7A7A\u72B6\u6001\u5C55\u793A\uFF0C\u5982\u679C\u5728\u63D2\u69FD\u4E2D\u4F7F\u7528\u5230\u4E86 '
                ),
                o('code', null, 'Empty'),
                e(' \u7EC4\u4EF6\uFF0C\u9700\u8981\u5F00\u542F '),
                o('code', null, 'inConfigProvider'),
                e(' \u5C5E\u6027\u3002'),
              ],
              -1
            )),
        ]),
        _: 1,
      },
      16,
      ['changelog']
    )
  );
}
const Q = v(S, [['render', V]]);
export { Q as default };
