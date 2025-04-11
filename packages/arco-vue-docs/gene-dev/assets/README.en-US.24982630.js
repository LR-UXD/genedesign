import {
  _ as A,
  d as P,
  u as E,
  r as a,
  o as M,
  c as N,
  w as e,
  e as o,
  a as t,
  b as n,
  m as T,
} from './index.9c61ea88.js';
import { D as k, a as C } from './from.4e8bda5f.js';

const v = [
  {
    version: '2.37.3',
    date: '2022-09-23',
    list: [
      {
        type: 'enhancement',
        typeText: '\u{1F48E} Enhancement',
        list: [
          `<p>overflow quantity changes event (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1287">#1287</a>)</p>
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
          `<p>Added <code>OverflowList</code> component (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1634">#1634</a>)</p>
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
          `<p>Added <code>OverflowList</code> component (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1221">#1221</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const B = P({
  name: 'ArcoMain',
  components: { DemoBasic: k, DemoFrom: C },
  setup() {
    const { locale: r } = E();
    return {
      locale: r,
      data: {
        meta: { type: 'Component', category: 'Data Display' },
        title: 'List',
        description: null,
      },
      changelog: typeof v === 'undefined' ? void 0 : v,
      getMessage: (m, g) => (r.value === 'zh-CN' ? m : g),
    };
  },
});
function F(r, l, b, y, m, g) {
  const w = a('demo-basic');
  const _ = a('demo-from');
  const x = a('anchor-head');
  const d = a('a-th');
  const s = a('a-tr');
  const f = a('a-thead');
  const u = a('a-td');
  const i = a('a-tbody');
  const p = a('a-table');
  const D = a('arco-article');
  return (
    M(),
    N(
      D,
      T(r.data, { changelog: r.changelog }),
      {
        default: e(() => [
          l[32] ||
            (l[32] = o(
              'p',
              null,
              [o('em', null, 'Auto translate by google.')],
              -1
            )),
          t(w),
          t(_),
          t(
            x,
            { level: '2', href: 'API' },
            { default: e(() => l[0] || (l[0] = [n('API')])), _: 1 }
          ),
          l[33] ||
            (l[33] = o(
              'h3',
              { id: 'overflow-list Props' },
              [o('code', null, '<overflow-list>'), n(' Props')],
              -1
            )),
          t(
            p,
            { class: 'component-api-table' },
            {
              default: e(() => [
                l[17] ||
                  (l[17] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(f, null, {
                  default: e(() => [
                    t(s, null, {
                      default: e(() => [
                        t(d, null, {
                          default: e(() => l[1] || (l[1] = [n('Attribute')])),
                          _: 1,
                        }),
                        t(d, null, {
                          default: e(() => l[2] || (l[2] = [n('Description')])),
                          _: 1,
                        }),
                        t(d, null, {
                          default: e(() => l[3] || (l[3] = [n('Type')])),
                          _: 1,
                        }),
                        t(d, null, {
                          default: e(() => l[4] || (l[4] = [n('Default')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(i, null, {
                  default: e(() => [
                    t(s, null, {
                      default: e(() => [
                        t(u, null, {
                          default: e(() => l[5] || (l[5] = [n('min')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[6] ||
                              (l[6] = [
                                n('Minimum number of elements to display'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[7] || (l[7] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () => l[8] || (l[8] = [o('code', null, '0', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: e(() => [
                        t(u, null, {
                          default: e(() => l[9] || (l[9] = [n('margin')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () => l[10] || (l[10] = [n('Item Margin')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[11] || (l[11] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () => l[12] || (l[12] = [o('code', null, '8', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: e(() => [
                        t(u, null, {
                          default: e(() => l[13] || (l[13] = [n('from')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () => l[14] || (l[14] = [n('Overflow From')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[15] ||
                              (l[15] = [o('code', null, "'start' | 'end'", -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[16] || (l[16] = [o('code', null, "'end'", -1)])
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
          l[34] ||
            (l[34] = o(
              'h3',
              { id: 'overflow-list Events' },
              [o('code', null, '<overflow-list>'), n(' Events')],
              -1
            )),
          t(
            p,
            { class: 'component-api-table' },
            {
              default: e(() => [
                l[24] ||
                  (l[24] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(f, null, {
                  default: e(() => [
                    t(s, null, {
                      default: e(() => [
                        t(d, null, {
                          default: e(
                            () => l[18] || (l[18] = [n('Event Name')])
                          ),
                          _: 1,
                        }),
                        t(d, null, {
                          default: e(
                            () => l[19] || (l[19] = [n('Description')])
                          ),
                          _: 1,
                        }),
                        t(d, null, {
                          default: e(
                            () => l[20] || (l[20] = [n('Parameters')])
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
                  default: e(() => [
                    t(s, null, {
                      default: e(() => [
                        t(u, null, {
                          default: e(() => l[21] || (l[21] = [n('change')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[22] ||
                              (l[22] = [
                                n(
                                  'Triggered when the overflow quantity changes'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[23] ||
                              (l[23] = [
                                n('value: '),
                                o('code', null, 'number', -1),
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
          l[35] ||
            (l[35] = o(
              'h3',
              { id: 'overflow-list Slots' },
              [o('code', null, '<overflow-list>'), n(' Slots')],
              -1
            )),
          t(
            p,
            { class: 'component-api-table' },
            {
              default: e(() => [
                l[31] ||
                  (l[31] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(f, null, {
                  default: e(() => [
                    t(s, null, {
                      default: e(() => [
                        t(d, null, {
                          default: e(() => l[25] || (l[25] = [n('Slot Name')])),
                          _: 1,
                        }),
                        t(d, null, {
                          default: e(
                            () => l[26] || (l[26] = [n('Description')])
                          ),
                          _: 1,
                        }),
                        t(d, null, {
                          default: e(
                            () => l[27] || (l[27] = [n('Parameters')])
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
                  default: e(() => [
                    t(s, null, {
                      default: e(() => [
                        t(u, null, {
                          default: e(() => l[28] || (l[28] = [n('overflow')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(() => l[29] || (l[29] = [n('Overflow')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: e(
                            () =>
                              l[30] ||
                              (l[30] = [
                                n('number: '),
                                o('code', null, 'number', -1),
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
        ]),
        _: 1,
      },
      16,
      ['changelog']
    )
  );
}
const S = A(B, [['render', F]]);
export { S as default };
