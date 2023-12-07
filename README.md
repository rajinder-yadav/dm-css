# Power Packed CSS Styling for Everyone

![Version](https://img.shields.io/badge/dm--css-v2.3.1-blue.svg)
![Test](https://img.shields.io/badge/test-passing-brightgreen.svg)
[![Greenkeeper badge](https://badges.greenkeeper.io/rajinder-yadav/dm-css.svg)](https://greenkeeper.io/)
![License](https://img.shields.io/badge/license-GPL--3.0-blue.svg)

![DM-CSS](images/dm-css-logo.png)

<!-- TOC -->

- [Dyno Might CSS](#dyno-might-css)
  - [Introduction](#introduction)
  - [Benefits](#benefits)
- [Fundamentals](#fundamentals)
  - [Basic usage](#basic-usage)
  - [CSS resets](#css-resets)
  - [Style model](#style-model)
  - [Sacred Seven](#sacred-seven)
  - [Debugging](#debugging)
- [Getting started](#getting-started)
  - [Setup](#setup)
  - [Starter HTML](#starter-html)
  - [Using NPM module](#using-npm-module)
  - [Using the CDN](#using-the-cdn)
- [Box model](#box-model)
- [Display](#display)
  - [General Display styles](#general-display-styles)
  - [CSS Table styles](#css-table-styles)
  - [CSS Table caption](#css-table-caption)
  - [Layout example](#layout-example)
- [Sizing](#sizing)
  - [Percentage based](#percentage-based)
  - [Fixed unit based](#fixed-unit-based)
  - [Resetting sizing](#resetting-sizing)
- [Spacing](#spacing)
- [Padding](#padding)
  - [Padding top](#padding-top)
  - [Padding bottom](#padding-bottom)
  - [Padding left](#padding-left)
  - [Padding right](#padding-right)
  - [Padding vertical](#padding-vertical)
  - [Padding horizontal](#padding-horizontal)
- [Margin](#margin)
  - [Margin top](#margin-top)
  - [Margin bottom](#margin-bottom)
  - [Margin left](#margin-left)
  - [Margin right](#margin-right)
  - [Margin vertical](#margin-vertical)
  - [Margin horizontal](#margin-horizontal)
  - [Auto Margin](#auto-margin)
- [Positioning](#positioning)
  - [Position types](#position-types)
  - [Position location](#position-location)
  - [Z Index](#z-index)
- [Font](#font)
  - [Height scaling up](#height-scaling-up)
  - [Height scaling down](#height-scaling-down)
  - [Heading](#heading)
  - [Font styles](#font-styles)
  - [Font weight](#font-weight)
- [Text](#text)
  - [Text justification](#text-justification)
  - [Text vertical alignments](#text-vertical-alignments)
  - [Text transformation](#text-transformation)
  - [Text wrapping](#text-wrapping)
  - [Text overflow](#text-overflow)
  - [Text Word break](#text-word-break)
  - [Text line height](#text-line-height)
  - [Text direction](#text-direction)
- [CSS Borders](#css-borders)
  - [Border values](#border-values)
  - [Border notations](#border-notations)
  - [Border all sides](#border-all-sides)
  - [Border top](#border-top)
  - [Border bottom](#border-bottom)
  - [Border left](#border-left)
  - [Border right](#border-right)
  - [Border vertical](#border-vertical)
  - [Border horizontal](#border-horizontal)
  - [Removing Borders](#removing-borders)
  - [Border Radius](#border-radius)
  - [Corner Radius](#corner-radius)
  - [Face Radius](#face-radius)
  - [Border line style](#border-line-style)
  - [Circle Radius](#circle-radius)
  - [Pill style Borders](#pill-style-borders)
- [Lists](#lists)
  - [Bullet marks](#bullet-marks)
  - [Bullet placement](#bullet-placement)
  - [List orientation](#list-orientation)
  - [List style reset](#list-style-reset)
- [Utility](#utility)
  - [Centering](#centering)
  - [Visibility](#visibility)
  - [Opacity](#opacity)
- [Floats](#floats)
  - [Clearfix](#clearfix)
- [CSS Columns](#css-columns)
- [Flexbox](#flexbox)
  - [Flex Container](#flex-container)
  - [Flex direction](#flex-direction)
  - [Flex item flow](#flex-item-flow)
  - [Wrap mode](#wrap-mode)
  - [Justify Main axis](#justify-main-axis)
  - [Justify Cross axis](#justify-cross-axis)
  - [Align content Cross axis](#align-content-cross-axis)
  - [Item align Cross axis](#item-align-cross-axis)
  - [Flex ordering](#flex-ordering)
  - [Growing Flex item](#growing-flex-item)
  - [Shrinking Flex item](#shrinking-flex-item)
  - [Grid](#grid)
  - [Responsive design](#responsive-design)

<!-- /TOC -->
## Dyno Might CSS

### Introduction

Powerful CSS styling made simple, fast and fun!

__Dyno Might CSS__ (DM-CSS) is a concise CSS Style-Notation layout and design Toolkit. It is designed specifically to use simple and memorable Style-Notation that is specified as a "__class__" attribute.

Dyno Might CSS brings consistency to your HTML/JSX coding and allows for quick addition of CSS styles that are easy to read.

Works with HTML, Angular, React and Vue.js.

### Benefits

Some of the features of __Dyno Might CSS__ Toolkit you will enjoy.

- Small size (21 KB).
- Fast loading and blazing execution.
- Robust compact Style-Notation.
- Easy to learn.
- Increased productivity.
- Designed for Designers, yet developer friendly!
- No side effects, works like your own custom CSS styles.
- Tested with hundreds of Test cases (604).

## Fundamentals

### Basic usage

Dyno Might CSS Style-Notation are added as "__class__" attribute to an element's HTML Tag.

For example, let us say we want to center text and capitalize it. We also want a dashed border with a width of 20% of available space. The Style-Notation would look like the following.

![centered text](images/intro.png)

```html
<div class="ttc ttup b1 dash w20">centered text</div>
```

The Style-Notation read from left to right adds the following CSS styles.

1. Center text (text transform).
1. Text transform uppercase.
1. Draw a border 1px wide.
1. Set border line style to dashed (default is solid).
1. Set "__\<div\>__" element to take up 20% of available width.

Notice the power of Style-Notation and how it is additive, resulting in increased productivity. Context switching between HTML/JSX and the CSS style sheet is eliminated for all core CSS styles.

### CSS resets

The Root Font family is set to "Roboto" with a height of __16px__. This base size is used to calculate the size of other elements by using the "__rem__" CSS unit.

Dyno Might CSS resets CSS styles by resetting __margin__ and __padding__.

1. The __padding__ values are reset to "__0__" (zero).
1. The __margin__ values are reset to "__0__" (zero).

This is done to make layout calculations straight forward.

The global __Box Model__ is changed to use "__border-box__". This simplifies layout calculation since both margin and padding are contained inside the element's Box Model.

### Style model

The Style-Notation is intentionally designed to be short, so one may be productive with less typing. When several notations are applied, this helps keep the overall line length much shorter than if long descriptive words were used for Style-Notation.

Here are some general __mnemonics__ used in the naming of Style-Notations.

|Mnemonic|Description|
|-|-|
|t|Top|
|b|Bottom|
|l|Left|
|r|Right|
|x|Left and right (horizontal), or expand (stretch) with Flexbox|
|y|Top and bottom (vertical)|

![style model](images/mnemonic-box.png)

For each Style-Notation category, the mnemonic (key) will be listed to help with learning.

### Sacred Seven

Dyno Might CSS adheres to the "__Sacred Seven__" when it comes to value ranges. Almost all values range from 0 to 7. A value of zero "0", is used to reset or clear a style.

### Debugging

If something seems off with the CSS, you can switch to using a non-compressed friendlier CSS file for DM-CSS.

|CSS Files|Description|
|-|-|
|dm.css|Uncompressed CSS|
|dm.prefix.css|Uncompressed with vendor prefix added|
|dm.min.css|Compressed, for Production use|

## Getting started

### Setup

In the HTML root in the head section, it is a good idea to add the following responsive viewport meta tag.

```html
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
```

Dyno Might CSS requires HTML5 doctype.

```html
<!doctype html>
<html lang="en">
  ...
</html>
```

### Starter HTML

You may use the following HTML file to start from.

```html
<!doctype html>
<html lang="en">
  <head>
    <title>Dyno Might CSS</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- DM-CSS Toolkit -->
    <link href="https://cdn.jsdelivr.net/npm/dm-css@2.2.1/css/dm.min.css" rel="stylesheet">
  </head>
  <body>
    <h1>Hello, Word Wide Web!</h1>
  </body>
</html>
```

There are two ways to install the Dyno Might CSS Toolkit as a dependency to your project.

1. Install as a NPM module.
1. Use the CDN.

### Using NPM module

From a Node.js based project root, type:

```sh
npm install --save dm-css
```

### Using the CDN

To use the CDN, add the following __\<link\>__ Tag to your __index.html__ file, and enter the version of your choice.

__General format__

```html
<link href="https://cdn.jsdelivr.net/npm/dm-css@<version>/css/dm.min.css" rel="stylesheet">
```

Example usage for Dyno Might CSS version 2.2.1.

```html
<link href="https://cdn.jsdelivr.net/npm/dm-css@2.2.1/css/dm.min.css" rel="stylesheet">
```

## Box model

Dyno Might CSS defaults to using the "__border-box__" Box Model. You can however change this.

|Notation|Box model|Note|
|-|-|-|
|bbox|Border box|default|
|cbox|Content box| |

```html
<div class="cbox"> ... </div>
<div class="bbox"> ... </div>
```

__Recommendation__: Do not change the default Box Model for new projects, and never mix Box Models.

## Display

You can hide and show the DOM element with the following styles. This will cause the element to be removed from the DOM and will affect layout. All descendant elements of hidden element are also removed.

|Notation|Visibility|
|-|-|
|show|Add and display element and its descendants|
|hide|Hide and remove element and its descendants|

```html
<div class="show"> ... </div>
<div class="hide"> ... </div>
```

__Note:__ Styles "__hide__" is an alias for "__dnone__", prefer to use __hide__ as it is more clear what we expect to happen.

### General Display styles

__Mnemonic__: d = display

|Notation|CSS display style|
|-|-|
|dnone|none|
|dinline|inline|
|diblock|inline-block|
|dblock|block|
|dflex|flex|
|diflex|inline-flex|
|dgrid|grid|
|digrid|inline-grid|

```html
<div class="dnone"> ... </div>
<div class="dinline"> ... </div>
<div class="diblock"> ... </div>
<div class="dblock"> ... </div>
<div class="dflex"> ... </div>
<div class="diflex"> ... </div>
<div class="dgrid"> ... </div>
<div class="digrid"> ... </div>
```

### CSS Table styles

Pure CSS table layout Style-Notation works like its HTML table counterpart, without the additional tags. This makes the HTML cleaner and less busy.

__Mnemonic__: t = table

|Notation|CSS Table display style|
|-|-|
|table|table|
|tr|table-row|
|td|table-cell|
|tcap|table-caption|
|tcol|table-column|
|tcolgroup|table-column-group|
|thead|table-header-group|
|tbody|table-row-group|
|tfoot|table-footer-group

```html
<div class="table"> ... </div>
<div class="tr"> ... </div>
<div class="td"> ... </div>
<div class="tcap"> ... </div>
<div class="tcol"> ... </div>
<div class="tcolgroup"> ... </div>
<div class="thead"> ... </div>
<div class="tbody"> ... </div>
<div class="tfoot"> ... </div>
```

### CSS Table caption

__Mnemonic__: tcap = table caption

|Notation|CSS Table caption|
|-|-|
|tcapt|Caption top|
|tcapb|Caption bottom|

```html
<div class="tcapt"> ... </div>
<div class="tcapb"> ... </div>
```

### Layout example

Using CSS table to layout a HTML Form.

![input form](images/form.png)

```html
<div class="bg w30 m4">
  <form class="table w100 pr4">
    <p class="tcap ml3 pt3">Enter your full name and age.</p>
    <div class="tr">
      <label class="pl3 td wauto" for="fname">First name:</label>
      <input class="td w100" type="text" id="fname">
    </div>
    <div class="tr">
      <label class="pl3 td wauto" for="lname">Last name:</label>
      <input class="td w100" type="text" id="lname">
    </div>
    <div class="tr">
      <label class="pl3 td wauto" for="age">Age:</label>
      <input class="td w100" type="text" id="age">
    </div>
    <div class="tr ttr">
      <span class="td"></span>
      <button class="td">Save</button>
    </div>
  </form>
</div>
```

## Sizing

Set the size of the element "__viewport__".

Scale values for width and height range from 10% to 100% and incremented by 10.

### Percentage based

__Mnemonic__: w = width, h = height

|Notation|Values|Description|
|-|-|-|
|w|10-100|Set width percentage|
|h|10-100|Set height percentage|
|wmin|10-100|Set minimum width percentage|
|wmax|10-100|Set maximum width percentage|
|hmin|10-100|Set minimum height percentage|
|hmax|10-100|Set maximum height percentage|

```html
<div class="w10"> ... </div>
<div class="w20"> ... </div>
<div class="w30"> ... </div>
<div class="w40"> ... </div>
<div class="w50"> ... </div>
<div class="w60"> ... </div>
<div class="w70"> ... </div>
<div class="w80"> ... </div>
<div class="w90"> ... </div>
<div class="w100"> ... </div>
```

### REM Fixed height and width

Fixed width and height sizes are based on the root font using the "__rem__" unit.

|Notation|Values|Description|
|-|-|-|
|wf|1-35|Fixed rem based width|
|hf|1-35|Fixed rem based height|

```html
<div class="wf10"> ... </div>
<div class="hf25"> ... </div>
```

### Resetting sizing

The following Style-Notations can be used to clear and reset an element's minimum and maximum Viewport size.

These styles work on "__inline__" element, remember to change the display size for "__block__" type element when using these Styles-Notations.

```js
  <div class="diblock wauto b1 p2">Some Title</div>
```

__Mnemonic__: w = width, h = height

|Notation|Size dimension reset|
|-|-|
|hauto|Height set to auto|
|wauto|Width set to auto|
|hscreen|Height max viewport|
|wscreen|Width max viewport|

```html
<div class="hauto"> ... </div>
<div class="wauto"> ... </div>
<div class="hnomax"> ... </div>
<div class="wnomax"> ... </div>
```

__Sizing Pro Tip__

In CSS, inline elements like "__\<span\>__" or "__\<i\>__" inherit their height values for margin and padding from surrounding text. The height value for margin or padding for an __inline__ element cannot be changed. To be able to change these properties, you must change their display property from "__inline__" to "__inline-block__".

```html
<span class="diblock"> ... </span>
```

Make sure you have a good understanding of CSS display types. How block and inline elements get rendered and ultimately how this will affect setting their width and height. Otherwise this can lead to some confusion as it will seem as the style changes are not working.

## Spacing

The Box Model that Dyno Might CSS uses is "__border-box__". For more info on Box Model see [MDN box-sizing](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing).

![border box](images/box-model.png)

By default both "__padding__" and "__margin__" values for each side has been set to zero. This allows for simple straight-forward layout calculation, giving you the control when and how much padding or space to add to each HTML element.

The Style-Notation for spacing allows setting the __margin__ and __padding__ used by an element.

- Padding and margin scale values range from 0 to 10.
- Scale values follow the Golden Ratio.

## Padding

Padding size based on the Golden Ratio multiple of the base font size. Size range from 0 to 10.

__Mnemonic__: p = padding

|Notation|Values|Box side|
|-|-|-|
|p|0-10|Pad all sides|
|pt|0-10|Pad top|
|pb|0-10|Pad bottom|
|pl|0-10|Pad left|
|pr|0-10|Pad right|
|py|0-10|Pad top and bottom|
|px|0-10|Pad left and right|

```html
<div class="p0">Padding size 0</div>
<div class="p1">Padding size 1</div>
<div class="p2">Padding size 2</div>
<div class="p3">Padding size 3</div>
<div class="p4">Padding size 4</div>
<div class="p5">Padding size 5</div>
<div class="p6">Padding size 6</div>
<div class="p7">Padding size 7</div>
<div class="p8">Padding size 87</div>
<div class="p9">Padding size 9</div>
<div class="p10">Padding size 10</div>
```

### Padding top

__Mnemonic__: pt = padding top

```html
<div class="pt0">Padding top size 0</div>
<div class="pt1">Padding top size 1</div>
<div class="pt2">Padding top size 2</div>
<div class="pt3">Padding top size 3</div>
<div class="pt4">Padding top size 4</div>
<div class="pt5">Padding top size 5</div>
<div class="pt6">Padding top size 6</div>
<div class="pt7">Padding top size 7</div>
<div class="pt8">Padding top size 8</div>
<div class="pt9">Padding top size 9</div>
<div class="pt10">Padding top size 10</div>
```

![padding top](images/pad-top.png)

### Padding bottom

__Mnemonic__: pb = padding bottom

```html
<div class="pb0">Padding bottom size 0</div>
<div class="pb1">Padding bottom size 1</div>
<div class="pb2">Padding bottom size 2</div>
<div class="pb3">Padding bottom size 3</div>
<div class="pb4">Padding bottom size 4</div>
<div class="pb5">Padding bottom size 5</div>
<div class="pb6">Padding bottom size 6</div>
<div class="pb7">Padding bottom size 7</div>
<div class="pb8">Padding bottom size 8</div>
<div class="pb9">Padding bottom size 9</div>
<div class="pb10">Padding bottom size 10</div>
```

![padding bottom](images/pad-bottom.png)

### Padding left

__Mnemonic__: pl = padding left

```html
<div class="pl0">Padding left size 0</div>
<div class="pl1">Padding left size 1</div>
<div class="pl2">Padding left size 2</div>
<div class="pl3">Padding left size 3</div>
<div class="pl4">Padding left size 4</div>
<div class="pl5">Padding left size 5</div>
<div class="pl6">Padding left size 6</div>
<div class="pl7">Padding left size 7</div>
<div class="pl8">Padding left size 8</div>
<div class="pl9">Padding left size 9</div>
<div class="pl10">Padding left size 10</div>
```

![padding left](images/pad-left.png)

### Padding right

__Mnemonic__: pr = padding right

```html
<div class="pr0">Padding right size 0</div>
<div class="pr1">Padding right size 1</div>
<div class="pr2">Padding right size 2</div>
<div class="pr3">Padding right size 3</div>
<div class="pr4">Padding right size 4</div>
<div class="pr5">Padding right size 5</div>
<div class="pr6">Padding right size 6</div>
<div class="pr7">Padding right size 7</div>
<div class="pr8">Padding right size 8</div>
<div class="pr9">Padding right size 9</div>
<div class="pr10">Padding right size 10</div>
```

![padding right](images/pad-right.png)

### Padding vertical

__Mnemonic__: py = padding vertical

```html
<span class="py0">Padding vertical 0</span>
<span class="py1">Padding vertical 1</span>
<span class="py2">Padding vertical 2</span>
<span class="py3">Padding vertical 3</span>
<span class="py4">Padding vertical 4</span>
<span class="py5">Padding vertical 5</span>
<span class="py6">Padding vertical 6</span>
<span class="py7">Padding vertical 7</span>
<span class="py8">Padding vertical 8</span>
<span class="py9">Padding vertical 9</span>
<span class="py10">Padding vertical 10</span>
```

![padding vertical](images/pad-y.png)

### Padding horizontal

__Mnemonic__: px = padding horizontal

```html
<span class="px0">Padding horizontal 0</span>
<span class="px1">Padding horizontal 1</span>
<span class="px2">Padding horizontal 2</span>
<span class="px3">Padding horizontal 3</span>
<span class="px4">Padding horizontal 4</span>
<span class="px5">Padding horizontal 5</span>
<span class="px6">Padding horizontal 6</span>
<span class="px7">Padding horizontal 7</span>
<span class="px8">Padding horizontal 8</span>
<span class="px9">Padding horizontal 9</span>
<span class="px10">Padding horizontal 10</span>
```

![padding horizontal](images/pad-x.png)

## Margin

Margin size based on the Golden Ratio multiple of the base font size. Size range from 0 to 10.

__Mnemonic__: m = margin

|Notation|Values|Box side|
|-|-|-|
|m|0-10|Margin all sides|
|mt|0-10|Margin top|
|mb|0-10|Margin bottom|
|ml|0-10|Margin left|
|mr|0-10|Margin right|
|my|0-10|Margins top and bottom|
|mx|0-10|Margins left and right|

```html
<div class="m0">Margin size 0</div>
<div class="m1">Margin size 1</div>
<div class="m2">Margin size 2</div>
<div class="m3">Margin size 3</div>
<div class="m4">Margin size 4</div>
<div class="m5">Margin size 5</div>
<div class="m6">Margin size 6</div>
<div class="m7">Margin size 7</div>
<div class="m8">Margin size 8</div>
<div class="m9">Margin size 9</div>
<div class="m10">Margin size 10</div>
```

### Margin top

__Mnemonic__: m t= margin top

```html
<div class="mt0">Margin top size 0</div>
<div class="mt1">Margin top size 1</div>
<div class="mt2">Margin top size 2</div>
<div class="mt3">Margin top size 3</div>
<div class="mt4">Margin top size 4</div>
<div class="mt5">Margin top size 5</div>
<div class="mt6">Margin top size 6</div>
<div class="mt7">Margin top size 7</div>
<div class="mt8">Margin top size 8</div>
<div class="mt9">Margin top size 9</div>
<div class="mt10">Margin top size 10</div>
```

![margin top](images/margin-top.png)

### Margin bottom

__Mnemonic__: mb = margin bottom

```html
<div class="mb0">Margin bottom size 0</div>
<div class="mb1">Margin bottom size 1</div>
<div class="mb2">Margin bottom size 2</div>
<div class="mb3">Margin bottom size 3</div>
<div class="mb4">Margin bottom size 4</div>
<div class="mb5">Margin bottom size 5</div>
<div class="mb6">Margin bottom size 6</div>
<div class="mb7">Margin bottom size 7</div>
<div class="mb8">Margin bottom size 8</div>
<div class="mb9">Margin bottom size 9</div>
<div class="mb10">Margin bottom size 10</div>
```

![margin bottom](images/margin-bottom.png)

### Margin left

__Mnemonic__: ml = margin left

```html
<div class="ml0">Margin left size 0</div>
<div class="ml1">Margin left size 1</div>
<div class="ml2">Margin left size 2</div>
<div class="ml3">Margin left size 3</div>
<div class="ml4">Margin left size 4</div>
<div class="ml5">Margin left size 5</div>
<div class="ml6">Margin left size 6</div>
<div class="ml7">Margin left size 7</div>
<div class="ml8">Margin left size 8</div>
<div class="ml9">Margin left size 9</div>
<div class="ml10">Margin left size 10</div>
```

![margin left](images/margin-left.png)

### Margin right

__Mnemonic__: mr = margin right

```html
<div class="mr0">Margin right size 0</div>
<div class="mr1">Margin right size 1</div>
<div class="mr2">Margin right size 2</div>
<div class="mr3">Margin right size 3</div>
<div class="mr4">Margin right size 4</div>
<div class="mr5">Margin right size 5</div>
<div class="mr6">Margin right size 6</div>
<div class="mr7">Margin right size 7</div>
<div class="mr8">Margin right size 8</div>
<div class="mr9">Margin right size 9</div>
<div class="mr10">Margin right size 10</div>
```

![margin right](images/margin-right.png)

### Margin vertical

__Mnemonic__: my = margin vertical

```html
<span class="my0">Margin vertical 0</span>
<span class="my1">Margin vertical 1</span>
<span class="my2">Margin vertical 2</span>
<span class="my3">Margin vertical 3</span>
<span class="my4">Margin vertical 4</span>
<span class="my5">Margin vertical 5</span>
<span class="my6">Margin vertical 6</span>
<span class="my7">Margin vertical 7</span>
<span class="my8">Margin vertical 8</span>
<span class="my9">Margin vertical 9</span>
<span class="my10">Margin vertical 10</span>
```

![margin vertical](images/margin-y.png)

### Margin horizontal

__Mnemonic__: mx = margin horizontal

```html
<span class="mx0">Margin horizontal 0</span>
<span class="mx1">Margin horizontal 1</span>
<span class="mx2">Margin horizontal 2</span>
<span class="mx3">Margin horizontal 3</span>
<span class="mx4">Margin horizontal 4</span>
<span class="mx5">Margin horizontal 5</span>
<span class="mx6">Margin horizontal 6</span>
<span class="mx7">Margin horizontal 7</span>
<span class="mx8">Margin horizontal 8</span>
<span class="mx9">Margin horizontal 9</span>
<span class="mx10">Margin horizontal 10</span>
```

![margin horizontal](images/pad-x.png)

### Auto Margin

By setting margin to auto, size is determined from available space.

__Mnemonic__: ma = margin auto

|Notation|Box side|
|-|-|
|ma|Auto margins horizontal and vertical|
|max|Auto margins left and right|
|may|Auto margins top and bottom|
|mal|Auto margins left |
|mar|Auto margins right|

```html
<div class="ma">Auto</div>
<div class="max">Auto horizontal</div>
<div class="may">Auto vertial</div>
<div class="mal">Auto left</div>
<div class="mar">Auto right</div>
```

## Positioning

Most Browsers allow an element to be re-positioned relative to its default position, relative to another element, or fixed to a given location.

Dyno Might CSS makes positioning elements simple.

### Position types

An element position property can be changed to one of the following CSS styles.

|Notation|Description|
|-|-|
|absolute|Position according to closest __relative__ positioned ancestor|
|fixed|Position relative to the Viewport|
|relative|Position relative to natural position using offset value|
|static|Default, use natural positioning|
|sticky|Natural position until scroll max is reached, then sticks|

```html
<span class="absolute"> ... </span>
<span class="fixed"> ... </span>
<span class="relative"> ... </span>
<span class="static"> ... </span>
<span class="sticky"> ... </span>
```

### Position location

Using fixed or absolute positioning.

|Notation|Position value|
|-|-|-|
|top|Top value of zero|
|bottom|Bottom value of zero|
|left|Left value of zero|
|right|Right value of zero|

```html
<span class="top"> ... </span>
<span class="bottom"> ... </span>
<span class="left"> ... </span>
<span class="right"> ... </span>
```

### Z Index

Set the Z order of an element. Positive Z values move an element in-front of stacked elements, while negative Z value move an element behind stacked elements.

__Mnemonic__: z = Z-Index

|Notation|Values|Z Index|
|-|-|-|
|z|0-10|Positive Z order|
|z-|1-10|Negative Z order|
|zauto||Automatic positive Z order|

For automatic Z ordering, successive elements are given a positive increasing Z order.

```html
<span class="zauto"> ... </span>
```

The default Z-index value is 0, and goes up to 7.

__Pro tip__: Z indexing only work for elements with a position of "__relative__" or "__absolute__".

Positive Z-index values.

```html
<span class="z0"> ... </span>
<span class="z1"> ... </span>
<span class="z2"> ... </span>
<span class="z3"> ... </span>
<span class="z4"> ... </span>
<span class="z5"> ... </span>
<span class="z6"> ... </span>
<span class="z7"> ... </span>
<span class="z8"> ... </span>
<span class="z9"> ... </span>
<span class="z10"> ... </span>
```

Negative Z-index values.

```html
<span class="z-1"> ... </span>
<span class="z-2"> ... </span>
<span class="z-3"> ... </span>
<span class="z-4"> ... </span>
<span class="z-5"> ... </span>
<span class="z-6"> ... </span>
<span class="z-7"> ... </span>
<span class="z-8"> ... </span>
<span class="z-9"> ... </span>
<span class="z-10"> ... </span>
```

## Font

A font scale of 1 has a font height equal to the root element, which is set to 16px from the font family of Roboto (unless changed).

__Mnemonic__: fh = Font height

|Notation|Values|Font scaling|
|-|-|-|
|fh |1-7|Increase font size|
|fh-|1-7|Reduce font size|
|h  |1-7|Shrink Heading size|

### Height scaling up

Positive font heights follows the "__Perfect Third__" scale, ranging from 1 to 7. Font size will grow.

Higher scale values result in progressively larger fonts. Note this is the reverse of HTML heading values.

![font heights](images/font-heights.png)

```html
<div class="fh1">Font height 1</div>
<div class="fh2">Font height 2</div>
<div class="fh3">Font height 3</div>
<div class="fh4">Font height 4</div>
<div class="fh5">Font height 5</div>
<div class="fh6">Font height 6</div>
<div class="fh7">Font height 7</div>
```

### Height scaling down

Negative font height get incrementally smaller and follow a scale from 0.9 to 0.3 reduced by a fix delta of 0.1.

When a font height is scaled down, the values become a fraction of the root font height.

You will notice in the Style-Notation, scaled down fonts have a leading "-" dash before the value, this can be consider negative scaled values.

![font heights](images/font-heights2.png)

__Mnemonic__: fh = Font height

```html
<div class="fh-1">Font height 1</div>
<div class="fh-2">Font height 2</div>
<div class="fh-3">Font height 3</div>
<div class="fh-4">Font height 4</div>
<div class="fh-5">Font height 5</div>
<div class="fh-6">Font height 6</div>
<div class="fh-7">Font height 7</div>
```

### Heading

There are also 6 Heading Style-Notations, which display as the regular HTML heading tags.

- Headings have been changed to use the "__Major Third__" scale.
- For headings you can also use the regular HTML __h1__ to __h6__ tags.

![headings](images/headings.png)

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

__Note__: Style-Notation provides an extra heading value for __h7__.

### Font styles

__Mnemonic__: fs = Font style

|Notation|Font style|
|-|-|
|fsn|Font style none, reset all styles|
|fsb|Bold|
|fsi|Italic|
|fsu|Underline|
|fss|Strike-through|
|fsw|Wavy underline|

![font style](images/font-styles.png)

```html
<div class="fsn">Font style none</div>
<div class="fsb">Font style bold</div>
<div class="fsi">Font style italic</div>
<div class="fsu">Font style underline</div>
<div class="fss">Font style strike-through</div>
<div class="fsw">Font style wavy underline</div>
```

### Font weight

The font weight depends on the font being used. The weight determines the thickness of the displayed characters.

The weight range is from 100 to 900, and increases thickness (thin to think). Not all values maybe be valid, as it depends on the font set being used.

__Note__: Values increment by 100.

__Mnemonic__: fw = Font weight

|Notation|Values|Font weight|
|-|-|-|
|fw|100-900|Set the font boldness (thickness) value|

```html
<div class="fw100"> ... </div>
<div class="fw200"> ... </div>
<div class="fw300"> ... </div>
<div class="fw400"> ... </div>
<div class="fw500"> ... </div>
<div class="fw600"> ... </div>
<div class="fw700"> ... </div>
<div class="fw800"> ... </div>
<div class="fw900"> ... </div>
```

![Font weights](/images/font-weights.png)

## Text

Here are a few handy CSS styles for working with text.

### Text justification

The following Style-Notations are used to justify text.

__Mnemonic__: tt = Text transform

|Notation|Text transform|
|-|-|
|ttl|Left justify text|
|ttc|Center text|
|ttr|Right justify text|
|ttj|Justify multi-line text|

![text justify](images/text-justify.png)

```html
<div class="ttl">This text is left justified</div>
<div class="ttc">This text is centered</div>
<div class="ttr">This text is right justified</div>
<div class="ttj">This text is fully justified, more text to wrap around and justify</div>
```

__Note__: For text justification to work, the text must span multiple lines.

### Text vertical alignments

Specify the vertical alignment of an inline or table-cell box.

__Mnemonic__: ttv = Text transform vertical

|Notation|Description|
|-|-|
|ttvt|Vertical align top|
|ttvm|Vertical align middle|
|ttvbl|Vertical align baseline|
|ttvb|Vertical align bottom|
|ttvtt|Vertical align text top|
|ttvtb|Vertical align text bottom|
|ttsub|Vertical align sub-script|
|ttsuper|Vertical align super-script|

```html
<div class="ttvt"> ... </div>
<div class="ttvm"> ... </div>
<div class="ttvbl"> ... </div>
<div class="ttvb"> ... </div>
<div class="ttvtt"> ... </div>
<div class="ttvtb"> ... </div>
<div class="ttsub"> ... </div>
<div class="ttsuper"> ... </div>
```

### Text transformation

__Mnemonic__: tt = Text transform

|Notation|Text transform|
|-|-|
|ttcap|Capitalize text|
|ttup|Make all text upper-case|
|ttlow|Mark all text lower-case|
|ttnone|Remove any text transform previously set|

![text transform](images/text-transform.png)

```html
<div class="ttcap">text has been transformed</div>
<div class="ttup">text has been transformed</div>
<div class="ttlow">TEXT HAS BEEN TRANSFORMED</div>
<div class="ttnone">Text has NOT been transformed</div>
```

Style-Notation "__ttnone__" should be used to reset existing text style when they are not desired.

### Text wrapping

Control if wrapping should occur when text overflows its Viewport.

__Mnemonic__: tt = Text transform

|Notation|Text flow mode|
|-|-|
|ttwrap|Wrap text outside its Viewport|
|ttnowrap|Allow text to flow outside its Viewport|

```html
<div class="ttwrap"> ... </div>
<div class="ttnowrap"> ... </div>
```

### Text overflow

Specify text overflow behavior when it is bigger than its display Viewport.

__Mnemonic__: tt = Text transform

|Notation|Text flow mode|
|-|-|
|ttof|Allow text to overflow Viewport|
|ttofa|Add a scroll-bar when text overflows|
|ttclip|Hide overflowed text outside Viewport|
|ttscroll|Add a scroll-bar when text overflows|

```html
<div class="ttof">Allow overflow</div>
<div class="ttofa">Add scroll-bar when needed</div>
<div class="ttclip">Clip text outside Viewport</div>
<div class="ttscroll">Add scroll-bar</div>
```

Text overflow control for vertical direction, when lines wrap around.

__Mnemonic__: tt = Text transform

|Notation|Text vertical flow mode|
|-|-|
|ttofy|Allow text to overflow Viewport|
|ttofya|Add a scroll-bar when text overflows|
|ttclipy|Hide overflowed text outside Viewport|
|ttscrolly|Add a scroll-bar when text overflows|

```html
<div class="ttofy"> ... </div>
<div class="ttofya"> ... </div>
<div class="ttclipy"> ... </div>
<div class="ttscrolly"> ... </div>
```

Text overflow control for horizontal direction.

__Mnemonic__: tt = Text transform

|Notation|Text horizontal flow mode|
|-|-|
|ttofx|Allow text to overflow Viewport|
|ttofxa|Add a scroll-bar when text overflows|
|ttclipx|Hide overflowed text outside Viewport|
|ttscrollx|Add a scroll-bar when text overflows|

```html
<div class="ttofx"> ... </div>
<div class="ttofxa"> ... </div>
<div class="ttclipx"> ... </div>
<div class="ttscrollx"> ... </div>
```

### Text Word break

Control how breaking occurs when end of line is reached.

__Mnemonic__: tt = Text transform

|Notation|Text word break|
|-|-|
|ttwb|Break word on space|
|ttwba|Word with no space will be broken|

```html
<div class="ttwb">The Fox jumped over the lazy sleeping Dog.</div>
<div class="ttwba">Supercalifragilisticexpialidocious</div>
```

### Text line height

Set the line height.

__Mnemonic__: ttl = Text transform line

|Notation|Values|Line height|
|-|-|-|
|ttlh|0-10|Increase line height|
|ttlh-|1-10|Reduce line height|

Increasing line heights.

```html
<div class="ttlh0"> ... </div>
<div class="ttlh1"> ... </div>
<div class="ttlh2"> ... </div>
<div class="ttlh3"> ... </div>
<div class="ttlh4"> ... </div>
<div class="ttlh5"> ... </div>
<div class="ttlh6"> ... </div>
<div class="ttlh7"> ... </div>
<div class="ttlh8"> ... </div>
<div class="ttlh9"> ... </div>
<div class="ttlh10"> ... </div>
```

Decreasing line heights.

```html
<div class="ttlh-1"> ... </div>
<div class="ttlh-2"> ... </div>
<div class="ttlh-3"> ... </div>
<div class="ttlh-4"> ... </div>
<div class="ttlh-5"> ... </div>
<div class="ttlh-6"> ... </div>
<div class="ttlh-7"> ... </div>
<div class="ttlh-8"> ... </div>
<div class="ttlh-9"> ... </div>
<div class="ttlh-10"> ... </div>
```

### Text direction

Set the direction of text based on language in use.

|Notation|Text direction|
|-|-|
|ltr|Left of right|
|rtl|Right to left|

```html
<div class="ltr"> ... </div>
<div class="rtl"> ... </div>
```

## CSS Borders

The Border Style-Notation provides the flexibility to add and remove borders.

- The default border line style is a solid line.

An element can be given borders on:

- All sides
- No sides
- One side (top, bottom, left ,right)
- Two sides (top-bottom or left-right)

### Border values

The postfix value for a border denotes the thickness of the border line.

- The supported values range from 0 to 10.

A value of "0" (zero) indicates no border. You would use it to remove borders from an element that may already have borders.

### Border notations

__Mnemonic__: b = border

|Notation|Values|Border sides|
|-|-|-|
|b|0-10|Border on all sides|
|bt|0-10|Border on top|
|bb|0-10|Border on bottom|
|bl|0-10|Border on left|
|br|0-10|Border on right|
|by|0-10|Border on top and bottom|
|bx|0-10|Border on left and right|

### Border all sides

Border thickness value range from 0 to 10.

![borders](images/borders.png)

```html
<div class="b0"> ... </div>
<div class="b1"> ... </div>
<div class="b2"> ... </div>
<div class="b3"> ... </div>
<div class="b4"> ... </div>
<div class="b5"> ... </div>
<div class="b6"> ... </div>
<div class="b7"> ... </div>
<div class="b8"> ... </div>
<div class="b9"> ... </div>
<div class="b10"> ... </div>
```

### Border top

__Mnemonic__: bt = border top

![border top](images/border-top.png)

```html
<div class="bt0"> ... </div>
<div class="bt1"> ... </div>
<div class="bt2"> ... </div>
<div class="bt3"> ... </div>
<div class="bt4"> ... </div>
<div class="bt5"> ... </div>
<div class="bt6"> ... </div>
<div class="bt7"> ... </div>
<div class="bt8"> ... </div>
<div class="bt9"> ... </div>
<div class="bt10"> ... </div>
```

### Border bottom

__Mnemonic__: bb = border bottom

![border bottom](images/border-bottom.png)

```html
<div class="bb0"> ... </div>
<div class="bb1"> ... </div>
<div class="bb2"> ... </div>
<div class="bb3"> ... </div>
<div class="bb4"> ... </div>
<div class="bb5"> ... </div>
<div class="bb6"> ... </div>
<div class="bb7"> ... </div>
<div class="bb8"> ... </div>
<div class="bb9"> ... </div>
<div class="bb10"> ... </div>
```

### Border left

__Mnemonic__: bl = border left

![border left](images/border-left.png)

```html
<div class="bl0"> ... </div>
<div class="bl1"> ... </div>
<div class="bl2"> ... </div>
<div class="bl3"> ... </div>
<div class="bl4"> ... </div>
<div class="bl5"> ... </div>
<div class="bl6"> ... </div>
<div class="bl7"> ... </div>
<div class="bl8"> ... </div>
<div class="bl9"> ... </div>
<div class="bl10"> ... </div>
```

### Border right

__Mnemonic__: br = border right

![border right](images/border-right.png)

```html
<div class="br0"> ... </div>
<div class="br1"> ... </div>
<div class="br2"> ... </div>
<div class="br3"> ... </div>
<div class="br4"> ... </div>
<div class="br5"> ... </div>
<div class="br6"> ... </div>
<div class="br7"> ... </div>
<div class="br8"> ... </div>
<div class="br9"> ... </div>
<div class="br10"> ... </div>
```

### Border vertical

__Mnemonic__: by = border vertical

![border vertical](images/by.png)

```html
<div class="by0"> ... </div>
<div class="by1"> ... </div>
<div class="by2"> ... </div>
<div class="by3"> ... </div>
<div class="by4"> ... </div>
<div class="by5"> ... </div>
<div class="by6"> ... </div>
<div class="by7"> ... </div>
<div class="by8"> ... </div>
<div class="by9"> ... </div>
<div class="by10"> ... </div>
```

### Border horizontal

__Mnemonic__: bx = border horizontal

![border horizontal](images/bx.png)

```html
<div class="bx0"> ... </div>
<div class="bx1"> ... </div>
<div class="bx2"> ... </div>
<div class="bx3"> ... </div>
<div class="bx4"> ... </div>
<div class="bx5"> ... </div>
<div class="bx6"> ... </div>
<div class="bx7"> ... </div>
<div class="bx8"> ... </div>
<div class="bx9"> ... </div>
<div class="bx10"> ... </div>
```

### Removing Borders

There may be times you wish to remove a border from one or all sides. To do this, use a value of "0" (zero) with one of border Style-Notation.

__Mnemonic__: b = border

```html
<div class="b0"> ... </div>
<div class="bt0"> ... </div>
<div class="bb0"> ... </div>
<div class="bl0"> ... </div>
<div class="br0"> ... </div>
<div class="by0"> ... </div>
<div class="bx0"> ... </div>
```

You can use a combination of border styles to add then remove borders.

![border removal](images/br0.png)

- Add borders to all sides and clear the border on the right side.

```html
<div class="b2 br0"> ... </div>
```

### Border Radius

Border corners can be given a radius value to round out the corners.

- The border radius values range from 0 to 7.
- This scale follows the Golden Ratio.

A radius value of "0" (zero) will reset "round" borders to have square corners.

__Mnemonic__: r = radius

|Notation|Values|Radius size|
|-|-|-|
|r|0-10|All radius|

```html
<div class="b1 r0"> ... </div>
<div class="b1 r1"> ... </div>
<div class="b1 r2"> ... </div>
<div class="b1 r3"> ... </div>
<div class="b1 r4"> ... </div>
<div class="b1 r5"> ... </div>
<div class="b1 r6"> ... </div>
<div class="b1 r7"> ... </div>
<div class="b1 r8"> ... </div>
<div class="b1 r9"> ... </div>
<div class="b1 r10"> ... </div>
```

__NOTE__: As the size gets bigger, radius value 6 and up come into play.

![radius](images/radius.png)

Radius size is always consistent as shown below for larger dimensions.

__NOTE__: As the size gets bigger, radius value 6 and up come into play.

![radius](images/radius2.png)

### Corner Radius

You can set the border value for each individual corner using the following Style-Notation.

__Mnemonic__: rt = radius top, rb = radius bottom

|Notation|Values|Border box corner|
|-|-|-|
|rtl|0-10|Top left|
|rtr|0-10|Top right|
|rbl|0-10|Bottom left|
|rbr|0-10|Bottom right|

![corner radius](images/corner-radius.png)

```html
<div class="b1 rtl5">Top left radius</div>
<div class="b1 rtr5">Top right radius</div>
<div class="b1 rbl5">Bottom left radius</div>
<div class="b1 rbr5">Bottom right radius</div>
```

### Face Radius

The face radius covers each side of the Box Model to have round corners.

__Mnemonic__: r = radius

|Notation|Values|Border box face|
|-|-|-|
|rt|0-10|Top face|
|rb|0-10|Bottom face|
|rl|0-10|Left face|
|rr|0-10|Right face|

![face radius](images/face-radius.png)

```html
<div class="b1 rt5">Radius top face</div>
<div class="b1 rb5">Radius bottom face</div>
<div class="b1 rl5">Radius left face</div>
<div class="b1 rr5">Radius right face</div>
```

### Border line style

Set border line style to dashed.

__Mnemonic__: b = border

|Notation|Border box side|
|-|-|
|bdash|All sides|
|bdasht|Dash on top|
|bdashb|Dash on bottom|
|bdashl|Dash on left|
|bdashr|Dash on right|
|bdashy|Dash on top and bottom|
|bdashx|Dash on left and right|

![border line dashed](images/dashes.png)

```html
<div class="b2 bdash"> ... </div>
<div class="b2 bdasht"> ... </div>
<div class="b2 bdashb"> ... </div>
<div class="b2 bdashl"> ... </div>
<div class="b2 bdashr"> ... </div>
<div class="b2 bdashx"> ... </div>
<div class="b2 bdashy"> ... </div>
```

__Border dot__

Border line style dotted.

__Mnemonic__: b = border

|Notation|Border box side|
|-|-|
|bdot|All sides|
|bdott|Dot on top|
|bdotb|Dot on bottom|
|bdotl|Dot on left|
|bdotr|Dot on right|
|bdoty|Dot on top and bottom|
|bdotx|Dot on left and right|

```html
<div class="b2 bdot"> ... </div>
<div class="b2 bdott"> ... </div>
<div class="b2 bdotb"> ... </div>
<div class="b2 bdotl"> ... </div>
<div class="b2 bdotr"> ... </div>
<div class="b2 bdotx"> ... </div>
<div class="b2 bdoty"> ... </div>
```

__Border solid__

Border line style dotted.

__Mnemonic__: b = border

|Notation|Border box side|
|-|-|
|bsolid|All sides|
|bsolidt|Dot on top|
|bsolidb|Dot on bottom|
|bsolidl|Dot on left|
|bsolidr|Dot on right|
|bsolidy|Dot on top and bottom|
|bsolidx|Dot on left and right|

```html
<div class="b2 bsolid"> ... </div>
<div class="b2 bsolidt"> ... </div>
<div class="b2 bsolidb"> ... </div>
<div class="b2 bsolidl"> ... </div>
<div class="b2 bsolidr"> ... </div>
<div class="b2 bsolidx"> ... </div>
<div class="b2 bsolidy"> ... </div>
```

__Border double__

Border line style dotted.

__Mnemonic__: b = border

|Notation|Border box side|
|-|-|
|bdouble|All sides|
|bdoublet|Dot on top|
|bdoubleb|Dot on bottom|
|bdoublel|Dot on left|
|bdoubler|Dot on right|
|bdoubley|Dot on top and bottom|
|bdoublex|Dot on left and right|

```html
<div class="b2 bdouble"> ... </div>
<div class="b2 bdoublet"> ... </div>
<div class="b2 bdoubleb"> ... </div>
<div class="b2 bdoublel"> ... </div>
<div class="b2 bdoubler"> ... </div>
<div class="b2 bdoublex"> ... </div>
<div class="b2 bdoubley"> ... </div>
```

### Circle Radius

To draw a circular border, use Style-Notation "__circle__".

You must include the border notation, "__b__", as it governs the border property on an element, whereas "__circle__" sets the border radius value.

- The "__circle__" notation uses a radius of 50%.

|Notation|Radius side|
|-|-|
|circle|All sides have a 50% radius value|

Below are three boxes with pixel dimensions of: 80x40, 80x80, 40x80.

```css
.box1 { width: 80px; height: 40px; }
.box2 { width: 80px; height: 80px; }
.box2 { width: 40px; height: 80px; }
```

![circles](images/circles.png)

```html
<div class="box1 b1 circle"> ... </div>
<div class="box2 b1 circle"> ... </div>
<div class="box3 b1 circle"> ... </div>
```

### Pill style Borders

There are four pill styles for curved borders.

|Notation|Values|Pill shape|
|-|-|-|
|pill|1-4|Pill shared radius|

![pills](images/pills.png)

```html
<div class="b1 pill1"> ... </div>
<div class="b1 pill2"> ... </div>
<div class="b1 pill3"> ... </div>
<div class="b1 pill4"> ... </div>
```

## Lists

Styles to apply to both order and un-ordered list and list items.

### Bullet marks

__Mnemonic__: ls = List style

|Notation|Bullet style|
|-|-|
|lsnone|No bullet|
|lsdisc|Dot shaped bullet|
|lscircle|Circle outlined bullet|
|lssquare|Square shaped bullet|
|lsalpha|Lower case alpha bullets|
|lsroman|Lower case Roman numbers bullets|
|lsdecimal|Counting number bullets|

```html
<div class="lsnone"> ... </div>
<div class="lsdisc"> ... </div>
<div class="lscircle"> ... </div>
<div class="lssquare"> ... </div>
<div class="lsalpha"> ... </div>
<div class="lsroman"> ... </div>
<div class="lsdecimal"> ... </div>
```

### Bullet placement

Placement of the bullet for list items.

__Mnemonic__: ls = List style

|Notation|Bullet placement|
|-|-|
|lsin|Bullet placed on the inside|
|lsout|Bullet placed on the outside|

```html
<div class="lsin"> Inside </div>
<div class="lsout"> Outside </div>
```

### List orientation

Change list orientation and hide bullets.

__Mnemonic__: ls = List style

|Notation|List orientation|
|-|-|
|lsrow|Display list along a row (horizontal)|
|lscol|Display list down a column (vertical)|

```html
<div class="lsrow"> Horizontal without bullets </div>
<div class="lscol"> Vertical without bullets </div>
```

### List style reset

Reset list style, undo applied list style.
Must be applied to a "ol" or "ul" HTML element.

__Mnemonic__: ls = List style

|Notation|Description|
|-|-|
|lsreset|Clear list to its default|

```html
<ol class="lsreset"> ... </ol>
<ul class="lsreset"> ... </ul>
```

## Utility

Here are some useful Style-Notation.

### Centering

Vertical, horizontal and full centering elements inside the container.

|Notation|Centering|
|-|-|
|center|Center vertically|
|centery|Center vertically and horizontally|
|centerx|Center horizontally|

```html
<div class="center"> ... </div>
<div class="centery"> ... </div>
<div class="centerx"> ... </div>
```

### Visibility

Hide or show an element without affecting layout. Other displayed elements will not get re-positioned.

|Notation|Visibility|
|-|-|
|visible|Display element and its descendants|
|invisible|Hide element and its descendants|

```html
<div class="visible"> ... </div>
<div class="invisible"> ... </div>
```

### Opacity

Control the opacity of an element and its descendants. A value of "0" (zero), is not visible, and a value of 10 is completely visible.

|Notation|Value|Opacity|
|-|-|-|
|opacity|0-10|Higher value is more opaque (visible)|

![Opacity levels](/images/opacity-levels.png)

```html
<div class="opacity0"> ... </div>
<div class="opacity1"> ... </div>
<div class="opacity2"> ... </div>
<div class="opacity3"> ... </div>
<div class="opacity4"> ... </div>
<div class="opacity5"> ... </div>
<div class="opacity6"> ... </div>
<div class="opacity7"> ... </div>
<div class="opacity8"> ... </div>
<div class="opacity9"> ... </div>
<div class="opacity10"> ... </div>
```

## Floats

Positioning element by floating to one side.

__Mnemonic__: fl = float

|Notation|Float direction|
|-|-|-|
|fll|Float left|
|flr|Float right|
|fln|Float none|

```html
<div class="fll"> ... </div>
<div class="flr"> ... </div>
<div class="fln"> ... </div>
```

__Pro Tip__: Use display "__inline-block__" to avoid having to use "__clear__" when working with "__float__".

### Clearfix

Apply clearfix settings.

|Notation|Description|
|-|-|-|
|cf| Clearfix|

```html
<div class="cf"> ... </div>
```

## CSS Columns

Columns are the fast and simple way to work with text layout as seen in publications. You can decide between using fixed width column counts, or dynamic width column count.

__Mnemonic__: col = column

|Notation|Values|Description|
|-|-|-|
|col|1-7|Dynamic size, fixed columns|
|colf|1-7|Fixed width dimension based columns|
|colgap|0-7|Gap size between columns|
|colauto||Set column width to auto|
|colsa||Column span all|

__Example__: Text using 3 columns.

![column](images/column.png)

If you want a fixed number of columns that vary in width based on its container size, use "__col__".

If you want to maintain a fixed width for each column, and have the column count determined by the size of its container, use "__colf__".

## Flexbox

The Style-Notation for Flexbox makes it easy to do layout.

### Flex Container

To create a Flex container, you must change the display property.

__Mnemonic__: d = display

|Notation|CSS Display|
|-|-|
|dflex|Flex|
|diflex|Inline Flex|

Making descendant items Flex or inline Flex items.

```html
<div class="dflex"> ... </div>
<div class="diflex"> ... </div>
```

### Flex direction

The default __Main__ and __Cross__ axis look like this.

![flex container](images/flex-container.png)

Using the direction Style-Notations, will change the direction of the __Main__ and __Cross__ axis.

__Mnemonic__: fb = Flexbox

|Notation|Flex direction|Main axis direction|
|-|-|-|
|fbr|Row (right)|Left to right|
|fbl|Row reverse (left)|Right to left|
|fbu|Column reverse (up)|Bottom to top|
|fbd|Column (down)|Top to bottom|

__Note__: The Cross axis is always perpendicular to Main axis.

The direction Style-Notation must be added to a Flex container.

```html
<div class="dflex fbr"> ... </div>
<div class="dflex fbl"> ... </div>
<div class="dflex fbu"> ... </div>
<div class="dflex fbd"> ... </div>
```

### Flex item flow

![flex direction](images/fb-direction.png)

### Wrap mode

Additional notation to use for a multi-line Flex container. This will control Flex wrapping mode, items determine too long to fit the line can be set to wrap onto a new line.

__Mnemonic__: fb = Flexbox

|Notation|Wrap mode|
|-|-|
|fbw|Flex wrap|
|fbnw|Flex no wrap|
|fbrw|Flex reverse wrap|

The wrap Style-Notation must be added to a Flex container.

```html
<div class="dflex fbw"> ... </div>
<div class="dflex fbnw"> ... </div>
<div class="dflex fbrw"> ... </div>
```

### Justify Main axis

Justify Flex items along the Main axis.

__Mnemonic__: fbj = Flexbox justify

|Notation|Justification along Main axis|
|-|-|
|fbjfs|Justify start|
|fbjee|Justify end|
|fbjc|Justify center|
|fbjsa|Justify space around|
|fbjsb|Justify space between|

![justify](images/fb-justify.png)

The justify Style-Notation must be added to a Flex container.

```html
<div class="dflex fbjfs"> ... </div>
<div class="dflex fbjfe"> ... </div>
<div class="dflex fbjc"> ... </div>
<div class="dflex fbjsa"> ... </div>
<div class="dflex fbjsb"> ... </div>
```

### Justify Cross axis

Vertically justify Flex items along their Cross axis.

__Mnemonic__: fbi = Flexbox item

|Notation|Justification Cross axis|
|-|-|
|fbifs|Justify items start|
|fbife|Justify items end|
|fbic|Justify items center|
|fbib|Justify items baseline|
|fbix|Justify items stretch (eXpand)|

![justify items](images/fb-justify-items.png)

```html
<div class="fbifs"> ... </div>
<div class="fbife"> ... </div>
<div class="fbic"> ... </div>
<div class="fbib"> ... </div>
<div class="fbix"> ... </div>
```

### Align content Cross axis

Justify all Flex items inside a Flex container.

__Mnemonic__: fbc = Flexbox content

|Notation|Content alignment|
|-|-|
|fbcfs|Align content start|
|fbcfe|Align content end|
|fbcc|Align content center|
|fbcsa|Align content space around|
|fbcsb|Align content space between|
|fbcx|Align content stretch (eXpand)|

![justify content](images/fb-justify-content.png)

```html
<div class="fbcfs"> ... </div>
<div class="fbcfe"> ... </div>
<div class="fbcc"> ... </div>
<div class="fbcsa"> ... </div>
<div class="fbcsb"> ... </div>
<div class="fbcx"> ... </div>
```

### Item align Cross axis

Justify single Flex item along the Cross axis.

__Mnemonic__: fbs = Flexbox self

|Notation|Item self alignment|
|-|-|
|fbsfs|Align self start|
|fbsfe|Align self end|
|fbsc|Align self center|
|fbsb|Align self baseline|
|fbsx|Align self stretch (eXpand)|
|fbsa|Align self auto|

![justify self](images/fb-justify-self.png)

```html
<div class="fbsfs"> ... </div>
<div class="fbsfe"> ... </div>
<div class="fbsc"> ... </div>
<div class="fbsb"> ... </div>
<div class="fbsx"> ... </div>
<div class="fbsa"> ... </div>
```

### Flex ordering

Flex items position ordering.

__Mnemonic__: fbo = Flexbox order

|Notation|Values|Flex item order|
|-|-|-|
|fbo|0-10|Flex item positive order|
|fbo-|1-10|Flex item negative order|

```html
<div class="fbo1"> ... </div>
<div class="fbo2"> ... </div>
<div class="fbo3"> ... </div>
<div class="fbo4"> ... </div>
<div class="fbo5"> ... </div>
<div class="fbo6"> ... </div>
<div class="fbo7"> ... </div>
<div class="fbo8"> ... </div>
<div class="fbo9"> ... </div>
<div class="fbo10"> ... </div>
```

__Example__: Flex item ordering.

![flex order](images/fb-order.png)

```html
<div class="fbo3">A</div>
<div class="fbo1">B</div>
<div class="fbo2">C</div>
```

Negative order positions.

```html
<div class="fbo-1"> ... </div>
<div class="fbo-2"> ... </div>
<div class="fbo-3"> ... </div>
<div class="fbo-4"> ... </div>
<div class="fbo-5"> ... </div>
<div class="fbo-6"> ... </div>
<div class="fbo-7"> ... </div>
<div class="fbo-8"> ... </div>
<div class="fbo-9"> ... </div>
<div class="fbo-10"> ... </div>
```

### Growing Flex item

Grow a Flexbox item.

__Mnemonic__: fbg = Flexbox grow

|Notation|Values|Description|
|-|-|-|
|fbg|0-10|Flex item grow|

```html
<div class="fbg0"> ... </div>
<div class="fbg1"> ... </div>
<div class="fbg2"> ... </div>
<div class="fbg3"> ... </div>
<div class="fbg4"> ... </div>
<div class="fbg5"> ... </div>
<div class="fbg6"> ... </div>
<div class="fbg7"> ... </div>
<div class="fbg8"> ... </div>
<div class="fbg9"> ... </div>
<div class="fbg10"> ... </div>
```

__Example__: Sizing Flex items.

![justify size](images/fb-sizes.png)

```html
<div class="fbg0">A</div>
<div class="fbg1">B</div>
<div class="fbg2">C</div>
```

### Shrinking Flex item

Shrink a Flexbox item.

__Mnemonic__: fbg = Flexbox grow

|Notation|Values|Description|
|-|-|-|
|fbg-|1-10|Flex item shrink|

```html
<div class="fbg-1"> ... </div>
<div class="fbg-2"> ... </div>
<div class="fbg-3"> ... </div>
<div class="fbg-4"> ... </div>
<div class="fbg-5"> ... </div>
<div class="fbg-6"> ... </div>
<div class="fbg-7"> ... </div>
<div class="fbg-8"> ... </div>
<div class="fbg-9"> ... </div>
<div class="fbg-10"> ... </div>
```

### Grid

- WIP

### Responsive design

- WIP
