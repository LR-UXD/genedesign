import {
  _ as B,
  d as N,
  u as S,
  r as i,
  o as W,
  c as M,
  w as e,
  e as u,
  a as t,
  b as n,
  m as $,
} from './index.9c61ea88.js';
import {
  D as q,
  a as V,
  b as K,
  c as Q,
  d as j,
  e as z,
  f as H,
  g as L,
  h as O,
} from './destroy.f4b6150c.js';
import './index.2b17769d.js';
import './index.5bc6c633.js';

const b = [
  {
    version: '2.54.6',
    date: '2024-03-01',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>resolve reserved property warning (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2997">#2997</a>)</p>
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
        type: 'typescript',
        typeText: '\u{1F18E} TypeScript',
        list: [
          `<p>Fix key attribute definition of <code>collapse-item</code> to allow number (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1743">#1743</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.37.4',
    date: '2022-09-30',
    list: [
      {
        type: 'style',
        typeText: '\u{1F485} Style',
        list: [
          `<p>adjust the padding of collapse-item-content when expand-icon is on the right (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1680">#1680</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.33.0',
    date: '2022-07-08',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>Supports custom expand icon (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1344">#1344</a>)</p>
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
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>Add destroyOnHide property, the default will not destroy the content when hidden (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1100">#1100</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.26.0',
    date: '2022-04-29',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix <code>showExpandIcon</code> property invalid (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1060">#1060</a>)</p>
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
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>key adds support for number (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/358">#358</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.0.3',
    date: '2021-10-29',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem that the <code>accordion</code> mode cannot be folded</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const R = N({
  name: 'ArcoMain',
  components: {
    DemoBasic: q,
    DemoAccordion: V,
    DemoNested: K,
    DemoBorderLess: Q,
    DemoExtra: j,
    DemoExpandIcon: z,
    DemoCustom: H,
    DemoIconPosition: L,
    DemoDestroy: O,
  },
  setup() {
    const { locale: a } = S();
    return {
      locale: a,
      data: {
        meta: { type: 'Component', category: 'Data Display' },
        title: 'Collapse',
        description: 'The content area that can be collapsed/expanded.',
      },
      changelog: typeof b === 'undefined' ? void 0 : b,
      getMessage: (m, g) => (a.value === 'zh-CN' ? m : g),
    };
  },
});
function U(a, l, x, v, m, g) {
  const w = i('demo-basic');
  const D = i('demo-accordion');
  const T = i('demo-nested');
  const k = i('demo-border-less');
  const C = i('demo-extra');
  const E = i('demo-expand-icon');
  const A = i('demo-custom');
  const F = i('demo-icon-position');
  const I = i('demo-destroy');
  const y = i('anchor-head');
  const s = i('a-th');
  const d = i('a-tr');
  const r = i('a-thead');
  const o = i('a-td');
  const p = i('a-tbody');
  const f = i('a-table');
  const P = i('arco-article');
  return (
    W(),
    M(
      P,
      $(a.data, { changelog: a.changelog }),
      {
        default: e(() => [
          l[83] ||
            (l[83] = u(
              'p',
              null,
              [u('em', null, 'Auto translate by google.')],
              -1
            )),
          t(w),
          t(D),
          t(T),
          t(k),
          t(C),
          t(E),
          t(A),
          t(F),
          t(I),
          t(
            y,
            { level: '2', href: 'API' },
            { default: e(() => l[0] || (l[0] = [n('API')])), _: 1 }
          ),
          l[84] ||
            (l[84] = u(
              'h3',
              { id: 'collapse Props' },
              [u('code', null, '<collapse>'), n(' Props')],
              -1
            )),
          t(
            f,
            { class: 'component-api-table' },
            {
              default: e(() => [
                l[36] ||
                  (l[36] = u(
                    'colgroup',
                    null,
                    [u('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(r, null, {
                  default: e(() => [
                    t(d, null, {
                      default: e(() => [
                        t(s, null, {
                          default: e(() => l[1] || (l[1] = [n('Attribute')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(() => l[2] || (l[2] = [n('Description')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(() => l[3] || (l[3] = [n('Type')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(() => l[4] || (l[4] = [n('Default')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(() => l[5] || (l[5] = [n('version')])),
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
                    t(d, null, {
                      default: e(() => [
                        t(o, null, {
                          default: e(
                            () =>
                              l[6] ||
                              (l[6] = [
                                n('active-key '),
                                u('strong', null, '(v-model)', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[7] ||
                              (l[7] = [
                                n('The '),
                                u('code', null, 'key', -1),
                                n(' of the currently expanded panel'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[8] ||
                              (l[8] = [
                                u('code', null, '(string | number)[]', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () => l[9] || (l[9] = [u('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(o),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(o, null, {
                          default: e(
                            () => l[10] || (l[10] = [n('default-active-key')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[11] ||
                              (l[11] = [
                                n('The '),
                                u('code', null, 'key', -1),
                                n(
                                  ' of the panel expanded by default (uncontrolled mode)'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[12] ||
                              (l[12] = [
                                u('code', null, '(string | number)[]', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () => l[13] || (l[13] = [u('code', null, '[]', -1)])
                          ),
                          _: 1,
                        }),
                        t(o),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(o, null, {
                          default: e(() => l[14] || (l[14] = [n('accordion')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[15] ||
                              (l[15] = [n('Whether to enable accordion mode')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[16] ||
                              (l[16] = [u('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[17] || (l[17] = [u('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(o),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(o, null, {
                          default: e(
                            () => l[18] || (l[18] = [n('show-expand-icon')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[19] ||
                              (l[19] = [n('Whether to show the expand icon')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[20] ||
                              (l[20] = [u('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () => l[21] || (l[21] = [u('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(() => l[22] || (l[22] = [n('2.33.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(o, null, {
                          default: e(
                            () => l[23] || (l[23] = [n('expand-icon-position')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[24] ||
                              (l[24] = [
                                n(
                                  'The location where the expand icon is displayed'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[25] ||
                              (l[25] = [
                                u('code', null, "'left' | 'right'", -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[26] || (l[26] = [u('code', null, "'left'", -1)])
                          ),
                          _: 1,
                        }),
                        t(o),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(o, null, {
                          default: e(() => l[27] || (l[27] = [n('bordered')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[28] ||
                              (l[28] = [n('Whether to show the border')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[29] ||
                              (l[29] = [u('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[30] || (l[30] = [u('code', null, 'true', -1)])
                          ),
                          _: 1,
                        }),
                        t(o),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(o, null, {
                          default: e(
                            () => l[31] || (l[31] = [n('destroy-on-hide')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[32] ||
                              (l[32] = [
                                n('Whether to destroy content when hidden'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[33] ||
                              (l[33] = [u('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[34] || (l[34] = [u('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(() => l[35] || (l[35] = [n('2.27.0')])),
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
          l[85] ||
            (l[85] = u(
              'h3',
              { id: 'collapse Events' },
              [u('code', null, '<collapse>'), n(' Events')],
              -1
            )),
          t(
            f,
            { class: 'component-api-table' },
            {
              default: e(() => [
                l[43] ||
                  (l[43] = u(
                    'colgroup',
                    null,
                    [u('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(r, null, {
                  default: e(() => [
                    t(d, null, {
                      default: e(() => [
                        t(s, null, {
                          default: e(
                            () => l[37] || (l[37] = [n('Event Name')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(
                            () => l[38] || (l[38] = [n('Description')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(
                            () => l[39] || (l[39] = [n('Parameters')])
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
                    t(d, null, {
                      default: e(() => [
                        t(o, null, {
                          default: e(() => l[40] || (l[40] = [n('change')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[41] ||
                              (l[41] = [
                                n('Emitted when the expanded panel changes'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[42] ||
                              (l[42] = [
                                n('activeKey: '),
                                u('code', null, '(string | number)[]', -1),
                                u('br', null, null, -1),
                                n('ev: '),
                                u('code', null, 'Event', -1),
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
          l[86] ||
            (l[86] = u(
              'h3',
              { id: 'collapse-item Props' },
              [u('code', null, '<collapse-item>'), n(' Props')],
              -1
            )),
          t(
            f,
            { class: 'component-api-table' },
            {
              default: e(() => [
                l[66] ||
                  (l[66] = u(
                    'colgroup',
                    null,
                    [u('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(r, null, {
                  default: e(() => [
                    t(d, null, {
                      default: e(() => [
                        t(s, null, {
                          default: e(() => l[44] || (l[44] = [n('Attribute')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(
                            () => l[45] || (l[45] = [n('Description')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(() => l[46] || (l[46] = [n('Type')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(() => l[47] || (l[47] = [n('Default')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(() => l[48] || (l[48] = [n('version')])),
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
                    t(d, null, {
                      default: e(() => [
                        t(o, null, {
                          default: e(() => l[49] || (l[49] = [n('header')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[50] || (l[50] = [n('The title of the panel')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[51] || (l[51] = [u('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () => l[52] || (l[52] = [u('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(o),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(o, null, {
                          default: e(() => l[53] || (l[53] = [n('disabled')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () => l[54] || (l[54] = [n('Whether to disable')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[55] ||
                              (l[55] = [u('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[56] || (l[56] = [u('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(o),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(o, null, {
                          default: e(
                            () => l[57] || (l[57] = [n('show-expand-icon')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[58] ||
                              (l[58] = [n('Whether to show the expand icon')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[59] ||
                              (l[59] = [u('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[60] || (l[60] = [u('code', null, 'true', -1)])
                          ),
                          _: 1,
                        }),
                        t(o),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(o, null, {
                          default: e(
                            () => l[61] || (l[61] = [n('destroy-on-hide')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[62] ||
                              (l[62] = [
                                n('Whether to destroy content when hidden'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[63] ||
                              (l[63] = [u('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[64] || (l[64] = [u('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(() => l[65] || (l[65] = [n('2.27.0')])),
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
          l[87] ||
            (l[87] = u(
              'h3',
              { id: 'collapse-item Slots' },
              [u('code', null, '<collapse-item>'), n(' Slots')],
              -1
            )),
          t(
            f,
            { class: 'component-api-table' },
            {
              default: e(() => [
                l[81] ||
                  (l[81] = u(
                    'colgroup',
                    null,
                    [u('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(r, null, {
                  default: e(() => [
                    t(d, null, {
                      default: e(() => [
                        t(s, null, {
                          default: e(() => l[67] || (l[67] = [n('Slot Name')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(
                            () => l[68] || (l[68] = [n('Description')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(
                            () => l[69] || (l[69] = [n('Parameters')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: e(() => l[70] || (l[70] = [n('version')])),
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
                    t(d, null, {
                      default: e(() => [
                        t(o, null, {
                          default: e(() => l[71] || (l[71] = [n('extra')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () => l[72] || (l[72] = [n('Extra Content')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(() => l[73] || (l[73] = [n('-')])),
                          _: 1,
                        }),
                        t(o),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(o, null, {
                          default: e(
                            () => l[74] || (l[74] = [n('expand-icon')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () => l[75] || (l[75] = [n('Expand icon')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[76] ||
                              (l[76] = [
                                n('active: '),
                                u('code', null, 'boolean', -1),
                                u('br', null, null, -1),
                                n('disabled: '),
                                u('code', null, 'boolean', -1),
                                u('br', null, null, -1),
                                n('position: '),
                                u('code', null, "'left' | 'right'", -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(() => l[77] || (l[77] = [n('2.33.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(o, null, {
                          default: e(() => l[78] || (l[78] = [n('header')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[79] || (l[79] = [n('The title of the panel')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(() => l[80] || (l[80] = [n('-')])),
                          _: 1,
                        }),
                        t(o),
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
          t(
            y,
            { level: '2', href: 'FAQ' },
            { default: e(() => l[82] || (l[82] = [n('FAQ')])), _: 1 }
          ),
          l[88] ||
            (l[88] = u(
              'h3',
              {
                id: 'The key attribute of CollapseItem components is required',
              },
              [
                n('The '),
                u('code', null, 'key'),
                n(' attribute of '),
                u('code', null, '<CollapseItem>'),
                n(' components is required'),
              ],
              -1
            )),
          l[89] ||
            (l[89] = u(
              'p',
              null,
              [
                n('In the '),
                u('code', null, '<Collapse>'),
                n(' component, each '),
                u('code', null, '<CollapseItem>'),
                n(' needs to specify a unique '),
                u('code', null, 'key'),
                n(' attribute, and the '),
                u('code', null, 'key'),
                n(' corresponding to the value in '),
                u('code', null, 'activeKey'),
                n('.'),
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
const Z = B(R, [['render', U]]);
export { Z as default };
