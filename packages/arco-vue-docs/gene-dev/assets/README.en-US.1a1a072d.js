import {
  _ as k,
  d as I,
  u as $,
  r as f,
  o as z,
  c as V,
  w as n,
  e as d,
  a as t,
  b as u,
  m as E,
} from './index.9c61ea88.js';
import {
  D as F,
  a as R,
  b as W,
  c as G,
  d as H,
  e as L,
  f as U,
  g as j,
  h as q,
} from './actions.124e972b.js';

const b = [
  {
    version: '2.56.2',
    date: '2024-09-13',
    list: [
      {
        type: 'typescript',
        typeText: '\u{1F18E} TypeScript',
        list: [
          `<p>update the types of headerStyle and bodyStyle (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/3268">#3268</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.10.1',
    date: '2021-12-14',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem that the content of slots is not updated (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/380">#380</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const J = I({
  name: 'ArcoMain',
  components: {
    DemoBasic: F,
    DemoHoverable: R,
    DemoBordered: W,
    DemoContent: G,
    DemoMeta: H,
    DemoRow: L,
    DemoGrid: U,
    DemoInner: j,
    DemoActions: q,
  },
  setup() {
    const { locale: s } = $();
    return {
      locale: s,
      data: {
        meta: { type: 'Component', category: 'Data Display' },
        title: 'Card',
        description:
          'Card is generally used as a concise introduction or a large plate and entrance of information.',
      },
      changelog: typeof b === 'undefined' ? void 0 : b,
      getMessage: (m, g) => (s.value === 'zh-CN' ? m : g),
    };
  },
});
function K(s, l, y, D, m, g) {
  const v = f('demo-basic');
  const x = f('demo-hoverable');
  const C = f('demo-bordered');
  const S = f('demo-content');
  const T = f('demo-meta');
  const P = f('demo-row');
  const w = f('demo-grid');
  const A = f('demo-inner');
  const B = f('demo-actions');
  const N = f('anchor-head');
  const r = f('a-th');
  const e = f('a-tr');
  const a = f('a-thead');
  const o = f('a-td');
  const i = f('a-tbody');
  const p = f('a-table');
  const M = f('arco-article');
  return (
    z(),
    V(
      M,
      E(s.data, { changelog: s.changelog }),
      {
        default: n(() => [
          l[89] ||
            (l[89] = d(
              'p',
              null,
              [d('em', null, 'Auto translate by google.')],
              -1
            )),
          t(v),
          t(x),
          t(C),
          t(S),
          t(T),
          t(P),
          t(w),
          t(A),
          t(B),
          t(
            N,
            { level: '2', href: 'API' },
            { default: n(() => l[0] || (l[0] = [u('API')])), _: 1 }
          ),
          l[90] ||
            (l[90] = d(
              'h3',
              { id: 'card Props' },
              [d('code', null, '<card>'), u(' Props')],
              -1
            )),
          t(
            p,
            { class: 'component-api-table' },
            {
              default: n(() => [
                l[37] ||
                  (l[37] = d(
                    'colgroup',
                    null,
                    [d('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(a, null, {
                  default: n(() => [
                    t(e, null, {
                      default: n(() => [
                        t(r, null, {
                          default: n(() => l[1] || (l[1] = [u('Attribute')])),
                          _: 1,
                        }),
                        t(r, null, {
                          default: n(() => l[2] || (l[2] = [u('Description')])),
                          _: 1,
                        }),
                        t(r, null, {
                          default: n(() => l[3] || (l[3] = [u('Type')])),
                          _: 1,
                        }),
                        t(r, null, {
                          default: n(() => l[4] || (l[4] = [u('Default')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(i, null, {
                  default: n(() => [
                    t(e, null, {
                      default: n(() => [
                        t(o, null, {
                          default: n(() => l[5] || (l[5] = [u('bordered')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[6] ||
                              (l[6] = [u('Whether to render the border')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[7] || (l[7] = [d('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () => l[8] || (l[8] = [d('code', null, 'true', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(e, null, {
                      default: n(() => [
                        t(o, null, {
                          default: n(() => l[9] || (l[9] = [u('loading')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () => l[10] || (l[10] = [u('Loading status')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[11] ||
                              (l[11] = [d('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[12] || (l[12] = [d('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(e, null, {
                      default: n(() => [
                        t(o, null, {
                          default: n(() => l[13] || (l[13] = [u('hoverable')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () => l[14] || (l[14] = [u('Can be hovered')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[15] ||
                              (l[15] = [d('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[16] || (l[16] = [d('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(e, null, {
                      default: n(() => [
                        t(o, null, {
                          default: n(() => l[17] || (l[17] = [u('size')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () => l[18] || (l[18] = [u('Size of card')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[19] ||
                              (l[19] = [
                                d('code', null, "'medium' | 'small'", -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[20] ||
                              (l[20] = [d('code', null, "'medium'", -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(e, null, {
                      default: n(() => [
                        t(o, null, {
                          default: n(
                            () => l[21] || (l[21] = [u('header-style')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[22] ||
                              (l[22] = [
                                u(
                                  'The additional css style to apply to card head'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[23] ||
                              (l[23] = [d('code', null, 'CSSProperties', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[24] ||
                              (l[24] = [d('code', null, '() => ({})', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(e, null, {
                      default: n(() => [
                        t(o, null, {
                          default: n(
                            () => l[25] || (l[25] = [u('body-style')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[26] ||
                              (l[26] = [
                                u(
                                  'The additional css style to apply to card content'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[27] ||
                              (l[27] = [d('code', null, 'CSSProperties', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[28] ||
                              (l[28] = [d('code', null, '() => ({})', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(e, null, {
                      default: n(() => [
                        t(o, null, {
                          default: n(() => l[29] || (l[29] = [u('title')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () => l[30] || (l[30] = [u('Title of card')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[31] || (l[31] = [d('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () => l[32] || (l[32] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(e, null, {
                      default: n(() => [
                        t(o, null, {
                          default: n(() => l[33] || (l[33] = [u('extra')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[34] ||
                              (l[34] = [
                                u(
                                  'Content to render in the top-right corner of the card'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[35] || (l[35] = [d('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () => l[36] || (l[36] = [d('code', null, '-', -1)])
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
          l[91] ||
            (l[91] = d(
              'h3',
              { id: 'card Slots' },
              [d('code', null, '<card>'), u(' Slots')],
              -1
            )),
          t(
            p,
            { class: 'component-api-table' },
            {
              default: n(() => [
                l[53] ||
                  (l[53] = d(
                    'colgroup',
                    null,
                    [d('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(a, null, {
                  default: n(() => [
                    t(e, null, {
                      default: n(() => [
                        t(r, null, {
                          default: n(() => l[38] || (l[38] = [u('Slot Name')])),
                          _: 1,
                        }),
                        t(r, null, {
                          default: n(
                            () => l[39] || (l[39] = [u('Description')])
                          ),
                          _: 1,
                        }),
                        t(r, null, {
                          default: n(
                            () => l[40] || (l[40] = [u('Parameters')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(i, null, {
                  default: n(() => [
                    t(e, null, {
                      default: n(() => [
                        t(o, null, {
                          default: n(() => l[41] || (l[41] = [u('actions')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[42] ||
                              (l[42] = [
                                u(
                                  'The action list which shows at the bottom of the Card'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(() => l[43] || (l[43] = [u('-')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(e, null, {
                      default: n(() => [
                        t(o, null, {
                          default: n(() => l[44] || (l[44] = [u('cover')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () => l[45] || (l[45] = [u('Cover of card')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(() => l[46] || (l[46] = [u('-')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(e, null, {
                      default: n(() => [
                        t(o, null, {
                          default: n(() => l[47] || (l[47] = [u('extra')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[48] ||
                              (l[48] = [
                                u(
                                  'Content to render in the top-right corner of the card'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(() => l[49] || (l[49] = [u('-')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(e, null, {
                      default: n(() => [
                        t(o, null, {
                          default: n(() => l[50] || (l[50] = [u('title')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () => l[51] || (l[51] = [u('Title of card')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(() => l[52] || (l[52] = [u('-')])),
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
          l[92] ||
            (l[92] = d(
              'h3',
              { id: 'card-meta Props' },
              [d('code', null, '<card-meta>'), u(' Props')],
              -1
            )),
          t(
            p,
            { class: 'component-api-table' },
            {
              default: n(() => [
                l[66] ||
                  (l[66] = d(
                    'colgroup',
                    null,
                    [d('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(a, null, {
                  default: n(() => [
                    t(e, null, {
                      default: n(() => [
                        t(r, null, {
                          default: n(() => l[54] || (l[54] = [u('Attribute')])),
                          _: 1,
                        }),
                        t(r, null, {
                          default: n(
                            () => l[55] || (l[55] = [u('Description')])
                          ),
                          _: 1,
                        }),
                        t(r, null, {
                          default: n(() => l[56] || (l[56] = [u('Type')])),
                          _: 1,
                        }),
                        t(r, null, {
                          default: n(() => l[57] || (l[57] = [u('Default')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(i, null, {
                  default: n(() => [
                    t(e, null, {
                      default: n(() => [
                        t(o, null, {
                          default: n(() => l[58] || (l[58] = [u('title')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () => l[59] || (l[59] = [u('Title of card')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[60] || (l[60] = [d('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () => l[61] || (l[61] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(e, null, {
                      default: n(() => [
                        t(o, null, {
                          default: n(
                            () => l[62] || (l[62] = [u('description')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () => l[63] || (l[63] = [u('Description of card')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[64] || (l[64] = [d('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () => l[65] || (l[65] = [d('code', null, '-', -1)])
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
          l[93] ||
            (l[93] = d(
              'h3',
              { id: 'card-meta Slots' },
              [d('code', null, '<card-meta>'), u(' Slots')],
              -1
            )),
          t(
            p,
            { class: 'component-api-table' },
            {
              default: n(() => [
                l[79] ||
                  (l[79] = d(
                    'colgroup',
                    null,
                    [d('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(a, null, {
                  default: n(() => [
                    t(e, null, {
                      default: n(() => [
                        t(r, null, {
                          default: n(() => l[67] || (l[67] = [u('Slot Name')])),
                          _: 1,
                        }),
                        t(r, null, {
                          default: n(
                            () => l[68] || (l[68] = [u('Description')])
                          ),
                          _: 1,
                        }),
                        t(r, null, {
                          default: n(
                            () => l[69] || (l[69] = [u('Parameters')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(i, null, {
                  default: n(() => [
                    t(e, null, {
                      default: n(() => [
                        t(o, null, {
                          default: n(
                            () => l[70] || (l[70] = [u('description')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () => l[71] || (l[71] = [u('Description of card')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(() => l[72] || (l[72] = [u('-')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(e, null, {
                      default: n(() => [
                        t(o, null, {
                          default: n(() => l[73] || (l[73] = [u('title')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () => l[74] || (l[74] = [u('Title of card')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(() => l[75] || (l[75] = [u('-')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(e, null, {
                      default: n(() => [
                        t(o, null, {
                          default: n(() => l[76] || (l[76] = [u('avatar')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () => l[77] || (l[77] = [u('Avatar of card')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(() => l[78] || (l[78] = [u('-')])),
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
          l[94] ||
            (l[94] = d(
              'h3',
              { id: 'card-grid Props' },
              [d('code', null, '<card-grid>'), u(' Props')],
              -1
            )),
          t(
            p,
            { class: 'component-api-table' },
            {
              default: n(() => [
                l[88] ||
                  (l[88] = d(
                    'colgroup',
                    null,
                    [d('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(a, null, {
                  default: n(() => [
                    t(e, null, {
                      default: n(() => [
                        t(r, null, {
                          default: n(() => l[80] || (l[80] = [u('Attribute')])),
                          _: 1,
                        }),
                        t(r, null, {
                          default: n(
                            () => l[81] || (l[81] = [u('Description')])
                          ),
                          _: 1,
                        }),
                        t(r, null, {
                          default: n(() => l[82] || (l[82] = [u('Type')])),
                          _: 1,
                        }),
                        t(r, null, {
                          default: n(() => l[83] || (l[83] = [u('Default')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(i, null, {
                  default: n(() => [
                    t(e, null, {
                      default: n(() => [
                        t(o, null, {
                          default: n(() => l[84] || (l[84] = [u('hoverable')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () => l[85] || (l[85] = [u('Whether to hover')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[86] ||
                              (l[86] = [d('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[87] || (l[87] = [d('code', null, 'false', -1)])
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
const X = k(J, [['render', K]]);
export { X as default };
