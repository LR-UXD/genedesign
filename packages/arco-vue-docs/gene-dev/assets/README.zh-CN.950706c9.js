import {
  _ as v,
  d as y,
  u as M,
  r as d,
  o as P,
  c as T,
  w as t,
  a as l,
  b as n,
  e as o,
  m as N,
} from './index.9c61ea88.js';
import {
  D as k,
  a as $,
  b as I,
  c as V,
  d as z,
} from './container.58870a6e.js';

const m = [
  {
    version: '2.21.1',
    date: '2022-03-25',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} \u95EE\u9898\u4FEE\u590D',
        list: [
          `<p>\u4FEE\u590D\u7EC4\u4EF6\u5728 SSR \u4E0B\u62A5\u9519\u7684\u95EE\u9898 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/879">#879</a>)</p>
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
        type: 'bugfix',
        typeText: '\u{1F41B} \u95EE\u9898\u4FEE\u590D',
        list: [
          `<p>\u4FEE\u590D\u4E0E anchor \u7EC4\u4EF6\u7EC4\u5408\u4F7F\u7528\uFF0C\u663E\u793A warning \u7684\u95EE\u9898 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/448">#448</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const H = y({
  name: 'ArcoMain',
  components: {
    DemoBasic: k,
    DemoTop: $,
    DemoBottom: I,
    DemoFixChange: V,
    DemoContainer: z,
  },
  setup() {
    const { locale: s } = M();
    return {
      locale: s,
      data: {
        meta: { type: '\u7EC4\u4EF6', category: '\u5176\u4ED6' },
        title: '\u56FA\u9489 Affix',
        description:
          '\u5C06\u9875\u9762\u5143\u7D20\u9489\u5728\u53EF\u89C6\u8303\u56F4\u3002\u5F53\u5185\u5BB9\u533A\u57DF\u6BD4\u8F83\u957F\uFF0C\u9700\u8981\u6EDA\u52A8\u9875\u9762\u65F6\uFF0C\u56FA\u9489\u53EF\u4EE5\u5C06\u5185\u5BB9\u56FA\u5B9A\u5728\u5C4F\u5E55\u4E0A\u3002\u5E38\u7528\u4E8E\u4FA7\u8FB9\u83DC\u5355\u548C\u6309\u94AE\u7EC4\u5408\u3002',
      },
      changelog: typeof m === 'undefined' ? void 0 : m,
      getMessage: (p, E) => (s.value === 'zh-CN' ? p : E),
    };
  },
});
function L(s, u, D, B, p, E) {
  const A = d('demo-basic');
  const C = d('demo-top');
  const g = d('demo-bottom');
  const x = d('demo-fix-change');
  const b = d('demo-container');
  const _ = d('anchor-head');
  const a = d('a-th');
  const f = d('a-tr');
  const F = d('a-thead');
  const e = d('a-td');
  const i = d('a-tbody');
  const r = d('a-table');
  const w = d('arco-article');
  return (
    P(),
    T(
      w,
      N(s.data, { changelog: s.changelog }),
      {
        default: t(() => [
          l(A),
          l(C),
          l(g),
          l(x),
          l(b),
          l(
            _,
            { level: '2', href: 'API' },
            { default: t(() => u[0] || (u[0] = [n('API')])), _: 1 }
          ),
          u[38] ||
            (u[38] = o(
              'h3',
              { id: 'affix Props' },
              [o('code', null, '<affix>'), n(' Props')],
              -1
            )),
          l(
            r,
            { class: 'component-api-table' },
            {
              default: t(() => [
                u[21] ||
                  (u[21] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                l(F, null, {
                  default: t(() => [
                    l(f, null, {
                      default: t(() => [
                        l(a, null, {
                          default: t(
                            () => u[1] || (u[1] = [n('\u53C2\u6570\u540D')])
                          ),
                          _: 1,
                        }),
                        l(a, null, {
                          default: t(
                            () => u[2] || (u[2] = [n('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        l(a, null, {
                          default: t(
                            () => u[3] || (u[3] = [n('\u7C7B\u578B')])
                          ),
                          _: 1,
                        }),
                        l(a, null, {
                          default: t(
                            () => u[4] || (u[4] = [n('\u9ED8\u8BA4\u503C')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                l(i, null, {
                  default: t(() => [
                    l(f, null, {
                      default: t(() => [
                        l(e, null, {
                          default: t(() => u[5] || (u[5] = [n('offset-top')])),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(
                            () =>
                              u[6] ||
                              (u[6] = [
                                n(
                                  '\u8DDD\u79BB\u7A97\u53E3\u9876\u90E8\u8FBE\u5230\u6307\u5B9A\u504F\u79FB\u91CF\u540E\u89E6\u53D1'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(
                            () =>
                              u[7] || (u[7] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(
                            () => u[8] || (u[8] = [o('code', null, '0', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: t(() => [
                        l(e, null, {
                          default: t(
                            () => u[9] || (u[9] = [n('offset-bottom')])
                          ),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(
                            () =>
                              u[10] ||
                              (u[10] = [
                                n(
                                  '\u8DDD\u79BB\u7A97\u53E3\u5E95\u90E8\u8FBE\u5230\u6307\u5B9A\u504F\u79FB\u91CF\u540E\u89E6\u53D1'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(
                            () =>
                              u[11] || (u[11] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(
                            () => u[12] || (u[12] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: t(() => [
                        l(e, null, {
                          default: t(() => u[13] || (u[13] = [n('target')])),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(
                            () =>
                              u[14] ||
                              (u[14] = [
                                n(
                                  '\u6EDA\u52A8\u5BB9\u5668\uFF0C\u9ED8\u8BA4\u662F '
                                ),
                                o('code', null, 'window', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(
                            () =>
                              u[15] ||
                              (u[15] = [
                                o(
                                  'code',
                                  null,
                                  'string | HTMLElement | Window',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(
                            () => u[16] || (u[16] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(f, null, {
                      default: t(() => [
                        l(e, null, {
                          default: t(
                            () => u[17] || (u[17] = [n('target-container')])
                          ),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(
                            () =>
                              u[18] ||
                              (u[18] = [
                                o('code', null, 'target', -1),
                                n(
                                  '\u7684\u5916\u5C42\u6EDA\u52A8\u5143\u7D20\uFF0C\u9ED8\u8BA4\u662F '
                                ),
                                o('code', null, 'window', -1),
                                n('\u3002'),
                                o('code', null, 'Affix ', -1),
                                n(
                                  '\u5C06\u4F1A\u76D1\u542C\u8BE5\u5143\u7D20\u7684\u6EDA\u52A8\u4E8B\u4EF6\uFF0C\u5E76\u5B9E\u65F6\u66F4\u65B0\u56FA\u9489\u7684\u4F4D\u7F6E\u3002\u4E3B\u8981\u662F\u4E3A\u4E86\u89E3\u51B3 '
                                ),
                                o('code', null, 'target', -1),
                                n(' \u5C5E\u6027\u6307\u5B9A\u4E3A\u975E '),
                                o('code', null, 'window', -1),
                                n(
                                  ' \u5143\u7D20\u65F6\uFF0C\u5982\u679C\u5916\u5C42\u5143\u7D20\u6EDA\u52A8\uFF0C\u53EF\u80FD\u4F1A\u5BFC\u81F4\u56FA\u9489\u8DD1\u51FA\u5BB9\u5668\u95EE\u9898'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(
                            () =>
                              u[19] ||
                              (u[19] = [
                                o(
                                  'code',
                                  null,
                                  'string | HTMLElement | Window',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(
                            () => u[20] || (u[20] = [o('code', null, '-', -1)])
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
          u[39] ||
            (u[39] = o(
              'h3',
              { id: 'affix Events' },
              [o('code', null, '<affix>'), n(' Events')],
              -1
            )),
          l(
            r,
            { class: 'component-api-table' },
            {
              default: t(() => [
                u[28] ||
                  (u[28] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                l(F, null, {
                  default: t(() => [
                    l(f, null, {
                      default: t(() => [
                        l(a, null, {
                          default: t(
                            () => u[22] || (u[22] = [n('\u4E8B\u4EF6\u540D')])
                          ),
                          _: 1,
                        }),
                        l(a, null, {
                          default: t(
                            () => u[23] || (u[23] = [n('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        l(a, null, {
                          default: t(
                            () => u[24] || (u[24] = [n('\u53C2\u6570')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                l(i, null, {
                  default: t(() => [
                    l(f, null, {
                      default: t(() => [
                        l(e, null, {
                          default: t(() => u[25] || (u[25] = [n('change')])),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(
                            () =>
                              u[26] ||
                              (u[26] = [
                                n(
                                  '\u56FA\u5B9A\u72B6\u6001\u53D1\u751F\u6539\u53D8\u65F6\u89E6\u53D1'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(
                            () =>
                              u[27] ||
                              (u[27] = [
                                n('fixed: '),
                                o('code', null, 'boolean', -1),
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
          u[40] ||
            (u[40] = o(
              'h3',
              { id: 'affix Methods' },
              [o('code', null, '<affix>'), n(' Methods')],
              -1
            )),
          l(
            r,
            { class: 'component-api-table' },
            {
              default: t(() => [
                u[37] ||
                  (u[37] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                l(F, null, {
                  default: t(() => [
                    l(f, null, {
                      default: t(() => [
                        l(a, null, {
                          default: t(
                            () => u[29] || (u[29] = [n('\u65B9\u6CD5\u540D')])
                          ),
                          _: 1,
                        }),
                        l(a, null, {
                          default: t(
                            () => u[30] || (u[30] = [n('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        l(a, null, {
                          default: t(
                            () => u[31] || (u[31] = [n('\u53C2\u6570')])
                          ),
                          _: 1,
                        }),
                        l(a, null, {
                          default: t(
                            () => u[32] || (u[32] = [n('\u8FD4\u56DE\u503C')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                l(i, null, {
                  default: t(() => [
                    l(f, null, {
                      default: t(() => [
                        l(e, null, {
                          default: t(
                            () => u[33] || (u[33] = [n('updatePosition')])
                          ),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(
                            () =>
                              u[34] || (u[34] = [n('\u66F4\u65B0\u4F4D\u7F6E')])
                          ),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(() => u[35] || (u[35] = [n('-')])),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(() => u[36] || (u[36] = [n('-')])),
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
const W = v(H, [['render', L]]);
export { W as default };
