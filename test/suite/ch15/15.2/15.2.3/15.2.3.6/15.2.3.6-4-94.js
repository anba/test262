// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-94
description: >
    Object.defineProperty will not throw TypeError when
    name.configurable = false, name.writable = false, desc.value and
    name.value are two Objects refer to the same object (8.12.9 step
    10.a.ii.1)
includes:
    - runTestCase.js
    - dataPropertyAttributesAreCorrect.js
---*/

function testcase() {

        var obj = {};

        var obj1 = { length: 10 };

        Object.defineProperty(obj, "foo", {
            value: obj1,
            writable: false,
            configurable: false 
        });

        try {
            Object.defineProperty(obj, "foo", { value: obj1 });
            return dataPropertyAttributesAreCorrect(obj, "foo", obj1, false, false, false);
        } catch (e) {
            return false;
        }
    }
runTestCase(testcase);
