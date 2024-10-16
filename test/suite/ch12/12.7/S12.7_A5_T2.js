// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    When "continue Identifier" is evaluated Identifier must be label in the
    label set of an enclosing (but not crossing function boundaries)
    IterationStatement
es5id: 12.7_A5_T2
description: Identifier is a function name
flags: [negative]
---*/

LABEL_OUT : var x=0, y=0;
LABEL_DO_LOOP : do {
   LABEL_IN : x++;
   if(x===10)break;
   continue IN_DO_FUNC;
   LABEL_IN_2 : y++;
   function IN_DO_FUNC(){}
} while(0);

LABEL_ANOTHER_LOOP : do {
    ;
} while(0);

function OUT_FUNC(){};
