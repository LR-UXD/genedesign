import {
  _ as T,
  d as C,
  u as P,
  r as d,
  o as M,
  c as N,
  w as n,
  e as u,
  a as t,
  b as o,
  m as B,
} from './index.9c61ea88.js';
import { D as I, a as L, b as $, c as F, d as V } from './loading.d86117b4.js';
import './index.71fb9fd7.js';

const b = [
  {
    version: '2.37.4',
    date: '2022-09-30',
    list: [
      {
        type: 'enhancement',
        typeText: '\u{1F48E} Enhancement',
        list: [
          `<p>Use the flex layout method to solve the centering problem when the icon size is inconsistent (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1702">#1702</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.37.0',
    date: '2022-09-16',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>add loading prop (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1616">#1616</a>)</p>
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
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>Add click event (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/450">#450</a>)</p>
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
          `<p>Add icon setting via <code>icon</code> property/slot property or slot (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/226">#226</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const W = C({
  name: 'ArcoMain',
  components: {
    DemoBasic: I,
    DemoStatus: L,
    DemoHoverable: $,
    DemoIcon: F,
    DemoLoading: V,
  },
  setup() {
    const { locale: i } = P();
    return {
      locale: i,
      data: {
        meta: { type: 'Component', category: 'Common' },
        title: 'Link',
        description: 'The basic style of the link.',
      },
      changelog: typeof b === 'undefined' ? void 0 : b,
      getMessage: (r, f) => (i.value === 'zh-CN' ? r : f),
    };
  },
});
function z(i, l, v, k, r, f) {
  const y = d('demo-basic');
  const _ = d('demo-status');
  const x = d('demo-hoverable');
  const D = d('demo-icon');
  const w = d('demo-loading');
  const A = d('anchor-head');
  const a = d('a-th');
  const s = d('a-tr');
  const p = d('a-thead');
  const e = d('a-td');
  const m = d('a-tbody');
  const g = d('a-table');
  const E = d('arco-article');
  return (
    M(),
    N(
      E,
      B(i.data, { changelog: i.changelog }),
      {
        default: n(() => [
          l[41] ||
            (l[41] = u(
              'p',
              null,
              [u('em', null, 'Auto translate by google.')],
              -1
            )),
          t(y),
          t(_),
          t(x),
          t(D),
          t(w),
          t(
            A,
            { level: '2', href: 'API' },
            { default: n(() => l[0] || (l[0] = [o('API')])), _: 1 }
          ),
          l[42] ||
            (l[42] = u(
              'h3',
              { id: 'link Props' },
              [u('code', null, '<link>'), o(' Props')],
              -1
            )),
          t(
            g,
            { class: 'component-api-table' },
            {
              default: n(() => [
                l[33] ||
                  (l[33] = u(
                    'colgroup',
                    null,
                    [u('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(p, null, {
                  default: n(() => [
                    t(s, null, {
                      default: n(() => [
                        t(a, null, {
                          default: n(() => l[1] || (l[1] = [o('Attribute')])),
                          _: 1,
                        }),
                        t(a, null, {
                          default: n(() => l[2] || (l[2] = [o('Description')])),
                          _: 1,
                        }),
                        t(a, null, {
                          default: n(() => l[3] || (l[3] = [o('Type')])),
                          _: 1,
                        }),
                        t(a, null, {
                          default: n(() => l[4] || (l[4] = [o('Default')])),
                          _: 1,
                        }),
                        t(a, null, {
                          default: n(() => l[5] || (l[5] = [o('version')])),
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
                    t(s, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[6] || (l[6] = [o('href')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[7] || (l[7] = [o('Link address')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[8] || (l[8] = [u('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[9] || (l[9] = [u('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[10] || (l[10] = [o('status')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[11] || (l[11] = [o('Link status')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[12] ||
                              (l[12] = [
                                u(
                                  'code',
                                  null,
                                  "'normal' | 'warning' | 'success' | 'danger'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[13] ||
                              (l[13] = [u('code', null, "'normal'", -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[14] || (l[14] = [o('hoverable')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[15] ||
                              (l[15] = [
                                o('Whether to hide background when hover'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[16] ||
                              (l[16] = [u('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[17] || (l[17] = [u('code', null, 'true', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(() => l[18] || (l[18] = [o('2.7.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[19] || (l[19] = [o('icon')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(() => l[20] || (l[20] = [o('icon')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[21] ||
                              (l[21] = [u('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[22] || (l[22] = [u('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(() => l[23] || (l[23] = [o('2.7.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[24] || (l[24] = [o('loading')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[25] ||
                              (l[25] = [
                                o('Whether the link is in the loading state'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[26] ||
                              (l[26] = [u('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[27] || (l[27] = [u('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(() => l[28] || (l[28] = [o('2.37.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[29] || (l[29] = [o('disabled')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[30] ||
                              (l[30] = [o('Whether the link is disabled')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[31] ||
                              (l[31] = [u('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[32] || (l[32] = [u('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
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
          l[43] ||
            (l[43] = u(
              'h3',
              { id: 'link Events' },
              [u('code', null, '<link>'), o(' Events')],
              -1
            )),
          t(
            g,
            { class: 'component-api-table' },
            {
              default: n(() => [
                l[40] ||
                  (l[40] = u(
                    'colgroup',
                    null,
                    [u('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(p, null, {
                  default: n(() => [
                    t(s, null, {
                      default: n(() => [
                        t(a, null, {
                          default: n(
                            () => l[34] || (l[34] = [o('Event Name')])
                          ),
                          _: 1,
                        }),
                        t(a, null, {
                          default: n(
                            () => l[35] || (l[35] = [o('Description')])
                          ),
                          _: 1,
                        }),
                        t(a, null, {
                          default: n(
                            () => l[36] || (l[36] = [o('Parameters')])
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
                    t(s, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[37] || (l[37] = [o('click')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[38] ||
                              (l[38] = [o('Emitted when the link is clicked')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[39] ||
                              (l[39] = [
                                o('ev: '),
                                u('code', null, 'MouseEvent', -1),
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
const R = T(W, [['render', z]]);
export { R as default };
