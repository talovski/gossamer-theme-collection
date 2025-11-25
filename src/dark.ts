import { getWorkbenchColors } from './workbench'

const palette = {
  bg: {
    editor: '#232326',
    surface: '#1D1D1D',
    surfaceHover: '#2A2A2D',
    badge: '#313131',
    clickable: '#3A3E42',
    clickableHover: '#515458',
    highlight: '#f4f4f4',
  },
  fg: {
    editor: '#B3B3B3',
    muted: '#808080',
  },
  accents: {
    green: '#A3CE9E',
    blue: '#7096C5',
    purple: '#bd96c2',
    red: '#DE7272',
    cyan: '#74B1B2',
    yellow: '#F6AE5A',
  },
  transparent: '#ff000000',
}

export const dark = {
  name: "Gossamer Dark",
  colors: getWorkbenchColors(palette),
  tokenColors: [
    {
      "name": "white",
      "scope": [
        "meta.template.expression.tsx",
        "meta.template.expression.ts",
        "string.template.js meta.template.expression.js meta.embedded.line.js",
        "variable.parameter",
        "support.type.property-name"
      ],
      "settings": {
        "foreground": "#b3b3b3"
      }
    },
    {
      "name": "Punctuation",
      "scope": [
        "punctuation.separator",
        "punctuation.terminator",
        "punctuation.section",
        "punctuation.accessor",
        "invalid",
        "invalid.deprecated",
        "comment",
        "punctuation.definition.comment"
      ],
      "settings": {
        "foreground": palette.fg.muted
      }
    },
    {
      "name": "green",
      "scope": [
        "string",
        "markup.inserted",
        "markup.list.numbered.bullet"
      ],
      "settings": {
        "foreground": palette.accents.green
      }
    },
    {
      "name": "red",
      "scope": [
        "constant.language",
        "variable.member",
        "storage",
        "variable.language",
        "entity.name.tag",
        "markup.heading punctuation.definition.heading",
        "markup.heading.1 punctuation.definition.heading",
        "markup.deleted",
        "message.error"
      ],
      "settings": {
        "foreground": palette.accents.red
      }
    },
    {
      "name": "violet",
      "scope": [
        "constant.character",
        "constant.other",
        "keyword",
        "keyword.operator.word",
        "keyword.control",
        "keyword.operator.new.js",
        "keyword.operator",
        "storage.type",
        "entity.other.attribute-name",
        "support.constant",
        "(text punctuation.definition.italic | text punctuation.definition.bold)",
        "meta.diff",
        "meta.diff.header"
      ],
      "settings": {
        "foreground": palette.accents.purple
      }
    },
    {
      "name": "cyan",
      "scope": [
        "punctuation.definition.annotation",
        "variable.other.dollar.only.js",
        "variable.other.object.dollar.only.js",
        "variable.type.dollar.only.js",
        "support.class.dollar.only.js",
        "entity.name.function",
        "punctuation.definition",
        "support.class",
        "entity.name.tag.yaml"
      ],
      "settings": {
        "foreground": palette.accents.cyan
      }
    },
    {
      "name": "blue",
      "scope": [
        "meta.object-literal.key.js",
        "entity.other.inherited-class",
        "entity.name.type",
        "variable.function",
        "variable.annotation",
        "support.function",
        "support.macro",
        "support.type",
        "support.class",
        "string.other.link",
        "markup.underline.link"
      ],
      "settings": {
        "foreground": palette.accents.blue
      }
    },
    {
      "name": "orange",
      "scope": [
        "entity.name",
        "punctuation.definition.thematic-break",
        "constant.numeric",
        "markup.quote punctuation.definition.blockquote",
        "markup.list punctuation.definition.list_item",
        "constant.numeric.line-number.match"
      ],
      "settings": {
        "foreground": palette.accents.yellow
      }
    },
    {
      "name": "markup headings",
      "scope": "markup.heading",
      "settings": {
        "fontStyle": "bold"
      }
    },
    {
      "name": "markup bold",
      "scope": "markup.bold",
      "settings": {
        "fontStyle": "bold"
      }
    },
    {
      "name": "markup italic",
      "scope": "markup.italic",
      "settings": {
        "fontStyle": "italic"
      }
    },
    {
      "name": "markup bold/italic",
      "scope": "markup.italic markup.bold | markup.bold markup.italic",
      "settings": {
        "fontStyle": "bold italic"
      }
    },
  ]
}


await  Bun.write('./themes/dark.json', JSON.stringify(dark, null, 2))