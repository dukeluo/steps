---
title: jest --runInBand --logHeapUsage --detectOpenHandles --forceExit
category: jest
tags: [cli]
dateCreated: 2023-12-07
dateModified:
---

The `jest --runInBand` option instructs Jest to run the tests in serial instead of parallel. This means that Jest will
run each test one at a time and wait for the test to finish before proceeding to the next. This can help to identify
problems that prevent the tests from exiting gracefully.

The `jest --logHeapUsage` option logs the heap usage of the process after each test. Use together with `--expose-gc`
in node. This can be helpful for identifying memory leaks.

The `jest --detectOpenHandles` option tries to collect and print any open file handles that are preventing Jest
from exiting gracefully. This can help to identify common issues that prevent the tests from exiting gracefully,
such as:

- Asynchronous functions that don't finish properly.
- WebSocket connections that aren't closed properly.
- Database connections that aren't closed properly.

The `jest --forceExit` option forces Jest to exit immediately after all tests have completed, regardless of whether
there are any lingering asynchronous operations or open handles. This can help ensure that the test environment
is properly cleaned up and that any memory resources are released after the tests have finished running.

Specifically, this command line option does the following:

1. Runs the tests in serial, meaning that Jest will run the first test, then the second test, and so on.
2. Logs the heap usage after each test.
3. Tries to collect and print any open file handles that are preventing Jest from exiting gracefully.
4. Forces Jest to exit if open file handles are found.
