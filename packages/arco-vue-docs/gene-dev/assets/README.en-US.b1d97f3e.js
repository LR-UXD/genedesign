import {
  _ as A,
  d as B,
  u as C,
  r as d,
  o as E,
  c as F,
  w as l,
  e as o,
  a as e,
  b as n,
  m as N,
} from './index.9c61ea88.js';
import {
  D as k,
  a as S,
  b as $,
  c as I,
  d as R,
} from './container.58870a6e.js';

const b = [
  {
    version: '2.21.1',
    date: '2022-03-25',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem of component reporting error under SSR (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/879">#879</a>)</p>
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
          `<p>Fix the problem of displaying warning when used in combination with the anchor component (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/448">#448</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const V = B({
  name: 'ArcoMain',
  components: {
    DemoBasic: k,
    DemoTop: S,
    DemoBottom: $,
    DemoFixChange: I,
    DemoContainer: R,
  },
  setup() {
    const { locale: s } = C();
    return {
      locale: s,
      data: {
        meta: { type: 'Component', category: 'Other' },
        title: 'Affix',
        description:
          'Pin the page elements to the visible range. When the content area is relatively long and the page needs to be scrolled, the fixed pin can fix the content on the screen. Often used for side menus and button combinations.',
      },
      changelog: typeof b === 'undefined' ? void 0 : b,
      getMessage: (m, g) => (s.value === 'zh-CN' ? m : g),
    };
  },
});
function W(s, t, x, w, m, g) {
  const _ = d('demo-basic');
  const v = d('demo-top');
  const y = d('demo-bottom');
  const T = d('demo-fix-change');
  const D = d('demo-container');
  const M = d('anchor-head');
  const a = d('a-th');
  const i = d('a-tr');
  const f = d('a-thead');
  const u = d('a-td');
  const r = d('a-tbody');
  const p = d('a-table');
  const P = d('arco-article');
  return (
    E(),
    F(
      P,
      N(s.data, { changelog: s.changelog }),
      {
        default: l(() => [
          t[38] ||
            (t[38] = o(
              'p',
              null,
              [o('em', null, 'Auto translate by google.')],
              -1
            )),
          e(_),
          e(v),
          e(y),
          e(T),
          e(D),
          e(
            M,
            { level: '2', href: 'API' },
            { default: l(() => t[0] || (t[0] = [n('API')])), _: 1 }
          ),
          t[39] ||
            (t[39] = o(
              'h3',
              { id: 'affix Props' },
              [o('code', null, '<affix>'), n(' Props')],
              -1
            )),
          e(
            p,
            { class: 'component-api-table' },
            {
              default: l(() => [
                t[21] ||
                  (t[21] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                e(f, null, {
                  default: l(() => [
                    e(i, null, {
                      default: l(() => [
                        e(a, null, {
                          default: l(() => t[1] || (t[1] = [n('Attribute')])),
                          _: 1,
                        }),
                        e(a, null, {
                          default: l(() => t[2] || (t[2] = [n('Description')])),
                          _: 1,
                        }),
                        e(a, null, {
                          default: l(() => t[3] || (t[3] = [n('Type')])),
                          _: 1,
                        }),
                        e(a, null, {
                          default: l(() => t[4] || (t[4] = [n('Default')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                e(r, null, {
                  default: l(() => [
                    e(i, null, {
                      default: l(() => [
                        e(u, null, {
                          default: l(() => t[5] || (t[5] = [n('offset-top')])),
                          _: 1,
                        }),
                        e(u, null, {
                          default: l(
                            () =>
                              t[6] ||
                              (t[6] = [
                                n(
                                  'Triggered when the specified offset is reached from the top of the window'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        e(u, null, {
                          default: l(
                            () =>
                              t[7] || (t[7] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        e(u, null, {
                          default: l(
                            () => t[8] || (t[8] = [o('code', null, '0', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    e(i, null, {
                      default: l(() => [
                        e(u, null, {
                          default: l(
                            () => t[9] || (t[9] = [n('offset-bottom')])
                          ),
                          _: 1,
                        }),
                        e(u, null, {
                          default: l(
                            () =>
                              t[10] ||
                              (t[10] = [
                                n(
                                  'Triggered when the specified offset is reached from the bottom of the window'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        e(u, null, {
                          default: l(
                            () =>
                              t[11] || (t[11] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        e(u, null, {
                          default: l(
                            () => t[12] || (t[12] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    e(i, null, {
                      default: l(() => [
                        e(u, null, {
                          default: l(() => t[13] || (t[13] = [n('target')])),
                          _: 1,
                        }),
                        e(u, null, {
                          default: l(
                            () =>
                              t[14] ||
                              (t[14] = [
                                n('Scroll container, default is '),
                                o('code', null, 'window', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        e(u, null, {
                          default: l(
                            () =>
                              t[15] ||
                              (t[15] = [
                                o(
                                  'code',
                                  null,
                                  'string | HTMLElement | Window',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        e(u, null, {
                          default: l(
                            () => t[16] || (t[16] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    e(i, null, {
                      default: l(() => [
                        e(u, null, {
                          default: l(
                            () => t[17] || (t[17] = [n('target-container')])
                          ),
                          _: 1,
                        }),
                        e(u, null, {
                          default: l(
                            () =>
                              t[18] ||
                              (t[18] = [
                                n('The outer scroll element of '),
                                o('code', null, 'target', -1),
                                n(', the default is '),
                                o('code', null, 'window', -1),
                                n('. '),
                                o('code', null, 'Affix', -1),
                                n(
                                  ' will monitor the scroll event of the element and update the position of the anchor in real time. The main purpose is to solve the problem that if the outer element scrolls when the target attribute is specified as a non-window element, it may cause the nail to escape from the container.'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        e(u, null, {
                          default: l(
                            () =>
                              t[19] ||
                              (t[19] = [
                                o(
                                  'code',
                                  null,
                                  'string | HTMLElement | Window',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        e(u, null, {
                          default: l(
                            () => t[20] || (t[20] = [o('code', null, '-', -1)])
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
          t[40] ||
            (t[40] = o(
              'h3',
              { id: 'affix Events' },
              [o('code', null, '<affix>'), n(' Events')],
              -1
            )),
          e(
            p,
            { class: 'component-api-table' },
            {
              default: l(() => [
                t[28] ||
                  (t[28] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                e(f, null, {
                  default: l(() => [
                    e(i, null, {
                      default: l(() => [
                        e(a, null, {
                          default: l(
                            () => t[22] || (t[22] = [n('Event Name')])
                          ),
                          _: 1,
                        }),
                        e(a, null, {
                          default: l(
                            () => t[23] || (t[23] = [n('Description')])
                          ),
                          _: 1,
                        }),
                        e(a, null, {
                          default: l(
                            () => t[24] || (t[24] = [n('Parameters')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                e(r, null, {
                  default: l(() => [
                    e(i, null, {
                      default: l(() => [
                        e(u, null, {
                          default: l(() => t[25] || (t[25] = [n('change')])),
                          _: 1,
                        }),
                        e(u, null, {
                          default: l(
                            () =>
                              t[26] ||
                              (t[26] = [
                                n('Triggered when the fixed state changes'),
                              ])
                          ),
                          _: 1,
                        }),
                        e(u, null, {
                          default: l(
                            () =>
                              t[27] ||
                              (t[27] = [
                                n('fixed: '),
                                o('code', null, 'boolean', -1),
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
          t[41] ||
            (t[41] = o(
              'h3',
              { id: 'affix Methods' },
              [o('code', null, '<affix>'), n(' Methods')],
              -1
            )),
          e(
            p,
            { class: 'component-api-table' },
            {
              default: l(() => [
                t[37] ||
                  (t[37] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                e(f, null, {
                  default: l(() => [
                    e(i, null, {
                      default: l(() => [
                        e(a, null, {
                          default: l(() => t[29] || (t[29] = [n('Method')])),
                          _: 1,
                        }),
                        e(a, null, {
                          default: l(
                            () => t[30] || (t[30] = [n('Description')])
                          ),
                          _: 1,
                        }),
                        e(a, null, {
                          default: l(
                            () => t[31] || (t[31] = [n('Parameters')])
                          ),
                          _: 1,
                        }),
                        e(a, null, {
                          default: l(() => t[32] || (t[32] = [n('Return')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                e(r, null, {
                  default: l(() => [
                    e(i, null, {
                      default: l(() => [
                        e(u, null, {
                          default: l(
                            () => t[33] || (t[33] = [n('updatePosition')])
                          ),
                          _: 1,
                        }),
                        e(u, null, {
                          default: l(
                            () => t[34] || (t[34] = [n('Update position')])
                          ),
                          _: 1,
                        }),
                        e(u, null, {
                          default: l(() => t[35] || (t[35] = [n('-')])),
                          _: 1,
                        }),
                        e(u, null, {
                          default: l(() => t[36] || (t[36] = [n('-')])),
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
const O = A(V, [['render', W]]);
export { O as default };
