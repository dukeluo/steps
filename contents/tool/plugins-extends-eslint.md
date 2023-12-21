---
title: What's the difference between a plugin and a config in ESLint
category: tool
tags: [eslint]
dateCreated: 2023-09-26
dateModified:
---

ESLint configurations function as a set of predefined rules that can be easily applied by including them
in the `extends` option. This feature allows you to apply multiple rules at once, adhering to the specifications
in your config file.

ESLint plugins offer pre-coded rules that you can selectively choose based on your project's requirements. Additionally,
some plugins may provide configuration files for organizing logically grouped or relevant rules. However, it's important
to note that providing a config file is not mandatory for a plugin.
