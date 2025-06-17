import {
  _ as D,
  d as w,
  u as A,
  r as d,
  o as F,
  c as M,
  w as e,
  e as o,
  a as t,
  b as n,
  m as B,
} from './index.9c61ea88.js';
import { D as C, a as E } from './type.f19c84ec.js';

const b = [
  {
    version: '2.42.1',
    date: '2023-02-03',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>fix ts declaration error for emits (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2077">#2077</a>)</p>
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
        typeText: '\u{1F195} Feature',
        list: [
          `<p>Add scrollLeft and scrollTop methods (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1909">#1909</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.37.2',
    date: '2022-09-21',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix styling issues in Firefox (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1655">#1655</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.37.1',
    date: '2022-09-16',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>Add virtual scrollbar component (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1634">#1634</a>)</p>
`,
          `<p>Table, select, list components replace virtual scroll bars (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1634">#1634</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.30.1-beta.1',
    date: '2022-06-10',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>Add virtual scrollbar component (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1098">#1098</a>)</p>
`,
          `<p>Table, select, list components replace virtual scroll bars (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1098">#1098</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const N = w({
  name: 'ArcoMain',
  components: { DemoBasic: C, DemoType: E },
  setup() {
    const { locale: a } = A();
    return {
      locale: a,
      data: {
        meta: { type: 'Component', category: 'Other' },
        title: 'Scrollbar',
        description: 'Used to replace the browser default scroll bar style.',
      },
      changelog: typeof b === 'undefined' ? void 0 : b,
      getMessage: (m, g) => (a.value === 'zh-CN' ? m : g),
    };
  },
});
function P(a, l, y, v, m, g) {
  const x = d('demo-basic');
  const T = d('demo-type');
  const s = d('a-th');
  const r = d('a-tr');
  const i = d('a-thead');
  const u = d('a-td');
  const p = d('a-tbody');
  const f = d('a-table');
  const k = d('arco-article');
  return (
    F(),
    M(
      k,
      B(a.data, { changelog: a.changelog }),
      {
        default: e(() => [
          l[44] ||
            (l[44] = o(
              'p',
              null,
              [o('em', null, 'Auto translate by google.')],
              -1
            )),
          t(x),
          t(T),
          l[45] ||
            (l[45] = o(
              'h3',
              { id: 'scrollbar Props' },
              [o('code', null, '<scrollbar>'), n(' Props')],
              -1
            )),
          t(
            f,
            { class: 'component-api-table' },
            {
              default: e(() => [
                l[16] ||
                  (l[16] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(i, null, {
                  default: e(() => [
                    t(r, null, {
                      default: e(() => [
                        t(s, null, {
                          default: e(() => l[0] || (l[0] = [n('Attribute')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(() => l[1] || (l[1] = [n('Description')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(() => l[2] || (l[2] = [n('Type')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(() => l[3] || (l[3] = [n('Default')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(p, null, {
                  default: e(() => [
                    t(r, null, {
                      default: e(() => [
                        t(u, null, {
                          default: e(() => l[4] || (l[4] = [n('type')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(() => l[5] || (l[5] = [n('Type')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[6] ||
                              (l[6] = [
                                o('code', null, "'track' | 'embed'", -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[7] || (l[7] = [o('code', null, "'embed'", -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(r, null, {
                      default: e(() => [
                        t(u, null, {
                          default: e(() => l[8] || (l[8] = [n('outer-class')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(() => l[9] || (l[9] = [n('Outer class')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[10] ||
                              (l[10] = [
                                o('code', null, 'string|object|array', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () => l[11] || (l[11] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(r, null, {
                      default: e(() => [
                        t(u, null, {
                          default: e(
                            () => l[12] || (l[12] = [n('outer-style')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () => l[13] || (l[13] = [n('Outer style')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[14] ||
                              (l[14] = [o('code', null, 'StyleValue', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () => l[15] || (l[15] = [o('code', null, '-', -1)])
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
          l[46] ||
            (l[46] = o(
              'h3',
              { id: 'scrollbar Events' },
              [o('code', null, '<scrollbar>'), n(' Events')],
              -1
            )),
          t(
            f,
            { class: 'component-api-table' },
            {
              default: e(() => [
                l[23] ||
                  (l[23] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(i, null, {
                  default: e(() => [
                    t(r, null, {
                      default: e(() => [
                        t(s, null, {
                          default: e(
                            () => l[17] || (l[17] = [n('Event Name')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(
                            () => l[18] || (l[18] = [n('Description')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(
                            () => l[19] || (l[19] = [n('Parameters')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(p, null, {
                  default: e(() => [
                    t(r, null, {
                      default: e(() => [
                        t(u, null, {
                          default: e(() => l[20] || (l[20] = [n('scroll')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[21] || (l[21] = [n('Triggered when scroll')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(() => l[22] || (l[22] = [n('-')])),
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
          l[47] ||
            (l[47] = o(
              'h3',
              { id: 'scrollbar Methods' },
              [o('code', null, '<scrollbar>'), n(' Methods')],
              -1
            )),
          t(
            f,
            { class: 'component-api-table' },
            {
              default: e(() => [
                l[43] ||
                  (l[43] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(i, null, {
                  default: e(() => [
                    t(r, null, {
                      default: e(() => [
                        t(s, null, {
                          default: e(() => l[24] || (l[24] = [n('Method')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(
                            () => l[25] || (l[25] = [n('Description')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(
                            () => l[26] || (l[26] = [n('Parameters')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(() => l[27] || (l[27] = [n('Return')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(() => l[28] || (l[28] = [n('version')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(p, null, {
                  default: e(() => [
                    t(r, null, {
                      default: e(() => [
                        t(u, null, {
                          default: e(() => l[29] || (l[29] = [n('scrollTo')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(() => l[30] || (l[30] = [n('scrollTo')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[31] ||
                              (l[31] = [
                                n('options: '),
                                o(
                                  'code',
                                  null,
                                  'number | {left?: number;top?: number}',
                                  -1
                                ),
                                o('br', null, null, -1),
                                n('y: '),
                                o('code', null, 'number', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(() => l[32] || (l[32] = [n('-')])),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(r, null, {
                      default: e(() => [
                        t(u, null, {
                          default: e(() => l[33] || (l[33] = [n('scrollTop')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () => l[34] || (l[34] = [n('scroll vertically')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[35] ||
                              (l[35] = [
                                n('top: '),
                                o('code', null, 'number', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(() => l[36] || (l[36] = [n('-')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(() => l[37] || (l[37] = [n('2.40.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(r, null, {
                      default: e(() => [
                        t(u, null, {
                          default: e(
                            () => l[38] || (l[38] = [n('scrollLeft')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () => l[39] || (l[39] = [n('scroll horizontal')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[40] ||
                              (l[40] = [
                                n('left: '),
                                o('code', null, 'number', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(() => l[41] || (l[41] = [n('-')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(() => l[42] || (l[42] = [n('2.40.0')])),
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
const O = D(N, [['render', P]]);
export { O as default };
