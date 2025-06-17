import {
  _ as T,
  d as S,
  u as P,
  r as d,
  o as B,
  c as M,
  w as t,
  e as u,
  a as n,
  b as e,
  m as $,
} from './index.9c61ea88.js';
import {
  D as U,
  a as V,
  b as E,
  c as G,
  d as W,
  e as j,
  f as L,
  g as q,
} from './style.5ea8fe09.js';
import './index.5bc6c633.js';

const b = [
  {
    version: '2.43.0',
    date: '2023-02-10',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem that the update duration fails (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2106">#2106</a>)</p>
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
        typeText: '\u{1F195} Feature',
        list: [
          `<p>notification and  notification listspace style adjustment (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1676">#1676</a>)</p>
`,
          `<p><code>showIcon</code> not working (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1676">#1676</a>)</p>
`,
          `<p>support custom close icon &amp; close element (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1676">#1676</a>)</p>
`,
          `<p>support custom style (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1676">#1676</a>)</p>
`,
          `<p>temove the notification corresponding to <code>id</code> (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1676">#1676</a>)</p>
`,
          `<p>demo (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1676">#1676</a>)</p>
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
        typeText: '\u{1F195} Feature',
        list: [
          `<p>Add footer prop (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1029">#1029</a>)</p>
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
        ],
      },
    ],
    extra: [],
  },
];
const z = S({
  name: 'ArcoMain',
  components: {
    DemoBasic: U,
    DemoType: V,
    DemoPosition: E,
    DemoUpdate_notification: G,
    DemoUpdate_duration: W,
    DemoBtn: j,
    DemoCustomClose: L,
    DemoStyle: q,
  },
  setup() {
    const { locale: a } = P();
    return {
      locale: a,
      data: {
        meta: { type: 'Component', category: 'Feedback' },
        title: 'Notification',
        description:
          'Globally display notification reminders to convey information to users in a timely and effective manner.',
      },
      changelog: typeof b === 'undefined' ? void 0 : b,
      getMessage: (m, g) => (a.value === 'zh-CN' ? m : g),
    };
  },
});
function Y(a, l, y, C, m, g) {
  const k = d('demo-basic');
  const x = d('demo-type');
  const v = d('demo-position');
  const N = d('demo-update_notification');
  const w = d('demo-update_duration');
  const A = d('demo-btn');
  const D = d('demo-custom-close');
  const R = d('demo-style');
  const I = d('anchor-head');
  const s = d('a-th');
  const i = d('a-tr');
  const f = d('a-thead');
  const o = d('a-td');
  const p = d('a-tbody');
  const r = d('a-table');
  const F = d('arco-article');
  return (
    B(),
    M(
      F,
      $(a.data, { changelog: a.changelog }),
      {
        default: t(() => [
          l[102] ||
            (l[102] = u(
              'p',
              null,
              [u('em', null, 'Auto translate by google.')],
              -1
            )),
          n(k),
          n(x),
          n(v),
          n(N),
          n(w),
          n(A),
          n(D),
          n(R),
          n(
            I,
            { level: '2', href: 'API' },
            { default: t(() => l[0] || (l[0] = [e('API')])), _: 1 }
          ),
          l[103] ||
            (l[103] = u(
              'h3',
              { id: 'Notification Global methods' },
              [u('code', null, 'Notification'), e(' Global methods')],
              -1
            )),
          l[104] ||
            (l[104] = u(
              'p',
              null,
              [
                e('The global methods provided by '),
                u('code', null, 'Notification'),
                e(' can be used in the following three ways:'),
              ],
              -1
            )),
          l[105] ||
            (l[105] = u(
              'ol',
              null,
              [
                u('li', null, [
                  e('Called by '),
                  u('code', null, 'this.$notification'),
                ]),
                u('li', null, [
                  e('In the Composition API, call '),
                  u(
                    'code',
                    null,
                    'getCurrentInstance().appContext.config.globalProperties.$notification'
                  ),
                ]),
                u('li', null, [
                  e('Import '),
                  u('code', null, 'Notification'),
                  e(', call through '),
                  u('code', null, 'Notification'),
                  e(' itself'),
                ]),
              ],
              -1
            )),
          l[106] ||
            (l[106] = u(
              'p',
              null,
              'When used by import, the component has no way to obtain the current Vue Context. Content injected into the AppContext such as i18n or route cannot be used internally. You need to manually pass in the AppContext when calling, or specify the AppContext globally for the component.',
              -1
            )),
          l[107] ||
            (l[107] = u(
              'pre',
              { class: 'code-content' },
              [
                u('code', { class: 'language-lang' }, [
                  u('span', { class: 'token keyword' }, 'import'),
                  e(),
                  u('span', { class: 'token punctuation' }, '{'),
                  e(' createApp '),
                  u('span', { class: 'token punctuation' }, '}'),
                  e(),
                  u('span', { class: 'token keyword' }, 'from'),
                  e(),
                  u('span', { class: 'token string' }, "'vue'"),
                  e(`
`),
                  u('span', { class: 'token keyword' }, 'import'),
                  e(),
                  u('span', { class: 'token punctuation' }, '{'),
                  e(' Notification '),
                  u('span', { class: 'token punctuation' }, '}'),
                  e(),
                  u('span', { class: 'token keyword' }, 'from'),
                  e(),
                  u('span', { class: 'token string' }, "'genedesign'"),
                  u('span', { class: 'token punctuation' }, ';'),
                  e(`

`),
                  u('span', { class: 'token keyword' }, 'const'),
                  e(' app '),
                  u('span', { class: 'token operator' }, '='),
                  e(),
                  u('span', { class: 'token function' }, 'createApp'),
                  u('span', { class: 'token punctuation' }, '('),
                  e('App'),
                  u('span', { class: 'token punctuation' }, ')'),
                  u('span', { class: 'token punctuation' }, ';'),
                  e(`
Notification`),
                  u('span', { class: 'token punctuation' }, '.'),
                  e('_context '),
                  u('span', { class: 'token operator' }, '='),
                  e(' app'),
                  u('span', { class: 'token punctuation' }, '.'),
                  e('_context'),
                  u('span', { class: 'token punctuation' }, ';'),
                  e(`
`),
                ]),
              ],
              -1
            )),
          l[108] ||
            (l[108] = u(
              'h3',
              { id: 'NotificationMethod' },
              'NotificationMethod',
              -1
            )),
          n(
            r,
            { class: 'component-api-table' },
            {
              default: t(() => [
                l[29] ||
                  (l[29] = u(
                    'colgroup',
                    null,
                    [u('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                n(f, null, {
                  default: t(() => [
                    n(i, null, {
                      default: t(() => [
                        n(s, null, {
                          default: t(() => l[1] || (l[1] = [e('Name')])),
                          _: 1,
                        }),
                        n(s, null, {
                          default: t(() => l[2] || (l[2] = [e('Description')])),
                          _: 1,
                        }),
                        n(s, null, {
                          default: t(() => l[3] || (l[3] = [e('Type')])),
                          _: 1,
                        }),
                        n(s, null, {
                          default: t(() => l[4] || (l[4] = [e('Default')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                n(p, null, {
                  default: t(() => [
                    n(i, null, {
                      default: t(() => [
                        n(o, null, {
                          default: t(() => l[5] || (l[5] = [e('info')])),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () => l[6] || (l[6] = [e('Show info notification')])
                          ),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () =>
                              l[7] ||
                              (l[7] = [
                                u(
                                  'code',
                                  null,
                                  '( config: string | NotificationConfig, appContext?: AppContext ) => NotificationReturn',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () => l[8] || (l[8] = [u('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    n(i, null, {
                      default: t(() => [
                        n(o, null, {
                          default: t(() => l[9] || (l[9] = [e('success')])),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () =>
                              l[10] ||
                              (l[10] = [e('Show success notification')])
                          ),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () =>
                              l[11] ||
                              (l[11] = [
                                u(
                                  'code',
                                  null,
                                  '( config: string | NotificationConfig, appContext?: AppContext ) => NotificationReturn',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () => l[12] || (l[12] = [u('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    n(i, null, {
                      default: t(() => [
                        n(o, null, {
                          default: t(() => l[13] || (l[13] = [e('warning')])),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () =>
                              l[14] ||
                              (l[14] = [e('Show warning notification')])
                          ),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () =>
                              l[15] ||
                              (l[15] = [
                                u(
                                  'code',
                                  null,
                                  '( config: string | NotificationConfig, appContext?: AppContext ) => NotificationReturn',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () => l[16] || (l[16] = [u('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    n(i, null, {
                      default: t(() => [
                        n(o, null, {
                          default: t(() => l[17] || (l[17] = [e('error')])),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () =>
                              l[18] || (l[18] = [e('Show error notification')])
                          ),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () =>
                              l[19] ||
                              (l[19] = [
                                u(
                                  'code',
                                  null,
                                  '( config: string | NotificationConfig, appContext?: AppContext ) => NotificationReturn',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () => l[20] || (l[20] = [u('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    n(i, null, {
                      default: t(() => [
                        n(o, null, {
                          default: t(() => l[21] || (l[21] = [e('remove')])),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () =>
                              l[22] ||
                              (l[22] = [
                                e(
                                  'remove the notification for the corresponding '
                                ),
                                u('code', null, 'id', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () =>
                              l[23] ||
                              (l[23] = [
                                u('code', null, '(id: string) => void', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () => l[24] || (l[24] = [u('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    n(i, null, {
                      default: t(() => [
                        n(o, null, {
                          default: t(() => l[25] || (l[25] = [e('clear')])),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () =>
                              l[26] || (l[26] = [e('Clear all notifications')])
                          ),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () =>
                              l[27] ||
                              (l[27] = [
                                u(
                                  'code',
                                  null,
                                  '(position?: NotificationPosition) => void',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () => l[28] || (l[28] = [u('code', null, '-', -1)])
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
          l[109] ||
            (l[109] = u(
              'h3',
              { id: 'NotificationConfig' },
              'NotificationConfig',
              -1
            )),
          n(
            r,
            { class: 'component-api-table' },
            {
              default: t(() => [
                l[92] ||
                  (l[92] = u(
                    'colgroup',
                    null,
                    [u('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                n(f, null, {
                  default: t(() => [
                    n(i, null, {
                      default: t(() => [
                        n(s, null, {
                          default: t(() => l[30] || (l[30] = [e('Name')])),
                          _: 1,
                        }),
                        n(s, null, {
                          default: t(
                            () => l[31] || (l[31] = [e('Description')])
                          ),
                          _: 1,
                        }),
                        n(s, null, {
                          default: t(() => l[32] || (l[32] = [e('Type')])),
                          _: 1,
                        }),
                        n(s, null, {
                          default: t(() => l[33] || (l[33] = [e('Default')])),
                          _: 1,
                        }),
                        n(s, null, {
                          default: t(() => l[34] || (l[34] = [e('version')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                n(p, null, {
                  default: t(() => [
                    n(i, null, {
                      default: t(() => [
                        n(o, null, {
                          default: t(() => l[35] || (l[35] = [e('content')])),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(() => l[36] || (l[36] = [e('Content')])),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () =>
                              l[37] ||
                              (l[37] = [u('code', null, 'RenderContent', -1)])
                          ),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () => l[38] || (l[38] = [u('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        n(o),
                      ]),
                      _: 1,
                    }),
                    n(i, null, {
                      default: t(() => [
                        n(o, null, {
                          default: t(() => l[39] || (l[39] = [e('title')])),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(() => l[40] || (l[40] = [e('Title')])),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () =>
                              l[41] ||
                              (l[41] = [u('code', null, 'RenderContent', -1)])
                          ),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () => l[42] || (l[42] = [u('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        n(o),
                      ]),
                      _: 1,
                    }),
                    n(i, null, {
                      default: t(() => [
                        n(o, null, {
                          default: t(() => l[43] || (l[43] = [e('icon')])),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(() => l[44] || (l[44] = [e('Icon')])),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () =>
                              l[45] ||
                              (l[45] = [u('code', null, 'RenderFunction', -1)])
                          ),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () => l[46] || (l[46] = [u('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        n(o),
                      ]),
                      _: 1,
                    }),
                    n(i, null, {
                      default: t(() => [
                        n(o, null, {
                          default: t(() => l[47] || (l[47] = [e('id')])),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(() => l[48] || (l[48] = [e('Unique id')])),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () =>
                              l[49] || (l[49] = [u('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () => l[50] || (l[50] = [u('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        n(o),
                      ]),
                      _: 1,
                    }),
                    n(i, null, {
                      default: t(() => [
                        n(o, null, {
                          default: t(() => l[51] || (l[51] = [e('style')])),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(() => l[52] || (l[52] = [e('Style')])),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () =>
                              l[53] ||
                              (l[53] = [u('code', null, 'CSSProperties', -1)])
                          ),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () => l[54] || (l[54] = [u('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        n(o),
                      ]),
                      _: 1,
                    }),
                    n(i, null, {
                      default: t(() => [
                        n(o, null, {
                          default: t(() => l[55] || (l[55] = [e('class')])),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () => l[56] || (l[56] = [e('Style class name')])
                          ),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () =>
                              l[57] ||
                              (l[57] = [u('code', null, 'ClassName', -1)])
                          ),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () => l[58] || (l[58] = [u('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        n(o),
                      ]),
                      _: 1,
                    }),
                    n(i, null, {
                      default: t(() => [
                        n(o, null, {
                          default: t(() => l[59] || (l[59] = [e('position')])),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(() => l[60] || (l[60] = [e('Position')])),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () =>
                              l[61] ||
                              (l[61] = [
                                u(
                                  'code',
                                  null,
                                  "'topLeft'|'topRight'|'bottomLeft'|'bottomRight'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () => l[62] || (l[62] = [u('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        n(o),
                      ]),
                      _: 1,
                    }),
                    n(i, null, {
                      default: t(() => [
                        n(o, null, {
                          default: t(() => l[63] || (l[63] = [e('showIcon')])),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () => l[64] || (l[64] = [e('Whether to show icon')])
                          ),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () =>
                              l[65] ||
                              (l[65] = [u('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () =>
                              l[66] || (l[66] = [u('code', null, 'true', -1)])
                          ),
                          _: 1,
                        }),
                        n(o),
                      ]),
                      _: 1,
                    }),
                    n(i, null, {
                      default: t(() => [
                        n(o, null, {
                          default: t(() => l[67] || (l[67] = [e('closable')])),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () =>
                              l[68] || (l[68] = [e('Whether it can be closed')])
                          ),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () =>
                              l[69] ||
                              (l[69] = [u('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () =>
                              l[70] || (l[70] = [u('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        n(o),
                      ]),
                      _: 1,
                    }),
                    n(i, null, {
                      default: t(() => [
                        n(o, null, {
                          default: t(() => l[71] || (l[71] = [e('duration')])),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () =>
                              l[72] ||
                              (l[72] = [
                                e('Display duration, the unit is '),
                                u('code', null, 'ms', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () =>
                              l[73] || (l[73] = [u('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () =>
                              l[74] || (l[74] = [u('code', null, '3000', -1)])
                          ),
                          _: 1,
                        }),
                        n(o),
                      ]),
                      _: 1,
                    }),
                    n(i, null, {
                      default: t(() => [
                        n(o, null, {
                          default: t(() => l[75] || (l[75] = [e('footer')])),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () => l[76] || (l[76] = [e('Footer Content')])
                          ),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () =>
                              l[77] ||
                              (l[77] = [u('code', null, 'RenderFunction', -1)])
                          ),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () => l[78] || (l[78] = [u('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(() => l[79] || (l[79] = [e('2.25.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    n(i, null, {
                      default: t(() => [
                        n(o, null, {
                          default: t(() => l[80] || (l[80] = [e('closeIcon')])),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () => l[81] || (l[81] = [e('Close button icon')])
                          ),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () =>
                              l[82] ||
                              (l[82] = [u('code', null, 'RenderFunction', -1)])
                          ),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () => l[83] || (l[83] = [u('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        n(o),
                      ]),
                      _: 1,
                    }),
                    n(i, null, {
                      default: t(() => [
                        n(o, null, {
                          default: t(
                            () => l[84] || (l[84] = [e('closeIconElement')])
                          ),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () => l[85] || (l[85] = [e('Close button element')])
                          ),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () =>
                              l[86] ||
                              (l[86] = [u('code', null, 'RenderFunction', -1)])
                          ),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () => l[87] || (l[87] = [u('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        n(o),
                      ]),
                      _: 1,
                    }),
                    n(i, null, {
                      default: t(() => [
                        n(o, null, {
                          default: t(() => l[88] || (l[88] = [e('onClose')])),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () =>
                              l[89] ||
                              (l[89] = [e('Callback function when closing')])
                          ),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () =>
                              l[90] ||
                              (l[90] = [
                                u(
                                  'code',
                                  null,
                                  '(id: number | string) => void',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () => l[91] || (l[91] = [u('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        n(o),
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
          l[110] ||
            (l[110] = u(
              'h3',
              { id: 'NotificationReturn' },
              'NotificationReturn',
              -1
            )),
          n(
            r,
            { class: 'component-api-table' },
            {
              default: t(() => [
                l[101] ||
                  (l[101] = u(
                    'colgroup',
                    null,
                    [u('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                n(f, null, {
                  default: t(() => [
                    n(i, null, {
                      default: t(() => [
                        n(s, null, {
                          default: t(() => l[93] || (l[93] = [e('Name')])),
                          _: 1,
                        }),
                        n(s, null, {
                          default: t(
                            () => l[94] || (l[94] = [e('Description')])
                          ),
                          _: 1,
                        }),
                        n(s, null, {
                          default: t(() => l[95] || (l[95] = [e('Type')])),
                          _: 1,
                        }),
                        n(s, null, {
                          default: t(() => l[96] || (l[96] = [e('Default')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                n(p, null, {
                  default: t(() => [
                    n(i, null, {
                      default: t(() => [
                        n(o, null, {
                          default: t(() => l[97] || (l[97] = [e('close')])),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () =>
                              l[98] ||
                              (l[98] = [e('Close the current notification')])
                          ),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () =>
                              l[99] ||
                              (l[99] = [u('code', null, '() => void', -1)])
                          ),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () =>
                              l[100] || (l[100] = [u('code', null, '-', -1)])
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
const O = T(z, [['render', Y]]);
export { O as default };
