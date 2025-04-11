import {
  _ as k,
  d as B,
  u as w,
  r as d,
  o as M,
  c as N,
  w as n,
  a as u,
  b as o,
  e,
  m as P,
} from './index.9c61ea88.js';
import { D as T, a as I, b as $, c as V, d as z } from './loading.d86117b4.js';
import './index.71fb9fd7.js';

const F = [
  {
    version: '2.37.4',
    date: '2022-09-30',
    list: [
      {
        type: 'enhancement',
        typeText: '\u{1F48E} \u529F\u80FD\u4F18\u5316',
        list: [
          `<p>\u4F7F\u7528 flex \u5E03\u5C40\u65B9\u5F0F\uFF0C\u89E3\u51B3 icon \u5927\u5C0F\u4E0D\u4E00\u81F4\u65F6\u7684\u5C45\u4E2D\u95EE\u9898 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1702">#1702</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.37.0',
    date: '2022-09-16',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} \u65B0\u589E\u529F\u80FD',
        list: [
          `<p>\u6DFB\u52A0\u52A0\u8F7D\u4E2D\u72B6\u6001\u5C5E\u6027 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1616">#1616</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.12.0',
    date: '2021-12-24',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} \u65B0\u589E\u529F\u80FD',
        list: [
          `<p>\u589E\u52A0 click \u4E8B\u4EF6 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/450">#450</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.7.0',
    date: '2021-11-26',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} \u65B0\u589E\u529F\u80FD',
        list: [
          `<p>\u589E\u52A0\u901A\u8FC7 <code>icon</code> \u5C5E\u6027/\u63D2\u69FD\u8BBE\u7F6E\u56FE\u6807 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/226">#226</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const L = B({
  name: 'ArcoMain',
  components: {
    DemoBasic: T,
    DemoStatus: I,
    DemoHoverable: $,
    DemoIcon: V,
    DemoLoading: z,
  },
  setup() {
    const { locale: f } = w();
    return {
      locale: f,
      data: {
        meta: { type: '\u7EC4\u4EF6', category: '\u901A\u7528' },
        title: '\u94FE\u63A5 Link',
        description: '\u94FE\u63A5\u7684\u57FA\u672C\u6837\u5F0F\u3002',
      },
      changelog: typeof F === 'undefined' ? void 0 : F,
      getMessage: (r, i) => (f.value === 'zh-CN' ? r : i),
    };
  },
});
function H(f, l, b, v, r, i) {
  const E = d('demo-basic');
  const _ = d('demo-status');
  const A = d('demo-hoverable');
  const y = d('demo-icon');
  const C = d('demo-loading');
  const x = d('anchor-head');
  const a = d('a-th');
  const s = d('a-tr');
  const p = d('a-thead');
  const t = d('a-td');
  const m = d('a-tbody');
  const g = d('a-table');
  const D = d('arco-article');
  return (
    M(),
    N(
      D,
      P(f.data, { changelog: f.changelog }),
      {
        default: n(() => [
          u(E),
          u(_),
          u(A),
          u(y),
          u(C),
          u(
            x,
            { level: '2', href: 'API' },
            { default: n(() => l[0] || (l[0] = [o('API')])), _: 1 }
          ),
          l[41] ||
            (l[41] = e(
              'h3',
              { id: 'link Props' },
              [e('code', null, '<link>'), o(' Props')],
              -1
            )),
          u(
            g,
            { class: 'component-api-table' },
            {
              default: n(() => [
                l[33] ||
                  (l[33] = e(
                    'colgroup',
                    null,
                    [e('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                u(p, null, {
                  default: n(() => [
                    u(s, null, {
                      default: n(() => [
                        u(a, null, {
                          default: n(
                            () => l[1] || (l[1] = [o('\u53C2\u6570\u540D')])
                          ),
                          _: 1,
                        }),
                        u(a, null, {
                          default: n(
                            () => l[2] || (l[2] = [o('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        u(a, null, {
                          default: n(
                            () => l[3] || (l[3] = [o('\u7C7B\u578B')])
                          ),
                          _: 1,
                        }),
                        u(a, null, {
                          default: n(
                            () => l[4] || (l[4] = [o('\u9ED8\u8BA4\u503C')])
                          ),
                          _: 1,
                        }),
                        u(a, null, {
                          default: n(
                            () => l[5] || (l[5] = [o('\u7248\u672C')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                u(m, null, {
                  default: n(() => [
                    u(s, null, {
                      default: n(() => [
                        u(t, null, {
                          default: n(() => l[6] || (l[6] = [o('href')])),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[7] || (l[7] = [o('\u94FE\u63A5\u5730\u5740')])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[8] || (l[8] = [e('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () => l[9] || (l[9] = [e('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        u(t),
                      ]),
                      _: 1,
                    }),
                    u(s, null, {
                      default: n(() => [
                        u(t, null, {
                          default: n(() => l[10] || (l[10] = [o('status')])),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[11] ||
                              (l[11] = [o('\u94FE\u63A5\u7684\u72B6\u6001')])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[12] ||
                              (l[12] = [
                                e(
                                  'code',
                                  null,
                                  "'normal' | 'warning' | 'success' | 'danger'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[13] ||
                              (l[13] = [e('code', null, "'normal'", -1)])
                          ),
                          _: 1,
                        }),
                        u(t),
                      ]),
                      _: 1,
                    }),
                    u(s, null, {
                      default: n(() => [
                        u(t, null, {
                          default: n(() => l[14] || (l[14] = [o('hoverable')])),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[15] ||
                              (l[15] = [
                                o(
                                  '\u9F20\u6807\u60AC\u6D6E\u65F6\u5B58\u5728\u5E95\u8272'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[16] ||
                              (l[16] = [e('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[17] || (l[17] = [e('code', null, 'true', -1)])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(() => l[18] || (l[18] = [o('2.7.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(s, null, {
                      default: n(() => [
                        u(t, null, {
                          default: n(() => l[19] || (l[19] = [o('icon')])),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () => l[20] || (l[20] = [o('\u56FE\u6807')])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[21] ||
                              (l[21] = [e('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[22] || (l[22] = [e('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(() => l[23] || (l[23] = [o('2.7.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(s, null, {
                      default: n(() => [
                        u(t, null, {
                          default: n(() => l[24] || (l[24] = [o('loading')])),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[25] ||
                              (l[25] = [
                                o(
                                  '\u94FE\u63A5\u662F\u5426\u4E3A\u52A0\u8F7D\u4E2D\u72B6\u6001'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[26] ||
                              (l[26] = [e('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[27] || (l[27] = [e('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(() => l[28] || (l[28] = [o('2.37.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(s, null, {
                      default: n(() => [
                        u(t, null, {
                          default: n(() => l[29] || (l[29] = [o('disabled')])),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[30] ||
                              (l[30] = [
                                o('\u94FE\u63A5\u662F\u5426\u7981\u7528'),
                              ])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[31] ||
                              (l[31] = [e('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[32] || (l[32] = [e('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        u(t),
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
          l[42] ||
            (l[42] = e(
              'h3',
              { id: 'link Events' },
              [e('code', null, '<link>'), o(' Events')],
              -1
            )),
          u(
            g,
            { class: 'component-api-table' },
            {
              default: n(() => [
                l[40] ||
                  (l[40] = e(
                    'colgroup',
                    null,
                    [e('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                u(p, null, {
                  default: n(() => [
                    u(s, null, {
                      default: n(() => [
                        u(a, null, {
                          default: n(
                            () => l[34] || (l[34] = [o('\u4E8B\u4EF6\u540D')])
                          ),
                          _: 1,
                        }),
                        u(a, null, {
                          default: n(
                            () => l[35] || (l[35] = [o('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        u(a, null, {
                          default: n(
                            () => l[36] || (l[36] = [o('\u53C2\u6570')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                u(m, null, {
                  default: n(() => [
                    u(s, null, {
                      default: n(() => [
                        u(t, null, {
                          default: n(() => l[37] || (l[37] = [o('click')])),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[38] ||
                              (l[38] = [o('\u70B9\u51FB\u65F6\u89E6\u53D1')])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[39] ||
                              (l[39] = [
                                o('ev: '),
                                e('code', null, 'MouseEvent', -1),
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
const q = k(L, [['render', H]]);
export { q as default };
