import {
  _,
  d as w,
  u as z,
  r as s,
  o as N,
  c as M,
  w as n,
  a as u,
  b as o,
  e,
  m as $,
} from './index.9c61ea88.js';
import {
  D as I,
  a as V,
  b as O,
  c as R,
  d as S,
  e as j,
  f as q,
  g as G,
} from './only-panel.57dd3bc2.js';

const C = [
  {
    version: '2.56.0',
    date: '2024-07-26',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} \u95EE\u9898\u4FEE\u590D',
        list: [
          `<p>\u4FEE\u590D\u5728 v-model \u4E0B\u9009\u62E9\u989C\u8272\u65F6\u51FA\u73B0\u7684\u6296\u52A8\u95EE\u9898 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/3180">#3180</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.55.2',
    date: '2024-05-10',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} \u95EE\u9898\u4FEE\u590D',
        list: [
          `<p>\u4FEE\u590D\u6837\u5F0F\u6309\u9700\u5BFC\u5165\u9519\u8BEF (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/3052">#3052</a>)</p>
`,
        ],
      },
      {
        type: 'style',
        typeText: '\u{1F485} \u6837\u5F0F\u66F4\u65B0',
        list: [
          `<p>\u4F18\u5316\u989C\u8272\u63A7\u5236\u6761\u80CC\u666F\u5706\u89D2\u6837\u5F0F (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/3116">#3116</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.55.1',
    date: '2024-03-29',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} \u95EE\u9898\u4FEE\u590D',
        list: [
          `<p>\u4FEE\u590D\u53CC\u5411\u7ED1\u5B9A\u4E0D\u751F\u6548\u95EE\u9898 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/3030">#3030</a>)</p>
`,
          `<p>\u4FEE\u590D\u6587\u6848\u9519\u8BEF (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/3028">#3028</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.55.0',
    date: '2024-03-15',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} \u65B0\u589E\u529F\u80FD',
        list: [
          `<p>\u65B0\u589E\u989C\u8272\u9009\u62E9\u5668 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2958">#2958</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const H = w({
  name: 'ArcoMain',
  components: {
    DemoBasic: I,
    DemoSize: V,
    DemoDisabled: O,
    DemoFormat: R,
    DemoColors: S,
    DemoTrigger: j,
    DemoTriggerElement: q,
    DemoOnlyPanel: G,
  },
  setup() {
    const { locale: f } = z();
    return {
      locale: f,
      data: {
        meta: { type: '\u7EC4\u4EF6', category: '\u6570\u636E\u8F93\u5165' },
        title: '\u989C\u8272\u9009\u62E9\u5668 ColorPicker',
        description: '\u7528\u4E8E\u9009\u62E9\u548C\u5C55\u793A\u989C\u8272',
      },
      changelog: typeof C === 'undefined' ? void 0 : C,
      getMessage: (a, i) => (f.value === 'zh-CN' ? a : i),
    };
  },
});
function J(f, l, b, E, a, i) {
  const F = s('demo-basic');
  const v = s('demo-size');
  const D = s('demo-disabled');
  const y = s('demo-format');
  const x = s('demo-colors');
  const A = s('demo-trigger');
  const B = s('demo-trigger-element');
  const k = s('demo-only-panel');
  const P = s('anchor-head');
  const r = s('a-th');
  const d = s('a-tr');
  const p = s('a-thead');
  const t = s('a-td');
  const m = s('a-tbody');
  const g = s('a-table');
  const T = s('arco-article');
  return (
    N(),
    M(
      T,
      $(f.data, { changelog: f.changelog }),
      {
        default: n(() => [
          u(F),
          u(v),
          u(D),
          u(y),
          u(x),
          u(A),
          u(B),
          u(k),
          u(
            P,
            { level: '2', href: 'API' },
            { default: n(() => l[0] || (l[0] = [o('API')])), _: 1 }
          ),
          l[68] ||
            (l[68] = e(
              'h3',
              { id: 'color-picker Props' },
              [e('code', null, '<color-picker>'), o(' Props')],
              -1
            )),
          u(
            g,
            { class: 'component-api-table' },
            {
              default: n(() => [
                l[57] ||
                  (l[57] = e(
                    'colgroup',
                    null,
                    [e('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                u(p, null, {
                  default: n(() => [
                    u(d, null, {
                      default: n(() => [
                        u(r, null, {
                          default: n(
                            () => l[1] || (l[1] = [o('\u53C2\u6570\u540D')])
                          ),
                          _: 1,
                        }),
                        u(r, null, {
                          default: n(
                            () => l[2] || (l[2] = [o('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        u(r, null, {
                          default: n(
                            () => l[3] || (l[3] = [o('\u7C7B\u578B')])
                          ),
                          _: 1,
                        }),
                        u(r, null, {
                          default: n(
                            () => l[4] || (l[4] = [o('\u9ED8\u8BA4\u503C')])
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
                    u(d, null, {
                      default: n(() => [
                        u(t, null, {
                          default: n(
                            () =>
                              l[5] ||
                              (l[5] = [
                                o('model-value '),
                                e('strong', null, '(v-model)', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () => l[6] || (l[6] = [o('\u7ED1\u5B9A\u503C')])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[7] || (l[7] = [e('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () => l[8] || (l[8] = [e('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(d, null, {
                      default: n(() => [
                        u(t, null, {
                          default: n(
                            () => l[9] || (l[9] = [o('default-value')])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[10] ||
                              (l[10] = [
                                o(
                                  '\u9ED8\u8BA4\u503C\uFF08\u975E\u53D7\u63A7\u72B6\u6001\uFF09'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[11] || (l[11] = [e('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () => l[12] || (l[12] = [e('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(d, null, {
                      default: n(() => [
                        u(t, null, {
                          default: n(() => l[13] || (l[13] = [o('format')])),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[14] ||
                              (l[14] = [
                                o('\u989C\u8272\u503C\u7684\u683C\u5F0F'),
                              ])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[15] ||
                              (l[15] = [e('code', null, "'hex' | 'rgb'", -1)])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () => l[16] || (l[16] = [e('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(d, null, {
                      default: n(() => [
                        u(t, null, {
                          default: n(() => l[17] || (l[17] = [o('size')])),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () => l[18] || (l[18] = [o('\u5C3A\u5BF8')])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[19] ||
                              (l[19] = [
                                e(
                                  'code',
                                  null,
                                  "'mini' | 'small' | 'medium' | 'large'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[20] ||
                              (l[20] = [e('code', null, "'medium'", -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(d, null, {
                      default: n(() => [
                        u(t, null, {
                          default: n(() => l[21] || (l[21] = [o('show-text')])),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[22] ||
                              (l[22] = [o('\u663E\u793A\u989C\u8272\u503C')])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[23] ||
                              (l[23] = [e('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[24] || (l[24] = [e('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(d, null, {
                      default: n(() => [
                        u(t, null, {
                          default: n(
                            () => l[25] || (l[25] = [o('show-history')])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[26] ||
                              (l[26] = [
                                o('\u663E\u793A\u5386\u53F2\u989C\u8272'),
                              ])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[27] ||
                              (l[27] = [e('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[28] || (l[28] = [e('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(d, null, {
                      default: n(() => [
                        u(t, null, {
                          default: n(
                            () => l[29] || (l[29] = [o('show-preset')])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[30] ||
                              (l[30] = [
                                o('\u663E\u793A\u9884\u8BBE\u989C\u8272'),
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
                      ]),
                      _: 1,
                    }),
                    u(d, null, {
                      default: n(() => [
                        u(t, null, {
                          default: n(() => l[33] || (l[33] = [o('disabled')])),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () => l[34] || (l[34] = [o('\u7981\u7528')])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[35] ||
                              (l[35] = [e('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[36] || (l[36] = [e('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(d, null, {
                      default: n(() => [
                        u(t, null, {
                          default: n(
                            () => l[37] || (l[37] = [o('disabled-alpha')])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[38] ||
                              (l[38] = [
                                o('\u7981\u7528\u900F\u660E\u901A\u9053'),
                              ])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[39] ||
                              (l[39] = [e('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[40] || (l[40] = [e('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(d, null, {
                      default: n(() => [
                        u(t, null, {
                          default: n(
                            () => l[41] || (l[41] = [o('hide-trigger')])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[42] ||
                              (l[42] = [
                                o(
                                  '\u6CA1\u6709\u89E6\u53D1\u5143\u7D20\uFF0C\u53EA\u663E\u793A\u989C\u8272\u9762\u677F'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[43] ||
                              (l[43] = [e('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[44] || (l[44] = [e('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(d, null, {
                      default: n(() => [
                        u(t, null, {
                          default: n(
                            () => l[45] || (l[45] = [o('trigger-props')])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[46] ||
                              (l[46] = [
                                o('\u63A5\u53D7\u6240\u6709 '),
                                e(
                                  'a',
                                  {
                                    class: 'link',
                                    href: '/vue/component/trigger',
                                  },
                                  'Trigger',
                                  -1
                                ),
                                o(' \u7EC4\u4EF6\u7684Props'),
                              ])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[47] ||
                              (l[47] = [
                                e('code', null, 'Partial<TriggerProps>', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () => l[48] || (l[48] = [e('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(d, null, {
                      default: n(() => [
                        u(t, null, {
                          default: n(
                            () => l[49] || (l[49] = [o('history-colors')])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[50] ||
                              (l[50] = [
                                o(
                                  '\u5386\u53F2\u989C\u8272\u7684\u989C\u8272\u6570\u7EC4'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[51] ||
                              (l[51] = [e('code', null, 'string[]', -1)])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () => l[52] || (l[52] = [e('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(d, null, {
                      default: n(() => [
                        u(t, null, {
                          default: n(
                            () => l[53] || (l[53] = [o('preset-colors')])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[54] ||
                              (l[54] = [
                                o(
                                  '\u9884\u8BBE\u989C\u8272\u7684\u989C\u8272\u6570\u7EC4'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[55] ||
                              (l[55] = [e('code', null, 'string[]', -1)])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[56] ||
                              (l[56] = [e('code', null, '() => colors', -1)])
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
          l[69] ||
            (l[69] = e(
              'h3',
              { id: 'color-picker Events' },
              [e('code', null, '<color-picker>'), o(' Events')],
              -1
            )),
          u(
            g,
            { class: 'component-api-table' },
            {
              default: n(() => [
                l[67] ||
                  (l[67] = e(
                    'colgroup',
                    null,
                    [e('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                u(p, null, {
                  default: n(() => [
                    u(d, null, {
                      default: n(() => [
                        u(r, null, {
                          default: n(
                            () => l[58] || (l[58] = [o('\u4E8B\u4EF6\u540D')])
                          ),
                          _: 1,
                        }),
                        u(r, null, {
                          default: n(
                            () => l[59] || (l[59] = [o('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        u(r, null, {
                          default: n(
                            () => l[60] || (l[60] = [o('\u53C2\u6570')])
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
                    u(d, null, {
                      default: n(() => [
                        u(t, null, {
                          default: n(() => l[61] || (l[61] = [o('change')])),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[62] ||
                              (l[62] = [
                                o(
                                  '\u989C\u8272\u503C\u6539\u53D8\u65F6\u89E6\u53D1'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[63] ||
                              (l[63] = [
                                o('value: '),
                                e('code', null, 'string', -1),
                              ])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(d, null, {
                      default: n(() => [
                        u(t, null, {
                          default: n(
                            () => l[64] || (l[64] = [o('popup-visible-change')])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[65] ||
                              (l[65] = [
                                o(
                                  '\u989C\u8272\u9762\u677F\u5C55\u5F00\u548C\u6536\u8D77\u65F6\u89E6\u53D1'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[66] ||
                              (l[66] = [
                                o('visible: '),
                                e('code', null, 'boolean', -1),
                                e('br', null, null, -1),
                                o('value: '),
                                e('code', null, 'string', -1),
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
const Q = _(H, [['render', J]]);
export { Q as default };
