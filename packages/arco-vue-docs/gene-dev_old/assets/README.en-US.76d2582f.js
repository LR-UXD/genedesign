import {
  _ as R,
  d as S,
  u as B,
  r as i,
  o as O,
  c as F,
  w as u,
  e,
  a as t,
  b as n,
  m as I,
} from './index.9c61ea88.js';
import {
  D as M,
  a as V,
  b as W,
  c as $,
  d as j,
  e as G,
  f as L,
  g as U,
  h as q,
} from './custom.2daa3be1.js';

const b = [
  {
    version: '2.56.2',
    date: '2024-09-13',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>fix not inheriting the injected size (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/3267">#3267</a>)</p>
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
          `<p>Fix <code>radio-group</code> state not reset when resetting value (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1813">#1813</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.38.0',
    date: '2022-10-28',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem that the state is not cleared when clearing model-value (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1794">#1794</a>)</p>
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
        typeText: '\u{1F195} Feature',
        list: [
          `<p><code>radio-group</code> support  <code>options</code> prop (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1090">#1090</a>)</p>
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
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>Add radio slot, you can customize the radio (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/769">#769</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.18.0-beta.1',
    date: '2022-02-18',
    list: [
      {
        type: 'attention',
        typeText: '\u26A0\uFE0F Important Attention',
        list: [
          `<p>Outer wrapping DOM changed from span to label (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/697">#697</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.8.0',
    date: '2021-12-01',
    list: [
      {
        type: 'style',
        typeText: '\u{1F485} Style',
        list: [
          `<p>Remove the selected bold effect in button mode (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/308">#308</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const H = S({
  name: 'ArcoMain',
  components: {
    DemoBasic: M,
    DemoControl: V,
    DemoGroup: W,
    DemoOptions: $,
    DemoDirection: j,
    DemoButton: G,
    DemoSize: L,
    DemoLayout: U,
    DemoCustom: q,
  },
  setup() {
    const { locale: p } = B();
    return {
      locale: p,
      data: {
        meta: { type: 'Component', category: 'Data Entry' },
        title: 'Radio',
        description:
          'In a set of related and mutually exclusive data, the user can only select one option.',
      },
      changelog: typeof b === 'undefined' ? void 0 : b,
      getMessage: (m, g) => (p.value === 'zh-CN' ? m : g),
    };
  },
});
function J(p, l, v, y, m, g) {
  const x = i('demo-basic');
  const D = i('demo-control');
  const T = i('demo-group');
  const w = i('demo-options');
  const k = i('demo-direction');
  const P = i('demo-button');
  const z = i('demo-size');
  const A = i('demo-layout');
  const C = i('demo-custom');
  const E = i('anchor-head');
  const d = i('a-th');
  const s = i('a-tr');
  const r = i('a-thead');
  const o = i('a-td');
  const a = i('a-tbody');
  const f = i('a-table');
  const N = i('arco-article');
  return (
    O(),
    F(
      N,
      I(p.data, { changelog: p.changelog }),
      {
        default: u(() => [
          l[114] ||
            (l[114] = e(
              'p',
              null,
              [e('em', null, 'Auto translate by google.')],
              -1
            )),
          t(x),
          t(D),
          t(T),
          t(w),
          t(k),
          t(P),
          t(z),
          t(A),
          t(C),
          t(
            E,
            { level: '2', href: 'API' },
            { default: u(() => l[0] || (l[0] = [n('API')])), _: 1 }
          ),
          l[115] ||
            (l[115] = e(
              'h3',
              { id: 'radio Props' },
              [e('code', null, '<radio>'), n(' Props')],
              -1
            )),
          t(
            f,
            { class: 'component-api-table' },
            {
              default: u(() => [
                l[25] ||
                  (l[25] = e(
                    'colgroup',
                    null,
                    [e('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(r, null, {
                  default: u(() => [
                    t(s, null, {
                      default: u(() => [
                        t(d, null, {
                          default: u(() => l[1] || (l[1] = [n('Attribute')])),
                          _: 1,
                        }),
                        t(d, null, {
                          default: u(() => l[2] || (l[2] = [n('Description')])),
                          _: 1,
                        }),
                        t(d, null, {
                          default: u(() => l[3] || (l[3] = [n('Type')])),
                          _: 1,
                        }),
                        t(d, null, {
                          default: u(() => l[4] || (l[4] = [n('Default')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(a, null, {
                  default: u(() => [
                    t(s, null, {
                      default: u(() => [
                        t(o, null, {
                          default: u(
                            () =>
                              l[5] ||
                              (l[5] = [
                                n('model-value '),
                                e('strong', null, '(v-model)', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(() => l[6] || (l[6] = [n('Value')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[7] ||
                              (l[7] = [
                                e(
                                  'code',
                                  null,
                                  'string | number | boolean',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () => l[8] || (l[8] = [e('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: u(() => [
                        t(o, null, {
                          default: u(
                            () => l[9] || (l[9] = [n('default-checked')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[10] ||
                              (l[10] = [
                                n(
                                  'Whether checked by default (uncontrolled state)'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[11] ||
                              (l[11] = [e('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[12] || (l[12] = [e('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: u(() => [
                        t(o, null, {
                          default: u(() => l[13] || (l[13] = [n('value')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[14] ||
                              (l[14] = [
                                n('The '),
                                e('code', null, 'value', -1),
                                n(' of the option'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[15] ||
                              (l[15] = [
                                e(
                                  'code',
                                  null,
                                  'string | number | boolean',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[16] || (l[16] = [e('code', null, 'true', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: u(() => [
                        t(o, null, {
                          default: u(() => l[17] || (l[17] = [n('type')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () => l[18] || (l[18] = [n('Radio type')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[19] ||
                              (l[19] = [
                                e('code', null, "'radio' | 'button'", -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[20] ||
                              (l[20] = [e('code', null, "'radio'", -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: u(() => [
                        t(o, null, {
                          default: u(() => l[21] || (l[21] = [n('disabled')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () => l[22] || (l[22] = [n('Whether to disable')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[23] ||
                              (l[23] = [e('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[24] || (l[24] = [e('code', null, 'false', -1)])
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
          l[116] ||
            (l[116] = e(
              'h3',
              { id: 'radio Events' },
              [e('code', null, '<radio>'), n(' Events')],
              -1
            )),
          t(
            f,
            { class: 'component-api-table' },
            {
              default: u(() => [
                l[32] ||
                  (l[32] = e(
                    'colgroup',
                    null,
                    [e('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(r, null, {
                  default: u(() => [
                    t(s, null, {
                      default: u(() => [
                        t(d, null, {
                          default: u(
                            () => l[26] || (l[26] = [n('Event Name')])
                          ),
                          _: 1,
                        }),
                        t(d, null, {
                          default: u(
                            () => l[27] || (l[27] = [n('Description')])
                          ),
                          _: 1,
                        }),
                        t(d, null, {
                          default: u(
                            () => l[28] || (l[28] = [n('Parameters')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(a, null, {
                  default: u(() => [
                    t(s, null, {
                      default: u(() => [
                        t(o, null, {
                          default: u(() => l[29] || (l[29] = [n('change')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[30] ||
                              (l[30] = [n('Trigger when the value changes')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[31] ||
                              (l[31] = [
                                n('value: '),
                                e(
                                  'code',
                                  null,
                                  'string | number | boolean',
                                  -1
                                ),
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
          l[117] ||
            (l[117] = e(
              'h3',
              { id: 'radio Slots' },
              [e('code', null, '<radio>'), n(' Slots')],
              -1
            )),
          t(
            f,
            { class: 'component-api-table' },
            {
              default: u(() => [
                l[41] ||
                  (l[41] = e(
                    'colgroup',
                    null,
                    [e('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(r, null, {
                  default: u(() => [
                    t(s, null, {
                      default: u(() => [
                        t(d, null, {
                          default: u(() => l[33] || (l[33] = [n('Slot Name')])),
                          _: 1,
                        }),
                        t(d, null, {
                          default: u(
                            () => l[34] || (l[34] = [n('Description')])
                          ),
                          _: 1,
                        }),
                        t(d, null, {
                          default: u(
                            () => l[35] || (l[35] = [n('Parameters')])
                          ),
                          _: 1,
                        }),
                        t(d, null, {
                          default: u(() => l[36] || (l[36] = [n('version')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(a, null, {
                  default: u(() => [
                    t(s, null, {
                      default: u(() => [
                        t(o, null, {
                          default: u(() => l[37] || (l[37] = [n('radio')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () => l[38] || (l[38] = [n('Custom radio')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[39] ||
                              (l[39] = [
                                n('checked: '),
                                e('code', null, 'boolean', -1),
                                e('br', null, null, -1),
                                n('disabled: '),
                                e('code', null, 'boolean', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(() => l[40] || (l[40] = [n('2.18.0')])),
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
          l[118] ||
            (l[118] = e(
              'h3',
              { id: 'radio-group Props' },
              [e('code', null, '<radio-group>'), n(' Props')],
              -1
            )),
          t(
            f,
            { class: 'component-api-table' },
            {
              default: u(() => [
                l[76] ||
                  (l[76] = e(
                    'colgroup',
                    null,
                    [e('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(r, null, {
                  default: u(() => [
                    t(s, null, {
                      default: u(() => [
                        t(d, null, {
                          default: u(() => l[42] || (l[42] = [n('Attribute')])),
                          _: 1,
                        }),
                        t(d, null, {
                          default: u(
                            () => l[43] || (l[43] = [n('Description')])
                          ),
                          _: 1,
                        }),
                        t(d, null, {
                          default: u(() => l[44] || (l[44] = [n('Type')])),
                          _: 1,
                        }),
                        t(d, null, {
                          default: u(() => l[45] || (l[45] = [n('Default')])),
                          _: 1,
                        }),
                        t(d, null, {
                          default: u(() => l[46] || (l[46] = [n('version')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(a, null, {
                  default: u(() => [
                    t(s, null, {
                      default: u(() => [
                        t(o, null, {
                          default: u(
                            () =>
                              l[47] ||
                              (l[47] = [
                                n('model-value '),
                                e('strong', null, '(v-model)', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(() => l[48] || (l[48] = [n('Value')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[49] ||
                              (l[49] = [
                                e(
                                  'code',
                                  null,
                                  'string | number | boolean',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () => l[50] || (l[50] = [e('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(o),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: u(() => [
                        t(o, null, {
                          default: u(
                            () => l[51] || (l[51] = [n('default-value')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[52] ||
                              (l[52] = [
                                n('Default value (uncontrolled state)'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[53] ||
                              (l[53] = [
                                e(
                                  'code',
                                  null,
                                  'string | number | boolean',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () => l[54] || (l[54] = [e('code', null, "''", -1)])
                          ),
                          _: 1,
                        }),
                        t(o),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: u(() => [
                        t(o, null, {
                          default: u(() => l[55] || (l[55] = [n('type')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () => l[56] || (l[56] = [n('Types of radio group')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[57] ||
                              (l[57] = [
                                e('code', null, "'radio' | 'button'", -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[58] ||
                              (l[58] = [e('code', null, "'radio'", -1)])
                          ),
                          _: 1,
                        }),
                        t(o),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: u(() => [
                        t(o, null, {
                          default: u(() => l[59] || (l[59] = [n('size')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[60] ||
                              (l[60] = [n('The size of the radio group')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[61] ||
                              (l[61] = [
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
                        t(o, null, {
                          default: u(
                            () => l[62] || (l[62] = [e('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(o),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: u(() => [
                        t(o, null, {
                          default: u(() => l[63] || (l[63] = [n('options')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(() => l[64] || (l[64] = [n('Options')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[65] ||
                              (l[65] = [
                                e(
                                  'code',
                                  null,
                                  'Array<string | number | RadioOption>',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () => l[66] || (l[66] = [e('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(() => l[67] || (l[67] = [n('2.27.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: u(() => [
                        t(o, null, {
                          default: u(() => l[68] || (l[68] = [n('direction')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[69] ||
                              (l[69] = [n('The direction of the radio group')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[70] ||
                              (l[70] = [
                                e(
                                  'code',
                                  null,
                                  "'horizontal' | 'vertical'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[71] ||
                              (l[71] = [e('code', null, "'horizontal'", -1)])
                          ),
                          _: 1,
                        }),
                        t(o),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: u(() => [
                        t(o, null, {
                          default: u(() => l[72] || (l[72] = [n('disabled')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () => l[73] || (l[73] = [n('Whether to disable')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[74] ||
                              (l[74] = [e('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[75] || (l[75] = [e('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(o),
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
          l[119] ||
            (l[119] = e(
              'h3',
              { id: 'radio-group Events' },
              [e('code', null, '<radio-group>'), n(' Events')],
              -1
            )),
          t(
            f,
            { class: 'component-api-table' },
            {
              default: u(() => [
                l[83] ||
                  (l[83] = e(
                    'colgroup',
                    null,
                    [e('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(r, null, {
                  default: u(() => [
                    t(s, null, {
                      default: u(() => [
                        t(d, null, {
                          default: u(
                            () => l[77] || (l[77] = [n('Event Name')])
                          ),
                          _: 1,
                        }),
                        t(d, null, {
                          default: u(
                            () => l[78] || (l[78] = [n('Description')])
                          ),
                          _: 1,
                        }),
                        t(d, null, {
                          default: u(
                            () => l[79] || (l[79] = [n('Parameters')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(a, null, {
                  default: u(() => [
                    t(s, null, {
                      default: u(() => [
                        t(o, null, {
                          default: u(() => l[80] || (l[80] = [n('change')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[81] ||
                              (l[81] = [n('Trigger when the value changes')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[82] ||
                              (l[82] = [
                                n('value: '),
                                e(
                                  'code',
                                  null,
                                  'string | number | boolean',
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
          l[120] ||
            (l[120] = e(
              'h3',
              { id: 'radio-group Slots' },
              [e('code', null, '<radio-group>'), n(' Slots')],
              -1
            )),
          t(
            f,
            { class: 'component-api-table' },
            {
              default: u(() => [
                l[96] ||
                  (l[96] = e(
                    'colgroup',
                    null,
                    [e('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(r, null, {
                  default: u(() => [
                    t(s, null, {
                      default: u(() => [
                        t(d, null, {
                          default: u(() => l[84] || (l[84] = [n('Slot Name')])),
                          _: 1,
                        }),
                        t(d, null, {
                          default: u(
                            () => l[85] || (l[85] = [n('Description')])
                          ),
                          _: 1,
                        }),
                        t(d, null, {
                          default: u(
                            () => l[86] || (l[86] = [n('Parameters')])
                          ),
                          _: 1,
                        }),
                        t(d, null, {
                          default: u(() => l[87] || (l[87] = [n('version')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(a, null, {
                  default: u(() => [
                    t(s, null, {
                      default: u(() => [
                        t(o, null, {
                          default: u(() => l[88] || (l[88] = [n('radio')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () => l[89] || (l[89] = [n('Custom radio')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[90] ||
                              (l[90] = [
                                n('checked: '),
                                e('code', null, 'boolean', -1),
                                e('br', null, null, -1),
                                n('disabled: '),
                                e('code', null, 'boolean', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(() => l[91] || (l[91] = [n('2.27.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: u(() => [
                        t(o, null, {
                          default: u(() => l[92] || (l[92] = [n('label')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () => l[93] || (l[93] = [n('radio label content')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[94] ||
                              (l[94] = [
                                n('data: '),
                                e('code', null, 'RadioOption', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(() => l[95] || (l[95] = [n('2.27.0')])),
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
          l[121] ||
            (l[121] = e('h3', { id: 'RadioOption' }, 'RadioOption', -1)),
          t(
            f,
            { class: 'component-api-table' },
            {
              default: u(() => [
                l[113] ||
                  (l[113] = e(
                    'colgroup',
                    null,
                    [e('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(r, null, {
                  default: u(() => [
                    t(s, null, {
                      default: u(() => [
                        t(d, null, {
                          default: u(() => l[97] || (l[97] = [n('Name')])),
                          _: 1,
                        }),
                        t(d, null, {
                          default: u(
                            () => l[98] || (l[98] = [n('Description')])
                          ),
                          _: 1,
                        }),
                        t(d, null, {
                          default: u(() => l[99] || (l[99] = [n('Type')])),
                          _: 1,
                        }),
                        t(d, null, {
                          default: u(() => l[100] || (l[100] = [n('Default')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(a, null, {
                  default: u(() => [
                    t(s, null, {
                      default: u(() => [
                        t(o, null, {
                          default: u(() => l[101] || (l[101] = [n('label')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () => l[102] || (l[102] = [n('label content')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[103] ||
                              (l[103] = [e('code', null, 'RenderContent', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[104] || (l[104] = [e('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: u(() => [
                        t(o, null, {
                          default: u(() => l[105] || (l[105] = [n('value')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[106] ||
                              (l[106] = [
                                n('The '),
                                e('code', null, 'value', -1),
                                n(' of the option'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[107] ||
                              (l[107] = [
                                e('code', null, 'string | number', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[108] || (l[108] = [e('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: u(() => [
                        t(o, null, {
                          default: u(
                            () => l[109] || (l[109] = [n('disabled')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () => l[110] || (l[110] = [n('Whether to disable')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[111] ||
                              (l[111] = [e('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[112] ||
                              (l[112] = [e('code', null, 'false', -1)])
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
const X = R(H, [['render', J]]);
export { X as default };
