---
title: React rendering
category: react
tags: [render]
dateCreated: 2023-09-23
dateModified:
---

"Rendering" in react is meaning React calls your components. Rendering must always be a **pure calculation:**

- Same inputs, same output.
- It minds its own business.

When developing React application in "Strict Mode", React calls each component’s function twice, which can help surface mistakes caused by impure functions.
