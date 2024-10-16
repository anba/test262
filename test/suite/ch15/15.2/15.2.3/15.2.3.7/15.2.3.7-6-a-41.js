// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.7-6-a-41
description: >
    Object.defineProperties - type of desc.value is different from
    type of P.value (8.12.9 step 6)
includes:
    - runTestCase.js
    - dataPropertyAttributesAreCorrect.js
---*/

function testcase() {

        var obj = {};

        obj.foo = 101; // default value of attributes: writable: true, configurable: true, enumerable: true

        Object.defineProperties(obj, {
            foo: {
                value: "102"
            }
        });
        return dataPropertyAttributesAreCorrect(obj, "foo", "102", true, true, true);

    }
runTestCase(testcase);
