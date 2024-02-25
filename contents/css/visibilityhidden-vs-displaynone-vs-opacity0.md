---
title: '`visibility:hidden` vs `display:none` vs `opacity:0`'
category: css
tags: [property]
dateCreated: 2024-02-25
dateModified:
---

| Property              | Painted | In layout | Stacking context | Pointer events | Keyboard events |
| --------------------- | ------- | --------- | ---------------- | -------------- | --------------- |
| `opacity: 0;`         | No      | Yes       | New              | Yes            | Yes             |
| `visibility: hidden;` | No      | Yes       | Varies           | No             | No              |
| `display: none;`      | No      | No        | Varies           | No             | No              |
