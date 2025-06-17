import {
  _ as A,
  d as N,
  u as R,
  r as s,
  o as z,
  c as E,
  w as u,
  e,
  a as t,
  b as n,
  m as M,
} from './index.9c61ea88.js';
import {
  D as I,
  a as $,
  b as F,
  c as U,
  d as V,
  e as J,
  f as j,
} from './ellipsis.0620f6b3.js';

const v = [
  {
    version: '2.36.0',
    date: '2022-09-02',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>Add customUrl property (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1594">#1594</a>)</p>
`,
          `<p>suport separator prop (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1500">#1500</a>)</p>
`,
          `<p>suport routes prop (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1500">#1500</a>)</p>
`,
          `<p>suport more-icon slot (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1500">#1500</a>)</p>
`,
          `<p>suport droplist prop  and slot (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1500">#1500</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.18.0',
    date: '2022-03-04',
    list: [
      {
        type: 'enhancement',
        typeText: '\u{1F48E} Enhancement',
        list: [
          `<p>Use Context to optimize components (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/774">#774</a>)</p>
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
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem of <code>breadcrumb-item</code> not inheriting Attribute (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/137">#137</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const q = N({
  name: 'ArcoMain',
  components: {
    DemoBasic: I,
    DemoSeparator: $,
    DemoSize: F,
    DemoIcon: U,
    DemoRoutes: V,
    DemoDropdown: J,
    DemoEllipsis: j,
  },
  setup() {
    const { locale: i } = R();
    return {
      locale: i,
      data: {
        meta: { type: 'Component', category: 'Navigation' },
        title: 'Breadcrumb',
        description:
          'Breadcrumb is an auxiliary navigation mode used to identify the position of the page within the hierarchy and return upwards as needed.',
      },
      changelog: typeof v === 'undefined' ? void 0 : v,
      getMessage: (m, b) => (i.value === 'zh-CN' ? m : b),
    };
  },
});
function G(i, l, y, D, m, b) {
  const x = s('demo-basic');
  const w = s('demo-separator');
  const B = s('demo-size');
  const k = s('demo-icon');
  const C = s('demo-routes');
  const P = s('demo-dropdown');
  const S = s('demo-ellipsis');
  const g = s('anchor-head');
  const d = s('a-th');
  const r = s('a-tr');
  const p = s('a-thead');
  const o = s('a-td');
  const f = s('a-tbody');
  const a = s('a-table');
  const T = s('arco-article');
  return (
    z(),
    E(
      T,
      M(i.data, { changelog: i.changelog }),
      {
        default: u(() => [
          l[94] ||
            (l[94] = e(
              'p',
              null,
              [e('em', null, 'Auto translate by google.')],
              -1
            )),
          t(x),
          t(w),
          t(B),
          t(k),
          t(C),
          t(P),
          t(S),
          t(
            g,
            { level: '2', href: 'API' },
            { default: u(() => l[0] || (l[0] = [n('API')])), _: 1 }
          ),
          l[95] ||
            (l[95] = e(
              'h3',
              { id: 'breadcrumb Props' },
              [e('code', null, '<breadcrumb>'), n(' Props')],
              -1
            )),
          t(
            a,
            { class: 'component-api-table' },
            {
              default: u(() => [
                l[25] ||
                  (l[25] = e(
                    'colgroup',
                    null,
                    [e('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(p, null, {
                  default: u(() => [
                    t(r, null, {
                      default: u(() => [
                        t(d, null, {
                          default: u(() => l[1] || (l[1] = [n('Attribute')])),
                          _: 1,
                        }),
                        t(d, null, {
                          default: u(() => l[2] || (l[2] = [n('Description')])),
                          _: 1,
                        }),
                        t(d, null, {
                          default: u(() => l[3] || (l[3] = [n('Type')])),
                          _: 1,
                        }),
                        t(d, null, {
                          default: u(() => l[4] || (l[4] = [n('Default')])),
                          _: 1,
                        }),
                        t(d, null, {
                          default: u(() => l[5] || (l[5] = [n('version')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(f, null, {
                  default: u(() => [
                    t(r, null, {
                      default: u(() => [
                        t(o, null, {
                          default: u(() => l[6] || (l[6] = [n('max-count')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[7] ||
                              (l[7] = [
                                n(
                                  'Maximum number of breadcrumbs displayed (0 means no limit)'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[8] || (l[8] = [e('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () => l[9] || (l[9] = [e('code', null, '0', -1)])
                          ),
                          _: 1,
                        }),
                        t(o),
                      ]),
                      _: 1,
                    }),
                    t(r, null, {
                      default: u(() => [
                        t(o, null, {
                          default: u(() => l[10] || (l[10] = [n('routes')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () => l[11] || (l[11] = [n('Set routes')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[12] ||
                              (l[12] = [
                                e('code', null, 'BreadcrumbRoute[]', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () => l[13] || (l[13] = [e('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(() => l[14] || (l[14] = [n('2.36.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(r, null, {
                      default: u(() => [
                        t(o, null, {
                          default: u(() => l[15] || (l[15] = [n('separator')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () => l[16] || (l[16] = [n('Delimiter text')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[17] ||
                              (l[17] = [e('code', null, 'string|number', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () => l[18] || (l[18] = [e('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(() => l[19] || (l[19] = [n('2.36.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(r, null, {
                      default: u(() => [
                        t(o, null, {
                          default: u(
                            () => l[20] || (l[20] = [n('custom-url')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () => l[21] || (l[21] = [n('Custom link address')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[22] ||
                              (l[22] = [
                                e(
                                  'code',
                                  null,
                                  '(paths: string[]) => string',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () => l[23] || (l[23] = [e('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(() => l[24] || (l[24] = [n('2.36.0')])),
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
          l[96] ||
            (l[96] = e(
              'h3',
              { id: 'breadcrumb Slots' },
              [e('code', null, '<breadcrumb>'), n(' Slots')],
              -1
            )),
          t(
            a,
            { class: 'component-api-table' },
            {
              default: u(() => [
                l[41] ||
                  (l[41] = e(
                    'colgroup',
                    null,
                    [e('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(p, null, {
                  default: u(() => [
                    t(r, null, {
                      default: u(() => [
                        t(d, null, {
                          default: u(() => l[26] || (l[26] = [n('Slot Name')])),
                          _: 1,
                        }),
                        t(d, null, {
                          default: u(
                            () => l[27] || (l[27] = [n('Description')])
                          ),
                          _: 1,
                        }),
                        t(d, null, {
                          default: u(
                            () => l[28] || (l[28] = [n('Parameters')])
                          ),
                          _: 1,
                        }),
                        t(d, null, {
                          default: u(() => l[29] || (l[29] = [n('version')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(f, null, {
                  default: u(() => [
                    t(r, null, {
                      default: u(() => [
                        t(o, null, {
                          default: u(() => l[30] || (l[30] = [n('more-icon')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () => l[31] || (l[31] = [n('Custom more icon')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(() => l[32] || (l[32] = [n('-')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(() => l[33] || (l[33] = [n('2.36.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(r, null, {
                      default: u(() => [
                        t(o, null, {
                          default: u(
                            () => l[34] || (l[34] = [n('item-render')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[35] ||
                              (l[35] = [
                                n(
                                  'Effective when setting routes, custom render breadcrumbs'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[36] ||
                              (l[36] = [
                                n('route: '),
                                e('code', null, 'BreadcrumbRoute', -1),
                                e('br', null, null, -1),
                                n('routes: '),
                                e('code', null, 'BreadcrumbRoute[]', -1),
                                e('br', null, null, -1),
                                n('paths: '),
                                e('code', null, 'string[]', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(() => l[37] || (l[37] = [n('2.36.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(r, null, {
                      default: u(() => [
                        t(o, null, {
                          default: u(() => l[38] || (l[38] = [n('separator')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () => l[39] || (l[39] = [n('Custom separator')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(() => l[40] || (l[40] = [n('-')])),
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
          l[97] ||
            (l[97] = e(
              'h3',
              { id: 'breadcrumb-item Props' },
              [e('code', null, '<breadcrumb-item>'), n(' Props')],
              -1
            )),
          t(
            a,
            { class: 'component-api-table' },
            {
              default: u(() => [
                l[62] ||
                  (l[62] = e(
                    'colgroup',
                    null,
                    [e('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(p, null, {
                  default: u(() => [
                    t(r, null, {
                      default: u(() => [
                        t(d, null, {
                          default: u(() => l[42] || (l[42] = [n('Attribute')])),
                          _: 1,
                        }),
                        t(d, null, {
                          default: u(
                            () => l[43] || (l[43] = [n('Description')])
                          ),
                          _: 1,
                        }),
                        t(d, null, {
                          default: u(() => l[44] || (l[44] = [n('Type')])),
                          _: 1,
                        }),
                        t(d, null, {
                          default: u(() => l[45] || (l[45] = [n('Default')])),
                          _: 1,
                        }),
                        t(d, null, {
                          default: u(() => l[46] || (l[46] = [n('version')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(f, null, {
                  default: u(() => [
                    t(r, null, {
                      default: u(() => [
                        t(o, null, {
                          default: u(() => l[47] || (l[47] = [n('separator')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () => l[48] || (l[48] = [n('Delimiter text')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[49] ||
                              (l[49] = [e('code', null, 'string|number', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () => l[50] || (l[50] = [e('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(() => l[51] || (l[51] = [n('2.36.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(r, null, {
                      default: u(() => [
                        t(o, null, {
                          default: u(() => l[52] || (l[52] = [n('droplist')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () => l[53] || (l[53] = [n('Dropdown content')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[54] ||
                              (l[54] = [
                                e(
                                  'code',
                                  null,
                                  "BreadcrumbRoute['children']",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () => l[55] || (l[55] = [e('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(() => l[56] || (l[56] = [n('2.36.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(r, null, {
                      default: u(() => [
                        t(o, null, {
                          default: u(
                            () => l[57] || (l[57] = [n('dropdown-props')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () => l[58] || (l[58] = [n('Dropdown props')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[59] ||
                              (l[59] = [e('code', null, 'DropDownProps', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () => l[60] || (l[60] = [e('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(() => l[61] || (l[61] = [n('2.36.0')])),
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
          l[98] ||
            (l[98] = e(
              'h3',
              { id: 'breadcrumb-item Slots' },
              [e('code', null, '<breadcrumb-item>'), n(' Slots')],
              -1
            )),
          t(
            a,
            { class: 'component-api-table' },
            {
              default: u(() => [
                l[75] ||
                  (l[75] = e(
                    'colgroup',
                    null,
                    [e('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(p, null, {
                  default: u(() => [
                    t(r, null, {
                      default: u(() => [
                        t(d, null, {
                          default: u(() => l[63] || (l[63] = [n('Slot Name')])),
                          _: 1,
                        }),
                        t(d, null, {
                          default: u(
                            () => l[64] || (l[64] = [n('Description')])
                          ),
                          _: 1,
                        }),
                        t(d, null, {
                          default: u(
                            () => l[65] || (l[65] = [n('Parameters')])
                          ),
                          _: 1,
                        }),
                        t(d, null, {
                          default: u(() => l[66] || (l[66] = [n('version')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(f, null, {
                  default: u(() => [
                    t(r, null, {
                      default: u(() => [
                        t(o, null, {
                          default: u(() => l[67] || (l[67] = [n('droplist')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () => l[68] || (l[68] = [n('Custom droplist')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(() => l[69] || (l[69] = [n('-')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(() => l[70] || (l[70] = [n('2.36.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(r, null, {
                      default: u(() => [
                        t(o, null, {
                          default: u(() => l[71] || (l[71] = [n('separator')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () => l[72] || (l[72] = [n('Custom separator')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(() => l[73] || (l[73] = [n('-')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(() => l[74] || (l[74] = [n('2.36.0')])),
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
          l[99] ||
            (l[99] = e('h3', { id: 'BreadcrumbRoute' }, 'BreadcrumbRoute', -1)),
          t(
            a,
            { class: 'component-api-table' },
            {
              default: u(() => [
                l[92] ||
                  (l[92] = e(
                    'colgroup',
                    null,
                    [e('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(p, null, {
                  default: u(() => [
                    t(r, null, {
                      default: u(() => [
                        t(d, null, {
                          default: u(() => l[76] || (l[76] = [n('Name')])),
                          _: 1,
                        }),
                        t(d, null, {
                          default: u(
                            () => l[77] || (l[77] = [n('Description')])
                          ),
                          _: 1,
                        }),
                        t(d, null, {
                          default: u(() => l[78] || (l[78] = [n('Type')])),
                          _: 1,
                        }),
                        t(d, null, {
                          default: u(() => l[79] || (l[79] = [n('Default')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(f, null, {
                  default: u(() => [
                    t(r, null, {
                      default: u(() => [
                        t(o, null, {
                          default: u(() => l[80] || (l[80] = [n('label')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () => l[81] || (l[81] = [n('Breadcrumb name')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[82] || (l[82] = [e('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () => l[83] || (l[83] = [e('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(r, null, {
                      default: u(() => [
                        t(o, null, {
                          default: u(() => l[84] || (l[84] = [n('path')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[85] ||
                              (l[85] = [
                                n('Jump path ('),
                                e('code', null, 'a', -1),
                                n(' tag '),
                                e('code', null, 'href', -1),
                                n(' value)'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[86] || (l[86] = [e('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () => l[87] || (l[87] = [e('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(r, null, {
                      default: u(() => [
                        t(o, null, {
                          default: u(() => l[88] || (l[88] = [n('children')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () => l[89] || (l[89] = [n('Dropdown menu items')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[90] ||
                              (l[90] = [
                                e(
                                  'code',
                                  null,
                                  '{ label: string; path: string; }[]',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () => l[91] || (l[91] = [e('code', null, '-', -1)])
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
          t(
            g,
            { level: '2', href: 'Tips' },
            { default: u(() => l[93] || (l[93] = [n('Tips')])), _: 1 }
          ),
          l[100] ||
            (l[100] = e(
              'p',
              null,
              'The custom slot with the same name takes precedence over the attribute.',
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
const L = A(q, [['render', G]]);
export { L as default };
