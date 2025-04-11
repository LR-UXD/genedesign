import {
  _ as w,
  d as I,
  u as P,
  r as i,
  o as M,
  c as T,
  w as n,
  a as l,
  b as d,
  e as o,
  m as $,
} from './index.9c61ea88.js';
import {
  D as V,
  a as S,
  b as z,
  c as L,
  d as U,
  e as j,
  f as q,
  g as G,
} from './style.5ea8fe09.js';
import './index.5bc6c633.js';

const m = [
  {
    version: '2.43.0',
    date: '2023-02-10',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} \u95EE\u9898\u4FEE\u590D',
        list: [
          `<p>\u4FEE\u590D\u66F4\u65B0 duration \u5931\u6548\u7684\u95EE\u9898 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2106">#2106</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.38.0-beta.1',
    date: '2022-10-14',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} \u65B0\u589E\u529F\u80FD',
        list: [
          `<p>\u63D0\u793A\u6846\u548C\u63D0\u793A\u6846\u5217\u8868\u95F4\u9694\u6837\u5F0F\u8C03\u6574 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1676">#1676</a>)</p>
`,
          `<p><code>showIcon</code> \u5C5E\u6027\u65E0\u6548 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1676">#1676</a>)</p>
`,
          `<p>\u652F\u6301\u81EA\u5B9A\u4E49\u5173\u95ED\u6309\u94AE\u548C\u5143\u7D20 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1676">#1676</a>)</p>
`,
          `<p>\u652F\u6301\u81EA\u5B9A\u4E49\u6837\u5F0F (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1676">#1676</a>)</p>
`,
          `<p>\u5220\u9664\u5BF9\u5E94 <code>id</code> \u7684\u63D0\u793A\u6846 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1676">#1676</a>)</p>
`,
          `<p>\u4F7F\u7528\u6848\u4F8B (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1676">#1676</a>)</p>
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
          `<p>\u589E\u52A0 footer \u5C5E\u6027 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1029">#1029</a>)</p>
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
        ],
      },
    ],
    extra: [],
  },
];
const H = I({
  name: 'ArcoMain',
  components: {
    DemoBasic: V,
    DemoType: S,
    DemoPosition: z,
    DemoUpdate_notification: L,
    DemoUpdate_duration: U,
    DemoBtn: j,
    DemoCustomClose: q,
    DemoStyle: G,
  },
  setup() {
    const { locale: f } = P();
    return {
      locale: f,
      data: {
        meta: { type: '\u7EC4\u4EF6', category: '\u53CD\u9988' },
        title: '\u901A\u77E5\u63D0\u9192\u6846 Notification',
        description:
          '\u5168\u5C40\u5C55\u793A\u901A\u77E5\u63D0\u9192\uFF0C\u5C06\u4FE1\u606F\u53CA\u65F6\u6709\u6548\u7684\u4F20\u8FBE\u7ED9\u7528\u6237\u3002',
      },
      changelog: typeof m === 'undefined' ? void 0 : m,
      getMessage: (C, F) => (f.value === 'zh-CN' ? C : F),
    };
  },
});
function J(f, u, g, E, C, F) {
  const D = i('demo-basic');
  const A = i('demo-type');
  const B = i('demo-position');
  const k = i('demo-update_notification');
  const b = i('demo-update_duration');
  const x = i('demo-btn');
  const N = i('demo-custom-close');
  const y = i('demo-style');
  const v = i('anchor-head');
  const s = i('a-th');
  const e = i('a-tr');
  const p = i('a-thead');
  const t = i('a-td');
  const a = i('a-tbody');
  const r = i('a-table');
  const R = i('arco-article');
  return (
    M(),
    T(
      R,
      $(f.data, { changelog: f.changelog }),
      {
        default: n(() => [
          l(D),
          l(A),
          l(B),
          l(k),
          l(b),
          l(x),
          l(N),
          l(y),
          l(
            v,
            { level: '2', href: 'API' },
            { default: n(() => u[0] || (u[0] = [d('API')])), _: 1 }
          ),
          u[102] ||
            (u[102] = o(
              'h3',
              { id: 'Notification \u5168\u5C40\u65B9\u6CD5' },
              [o('code', null, 'Notification'), d(' \u5168\u5C40\u65B9\u6CD5')],
              -1
            )),
          u[103] ||
            (u[103] = o(
              'p',
              null,
              [
                o('code', null, 'Notification'),
                d(
                  ' \u63D0\u4F9B\u7684\u5168\u5C40\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u4E09\u79CD\u65B9\u6CD5\u4F7F\u7528\uFF1A'
                ),
              ],
              -1
            )),
          u[104] ||
            (u[104] = o(
              'ol',
              null,
              [
                o('li', null, [
                  d('\u901A\u8FC7 '),
                  o('code', null, 'this.$notification'),
                  d(' \u8C03\u7528'),
                ]),
                o('li', null, [
                  d('\u5728 Composition API \u4E2D\uFF0C\u901A\u8FC7 '),
                  o(
                    'code',
                    null,
                    'getCurrentInstance().appContext.config.globalProperties.$notification'
                  ),
                  d(' \u8C03\u7528'),
                ]),
                o('li', null, [
                  d('\u5BFC\u5165 '),
                  o('code', null, 'Notification'),
                  d('\uFF0C\u901A\u8FC7 '),
                  o('code', null, 'Notification'),
                  d(' \u672C\u8EAB\u8C03\u7528'),
                ]),
              ],
              -1
            )),
          u[105] ||
            (u[105] = o(
              'p',
              null,
              [
                d('\u5F53\u901A\u8FC7 '),
                o('code', null, 'import'),
                d(
                  ' \u65B9\u5F0F\u4F7F\u7528\u65F6\uFF0C\u7EC4\u4EF6\u6CA1\u6709\u529E\u6CD5\u83B7\u53D6\u5F53\u524D\u7684 Vue Context\uFF0C\u5982 i18n \u6216 route \u7B49\u6CE8\u5165\u5728 AppContext \u4E0A\u7684\u5185\u5BB9\u65E0\u6CD5\u5728\u5185\u90E8\u4F7F\u7528\uFF0C\u9700\u8981\u5728\u8C03\u7528\u65F6\u624B\u52A8\u4F20\u5165 AppContext\uFF0C\u6216\u8005\u4E3A\u7EC4\u4EF6\u5168\u5C40\u6307\u5B9A AppContext'
                ),
              ],
              -1
            )),
          u[106] ||
            (u[106] = o(
              'pre',
              { class: 'code-content' },
              [
                o('code', { class: 'language-lang' }, [
                  o('span', { class: 'token keyword' }, 'import'),
                  d(),
                  o('span', { class: 'token punctuation' }, '{'),
                  d(' createApp '),
                  o('span', { class: 'token punctuation' }, '}'),
                  d(),
                  o('span', { class: 'token keyword' }, 'from'),
                  d(),
                  o('span', { class: 'token string' }, "'vue'"),
                  d(`
`),
                  o('span', { class: 'token keyword' }, 'import'),
                  d(),
                  o('span', { class: 'token punctuation' }, '{'),
                  d(' Notification '),
                  o('span', { class: 'token punctuation' }, '}'),
                  d(),
                  o('span', { class: 'token keyword' }, 'from'),
                  d(),
                  o('span', { class: 'token string' }, "'genedesign'"),
                  o('span', { class: 'token punctuation' }, ';'),
                  d(`

`),
                  o('span', { class: 'token keyword' }, 'const'),
                  d(' app '),
                  o('span', { class: 'token operator' }, '='),
                  d(),
                  o('span', { class: 'token function' }, 'createApp'),
                  o('span', { class: 'token punctuation' }, '('),
                  d('App'),
                  o('span', { class: 'token punctuation' }, ')'),
                  o('span', { class: 'token punctuation' }, ';'),
                  d(`
Notification`),
                  o('span', { class: 'token punctuation' }, '.'),
                  d('_context '),
                  o('span', { class: 'token operator' }, '='),
                  d(' app'),
                  o('span', { class: 'token punctuation' }, '.'),
                  d('_context'),
                  o('span', { class: 'token punctuation' }, ';'),
                  d(`
`),
                ]),
              ],
              -1
            )),
          u[107] ||
            (u[107] = o(
              'h3',
              { id: 'NotificationMethod' },
              'NotificationMethod',
              -1
            )),
          l(
            r,
            { class: 'component-api-table' },
            {
              default: n(() => [
                u[29] ||
                  (u[29] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                l(p, null, {
                  default: n(() => [
                    l(e, null, {
                      default: n(() => [
                        l(s, null, {
                          default: n(
                            () => u[1] || (u[1] = [d('\u53C2\u6570\u540D')])
                          ),
                          _: 1,
                        }),
                        l(s, null, {
                          default: n(
                            () => u[2] || (u[2] = [d('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        l(s, null, {
                          default: n(
                            () => u[3] || (u[3] = [d('\u7C7B\u578B')])
                          ),
                          _: 1,
                        }),
                        l(s, null, {
                          default: n(
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
                l(a, null, {
                  default: n(() => [
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[5] || (u[5] = [d('info')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[6] ||
                              (u[6] = [
                                d('\u663E\u793A\u4FE1\u606F\u63D0\u9192\u6846'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[7] ||
                              (u[7] = [
                                o(
                                  'code',
                                  null,
                                  '( config: string | NotificationConfig, appContext?: AppContext ) => NotificationReturn',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[8] || (u[8] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[9] || (u[9] = [d('success')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[10] ||
                              (u[10] = [
                                d('\u663E\u793A\u6210\u529F\u63D0\u9192\u6846'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[11] ||
                              (u[11] = [
                                o(
                                  'code',
                                  null,
                                  '( config: string | NotificationConfig, appContext?: AppContext ) => NotificationReturn',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[12] || (u[12] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[13] || (u[13] = [d('warning')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[14] ||
                              (u[14] = [
                                d('\u663E\u793A\u8B66\u544A\u63D0\u9192\u6846'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[15] ||
                              (u[15] = [
                                o(
                                  'code',
                                  null,
                                  '( config: string | NotificationConfig, appContext?: AppContext ) => NotificationReturn',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[16] || (u[16] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[17] || (u[17] = [d('error')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[18] ||
                              (u[18] = [
                                d('\u663E\u793A\u9519\u8BEF\u63D0\u9192\u6846'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[19] ||
                              (u[19] = [
                                o(
                                  'code',
                                  null,
                                  '( config: string | NotificationConfig, appContext?: AppContext ) => NotificationReturn',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[20] || (u[20] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[21] || (u[21] = [d('remove')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[22] ||
                              (u[22] = [
                                d('\u6E05\u9664\u5BF9\u5E94 '),
                                o('code', null, 'id', -1),
                                d(' \u7684\u63D0\u9192\u6846'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[23] ||
                              (u[23] = [
                                o('code', null, '(id: string) => void', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[24] || (u[24] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[25] || (u[25] = [d('clear')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[26] ||
                              (u[26] = [
                                d('\u6E05\u9664\u5168\u90E8\u63D0\u9192\u6846'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[27] ||
                              (u[27] = [
                                o(
                                  'code',
                                  null,
                                  '(position?: NotificationPosition) => void',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[28] || (u[28] = [o('code', null, '-', -1)])
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
          u[108] ||
            (u[108] = o(
              'h3',
              { id: 'NotificationConfig' },
              'NotificationConfig',
              -1
            )),
          l(
            r,
            { class: 'component-api-table' },
            {
              default: n(() => [
                u[92] ||
                  (u[92] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                l(p, null, {
                  default: n(() => [
                    l(e, null, {
                      default: n(() => [
                        l(s, null, {
                          default: n(
                            () => u[30] || (u[30] = [d('\u53C2\u6570\u540D')])
                          ),
                          _: 1,
                        }),
                        l(s, null, {
                          default: n(
                            () => u[31] || (u[31] = [d('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        l(s, null, {
                          default: n(
                            () => u[32] || (u[32] = [d('\u7C7B\u578B')])
                          ),
                          _: 1,
                        }),
                        l(s, null, {
                          default: n(
                            () => u[33] || (u[33] = [d('\u9ED8\u8BA4\u503C')])
                          ),
                          _: 1,
                        }),
                        l(s, null, {
                          default: n(
                            () => u[34] || (u[34] = [d('\u7248\u672C')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                l(a, null, {
                  default: n(() => [
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[35] || (u[35] = [d('content')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[36] || (u[36] = [d('\u5185\u5BB9')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[37] ||
                              (u[37] = [o('code', null, 'RenderContent', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[38] || (u[38] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        l(t),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[39] || (u[39] = [d('title')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[40] || (u[40] = [d('\u6807\u9898')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[41] ||
                              (u[41] = [o('code', null, 'RenderContent', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[42] || (u[42] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        l(t),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[43] || (u[43] = [d('icon')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[44] || (u[44] = [d('\u56FE\u6807')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[45] ||
                              (u[45] = [o('code', null, 'RenderFunction', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[46] || (u[46] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        l(t),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[47] || (u[47] = [d('id')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[48] || (u[48] = [d('\u552F\u4E00id')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[49] || (u[49] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[50] || (u[50] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        l(t),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[51] || (u[51] = [d('style')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[52] || (u[52] = [d('\u6837\u5F0F')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[53] ||
                              (u[53] = [o('code', null, 'CSSProperties', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[54] || (u[54] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        l(t),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[55] || (u[55] = [d('class')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[56] || (u[56] = [d('\u6837\u5F0F\u7C7B\u540D')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[57] ||
                              (u[57] = [o('code', null, 'ClassName', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[58] || (u[58] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        l(t),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[59] || (u[59] = [d('position')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[60] || (u[60] = [d('\u4F4D\u7F6E')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[61] ||
                              (u[61] = [
                                o(
                                  'code',
                                  null,
                                  "'topLeft'|'topRight'|'bottomLeft'|'bottomRight'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[62] || (u[62] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        l(t),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[63] || (u[63] = [d('showIcon')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[64] ||
                              (u[64] = [
                                d('\u662F\u5426\u663E\u793A\u56FE\u6807'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[65] ||
                              (u[65] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[66] || (u[66] = [o('code', null, 'true', -1)])
                          ),
                          _: 1,
                        }),
                        l(t),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[67] || (u[67] = [d('closable')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[68] ||
                              (u[68] = [d('\u662F\u5426\u53EF\u5173\u95ED')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[69] ||
                              (u[69] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[70] || (u[70] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        l(t),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[71] || (u[71] = [d('duration')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[72] ||
                              (u[72] = [
                                d(
                                  '\u663E\u793A\u7684\u6301\u7EED\u65F6\u95F4\uFF0C\u5355\u4F4D\u4E3A '
                                ),
                                o('code', null, 'ms', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[73] || (u[73] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[74] || (u[74] = [o('code', null, '3000', -1)])
                          ),
                          _: 1,
                        }),
                        l(t),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[75] || (u[75] = [d('footer')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[76] || (u[76] = [d('\u5E95\u90E8\u5185\u5BB9')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[77] ||
                              (u[77] = [o('code', null, 'RenderFunction', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[78] || (u[78] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(() => u[79] || (u[79] = [d('2.25.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[80] || (u[80] = [d('closeIcon')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[81] ||
                              (u[81] = [
                                d('\u5173\u95ED\u6309\u94AE\u56FE\u6807'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[82] ||
                              (u[82] = [o('code', null, 'RenderFunction', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[83] || (u[83] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        l(t),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(
                            () => u[84] || (u[84] = [d('closeIconElement')])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[85] ||
                              (u[85] = [
                                d('\u5173\u95ED\u6309\u94AE\u5143\u7D20'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[86] ||
                              (u[86] = [o('code', null, 'RenderFunction', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () => u[87] || (u[87] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        l(t),
                      ]),
                      _: 1,
                    }),
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[88] || (u[88] = [d('onClose')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[89] ||
                              (u[89] = [
                                d(
                                  '\u5173\u95ED\u65F6\u7684\u56DE\u8C03\u51FD\u6570'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[90] ||
                              (u[90] = [
                                o(
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
                            () => u[91] || (u[91] = [o('code', null, '-', -1)])
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
          u[109] ||
            (u[109] = o(
              'h3',
              { id: 'NotificationReturn' },
              'NotificationReturn',
              -1
            )),
          l(
            r,
            { class: 'component-api-table' },
            {
              default: n(() => [
                u[101] ||
                  (u[101] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                l(p, null, {
                  default: n(() => [
                    l(e, null, {
                      default: n(() => [
                        l(s, null, {
                          default: n(
                            () => u[93] || (u[93] = [d('\u53C2\u6570\u540D')])
                          ),
                          _: 1,
                        }),
                        l(s, null, {
                          default: n(
                            () => u[94] || (u[94] = [d('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        l(s, null, {
                          default: n(
                            () => u[95] || (u[95] = [d('\u7C7B\u578B')])
                          ),
                          _: 1,
                        }),
                        l(s, null, {
                          default: n(
                            () => u[96] || (u[96] = [d('\u9ED8\u8BA4\u503C')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                l(a, null, {
                  default: n(() => [
                    l(e, null, {
                      default: n(() => [
                        l(t, null, {
                          default: n(() => u[97] || (u[97] = [d('close')])),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[98] ||
                              (u[98] = [
                                d(
                                  '\u5173\u95ED\u5F53\u524D\u901A\u77E5\u63D0\u9192\u6846'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[99] ||
                              (u[99] = [o('code', null, '() => void', -1)])
                          ),
                          _: 1,
                        }),
                        l(t, null, {
                          default: n(
                            () =>
                              u[100] || (u[100] = [o('code', null, '-', -1)])
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
const W = w(H, [['render', J]]);
export { W as default };
