
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

Declares relations of ubborg bundle `bun` to CJS bundles.
The `kind` of relation should be a string and defaults to `'needs'`.
The IDs of the related CJS bundles are obtained from `fakeCode`
using an algorithm equivalent to:

1.  Split `fakeCode` into lines.
1.  Discard outer whitespace from each line.
1.  Discard lines that start with `#` or `//`.
1.  Discard lines that contain less than two quote characters.
1.  In each line, discard the first quote character and anything in front.
1.  In each line, discard the last quote character and anything behind it.
1.  Discard lines that are (now) empty.
1.  Treat remaining lines as CJS module IDs.

Returns a Promise for an array of all related resource plans.



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
