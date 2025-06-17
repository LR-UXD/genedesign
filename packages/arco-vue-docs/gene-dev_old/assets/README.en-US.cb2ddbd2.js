import {
  _ as E,
  d as P,
  u as D,
  r as i,
  o as I,
  c as O,
  w as n,
  e as o,
  a as t,
  b as u,
  m as R,
} from './index.9c61ea88.js';
import {
  D as N,
  a as z,
  b as q,
  c as V,
  d as $,
  e as K,
  f as L,
  g as U,
  h as j,
} from './fullscreen.be5aaf5b.js';
import './index.53da8740.js';
import './index.5bc6c633.js';

const b = [
  {
    version: '2.57.0',
    date: '2025-03-10',
    list: [
      {
        type: 'enhancement',
        typeText: '\u{1F48E} Enhancement',
        list: [
          `<p>fix re-throw error in onBeforeOk for proper error handling (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/3407">#3407</a>)</p>
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
        type: 'style',
        typeText: '\u{1F485} Style',
        list: [
          `<p>fix fade-modal transition effect works on enter state (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/3007">#3007</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.50.0',
    date: '2023-08-11',
    list: [
      {
        type: 'enhancement',
        typeText: '\u{1F48E} Enhancement',
        list: [
          `<p>add hide-title prop, support hide title (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2605">#2605</a>)</p>
`,
        ],
      },
      {
        type: 'typescript',
        typeText: '\u{1F18E} TypeScript',
        list: [
          `<p>Complete missing properties in ModalConfig (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2628">#2628</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.50.0',
    date: '2023-8-1',
    list: [
      {
        type: 'enhancement',
        typeText: '\u{1F48E} Enhancement',
        list: [
          `<p>add hide-title prop, support hide title (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2605">#2605</a>)</p>
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
        type: 'attention',
        typeText: '\u26A0\uFE0F Important Attention',
        list: [
          `<p>fix modal confirm missing warning icon in the title (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2465">#2465</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.46.2',
    date: '2023-05-31',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>fix can not set width attribute (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2467">#2467</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.46.1',
    date: '2023-05-26',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>fix modal drag error when define top prop (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2446">#2446</a>)</p>
`,
          `<p>Fix the problem that there is no full screen when <code>width</code> and <code>fullscreen</code> are set at the same time (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2441">#2441</a>)</p>
`,
        ],
      },
      {
        type: 'typescript',
        typeText: '\u{1F18E} TypeScript',
        list: [
          `<p>fix onOk &amp; onCancel type error in function call (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2426">#2426</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  { version: '2.45.2', date: '2023-04-21', list: [], extra: [] },
  {
    version: '2.43.2',
    date: '2023-02-24',
    list: [
      {
        type: 'enhancement',
        typeText: '\u{1F48E} Enhancement',
        list: [
          `<p>add update method of function call (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2155">#2155</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  { version: '2.40.0', date: '2022-12-09', list: [], extra: [] },
  {
    version: '2.38.0',
    date: '2022-10-28',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem that z-index does not take effect when custom style (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1796">#1796</a>)</p>
`,
          `<p>Fix the problem that closing does not unload internal components in function calls (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1778">#1778</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.38.0-beta.2',
    date: '2022-10-21',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} \u95EE\u9898\u4FEE\u590D',
        list: [
          `<p><strong>modal:</strong> Fixed the problem that the unloading of incoming subcomponents would not be triggered under the function call</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.38.0-beta.1',
    date: '2022-10-14',
    list: [
      {
        type: 'enhancement',
        typeText: '\u{1F48E} Enhancement',
        list: [
          `<p>Functional calls can set the renderToBody parameter (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1682">#1682</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.37.4',
    date: '2022-09-30',
    list: [
      {
        type: 'enhancement',
        typeText: '\u{1F48E} Enhancement',
        list: [
          `<p>fix modal close problem (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1696">#1696</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.36.1',
    date: '2022-09-09',
    list: [
      {
        type: 'enhancement',
        typeText: '\u{1F48E} Enhancement',
        list: [
          `<p>The on-before-ok property supports function returning a Promise (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1623">#1623</a>)</p>
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
        type: 'enhancement',
        typeText: '\u{1F48E} Enhancement',
        list: [
          `<p>support hide footer in function call (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1410">#1410</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.33.1',
    date: '2022-07-22',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem that the default title class name is wrong (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1413">#1413</a>)</p>
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
        type: 'style',
        typeText: '\u{1F485} Style',
        list: [
          `<p>Fix the problem that the footer button is not centered (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1391">#1391</a>)</p>
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
          `<p>Fixed the problem that when the modal box exceeds the size of the screen, the position of the modal will be misaligned (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1336">#1336</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.31.0',
    date: '2022-06-17',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>Add bodyClass and bodyStyle (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1303">#1303</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.30.0',
    date: '2022-06-10',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Reset overflow setting on component unmount (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1262">#1262</a>)</p>
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
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem of position offset when opening full screen after dragging (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1070">#1070</a>)</p>
`,
        ],
      },
      {
        type: 'typescript',
        typeText: '\u{1F18E} TypeScript',
        list: [
          `<p>Complete missing properties in ModalConfig (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1120">#1120</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.26.0',
    date: '2022-04-29',
    list: [
      {
        type: 'style',
        typeText: '\u{1F485} Style',
        list: [
          `<p>Add <code>overflow: auto</code> to the body layer (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1030">#1030</a>)</p>
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
          `<p>When closing with <code>esc</code>, only the topmost popup will be closed (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1018">#1018</a>)</p>
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
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>Add animation name attribute (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/985">#985</a>)</p>
`,
        ],
      },
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fixed an issue where the body would not be locked in some cases (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/968">#968</a>)</p>
`,
        ],
      },
      {
        type: 'style',
        typeText: '\u{1F485} Style',
        list: [
          `<p>Fix the issue that the scroll bar flashes when the animation is in full screen (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/985">#985</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.23.0',
    date: '2022-04-08',
    list: [
      {
        type: 'enhancement',
        typeText: '\u{1F48E} Enhancement',
        list: [
          `<p>Fix the problem that the body is not locked when the scroll bar is floating (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/945">#945</a>)</p>
`,
        ],
      },
      {
        type: 'style',
        typeText: '\u{1F485} Style',
        list: [
          `<p>Fix the problem that title-align is left-aligned invalid in simple mode (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/945">#945</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.22.0',
    date: '2022-04-01',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix auto width and drag error when <code>align-center=&quot;false&quot;</code> (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/918">#918</a>)</p>
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
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the bug that the enter key triggers modal display multiple times (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/860">#860</a>)</p>
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
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fixed <code>close</code> function returning wrong in create method (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/840">#840</a>)</p>
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
          `<p>Add <code>draggable</code> property to support draggable (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/802">#802</a>)</p>
`,
          `<p>Added <code>fullscreen</code> property to support full screen display (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/802">#802</a>)</p>
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
        type: 'enhancement',
        typeText: '\u{1F48E} Enhancement',
        list: [
          `<p>Optimize click mask layer off (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/737">#737</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.17.0',
    date: '2022-02-11',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>Added <code>title-align</code> attribute (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/673">#673</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.16.0',
    date: '2022-01-21',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>Added <code>before-open</code> and <code>before-close</code> events (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/628">#628</a>)</p>
`,
        ],
      },
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix style file missing <code>&lt;button&gt;</code> component style reference (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/635">#635</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.15.0',
    date: '2022-01-14',
    list: [
      {
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>Added <code>escToClose</code> property and enabled by default (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/577">#577</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.12.2',
    date: '2021-12-27',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem of invalid modalStyle (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/459">#459</a>)</p>
`,
          `<p>Fix the problem that the flex layout causes vertical centering and incomplete display beyond the height (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/459">#459</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.12.0',
    date: '2021-12-24',
    list: [
      {
        type: 'attention',
        typeText: '\u26A0\uFE0F Important Attention',
        list: [
          `<p>Modify the way the wrapper layer displays modal, and add the <code>width</code> and <code>top</code> attributes (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/454">#454</a>)</p>
`,
        ],
      },
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem that the button content cannot be modified dynamically (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/453">#453</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.11.0',
    date: '2021-12-17',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem that the <code>alignCenter</code> property does not take effect (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/384">#384</a>)</p>
`,
          `<p>The <code>alignCenter</code> property of the adjustment component defaults to <code>true</code> (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/384">#384</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.10.1',
    date: '2021-12-14',
    list: [
      {
        type: 'typescript',
        typeText: '\u{1F18E} TypeScript',
        list: [
          `<p><code>ModalConfig</code> adds <code>simple</code> attribute annotation (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/389">#389</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.10.0',
    date: '2021-12-10',
    list: [
      {
        type: 'style',
        typeText: '\u{1F485} Style',
        list: [
          `<p>Fix the problem of modal information display mode error (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/351">#351</a>)</p>
`,
          `<p>The title bar close button is not displayed in simple mode (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/351">#351</a>)</p>
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
        type: 'feature',
        typeText: '\u{1F195} Feature',
        list: [
          `<p>Added <code>on-before-ok</code> and <code>on-before-cancel</code> property events (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/229">#229</a>)</p>
`,
        ],
      },
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the issue of initial triggering of the <code>open</code> event (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/267">#267</a>)</p>
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
        type: 'enhancement',
        typeText: '\u{1F48E} Enhancement',
        list: [
          `<p>Manage the zIndex of the popup (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/167">#167</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.1.1',
    date: '2021-11-08',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem that the <code>title</code> attribute does not take effect (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/116">#116</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
  {
    version: '2.0.3',
    date: '2021-10-29',
    list: [
      {
        type: 'bugfix',
        typeText: '\u{1F41B} BugFix',
        list: [
          `<p>Fix the problem of the wrong type of the main button (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/30">#30</a>)</p>
`,
        ],
      },
    ],
    extra: [],
  },
];
const G = P({
  name: 'ArcoMain',
  components: {
    DemoBasic: N,
    DemoAsync: z,
    DemoFunction: q,
    DemoNotice: V,
    DemoWidth: $,
    DemoCustom: K,
    DemoForm: L,
    DemoDraggable: U,
    DemoFullscreen: j,
  },
  setup() {
    const { locale: p } = D();
    return {
      locale: p,
      data: {
        meta: { type: 'Component', category: 'Feedback' },
        title: 'Modal',
        description:
          'Open a floating layer on the current page to carry related operations.',
      },
      changelog: typeof b === 'undefined' ? void 0 : b,
      getMessage: (g, m) => (p.value === 'zh-CN' ? g : m),
    };
  },
});
function H(p, l, y, x, g, m) {
  const v = i('demo-basic');
  const k = i('demo-async');
  const T = i('demo-function');
  const w = i('demo-notice');
  const C = i('demo-width');
  const F = i('demo-custom');
  const M = i('demo-form');
  const B = i('demo-draggable');
  const A = i('demo-fullscreen');
  const S = i('anchor-head');
  const s = i('a-th');
  const d = i('a-tr');
  const f = i('a-thead');
  const e = i('a-td');
  const r = i('a-tbody');
  const a = i('a-table');
  const W = i('arco-article');
  return (
    I(),
    O(
      W,
      R(p.data, { changelog: p.changelog }),
      {
        default: n(() => [
          l[406] ||
            (l[406] = o(
              'p',
              null,
              [o('em', null, 'Auto translate by google.')],
              -1
            )),
          t(v),
          t(k),
          t(T),
          t(w),
          t(C),
          t(F),
          t(M),
          t(B),
          t(A),
          t(
            S,
            { level: '2', href: 'API' },
            { default: n(() => l[0] || (l[0] = [u('API')])), _: 1 }
          ),
          l[407] ||
            (l[407] = o(
              'h3',
              { id: 'modal Props' },
              [o('code', null, '<modal>'), u(' Props')],
              -1
            )),
          t(
            a,
            { class: 'component-api-table' },
            {
              default: n(() => [
                l[155] ||
                  (l[155] = o(
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
                          default: n(() => l[1] || (l[1] = [u('Attribute')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(() => l[2] || (l[2] = [u('Description')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(() => l[3] || (l[3] = [u('Type')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(() => l[4] || (l[4] = [u('Default')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(() => l[5] || (l[5] = [u('version')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(r, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(
                            () =>
                              l[6] ||
                              (l[6] = [
                                u('visible '),
                                o('strong', null, '(v-model)', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[7] ||
                              (l[7] = [u('Whether the modal is visible')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[8] || (l[8] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[9] || (l[9] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(
                            () => l[10] || (l[10] = [u('default-visible')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[11] ||
                              (l[11] = [
                                u(
                                  'Whether the modal is visible by default (uncontrolled state)'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[12] ||
                              (l[12] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[13] || (l[13] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[14] || (l[14] = [u('width')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[15] ||
                              (l[15] = [
                                u(
                                  'The width of the dialog box, if not set, the width value in the style will be used'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[16] ||
                              (l[16] = [o('code', null, 'number|string', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[17] || (l[17] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(() => l[18] || (l[18] = [u('2.12.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[19] || (l[19] = [u('top')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[20] ||
                              (l[20] = [
                                u(
                                  'The height from the top of the dialog box. It does not take effect when the center display is turned on.'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[21] ||
                              (l[21] = [o('code', null, 'number|string', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[22] || (l[22] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(() => l[23] || (l[23] = [u('2.12.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[24] || (l[24] = [u('mask')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[25] || (l[25] = [u('Whether to show the mask')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[26] ||
                              (l[26] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[27] || (l[27] = [o('code', null, 'true', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[28] || (l[28] = [u('title')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(() => l[29] || (l[29] = [u('Title')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[30] || (l[30] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[31] || (l[31] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(
                            () => l[32] || (l[32] = [u('title-align')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[33] ||
                              (l[33] = [u('horizontal alignment of the title')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[34] ||
                              (l[34] = [
                                o('code', null, "'start' | 'center'", -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[35] ||
                              (l[35] = [o('code', null, "'center'", -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(() => l[36] || (l[36] = [u('2.17.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(
                            () => l[37] || (l[37] = [u('align-center')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[38] ||
                              (l[38] = [
                                u(
                                  'Whether the dialog box is displayed in the center'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[39] ||
                              (l[39] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[40] || (l[40] = [o('code', null, 'true', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(
                            () => l[41] || (l[41] = [u('unmount-on-close')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[42] ||
                              (l[42] = [
                                u('Whether to uninstall the node when close'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[43] ||
                              (l[43] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[44] || (l[44] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(
                            () => l[45] || (l[45] = [u('mask-closable')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[46] ||
                              (l[46] = [
                                u(
                                  'Whether to close the modal when click the mask'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[47] ||
                              (l[47] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[48] || (l[48] = [o('code', null, 'true', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(
                            () => l[49] || (l[49] = [u('hide-cancel')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[50] ||
                              (l[50] = [u('Whether to hide the cancel button')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[51] ||
                              (l[51] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[52] || (l[52] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[53] || (l[53] = [u('simple')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[54] ||
                              (l[54] = [u('Whether to enable simple mode')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[55] ||
                              (l[55] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[56] ||
                              (l[56] = [
                                o(
                                  'code',
                                  null,
                                  '(props: any) => { return props.notice;}',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[57] || (l[57] = [u('closable')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[58] ||
                              (l[58] = [u('Whether to show the close button')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[59] ||
                              (l[59] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[60] || (l[60] = [o('code', null, 'true', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[61] || (l[61] = [u('ok-text')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[62] ||
                              (l[62] = [u('The content of the confirm button')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[63] || (l[63] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[64] || (l[64] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(
                            () => l[65] || (l[65] = [u('cancel-text')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[66] ||
                              (l[66] = [u('The content of the cancel button')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[67] || (l[67] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[68] || (l[68] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(
                            () => l[69] || (l[69] = [u('ok-loading')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[70] ||
                              (l[70] = [
                                u(
                                  'Whether the confirm button is in the loading state'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[71] ||
                              (l[71] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[72] || (l[72] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(
                            () => l[73] || (l[73] = [u('ok-button-props')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[74] || (l[74] = [u('Props of confirm button')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[75] ||
                              (l[75] = [o('code', null, 'ButtonProps', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[76] || (l[76] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(
                            () => l[77] || (l[77] = [u('cancel-button-props')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[78] || (l[78] = [u('Props of cancel button')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[79] ||
                              (l[79] = [o('code', null, 'ButtonProps', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[80] || (l[80] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[81] || (l[81] = [u('footer')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[82] ||
                              (l[82] = [u('Whether to show the footer')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[83] ||
                              (l[83] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[84] || (l[84] = [o('code', null, 'true', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(
                            () => l[85] || (l[85] = [u('render-to-body')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[86] ||
                              (l[86] = [
                                u('Whether the modal is mounted under the '),
                                o('code', null, 'body', -1),
                                u(' element'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[87] ||
                              (l[87] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[88] || (l[88] = [o('code', null, 'true', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(
                            () => l[89] || (l[89] = [u('popup-container')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[90] ||
                              (l[90] = [u('Mount container for modal')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[91] ||
                              (l[91] = [
                                o('code', null, 'string | HTMLElement', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[92] || (l[92] = [o('code', null, "'body'", -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(
                            () => l[93] || (l[93] = [u('mask-style')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[94] || (l[94] = [u('Mask style')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[95] ||
                              (l[95] = [o('code', null, 'CSSProperties', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[96] || (l[96] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(
                            () => l[97] || (l[97] = [u('modal-class')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[98] ||
                              (l[98] = [u('The classname of the modal')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[99] ||
                              (l[99] = [o('code', null, 'string | any[]', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[100] || (l[100] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(
                            () => l[101] || (l[101] = [u('modal-style')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[102] || (l[102] = [u('Modal style')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[103] ||
                              (l[103] = [o('code', null, 'CSSProperties', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[104] || (l[104] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(
                            () => l[105] || (l[105] = [u('on-before-ok')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[106] ||
                              (l[106] = [
                                u(
                                  'The callback function before the ok event is triggered. If false is returned, subsequent events will not be triggered, and done can also be used to close asynchronously.'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[107] ||
                              (l[107] = [
                                o(
                                  'code',
                                  null,
                                  '( done: (closed: boolean) => void) => void | boolean | Promise<void | boolean>',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[108] || (l[108] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(() => l[109] || (l[109] = [u('2.7.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(
                            () => l[110] || (l[110] = [u('on-before-cancel')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[111] ||
                              (l[111] = [
                                u(
                                  'The callback function before the cancel event is triggered. If it returns false, no subsequent events will be triggered.'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[112] ||
                              (l[112] = [o('code', null, '() => boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[113] || (l[113] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(() => l[114] || (l[114] = [u('2.7.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(
                            () => l[115] || (l[115] = [u('esc-to-close')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[116] ||
                              (l[116] = [
                                u(
                                  'Whether to support the ESC key to close the dialog'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[117] ||
                              (l[117] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[118] || (l[118] = [o('code', null, 'true', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(() => l[119] || (l[119] = [u('2.15.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(
                            () => l[120] || (l[120] = [u('draggable')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[121] ||
                              (l[121] = [u('Whether to support drag')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[122] ||
                              (l[122] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[123] ||
                              (l[123] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(() => l[124] || (l[124] = [u('2.19.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(
                            () => l[125] || (l[125] = [u('fullscreen')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[126] ||
                              (l[126] = [u('Whether to enable full screen')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[127] ||
                              (l[127] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[128] ||
                              (l[128] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(() => l[129] || (l[129] = [u('2.19.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(
                            () =>
                              l[130] || (l[130] = [u('mask-animation-name')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[131] ||
                              (l[131] = [u('Mask layer animation name')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[132] ||
                              (l[132] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[133] || (l[133] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(() => l[134] || (l[134] = [u('2.24.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(
                            () =>
                              l[135] || (l[135] = [u('modal-animation-name')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[136] || (l[136] = [u('Modal animation name')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[137] ||
                              (l[137] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[138] || (l[138] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(() => l[139] || (l[139] = [u('2.24.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(
                            () => l[140] || (l[140] = [u('body-class')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[141] ||
                              (l[141] = [u('The classname of the modal')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[142] ||
                              (l[142] = [o('code', null, 'string | any[]', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[143] || (l[143] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(() => l[144] || (l[144] = [u('2.31.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(
                            () => l[145] || (l[145] = [u('body-style')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[146] || (l[146] = [u('Modal style')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[147] ||
                              (l[147] = [o('code', null, 'StyleValue', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[148] || (l[148] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(() => l[149] || (l[149] = [u('2.31.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(
                            () => l[150] || (l[150] = [u('hide-title')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[151] ||
                              (l[151] = [u('Whether to hide the title')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[152] ||
                              (l[152] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[153] ||
                              (l[153] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(() => l[154] || (l[154] = [u('2.50.0')])),
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
          l[408] ||
            (l[408] = o(
              'h3',
              { id: 'modal Events' },
              [o('code', null, '<modal>'), u(' Events')],
              -1
            )),
          t(
            a,
            { class: 'component-api-table' },
            {
              default: n(() => [
                l[180] ||
                  (l[180] = o(
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
                            () => l[156] || (l[156] = [u('Event Name')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(
                            () => l[157] || (l[157] = [u('Description')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(
                            () => l[158] || (l[158] = [u('Parameters')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(() => l[159] || (l[159] = [u('version')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(r, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[160] || (l[160] = [u('ok')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[161] ||
                              (l[161] = [
                                u('Triggered when the OK button is clicked'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[162] ||
                              (l[162] = [
                                u('ev: '),
                                o('code', null, 'MouseEvent', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[163] || (l[163] = [u('cancel')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[164] ||
                              (l[164] = [
                                u(
                                  'Triggered when the cancel/close button is clicked'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[165] ||
                              (l[165] = [
                                u('ev: '),
                                o(
                                  'code',
                                  null,
                                  'MouseEvent | KeyboardEvent',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[166] || (l[166] = [u('open')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[167] ||
                              (l[167] = [
                                u(
                                  'Triggered after the modal is opened (the animation ends)'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(() => l[168] || (l[168] = [u('-')])),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[169] || (l[169] = [u('close')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[170] ||
                              (l[170] = [
                                u(
                                  'Triggered after the modal is closed (the animation ends)'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(() => l[171] || (l[171] = [u('-')])),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(
                            () => l[172] || (l[172] = [u('before-open')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[173] ||
                              (l[173] = [
                                u('Triggered before dialog is opened'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(() => l[174] || (l[174] = [u('-')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(() => l[175] || (l[175] = [u('2.16.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(
                            () => l[176] || (l[176] = [u('before-close')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[177] ||
                              (l[177] = [
                                u('Triggered before dialog is closed'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(() => l[178] || (l[178] = [u('-')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(() => l[179] || (l[179] = [u('2.16.0')])),
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
          l[409] ||
            (l[409] = o(
              'h3',
              { id: 'modal Slots' },
              [o('code', null, '<modal>'), u(' Slots')],
              -1
            )),
          t(
            a,
            { class: 'component-api-table' },
            {
              default: n(() => [
                l[190] ||
                  (l[190] = o(
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
                            () => l[181] || (l[181] = [u('Slot Name')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(
                            () => l[182] || (l[182] = [u('Description')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(
                            () => l[183] || (l[183] = [u('Parameters')])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(r, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[184] || (l[184] = [u('title')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(() => l[185] || (l[185] = [u('Title')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(() => l[186] || (l[186] = [u('-')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[187] || (l[187] = [u('footer')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(() => l[188] || (l[188] = [u('Footer')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(() => l[189] || (l[189] = [u('-')])),
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
          l[410] ||
            (l[410] = o(
              'h3',
              { id: 'modal Global methods' },
              [o('code', null, '<modal>'), u(' Global methods')],
              -1
            )),
          l[411] ||
            (l[411] = o(
              'p',
              null,
              'The global methods provided by Modal can be used in the following three ways:',
              -1
            )),
          l[412] ||
            (l[412] = o(
              'ol',
              null,
              [
                o('li', null, 'Called by this.$modal'),
                o(
                  'li',
                  null,
                  'In the Composition API, call through getCurrentInstance().appContext.config.globalProperties.$modal'
                ),
                o('li', null, 'Import Modal, call through Modal itself'),
              ],
              -1
            )),
          l[413] ||
            (l[413] = o(
              'p',
              null,
              'When used by import, the component has no way to obtain the current Vue Context. Content injected into the AppContext such as i18n or route cannot be used internally. You need to manually pass in the AppContext when calling, or specify the AppContext globally for the component.',
              -1
            )),
          l[414] ||
            (l[414] = o(
              'pre',
              { class: 'code-content' },
              [
                o('code', { class: 'language-lang' }, [
                  o('span', { class: 'token keyword' }, 'import'),
                  u(),
                  o('span', { class: 'token punctuation' }, '{'),
                  u(' createApp '),
                  o('span', { class: 'token punctuation' }, '}'),
                  u(),
                  o('span', { class: 'token keyword' }, 'from'),
                  u(),
                  o('span', { class: 'token string' }, "'vue'"),
                  u(`
`),
                  o('span', { class: 'token keyword' }, 'import'),
                  u(),
                  o('span', { class: 'token punctuation' }, '{'),
                  u(' Modal '),
                  o('span', { class: 'token punctuation' }, '}'),
                  u(),
                  o('span', { class: 'token keyword' }, 'from'),
                  u(),
                  o('span', { class: 'token string' }, "'genedesign'"),
                  o('span', { class: 'token punctuation' }, ';'),
                  u(`

`),
                  o('span', { class: 'token keyword' }, 'const'),
                  u(' app '),
                  o('span', { class: 'token operator' }, '='),
                  u(),
                  o('span', { class: 'token function' }, 'createApp'),
                  o('span', { class: 'token punctuation' }, '('),
                  u('App'),
                  o('span', { class: 'token punctuation' }, ')'),
                  o('span', { class: 'token punctuation' }, ';'),
                  u(`
Modal`),
                  o('span', { class: 'token punctuation' }, '.'),
                  u('_context '),
                  o('span', { class: 'token operator' }, '='),
                  u(' app'),
                  o('span', { class: 'token punctuation' }, '.'),
                  u('_context'),
                  o('span', { class: 'token punctuation' }, ';'),
                  u(`
`),
                ]),
              ],
              -1
            )),
          l[415] ||
            (l[415] = o('h3', { id: 'ModalConfig' }, 'ModalConfig', -1)),
          t(
            a,
            { class: 'component-api-table' },
            {
              default: n(() => [
                l[361] ||
                  (l[361] = o(
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
                          default: n(() => l[191] || (l[191] = [u('Name')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(
                            () => l[192] || (l[192] = [u('Description')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(() => l[193] || (l[193] = [u('Type')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(() => l[194] || (l[194] = [u('Default')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(() => l[195] || (l[195] = [u('version')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(r, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[196] || (l[196] = [u('title')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(() => l[197] || (l[197] = [u('Title')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[198] ||
                              (l[198] = [o('code', null, 'RenderContent', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[199] || (l[199] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[200] || (l[200] = [u('content')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(() => l[201] || (l[201] = [u('Content')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[202] ||
                              (l[202] = [o('code', null, 'RenderContent', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[203] || (l[203] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[204] || (l[204] = [u('footer')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(() => l[205] || (l[205] = [u('Footer')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[206] ||
                              (l[206] = [
                                o('code', null, 'boolean | RenderContent', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[207] || (l[207] = [o('code', null, 'true', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(
                            () => l[208] || (l[208] = [u('closable')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[209] ||
                              (l[209] = [u('Whether to show the close button')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[210] ||
                              (l[210] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[211] || (l[211] = [o('code', null, 'true', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[212] || (l[212] = [u('okText')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[213] ||
                              (l[213] = [
                                u('The content of the confirm button'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[214] ||
                              (l[214] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[215] || (l[215] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(
                            () => l[216] || (l[216] = [u('cancelText')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[217] ||
                              (l[217] = [u('The content of the cancel button')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[218] ||
                              (l[218] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[219] || (l[219] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(
                            () => l[220] || (l[220] = [u('okButtonProps')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[221] ||
                              (l[221] = [u('Props of confirm button')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[222] ||
                              (l[222] = [o('code', null, 'ButtonProps', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[223] || (l[223] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(
                            () => l[224] || (l[224] = [u('cancelButtonProps')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[225] || (l[225] = [u('Props of cancel button')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[226] ||
                              (l[226] = [o('code', null, 'ButtonProps', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[227] || (l[227] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(
                            () => l[228] || (l[228] = [u('okLoading')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[229] ||
                              (l[229] = [
                                u(
                                  'Whether the confirm button is in the loading state'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[230] ||
                              (l[230] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[231] ||
                              (l[231] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(
                            () => l[232] || (l[232] = [u('hideCancel')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[233] ||
                              (l[233] = [
                                u('Whether to hide the cancel button'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[234] ||
                              (l[234] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[235] ||
                              (l[235] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[236] || (l[236] = [u('mask')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[237] ||
                              (l[237] = [u('Whether to show the mask')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[238] ||
                              (l[238] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[239] || (l[239] = [o('code', null, 'true', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[240] || (l[240] = [u('simple')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[241] ||
                              (l[241] = [u('Whether to enable simple mode')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[242] ||
                              (l[242] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[243] ||
                              (l[243] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(
                            () => l[244] || (l[244] = [u('maskClosable')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[245] ||
                              (l[245] = [
                                u(
                                  'Whether to close the modal when click the mask'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[246] ||
                              (l[246] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[247] || (l[247] = [o('code', null, 'true', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(
                            () => l[248] || (l[248] = [u('maskStyle')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[249] || (l[249] = [u('Mask style')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[250] ||
                              (l[250] = [o('code', null, 'CSSProperties', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[251] || (l[251] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(
                            () => l[252] || (l[252] = [u('alignCenter')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[253] ||
                              (l[253] = [
                                u(
                                  'Whether the dialog box is displayed in the center'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[254] ||
                              (l[254] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[255] || (l[255] = [o('code', null, 'true', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(
                            () => l[256] || (l[256] = [u('escToClose')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[257] ||
                              (l[257] = [
                                u(
                                  'Whether to support the ESC key to close the dialog'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[258] ||
                              (l[258] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[259] || (l[259] = [o('code', null, 'true', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(() => l[260] || (l[260] = [u('2.15.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(
                            () => l[261] || (l[261] = [u('draggable')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[262] ||
                              (l[262] = [u('Whether to support drag')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[263] ||
                              (l[263] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[264] ||
                              (l[264] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(() => l[265] || (l[265] = [u('2.19.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(
                            () => l[266] || (l[266] = [u('fullscreen')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[267] ||
                              (l[267] = [u('Whether to enable full screen')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[268] ||
                              (l[268] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[269] ||
                              (l[269] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(() => l[270] || (l[270] = [u('2.19.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[271] || (l[271] = [u('onOk')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[272] ||
                              (l[272] = [
                                u(
                                  'Callback function for clicking the OK button'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[273] ||
                              (l[273] = [
                                o('code', null, '(e?: Event) => void', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[274] || (l[274] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(
                            () => l[275] || (l[275] = [u('onCancel')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[276] ||
                              (l[276] = [
                                u(
                                  'Callback function for clicking the Cancel button'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[277] ||
                              (l[277] = [
                                o('code', null, '(e?: Event) => void', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[278] || (l[278] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(
                            () => l[279] || (l[279] = [u('onBeforeOk')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[280] ||
                              (l[280] = [
                                u(
                                  'The callback function before the ok event is triggered. If false is returned, subsequent events will not be triggered, and done can also be used to close asynchronously.'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[281] ||
                              (l[281] = [
                                o(
                                  'code',
                                  null,
                                  '( done: (closed: boolean) => void ) => void | boolean | Promise<void | boolean>',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[282] || (l[282] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(() => l[283] || (l[283] = [u('2.7.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(
                            () => l[284] || (l[284] = [u('onBeforeCancel')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[285] ||
                              (l[285] = [
                                u(
                                  'The callback function before the cancel event is triggered. If it returns false, no subsequent events will be triggered.'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[286] ||
                              (l[286] = [o('code', null, '() => boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[287] || (l[287] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(() => l[288] || (l[288] = [u('2.7.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[289] || (l[289] = [u('onOpen')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[290] ||
                              (l[290] = [
                                u(
                                  'Triggered after the modal is opened (the animation ends)'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[291] ||
                              (l[291] = [o('code', null, '() => void', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[292] || (l[292] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[293] || (l[293] = [u('onClose')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[294] ||
                              (l[294] = [
                                u(
                                  'Triggered after the modal is closed (the animation ends)'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[295] ||
                              (l[295] = [o('code', null, '() => void', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[296] || (l[296] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(
                            () => l[297] || (l[297] = [u('onBeforeOpen')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[298] ||
                              (l[298] = [
                                u('Triggered before dialog is opened'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[299] ||
                              (l[299] = [o('code', null, '() => void', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[300] || (l[300] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(() => l[301] || (l[301] = [u('2.16.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(
                            () => l[302] || (l[302] = [u('onBeforeClose')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[303] ||
                              (l[303] = [
                                u('Triggered before dialog is closed'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[304] ||
                              (l[304] = [o('code', null, '() => void', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[305] || (l[305] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(() => l[306] || (l[306] = [u('2.16.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[307] || (l[307] = [u('width')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[308] ||
                              (l[308] = [
                                u(
                                  'The width of the dialog box, if not set, the width value in the style will be used'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[309] ||
                              (l[309] = [
                                o('code', null, 'number | string', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[310] || (l[310] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(() => l[311] || (l[311] = [u('2.12.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[312] || (l[312] = [u('top')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[313] ||
                              (l[313] = [
                                u(
                                  'The height from the top of the dialog box. It does not take effect when the center display is turned on.'
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[314] ||
                              (l[314] = [
                                o('code', null, 'number | string', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[315] || (l[315] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(() => l[316] || (l[316] = [u('2.12.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(
                            () => l[317] || (l[317] = [u('titleAlign')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[318] ||
                              (l[318] = [
                                u('horizontal alignment of the title'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[319] ||
                              (l[319] = [
                                o('code', null, "'start' | 'center'", -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[320] ||
                              (l[320] = [o('code', null, "'center'", -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(() => l[321] || (l[321] = [u('2.17.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(
                            () => l[322] || (l[322] = [u('renderToBody')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[323] ||
                              (l[323] = [
                                u('Whether the modal is mounted under the '),
                                o('code', null, 'body', -1),
                                u(' element'),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[324] ||
                              (l[324] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[325] || (l[325] = [o('code', null, 'true', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(
                            () => l[326] || (l[326] = [u('popupContainer')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[327] ||
                              (l[327] = [u('Mount container for modal')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[328] ||
                              (l[328] = [
                                o('code', null, 'string | HTMLElement', -1),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[329] ||
                              (l[329] = [o('code', null, "'body'", -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(
                            () => l[330] || (l[330] = [u('modalClass')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[331] ||
                              (l[331] = [u('The classname of the modal')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[332] ||
                              (l[332] = [o('code', null, 'string | any[]', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[333] || (l[333] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(
                            () => l[334] || (l[334] = [u('modalStyle')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[335] || (l[335] = [u('Modal style')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[336] ||
                              (l[336] = [o('code', null, 'CSSProperties', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[337] || (l[337] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(
                            () => l[338] || (l[338] = [u('maskAnimationName')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[339] ||
                              (l[339] = [u('Mask layer animation name')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[340] ||
                              (l[340] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[341] || (l[341] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(() => l[342] || (l[342] = [u('2.24.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(
                            () => l[343] || (l[343] = [u('modalAnimationName')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[344] || (l[344] = [u('Modal animation name')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[345] ||
                              (l[345] = [o('code', null, 'string', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[346] || (l[346] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(() => l[347] || (l[347] = [u('2.24.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(
                            () => l[348] || (l[348] = [u('hideTitle')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[349] ||
                              (l[349] = [u('Whether to hide the title')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[350] ||
                              (l[350] = [o('code', null, 'boolean', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[351] ||
                              (l[351] = [o('code', null, 'false', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(() => l[352] || (l[352] = [u('2.50.0')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(
                            () => l[353] || (l[353] = [u('bodyClass')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[354] ||
                              (l[354] = [u('The classname of the modal')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[355] ||
                              (l[355] = [o('code', null, 'string | any[]', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[356] || (l[356] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(
                            () => l[357] || (l[357] = [u('bodyStyle')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[358] || (l[358] = [u('Modal style')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[359] ||
                              (l[359] = [o('code', null, 'StyleValue', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[360] || (l[360] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
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
          l[416] ||
            (l[416] = o('h3', { id: 'ModalReturn' }, 'ModalReturn', -1)),
          t(
            a,
            { class: 'component-api-table' },
            {
              default: n(() => [
                l[376] ||
                  (l[376] = o(
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
                          default: n(() => l[362] || (l[362] = [u('Name')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(
                            () => l[363] || (l[363] = [u('Description')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(() => l[364] || (l[364] = [u('Type')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(() => l[365] || (l[365] = [u('Default')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(() => l[366] || (l[366] = [u('version')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(r, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[367] || (l[367] = [u('close')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[368] || (l[368] = [u('Close Modal')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[369] ||
                              (l[369] = [o('code', null, '() => void', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[370] || (l[370] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(e),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[371] || (l[371] = [u('update')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[372] || (l[372] = [u('Update Modal')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[373] ||
                              (l[373] = [
                                o(
                                  'code',
                                  null,
                                  '(config: ModalUpdateConfig) => void',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[374] || (l[374] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(() => l[375] || (l[375] = [u('2.43.2')])),
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
          l[417] ||
            (l[417] = o('h3', { id: 'ModalMethod' }, 'ModalMethod', -1)),
          t(
            a,
            { class: 'component-api-table' },
            {
              default: n(() => [
                l[405] ||
                  (l[405] = o(
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
                          default: n(() => l[377] || (l[377] = [u('Name')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(
                            () => l[378] || (l[378] = [u('Description')])
                          ),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(() => l[379] || (l[379] = [u('Type')])),
                          _: 1,
                        }),
                        t(s, null, {
                          default: n(() => l[380] || (l[380] = [u('Default')])),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                }),
                t(r, null, {
                  default: n(() => [
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[381] || (l[381] = [u('open')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[382] || (l[382] = [u('Open modal')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[383] ||
                              (l[383] = [
                                o(
                                  'code',
                                  null,
                                  '(config: ModalConfig, appContext?: AppContext) => ModalReturn',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[384] || (l[384] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[385] || (l[385] = [u('confirm')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[386] ||
                              (l[386] = [u('Open modal (simple mode)')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[387] ||
                              (l[387] = [
                                o(
                                  'code',
                                  null,
                                  '(config: ModalConfig, appContext?: AppContext) => ModalReturn',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[388] || (l[388] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[389] || (l[389] = [u('info')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[390] || (l[390] = [u('Open info modal')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[391] ||
                              (l[391] = [
                                o(
                                  'code',
                                  null,
                                  '(config: ModalConfig, appContext?: AppContext) => ModalReturn',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[392] || (l[392] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[393] || (l[393] = [u('success')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[394] || (l[394] = [u('Open success modal')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[395] ||
                              (l[395] = [
                                o(
                                  'code',
                                  null,
                                  '(config: ModalConfig, appContext?: AppContext) => ModalReturn',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[396] || (l[396] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[397] || (l[397] = [u('warning')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[398] || (l[398] = [u('Open warning modal')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[399] ||
                              (l[399] = [
                                o(
                                  'code',
                                  null,
                                  '(config: ModalConfig, appContext?: AppContext) => ModalReturn',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[400] || (l[400] = [o('code', null, '-', -1)])
                          ),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }),
                    t(d, null, {
                      default: n(() => [
                        t(e, null, {
                          default: n(() => l[401] || (l[401] = [u('error')])),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () => l[402] || (l[402] = [u('Open error modal')])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[403] ||
                              (l[403] = [
                                o(
                                  'code',
                                  null,
                                  '(config: ModalConfig, appContext?: AppContext) => ModalReturn',
                                  -1
                                ),
                              ])
                          ),
                          _: 1,
                        }),
                        t(e, null, {
                          default: n(
                            () =>
                              l[404] || (l[404] = [o('code', null, '-', -1)])
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
const Z = E(G, [['render', H]]);
export { Z as default };
