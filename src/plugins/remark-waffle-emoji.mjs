/**
 * Converts :::waffle blocks into native details accordions.
 *
 * The visible control is intentionally a light <waffle> marker; the revealed
 * content inherits normal prose styling.
 */
export default function remarkWaffleEmoji(options = {}) {
  const {
    name = 'waffle',
    className = 'waffle',
    marker = '<waffle>',
    label = 'Waffle aside',
    open = true,
  } = options;

  return (tree) => {
    visit(tree, 'containerDirective', (node) => {
      if (node.name !== name) return;

      node.data = node.data || {};
      node.data.hName = 'details';
      node.data.hProperties = { className: [className], ...(open ? { open: true } : {}) };

      const summary = {
        type: 'paragraph',
        data: {
          hName: 'summary',
          hProperties: { className: [`${className}-summary`], ariaLabel: label },
        },
        children: [{ type: 'text', value: marker }],
      };

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

function visit(tree, type, visitor) {
  function walk(node) {
    if (node.type === type) visitor(node);
    if (Array.isArray(node.children)) node.children.forEach(walk);
  }
  walk(tree);
}
