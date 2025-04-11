import {
  _ as S,
  d as A,
  u as F,
  r,
  o as E,
  c as I,
  w as u,
  e as o,
  a as t,
  b as n,
  m as j,
} from './index.9c61ea88.js';
import {
  D as q,
  a as B,
  b as N,
  c as U,
  d as M,
  e as $,
} from './image-url.c376073b.js';
import './index.add6d80b.js';
import './index.71fb9fd7.js';

const v = [
  {
    version: '2.54.3',
    date: '2024-01-19',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>fix partial avatars not displaying in the avatar group popover (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2925">#2925</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.52.0',
    date: '2023-09-22',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>Added new <code>ObjectFit</code> prop (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2691">#2691</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.40.0',
    date: '2022-12-09',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>Add image-url attribute to support the use of image URLs (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1810">#1810</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.21.0',
    date: '2022-03-25',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fixed an issue where a warning message would appear when there was no content (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/870">#870</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.18.0',
    date: '2022-03-04',
    list: [
      {
        type: 'enhancement',
        typeText: '\u{1F48E} Enhancement',
        list: [
          `<p>Use Context to optimize components (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/773">#773</a>)</p>
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
          `<p>supports <code>maxStyle</code> and <code>maxPopoverTriggerProps</code> properties. (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/242">#242</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const O = A({
  name: 'ArcoMain',
  components: {
    DemoBasic: q,
    DemoSize: B,
    DemoGroup: N,
    DemoIcon: U,
    DemoFit: M,
    DemoImageUrl: $,
  },
  setup() {
    const { locale: s } = F();
    return {
      locale: s,
      data: {
        meta: { type: 'Component', category: 'Data Display' },
        title: 'Avatar',
        description:
          'Used as an avatar, it can be displayed in the form of pictures, icons or characters.',
      },
      changelog: typeof v === 'undefined' ? void 0 : v,
      getMessage: (m, g) => (s.value === 'zh-CN' ? m : g),
    };
  },
});
function V(s, l, b, x, m, g) {
  const y = r('demo-basic');
  const T = r('demo-size');
  const w = r('demo-group');
  const z = r('demo-icon');
  const k = r('demo-fit');
  const D = r('demo-image-url');
  const P = r('anchor-head');
  const a = r('a-th');
  const d = r('a-tr');
  const i = r('a-thead');
  const e = r('a-td');
  const f = r('a-tbody');
  const p = r('a-table');
  const C = r('arco-article');
  return (
    E(),
    I(
      C,
      j(s.data, { changelog: s.changelog }),
      {
        default: u(() => [
          l[93] ||
            (l[93] = o(
              'p',
              null,
              [o('em', null, 'Auto translate by google.')],
              -1
            )),
          t(y),
          t(T),
          t(w),
          t(z),
          t(k),
          t(D),
          t(
            P,
            { level: '2', href: 'API' },
            { default: u(() => l[0] || (l[0] = [n('API')])), _: 1 }
          ),
          l[94] ||
            (l[94] = o(
              'h3',
              { id: 'avatar Props' },
              [o('code', null, '<avatar>'), n(' Props')],
              -1
            )),
          t(
            p,
            { class: 'component-api-table' },
            {
              default: u(() => [
                l[36] ||
                  (l[36] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(i, null, {
                  default: u(() => [
                    t(d, null, {
                      default: u(() => [
                        t(a, null, {
                          default: u(() => l[1] || (l[1] = [n('Attribute')])),
                          _: 1,
                        }),
                        t(a, null, {
                          default: u(() => l[2] || (l[2] = [n('Description')])),
                          _: 1,
                        }),
                        t(a, null, {
                          default: u(() => l[3] || (l[3] = [n('Type')])),
                          _: 1,
                        }),
                        t(a, null, {
                          default: u(() => l[4] || (l[4] = [n('Default')])),
                          _: 1,
                        }),
                        t(a, null, {
                          default: u(() => l[5] || (l[5] = [n('version')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(f, null, {
                  default: u(() => [
                    t(d, null, {
                      default: u(() => [
                        t(e, null, {
                          default: u(() => l[6] || (l[6] = [n('shape')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(
                            () =>
                              l[7] ||
                              (l[7] = [
                                n(
                                  'The shape of the avatar, there are two kinds of circle (circle) and square (square)'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(
                            () =>
                              l[8] ||
                              (l[8] = [
                                o('code', null, "'circle' | 'square'", -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(
                            () =>
                              l[9] || (l[9] = [o('code', null, "'circle'", -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: u(() => [
                        t(e, null, {
                          default: u(() => l[10] || (l[10] = [n('image-url')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(
                            () =>
                              l[11] ||
                              (l[11] = [
                                n(
                                  'Custom avatar image address. If this attribute is passed in, the img tag will be rendered by default'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(
                            () =>
                              l[12] || (l[12] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(
                            () => l[13] || (l[13] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(() => l[14] || (l[14] = [n('2.40.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: u(() => [
                        t(e, null, {
                          default: u(() => l[15] || (l[15] = [n('size')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(
                            () =>
                              l[16] ||
                              (l[16] = [
                                n('The size of the avatar, the unit is '),
                                o('code', null, 'px', -1),
                                n('. Use size '),
                                o('code', null, '40px', -1),
                                n(' in styles when not filled'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(
                            () =>
                              l[17] || (l[17] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(
                            () => l[18] || (l[18] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: u(() => [
                        t(e, null, {
                          default: u(
                            () => l[19] || (l[19] = [n('auto-fix-font-size')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(
                            () =>
                              l[20] ||
                              (l[20] = [
                                n(
                                  'Whether to automatically adjust the font size according to the size of the avatar.'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(
                            () =>
                              l[21] ||
                              (l[21] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(
                            () =>
                              l[22] || (l[22] = [o('code', null, 'true', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: u(() => [
                        t(e, null, {
                          default: u(
                            () => l[23] || (l[23] = [n('trigger-type')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(
                            () =>
                              l[24] ||
                              (l[24] = [n('Clickable avatar interaction type')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(
                            () =>
                              l[25] ||
                              (l[25] = [
                                o('code', null, "'mask' | 'button'", -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(
                            () =>
                              l[26] ||
                              (l[26] = [o('code', null, "'button'", -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: u(() => [
                        t(e, null, {
                          default: u(
                            () => l[27] || (l[27] = [n('trigger-icon-style')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(
                            () =>
                              l[28] || (l[28] = [n('Interactive icon style')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(
                            () =>
                              l[29] ||
                              (l[29] = [o('code', null, 'CSSProperties', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(
                            () => l[30] || (l[30] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: u(() => [
                        t(e, null, {
                          default: u(
                            () => l[31] || (l[31] = [n('object-fit')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(
                            () =>
                              l[32] ||
                              (l[32] = [
                                n(
                                  'Object-fit type of the image in the container'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(
                            () =>
                              l[33] ||
                              (l[33] = [o('code', null, 'ObjectFit', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(
                            () => l[34] || (l[34] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(() => l[35] || (l[35] = [n('2.52.0')])),
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
          l[95] ||
            (l[95] = o(
              'h3',
              { id: 'avatar Events' },
              [o('code', null, '<avatar>'), n(' Events')],
              -1
            )),
          t(
            p,
            { class: 'component-api-table' },
            {
              default: u(() => [
                l[49] ||
                  (l[49] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(i, null, {
                  default: u(() => [
                    t(d, null, {
                      default: u(() => [
                        t(a, null, {
                          default: u(
                            () => l[37] || (l[37] = [n('Event Name')])
                          ),
                          _: 1,
                        }),
                        t(a, null, {
                          default: u(
                            () => l[38] || (l[38] = [n('Description')])
                          ),
                          _: 1,
                        }),
                        t(a, null, {
                          default: u(
                            () => l[39] || (l[39] = [n('Parameters')])
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
                  default: u(() => [
                    t(d, null, {
                      default: u(() => [
                        t(e, null, {
                          default: u(() => l[40] || (l[40] = [n('click')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(
                            () =>
                              l[41] || (l[41] = [n('Callback when clicked')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(
                            () =>
                              l[42] ||
                              (l[42] = [
                                n('ev: '),
                                o('code', null, 'MouseEvent', -1),
                              ])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: u(() => [
                        t(e, null, {
                          default: u(() => l[43] || (l[43] = [n('error')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(
                            () => l[44] || (l[44] = [n('image load error')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(() => l[45] || (l[45] = [n('-')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: u(() => [
                        t(e, null, {
                          default: u(() => l[46] || (l[46] = [n('load')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(
                            () => l[47] || (l[47] = [n('image load success')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(() => l[48] || (l[48] = [n('-')])),
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
          l[96] ||
            (l[96] = o(
              'h3',
              { id: 'avatar Slots' },
              [o('code', null, '<avatar>'), n(' Slots')],
              -1
            )),
          t(
            p,
            { class: 'component-api-table' },
            {
              default: u(() => [
                l[56] ||
                  (l[56] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(i, null, {
                  default: u(() => [
                    t(d, null, {
                      default: u(() => [
                        t(a, null, {
                          default: u(() => l[50] || (l[50] = [n('Slot Name')])),
                          _: 1,
                        }),
                        t(a, null, {
                          default: u(
                            () => l[51] || (l[51] = [n('Description')])
                          ),
                          _: 1,
                        }),
                        t(a, null, {
                          default: u(
                            () => l[52] || (l[52] = [n('Parameters')])
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
                  default: u(() => [
                    t(d, null, {
                      default: u(() => [
                        t(e, null, {
                          default: u(
                            () => l[53] || (l[53] = [n('trigger-icon')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(
                            () =>
                              l[54] ||
                              (l[54] = [n('Clickable avatar interaction icon')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(() => l[55] || (l[55] = [n('-')])),
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
          l[97] ||
            (l[97] = o(
              'h3',
              { id: 'avatar-group Props' },
              [o('code', null, '<avatar-group>'), n(' Props')],
              -1
            )),
          t(
            p,
            { class: 'component-api-table' },
            {
              default: u(() => [
                l[92] ||
                  (l[92] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(i, null, {
                  default: u(() => [
                    t(d, null, {
                      default: u(() => [
                        t(a, null, {
                          default: u(() => l[57] || (l[57] = [n('Attribute')])),
                          _: 1,
                        }),
                        t(a, null, {
                          default: u(
                            () => l[58] || (l[58] = [n('Description')])
                          ),
                          _: 1,
                        }),
                        t(a, null, {
                          default: u(() => l[59] || (l[59] = [n('Type')])),
                          _: 1,
                        }),
                        t(a, null, {
                          default: u(() => l[60] || (l[60] = [n('Default')])),
                          _: 1,
                        }),
                        t(a, null, {
                          default: u(() => l[61] || (l[61] = [n('version')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(f, null, {
                  default: u(() => [
                    t(d, null, {
                      default: u(() => [
                        t(e, null, {
                          default: u(() => l[62] || (l[62] = [n('shape')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(
                            () =>
                              l[63] ||
                              (l[63] = [
                                n(
                                  'The shape of the avatar in the group, there are two kinds of circle (circle) and square (square)'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(
                            () =>
                              l[64] ||
                              (l[64] = [
                                o('code', null, "'circle' | 'square'", -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(
                            () =>
                              l[65] ||
                              (l[65] = [o('code', null, "'circle'", -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: u(() => [
                        t(e, null, {
                          default: u(() => l[66] || (l[66] = [n('size')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(
                            () =>
                              l[67] ||
                              (l[67] = [
                                n(
                                  'The size of the avatar in the group, the unit is '
                                ),
                                o('code', null, 'px', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(
                            () =>
                              l[68] || (l[68] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(
                            () => l[69] || (l[69] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: u(() => [
                        t(e, null, {
                          default: u(
                            () => l[70] || (l[70] = [n('auto-fix-font-size')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(
                            () =>
                              l[71] ||
                              (l[71] = [
                                n(
                                  'Whether to automatically adjust the font size according to the size of the avatar.'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(
                            () =>
                              l[72] ||
                              (l[72] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(
                            () =>
                              l[73] || (l[73] = [o('code', null, 'true', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: u(() => [
                        t(e, null, {
                          default: u(() => l[74] || (l[74] = [n('max-count')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(
                            () =>
                              l[75] ||
                              (l[75] = [
                                n(
                                  'The maximum number of avatars displayed in the avatar group. The excess avatars will be displayed in the form of '
                                ),
                                o('code', null, '+x', -1),
                                n('.'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(
                            () =>
                              l[76] || (l[76] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(
                            () => l[77] || (l[77] = [o('code', null, '0', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: u(() => [
                        t(e, null, {
                          default: u(
                            () => l[78] || (l[78] = [n('z-index-ascend')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(
                            () =>
                              l[79] ||
                              (l[79] = [
                                n('The avatar '),
                                o('code', null, 'z-index', -1),
                                n(
                                  ' in the avatar group increases, and the default is decreasing.'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(
                            () =>
                              l[80] ||
                              (l[80] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(
                            () =>
                              l[81] || (l[81] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: u(() => [
                        t(e, null, {
                          default: u(() => l[82] || (l[82] = [n('max-style')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(
                            () => l[83] || (l[83] = [n('Style for +x.')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(
                            () =>
                              l[84] ||
                              (l[84] = [o('code', null, 'CSSProperties', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(
                            () => l[85] || (l[85] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(() => l[86] || (l[86] = [n('2.7.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: u(() => [
                        t(e, null, {
                          default: u(
                            () =>
                              l[87] ||
                              (l[87] = [n('max-popover-trigger-props')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(
                            () =>
                              l[88] ||
                              (l[88] = [
                                n('TriggerProps for popover around +x.'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(
                            () =>
                              l[89] ||
                              (l[89] = [o('code', null, 'TriggerProps', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(
                            () => l[90] || (l[90] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: u(() => l[91] || (l[91] = [n('2.7.0')])),
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
const H = S(O, [['render', V]]);
export { H as default };
