// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Single line comments can not contain LINE FEED (U+000A) inside
es5id: 7.3_A3.1_T1
description: Insert LINE FEED (\u000A) into single line comment
flags: [negative]
---*/

// CHECK#1
eval("// single line \u000A comment");
