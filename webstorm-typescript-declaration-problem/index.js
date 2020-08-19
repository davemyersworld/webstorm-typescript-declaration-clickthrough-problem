// This is my App, i'm dependent on a javascript module in a library
// that also offers typescript declarations
// But I cannot click through to the actual implementation
import TypescriptDependency from 'webstorm-typescript-declaration-dependency';

import { getArrayLength } from "webstorm-typescript-declaration-dependency";

const arr = [];
getArrayLength(arr);


// Here, a Javascript dependency w/o ts declarations,
// I can navigate to the underlying code
import JavascriptDependency from 'webstorm-javascript-dependency';