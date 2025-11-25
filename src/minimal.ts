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

export const minimal = {
  name: "Gossamer Minimal",
  colors: getWorkbenchColors(palette),
  tokenColors: [
    {
      "name": "White",
      "scope": [
        "meta.template.expression",
        "string.template.js meta.template.expression.js meta.embedded.line.js",
        "storage",
        "variable.parameter",
        "entity.other.attribute-name",
        "meta.object-literal.key.js",
        "support.type.property-name"
      ],
      "settings": {
        "foreground": palette.fg.editor
      }
    },
    {
      "name": "Comment",
      "scope": [
        "comment",
        "punctuation.definition.comment",
        "invalid.deprecated", "source.yaml string.unquoted"
      ],
      "settings": {
        "foreground": "#ffffff70"
      }
    },
    {
      "name": "Green",
      "scope": [
        "string",
        "markup.list.numbered.bullet",
        "markup.inserted"
      ],
      "settings": {
        "foreground": palette.accents.green
      }
    },
    {
      "name": "Muted",
      "scope": [
        "punctuation.definition",
        "punctuation.separator",
        "punctuation.terminator",
        "punctuation.accessor",
        "punctuation.section",
        "punctuation.definition.annotation",
        "invalid"
      ],
      "settings": {
        "foreground": palette.fg.muted
      }
    },
    {
      "name": "Yellow",
      "scope": [
        "constant.numeric", 
        "constant.language",
        "punctuation.definition.thematic-break",
        "markup.quote punctuation.definition.blockquote",
        "markup.list punctuation.definition.list_item",
        "entity.name",
        "constant.numeric.line-number.match"
      ],
      "settings": {
        "foreground": palette.accents.yellow
      }
    },
    {
      "name": "Purple",
      "scope": [
        "keyword",
        "keyword.operator.word",
        "keyword.control",
        "keyword.operator.new.js",
        "storage.type",
        "storage.modifier",
        "keyword.operator",
        "constant.character",
        "constant.other",
        "meta.diff",
        "meta.diff.header",
        "(text punctuation.definition.italic | text punctuation.definition.bold)",
        "support.constant",
      ],
      "settings": {
        "foreground": palette.accents.purple
      }
    },
    {
      "name": "Cyan",
      "scope": [
        "variable.other.dollar.only.js",
        "variable.other.object.dollar.only.js",
        "variable.type.dollar.only.js",
        "support.class.dollar.only.js",
        "entity.name.function",
        "entity.name.tag",
        "support.class",
        "entity.name.tag.yaml"
      ],
      "settings": {
        "foreground": palette.accents.cyan
      }
    },
    {
      "name": "Red",
      "scope": [
        "markup.heading punctuation.definition.heading", 
        "markup.heading.1 punctuation.definition.heading",
        "variable.language",
        "variable.member",
        "markup.deleted",
        "message.error"
      ],
      "settings": {
        "foreground": palette.accents.red
      }
    },

    {
      "name": "Blue",
      "scope": [
        "variable.function",
        "variable.annotation",
        "support.function",
        "support.macro",
        "support.type",
        "entity.name.type",
        "support.class",
        "string.other.link",
        "markup.underline.link",
        "entity.other.inherited-class"

      ],
      "settings": {
        "foreground": palette.accents.blue
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


await Bun.write('./themes/minimal.json', JSON.stringify(minimal, null, 2))