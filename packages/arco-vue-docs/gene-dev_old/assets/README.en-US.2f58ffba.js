import {
  _ as I,
  d as M,
  u as H,
  r as f,
  o as R,
  c as G,
  w as t,
  e as d,
  a as e,
  b as u,
  m as $,
} from './index.9c61ea88.js';
import {
  D as O,
  a as U,
  b as j,
  c as q,
  d as J,
  e as Q,
  f as X,
  g as Y,
  h as Z,
  i as _,
  j as h,
  k as c,
  l as ll,
  m as el,
  n as tl,
  o as nl,
} from './field-names.d7647b84.js';
import './index.9043c5e0.js';
import './index.9d7f3274.js';

const b = [
  {
    version: '2.56.0',
    date: '2024-07-26',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>fix tree node folding animation (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/3234">#3234</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.55.1',
    date: '2024-03-29',
    list: [
      {
        type: 'style',
        typeText: '\u{1F485} Style',
        list: [
          `<p>fix scrollHeight calculation exception problem (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/3044">#3044</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.55.0',
    date: '2024-03-15',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>The <code>title</code> slot has a new <code>title</code> parameter (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/3024">#3024</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.54.6',
    date: '2024-03-01',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>resolve invalid property name console warning issue (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2995">#2995</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  { version: '2.54.3', date: '2024-01-19', list: [], extra: [] },
  {
    version: '2.45.0',
    date: '2023-04-07',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>add data-level and data-key attributes to tree nodes (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2192">#2192</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.44.2',
    date: '2023-03-17',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>adjust the emit order of select and update:selectedKeys, check and update:checkedKeys (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2228">#2228</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.34.0',
    date: '2022-07-29',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>Add node status to slot (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1469">#1469</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.33.0',
    date: '2022-07-08',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem of filtering data for processing in the subtree expansion animation (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1397">#1397</a>)</p>
`,
          `<p>Fix the problem of setting defaultExpandSelected invalid (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1362">#1362</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.32.0',
    date: '2022-06-24',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>check on the node in the half-selected state have a wrong result (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1331">#1331</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.27.0',
    date: '2022-05-13',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p><code>checkable</code> supports configuration via function (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1119">#1119</a>)</p>
`,
          `<p><code>selectable</code> supports configuration via function (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1119">#1119</a>)</p>
`,
          `<p>Added property <code>actionOnNodeClick</code>, which can be used to enable the function: click on a node to trigger expansion (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1119">#1119</a>)</p>
`,
        ],
      },
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>expandAll failed when the type of key is number (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1113">#1113</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.25.0',
    date: '2022-04-22',
    list: [
      {
        type: 'enhancement',
        typeText: '\u{1F48E} Enhancement',
        list: [
          `<p>When calling a method to operate a single node, add the target node information in the callback parameter (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1021">#1021</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.24.0',
    date: '2022-04-15',
    list: [
      {
        type: 'typescript',
        typeText: '\u{1F18E} TypeScript',
        list: [
          `<p>upgrate <code>FieldNames</code> to <code>TreeFieldNames</code> (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/977">#977</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.21.0',
    date: '2022-03-25',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>add property <code>onlyCheckLeaf </code> (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/876">#876</a>)</p>
`,
          `<p>support to turn off expand transition animation (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/867">#867</a>)</p>
`,
        ],
      },
      {
        type: 'style',
        typeText: '\u{1F485} Style',
        list: [
          `<p>fix the connection line is displayed incorrectly (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/865">#865</a>)</p>
`,
        ],
      },
      {
        type: 'typescript',
        typeText: '\u{1F18E} TypeScript',
        list: [
          `<p>Add the custom icon field of filednames (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/848">#848</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.20.1',
    date: '2022-03-21',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem that the expansion event name is wrong in the new version (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/853">#853</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.20.0',
    date: '2022-03-18',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>add instance method to tree component (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/837">#837</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.19.0',
    date: '2022-03-11',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>support for setting half-checked nodes (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/809">#809</a>)</p>
`,
          `<p>add some methods in instance: <code>getCheckedNodes</code> <code>getSelectedNodes</code> <code>getExpandedNodes</code> <code>getHalfCheckedNodes</code> (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/809">#809</a>)</p>
`,
        ],
      },
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem of component rendering error when the node cannot be found (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/800">#800</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.18.0-beta.2',
    date: '2022-02-25',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>Add slot <code>icon</code> for customizing node icon globally (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/710">#710</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.9.0',
    date: '2021-12-03',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>add prop default-expand-selected default-expand-checked auto-expand-parent (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/322">#322</a>)</p>
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
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Update checked keys after load more (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/206">#206</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.7.0',
    date: '2021-11-26',
    list: [
      {
        type: 'style',
        typeText: '\u{1F485} Style',
        list: [
          `<p>let the content of tree node centerd in vertical (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/260">#260</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.4.0',
    date: '2021-11-17',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p><code>key</code> support <code>number</code> (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/169">#169</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.3.0',
    date: '2021-11-12',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem that the setting of <code>default-checked-keys</code> is invalid (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/131">#131</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const ul = M({
  name: 'ArcoMain',
  components: {
    DemoBasic: O,
    DemoBlockNode: U,
    DemoMultiple: j,
    DemoCheckable: q,
    DemoControl: J,
    DemoLoadMore: Q,
    DemoDraggable: X,
    DemoCheckedStrategy: Y,
    DemoShowLine: Z,
    DemoSize: _,
    DemoNodeIcon: h,
    DemoRenderExtra: c,
    DemoIcons: ll,
    DemoVirtual: el,
    DemoSearch: tl,
    DemoFieldNames: nl,
  },
  setup() {
    const { locale: p } = H();
    return {
      locale: p,
      data: {
        meta: { type: 'Component', category: 'Data Display' },
        title: 'Tree',
        description:
          'For content with many levels, such as folders, catalogs, and organizational structures, the tree can clearly show their hierarchical relationship, and has interactive functions such as expanding, collapsing, and selecting.',
      },
      changelog: typeof b === 'undefined' ? void 0 : b,
      getMessage: (g, m) => (p.value === 'zh-CN' ? g : m),
    };
  },
});
function dl(p, l, y, x, g, m) {
  const k = f('demo-basic');
  const v = f('demo-block-node');
  const T = f('demo-multiple');
  const N = f('demo-checkable');
  const D = f('demo-control');
  const w = f('demo-load-more');
  const S = f('demo-draggable');
  const C = f('demo-checked-strategy');
  const F = f('demo-show-line');
  const A = f('demo-size');
  const W = f('demo-node-icon');
  const E = f('demo-render-extra');
  const P = f('demo-icons');
  const V = f('demo-virtual');
  const L = f('demo-search');
  const B = f('demo-field-names');
  const K = f('anchor-head');
  const s = f('a-th');
  const o = f('a-tr');
  const i = f('a-thead');
  const n = f('a-td');
  const r = f('a-tbody');
  const a = f('a-table');
  const z = f('arco-article');
  return (
    R(),
    G(
      z,
      $(p.data, { changelog: p.changelog }),
      {
        default: t(() => [
          l[365] ||
            (l[365] = d(
              'p',
              null,
              [d('em', null, 'Auto translate by google.')],
              -1
            )),
          e(k),
          e(v),
          e(T),
          e(N),
          e(D),
          e(w),
          e(S),
          e(C),
          e(F),
          e(A),
          e(W),
          e(E),
          e(P),
          e(V),
          e(L),
          e(B),
          e(
            K,
            { level: '2', href: 'API' },
            { default: t(() => l[0] || (l[0] = [u('API')])), _: 1 }
          ),
          l[366] ||
            (l[366] = d(
              'h3',
              { id: 'tree Props' },
              [d('code', null, '<tree>'), u(' Props')],
              -1
            )),
          e(
            a,
            { class: 'component-api-table' },
            {
              default: t(() => [
                l[125] ||
                  (l[125] = d(
                    'colgroup',
                    null,
                    [d('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                e(i, null, {
                  default: t(() => [
                    e(o, null, {
                      default: t(() => [
                        e(s, null, {
                          default: t(() => l[1] || (l[1] = [u('Attribute')])),
                          _: 1,
                        }),
                        e(s, null, {
                          default: t(() => l[2] || (l[2] = [u('Description')])),
                          _: 1,
                        }),
                        e(s, null, {
                          default: t(() => l[3] || (l[3] = [u('Type')])),
                          _: 1,
                        }),
                        e(s, null, {
                          default: t(() => l[4] || (l[4] = [u('Default')])),
                          _: 1,
                        }),
                        e(s, null, {
                          default: t(() => l[5] || (l[5] = [u('version')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                e(r, null, {
                  default: t(() => [
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(() => l[6] || (l[6] = [u('size')])),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(() => l[7] || (l[7] = [u('Size')])),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[8] ||
                              (l[8] = [
                                d(
                                  'code',
                                  null,
                                  "'mini' | 'small' | 'medium' | 'large'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[9] || (l[9] = [d('code', null, "'medium'", -1)])
                          ),
                          _: 1,
                        }),
                        e(n),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () => l[10] || (l[10] = [u('block-node')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[11] ||
                              (l[11] = [u('Whether the node occupies a row')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[12] ||
                              (l[12] = [d('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[13] || (l[13] = [d('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        e(n),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () => l[14] || (l[14] = [u('default-expand-all')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[15] ||
                              (l[15] = [
                                u(
                                  'Whether to expand the parent node by default'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[16] ||
                              (l[16] = [d('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[17] || (l[17] = [d('code', null, 'true', -1)])
                          ),
                          _: 1,
                        }),
                        e(n),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(() => l[18] || (l[18] = [u('multiple')])),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[19] ||
                              (l[19] = [
                                u('Whether to support multiple selection'),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[20] ||
                              (l[20] = [d('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[21] || (l[21] = [d('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        e(n),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(() => l[22] || (l[22] = [u('checkable')])),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[23] ||
                              (l[23] = [
                                u(
                                  'Whether to add a checkbox before the node, function format is supported since '
                                ),
                                d('code', null, '2.27.0', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[24] ||
                              (l[24] = [
                                d(
                                  'code',
                                  null,
                                  'boolean| (( node: TreeNodeData, info: { level: number; isLeaf: boolean; } ) => boolean)',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[25] || (l[25] = [d('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        e(n),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () => l[26] || (l[26] = [u('selectable')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[27] ||
                              (l[27] = [
                                u(
                                  'Whether to support selection, function format is supported since '
                                ),
                                d('code', null, '2.27.0', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[28] ||
                              (l[28] = [
                                d(
                                  'code',
                                  null,
                                  'boolean| (( node: TreeNodeData, info: { level: number; isLeaf: boolean; } ) => boolean)',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[29] || (l[29] = [d('code', null, 'true', -1)])
                          ),
                          _: 1,
                        }),
                        e(n),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () => l[30] || (l[30] = [u('check-strictly')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[31] ||
                              (l[31] = [
                                u(
                                  'Whether to cancel the parent-child node association'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[32] ||
                              (l[32] = [d('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[33] || (l[33] = [d('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        e(n),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () => l[34] || (l[34] = [u('checked-strategy')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[35] ||
                              (l[35] = [
                                u('Customized backfill method '),
                                d('br', null, null, -1),
                                u(' all: return all selected nodes '),
                                d('br', null, null, -1),
                                u(
                                  ' parent: return only parent node when both parent and child nodes are selected '
                                ),
                                d('br', null, null, -1),
                                u(' child: return only child nodes'),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[36] ||
                              (l[36] = [
                                d(
                                  'code',
                                  null,
                                  "'all' | 'parent' | 'child'",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[37] || (l[37] = [d('code', null, "'all'", -1)])
                          ),
                          _: 1,
                        }),
                        e(n),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () =>
                              l[38] || (l[38] = [u('default-selected-keys')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[39] ||
                              (l[39] = [u('Tree node selected by default')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[40] ||
                              (l[40] = [
                                d('code', null, 'Array<string | number>', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () => l[41] || (l[41] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        e(n),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () =>
                              l[42] ||
                              (l[42] = [
                                u('selected-keys '),
                                d('strong', null, '(v-model)', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () => l[43] || (l[43] = [u('Selected tree node')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[44] ||
                              (l[44] = [
                                d('code', null, 'Array<string | number>', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () => l[45] || (l[45] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        e(n),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () => l[46] || (l[46] = [u('default-checked-keys')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[47] ||
                              (l[47] = [
                                u(
                                  'Tree node with checkbox selected by default'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[48] ||
                              (l[48] = [
                                d('code', null, 'Array<string | number>', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () => l[49] || (l[49] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        e(n),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () =>
                              l[50] ||
                              (l[50] = [
                                u('checked-keys '),
                                d('strong', null, '(v-model)', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[51] ||
                              (l[51] = [u('Tree node with check box selected')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[52] ||
                              (l[52] = [
                                d('code', null, 'Array<string | number>', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () => l[53] || (l[53] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        e(n),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () =>
                              l[54] || (l[54] = [u('default-expanded-keys')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[55] ||
                              (l[55] = [u('Nodes expanded by default')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[56] ||
                              (l[56] = [
                                d('code', null, 'Array<string | number>', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () => l[57] || (l[57] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        e(n),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () =>
                              l[58] ||
                              (l[58] = [
                                u('expanded-keys '),
                                d('strong', null, '(v-model)', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () => l[59] || (l[59] = [u('Expanded node')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[60] ||
                              (l[60] = [
                                d('code', null, 'Array<string | number>', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () => l[61] || (l[61] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        e(n),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(() => l[62] || (l[62] = [u('data')])),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[63] ||
                              (l[63] = [
                                u('Pass in '),
                                d('code', null, 'data', -1),
                                u(
                                  ' to generate the corresponding tree structure'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[64] ||
                              (l[64] = [d('code', null, 'TreeNodeData[]', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () => l[65] || (l[65] = [d('code', null, '[]', -1)])
                          ),
                          _: 1,
                        }),
                        e(n),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () => l[66] || (l[66] = [u('field-names')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[67] ||
                              (l[67] = [
                                u('Specify the field name in the node data'),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[68] ||
                              (l[68] = [d('code', null, 'TreeFieldNames', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () => l[69] || (l[69] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        e(n),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(() => l[70] || (l[70] = [u('show-line')])),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[71] ||
                              (l[71] = [
                                u('Whether to display the connection line'),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[72] ||
                              (l[72] = [d('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[73] || (l[73] = [d('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        e(n),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(() => l[74] || (l[74] = [u('load-more')])),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[75] ||
                              (l[75] = [
                                u(
                                  'A callback for loading data asynchronously, returning a '
                                ),
                                d('code', null, 'Promise', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[76] ||
                              (l[76] = [
                                d(
                                  'code',
                                  null,
                                  '(node: TreeNodeData) => Promise<void>',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () => l[77] || (l[77] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        e(n),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(() => l[78] || (l[78] = [u('draggable')])),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[79] ||
                              (l[79] = [u('Whether it can be dragged')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[80] ||
                              (l[80] = [d('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[81] || (l[81] = [d('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        e(n),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () => l[82] || (l[82] = [u('allow-drop')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[83] ||
                              (l[83] = [
                                u(
                                  'Whether to allow release on a node when dragging'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[84] ||
                              (l[84] = [
                                d(
                                  'code',
                                  null,
                                  '(options: { dropNode: TreeNodeData; dropPosition: -1 | 0 | 1;}) => boolean',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () => l[85] || (l[85] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        e(n),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () => l[86] || (l[86] = [u('virtual-list-props')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[87] ||
                              (l[87] = [
                                u(
                                  'Pass virtual list properties, pass in this parameter to turn on virtual scrolling, '
                                ),
                                d(
                                  'a',
                                  { class: 'link', href: '#VirtualListProps' },
                                  'VirtualListProps',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[88] ||
                              (l[88] = [
                                d('code', null, 'VirtualListProps', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () => l[89] || (l[89] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        e(n),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () =>
                              l[90] || (l[90] = [u('default-expand-selected')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[91] ||
                              (l[91] = [
                                u(
                                  'Whether to expand the parent node of the selected node by default'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[92] ||
                              (l[92] = [d('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[93] || (l[93] = [d('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(() => l[94] || (l[94] = [u('2.9.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () =>
                              l[95] || (l[95] = [u('default-expand-checked')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[96] ||
                              (l[96] = [
                                u(
                                  'Whether to expand the parent node of the checked node by default'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[97] ||
                              (l[97] = [d('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[98] || (l[98] = [d('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(() => l[99] || (l[99] = [u('2.9.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () => l[100] || (l[100] = [u('auto-expand-parent')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[101] ||
                              (l[101] = [
                                u(
                                  'Whether to automatically expand the parent node of the expanded node'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[102] ||
                              (l[102] = [d('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[103] || (l[103] = [d('code', null, 'true', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(() => l[104] || (l[104] = [u('2.9.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () =>
                              l[105] ||
                              (l[105] = [
                                u('half-checked-keys '),
                                d('strong', null, '(v-model)', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[106] ||
                              (l[106] = [
                                u(
                                  'The keys of half checked. Only valid when checkable and checkStrictly'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[107] ||
                              (l[107] = [
                                d('code', null, 'Array<string | number>', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[108] || (l[108] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(() => l[109] || (l[109] = [u('2.19.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () => l[110] || (l[110] = [u('only-check-leaf')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[111] ||
                              (l[111] = [
                                u(
                                  'When enabled, checkedKeys is only for checked leaf nodes, and the status of the parent node is determined by the child node.(Only valid when checkable and checkStrictly is false)'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[112] ||
                              (l[112] = [d('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[113] ||
                              (l[113] = [d('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(() => l[114] || (l[114] = [u('2.21.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () => l[115] || (l[115] = [u('animation')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[116] ||
                              (l[116] = [
                                u(
                                  'Whether to enable expand transition animation'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[117] ||
                              (l[117] = [d('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[118] || (l[118] = [d('code', null, 'true', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(() => l[119] || (l[119] = [u('2.21.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () =>
                              l[120] || (l[120] = [u('action-on-node-click')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[121] ||
                              (l[121] = [
                                u(
                                  'The action triggered when the node is clicked'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[122] ||
                              (l[122] = [d('code', null, "'expand'", -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[123] || (l[123] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(() => l[124] || (l[124] = [u('2.27.0')])),
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
          l[367] ||
            (l[367] = d(
              'h3',
              { id: 'tree Events' },
              [d('code', null, '<tree>'), u(' Events')],
              -1
            )),
          e(
            a,
            { class: 'component-api-table' },
            {
              default: t(() => [
                l[153] ||
                  (l[153] = d(
                    'colgroup',
                    null,
                    [d('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                e(i, null, {
                  default: t(() => [
                    e(o, null, {
                      default: t(() => [
                        e(s, null, {
                          default: t(
                            () => l[126] || (l[126] = [u('Event Name')])
                          ),
                          _: 1,
                        }),
                        e(s, null, {
                          default: t(
                            () => l[127] || (l[127] = [u('Description')])
                          ),
                          _: 1,
                        }),
                        e(s, null, {
                          default: t(
                            () => l[128] || (l[128] = [u('Parameters')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                e(r, null, {
                  default: t(() => [
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(() => l[129] || (l[129] = [u('select')])),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[130] ||
                              (l[130] = [
                                u('Triggered when the tree node is clicked'),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[131] ||
                              (l[131] = [
                                u('selectedKeys: '),
                                d('code', null, 'Array<string | number>', -1),
                                d('br', null, null, -1),
                                u('data: '),
                                d(
                                  'code',
                                  null,
                                  '{ selected?: boolean; selectedNodes: TreeNodeData[]; node?: TreeNodeData; e?: Event; }',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(() => l[132] || (l[132] = [u('check')])),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[133] ||
                              (l[133] = [
                                u(
                                  'Triggered when the tree node checkbox is clicked. '
                                ),
                                d('code', null, 'halfCheckedKeys', -1),
                                u(' and '),
                                d('code', null, 'halfCheckedNodes', -1),
                                u(' support from '),
                                d('code', null, '2.19.0', -1),
                                u('.'),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[134] ||
                              (l[134] = [
                                u('checkedKeys: '),
                                d('code', null, 'Array<string | number>', -1),
                                d('br', null, null, -1),
                                u('data: '),
                                d(
                                  'code',
                                  null,
                                  '{ checked?: boolean; checkedNodes: TreeNodeData[]; node?: TreeNodeData; e?: Event; halfCheckedKeys: (string | number)[]; halfCheckedNodes: TreeNodeData[]; }',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(() => l[135] || (l[135] = [u('expand')])),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () => l[136] || (l[136] = [u('Expand/close')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[137] ||
                              (l[137] = [
                                u('expandKeys: '),
                                d('code', null, 'Array<string | number>', -1),
                                d('br', null, null, -1),
                                u('data: '),
                                d(
                                  'code',
                                  null,
                                  '{ expanded?: boolean; expandNodes: TreeNodeData[]; node?: TreeNodeData; e?: Event; }',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () => l[138] || (l[138] = [u('drag-start')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[139] || (l[139] = [u('Node starts dragging')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[140] ||
                              (l[140] = [
                                u('ev: '),
                                d('code', null, 'DragEvent', -1),
                                d('br', null, null, -1),
                                u('node: '),
                                d('code', null, 'TreeNodeData', -1),
                              ])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () => l[141] || (l[141] = [u('drag-end')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () => l[142] || (l[142] = [u('Node end drag')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[143] ||
                              (l[143] = [
                                u('ev: '),
                                d('code', null, 'DragEvent', -1),
                                d('br', null, null, -1),
                                u('node: '),
                                d('code', null, 'TreeNodeData', -1),
                              ])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () => l[144] || (l[144] = [u('drag-over')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[145] ||
                              (l[145] = [
                                u(
                                  'The node is dragged to the releasable target'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[146] ||
                              (l[146] = [
                                u('ev: '),
                                d('code', null, 'DragEvent', -1),
                                d('br', null, null, -1),
                                u('node: '),
                                d('code', null, 'TreeNodeData', -1),
                              ])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () => l[147] || (l[147] = [u('drag-leave')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[148] ||
                              (l[148] = [
                                u('Node leaves to release the target'),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[149] ||
                              (l[149] = [
                                u('ev: '),
                                d('code', null, 'DragEvent', -1),
                                d('br', null, null, -1),
                                u('node: '),
                                d('code', null, 'TreeNodeData', -1),
                              ])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(() => l[150] || (l[150] = [u('drop')])),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[151] ||
                              (l[151] = [
                                u(
                                  'The node is released on a releasable target'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[152] ||
                              (l[152] = [
                                u('data: '),
                                d(
                                  'code',
                                  null,
                                  '{ e: DragEvent; dragNode: TreeNodeData; dropNode: TreeNodeData; dropPosition: number; }',
                                  -1
                                ),
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
          l[368] ||
            (l[368] = d(
              'h3',
              { id: 'tree Methods' },
              [d('code', null, '<tree>'), u(' Methods')],
              -1
            )),
          e(
            a,
            { class: 'component-api-table' },
            {
              default: t(() => [
                l[213] ||
                  (l[213] = d(
                    'colgroup',
                    null,
                    [d('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                e(i, null, {
                  default: t(() => [
                    e(o, null, {
                      default: t(() => [
                        e(s, null, {
                          default: t(() => l[154] || (l[154] = [u('Method')])),
                          _: 1,
                        }),
                        e(s, null, {
                          default: t(
                            () => l[155] || (l[155] = [u('Description')])
                          ),
                          _: 1,
                        }),
                        e(s, null, {
                          default: t(
                            () => l[156] || (l[156] = [u('Parameters')])
                          ),
                          _: 1,
                        }),
                        e(s, null, {
                          default: t(() => l[157] || (l[157] = [u('Return')])),
                          _: 1,
                        }),
                        e(s, null, {
                          default: t(() => l[158] || (l[158] = [u('version')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                e(r, null, {
                  default: t(() => [
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () => l[159] || (l[159] = [u('scrollIntoView')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[160] ||
                              (l[160] = [
                                u('Virtual list scroll to an element'),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[161] ||
                              (l[161] = [
                                u('options: '),
                                d(
                                  'code',
                                  null,
                                  "{ index?: number; key?: number | string; align: 'auto' | 'top' | 'bottom'}",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(() => l[162] || (l[162] = [u('-')])),
                          _: 1,
                        }),
                        e(n),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () => l[163] || (l[163] = [u('getSelectedNodes')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () => l[164] || (l[164] = [u('Get selected nodes')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(() => l[165] || (l[165] = [u('-')])),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () => l[166] || (l[166] = [u('TreeNodeData[]')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(() => l[167] || (l[167] = [u('2.19.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () => l[168] || (l[168] = [u('getCheckedNodes')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[169] ||
                              (l[169] = [
                                u('Get checked nodes. Supports passing in '),
                                d('code', null, 'checkedStrategy', -1),
                                u(
                                  ', if not passed, the configuration of the component is taken.'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[170] ||
                              (l[170] = [
                                u('options: '),
                                d(
                                  'code',
                                  null,
                                  "checkedStrategy?: 'all' | 'parent' | 'child'; includeHalfChecked?: boolean;",
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () => l[171] || (l[171] = [u('TreeNodeData[]')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(() => l[172] || (l[172] = [u('2.19.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () =>
                              l[173] || (l[173] = [u('getHalfCheckedNodes')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[174] || (l[174] = [u('Get half checked nodes')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(() => l[175] || (l[175] = [u('-')])),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () => l[176] || (l[176] = [u('TreeNodeData[]')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(() => l[177] || (l[177] = [u('2.19.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () => l[178] || (l[178] = [u('getExpandedNodes')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () => l[179] || (l[179] = [u('Get expanded nodes')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(() => l[180] || (l[180] = [u('-')])),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () => l[181] || (l[181] = [u('TreeNodeData[]')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(() => l[182] || (l[182] = [u('2.19.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () => l[183] || (l[183] = [u('checkAll')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[184] ||
                              (l[184] = [
                                u('Set the checkbox state of all nodes'),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[185] ||
                              (l[185] = [
                                u('checked: '),
                                d('code', null, 'boolean', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(() => l[186] || (l[186] = [u('-')])),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(() => l[187] || (l[187] = [u('2.20.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () => l[188] || (l[188] = [u('checkNode')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[189] ||
                              (l[189] = [
                                u(
                                  'Sets the checkbox state of the specified node'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[190] ||
                              (l[190] = [
                                u('key: '),
                                d(
                                  'code',
                                  null,
                                  'TreeNodeKey | TreeNodeKey[]',
                                  -1
                                ),
                                d('br', null, null, -1),
                                u('checked: '),
                                d('code', null, 'boolean', -1),
                                d('br', null, null, -1),
                                u('onlyCheckLeaf: '),
                                d('code', null, 'boolean', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(() => l[191] || (l[191] = [u('-')])),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[192] ||
                              (l[192] = [
                                u('2.20.0\uFF0ConlyCheckLeaf from 2.21.0'),
                              ])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () => l[193] || (l[193] = [u('selectAll')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[194] ||
                              (l[194] = [
                                u('Set the selected state of all nodes'),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[195] ||
                              (l[195] = [
                                u('selected: '),
                                d('code', null, 'boolean', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(() => l[196] || (l[196] = [u('-')])),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(() => l[197] || (l[197] = [u('2.20.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () => l[198] || (l[198] = [u('selectNode')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[199] ||
                              (l[199] = [
                                u(
                                  'Sets the selected state of the specified node'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[200] ||
                              (l[200] = [
                                u('key: '),
                                d(
                                  'code',
                                  null,
                                  'TreeNodeKey | TreeNodeKey[]',
                                  -1
                                ),
                                d('br', null, null, -1),
                                u('selected: '),
                                d('code', null, 'boolean', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(() => l[201] || (l[201] = [u('-')])),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(() => l[202] || (l[202] = [u('2.20.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () => l[203] || (l[203] = [u('expandAll')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[204] ||
                              (l[204] = [
                                u('Set the expanded state of all nodes'),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[205] ||
                              (l[205] = [
                                u('expanded: '),
                                d('code', null, 'boolean', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(() => l[206] || (l[206] = [u('-')])),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(() => l[207] || (l[207] = [u('2.20.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () => l[208] || (l[208] = [u('expandNode')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[209] ||
                              (l[209] = [
                                u(
                                  'Sets the expanded state of the specified node'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[210] ||
                              (l[210] = [
                                u('key: '),
                                d(
                                  'code',
                                  null,
                                  'TreeNodeKey | TreeNodeKey[]',
                                  -1
                                ),
                                d('br', null, null, -1),
                                u('expanded: '),
                                d('code', null, 'boolean', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(() => l[211] || (l[211] = [u('-')])),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(() => l[212] || (l[212] = [u('2.20.0')])),
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
          l[369] ||
            (l[369] = d(
              'h3',
              { id: 'tree Slots' },
              [d('code', null, '<tree>'), u(' Slots')],
              -1
            )),
          e(
            a,
            { class: 'component-api-table' },
            {
              default: t(() => [
                l[237] ||
                  (l[237] = d(
                    'colgroup',
                    null,
                    [d('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                e(i, null, {
                  default: t(() => [
                    e(o, null, {
                      default: t(() => [
                        e(s, null, {
                          default: t(
                            () => l[214] || (l[214] = [u('Slot Name')])
                          ),
                          _: 1,
                        }),
                        e(s, null, {
                          default: t(
                            () => l[215] || (l[215] = [u('Description')])
                          ),
                          _: 1,
                        }),
                        e(s, null, {
                          default: t(
                            () => l[216] || (l[216] = [u('Parameters')])
                          ),
                          _: 1,
                        }),
                        e(s, null, {
                          default: t(() => l[217] || (l[217] = [u('version')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                e(r, null, {
                  default: t(() => [
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(() => l[218] || (l[218] = [u('title')])),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(() => l[219] || (l[219] = [u('Title')])),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[220] ||
                              (l[220] = [
                                u('title: '),
                                d('code', null, 'string', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(() => l[221] || (l[221] = [u('extra')])),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[222] ||
                              (l[222] = [u('Render additional node content')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(() => l[223] || (l[223] = [u('-')])),
                          _: 1,
                        }),
                        e(n),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () => l[224] || (l[224] = [u('drag-icon')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () => l[225] || (l[225] = [u('Custom drag icon')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[226] ||
                              (l[226] = [
                                u('node: '),
                                d('code', null, 'TreeNodeData', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () => l[227] || (l[227] = [u('loading-icon')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[228] || (l[228] = [u('Custom loading icon')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(() => l[229] || (l[229] = [u('-')])),
                          _: 1,
                        }),
                        e(n),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () => l[230] || (l[230] = [u('switcher-icon')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[231] || (l[231] = [u('Custom switcher icon')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(() => l[232] || (l[232] = [u('-')])),
                          _: 1,
                        }),
                        e(n),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(() => l[233] || (l[233] = [u('icon')])),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () => l[234] || (l[234] = [u('Custom node icon')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[235] ||
                              (l[235] = [
                                u('node: '),
                                d('code', null, 'TreeNodeData', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(() => l[236] || (l[236] = [u('2.18.0')])),
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
          l[370] ||
            (l[370] = d('h3', { id: 'TreeNodeData' }, 'TreeNodeData', -1)),
          e(
            a,
            { class: 'component-api-table' },
            {
              default: t(() => [
                l[294] ||
                  (l[294] = d(
                    'colgroup',
                    null,
                    [d('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                e(i, null, {
                  default: t(() => [
                    e(o, null, {
                      default: t(() => [
                        e(s, null, {
                          default: t(() => l[238] || (l[238] = [u('Name')])),
                          _: 1,
                        }),
                        e(s, null, {
                          default: t(
                            () => l[239] || (l[239] = [u('Description')])
                          ),
                          _: 1,
                        }),
                        e(s, null, {
                          default: t(() => l[240] || (l[240] = [u('Type')])),
                          _: 1,
                        }),
                        e(s, null, {
                          default: t(() => l[241] || (l[241] = [u('Default')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                e(r, null, {
                  default: t(() => [
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(() => l[242] || (l[242] = [u('key')])),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () => l[243] || (l[243] = [u('Unique key')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[244] ||
                              (l[244] = [
                                d('code', null, 'string | number', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[245] || (l[245] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(() => l[246] || (l[246] = [u('title')])),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[247] || (l[247] = [u('The title of the node')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[248] ||
                              (l[248] = [d('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[249] || (l[249] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () => l[250] || (l[250] = [u('selectable')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[251] ||
                              (l[251] = [u('Whether to allow selection')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[252] ||
                              (l[252] = [d('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[253] ||
                              (l[253] = [d('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () => l[254] || (l[254] = [u('disabled')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[255] ||
                              (l[255] = [u('Whether to disable the node')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[256] ||
                              (l[256] = [d('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[257] ||
                              (l[257] = [d('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () => l[258] || (l[258] = [u('disableCheckbox')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[259] ||
                              (l[259] = [u('Whether to disable the checkbox')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[260] ||
                              (l[260] = [d('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[261] ||
                              (l[261] = [d('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () => l[262] || (l[262] = [u('checkable')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[263] ||
                              (l[263] = [u('Whether to show checkbox')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[264] ||
                              (l[264] = [d('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[265] ||
                              (l[265] = [d('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () => l[266] || (l[266] = [u('draggable')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[267] ||
                              (l[267] = [u('Whether it can be dragged')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[268] ||
                              (l[268] = [d('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[269] ||
                              (l[269] = [d('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(() => l[270] || (l[270] = [u('isLeaf')])),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[271] ||
                              (l[271] = [
                                u(
                                  'Whether it is a leaf node. Effective when loading dynamically'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[272] ||
                              (l[272] = [d('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[273] ||
                              (l[273] = [d('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(() => l[274] || (l[274] = [u('icon')])),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () => l[275] || (l[275] = [u('Node icon')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[276] ||
                              (l[276] = [d('code', null, '() => VNode', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[277] || (l[277] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () => l[278] || (l[278] = [u('switcherIcon')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[279] ||
                              (l[279] = [
                                u(
                                  'Custom switcher icon, priority is greater than tree'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[280] ||
                              (l[280] = [d('code', null, '() => VNode', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[281] || (l[281] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () => l[282] || (l[282] = [u('loadingIcon')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[283] ||
                              (l[283] = [
                                u(
                                  'Customize loading icon, priority is greater than tree'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[284] ||
                              (l[284] = [d('code', null, '() => VNode', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[285] || (l[285] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () => l[286] || (l[286] = [u('dragIcon')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[287] ||
                              (l[287] = [
                                u(
                                  'Custom drag icon, priority is greater than tree'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[288] ||
                              (l[288] = [d('code', null, '() => VNode', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[289] || (l[289] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () => l[290] || (l[290] = [u('children')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () => l[291] || (l[291] = [u('Child node')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[292] ||
                              (l[292] = [d('code', null, 'TreeNodeData[]', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[293] || (l[293] = [d('code', null, '-', -1)])
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
          l[371] ||
            (l[371] = d('h3', { id: 'TreeFieldNames' }, 'TreeFieldNames', -1)),
          e(
            a,
            { class: 'component-api-table' },
            {
              default: t(() => [
                l[331] ||
                  (l[331] = d(
                    'colgroup',
                    null,
                    [d('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                e(i, null, {
                  default: t(() => [
                    e(o, null, {
                      default: t(() => [
                        e(s, null, {
                          default: t(() => l[295] || (l[295] = [u('Name')])),
                          _: 1,
                        }),
                        e(s, null, {
                          default: t(
                            () => l[296] || (l[296] = [u('Description')])
                          ),
                          _: 1,
                        }),
                        e(s, null, {
                          default: t(() => l[297] || (l[297] = [u('Type')])),
                          _: 1,
                        }),
                        e(s, null, {
                          default: t(() => l[298] || (l[298] = [u('Default')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                e(r, null, {
                  default: t(() => [
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(() => l[299] || (l[299] = [u('key')])),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[300] ||
                              (l[300] = [
                                u(
                                  'Specify the field name of key in TreeNodeData'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[301] ||
                              (l[301] = [d('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[302] || (l[302] = [d('code', null, 'key', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(() => l[303] || (l[303] = [u('title')])),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[304] ||
                              (l[304] = [
                                u(
                                  'Specify the field name of title in TreeNodeData'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[305] ||
                              (l[305] = [d('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[306] ||
                              (l[306] = [d('code', null, 'title', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () => l[307] || (l[307] = [u('disabled')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[308] ||
                              (l[308] = [
                                u(
                                  'Specify the field name of disabled in TreeNodeData'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[309] ||
                              (l[309] = [d('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[310] ||
                              (l[310] = [d('code', null, 'disabled', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () => l[311] || (l[311] = [u('children')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[312] ||
                              (l[312] = [
                                u(
                                  'Specify the field name of children in TreeNodeData'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[313] ||
                              (l[313] = [d('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[314] ||
                              (l[314] = [d('code', null, 'children', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(() => l[315] || (l[315] = [u('isLeaf')])),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[316] ||
                              (l[316] = [
                                u(
                                  'Specify the field name of isLeaf in TreeNodeData'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[317] ||
                              (l[317] = [d('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[318] ||
                              (l[318] = [d('code', null, 'isLeaf', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () => l[319] || (l[319] = [u('disableCheckbox')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[320] ||
                              (l[320] = [
                                u(
                                  'Specify the field name of disableCheckbox in TreeNodeData'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[321] ||
                              (l[321] = [d('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[322] ||
                              (l[322] = [
                                d('code', null, 'disableCheckbox', -1),
                              ])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () => l[323] || (l[323] = [u('checkable')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[324] ||
                              (l[324] = [
                                u(
                                  'Specify the field name of checkable in TreeNodeData'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[325] ||
                              (l[325] = [d('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[326] ||
                              (l[326] = [d('code', null, 'checkable', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(() => l[327] || (l[327] = [u('icon')])),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[328] ||
                              (l[328] = [
                                u(
                                  'Specify the field name of icon in TreeNodeData'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[329] ||
                              (l[329] = [d('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[330] ||
                              (l[330] = [d('code', null, 'checkable', -1)])
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
          l[372] ||
            (l[372] = d(
              'h3',
              { id: 'VirtualListProps' },
              'VirtualListProps',
              -1
            )),
          e(
            a,
            { class: 'component-api-table' },
            {
              default: t(() => [
                l[364] ||
                  (l[364] = d(
                    'colgroup',
                    null,
                    [d('col', { style: { 'min-width': '120px' } })],
                    -1
                  )),
                e(i, null, {
                  default: t(() => [
                    e(o, null, {
                      default: t(() => [
                        e(s, null, {
                          default: t(() => l[332] || (l[332] = [u('Name')])),
                          _: 1,
                        }),
                        e(s, null, {
                          default: t(
                            () => l[333] || (l[333] = [u('Description')])
                          ),
                          _: 1,
                        }),
                        e(s, null, {
                          default: t(() => l[334] || (l[334] = [u('Type')])),
                          _: 1,
                        }),
                        e(s, null, {
                          default: t(() => l[335] || (l[335] = [u('Default')])),
                          _: 1,
                        }),
                        e(s, null, {
                          default: t(() => l[336] || (l[336] = [u('version')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                e(r, null, {
                  default: t(() => [
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(() => l[337] || (l[337] = [u('height')])),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[338] || (l[338] = [u('Viewable area height')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[339] ||
                              (l[339] = [
                                d('code', null, 'number | string', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[340] || (l[340] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        e(n),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () => l[341] || (l[341] = [u('threshold')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[342] ||
                              (l[342] = [
                                u(
                                  'The threshold of the number of elements to enable virtual scrolling. When the number of data is less than the threshold, virtual scrolling will not be enabled.'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[343] ||
                              (l[343] = [d('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[344] || (l[344] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        e(n),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () => l[345] || (l[345] = [u('isStaticItemHeight')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[346] ||
                              (l[346] = [
                                u(
                                  '(Repealed) Is the element height fixed. Version 2.18.0 deprecated, please use '
                                ),
                                d('code', null, 'fixedSize', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[347] ||
                              (l[347] = [d('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[348] ||
                              (l[348] = [d('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        e(n),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () => l[349] || (l[349] = [u('fixedSize')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[350] ||
                              (l[350] = [u('Is the element height fixed.')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[351] ||
                              (l[351] = [d('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[352] ||
                              (l[352] = [d('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(() => l[353] || (l[353] = [u('2.34.1')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(
                            () => l[354] || (l[354] = [u('estimatedSize')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[355] ||
                              (l[355] = [u('Is the element height fixed.')])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[356] ||
                              (l[356] = [d('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[357] || (l[357] = [d('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(() => l[358] || (l[358] = [u('2.34.1')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    e(o, null, {
                      default: t(() => [
                        e(n, null, {
                          default: t(() => l[359] || (l[359] = [u('buffer')])),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[360] ||
                              (l[360] = [
                                u(
                                  'The number of elements mounted in advance outside the boundary of the viewport.'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[361] ||
                              (l[361] = [d('code', null, 'number', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(
                            () =>
                              l[362] || (l[362] = [d('code', null, '10', -1)])
                          ),
                          _: 1,
                        }),
                        e(n, null, {
                          default: t(() => l[363] || (l[363] = [u('2.34.1')])),
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
const rl = I(ul, [['render', dl]]);
export { rl as default };
