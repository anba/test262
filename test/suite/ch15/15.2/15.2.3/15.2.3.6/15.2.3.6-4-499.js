// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-499
description: >
    ES5 Attributes - success to update [[Set]] attribute of accessor
    property ([[Get]] is a Function, [[Set]] is undefined,
    [[Enumerable]] is true, [[Configurable]] is true) to different
    value
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};

        var getFunc = function () {
            return 1001;
        };

        var verifySetFunc = "data";
        var setFunc = function (value) {
            verifySetFunc = value;
        };

        Object.defineProperty(obj, "prop", {
            get: getFunc,
            set: undefined,
            enumerable: true,
            configurable: true
        });

        var desc1 = Object.getOwnPropertyDescriptor(obj, "prop");

        Object.defineProperty(obj, "prop", {
            set: setFunc
        });

        var desc2 = Object.getOwnPropertyDescriptor(obj, "prop");
        obj.prop = "overrideData";
        return typeof desc1.set === "undefined" && desc2.set === setFunc && verifySetFunc === "overrideData";
    }
runTestCase(testcase);
