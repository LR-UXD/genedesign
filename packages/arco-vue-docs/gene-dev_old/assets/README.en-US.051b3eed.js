import {
  _ as B,
  d as z,
  u as F,
  r as i,
  o as N,
  c as E,
  w as n,
  e,
  a as t,
  b as u,
  m as I,
} from './index.9c61ea88.js';
import {
  D as M,
  a as S,
  b as $,
  c as V,
  d as W,
  e as H,
} from './fade.eadf3b73.js';

const b = [
  {
    version: '2.39.2',
    date: '2022-12-02',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem that the transparent background image of <code>Carousel</code> cannot cover the previous image (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1901">#1901</a>)</p>
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
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fixed <code>trigger</code> and <code>autoPlay</code> property settings not working (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1059">#1059</a>)</p>
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
          `<p>The out subitem is not hidden (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/343">#343</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const j = z({
  name: 'ArcoMain',
  components: {
    DemoBasic: M,
    DemoAuto: S,
    DemoIndicator: $,
    DemoDirection: V,
    DemoCard: W,
    DemoFade: H,
  },
  setup() {
    const { locale: r } = F();
    return {
      locale: r,
      data: {
        meta: { type: 'Component', category: 'Data Display' },
        title: 'Carousel',
        description:
          'Carousel is used to display multiple pictures, videos, or embedded frames and other content in a loop, and supports automatic playback or manual switching by the user.',
      },
      changelog: typeof b === 'undefined' ? void 0 : b,
      getMessage: (a, f) => (r.value === 'zh-CN' ? a : f),
    };
  },
});
function R(r, l, v, y, a, f) {
  const w = i('demo-basic');
  const x = i('demo-auto');
  const C = i('demo-indicator');
  const D = i('demo-direction');
  const T = i('demo-card');
  const k = i('demo-fade');
  const P = i('anchor-head');
  const s = i('a-th');
  const d = i('a-tr');
  const p = i('a-thead');
  const o = i('a-td');
  const m = i('a-tbody');
  const g = i('a-table');
  const A = i('arco-article');
  return (
    N(),
    E(
      A,
      I(r.data, { changelog: r.changelog }),
      {
        default: n(() => [
          l[65] ||
            (l[65] = e(
              'p',
              null,
              [e('em', null, 'Auto translate by google.')],
              -1
            )),
          t(w),
          t(x),
          t(C),
          t(D),
          t(T),
          t(k),
          t(
            P,
            { level: '2', href: 'API' },
            { default: n(() => l[0] || (l[0] = [u('API')])), _: 1 }
          ),
          l[66] ||
            (l[66] = e(
              'h3',
              { id: 'carousel Props' },
              [e('code', null, '<carousel>'), u(' Props')],
              -1
            )),
          t(
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
                t(p, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(s, null, {
                          default: n(() => l[1] || (l[1] = [u('Attribute')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(() => l[2] || (l[2] = [u('Description')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(() => l[3] || (l[3] = [u('Type')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(() => l[4] || (l[4] = [u('Default')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(m, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(o, null, {
                          default: n(
                            () =>
                              l[5] ||
                              (l[5] = [
                                u('current '),
                                e('strong', null, '(v-model)', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[6] ||
                              (l[6] = [
                                u(
                                  'The index of current slide which starts from 1'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[7] || (l[7] = [e('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () => l[8] || (l[8] = [e('code', null, '-', -1)])
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
                            () => l[9] || (l[9] = [u('default-current')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[10] ||
                              (l[10] = [u('Default index of current slide')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[11] || (l[11] = [e('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () => l[12] || (l[12] = [e('code', null, '1', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(o, null, {
                          default: n(() => l[13] || (l[13] = [u('auto-play')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[14] ||
                              (l[14] = [
                                u(
                                  '@en* Whether to automatically loop the display, or pass in '
                                ),
                                e(
                                  'code',
                                  null,
                                  '{ interval: the time interval for switching (default: 3000),<br>hoverToPause: whether to pause switching while hover (default: true) }',
                                  -1
                                ),
                                u(
                                  ' for configuration (object is supported from '
                                ),
                                e('code', null, '2.14.0', -1),
                                u(')'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[15] ||
                              (l[15] = [
                                e(
                                  'code',
                                  null,
                                  'boolean | CarouselAutoPlayConfig',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[16] || (l[16] = [e('code', null, 'false', -1)])
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
                            () => l[17] || (l[17] = [u('move-speed')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[18] ||
                              (l[18] = [
                                u('The duration of the slide movement(ms)'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[19] || (l[19] = [e('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[20] || (l[20] = [e('code', null, '500', -1)])
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
                            () => l[21] || (l[21] = [u('animation-name')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[22] ||
                              (l[22] = [
                                u('The animation of the slide movement'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[23] ||
                              (l[23] = [
                                e(
                                  'code',
                                  null,
                                  "'slide' | 'fade' | 'card'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[24] ||
                              (l[24] = [e('code', null, "'slide'", -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(o, null, {
                          default: n(() => l[25] || (l[25] = [u('trigger')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[26] ||
                              (l[26] = [
                                u(
                                  'How to trigger the slide switch, click/hover the indicator'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[27] ||
                              (l[27] = [
                                e('code', null, "'click' | 'hover'", -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[28] ||
                              (l[28] = [e('code', null, "'click'", -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(o, null, {
                          default: n(() => l[29] || (l[29] = [u('direction')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[30] ||
                              (l[30] = [
                                u('The direction of the slide movement'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[31] ||
                              (l[31] = [
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
                          default: n(
                            () =>
                              l[32] ||
                              (l[32] = [e('code', null, "'horizontal'", -1)])
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
                            () => l[33] || (l[33] = [u('show-arrow')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[34] ||
                              (l[34] = [
                                u('When to show the arrow used to switch'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[35] ||
                              (l[35] = [
                                e(
                                  'code',
                                  null,
                                  "'always' | 'hover' | 'never'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[36] ||
                              (l[36] = [e('code', null, "'always'", -1)])
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
                            () => l[37] || (l[37] = [u('arrow-class')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[38] ||
                              (l[38] = [
                                u(
                                  'The additional css class to arrow used to switch'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[39] || (l[39] = [e('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () => l[40] || (l[40] = [e('code', null, "''", -1)])
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
                            () => l[41] || (l[41] = [u('indicator-type')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () => l[42] || (l[42] = [u('Type of indicator')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[43] ||
                              (l[43] = [
                                e(
                                  'code',
                                  null,
                                  "'line' | 'dot' | 'slider' | 'never'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[44] || (l[44] = [e('code', null, "'dot'", -1)])
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
                            () => l[45] || (l[45] = [u('indicator-position')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[46] || (l[46] = [u('Position of indication')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[47] ||
                              (l[47] = [
                                e(
                                  'code',
                                  null,
                                  "'bottom' | 'top' | 'left' | 'right' | 'outer'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[48] ||
                              (l[48] = [e('code', null, "'bottom'", -1)])
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
                            () => l[49] || (l[49] = [u('indicator-class')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[50] ||
                              (l[50] = [
                                u('The additional css class to indicator'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[51] || (l[51] = [e('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () => l[52] || (l[52] = [e('code', null, "''", -1)])
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
                            () =>
                              l[53] ||
                              (l[53] = [u('transition-timing-function')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[54] ||
                              (l[54] = [
                                u(
                                  'How intermediate values are calculated for CSS properties being affected by a transition effect.'
                                ),
                                e('br', null, null, -1),
                                e(
                                  'a',
                                  {
                                    class: 'link',
                                    href: 'https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-timing-function',
                                  },
                                  'transition-timing-function',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[55] || (l[55] = [e('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[56] ||
                              (l[56] = [
                                e(
                                  'code',
                                  null,
                                  "'cubic-bezier(0.34, 0.69, 0.1, 1)'",
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
          l[67] ||
            (l[67] = e(
              'h3',
              { id: 'carousel Events' },
              [e('code', null, '<carousel>'), u(' Events')],
              -1
            )),
          t(
            g,
            { class: 'component-api-table' },
            {
              default: n(() => [
                l[64] ||
                  (l[64] = e(
                    'colgroup',
                    null,
                    [e('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(p, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(s, null, {
                          default: n(
                            () => l[58] || (l[58] = [u('Event Name')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(
                            () => l[59] || (l[59] = [u('Description')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(
                            () => l[60] || (l[60] = [u('Parameters')])
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
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(o, null, {
                          default: n(() => l[61] || (l[61] = [u('change')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[62] ||
                              (l[62] = [u('Callback when slide changes')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: n(
                            () =>
                              l[63] ||
                              (l[63] = [
                                u('index: '),
                                e('code', null, 'number', -1),
                                e('br', null, null, -1),
                                u('prevIndex: '),
                                e('code', null, 'number', -1),
                                e('br', null, null, -1),
                                u('isManual: '),
                                e('code', null, 'boolean', -1),
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
const q = B(j, [['render', R]]);
export { q as default };
