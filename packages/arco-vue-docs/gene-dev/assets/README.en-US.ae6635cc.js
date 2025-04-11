import {
  _ as T,
  d as P,
  u as $,
  r as d,
  o as k,
  c as z,
  w as o,
  e,
  a as t,
  b as u,
  m as I,
} from './index.9c61ea88.js';
import {
  D as S,
  a as E,
  b as V,
  c as F,
  d as j,
  e as R,
  f as U,
} from './color.5784701b.js';
import './index.add6d80b.js';

const i = [
  {
    version: '2.47.1',
    date: '2023-06-09',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem that components fail when customizing <code>prefix-cls</code> (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2476">#2476</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  { version: '2.40.1', date: '2022-12-23', list: [], extra: [] },
  {
    version: '2.12.0',
    date: '2021-12-24',
    list: [
      {
        type: 'enhancement',
        typeText: '\u{1F48E} Enhancement',
        list: [
          `<p>No longer render the logo when count is 0 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/445">#445</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const W = P({
  name: 'ArcoMain',
  components: {
    DemoBasic: S,
    DemoAlone: E,
    DemoDot: V,
    DemoText: F,
    DemoMax: j,
    DemoStatus: R,
    DemoColor: U,
  },
  setup() {
    const { locale: a } = $();
    return {
      locale: a,
      data: {
        meta: { type: 'Component', category: 'Data Display' },
        title: 'Badge',
        description:
          'Badge normally appears in the upper right corner of the icon or text to prompt important information.',
      },
      changelog: typeof i === 'undefined' ? void 0 : i,
      getMessage: (f, m) => (a.value === 'zh-CN' ? f : m),
    };
  },
});
function q(a, l, p, g, f, m) {
  const b = d('demo-basic');
  const x = d('demo-alone');
  const _ = d('demo-dot');
  const y = d('demo-text');
  const D = d('demo-max');
  const v = d('demo-status');
  const C = d('demo-color');
  const w = d('anchor-head');
  const r = d('a-th');
  const s = d('a-tr');
  const B = d('a-thead');
  const n = d('a-td');
  const A = d('a-tbody');
  const M = d('a-table');
  const N = d('arco-article');
  return (
    k(),
    z(
      N,
      I(a.data, { changelog: a.changelog }),
      {
        default: o(() => [
          l[38] ||
            (l[38] = e(
              'p',
              null,
              [e('em', null, 'Auto translate by google.')],
              -1
            )),
          t(b),
          t(x),
          t(_),
          t(y),
          t(D),
          t(v),
          t(C),
          t(
            w,
            { level: '2', href: 'API' },
            { default: o(() => l[0] || (l[0] = [u('API')])), _: 1 }
          ),
          l[39] ||
            (l[39] = e(
              'h3',
              { id: 'badge Props' },
              [e('code', null, '<badge>'), u(' Props')],
              -1
            )),
          t(
            M,
            { class: 'component-api-table' },
            {
              default: o(() => [
                l[37] ||
                  (l[37] = e(
                    'colgroup',
                    null,
                    [e('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(B, null, {
                  default: o(() => [
                    t(s, null, {
                      default: o(() => [
                        t(r, null, {
                          default: o(() => l[1] || (l[1] = [u('Attribute')])),
                          _: 1,
                        }),
                        t(r, null, {
                          default: o(() => l[2] || (l[2] = [u('Description')])),
                          _: 1,
                        }),
                        t(r, null, {
                          default: o(() => l[3] || (l[3] = [u('Type')])),
                          _: 1,
                        }),
                        t(r, null, {
                          default: o(() => l[4] || (l[4] = [u('Default')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(A, null, {
                  default: o(() => [
                    t(s, null, {
                      default: o(() => [
                        t(n, null, {
                          default: o(() => l[5] || (l[5] = [u('text')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: o(
                            () =>
                              l[6] ||
                              (l[6] = [
                                u('Set the display text of the status dot'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: o(
                            () =>
                              l[7] || (l[7] = [e('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: o(
                            () => l[8] || (l[8] = [e('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: o(() => [
                        t(n, null, {
                          default: o(() => l[9] || (l[9] = [u('dot')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: o(
                            () =>
                              l[10] ||
                              (l[10] = [
                                u('Whether to display a red dot instead of '),
                                e('code', null, 'count', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: o(
                            () =>
                              l[11] ||
                              (l[11] = [e('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: o(
                            () =>
                              l[12] || (l[12] = [e('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: o(() => [
                        t(n, null, {
                          default: o(() => l[13] || (l[13] = [u('dot-style')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: o(
                            () =>
                              l[14] ||
                              (l[14] = [u('Customize badge dot style')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: o(
                            () =>
                              l[15] || (l[15] = [e('code', null, 'object', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: o(
                            () => l[16] || (l[16] = [e('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: o(() => [
                        t(n, null, {
                          default: o(() => l[17] || (l[17] = [u('max-count')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: o(
                            () =>
                              l[18] ||
                              (l[18] = [
                                u(
                                  'Max count to show. If count is larger than this value, it will be displayed as '
                                ),
                                e('code', null, '${maxCount}+', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: o(
                            () =>
                              l[19] || (l[19] = [e('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: o(
                            () => l[20] || (l[20] = [e('code', null, '99', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: o(() => [
                        t(n, null, {
                          default: o(() => l[21] || (l[21] = [u('offset')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: o(
                            () =>
                              l[22] ||
                              (l[22] = [u('Set offset of the badge dot')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: o(
                            () =>
                              l[23] ||
                              (l[23] = [e('code', null, 'number[]', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: o(
                            () => l[24] || (l[24] = [e('code', null, '[]', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: o(() => [
                        t(n, null, {
                          default: o(() => l[25] || (l[25] = [u('color')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: o(
                            () => l[26] || (l[26] = [u('Customize dot color')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: o(
                            () =>
                              l[27] ||
                              (l[27] = [
                                e('code', null, 'ColorType | string', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: o(
                            () => l[28] || (l[28] = [e('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: o(() => [
                        t(n, null, {
                          default: o(() => l[29] || (l[29] = [u('status')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: o(
                            () => l[30] || (l[30] = [u('Badge status')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: o(
                            () =>
                              l[31] ||
                              (l[31] = [
                                e(
                                  'code',
                                  null,
                                  "'normal' | 'processing' | 'success' | 'warning' | 'danger'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: o(
                            () => l[32] || (l[32] = [e('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(s, null, {
                      default: o(() => [
                        t(n, null, {
                          default: o(() => l[33] || (l[33] = [u('count')])),
                          _: 1,
                        }),
                        t(n, null, {
                          default: o(
                            () =>
                              l[34] || (l[34] = [u('Number to show in badge')])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: o(
                            () =>
                              l[35] || (l[35] = [e('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        t(n, null, {
                          default: o(
                            () => l[36] || (l[36] = [e('code', null, '-', -1)])
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
const K = T(W, [['render', q]]);
export { K as default };
