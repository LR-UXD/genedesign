import {
  _ as M,
  d as v,
  u as w,
  r as a,
  o as R,
  c as T,
  w as n,
  a as l,
  e,
  b as o,
  m as $,
} from './index.9c61ea88.js';
import {
  D as I,
  a as N,
  b as P,
  c as V,
  d as z,
  e as H,
} from './update.eecb40cf.js';
import './index.0f04c67f.js';

const F = [
  {
    version: '2.57.0',
    date: '2025-03-10',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} \u95EE\u9898\u4FEE\u590D',
        list: [
          `<p>\u4FEE\u590D message \u5B9A\u4F4D\u4F1A\u53D7\u5230\u5E03\u5C40\u5F71\u54CD\uFF0C\u4ECE\u800C\u4E0D\u663E\u793A\u7684\u95EE\u9898 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/3406">#3406</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.41.0',
    date: '2022-12-30',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} \u65B0\u589E\u529F\u80FD',
        list: [
          `<p>\u589E\u52A0 <code>normal</code> \u7C7B\u578B (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2009">#2009</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.39.0',
    date: '2022-11-18',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} \u65B0\u589E\u529F\u80FD',
        list: [
          `<p>\u589E\u52A0 <code>resetOnHover</code> \u5C5E\u6027\uFF0C\u5728\u9F20\u6807\u79FB\u5165\u65F6\u6682\u505C\u5E76\u91CD\u65B0\u8BA1\u65F6 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1841">#1841</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.27.0',
    date: '2022-05-13',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} \u95EE\u9898\u4FEE\u590D',
        list: [
          `<p>\u4FEE\u590D clear \u65B9\u6CD5\u5728\u591A\u6B21\u8C03\u7528\u65F6\u51FA\u73B0\u9519\u8BEF\u7684\u95EE\u9898 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1095">#1095</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.18.0-beta.2',
    date: '2022-02-25',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} \u95EE\u9898\u4FEE\u590D',
        list: [
          `<p>\u4FEE\u590D\u540C\u65F6\u8C03\u7528\u65F6\uFF0C\u51FA\u73B0\u9500\u6BC1\u62A5\u9519\u7684\u95EE\u9898 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/705">#705</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.16.0',
    date: '2022-01-21',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} \u95EE\u9898\u4FEE\u590D',
        list: [
          `<p>\u4FEE\u590D\u4F7F\u7528 loading \u7C7B\u578B\u65F6\u7C7B\u578B\u8B66\u544A\u7684\u95EE\u9898 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/635">#635</a>)</p>
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
        type: 'style',
        typeText: '\u{1F485} \u6837\u5F0F\u66F4\u65B0',
        list: [
          `<p>\u4F7F\u7528 flex \u5E03\u5C40\u65B9\u5F0F\u5C55\u793A\u4FE1\u606F (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/354">#354</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.3.0',
    date: '2021-11-12',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} \u65B0\u589E\u529F\u80FD',
        list: [
          `<p>\u589E\u52A0 <code>onClose</code> \u56DE\u8C03\u65B9\u6CD5 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/149">#149</a>)</p>
`,
          `<p>\u589E\u52A0 <code>loading</code> \u65B9\u6CD5 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/149">#149</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const O = v({
  name: 'ArcoMain',
  components: {
    DemoBasic: I,
    DemoType: N,
    DemoIcon: P,
    DemoPosition: V,
    DemoCloseable: z,
    DemoUpdate: H,
  },
  setup() {
    const { locale: p } = w();
    return {
      locale: p,
      data: {
        meta: { type: '\u7EC4\u4EF6', category: '\u53CD\u9988' },
        title: '\u5168\u5C40\u63D0\u793A Message',
        description:
          '\u7531\u7528\u6237\u7684\u64CD\u4F5C\u89E6\u53D1\u7684\u8F7B\u91CF\u7EA7\u5168\u5C40\u53CD\u9988\u3002',
      },
      changelog: typeof F === 'undefined' ? void 0 : F,
      getMessage: (g, C) => (p.value === 'zh-CN' ? g : C),
    };
  },
});
function U(p, u, m, E, g, C) {
  const A = a('demo-basic');
  const D = a('demo-type');
  const x = a('demo-icon');
  const k = a('demo-position');
  const b = a('demo-closeable');
  const B = a('demo-update');
  const d = a('a-th');
  const s = a('a-tr');
  const i = a('a-thead');
  const t = a('a-td');
  const f = a('a-tbody');
  const r = a('a-table');
  const y = a('arco-article');
  return (
    R(),
    T(
      y,
      $(p.data, { changelog: p.changelog }),
      {
        default: n(() => [
          l(A),
          l(D),
          l(x),
          l(k),
          l(b),
          l(B),
          u[87] ||
            (u[87] = e(
              'h3',
              { id: 'Message \u5168\u5C40\u65B9\u6CD5' },
              [e('code', null, 'Message'), o(' \u5168\u5C40\u65B9\u6CD5')],
              -1
            )),
          u[88] ||
            (u[88] = e(
              'p',
              null,
              'Message\u63D0\u4F9B\u7684\u5168\u5C40\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u4E09\u79CD\u65B9\u6CD5\u4F7F\u7528\uFF1A',
              -1
            )),
          u[89] ||
            (u[89] = e(
              'ol',
              null,
              [
                e('li', null, '\u901A\u8FC7this.$message\u8C03\u7528'),
                e(
                  'li',
                  null,
                  '\u5728Composition API\u4E2D\uFF0C\u901A\u8FC7getCurrentInstance().appContext.config.globalProperties.$message\u8C03\u7528'
                ),
                e(
                  'li',
                  null,
                  '\u5BFC\u5165Message\uFF0C\u901A\u8FC7Message\u672C\u8EAB\u8C03\u7528'
                ),
              ],
              -1
            )),
          u[90] ||
            (u[90] = e(
              'p',
              null,
              '\u5F53\u901A\u8FC7 import \u65B9\u5F0F\u4F7F\u7528\u65F6\uFF0C\u7EC4\u4EF6\u6CA1\u6709\u529E\u6CD5\u83B7\u53D6\u5F53\u524D\u7684 Vue Context\uFF0C\u5982 i18n \u6216 route \u7B49\u6CE8\u5165\u5728 AppContext \u4E0A\u7684\u5185\u5BB9\u65E0\u6CD5\u5728\u5185\u90E8\u4F7F\u7528\uFF0C\u9700\u8981\u5728\u8C03\u7528\u65F6\u624B\u52A8\u4F20\u5165 AppContext\uFF0C\u6216\u8005\u4E3A\u7EC4\u4EF6\u5168\u5C40\u6307\u5B9A AppContext',
              -1
            )),
          u[91] ||
            (u[91] = e(
              'pre',
              { class: 'code-content' },
              [
                e('code', { class: 'language-lang' }, [
                  e('span', { class: 'token keyword' }, 'import'),
                  o(),
                  e('span', { class: 'token punctuation' }, '{'),
                  o(' createApp '),
                  e('span', { class: 'token punctuation' }, '}'),
                  o(),
                  e('span', { class: 'token keyword' }, 'from'),
                  o(),
                  e('span', { class: 'token string' }, "'vue'"),
                  o(`
`),
                  e('span', { class: 'token keyword' }, 'import'),
                  o(),
                  e('span', { class: 'token punctuation' }, '{'),
                  o(' Message '),
                  e('span', { class: 'token punctuation' }, '}'),
                  o(),
                  e('span', { class: 'token keyword' }, 'from'),
                  o(),
                  e('span', { class: 'token string' }, "'genedesign'"),
                  e('span', { class: 'token punctuation' }, ';'),
                  o(`

`),
                  e('span', { class: 'token keyword' }, 'const'),
                  o(' app '),
                  e('span', { class: 'token operator' }, '='),
                  o(),
                  e('span', { class: 'token function' }, 'createApp'),
                  e('span', { class: 'token punctuation' }, '('),
                  o('App'),
                  e('span', { class: 'token punctuation' }, ')'),
                  e('span', { class: 'token punctuation' }, ';'),
                  o(`
Message`),
                  e('span', { class: 'token punctuation' }, '.'),
                  o('_context '),
                  e('span', { class: 'token operator' }, '='),
                  o(' app'),
                  e('span', { class: 'token punctuation' }, '.'),
                  o('_context'),
                  e('span', { class: 'token punctuation' }, ';'),
                  o(`
`),
                ]),
              ],
              -1
            )),
          u[92] ||
            (u[92] = e('h3', { id: 'MessageMethod' }, 'MessageMethod', -1)),
          l(
            r,
            { class: 'component-api-table' },
            {
              default: n(() => [
                u[34] ||
                  (u[34] = e(
                    'colgroup',
                    null,
                    [e('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                l(i, null, {
                  default: n(() => [
                    l(s, null, {
                      default: n(() => [
                        l(d, null, {
                          default: n(
                            () => u[0] || (u[0] = [o('\u53C2\u6570\u540D')])
                          ),
                          _: 1,
                        }),
                        l(d, null, {
                          default: n(
                            () => u[1] || (u[1] = [o('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        l(d, null, {
                          default: n(
                            () => u[2] || (u[2] = [o('\u7C7B\u578B')])
                          ),
                          _: 1,
                        }),
                        l(d, null, {
                          default: n(
                            () => u[3] || (u[3] = [o('\u9ED8\u8BA4\u503C')])
                          ),
                          _: 1,
                        }),
                        l(d, null, {
                          default: n(
                            () => u[4] || (u[4] = [o('\u7248\u672C')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                l(f, null, {
                  default: n(() => [
                    l(s, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[5] || (u[5] = [o('info')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[6] ||
                              (u[6] = [
                                o('\u663E\u793A\u4FE1\u606F\u63D0\u793A'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[7] ||
                              (u[7] = [
                                e(
                                  'code',
                                  null,
                                  '( config: string | MessageConfig, appContext?: AppContext ) => MessageReturn',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[8] || (u[8] = [e('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        l(t),
                      ]),
                      _: 1,
                    }),
                    l(s, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[9] || (u[9] = [o('success')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[10] ||
                              (u[10] = [
                                o('\u663E\u793A\u6210\u529F\u63D0\u793A'),
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
                                  '( config: string | MessageConfig, appContext?: AppContext ) => MessageReturn',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[12] || (u[12] = [e('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        l(t),
                      ]),
                      _: 1,
                    }),
                    l(s, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[13] || (u[13] = [o('warning')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[14] ||
                              (u[14] = [
                                o('\u663E\u793A\u8B66\u544A\u63D0\u793A'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[15] ||
                              (u[15] = [
                                e(
                                  'code',
                                  null,
                                  '( config: string | MessageConfig, appContext?: AppContext ) => MessageReturn',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[16] || (u[16] = [e('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        l(t),
                      ]),
                      _: 1,
                    }),
                    l(s, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[17] || (u[17] = [o('error')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[18] ||
                              (u[18] = [
                                o('\u663E\u793A\u9519\u8BEF\u63D0\u793A'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[19] ||
                              (u[19] = [
                                e(
                                  'code',
                                  null,
                                  '( config: string | MessageConfig, appContext?: AppContext ) => MessageReturn',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[20] || (u[20] = [e('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        l(t),
                      ]),
                      _: 1,
                    }),
                    l(s, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[21] || (u[21] = [o('loading')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[22] ||
                              (u[22] = [
                                o('\u663E\u793A\u52A0\u8F7D\u4E2D\u63D0\u793A'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[23] ||
                              (u[23] = [
                                e(
                                  'code',
                                  null,
                                  '( config: string | MessageConfig, appContext?: AppContext ) => MessageReturn',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[24] || (u[24] = [e('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        l(t),
                      ]),
                      _: 1,
                    }),
                    l(s, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[25] || (u[25] = [o('normal')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[26] || (u[26] = [o('\u663E\u793A\u63D0\u793A')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[27] ||
                              (u[27] = [
                                e(
                                  'code',
                                  null,
                                  '( config: string | MessageConfig, appContext?: AppContext ) => MessageReturn',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[28] || (u[28] = [e('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(() => u[29] || (u[29] = [o('2.41.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(s, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[30] || (u[30] = [o('clear')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[31] ||
                              (u[31] = [
                                o('\u6E05\u7A7A\u5168\u90E8\u63D0\u793A'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[32] ||
                              (u[32] = [
                                e(
                                  'code',
                                  null,
                                  '(position?: MessagePosition) => void',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[33] || (u[33] = [e('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        l(t),
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
          u[93] ||
            (u[93] = e('h3', { id: 'MessageConfig' }, 'MessageConfig', -1)),
          l(
            r,
            { class: 'component-api-table' },
            {
              default: n(() => [
                u[77] ||
                  (u[77] = e(
                    'colgroup',
                    null,
                    [e('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                l(i, null, {
                  default: n(() => [
                    l(s, null, {
                      default: n(() => [
                        l(d, null, {
                          default: n(
                            () => u[35] || (u[35] = [o('\u53C2\u6570\u540D')])
                          ),
                          _: 1,
                        }),
                        l(d, null, {
                          default: n(
                            () => u[36] || (u[36] = [o('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        l(d, null, {
                          default: n(
                            () => u[37] || (u[37] = [o('\u7C7B\u578B')])
                          ),
                          _: 1,
                        }),
                        l(d, null, {
                          default: n(
                            () => u[38] || (u[38] = [o('\u9ED8\u8BA4\u503C')])
                          ),
                          _: 1,
                        }),
                        l(d, null, {
                          default: n(
                            () => u[39] || (u[39] = [o('\u7248\u672C')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                l(f, null, {
                  default: n(() => [
                    l(s, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[40] || (u[40] = [o('content')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[41] || (u[41] = [o('\u5185\u5BB9')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[42] ||
                              (u[42] = [e('code', null, 'RenderContent', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[43] || (u[43] = [e('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        l(t),
                      ]),
                      _: 1,
                    }),
                    l(s, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[44] || (u[44] = [o('id')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[45] || (u[45] = [o('\u552F\u4E00id')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[46] || (u[46] = [e('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[47] || (u[47] = [e('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        l(t),
                      ]),
                      _: 1,
                    }),
                    l(s, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[48] || (u[48] = [o('icon')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[49] ||
                              (u[49] = [o('\u6D88\u606F\u7684\u56FE\u6807')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[50] ||
                              (u[50] = [e('code', null, 'RenderFunction', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[51] || (u[51] = [e('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        l(t),
                      ]),
                      _: 1,
                    }),
                    l(s, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[52] || (u[52] = [o('position')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[53] ||
                              (u[53] = [o('\u6D88\u606F\u7684\u4F4D\u7F6E')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[54] ||
                              (u[54] = [e('code', null, "'top'|'bottom'", -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[55] || (u[55] = [e('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        l(t),
                      ]),
                      _: 1,
                    }),
                    l(s, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[56] || (u[56] = [o('showIcon')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[57] ||
                              (u[57] = [
                                o('\u662F\u5426\u663E\u793A\u56FE\u6807'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[58] ||
                              (u[58] = [e('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[59] || (u[59] = [e('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        l(t),
                      ]),
                      _: 1,
                    }),
                    l(s, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[60] || (u[60] = [o('closable')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[61] ||
                              (u[61] = [
                                o(
                                  '\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[62] ||
                              (u[62] = [e('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[63] || (u[63] = [e('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        l(t),
                      ]),
                      _: 1,
                    }),
                    l(s, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[64] || (u[64] = [o('duration')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[65] ||
                              (u[65] = [
                                o(
                                  '\u6D88\u606F\u663E\u793A\u7684\u6301\u7EED\u65F6\u95F4'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[66] || (u[66] = [e('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[67] || (u[67] = [e('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        l(t),
                      ]),
                      _: 1,
                    }),
                    l(s, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[68] || (u[68] = [o('onClose')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[69] ||
                              (u[69] = [
                                o(
                                  '\u5173\u95ED\u65F6\u7684\u56DE\u8C03\u51FD\u6570'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[70] ||
                              (u[70] = [
                                e(
                                  'code',
                                  null,
                                  '(id: number | string) => void',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[71] || (u[71] = [e('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        l(t),
                      ]),
                      _: 1,
                    }),
                    l(s, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () => u[72] || (u[72] = [o('resetOnHover')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[73] ||
                              (u[73] = [
                                o(
                                  '\u8BBE\u7F6E\u9F20\u6807\u79FB\u5165\u540E\u4E0D\u4F1A\u81EA\u52A8\u5173\u95ED'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[74] ||
                              (u[74] = [e('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[75] || (u[75] = [e('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(() => u[76] || (u[76] = [o('2.39.0')])),
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
            (u[94] = e('h3', { id: 'MessageReturn' }, 'MessageReturn', -1)),
          l(
            r,
            { class: 'component-api-table' },
            {
              default: n(() => [
                u[86] ||
                  (u[86] = e(
                    'colgroup',
                    null,
                    [e('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                l(i, null, {
                  default: n(() => [
                    l(s, null, {
                      default: n(() => [
                        l(d, null, {
                          default: n(
                            () => u[78] || (u[78] = [o('\u53C2\u6570\u540D')])
                          ),
                          _: 1,
                        }),
                        l(d, null, {
                          default: n(
                            () => u[79] || (u[79] = [o('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        l(d, null, {
                          default: n(
                            () => u[80] || (u[80] = [o('\u7C7B\u578B')])
                          ),
                          _: 1,
                        }),
                        l(d, null, {
                          default: n(
                            () => u[81] || (u[81] = [o('\u9ED8\u8BA4\u503C')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                l(f, null, {
                  default: n(() => [
                    l(s, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[82] || (u[82] = [o('close')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[83] ||
                              (u[83] = [
                                o('\u5173\u95ED\u5F53\u524D\u6D88\u606F'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[84] ||
                              (u[84] = [e('code', null, '() => void', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[85] || (u[85] = [e('code', null, '-', -1)])
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
const J = M(O, [['render', U]]);
export { J as default };
