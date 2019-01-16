# Change Log

## 2.1.7 (2019-01-16)

- Fixed normalize.css dependency error, copied file into project.

## 2.1.1 (2018-03-11)

- Bug fix, removed "__important__" from reset of padding and margin for all elements.
  This fixes a bug in Material Design sidenav component.

## 2.1.0 (2018-03-10)

- Added fixed font sizing notation for width and height.

### Breaking changes

- All padding and margin now reset to zero, before only top margin and padding were set to zero.

## 2.0.6 (2018-01-28)

- Add fix to help with sizing.
- README sections reorganized, image path fixed, improved image labels.

## 2.0.5 (2018-01-26)

- Breaking Change - Changed Style-Notation ttcaps to ttcap.
- Fixed README.

## 2.0.4 (2018-01-25)

- Readme spelling fixes.
- Import fix for angular-cli generated project.

## 2.0.0 (2018-01-07)

- Added more border and radius sizes.
- Changed notation for radius to r.
- Removed hypen from all Style-Notation, dash now only used to denote negative values.
- Eliminated all alias Style-Notation, focusing on simplicity and consistency.
- New Z-Index notation, zauto.
- Position notation renamed to: top, bottom, left, right.
- New sub and super text notations.
- New size notations: hauto, wauto, wnomax, hnomax.
- Flexbox order now include zero value.
- New notation and tests for opacity.
- New columns Style-Notations.
- All display notation name changed, new one added.
- New notation and tests for text line height.
- Border scale changed.
- Switched from using CSS value initial to revert.
- Radius scales changed.
- Removed !important from many CSS values, not required, helped to reduce file-size.
- Removed bold font-weight from heading notations.
- Fixed flexbox notation name for fbib.
- Added new notations for flex-basis.
- Delete colfauto, neddless as notation colauto does the same thing.
- Notation td changed to tc for table-cell.
- Text notation changed for overflow and upper and lowercase.
- README major update.

## 1.0.10 (2017-12-31)

- Import fix for dependency when using NPM install.
- Font height now using Perfect third scale.
- Heading height changed to use Major Third scale.
- README updated for Headings section.
- Updated Logo.

## 1.0.5 (2017-12-30)

- Added Github badges.
- Test name corrected.
- Marked styles important.
- Multiple scss file reduction usinf Sass loops.
- Renamed test spec files.
- Removed borders in Size to simplify testing.
- Added test for Size.
- Added test for Box Model.
- Added test for Position.
- Added test for Z-index, static, relative, absolute and fixed.
- Added test for Spacing.
- Notation changes and additions.

## 0.0.10 (2017-12-17)

- Added test web pages.
- Added integration tests.
- Fixed list-row, list-col.
- Changes list notation to decimal from number.
- New box model notations.
- Update README.
- Project folder reorg.

## 0.0.6 (2017-12-16)

- Added support for float.
- Added support for list.
- New border line dot style.
- Changed dash notation.
- Changed Flexbox notations.
- New notation, position static.
- Removed erroneous auto padding.
- Added new left, right margin.
- Simplied text notation.
- Added new text notations.
- Renamed font file to typography.
- Simplified notation for center.
- Added new scetion to README.

## 0.0.5 (2017-12-15)

- Updated CSS resets, using border-box, font height changed.
- Removed CSS display for table.
- Fixed Text Style-Notation justification.
- README updated with more complete sections.
- New images for README.
- .gitignore updated, .npmignore deleted.
- Output CSS files is autoprefixed and minified.
- Fixed loading of normalize.css

## 0.0.2 (2017-12-13)

- Build 0.0.2
- Cleaned up notation for border.
- Add missing CSS style for spacing.
- Rough draft on README.

## 0.0.1 (2017-12-13)

- Initial project commit.
