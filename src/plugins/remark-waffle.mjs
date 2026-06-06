/**
 * remark-waffle
 * -------------
 * A remark plugin that turns a Markdown container directive into a native
 * `<details>` accordion. Requires `remark-directive` to run first.
 *
 * Write this in your Markdown:
 *
 *   :::waffle
 *   A tangent the reader can collapse.
 *   :::
 *
 * …and it becomes:
 *
 *   <details class="waffle" open>
 *     <summary class="waffle-summary" aria-label="Waffle aside">🧇</summary>
 *     <div class="waffle-body">…original content…</div>
 *   </details>
 *
 * Usage in astro.config.mjs:
 *   remarkPlugins: [remarkDirective, remarkWaffle]
 *   // or with options: [remarkWaffle, { emoji: '💭', label: 'Note' }]
 *
 * @param {object} [options]
 * @param {string}  [options.name='waffle']      Directive name (:::name).
 * @param {string}  [options.className='waffle']  Class on the generated <details>.
 * @param {string}  [options.emoji='🧇']          Emoji shown in the summary.
 * @param {string}  [options.label='Waffle aside'] Accessible label in the summary.
 * @param {boolean} [options.open=true]            Whether asides start expanded.
 */
export default function remarkWaffle(options = {}) {
  const {
    name = 'waffle',
    className = 'waffle',
    emoji = '🧇',
    label = 'Waffle aside',
    open = true,
  } = options;

  return (tree) => {
    visit(tree, 'containerDirective', (node) => {
      if (node.name !== name) return;

      // Tell remark-rehype to render this directive as <details>.
      node.data = node.data || {};
      node.data.hName = 'details';
      node.data.hProperties = { className: [className], ...(open ? { open: true } : {}) };

      // Inject <summary> as first child using a paragraph node (block content)
      // with hName override — remark-rehype renders it as <summary>.
      const summary = {
        type: 'paragraph',
        data: {
          hName: 'summary',
          hProperties: { className: [`${className}-summary`], ariaLabel: label },
        },
        children: [{ type: 'text', value: emoji }],
      };

      // Wrap the original children in <div class="waffle-body"> using a
      // blockquote node (block content) with hName override.
      const body = {
        type: 'blockquote',
        data: {
          hName: 'div',
          hProperties: { className: [`${className}-body`] },
        },
        children: node.children,
      };

      node.children = [summary, body];
    });
  };
}

// Minimal depth-first visitor — avoids importing unist-util-visit so the
// plugin stays a zero-dependency drop-in for any remark project.
function visit(tree, type, visitor) {
  function walk(node) {
    if (node.type === type) visitor(node);
    if (Array.isArray(node.children)) node.children.forEach(walk);
  }
  walk(tree);
}
