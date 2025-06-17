import {
  _ as P,
  d as N,
  u as M,
  r as f,
  o as $,
  c as V,
  w as t,
  a as u,
  b as n,
  e,
  m as z,
} from './index.9c61ea88.js';
import {
  D as K,
  a as Q,
  b as S,
  c as H,
  d as L,
  e as O,
  f as R,
  g as j,
  h as q,
} from './destroy.f4b6150c.js';
import './index.2b17769d.js';
import './index.5bc6c633.js';

const C = [
  {
    version: '2.54.6',
    date: '2024-03-01',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} \u95EE\u9898\u4FEE\u590D',
        list: [
          `<p>\u89E3\u51B3 <code>vue</code> \u4FDD\u7559\u5C5E\u6027\u8B66\u544A (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2997">#2997</a>)</p>
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
        typeText: '\u{1F18E} \u7C7B\u578B\u4FEE\u6B63',
        list: [
          `<p>\u4FEE\u590D <code>collapse-item</code> \u7684 key \u5C5E\u6027\u5B9A\u4E49\uFF0C\u5141\u8BB8 number (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1743">#1743</a>)</p>
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
        typeText: '\u{1F485} \u6837\u5F0F\u66F4\u65B0',
        list: [
          `<p>\u5F53expand-icon\u5728\u53F3\u4FA7\u65F6,\u8C03\u6574collapse-item-content\u7684padding (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1680">#1680</a>)</p>
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
        typeText: '\u{1F195} \u65B0\u589E\u529F\u80FD',
        list: [
          `<p>\u652F\u6301\u81EA\u5B9A\u4E49\u5C55\u5F00\u56FE\u6807 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1344">#1344</a>)</p>
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
        typeText: '\u{1F195} \u65B0\u589E\u529F\u80FD',
        list: [
          `<p>\u589E\u52A0 destroyOnHide \u5C5E\u6027\uFF0C\u9ED8\u8BA4\u4E0D\u4F1A\u5728\u9690\u85CF\u65F6\u9500\u6BC1\u5185\u5BB9 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1100">#1100</a>)</p>
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
        typeText: '\u{1F41B} \u95EE\u9898\u4FEE\u590D',
        list: [
          `<p>\u4FEE\u590D <code>showExpandIcon</code> \u5C5E\u6027\u5931\u6548\u7684\u95EE\u9898 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1060">#1060</a>)</p>
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
        typeText: '\u{1F195} \u65B0\u589E\u529F\u80FD',
        list: [
          `<p>key\u589E\u52A0\u5BF9number\u7684\u652F\u6301 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/358">#358</a>)</p>
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
        typeText: '\u{1F41B} \u95EE\u9898\u4FEE\u590D',
        list: [
          `<p>\u4FEE\u590D <code>accordion</code> \u6A21\u5F0F\u4E0D\u80FD\u6536\u8D77\u7684\u95EE\u9898</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const G = N({
  name: 'ArcoMain',
  components: {
    DemoBasic: K,
    DemoAccordion: Q,
    DemoNested: S,
    DemoBorderLess: H,
    DemoExtra: L,
    DemoExpandIcon: O,
    DemoCustom: R,
    DemoIconPosition: j,
    DemoDestroy: q,
  },
  setup() {
    const { locale: i } = M();
    return {
      locale: i,
      data: {
        meta: { type: '\u7EC4\u4EF6', category: '\u6570\u636E\u5C55\u793A' },
        title: '\u6298\u53E0\u9762\u677F Collapse',
        description:
          '\u53EF\u4EE5\u6298\u53E0 / \u5C55\u5F00\u7684\u5185\u5BB9\u533A\u57DF\u3002',
      },
      changelog: typeof C === 'undefined' ? void 0 : C,
      getMessage: (m, F) => (i.value === 'zh-CN' ? m : F),
    };
  },
});
function J(i, l, E, b, m, F) {
  const y = f('demo-basic');
  const x = f('demo-accordion');
  const v = f('demo-nested');
  const D = f('demo-border-less');
  const B = f('demo-extra');
  const A = f('demo-expand-icon');
  const k = f('demo-custom');
  const w = f('demo-icon-position');
  const I = f('demo-destroy');
  const g = f('anchor-head');
  const s = f('a-th');
  const d = f('a-tr');
  const a = f('a-thead');
  const o = f('a-td');
  const p = f('a-tbody');
  const r = f('a-table');
  const T = f('arco-article');
  return (
    $(),
    V(
      T,
      z(i.data, { changelog: i.changelog }),
      {
        default: t(() => [
          u(y),
          u(x),
          u(v),
          u(D),
          u(B),
          u(A),
          u(k),
          u(w),
          u(I),
          u(
            g,
            { level: '2', href: 'API' },
            { default: t(() => l[0] || (l[0] = [n('API')])), _: 1 }
          ),
          l[83] ||
            (l[83] = e(
              'h3',
              { id: 'collapse Props' },
              [e('code', null, '<collapse>'), n(' Props')],
              -1
            )),
          u(
            r,
            { class: 'component-api-table' },
            {
              default: t(() => [
                l[36] ||
                  (l[36] = e(
                    'colgroup',
                    null,
                    [e('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                u(a, null, {
                  default: t(() => [
                    u(d, null, {
                      default: t(() => [
                        u(s, null, {
                          default: t(
                            () => l[1] || (l[1] = [n('\u53C2\u6570\u540D')])
                          ),
                          _: 1,
                        }),
                        u(s, null, {
                          default: t(
                            () => l[2] || (l[2] = [n('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        u(s, null, {
                          default: t(
                            () => l[3] || (l[3] = [n('\u7C7B\u578B')])
                          ),
                          _: 1,
                        }),
                        u(s, null, {
                          default: t(
                            () => l[4] || (l[4] = [n('\u9ED8\u8BA4\u503C')])
                          ),
                          _: 1,
                        }),
                        u(s, null, {
                          default: t(
                            () => l[5] || (l[5] = [n('\u7248\u672C')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                u(p, null, {
                  default: t(() => [
                    u(d, null, {
                      default: t(() => [
                        u(o, null, {
                          default: t(
                            () =>
                              l[6] ||
                              (l[6] = [
                                n('active-key '),
                                e('strong', null, '(v-model)', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: t(
                            () =>
                              l[7] ||
                              (l[7] = [
                                n(
                                  '\u5F53\u524D\u5C55\u5F00\u7684\u9762\u677F\u7684 '
                                ),
                                e('code', null, 'key', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: t(
                            () =>
                              l[8] ||
                              (l[8] = [
                                e('code', null, '(string | number)[]', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: t(
                            () => l[9] || (l[9] = [e('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        u(o),
                      ]),
                      _: 1,
                    }),
                    u(d, null, {
                      default: t(() => [
                        u(o, null, {
                          default: t(
                            () => l[10] || (l[10] = [n('default-active-key')])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: t(
                            () =>
                              l[11] ||
                              (l[11] = [
                                n(
                                  '\u9ED8\u8BA4\u5C55\u5F00\u7684\u9762\u677F\u7684 '
                                ),
                                e('code', null, 'key', -1),
                                n(
                                  ' \uFF08\u975E\u53D7\u63A7\u6A21\u5F0F\uFF09'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: t(
                            () =>
                              l[12] ||
                              (l[12] = [
                                e('code', null, '(string | number)[]', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: t(
                            () => l[13] || (l[13] = [e('code', null, '[]', -1)])
                          ),
                          _: 1,
                        }),
                        u(o),
                      ]),
                      _: 1,
                    }),
                    u(d, null, {
                      default: t(() => [
                        u(o, null, {
                          default: t(() => l[14] || (l[14] = [n('accordion')])),
                          _: 1,
                        }),
                        u(o, null, {
                          default: t(
                            () =>
                              l[15] ||
                              (l[15] = [
                                n(
                                  '\u662F\u5426\u5F00\u542F\u624B\u98CE\u7434\u6A21\u5F0F'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: t(
                            () =>
                              l[16] ||
                              (l[16] = [e('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: t(
                            () =>
                              l[17] || (l[17] = [e('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        u(o),
                      ]),
                      _: 1,
                    }),
                    u(d, null, {
                      default: t(() => [
                        u(o, null, {
                          default: t(
                            () => l[18] || (l[18] = [n('show-expand-icon')])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: t(
                            () =>
                              l[19] ||
                              (l[19] = [
                                n(
                                  '\u662F\u5426\u663E\u793A\u5C55\u5F00\u56FE\u6807'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: t(
                            () =>
                              l[20] ||
                              (l[20] = [e('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: t(
                            () => l[21] || (l[21] = [e('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: t(() => l[22] || (l[22] = [n('2.33.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(d, null, {
                      default: t(() => [
                        u(o, null, {
                          default: t(
                            () => l[23] || (l[23] = [n('expand-icon-position')])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: t(
                            () =>
                              l[24] ||
                              (l[24] = [
                                n(
                                  '\u5C55\u5F00\u56FE\u6807\u663E\u793A\u7684\u4F4D\u7F6E'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: t(
                            () =>
                              l[25] ||
                              (l[25] = [
                                e('code', null, "'left' | 'right'", -1),
                              ])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: t(
                            () =>
                              l[26] || (l[26] = [e('code', null, "'left'", -1)])
                          ),
                          _: 1,
                        }),
                        u(o),
                      ]),
                      _: 1,
                    }),
                    u(d, null, {
                      default: t(() => [
                        u(o, null, {
                          default: t(() => l[27] || (l[27] = [n('bordered')])),
                          _: 1,
                        }),
                        u(o, null, {
                          default: t(
                            () =>
                              l[28] ||
                              (l[28] = [
                                n('\u662F\u5426\u663E\u793A\u8FB9\u6846'),
                              ])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: t(
                            () =>
                              l[29] ||
                              (l[29] = [e('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: t(
                            () =>
                              l[30] || (l[30] = [e('code', null, 'true', -1)])
                          ),
                          _: 1,
                        }),
                        u(o),
                      ]),
                      _: 1,
                    }),
                    u(d, null, {
                      default: t(() => [
                        u(o, null, {
                          default: t(
                            () => l[31] || (l[31] = [n('destroy-on-hide')])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: t(
                            () =>
                              l[32] ||
                              (l[32] = [
                                n(
                                  '\u662F\u5426\u5728\u9690\u85CF\u65F6\u9500\u6BC1\u5185\u5BB9'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: t(
                            () =>
                              l[33] ||
                              (l[33] = [e('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: t(
                            () =>
                              l[34] || (l[34] = [e('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: t(() => l[35] || (l[35] = [n('2.27.0')])),
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
          l[84] ||
            (l[84] = e(
              'h3',
              { id: 'collapse Events' },
              [e('code', null, '<collapse>'), n(' Events')],
              -1
            )),
          u(
            r,
            { class: 'component-api-table' },
            {
              default: t(() => [
                l[43] ||
                  (l[43] = e(
                    'colgroup',
                    null,
                    [e('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                u(a, null, {
                  default: t(() => [
                    u(d, null, {
                      default: t(() => [
                        u(s, null, {
                          default: t(
                            () => l[37] || (l[37] = [n('\u4E8B\u4EF6\u540D')])
                          ),
                          _: 1,
                        }),
                        u(s, null, {
                          default: t(
                            () => l[38] || (l[38] = [n('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        u(s, null, {
                          default: t(
                            () => l[39] || (l[39] = [n('\u53C2\u6570')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                u(p, null, {
                  default: t(() => [
                    u(d, null, {
                      default: t(() => [
                        u(o, null, {
                          default: t(() => l[40] || (l[40] = [n('change')])),
                          _: 1,
                        }),
                        u(o, null, {
                          default: t(
                            () =>
                              l[41] ||
                              (l[41] = [
                                n(
                                  '\u5C55\u5F00\u7684\u9762\u677F\u53D1\u751F\u6539\u53D8\u65F6\u89E6\u53D1'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: t(
                            () =>
                              l[42] ||
                              (l[42] = [
                                n('activeKey: '),
                                e('code', null, '(string | number)[]', -1),
                                e('br', null, null, -1),
                                n('ev: '),
                                e('code', null, 'Event', -1),
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
          l[85] ||
            (l[85] = e(
              'h3',
              { id: 'collapse-item Props' },
              [e('code', null, '<collapse-item>'), n(' Props')],
              -1
            )),
          u(
            r,
            { class: 'component-api-table' },
            {
              default: t(() => [
                l[66] ||
                  (l[66] = e(
                    'colgroup',
                    null,
                    [e('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                u(a, null, {
                  default: t(() => [
                    u(d, null, {
                      default: t(() => [
                        u(s, null, {
                          default: t(
                            () => l[44] || (l[44] = [n('\u53C2\u6570\u540D')])
                          ),
                          _: 1,
                        }),
                        u(s, null, {
                          default: t(
                            () => l[45] || (l[45] = [n('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        u(s, null, {
                          default: t(
                            () => l[46] || (l[46] = [n('\u7C7B\u578B')])
                          ),
                          _: 1,
                        }),
                        u(s, null, {
                          default: t(
                            () => l[47] || (l[47] = [n('\u9ED8\u8BA4\u503C')])
                          ),
                          _: 1,
                        }),
                        u(s, null, {
                          default: t(
                            () => l[48] || (l[48] = [n('\u7248\u672C')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                u(p, null, {
                  default: t(() => [
                    u(d, null, {
                      default: t(() => [
                        u(o, null, {
                          default: t(() => l[49] || (l[49] = [n('header')])),
                          _: 1,
                        }),
                        u(o, null, {
                          default: t(
                            () =>
                              l[50] ||
                              (l[50] = [n('\u9762\u677F\u7684\u6807\u9898')])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: t(
                            () =>
                              l[51] || (l[51] = [e('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: t(
                            () => l[52] || (l[52] = [e('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        u(o),
                      ]),
                      _: 1,
                    }),
                    u(d, null, {
                      default: t(() => [
                        u(o, null, {
                          default: t(() => l[53] || (l[53] = [n('disabled')])),
                          _: 1,
                        }),
                        u(o, null, {
                          default: t(
                            () =>
                              l[54] || (l[54] = [n('\u662F\u5426\u7981\u7528')])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: t(
                            () =>
                              l[55] ||
                              (l[55] = [e('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: t(
                            () =>
                              l[56] || (l[56] = [e('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        u(o),
                      ]),
                      _: 1,
                    }),
                    u(d, null, {
                      default: t(() => [
                        u(o, null, {
                          default: t(
                            () => l[57] || (l[57] = [n('show-expand-icon')])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: t(
                            () =>
                              l[58] ||
                              (l[58] = [
                                n(
                                  '\u662F\u5426\u663E\u793A\u5C55\u5F00\u56FE\u6807'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: t(
                            () =>
                              l[59] ||
                              (l[59] = [e('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: t(
                            () =>
                              l[60] || (l[60] = [e('code', null, 'true', -1)])
                          ),
                          _: 1,
                        }),
                        u(o),
                      ]),
                      _: 1,
                    }),
                    u(d, null, {
                      default: t(() => [
                        u(o, null, {
                          default: t(
                            () => l[61] || (l[61] = [n('destroy-on-hide')])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: t(
                            () =>
                              l[62] ||
                              (l[62] = [
                                n(
                                  '\u662F\u5426\u5728\u9690\u85CF\u65F6\u9500\u6BC1\u5185\u5BB9'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: t(
                            () =>
                              l[63] ||
                              (l[63] = [e('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: t(
                            () =>
                              l[64] || (l[64] = [e('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: t(() => l[65] || (l[65] = [n('2.27.0')])),
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
            (l[86] = e(
              'h3',
              { id: 'collapse-item Slots' },
              [e('code', null, '<collapse-item>'), n(' Slots')],
              -1
            )),
          u(
            r,
            { class: 'component-api-table' },
            {
              default: t(() => [
                l[81] ||
                  (l[81] = e(
                    'colgroup',
                    null,
                    [e('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                u(a, null, {
                  default: t(() => [
                    u(d, null, {
                      default: t(() => [
                        u(s, null, {
                          default: t(
                            () => l[67] || (l[67] = [n('\u63D2\u69FD\u540D')])
                          ),
                          _: 1,
                        }),
                        u(s, null, {
                          default: t(
                            () => l[68] || (l[68] = [n('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        u(s, null, {
                          default: t(
                            () => l[69] || (l[69] = [n('\u53C2\u6570')])
                          ),
                          _: 1,
                        }),
                        u(s, null, {
                          default: t(
                            () => l[70] || (l[70] = [n('\u7248\u672C')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                u(p, null, {
                  default: t(() => [
                    u(d, null, {
                      default: t(() => [
                        u(o, null, {
                          default: t(() => l[71] || (l[71] = [n('extra')])),
                          _: 1,
                        }),
                        u(o, null, {
                          default: t(
                            () =>
                              l[72] || (l[72] = [n('\u989D\u5916\u5185\u5BB9')])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: t(() => l[73] || (l[73] = [n('-')])),
                          _: 1,
                        }),
                        u(o),
                      ]),
                      _: 1,
                    }),
                    u(d, null, {
                      default: t(() => [
                        u(o, null, {
                          default: t(
                            () => l[74] || (l[74] = [n('expand-icon')])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: t(
                            () =>
                              l[75] || (l[75] = [n('\u5C55\u5F00\u56FE\u6807')])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: t(
                            () =>
                              l[76] ||
                              (l[76] = [
                                n('active: '),
                                e('code', null, 'boolean', -1),
                                e('br', null, null, -1),
                                n('disabled: '),
                                e('code', null, 'boolean', -1),
                                e('br', null, null, -1),
                                n('position: '),
                                e('code', null, "'left' | 'right'", -1),
                              ])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: t(() => l[77] || (l[77] = [n('2.33.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(d, null, {
                      default: t(() => [
                        u(o, null, {
                          default: t(() => l[78] || (l[78] = [n('header')])),
                          _: 1,
                        }),
                        u(o, null, {
                          default: t(
                            () =>
                              l[79] ||
                              (l[79] = [n('\u9762\u677F\u7684\u6807\u9898')])
                          ),
                          _: 1,
                        }),
                        u(o, null, {
                          default: t(() => l[80] || (l[80] = [n('-')])),
                          _: 1,
                        }),
                        u(o),
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
          u(
            g,
            { level: '2', href: 'FAQ' },
            { default: t(() => l[82] || (l[82] = [n('FAQ')])), _: 1 }
          ),
          l[87] ||
            (l[87] = e(
              'h3',
              {
                id: 'CollapseItem \u7EC4\u4EF6\u7684 key \u5C5E\u6027\u4E3A\u5FC5\u586B',
              },
              [
                e('code', null, '<CollapseItem>'),
                n(' \u7EC4\u4EF6\u7684 '),
                e('code', null, 'key'),
                n(' \u5C5E\u6027\u4E3A\u5FC5\u586B'),
              ],
              -1
            )),
          l[88] ||
            (l[88] = e(
              'p',
              null,
              [
                n('\u5728 '),
                e('code', null, '<Collapse>'),
                n(' \u7EC4\u4EF6\u4E2D\u6BCF\u4E2A '),
                e('code', null, '<CollapseItem>'),
                n(' \u90FD\u9700\u8981\u6307\u5B9A\u552F\u4E00\u7684 '),
                e('code', null, 'key'),
                n(' \u5C5E\u6027\uFF0C'),
                e('code', null, 'key'),
                n(' \u5BF9\u5E94 '),
                e('code', null, 'activeKey'),
                n(' \u4E2D\u7684\u503C\u3002'),
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
const Z = P(G, [['render', J]]);
export { Z as default };
