import {
  _ as A,
  d as P,
  u as w,
  r as a,
  o as I,
  c as T,
  w as e,
  e as u,
  a as l,
  b as n,
  m as k,
} from './index.9c61ea88.js';
import { D as B, a as N } from './custom.0aefec80.js';

const y = [
  {
    version: '2.55.1',
    date: '2024-03-29',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>fix automatically inherited warn (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/3048">#3048</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.47.0',
    date: '2023-06-02',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>Add <code>in-config-provider</code> property (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2474">#2474</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.37.3',
    date: '2022-09-23',
    list: [
      {
        type: 'enhancement',
        typeText: '\u{1F48E} Enhancement',
        list: [
          `<p>Optimize the custom display priority, the image slot is higher than the global empty slot (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1673">#1673</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const E = P({
  name: 'ArcoMain',
  components: { DemoBasic: B, DemoCustom: N },
  setup() {
    const { locale: r } = w();
    return {
      locale: r,
      data: {
        meta: { type: 'Component', category: 'Data Display' },
        title: 'Empty',
        description:
          'Refers to a state in which the current scene has no corresponding data content.',
      },
      changelog: typeof y === 'undefined' ? void 0 : y,
      getMessage: (i, p) => (r.value === 'zh-CN' ? i : p),
    };
  },
});
function M(r, t, b, _, i, p) {
  const v = a('demo-basic');
  const x = a('demo-custom');
  const D = a('anchor-head');
  const s = a('a-th');
  const d = a('a-tr');
  const f = a('a-thead');
  const o = a('a-td');
  const m = a('a-tbody');
  const g = a('a-table');
  const C = a('arco-article');
  return (
    I(),
    T(
      C,
      k(r.data, { changelog: r.changelog }),
      {
        default: e(() => [
          t[27] ||
            (t[27] = u(
              'p',
              null,
              [u('em', null, 'Auto translate by google.')],
              -1
            )),
          l(v),
          l(x),
          l(
            D,
            { level: '2', href: 'API' },
            { default: e(() => t[0] || (t[0] = [n('API')])), _: 1 }
          ),
          t[28] ||
            (t[28] = u(
              'h3',
              { id: 'empty Props' },
              [u('code', null, '<empty>'), n(' Props')],
              -1
            )),
          l(
            g,
            { class: 'component-api-table' },
            {
              default: e(() => [
                t[19] ||
                  (t[19] = u(
                    'colgroup',
                    null,
                    [u('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                l(f, null, {
                  default: e(() => [
                    l(d, null, {
                      default: e(() => [
                        l(s, null, {
                          default: e(() => t[1] || (t[1] = [n('Attribute')])),
                          _: 1,
                        }),
                        l(s, null, {
                          default: e(() => t[2] || (t[2] = [n('Description')])),
                          _: 1,
                        }),
                        l(s, null, {
                          default: e(() => t[3] || (t[3] = [n('Type')])),
                          _: 1,
                        }),
                        l(s, null, {
                          default: e(() => t[4] || (t[4] = [n('Default')])),
                          _: 1,
                        }),
                        l(s, null, {
                          default: e(() => t[5] || (t[5] = [n('version')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                l(m, null, {
                  default: e(() => [
                    l(d, null, {
                      default: e(() => [
                        l(o, null, {
                          default: e(() => t[6] || (t[6] = [n('description')])),
                          _: 1,
                        }),
                        l(o, null, {
                          default: e(() => t[7] || (t[7] = [n('Description')])),
                          _: 1,
                        }),
                        l(o, null, {
                          default: e(
                            () =>
                              t[8] || (t[8] = [u('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        l(o, null, {
                          default: e(
                            () => t[9] || (t[9] = [u('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        l(o),
                      ]),
                      _: 1,
                    }),
                    l(d, null, {
                      default: e(() => [
                        l(o, null, {
                          default: e(() => t[10] || (t[10] = [n('img-src')])),
                          _: 1,
                        }),
                        l(o, null, {
                          default: e(
                            () =>
                              t[11] ||
                              (t[11] = [n('The src of the Custom Image')])
                          ),
                          _: 1,
                        }),
                        l(o, null, {
                          default: e(
                            () =>
                              t[12] || (t[12] = [u('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        l(o, null, {
                          default: e(
                            () => t[13] || (t[13] = [u('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        l(o),
                      ]),
                      _: 1,
                    }),
                    l(d, null, {
                      default: e(() => [
                        l(o, null, {
                          default: e(
                            () => t[14] || (t[14] = [n('in-config-provider')])
                          ),
                          _: 1,
                        }),
                        l(o, null, {
                          default: e(
                            () =>
                              t[15] ||
                              (t[15] = [n('Whether to use in ConfigProvider')])
                          ),
                          _: 1,
                        }),
                        l(o, null, {
                          default: e(
                            () =>
                              t[16] ||
                              (t[16] = [u('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        l(o, null, {
                          default: e(
                            () =>
                              t[17] || (t[17] = [u('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        l(o, null, {
                          default: e(() => t[18] || (t[18] = [n('2.47.0')])),
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
          t[29] ||
            (t[29] = u(
              'h3',
              { id: 'empty Slots' },
              [u('code', null, '<empty>'), n(' Slots')],
              -1
            )),
          l(
            g,
            { class: 'component-api-table' },
            {
              default: e(() => [
                t[26] ||
                  (t[26] = u(
                    'colgroup',
                    null,
                    [u('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                l(f, null, {
                  default: e(() => [
                    l(d, null, {
                      default: e(() => [
                        l(s, null, {
                          default: e(() => t[20] || (t[20] = [n('Slot Name')])),
                          _: 1,
                        }),
                        l(s, null, {
                          default: e(
                            () => t[21] || (t[21] = [n('Description')])
                          ),
                          _: 1,
                        }),
                        l(s, null, {
                          default: e(
                            () => t[22] || (t[22] = [n('Parameters')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                l(m, null, {
                  default: e(() => [
                    l(d, null, {
                      default: e(() => [
                        l(o, null, {
                          default: e(() => t[23] || (t[23] = [n('image')])),
                          _: 1,
                        }),
                        l(o, null, {
                          default: e(
                            () => t[24] || (t[24] = [n('Image/Icon')])
                          ),
                          _: 1,
                        }),
                        l(o, null, {
                          default: e(() => t[25] || (t[25] = [n('-')])),
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
const V = A(E, [['render', M]]);
export { V as default };
