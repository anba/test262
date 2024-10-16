// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Check examples for automatic semicolon insertion from the Standart
es5id: 7.9.2_A1_T6
description: >
    if(a>b) \n else c=d is not a valid sentence in the ECMAScript
    grammar
flags: [negative]
---*/

//CHECK#1
var a=1,b=2,c=3,d;
if(a>b)
else c=d
