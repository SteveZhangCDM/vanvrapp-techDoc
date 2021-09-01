::: info Ui and Controls
This page is explaining ui and ui interactions.
:::

**ControlAssist.cs:** Provides a clickable interface for the orbit camera. Generally toggled through the Control Assist button in Analysis Mode。

**ProportionIndicator.cs:** Manages the UI element proportion indicator, highlighting organs based on selected specimen types.

**AnnotationDetailPanel.cs:** Manages and displays all current annotation data; ensures only a single AV source is playing at any time.

**AnnotationDisplay.cs:** Manages the display and selection of current annotation indicators.

**AnnotationIndicator.cs:** A single instance of a numbered UI indicator, clickable to summon the attached annotation.

**AnnotationSelector.cs:** A UI bar for selecting annotations on the current specimen either by paging left/right or clicking from a drop-up select menu.

**ContentAudio.cs:** Rich media audio content that renders to AnnotationDetailPanel

**ContentImage.cs:** Rich media image content that renders to AnnotationDetailPanel

**ContentSeparator.cs:** A separator that appears between entries in AnnotationDetailPanel

**ContentText.cs:** Text content that renders to AnnotationDetailPanel

**ContentVideo.cs:** Rich media video content that renders to AnnotationDetailPanel. Can be either from YouTube or a direct media link.

**DropUpAnnotationEntry.cs:** Clickable entry for drop-up menu in AnnotationSelector

**FullScreenPlayer.cs:** Full-screen player for annotation rich media.

**AnnotationContentBlock.cs:** Generic interface for all content blocks.

**MultimediaContent.cs:** Parent class for rich media content classes; implements common controls and queries.

**ConfirmationPanel.cs:** Displays yes/no choices for users, with bindable behaviour for each.

**ErrorPanel.cs:** Displays dismissible error information.

**HoverButton.cs:** Binds simple text/icon color animations to PointerEnter/Exit events

**ModeChangeButton.cs:** Binds a simple mode-change event to a button.

**ToolTip.cs:** Binds an animated tooltip, activated on button hover.

**UIToggle.cs:** Manages an on/off toggle with simple state and animations (e.g. ControlAssist in analysis mode)

**UITwoStateIndicator.cs:** Binds icon/text changes to changes in application state.

**HelpPanel.cs:** TO IMPLEMENT; currently just knows what view mode it is in when enabled. Intention is to give context-specific help to  users.

**DisclaimerPanel.cs:** UI functionality for the disclaimer/policies panel that appears before entrance.

**StartButton.cs:** Implements the hold-to-enter button on Landing view.

**GeneralSettingsPanel.cs:** Implements UI for the Settings panel.

**DisplayResolutionButton.cs:** Implements a single selectable resolution button.

**LabOption.cs:** A UI representation of a single lab for the SelectorMenu

**SelectorButton.cs:** Generic button class for all selectable content in the Selector Menu

**SelectorMenu.cs:** Populates and manages the “Shelf” menu in Tray mode.

**SpecimenLoadingIndicator.cs:** General loading indicator for specimens. Not used if we are smart loading specimens.

**SpecimenCart.cs:** Attached to 3D cart object; responsible for spawning the correct number of trays and placing specimens on them.

