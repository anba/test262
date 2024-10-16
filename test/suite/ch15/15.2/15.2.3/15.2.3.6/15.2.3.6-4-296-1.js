// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-296-1
description: >
    Object.defineProperty - 'O' is an Arguments object of a function
    that has formal parameters, 'name' is own data property of 'O'
    which is also defined in [[ParameterMap]] of 'O', test TypeError
    is thrown when updating the [[Configurable]] attribute value of
    'name' which is defined as non-configurable (10.6
    [[DefineOwnProperty]] step 4 and step 5b)
includes:
    - runTestCase.js
    - dataPropertyAttributesAreCorrect.js
---*/

function testcase() {
        return (function (a, b, c) {
            Object.defineProperty(arguments, "0", {
                value: 10,
                writable: false,
                enumerable: false,
                configurable: false
            });
            try {
                Object.defineProperty(arguments, "0", {
                    configurable: true
                });
            } catch (e) {
                var verifyFormal = a === 10;
                return e instanceof TypeError && dataPropertyAttributesAreCorrect(arguments, "0", 10, false, false, false) && verifyFormal;
            }
            return false;
        }(0, 1, 2));
    }
runTestCase(testcase);
