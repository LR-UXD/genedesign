import {
  _ as D,
  d as F,
  u as R,
  r as a,
  o as B,
  c as S,
  w as n,
  e as o,
  a as t,
  b as u,
  m as I,
} from './index.9c61ea88.js';
import {
  D as N,
  a as $,
  b as P,
  c as U,
  d as V,
  e as W,
} from './update.eecb40cf.js';
import './index.0f04c67f.js';

const y = [
  {
    version: '2.57.0',
    date: '2025-03-10',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fixed an issue where message positioning would be affected by layout and would not be displayed (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/3406">#3406</a>)</p>
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
        typeText: '\u{1F195} Feature',
        list: [
          `<p>Add <code>normal</code> type (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2009">#2009</a>)</p>
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
        typeText: '\u{1F195} Feature',
        list: [
          `<p>Add <code>resetOnHover</code> property to pause and restart timing when the mouse moves in (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1841">#1841</a>)</p>
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
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem that the clear method has an error when called multiple times (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1095">#1095</a>)</p>
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
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fixed the problem of destroying an error when calling at the same time (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/705">#705</a>)</p>
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
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>fix type warning when using loading type (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/635">#635</a>)</p>
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
        typeText: '\u{1F485} Style',
        list: [
          `<p>Use flex layout to display message (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/354">#354</a>)</p>
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
        typeText: '\u{1F195} Feature',
        list: [
          `<p>Added <code>onClose</code> callback method (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/149">#149</a>)</p>
`,
          `<p>Added <code>loading</code> method (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/149">#149</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const E = F({
  name: 'ArcoMain',
  components: {
    DemoBasic: N,
    DemoType: $,
    DemoIcon: P,
    DemoPosition: U,
    DemoCloseable: V,
    DemoUpdate: W,
  },
  setup() {
    const { locale: i } = R();
    return {
      locale: i,
      data: {
        meta: { type: 'Component', category: 'Feedback' },
        title: 'Message',
        description: 'Lightweight global feedback triggered by user actions.',
      },
      changelog: typeof y === 'undefined' ? void 0 : y,
      getMessage: (g, m) => (i.value === 'zh-CN' ? g : m),
    };
  },
});
function G(i, l, b, x, g, m) {
  const C = a('demo-basic');
  const k = a('demo-type');
  const w = a('demo-icon');
  const M = a('demo-position');
  const v = a('demo-closeable');
  const A = a('demo-update');
  const d = a('a-th');
  const s = a('a-tr');
  const p = a('a-thead');
  const e = a('a-td');
  const r = a('a-tbody');
  const f = a('a-table');
  const T = a('arco-article');
  return (
    B(),
    S(
      T,
      I(i.data, { changelog: i.changelog }),
      {
        default: n(() => [
          l[87] ||
            (l[87] = o(
              'p',
              null,
              [o('em', null, 'Auto translate by google.')],
              -1
            )),
          t(C),
          t(k),
          t(w),
          t(M),
          t(v),
          t(A),
          l[88] ||
            (l[88] = o(
              'h3',
              { id: 'Message Global methods' },
              [o('code', null, 'Message'), u(' Global methods')],
              -1
            )),
          l[89] ||
            (l[89] = o(
              'p',
              null,
              'The global methods provided by Message can be used in the following three ways:',
              -1
            )),
          l[90] ||
            (l[90] = o(
              'ol',
              null,
              [
                o('li', null, 'Called by this.$message'),
                o(
                  'li',
                  null,
                  'In the Composition API, call getCurrentInstance().appContext.config.globalProperties.$message'
                ),
                o(
                  'li',
                  null,
                  'Import Message and call it through Message itself'
                ),
              ],
              -1
            )),
          l[91] ||
            (l[91] = o(
              'p',
              null,
              'When used by import, the component has no way to obtain the current Vue Context. Content injected into the AppContext such as i18n or route cannot be used internally. You need to manually pass in the AppContext when calling, or specify the AppContext globally for the component.',
              -1
            )),
          l[92] ||
            (l[92] = o(
              'pre',
              { class: 'code-content' },
              [
                o('code', { class: 'language-lang' }, [
                  o('span', { class: 'token keyword' }, 'import'),
                  u(),
                  o('span', { class: 'token punctuation' }, '{'),
                  u(' createApp '),
                  o('span', { class: 'token punctuation' }, '}'),
                  u(),
                  o('span', { class: 'token keyword' }, 'from'),
                  u(),
                  o('span', { class: 'token string' }, "'vue'"),
                  u(`
`),
                  o('span', { class: 'token keyword' }, 'import'),
                  u(),
                  o('span', { class: 'token punctuation' }, '{'),
                  u(' Message '),
                  o('span', { class: 'token punctuation' }, '}'),
                  u(),
                  o('span', { class: 'token keyword' }, 'from'),
                  u(),
                  o('span', { class: 'token string' }, "'genedesign'"),
                  o('span', { class: 'token punctuation' }, ';'),
                  u(`

`),
                  o('span', { class: 'token keyword' }, 'const'),
                  u(' app '),
                  o('span', { class: 'token operator' }, '='),
                  u(),
                  o('span', { class: 'token function' }, 'createApp'),
                  o('span', { class: 'token punctuation' }, '('),
                  u('App'),
                  o('span', { class: 'token punctuation' }, ')'),
                  o('span', { class: 'token punctuation' }, ';'),
                  u(`
Message`),
                  o('span', { class: 'token punctuation' }, '.'),
                  u('_context '),
                  o('span', { class: 'token operator' }, '='),
                  u(' app'),
                  o('span', { class: 'token punctuation' }, '.'),
                  u('_context'),
                  o('span', { class: 'token punctuation' }, ';'),
                  u(`
`),
                ]),
              ],
              -1
            )),
          l[93] ||
            (l[93] = o('h3', { id: 'MessageMethod' }, 'MessageMethod', -1)),
          t(
            f,
            { class: 'component-api-table' },
            {
              default: n(() => [
                l[34] ||
                  (l[34] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(p, null, {
                  default: n(() => [
                    t(s, null, {
                      default: n(() => [
                        t(d, null, {
                          default: n(() => l[0] || (l[0] = [u('Name')])),
                          _: 1,
                        }),
                        t(d, null, {
                          default: n(() => l[1] || (l[1] = [u('Description')])),
                          _: 1,
                        }),
                        t(d, null, {
                          default: n(() => l[2] || (l[2] = [u('Type')])),
                          _: 1,
                        }),
                        t(d, null, {
                          default: n(() => l[3] || (l[3] = [u('Default')])),
                          _: 1,
                        }),
                        t(d, null, {
                          default: n(() => l[4] || (l[4] = [u('version')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(r, null, {
                  default: n(() => [
                    t(s, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[5] || (l[5] = [u('info')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[6] || (l[6] = [u('Show info message')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[7] ||
                              (l[7] = [
                                o(
                                  'code',
                                  null,
                                  '( config: string | MessageConfig, appContext?: AppContext ) => MessageReturn',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[8] || (l[8] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[9] || (l[9] = [u('success')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[10] || (l[10] = [u('Show success message')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[11] ||
                              (l[11] = [
                                o(
                                  'code',
                                  null,
                                  '( config: string | MessageConfig, appContext?: AppContext ) => MessageReturn',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[12] || (l[12] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[13] || (l[13] = [u('warning')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[14] || (l[14] = [u('Show warning message')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[15] ||
                              (l[15] = [
                                o(
                                  'code',
                                  null,
                                  '( config: string | MessageConfig, appContext?: AppContext ) => MessageReturn',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[16] || (l[16] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[17] || (l[17] = [u('error')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[18] || (l[18] = [u('Show error message')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[19] ||
                              (l[19] = [
                                o(
                                  'code',
                                  null,
                                  '( config: string | MessageConfig, appContext?: AppContext ) => MessageReturn',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[20] || (l[20] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[21] || (l[21] = [u('loading')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[22] || (l[22] = [u('Show loading message')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[23] ||
                              (l[23] = [
                                o(
                                  'code',
                                  null,
                                  '( config: string | MessageConfig, appContext?: AppContext ) => MessageReturn',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[24] || (l[24] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[25] || (l[25] = [u('normal')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[26] || (l[26] = [u('Show message')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[27] ||
                              (l[27] = [
                                o(
                                  'code',
                                  null,
                                  '( config: string | MessageConfig, appContext?: AppContext ) => MessageReturn',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[28] || (l[28] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(() => l[29] || (l[29] = [u('2.41.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[30] || (l[30] = [u('clear')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[31] || (l[31] = [u('Clear all messages')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[32] ||
                              (l[32] = [
                                o(
                                  'code',
                                  null,
                                  '(position?: MessagePosition) => void',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[33] || (l[33] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
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
          l[94] ||
            (l[94] = o('h3', { id: 'MessageConfig' }, 'MessageConfig', -1)),
          t(
            f,
            { class: 'component-api-table' },
            {
              default: n(() => [
                l[77] ||
                  (l[77] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(p, null, {
                  default: n(() => [
                    t(s, null, {
                      default: n(() => [
                        t(d, null, {
                          default: n(() => l[35] || (l[35] = [u('Name')])),
                          _: 1,
                        }),
                        t(d, null, {
                          default: n(
                            () => l[36] || (l[36] = [u('Description')])
                          ),
                          _: 1,
                        }),
                        t(d, null, {
                          default: n(() => l[37] || (l[37] = [u('Type')])),
                          _: 1,
                        }),
                        t(d, null, {
                          default: n(() => l[38] || (l[38] = [u('Default')])),
                          _: 1,
                        }),
                        t(d, null, {
                          default: n(() => l[39] || (l[39] = [u('version')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(r, null, {
                  default: n(() => [
                    t(s, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[40] || (l[40] = [u('content')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(() => l[41] || (l[41] = [u('Content')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[42] ||
                              (l[42] = [o('code', null, 'RenderContent', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[43] || (l[43] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[44] || (l[44] = [u('id')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(() => l[45] || (l[45] = [u('Unique id')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[46] || (l[46] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[47] || (l[47] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[48] || (l[48] = [u('icon')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[49] || (l[49] = [u('Message icon')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[50] ||
                              (l[50] = [o('code', null, 'RenderFunction', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[51] || (l[51] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[52] || (l[52] = [u('position')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[53] || (l[53] = [u('Location of the message')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[54] ||
                              (l[54] = [o('code', null, "'top'|'bottom'", -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[55] || (l[55] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[56] || (l[56] = [u('showIcon')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[57] || (l[57] = [u('Whether to show icon')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[58] ||
                              (l[58] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[59] || (l[59] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[60] || (l[60] = [u('closable')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[61] ||
                              (l[61] = [u('Whether to show the close button')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[62] ||
                              (l[62] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[63] || (l[63] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[64] || (l[64] = [u('duration')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[65] ||
                              (l[65] = [
                                u('The duration of the message display'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[66] || (l[66] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[67] || (l[67] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[68] || (l[68] = [u('onClose')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[69] ||
                              (l[69] = [u('Callback function when closing')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[70] ||
                              (l[70] = [
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
                        t(e, null, {
                          default: n(
                            () => l[71] || (l[71] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(
                            () => l[72] || (l[72] = [u('resetOnHover')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[73] ||
                              (l[73] = [
                                u(
                                  'The mouse to move into the component will not automatically close'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[74] ||
                              (l[74] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[75] || (l[75] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(() => l[76] || (l[76] = [u('2.39.0')])),
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
          l[95] ||
            (l[95] = o('h3', { id: 'MessageReturn' }, 'MessageReturn', -1)),
          t(
            f,
            { class: 'component-api-table' },
            {
              default: n(() => [
                l[86] ||
                  (l[86] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(p, null, {
                  default: n(() => [
                    t(s, null, {
                      default: n(() => [
                        t(d, null, {
                          default: n(() => l[78] || (l[78] = [u('Name')])),
                          _: 1,
                        }),
                        t(d, null, {
                          default: n(
                            () => l[79] || (l[79] = [u('Description')])
                          ),
                          _: 1,
                        }),
                        t(d, null, {
                          default: n(() => l[80] || (l[80] = [u('Type')])),
                          _: 1,
                        }),
                        t(d, null, {
                          default: n(() => l[81] || (l[81] = [u('Default')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(r, null, {
                  default: n(() => [
                    t(s, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[82] || (l[82] = [u('close')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[83] || (l[83] = [u('Close current message')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[84] ||
                              (l[84] = [o('code', null, '() => void', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[85] || (l[85] = [o('code', null, '-', -1)])
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
const j = D(E, [['render', G]]);
export { j as default };
