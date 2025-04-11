import {
  _ as w,
  d as A,
  u as N,
  r as i,
  o as P,
  c as M,
  w as n,
  e as o,
  a as t,
  b as e,
  m as C,
} from './index.9c61ea88.js';
import { D as E, a as S } from './nested.265e9dd4.js';

const b = [
  {
    version: '2.16.0',
    date: '2022-01-21',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>Attributes <code>min</code> and <code>max</code> support setting pixel values (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/607">#607</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const B = A({
  name: 'ArcoMain',
  components: { DemoBasic: E, DemoNested: S },
  setup() {
    const { locale: r } = N();
    return {
      locale: r,
      data: {
        meta: { type: 'Component', category: 'Other' },
        title: 'Split',
        description: 'Divide the panel into two parts.',
      },
      changelog: typeof b === 'undefined' ? void 0 : b,
      getMessage: (m, g) => (r.value === 'zh-CN' ? m : g),
    };
  },
});
function $(r, l, x, v, m, g) {
  const y = i('demo-basic');
  const z = i('demo-nested');
  const D = i('anchor-head');
  const s = i('a-th');
  const d = i('a-tr');
  const f = i('a-thead');
  const u = i('a-td');
  const a = i('a-tbody');
  const p = i('a-table');
  const T = i('arco-article');
  return (
    P(),
    M(
      T,
      C(r.data, { changelog: r.changelog }),
      {
        default: n(() => [
          l[63] ||
            (l[63] = o(
              'p',
              null,
              [o('em', null, 'Auto translate by google.')],
              -1
            )),
          t(y),
          t(z),
          t(
            D,
            { level: '2', href: 'API' },
            { default: n(() => l[0] || (l[0] = [e('API')])), _: 1 }
          ),
          l[64] ||
            (l[64] = o(
              'h3',
              { id: 'split Props' },
              [o('code', null, '<split>'), e(' Props')],
              -1
            )),
          t(
            p,
            { class: 'component-api-table' },
            {
              default: n(() => [
                l[33] ||
                  (l[33] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(f, null, {
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
                t(a, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[5] || (l[5] = [e('component')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[6] ||
                              (l[6] = [e('The html tag of the split box')])
                          ),
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
                            () =>
                              l[8] || (l[8] = [o('code', null, "'div'", -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[9] || (l[9] = [e('direction')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[10] || (l[10] = [e('Direction of division')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[11] ||
                              (l[11] = [
                                o(
                                  'code',
                                  null,
                                  "'horizontal' | 'vertical'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[12] ||
                              (l[12] = [o('code', null, "'horizontal'", -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(
                            () =>
                              l[13] ||
                              (l[13] = [
                                e('size '),
                                o('strong', null, '(v-model)', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[14] ||
                              (l[14] = [
                                e(
                                  'The size of the segmentation, it can be 0~1 representing a percentage, or a specific number of pixels, such as 300px'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[15] ||
                              (l[15] = [o('code', null, 'number|string', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[16] || (l[16] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(
                            () => l[17] || (l[17] = [e('default-size')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[18] ||
                              (l[18] = [
                                e(
                                  'Default split size, it can be 0~1 representing a percentage, or a specific number of pixels, such as 300px'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[19] ||
                              (l[19] = [o('code', null, 'number|string', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[20] || (l[20] = [o('code', null, '0.5', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[21] || (l[21] = [e('min')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[22] ||
                              (l[22] = [
                                e(
                                  'Minimum threshold, it can be 0~1 representing a percentage, or a specific number of pixels, such as 300px'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[23] ||
                              (l[23] = [o('code', null, 'number|string', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[24] || (l[24] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[25] || (l[25] = [e('max')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[26] ||
                              (l[26] = [
                                e(
                                  'Maximum threshold, it can be 0~1 representing a percentage, or a specific number of pixels, such as 300px'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[27] ||
                              (l[27] = [o('code', null, 'number|string', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[28] || (l[28] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[29] || (l[29] = [e('disabled')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[30] || (l[30] = [e('Whether to disable')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[31] ||
                              (l[31] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[32] || (l[32] = [o('code', null, 'false', -1)])
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
          l[65] ||
            (l[65] = o(
              'h3',
              { id: 'split Events' },
              [o('code', null, '<split>'), e(' Events')],
              -1
            )),
          t(
            p,
            { class: 'component-api-table' },
            {
              default: n(() => [
                l[46] ||
                  (l[46] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(f, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(s, null, {
                          default: n(
                            () => l[34] || (l[34] = [e('Event Name')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(
                            () => l[35] || (l[35] = [e('Description')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(
                            () => l[36] || (l[36] = [e('Parameters')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(a, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(
                            () => l[37] || (l[37] = [e('move-start')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[38] ||
                              (l[38] = [e('Triggered before dragging')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(() => l[39] || (l[39] = [e('-')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[40] || (l[40] = [e('moving')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[41] || (l[41] = [e('Triggered when dragging')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(() => l[42] || (l[42] = [e('-')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[43] || (l[43] = [e('move-end')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[44] ||
                              (l[44] = [e('Triggered after dragging ends')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(() => l[45] || (l[45] = [e('-')])),
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
          l[66] ||
            (l[66] = o(
              'h3',
              { id: 'split Slots' },
              [o('code', null, '<split>'), e(' Slots')],
              -1
            )),
          t(
            p,
            { class: 'component-api-table' },
            {
              default: n(() => [
                l[62] ||
                  (l[62] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(f, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(s, null, {
                          default: n(() => l[47] || (l[47] = [e('Slot Name')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(
                            () => l[48] || (l[48] = [e('Description')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(
                            () => l[49] || (l[49] = [e('Parameters')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(a, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[50] || (l[50] = [e('first')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[51] ||
                              (l[51] = [e('The contents of the first panel')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(() => l[52] || (l[52] = [e('-')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(
                            () => l[53] || (l[53] = [e('resize-trigger')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[54] ||
                              (l[54] = [e('The contents of the resize pole')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(() => l[55] || (l[55] = [e('-')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(
                            () => l[56] || (l[56] = [e('resize-trigger-icon')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[57] || (l[57] = [e('Resize pole icon')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(() => l[58] || (l[58] = [e('-')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[59] || (l[59] = [e('second')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[60] ||
                              (l[60] = [e('The contents of the second panel')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(() => l[61] || (l[61] = [e('-')])),
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
const V = w(B, [['render', $]]);
export { V as default };
