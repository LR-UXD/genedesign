import {
  _ as T,
  d as A,
  u as B,
  r as s,
  o as P,
  c as S,
  w as e,
  e as u,
  a as l,
  b as o,
  m as I,
} from './index.9c61ea88.js';
import {
  D as N,
  a as M,
  b as $,
  c as V,
  d as W,
  e as E,
} from './icon.d7366c38.js';

const b = [
  {
    version: '2.47.0',
    date: '2023-06-02',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>add hideIcon property (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2303">#2303</a>)</p>
`,
          `<p>add tip slot (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2303">#2303</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.38.0-beta.1',
    date: '2022-10-14',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem that size is invalid (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1717">#1717</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.35.1',
    date: '2022-08-19',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the spin problem caused by the increase of the z-index of fixed-column (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1533">#1533</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.9.0',
    date: '2021-12-03',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem that switching states in container mode causes sub-components to reload (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/320">#320</a>)</p>
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
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>Add size prop and icon &amp; element slot (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/86">#86</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const U = A({
  name: 'ArcoMain',
  components: {
    DemoBasic: N,
    DemoSize: M,
    DemoDot: $,
    DemoContainer: V,
    DemoTip: W,
    DemoIcon: E,
  },
  setup() {
    const { locale: i } = B();
    return {
      locale: i,
      data: {
        meta: { type: 'Component', category: 'Feedback' },
        title: 'Spin',
        description:
          'Used for the loading state of pages and blocks-when a part of the page is waiting for asynchronous data or is in the rendering process, appropriate loading dynamics will effectively alleviate user anxiety.',
      },
      changelog: typeof b === 'undefined' ? void 0 : b,
      getMessage: (r, p) => (i.value === 'zh-CN' ? r : p),
    };
  },
});
function O(i, t, x, y, r, p) {
  const v = s('demo-basic');
  const _ = s('demo-size');
  const D = s('demo-dot');
  const k = s('demo-container');
  const z = s('demo-tip');
  const C = s('demo-icon');
  const F = s('anchor-head');
  const d = s('a-th');
  const a = s('a-tr');
  const f = s('a-thead');
  const n = s('a-td');
  const m = s('a-tbody');
  const g = s('a-table');
  const w = s('arco-article');
  return (
    P(),
    S(
      w,
      I(i.data, { changelog: i.changelog }),
      {
        default: e(() => [
          t[39] ||
            (t[39] = u(
              'p',
              null,
              [u('em', null, 'Auto translate by google.')],
              -1
            )),
          l(v),
          l(_),
          l(D),
          l(k),
          l(z),
          l(C),
          l(
            F,
            { level: '2', href: 'API' },
            { default: e(() => t[0] || (t[0] = [o('API')])), _: 1 }
          ),
          t[40] ||
            (t[40] = u(
              'h3',
              { id: 'spin Props' },
              [u('code', null, '<spin>'), o(' Props')],
              -1
            )),
          l(
            g,
            { class: 'component-api-table' },
            {
              default: e(() => [
                t[25] ||
                  (t[25] = u(
                    'colgroup',
                    null,
                    [u('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                l(f, null, {
                  default: e(() => [
                    l(a, null, {
                      default: e(() => [
                        l(d, null, {
                          default: e(() => t[1] || (t[1] = [o('Attribute')])),
                          _: 1,
                        }),
                        l(d, null, {
                          default: e(() => t[2] || (t[2] = [o('Description')])),
                          _: 1,
                        }),
                        l(d, null, {
                          default: e(() => t[3] || (t[3] = [o('Type')])),
                          _: 1,
                        }),
                        l(d, null, {
                          default: e(() => t[4] || (t[4] = [o('Default')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                l(m, null, {
                  default: e(() => [
                    l(a, null, {
                      default: e(() => [
                        l(n, null, {
                          default: e(() => t[5] || (t[5] = [o('size')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: e(() => t[6] || (t[6] = [o('Size')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: e(
                            () =>
                              t[7] || (t[7] = [u('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: e(
                            () => t[8] || (t[8] = [u('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(a, null, {
                      default: e(() => [
                        l(n, null, {
                          default: e(() => t[9] || (t[9] = [o('loading')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: e(
                            () =>
                              t[10] ||
                              (t[10] = [
                                o(
                                  'Whether it is loading state (Only effective in container mode)'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: e(
                            () =>
                              t[11] ||
                              (t[11] = [u('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: e(
                            () =>
                              t[12] || (t[12] = [u('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(a, null, {
                      default: e(() => [
                        l(n, null, {
                          default: e(() => t[13] || (t[13] = [o('dot')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: e(
                            () =>
                              t[14] ||
                              (t[14] = [o('Whether to use dot type animation')])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: e(
                            () =>
                              t[15] ||
                              (t[15] = [u('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: e(
                            () =>
                              t[16] || (t[16] = [u('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(a, null, {
                      default: e(() => [
                        l(n, null, {
                          default: e(() => t[17] || (t[17] = [o('tip')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: e(
                            () => t[18] || (t[18] = [o('Prompt content')])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: e(
                            () =>
                              t[19] || (t[19] = [u('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: e(
                            () => t[20] || (t[20] = [u('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(a, null, {
                      default: e(() => [
                        l(n, null, {
                          default: e(() => t[21] || (t[21] = [o('hide-icon')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: e(
                            () =>
                              t[22] || (t[22] = [o('Whether to hide the icon')])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: e(
                            () =>
                              t[23] ||
                              (t[23] = [u('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: e(
                            () =>
                              t[24] || (t[24] = [u('code', null, 'false', -1)])
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
          t[41] ||
            (t[41] = u(
              'h3',
              { id: 'spin Slots' },
              [u('code', null, '<spin>'), o(' Slots')],
              -1
            )),
          l(
            g,
            { class: 'component-api-table' },
            {
              default: e(() => [
                t[38] ||
                  (t[38] = u(
                    'colgroup',
                    null,
                    [u('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                l(f, null, {
                  default: e(() => [
                    l(a, null, {
                      default: e(() => [
                        l(d, null, {
                          default: e(() => t[26] || (t[26] = [o('Slot Name')])),
                          _: 1,
                        }),
                        l(d, null, {
                          default: e(
                            () => t[27] || (t[27] = [o('Description')])
                          ),
                          _: 1,
                        }),
                        l(d, null, {
                          default: e(
                            () => t[28] || (t[28] = [o('Parameters')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                l(m, null, {
                  default: e(() => [
                    l(a, null, {
                      default: e(() => [
                        l(n, null, {
                          default: e(() => t[29] || (t[29] = [o('tip')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: e(
                            () => t[30] || (t[30] = [o('Custom tip')])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: e(() => t[31] || (t[31] = [o('-')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(a, null, {
                      default: e(() => [
                        l(n, null, {
                          default: e(() => t[32] || (t[32] = [o('element')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: e(
                            () => t[33] || (t[33] = [o('Custom element')])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: e(() => t[34] || (t[34] = [o('-')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(a, null, {
                      default: e(() => [
                        l(n, null, {
                          default: e(() => t[35] || (t[35] = [o('icon')])),
                          _: 1,
                        }),
                        l(n, null, {
                          default: e(
                            () =>
                              t[36] ||
                              (t[36] = [o('Custom icon (auto-rotation)')])
                          ),
                          _: 1,
                        }),
                        l(n, null, {
                          default: e(() => t[37] || (t[37] = [o('-')])),
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
const q = T(U, [['render', O]]);
export { q as default };
