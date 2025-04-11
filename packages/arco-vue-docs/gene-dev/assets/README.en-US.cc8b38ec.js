import {
  _ as A,
  d as B,
  u as M,
  r as s,
  o as N,
  c as F,
  w as t,
  e as u,
  a as e,
  b as o,
  m as I,
} from './index.9c61ea88.js';
import {
  D as _,
  a as $,
  b as L,
  c as U,
  d as V,
  e as R,
  f as j,
  g as q,
  h as G,
} from './bordered.36b402e0.js';

const b = [
  { version: '2.38.0', date: '2022-10-28', list: [], extra: [] },
  {
    version: '2.33.0',
    date: '2022-07-08',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>support <code>bordered</code>  show border (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1342">#1342</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.32.0',
    date: '2022-06-24',
    list: [
      {
        type: 'style',
        typeText: '\u{1F485} Style',
        list: [
          `<p>Firefox overflow style compatibility (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1317">#1317</a>)</p>
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
        type: 'typescript',
        typeText: '\u{1F18E} TypeScript',
        list: [
          `<p>Fix TagProps issues (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1024">#1024</a>)</p>
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
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Remove <code>mini</code> size type (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/860">#860</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.15.0',
    date: '2022-01-14',
    list: [
      {
        type: 'style',
        typeText: '\u{1F485} Style',
        list: [
          `<p>Fix checkable state style bug (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/570">#570</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const H = B({
  name: 'ArcoMain',
  components: {
    DemoBasic: _,
    DemoCloseable: $,
    DemoDynamically: L,
    DemoCheckable: U,
    DemoColor: V,
    DemoSize: R,
    DemoLoading: j,
    DemoIcon: q,
    DemoBordered: G,
  },
  setup() {
    const { locale: i } = M();
    return {
      locale: i,
      data: {
        meta: { type: 'Component', category: 'Data Display' },
        title: 'Tag',
        description:
          'Used for the selection, screening and classification of information. Users use tags for information feedback and interactive operations.',
      },
      changelog: typeof b === 'undefined' ? void 0 : b,
      getMessage: (m, g) => (i.value === 'zh-CN' ? m : g),
    };
  },
});
function J(i, l, y, v, m, g) {
  const k = s('demo-basic');
  const x = s('demo-closeable');
  const D = s('demo-dynamically');
  const w = s('demo-checkable');
  const T = s('demo-color');
  const C = s('demo-size');
  const E = s('demo-loading');
  const P = s('demo-icon');
  const S = s('demo-bordered');
  const W = s('anchor-head');
  const a = s('a-th');
  const d = s('a-tr');
  const r = s('a-thead');
  const n = s('a-td');
  const f = s('a-tbody');
  const p = s('a-table');
  const z = s('arco-article');
  return (
    N(),
    F(
      z,
      I(i.data, { changelog: i.changelog }),
      {
        default: t(() => [
          l[73] ||
            (l[73] = u(
              'p',
              null,
              [u('em', null, 'Auto translate by google.')],
              -1
            )),
          e(k),
          e(x),
          e(D),
          e(w),
          e(T),
          e(C),
          e(E),
          e(P),
          e(S),
          e(
            W,
            { level: '2', href: 'API' },
            { default: t(() => l[0] || (l[0] = [o('API')])), _: 1 }
          ),
          l[74] ||
            (l[74] = u(
              'h3',
              { id: 'tag Props' },
              [u('code', null, '<tag>'), o(' Props')],
              -1
            )),
          e(
            p,
            { class: 'component-api-table' },
            {
              default: t(() => [
                l[52] ||
                  (l[52] = u(
                    'colgroup',
                    null,
                    [u('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                e(r, null, {
                  default: t(() => [
                    e(d, null, {
                      default: t(() => [
                        e(a, null, {
                          default: t(() => l[1] || (l[1] = [o('Attribute')])),
                          _: 1,
                        }),
                        e(a, null, {
                          default: t(() => l[2] || (l[2] = [o('Description')])),
                          _: 1,
                        }),
                        e(a, null, {
                          default: t(() => l[3] || (l[3] = [o('Type')])),
                          _: 1,
                        }),
                        e(a, null, {
                          default: t(() => l[4] || (l[4] = [o('Default')])),
                          _: 1,
                        }),
                        e(a, null, {
                          default: t(() => l[5] || (l[5] = [o('version')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                e(f, null, {
                  default: t(() => [
                    e(d, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(() => l[6] || (l[6] = [o('color')])),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(() => l[7] || (l[7] = [o('Label color')])),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[8] ||
                              (l[8] = [
                                u(
                                  'code',
                                  null,
                                  "'red' | 'orangered' | 'orange' | 'gold' | 'lime' | 'green' | 'cyan' | 'blue' | 'skyblue' | 'purple' | 'pinkpurple' | 'magenta' | 'gray'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () => l[9] || (l[9] = [u('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        e(n),
                      ]),
                      _: 1,
                    }),
                    e(d, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(() => l[10] || (l[10] = [o('size')])),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () => l[11] || (l[11] = [o('Label size')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[12] ||
                              (l[12] = [
                                u(
                                  'code',
                                  null,
                                  "'small' | 'medium' | 'large'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[13] ||
                              (l[13] = [u('code', null, "'medium'", -1)])
                          ),
                          _: 1,
                        }),
                        e(n),
                      ]),
                      _: 1,
                    }),
                    e(d, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(() => l[14] || (l[14] = [o('bordered')])),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[15] ||
                              (l[15] = [o('Whether the tag is bordered')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[16] ||
                              (l[16] = [u('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[17] || (l[17] = [u('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(() => l[18] || (l[18] = [o('2.33.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    e(d, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () =>
                              l[19] ||
                              (l[19] = [
                                o('visible '),
                                u('strong', null, '(v-model)', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[20] ||
                              (l[20] = [o('Whether the tag is visible')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[21] ||
                              (l[21] = [u('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () => l[22] || (l[22] = [u('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        e(n),
                      ]),
                      _: 1,
                    }),
                    e(d, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () => l[23] || (l[23] = [o('default-visible')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[24] ||
                              (l[24] = [
                                o('Whether the tag is visible by default'),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[25] ||
                              (l[25] = [u('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[26] || (l[26] = [u('code', null, 'true', -1)])
                          ),
                          _: 1,
                        }),
                        e(n),
                      ]),
                      _: 1,
                    }),
                    e(d, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(() => l[27] || (l[27] = [o('loading')])),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[28] ||
                              (l[28] = [o('Whether the tag is loading state')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[29] ||
                              (l[29] = [u('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[30] || (l[30] = [u('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        e(n),
                      ]),
                      _: 1,
                    }),
                    e(d, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(() => l[31] || (l[31] = [o('closable')])),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[32] ||
                              (l[32] = [o('Whether the tag can be closed')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[33] ||
                              (l[33] = [u('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[34] || (l[34] = [u('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        e(n),
                      ]),
                      _: 1,
                    }),
                    e(d, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(() => l[35] || (l[35] = [o('checkable')])),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[36] ||
                              (l[36] = [o('Whether the tag can be checked')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[37] ||
                              (l[37] = [u('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[38] || (l[38] = [u('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        e(n),
                      ]),
                      _: 1,
                    }),
                    e(d, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () =>
                              l[39] ||
                              (l[39] = [
                                o('checked '),
                                u('strong', null, '(v-model)', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[40] ||
                              (l[40] = [
                                o(
                                  'Whether the tag is checked (available when the tag is checkable)'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[41] ||
                              (l[41] = [u('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () => l[42] || (l[42] = [u('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        e(n),
                      ]),
                      _: 1,
                    }),
                    e(d, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () => l[43] || (l[43] = [o('default-checked')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[44] ||
                              (l[44] = [
                                o(
                                  'Whether the tag is checked by default (available when the tag is checkable)'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[45] ||
                              (l[45] = [u('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[46] || (l[46] = [u('code', null, 'true', -1)])
                          ),
                          _: 1,
                        }),
                        e(n),
                      ]),
                      _: 1,
                    }),
                    e(d, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(() => l[47] || (l[47] = [o('nowrap')])),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[48] ||
                              (l[48] = [o('Tag content does not wrap')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[49] ||
                              (l[49] = [u('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[50] || (l[50] = [u('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(() => l[51] || (l[51] = [o('2.56.1')])),
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
          l[75] ||
            (l[75] = u(
              'h3',
              { id: 'tag Events' },
              [u('code', null, '<tag>'), o(' Events')],
              -1
            )),
          e(
            p,
            { class: 'component-api-table' },
            {
              default: t(() => [
                l[62] ||
                  (l[62] = u(
                    'colgroup',
                    null,
                    [u('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                e(r, null, {
                  default: t(() => [
                    e(d, null, {
                      default: t(() => [
                        e(a, null, {
                          default: t(
                            () => l[53] || (l[53] = [o('Event Name')])
                          ),
                          _: 1,
                        }),
                        e(a, null, {
                          default: t(
                            () => l[54] || (l[54] = [o('Description')])
                          ),
                          _: 1,
                        }),
                        e(a, null, {
                          default: t(
                            () => l[55] || (l[55] = [o('Parameters')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                e(f, null, {
                  default: t(() => [
                    e(d, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(() => l[56] || (l[56] = [o('close')])),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[57] ||
                              (l[57] = [
                                o('Emitted when the close button is clicked'),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[58] ||
                              (l[58] = [
                                o('ev: '),
                                u('code', null, 'MouseEvent', -1),
                              ])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    e(d, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(() => l[59] || (l[59] = [o('check')])),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[60] ||
                              (l[60] = [
                                o(
                                  'Emitted when the user check (emit only in the checkable mode)'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[61] ||
                              (l[61] = [
                                o('checked: '),
                                u('code', null, 'boolean', -1),
                                u('br', null, null, -1),
                                o('ev: '),
                                u('code', null, 'MouseEvent', -1),
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
          l[76] ||
            (l[76] = u(
              'h3',
              { id: 'tag Slots' },
              [u('code', null, '<tag>'), o(' Slots')],
              -1
            )),
          e(
            p,
            { class: 'component-api-table' },
            {
              default: t(() => [
                l[72] ||
                  (l[72] = u(
                    'colgroup',
                    null,
                    [u('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                e(r, null, {
                  default: t(() => [
                    e(d, null, {
                      default: t(() => [
                        e(a, null, {
                          default: t(() => l[63] || (l[63] = [o('Slot Name')])),
                          _: 1,
                        }),
                        e(a, null, {
                          default: t(
                            () => l[64] || (l[64] = [o('Description')])
                          ),
                          _: 1,
                        }),
                        e(a, null, {
                          default: t(
                            () => l[65] || (l[65] = [o('Parameters')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                e(f, null, {
                  default: t(() => [
                    e(d, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(() => l[66] || (l[66] = [o('icon')])),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(() => l[67] || (l[67] = [o('Icon')])),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(() => l[68] || (l[68] = [o('-')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    e(d, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () => l[69] || (l[69] = [o('close-icon')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () => l[70] || (l[70] = [o('Close button icon')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(() => l[71] || (l[71] = [o('-')])),
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
const Q = A(H, [['render', J]]);
export { Q as default };
