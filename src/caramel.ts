import { getWorkbenchColors } from "./workbench";

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
    green: '#8EB673',
    blue: '#33a2f2',
    purple: '#BC70D2',
    red: '#de5d68',
    cyan: '#51a8b3',
    yellow: '#dbb671',
  },
  transparent: '#ff000000',
}

export const caramel = {
  name: "Gossamer-Caramel",
  colors: getWorkbenchColors(palette),
  tokenColors: [
		{
			// `variable in template strings`
			"scope": "variable.other.readwrite",
			"settings": {
				"foreground": palette.fg.editor
			}
		},
		{
			"scope": [
				"string",
				"punctuation.definition.string"
			],
			"settings": {
				"foreground": palette.accents.green
			}
		},
		{
			"scope": [
				"keyword",
				"storage.type",
				"punctuation.definition.tag",
				"keyword.operator",
				"support.class.component"
			],
			"settings": {
				"foreground": palette.accents.purple
			}
		},
		{
			"scope": [
				"punctuation"
			],
			"settings": {
				"foreground": palette.fg.muted
			}
		},
		{
			"scope": "entity.name.function",
			"settings": {
				"foreground": palette.accents.blue
			}
		},
		{
			"scope": [
				"meta.object-literal.key",
				"variable.other.property"
			],
			"settings": {
				"foreground": palette.accents.cyan
			}
		},
		{
			"scope": "entity.name.tag",
			"settings": {
				"foreground": palette.accents.red
			}
		},
		{
			"scope": [
				"support.type.primitive",
				"entity.name.type",
				"entity.other.inherited-class",
				"constant.numeric",
        "entity.other.attribute-name"
			],
			"settings": {
				"foreground": palette.accents.yellow
			}
		},
		{
			"scope": [
				"comment",
				"punctuation.definition.comment"
			],
			"settings": {
				"foreground": "#5a5b5e"
			}
		},
		{
			"scope": "support.type",
			"settings": {
				"foreground": palette.accents.cyan
			}
		}
	],
};



await Bun.write('./themes/caramel.json', JSON.stringify(caramel, null, 2))