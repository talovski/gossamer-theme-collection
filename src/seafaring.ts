import { getWorkbenchColors } from "./workbench";

const palette = {
  bg: {
    editor: "#272d34",
    surface: "#1E2126",
    surfaceHover: "#2A2F34",
    badge: "#282D33",
    clickable: "#3A3E42",
    clickableHover: "#3A3E42c0",
    highlight: "#f4f4f4",
  },
  fg: {
    editor: "#cdd2dbff",
    muted: "#8F8F8F", // !
  },
  accents: {
    green: "#99c794",
    blue: "#6699cc",
    purple: "#c695c6",
    red: "#ec5f66",
    cyan: "#5fb4b4",
    yellow: "#f9ae58",
  },
  transparent: "#ff000000",
};

export const seafaring = {
  name: "Gossamer Seafaring",
  colors: getWorkbenchColors(palette),
  tokenColors: [
    {
      scope: ["string"],
      settings: {
        foreground: "#99c794",
      },
    },
    {
      scope: ["keyword", "storage.type"],
      settings: {
        foreground: "#c695c6",
      },
    },
    {
      scope: [
        "meta.function",
        "support.function",
        "entity.name.tag",
        "punctuation.definition.tag",
        "keyword.operator",
        "punctuation.definition.block",
        "punctuation.section",
        "punctuation.definition.heading",
        "entity.name.function",
        "meta.attribute.rust",
      ],
      settings: {
        foreground: "#5FB4B4",
      },
    },
    {
      scope: [
        "variable.other",
        "support.constant",
        "punctuation.brackets.attribute",
        "punctuation.brackets",
        "meta.jsx.children",
      ],
      settings: {
        foreground: "#D8DEE9",
      },
    },
    {
      scope: "comment",
      settings: {
        foreground: "#8a909c",
      },
    },
    {
      scope: [
        "variable.parameter",
        "keyword.operator.expression",
        "constant.other.color",
      ],
      settings: {
        foreground: "#F9AE58",
      },
    },
    {
      scope: [
        "support.type",
        "entity.name.type",
        "variable.other.property",
        "meta.object-literal.key",
        "variable.other.object",
        "variable.other.object.property",
        "support.constant.property",
      ],
      settings: {
        foreground: "#6699CC",
      },
    },
    {
      scope: ["storage.modifier", "constant.language"],
      settings: {
        foreground: "#EC5F66",
      },
    },
    {
      scope: ["entity.name.type.parameter", "entity.name.section"],
      settings: {
        foreground: "#F9AE58",
      },
    },
    {
      scope: "entity.other.attribute-name",
      settings: {
        foreground: "#c695c6",
      },
    },
    {
      scope: "support.class.component",
      settings: {
        foreground: "#EC5F66",
      },
    },
    {
      scope: ["support.constant.property-value"],
      settings: {
        foreground: "#BE97C3",
      },
    },
    {
      scope: "constant.numeric",
      settings: {
        foreground: "#F9AE58",
      },
    },
    {
      scope: "meta.property-value",
      settings: {
        foreground: "#D8DEE9",
      },
    },
    {
      scope: "keyword.operator.expression.typeof",
      settings: {
        foreground: "#F97B58",
      },
    },
  ],
};


await  Bun.write('./themes/seafaring.json', JSON.stringify(seafaring, null, 2))