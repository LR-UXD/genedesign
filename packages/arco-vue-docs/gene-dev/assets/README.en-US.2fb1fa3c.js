import {
  _ as P,
  d as x,
  u as w,
  r as a,
  o as B,
  c as S,
  w as n,
  e,
  a as t,
  b as o,
  m as $,
} from './index.9c61ea88.js';
import { D as E, a as I, b as M, c as T } from './editor.77c66f52.js';
import './index.0f7a2448.js';
import './index.9043c5e0.js';

const V = x({
  name: 'ArcoMain',
  components: { DemoBasic: E, DemoAlign: I, DemoNest: M, DemoEditor: T },
  setup() {
    const { locale: f } = w();
    const l = {
      meta: { type: 'Component', category: 'Data Display' },
      title: 'Comment',
      description: 'Display a comment.',
    };
    const m = (r, i) => (f.value === 'zh-CN' ? r : i);
    return {
      locale: f,
      data: l,
      changelog: typeof _changelog === 'undefined' ? void 0 : _changelog,
      getMessage: m,
    };
  },
});
function k(f, l, m, y, r, i) {
  const b = a('demo-basic');
  const _ = a('demo-align');
  const A = a('demo-nest');
  const v = a('demo-editor');
  const C = a('anchor-head');
  const s = a('a-th');
  const d = a('a-tr');
  const p = a('a-thead');
  const u = a('a-td');
  const g = a('a-tbody');
  const D = a('a-table');
  const N = a('arco-article');
  return (
    B(),
    S(
      N,
      $(f.data, { changelog: f.changelog }),
      {
        default: n(() => [
          l[45] ||
            (l[45] = e(
              'p',
              null,
              [e('em', null, 'Auto translate by google.')],
              -1
            )),
          t(b),
          t(_),
          t(A),
          t(v),
          t(
            C,
            { level: '2', href: 'API' },
            { default: n(() => l[0] || (l[0] = [o('API')])), _: 1 }
          ),
          l[46] ||
            (l[46] = e(
              'h3',
              { id: 'comment Props' },
              [e('code', null, '<comment>'), o(' Props')],
              -1
            )),
          t(
            D,
            { class: 'component-api-table' },
            {
              default: n(() => [
                l[25] ||
                  (l[25] = e(
                    'colgroup',
                    null,
                    [e('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(p, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(s, null, {
                          default: n(() => l[1] || (l[1] = [o('Attribute')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(() => l[2] || (l[2] = [o('Description')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(() => l[3] || (l[3] = [o('Type')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(() => l[4] || (l[4] = [o('Default')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(g, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[5] || (l[5] = [o('author')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[6] ||
                              (l[6] = [o('Display as the comment author')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[7] || (l[7] = [e('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[8] || (l[8] = [e('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[9] || (l[9] = [o('avatar')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[10] ||
                              (l[10] = [o('Display as the comment avatar')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[11] || (l[11] = [e('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[12] || (l[12] = [e('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[13] || (l[13] = [o('content')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[14] ||
                              (l[14] = [o('The content of the comment')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[15] || (l[15] = [e('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[16] || (l[16] = [e('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[17] || (l[17] = [o('datetime')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[18] ||
                              (l[18] = [o('Display as the comment datetime')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[19] || (l[19] = [e('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[20] || (l[20] = [e('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[21] || (l[21] = [o('align')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[22] ||
                              (l[22] = [
                                o('Alignment of '),
                                e('code', null, 'datetime', -1),
                                o(' and '),
                                e('code', null, 'actions', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[23] ||
                              (l[23] = [
                                e(
                                  'code',
                                  null,
                                  `'left' | 'right' | { datetime?: "left" | "right"; actions?: "left" | "right" }`,
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () =>
                              l[24] || (l[24] = [e('code', null, "'left'", -1)])
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
          l[47] ||
            (l[47] = e(
              'h3',
              { id: 'comment Slots' },
              [e('code', null, '<comment>'), o(' Slots')],
              -1
            )),
          t(
            D,
            { class: 'component-api-table' },
            {
              default: n(() => [
                l[44] ||
                  (l[44] = e(
                    'colgroup',
                    null,
                    [e('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                t(p, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(s, null, {
                          default: n(() => l[26] || (l[26] = [o('Slot Name')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(
                            () => l[27] || (l[27] = [o('Description')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(
                            () => l[28] || (l[28] = [o('Parameters')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(g, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[29] || (l[29] = [o('avatar')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(() => l[30] || (l[30] = [o('Avatar')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(() => l[31] || (l[31] = [o('-')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[32] || (l[32] = [o('author')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[33] || (l[33] = [o('Author name')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(() => l[34] || (l[34] = [o('-')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[35] || (l[35] = [o('datetime')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[36] || (l[36] = [o('Datetime info')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(() => l[37] || (l[37] = [o('-')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[38] || (l[38] = [o('content')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[39] || (l[39] = [o('Comment content')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(() => l[40] || (l[40] = [o('-')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => l[41] || (l[41] = [o('actions')])),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(
                            () => l[42] || (l[42] = [o('Action list')])
                          ),
                          _: 1,
                        }),
                        t(u, null, {
                          default: n(() => l[43] || (l[43] = [o('-')])),
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
const q = P(V, [['render', k]]);
export { q as default };
