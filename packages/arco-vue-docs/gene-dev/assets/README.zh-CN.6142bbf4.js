import {
  _ as A,
  d as _,
  u as k,
  r as a,
  o as w,
  c as P,
  w as t,
  a as l,
  b as n,
  e as o,
  m as N,
} from './index.9c61ea88.js';
import { D as M, a as T, b as $, c as I } from './content.3cb506ec.js';

const C = [
  {
    version: '2.36.0',
    date: '2022-09-02',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} \u65B0\u589E\u529F\u80FD',
        list: [
          `<p>\u652F\u6301\u81EA\u5B9A\u4E49\u8FD4\u56DE\u6309\u94AE (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1499">#1499</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.6.1',
    date: '2021-11-24',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} \u95EE\u9898\u4FEE\u590D',
        list: [
          `<p>\u4FEE\u590D\u6CA1\u6709\u5B50\u6807\u9898\u65F6\u4ECD\u7136\u663E\u793A\u5206\u5272\u7EBF\u7684\u95EE\u9898 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/224">#224</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const V = _({
  name: 'ArcoMain',
  components: {
    DemoBasic: M,
    DemoBreadcrumb: T,
    DemoTransparent: $,
    DemoContent: I,
  },
  setup() {
    const { locale: f } = k();
    return {
      locale: f,
      data: {
        meta: { type: '\u7EC4\u4EF6', category: '\u5BFC\u822A' },
        title: '\u9875\u5934 PageHeader',
        description:
          '\u9875\u5934\u4F4D\u4E8E\u9875\u5BB9\u5668\u9876\u90E8\uFF0C\u8D77\u5230\u4E86\u5185\u5BB9\u6982\u89C8\u548C\u5F15\u5BFC\u9875\u7EA7\u64CD\u4F5C\u7684\u4F5C\u7528\u3002\u5305\u62EC\u9762\u5305\u5C51\u3001\u6807\u9898\u7B49\u5185\u5BB9\u3002',
      },
      changelog: typeof C === 'undefined' ? void 0 : C,
      getMessage: (m, g) => (f.value === 'zh-CN' ? m : g),
    };
  },
});
function z(f, u, b, B, m, g) {
  const E = a('demo-basic');
  const F = a('demo-breadcrumb');
  const D = a('demo-transparent');
  const v = a('demo-content');
  const x = a('anchor-head');
  const s = a('a-th');
  const d = a('a-tr');
  const r = a('a-thead');
  const e = a('a-td');
  const p = a('a-tbody');
  const i = a('a-table');
  const y = a('arco-article');
  return (
    w(),
    P(
      y,
      N(f.data, { changelog: f.changelog }),
      {
        default: t(() => [
          l(E),
          l(F),
          l(D),
          l(v),
          l(
            x,
            { level: '2', href: 'API' },
            { default: t(() => u[0] || (u[0] = [n('API')])), _: 1 }
          ),
          u[46] ||
            (u[46] = o(
              'h3',
              { id: 'page-header Props' },
              [o('code', null, '<page-header>'), n(' Props')],
              -1
            )),
          l(
            i,
            { class: 'component-api-table' },
            {
              default: t(() => [
                u[17] ||
                  (u[17] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                l(r, null, {
                  default: t(() => [
                    l(d, null, {
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
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                l(p, null, {
                  default: t(() => [
                    l(d, null, {
                      default: t(() => [
                        l(e, null, {
                          default: t(() => u[5] || (u[5] = [n('title')])),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(
                            () =>
                              u[6] ||
                              (u[6] = [
                                n('\u9875\u5934\u7684\u4E3B\u6807\u9898'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(
                            () =>
                              u[7] || (u[7] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(
                            () => u[8] || (u[8] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(d, null, {
                      default: t(() => [
                        l(e, null, {
                          default: t(() => u[9] || (u[9] = [n('subtitle')])),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(
                            () =>
                              u[10] ||
                              (u[10] = [
                                n('\u9875\u5934\u7684\u6B21\u6807\u9898'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(
                            () =>
                              u[11] || (u[11] = [o('code', null, 'string', -1)])
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
                    l(d, null, {
                      default: t(() => [
                        l(e, null, {
                          default: t(() => u[13] || (u[13] = [n('show-back')])),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(
                            () =>
                              u[14] ||
                              (u[14] = [
                                n(
                                  '\u662F\u5426\u663E\u793A\u8FD4\u56DE\u6309\u94AE'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(
                            () =>
                              u[15] ||
                              (u[15] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(
                            () =>
                              u[16] || (u[16] = [o('code', null, 'true', -1)])
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
          u[47] ||
            (u[47] = o(
              'h3',
              { id: 'page-header Events' },
              [o('code', null, '<page-header>'), n(' Events')],
              -1
            )),
          l(
            i,
            { class: 'component-api-table' },
            {
              default: t(() => [
                u[24] ||
                  (u[24] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                l(r, null, {
                  default: t(() => [
                    l(d, null, {
                      default: t(() => [
                        l(s, null, {
                          default: t(
                            () => u[18] || (u[18] = [n('\u4E8B\u4EF6\u540D')])
                          ),
                          _: 1,
                        }),
                        l(s, null, {
                          default: t(
                            () => u[19] || (u[19] = [n('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        l(s, null, {
                          default: t(
                            () => u[20] || (u[20] = [n('\u53C2\u6570')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                l(p, null, {
                  default: t(() => [
                    l(d, null, {
                      default: t(() => [
                        l(e, null, {
                          default: t(() => u[21] || (u[21] = [n('back')])),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(
                            () =>
                              u[22] ||
                              (u[22] = [
                                n(
                                  '\u70B9\u51FB\u8FD4\u56DE\u6309\u94AE\u65F6\u89E6\u53D1'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(
                            () =>
                              u[23] ||
                              (u[23] = [
                                n('event: '),
                                o('code', null, 'Event', -1),
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
          u[48] ||
            (u[48] = o(
              'h3',
              { id: 'page-header Slots' },
              [o('code', null, '<page-header>'), n(' Slots')],
              -1
            )),
          l(
            i,
            { class: 'component-api-table' },
            {
              default: t(() => [
                u[45] ||
                  (u[45] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                l(r, null, {
                  default: t(() => [
                    l(d, null, {
                      default: t(() => [
                        l(s, null, {
                          default: t(
                            () => u[25] || (u[25] = [n('\u63D2\u69FD\u540D')])
                          ),
                          _: 1,
                        }),
                        l(s, null, {
                          default: t(
                            () => u[26] || (u[26] = [n('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        l(s, null, {
                          default: t(
                            () => u[27] || (u[27] = [n('\u53C2\u6570')])
                          ),
                          _: 1,
                        }),
                        l(s, null, {
                          default: t(
                            () => u[28] || (u[28] = [n('\u7248\u672C')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                l(p, null, {
                  default: t(() => [
                    l(d, null, {
                      default: t(() => [
                        l(e, null, {
                          default: t(
                            () => u[29] || (u[29] = [n('breadcrumb')])
                          ),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(
                            () => u[30] || (u[30] = [n('\u9762\u5305\u5C51')])
                          ),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(() => u[31] || (u[31] = [n('-')])),
                          _: 1,
                        }),
                        l(e),
                      ]),
                      _: 1,
                    }),
                    l(d, null, {
                      default: t(() => [
                        l(e, null, {
                          default: t(() => u[32] || (u[32] = [n('back-icon')])),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(
                            () =>
                              u[33] || (u[33] = [n('\u8FD4\u56DE\u6309\u94AE')])
                          ),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(() => u[34] || (u[34] = [n('-')])),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(() => u[35] || (u[35] = [n('2.36.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(d, null, {
                      default: t(() => [
                        l(e, null, {
                          default: t(() => u[36] || (u[36] = [n('title')])),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(
                            () => u[37] || (u[37] = [n('\u4E3B\u6807\u9898')])
                          ),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(() => u[38] || (u[38] = [n('-')])),
                          _: 1,
                        }),
                        l(e),
                      ]),
                      _: 1,
                    }),
                    l(d, null, {
                      default: t(() => [
                        l(e, null, {
                          default: t(() => u[39] || (u[39] = [n('subtitle')])),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(
                            () => u[40] || (u[40] = [n('\u6B21\u6807\u9898')])
                          ),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(() => u[41] || (u[41] = [n('-')])),
                          _: 1,
                        }),
                        l(e),
                      ]),
                      _: 1,
                    }),
                    l(d, null, {
                      default: t(() => [
                        l(e, null, {
                          default: t(() => u[42] || (u[42] = [n('extra')])),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(
                            () =>
                              u[43] ||
                              (u[43] = [
                                n('\u989D\u5916\u7684\u5C55\u793A\u5185\u5BB9'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(e, null, {
                          default: t(() => u[44] || (u[44] = [n('-')])),
                          _: 1,
                        }),
                        l(e),
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
const R = A(V, [['render', z]]);
export { R as default };
