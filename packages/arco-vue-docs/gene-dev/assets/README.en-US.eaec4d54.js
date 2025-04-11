import {
  _ as B,
  d as M,
  u as F,
  r as s,
  o as N,
  c as S,
  w as e,
  e as o,
  a as t,
  b as u,
  m as $,
} from './index.9c61ea88.js';
import {
  D as E,
  a as I,
  b as V,
  c as W,
  d as j,
  e as G,
  f as L,
  g as O,
} from './trackColor.c284ede0.js';

const p = [
  {
    version: '2.38.0-beta.2',
    date: '2022-10-21',
    list: [
      {
        type: 'enhancement',
        typeText: '\u{1F48E} Enhancement',
        list: [
          `<p>Optimize the display logic of split points (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1755">#1755</a>)</p>
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
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the display value precision problem (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/447">#447</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.7.0',
    date: '2021-11-26',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>Add <code>track-color</code> prop (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/277">#277</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const R = M({
  name: 'ArcoMain',
  components: {
    DemoBasic: E,
    DemoStatus: I,
    DemoCircle: V,
    DemoMini: W,
    DemoSize: j,
    DemoLinear: G,
    DemoSteps: L,
    DemoTrackColor: O,
  },
  setup() {
    const { locale: r } = F();
    return {
      locale: r,
      data: {
        meta: { type: 'Component', category: 'Feedback' },
        title: 'Progress',
        description:
          'Give users feedback on the running status of tasks in the current system execution, which is mostly used in scenes that run for a period of time, effectively reducing the anxiety of users during waiting.',
      },
      changelog: typeof p === 'undefined' ? void 0 : p,
      getMessage: (i, f) => (r.value === 'zh-CN' ? i : f),
    };
  },
});
function U(r, l, m, g, i, f) {
  const b = s('demo-basic');
  const y = s('demo-status');
  const _ = s('demo-circle');
  const x = s('demo-mini');
  const k = s('demo-size');
  const v = s('demo-linear');
  const T = s('demo-steps');
  const D = s('demo-trackColor');
  const w = s('anchor-head');
  const a = s('a-th');
  const d = s('a-tr');
  const C = s('a-thead');
  const n = s('a-td');
  const z = s('a-tbody');
  const A = s('a-table');
  const P = s('arco-article');
  return (
    N(),
    S(
      P,
      $(r.data, { changelog: r.changelog }),
      {
        default: e(() => [
          l[50] ||
            (l[50] = o(
              'p',
              null,
              [o('em', null, 'Auto translate by google.')],
              -1
            )),
          t(b),
          t(y),
          t(_),
          t(x),
          t(k),
          t(v),
          t(T),
          t(D),
          t(
            w,
            { level: '2', href: 'API' },
            { default: e(() => l[0] || (l[0] = [u('API')])), _: 1 }
          ),
          l[51] ||
            (l[51] = o(
              'h3',
              { id: 'progress Props' },
              [o('code', null, '<progress>'), u(' Props')],
              -1
            )),
          t(
            A,
            { class: 'component-api-table' },
            {
              default: e(() => [
                l[49] ||
                  (l[49] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(C, null, {
                  default: e(() => [
                    t(d, null, {
                      default: e(() => [
                        t(a, null, {
                          default: e(() => l[1] || (l[1] = [u('Attribute')])),
                          _: 1,
                        }),
                        t(a, null, {
                          default: e(() => l[2] || (l[2] = [u('Description')])),
                          _: 1,
                        }),
                        t(a, null, {
                          default: e(() => l[3] || (l[3] = [u('Type')])),
                          _: 1,
                        }),
                        t(a, null, {
                          default: e(() => l[4] || (l[4] = [u('Default')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(z, null, {
                  default: e(() => [
                    t(d, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[5] || (l[5] = [u('type')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[6] || (l[6] = [u('The type of progress bar')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[7] ||
                              (l[7] = [
                                o('code', null, "'line' | 'circle'", -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[8] || (l[8] = [o('code', null, "'line'", -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[9] || (l[9] = [u('size')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[10] ||
                              (l[10] = [u('The size of the progress bar')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[11] ||
                              (l[11] = [
                                o(
                                  'code',
                                  null,
                                  "'mini' | 'small' | 'medium' | 'large'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[12] ||
                              (l[12] = [o('code', null, "'medium'", -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[13] || (l[13] = [u('percent')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[14] ||
                              (l[14] = [
                                u('The current percentage of the progress bar'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[15] || (l[15] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[16] || (l[16] = [o('code', null, '0', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[17] || (l[17] = [u('steps')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[18] ||
                              (l[18] = [
                                u(
                                  'Turn on the step bar mode and set the number of steps'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[19] || (l[19] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[20] || (l[20] = [o('code', null, '0', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[21] || (l[21] = [u('animation')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[22] ||
                              (l[22] = [
                                u(
                                  'Whether to turn on the transition animation'
                                ),
                              ])
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
                    t(d, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () => l[25] || (l[25] = [u('stroke-width')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[26] ||
                              (l[26] = [
                                u('The line width of the progress bar'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[27] || (l[27] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[28] || (l[28] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[29] || (l[29] = [u('width')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[30] ||
                              (l[30] = [u('The width of the progress bar')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[31] ||
                              (l[31] = [o('code', null, 'number|string', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[32] || (l[32] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[33] || (l[33] = [u('color')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[34] ||
                              (l[34] = [u('The color of the progress bar')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[35] ||
                              (l[35] = [o('code', null, 'string|object', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[36] || (l[36] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(
                            () => l[37] || (l[37] = [u('track-color')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[38] ||
                              (l[38] = [u('The color of the progress track')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[39] || (l[39] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[40] || (l[40] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[41] || (l[41] = [u('show-text')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[42] || (l[42] = [u('Whether to display text')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[43] ||
                              (l[43] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[44] || (l[44] = [o('code', null, 'true', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(n, null, {
                          default: e(() => l[45] || (l[45] = [u('status')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[46] || (l[46] = [u('Progress bar status')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () =>
                              l[47] ||
                              (l[47] = [
                                o(
                                  'code',
                                  null,
                                  "'normal' | 'success' | 'warning' | 'danger'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: e(
                            () => l[48] || (l[48] = [o('code', null, '-', -1)])
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
const J = B(R, [['render', U]]);
export { J as default };
