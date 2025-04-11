import {
  _ as N,
  d as B,
  u as E,
  r as u,
  o as M,
  c as $,
  w as e,
  e as s,
  a as t,
  b as n,
  m as F,
} from './index.9c61ea88.js';
import {
  D as V,
  a as R,
  b as z,
  c as U,
  d as W,
  e as j,
  f as q,
  g as G,
  h as H,
} from './all.9c8f3f84.js';
import './index.0f04c67f.js';
import './index.718cb321.js';

const _ = [
  {
    version: '2.49.0',
    date: '2023-07-21',
    list: [
      {
        type: 'style',
        typeText: '\u{1F485} Style',
        list: [
          `<p>Fix 500 image misalignment issues (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2578">#2578</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.8.0',
    date: '2021-12-01',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>Added <code>extra</code> slot and <code>default</code> slot (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/302">#302</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const J = B({
  name: 'ArcoMain',
  components: {
    DemoBasic: V,
    DemoSuccess: R,
    DemoWarning: z,
    DemoError: U,
    Demo403: W,
    Demo404: j,
    Demo500: q,
    DemoCustom: G,
    DemoAll: H,
  },
  setup() {
    const { locale: r } = E();
    return {
      locale: r,
      data: {
        meta: { type: 'Component', category: 'Feedback' },
        title: 'Result',
        description:
          'It is used to feed back the processing results of a series of operation tasks. It is used when there are important operations that need to inform the user of the processing results and the feedback content is more complicated.',
      },
      changelog: typeof _ === 'undefined' ? void 0 : _,
      getMessage: (f, i) => (r.value === 'zh-CN' ? f : i),
    };
  },
});
function K(r, l, b, y, f, i) {
  const D = u('demo-basic');
  const x = u('demo-success');
  const v = u('demo-warning');
  const k = u('demo-error');
  const w = u('demo-403');
  const A = u('demo-404');
  const S = u('demo-500');
  const T = u('demo-custom');
  const C = u('demo-all');
  const I = u('anchor-head');
  const a = u('a-th');
  const d = u('a-tr');
  const m = u('a-thead');
  const o = u('a-td');
  const p = u('a-tbody');
  const g = u('a-table');
  const P = u('arco-article');
  return (
    M(),
    $(
      P,
      F(r.data, { changelog: r.changelog }),
      {
        default: e(() => [
          l[40] ||
            (l[40] = s(
              'p',
              null,
              [s('em', null, 'Auto translate by google.')],
              -1
            )),
          t(D),
          t(x),
          t(v),
          t(k),
          t(w),
          t(A),
          t(S),
          t(T),
          t(C),
          t(
            I,
            { level: '2', href: 'API' },
            { default: e(() => l[0] || (l[0] = [n('API')])), _: 1 }
          ),
          l[41] ||
            (l[41] = s(
              'h3',
              { id: 'result Props' },
              [s('code', null, '<result>'), n(' Props')],
              -1
            )),
          t(
            g,
            { class: 'component-api-table' },
            {
              default: e(() => [
                l[17] ||
                  (l[17] = s(
                    'colgroup',
                    null,
                    [s('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(m, null, {
                  default: e(() => [
                    t(d, null, {
                      default: e(() => [
                        t(a, null, {
                          default: e(() => l[1] || (l[1] = [n('Attribute')])),
                          _: 1,
                        }),
                        t(a, null, {
                          default: e(() => l[2] || (l[2] = [n('Description')])),
                          _: 1,
                        }),
                        t(a, null, {
                          default: e(() => l[3] || (l[3] = [n('Type')])),
                          _: 1,
                        }),
                        t(a, null, {
                          default: e(() => l[4] || (l[4] = [n('Default')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(p, null, {
                  default: e(() => [
                    t(d, null, {
                      default: e(() => [
                        t(o, null, {
                          default: e(() => l[5] || (l[5] = [n('status')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[6] ||
                              (l[6] = [
                                n('The status displayed on the result page'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[7] ||
                              (l[7] = [
                                s(
                                  'code',
                                  null,
                                  "'info' | 'success' | 'warning' | 'error' | '403' | '404' | '500' | null",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[8] || (l[8] = [s('code', null, "'info'", -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(o, null, {
                          default: e(() => l[9] || (l[9] = [n('title')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(() => l[10] || (l[10] = [n('Title')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[11] || (l[11] = [s('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () => l[12] || (l[12] = [s('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(o, null, {
                          default: e(() => l[13] || (l[13] = [n('subtitle')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(() => l[14] || (l[14] = [n('Subtitle')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () =>
                              l[15] || (l[15] = [s('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(
                            () => l[16] || (l[16] = [s('code', null, '-', -1)])
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
          l[42] ||
            (l[42] = s(
              'h3',
              { id: 'result Slots' },
              [s('code', null, '<result>'), n(' Slots')],
              -1
            )),
          t(
            g,
            { class: 'component-api-table' },
            {
              default: e(() => [
                l[39] ||
                  (l[39] = s(
                    'colgroup',
                    null,
                    [s('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(m, null, {
                  default: e(() => [
                    t(d, null, {
                      default: e(() => [
                        t(a, null, {
                          default: e(() => l[18] || (l[18] = [n('Slot Name')])),
                          _: 1,
                        }),
                        t(a, null, {
                          default: e(
                            () => l[19] || (l[19] = [n('Description')])
                          ),
                          _: 1,
                        }),
                        t(a, null, {
                          default: e(
                            () => l[20] || (l[20] = [n('Parameters')])
                          ),
                          _: 1,
                        }),
                        t(a, null, {
                          default: e(() => l[21] || (l[21] = [n('version')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(p, null, {
                  default: e(() => [
                    t(d, null, {
                      default: e(() => [
                        t(o, null, {
                          default: e(() => l[22] || (l[22] = [n('icon')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(() => l[23] || (l[23] = [n('Icon')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(() => l[24] || (l[24] = [n('-')])),
                          _: 1,
                        }),
                        t(o),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(o, null, {
                          default: e(() => l[25] || (l[25] = [n('title')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(() => l[26] || (l[26] = [n('Title')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(() => l[27] || (l[27] = [n('-')])),
                          _: 1,
                        }),
                        t(o),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(o, null, {
                          default: e(() => l[28] || (l[28] = [n('subtitle')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(() => l[29] || (l[29] = [n('Subtitle')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(() => l[30] || (l[30] = [n('-')])),
                          _: 1,
                        }),
                        t(o),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(o, null, {
                          default: e(() => l[31] || (l[31] = [n('extra')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(() => l[32] || (l[32] = [n('Extra')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(() => l[33] || (l[33] = [n('-')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(() => l[34] || (l[34] = [n('2.8.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: e(() => [
                        t(o, null, {
                          default: e(() => l[35] || (l[35] = [n('default')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(() => l[36] || (l[36] = [n('Default')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(() => l[37] || (l[37] = [n('-')])),
                          _: 1,
                        }),
                        t(o, null, {
                          default: e(() => l[38] || (l[38] = [n('2.8.0')])),
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
const Y = N(J, [['render', K]]);
export { Y as default };
