// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    TryStatement: "try Block Catch" or "try Block Finally" or "try Block
    Catch Finally"
es5id: 12.14_A16_T8
description: >
    Block: "{ StatementList }". Catch: "catch (Identifier ) Block".
    Checking if execution of "try{} catch(){finally{}" fails
flags: [negative]
---*/

// CHECK#1
try{}
catch(){
finally{}
