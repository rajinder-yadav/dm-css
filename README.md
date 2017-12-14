# DevMentor CSS Notation
<!-- TOC -->

- [Introduction](#introduction)
- [Border](#border)
  - [Border values](#border-values)
  - [Circle border radius](#circle-border-radius)
- [Position](#position)
  - [Z-Index](#z-index)
- [Size](#size)
- [Spacing](#spacing)
- [Font](#font)
- [Text](#text)
- [Utility](#utility)
- [Display](#display)
- [Flexbox](#flexbox)
- [Grid](#grid)

<!-- /TOC -->
## Introduction

Early rough draft.

DM-CSS Introduce class notation for applying CSS styling.

## Border

The default border style is solid. The notation provide the flexibility to add or removed borders.

An element can be given borders on

1. All sides
1. No sides
1. One side (top, bottom, left ,right)
1. Two sides (top-bottom or left-right)

### Border values

Value for border is postfix to their notation.

```html
<div class="b1"> ... </div>

<div class="bt1"> ... </div>
```

You may want to remove border. To do this use, "**b0**".

```html
<div class="b0"> ... </div>
```

For borders on all sides use notation, "**b[1-4]**". Values between 1 to 4 are optional and control the size of the border.

```html
<div class="b1"> ... </div>
<div class="b3"> ... </div>
<div class="b3"> ... </div>
<div class="b4"> ... </div>
```

|Notation|Side|
|-|-|
|bt|Border top|
|bb|Border bottom|
|bl|Border left|
|br|Border right|
|bx|Border left and right|
|by|Border top and bottom|

### Circle border radius

To draw a circular border, use notation "**circle**". The element must has its CSS height and width property set.

Do not forget to include the border notation, "**b**", as it govens the border property on an element, we as "**circle**" sets the border radius value.

```html
<div class="box b circle"></div>
```

```css
.box {
  width: 80px;
  height: 80px;
}
```

Pill styles 1 to 4

- pill

Radius size 1 to 7

- radius
- tl-radius
- tr-radius
- bt-radius
- bb-radius

Border line style

- dash
- t-dash
- b-dash
- l-dash
- r-dash
- x-dash
- y-dash

## Position

|Notation|Position|CSS property|
|-|-|
|pos-t|Top|top: 0|
|pos-b|Bottom|bottom: 0|
|pos-l|Left|left: 0|
|pos-r|Right|right: 0|

### Z-Index

The default z-index has a value of 1.

- z[1-4]

- relative
- absolute
- fixed

## Size

Fixed width

- w[0-100]
- h[0-100]

- w-min
- w-max

- h-min
- h-max

## Spacing

- pt0

- p[1-7]

- pt
- pb
- pl
- pr
- py
- px
- py-auto
- px-auto

- m0
- m1[1-7]
- mt
- mb
- ml
- mr
- my
- mx
- my-auto
- mx-auto

## Font

- fh[1-7]
- fh-[1-7]

|Notation|Font style|
|-|-|
|fsn|Font style none, reset all styles|
|fsb|Bold|
|fsi|Italic|
|fsu|Underline|
|fss|Strike-through|
|fsw|Wavy underline|

Font weight

- fw[100-900]

## Text

Text transform

|Notation|Notation|Text transform|
|ttl|tt-left|Left align|
|ttc|tt-center|Center text|
|ttr|tt-right|Right align|
|ttj|tt-justify|Justify text|

- tt-caps
- tt-upcase
- tt-lowcase
- tt-none

- tt-overflow-y
- tt-overflow-n

## Utility

- visible
- invisible
- center-x
- center-y
- center

## Display

- show
- hide
- d-none
- d-inline
- d-inline-block
- d-block
- d-table
- d-table-cell
- d-flex
- d-inline-flex
- d-grid
- d-inline-grid

## Flexbox

## Grid
