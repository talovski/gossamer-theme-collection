import { getWorkbenchColors } from './workbench'

const palette = {
  bg: {
    editor: '#100F0F',
    surface: '#1C1B1A',
    surfaceHover: '#282726',
    badge: '#282726',
    clickable: '#343331',
    clickableHover: '#403E3C',
    highlight: '#B7B5AC',
  },
  fg: {
    editor: '#DAD8CE',
    muted: '#878580',
  },
  accents: {
    green: '#A0AF54',
    blue: '#4385BE',
    purple: '#8B7EC8',
    red: '#D14D41',
    cyan: '#3AA99F',
    yellow: '#D0A215',
  },
  transparent: '#ff000000',
}

export const ink = {
  name: "Gossamer Ink",
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
        "foreground": palette.fg.editor
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


await  Bun.write('./themes/ink.json', JSON.stringify(ink, null, 2))