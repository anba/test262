// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 12.14.1-1gs
description: >
    Strict Mode - SyntaxError is thrown if a TryStatement with a Catch
    occurs within strict code and the Identifier of the Catch
    production is eval
negative: ^((?!NotEarlyError).)*$
flags: [onlyStrict]
---*/

"use strict";
throw NotEarlyError;
try { } catch (eval) { }
