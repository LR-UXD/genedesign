import {
  _ as v,
  d as y,
  u as N,
  r as f,
  o as x,
  c as P,
  w as t,
  a as u,
  b as o,
  e as d,
  m as w,
} from './index.9c61ea88.js';
import { D as $, a as I, b as M, c as V } from './editor.77c66f52.js';
import './index.0f7a2448.js';
import './index.9043c5e0.js';

const k = y({
  name: 'ArcoMain',
  components: { DemoBasic: $, DemoAlign: I, DemoNest: M, DemoEditor: V },
  setup() {
    const { locale: a } = N();
    const l = {
      meta: { type: '\u7EC4\u4EF6', category: '\u6570\u636E\u5C55\u793A' },
      title: '\u8BC4\u8BBA Comment',
      description: '\u5C55\u793A\u8BC4\u8BBA\u4FE1\u606F',
    };
    const r = (m, i) => (a.value === 'zh-CN' ? m : i);
    return {
      locale: a,
      data: l,
      changelog: typeof _changelog === 'undefined' ? void 0 : _changelog,
      getMessage: r,
    };
  },
});
function z(a, l, r, F, m, i) {
  const B = f('demo-basic');
  const D = f('demo-align');
  const _ = f('demo-nest');
  const A = f('demo-editor');
  const b = f('anchor-head');
  const s = f('a-th');
  const e = f('a-tr');
  const p = f('a-thead');
  const n = f('a-td');
  const g = f('a-tbody');
  const C = f('a-table');
  const E = f('arco-article');
  return (
    x(),
    P(
      E,
      w(a.data, { changelog: a.changelog }),
      {
        default: t(() => [
          u(B),
          u(D),
          u(_),
          u(A),
          u(
            b,
            { level: '2', href: 'API' },
            { default: t(() => l[0] || (l[0] = [o('API')])), _: 1 }
          ),
          l[45] ||
            (l[45] = d(
              'h3',
              { id: 'comment Props' },
              [d('code', null, '<comment>'), o(' Props')],
              -1
            )),
          u(
            C,
            { class: 'component-api-table' },
            {
              default: t(() => [
                l[25] ||
                  (l[25] = d(
                    'colgroup',
                    null,
                    [d('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                u(p, null, {
                  default: t(() => [
                    u(e, null, {
                      default: t(() => [
                        u(s, null, {
                          default: t(
                            () => l[1] || (l[1] = [o('\u53C2\u6570\u540D')])
                          ),
                          _: 1,
                        }),
                        u(s, null, {
                          default: t(
                            () => l[2] || (l[2] = [o('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        u(s, null, {
                          default: t(
                            () => l[3] || (l[3] = [o('\u7C7B\u578B')])
                          ),
                          _: 1,
                        }),
                        u(s, null, {
                          default: t(
                            () => l[4] || (l[4] = [o('\u9ED8\u8BA4\u503C')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                u(g, null, {
                  default: t(() => [
                    u(e, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(() => l[5] || (l[5] = [o('author')])),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () => l[6] || (l[6] = [o('\u4F5C\u8005\u540D')])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[7] || (l[7] = [d('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () => l[8] || (l[8] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(() => l[9] || (l[9] = [o('avatar')])),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () => l[10] || (l[10] = [o('\u5934\u50CF')])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[11] || (l[11] = [d('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () => l[12] || (l[12] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(() => l[13] || (l[13] = [o('content')])),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[14] || (l[14] = [o('\u8BC4\u8BBA\u5185\u5BB9')])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[15] || (l[15] = [d('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () => l[16] || (l[16] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(() => l[17] || (l[17] = [o('datetime')])),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[18] || (l[18] = [o('\u65F6\u95F4\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[19] || (l[19] = [d('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () => l[20] || (l[20] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(() => l[21] || (l[21] = [o('align')])),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[22] ||
                              (l[22] = [
                                o(
                                  '\u9760\u5DE6/\u9760\u53F3 \u5C55\u793A datetime \u548C actions'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[23] ||
                              (l[23] = [
                                d(
                                  'code',
                                  null,
                                  `'left' | 'right' | { datetime?: "left" | "right"; actions?: "left" | "right" }`,
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[24] || (l[24] = [d('code', null, "'left'", -1)])
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
          l[46] ||
            (l[46] = d(
              'h3',
              { id: 'comment Slots' },
              [d('code', null, '<comment>'), o(' Slots')],
              -1
            )),
          u(
            C,
            { class: 'component-api-table' },
            {
              default: t(() => [
                l[44] ||
                  (l[44] = d(
                    'colgroup',
                    null,
                    [d('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                u(p, null, {
                  default: t(() => [
                    u(e, null, {
                      default: t(() => [
                        u(s, null, {
                          default: t(
                            () => l[26] || (l[26] = [o('\u63D2\u69FD\u540D')])
                          ),
                          _: 1,
                        }),
                        u(s, null, {
                          default: t(
                            () => l[27] || (l[27] = [o('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        u(s, null, {
                          default: t(
                            () => l[28] || (l[28] = [o('\u53C2\u6570')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                u(g, null, {
                  default: t(() => [
                    u(e, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(() => l[29] || (l[29] = [o('avatar')])),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () => l[30] || (l[30] = [o('\u5934\u50CF')])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(() => l[31] || (l[31] = [o('-')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(() => l[32] || (l[32] = [o('author')])),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () => l[33] || (l[33] = [o('\u4F5C\u8005')])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(() => l[34] || (l[34] = [o('-')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(() => l[35] || (l[35] = [o('datetime')])),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[36] || (l[36] = [o('\u65F6\u95F4\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(() => l[37] || (l[37] = [o('-')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(() => l[38] || (l[38] = [o('content')])),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[39] || (l[39] = [o('\u8BC4\u8BBA\u5185\u5BB9')])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(() => l[40] || (l[40] = [o('-')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(e, null, {
                      default: t(() => [
                        u(n, null, {
                          default: t(() => l[41] || (l[41] = [o('actions')])),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(
                            () =>
                              l[42] || (l[42] = [o('\u64CD\u4F5C\u5217\u8868')])
                          ),
                          _: 1,
                        }),
                        u(n, null, {
                          default: t(() => l[43] || (l[43] = [o('-')])),
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
const q = v(k, [['render', z]]);
export { q as default };
