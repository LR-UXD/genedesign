import {
  _ as A,
  d as w,
  u as B,
  r as a,
  o as C,
  c as P,
  w as n,
  e,
  a as l,
  b as u,
  m as T,
} from './index.9c61ea88.js';
import { D as x, a as E } from './custom.3241b16a.js';

const M = w({
  name: 'ArcoMain',
  components: { DemoBasic: x, DemoCustom: E },
  setup() {
    const { locale: s } = B();
    const t = {
      meta: { type: 'Component', category: 'Other' },
      title: 'BackTop',
      description: 'A button to return to the top with one click.',
    };
    const i = (f, p) => (s.value === 'zh-CN' ? f : p);
    return {
      locale: s,
      data: t,
      changelog: typeof _changelog === 'undefined' ? void 0 : _changelog,
      getMessage: i,
    };
  },
});
function N(s, t, i, m, f, p) {
  const g = a('demo-basic');
  const _ = a('demo-custom');
  const b = a('anchor-head');
  const r = a('a-th');
  const d = a('a-tr');
  const y = a('a-thead');
  const o = a('a-td');
  const k = a('a-tbody');
  const v = a('a-table');
  const D = a('arco-article');
  return (
    C(),
    P(
      D,
      T(s.data, { changelog: s.changelog }),
      {
        default: n(() => [
          t[22] ||
            (t[22] = e(
              'p',
              null,
              [e('em', null, 'Auto translate by google.')],
              -1
            )),
          l(g),
          l(_),
          l(
            b,
            { level: '2', href: 'API' },
            { default: n(() => t[0] || (t[0] = [u('API')])), _: 1 }
          ),
          t[23] ||
            (t[23] = e(
              'h3',
              { id: 'back-top Props' },
              [e('code', null, '<back-top>'), u(' Props')],
              -1
            )),
          l(
            v,
            { class: 'component-api-table' },
            {
              default: n(() => [
                t[21] ||
                  (t[21] = e(
                    'colgroup',
                    null,
                    [e('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                l(y, null, {
                  default: n(() => [
                    l(d, null, {
                      default: n(() => [
                        l(r, null, {
                          default: n(() => t[1] || (t[1] = [u('Attribute')])),
                          _: 1,
                        }),
                        l(r, null, {
                          default: n(() => t[2] || (t[2] = [u('Description')])),
                          _: 1,
                        }),
                        l(r, null, {
                          default: n(() => t[3] || (t[3] = [u('Type')])),
                          _: 1,
                        }),
                        l(r, null, {
                          default: n(() => t[4] || (t[4] = [u('Default')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                l(k, null, {
                  default: n(() => [
                    l(d, null, {
                      default: n(() => [
                        l(o, null, {
                          default: n(
                            () => t[5] || (t[5] = [u('visible-height')])
                          ),
                          _: 1,
                        }),
                        l(o, null, {
                          default: n(
                            () =>
                              t[6] ||
                              (t[6] = [
                                u(
                                  'Display the trigger scroll height of the back to top button'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        l(o, null, {
                          default: n(
                            () =>
                              t[7] || (t[7] = [e('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        l(o, null, {
                          default: n(
                            () => t[8] || (t[8] = [e('code', null, '200', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(d, null, {
                      default: n(() => [
                        l(o, null, {
                          default: n(
                            () => t[9] || (t[9] = [u('target-container')])
                          ),
                          _: 1,
                        }),
                        l(o, null, {
                          default: n(
                            () =>
                              t[10] ||
                              (t[10] = [u('Scroll event listener container')])
                          ),
                          _: 1,
                        }),
                        l(o, null, {
                          default: n(
                            () =>
                              t[11] ||
                              (t[11] = [
                                e('code', null, 'string | HTMLElement', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        l(o, null, {
                          default: n(
                            () => t[12] || (t[12] = [e('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(d, null, {
                      default: n(() => [
                        l(o, null, {
                          default: n(() => t[13] || (t[13] = [u('easing')])),
                          _: 1,
                        }),
                        l(o, null, {
                          default: n(
                            () =>
                              t[14] ||
                              (t[14] = [
                                u(
                                  'Easing mode of scrolling animation, refer to '
                                ),
                                e(
                                  'a',
                                  {
                                    class: 'link',
                                    href: 'https://github.com/PengJiyuan/b-tween',
                                  },
                                  'BTween',
                                  -1
                                ),
                                u(' for optional values'),
                              ])
                          ),
                          _: 1,
                        }),
                        l(o, null, {
                          default: n(
                            () =>
                              t[15] || (t[15] = [e('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        l(o, null, {
                          default: n(
                            () =>
                              t[16] ||
                              (t[16] = [e('code', null, "'quartOut'", -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    l(d, null, {
                      default: n(() => [
                        l(o, null, {
                          default: n(() => t[17] || (t[17] = [u('duration')])),
                          _: 1,
                        }),
                        l(o, null, {
                          default: n(
                            () =>
                              t[18] ||
                              (t[18] = [u('Duration of scroll animation')])
                          ),
                          _: 1,
                        }),
                        l(o, null, {
                          default: n(
                            () =>
                              t[19] || (t[19] = [e('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        l(o, null, {
                          default: n(
                            () =>
                              t[20] || (t[20] = [e('code', null, '200', -1)])
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
const V = A(M, [['render', N]]);
export { V as default };
