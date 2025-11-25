import { getWorkbenchColors } from "./workbench";

const palette = {
  bg: {
    editor: "#1F1F28",
    surface: "#18181F",
    surfaceHover: "#2A2A2D",
    badge: "#27282E",
    clickable: "#1F1F27",
    clickableHover: "#27282E",
    highlight: "#f4f4f4",
  },
  fg: {
    editor: "#b9bbb8",
    muted: "#72716A",
  },
  accents: {
    green: "#98BB6C",
    blue: "#7E9CD8",
    purple: "#957FB8",
    red: "#C34043",
    cyan: "#7AA89F",
    yellow: "#C0A36E",
  },
  transparent: "#ff000000",
};

export const kanagawa = {
  name: "Kanagawa",
  colors: getWorkbenchColors(palette),
  tokenColors: [
    {
      name: "white",
      scope: [
        "meta.template.expression.tsx",
        "meta.template.expression.ts",
        "string.template.js meta.template.expression.js meta.embedded.line.js",
        "variable.parameter",
        "support.type.property-name",
        "constant.numeric",
        "constant.language",
        "support.constant",
        "constant.character",
        "constant.escape",
        "variable.parameter",
        "keyword.other.unit",
        "keyword.other",
        "constant.other.color",
        "meta.jsx.children",
      ],
      settings: {
        foreground: palette.fg.editor,
      },
    },
    {
      name: "muted",
      scope: [
        "punctuation.separator",
        "punctuation.terminator",
        "punctuation.section",
        "punctuation.accessor",
        "invalid",
        "invalid.deprecated",
        "comment",
        "punctuation.definition.comment",
      ],
      settings: {
        foreground: palette.fg.muted,
      },
    },
    {
      name: "green",
      scope: [
        "string",
        "constant.other.symbol",
        "constant.other.key",
        "markup.heading",
        "markup.inserted.git_gutter",
        "meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js",
      ],
      settings: {
        foreground: palette.accents.green,
      },
    },
    {
      name: "Purple",
      scope: [
        "keyword.control",
        "constant.other.color",
        "punctuation",
        "meta.tag",
        "punctuation.definition.tag",
        "punctuation.separator.inheritance.php",
        "punctuation.definition.tag.html",
        "punctuation.definition.tag.begin.html",
        "punctuation.definition.tag.end.html",
        "punctuation.section.embedded",
        "keyword.other.template",
        "keyword.other.substitution",
        "keyword",
        "storage.type",
        "storage.modifier",
      ],
      settings: {
        foreground: palette.accents.purple,
      },
    },
    {
      name: "Class, Support",
      scope: [
        "entity.name",
        "support.type",
        "support.class",
        "support.other.namespace.use.php",
        "meta.use.php",
        "support.other.namespace.php",
        "markup.changed.git_gutter",
        "support.type.sys-types",
        "entity.other.inherited-class",
        "support.constant.property-value.css",
        "meta.object-literal.key",
      ],
      settings: {
        foreground: palette.accents.cyan,
      },
    },
    {
      name: "blue",
      scope: [
        "entity.name.module.js",
        "variable.import.parameter.js",
        "variable.other.class.js",
        "variable.language",
        "entity.name.method.js",
        "meta.class-method.js entity.name.function.js",
        "variable.function.constructor",
        "entity.other.attribute-name.class",
        "source.sass keyword.control",
        "tag.decorator.js entity.name.tag.js",
        "tag.decorator.js punctuation.definition.tag.js",
        "support.type.property-name.json",
        "entity.name.tag",
        "meta.tag.sgml",
        "markup.deleted.git_gutter",
        "entity.name.function",
        "meta.function-call",
        "variable.function",
        "support.function",
        "keyword.other.special-method",
        "support.other.variable",
        "string.other.link",
      ],
      settings: {
        foreground: "#8AA9F9",
      },
    },
    {
      name: "orange",
      scope: [
        "entity.name",
        "punctuation.definition.thematic-break",
        "constant.numeric",
        "markup.quote punctuation.definition.blockquote",
        "markup.list punctuation.definition.list_item",
        "constant.numeric.line-number.match",
        "entity.other.attribute-name",
        "text.html.basic entity.other.attribute-name.html",
        "text.html.basic entity.other.attribute-name",
      ],
      settings: {
        foreground: palette.accents.yellow,
      },
    },
    {
      name: "markup headings",
      scope: "markup.heading",
      settings: {
        fontStyle: "bold",
      },
    },
    {
      name: "markup bold",
      scope: "markup.bold",
      settings: {
        fontStyle: "bold",
      },
    },
    {
      name: "markup italic",
      scope: "markup.italic",
      settings: {
        fontStyle: "italic",
      },
    },
    {
      name: "markup bold/italic",
      scope: "markup.italic markup.bold | markup.bold markup.italic",
      settings: {
        fontStyle: "bold italic",
      },
    },
  ],
};

await Bun.write("./themes/kanagawa.json", JSON.stringify(kanagawa, null, 2));
