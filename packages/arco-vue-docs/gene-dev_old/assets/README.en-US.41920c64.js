import {
  _ as z,
  d as T,
  u as w,
  r as s,
  o as D,
  c as P,
  w as e,
  e as u,
  a as t,
  b as n,
  m as S,
} from './index.9c61ea88.js';
import { D as B, a as M, b as I } from './rtl.b86a56c5.js';

const b = [
  {
    version: '2.48.0',
    date: '2023-06-30',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>Add <code>exchangeTime</code> property (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2529">#2529</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.47.0',
    date: '2023-06-02',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>empty slots add component attribute (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2448">#2448</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.28.0',
    date: '2022-05-20',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>Added <code>empty</code> and <code>loading</code> slots (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1180">#1180</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.25.1',
    date: '2022-04-27',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem that the setting of the size attribute is invalid in some components (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1051">#1051</a>)</p>
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
          `<p>Add updateAtScroll property (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1015">#1015</a>)</p>
`,
          `<p>add property <code>global</code> (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/933">#933</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.14.1',
    date: '2022-01-08',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem of loading styles on demand (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/526">#526</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.14.0',
    date: '2022-01-07',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>Add <code>size</code> prop (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/513">#513</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const N = T({
  name: 'ArcoMain',
  components: { DemoBasic: B, DemoEmpty: M, DemoRtl: I },
  setup() {
    const { locale: i } = w();
    return {
      locale: i,
      data: {
        meta: { type: 'Component', category: 'Common' },
        title: 'ConfigProvider',
        description:
          'Configure in the outermost layer of the application, set once, and take effect globally. Generally used to set functions such as internationalized languages.',
      },
      changelog: typeof b === 'undefined' ? void 0 : b,
      getMessage: (r, p) => (i.value === 'zh-CN' ? r : p),
    };
  },
});
function V(i, l, v, x, r, p) {
  const C = s('demo-basic');
  const A = s('demo-empty');
  const k = s('demo-rtl');
  const f = s('anchor-head');
  const a = s('a-th');
  const d = s('a-tr');
  const m = s('a-thead');
  const o = s('a-td');
  const g = s('a-tbody');
  const y = s('a-table');
  const F = s('arco-article');
  return (
    D(),
    P(
      F,
      S(i.data, { changelog: i.changelog }),
      {
        default: e(() => [
          l[53] ||
            (l[53] = u(
              'p',
              null,
              [u('em', null, 'Auto translate by google.')],
              -1
            )),
          t(C),
          t(A),
          t(k),
          t(
            f,
            { level: '2', href: 'API' },
            { default: e(() => l[0] || (l[0] = [n('API')])), _: 1 }
          ),
          l[54] ||
            (l[54] = u(
              'h3',
              { id: 'config-provider Props' },
              [u('code', null, '<config-provider>'), n(' Props')],
              -1
            )),
          t(
            y,
            { class: 'component-api-table' },
            {
              default: e(() => [
                l[38] ||
                  (l[38] = u(
                    'colgroup',
                    null,
                    [u('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(m, null, {
                  default: e(() => [
                    t(d, null, {
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
                        t(a, null, {
                          default: e(() => l[5] || (l[5] = [n('version')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(g, null, {
                  default: e(() => [
                    t(d, null, {
                      default: e(() => [
                        t(o, null, {
                          default: e(() => l[6] || (l[6] = [n('prefix-cls')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[7] || (l[7] = [n('Component classname prefix')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[8] || (l[8] = [u('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () => l[9] || (l[9] = [u('code', null, "'a'", -1)])
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
                          default: e(() => l[10] || (l[10] = [n('locale')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[11] || (l[11] = [n('Configure language pack')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[12] ||
                              (l[12] = [u('code', null, 'GeneLang', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () => l[13] || (l[13] = [u('code', null, '-', -1)])
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
                          default: e(() => l[14] || (l[14] = [n('size')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(() => l[15] || (l[15] = [n('Size')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[16] || (l[16] = [u('code', null, 'Size', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () => l[17] || (l[17] = [u('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(() => l[18] || (l[18] = [n('2.14.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(o, null, {
                          default: e(() => l[19] || (l[19] = [n('global')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () => l[20] || (l[20] = [n('Is global effect')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[21] ||
                              (l[21] = [u('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[22] || (l[22] = [u('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(() => l[23] || (l[23] = [n('2.25.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(o, null, {
                          default: e(
                            () => l[24] || (l[24] = [n('scroll-to-close')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[25] ||
                              (l[25] = [
                                n(
                                  'Whether to close the popover when scrolling'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[26] ||
                              (l[26] = [u('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[27] || (l[27] = [u('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(() => l[28] || (l[28] = [n('2.46.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(o, null, {
                          default: e(
                            () => l[29] || (l[29] = [n('exchange-time')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[30] || (l[30] = [n('Whether to exchange time')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[31] ||
                              (l[31] = [u('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[32] || (l[32] = [u('code', null, 'true', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(() => l[33] || (l[33] = [n('2.48.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(o, null, {
                          default: e(() => l[34] || (l[34] = [n('rtl')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[35] ||
                              (l[35] = [
                                n(
                                  'View starts from the right and ends on the left'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[36] ||
                              (l[36] = [u('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[37] || (l[37] = [u('code', null, 'false', -1)])
                          ),
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
          l[55] ||
            (l[55] = u(
              'h3',
              { id: 'config-provider Slots' },
              [u('code', null, '<config-provider>'), n(' Slots')],
              -1
            )),
          t(
            y,
            { class: 'component-api-table' },
            {
              default: e(() => [
                l[51] ||
                  (l[51] = u(
                    'colgroup',
                    null,
                    [u('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(m, null, {
                  default: e(() => [
                    t(d, null, {
                      default: e(() => [
                        t(a, null, {
                          default: e(() => l[39] || (l[39] = [n('Slot Name')])),
                          _: 1,
                        }),
                        t(a, null, {
                          default: e(
                            () => l[40] || (l[40] = [n('Description')])
                          ),
                          _: 1,
                        }),
                        t(a, null, {
                          default: e(
                            () => l[41] || (l[41] = [n('Parameters')])
                          ),
                          _: 1,
                        }),
                        t(a, null, {
                          default: e(() => l[42] || (l[42] = [n('version')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(g, null, {
                  default: e(() => [
                    t(d, null, {
                      default: e(() => [
                        t(o, null, {
                          default: e(() => l[43] || (l[43] = [n('loading')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[44] || (l[44] = [n('Custom loading element')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(() => l[45] || (l[45] = [n('-')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(() => l[46] || (l[46] = [n('2.28.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(o, null, {
                          default: e(() => l[47] || (l[47] = [n('empty')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () => l[48] || (l[48] = [n('Custom empty element')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[49] ||
                              (l[49] = [
                                n('component: '),
                                u('code', null, 'string', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(() => l[50] || (l[50] = [n('2.28.0')])),
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
            f,
            { level: '2', href: 'FAQ' },
            { default: e(() => l[52] || (l[52] = [n('FAQ')])), _: 1 }
          ),
          l[56] ||
            (l[56] = u('h3', { id: 'Global Config' }, 'Global Config', -1)),
          l[57] ||
            (l[57] = u(
              'p',
              null,
              [
                n('When the '),
                u('code', null, 'global'),
                n(' property is set to '),
                u('code', null, 'true'),
                n(
                  ', the configuration content will be injected into the Vue AppContext, which is generally used to solve the problem that the configuration content cannot take effect when the functional call method of the Modal and Message components is used.'
                ),
              ],
              -1
            )),
          l[58] ||
            (l[58] = u(
              'h3',
              { id: 'Customize empty state display' },
              'Customize empty state display',
              -1
            )),
          l[59] ||
            (l[59] = u(
              'p',
              null,
              [
                n(
                  'You can customize the display of the global empty state of the component library in '
                ),
                u('code', null, '#empty'),
                n('. If the '),
                u('code', null, 'Empty'),
                n(' component is used in the slot, you need to enable the '),
                u('code', null, 'inConfigProvider'),
                n(' property.'),
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
const $ = z(N, [['render', V]]);
export { $ as default };
