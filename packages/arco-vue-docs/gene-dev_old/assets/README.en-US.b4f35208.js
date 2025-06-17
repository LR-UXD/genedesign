import {
  _ as P,
  d as B,
  u as N,
  r as d,
  o as I,
  c as M,
  w as e,
  e as u,
  a as t,
  b as n,
  m as W,
} from './index.9c61ea88.js';
import {
  D as S,
  a as $,
  b as V,
  c as z,
  d as R,
  e as U,
  f as j,
  g as q,
} from './banner.d0eef2dc.js';

const b = [
  {
    version: '2.47.0',
    date: '2023-06-02',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>add <code>center</code> prop (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2464">#2464</a>)</p>
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
    version: '2.36.0',
    date: '2022-09-02',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>suport custom close element (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1544">#1544</a>)</p>
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
          `<p>Add <code>#action</code> slot (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/148">#148</a>)</p>
`,
        ],
      },
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem of incorrect name export by alert (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/142">#142</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const G = B({
  name: 'ArcoMain',
  components: {
    DemoBasic: S,
    DemoType: $,
    DemoTitle: V,
    DemoClosable: z,
    DemoCloseElement: R,
    DemoIcon: U,
    DemoAction: j,
    DemoBanner: q,
  },
  setup() {
    const { locale: r } = N();
    return {
      locale: r,
      data: {
        meta: { type: 'Component', category: 'Feedback' },
        title: 'Alert',
        description:
          'When warning information is displayed to the user, the warning prompt is used to display the information that needs attention.',
      },
      changelog: typeof b === 'undefined' ? void 0 : b,
      getMessage: (m, g) => (r.value === 'zh-CN' ? m : g),
    };
  },
});
function H(r, l, y, v, m, g) {
  const x = d('demo-basic');
  const D = d('demo-type');
  const T = d('demo-title');
  const _ = d('demo-closable');
  const w = d('demo-close-element');
  const A = d('demo-icon');
  const k = d('demo-action');
  const C = d('demo-banner');
  const E = d('anchor-head');
  const a = d('a-th');
  const s = d('a-tr');
  const i = d('a-thead');
  const o = d('a-td');
  const f = d('a-tbody');
  const p = d('a-table');
  const F = d('arco-article');
  return (
    I(),
    M(
      F,
      W(r.data, { changelog: r.changelog }),
      {
        default: e(() => [
          l[58] ||
            (l[58] = u(
              'p',
              null,
              [u('em', null, 'Auto translate by google.')],
              -1
            )),
          t(x),
          t(D),
          t(T),
          t(_),
          t(w),
          t(A),
          t(k),
          t(C),
          t(
            E,
            { level: '2', href: 'API' },
            { default: e(() => l[0] || (l[0] = [n('API')])), _: 1 }
          ),
          l[59] ||
            (l[59] = u(
              'h3',
              { id: 'alert Props' },
              [u('code', null, '<alert>'), n(' Props')],
              -1
            )),
          t(
            p,
            { class: 'component-api-table' },
            {
              default: e(() => [
                l[29] ||
                  (l[29] = u(
                    'colgroup',
                    null,
                    [u('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(i, null, {
                  default: e(() => [
                    t(s, null, {
                      default: e(() => [
                        t(a, null, {
                          default: e(() => l[1] || (l[1] = [n('Attribute')])),
                          _: 1,
                        }),
                        t(a, null, {
                          default: e(() => l[2] || (l[2] = [n('Description')])),
                          _: 1,
                        }),
                        t(a, null, {
                          default: e(() => l[3] || (l[3] = [n('Type')])),
                          _: 1,
                        }),
                        t(a, null, {
                          default: e(() => l[4] || (l[4] = [n('Default')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(f, null, {
                  default: e(() => [
                    t(s, null, {
                      default: e(() => [
                        t(o, null, {
                          default: e(() => l[5] || (l[5] = [n('type')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[6] ||
                              (l[6] = [
                                n('Type of the alert. 2.41.0 Added '),
                                u('code', null, 'normal', -1),
                                n(' type'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[7] ||
                              (l[7] = [
                                u(
                                  'code',
                                  null,
                                  'info | success | warning | error | normal',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[8] || (l[8] = [u('code', null, "'info'", -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: e(() => [
                        t(o, null, {
                          default: e(() => l[9] || (l[9] = [n('show-icon')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[10] || (l[10] = [n('Whether to show the icon')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[11] ||
                              (l[11] = [u('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[12] || (l[12] = [u('code', null, 'true', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: e(() => [
                        t(o, null, {
                          default: e(() => l[13] || (l[13] = [n('closable')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[14] ||
                              (l[14] = [n('Whether to show the close button')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[15] ||
                              (l[15] = [u('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[16] || (l[16] = [u('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: e(() => [
                        t(o, null, {
                          default: e(() => l[17] || (l[17] = [n('title')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[18] || (l[18] = [n('The title of the alert')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[19] || (l[19] = [u('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () => l[20] || (l[20] = [u('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: e(() => [
                        t(o, null, {
                          default: e(() => l[21] || (l[21] = [n('banner')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[22] ||
                              (l[22] = [
                                n(
                                  'Whether to use as the top announcement (remove the border and rounded corners)'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[23] ||
                              (l[23] = [u('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[24] || (l[24] = [u('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: e(() => [
                        t(o, null, {
                          default: e(() => l[25] || (l[25] = [n('center')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[26] ||
                              (l[26] = [
                                n(
                                  'Whether the content is displayed in the center'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[27] ||
                              (l[27] = [u('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[28] || (l[28] = [u('code', null, 'false', -1)])
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
          l[60] ||
            (l[60] = u(
              'h3',
              { id: 'alert Events' },
              [u('code', null, '<alert>'), n(' Events')],
              -1
            )),
          t(
            p,
            { class: 'component-api-table' },
            {
              default: e(() => [
                l[39] ||
                  (l[39] = u(
                    'colgroup',
                    null,
                    [u('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(i, null, {
                  default: e(() => [
                    t(s, null, {
                      default: e(() => [
                        t(a, null, {
                          default: e(
                            () => l[30] || (l[30] = [n('Event Name')])
                          ),
                          _: 1,
                        }),
                        t(a, null, {
                          default: e(
                            () => l[31] || (l[31] = [n('Description')])
                          ),
                          _: 1,
                        }),
                        t(a, null, {
                          default: e(
                            () => l[32] || (l[32] = [n('Parameters')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(f, null, {
                  default: e(() => [
                    t(s, null, {
                      default: e(() => [
                        t(o, null, {
                          default: e(() => l[33] || (l[33] = [n('close')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[34] ||
                              (l[34] = [
                                n('Triggered when the close button is clicked'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[35] ||
                              (l[35] = [
                                n('ev: '),
                                u('code', null, 'MouseEvent', -1),
                              ])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: e(() => [
                        t(o, null, {
                          default: e(
                            () => l[36] || (l[36] = [n('after-close')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[37] ||
                              (l[37] = [
                                n('Triggered after the close animation ends'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(() => l[38] || (l[38] = [n('-')])),
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
          l[61] ||
            (l[61] = u(
              'h3',
              { id: 'alert Slots' },
              [u('code', null, '<alert>'), n(' Slots')],
              -1
            )),
          t(
            p,
            { class: 'component-api-table' },
            {
              default: e(() => [
                l[57] ||
                  (l[57] = u(
                    'colgroup',
                    null,
                    [u('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(i, null, {
                  default: e(() => [
                    t(s, null, {
                      default: e(() => [
                        t(a, null, {
                          default: e(() => l[40] || (l[40] = [n('Slot Name')])),
                          _: 1,
                        }),
                        t(a, null, {
                          default: e(
                            () => l[41] || (l[41] = [n('Description')])
                          ),
                          _: 1,
                        }),
                        t(a, null, {
                          default: e(
                            () => l[42] || (l[42] = [n('Parameters')])
                          ),
                          _: 1,
                        }),
                        t(a, null, {
                          default: e(() => l[43] || (l[43] = [n('version')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(f, null, {
                  default: e(() => [
                    t(s, null, {
                      default: e(() => [
                        t(o, null, {
                          default: e(() => l[44] || (l[44] = [n('icon')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(() => l[45] || (l[45] = [n('Icon')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(() => l[46] || (l[46] = [n('-')])),
                          _: 1,
                        }),
                        t(o),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: e(() => [
                        t(o, null, {
                          default: e(() => l[47] || (l[47] = [n('title')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(() => l[48] || (l[48] = [n('Title')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(() => l[49] || (l[49] = [n('-')])),
                          _: 1,
                        }),
                        t(o),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: e(() => [
                        t(o, null, {
                          default: e(() => l[50] || (l[50] = [n('action')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(() => l[51] || (l[51] = [n('Actions')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(() => l[52] || (l[52] = [n('-')])),
                          _: 1,
                        }),
                        t(o),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: e(() => [
                        t(o, null, {
                          default: e(
                            () => l[53] || (l[53] = [n('close-element')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () => l[54] || (l[54] = [n('Close element')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(() => l[55] || (l[55] = [n('-')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(() => l[56] || (l[56] = [n('2.36.0')])),
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
const L = P(G, [['render', H]]);
export { L as default };
