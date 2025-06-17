import {
  _ as v,
  d as P,
  u as w,
  r as e,
  o as k,
  c as M,
  w as n,
  a as l,
  b as t,
  e as d,
  m as N,
} from './index.9c61ea88.js';
import { D as $, a as H, b as I, c as L, d as T } from './hash.15a88a34.js';

const B = [
  {
    version: '2.11.0',
    date: '2021-12-17',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} \u95EE\u9898\u4FEE\u590D',
        list: [
          `<p>\u4FEE\u590D\u52A0\u8F7D\u540E\u4E0D\u4F1A\u5B9A\u4F4D\u5230 hash \u4F4D\u7F6E\u7684\u95EE\u9898 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/400">#400</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const V = P({
  name: 'ArcoMain',
  components: {
    DemoBasic: $,
    DemoLineLess: H,
    DemoAffix: I,
    DemoBoundary: L,
    DemoHash: T,
  },
  setup() {
    const { locale: f } = w();
    return {
      locale: f,
      data: {
        meta: { type: '\u7EC4\u4EF6', category: '\u5176\u4ED6' },
        title: '\u951A\u70B9 Anchor',
        description:
          '\u901A\u8FC7\u951A\u70B9\u53EF\u5FEB\u901F\u627E\u5230\u4FE1\u606F\u5185\u5BB9\u5728\u5F53\u524D\u9875\u9762\u7684\u4F4D\u7F6E\u3002',
      },
      changelog: typeof B === 'undefined' ? void 0 : B,
      getMessage: (m, F) => (f.value === 'zh-CN' ? m : F),
    };
  },
});
function z(f, u, E, D, m, F) {
  const A = e('demo-basic');
  const g = e('demo-line-less');
  const C = e('demo-affix');
  const b = e('demo-boundary');
  const y = e('demo-hash');
  const _ = e('anchor-head');
  const a = e('a-th');
  const s = e('a-tr');
  const r = e('a-thead');
  const o = e('a-td');
  const i = e('a-tbody');
  const p = e('a-table');
  const x = e('arco-article');
  return (
    k(),
    M(
      x,
      N(f.data, { changelog: f.changelog }),
      {
        default: n(() => [
          l(A),
          l(g),
          l(C),
          l(b),
          l(y),
          l(
            _,
            { level: '2', href: 'API' },
            { default: n(() => u[0] || (u[0] = [t('API')])), _: 1 }
          ),
          u[49] ||
            (u[49] = d(
              'h3',
              { id: 'anchor Props' },
              [d('code', null, '<anchor>'), t(' Props')],
              -1
            )),
          l(
            p,
            { class: 'component-api-table' },
            {
              default: n(() => [
                u[25] ||
                  (u[25] = d(
                    'colgroup',
                    null,
                    [d('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                l(r, null, {
                  default: n(() => [
                    l(s, null, {
                      default: n(() => [
                        l(a, null, {
                          default: n(
                            () => u[1] || (u[1] = [t('\u53C2\u6570\u540D')])
                          ),
                          _: 1,
                        }),
                        l(a, null, {
                          default: n(
                            () => u[2] || (u[2] = [t('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        l(a, null, {
                          default: n(
                            () => u[3] || (u[3] = [t('\u7C7B\u578B')])
                          ),
                          _: 1,
                        }),
                        l(a, null, {
                          default: n(
                            () => u[4] || (u[4] = [t('\u9ED8\u8BA4\u503C')])
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
                  default: n(() => [
                    l(s, null, {
                      default: n(() => [
                        l(o, null, {
                          default: n(() => u[5] || (u[5] = [t('boundary')])),
                          _: 1,
                        }),
                        l(o, null, {
                          default: n(
                            () =>
                              u[6] ||
                              (u[6] = [
                                t(
                                  '\u6EDA\u52A8\u8FB9\u754C\u503C\uFF0C\u8BBE\u7F6E\u8BE5\u503C\u4E3A\u6570\u5B57\u540E\uFF0C\u5C06\u4F1A\u5728\u8DDD\u79BB\u6EDA\u52A8\u5BB9\u5668 '
                                ),
                                d('code', null, 'boundary', -1),
                                t(
                                  ' \u8DDD\u79BB\u65F6\u505C\u6B62\u6EDA\u52A8\u3002'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(o, null, {
                          default: n(
                            () =>
                              u[7] ||
                              (u[7] = [
                                d(
                                  'code',
                                  null,
                                  "'start' | 'end' | 'center' | 'nearest' | number",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(o, null, {
                          default: n(
                            () =>
                              u[8] || (u[8] = [d('code', null, "'start'", -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(s, null, {
                      default: n(() => [
                        l(o, null, {
                          default: n(() => u[9] || (u[9] = [t('line-less')])),
                          _: 1,
                        }),
                        l(o, null, {
                          default: n(
                            () =>
                              u[10] ||
                              (u[10] = [
                                t(
                                  '\u662F\u5426\u663E\u793A\u5DE6\u4FA7\u8F74\u7EBF'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(o, null, {
                          default: n(
                            () =>
                              u[11] ||
                              (u[11] = [d('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        l(o, null, {
                          default: n(
                            () =>
                              u[12] || (u[12] = [d('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(s, null, {
                      default: n(() => [
                        l(o, null, {
                          default: n(
                            () => u[13] || (u[13] = [t('scroll-container')])
                          ),
                          _: 1,
                        }),
                        l(o, null, {
                          default: n(
                            () =>
                              u[14] || (u[14] = [t('\u6EDA\u52A8\u5BB9\u5668')])
                          ),
                          _: 1,
                        }),
                        l(o, null, {
                          default: n(
                            () =>
                              u[15] ||
                              (u[15] = [
                                d(
                                  'code',
                                  null,
                                  'string | HTMLElement | Window',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(o, null, {
                          default: n(
                            () => u[16] || (u[16] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(s, null, {
                      default: n(() => [
                        l(o, null, {
                          default: n(
                            () => u[17] || (u[17] = [t('change-hash')])
                          ),
                          _: 1,
                        }),
                        l(o, null, {
                          default: n(
                            () =>
                              u[18] ||
                              (u[18] = [
                                t(
                                  '\u662F\u5426\u6539\u53D8hash\u3002\u8BBE\u7F6E\u4E3A '
                                ),
                                d('code', null, 'false', -1),
                                t(
                                  ' \u65F6\u70B9\u51FB\u951A\u70B9\u4E0D\u4F1A\u6539\u53D8\u9875\u9762\u7684 hash'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(o, null, {
                          default: n(
                            () =>
                              u[19] ||
                              (u[19] = [d('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        l(o, null, {
                          default: n(
                            () =>
                              u[20] || (u[20] = [d('code', null, 'true', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(s, null, {
                      default: n(() => [
                        l(o, null, {
                          default: n(() => u[21] || (u[21] = [t('smooth')])),
                          _: 1,
                        }),
                        l(o, null, {
                          default: n(
                            () =>
                              u[22] ||
                              (u[22] = [
                                t(
                                  '\u662F\u5426\u4F7F\u7528\u5E73\u6ED1\u6EDA\u52A8'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(o, null, {
                          default: n(
                            () =>
                              u[23] ||
                              (u[23] = [d('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        l(o, null, {
                          default: n(
                            () =>
                              u[24] || (u[24] = [d('code', null, 'true', -1)])
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
          u[50] ||
            (u[50] = d(
              'h3',
              { id: 'anchor Events' },
              [d('code', null, '<anchor>'), t(' Events')],
              -1
            )),
          l(
            p,
            { class: 'component-api-table' },
            {
              default: n(() => [
                u[35] ||
                  (u[35] = d(
                    'colgroup',
                    null,
                    [d('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                l(r, null, {
                  default: n(() => [
                    l(s, null, {
                      default: n(() => [
                        l(a, null, {
                          default: n(
                            () => u[26] || (u[26] = [t('\u4E8B\u4EF6\u540D')])
                          ),
                          _: 1,
                        }),
                        l(a, null, {
                          default: n(
                            () => u[27] || (u[27] = [t('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        l(a, null, {
                          default: n(
                            () => u[28] || (u[28] = [t('\u53C2\u6570')])
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
                  default: n(() => [
                    l(s, null, {
                      default: n(() => [
                        l(o, null, {
                          default: n(() => u[29] || (u[29] = [t('select')])),
                          _: 1,
                        }),
                        l(o, null, {
                          default: n(
                            () =>
                              u[30] ||
                              (u[30] = [
                                t(
                                  '\u7528\u6237\u70B9\u51FB\u94FE\u63A5\u65F6\u89E6\u53D1'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(o, null, {
                          default: n(
                            () =>
                              u[31] ||
                              (u[31] = [
                                t('hash: '),
                                d('code', null, 'string | undefined', -1),
                                d('br', null, null, -1),
                                t('preHash: '),
                                d('code', null, 'string', -1),
                              ])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(s, null, {
                      default: n(() => [
                        l(o, null, {
                          default: n(() => u[32] || (u[32] = [t('change')])),
                          _: 1,
                        }),
                        l(o, null, {
                          default: n(
                            () =>
                              u[33] ||
                              (u[33] = [
                                t(
                                  '\u94FE\u63A5\u53D1\u751F\u6539\u53D8\u65F6\u89E6\u53D1'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(o, null, {
                          default: n(
                            () =>
                              u[34] ||
                              (u[34] = [
                                t('hash: '),
                                d('code', null, 'string', -1),
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
          u[51] ||
            (u[51] = d(
              'h3',
              { id: 'anchor-link Props' },
              [d('code', null, '<anchor-link>'), t(' Props')],
              -1
            )),
          l(
            p,
            { class: 'component-api-table' },
            {
              default: n(() => [
                u[48] ||
                  (u[48] = d(
                    'colgroup',
                    null,
                    [d('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                l(r, null, {
                  default: n(() => [
                    l(s, null, {
                      default: n(() => [
                        l(a, null, {
                          default: n(
                            () => u[36] || (u[36] = [t('\u53C2\u6570\u540D')])
                          ),
                          _: 1,
                        }),
                        l(a, null, {
                          default: n(
                            () => u[37] || (u[37] = [t('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        l(a, null, {
                          default: n(
                            () => u[38] || (u[38] = [t('\u7C7B\u578B')])
                          ),
                          _: 1,
                        }),
                        l(a, null, {
                          default: n(
                            () => u[39] || (u[39] = [t('\u9ED8\u8BA4\u503C')])
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
                  default: n(() => [
                    l(s, null, {
                      default: n(() => [
                        l(o, null, {
                          default: n(() => u[40] || (u[40] = [t('title')])),
                          _: 1,
                        }),
                        l(o, null, {
                          default: n(
                            () =>
                              u[41] ||
                              (u[41] = [
                                t(
                                  '\u951A\u70B9\u94FE\u63A5\u7684\u6587\u672C\u5185\u5BB9'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(o, null, {
                          default: n(
                            () =>
                              u[42] || (u[42] = [d('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        l(o, null, {
                          default: n(
                            () => u[43] || (u[43] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(s, null, {
                      default: n(() => [
                        l(o, null, {
                          default: n(() => u[44] || (u[44] = [t('href')])),
                          _: 1,
                        }),
                        l(o, null, {
                          default: n(
                            () =>
                              u[45] ||
                              (u[45] = [
                                t('\u951A\u70B9\u94FE\u63A5\u7684\u5730\u5740'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(o, null, {
                          default: n(
                            () =>
                              u[46] || (u[46] = [d('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        l(o, null, {
                          default: n(
                            () => u[47] || (u[47] = [d('code', null, '-', -1)])
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
const j = v(V, [['render', z]]);
export { j as default };
