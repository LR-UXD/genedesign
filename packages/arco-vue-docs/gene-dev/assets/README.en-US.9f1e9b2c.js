import {
  _ as T,
  d as k,
  u as A,
  r as i,
  o as F,
  c as N,
  w as u,
  e as o,
  a as t,
  b as d,
  m as B,
} from './index.9c61ea88.js';
import { D as E, a as H, b as j, c as M } from './countdown.b3b987a2.js';
import './index.2b17769d.js';
import './index.5bc6c633.js';

const y = [
  {
    version: '2.49.2',
    date: '2023-07-28',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem that <code>value-style</code> cannot modify the font size in digital content (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2600">#2600</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.32.0',
    date: '2022-06-24',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>support custom value style prop (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1320">#1320</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.28.0',
    date: '2022-05-20',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>Add the <code>placeholder</code> attribute to display when there is no value (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1179">#1179</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.14.2',
    date: '2022-01-10',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>fix dynamic assignment issue (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/534">#534</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.14.0',
    date: '2022-01-07',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>value supports responsive modification (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/514">#514</a>)</p>
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
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem that it does not take effect when precision is 0 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/357">#357</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const W = k({
  name: 'ArcoMain',
  components: {
    DemoBasic: E,
    DemoPrefix: H,
    DemoAnimation: j,
    DemoCountdown: M,
  },
  setup() {
    const { locale: f } = A();
    return {
      locale: f,
      data: {
        meta: { type: 'Component', category: 'Data Display' },
        title: 'Statistic',
        description:
          'Highlight a certain number or group of numbers and statistical data with descriptions.',
      },
      changelog: typeof y === 'undefined' ? void 0 : y,
      getMessage: (m, g) => (f.value === 'zh-CN' ? m : g),
    };
  },
});
function $(f, l, b, v, m, g) {
  const x = i('demo-basic');
  const w = i('demo-prefix');
  const D = i('demo-animation');
  const C = i('demo-countdown');
  const P = i('anchor-head');
  const s = i('a-th');
  const e = i('a-tr');
  const r = i('a-thead');
  const n = i('a-td');
  const a = i('a-tbody');
  const p = i('a-table');
  const S = i('arco-article');
  return (
    F(),
    N(
      S,
      B(f.data, { changelog: f.changelog }),
      {
        default: u(() => [
          l[122] ||
            (l[122] = o(
              'p',
              null,
              [o('em', null, 'Auto translate by google.')],
              -1
            )),
          t(x),
          t(w),
          t(D),
          t(C),
          t(
            P,
            { level: '2', href: 'API' },
            { default: u(() => l[0] || (l[0] = [d('API')])), _: 1 }
          ),
          l[123] ||
            (l[123] = o(
              'h3',
              { id: 'statistic Props' },
              [o('code', null, '<statistic>'), d(' Props')],
              -1
            )),
          t(
            p,
            { class: 'component-api-table' },
            {
              default: u(() => [
                l[60] ||
                  (l[60] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(r, null, {
                  default: u(() => [
                    t(e, null, {
                      default: u(() => [
                        t(s, null, {
                          default: u(() => l[1] || (l[1] = [d('Attribute')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: u(() => l[2] || (l[2] = [d('Description')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: u(() => l[3] || (l[3] = [d('Type')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: u(() => l[4] || (l[4] = [d('Default')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: u(() => l[5] || (l[5] = [d('version')])),
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
                    t(e, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(() => l[6] || (l[6] = [d('title')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[7] ||
                              (l[7] = [d('Title of the numerical display')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[8] || (l[8] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () => l[9] || (l[9] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(e, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(() => l[10] || (l[10] = [d('value')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[11] || (l[11] = [d('Numerical display value')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[12] ||
                              (l[12] = [o('code', null, 'number | Date', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () => l[13] || (l[13] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(e, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(() => l[14] || (l[14] = [d('format')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[15] ||
                              (l[15] = [
                                d('Format of numerical display '),
                                o(
                                  'a',
                                  {
                                    class: 'link',
                                    href: 'https://day.js.org/docs/en/display/format',
                                  },
                                  'dayjs',
                                  -1
                                ),
                                d(' (used in date mode)'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[16] || (l[16] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[17] ||
                              (l[17] = [o('code', null, "'HH:mm:ss'", -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(e, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(() => l[18] || (l[18] = [d('extra')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[19] ||
                              (l[19] = [d('Additional display content')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[20] || (l[20] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () => l[21] || (l[21] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(e, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(() => l[22] || (l[22] = [d('start')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[23] ||
                              (l[23] = [d('Whether to start animation')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[24] ||
                              (l[24] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[25] || (l[25] = [o('code', null, 'true', -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(e, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(() => l[26] || (l[26] = [d('precision')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[27] ||
                              (l[27] = [
                                d(
                                  'Decimal reserved digits (used in digital mode)'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[28] || (l[28] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () => l[29] || (l[29] = [o('code', null, '0', -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(e, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(() => l[30] || (l[30] = [d('separator')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[31] ||
                              (l[31] = [
                                d('Carry separator (used in number mode)'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[32] || (l[32] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () => l[33] || (l[33] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(e, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(
                            () => l[34] || (l[34] = [d('show-group-separator')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[35] ||
                              (l[35] = [
                                d(
                                  'Whether to display the carry separator (used in number mode)'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[36] ||
                              (l[36] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[37] || (l[37] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(e, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(() => l[38] || (l[38] = [d('animation')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[39] ||
                              (l[39] = [d('Whether to turn on animation')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[40] ||
                              (l[40] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[41] || (l[41] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(e, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(
                            () => l[42] || (l[42] = [d('animation-duration')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[43] ||
                              (l[43] = [d("Animation's duration time")])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[44] || (l[44] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[45] || (l[45] = [o('code', null, '2000', -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(e, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(
                            () => l[46] || (l[46] = [d('value-from')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[47] ||
                              (l[47] = [
                                d('The starting value of the animation'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[48] || (l[48] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () => l[49] || (l[49] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(e, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(
                            () => l[50] || (l[50] = [d('placeholder')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[51] ||
                              (l[51] = [
                                d(
                                  'Prompt text (displayed when value is undefined )'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[52] || (l[52] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () => l[53] || (l[53] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(() => l[54] || (l[54] = [d('2.28.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(e, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(
                            () => l[55] || (l[55] = [d('value-style')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () => l[56] || (l[56] = [d('Custom value style')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[57] ||
                              (l[57] = [o('code', null, 'CSSProperties', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () => l[58] || (l[58] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(() => l[59] || (l[59] = [d('2.32.0')])),
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
          l[124] ||
            (l[124] = o(
              'h3',
              { id: 'statistic Slots' },
              [o('code', null, '<statistic>'), d(' Slots')],
              -1
            )),
          t(
            p,
            { class: 'component-api-table' },
            {
              default: u(() => [
                l[76] ||
                  (l[76] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(r, null, {
                  default: u(() => [
                    t(e, null, {
                      default: u(() => [
                        t(s, null, {
                          default: u(() => l[61] || (l[61] = [d('Slot Name')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: u(
                            () => l[62] || (l[62] = [d('Description')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: u(
                            () => l[63] || (l[63] = [d('Parameters')])
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
                    t(e, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(() => l[64] || (l[64] = [d('title')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(() => l[65] || (l[65] = [d('Title')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(() => l[66] || (l[66] = [d('-')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(e, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(() => l[67] || (l[67] = [d('prefix')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(() => l[68] || (l[68] = [d('Prefix')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(() => l[69] || (l[69] = [d('-')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(e, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(() => l[70] || (l[70] = [d('suffix')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(() => l[71] || (l[71] = [d('Suffix')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(() => l[72] || (l[72] = [d('-')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(e, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(() => l[73] || (l[73] = [d('extra')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () => l[74] || (l[74] = [d('Extra content')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(() => l[75] || (l[75] = [d('-')])),
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
          l[125] ||
            (l[125] = o(
              'h3',
              { id: 'countdown Props' },
              [o('code', null, '<countdown>'), d(' Props')],
              -1
            )),
          t(
            p,
            { class: 'component-api-table' },
            {
              default: u(() => [
                l[107] ||
                  (l[107] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(r, null, {
                  default: u(() => [
                    t(e, null, {
                      default: u(() => [
                        t(s, null, {
                          default: u(() => l[77] || (l[77] = [d('Attribute')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: u(
                            () => l[78] || (l[78] = [d('Description')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: u(() => l[79] || (l[79] = [d('Type')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: u(() => l[80] || (l[80] = [d('Default')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: u(() => l[81] || (l[81] = [d('version')])),
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
                    t(e, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(() => l[82] || (l[82] = [d('title')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () => l[83] || (l[83] = [d('Countdown title')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[84] || (l[84] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () => l[85] || (l[85] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(e, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(() => l[86] || (l[86] = [d('value')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () => l[87] || (l[87] = [d('Countdown value')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[88] || (l[88] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[89] ||
                              (l[89] = [
                                o(
                                  'code',
                                  null,
                                  '() => Date.now() + 300000',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(e, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(() => l[90] || (l[90] = [d('now')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[91] ||
                              (l[91] = [
                                d(
                                  'Used to correct the incorrect display of the initialization time'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[92] || (l[92] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[93] ||
                              (l[93] = [
                                o('code', null, '() => Date.now()', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(e, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(() => l[94] || (l[94] = [d('format')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[95] ||
                              (l[95] = [
                                d('Countdown display format '),
                                o(
                                  'a',
                                  {
                                    class: 'link',
                                    href: 'https://day.js.org/docs/en/display/format',
                                  },
                                  'dayjs',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[96] || (l[96] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[97] ||
                              (l[97] = [o('code', null, "'HH:mm:ss'", -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(e, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(() => l[98] || (l[98] = [d('start')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[99] ||
                              (l[99] = [d('Whether to start the countdown')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[100] ||
                              (l[100] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[101] || (l[101] = [o('code', null, 'true', -1)])
                          ),
                          _: 1,
                        }),
                        t(n),
                      ]),
                      _: 1,
                    }),
                    t(e, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(
                            () => l[102] || (l[102] = [d('value-style')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () => l[103] || (l[103] = [d('Custom value style')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[104] ||
                              (l[104] = [o('code', null, 'CSSProperties', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[105] || (l[105] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(() => l[106] || (l[106] = [d('2.32.0')])),
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
          l[126] ||
            (l[126] = o(
              'h3',
              { id: 'countdown Events' },
              [o('code', null, '<countdown>'), d(' Events')],
              -1
            )),
          t(
            p,
            { class: 'component-api-table' },
            {
              default: u(() => [
                l[114] ||
                  (l[114] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(r, null, {
                  default: u(() => [
                    t(e, null, {
                      default: u(() => [
                        t(s, null, {
                          default: u(
                            () => l[108] || (l[108] = [d('Event Name')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: u(
                            () => l[109] || (l[109] = [d('Description')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: u(
                            () => l[110] || (l[110] = [d('Parameters')])
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
                    t(e, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(() => l[111] || (l[111] = [d('finish')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(
                            () =>
                              l[112] ||
                              (l[112] = [
                                d('Callback at the end of the countdown'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(() => l[113] || (l[113] = [d('-')])),
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
          l[127] ||
            (l[127] = o(
              'h3',
              { id: 'countdown Slots' },
              [o('code', null, '<countdown>'), d(' Slots')],
              -1
            )),
          t(
            p,
            { class: 'component-api-table' },
            {
              default: u(() => [
                l[121] ||
                  (l[121] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(r, null, {
                  default: u(() => [
                    t(e, null, {
                      default: u(() => [
                        t(s, null, {
                          default: u(
                            () => l[115] || (l[115] = [d('Slot Name')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: u(
                            () => l[116] || (l[116] = [d('Description')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: u(
                            () => l[117] || (l[117] = [d('Parameters')])
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
                    t(e, null, {
                      default: u(() => [
                        t(n, null, {
                          default: u(() => l[118] || (l[118] = [d('title')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(() => l[119] || (l[119] = [d('Title')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: u(() => l[120] || (l[120] = [d('-')])),
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
const R = T(W, [['render', $]]);
export { R as default };
