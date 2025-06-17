import {
  _ as b,
  d as A,
  u as x,
  r as d,
  o as D,
  c as P,
  w as t,
  a as l,
  b as n,
  e as o,
  m as k,
} from './index.9c61ea88.js';
import { D as N, a as w } from './custom.0aefec80.js';

const F = [
  {
    version: '2.55.1',
    date: '2024-03-29',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} \u95EE\u9898\u4FEE\u590D',
        list: [
          `<p>\u4FEE\u590D\u5C5E\u6027\u81EA\u52A8\u7EE7\u627F\u7684\u9519\u8BEF (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/3048">#3048</a>)</p>
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
        typeText: '\u{1F195} \u65B0\u589E\u529F\u80FD',
        list: [
          `<p>\u589E\u52A0 <code>in-config-provider</code> \u5C5E\u6027 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2474">#2474</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.37.3',
    date: '2022-09-23',
    list: [
      {
        type: 'enhancement',
        typeText: '\u{1F48E} \u529F\u80FD\u4F18\u5316',
        list: [
          `<p>\u4F18\u5316\u81EA\u5B9A\u4E49\u663E\u793A\u4F18\u5148\u7EA7\uFF0Cimage \u63D2\u69FD\u9AD8\u4E8E\u5168\u5C40 empty \u63D2\u69FD (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1673">#1673</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const M = A({
  name: 'ArcoMain',
  components: { DemoBasic: N, DemoCustom: w },
  setup() {
    const { locale: r } = x();
    return {
      locale: r,
      data: {
        meta: { type: '\u7EC4\u4EF6', category: '\u6570\u636E\u5C55\u793A' },
        title: '\u7A7A\u72B6\u6001 Empty',
        description:
          '\u6307\u5F53\u524D\u573A\u666F\u6CA1\u6709\u5BF9\u5E94\u7684\u6570\u636E\u5185\u5BB9\uFF0C\u5448\u73B0\u51FA\u7684\u4E00\u79CD\u72B6\u6001\u3002',
      },
      changelog: typeof F === 'undefined' ? void 0 : F,
      getMessage: (p, i) => (r.value === 'zh-CN' ? p : i),
    };
  },
});
function T(r, u, C, y, p, i) {
  const _ = d('demo-basic');
  const B = d('demo-custom');
  const E = d('anchor-head');
  const s = d('a-th');
  const a = d('a-tr');
  const f = d('a-thead');
  const e = d('a-td');
  const m = d('a-tbody');
  const g = d('a-table');
  const v = d('arco-article');
  return (
    D(),
    P(
      v,
      k(r.data, { changelog: r.changelog }),
      {
        default: t(() => [
          l(_),
          l(B),
          l(
            E,
            { level: '2', href: 'API' },
            { default: t(() => u[0] || (u[0] = [n('API')])), _: 1 }
          ),
          u[27] ||
            (u[27] = o(
              'h3',
              { id: 'empty Props' },
              [o('code', null, '<empty>'), n(' Props')],
              -1
            )),
          l(
            g,
            { class: 'component-api-table' },
            {
              default: t(() => [
                u[19] ||
                  (u[19] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                l(f, null, {
                  default: t(() => [
                    l(a, null, {
                      default: t(() => [
                        l(s, null, {
                          default: t(
                            () => u[1] || (u[1] = [n('\u53C2\u6570\u540D')])
                          ),
                          _: 1,
                        }),
                        l(s, null, {
                          default: t(
                            () => u[2] || (u[2] = [n('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        l(s, null, {
                          default: t(
                            () => u[3] || (u[3] = [n('\u7C7B\u578B')])
                          ),
                          _: 1,
                        }),
                        l(s, null, {
                          default: t(
                            () => u[4] || (u[4] = [n('\u9ED8\u8BA4\u503C')])
                          ),
                          _: 1,
                        }),
                        l(s, null, {
                          default: t(
                            () => u[5] || (u[5] = [n('\u7248\u672C')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                l(m, null, {
                  default: t(() => [
                    l(a, null, {
                      default: t(() => [
                        l(e, null, {
                          default: t(() => u[6] || (u[6] = [n('description')])),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(
                            () =>
                              u[7] || (u[7] = [n('\u63CF\u8FF0\u5185\u5BB9')])
                          ),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(
                            () =>
                              u[8] || (u[8] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(
                            () => u[9] || (u[9] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        l(e),
                      ]),
                      _: 1,
                    }),
                    l(a, null, {
                      default: t(() => [
                        l(e, null, {
                          default: t(() => u[10] || (u[10] = [n('img-src')])),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(
                            () =>
                              u[11] ||
                              (u[11] = [
                                n(
                                  '\u81EA\u5B9A\u4E49\u56FE\u7247\u7684\u5730\u5740'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(
                            () =>
                              u[12] || (u[12] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(
                            () => u[13] || (u[13] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        l(e),
                      ]),
                      _: 1,
                    }),
                    l(a, null, {
                      default: t(() => [
                        l(e, null, {
                          default: t(
                            () => u[14] || (u[14] = [n('in-config-provider')])
                          ),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(
                            () =>
                              u[15] ||
                              (u[15] = [
                                n(
                                  '\u662F\u5426\u5728 ConfigProvider \u4E2D\u4F7F\u7528'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(
                            () =>
                              u[16] ||
                              (u[16] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(
                            () =>
                              u[17] || (u[17] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(() => u[18] || (u[18] = [n('2.47.0')])),
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
          u[28] ||
            (u[28] = o(
              'h3',
              { id: 'empty Slots' },
              [o('code', null, '<empty>'), n(' Slots')],
              -1
            )),
          l(
            g,
            { class: 'component-api-table' },
            {
              default: t(() => [
                u[26] ||
                  (u[26] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                l(f, null, {
                  default: t(() => [
                    l(a, null, {
                      default: t(() => [
                        l(s, null, {
                          default: t(
                            () => u[20] || (u[20] = [n('\u63D2\u69FD\u540D')])
                          ),
                          _: 1,
                        }),
                        l(s, null, {
                          default: t(
                            () => u[21] || (u[21] = [n('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        l(s, null, {
                          default: t(
                            () => u[22] || (u[22] = [n('\u53C2\u6570')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                l(m, null, {
                  default: t(() => [
                    l(a, null, {
                      default: t(() => [
                        l(e, null, {
                          default: t(() => u[23] || (u[23] = [n('image')])),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(
                            () =>
                              u[24] ||
                              (u[24] = [n('\u56FE\u7247/\u56FE\u6807')])
                          ),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(() => u[25] || (u[25] = [n('-')])),
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
const V = b(M, [['render', T]]);
export { V as default };
