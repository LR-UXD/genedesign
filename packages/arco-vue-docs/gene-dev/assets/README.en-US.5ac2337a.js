import {
  _ as k,
  d as B,
  u as F,
  r as u,
  o as h,
  c as z,
  w as e,
  e as i,
  a as l,
  b as o,
  m as A,
} from './index.9c61ea88.js';
import { D as C, a as M, b as P } from './vertical.ff86f056.js';
import './index.add6d80b.js';

const f = [
  {
    version: '2.48.1',
    date: '2023-07-14',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>fix  adaptive height issue with divider (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2561">#2561</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.46.0',
    date: '2023-05-12',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem that margin cannot be set to 0 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2390">#2390</a>)</p>
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
          `<p>Fix the problem that the dividing line is displayed incorrectly (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2205">#2205</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.39.2',
    date: '2022-12-02',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem that the style is wrong when setting size (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1905">#1905</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.35.0',
    date: '2022-08-12',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>support split line width and style (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1473">#1473</a>)</p>
`,
          `<p>support split line margin (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1473">#1473</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const N = B({
  name: 'ArcoMain',
  components: { DemoBasic: C, DemoWithText: M, DemoVertical: P },
  setup() {
    const { locale: a } = F();
    return {
      locale: a,
      data: {
        meta: { type: 'Component', category: 'Layout' },
        title: 'Divider',
        description: 'Divide the content area and separate the modules.',
      },
      changelog: typeof f === 'undefined' ? void 0 : f,
      getMessage: (r, p) => (a.value === 'zh-CN' ? r : p),
    };
  },
});
function V(a, t, g, m, r, p) {
  const v = u('demo-basic');
  const x = u('demo-with-text');
  const b = u('demo-vertical');
  const y = u('anchor-head');
  const s = u('a-th');
  const d = u('a-tr');
  const _ = u('a-thead');
  const n = u('a-td');
  const w = u('a-tbody');
  const T = u('a-table');
  const D = u('arco-article');
  return (
    h(),
    z(
      D,
      A(a.data, { changelog: a.changelog }),
      {
        default: e(() => [
          t[30] ||
            (t[30] = i(
              'p',
              null,
              [i('em', null, 'Auto translate by google.')],
              -1
            )),
          l(v),
          l(x),
          l(b),
          l(
            y,
            { level: '2', href: 'API' },
            { default: e(() => t[0] || (t[0] = [o('API')])), _: 1 }
          ),
          t[31] ||
            (t[31] = i(
              'h3',
              { id: 'divider Props' },
              [i('code', null, '<divider>'), o(' Props')],
              -1
            )),
          l(
            T,
            { class: 'component-api-table' },
            {
              default: e(() => [
                t[29] ||
                  (t[29] = i(
                    'colgroup',
                    null,
                    [i('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                l(_, null, {
                  default: e(() => [
                    l(d, null, {
                      default: e(() => [
                        l(s, null, {
                          default: e(() => t[1] || (t[1] = [o('Attribute')])),
                          _: 1,
                        }),
                        l(s, null, {
                          default: e(() => t[2] || (t[2] = [o('Description')])),
                          _: 1,
                        }),
                        l(s, null, {
                          default: e(() => t[3] || (t[3] = [o('Type')])),
                          _: 1,
                        }),
                        l(s, null, {
                          default: e(() => t[4] || (t[4] = [o('Default')])),
                          _: 1,
                        }),
                        l(s, null, {
                          default: e(() => t[5] || (t[5] = [o('version')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                l(w, null, {
                  default: e(() => [
                    l(d, null, {
                      default: e(() => [
                        l(n, null, {
                          default: e(() => t[6] || (t[6] = [o('direction')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: e(
                            () =>
                              t[7] ||
                              (t[7] = [
                                o(
                                  'The direction of the dividing line. Can be horizontal or vertical'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: e(
                            () =>
                              t[8] ||
                              (t[8] = [
                                i(
                                  'code',
                                  null,
                                  "'horizontal' | 'vertical'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: e(
                            () =>
                              t[9] ||
                              (t[9] = [i('code', null, "'horizontal'", -1)])
                          ),
                          _: 1,
                        }),
                        l(n),
                      ]),
                      _: 1,
                    }),
                    l(d, null, {
                      default: e(() => [
                        l(n, null, {
                          default: e(
                            () => t[10] || (t[10] = [o('orientation')])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: e(
                            () =>
                              t[11] ||
                              (t[11] = [
                                o('The position of the dividing line text'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: e(
                            () =>
                              t[12] ||
                              (t[12] = [
                                i(
                                  'code',
                                  null,
                                  "'left' | 'center' | 'right'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: e(
                            () =>
                              t[13] ||
                              (t[13] = [i('code', null, "'center'", -1)])
                          ),
                          _: 1,
                        }),
                        l(n),
                      ]),
                      _: 1,
                    }),
                    l(d, null, {
                      default: e(() => [
                        l(n, null, {
                          default: e(() => t[14] || (t[14] = [o('type')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: e(
                            () =>
                              t[15] || (t[15] = [o('Dividing line style type')])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: e(
                            () =>
                              t[16] ||
                              (t[16] = [
                                i(
                                  'code',
                                  null,
                                  "'solid' | 'dashed' | 'dotted' | 'double'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: e(
                            () => t[17] || (t[17] = [i('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: e(() => t[18] || (t[18] = [o('2.35.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(d, null, {
                      default: e(() => [
                        l(n, null, {
                          default: e(() => t[19] || (t[19] = [o('size')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: e(
                            () =>
                              t[20] ||
                              (t[20] = [
                                o('The wide/height of the dividing line'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: e(
                            () =>
                              t[21] || (t[21] = [i('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: e(
                            () => t[22] || (t[22] = [i('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: e(() => t[23] || (t[23] = [o('2.35.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(d, null, {
                      default: e(() => [
                        l(n, null, {
                          default: e(() => t[24] || (t[24] = [o('margin')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: e(
                            () =>
                              t[25] ||
                              (t[25] = [
                                o(
                                  'Margin up and down the split line (left and right margin in vertical direction)'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: e(
                            () =>
                              t[26] ||
                              (t[26] = [i('code', null, 'number | string', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: e(
                            () => t[27] || (t[27] = [i('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: e(() => t[28] || (t[28] = [o('2.35.0')])),
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
const L = k(N, [['render', V]]);
export { L as default };
