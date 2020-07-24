
<!--#echo json="package.json" key="name" underline="=" -->
ubborg-cjsbundle-depscan-helper-pmb
===================================
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Express CJS bundle dependencies in a way that can be picked up by naive
dependency scanners.
<!--/#echo -->


API
---

This module exports one function:

### relateCjsBundles(bun, fakeCode[, kind])




Usage
-----

see [usage_example.mjs](usage_example.mjs).


<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
