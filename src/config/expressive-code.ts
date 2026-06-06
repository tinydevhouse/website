const toneColdTheme = {
  name: 'tone-cold',
  type: 'dark',
  colors: {
    'editor.background': '#1e1e2e',
    'editor.foreground': '#cdd6f4',
    'editor.selectionBackground': '#45475a',
  },
  tokenColors: [
    {
      settings: {
        foreground: '#cdd6f4',
      },
    },
    {
      scope: ['comment', 'punctuation.definition.comment'],
      settings: {
        foreground: '#9399b2',
        fontStyle: 'italic',
      },
    },
    {
      scope: ['keyword', 'storage', 'storage.type', 'storage.modifier'],
      settings: {
        foreground: '#cba6f7',
      },
    },
    {
      scope: ['entity.name.function', 'support.function', 'variable.function'],
      settings: {
        foreground: '#89b4fa',
      },
    },
    {
      scope: ['string', 'constant.other.symbol'],
      settings: {
        foreground: '#a6e3a1',
      },
    },
    {
      scope: ['constant.numeric', 'constant.language.boolean', 'constant.language.null'],
      settings: {
        foreground: '#fab387',
      },
    },
    {
      scope: ['entity.name.tag', 'support.class.component'],
      settings: {
        foreground: '#89b4fa',
      },
    },
    {
      scope: [
        'entity.other.attribute-name',
        'support.type.property-name',
        'variable.other.property',
      ],
      settings: {
        foreground: '#94e2d5',
      },
    },
    {
      scope: ['punctuation', 'meta.brace', 'meta.delimiter'],
      settings: {
        foreground: '#bac2de',
      },
    },
    {
      scope: ['markup.inserted', 'diff.header.to-file', 'punctuation.definition.inserted'],
      settings: {
        foreground: '#a6e3a1',
      },
    },
    {
      scope: ['markup.deleted', 'diff.header.from-file', 'punctuation.definition.deleted'],
      settings: {
        foreground: '#f38ba8',
      },
    },
  ],
};

export const toneExpressiveCodeOptions = {
  themes: [toneColdTheme],
  defaultProps: {
    wrap: true,
    preserveIndent: true,
  },
  styleOverrides: {
    borderRadius: '8px',
    borderWidth: '1px',
    borderColor: 'color-mix(in srgb, #cdd6f4 11%, transparent)',
    codeBackground: '#1e1e2e',
    codeFontFamily: 'var(--font-mono)',
    codeFontSize: 'var(--text-footnote)',
    codeLineHeight: '1.74',
    codePaddingBlock: '1.05rem',
    codePaddingInline: '1.25rem',
    uiFontFamily: 'var(--font-sans)',
    uiFontSize: 'var(--text-caption-1)',
    uiFontWeight: '600',
    scrollbarThumbColor: 'color-mix(in srgb, #cdd6f4 24%, transparent)',
    frames: {
      frameBoxShadowCssValue: 'none',
      editorTabBarBackground: '#181825',
      editorActiveTabBackground: '#1e1e2e',
      editorActiveTabForeground: 'color-mix(in srgb, #cdd6f4 74%, transparent)',
      editorActiveTabBorderColor: 'transparent',
      editorActiveTabIndicatorTopColor: 'transparent',
      editorActiveTabIndicatorBottomColor: 'transparent',
      editorTabBarBorderBottomColor: 'color-mix(in srgb, #cdd6f4 8%, transparent)',
      inlineButtonForeground: 'color-mix(in srgb, #cdd6f4 64%, transparent)',
      inlineButtonBorder: 'color-mix(in srgb, #cdd6f4 16%, transparent)',
      terminalTitlebarBackground: '#181825',
      terminalTitlebarForeground: 'color-mix(in srgb, #cdd6f4 62%, transparent)',
      terminalTitlebarDotsForeground: 'color-mix(in srgb, #cdd6f4 46%, transparent)',
      terminalTitlebarDotsOpacity: '0.42',
    },
  },
};
