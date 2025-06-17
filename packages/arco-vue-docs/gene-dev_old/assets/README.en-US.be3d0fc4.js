import {
  _ as k,
  d as w,
  u as A,
  r as s,
  o as E,
  c as N,
  w as t,
  e as u,
  a as n,
  b as e,
  m as P,
} from './index.9c61ea88.js';
import { D as T } from './basic.c540cd1d.js';

const y = [
  {
    version: '2.56.2',
    date: '2024-09-13',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>fix  modes not taking effect (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/3281">#3281</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  { version: '2.53.3', date: '2023-11-24', list: [], extra: [] },
  {
    version: '2.53.0',
    date: '2023-11-03',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>Added <code>header</code> and <code>default</code> slots (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2674">#2674</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.44.2',
    date: '2023-03-17',
    list: [
      {
        type: 'style',
        typeText: '\u{1F485} Style',
        list: [
          `<p>fix some style problems (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2239">#2239</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.44.1',
    date: '2023-03-10',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p><strong>calendar:</strong> fix the wrong import path problem</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.44.0',
    date: '2023-03-10',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>New calendar component (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2217">#2217</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const B = w({
  name: 'ArcoMain',
  components: { DemoBasic: T },
  setup() {
    const { locale: r } = A();
    return {
      locale: r,
      data: {
        meta: { type: 'Component', category: 'Display' },
        title: 'Calendar',
        description: 'Calendar Component.',
      },
      changelog: typeof y === 'undefined' ? void 0 : y,
      getMessage: (m, g) => (r.value === 'zh-CN' ? m : g),
    };
  },
});
function M(r, l, b, v, m, g) {
  const x = s('demo-basic');
  const D = s('anchor-head');
  const a = s('a-th');
  const d = s('a-tr');
  const f = s('a-thead');
  const o = s('a-td');
  const i = s('a-tbody');
  const p = s('a-table');
  const C = s('arco-article');
  return (
    E(),
    N(
      C,
      P(r.data, { changelog: r.changelog }),
      {
        default: t(() => [
          l[49] ||
            (l[49] = u(
              'p',
              null,
              [u('em', null, 'Auto translate by google.')],
              -1
            )),
          n(x),
          n(
            D,
            { level: '2', href: 'API' },
            { default: t(() => l[0] || (l[0] = [e('API')])), _: 1 }
          ),
          l[50] ||
            (l[50] = u(
              'h3',
              { id: 'calendar Props' },
              [u('code', null, '<calendar>'), e(' Props')],
              -1
            )),
          n(
            p,
            { class: 'component-api-table' },
            {
              default: t(() => [
                l[25] ||
                  (l[25] = u(
                    'colgroup',
                    null,
                    [u('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                n(f, null, {
                  default: t(() => [
                    n(d, null, {
                      default: t(() => [
                        n(a, null, {
                          default: t(() => l[1] || (l[1] = [e('Attribute')])),
                          _: 1,
                        }),
                        n(a, null, {
                          default: t(() => l[2] || (l[2] = [e('Description')])),
                          _: 1,
                        }),
                        n(a, null, {
                          default: t(() => l[3] || (l[3] = [e('Type')])),
                          _: 1,
                        }),
                        n(a, null, {
                          default: t(() => l[4] || (l[4] = [e('Default')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                n(i, null, {
                  default: t(() => [
                    n(d, null, {
                      default: t(() => [
                        n(o, null, {
                          default: t(
                            () =>
                              l[5] ||
                              (l[5] = [
                                e('model-value '),
                                u('strong', null, '(v-model)', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(() => l[6] || (l[6] = [e('Value')])),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () => l[7] || (l[7] = [u('code', null, 'date', -1)])
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
                    n(d, null, {
                      default: t(() => [
                        n(o, null, {
                          default: t(
                            () => l[9] || (l[9] = [e('default-value')])
                          ),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () =>
                              l[10] ||
                              (l[10] = [
                                e('Default value (uncontrolled state)'),
                              ])
                          ),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () =>
                              l[11] || (l[11] = [u('code', null, 'date', -1)])
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
                    n(d, null, {
                      default: t(() => [
                        n(o, null, {
                          default: t(() => l[13] || (l[13] = [e('mode')])),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(() => l[14] || (l[14] = [e('Mode')])),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () =>
                              l[15] ||
                              (l[15] = [
                                u('code', null, "'month' | 'year'", -1),
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
                    n(d, null, {
                      default: t(() => [
                        n(o, null, {
                          default: t(
                            () => l[17] || (l[17] = [e('default-mode')])
                          ),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () => l[18] || (l[18] = [e('Default Mode')])
                          ),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () =>
                              l[19] ||
                              (l[19] = [
                                u('code', null, "'month' | 'year'", -1),
                              ])
                          ),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () =>
                              l[20] ||
                              (l[20] = [u('code', null, "'month'", -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    n(d, null, {
                      default: t(() => [
                        n(o, null, {
                          default: t(() => l[21] || (l[21] = [e('modes')])),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () => l[22] || (l[22] = [e('Displayed mode')])
                          ),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () =>
                              l[23] ||
                              (l[23] = [
                                u('code', null, "('month' | 'year')[]", -1),
                              ])
                          ),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () =>
                              l[24] ||
                              (l[24] = [
                                u('code', null, "['month', 'year']", -1),
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
          l[51] ||
            (l[51] = u(
              'h3',
              { id: 'calendar Events' },
              [u('code', null, '<calendar>'), e(' Events')],
              -1
            )),
          n(
            p,
            { class: 'component-api-table' },
            {
              default: t(() => [
                l[35] ||
                  (l[35] = u(
                    'colgroup',
                    null,
                    [u('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                n(f, null, {
                  default: t(() => [
                    n(d, null, {
                      default: t(() => [
                        n(a, null, {
                          default: t(
                            () => l[26] || (l[26] = [e('Event Name')])
                          ),
                          _: 1,
                        }),
                        n(a, null, {
                          default: t(
                            () => l[27] || (l[27] = [e('Description')])
                          ),
                          _: 1,
                        }),
                        n(a, null, {
                          default: t(
                            () => l[28] || (l[28] = [e('Parameters')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                n(i, null, {
                  default: t(() => [
                    n(d, null, {
                      default: t(() => [
                        n(o, null, {
                          default: t(() => l[29] || (l[29] = [e('change')])),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () =>
                              l[30] ||
                              (l[30] = [
                                e('Emitted when the button is clicked'),
                              ])
                          ),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () =>
                              l[31] ||
                              (l[31] = [
                                e('date: '),
                                u('code', null, 'Date', -1),
                              ])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    n(d, null, {
                      default: t(() => [
                        n(o, null, {
                          default: t(
                            () => l[32] || (l[32] = [e('panel-change')])
                          ),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () =>
                              l[33] ||
                              (l[33] = [
                                e('Emitted when the button is clicked'),
                              ])
                          ),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () =>
                              l[34] ||
                              (l[34] = [
                                e('date: '),
                                u('code', null, 'Date', -1),
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
          l[52] ||
            (l[52] = u(
              'h3',
              { id: 'calendar Slots' },
              [u('code', null, '<calendar>'), e(' Slots')],
              -1
            )),
          n(
            p,
            { class: 'component-api-table' },
            {
              default: t(() => [
                l[48] ||
                  (l[48] = u(
                    'colgroup',
                    null,
                    [u('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                n(f, null, {
                  default: t(() => [
                    n(d, null, {
                      default: t(() => [
                        n(a, null, {
                          default: t(() => l[36] || (l[36] = [e('Slot Name')])),
                          _: 1,
                        }),
                        n(a, null, {
                          default: t(
                            () => l[37] || (l[37] = [e('Description')])
                          ),
                          _: 1,
                        }),
                        n(a, null, {
                          default: t(
                            () => l[38] || (l[38] = [e('Parameters')])
                          ),
                          _: 1,
                        }),
                        n(a, null, {
                          default: t(() => l[39] || (l[39] = [e('version')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                n(i, null, {
                  default: t(() => [
                    n(d, null, {
                      default: t(() => [
                        n(o, null, {
                          default: t(() => l[40] || (l[40] = [e('header')])),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () =>
                              l[41] || (l[41] = [e('Custom header content')])
                          ),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () =>
                              l[42] ||
                              (l[42] = [
                                e('year: '),
                                u('code', null, 'number', -1),
                                u('br', null, null, -1),
                                e('month: '),
                                u('code', null, 'number', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(() => l[43] || (l[43] = [e('2.53.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    n(d, null, {
                      default: t(() => [
                        n(o, null, {
                          default: t(() => l[44] || (l[44] = [e('default')])),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () => l[45] || (l[45] = [e('Custom cell content')])
                          ),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(
                            () =>
                              l[46] ||
                              (l[46] = [
                                e('year: '),
                                u('code', null, 'number', -1),
                                u('br', null, null, -1),
                                e('month: '),
                                u('code', null, 'number', -1),
                                u('br', null, null, -1),
                                e('date: '),
                                u('code', null, 'number', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        n(o, null, {
                          default: t(() => l[47] || (l[47] = [e('2.53.0')])),
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
const V = k(B, [['render', M]]);
export { V as default };
