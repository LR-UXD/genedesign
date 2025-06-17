import {
  _ as y,
  d as k,
  u as P,
  r as f,
  o as w,
  c as _,
  w as n,
  a as u,
  b as o,
  e as d,
  m as x,
} from './index.9c61ea88.js';
import { D as v, a as N, b as $ } from './animation.4730ca50.js';

const z = k({
  name: 'ArcoMain',
  components: { DemoBasic: v, DemoType: N, DemoAnimation: $ },
  setup() {
    const { locale: a } = P();
    const l = {
      meta: { type: '\u7EC4\u4EF6', category: '\u53CD\u9988' },
      title: '\u9AA8\u67B6\u5C4F Skeleton',
      description:
        '\u5C06\u52A0\u8F7D\u4E2D\u7684\u6570\u636E\u7528\u7070\u8272\u5360\u4F4D\u3002',
    };
    const m = (F, A) => (a.value === 'zh-CN' ? F : A);
    return {
      locale: a,
      data: l,
      changelog: typeof _changelog === 'undefined' ? void 0 : _changelog,
      getMessage: m,
    };
  },
});
function I(a, l, m, B, F, A) {
  const C = f('demo-basic');
  const g = f('demo-type');
  const D = f('demo-animation');
  const b = f('anchor-head');
  const e = f('a-th');
  const s = f('a-tr');
  const r = f('a-thead');
  const t = f('a-td');
  const p = f('a-tbody');
  const i = f('a-table');
  const E = f('arco-article');
  return (
    w(),
    _(
      E,
      x(a.data, { changelog: a.changelog }),
      {
        default: n(() => [
          u(C),
          u(g),
          u(D),
          u(
            b,
            { level: '2', href: 'API' },
            { default: n(() => l[0] || (l[0] = [o('API')])), _: 1 }
          ),
          l[48] ||
            (l[48] = d(
              'h3',
              { id: 'skeleton Props' },
              [d('code', null, '<skeleton>'), o(' Props')],
              -1
            )),
          u(
            i,
            { class: 'component-api-table' },
            {
              default: n(() => [
                l[13] ||
                  (l[13] = d(
                    'colgroup',
                    null,
                    [d('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                u(r, null, {
                  default: n(() => [
                    u(s, null, {
                      default: n(() => [
                        u(e, null, {
                          default: n(
                            () => l[1] || (l[1] = [o('\u53C2\u6570\u540D')])
                          ),
                          _: 1,
                        }),
                        u(e, null, {
                          default: n(
                            () => l[2] || (l[2] = [o('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        u(e, null, {
                          default: n(
                            () => l[3] || (l[3] = [o('\u7C7B\u578B')])
                          ),
                          _: 1,
                        }),
                        u(e, null, {
                          default: n(
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
                u(p, null, {
                  default: n(() => [
                    u(s, null, {
                      default: n(() => [
                        u(t, null, {
                          default: n(() => l[5] || (l[5] = [o('loading')])),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[6] ||
                              (l[6] = [
                                o(
                                  '\u662F\u5426\u5C55\u793A\u9AA8\u67B6\u5C4F\uFF08\u52A0\u8F7D\u4E2D\u72B6\u6001\uFF09'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[7] || (l[7] = [d('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () => l[8] || (l[8] = [d('code', null, 'true', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(s, null, {
                      default: n(() => [
                        u(t, null, {
                          default: n(() => l[9] || (l[9] = [o('animation')])),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[10] ||
                              (l[10] = [
                                o(
                                  '\u662F\u5426\u5F00\u542F\u9AA8\u67B6\u5C4F\u52A8\u753B'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[11] ||
                              (l[11] = [d('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[12] || (l[12] = [d('code', null, 'false', -1)])
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
            (l[49] = d(
              'h3',
              { id: 'skeleton-line Props' },
              [d('code', null, '<skeleton-line>'), o(' Props')],
              -1
            )),
          u(
            i,
            { class: 'component-api-table' },
            {
              default: n(() => [
                l[34] ||
                  (l[34] = d(
                    'colgroup',
                    null,
                    [d('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                u(r, null, {
                  default: n(() => [
                    u(s, null, {
                      default: n(() => [
                        u(e, null, {
                          default: n(
                            () => l[14] || (l[14] = [o('\u53C2\u6570\u540D')])
                          ),
                          _: 1,
                        }),
                        u(e, null, {
                          default: n(
                            () => l[15] || (l[15] = [o('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        u(e, null, {
                          default: n(
                            () => l[16] || (l[16] = [o('\u7C7B\u578B')])
                          ),
                          _: 1,
                        }),
                        u(e, null, {
                          default: n(
                            () => l[17] || (l[17] = [o('\u9ED8\u8BA4\u503C')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                u(p, null, {
                  default: n(() => [
                    u(s, null, {
                      default: n(() => [
                        u(t, null, {
                          default: n(() => l[18] || (l[18] = [o('rows')])),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[19] ||
                              (l[19] = [o('\u5C55\u793A\u7684\u884C\u6570')])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[20] || (l[20] = [d('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () => l[21] || (l[21] = [d('code', null, '1', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(s, null, {
                      default: n(() => [
                        u(t, null, {
                          default: n(() => l[22] || (l[22] = [o('widths')])),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[23] ||
                              (l[23] = [
                                o('\u7EBF\u578B\u9AA8\u67B6\u7684\u5BBD\u5EA6'),
                              ])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[24] ||
                              (l[24] = [
                                d('code', null, 'Array<number | string>', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () => l[25] || (l[25] = [d('code', null, '[]', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(s, null, {
                      default: n(() => [
                        u(t, null, {
                          default: n(
                            () => l[26] || (l[26] = [o('line-height')])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[27] ||
                              (l[27] = [
                                o('\u7EBF\u578B\u9AA8\u67B6\u7684\u884C\u9AD8'),
                              ])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[28] || (l[28] = [d('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () => l[29] || (l[29] = [d('code', null, '20', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(s, null, {
                      default: n(() => [
                        u(t, null, {
                          default: n(
                            () => l[30] || (l[30] = [o('line-spacing')])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[31] ||
                              (l[31] = [
                                o(
                                  '\u7EBF\u578B\u9AA8\u67B6\u7684\u884C\u95F4\u8DDD'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[32] || (l[32] = [d('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () => l[33] || (l[33] = [d('code', null, '15', -1)])
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
          l[50] ||
            (l[50] = d(
              'h3',
              { id: 'skeleton-shape Props' },
              [d('code', null, '<skeleton-shape>'), o(' Props')],
              -1
            )),
          u(
            i,
            { class: 'component-api-table' },
            {
              default: n(() => [
                l[47] ||
                  (l[47] = d(
                    'colgroup',
                    null,
                    [d('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                u(r, null, {
                  default: n(() => [
                    u(s, null, {
                      default: n(() => [
                        u(e, null, {
                          default: n(
                            () => l[35] || (l[35] = [o('\u53C2\u6570\u540D')])
                          ),
                          _: 1,
                        }),
                        u(e, null, {
                          default: n(
                            () => l[36] || (l[36] = [o('\u63CF\u8FF0')])
                          ),
                          _: 1,
                        }),
                        u(e, null, {
                          default: n(
                            () => l[37] || (l[37] = [o('\u7C7B\u578B')])
                          ),
                          _: 1,
                        }),
                        u(e, null, {
                          default: n(
                            () => l[38] || (l[38] = [o('\u9ED8\u8BA4\u503C')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                u(p, null, {
                  default: n(() => [
                    u(s, null, {
                      default: n(() => [
                        u(t, null, {
                          default: n(() => l[39] || (l[39] = [o('shape')])),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[40] ||
                              (l[40] = [
                                o('\u56FE\u5F62\u9AA8\u67B6\u7684\u5F62\u72B6'),
                              ])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[41] ||
                              (l[41] = [
                                d('code', null, "'square' | 'circle'", -1),
                              ])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[42] ||
                              (l[42] = [d('code', null, "'square'", -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    u(s, null, {
                      default: n(() => [
                        u(t, null, {
                          default: n(() => l[43] || (l[43] = [o('size')])),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[44] ||
                              (l[44] = [
                                o('\u56FE\u5F62\u9AA8\u67B6\u7684\u5927\u5C0F'),
                              ])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[45] ||
                              (l[45] = [
                                d(
                                  'code',
                                  null,
                                  "'small' | 'medium' | 'large'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        u(t, null, {
                          default: n(
                            () =>
                              l[46] ||
                              (l[46] = [d('code', null, "'medium'", -1)])
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
const q = y(z, [['render', I]]);
export { q as default };
