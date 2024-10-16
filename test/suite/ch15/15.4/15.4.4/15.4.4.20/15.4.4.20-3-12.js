// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.20-3-12
description: >
    Array.prototype.filter - 'length' is a string containing a
    negative number
includes: [runTestCase.js]
---*/

function testcase() {

        function callbackfn(val, idx, obj) {
            return true;
        }

        var obj = { 1: 11, 2: 9, length: "-4294967294" };

        var newArr = Array.prototype.filter.call(obj, callbackfn);

        return newArr.length === 1 && newArr[0] === 11;
    }
runTestCase(testcase);
