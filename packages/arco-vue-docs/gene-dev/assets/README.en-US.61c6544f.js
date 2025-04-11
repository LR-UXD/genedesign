import {
  _ as E,
  d as P,
  u as N,
  r as a,
  o as A,
  c as C,
  w as n,
  e as o,
  a as t,
  b as e,
  m as M,
} from './index.9c61ea88.js';
import { D as S, a as T, b as I, c as $ } from './content.3cb506ec.js';

const b = [
  {
    version: '2.36.0',
    date: '2022-09-02',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>support custom back icon (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1499">#1499</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.6.1',
    date: '2021-11-24',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem that the dividing line is still displayed when there is no subtitle (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/224">#224</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const F = P({
  name: 'ArcoMain',
  components: {
    DemoBasic: S,
    DemoBreadcrumb: T,
    DemoTransparent: I,
    DemoContent: $,
  },
  setup() {
    const { locale: r } = N();
    return {
      locale: r,
      data: {
        meta: { type: 'Component', category: 'Navigation' },
        title: 'PageHeader',
        description:
          'The page header is located at the top of the page container and serves as a content overview and guide page-level operations. Including breadcrumbs, titles, etc.',
      },
      changelog: typeof b === 'undefined' ? void 0 : b,
      getMessage: (m, g) => (r.value === 'zh-CN' ? m : g),
    };
  },
});
function V(r, l, v, x, m, g) {
  const y = a('demo-basic');
  const k = a('demo-breadcrumb');
  const w = a('demo-transparent');
  const D = a('demo-content');
  const _ = a('anchor-head');
  const s = a('a-th');
  const d = a('a-tr');
  const i = a('a-thead');
  const u = a('a-td');
  const f = a('a-tbody');
  const p = a('a-table');
  const B = a('arco-article');
  return (
    A(),
    C(
      B,
      M(r.data, { changelog: r.changelog }),
      {
        default: n(() => [
          l[46] ||
            (l[46] = o(
              'p',
              null,
              [o('em', null, 'Auto translate by google.')],
              -1
            )),
          t(y),
          t(k),
          t(w),
          t(D),
          t(
            _,
            { level: '2', href: 'API' },
            { default: n(() => l[0] || (l[0] = [e('API')])), _: 1 }
          ),
          l[47] ||
            (l[47] = o(
              'h3',
              { id: 'page-header Props' },
              [o('code', null, '<page-header>'), e(' Props')],
              -1
            )),
          t(
            p,
            { class: 'component-api-table' },
            {
              default: n(() => [
                l[17] ||
                  (l[17] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(i, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(s, null, {
                          default: n(() => l[1] || (l[1] = [e('Attribute')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(() => l[2] || (l[2] = [e('Description')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(() => l[3] || (l[3] = [e('Type')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(() => l[4] || (l[4] = [e('Default')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(f, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[5] || (l[5] = [e('title')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(() => l[6] || (l[6] = [e('Main title')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[7] || (l[7] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[8] || (l[8] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[9] || (l[9] = [e('subtitle')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(() => l[10] || (l[10] = [e('Subtitle')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[11] || (l[11] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[12] || (l[12] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[13] || (l[13] = [e('show-back')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[14] ||
                              (l[14] = [e('Whether to show the back button')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[15] ||
                              (l[15] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[16] || (l[16] = [o('code', null, 'true', -1)])
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
          l[48] ||
            (l[48] = o(
              'h3',
              { id: 'page-header Events' },
              [o('code', null, '<page-header>'), e(' Events')],
              -1
            )),
          t(
            p,
            { class: 'component-api-table' },
            {
              default: n(() => [
                l[24] ||
                  (l[24] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(i, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(s, null, {
                          default: n(
                            () => l[18] || (l[18] = [e('Event Name')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(
                            () => l[19] || (l[19] = [e('Description')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(
                            () => l[20] || (l[20] = [e('Parameters')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(f, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[21] || (l[21] = [e('back')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[22] ||
                              (l[22] = [
                                e('Emitted when the back button is clicked'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[23] ||
                              (l[23] = [
                                e('event: '),
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
          l[49] ||
            (l[49] = o(
              'h3',
              { id: 'page-header Slots' },
              [o('code', null, '<page-header>'), e(' Slots')],
              -1
            )),
          t(
            p,
            { class: 'component-api-table' },
            {
              default: n(() => [
                l[45] ||
                  (l[45] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(i, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(s, null, {
                          default: n(() => l[25] || (l[25] = [e('Slot Name')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(
                            () => l[26] || (l[26] = [e('Description')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(
                            () => l[27] || (l[27] = [e('Parameters')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(() => l[28] || (l[28] = [e('version')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(f, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(
                            () => l[29] || (l[29] = [e('breadcrumb')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[30] || (l[30] = [e('Breadcrumb')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(() => l[31] || (l[31] = [e('-')])),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[32] || (l[32] = [e('back-icon')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(() => l[33] || (l[33] = [e('Back icon')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(() => l[34] || (l[34] = [e('-')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(() => l[35] || (l[35] = [e('2.36.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[36] || (l[36] = [e('title')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[37] || (l[37] = [e('Main title')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(() => l[38] || (l[38] = [e('-')])),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[39] || (l[39] = [e('subtitle')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(() => l[40] || (l[40] = [e('Subtitle')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(() => l[41] || (l[41] = [e('-')])),
                          _: 1,
                        }),
                        t(u),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[42] || (l[42] = [e('extra')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[43] || (l[43] = [e('Extra content')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(() => l[44] || (l[44] = [e('-')])),
                          _: 1,
                        }),
                        t(u),
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
const R = E(F, [['render', V]]);
export { R as default };
