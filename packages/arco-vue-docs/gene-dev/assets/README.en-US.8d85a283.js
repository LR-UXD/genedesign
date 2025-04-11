import {
  _ as B,
  d as V,
  u as W,
  r as d,
  o as k,
  c as M,
  w as t,
  e as o,
  a as n,
  b as e,
  m as R,
} from './index.9c61ea88.js';
import {
  D as S,
  a as $,
  b as F,
  c as I,
  d as z,
  e as G,
  f as H,
  g as U,
} from './grading.303671bb.js';

const b = [
  {
    version: '2.54.3',
    date: '2024-01-19',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix missing icon elements in <code>nuxt</code> (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2930">#2930</a>)</p>
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
          `<p>Add color attribute (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/770">#770</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const j = V({
  name: 'ArcoMain',
  components: {
    DemoBasic: S,
    DemoHalf: $,
    DemoColor: F,
    DemoReadonly: I,
    DemoClear: z,
    DemoCharacter: G,
    DemoCount: H,
    DemoGrading: U,
  },
  setup() {
    const { locale: s } = W();
    return {
      locale: s,
      data: {
        meta: { type: 'Component', category: 'Data Entry' },
        title: 'Rate',
        description: 'The component used for scoring or starring.',
      },
      changelog: typeof b === 'undefined' ? void 0 : b,
      getMessage: (p, g) => (s.value === 'zh-CN' ? p : g),
    };
  },
});
function q(s, l, v, y, p, g) {
  const D = d('demo-basic');
  const x = d('demo-half');
  const w = d('demo-color');
  const C = d('demo-readonly');
  const _ = d('demo-clear');
  const T = d('demo-character');
  const A = d('demo-count');
  const P = d('demo-grading');
  const E = d('anchor-head');
  const r = d('a-th');
  const a = d('a-tr');
  const f = d('a-thead');
  const u = d('a-td');
  const m = d('a-tbody');
  const i = d('a-table');
  const N = d('arco-article');
  return (
    k(),
    M(
      N,
      R(s.data, { changelog: s.changelog }),
      {
        default: t(() => [
          l[61] ||
            (l[61] = o(
              'p',
              null,
              [o('em', null, 'Auto translate by google.')],
              -1
            )),
          n(D),
          n(x),
          n(w),
          n(C),
          n(_),
          n(T),
          n(A),
          n(P),
          n(
            E,
            { level: '2', href: 'API' },
            { default: t(() => l[0] || (l[0] = [e('API')])), _: 1 }
          ),
          l[62] ||
            (l[62] = o(
              'h3',
              { id: 'rate Props' },
              [o('code', null, '<rate>'), e(' Props')],
              -1
            )),
          n(
            i,
            { class: 'component-api-table' },
            {
              default: t(() => [
                l[43] ||
                  (l[43] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                n(f, null, {
                  default: t(() => [
                    n(a, null, {
                      default: t(() => [
                        n(r, null, {
                          default: t(() => l[1] || (l[1] = [e('Attribute')])),
                          _: 1,
                        }),
                        n(r, null, {
                          default: t(() => l[2] || (l[2] = [e('Description')])),
                          _: 1,
                        }),
                        n(r, null, {
                          default: t(() => l[3] || (l[3] = [e('Type')])),
                          _: 1,
                        }),
                        n(r, null, {
                          default: t(() => l[4] || (l[4] = [e('Default')])),
                          _: 1,
                        }),
                        n(r, null, {
                          default: t(() => l[5] || (l[5] = [e('version')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                n(m, null, {
                  default: t(() => [
                    n(a, null, {
                      default: t(() => [
                        n(u, null, {
                          default: t(() => l[6] || (l[6] = [e('count')])),
                          _: 1,
                        }),
                        n(u, null, {
                          default: t(
                            () => l[7] || (l[7] = [e('Total number of rate')])
                          ),
                          _: 1,
                        }),
                        n(u, null, {
                          default: t(
                            () =>
                              l[8] || (l[8] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        n(u, null, {
                          default: t(
                            () => l[9] || (l[9] = [o('code', null, '5', -1)])
                          ),
                          _: 1,
                        }),
                        n(u),
                      ]),
                      _: 1,
                    }),
                    n(a, null, {
                      default: t(() => [
                        n(u, null, {
                          default: t(
                            () =>
                              l[10] ||
                              (l[10] = [
                                e('model-value '),
                                o('strong', null, '(v-model)', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        n(u, null, {
                          default: t(() => l[11] || (l[11] = [e('Value')])),
                          _: 1,
                        }),
                        n(u, null, {
                          default: t(
                            () =>
                              l[12] || (l[12] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        n(u, null, {
                          default: t(
                            () => l[13] || (l[13] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        n(u),
                      ]),
                      _: 1,
                    }),
                    n(a, null, {
                      default: t(() => [
                        n(u, null, {
                          default: t(
                            () => l[14] || (l[14] = [e('default-value')])
                          ),
                          _: 1,
                        }),
                        n(u, null, {
                          default: t(
                            () => l[15] || (l[15] = [e('Default Value')])
                          ),
                          _: 1,
                        }),
                        n(u, null, {
                          default: t(
                            () =>
                              l[16] || (l[16] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        n(u, null, {
                          default: t(
                            () => l[17] || (l[17] = [o('code', null, '0', -1)])
                          ),
                          _: 1,
                        }),
                        n(u),
                      ]),
                      _: 1,
                    }),
                    n(a, null, {
                      default: t(() => [
                        n(u, null, {
                          default: t(
                            () => l[18] || (l[18] = [e('allow-half')])
                          ),
                          _: 1,
                        }),
                        n(u, null, {
                          default: t(
                            () =>
                              l[19] ||
                              (l[19] = [e('Whether to allow half selection')])
                          ),
                          _: 1,
                        }),
                        n(u, null, {
                          default: t(
                            () =>
                              l[20] ||
                              (l[20] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        n(u, null, {
                          default: t(
                            () =>
                              l[21] || (l[21] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        n(u),
                      ]),
                      _: 1,
                    }),
                    n(a, null, {
                      default: t(() => [
                        n(u, null, {
                          default: t(
                            () => l[22] || (l[22] = [e('allow-clear')])
                          ),
                          _: 1,
                        }),
                        n(u, null, {
                          default: t(
                            () =>
                              l[23] || (l[23] = [e('Whether to allow clear')])
                          ),
                          _: 1,
                        }),
                        n(u, null, {
                          default: t(
                            () =>
                              l[24] ||
                              (l[24] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        n(u, null, {
                          default: t(
                            () =>
                              l[25] || (l[25] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        n(u),
                      ]),
                      _: 1,
                    }),
                    n(a, null, {
                      default: t(() => [
                        n(u, null, {
                          default: t(() => l[26] || (l[26] = [e('grading')])),
                          _: 1,
                        }),
                        n(u, null, {
                          default: t(
                            () =>
                              l[27] ||
                              (l[27] = [e('Whether to enable smile grading')])
                          ),
                          _: 1,
                        }),
                        n(u, null, {
                          default: t(
                            () =>
                              l[28] ||
                              (l[28] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        n(u, null, {
                          default: t(
                            () =>
                              l[29] || (l[29] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        n(u),
                      ]),
                      _: 1,
                    }),
                    n(a, null, {
                      default: t(() => [
                        n(u, null, {
                          default: t(() => l[30] || (l[30] = [e('readonly')])),
                          _: 1,
                        }),
                        n(u, null, {
                          default: t(
                            () =>
                              l[31] || (l[31] = [e('Whether it is readonly')])
                          ),
                          _: 1,
                        }),
                        n(u, null, {
                          default: t(
                            () =>
                              l[32] ||
                              (l[32] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        n(u, null, {
                          default: t(
                            () =>
                              l[33] || (l[33] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        n(u),
                      ]),
                      _: 1,
                    }),
                    n(a, null, {
                      default: t(() => [
                        n(u, null, {
                          default: t(() => l[34] || (l[34] = [e('disabled')])),
                          _: 1,
                        }),
                        n(u, null, {
                          default: t(
                            () => l[35] || (l[35] = [e('Whether to disable')])
                          ),
                          _: 1,
                        }),
                        n(u, null, {
                          default: t(
                            () =>
                              l[36] ||
                              (l[36] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        n(u, null, {
                          default: t(
                            () =>
                              l[37] || (l[37] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        n(u),
                      ]),
                      _: 1,
                    }),
                    n(a, null, {
                      default: t(() => [
                        n(u, null, {
                          default: t(() => l[38] || (l[38] = [e('color')])),
                          _: 1,
                        }),
                        n(u, null, {
                          default: t(() => l[39] || (l[39] = [e('Color')])),
                          _: 1,
                        }),
                        n(u, null, {
                          default: t(
                            () =>
                              l[40] ||
                              (l[40] = [
                                o(
                                  'code',
                                  null,
                                  'string | Record<string, string>',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        n(u, null, {
                          default: t(
                            () => l[41] || (l[41] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        n(u, null, {
                          default: t(() => l[42] || (l[42] = [e('2.18.0')])),
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
          l[63] ||
            (l[63] = o(
              'h3',
              { id: 'rate Events' },
              [o('code', null, '<rate>'), e(' Events')],
              -1
            )),
          n(
            i,
            { class: 'component-api-table' },
            {
              default: t(() => [
                l[53] ||
                  (l[53] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                n(f, null, {
                  default: t(() => [
                    n(a, null, {
                      default: t(() => [
                        n(r, null, {
                          default: t(
                            () => l[44] || (l[44] = [e('Event Name')])
                          ),
                          _: 1,
                        }),
                        n(r, null, {
                          default: t(
                            () => l[45] || (l[45] = [e('Description')])
                          ),
                          _: 1,
                        }),
                        n(r, null, {
                          default: t(
                            () => l[46] || (l[46] = [e('Parameters')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                n(m, null, {
                  default: t(() => [
                    n(a, null, {
                      default: t(() => [
                        n(u, null, {
                          default: t(() => l[47] || (l[47] = [e('change')])),
                          _: 1,
                        }),
                        n(u, null, {
                          default: t(
                            () =>
                              l[48] ||
                              (l[48] = [e('Trigger when the value changes')])
                          ),
                          _: 1,
                        }),
                        n(u, null, {
                          default: t(
                            () =>
                              l[49] ||
                              (l[49] = [
                                e('value: '),
                                o('code', null, 'number', -1),
                              ])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    n(a, null, {
                      default: t(() => [
                        n(u, null, {
                          default: t(
                            () => l[50] || (l[50] = [e('hover-change')])
                          ),
                          _: 1,
                        }),
                        n(u, null, {
                          default: t(
                            () =>
                              l[51] ||
                              (l[51] = [
                                e(
                                  'Triggered when the mouse moves over the value'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        n(u, null, {
                          default: t(
                            () =>
                              l[52] ||
                              (l[52] = [
                                e('value: '),
                                o('code', null, 'number', -1),
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
          l[64] ||
            (l[64] = o(
              'h3',
              { id: 'rate Slots' },
              [o('code', null, '<rate>'), e(' Slots')],
              -1
            )),
          n(
            i,
            { class: 'component-api-table' },
            {
              default: t(() => [
                l[60] ||
                  (l[60] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                n(f, null, {
                  default: t(() => [
                    n(a, null, {
                      default: t(() => [
                        n(r, null, {
                          default: t(() => l[54] || (l[54] = [e('Slot Name')])),
                          _: 1,
                        }),
                        n(r, null, {
                          default: t(
                            () => l[55] || (l[55] = [e('Description')])
                          ),
                          _: 1,
                        }),
                        n(r, null, {
                          default: t(
                            () => l[56] || (l[56] = [e('Parameters')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                n(m, null, {
                  default: t(() => [
                    n(a, null, {
                      default: t(() => [
                        n(u, null, {
                          default: t(() => l[57] || (l[57] = [e('character')])),
                          _: 1,
                        }),
                        n(u, null, {
                          default: t(() => l[58] || (l[58] = [e('Character')])),
                          _: 1,
                        }),
                        n(u, null, {
                          default: t(
                            () =>
                              l[59] ||
                              (l[59] = [
                                e('index: '),
                                o('code', null, 'number', -1),
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
const L = B(j, [['render', q]]);
export { L as default };
