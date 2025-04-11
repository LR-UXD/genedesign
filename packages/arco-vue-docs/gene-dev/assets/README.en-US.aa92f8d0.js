import {
  _ as T,
  d as z,
  u as A,
  r as f,
  o as N,
  c as B,
  w as u,
  e,
  a as t,
  b as n,
  m as E,
} from './index.9c61ea88.js';
import { D as R, a as I, b as M, c as $, d as V } from './resize.222434e2.js';
import './index.2b17769d.js';
import './index.5bc6c633.js';

const b = [
  {
    version: '2.36.0',
    date: '2022-09-02',
    list: [
      {
        type: 'typescript',
        typeText: '\u{1F18E} TypeScript',
        list: [
          `<p>Add ts type export (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1571">#1571</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const W = z({
  name: 'ArcoMain',
  components: {
    DemoBasic: R,
    DemoCustomIcon: I,
    DemoCollapsed: M,
    DemoBreakpoint: $,
    DemoResize: V,
  },
  setup() {
    const { locale: p } = A();
    return {
      locale: p,
      data: {
        meta: { type: 'Component', category: 'Layout' },
        title: 'Layout',
        description:
          'The basic layout framework of the page is often used nested with components to construct the overall layout of the page.',
      },
      changelog: typeof b === 'undefined' ? void 0 : b,
      getMessage: (m, g) => (p.value === 'zh-CN' ? m : g),
    };
  },
});
function F(p, l, y, v, m, g) {
  const w = f('demo-basic');
  const x = f('demo-custom-icon');
  const k = f('demo-collapsed');
  const D = f('demo-breakpoint');
  const S = f('demo-resize');
  const C = f('anchor-head');
  const s = f('a-th');
  const d = f('a-tr');
  const r = f('a-thead');
  const o = f('a-td');
  const i = f('a-tbody');
  const a = f('a-table');
  const P = f('arco-article');
  return (
    N(),
    B(
      P,
      E(p.data, { changelog: p.changelog }),
      {
        default: u(() => [
          l[93] ||
            (l[93] = e(
              'p',
              null,
              [e('em', null, 'Auto translate by google.')],
              -1
            )),
          t(w),
          t(x),
          t(k),
          t(D),
          t(S),
          t(
            C,
            { level: '2', href: 'API' },
            { default: u(() => l[0] || (l[0] = [n('API')])), _: 1 }
          ),
          l[94] ||
            (l[94] = e(
              'h3',
              { id: 'layout Props' },
              [e('code', null, '<layout>'), n(' Props')],
              -1
            )),
          t(
            a,
            { class: 'component-api-table' },
            {
              default: u(() => [
                l[9] ||
                  (l[9] = e(
                    'colgroup',
                    null,
                    [e('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(r, null, {
                  default: u(() => [
                    t(d, null, {
                      default: u(() => [
                        t(s, null, {
                          default: u(() => l[1] || (l[1] = [n('Attribute')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: u(() => l[2] || (l[2] = [n('Description')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: u(() => l[3] || (l[3] = [n('Type')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: u(() => l[4] || (l[4] = [n('Default')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(i, null, {
                  default: u(() => [
                    t(d, null, {
                      default: u(() => [
                        t(o, null, {
                          default: u(() => l[5] || (l[5] = [n('has-sider')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[6] ||
                              (l[6] = [
                                n(
                                  'Indicates that there is a Sider in the sub-element, which generally does not need to be specified. Used to avoid style flicker when rendering on the server side.'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[7] || (l[7] = [e('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[8] || (l[8] = [e('code', null, 'false', -1)])
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
          l[95] ||
            (l[95] = e(
              'h3',
              { id: 'layout-header Slots' },
              [e('code', null, '<layout-header>'), n(' Slots')],
              -1
            )),
          t(
            a,
            { class: 'component-api-table' },
            {
              default: u(() => [
                l[16] ||
                  (l[16] = e(
                    'colgroup',
                    null,
                    [e('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(r, null, {
                  default: u(() => [
                    t(d, null, {
                      default: u(() => [
                        t(s, null, {
                          default: u(() => l[10] || (l[10] = [n('Slot Name')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: u(
                            () => l[11] || (l[11] = [n('Description')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: u(
                            () => l[12] || (l[12] = [n('Parameters')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(i, null, {
                  default: u(() => [
                    t(d, null, {
                      default: u(() => [
                        t(o, null, {
                          default: u(() => l[13] || (l[13] = [n('default')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(() => l[14] || (l[14] = [n('Content')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(() => l[15] || (l[15] = [n('-')])),
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
            (l[96] = e(
              'h3',
              { id: 'layout-content Slots' },
              [e('code', null, '<layout-content>'), n(' Slots')],
              -1
            )),
          t(
            a,
            { class: 'component-api-table' },
            {
              default: u(() => [
                l[23] ||
                  (l[23] = e(
                    'colgroup',
                    null,
                    [e('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(r, null, {
                  default: u(() => [
                    t(d, null, {
                      default: u(() => [
                        t(s, null, {
                          default: u(() => l[17] || (l[17] = [n('Slot Name')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: u(
                            () => l[18] || (l[18] = [n('Description')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: u(
                            () => l[19] || (l[19] = [n('Parameters')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(i, null, {
                  default: u(() => [
                    t(d, null, {
                      default: u(() => [
                        t(o, null, {
                          default: u(() => l[20] || (l[20] = [n('default')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(() => l[21] || (l[21] = [n('Content')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(() => l[22] || (l[22] = [n('-')])),
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
            (l[97] = e(
              'h3',
              { id: 'layout-footer Slots' },
              [e('code', null, '<layout-footer>'), n(' Slots')],
              -1
            )),
          t(
            a,
            { class: 'component-api-table' },
            {
              default: u(() => [
                l[30] ||
                  (l[30] = e(
                    'colgroup',
                    null,
                    [e('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(r, null, {
                  default: u(() => [
                    t(d, null, {
                      default: u(() => [
                        t(s, null, {
                          default: u(() => l[24] || (l[24] = [n('Slot Name')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: u(
                            () => l[25] || (l[25] = [n('Description')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: u(
                            () => l[26] || (l[26] = [n('Parameters')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(i, null, {
                  default: u(() => [
                    t(d, null, {
                      default: u(() => [
                        t(o, null, {
                          default: u(() => l[27] || (l[27] = [n('default')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(() => l[28] || (l[28] = [n('Content')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(() => l[29] || (l[29] = [n('-')])),
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
          l[98] ||
            (l[98] = e(
              'h3',
              { id: 'layout-sider Props' },
              [e('code', null, '<layout-sider>'), n(' Props')],
              -1
            )),
          t(
            a,
            { class: 'component-api-table' },
            {
              default: u(() => [
                l[75] ||
                  (l[75] = e(
                    'colgroup',
                    null,
                    [e('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(r, null, {
                  default: u(() => [
                    t(d, null, {
                      default: u(() => [
                        t(s, null, {
                          default: u(() => l[31] || (l[31] = [n('Attribute')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: u(
                            () => l[32] || (l[32] = [n('Description')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: u(() => l[33] || (l[33] = [n('Type')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: u(() => l[34] || (l[34] = [n('Default')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(i, null, {
                  default: u(() => [
                    t(d, null, {
                      default: u(() => [
                        t(o, null, {
                          default: u(() => l[35] || (l[35] = [n('theme')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(() => l[36] || (l[36] = [n('Theme')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[37] ||
                              (l[37] = [
                                e('code', null, "'dark' | 'light'", -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[38] ||
                              (l[38] = [e('code', null, "'light'", -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: u(() => [
                        t(o, null, {
                          default: u(() => l[39] || (l[39] = [n('collapsed')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[40] || (l[40] = [n('Current collapsed state')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[41] ||
                              (l[41] = [e('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () => l[42] || (l[42] = [e('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: u(() => [
                        t(o, null, {
                          default: u(
                            () => l[43] || (l[43] = [n('default-collapsed')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[44] ||
                              (l[44] = [n('The default collapsed state')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[45] ||
                              (l[45] = [e('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[46] || (l[46] = [e('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: u(() => [
                        t(o, null, {
                          default: u(
                            () => l[47] || (l[47] = [n('collapsible')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[48] || (l[48] = [n('Whether is collapsible')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[49] ||
                              (l[49] = [e('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[50] || (l[50] = [e('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: u(() => [
                        t(o, null, {
                          default: u(() => l[51] || (l[51] = [n('width')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(() => l[52] || (l[52] = [n('Width')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[53] || (l[53] = [e('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[54] || (l[54] = [e('code', null, '200', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: u(() => [
                        t(o, null, {
                          default: u(
                            () => l[55] || (l[55] = [n('collapsed-width')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () => l[56] || (l[56] = [n('Collapsed width')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[57] || (l[57] = [e('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () => l[58] || (l[58] = [e('code', null, '48', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: u(() => [
                        t(o, null, {
                          default: u(
                            () => l[59] || (l[59] = [n('reverse-arrow')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[60] ||
                              (l[60] = [
                                n(
                                  'Flip and fold the direction of the hint arrow, which can be used when Sider is on the right'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[61] ||
                              (l[61] = [e('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[62] || (l[62] = [e('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: u(() => [
                        t(o, null, {
                          default: u(
                            () => l[63] || (l[63] = [n('breakpoint')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[64] ||
                              (l[64] = [
                                n(
                                  'Trigger breakpoints for responsive layout, see '
                                ),
                                e(
                                  'a',
                                  {
                                    class: 'link',
                                    href: '/vue/component/grid',
                                  },
                                  'Responsive Grid',
                                  -1
                                ),
                                n(' for details'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[65] ||
                              (l[65] = [
                                e(
                                  'code',
                                  null,
                                  "'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () => l[66] || (l[66] = [e('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: u(() => [
                        t(o, null, {
                          default: u(
                            () => l[67] || (l[67] = [n('resize-directions')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[68] ||
                              (l[68] = [
                                n('Can replace the native '),
                                e('code', null, 'aside', -1),
                                n(' tag with ResizeBox. This is the '),
                                e('code', null, 'directions', -1),
                                n(
                                  ' parameter of ResizeBox. For details, please see '
                                ),
                                e(
                                  'a',
                                  {
                                    class: 'link',
                                    href: '/vue/component/resize-box',
                                  },
                                  'ResizeBox',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[69] ||
                              (l[69] = [
                                e(
                                  'code',
                                  null,
                                  "Array<'left' | 'right' | 'top' | 'bottom'>",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () => l[70] || (l[70] = [e('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: u(() => [
                        t(o, null, {
                          default: u(
                            () => l[71] || (l[71] = [n('hide-trigger')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[72] ||
                              (l[72] = [
                                n('Whether to hide the bottom fold trigger'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[73] ||
                              (l[73] = [e('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[74] || (l[74] = [e('code', null, 'false', -1)])
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
          l[99] ||
            (l[99] = e(
              'h3',
              { id: 'layout-sider Events' },
              [e('code', null, '<layout-sider>'), n(' Events')],
              -1
            )),
          t(
            a,
            { class: 'component-api-table' },
            {
              default: u(() => [
                l[85] ||
                  (l[85] = e(
                    'colgroup',
                    null,
                    [e('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(r, null, {
                  default: u(() => [
                    t(d, null, {
                      default: u(() => [
                        t(s, null, {
                          default: u(
                            () => l[76] || (l[76] = [n('Event Name')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: u(
                            () => l[77] || (l[77] = [n('Description')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: u(
                            () => l[78] || (l[78] = [n('Parameters')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(i, null, {
                  default: u(() => [
                    t(d, null, {
                      default: u(() => [
                        t(o, null, {
                          default: u(() => l[79] || (l[79] = [n('collapse')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[80] ||
                              (l[80] = [
                                n(
                                  'Events on expand/collapse. There are two ways to trigger click trigger and responsive feedback'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[81] ||
                              (l[81] = [
                                n('collapsed: '),
                                e('code', null, 'boolean', -1),
                                e('br', null, null, -1),
                                n('type: '),
                                e(
                                  'code',
                                  null,
                                  "'clickTrigger'|'responsive'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: u(() => [
                        t(o, null, {
                          default: u(
                            () => l[82] || (l[82] = [n('breakpoint')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[83] ||
                              (l[83] = [
                                n(
                                  'Events when a responsive layout breakpoint is triggered'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[84] ||
                              (l[84] = [
                                n('collapsed: '),
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
          l[100] ||
            (l[100] = e(
              'h3',
              { id: 'layout-sider Slots' },
              [e('code', null, '<layout-sider>'), n(' Slots')],
              -1
            )),
          t(
            a,
            { class: 'component-api-table' },
            {
              default: u(() => [
                l[92] ||
                  (l[92] = e(
                    'colgroup',
                    null,
                    [e('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(r, null, {
                  default: u(() => [
                    t(d, null, {
                      default: u(() => [
                        t(s, null, {
                          default: u(() => l[86] || (l[86] = [n('Slot Name')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: u(
                            () => l[87] || (l[87] = [n('Description')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: u(
                            () => l[88] || (l[88] = [n('Parameters')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(i, null, {
                  default: u(() => [
                    t(d, null, {
                      default: u(() => [
                        t(o, null, {
                          default: u(() => l[89] || (l[89] = [n('trigger')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[90] ||
                              (l[90] = [n('Custom bottom folding trigger')])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: u(
                            () =>
                              l[91] ||
                              (l[91] = [
                                n('collapsed: '),
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
const q = T(W, [['render', F]]);
export { q as default };
