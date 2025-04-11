import {
  _ as P,
  d as B,
  u as E,
  r as d,
  o as C,
  c as M,
  w as t,
  e as u,
  a as n,
  b as o,
  m as N,
} from './index.9c61ea88.js';
import { D as W, a as $, b as H, c as I, d as L } from './hash.15a88a34.js';

const b = [
  {
    version: '2.11.0',
    date: '2021-12-17',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem that the hash position will not be located after loading (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/400">#400</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const S = B({
  name: 'ArcoMain',
  components: {
    DemoBasic: W,
    DemoLineLess: $,
    DemoAffix: H,
    DemoBoundary: I,
    DemoHash: L,
  },
  setup() {
    const { locale: r } = E();
    return {
      locale: r,
      data: {
        meta: { type: 'Component', category: 'Other' },
        title: 'Anchor',
        description:
          'Through the anchor point, you can quickly find the position of the information content on the current page.',
      },
      changelog: typeof b === 'undefined' ? void 0 : b,
      getMessage: (m, g) => (r.value === 'zh-CN' ? m : g),
    };
  },
});
function V(r, l, y, x, m, g) {
  const v = d('demo-basic');
  const w = d('demo-line-less');
  const k = d('demo-affix');
  const D = d('demo-boundary');
  const _ = d('demo-hash');
  const A = d('anchor-head');
  const a = d('a-th');
  const s = d('a-tr');
  const f = d('a-thead');
  const e = d('a-td');
  const i = d('a-tbody');
  const p = d('a-table');
  const T = d('arco-article');
  return (
    C(),
    M(
      T,
      N(r.data, { changelog: r.changelog }),
      {
        default: t(() => [
          l[49] ||
            (l[49] = u(
              'p',
              null,
              [u('em', null, 'Auto translate by google.')],
              -1
            )),
          n(v),
          n(w),
          n(k),
          n(D),
          n(_),
          n(
            A,
            { level: '2', href: 'API' },
            { default: t(() => l[0] || (l[0] = [o('API')])), _: 1 }
          ),
          l[50] ||
            (l[50] = u(
              'h3',
              { id: 'anchor Props' },
              [u('code', null, '<anchor>'), o(' Props')],
              -1
            )),
          n(
            p,
            { class: 'component-api-table' },
            {
              default: t(() => [
                l[25] ||
                  (l[25] = u(
                    'colgroup',
                    null,
                    [u('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                n(f, null, {
                  default: t(() => [
                    n(s, null, {
                      default: t(() => [
                        n(a, null, {
                          default: t(() => l[1] || (l[1] = [o('Attribute')])),
                          _: 1,
                        }),
                        n(a, null, {
                          default: t(() => l[2] || (l[2] = [o('Description')])),
                          _: 1,
                        }),
                        n(a, null, {
                          default: t(() => l[3] || (l[3] = [o('Type')])),
                          _: 1,
                        }),
                        n(a, null, {
                          default: t(() => l[4] || (l[4] = [o('Default')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                n(i, null, {
                  default: t(() => [
                    n(s, null, {
                      default: t(() => [
                        n(e, null, {
                          default: t(() => l[5] || (l[5] = [o('boundary')])),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () =>
                              l[6] ||
                              (l[6] = [
                                o(
                                  'Scrolling boundary value. After setting the value to a number, it will stop scrolling when the distance is '
                                ),
                                u('code', null, 'boundary', -1),
                                o(' from the scrolling container.'),
                              ])
                          ),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () =>
                              l[7] ||
                              (l[7] = [
                                u(
                                  'code',
                                  null,
                                  "'start' | 'end' | 'center' | 'nearest' | number",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () =>
                              l[8] || (l[8] = [u('code', null, "'start'", -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    n(s, null, {
                      default: t(() => [
                        n(e, null, {
                          default: t(() => l[9] || (l[9] = [o('line-less')])),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () =>
                              l[10] ||
                              (l[10] = [o('Whether to show the left axis')])
                          ),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () =>
                              l[11] ||
                              (l[11] = [u('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () =>
                              l[12] || (l[12] = [u('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    n(s, null, {
                      default: t(() => [
                        n(e, null, {
                          default: t(
                            () => l[13] || (l[13] = [o('scroll-container')])
                          ),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () => l[14] || (l[14] = [o('Scroll container')])
                          ),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () =>
                              l[15] ||
                              (l[15] = [
                                u(
                                  'code',
                                  null,
                                  'string | HTMLElement | Window',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () => l[16] || (l[16] = [u('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    n(s, null, {
                      default: t(() => [
                        n(e, null, {
                          default: t(
                            () => l[17] || (l[17] = [o('change-hash')])
                          ),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () =>
                              l[18] ||
                              (l[18] = [
                                o('Whether to change the hash. When set to '),
                                u('code', null, 'false', -1),
                                o(
                                  ', clicking on the anchor will not change the hash of the page'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () =>
                              l[19] ||
                              (l[19] = [u('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () =>
                              l[20] || (l[20] = [u('code', null, 'true', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    n(s, null, {
                      default: t(() => [
                        n(e, null, {
                          default: t(() => l[21] || (l[21] = [o('smooth')])),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () =>
                              l[22] ||
                              (l[22] = [o('Whether to use smooth scrolling')])
                          ),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () =>
                              l[23] ||
                              (l[23] = [u('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () =>
                              l[24] || (l[24] = [u('code', null, 'true', -1)])
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
          l[51] ||
            (l[51] = u(
              'h3',
              { id: 'anchor Events' },
              [u('code', null, '<anchor>'), o(' Events')],
              -1
            )),
          n(
            p,
            { class: 'component-api-table' },
            {
              default: t(() => [
                l[35] ||
                  (l[35] = u(
                    'colgroup',
                    null,
                    [u('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                n(f, null, {
                  default: t(() => [
                    n(s, null, {
                      default: t(() => [
                        n(a, null, {
                          default: t(
                            () => l[26] || (l[26] = [o('Event Name')])
                          ),
                          _: 1,
                        }),
                        n(a, null, {
                          default: t(
                            () => l[27] || (l[27] = [o('Description')])
                          ),
                          _: 1,
                        }),
                        n(a, null, {
                          default: t(
                            () => l[28] || (l[28] = [o('Parameters')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                n(i, null, {
                  default: t(() => [
                    n(s, null, {
                      default: t(() => [
                        n(e, null, {
                          default: t(() => l[29] || (l[29] = [o('select')])),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () =>
                              l[30] ||
                              (l[30] = [
                                o('Triggered when the user clicks on the link'),
                              ])
                          ),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () =>
                              l[31] ||
                              (l[31] = [
                                o('hash: '),
                                u('code', null, 'string | undefined', -1),
                                u('br', null, null, -1),
                                o('preHash: '),
                                u('code', null, 'string', -1),
                              ])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    n(s, null, {
                      default: t(() => [
                        n(e, null, {
                          default: t(() => l[32] || (l[32] = [o('change')])),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () =>
                              l[33] ||
                              (l[33] = [o('Triggered when the link changes')])
                          ),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () =>
                              l[34] ||
                              (l[34] = [
                                o('hash: '),
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
          l[52] ||
            (l[52] = u(
              'h3',
              { id: 'anchor-link Props' },
              [u('code', null, '<anchor-link>'), o(' Props')],
              -1
            )),
          n(
            p,
            { class: 'component-api-table' },
            {
              default: t(() => [
                l[48] ||
                  (l[48] = u(
                    'colgroup',
                    null,
                    [u('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                n(f, null, {
                  default: t(() => [
                    n(s, null, {
                      default: t(() => [
                        n(a, null, {
                          default: t(() => l[36] || (l[36] = [o('Attribute')])),
                          _: 1,
                        }),
                        n(a, null, {
                          default: t(
                            () => l[37] || (l[37] = [o('Description')])
                          ),
                          _: 1,
                        }),
                        n(a, null, {
                          default: t(() => l[38] || (l[38] = [o('Type')])),
                          _: 1,
                        }),
                        n(a, null, {
                          default: t(() => l[39] || (l[39] = [o('Default')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                n(i, null, {
                  default: t(() => [
                    n(s, null, {
                      default: t(() => [
                        n(e, null, {
                          default: t(() => l[40] || (l[40] = [o('title')])),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () =>
                              l[41] ||
                              (l[41] = [
                                o('The text content of the anchor link'),
                              ])
                          ),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () =>
                              l[42] || (l[42] = [u('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () => l[43] || (l[43] = [u('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    n(s, null, {
                      default: t(() => [
                        n(e, null, {
                          default: t(() => l[44] || (l[44] = [o('href')])),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () =>
                              l[45] ||
                              (l[45] = [o('The address of the anchor link')])
                          ),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () =>
                              l[46] || (l[46] = [u('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () => l[47] || (l[47] = [u('code', null, '-', -1)])
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
const z = P(S, [['render', V]]);
export { z as default };
