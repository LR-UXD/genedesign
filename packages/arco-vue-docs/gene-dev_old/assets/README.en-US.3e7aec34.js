import {
  _ as M,
  d as P,
  u as F,
  r as s,
  o as I,
  c as L,
  w as n,
  e as o,
  a as t,
  b as u,
  m as N,
} from './index.9c61ea88.js';
import {
  D as W,
  a as H,
  b as U,
  c as $,
  d as V,
  e as j,
  f as G,
  g as O,
  h as R,
} from './group.dd2f7447.js';
import './index.9d7f3274.js';
import './index.506fa2f1.js';

const b = [
  {
    version: '2.56.3',
    date: '2024-10-25',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>Support autofocus attribute for button (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/3293">#3293</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.54.0',
    date: '2023-12-15',
    list: [
      {
        type: 'typescript',
        typeText: '\u{1F18E} TypeScript',
        list: [
          `<p>TS\u7C7B\u578B\u4F18\u5316 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2825">#2825</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
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
    version: '2.35.1',
    date: '2022-08-19',
    list: [
      {
        type: 'enhancement',
        typeText: '\u{1F48E} Enhancement',
        list: [
          `<p>Default event is not triggered on click when state is loading or disabled (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1516">#1516</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.29.1',
    date: '2022-06-02',
    list: [
      {
        type: 'enhancement',
        typeText: '\u{1F48E} Enhancement',
        list: [
          `<p>Add focus style (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1229">#1229</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.24.1',
    date: '2022-04-16',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix <code>config-provide</code> injection invalid problem (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/986">#986</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.24.0',
    date: '2022-04-15',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p><code>button-group</code> supports setting props for subcomponent <code>button</code> (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/967">#967</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.16.0',
    date: '2022-01-21',
    list: [
      {
        type: 'style',
        typeText: '\u{1F485} Style',
        list: [
          `<p>Fix link mode text not centered (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/636">#636</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.15.0',
    date: '2022-01-14',
    list: [
      {
        type: 'style',
        typeText: '\u{1F485} Style',
        list: [
          `<p>Fix alignment of iconOnly buttons in button groups (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/567">#567</a>)</p>
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
        type: 'style',
        typeText: '\u{1F485} Style',
        list: [
          `<p>Fix onlyIcon mode icons not aligned (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/538">#538</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const q = P({
  name: 'ArcoMain',
  components: {
    DemoBasic: W,
    DemoIcon: H,
    DemoShape: U,
    DemoSize: $,
    DemoStatus: V,
    DemoDisabled: j,
    DemoLoading: G,
    DemoLong: O,
    DemoGroup: R,
  },
  setup() {
    const { locale: a } = F();
    return {
      locale: a,
      data: {
        meta: { type: 'Component', category: 'Common' },
        title: 'Button',
        description:
          'Button is a command component that can initiate an instant operation.',
      },
      changelog: typeof b === 'undefined' ? void 0 : b,
      getMessage: (m, g) => (a.value === 'zh-CN' ? m : g),
    };
  },
});
function J(a, l, y, v, m, g) {
  const x = s('demo-basic');
  const k = s('demo-icon');
  const T = s('demo-shape');
  const S = s('demo-size');
  const D = s('demo-status');
  const B = s('demo-disabled');
  const w = s('demo-loading');
  const E = s('demo-long');
  const z = s('demo-group');
  const A = s('anchor-head');
  const i = s('a-th');
  const d = s('a-tr');
  const r = s('a-thead');
  const e = s('a-td');
  const p = s('a-tbody');
  const f = s('a-table');
  const C = s('arco-article');
  return (
    I(),
    L(
      C,
      N(a.data, { changelog: a.changelog }),
      {
        default: n(() => [
          l[85] ||
            (l[85] = o(
              'p',
              null,
              [o('em', null, 'Auto translate by google.')],
              -1
            )),
          t(x),
          t(k),
          t(T),
          t(S),
          t(D),
          t(B),
          t(w),
          t(E),
          t(z),
          t(
            A,
            { level: '2', href: 'API' },
            { default: n(() => l[0] || (l[0] = [u('API')])), _: 1 }
          ),
          l[86] ||
            (l[86] = o(
              'h3',
              { id: 'button Props' },
              [o('code', null, '<button>'), u(' Props')],
              -1
            )),
          t(
            f,
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
                t(r, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(i, null, {
                          default: n(() => l[1] || (l[1] = [u('Attribute')])),
                          _: 1,
                        }),
                        t(i, null, {
                          default: n(() => l[2] || (l[2] = [u('Description')])),
                          _: 1,
                        }),
                        t(i, null, {
                          default: n(() => l[3] || (l[3] = [u('Type')])),
                          _: 1,
                        }),
                        t(i, null, {
                          default: n(() => l[4] || (l[4] = [u('Default')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(p, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[5] || (l[5] = [u('type')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[6] ||
                              (l[6] = [
                                u(
                                  'Button types are divided into five types: secondary, primary, dashed, outline and text.'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[7] ||
                              (l[7] = [o('code', null, 'ButtonTypes', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[8] ||
                              (l[8] = [o('code', null, "'secondary'", -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[9] || (l[9] = [u('shape')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[10] || (l[10] = [u('Button shape')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[11] ||
                              (l[11] = [o('code', null, 'BorderShape', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
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
                        t(e, null, {
                          default: n(() => l[13] || (l[13] = [u('status')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[14] || (l[14] = [u('Button state')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[15] ||
                              (l[15] = [
                                o(
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
                              l[16] ||
                              (l[16] = [o('code', null, "'normal'", -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[17] || (l[17] = [u('size')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[18] || (l[18] = [u('Button size')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[19] ||
                              (l[19] = [
                                o(
                                  'code',
                                  null,
                                  "'mini' | 'small' | 'medium' | 'large'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[20] ||
                              (l[20] = [o('code', null, "'medium'", -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[21] || (l[21] = [u('long')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[22] ||
                              (l[22] = [
                                u(
                                  'Whether the width of the button adapts to the container.'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[23] ||
                              (l[23] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[24] || (l[24] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[25] || (l[25] = [u('loading')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[26] ||
                              (l[26] = [
                                u('Whether the button is in the loading state'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[27] ||
                              (l[27] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[28] || (l[28] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[29] || (l[29] = [u('disabled')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[30] ||
                              (l[30] = [u('Whether the button is disabled')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[31] ||
                              (l[31] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[32] || (l[32] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[33] || (l[33] = [u('html-type')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[34] ||
                              (l[34] = [
                                u('Set the native '),
                                o('code', null, 'type', -1),
                                u(' attribute of '),
                                o('code', null, 'button', -1),
                                u(', optional values refer to '),
                                o(
                                  'a',
                                  {
                                    class: 'link',
                                    href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type',
                                    target: '_blank',
                                  },
                                  'HTML',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[35] || (l[35] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[36] ||
                              (l[36] = [o('code', null, "'button'", -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[37] || (l[37] = [u('autofocus')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[38] ||
                              (l[38] = [
                                u('Set the native '),
                                o('code', null, 'autofocus', -1),
                                u(' attribute of '),
                                o('code', null, 'button', -1),
                                u(', optional values refer to '),
                                o(
                                  'a',
                                  {
                                    class: 'link',
                                    href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type',
                                    target: '_blank',
                                  },
                                  'HTML',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[39] ||
                              (l[39] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[40] || (l[40] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[41] || (l[41] = [u('href')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[42] ||
                              (l[42] = [
                                u(
                                  'Set up a jump link. When this property is set, the button is rendered as '
                                ),
                                o('code', null, '<a>', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[43] || (l[43] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[44] || (l[44] = [o('code', null, '-', -1)])
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
          l[87] ||
            (l[87] = o(
              'h3',
              { id: 'button Events' },
              [o('code', null, '<button>'), u(' Events')],
              -1
            )),
          t(
            f,
            { class: 'component-api-table' },
            {
              default: n(() => [
                l[52] ||
                  (l[52] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(r, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(i, null, {
                          default: n(
                            () => l[46] || (l[46] = [u('Event Name')])
                          ),
                          _: 1,
                        }),
                        t(i, null, {
                          default: n(
                            () => l[47] || (l[47] = [u('Description')])
                          ),
                          _: 1,
                        }),
                        t(i, null, {
                          default: n(
                            () => l[48] || (l[48] = [u('Parameters')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(p, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[49] || (l[49] = [u('click')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[50] ||
                              (l[50] = [
                                u('Emitted when the button is clicked'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[51] ||
                              (l[51] = [
                                u('ev: '),
                                o('code', null, 'MouseEvent', -1),
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
          l[88] ||
            (l[88] = o(
              'h3',
              { id: 'button Slots' },
              [o('code', null, '<button>'), u(' Slots')],
              -1
            )),
          t(
            f,
            { class: 'component-api-table' },
            {
              default: n(() => [
                l[59] ||
                  (l[59] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(r, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(i, null, {
                          default: n(() => l[53] || (l[53] = [u('Slot Name')])),
                          _: 1,
                        }),
                        t(i, null, {
                          default: n(
                            () => l[54] || (l[54] = [u('Description')])
                          ),
                          _: 1,
                        }),
                        t(i, null, {
                          default: n(
                            () => l[55] || (l[55] = [u('Parameters')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(p, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[56] || (l[56] = [u('icon')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(() => l[57] || (l[57] = [u('Icon')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(() => l[58] || (l[58] = [u('-')])),
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
          l[89] ||
            (l[89] = o(
              'h3',
              { id: 'button-group Props' },
              [o('code', null, '<button-group>'), u(' Props')],
              -1
            )),
          t(
            f,
            { class: 'component-api-table' },
            {
              default: n(() => [
                l[84] ||
                  (l[84] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(r, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(i, null, {
                          default: n(() => l[60] || (l[60] = [u('Attribute')])),
                          _: 1,
                        }),
                        t(i, null, {
                          default: n(
                            () => l[61] || (l[61] = [u('Description')])
                          ),
                          _: 1,
                        }),
                        t(i, null, {
                          default: n(() => l[62] || (l[62] = [u('Type')])),
                          _: 1,
                        }),
                        t(i, null, {
                          default: n(() => l[63] || (l[63] = [u('Default')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(p, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[64] || (l[64] = [u('type')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[65] ||
                              (l[65] = [
                                u(
                                  'Children button types are divided into five types: secondary, primary, dashed, outline and text.'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[66] ||
                              (l[66] = [o('code', null, 'ButtonTypes', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[67] || (l[67] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[68] || (l[68] = [u('status')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[69] || (l[69] = [u('Children button state')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[70] ||
                              (l[70] = [
                                o(
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
                            () => l[71] || (l[71] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[72] || (l[72] = [u('shape')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[73] || (l[73] = [u('Button shape')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[74] ||
                              (l[74] = [o('code', null, 'BorderShape', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[75] || (l[75] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[76] || (l[76] = [u('size')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[77] || (l[77] = [u('Children button size')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[78] ||
                              (l[78] = [
                                o(
                                  'code',
                                  null,
                                  "'mini' | 'small' | 'medium' | 'large'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[79] || (l[79] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[80] || (l[80] = [u('disabled')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[81] ||
                              (l[81] = [
                                u(
                                  'All children whether the button is disabled'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[82] ||
                              (l[82] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[83] || (l[83] = [o('code', null, 'false', -1)])
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
const Z = M(q, [['render', J]]);
export { Z as default };
