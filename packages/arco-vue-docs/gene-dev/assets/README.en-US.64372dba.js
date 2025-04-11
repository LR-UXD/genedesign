import {
  _ as T,
  d as A,
  u as N,
  r,
  o as _,
  c as B,
  w as t,
  e as o,
  a as n,
  b as u,
  m as M,
} from './index.9c61ea88.js';
import {
  D as z,
  a as F,
  b as I,
  c as S,
  d as $,
  e as R,
} from './formatter.a453a372.js';
import './index.2b17769d.js';
import './index.5bc6c633.js';

const b = [
  {
    version: '2.55.2',
    date: '2024-05-10',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>fix formatter not being applied during paste (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/3110">#3110</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const W = A({
  name: 'ArcoMain',
  components: {
    DemoBasic: z,
    DemoStatus: F,
    DemoMasked: I,
    DemoSeparator: S,
    DemoForm: $,
    DemoFormatter: R,
  },
  setup() {
    const { locale: s } = N();
    return {
      locale: s,
      data: {
        meta: { type: 'Component', category: 'Data Entry' },
        title: 'VerificationCode',
        description: 'Verification code input component.',
      },
      changelog: typeof b === 'undefined' ? void 0 : b,
      getMessage: (f, i) => (s.value === 'zh-CN' ? f : i),
    };
  },
});
function U(s, l, v, x, f, i) {
  const y = r('demo-basic');
  const D = r('demo-status');
  const w = r('demo-masked');
  const V = r('demo-separator');
  const k = r('demo-form');
  const C = r('demo-formatter');
  const E = r('anchor-head');
  const a = r('a-th');
  const d = r('a-tr');
  const m = r('a-thead');
  const e = r('a-td');
  const p = r('a-tbody');
  const g = r('a-table');
  const P = r('arco-article');
  return (
    _(),
    B(
      P,
      M(s.data, { changelog: s.changelog }),
      {
        default: t(() => [
          l[59] ||
            (l[59] = o(
              'p',
              null,
              [o('em', null, 'Auto translate by google.')],
              -1
            )),
          n(y),
          n(D),
          n(w),
          n(V),
          n(k),
          n(C),
          n(
            E,
            { level: '2', href: 'API' },
            { default: t(() => l[0] || (l[0] = [u('API')])), _: 1 }
          ),
          l[60] ||
            (l[60] = o(
              'h3',
              { id: 'verification-code Props' },
              [o('code', null, '<verification-code>'), u(' Props')],
              -1
            )),
          n(
            g,
            { class: 'component-api-table' },
            {
              default: t(() => [
                l[45] ||
                  (l[45] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                n(m, null, {
                  default: t(() => [
                    n(d, null, {
                      default: t(() => [
                        n(a, null, {
                          default: t(() => l[1] || (l[1] = [u('Attribute')])),
                          _: 1,
                        }),
                        n(a, null, {
                          default: t(() => l[2] || (l[2] = [u('Description')])),
                          _: 1,
                        }),
                        n(a, null, {
                          default: t(() => l[3] || (l[3] = [u('Type')])),
                          _: 1,
                        }),
                        n(a, null, {
                          default: t(() => l[4] || (l[4] = [u('Default')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                n(p, null, {
                  default: t(() => [
                    n(d, null, {
                      default: t(() => [
                        n(e, null, {
                          default: t(
                            () =>
                              l[5] ||
                              (l[5] = [
                                u('model-value '),
                                o('strong', null, '(v-model)', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(() => l[6] || (l[6] = [u('Value')])),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () =>
                              l[7] || (l[7] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () => l[8] || (l[8] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    n(d, null, {
                      default: t(() => [
                        n(e, null, {
                          default: t(
                            () => l[9] || (l[9] = [u('default-value')])
                          ),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () =>
                              l[10] ||
                              (l[10] = [
                                u('Default value (uncontrolled state)'),
                              ])
                          ),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () =>
                              l[11] || (l[11] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () => l[12] || (l[12] = [o('code', null, "''", -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    n(d, null, {
                      default: t(() => [
                        n(e, null, {
                          default: t(() => l[13] || (l[13] = [u('length')])),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () =>
                              l[14] ||
                              (l[14] = [
                                u(
                                  'The length of the verification code, rendering the corresponding number of input boxes according to the length.'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () =>
                              l[15] || (l[15] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () => l[16] || (l[16] = [o('code', null, '6', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    n(d, null, {
                      default: t(() => [
                        n(e, null, {
                          default: t(() => l[17] || (l[17] = [u('size')])),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () => l[18] || (l[18] = [u('Input size')])
                          ),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
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
                        n(e, null, {
                          default: t(
                            () =>
                              l[20] ||
                              (l[20] = [o('code', null, "'medium'", -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    n(d, null, {
                      default: t(() => [
                        n(e, null, {
                          default: t(() => l[21] || (l[21] = [u('disabled')])),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () => l[22] || (l[22] = [u('Whether to disable')])
                          ),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () =>
                              l[23] ||
                              (l[23] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () =>
                              l[24] || (l[24] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    n(d, null, {
                      default: t(() => [
                        n(e, null, {
                          default: t(() => l[25] || (l[25] = [u('masked')])),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () => l[26] || (l[26] = [u('Password mode')])
                          ),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () =>
                              l[27] ||
                              (l[27] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () =>
                              l[28] || (l[28] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    n(d, null, {
                      default: t(() => [
                        n(e, null, {
                          default: t(() => l[29] || (l[29] = [u('readonly')])),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(() => l[30] || (l[30] = [u('Readonly')])),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () =>
                              l[31] ||
                              (l[31] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () =>
                              l[32] || (l[32] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    n(d, null, {
                      default: t(() => [
                        n(e, null, {
                          default: t(() => l[33] || (l[33] = [u('error')])),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () =>
                              l[34] ||
                              (l[34] = [u('Whether it is an error state')])
                          ),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () =>
                              l[35] ||
                              (l[35] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () =>
                              l[36] || (l[36] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    n(d, null, {
                      default: t(() => [
                        n(e, null, {
                          default: t(() => l[37] || (l[37] = [u('separator')])),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () =>
                              l[38] ||
                              (l[38] = [
                                u(
                                  'Separator. Customizable rendering separators after input boxes with different indexes'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () =>
                              l[39] ||
                              (l[39] = [
                                o(
                                  'code',
                                  null,
                                  '(index: number, character: string) => VNode',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () => l[40] || (l[40] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    n(d, null, {
                      default: t(() => [
                        n(e, null, {
                          default: t(() => l[41] || (l[41] = [u('formatter')])),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () =>
                              l[42] ||
                              (l[42] = [
                                u(
                                  'Formatter function, triggered when the user input value changes'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () =>
                              l[43] ||
                              (l[43] = [
                                o(
                                  'code',
                                  null,
                                  '(inputValue: string, index: number, value: string) => string | boolean',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
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
          l[61] ||
            (l[61] = o(
              'h3',
              { id: 'verification-code Events' },
              [o('code', null, '<verification-code>'), u(' Events')],
              -1
            )),
          n(
            g,
            { class: 'component-api-table' },
            {
              default: t(() => [
                l[58] ||
                  (l[58] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                n(m, null, {
                  default: t(() => [
                    n(d, null, {
                      default: t(() => [
                        n(a, null, {
                          default: t(
                            () => l[46] || (l[46] = [u('Event Name')])
                          ),
                          _: 1,
                        }),
                        n(a, null, {
                          default: t(
                            () => l[47] || (l[47] = [u('Description')])
                          ),
                          _: 1,
                        }),
                        n(a, null, {
                          default: t(
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
                n(p, null, {
                  default: t(() => [
                    n(d, null, {
                      default: t(() => [
                        n(e, null, {
                          default: t(() => l[49] || (l[49] = [u('change')])),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () =>
                              l[50] ||
                              (l[50] = [u('Triggered when the value changes')])
                          ),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () =>
                              l[51] ||
                              (l[51] = [
                                u('value: '),
                                o('code', null, 'string', -1),
                              ])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    n(d, null, {
                      default: t(() => [
                        n(e, null, {
                          default: t(() => l[52] || (l[52] = [u('finish')])),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () =>
                              l[53] ||
                              (l[53] = [
                                u('Triggered when the filling is complete'),
                              ])
                          ),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () =>
                              l[54] ||
                              (l[54] = [
                                u('value: '),
                                o('code', null, 'string', -1),
                              ])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    n(d, null, {
                      default: t(() => [
                        n(e, null, {
                          default: t(() => l[55] || (l[55] = [u('input')])),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () => l[56] || (l[56] = [u('Triggered on input')])
                          ),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () =>
                              l[57] ||
                              (l[57] = [
                                u('inputValue: '),
                                o('code', null, 'string', -1),
                                o('br', null, null, -1),
                                u('index: '),
                                o('code', null, 'number', -1),
                                o('br', null, null, -1),
                                u('ev: '),
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
        ]),
        _: 1,
      },
      16,
      ['changelog']
    )
  );
}
const J = T(W, [['render', U]]);
export { J as default };
