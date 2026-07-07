export const flashcards = [
    // Core Web & JS
    {
        id: 'html-sem-1',
        category: 'core',
        topic: 'HTML Semantics',
        question: 'Why use <article> or <nav> instead of <div>?',
        answer: 'Semantic tags communicate meaning to browsers, screen readers, and search engines. They improve accessibility (landmarks for AT navigation), SEO, and code readability — a <div> tells you nothing about its purpose.'
    },
    {
        id: 'html-sem-2',
        category: 'core',
        topic: 'HTML Semantics',
        question: 'What is the difference between <section> and <div>?',
        answer: '<section> represents a thematic grouping of content, typically with a heading, and is exposed to accessibility trees as a landmark. <div> is a generic, non-semantic container used purely for styling/layout hooks.'
    },
    {
        id: 'css-spec-1',
        category: 'core',
        topic: 'CSS Specificity',
        question: 'How is CSS specificity calculated?',
        answer: 'As a 4-part tuple: inline styles, then ID selectors, then class/attribute/pseudo-class selectors, then element/pseudo-element selectors. Higher tiers always outrank lower ones regardless of count (e.g. one ID beats a hundred classes).'
    },
    {
        id: 'css-spec-2',
        category: 'core',
        topic: 'CSS Specificity',
        question: 'Why is overusing !important considered bad practice?',
        answer: 'It overrides normal cascade rules, making styles hard to predict and debug, and forces other developers to use !important to override it, creating an escalating specificity war. Better fix: reduce selector specificity or reorganize source order.'
    },
    {
        id: 'flexbox-1',
        category: 'core',
        topic: 'Flexbox',
        question: 'What is the difference between justify-content and align-items?',
        answer: 'justify-content aligns items along the main axis (row by default); align-items aligns items along the cross axis (column by default). If flex-direction is column, the axes swap.'
    },
    {
        id: 'flexbox-2',
        category: 'core',
        topic: 'Flexbox',
        question: 'What does flex: 1 shorthand actually set?',
        answer: 'It sets flex-grow: 1, flex-shrink: 1, flex-basis: 0%. The item grows/shrinks to fill available space and ignores its content size as a starting basis.'
    },
    {
        id: 'grid-1',
        category: 'core',
        topic: 'CSS Grid',
        question: 'When would you choose Grid over Flexbox?',
        answer: 'Grid excels at two-dimensional layouts (rows and columns simultaneously) like page layouts or dashboards. Flexbox is better for one-dimensional layouts like navbars or lists that flow in a single direction.'
    },
    {
        id: 'grid-2',
        category: 'core',
        topic: 'CSS Grid',
        question: 'What does grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)) do?',
        answer: 'Creates as many 200px-minimum columns as fit the container, each stretching to fill remaining space equally. auto-fit collapses empty tracks, unlike auto-fill which leaves them as blank space.'
    },
    {
        id: 'resp-1',
        category: 'core',
        topic: 'Responsive Design',
        question: 'What is the difference between mobile-first and desktop-first CSS?',
        answer: 'Mobile-first writes base styles for small screens and uses min-width media queries to add complexity for larger screens. Desktop-first does the reverse with max-width queries. Mobile-first generally produces leaner CSS since simple layouts are the default.'
    },
    {
        id: 'resp-2',
        category: 'core',
        topic: 'Responsive Design',
        question: 'What is the difference between relative units like rem and vw?',
        answer: 'rem is relative to the root font-size, ideal for consistent, accessible typography/spacing that respects user zoom settings. vw is relative to viewport width, useful for fluid layout elements but risky for text since it ignores user font preferences.'
    },
    {
        id: 'dom-1',
        category: 'core',
        topic: 'DOM',
        question: 'What is the DOM?',
        answer: 'The Document Object Model is a tree-structured, in-memory representation of an HTML document that JavaScript can read and manipulate. Each element, attribute, and piece of text becomes a node in the tree.'
    },
    {
        id: 'dom-2',
        category: 'core',
        topic: 'DOM',
        question: 'Why is direct DOM manipulation considered expensive?',
        answer: 'Changes can trigger reflow (recalculating layout/geometry) and repaint (redrawing pixels), both of which are costly, especially in loops. Batching reads/writes or using requestAnimationFrame reduces layout thrashing.'
    },
    {
        id: 'vdom-1',
        category: 'core',
        topic: 'Virtual DOM',
        question: 'What problem does the Virtual DOM solve?',
        answer: 'Direct DOM updates are slow. The Virtual DOM is a lightweight JS representation of the UI; React diffs the new virtual tree against the previous one and applies only the minimal set of real DOM changes needed.'
    },
    {
        id: 'vdom-2',
        category: 'core',
        topic: 'Virtual DOM',
        question: 'Does the Virtual DOM always make React faster than direct DOM manipulation?',
        answer: 'Not inherently — diffing itself has a cost. Its real value is developer ergonomics: you write declarative UI code and React figures out efficient updates, rather than hand-optimizing every DOM mutation yourself.'
    },
    {
        id: 'evloop-1',
        category: 'core',
        topic: 'Event Loop',
        question: 'Explain the event loop in one sentence.',
        answer: 'JS is single-threaded and runs the call stack to completion, then the event loop pulls tasks from the callback/microtask queues (microtasks like Promises first, then macrotasks like setTimeout) once the stack is empty.'
    },
    {
        id: 'evloop-2',
        category: 'core',
        topic: 'Event Loop',
        question: 'Why does setTimeout(fn, 0) not run immediately?',
        answer: 'It still gets queued as a macrotask and only runs after the current call stack is empty and all pending microtasks (e.g. resolved Promises) have been processed.'
    },
    {
        id: 'closures-1',
        category: 'core',
        topic: 'Closures',
        question: 'What is a closure?',
        answer: 'A function that retains access to variables from its enclosing lexical scope even after that outer function has returned. The inner function "closes over" those variables.'
    },
    {
        id: 'closures-2',
        category: 'core',
        topic: 'Closures',
        question: 'Give a practical use case for closures.',
        answer: 'Creating private state, e.g. a counter factory: function makeCounter() { let count = 0; return () => ++count; } — count is inaccessible from outside but persists across calls.'
    },
    {
        id: 'hoisting-1',
        category: 'core',
        topic: 'Hoisting',
        question: 'What gets hoisted in JavaScript?',
        answer: 'var declarations and function declarations are hoisted to the top of their scope (var initialized as undefined, functions fully). let/const are hoisted too but stay in the "temporal dead zone" until their declaration line, throwing a ReferenceError if accessed earlier.'
    },
    {
        id: 'hoisting-2',
        category: 'core',
        topic: 'Hoisting',
        question: 'What is the temporal dead zone?',
        answer: 'The period between entering a scope and the point where a let/const variable is declared. Accessing the variable during this window throws a ReferenceError, even though it exists in scope.'
    },
    {
        id: 'promises-1',
        category: 'core',
        topic: 'Promises',
        question: 'What are the three states of a Promise?',
        answer: 'Pending (initial), fulfilled (resolved successfully with a value), and rejected (failed with a reason). Once settled (fulfilled/rejected), a Promise cannot change state again.'
    },
    {
        id: 'promises-2',
        category: 'core',
        topic: 'Promises',
        question: 'What is the difference between Promise.all and Promise.allSettled?',
        answer: 'Promise.all rejects immediately if any promise rejects, discarding other results. Promise.allSettled waits for all promises to settle and returns an array of {status, value/reason} for every one, regardless of failures.'
    },
    {
        id: 'async-1',
        category: 'core',
        topic: 'Async/Await',
        question: 'What does async/await actually do under the hood?',
        answer: 'It is syntactic sugar over Promises. await pauses execution of the async function (without blocking the thread) until the Promise settles, making asynchronous code read like synchronous code.'
    },
    {
        id: 'async-2',
        category: 'core',
        topic: 'Async/Await',
        question: 'How do you properly catch errors in async/await code?',
        answer: 'Wrap the await calls in try/catch. Without it, a rejected Promise inside an async function becomes an unhandled rejection rather than a caught error.'
    },
    {
        id: 'bubble-1',
        category: 'core',
        topic: 'Event Bubbling & Capturing',
        question: 'What is the difference between event bubbling and capturing?',
        answer: 'Capturing phase: the event travels from the root down to the target element. Bubbling phase: after hitting the target, it travels back up to the root. addEventListener listens in bubbling phase by default unless the third argument is true.'
    },
    {
        id: 'bubble-2',
        category: 'core',
        topic: 'Event Bubbling & Capturing',
        question: 'What is event delegation and why use it?',
        answer: 'Attaching a single listener to a parent element and using event.target to handle events from its children, relying on bubbling. It reduces memory usage versus per-child listeners and automatically handles dynamically added children.'
    },
    // React
    {
        id: 'lifecycle-1',
        category: 'react',
        topic: 'React Lifecycle',
        question: 'What are the three phases of a React component lifecycle?',
        answer: 'Mounting (component created and inserted into the DOM), updating (re-rendering due to state/props changes), and unmounting (component removed from the DOM). Hooks map to these via useEffect.'
    },
    {
        id: 'lifecycle-2',
        category: 'react',
        topic: 'React Lifecycle',
        question: 'How does useEffect map to class lifecycle methods?',
        answer: 'useEffect(fn, []) approximates componentDidMount. useEffect(fn, [dep]) approximates componentDidUpdate for that dependency. The cleanup function returned from useEffect approximates componentWillUnmount.'
    },
    {
        id: 'hooks-1',
        category: 'react',
        topic: 'React Hooks',
        question: 'What are the Rules of Hooks?',
        answer: 'Only call hooks at the top level (never in loops, conditions, or nested functions) and only call them from React function components or custom hooks. This ensures React can track hook call order consistently across renders.'
    },
    {
        id: 'hooks-2',
        category: 'react',
        topic: 'React Hooks',
        question: 'What problem do custom hooks solve?',
        answer: 'They let you extract and reuse stateful logic (e.g. data fetching, form handling) across components without changing component hierarchy, unlike older patterns like render props or HOCs.'
    },
    {
        id: 'stateprops-1',
        category: 'react',
        topic: 'State vs Props',
        question: 'What is the core difference between state and props?',
        answer: 'Props are passed down from a parent and are read-only from the child\'s perspective. State is local, mutable data owned and managed by the component itself, and updating it triggers a re-render.'
    },
    {
        id: 'stateprops-2',
        category: 'react',
        topic: 'State vs Props',
        question: 'Can a child component modify props it receives?',
        answer: 'No — mutating props directly breaks React\'s unidirectional data flow. Instead, the child calls a callback function passed down as a prop, letting the parent update its own state, which then flows back down.'
    },
    {
        id: 'context-1',
        category: 'react',
        topic: 'Context API',
        question: 'What problem does the Context API solve?',
        answer: 'Prop drilling — passing data through many intermediate components that don\'t need it just to reach a deeply nested child. Context lets any descendant subscribe to shared data directly.'
    },
    {
        id: 'context-2',
        category: 'react',
        topic: 'Context API',
        question: 'What is a downside of overusing Context for frequently-changing state?',
        answer: 'Every consumer of a context re-renders whenever the context value changes, even if it only cares about part of it. For high-frequency updates, this can hurt performance versus more targeted state management.'
    },
    {
        id: 'memo-1',
        category: 'react',
        topic: 'Memoization',
        question: 'What is the difference between useMemo and useCallback?',
        answer: 'useMemo memoizes a computed value, recalculating only when dependencies change. useCallback memoizes a function reference itself, useful for preventing unnecessary re-renders of children that receive that function as a prop.'
    },
    {
        id: 'memo-2',
        category: 'react',
        topic: 'Memoization',
        question: 'When is React.memo actually worth using?',
        answer: 'When a component re-renders often with the same props and the render itself is expensive. Overusing it on cheap components adds comparison overhead without meaningful benefit — it is a performance tool, not a default.'
    },
    // Performance & Architecture
    {
        id: 'debounce-1',
        category: 'perf',
        topic: 'Debouncing vs Throttling',
        question: 'What is the difference between debouncing and throttling?',
        answer: 'Debouncing delays execution until a pause in events (e.g. runs once after typing stops). Throttling executes at most once per fixed interval regardless of how many events fire, ensuring steady, regular execution.'
    },
    {
        id: 'debounce-2',
        category: 'perf',
        topic: 'Debouncing vs Throttling',
        question: 'Give an example use case for each.',
        answer: 'Debouncing: search-as-you-type input, to avoid firing an API call on every keystroke. Throttling: scroll or resize handlers, where you want periodic updates without flooding the callback.'
    },
    {
        id: 'ssr-1',
        category: 'perf',
        topic: 'SSR vs CSR vs SSG',
        question: 'Briefly contrast SSR, CSR, and SSG.',
        answer: 'CSR (Client-Side Rendering): browser downloads a near-empty HTML shell and JS builds the page. SSR (Server-Side Rendering): server renders HTML per request. SSG (Static Site Generation): HTML is pre-built at build time and served as static files.'
    },
    {
        id: 'ssr-2',
        category: 'perf',
        topic: 'SSR vs CSR vs SSG',
        question: 'What is a key tradeoff of SSR versus CSR?',
        answer: 'SSR improves initial load performance and SEO since users see meaningful content faster, but adds server load per request and complexity (data fetching on the server). CSR shifts that cost to the client after an initial blank/loading state.'
    },
    {
        id: 'hydration-1',
        category: 'perf',
        topic: 'Hydration',
        question: 'What is hydration in the context of SSR?',
        answer: 'The process where React attaches event listeners and internal state to server-rendered static HTML on the client, turning it into a fully interactive app without re-rendering the DOM from scratch.'
    },
    {
        id: 'hydration-2',
        category: 'perf',
        topic: 'Hydration',
        question: 'What causes a hydration mismatch error?',
        answer: 'When the HTML rendered on the server differs from what React would render on the client (e.g. using Date.now() or window in initial render), React detects the DOM mismatch and warns or throws.'
    },
    {
        id: 'codesplit-1',
        category: 'perf',
        topic: 'Code Splitting',
        question: 'What is code splitting and why does it matter?',
        answer: 'Breaking a large JS bundle into smaller chunks loaded on demand rather than all upfront, reducing initial load time. In React/Vite, this is commonly done with dynamic import() and React.lazy.'
    },
    {
        id: 'codesplit-2',
        category: 'perf',
        topic: 'Code Splitting',
        question: 'How does route-based code splitting typically work in a React app?',
        answer: 'Each route/page component is wrapped in React.lazy(() => import(\'./Page\')) and rendered inside a <Suspense> boundary, so its JS chunk only loads when the user navigates to that route.'
    },
    {
        id: 'lazy-1',
        category: 'perf',
        topic: 'Lazy Loading',
        question: 'What is lazy loading applied to images, and how do you implement it natively?',
        answer: 'Deferring image loading until they are near the viewport, reducing initial page weight. Natively, add loading="lazy" to an <img> tag; the browser handles the intersection logic automatically.'
    },
    {
        id: 'lazy-2',
        category: 'perf',
        topic: 'Lazy Loading',
        question: 'What is the difference between lazy loading and code splitting?',
        answer: 'Code splitting is about JS bundle size — deferring chunks of code. Lazy loading is a broader concept that also applies to assets like images, fonts, or components, deferring anything until it is actually needed.'
    },
    {
        id: 'webperf-1',
        category: 'perf',
        topic: 'Web Performance',
        question: 'Name the three Core Web Vitals.',
        answer: 'LCP (Largest Contentful Paint — loading speed), INP (Interaction to Next Paint — responsiveness), and CLS (Cumulative Layout Shift — visual stability). Google uses these as key UX/ranking signals.'
    },
    {
        id: 'webperf-2',
        category: 'perf',
        topic: 'Web Performance',
        question: 'What commonly causes a poor CLS score, and how do you fix it?',
        answer: 'Images or ads without reserved dimensions causing content to jump as they load, or web fonts swapping in late (FOIT/FOUT). Fix by setting explicit width/height or aspect-ratio, and reserving space for dynamic content.'
    },
    // Security & A11y
    {
        id: 'auth-1',
        category: 'security',
        topic: 'Authentication Basics',
        question: 'What is the difference between authentication and authorization?',
        answer: 'Authentication verifies who you are (login, credentials). Authorization determines what you\'re allowed to do once identified (permissions, roles, access control).'
    },
    {
        id: 'auth-2',
        category: 'security',
        topic: 'Authentication Basics',
        question: 'What is the difference between a session-based and token-based (JWT) auth flow?',
        answer: 'Session-based: server stores session state and the client holds a session ID cookie; the server looks up state on each request. Token-based: the server issues a signed JWT containing claims; the client sends it each request and the server verifies it statelessly without a lookup.'
    },
    {
        id: 'xss-1',
        category: 'security',
        topic: 'XSS / CSRF / CORS',
        question: 'What is XSS and how do frameworks like React mitigate it by default?',
        answer: 'Cross-Site Scripting: injecting malicious script into a page, often via unsanitized user input rendered as HTML. React escapes values rendered in JSX by default, preventing raw HTML injection unless you explicitly use dangerouslySetInnerHTML.'
    },
    {
        id: 'xss-2',
        category: 'security',
        topic: 'XSS / CSRF / CORS',
        question: 'What is CORS and why does it exist?',
        answer: 'Cross-Origin Resource Sharing is a browser security mechanism that restricts web pages from making requests to a different origin than the one that served the page, unless the server explicitly allows it via response headers. It protects users from malicious cross-origin requests using their credentials.'
    },
    {
        id: 'a11y-1',
        category: 'security',
        topic: 'Accessibility',
        question: 'What is the purpose of ARIA attributes, and when should you avoid them?',
        answer: 'ARIA attributes (e.g. aria-label, role) convey semantics to assistive technology when native HTML can\'t express it. The rule of thumb: prefer native semantic elements first — "no ARIA is better than bad ARIA," since incorrect ARIA can make accessibility worse.'
    },
    {
        id: 'a11y-2',
        category: 'security',
        topic: 'Accessibility',
        question: 'What does keyboard accessibility require at minimum?',
        answer: 'All interactive elements must be reachable and operable via Tab/Enter/Space without a mouse, with a visible focus indicator, and in a logical tab order matching the visual layout.'
    },
    // Day-to-Day
    {
        id: 'git-1',
        category: 'workflow',
        topic: 'Git Workflows',
        question: 'What is the difference between git merge and git rebase?',
        answer: 'Merge creates a new commit joining two histories, preserving branch history as-is. Rebase replays your branch\'s commits on top of another branch, producing a linear history but rewriting commit hashes — riskier on shared/public branches.'
    },
    {
        id: 'git-2',
        category: 'workflow',
        topic: 'Git Workflows',
        question: 'What is a typical feature-branch workflow?',
        answer: 'Branch off main for each feature/fix, commit incrementally, open a pull request for review, then merge (often squash-merge) back into main once approved and CI passes, keeping main always deployable.'
    },
    {
        id: 'test-1',
        category: 'workflow',
        topic: 'Testing Awareness',
        question: 'What is the difference between unit, integration, and end-to-end tests?',
        answer: 'Unit tests check a single function/component in isolation. Integration tests check how multiple units work together (e.g. a component with its hooks). E2E tests simulate real user flows across the whole app, often in a browser.'
    },
    {
        id: 'test-2',
        category: 'workflow',
        topic: 'Testing Awareness',
        question: 'Why does React Testing Library encourage testing behavior over implementation?',
        answer: 'It queries the DOM the way a user would (by text, role, label) rather than component internals, so tests stay valid through refactors and actually verify what users experience, not incidental implementation details.'
    },
    // additional expanded questions (80 new items)
    { id: 'q-html-forms-2', category: 'core', topic: 'HTML Semantics', question: 'Which attribute makes an input required for form submission?', options: ['required', 'validate', 'must', 'needed'], correctIndex: 0, relatedCardId: 'html-sem-7' },
    { id: 'q-html-link-rel', category: 'core', topic: 'HTML Semantics', question: 'Which rel value indicates a stylesheet link?', options: ['stylesheet', 'icon', 'preload', 'module'], correctIndex: 0, relatedCardId: 'html-sem-8' },
    { id: 'q-css-specificity-7', category: 'core', topic: 'CSS Specificity', question: 'Which selector is least specific?', options: ['#id', '.class', 'element', '[attr]'], correctIndex: 2, relatedCardId: 'css-spec-7' },
    { id: 'q-css-cascade', category: 'core', topic: 'CSS Specificity', question: 'What determines which CSS rule applies when selectors conflict?', options: ['Cascade order, specificity, importance', 'Only source order', 'Only specificity', 'Only !important'], correctIndex: 0, relatedCardId: 'css-spec-8' },
    { id: 'q-flexbox-gap', category: 'core', topic: 'Flexbox', question: 'Which property adds spacing between flex items?', options: ['gap', 'margin', 'padding', 'space-between'], correctIndex: 0, relatedCardId: 'flexbox-7' },
    { id: 'q-flexbox-align-self', category: 'core', topic: 'Flexbox', question: 'What does align-self do?', options: ['Override align-items for a single item', 'Change main axis', 'Set flex-basis', 'Control wrapping'], correctIndex: 0, relatedCardId: 'flexbox-8' },
    { id: 'q-grid-named-areas', category: 'core', topic: 'CSS Grid', question: 'What are named grid areas used for?', options: ['Referencing layout regions by name', 'Styling text', 'Animating grid', 'Replacing flexbox'], correctIndex: 0, relatedCardId: 'grid-7' },
    { id: 'q-grid-fr-usage', category: 'core', topic: 'CSS Grid', question: 'When is using fr units appropriate?', options: ['Distributing remaining space proportionally', 'Setting fixed pixel sizes', 'For fonts only', 'For images only'], correctIndex: 0, relatedCardId: 'grid-8' },
    { id: 'q-responsive-images-2', category: 'core', topic: 'Responsive Design', question: 'What attribute provides alternative image sources for different resolutions?', options: ['srcset', 'alt', 'sizes', 'picture'], correctIndex: 0, relatedCardId: 'resp-7' },
    { id: 'q-responsive-meta', category: 'core', topic: 'Responsive Design', question: 'Which meta tag is essential for responsive layouts on mobile?', options: ['viewport', 'charset', 'description', 'robots'], correctIndex: 0, relatedCardId: 'resp-8' },
    { id: 'q-dom-query', category: 'core', topic: 'DOM', question: 'Which returns a live HTMLCollection?', options: ['getElementsByClassName', 'querySelectorAll', 'querySelector', 'getElementById'], correctIndex: 0, relatedCardId: 'dom-7' },
    { id: 'q-dom-append', category: 'core', topic: 'DOM', question: 'Which method appends a node as the last child?', options: ['appendChild', 'insertBefore', 'replaceChild', 'removeChild'], correctIndex: 0, relatedCardId: 'dom-8' },
    { id: 'q-vdom-key-importance', category: 'core', topic: 'Virtual DOM', question: 'Why are keys important in lists?', options: ['Help React match elements between renders', 'Improve CSS specificity', 'Reduce bundle size', 'Enable server rendering'], correctIndex: 0, relatedCardId: 'vdom-5' },
    { id: 'q-vdom-reconciliation', category: 'core', topic: 'Virtual DOM', question: 'What is reconciliation in React?', options: ['Comparing virtual trees and updating DOM', 'Building CSS', 'Bundling assets', 'Server rendering'], correctIndex: 0, relatedCardId: 'vdom-6' },
    { id: 'q-eventloop-timers', category: 'core', topic: 'Event Loop', question: 'Which API schedules a callback after a delay?', options: ['setTimeout', 'requestAnimationFrame', 'Promise.resolve', 'setImmediate'], correctIndex: 0, relatedCardId: 'evloop-5' },
    { id: 'q-eventloop-microtask', category: 'core', topic: 'Event Loop', question: 'Which queue has priority: microtask or macrotask?', options: ['Microtask', 'Macrotask', 'They are equal', 'Depends on browser'], correctIndex: 0, relatedCardId: 'evloop-6' },
    { id: 'q-closures-memory-2', category: 'core', topic: 'Closures', question: 'How can closures lead to unexpected memory retention?', options: ['By holding references to outer scope variables', 'By freeing memory automatically', 'By using let only', 'By using strict mode'], correctIndex: 0, relatedCardId: 'closures-5' },
    { id: 'q-hoisting-let', category: 'core', topic: 'Hoisting', question: 'Accessing let before declaration causes:', options: ['ReferenceError', 'undefined', 'null', '0'], correctIndex: 0, relatedCardId: 'hoisting-5' },
    { id: 'q-promises-chaining-2', category: 'core', topic: 'Promises', question: 'How do you chain promises to run sequentially?', options: ['return promise.then(()=>next())', 'Use multiple setTimeouts', 'Use synchronous loops', 'Use callbacks only'], correctIndex: 0, relatedCardId: 'promises-5' },
    { id: 'q-async-await-best', category: 'core', topic: 'Async/Await', question: 'Why prefer try/catch with await?', options: ['To handle rejections cleanly', 'To speed up code', 'To avoid promises', 'To block the thread'], correctIndex: 0, relatedCardId: 'async-5' },
    { id: 'q-bubbling-stop-2', category: 'core', topic: 'Event Bubbling & Capturing', question: 'Which method prevents default browser behavior?', options: ['event.preventDefault()', 'event.stopPropagation()', 'event.stopImmediatePropagation()', 'return false'], correctIndex: 0, relatedCardId: 'bubble-5' },

    /* React additional */
    { id: 'q-react-state-hook', category: 'react', topic: 'React Hooks', question: 'What does useState return?', options: ['A state value and setter function', 'Only a state value', 'Only a setter', 'A promise'], correctIndex: 0, relatedCardId: 'hooks-5' },
    { id: 'q-react-effect-deps-2', category: 'react', topic: 'React Lifecycle', question: 'Why include dependencies in useEffect?', options: ['To re-run effect when they change', 'To prevent effect from running', 'To memoize effect', 'To delay effect'], correctIndex: 0, relatedCardId: 'lifecycle-6' },
    { id: 'q-react-key-prop', category: 'react', topic: 'React Lifecycle', question: 'Where should keys be placed in lists?', options: ['On the list item component', 'On the parent container', 'On the fragment only', 'On the CSS class'], correctIndex: 0, relatedCardId: 'lifecycle-7' },
    { id: 'q-react-props-defaults', category: 'react', topic: 'State vs Props', question: 'How to provide default props for a function component?', options: ['Use default parameters or defaultProps', 'Use propTypes only', 'Use global variables', 'Use inline styles'], correctIndex: 0, relatedCardId: 'stateprops-5' },
    { id: 'q-react-context-performance-2', category: 'react', topic: 'Context API', question: 'How to avoid unnecessary re-renders with context?', options: ['Memoize provider value', 'Never update context', 'Use global variables', 'Use inline objects'], correctIndex: 0, relatedCardId: 'context-5' },
    { id: 'q-react-memo-when', category: 'react', topic: 'Memoization', question: 'What should you measure before adding memoization?', options: ['Render cost and prop stability', 'Bundle size only', 'Number of components', 'CSS complexity'], correctIndex: 0, relatedCardId: 'memo-5' },

    /* Performance & Architecture additional */
    { id: 'q-debounce-params', category: 'perf', topic: 'Debouncing vs Throttling', question: 'Which parameter controls debounce delay?', options: ['timeout/delay', 'interval', 'frequency', 'rate'], correctIndex: 0, relatedCardId: 'debounce-5' },
    { id: 'q-throttle-impl', category: 'perf', topic: 'Debouncing vs Throttling', question: 'Throttling ensures a function runs at most:', options: ['Once per interval', 'Only once', 'Every event', 'Never'], correctIndex: 0, relatedCardId: 'debounce-6' },
    { id: 'q-ssg-usecase', category: 'perf', topic: 'SSR vs CSR vs SSG', question: 'SSG is best for pages that:', options: ['Are mostly static and cacheable', 'Require per-user data on first load', 'Need real-time updates', 'Are admin dashboards'], correctIndex: 0, relatedCardId: 'ssr-5' },
    { id: 'q-ssr-cache', category: 'perf', topic: 'SSR vs CSR vs SSG', question: 'How can SSR responses be cached?', options: ['Using CDN or server-side caching', 'By disabling cache', 'Only client-side caching', 'Using localStorage'], correctIndex: 0, relatedCardId: 'ssr-6' },
    { id: 'q-hydration-practices', category: 'perf', topic: 'Hydration', question: 'Which practice reduces hydration mismatch risk?', options: ['Avoid non-deterministic values in render', 'Use random in render', 'Use Date.now in JSX', 'Access window during SSR'], correctIndex: 0, relatedCardId: 'hydration-5' },
    { id: 'q-codesplit-adv', category: 'perf', topic: 'Code Splitting', question: 'What is a benefit of code splitting for mobile users?', options: ['Smaller initial download', 'More CPU usage', 'Slower navigation', 'Larger bundles'], correctIndex: 0, relatedCardId: 'codesplit-5' },
    { id: 'q-lazy-fonts', category: 'perf', topic: 'Lazy Loading', question: 'How to defer webfont loading to improve LCP?', options: ['Use font-display: swap', 'Preload fonts only', 'Inline fonts always', 'Avoid fonts'], correctIndex: 0, relatedCardId: 'lazy-5' },
    { id: 'q-webperf-cdn', category: 'perf', topic: 'Web Performance', question: 'Using a CDN primarily helps by:', options: ['Serving assets from edge locations closer to users', 'Reducing CSS size', 'Replacing JS', 'Improving local dev'], correctIndex: 0, relatedCardId: 'webperf-5' },

    /* Security & A11y additional */
    { id: 'q-auth-refresh', category: 'security', topic: 'Authentication Basics', question: 'What is a refresh token used for?', options: ['Obtain new access tokens without re-authenticating user', 'Encrypt data', 'Store user preferences', 'Replace cookies'], correctIndex: 0, relatedCardId: 'auth-5' },
    { id: 'q-auth-storage', category: 'security', topic: 'Authentication Basics', question: 'Why avoid storing JWTs in localStorage?', options: ['Susceptible to XSS; prefer httpOnly cookies for sensitive tokens', 'LocalStorage is too slow', 'LocalStorage is not supported', 'It breaks CSS'], correctIndex: 0, relatedCardId: 'auth-6' },
    { id: 'q-xss-sanitization', category: 'security', topic: 'XSS / CSRF / CORS', question: 'Which is a server-side mitigation for XSS?', options: ['Sanitize user input before rendering', 'Use client-side only checks', 'Disable JS', 'Use inline styles'], correctIndex: 0, relatedCardId: 'xss-8' },
    { id: 'q-csrf-mitigation', category: 'security', topic: 'XSS / CSRF / CORS', question: 'A common CSRF mitigation is:', options: ['Use SameSite cookies or CSRF tokens', 'Use GET for state changes', 'Disable cookies', 'Use localStorage only'], correctIndex: 0, relatedCardId: 'xss-9' },
    { id: 'q-a11y-semantics', category: 'security', topic: 'Accessibility', question: 'Which element improves accessibility for navigation?', options: ['nav', 'div', 'span', 'b'], correctIndex: 0, relatedCardId: 'a11y-5' },
    { id: 'q-a11y-forms', category: 'security', topic: 'Accessibility', question: 'Which attribute associates a label with an input?', options: ['for (htmlFor in React)', 'aria-label', 'data-id', 'role'], correctIndex: 0, relatedCardId: 'a11y-6' },

    /* Day-to-Day additional */
    { id: 'q-git-branching-2', category: 'workflow', topic: 'Git Workflows', question: 'What is trunk-based development?', options: ['Short-lived feature branches merged frequently to trunk', 'Long-lived branches only', 'No branching', 'Only tags'], correctIndex: 0, relatedCardId: 'git-8' },
    { id: 'q-git-revert', category: 'workflow', topic: 'Git Workflows', question: 'How to undo a commit without rewriting history?', options: ['git revert', 'git reset --hard', 'git rebase -i', 'git push --force'], correctIndex: 0, relatedCardId: 'git-9' },
    { id: 'q-ci-cd', category: 'workflow', topic: 'Git Workflows', question: 'What does CD stand for in CI/CD?', options: ['Continuous Delivery or Continuous Deployment', 'Code Delivery', 'Commit Deployment', 'Continuous Debugging'], correctIndex: 0, relatedCardId: 'git-10' },
    { id: 'q-testing-types', category: 'workflow', topic: 'Testing Awareness', question: 'Which test type is fastest to run locally?', options: ['Unit tests', 'E2E tests', 'Manual tests', 'Integration tests'], correctIndex: 0, relatedCardId: 'test-8' },
    { id: 'q-testing-mocks-2', category: 'workflow', topic: 'Testing Awareness', question: 'Why use mocks in unit tests?', options: ['Isolate the unit by replacing external dependencies', 'Make tests slower', 'Remove assertions', 'Only for UI'], correctIndex: 0, relatedCardId: 'test-9' },
    { id: 'q-testing-flaky', category: 'workflow', topic: 'Testing Awareness', question: 'A flaky test is one that:', options: ['Sometimes passes and sometimes fails without code changes', 'Always passes', 'Always fails', 'Is skipped'], correctIndex: 0, relatedCardId: 'test-10' },

    /* More Core Web & JS */
    { id: 'q-html-accessible-links', category: 'core', topic: 'HTML Semantics', question: 'Which attribute makes a link open in a new tab safely?', options: ['rel="noopener noreferrer" target="_blank"', 'target="_self"', 'rel="nofollow"', 'download'], correctIndex: 0, relatedCardId: 'html-sem-9' },
    { id: 'q-css-media-queries', category: 'core', topic: 'Responsive Design', question: 'Which media query targets screens wider than 768px?', options: ['@media (min-width: 768px)', '@media (max-width: 768px)', '@media (width: 768px)', '@media (device-width: 768px)'], correctIndex: 0, relatedCardId: 'resp-9' },
    { id: 'q-dom-clone', category: 'core', topic: 'DOM', question: 'Which method clones a node including its children?', options: ['cloneNode(true)', 'cloneNode(false)', 'copyNode', 'duplicateNode'], correctIndex: 0, relatedCardId: 'dom-9' },
    { id: 'q-eventloop-async', category: 'core', topic: 'Event Loop', question: 'Which API schedules a microtask?', options: ['Promise.resolve().then(...)', 'setTimeout', 'requestAnimationFrame', 'setInterval'], correctIndex: 0, relatedCardId: 'evloop-7' },
    { id: 'q-closures-currying', category: 'core', topic: 'Closures', question: 'Currying often uses closures to:', options: ['Preserve arguments for later invocation', 'Modify DOM', 'Change CSS', 'Optimize images'], correctIndex: 0, relatedCardId: 'closures-6' },
    { id: 'q-promises-error', category: 'core', topic: 'Promises', question: 'How to handle errors in a promise chain?', options: ['Use .catch at the end of the chain', 'Use try/catch only', 'Ignore errors', 'Use finally only'], correctIndex: 0, relatedCardId: 'promises-6' },
    { id: 'q-async-await-timeouts', category: 'core', topic: 'Async/Await', question: 'How to add a timeout to an awaitable promise?', options: ['Race the promise with a timeout promise', 'Use setTimeout only', 'Use synchronous loops', 'Use try/catch only'], correctIndex: 0, relatedCardId: 'async-6' },

    /* Final batch to reach ~80 new items */
    { id: 'q-react-error-boundaries', category: 'react', topic: 'React Lifecycle', question: 'What do error boundaries catch?', options: ['Errors during rendering, lifecycle methods, and constructors in child components', 'All runtime errors globally', 'Network errors only', 'CSS errors'], correctIndex: 0, relatedCardId: 'lifecycle-8' },
    { id: 'q-react-suspense', category: 'react', topic: 'React Lifecycle', question: 'What is Suspense used for?', options: ['Waiting for lazy-loaded components or data to be ready', 'Handling errors', 'Styling components', 'Managing state'], correctIndex: 0, relatedCardId: 'lifecycle-9' },
    { id: 'q-perf-lighthouse', category: 'perf', topic: 'Web Performance', question: 'What tool provides audits for performance, accessibility, and best practices?', options: ['Lighthouse', 'Webpack', 'ESLint', 'Prettier'], correctIndex: 0, relatedCardId: 'webperf-6' },
    { id: 'q-security-headers', category: 'security', topic: 'XSS / CSRF / CORS', question: 'Which header helps mitigate XSS by restricting sources for scripts?', options: ['Content-Security-Policy', 'X-Content-Type-Options', 'X-Frame-Options', 'Referrer-Policy'], correctIndex: 0, relatedCardId: 'xss-10' },
    { id: 'q-a11y-aria-live', category: 'security', topic: 'Accessibility', question: 'aria-live is used to:', options: ['Announce dynamic content changes to screen readers', 'Style elements', 'Hide content', 'Improve SEO'], correctIndex: 0, relatedCardId: 'a11y-7' },
    { id: 'q-git-code-review', category: 'workflow', topic: 'Git Workflows', question: 'A constructive code review should:', options: ['Explain why changes are suggested and offer alternatives', 'Only point out problems', 'Reject PRs without comment', 'Merge immediately'], correctIndex: 0, relatedCardId: 'git-11' },
    { id: 'q-testing-contract', category: 'workflow', topic: 'Testing Awareness', question: 'What is a contract test?', options: ['Verifies interactions between services match agreed contracts', 'Tests UI only', 'Replaces unit tests', 'Only for databases'], correctIndex: 0, relatedCardId: 'test-11' },
    { id: 'q-performance-image', category: 'perf', topic: 'Web Performance', question: 'Which image format often provides best compression for photos?', options: ['WebP', 'PNG', 'BMP', 'GIF'], correctIndex: 0, relatedCardId: 'webperf-7' }
];     