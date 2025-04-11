import {
  _ as D,
  d as y,
  u as x,
  r as s,
  o as A,
  c as B,
  w as t,
  a as u,
  b as n,
  e as o,
  m as k,
} from './index.9c61ea88.js';
import { D as N, a as P } from './from.4e8bda5f.js';

const v = [
  {
    version: '2.37.3',
    date: '2022-09-23',
    list: [
      {
        type: 'enhancement',
        typeText: '\u{1F48E} \u529F\u80FD\u4F18\u5316',
        list: [
          `<p>\u6EA2\u51FA\u6570\u91CF\u6539\u53D8\u4E8B\u4EF6 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1287">#1287</a>)</p>
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
        typeText: '\u{1F195} \u65B0\u589E\u529F\u80FD',
        list: [
          `<p>\u65B0\u589E <code>OverflowList</code> \u7EC4\u4EF6 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1634">#1634</a>)</p>
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
        typeText: '\u{1F195} \u65B0\u589E\u529F\u80FD',
        list: [
          `<p>\u65B0\u589E <code>OverflowList</code> \u7EC4\u4EF6 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1221">#1221</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const M = y({
  name: 'ArcoMain',
  components: { DemoBasic: N, DemoFrom: P },
  setup() {
    const { locale: r } = x();
    return {
      locale: r,
      data: {
        meta: { type: '\u7EC4\u4EF6', category: '\u5176\u4ED6' },
        title: '\u6298\u53E0\u5217\u8868 OverflowList',
        description: null,
      },
      changelog: typeof v === 'undefined' ? void 0 : v,
      getMessage: (m, g) => (r.value === 'zh-CN' ? m : g),
    };
  },
});
function T(r, l, b, E, m, g) {
  const C = s('demo-basic');
  const F = s('demo-from');
  const _ = s('anchor-head');
  const d = s('a-th');
  const a = s('a-tr');
  const f = s('a-thead');
  const e = s('a-td');
  const i = s('a-tbody');
  const p = s('a-table');
  const w = s('arco-article');
  return (
    A(),
    B(
      w,
      k(r.data, { changelog: r.changelog }),
      {
        default: t(() => [
          u(C),
          u(F),
          u(
            _,
            { level: '2', href: 'API' },
            { default: t(() => l[0] || (l[0] = [n('API')])), _: 1 }
          ),
          l[32] ||
            (l[32] = o(
              'h3',
              { id: 'overflow-list Props' },
              [o('code', null, '<overflow-list>'), n(' Props')],
              -1
            )),
          u(
            p,
            { class: 'component-api-table' },
            {
              default: t(() => [
                l[17] ||
                  (l[17] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                u(f, null, {
                  default: t(() => [
                    u(a, null, {
                      default: t(() => [
                        u(d, null, {
                          default: t(
                            () => l[1] || (l[1] = [n('\u53C2\u6570\u540D')])
                          ),
                          _: 1,
                        }),
                        u(d, null, {
                          default: t(
                            () => l[2] || (l[2] = [n('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        u(d, null, {
                          default: t(
                            () => l[3] || (l[3] = [n('\u7C7B\u578B')])
                          ),
                          _: 1,
                        }),
                        u(d, null, {
                          default: t(
                            () => l[4] || (l[4] = [n('\u9ED8\u8BA4\u503C')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                u(i, null, {
                  default: t(() => [
                    u(a, null, {
                      default: t(() => [
                        u(e, null, {
                          default: t(() => l[5] || (l[5] = [n('min')])),
                          _: 1,
                        }),
                        u(e, null, {
                          default: t(
                            () =>
                              l[6] ||
                              (l[6] = [
                                n(
                                  '\u6700\u5C11\u5C55\u793A\u7684\u5143\u7D20\u4E2A\u6570'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        u(e, null, {
                          default: t(
                            () =>
                              l[7] || (l[7] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        u(e, null, {
                          default: t(
                            () => l[8] || (l[8] = [o('code', null, '0', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(a, null, {
                      default: t(() => [
                        u(e, null, {
                          default: t(() => l[9] || (l[9] = [n('margin')])),
                          _: 1,
                        }),
                        u(e, null, {
                          default: t(
                            () =>
                              l[10] || (l[10] = [n('\u9879\u76EE\u95F4\u9694')])
                          ),
                          _: 1,
                        }),
                        u(e, null, {
                          default: t(
                            () =>
                              l[11] || (l[11] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        u(e, null, {
                          default: t(
                            () => l[12] || (l[12] = [o('code', null, '8', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(a, null, {
                      default: t(() => [
                        u(e, null, {
                          default: t(() => l[13] || (l[13] = [n('from')])),
                          _: 1,
                        }),
                        u(e, null, {
                          default: t(
                            () =>
                              l[14] || (l[14] = [n('\u6298\u53E0\u65B9\u5411')])
                          ),
                          _: 1,
                        }),
                        u(e, null, {
                          default: t(
                            () =>
                              l[15] ||
                              (l[15] = [o('code', null, "'start' | 'end'", -1)])
                          ),
                          _: 1,
                        }),
                        u(e, null, {
                          default: t(
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
          l[33] ||
            (l[33] = o(
              'h3',
              { id: 'overflow-list Events' },
              [o('code', null, '<overflow-list>'), n(' Events')],
              -1
            )),
          u(
            p,
            { class: 'component-api-table' },
            {
              default: t(() => [
                l[24] ||
                  (l[24] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                u(f, null, {
                  default: t(() => [
                    u(a, null, {
                      default: t(() => [
                        u(d, null, {
                          default: t(
                            () => l[18] || (l[18] = [n('\u4E8B\u4EF6\u540D')])
                          ),
                          _: 1,
                        }),
                        u(d, null, {
                          default: t(
                            () => l[19] || (l[19] = [n('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        u(d, null, {
                          default: t(
                            () => l[20] || (l[20] = [n('\u53C2\u6570')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                u(i, null, {
                  default: t(() => [
                    u(a, null, {
                      default: t(() => [
                        u(e, null, {
                          default: t(() => l[21] || (l[21] = [n('change')])),
                          _: 1,
                        }),
                        u(e, null, {
                          default: t(
                            () =>
                              l[22] ||
                              (l[22] = [
                                n(
                                  '\u6EA2\u51FA\u6570\u91CF\u6539\u53D8\u65F6\u89E6\u53D1'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        u(e, null, {
                          default: t(
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
          l[34] ||
            (l[34] = o(
              'h3',
              { id: 'overflow-list Slots' },
              [o('code', null, '<overflow-list>'), n(' Slots')],
              -1
            )),
          u(
            p,
            { class: 'component-api-table' },
            {
              default: t(() => [
                l[31] ||
                  (l[31] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                u(f, null, {
                  default: t(() => [
                    u(a, null, {
                      default: t(() => [
                        u(d, null, {
                          default: t(
                            () => l[25] || (l[25] = [n('\u63D2\u69FD\u540D')])
                          ),
                          _: 1,
                        }),
                        u(d, null, {
                          default: t(
                            () => l[26] || (l[26] = [n('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        u(d, null, {
                          default: t(
                            () => l[27] || (l[27] = [n('\u53C2\u6570')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                u(i, null, {
                  default: t(() => [
                    u(a, null, {
                      default: t(() => [
                        u(e, null, {
                          default: t(() => l[28] || (l[28] = [n('overflow')])),
                          _: 1,
                        }),
                        u(e, null, {
                          default: t(
                            () =>
                              l[29] || (l[29] = [n('\u6298\u53E0\u5143\u7D20')])
                          ),
                          _: 1,
                        }),
                        u(e, null, {
                          default: t(
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
const L = D(M, [['render', T]]);
export { L as default };
