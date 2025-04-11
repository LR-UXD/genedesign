import {
  _ as E,
  d as P,
  u as S,
  r as d,
  o as C,
  c as N,
  w as e,
  e as o,
  a as t,
  b as u,
  m as V,
} from './index.9c61ea88.js';
import {
  D as W,
  a as I,
  b as $,
  c as z,
  d as R,
  e as O,
  f as U,
  g as j,
} from './tooltip.de2b4ba0.js';

const b = [
  {
    version: '2.57.0',
    date: '2025-03-10',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fixed Drag change slider value not working on mobile side (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/3343">#3343</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.44.2',
    date: '2023-03-17',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem of model-value binding error in range mode (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2241">#2241</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.42.1',
    date: '2023-02-03',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Optimize the automatic repair of invalid input in the digital input box (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1952">#1952</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.42.0',
    date: '2023-01-13',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>add show-tooltip props (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2037">#2037</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.38.1',
    date: '2022-11-04',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>fix the slider show wrong position when set min value (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1826">#1826</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.18.0',
    date: '2022-03-04',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem that change will not be triggered when the input box is changed (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/775">#775</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.1.0',
    date: '2021-11-05',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fixed the problem that the right click did not release the drag event (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/97">#97</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const q = P({
  name: 'ArcoMain',
  components: {
    DemoBasic: W,
    DemoDisabled: I,
    DemoStep: $,
    DemoMarks: z,
    DemoRange: R,
    DemoInput: O,
    DemoVertical: U,
    DemoTooltip: j,
  },
  setup() {
    const { locale: a } = S();
    return {
      locale: a,
      data: {
        meta: { type: 'Component', category: 'Data Entry' },
        title: 'Slider',
        description:
          'Sliding input device, showing current value and selectable range.',
      },
      changelog: typeof b === 'undefined' ? void 0 : b,
      getMessage: (r, f) => (a.value === 'zh-CN' ? r : f),
    };
  },
});
function G(a, l, x, v, r, f) {
  const y = d('demo-basic');
  const w = d('demo-disabled');
  const D = d('demo-step');
  const k = d('demo-marks');
  const T = d('demo-range');
  const F = d('demo-input');
  const B = d('demo-vertical');
  const _ = d('demo-tooltip');
  const M = d('anchor-head');
  const i = d('a-th');
  const s = d('a-tr');
  const p = d('a-thead');
  const n = d('a-td');
  const m = d('a-tbody');
  const g = d('a-table');
  const A = d('arco-article');
  return (
    C(),
    N(
      A,
      V(a.data, { changelog: a.changelog }),
      {
        default: e(() => [
          l[63] ||
            (l[63] = o(
              'p',
              null,
              [o('em', null, 'Auto translate by google.')],
              -1
            )),
          t(y),
          t(w),
          t(D),
          t(k),
          t(T),
          t(F),
          t(B),
          t(_),
          t(
            M,
            { level: '2', href: 'API' },
            { default: e(() => l[0] || (l[0] = [u('API')])), _: 1 }
          ),
          l[64] ||
            (l[64] = o(
              'h3',
              { id: 'slider Props' },
              [o('code', null, '<slider>'), u(' Props')],
              -1
            )),
          t(
            g,
            { class: 'component-api-table' },
            {
              default: e(() => [
                l[55] ||
                  (l[55] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(p, null, {
                  default: e(() => [
                    t(s, null, {
                      default: e(() => [
                        t(i, null, {
                          default: e(() => l[1] || (l[1] = [u('Attribute')])),
                          _: 1,
                        }),
                        t(i, null, {
                          default: e(() => l[2] || (l[2] = [u('Description')])),
                          _: 1,
                        }),
                        t(i, null, {
                          default: e(() => l[3] || (l[3] = [u('Type')])),
                          _: 1,
                        }),
                        t(i, null, {
                          default: e(() => l[4] || (l[4] = [u('Default')])),
                          _: 1,
                        }),
                        t(i, null, {
                          default: e(() => l[5] || (l[5] = [u('version')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(m, null, {
                  default: e(() => [
                    t(s, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () =>
                              l[6] ||
                              (l[6] = [
                                u('model-value '),
                                o('strong', null, '(v-model)', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[7] || (l[7] = [u('Value')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[8] ||
                              (l[8] = [
                                o(
                                  'code',
                                  null,
                                  'number | [number, number]',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[9] || (l[9] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () => l[10] || (l[10] = [u('default-value')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[11] ||
                              (l[11] = [
                                u('Default value (uncontrolled state)'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[12] ||
                              (l[12] = [
                                o(
                                  'code',
                                  null,
                                  'number | [number, number]',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[13] || (l[13] = [o('code', null, '0', -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[14] || (l[14] = [u('step')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[15] || (l[15] = [u('Sliding step')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[16] || (l[16] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[17] || (l[17] = [o('code', null, '1', -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[18] || (l[18] = [u('min')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[19] || (l[19] = [u('Minimum sliding range')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[20] || (l[20] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[21] || (l[21] = [o('code', null, '0', -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[22] || (l[22] = [u('marks')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[23] || (l[23] = [u('Set the displayed label')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[24] ||
                              (l[24] = [
                                o('code', null, 'Record<number, string>', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[25] || (l[25] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[26] || (l[26] = [u('max')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[27] || (l[27] = [u('Maximum sliding range')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[28] || (l[28] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[29] || (l[29] = [o('code', null, '100', -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[30] || (l[30] = [u('direction')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[31] ||
                              (l[31] = [u('The direction of the slider')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[32] ||
                              (l[32] = [o('code', null, 'Direction', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[33] ||
                              (l[33] = [o('code', null, "'horizontal'", -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[34] || (l[34] = [u('disabled')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[35] || (l[35] = [u('Whether to disable')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[36] ||
                              (l[36] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[37] || (l[37] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () => l[38] || (l[38] = [u('show-ticks')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[39] || (l[39] = [u('Whether to show ticks')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[40] ||
                              (l[40] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[41] || (l[41] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () => l[42] || (l[42] = [u('show-input')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[43] ||
                              (l[43] = [u('Whether to show the input')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[44] ||
                              (l[44] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[45] || (l[45] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[46] || (l[46] = [u('range')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[47] ||
                              (l[47] = [u('Whether to use range selection')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[48] ||
                              (l[48] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[49] || (l[49] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () => l[50] || (l[50] = [u('show-tooltip')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[51] || (l[51] = [u('Whether to show tooltip')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[52] ||
                              (l[52] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[53] || (l[53] = [o('code', null, 'true', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[54] || (l[54] = [u('2.42.0')])),
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
          l[65] ||
            (l[65] = o(
              'h3',
              { id: 'slider Events' },
              [o('code', null, '<slider>'), u(' Events')],
              -1
            )),
          t(
            g,
            { class: 'component-api-table' },
            {
              default: e(() => [
                l[62] ||
                  (l[62] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(p, null, {
                  default: e(() => [
                    t(s, null, {
                      default: e(() => [
                        t(i, null, {
                          default: e(
                            () => l[56] || (l[56] = [u('Event Name')])
                          ),
                          _: 1,
                        }),
                        t(i, null, {
                          default: e(
                            () => l[57] || (l[57] = [u('Description')])
                          ),
                          _: 1,
                        }),
                        t(i, null, {
                          default: e(
                            () => l[58] || (l[58] = [u('Parameters')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(m, null, {
                  default: e(() => [
                    t(s, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[59] || (l[59] = [u('change')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[60] ||
                              (l[60] = [u('Trigger when the value changes')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[61] ||
                              (l[61] = [
                                u('value: '),
                                o(
                                  'code',
                                  null,
                                  'number | [number, number]',
                                  -1
                                ),
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
const K = E(q, [['render', G]]);
export { K as default };
