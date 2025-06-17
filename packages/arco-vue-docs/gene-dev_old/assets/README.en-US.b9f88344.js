import {
  _ as N,
  d as O,
  u as B,
  r as a,
  o as W,
  c as I,
  w as e,
  e as o,
  a as t,
  b as u,
  m as M,
} from './index.9c61ea88.js';
import {
  D as V,
  a as $,
  b as z,
  c as L,
  d as R,
  e as G,
  f as U,
  g as j,
  h as q,
} from './custom.6ec4335d.js';

const g = [
  {
    version: '2.45.3',
    date: '2023-04-28',
    list: [
      {
        type: 'typescript',
        typeText: '\u{1F18E} TypeScript',
        list: [
          `<p>Fix the ts error problem when the <code>value</code> attribute uses a boolean value (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2373">#2373</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.43.2',
    date: '2023-02-24',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fixed checkbox retaining hover style when deselected (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2124">#2124</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.41.1',
    date: '2023-01-06',
    list: [
      {
        type: 'typescript',
        typeText: '\u{1F18E} TypeScript',
        list: [
          `<p>Fix missing type for <code>value</code> values (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2029">#2029</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.41.0',
    date: '2022-12-30',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Set to empty array if <code>modevalue</code> is not an array (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1940">#1940</a>)</p>
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
    version: '2.36.0',
    date: '2022-09-02',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>Add max prop, support setting the maximum number of items that can be checked (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1540">#1540</a>)</p>
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
          `<p><code>checkbox-group</code> adds <code>checkbox</code> slot (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1087">#1087</a>)</p>
`,
          `<p><code>checkbox-group</code> supports <code>options</code> attribute to configure child elements (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1058">#1058</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.25.1',
    date: '2022-04-27',
    list: [
      {
        type: 'style',
        typeText: '\u{1F485} Style',
        list: [
          `<p>Fixed the issue that the hover style would still change in the disabled state (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1040">#1040</a>)</p>
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
          `<p>Add checkbox slot, you can customize the checkbox (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/769">#769</a>)</p>
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
];
const H = O({
  name: 'ArcoMain',
  components: {
    DemoBasic: V,
    DemoControl: $,
    DemoDisabled: z,
    DemoGroup: L,
    DemoOptions: R,
    DemoLimit: G,
    DemoAll: U,
    DemoLayout: j,
    DemoCustom: q,
  },
  setup() {
    const { locale: p } = B();
    return {
      locale: p,
      data: {
        meta: { type: 'Component', category: 'Data Entry' },
        title: 'Checkbox',
        description:
          'In a set of data, the user can select one or more data through the check box.',
      },
      changelog: typeof g === 'undefined' ? void 0 : g,
      getMessage: (m, b) => (p.value === 'zh-CN' ? m : b),
    };
  },
});
function J(p, l, x, v, m, b) {
  const y = a('demo-basic');
  const k = a('demo-control');
  const D = a('demo-disabled');
  const T = a('demo-group');
  const w = a('demo-options');
  const A = a('demo-limit');
  const C = a('demo-all');
  const S = a('demo-layout');
  const E = a('demo-custom');
  const F = a('anchor-head');
  const d = a('a-th');
  const s = a('a-tr');
  const i = a('a-thead');
  const n = a('a-td');
  const r = a('a-tbody');
  const f = a('a-table');
  const P = a('arco-article');
  return (
    W(),
    I(
      P,
      M(p.data, { changelog: p.changelog }),
      {
        default: e(() => [
          l[115] ||
            (l[115] = o(
              'p',
              null,
              [o('em', null, 'Auto translate by google.')],
              -1
            )),
          t(y),
          t(k),
          t(D),
          t(T),
          t(w),
          t(A),
          t(C),
          t(S),
          t(E),
          t(
            F,
            { level: '2', href: 'API' },
            { default: e(() => l[0] || (l[0] = [u('API')])), _: 1 }
          ),
          l[116] ||
            (l[116] = o(
              'h3',
              { id: 'checkbox Props' },
              [o('code', null, '<checkbox>'), u(' Props')],
              -1
            )),
          t(
            f,
            { class: 'component-api-table' },
            {
              default: e(() => [
                l[25] ||
                  (l[25] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(i, null, {
                  default: e(() => [
                    t(s, null, {
                      default: e(() => [
                        t(d, null, {
                          default: e(() => l[1] || (l[1] = [u('Attribute')])),
                          _: 1,
                        }),
                        t(d, null, {
                          default: e(() => l[2] || (l[2] = [u('Description')])),
                          _: 1,
                        }),
                        t(d, null, {
                          default: e(() => l[3] || (l[3] = [u('Type')])),
                          _: 1,
                        }),
                        t(d, null, {
                          default: e(() => l[4] || (l[4] = [u('Default')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(r, null, {
                  default: e(() => [
                    t(s, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () =>
                              l[5] ||
                              (l[5] = [
                                u('model-value '),
                                o('strong', null, '(v-model)', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[6] || (l[6] = [u('Value')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[7] ||
                              (l[7] = [
                                o(
                                  'code',
                                  null,
                                  'boolean | Array<string | number | boolean>',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[8] || (l[8] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () => l[9] || (l[9] = [u('default-checked')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[10] ||
                              (l[10] = [
                                u(
                                  'Whether checked by default (uncontrolled state)'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[11] ||
                              (l[11] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[12] || (l[12] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[13] || (l[13] = [u('value')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[14] ||
                              (l[14] = [
                                u('The '),
                                o('code', null, 'value', -1),
                                u(' of the option'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[15] ||
                              (l[15] = [
                                o('code', null, 'string|number|boolean', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[16] || (l[16] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[17] || (l[17] = [u('disabled')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[18] || (l[18] = [u('Whether to disable')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[19] ||
                              (l[19] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[20] || (l[20] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () => l[21] || (l[21] = [u('indeterminate')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[22] ||
                              (l[22] = [u('Whether it is half-selected')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[23] ||
                              (l[23] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[24] || (l[24] = [o('code', null, 'false', -1)])
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
            (l[117] = o(
              'h3',
              { id: 'checkbox Events' },
              [o('code', null, '<checkbox>'), u(' Events')],
              -1
            )),
          t(
            f,
            { class: 'component-api-table' },
            {
              default: e(() => [
                l[32] ||
                  (l[32] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(i, null, {
                  default: e(() => [
                    t(s, null, {
                      default: e(() => [
                        t(d, null, {
                          default: e(
                            () => l[26] || (l[26] = [u('Event Name')])
                          ),
                          _: 1,
                        }),
                        t(d, null, {
                          default: e(
                            () => l[27] || (l[27] = [u('Description')])
                          ),
                          _: 1,
                        }),
                        t(d, null, {
                          default: e(
                            () => l[28] || (l[28] = [u('Parameters')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(r, null, {
                  default: e(() => [
                    t(s, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[29] || (l[29] = [u('change')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[30] ||
                              (l[30] = [u('Trigger when the value changes')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[31] ||
                              (l[31] = [
                                u('value: '),
                                o(
                                  'code',
                                  null,
                                  'boolean | (string | number | boolean)[]',
                                  -1
                                ),
                                o('br', null, null, -1),
                                u('ev: '),
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
          l[118] ||
            (l[118] = o(
              'h3',
              { id: 'checkbox Slots' },
              [o('code', null, '<checkbox>'), u(' Slots')],
              -1
            )),
          t(
            f,
            { class: 'component-api-table' },
            {
              default: e(() => [
                l[41] ||
                  (l[41] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(i, null, {
                  default: e(() => [
                    t(s, null, {
                      default: e(() => [
                        t(d, null, {
                          default: e(() => l[33] || (l[33] = [u('Slot Name')])),
                          _: 1,
                        }),
                        t(d, null, {
                          default: e(
                            () => l[34] || (l[34] = [u('Description')])
                          ),
                          _: 1,
                        }),
                        t(d, null, {
                          default: e(
                            () => l[35] || (l[35] = [u('Parameters')])
                          ),
                          _: 1,
                        }),
                        t(d, null, {
                          default: e(() => l[36] || (l[36] = [u('version')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(r, null, {
                  default: e(() => [
                    t(s, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[37] || (l[37] = [u('checkbox')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[38] || (l[38] = [u('Custom checkbox')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[39] ||
                              (l[39] = [
                                u('checked: '),
                                o('code', null, 'boolean', -1),
                                o('br', null, null, -1),
                                u('disabled: '),
                                o('code', null, 'boolean', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[40] || (l[40] = [u('2.18.0')])),
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
          l[119] ||
            (l[119] = o(
              'h3',
              { id: 'checkbox-group Props' },
              [o('code', null, '<checkbox-group>'), u(' Props')],
              -1
            )),
          t(
            f,
            { class: 'component-api-table' },
            {
              default: e(() => [
                l[73] ||
                  (l[73] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(i, null, {
                  default: e(() => [
                    t(s, null, {
                      default: e(() => [
                        t(d, null, {
                          default: e(() => l[42] || (l[42] = [u('Attribute')])),
                          _: 1,
                        }),
                        t(d, null, {
                          default: e(
                            () => l[43] || (l[43] = [u('Description')])
                          ),
                          _: 1,
                        }),
                        t(d, null, {
                          default: e(() => l[44] || (l[44] = [u('Type')])),
                          _: 1,
                        }),
                        t(d, null, {
                          default: e(() => l[45] || (l[45] = [u('Default')])),
                          _: 1,
                        }),
                        t(d, null, {
                          default: e(() => l[46] || (l[46] = [u('version')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(r, null, {
                  default: e(() => [
                    t(s, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () =>
                              l[47] ||
                              (l[47] = [
                                u('model-value '),
                                o('strong', null, '(v-model)', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[48] || (l[48] = [u('Value')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[49] ||
                              (l[49] = [
                                o(
                                  'code',
                                  null,
                                  'Array<string | number | boolean>',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[50] || (l[50] = [o('code', null, '-', -1)])
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
                            () => l[51] || (l[51] = [u('default-value')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[52] ||
                              (l[52] = [
                                u('Default value (uncontrolled state)'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[53] ||
                              (l[53] = [
                                o(
                                  'code',
                                  null,
                                  'Array<string | number | boolean>',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[54] || (l[54] = [o('code', null, '[]', -1)])
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
                          default: e(() => l[55] || (l[55] = [u('max')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[56] ||
                              (l[56] = [
                                u('Support the maximum number of selections'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[57] || (l[57] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[58] || (l[58] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[59] || (l[59] = [u('2.36.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[60] || (l[60] = [u('options')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[61] || (l[61] = [u('Options')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[62] ||
                              (l[62] = [
                                o(
                                  'code',
                                  null,
                                  'Array<string | number | CheckboxOption>',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[63] || (l[63] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[64] || (l[64] = [u('2.27.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[65] || (l[65] = [u('direction')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[66] ||
                              (l[66] = [
                                u('Arrangement direction of checkboxes'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[67] ||
                              (l[67] = [o('code', null, 'Direction', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[68] ||
                              (l[68] = [o('code', null, "'horizontal'", -1)])
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
                          default: e(() => l[69] || (l[69] = [u('disabled')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[70] || (l[70] = [u('Whether to disable')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[71] ||
                              (l[71] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[72] || (l[72] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
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
            (l[120] = o(
              'h3',
              { id: 'checkbox-group Events' },
              [o('code', null, '<checkbox-group>'), u(' Events')],
              -1
            )),
          t(
            f,
            { class: 'component-api-table' },
            {
              default: e(() => [
                l[80] ||
                  (l[80] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(i, null, {
                  default: e(() => [
                    t(s, null, {
                      default: e(() => [
                        t(d, null, {
                          default: e(
                            () => l[74] || (l[74] = [u('Event Name')])
                          ),
                          _: 1,
                        }),
                        t(d, null, {
                          default: e(
                            () => l[75] || (l[75] = [u('Description')])
                          ),
                          _: 1,
                        }),
                        t(d, null, {
                          default: e(
                            () => l[76] || (l[76] = [u('Parameters')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(r, null, {
                  default: e(() => [
                    t(s, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[77] || (l[77] = [u('change')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[78] ||
                              (l[78] = [u('Trigger when the value changes')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[79] ||
                              (l[79] = [
                                u('value: '),
                                o(
                                  'code',
                                  null,
                                  '(string | number | boolean)[]',
                                  -1
                                ),
                                o('br', null, null, -1),
                                u('ev: '),
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
          l[121] ||
            (l[121] = o(
              'h3',
              { id: 'checkbox-group Slots' },
              [o('code', null, '<checkbox-group>'), u(' Slots')],
              -1
            )),
          t(
            f,
            { class: 'component-api-table' },
            {
              default: e(() => [
                l[93] ||
                  (l[93] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(i, null, {
                  default: e(() => [
                    t(s, null, {
                      default: e(() => [
                        t(d, null, {
                          default: e(() => l[81] || (l[81] = [u('Slot Name')])),
                          _: 1,
                        }),
                        t(d, null, {
                          default: e(
                            () => l[82] || (l[82] = [u('Description')])
                          ),
                          _: 1,
                        }),
                        t(d, null, {
                          default: e(
                            () => l[83] || (l[83] = [u('Parameters')])
                          ),
                          _: 1,
                        }),
                        t(d, null, {
                          default: e(() => l[84] || (l[84] = [u('version')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(r, null, {
                  default: e(() => [
                    t(s, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[85] || (l[85] = [u('checkbox')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[86] || (l[86] = [u('Custom checkbox')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[87] ||
                              (l[87] = [
                                u('checked: '),
                                o('code', null, 'boolean', -1),
                                o('br', null, null, -1),
                                u('disabled: '),
                                o('code', null, 'boolean', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[88] || (l[88] = [u('2.27.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[89] || (l[89] = [u('label')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[90] || (l[90] = [u('checkbox label content')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[91] ||
                              (l[91] = [
                                u('data: '),
                                o('code', null, 'CheckboxOption', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(() => l[92] || (l[92] = [u('2.27.0')])),
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
          l[122] ||
            (l[122] = o('h3', { id: 'CheckboxOption' }, 'CheckboxOption', -1)),
          t(
            f,
            { class: 'component-api-table' },
            {
              default: e(() => [
                l[114] ||
                  (l[114] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(i, null, {
                  default: e(() => [
                    t(s, null, {
                      default: e(() => [
                        t(d, null, {
                          default: e(() => l[94] || (l[94] = [u('Name')])),
                          _: 1,
                        }),
                        t(d, null, {
                          default: e(
                            () => l[95] || (l[95] = [u('Description')])
                          ),
                          _: 1,
                        }),
                        t(d, null, {
                          default: e(() => l[96] || (l[96] = [u('Type')])),
                          _: 1,
                        }),
                        t(d, null, {
                          default: e(() => l[97] || (l[97] = [u('Default')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(r, null, {
                  default: e(() => [
                    t(s, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[98] || (l[98] = [u('label')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[99] || (l[99] = [u('label content')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[100] ||
                              (l[100] = [o('code', null, 'RenderContent', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[101] || (l[101] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[102] || (l[102] = [u('value')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[103] ||
                              (l[103] = [
                                u('The '),
                                o('code', null, 'value', -1),
                                u(' of the option'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[104] ||
                              (l[104] = [
                                o('code', null, 'string | number', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[105] || (l[105] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () => l[106] || (l[106] = [u('disabled')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[107] || (l[107] = [u('Whether to disable')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[108] ||
                              (l[108] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[109] ||
                              (l[109] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () => l[110] || (l[110] = [u('indeterminate')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[111] ||
                              (l[111] = [u('Whether it is half-selected')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[112] ||
                              (l[112] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[113] ||
                              (l[113] = [o('code', null, 'false', -1)])
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
const X = N(H, [['render', J]]);
export { X as default };
