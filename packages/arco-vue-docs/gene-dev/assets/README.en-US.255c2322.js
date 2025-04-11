import {
  _ as T,
  d as x,
  u as v,
  r as f,
  o as C,
  c as N,
  w as t,
  e as o,
  a as n,
  b as u,
  m as _,
} from './index.9c61ea88.js';
import { D as B, a as $, b as z } from './animation.4730ca50.js';

const I = x({
  name: 'ArcoMain',
  components: { DemoBasic: B, DemoType: $, DemoAnimation: z },
  setup() {
    const { locale: a } = v();
    const l = {
      meta: { type: 'Component', category: 'Feedback' },
      title: 'Skeleton',
      description: 'Use gray to place the data being loaded.',
    };
    const m = (g, b) => (a.value === 'zh-CN' ? g : b);
    return {
      locale: a,
      data: l,
      changelog: typeof _changelog === 'undefined' ? void 0 : _changelog,
      getMessage: m,
    };
  },
});
function M(a, l, m, y, g, b) {
  const k = f('demo-basic');
  const D = f('demo-type');
  const A = f('demo-animation');
  const w = f('anchor-head');
  const d = f('a-th');
  const s = f('a-tr');
  const i = f('a-thead');
  const e = f('a-td');
  const r = f('a-tbody');
  const p = f('a-table');
  const P = f('arco-article');
  return (
    C(),
    N(
      P,
      _(a.data, { changelog: a.changelog }),
      {
        default: t(() => [
          l[48] ||
            (l[48] = o(
              'p',
              null,
              [o('em', null, 'Auto translate by google.')],
              -1
            )),
          n(k),
          n(D),
          n(A),
          n(
            w,
            { level: '2', href: 'API' },
            { default: t(() => l[0] || (l[0] = [u('API')])), _: 1 }
          ),
          l[49] ||
            (l[49] = o(
              'h3',
              { id: 'skeleton Props' },
              [o('code', null, '<skeleton>'), u(' Props')],
              -1
            )),
          n(
            p,
            { class: 'component-api-table' },
            {
              default: t(() => [
                l[13] ||
                  (l[13] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                n(i, null, {
                  default: t(() => [
                    n(s, null, {
                      default: t(() => [
                        n(d, null, {
                          default: t(() => l[1] || (l[1] = [u('Attribute')])),
                          _: 1,
                        }),
                        n(d, null, {
                          default: t(() => l[2] || (l[2] = [u('Description')])),
                          _: 1,
                        }),
                        n(d, null, {
                          default: t(() => l[3] || (l[3] = [u('Type')])),
                          _: 1,
                        }),
                        n(d, null, {
                          default: t(() => l[4] || (l[4] = [u('Default')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                n(r, null, {
                  default: t(() => [
                    n(s, null, {
                      default: t(() => [
                        n(e, null, {
                          default: t(() => l[5] || (l[5] = [u('loading')])),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () =>
                              l[6] ||
                              (l[6] = [
                                u(
                                  'Whether to display the skeleton screen (loading state)'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () =>
                              l[7] || (l[7] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () => l[8] || (l[8] = [o('code', null, 'true', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    n(s, null, {
                      default: t(() => [
                        n(e, null, {
                          default: t(() => l[9] || (l[9] = [u('animation')])),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () =>
                              l[10] ||
                              (l[10] = [
                                u(
                                  'Whether to enable skeleton screen animation'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () =>
                              l[11] ||
                              (l[11] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () =>
                              l[12] || (l[12] = [o('code', null, 'false', -1)])
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
            (l[50] = o(
              'h3',
              { id: 'skeleton-line Props' },
              [o('code', null, '<skeleton-line>'), u(' Props')],
              -1
            )),
          n(
            p,
            { class: 'component-api-table' },
            {
              default: t(() => [
                l[34] ||
                  (l[34] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                n(i, null, {
                  default: t(() => [
                    n(s, null, {
                      default: t(() => [
                        n(d, null, {
                          default: t(() => l[14] || (l[14] = [u('Attribute')])),
                          _: 1,
                        }),
                        n(d, null, {
                          default: t(
                            () => l[15] || (l[15] = [u('Description')])
                          ),
                          _: 1,
                        }),
                        n(d, null, {
                          default: t(() => l[16] || (l[16] = [u('Type')])),
                          _: 1,
                        }),
                        n(d, null, {
                          default: t(() => l[17] || (l[17] = [u('Default')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                n(r, null, {
                  default: t(() => [
                    n(s, null, {
                      default: t(() => [
                        n(e, null, {
                          default: t(() => l[18] || (l[18] = [u('rows')])),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () =>
                              l[19] || (l[19] = [u('Number of rows displayed')])
                          ),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () =>
                              l[20] || (l[20] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () => l[21] || (l[21] = [o('code', null, '1', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    n(s, null, {
                      default: t(() => [
                        n(e, null, {
                          default: t(() => l[22] || (l[22] = [u('widths')])),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () =>
                              l[23] ||
                              (l[23] = [u('The width of the line skeleton')])
                          ),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () =>
                              l[24] ||
                              (l[24] = [
                                o('code', null, 'Array<number | string>', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () => l[25] || (l[25] = [o('code', null, '[]', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    n(s, null, {
                      default: t(() => [
                        n(e, null, {
                          default: t(
                            () => l[26] || (l[26] = [u('line-height')])
                          ),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () =>
                              l[27] ||
                              (l[27] = [u('Line height of the line skeleton')])
                          ),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () =>
                              l[28] || (l[28] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () => l[29] || (l[29] = [o('code', null, '20', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    n(s, null, {
                      default: t(() => [
                        n(e, null, {
                          default: t(
                            () => l[30] || (l[30] = [u('line-spacing')])
                          ),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () =>
                              l[31] ||
                              (l[31] = [u('Line spacing of line skeleton')])
                          ),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () =>
                              l[32] || (l[32] = [o('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () => l[33] || (l[33] = [o('code', null, '15', -1)])
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
          l[51] ||
            (l[51] = o(
              'h3',
              { id: 'skeleton-shape Props' },
              [o('code', null, '<skeleton-shape>'), u(' Props')],
              -1
            )),
          n(
            p,
            { class: 'component-api-table' },
            {
              default: t(() => [
                l[47] ||
                  (l[47] = o(
                    'colgroup',
                    null,
                    [o('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                n(i, null, {
                  default: t(() => [
                    n(s, null, {
                      default: t(() => [
                        n(d, null, {
                          default: t(() => l[35] || (l[35] = [u('Attribute')])),
                          _: 1,
                        }),
                        n(d, null, {
                          default: t(
                            () => l[36] || (l[36] = [u('Description')])
                          ),
                          _: 1,
                        }),
                        n(d, null, {
                          default: t(() => l[37] || (l[37] = [u('Type')])),
                          _: 1,
                        }),
                        n(d, null, {
                          default: t(() => l[38] || (l[38] = [u('Default')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                n(r, null, {
                  default: t(() => [
                    n(s, null, {
                      default: t(() => [
                        n(e, null, {
                          default: t(() => l[39] || (l[39] = [u('shape')])),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () =>
                              l[40] ||
                              (l[40] = [u('The shape of the shape skeleton')])
                          ),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () =>
                              l[41] ||
                              (l[41] = [
                                o('code', null, "'square' | 'circle'", -1),
                              ])
                          ),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () =>
                              l[42] ||
                              (l[42] = [o('code', null, "'square'", -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    n(s, null, {
                      default: t(() => [
                        n(e, null, {
                          default: t(() => l[43] || (l[43] = [u('size')])),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () =>
                              l[44] ||
                              (l[44] = [u('The size of the shape skeleton')])
                          ),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () =>
                              l[45] ||
                              (l[45] = [
                                o(
                                  'code',
                                  null,
                                  "'small' | 'medium' | 'large'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        n(e, null, {
                          default: t(
                            () =>
                              l[46] ||
                              (l[46] = [o('code', null, "'medium'", -1)])
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
const E = T(I, [['render', M]]);
export { E as default };
