import {
  _ as S,
  d as _,
  u as A,
  r as s,
  o as F,
  c as N,
  w as n,
  e as u,
  a as t,
  b as e,
  m as M,
} from './index.9c61ea88.js';
import {
  D as V,
  a as $,
  b as I,
  c as O,
  d as U,
  e as R,
  f as j,
  g as q,
} from './only-panel.57dd3bc2.js';

const b = [
  {
    version: '2.56.0',
    date: '2024-07-26',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>fix shaking issue when selecting color with v-model (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/3180">#3180</a>)</p>
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
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>fix color-picker style import (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/3052">#3052</a>)</p>
`,
        ],
      },
      {
        type: 'style',
        typeText: '\u{1F485} Style',
        list: [
          `<p>Optimize color control bar background fillet style (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/3116">#3116</a>)</p>
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
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>fix v-model not working (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/3030">#3030</a>)</p>
`,
          `<p>Fix copywriting errors (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/3028">#3028</a>)</p>
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
        typeText: '\u{1F195} Feature',
        list: [
          `<p>add color-picker component (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2958">#2958</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const G = _({
  name: 'ArcoMain',
  components: {
    DemoBasic: V,
    DemoSize: $,
    DemoDisabled: I,
    DemoFormat: O,
    DemoColors: U,
    DemoTrigger: R,
    DemoTriggerElement: j,
    DemoOnlyPanel: q,
  },
  setup() {
    const { locale: a } = A();
    return {
      locale: a,
      data: {
        meta: { type: 'Component', category: 'Data Entry' },
        title: 'ColorPicker',
        description: 'Used for select and display colors.',
      },
      changelog: typeof b === 'undefined' ? void 0 : b,
      getMessage: (i, f) => (a.value === 'zh-CN' ? i : f),
    };
  },
});
function H(a, l, y, v, i, f) {
  const x = s('demo-basic');
  const k = s('demo-size');
  const D = s('demo-disabled');
  const w = s('demo-format');
  const T = s('demo-colors');
  const C = s('demo-trigger');
  const P = s('demo-trigger-element');
  const z = s('demo-only-panel');
  const B = s('anchor-head');
  const r = s('a-th');
  const d = s('a-tr');
  const p = s('a-thead');
  const o = s('a-td');
  const g = s('a-tbody');
  const m = s('a-table');
  const E = s('arco-article');
  return (
    F(),
    N(
      E,
      M(a.data, { changelog: a.changelog }),
      {
        default: n(() => [
          l[68] ||
            (l[68] = u(
              'p',
              null,
              [u('em', null, 'Auto translate by google.')],
              -1
            )),
          t(x),
          t(k),
          t(D),
          t(w),
          t(T),
          t(C),
          t(P),
          t(z),
          t(
            B,
            { level: '2', href: 'API' },
            { default: n(() => l[0] || (l[0] = [e('API')])), _: 1 }
          ),
          l[69] ||
            (l[69] = u(
              'h3',
              { id: 'color-picker Props' },
              [u('code', null, '<color-picker>'), e(' Props')],
              -1
            )),
          t(
            m,
            { class: 'component-api-table' },
            {
              default: n(() => [
                l[57] ||
                  (l[57] = u(
                    'colgroup',
                    null,
                    [u('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(p, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(r, null, {
                          default: n(() => l[1] || (l[1] = [e('Attribute')])),
                          _: 1,
                        }),
                        t(r, null, {
                          default: n(() => l[2] || (l[2] = [e('Description')])),
                          _: 1,
                        }),
                        t(r, null, {
                          default: n(() => l[3] || (l[3] = [e('Type')])),
                          _: 1,
                        }),
                        t(r, null, {
                          default: n(() => l[4] || (l[4] = [e('Default')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(g, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(o, null, {
                          default: n(
                            () =>
                              l[5] ||
                              (l[5] = [
                                e('model-value '),
                                u('strong', null, '(v-model)', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(() => l[6] || (l[6] = [e('Value')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[7] || (l[7] = [u('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () => l[8] || (l[8] = [u('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(o, null, {
                          default: n(
                            () => l[9] || (l[9] = [e('default-value')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[10] ||
                              (l[10] = [
                                e('Default value (uncontrolled state)'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[11] || (l[11] = [u('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () => l[12] || (l[12] = [u('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(o, null, {
                          default: n(() => l[13] || (l[13] = [e('format')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () => l[14] || (l[14] = [e('Color value format')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[15] ||
                              (l[15] = [u('code', null, "'hex' | 'rgb'", -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () => l[16] || (l[16] = [u('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(o, null, {
                          default: n(() => l[17] || (l[17] = [e('size')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(() => l[18] || (l[18] = [e('Size')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[19] ||
                              (l[19] = [
                                u(
                                  'code',
                                  null,
                                  "'mini' | 'small' | 'medium' | 'large'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[20] ||
                              (l[20] = [u('code', null, "'medium'", -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(o, null, {
                          default: n(() => l[21] || (l[21] = [e('show-text')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () => l[22] || (l[22] = [e('Show color value')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[23] ||
                              (l[23] = [u('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[24] || (l[24] = [u('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(o, null, {
                          default: n(
                            () => l[25] || (l[25] = [e('show-history')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () => l[26] || (l[26] = [e('Show history colors')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[27] ||
                              (l[27] = [u('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[28] || (l[28] = [u('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(o, null, {
                          default: n(
                            () => l[29] || (l[29] = [e('show-preset')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () => l[30] || (l[30] = [e('Show preset colors')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[31] ||
                              (l[31] = [u('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[32] || (l[32] = [u('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(o, null, {
                          default: n(() => l[33] || (l[33] = [e('disabled')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(() => l[34] || (l[34] = [e('disabled')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[35] ||
                              (l[35] = [u('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[36] || (l[36] = [u('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(o, null, {
                          default: n(
                            () => l[37] || (l[37] = [e('disabled-alpha')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[38] ||
                              (l[38] = [e('Disable transparency channel')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[39] ||
                              (l[39] = [u('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[40] || (l[40] = [u('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(o, null, {
                          default: n(
                            () => l[41] || (l[41] = [e('hide-trigger')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[42] ||
                              (l[42] = [
                                e(
                                  'There is no trigger element, only the color panel is displayed'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[43] ||
                              (l[43] = [u('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[44] || (l[44] = [u('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(o, null, {
                          default: n(
                            () => l[45] || (l[45] = [e('trigger-props')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[46] ||
                              (l[46] = [
                                e('Can accept Props of all '),
                                u(
                                  'a',
                                  {
                                    class: 'link',
                                    href: '/vue/component/trigger',
                                  },
                                  'Trigger',
                                  -1
                                ),
                                e(' components'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[47] ||
                              (l[47] = [
                                u('code', null, 'Partial<TriggerProps>', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () => l[48] || (l[48] = [u('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(o, null, {
                          default: n(
                            () => l[49] || (l[49] = [e('history-colors')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[50] ||
                              (l[50] = [e('Color array of historical colors')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[51] ||
                              (l[51] = [u('code', null, 'string[]', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () => l[52] || (l[52] = [u('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(o, null, {
                          default: n(
                            () => l[53] || (l[53] = [e('preset-colors')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[54] ||
                              (l[54] = [e('Color array of preset colors')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[55] ||
                              (l[55] = [u('code', null, 'string[]', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[56] ||
                              (l[56] = [u('code', null, '() => colors', -1)])
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
          l[70] ||
            (l[70] = u(
              'h3',
              { id: 'color-picker Events' },
              [u('code', null, '<color-picker>'), e(' Events')],
              -1
            )),
          t(
            m,
            { class: 'component-api-table' },
            {
              default: n(() => [
                l[67] ||
                  (l[67] = u(
                    'colgroup',
                    null,
                    [u('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(p, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(r, null, {
                          default: n(
                            () => l[58] || (l[58] = [e('Event Name')])
                          ),
                          _: 1,
                        }),
                        t(r, null, {
                          default: n(
                            () => l[59] || (l[59] = [e('Description')])
                          ),
                          _: 1,
                        }),
                        t(r, null, {
                          default: n(
                            () => l[60] || (l[60] = [e('Parameters')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(g, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(o, null, {
                          default: n(() => l[61] || (l[61] = [e('change')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[62] ||
                              (l[62] = [
                                e('Triggered when the color value changes'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[63] ||
                              (l[63] = [
                                e('value: '),
                                u('code', null, 'string', -1),
                              ])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(o, null, {
                          default: n(
                            () => l[64] || (l[64] = [e('popup-visible-change')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[65] ||
                              (l[65] = [
                                e(
                                  'Triggered when the color panel is expanded and collapsed'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[66] ||
                              (l[66] = [
                                e('visible: '),
                                u('code', null, 'boolean', -1),
                                u('br', null, null, -1),
                                e('value: '),
                                u('code', null, 'string', -1),
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
const L = S(G, [['render', H]]);
export { L as default };
