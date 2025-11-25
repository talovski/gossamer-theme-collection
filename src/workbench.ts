import chroma from "chroma-js";

type Palette = {
  bg: {
    editor: string;
    surface: string;
    surfaceHover: string;
    clickable: string;
    clickableHover: string;
    highlight: string;
    badge: string;
  };
  fg: {
    editor: string;
    muted: string;
  };
  accents: {
    green: string;
    blue: string;
    purple: string;
    red: string;
    cyan: string;
    yellow: string;
  };
  transparent: string;
};

const alpha = (color: string, alpha: number) => {
  const a = chroma(color).alpha(alpha).hex();
  return a;
};

export const getWorkbenchColors = (palette: Palette) => ({
  focusBorder: palette.transparent,
  foreground: palette.fg.editor,
  descriptionForeground: palette.fg.muted,
  errorForeground: palette.accents.red,

  "textLink.foreground": palette.accents.blue,
  "textLink.activeForeground": palette.accents.blue,
  "textBlockQuote.background": palette.bg.surface,
  "textBlockQuote.border": palette.bg.surface,
  "textCodeBlock.background": palette.bg.surface,
  "textPreformat.foreground": palette.fg.muted,
  "textPreformat.background": palette.bg.surface,
  "textSeparator.foreground": palette.bg.surface,

  "icon.foreground": palette.fg.muted,
  "keybindingLabel.foreground": palette.fg.muted,

  "button.background": palette.bg.clickable,
  "button.foreground": palette.fg.editor,
  "button.hoverBackground": palette.bg.clickableHover,

  "button.secondaryBackground": palette.bg.clickable,
  "button.secondaryForeground": palette.fg.editor,
  "button.secondaryHoverBackground": palette.bg.clickableHover,

  "checkbox.background": palette.bg.clickable,
  "checkbox.border": palette.bg.clickableHover,

  "dropdown.background": palette.bg.clickable,
  "dropdown.border": palette.bg.clickable,
  "dropdown.foreground": palette.fg.editor,
  "dropdown.listBackground": palette.bg.surface,

  "input.background": palette.bg.badge,
  "input.border": palette.bg.badge,
  "input.foreground": palette.fg.editor,
  "input.placeholderForeground": chroma(palette.fg.muted).alpha(0.8),

  "badge.foreground": palette.fg.muted,
  "badge.background": palette.bg.badge,

  "progressBar.background": palette.bg.badge,

  "titleBar.activeForeground": palette.fg.muted,
  "titleBar.activeBackground": palette.bg.surface,
  "titleBar.inactiveForeground": palette.fg.muted,
  "titleBar.inactiveBackground": palette.bg.surface,
  "titleBar.border": palette.bg.surface,

  "commandCenter.activeBackground": palette.bg.surfaceHover,
  "commandCenter.foreground": palette.fg.muted,

  "activityBar.foreground": palette.fg.editor,
  "activityBar.inactiveForeground": chroma(palette.fg.muted).alpha(0.8),
  "activityBar.background": palette.bg.surface,
  "activityBarBadge.foreground": palette.fg.muted,
  "activityBarBadge.background": palette.bg.badge,
  "activityBar.activeBorder": palette.bg.clickable,
  "activityBar.border": palette.bg.surface,

  "sideBar.foreground": palette.fg.muted,
  "sideBar.background": palette.bg.surface,
  "sideBar.border": palette.bg.surface,
  "sideBarTitle.foreground": palette.fg.muted,
  "sideBarSectionHeader.foreground": palette.fg.muted,
  "sideBarSectionHeader.background": palette.bg.surface,
  "sideBarSectionHeader.border": palette.bg.surface,

  "list.hoverForeground": palette.fg.editor,
  "list.inactiveSelectionForeground": palette.fg.editor,
  "list.activeSelectionForeground": palette.fg.editor,
  "list.hoverBackground": palette.bg.surfaceHover,
  "list.inactiveSelectionBackground": palette.bg.surfaceHover,
  "list.activeSelectionBackground": palette.bg.surfaceHover,
  "list.focusForeground": palette.fg.editor,
  "list.focusBackground": palette.bg.surfaceHover,
  "list.inactiveFocusBackground": palette.bg.surfaceHover,
  "list.highlightForeground": palette.fg.editor,

  "tree.indentGuidesStroke": palette.bg.clickable,

  "notificationCenterHeader.foreground": palette.fg.muted,
  "notificationCenterHeader.background": palette.bg.badge,
  "notifications.foreground": palette.fg.editor,
  "notifications.background": palette.bg.surface,
  "notifications.border": palette.bg.surface,
  "notificationsErrorIcon.foreground": palette.accents.red,
  "notificationsWarningIcon.foreground": palette.accents.yellow,
  "notificationsInfoIcon.foreground": palette.fg.muted,

  "pickerGroup.border": palette.bg.clickable,
  "pickerGroup.foreground": palette.fg.muted,
  "quickInput.background": palette.bg.surface,
  "quickInput.foreground": palette.fg.muted,

  "statusBar.foreground": palette.fg.muted,
  "statusBar.background": palette.bg.surface,
  "statusBar.border": palette.bg.surface,
  "statusBar.focusBorder": palette.bg.surface,
  "statusBar.noFolderBackground": palette.bg.surface,
  "statusBar.debuggingForeground": palette.bg.surface,
  "statusBar.debuggingBackground": palette.accents.yellow,
  "statusBarItem.prominentBackground": palette.bg.surface,
  "statusBarItem.remoteForeground": palette.fg.muted,
  "statusBarItem.remoteBackground": palette.accents.purple,
  "statusBarItem.hoverBackground": palette.bg.editor,
  "statusBarItem.activeBackground": palette.bg.surface,
  "statusBarItem.focusBorder": palette.bg.surface,

  "editorGroupHeader.tabsBackground": palette.bg.surface,
  "editorGroupHeader.tabsBorder": palette.bg.surface,
  "editorGroup.border": palette.bg.surface,

  "editorWidget.resizeBorder": "#ff000000",

  "tab.activeForeground": palette.fg.editor,
  "tab.inactiveForeground": alpha(palette.fg.muted, 0.8),
  "tab.inactiveBackground": palette.bg.surface,
  "tab.activeBackground": alpha(palette.bg.badge, 0.5),
  "tab.hoverBackground": alpha(palette.bg.badge, 0.5),
  "tab.unfocusedHoverBackground": palette.bg.surfaceHover,
  "tab.border": palette.transparent,
  "tab.unfocusedActiveBorderTop": palette.transparent,
  "tab.activeBorder": alpha(palette.bg.badge, 0.5),
  "tab.unfocusedActiveBorder": palette.transparent,
  "tab.activeBorderTop": palette.transparent,

  "breadcrumb.foreground": palette.fg.muted,
  "breadcrumb.focusForeground": palette.fg.editor,
  "breadcrumb.activeSelectionForeground": palette.fg.editor,
  "breadcrumbPicker.background": palette.bg.surface,

  "editor.foreground": palette.fg.editor,
  "editor.background": palette.bg.editor,
  "editorWidget.background": palette.bg.surface,
  "editorWidget.border": palette.bg.surface,
  "editor.foldBackground": palette.bg.surfaceHover,
  "editor.lineHighlightBackground": alpha(palette.bg.highlight, 0.03),
  "editor.lineHighlightBorder": palette.transparent,
  "editorLineNumber.foreground": alpha(palette.fg.editor, 0.2),
  "editorLineNumber.activeForeground": palette.fg.editor,
  "editorIndentGuide.background": alpha(palette.bg.highlight, 0.05),
  "editorIndentGuide.activeBackground": alpha(palette.bg.highlight, 0.18),
  "editorWhitespace.foreground": palette.bg.badge,
  "editorCursor.foreground": palette.accents.yellow,

  "widget.border": palette.transparent,
  "widget.shadow": alpha(palette.bg.surface, 0.25),

  "selection.background": alpha(palette.fg.editor, 0.25),

  "editorSuggestWidget.focusHighlightForeground": palette.accents.purple,

  "editor.findMatchBackground": alpha(palette.accents.blue, 0.25),
  "editor.findMatchHighlightBackground": alpha(palette.bg.highlight, 0.1), //!
  "editor.linkedEditingBackground": alpha(palette.bg.highlight, 0.1),
  "editor.inactiveSelectionBackground": alpha(palette.bg.highlight, 0.08),
  "editor.selectionBackground": alpha(palette.bg.highlight, 0.2),
  "editor.selectionHighlightBackground": alpha(palette.accents.blue, 0.3),
  "editor.wordHighlightBackground": alpha(palette.accents.blue, 0.1),
  "editor.wordHighlightBorder": palette.transparent,
  "editor.wordHighlightStrongBackground": alpha(palette.accents.blue, 0.1),
  "editor.wordHighlightStrongBorder": alpha(palette.accents.blue, 0.1),
  "editorBracketMatch.background": alpha(palette.bg.highlight, 0.2),
  "editorBracketMatch.border": alpha(palette.bg.highlight, 0.1),

  "editorInlayHint.background": alpha(palette.accents.blue, 0.25),
  "editorInlayHint.foreground": palette.fg.muted,
  "editorInlayHint.typeBackground": alpha(palette.accents.blue, 0.25),
  "editorInlayHint.typeForeground": palette.fg.muted,
  "editorInlayHint.paramBackground": alpha(palette.accents.blue, 0.25),
  "editorInlayHint.paramForeground": palette.fg.muted,

  "editorGutter.modifiedBackground": alpha(palette.accents.yellow, 0.66),
  "editorGutter.addedBackground": alpha(palette.accents.green, 0.66),
  "editorGutter.deletedBackground": alpha(palette.accents.red, 0.66),

  "diffEditor.insertedLineBackground": alpha(palette.accents.green, 0.12),
  "diffEditor.insertedTextBackground": alpha(palette.accents.green, 0.12),
  "diffEditor.removedLineBackground": alpha(palette.accents.red, 0.12),
  "diffEditor.removedTextBackground": alpha(palette.accents.red, 0.12),

  "scrollbar.shadow": palette.transparent,
  "scrollbarSlider.background": alpha(palette.bg.highlight, 0.1),
  "scrollbarSlider.hoverBackground": alpha(palette.bg.highlight, 0.1),
  "scrollbarSlider.activeBackground": alpha(palette.bg.highlight, 0.1),
  "editorOverviewRuler.border": alpha(palette.bg.highlight, 0.1),

  "minimapSlider.background": alpha(palette.bg.highlight, 0.05),
  "minimapSlider.hoverBackground": alpha(palette.bg.highlight, 0.05),
  "minimapSlider.activeBackground": alpha(palette.bg.highlight, 0.05),

  "panel.background": palette.bg.surface,
  "panel.border": palette.bg.surface,
  "panelTitle.activeBorder": palette.bg.surface,
  "panelTitle.activeForeground": palette.fg.editor,
  "panelTitle.inactiveForeground": palette.fg.muted,
  "panelInput.border": palette.bg.surface,

  "debugIcon.breakpointForeground": alpha(palette.accents.red, 0.8),

  "debugConsole.infoForeground": palette.fg.muted,
  "debugConsole.warningForeground": palette.accents.yellow,
  "debugConsole.errorForeground": palette.accents.red,
  "debugConsole.sourceForeground": palette.accents.blue,
  "debugConsoleInputIcon.foreground": palette.accents.purple,

  "debugTokenExpression.name": palette.fg.editor,
  "debugTokenExpression.value": palette.fg.editor,
  "debugTokenExpression.string": palette.accents.green,
  "debugTokenExpression.boolean": palette.accents.purple,
  "debugTokenExpression.number": palette.accents.purple,
  "debugTokenExpression.error": palette.accents.red,

  "symbolIcon.arrayForeground": palette.fg.editor,
  "symbolIcon.booleanForeground": palette.fg.editor,
  "symbolIcon.classForeground": palette.fg.editor,
  "symbolIcon.colorForeground": palette.fg.editor,
  "symbolIcon.constructorForeground": palette.fg.editor,
  "symbolIcon.enumeratorForeground": palette.fg.editor,
  "symbolIcon.enumeratorMemberForeground": palette.fg.editor,
  "symbolIcon.eventForeground": palette.fg.editor,
  "symbolIcon.fieldForeground": palette.fg.editor,
  "symbolIcon.fileForeground": palette.fg.editor,
  "symbolIcon.folderForeground": palette.fg.editor,
  "symbolIcon.functionForeground": palette.fg.editor,
  "symbolIcon.interfaceForeground": palette.fg.editor,
  "symbolIcon.keyForeground": palette.fg.editor,
  "symbolIcon.keywordForeground": palette.fg.editor,
  "symbolIcon.methodForeground": palette.fg.editor,
  "symbolIcon.moduleForeground": palette.fg.editor,
  "symbolIcon.namespaceForeground": palette.fg.editor,
  "symbolIcon.nullForeground": palette.fg.editor,
  "symbolIcon.numberForeground": palette.fg.editor,
  "symbolIcon.objectForeground": palette.fg.editor,
  "symbolIcon.operatorForeground": palette.fg.editor,
  "symbolIcon.packageForeground": palette.fg.editor,
  "symbolIcon.propertyForeground": palette.fg.editor,
  "symbolIcon.referenceForeground": palette.fg.editor,
  "symbolIcon.snippetForeground": palette.fg.editor,
  "symbolIcon.stringForeground": palette.fg.editor,
  "symbolIcon.structForeground": palette.fg.editor,
  "symbolIcon.textForeground": palette.fg.editor,
  "symbolIcon.typeParameterForeground": palette.fg.editor,
  "symbolIcon.unitForeground": palette.fg.editor,
  "symbolIcon.variableForeground": palette.fg.editor,
  "symbolIcon.constantForeground": palette.fg.editor,

  "terminal.foreground": palette.fg.editor,
  "terminal.ansiBlack": alpha(palette.fg.editor, 0.6),
  "terminal.ansiRed": palette.accents.red,
  "terminal.ansiGreen": palette.accents.green,
  "terminal.ansiYellow": palette.accents.yellow,
  "terminal.ansiBlue": palette.accents.blue,
  "terminal.ansiMagenta": palette.accents.purple,
  "terminal.ansiCyan": palette.accents.cyan,
  "terminal.ansiWhite": palette.fg.editor,
  "terminal.ansiBrightBlack": palette.bg.surface,
  "terminal.ansiBrightRed": palette.accents.red,
  "terminal.ansiBrightGreen": palette.accents.green,
  "terminal.ansiBrightYellow": palette.accents.yellow,
  "terminal.ansiBrightBlue": palette.accents.blue,
  "terminal.ansiBrightMagenta": palette.accents.purple,
  "terminal.ansiBrightCyan": palette.accents.cyan,
  "terminal.ansiBrightWhite": palette.fg.editor,

  "editorBracketHighlight.foreground1": palette.fg.editor,
  "editorBracketHighlight.foreground2": palette.accents.purple,
  "editorBracketHighlight.foreground3": palette.accents.blue,
  "editorBracketHighlight.foreground4": palette.fg.editor,
  "editorBracketHighlight.foreground5": palette.accents.cyan,
  "editorBracketHighlight.foreground6": palette.accents.yellow,
  "editorBracketHighlight.unexpectedBracket.foreground": palette.fg.muted, // gray

  "gitDecoration.addedResourceForeground": palette.accents.green,
  "gitDecoration.modifiedResourceForeground": palette.accents.yellow,
  "gitDecoration.deletedResourceForeground": palette.accents.red,
  "gitDecoration.untrackedResourceForeground": palette.fg.muted,
  "gitDecoration.ignoredResourceForeground": alpha(palette.fg.muted, 0.5),
  "gitDecoration.conflictingResourceForeground": palette.accents.purple,
  "gitDecoration.submoduleResourceForeground": palette.fg.muted,

  "debugToolBar.background": palette.bg.surface,
  "editor.stackFrameHighlightBackground": palette.bg.editor,
  "editor.focusedStackFrameHighlightBackground": palette.bg.surfaceHover,

  "peekViewEditor.matchHighlightBackground": alpha(palette.accents.cyan, 0.3),
  "peekViewResult.matchHighlightBackground": alpha(palette.accents.cyan, 0.3),
  "peekViewEditor.background": palette.bg.surface,
  "peekViewResult.background": palette.bg.surface,
  "peekView.border": palette.bg.editor,
  "peekViewTitle.background": palette.bg.surface,

  "settings.headerForeground": palette.fg.editor,
  "settings.modifiedItemIndicator": palette.fg.muted,
  "welcomePage.buttonBackground": palette.bg.clickable,
  "welcomePage.buttonHoverBackground": palette.bg.clickableHover,
});
