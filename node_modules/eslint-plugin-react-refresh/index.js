"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/@eslint-community/eslint-utils/node_modules/eslint-visitor-keys/dist/eslint-visitor-keys.cjs
var require_eslint_visitor_keys = __commonJS({
  "node_modules/@eslint-community/eslint-utils/node_modules/eslint-visitor-keys/dist/eslint-visitor-keys.cjs"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var KEYS = {
      ArrayExpression: [
        "elements"
      ],
      ArrayPattern: [
        "elements"
      ],
      ArrowFunctionExpression: [
        "params",
        "body"
      ],
      AssignmentExpression: [
        "left",
        "right"
      ],
      AssignmentPattern: [
        "left",
        "right"
      ],
      AwaitExpression: [
        "argument"
      ],
      BinaryExpression: [
        "left",
        "right"
      ],
      BlockStatement: [
        "body"
      ],
      BreakStatement: [
        "label"
      ],
      CallExpression: [
        "callee",
        "arguments"
      ],
      CatchClause: [
        "param",
        "body"
      ],
      ChainExpression: [
        "expression"
      ],
      ClassBody: [
        "body"
      ],
      ClassDeclaration: [
        "id",
        "superClass",
        "body"
      ],
      ClassExpression: [
        "id",
        "superClass",
        "body"
      ],
      ConditionalExpression: [
        "test",
        "consequent",
        "alternate"
      ],
      ContinueStatement: [
        "label"
      ],
      DebuggerStatement: [],
      DoWhileStatement: [
        "body",
        "test"
      ],
      EmptyStatement: [],
      ExperimentalRestProperty: [
        "argument"
      ],
      ExperimentalSpreadProperty: [
        "argument"
      ],
      ExportAllDeclaration: [
        "exported",
        "source"
      ],
      ExportDefaultDeclaration: [
        "declaration"
      ],
      ExportNamedDeclaration: [
        "declaration",
        "specifiers",
        "source"
      ],
      ExportSpecifier: [
        "exported",
        "local"
      ],
      ExpressionStatement: [
        "expression"
      ],
      ForInStatement: [
        "left",
        "right",
        "body"
      ],
      ForOfStatement: [
        "left",
        "right",
        "body"
      ],
      ForStatement: [
        "init",
        "test",
        "update",
        "body"
      ],
      FunctionDeclaration: [
        "id",
        "params",
        "body"
      ],
      FunctionExpression: [
        "id",
        "params",
        "body"
      ],
      Identifier: [],
      IfStatement: [
        "test",
        "consequent",
        "alternate"
      ],
      ImportDeclaration: [
        "specifiers",
        "source"
      ],
      ImportDefaultSpecifier: [
        "local"
      ],
      ImportExpression: [
        "source"
      ],
      ImportNamespaceSpecifier: [
        "local"
      ],
      ImportSpecifier: [
        "imported",
        "local"
      ],
      JSXAttribute: [
        "name",
        "value"
      ],
      JSXClosingElement: [
        "name"
      ],
      JSXClosingFragment: [],
      JSXElement: [
        "openingElement",
        "children",
        "closingElement"
      ],
      JSXEmptyExpression: [],
      JSXExpressionContainer: [
        "expression"
      ],
      JSXFragment: [
        "openingFragment",
        "children",
        "closingFragment"
      ],
      JSXIdentifier: [],
      JSXMemberExpression: [
        "object",
        "property"
      ],
      JSXNamespacedName: [
        "namespace",
        "name"
      ],
      JSXOpeningElement: [
        "name",
        "attributes"
      ],
      JSXOpeningFragment: [],
      JSXSpreadAttribute: [
        "argument"
      ],
      JSXSpreadChild: [
        "expression"
      ],
      JSXText: [],
      LabeledStatement: [
        "label",
        "body"
      ],
      Literal: [],
      LogicalExpression: [
        "left",
        "right"
      ],
      MemberExpression: [
        "object",
        "property"
      ],
      MetaProperty: [
        "meta",
        "property"
      ],
      MethodDefinition: [
        "key",
        "value"
      ],
      NewExpression: [
        "callee",
        "arguments"
      ],
      ObjectExpression: [
        "properties"
      ],
      ObjectPattern: [
        "properties"
      ],
      PrivateIdentifier: [],
      Program: [
        "body"
      ],
      Property: [
        "key",
        "value"
      ],
      PropertyDefinition: [
        "key",
        "value"
      ],
      RestElement: [
        "argument"
      ],
      ReturnStatement: [
        "argument"
      ],
      SequenceExpression: [
        "expressions"
      ],
      SpreadElement: [
        "argument"
      ],
      StaticBlock: [
        "body"
      ],
      Super: [],
      SwitchCase: [
        "test",
        "consequent"
      ],
      SwitchStatement: [
        "discriminant",
        "cases"
      ],
      TaggedTemplateExpression: [
        "tag",
        "quasi"
      ],
      TemplateElement: [],
      TemplateLiteral: [
        "quasis",
        "expressions"
      ],
      ThisExpression: [],
      ThrowStatement: [
        "argument"
      ],
      TryStatement: [
        "block",
        "handler",
        "finalizer"
      ],
      UnaryExpression: [
        "argument"
      ],
      UpdateExpression: [
        "argument"
      ],
      VariableDeclaration: [
        "declarations"
      ],
      VariableDeclarator: [
        "id",
        "init"
      ],
      WhileStatement: [
        "test",
        "body"
      ],
      WithStatement: [
        "object",
        "body"
      ],
      YieldExpression: [
        "argument"
      ]
    };
    var NODE_TYPES = Object.keys(KEYS);
    for (const type of NODE_TYPES) {
      Object.freeze(KEYS[type]);
    }
    Object.freeze(KEYS);
    var KEY_BLACKLIST = /* @__PURE__ */ new Set([
      "parent",
      "leadingComments",
      "trailingComments"
    ]);
    function filterKey(key) {
      return !KEY_BLACKLIST.has(key) && key[0] !== "_";
    }
    function getKeys(node) {
      return Object.keys(node).filter(filterKey);
    }
    function unionWith(additionalKeys) {
      const retv = (
        /** @type {{
            [type: string]: ReadonlyArray<string>
        }} */
        Object.assign({}, KEYS)
      );
      for (const type of Object.keys(additionalKeys)) {
        if (Object.prototype.hasOwnProperty.call(retv, type)) {
          const keys = new Set(additionalKeys[type]);
          for (const key of retv[type]) {
            keys.add(key);
          }
          retv[type] = Object.freeze(Array.from(keys));
        } else {
          retv[type] = Object.freeze(Array.from(additionalKeys[type]));
        }
      }
      return Object.freeze(retv);
    }
    exports.KEYS = KEYS;
    exports.getKeys = getKeys;
    exports.unionWith = unionWith;
  }
});

// node_modules/@eslint-community/eslint-utils/index.js
var require_eslint_utils = __commonJS({
  "node_modules/@eslint-community/eslint-utils/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var eslintVisitorKeys = require_eslint_visitor_keys();
    function getInnermostScope(initialScope, node) {
      const location = node.range[0];
      let scope = initialScope;
      let found = false;
      do {
        found = false;
        for (const childScope of scope.childScopes) {
          const range = childScope.block.range;
          if (range[0] <= location && location < range[1]) {
            scope = childScope;
            found = true;
            break;
          }
        }
      } while (found);
      return scope;
    }
    function findVariable(initialScope, nameOrNode) {
      let name = "";
      let scope = initialScope;
      if (typeof nameOrNode === "string") {
        name = nameOrNode;
      } else {
        name = nameOrNode.name;
        scope = getInnermostScope(scope, nameOrNode);
      }
      while (scope != null) {
        const variable = scope.set.get(name);
        if (variable != null) {
          return variable;
        }
        scope = scope.upper;
      }
      return null;
    }
    function negate0(token) {
      return !this(token);
    }
    function negate(f) {
      return negate0.bind(f);
    }
    function isPunctuatorTokenWithValue(token, value) {
      return token.type === "Punctuator" && token.value === value;
    }
    function isArrowToken(token) {
      return isPunctuatorTokenWithValue(token, "=>");
    }
    function isCommaToken(token) {
      return isPunctuatorTokenWithValue(token, ",");
    }
    function isSemicolonToken(token) {
      return isPunctuatorTokenWithValue(token, ";");
    }
    function isColonToken(token) {
      return isPunctuatorTokenWithValue(token, ":");
    }
    function isOpeningParenToken(token) {
      return isPunctuatorTokenWithValue(token, "(");
    }
    function isClosingParenToken(token) {
      return isPunctuatorTokenWithValue(token, ")");
    }
    function isOpeningBracketToken(token) {
      return isPunctuatorTokenWithValue(token, "[");
    }
    function isClosingBracketToken(token) {
      return isPunctuatorTokenWithValue(token, "]");
    }
    function isOpeningBraceToken(token) {
      return isPunctuatorTokenWithValue(token, "{");
    }
    function isClosingBraceToken(token) {
      return isPunctuatorTokenWithValue(token, "}");
    }
    function isCommentToken(token) {
      return ["Block", "Line", "Shebang"].includes(token.type);
    }
    var isNotArrowToken = negate(isArrowToken);
    var isNotCommaToken = negate(isCommaToken);
    var isNotSemicolonToken = negate(isSemicolonToken);
    var isNotColonToken = negate(isColonToken);
    var isNotOpeningParenToken = negate(isOpeningParenToken);
    var isNotClosingParenToken = negate(isClosingParenToken);
    var isNotOpeningBracketToken = negate(isOpeningBracketToken);
    var isNotClosingBracketToken = negate(isClosingBracketToken);
    var isNotOpeningBraceToken = negate(isOpeningBraceToken);
    var isNotClosingBraceToken = negate(isClosingBraceToken);
    var isNotCommentToken = negate(isCommentToken);
    function getOpeningParenOfParams(node, sourceCode) {
      return node.id ? sourceCode.getTokenAfter(node.id, isOpeningParenToken) : sourceCode.getFirstToken(node, isOpeningParenToken);
    }
    function getFunctionHeadLocation(node, sourceCode) {
      const parent = node.parent;
      let start = null;
      let end = null;
      if (node.type === "ArrowFunctionExpression") {
        const arrowToken = sourceCode.getTokenBefore(node.body, isArrowToken);
        start = arrowToken.loc.start;
        end = arrowToken.loc.end;
      } else if (parent.type === "Property" || parent.type === "MethodDefinition" || parent.type === "PropertyDefinition") {
        start = parent.loc.start;
        end = getOpeningParenOfParams(node, sourceCode).loc.start;
      } else {
        start = node.loc.start;
        end = getOpeningParenOfParams(node, sourceCode).loc.start;
      }
      return {
        start: { ...start },
        end: { ...end }
      };
    }
    var globalObject = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
    var builtinNames = Object.freeze(
      /* @__PURE__ */ new Set([
        "Array",
        "ArrayBuffer",
        "BigInt",
        "BigInt64Array",
        "BigUint64Array",
        "Boolean",
        "DataView",
        "Date",
        "decodeURI",
        "decodeURIComponent",
        "encodeURI",
        "encodeURIComponent",
        "escape",
        "Float32Array",
        "Float64Array",
        "Function",
        "Infinity",
        "Int16Array",
        "Int32Array",
        "Int8Array",
        "isFinite",
        "isNaN",
        "isPrototypeOf",
        "JSON",
        "Map",
        "Math",
        "NaN",
        "Number",
        "Object",
        "parseFloat",
        "parseInt",
        "Promise",
        "Proxy",
        "Reflect",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "Uint16Array",
        "Uint32Array",
        "Uint8Array",
        "Uint8ClampedArray",
        "undefined",
        "unescape",
        "WeakMap",
        "WeakSet"
      ])
    );
    var callAllowed = new Set(
      [
        Array.isArray,
        Array.of,
        Array.prototype.at,
        Array.prototype.concat,
        Array.prototype.entries,
        Array.prototype.every,
        Array.prototype.filter,
        Array.prototype.find,
        Array.prototype.findIndex,
        Array.prototype.flat,
        Array.prototype.includes,
        Array.prototype.indexOf,
        Array.prototype.join,
        Array.prototype.keys,
        Array.prototype.lastIndexOf,
        Array.prototype.slice,
        Array.prototype.some,
        Array.prototype.toString,
        Array.prototype.values,
        typeof BigInt === "function" ? BigInt : void 0,
        Boolean,
        Date,
        Date.parse,
        decodeURI,
        decodeURIComponent,
        encodeURI,
        encodeURIComponent,
        escape,
        isFinite,
        isNaN,
        isPrototypeOf,
        Map,
        Map.prototype.entries,
        Map.prototype.get,
        Map.prototype.has,
        Map.prototype.keys,
        Map.prototype.values,
        ...Object.getOwnPropertyNames(Math).filter((k) => k !== "random").map((k) => Math[k]).filter((f) => typeof f === "function"),
        Number,
        Number.isFinite,
        Number.isNaN,
        Number.parseFloat,
        Number.parseInt,
        Number.prototype.toExponential,
        Number.prototype.toFixed,
        Number.prototype.toPrecision,
        Number.prototype.toString,
        Object,
        Object.entries,
        Object.is,
        Object.isExtensible,
        Object.isFrozen,
        Object.isSealed,
        Object.keys,
        Object.values,
        parseFloat,
        parseInt,
        RegExp,
        Set,
        Set.prototype.entries,
        Set.prototype.has,
        Set.prototype.keys,
        Set.prototype.values,
        String,
        String.fromCharCode,
        String.fromCodePoint,
        String.raw,
        String.prototype.at,
        String.prototype.charAt,
        String.prototype.charCodeAt,
        String.prototype.codePointAt,
        String.prototype.concat,
        String.prototype.endsWith,
        String.prototype.includes,
        String.prototype.indexOf,
        String.prototype.lastIndexOf,
        String.prototype.normalize,
        String.prototype.padEnd,
        String.prototype.padStart,
        String.prototype.slice,
        String.prototype.startsWith,
        String.prototype.substr,
        String.prototype.substring,
        String.prototype.toLowerCase,
        String.prototype.toString,
        String.prototype.toUpperCase,
        String.prototype.trim,
        String.prototype.trimEnd,
        String.prototype.trimLeft,
        String.prototype.trimRight,
        String.prototype.trimStart,
        Symbol.for,
        Symbol.keyFor,
        unescape
      ].filter((f) => typeof f === "function")
    );
    var callPassThrough = /* @__PURE__ */ new Set([
      Object.freeze,
      Object.preventExtensions,
      Object.seal
    ]);
    var getterAllowed = [
      [Map, /* @__PURE__ */ new Set(["size"])],
      [
        RegExp,
        /* @__PURE__ */ new Set([
          "dotAll",
          "flags",
          "global",
          "hasIndices",
          "ignoreCase",
          "multiline",
          "source",
          "sticky",
          "unicode"
        ])
      ],
      [Set, /* @__PURE__ */ new Set(["size"])]
    ];
    function getPropertyDescriptor(object, name) {
      let x = object;
      while ((typeof x === "object" || typeof x === "function") && x !== null) {
        const d = Object.getOwnPropertyDescriptor(x, name);
        if (d) {
          return d;
        }
        x = Object.getPrototypeOf(x);
      }
      return null;
    }
    function isGetter(object, name) {
      const d = getPropertyDescriptor(object, name);
      return d != null && d.get != null;
    }
    function getElementValues(nodeList, initialScope) {
      const valueList = [];
      for (let i = 0; i < nodeList.length; ++i) {
        const elementNode = nodeList[i];
        if (elementNode == null) {
          valueList.length = i + 1;
        } else if (elementNode.type === "SpreadElement") {
          const argument = getStaticValueR(elementNode.argument, initialScope);
          if (argument == null) {
            return null;
          }
          valueList.push(...argument.value);
        } else {
          const element = getStaticValueR(elementNode, initialScope);
          if (element == null) {
            return null;
          }
          valueList.push(element.value);
        }
      }
      return valueList;
    }
    function isEffectivelyConst(variable) {
      const refs = variable.references;
      const inits = refs.filter((r) => r.init).length;
      const reads = refs.filter((r) => r.isReadOnly()).length;
      if (inits === 1 && reads + inits === refs.length) {
        return true;
      }
      return false;
    }
    var operations = Object.freeze({
      ArrayExpression(node, initialScope) {
        const elements = getElementValues(node.elements, initialScope);
        return elements != null ? { value: elements } : null;
      },
      AssignmentExpression(node, initialScope) {
        if (node.operator === "=") {
          return getStaticValueR(node.right, initialScope);
        }
        return null;
      },
      //eslint-disable-next-line complexity
      BinaryExpression(node, initialScope) {
        if (node.operator === "in" || node.operator === "instanceof") {
          return null;
        }
        const left = getStaticValueR(node.left, initialScope);
        const right = getStaticValueR(node.right, initialScope);
        if (left != null && right != null) {
          switch (node.operator) {
            case "==":
              return { value: left.value == right.value };
            case "!=":
              return { value: left.value != right.value };
            case "===":
              return { value: left.value === right.value };
            case "!==":
              return { value: left.value !== right.value };
            case "<":
              return { value: left.value < right.value };
            case "<=":
              return { value: left.value <= right.value };
            case ">":
              return { value: left.value > right.value };
            case ">=":
              return { value: left.value >= right.value };
            case "<<":
              return { value: left.value << right.value };
            case ">>":
              return { value: left.value >> right.value };
            case ">>>":
              return { value: left.value >>> right.value };
            case "+":
              return { value: left.value + right.value };
            case "-":
              return { value: left.value - right.value };
            case "*":
              return { value: left.value * right.value };
            case "/":
              return { value: left.value / right.value };
            case "%":
              return { value: left.value % right.value };
            case "**":
              return { value: left.value ** right.value };
            case "|":
              return { value: left.value | right.value };
            case "^":
              return { value: left.value ^ right.value };
            case "&":
              return { value: left.value & right.value };
          }
        }
        return null;
      },
      CallExpression(node, initialScope) {
        const calleeNode = node.callee;
        const args = getElementValues(node.arguments, initialScope);
        if (args != null) {
          if (calleeNode.type === "MemberExpression") {
            if (calleeNode.property.type === "PrivateIdentifier") {
              return null;
            }
            const object = getStaticValueR(calleeNode.object, initialScope);
            if (object != null) {
              if (object.value == null && (object.optional || node.optional)) {
                return { value: void 0, optional: true };
              }
              const property = getStaticPropertyNameValue(
                calleeNode,
                initialScope
              );
              if (property != null) {
                const receiver = object.value;
                const methodName = property.value;
                if (callAllowed.has(receiver[methodName])) {
                  return { value: receiver[methodName](...args) };
                }
                if (callPassThrough.has(receiver[methodName])) {
                  return { value: args[0] };
                }
              }
            }
          } else {
            const callee = getStaticValueR(calleeNode, initialScope);
            if (callee != null) {
              if (callee.value == null && node.optional) {
                return { value: void 0, optional: true };
              }
              const func = callee.value;
              if (callAllowed.has(func)) {
                return { value: func(...args) };
              }
              if (callPassThrough.has(func)) {
                return { value: args[0] };
              }
            }
          }
        }
        return null;
      },
      ConditionalExpression(node, initialScope) {
        const test = getStaticValueR(node.test, initialScope);
        if (test != null) {
          return test.value ? getStaticValueR(node.consequent, initialScope) : getStaticValueR(node.alternate, initialScope);
        }
        return null;
      },
      ExpressionStatement(node, initialScope) {
        return getStaticValueR(node.expression, initialScope);
      },
      Identifier(node, initialScope) {
        if (initialScope != null) {
          const variable = findVariable(initialScope, node);
          if (variable != null && variable.defs.length === 0 && builtinNames.has(variable.name) && variable.name in globalObject) {
            return { value: globalObject[variable.name] };
          }
          if (variable != null && variable.defs.length === 1) {
            const def = variable.defs[0];
            if (def.parent && def.type === "Variable" && (def.parent.kind === "const" || isEffectivelyConst(variable)) && // TODO(mysticatea): don't support destructuring here.
            def.node.id.type === "Identifier") {
              return getStaticValueR(def.node.init, initialScope);
            }
          }
        }
        return null;
      },
      Literal(node) {
        if ((node.regex != null || node.bigint != null) && node.value == null) {
          return null;
        }
        return { value: node.value };
      },
      LogicalExpression(node, initialScope) {
        const left = getStaticValueR(node.left, initialScope);
        if (left != null) {
          if (node.operator === "||" && Boolean(left.value) === true || node.operator === "&&" && Boolean(left.value) === false || node.operator === "??" && left.value != null) {
            return left;
          }
          const right = getStaticValueR(node.right, initialScope);
          if (right != null) {
            return right;
          }
        }
        return null;
      },
      MemberExpression(node, initialScope) {
        if (node.property.type === "PrivateIdentifier") {
          return null;
        }
        const object = getStaticValueR(node.object, initialScope);
        if (object != null) {
          if (object.value == null && (object.optional || node.optional)) {
            return { value: void 0, optional: true };
          }
          const property = getStaticPropertyNameValue(node, initialScope);
          if (property != null) {
            if (!isGetter(object.value, property.value)) {
              return { value: object.value[property.value] };
            }
            for (const [classFn, allowed] of getterAllowed) {
              if (object.value instanceof classFn && allowed.has(property.value)) {
                return { value: object.value[property.value] };
              }
            }
          }
        }
        return null;
      },
      ChainExpression(node, initialScope) {
        const expression = getStaticValueR(node.expression, initialScope);
        if (expression != null) {
          return { value: expression.value };
        }
        return null;
      },
      NewExpression(node, initialScope) {
        const callee = getStaticValueR(node.callee, initialScope);
        const args = getElementValues(node.arguments, initialScope);
        if (callee != null && args != null) {
          const Func = callee.value;
          if (callAllowed.has(Func)) {
            return { value: new Func(...args) };
          }
        }
        return null;
      },
      ObjectExpression(node, initialScope) {
        const object = {};
        for (const propertyNode of node.properties) {
          if (propertyNode.type === "Property") {
            if (propertyNode.kind !== "init") {
              return null;
            }
            const key = getStaticPropertyNameValue(
              propertyNode,
              initialScope
            );
            const value = getStaticValueR(propertyNode.value, initialScope);
            if (key == null || value == null) {
              return null;
            }
            object[key.value] = value.value;
          } else if (propertyNode.type === "SpreadElement" || propertyNode.type === "ExperimentalSpreadProperty") {
            const argument = getStaticValueR(
              propertyNode.argument,
              initialScope
            );
            if (argument == null) {
              return null;
            }
            Object.assign(object, argument.value);
          } else {
            return null;
          }
        }
        return { value: object };
      },
      SequenceExpression(node, initialScope) {
        const last = node.expressions[node.expressions.length - 1];
        return getStaticValueR(last, initialScope);
      },
      TaggedTemplateExpression(node, initialScope) {
        const tag = getStaticValueR(node.tag, initialScope);
        const expressions = getElementValues(
          node.quasi.expressions,
          initialScope
        );
        if (tag != null && expressions != null) {
          const func = tag.value;
          const strings = node.quasi.quasis.map((q) => q.value.cooked);
          strings.raw = node.quasi.quasis.map((q) => q.value.raw);
          if (func === String.raw) {
            return { value: func(strings, ...expressions) };
          }
        }
        return null;
      },
      TemplateLiteral(node, initialScope) {
        const expressions = getElementValues(node.expressions, initialScope);
        if (expressions != null) {
          let value = node.quasis[0].value.cooked;
          for (let i = 0; i < expressions.length; ++i) {
            value += expressions[i];
            value += node.quasis[i + 1].value.cooked;
          }
          return { value };
        }
        return null;
      },
      UnaryExpression(node, initialScope) {
        if (node.operator === "delete") {
          return null;
        }
        if (node.operator === "void") {
          return { value: void 0 };
        }
        const arg = getStaticValueR(node.argument, initialScope);
        if (arg != null) {
          switch (node.operator) {
            case "-":
              return { value: -arg.value };
            case "+":
              return { value: +arg.value };
            case "!":
              return { value: !arg.value };
            case "~":
              return { value: ~arg.value };
            case "typeof":
              return { value: typeof arg.value };
          }
        }
        return null;
      }
    });
    function getStaticValueR(node, initialScope) {
      if (node != null && Object.hasOwnProperty.call(operations, node.type)) {
        return operations[node.type](node, initialScope);
      }
      return null;
    }
    function getStaticPropertyNameValue(node, initialScope) {
      const nameNode = node.type === "Property" ? node.key : node.property;
      if (node.computed) {
        return getStaticValueR(nameNode, initialScope);
      }
      if (nameNode.type === "Identifier") {
        return { value: nameNode.name };
      }
      if (nameNode.type === "Literal") {
        if (nameNode.bigint) {
          return { value: nameNode.bigint };
        }
        return { value: String(nameNode.value) };
      }
      return null;
    }
    function getStaticValue(node, initialScope = null) {
      try {
        return getStaticValueR(node, initialScope);
      } catch (_error) {
        return null;
      }
    }
    function getStringIfConstant(node, initialScope = null) {
      if (node && node.type === "Literal" && node.value === null) {
        if (node.regex) {
          return `/${node.regex.pattern}/${node.regex.flags}`;
        }
        if (node.bigint) {
          return node.bigint;
        }
      }
      const evaluated = getStaticValue(node, initialScope);
      return evaluated && String(evaluated.value);
    }
    function getPropertyName(node, initialScope) {
      switch (node.type) {
        case "MemberExpression":
          if (node.computed) {
            return getStringIfConstant(node.property, initialScope);
          }
          if (node.property.type === "PrivateIdentifier") {
            return null;
          }
          return node.property.name;
        case "Property":
        case "MethodDefinition":
        case "PropertyDefinition":
          if (node.computed) {
            return getStringIfConstant(node.key, initialScope);
          }
          if (node.key.type === "Literal") {
            return String(node.key.value);
          }
          if (node.key.type === "PrivateIdentifier") {
            return null;
          }
          return node.key.name;
      }
      return null;
    }
    function getFunctionNameWithKind(node, sourceCode) {
      const parent = node.parent;
      const tokens = [];
      const isObjectMethod = parent.type === "Property" && parent.value === node;
      const isClassMethod = parent.type === "MethodDefinition" && parent.value === node;
      const isClassFieldMethod = parent.type === "PropertyDefinition" && parent.value === node;
      if (isClassMethod || isClassFieldMethod) {
        if (parent.static) {
          tokens.push("static");
        }
        if (parent.key.type === "PrivateIdentifier") {
          tokens.push("private");
        }
      }
      if (node.async) {
        tokens.push("async");
      }
      if (node.generator) {
        tokens.push("generator");
      }
      if (isObjectMethod || isClassMethod) {
        if (parent.kind === "constructor") {
          return "constructor";
        }
        if (parent.kind === "get") {
          tokens.push("getter");
        } else if (parent.kind === "set") {
          tokens.push("setter");
        } else {
          tokens.push("method");
        }
      } else if (isClassFieldMethod) {
        tokens.push("method");
      } else {
        if (node.type === "ArrowFunctionExpression") {
          tokens.push("arrow");
        }
        tokens.push("function");
      }
      if (isObjectMethod || isClassMethod || isClassFieldMethod) {
        if (parent.key.type === "PrivateIdentifier") {
          tokens.push(`#${parent.key.name}`);
        } else {
          const name = getPropertyName(parent);
          if (name) {
            tokens.push(`'${name}'`);
          } else if (sourceCode) {
            const keyText = sourceCode.getText(parent.key);
            if (!keyText.includes("\n")) {
              tokens.push(`[${keyText}]`);
            }
          }
        }
      } else if (node.id) {
        tokens.push(`'${node.id.name}'`);
      } else if (parent.type === "VariableDeclarator" && parent.id && parent.id.type === "Identifier") {
        tokens.push(`'${parent.id.name}'`);
      } else if ((parent.type === "AssignmentExpression" || parent.type === "AssignmentPattern") && parent.left && parent.left.type === "Identifier") {
        tokens.push(`'${parent.left.name}'`);
      } else if (parent.type === "ExportDefaultDeclaration" && parent.declaration === node) {
        tokens.push("'default'");
      }
      return tokens.join(" ");
    }
    var typeConversionBinaryOps = Object.freeze(
      /* @__PURE__ */ new Set([
        "==",
        "!=",
        "<",
        "<=",
        ">",
        ">=",
        "<<",
        ">>",
        ">>>",
        "+",
        "-",
        "*",
        "/",
        "%",
        "|",
        "^",
        "&",
        "in"
      ])
    );
    var typeConversionUnaryOps = Object.freeze(/* @__PURE__ */ new Set(["-", "+", "!", "~"]));
    function isNode(x) {
      return x !== null && typeof x === "object" && typeof x.type === "string";
    }
    var visitor = Object.freeze(
      Object.assign(/* @__PURE__ */ Object.create(null), {
        $visit(node, options, visitorKeys) {
          const { type } = node;
          if (typeof this[type] === "function") {
            return this[type](node, options, visitorKeys);
          }
          return this.$visitChildren(node, options, visitorKeys);
        },
        $visitChildren(node, options, visitorKeys) {
          const { type } = node;
          for (const key of visitorKeys[type] || eslintVisitorKeys.getKeys(node)) {
            const value = node[key];
            if (Array.isArray(value)) {
              for (const element of value) {
                if (isNode(element) && this.$visit(element, options, visitorKeys)) {
                  return true;
                }
              }
            } else if (isNode(value) && this.$visit(value, options, visitorKeys)) {
              return true;
            }
          }
          return false;
        },
        ArrowFunctionExpression() {
          return false;
        },
        AssignmentExpression() {
          return true;
        },
        AwaitExpression() {
          return true;
        },
        BinaryExpression(node, options, visitorKeys) {
          if (options.considerImplicitTypeConversion && typeConversionBinaryOps.has(node.operator) && (node.left.type !== "Literal" || node.right.type !== "Literal")) {
            return true;
          }
          return this.$visitChildren(node, options, visitorKeys);
        },
        CallExpression() {
          return true;
        },
        FunctionExpression() {
          return false;
        },
        ImportExpression() {
          return true;
        },
        MemberExpression(node, options, visitorKeys) {
          if (options.considerGetters) {
            return true;
          }
          if (options.considerImplicitTypeConversion && node.computed && node.property.type !== "Literal") {
            return true;
          }
          return this.$visitChildren(node, options, visitorKeys);
        },
        MethodDefinition(node, options, visitorKeys) {
          if (options.considerImplicitTypeConversion && node.computed && node.key.type !== "Literal") {
            return true;
          }
          return this.$visitChildren(node, options, visitorKeys);
        },
        NewExpression() {
          return true;
        },
        Property(node, options, visitorKeys) {
          if (options.considerImplicitTypeConversion && node.computed && node.key.type !== "Literal") {
            return true;
          }
          return this.$visitChildren(node, options, visitorKeys);
        },
        PropertyDefinition(node, options, visitorKeys) {
          if (options.considerImplicitTypeConversion && node.computed && node.key.type !== "Literal") {
            return true;
          }
          return this.$visitChildren(node, options, visitorKeys);
        },
        UnaryExpression(node, options, visitorKeys) {
          if (node.operator === "delete") {
            return true;
          }
          if (options.considerImplicitTypeConversion && typeConversionUnaryOps.has(node.operator) && node.argument.type !== "Literal") {
            return true;
          }
          return this.$visitChildren(node, options, visitorKeys);
        },
        UpdateExpression() {
          return true;
        },
        YieldExpression() {
          return true;
        }
      })
    );
    function hasSideEffect(node, sourceCode, { considerGetters = false, considerImplicitTypeConversion = false } = {}) {
      return visitor.$visit(
        node,
        { considerGetters, considerImplicitTypeConversion },
        sourceCode.visitorKeys || eslintVisitorKeys.KEYS
      );
    }
    function getParentSyntaxParen(node, sourceCode) {
      const parent = node.parent;
      switch (parent.type) {
        case "CallExpression":
        case "NewExpression":
          if (parent.arguments.length === 1 && parent.arguments[0] === node) {
            return sourceCode.getTokenAfter(
              parent.callee,
              isOpeningParenToken
            );
          }
          return null;
        case "DoWhileStatement":
          if (parent.test === node) {
            return sourceCode.getTokenAfter(
              parent.body,
              isOpeningParenToken
            );
          }
          return null;
        case "IfStatement":
        case "WhileStatement":
          if (parent.test === node) {
            return sourceCode.getFirstToken(parent, 1);
          }
          return null;
        case "ImportExpression":
          if (parent.source === node) {
            return sourceCode.getFirstToken(parent, 1);
          }
          return null;
        case "SwitchStatement":
          if (parent.discriminant === node) {
            return sourceCode.getFirstToken(parent, 1);
          }
          return null;
        case "WithStatement":
          if (parent.object === node) {
            return sourceCode.getFirstToken(parent, 1);
          }
          return null;
        default:
          return null;
      }
    }
    function isParenthesized(timesOrNode, nodeOrSourceCode, optionalSourceCode) {
      let times, node, sourceCode, maybeLeftParen, maybeRightParen;
      if (typeof timesOrNode === "number") {
        times = timesOrNode | 0;
        node = nodeOrSourceCode;
        sourceCode = optionalSourceCode;
        if (!(times >= 1)) {
          throw new TypeError("'times' should be a positive integer.");
        }
      } else {
        times = 1;
        node = timesOrNode;
        sourceCode = nodeOrSourceCode;
      }
      if (node == null || // `Program` can't be parenthesized
      node.parent == null || // `CatchClause.param` can't be parenthesized, example `try {} catch (error) {}`
      node.parent.type === "CatchClause" && node.parent.param === node) {
        return false;
      }
      maybeLeftParen = maybeRightParen = node;
      do {
        maybeLeftParen = sourceCode.getTokenBefore(maybeLeftParen);
        maybeRightParen = sourceCode.getTokenAfter(maybeRightParen);
      } while (maybeLeftParen != null && maybeRightParen != null && isOpeningParenToken(maybeLeftParen) && isClosingParenToken(maybeRightParen) && // Avoid false positive such as `if (a) {}`
      maybeLeftParen !== getParentSyntaxParen(node, sourceCode) && --times > 0);
      return times === 0;
    }
    var placeholder = /\$(?:[$&`']|[1-9][0-9]?)/gu;
    var internal = /* @__PURE__ */ new WeakMap();
    function isEscaped(str, index2) {
      let escaped = false;
      for (let i = index2 - 1; i >= 0 && str.charCodeAt(i) === 92; --i) {
        escaped = !escaped;
      }
      return escaped;
    }
    function replaceS(matcher, str, replacement) {
      const chunks = [];
      let index2 = 0;
      let match = null;
      function replacer(key) {
        switch (key) {
          case "$$":
            return "$";
          case "$&":
            return match[0];
          case "$`":
            return str.slice(0, match.index);
          case "$'":
            return str.slice(match.index + match[0].length);
          default: {
            const i = key.slice(1);
            if (i in match) {
              return match[i];
            }
            return key;
          }
        }
      }
      for (match of matcher.execAll(str)) {
        chunks.push(str.slice(index2, match.index));
        chunks.push(replacement.replace(placeholder, replacer));
        index2 = match.index + match[0].length;
      }
      chunks.push(str.slice(index2));
      return chunks.join("");
    }
    function replaceF(matcher, str, replace) {
      const chunks = [];
      let index2 = 0;
      for (const match of matcher.execAll(str)) {
        chunks.push(str.slice(index2, match.index));
        chunks.push(String(replace(...match, match.index, match.input)));
        index2 = match.index + match[0].length;
      }
      chunks.push(str.slice(index2));
      return chunks.join("");
    }
    var PatternMatcher = class {
      /**
       * Initialize this matcher.
       * @param {RegExp} pattern The pattern to match.
       * @param {{escaped:boolean}} options The options.
       */
      constructor(pattern, { escaped = false } = {}) {
        if (!(pattern instanceof RegExp)) {
          throw new TypeError("'pattern' should be a RegExp instance.");
        }
        if (!pattern.flags.includes("g")) {
          throw new Error("'pattern' should contains 'g' flag.");
        }
        internal.set(this, {
          pattern: new RegExp(pattern.source, pattern.flags),
          escaped: Boolean(escaped)
        });
      }
      /**
       * Find the pattern in a given string.
       * @param {string} str The string to find.
       * @returns {IterableIterator<RegExpExecArray>} The iterator which iterate the matched information.
       */
      *execAll(str) {
        const { pattern, escaped } = internal.get(this);
        let match = null;
        let lastIndex = 0;
        pattern.lastIndex = 0;
        while ((match = pattern.exec(str)) != null) {
          if (escaped || !isEscaped(str, match.index)) {
            lastIndex = pattern.lastIndex;
            yield match;
            pattern.lastIndex = lastIndex;
          }
        }
      }
      /**
       * Check whether the pattern is found in a given string.
       * @param {string} str The string to check.
       * @returns {boolean} `true` if the pattern was found in the string.
       */
      test(str) {
        const it = this.execAll(str);
        const ret = it.next();
        return !ret.done;
      }
      /**
       * Replace a given string.
       * @param {string} str The string to be replaced.
       * @param {(string|((...strs:string[])=>string))} replacer The string or function to replace. This is the same as the 2nd argument of `String.prototype.replace`.
       * @returns {string} The replaced string.
       */
      [Symbol.replace](str, replacer) {
        return typeof replacer === "function" ? replaceF(this, String(str), replacer) : replaceS(this, String(str), String(replacer));
      }
    };
    var IMPORT_TYPE = /^(?:Import|Export(?:All|Default|Named))Declaration$/u;
    var has = Function.call.bind(Object.hasOwnProperty);
    var READ = Symbol("read");
    var CALL = Symbol("call");
    var CONSTRUCT = Symbol("construct");
    var ESM = Symbol("esm");
    var requireCall = { require: { [CALL]: true } };
    function isModifiedGlobal(variable) {
      return variable == null || variable.defs.length !== 0 || variable.references.some((r) => r.isWrite());
    }
    function isPassThrough(node) {
      const parent = node.parent;
      switch (parent && parent.type) {
        case "ConditionalExpression":
          return parent.consequent === node || parent.alternate === node;
        case "LogicalExpression":
          return true;
        case "SequenceExpression":
          return parent.expressions[parent.expressions.length - 1] === node;
        case "ChainExpression":
          return true;
        default:
          return false;
      }
    }
    var ReferenceTracker = class {
      /**
       * Initialize this tracker.
       * @param {Scope} globalScope The global scope.
       * @param {object} [options] The options.
       * @param {"legacy"|"strict"} [options.mode="strict"] The mode to determine the ImportDeclaration's behavior for CJS modules.
       * @param {string[]} [options.globalObjectNames=["global","globalThis","self","window"]] The variable names for Global Object.
       */
      constructor(globalScope, {
        mode = "strict",
        globalObjectNames = ["global", "globalThis", "self", "window"]
      } = {}) {
        this.variableStack = [];
        this.globalScope = globalScope;
        this.mode = mode;
        this.globalObjectNames = globalObjectNames.slice(0);
      }
      /**
       * Iterate the references of global variables.
       * @param {object} traceMap The trace map.
       * @returns {IterableIterator<{node:Node,path:string[],type:symbol,info:any}>} The iterator to iterate references.
       */
      *iterateGlobalReferences(traceMap) {
        for (const key of Object.keys(traceMap)) {
          const nextTraceMap = traceMap[key];
          const path = [key];
          const variable = this.globalScope.set.get(key);
          if (isModifiedGlobal(variable)) {
            continue;
          }
          yield* this._iterateVariableReferences(
            variable,
            path,
            nextTraceMap,
            true
          );
        }
        for (const key of this.globalObjectNames) {
          const path = [];
          const variable = this.globalScope.set.get(key);
          if (isModifiedGlobal(variable)) {
            continue;
          }
          yield* this._iterateVariableReferences(
            variable,
            path,
            traceMap,
            false
          );
        }
      }
      /**
       * Iterate the references of CommonJS modules.
       * @param {object} traceMap The trace map.
       * @returns {IterableIterator<{node:Node,path:string[],type:symbol,info:any}>} The iterator to iterate references.
       */
      *iterateCjsReferences(traceMap) {
        for (const { node } of this.iterateGlobalReferences(requireCall)) {
          const key = getStringIfConstant(node.arguments[0]);
          if (key == null || !has(traceMap, key)) {
            continue;
          }
          const nextTraceMap = traceMap[key];
          const path = [key];
          if (nextTraceMap[READ]) {
            yield {
              node,
              path,
              type: READ,
              info: nextTraceMap[READ]
            };
          }
          yield* this._iteratePropertyReferences(node, path, nextTraceMap);
        }
      }
      /**
       * Iterate the references of ES modules.
       * @param {object} traceMap The trace map.
       * @returns {IterableIterator<{node:Node,path:string[],type:symbol,info:any}>} The iterator to iterate references.
       */
      *iterateEsmReferences(traceMap) {
        const programNode = this.globalScope.block;
        for (const node of programNode.body) {
          if (!IMPORT_TYPE.test(node.type) || node.source == null) {
            continue;
          }
          const moduleId = node.source.value;
          if (!has(traceMap, moduleId)) {
            continue;
          }
          const nextTraceMap = traceMap[moduleId];
          const path = [moduleId];
          if (nextTraceMap[READ]) {
            yield { node, path, type: READ, info: nextTraceMap[READ] };
          }
          if (node.type === "ExportAllDeclaration") {
            for (const key of Object.keys(nextTraceMap)) {
              const exportTraceMap = nextTraceMap[key];
              if (exportTraceMap[READ]) {
                yield {
                  node,
                  path: path.concat(key),
                  type: READ,
                  info: exportTraceMap[READ]
                };
              }
            }
          } else {
            for (const specifier of node.specifiers) {
              const esm = has(nextTraceMap, ESM);
              const it = this._iterateImportReferences(
                specifier,
                path,
                esm ? nextTraceMap : this.mode === "legacy" ? { default: nextTraceMap, ...nextTraceMap } : { default: nextTraceMap }
              );
              if (esm) {
                yield* it;
              } else {
                for (const report of it) {
                  report.path = report.path.filter(exceptDefault);
                  if (report.path.length >= 2 || report.type !== READ) {
                    yield report;
                  }
                }
              }
            }
          }
        }
      }
      /**
       * Iterate the references for a given variable.
       * @param {Variable} variable The variable to iterate that references.
       * @param {string[]} path The current path.
       * @param {object} traceMap The trace map.
       * @param {boolean} shouldReport = The flag to report those references.
       * @returns {IterableIterator<{node:Node,path:string[],type:symbol,info:any}>} The iterator to iterate references.
       */
      *_iterateVariableReferences(variable, path, traceMap, shouldReport) {
        if (this.variableStack.includes(variable)) {
          return;
        }
        this.variableStack.push(variable);
        try {
          for (const reference of variable.references) {
            if (!reference.isRead()) {
              continue;
            }
            const node = reference.identifier;
            if (shouldReport && traceMap[READ]) {
              yield { node, path, type: READ, info: traceMap[READ] };
            }
            yield* this._iteratePropertyReferences(node, path, traceMap);
          }
        } finally {
          this.variableStack.pop();
        }
      }
      /**
       * Iterate the references for a given AST node.
       * @param rootNode The AST node to iterate references.
       * @param {string[]} path The current path.
       * @param {object} traceMap The trace map.
       * @returns {IterableIterator<{node:Node,path:string[],type:symbol,info:any}>} The iterator to iterate references.
       */
      //eslint-disable-next-line complexity
      *_iteratePropertyReferences(rootNode, path, traceMap) {
        let node = rootNode;
        while (isPassThrough(node)) {
          node = node.parent;
        }
        const parent = node.parent;
        if (parent.type === "MemberExpression") {
          if (parent.object === node) {
            const key = getPropertyName(parent);
            if (key == null || !has(traceMap, key)) {
              return;
            }
            path = path.concat(key);
            const nextTraceMap = traceMap[key];
            if (nextTraceMap[READ]) {
              yield {
                node: parent,
                path,
                type: READ,
                info: nextTraceMap[READ]
              };
            }
            yield* this._iteratePropertyReferences(
              parent,
              path,
              nextTraceMap
            );
          }
          return;
        }
        if (parent.type === "CallExpression") {
          if (parent.callee === node && traceMap[CALL]) {
            yield { node: parent, path, type: CALL, info: traceMap[CALL] };
          }
          return;
        }
        if (parent.type === "NewExpression") {
          if (parent.callee === node && traceMap[CONSTRUCT]) {
            yield {
              node: parent,
              path,
              type: CONSTRUCT,
              info: traceMap[CONSTRUCT]
            };
          }
          return;
        }
        if (parent.type === "AssignmentExpression") {
          if (parent.right === node) {
            yield* this._iterateLhsReferences(parent.left, path, traceMap);
            yield* this._iteratePropertyReferences(parent, path, traceMap);
          }
          return;
        }
        if (parent.type === "AssignmentPattern") {
          if (parent.right === node) {
            yield* this._iterateLhsReferences(parent.left, path, traceMap);
          }
          return;
        }
        if (parent.type === "VariableDeclarator") {
          if (parent.init === node) {
            yield* this._iterateLhsReferences(parent.id, path, traceMap);
          }
        }
      }
      /**
       * Iterate the references for a given Pattern node.
       * @param {Node} patternNode The Pattern node to iterate references.
       * @param {string[]} path The current path.
       * @param {object} traceMap The trace map.
       * @returns {IterableIterator<{node:Node,path:string[],type:symbol,info:any}>} The iterator to iterate references.
       */
      *_iterateLhsReferences(patternNode, path, traceMap) {
        if (patternNode.type === "Identifier") {
          const variable = findVariable(this.globalScope, patternNode);
          if (variable != null) {
            yield* this._iterateVariableReferences(
              variable,
              path,
              traceMap,
              false
            );
          }
          return;
        }
        if (patternNode.type === "ObjectPattern") {
          for (const property of patternNode.properties) {
            const key = getPropertyName(property);
            if (key == null || !has(traceMap, key)) {
              continue;
            }
            const nextPath = path.concat(key);
            const nextTraceMap = traceMap[key];
            if (nextTraceMap[READ]) {
              yield {
                node: property,
                path: nextPath,
                type: READ,
                info: nextTraceMap[READ]
              };
            }
            yield* this._iterateLhsReferences(
              property.value,
              nextPath,
              nextTraceMap
            );
          }
          return;
        }
        if (patternNode.type === "AssignmentPattern") {
          yield* this._iterateLhsReferences(patternNode.left, path, traceMap);
        }
      }
      /**
       * Iterate the references for a given ModuleSpecifier node.
       * @param {Node} specifierNode The ModuleSpecifier node to iterate references.
       * @param {string[]} path The current path.
       * @param {object} traceMap The trace map.
       * @returns {IterableIterator<{node:Node,path:string[],type:symbol,info:any}>} The iterator to iterate references.
       */
      *_iterateImportReferences(specifierNode, path, traceMap) {
        const type = specifierNode.type;
        if (type === "ImportSpecifier" || type === "ImportDefaultSpecifier") {
          const key = type === "ImportDefaultSpecifier" ? "default" : specifierNode.imported.name;
          if (!has(traceMap, key)) {
            return;
          }
          path = path.concat(key);
          const nextTraceMap = traceMap[key];
          if (nextTraceMap[READ]) {
            yield {
              node: specifierNode,
              path,
              type: READ,
              info: nextTraceMap[READ]
            };
          }
          yield* this._iterateVariableReferences(
            findVariable(this.globalScope, specifierNode.local),
            path,
            nextTraceMap,
            false
          );
          return;
        }
        if (type === "ImportNamespaceSpecifier") {
          yield* this._iterateVariableReferences(
            findVariable(this.globalScope, specifierNode.local),
            path,
            traceMap,
            false
          );
          return;
        }
        if (type === "ExportSpecifier") {
          const key = specifierNode.local.name;
          if (!has(traceMap, key)) {
            return;
          }
          path = path.concat(key);
          const nextTraceMap = traceMap[key];
          if (nextTraceMap[READ]) {
            yield {
              node: specifierNode,
              path,
              type: READ,
              info: nextTraceMap[READ]
            };
          }
        }
      }
    };
    ReferenceTracker.READ = READ;
    ReferenceTracker.CALL = CALL;
    ReferenceTracker.CONSTRUCT = CONSTRUCT;
    ReferenceTracker.ESM = ESM;
    function exceptDefault(name, index2) {
      return !(index2 === 1 && name === "default");
    }
    var index = {
      CALL,
      CONSTRUCT,
      ESM,
      findVariable,
      getFunctionHeadLocation,
      getFunctionNameWithKind,
      getInnermostScope,
      getPropertyName,
      getStaticValue,
      getStringIfConstant,
      hasSideEffect,
      isArrowToken,
      isClosingBraceToken,
      isClosingBracketToken,
      isClosingParenToken,
      isColonToken,
      isCommaToken,
      isCommentToken,
      isNotArrowToken,
      isNotClosingBraceToken,
      isNotClosingBracketToken,
      isNotClosingParenToken,
      isNotColonToken,
      isNotCommaToken,
      isNotCommentToken,
      isNotOpeningBraceToken,
      isNotOpeningBracketToken,
      isNotOpeningParenToken,
      isNotSemicolonToken,
      isOpeningBraceToken,
      isOpeningBracketToken,
      isOpeningParenToken,
      isParenthesized,
      isSemicolonToken,
      PatternMatcher,
      READ,
      ReferenceTracker
    };
    exports.CALL = CALL;
    exports.CONSTRUCT = CONSTRUCT;
    exports.ESM = ESM;
    exports.PatternMatcher = PatternMatcher;
    exports.READ = READ;
    exports.ReferenceTracker = ReferenceTracker;
    exports["default"] = index;
    exports.findVariable = findVariable;
    exports.getFunctionHeadLocation = getFunctionHeadLocation;
    exports.getFunctionNameWithKind = getFunctionNameWithKind;
    exports.getInnermostScope = getInnermostScope;
    exports.getPropertyName = getPropertyName;
    exports.getStaticValue = getStaticValue;
    exports.getStringIfConstant = getStringIfConstant;
    exports.hasSideEffect = hasSideEffect;
    exports.isArrowToken = isArrowToken;
    exports.isClosingBraceToken = isClosingBraceToken;
    exports.isClosingBracketToken = isClosingBracketToken;
    exports.isClosingParenToken = isClosingParenToken;
    exports.isColonToken = isColonToken;
    exports.isCommaToken = isCommaToken;
    exports.isCommentToken = isCommentToken;
    exports.isNotArrowToken = isNotArrowToken;
    exports.isNotClosingBraceToken = isNotClosingBraceToken;
    exports.isNotClosingBracketToken = isNotClosingBracketToken;
    exports.isNotClosingParenToken = isNotClosingParenToken;
    exports.isNotColonToken = isNotColonToken;
    exports.isNotCommaToken = isNotCommaToken;
    exports.isNotCommentToken = isNotCommentToken;
    exports.isNotOpeningBraceToken = isNotOpeningBraceToken;
    exports.isNotOpeningBracketToken = isNotOpeningBracketToken;
    exports.isNotOpeningParenToken = isNotOpeningParenToken;
    exports.isNotSemicolonToken = isNotSemicolonToken;
    exports.isOpeningBraceToken = isOpeningBraceToken;
    exports.isOpeningBracketToken = isOpeningBracketToken;
    exports.isOpeningParenToken = isOpeningParenToken;
    exports.isParenthesized = isParenthesized;
    exports.isSemicolonToken = isSemicolonToken;
  }
});

// node_modules/@typescript-eslint/utils/dist/ast-utils/eslint-utils/astUtilities.js
var require_astUtilities = __commonJS({
  "node_modules/@typescript-eslint/utils/dist/ast-utils/eslint-utils/astUtilities.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isParenthesized = exports.hasSideEffect = exports.getStringIfConstant = exports.getStaticValue = exports.getPropertyName = exports.getFunctionNameWithKind = exports.getFunctionHeadLocation = void 0;
    var eslintUtils = __importStar(require_eslint_utils());
    var getFunctionHeadLocation = eslintUtils.getFunctionHeadLocation;
    exports.getFunctionHeadLocation = getFunctionHeadLocation;
    var getFunctionNameWithKind = eslintUtils.getFunctionNameWithKind;
    exports.getFunctionNameWithKind = getFunctionNameWithKind;
    var getPropertyName = eslintUtils.getPropertyName;
    exports.getPropertyName = getPropertyName;
    var getStaticValue = eslintUtils.getStaticValue;
    exports.getStaticValue = getStaticValue;
    var getStringIfConstant = eslintUtils.getStringIfConstant;
    exports.getStringIfConstant = getStringIfConstant;
    var hasSideEffect = eslintUtils.hasSideEffect;
    exports.hasSideEffect = hasSideEffect;
    var isParenthesized = eslintUtils.isParenthesized;
    exports.isParenthesized = isParenthesized;
  }
});

// node_modules/@typescript-eslint/utils/dist/ast-utils/eslint-utils/PatternMatcher.js
var require_PatternMatcher = __commonJS({
  "node_modules/@typescript-eslint/utils/dist/ast-utils/eslint-utils/PatternMatcher.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PatternMatcher = void 0;
    var eslintUtils = __importStar(require_eslint_utils());
    var PatternMatcher = eslintUtils.PatternMatcher;
    exports.PatternMatcher = PatternMatcher;
  }
});

// node_modules/@typescript-eslint/utils/dist/ast-utils/eslint-utils/predicates.js
var require_predicates = __commonJS({
  "node_modules/@typescript-eslint/utils/dist/ast-utils/eslint-utils/predicates.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isSemicolonToken = exports.isOpeningParenToken = exports.isOpeningBracketToken = exports.isOpeningBraceToken = exports.isNotSemicolonToken = exports.isNotOpeningParenToken = exports.isNotOpeningBracketToken = exports.isNotOpeningBraceToken = exports.isNotCommentToken = exports.isNotCommaToken = exports.isNotColonToken = exports.isNotClosingParenToken = exports.isNotClosingBracketToken = exports.isNotClosingBraceToken = exports.isNotArrowToken = exports.isCommentToken = exports.isCommaToken = exports.isColonToken = exports.isClosingParenToken = exports.isClosingBracketToken = exports.isClosingBraceToken = exports.isArrowToken = void 0;
    var eslintUtils = __importStar(require_eslint_utils());
    var isArrowToken = eslintUtils.isArrowToken;
    exports.isArrowToken = isArrowToken;
    var isNotArrowToken = eslintUtils.isNotArrowToken;
    exports.isNotArrowToken = isNotArrowToken;
    var isClosingBraceToken = eslintUtils.isClosingBraceToken;
    exports.isClosingBraceToken = isClosingBraceToken;
    var isNotClosingBraceToken = eslintUtils.isNotClosingBraceToken;
    exports.isNotClosingBraceToken = isNotClosingBraceToken;
    var isClosingBracketToken = eslintUtils.isClosingBracketToken;
    exports.isClosingBracketToken = isClosingBracketToken;
    var isNotClosingBracketToken = eslintUtils.isNotClosingBracketToken;
    exports.isNotClosingBracketToken = isNotClosingBracketToken;
    var isClosingParenToken = eslintUtils.isClosingParenToken;
    exports.isClosingParenToken = isClosingParenToken;
    var isNotClosingParenToken = eslintUtils.isNotClosingParenToken;
    exports.isNotClosingParenToken = isNotClosingParenToken;
    var isColonToken = eslintUtils.isColonToken;
    exports.isColonToken = isColonToken;
    var isNotColonToken = eslintUtils.isNotColonToken;
    exports.isNotColonToken = isNotColonToken;
    var isCommaToken = eslintUtils.isCommaToken;
    exports.isCommaToken = isCommaToken;
    var isNotCommaToken = eslintUtils.isNotCommaToken;
    exports.isNotCommaToken = isNotCommaToken;
    var isCommentToken = eslintUtils.isCommentToken;
    exports.isCommentToken = isCommentToken;
    var isNotCommentToken = eslintUtils.isNotCommentToken;
    exports.isNotCommentToken = isNotCommentToken;
    var isOpeningBraceToken = eslintUtils.isOpeningBraceToken;
    exports.isOpeningBraceToken = isOpeningBraceToken;
    var isNotOpeningBraceToken = eslintUtils.isNotOpeningBraceToken;
    exports.isNotOpeningBraceToken = isNotOpeningBraceToken;
    var isOpeningBracketToken = eslintUtils.isOpeningBracketToken;
    exports.isOpeningBracketToken = isOpeningBracketToken;
    var isNotOpeningBracketToken = eslintUtils.isNotOpeningBracketToken;
    exports.isNotOpeningBracketToken = isNotOpeningBracketToken;
    var isOpeningParenToken = eslintUtils.isOpeningParenToken;
    exports.isOpeningParenToken = isOpeningParenToken;
    var isNotOpeningParenToken = eslintUtils.isNotOpeningParenToken;
    exports.isNotOpeningParenToken = isNotOpeningParenToken;
    var isSemicolonToken = eslintUtils.isSemicolonToken;
    exports.isSemicolonToken = isSemicolonToken;
    var isNotSemicolonToken = eslintUtils.isNotSemicolonToken;
    exports.isNotSemicolonToken = isNotSemicolonToken;
  }
});

// node_modules/@typescript-eslint/utils/dist/ast-utils/eslint-utils/ReferenceTracker.js
var require_ReferenceTracker = __commonJS({
  "node_modules/@typescript-eslint/utils/dist/ast-utils/eslint-utils/ReferenceTracker.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ReferenceTracker = void 0;
    var eslintUtils = __importStar(require_eslint_utils());
    var ReferenceTrackerREAD = eslintUtils.ReferenceTracker.READ;
    var ReferenceTrackerCALL = eslintUtils.ReferenceTracker.CALL;
    var ReferenceTrackerCONSTRUCT = eslintUtils.ReferenceTracker.CONSTRUCT;
    var ReferenceTrackerESM = eslintUtils.ReferenceTracker.ESM;
    var ReferenceTracker = eslintUtils.ReferenceTracker;
    exports.ReferenceTracker = ReferenceTracker;
  }
});

// node_modules/@typescript-eslint/utils/dist/ast-utils/eslint-utils/scopeAnalysis.js
var require_scopeAnalysis = __commonJS({
  "node_modules/@typescript-eslint/utils/dist/ast-utils/eslint-utils/scopeAnalysis.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getInnermostScope = exports.findVariable = void 0;
    var eslintUtils = __importStar(require_eslint_utils());
    var findVariable = eslintUtils.findVariable;
    exports.findVariable = findVariable;
    var getInnermostScope = eslintUtils.getInnermostScope;
    exports.getInnermostScope = getInnermostScope;
  }
});

// node_modules/@typescript-eslint/utils/dist/ast-utils/eslint-utils/index.js
var require_eslint_utils2 = __commonJS({
  "node_modules/@typescript-eslint/utils/dist/ast-utils/eslint-utils/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_astUtilities(), exports);
    __exportStar(require_PatternMatcher(), exports);
    __exportStar(require_predicates(), exports);
    __exportStar(require_ReferenceTracker(), exports);
    __exportStar(require_scopeAnalysis(), exports);
  }
});

// node_modules/@typescript-eslint/utils/dist/ast-utils/helpers.js
var require_helpers = __commonJS({
  "node_modules/@typescript-eslint/utils/dist/ast-utils/helpers.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isNotTokenOfTypeWithConditions = exports.isTokenOfTypeWithConditions = exports.isNodeOfTypeWithConditions = exports.isNodeOfTypes = exports.isNodeOfType = void 0;
    var isNodeOfType = (nodeType) => (node) => (node == null ? void 0 : node.type) === nodeType;
    exports.isNodeOfType = isNodeOfType;
    var isNodeOfTypes = (nodeTypes) => (node) => !!node && nodeTypes.includes(node.type);
    exports.isNodeOfTypes = isNodeOfTypes;
    var isNodeOfTypeWithConditions = (nodeType, conditions) => {
      const entries = Object.entries(conditions);
      return (node) => (node == null ? void 0 : node.type) === nodeType && entries.every(([key, value]) => node[key] === value);
    };
    exports.isNodeOfTypeWithConditions = isNodeOfTypeWithConditions;
    var isTokenOfTypeWithConditions = (tokenType, conditions) => {
      const entries = Object.entries(conditions);
      return (token) => (token == null ? void 0 : token.type) === tokenType && entries.every(([key, value]) => token[key] === value);
    };
    exports.isTokenOfTypeWithConditions = isTokenOfTypeWithConditions;
    var isNotTokenOfTypeWithConditions = (tokenType, conditions) => (token) => !(0, exports.isTokenOfTypeWithConditions)(tokenType, conditions)(token);
    exports.isNotTokenOfTypeWithConditions = isNotTokenOfTypeWithConditions;
  }
});

// node_modules/@typescript-eslint/utils/dist/ast-utils/misc.js
var require_misc = __commonJS({
  "node_modules/@typescript-eslint/utils/dist/ast-utils/misc.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LINEBREAK_MATCHER = exports.isTokenOnSameLine = void 0;
    var LINEBREAK_MATCHER = /\r\n|[\r\n\u2028\u2029]/;
    exports.LINEBREAK_MATCHER = LINEBREAK_MATCHER;
    function isTokenOnSameLine(left, right) {
      return left.loc.end.line === right.loc.start.line;
    }
    exports.isTokenOnSameLine = isTokenOnSameLine;
  }
});

// node_modules/@typescript-eslint/types/dist/generated/ast-spec.js
var require_ast_spec = __commonJS({
  "node_modules/@typescript-eslint/types/dist/generated/ast-spec.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AST_TOKEN_TYPES = exports.AST_NODE_TYPES = void 0;
    var AST_NODE_TYPES;
    (function(AST_NODE_TYPES2) {
      AST_NODE_TYPES2["AccessorProperty"] = "AccessorProperty";
      AST_NODE_TYPES2["ArrayExpression"] = "ArrayExpression";
      AST_NODE_TYPES2["ArrayPattern"] = "ArrayPattern";
      AST_NODE_TYPES2["ArrowFunctionExpression"] = "ArrowFunctionExpression";
      AST_NODE_TYPES2["AssignmentExpression"] = "AssignmentExpression";
      AST_NODE_TYPES2["AssignmentPattern"] = "AssignmentPattern";
      AST_NODE_TYPES2["AwaitExpression"] = "AwaitExpression";
      AST_NODE_TYPES2["BinaryExpression"] = "BinaryExpression";
      AST_NODE_TYPES2["BlockStatement"] = "BlockStatement";
      AST_NODE_TYPES2["BreakStatement"] = "BreakStatement";
      AST_NODE_TYPES2["CallExpression"] = "CallExpression";
      AST_NODE_TYPES2["CatchClause"] = "CatchClause";
      AST_NODE_TYPES2["ChainExpression"] = "ChainExpression";
      AST_NODE_TYPES2["ClassBody"] = "ClassBody";
      AST_NODE_TYPES2["ClassDeclaration"] = "ClassDeclaration";
      AST_NODE_TYPES2["ClassExpression"] = "ClassExpression";
      AST_NODE_TYPES2["ConditionalExpression"] = "ConditionalExpression";
      AST_NODE_TYPES2["ContinueStatement"] = "ContinueStatement";
      AST_NODE_TYPES2["DebuggerStatement"] = "DebuggerStatement";
      AST_NODE_TYPES2["Decorator"] = "Decorator";
      AST_NODE_TYPES2["DoWhileStatement"] = "DoWhileStatement";
      AST_NODE_TYPES2["EmptyStatement"] = "EmptyStatement";
      AST_NODE_TYPES2["ExportAllDeclaration"] = "ExportAllDeclaration";
      AST_NODE_TYPES2["ExportDefaultDeclaration"] = "ExportDefaultDeclaration";
      AST_NODE_TYPES2["ExportNamedDeclaration"] = "ExportNamedDeclaration";
      AST_NODE_TYPES2["ExportSpecifier"] = "ExportSpecifier";
      AST_NODE_TYPES2["ExpressionStatement"] = "ExpressionStatement";
      AST_NODE_TYPES2["ForInStatement"] = "ForInStatement";
      AST_NODE_TYPES2["ForOfStatement"] = "ForOfStatement";
      AST_NODE_TYPES2["ForStatement"] = "ForStatement";
      AST_NODE_TYPES2["FunctionDeclaration"] = "FunctionDeclaration";
      AST_NODE_TYPES2["FunctionExpression"] = "FunctionExpression";
      AST_NODE_TYPES2["Identifier"] = "Identifier";
      AST_NODE_TYPES2["IfStatement"] = "IfStatement";
      AST_NODE_TYPES2["ImportAttribute"] = "ImportAttribute";
      AST_NODE_TYPES2["ImportDeclaration"] = "ImportDeclaration";
      AST_NODE_TYPES2["ImportDefaultSpecifier"] = "ImportDefaultSpecifier";
      AST_NODE_TYPES2["ImportExpression"] = "ImportExpression";
      AST_NODE_TYPES2["ImportNamespaceSpecifier"] = "ImportNamespaceSpecifier";
      AST_NODE_TYPES2["ImportSpecifier"] = "ImportSpecifier";
      AST_NODE_TYPES2["JSXAttribute"] = "JSXAttribute";
      AST_NODE_TYPES2["JSXClosingElement"] = "JSXClosingElement";
      AST_NODE_TYPES2["JSXClosingFragment"] = "JSXClosingFragment";
      AST_NODE_TYPES2["JSXElement"] = "JSXElement";
      AST_NODE_TYPES2["JSXEmptyExpression"] = "JSXEmptyExpression";
      AST_NODE_TYPES2["JSXExpressionContainer"] = "JSXExpressionContainer";
      AST_NODE_TYPES2["JSXFragment"] = "JSXFragment";
      AST_NODE_TYPES2["JSXIdentifier"] = "JSXIdentifier";
      AST_NODE_TYPES2["JSXMemberExpression"] = "JSXMemberExpression";
      AST_NODE_TYPES2["JSXNamespacedName"] = "JSXNamespacedName";
      AST_NODE_TYPES2["JSXOpeningElement"] = "JSXOpeningElement";
      AST_NODE_TYPES2["JSXOpeningFragment"] = "JSXOpeningFragment";
      AST_NODE_TYPES2["JSXSpreadAttribute"] = "JSXSpreadAttribute";
      AST_NODE_TYPES2["JSXSpreadChild"] = "JSXSpreadChild";
      AST_NODE_TYPES2["JSXText"] = "JSXText";
      AST_NODE_TYPES2["LabeledStatement"] = "LabeledStatement";
      AST_NODE_TYPES2["Literal"] = "Literal";
      AST_NODE_TYPES2["LogicalExpression"] = "LogicalExpression";
      AST_NODE_TYPES2["MemberExpression"] = "MemberExpression";
      AST_NODE_TYPES2["MetaProperty"] = "MetaProperty";
      AST_NODE_TYPES2["MethodDefinition"] = "MethodDefinition";
      AST_NODE_TYPES2["NewExpression"] = "NewExpression";
      AST_NODE_TYPES2["ObjectExpression"] = "ObjectExpression";
      AST_NODE_TYPES2["ObjectPattern"] = "ObjectPattern";
      AST_NODE_TYPES2["PrivateIdentifier"] = "PrivateIdentifier";
      AST_NODE_TYPES2["Program"] = "Program";
      AST_NODE_TYPES2["Property"] = "Property";
      AST_NODE_TYPES2["PropertyDefinition"] = "PropertyDefinition";
      AST_NODE_TYPES2["RestElement"] = "RestElement";
      AST_NODE_TYPES2["ReturnStatement"] = "ReturnStatement";
      AST_NODE_TYPES2["SequenceExpression"] = "SequenceExpression";
      AST_NODE_TYPES2["SpreadElement"] = "SpreadElement";
      AST_NODE_TYPES2["StaticBlock"] = "StaticBlock";
      AST_NODE_TYPES2["Super"] = "Super";
      AST_NODE_TYPES2["SwitchCase"] = "SwitchCase";
      AST_NODE_TYPES2["SwitchStatement"] = "SwitchStatement";
      AST_NODE_TYPES2["TaggedTemplateExpression"] = "TaggedTemplateExpression";
      AST_NODE_TYPES2["TemplateElement"] = "TemplateElement";
      AST_NODE_TYPES2["TemplateLiteral"] = "TemplateLiteral";
      AST_NODE_TYPES2["ThisExpression"] = "ThisExpression";
      AST_NODE_TYPES2["ThrowStatement"] = "ThrowStatement";
      AST_NODE_TYPES2["TryStatement"] = "TryStatement";
      AST_NODE_TYPES2["UnaryExpression"] = "UnaryExpression";
      AST_NODE_TYPES2["UpdateExpression"] = "UpdateExpression";
      AST_NODE_TYPES2["VariableDeclaration"] = "VariableDeclaration";
      AST_NODE_TYPES2["VariableDeclarator"] = "VariableDeclarator";
      AST_NODE_TYPES2["WhileStatement"] = "WhileStatement";
      AST_NODE_TYPES2["WithStatement"] = "WithStatement";
      AST_NODE_TYPES2["YieldExpression"] = "YieldExpression";
      AST_NODE_TYPES2["TSAbstractAccessorProperty"] = "TSAbstractAccessorProperty";
      AST_NODE_TYPES2["TSAbstractKeyword"] = "TSAbstractKeyword";
      AST_NODE_TYPES2["TSAbstractMethodDefinition"] = "TSAbstractMethodDefinition";
      AST_NODE_TYPES2["TSAbstractPropertyDefinition"] = "TSAbstractPropertyDefinition";
      AST_NODE_TYPES2["TSAnyKeyword"] = "TSAnyKeyword";
      AST_NODE_TYPES2["TSArrayType"] = "TSArrayType";
      AST_NODE_TYPES2["TSAsExpression"] = "TSAsExpression";
      AST_NODE_TYPES2["TSAsyncKeyword"] = "TSAsyncKeyword";
      AST_NODE_TYPES2["TSBigIntKeyword"] = "TSBigIntKeyword";
      AST_NODE_TYPES2["TSBooleanKeyword"] = "TSBooleanKeyword";
      AST_NODE_TYPES2["TSCallSignatureDeclaration"] = "TSCallSignatureDeclaration";
      AST_NODE_TYPES2["TSClassImplements"] = "TSClassImplements";
      AST_NODE_TYPES2["TSConditionalType"] = "TSConditionalType";
      AST_NODE_TYPES2["TSConstructorType"] = "TSConstructorType";
      AST_NODE_TYPES2["TSConstructSignatureDeclaration"] = "TSConstructSignatureDeclaration";
      AST_NODE_TYPES2["TSDeclareFunction"] = "TSDeclareFunction";
      AST_NODE_TYPES2["TSDeclareKeyword"] = "TSDeclareKeyword";
      AST_NODE_TYPES2["TSEmptyBodyFunctionExpression"] = "TSEmptyBodyFunctionExpression";
      AST_NODE_TYPES2["TSEnumDeclaration"] = "TSEnumDeclaration";
      AST_NODE_TYPES2["TSEnumMember"] = "TSEnumMember";
      AST_NODE_TYPES2["TSExportAssignment"] = "TSExportAssignment";
      AST_NODE_TYPES2["TSExportKeyword"] = "TSExportKeyword";
      AST_NODE_TYPES2["TSExternalModuleReference"] = "TSExternalModuleReference";
      AST_NODE_TYPES2["TSFunctionType"] = "TSFunctionType";
      AST_NODE_TYPES2["TSInstantiationExpression"] = "TSInstantiationExpression";
      AST_NODE_TYPES2["TSImportEqualsDeclaration"] = "TSImportEqualsDeclaration";
      AST_NODE_TYPES2["TSImportType"] = "TSImportType";
      AST_NODE_TYPES2["TSIndexedAccessType"] = "TSIndexedAccessType";
      AST_NODE_TYPES2["TSIndexSignature"] = "TSIndexSignature";
      AST_NODE_TYPES2["TSInferType"] = "TSInferType";
      AST_NODE_TYPES2["TSInterfaceBody"] = "TSInterfaceBody";
      AST_NODE_TYPES2["TSInterfaceDeclaration"] = "TSInterfaceDeclaration";
      AST_NODE_TYPES2["TSInterfaceHeritage"] = "TSInterfaceHeritage";
      AST_NODE_TYPES2["TSIntersectionType"] = "TSIntersectionType";
      AST_NODE_TYPES2["TSIntrinsicKeyword"] = "TSIntrinsicKeyword";
      AST_NODE_TYPES2["TSLiteralType"] = "TSLiteralType";
      AST_NODE_TYPES2["TSMappedType"] = "TSMappedType";
      AST_NODE_TYPES2["TSMethodSignature"] = "TSMethodSignature";
      AST_NODE_TYPES2["TSModuleBlock"] = "TSModuleBlock";
      AST_NODE_TYPES2["TSModuleDeclaration"] = "TSModuleDeclaration";
      AST_NODE_TYPES2["TSNamedTupleMember"] = "TSNamedTupleMember";
      AST_NODE_TYPES2["TSNamespaceExportDeclaration"] = "TSNamespaceExportDeclaration";
      AST_NODE_TYPES2["TSNeverKeyword"] = "TSNeverKeyword";
      AST_NODE_TYPES2["TSNonNullExpression"] = "TSNonNullExpression";
      AST_NODE_TYPES2["TSNullKeyword"] = "TSNullKeyword";
      AST_NODE_TYPES2["TSNumberKeyword"] = "TSNumberKeyword";
      AST_NODE_TYPES2["TSObjectKeyword"] = "TSObjectKeyword";
      AST_NODE_TYPES2["TSOptionalType"] = "TSOptionalType";
      AST_NODE_TYPES2["TSParameterProperty"] = "TSParameterProperty";
      AST_NODE_TYPES2["TSPrivateKeyword"] = "TSPrivateKeyword";
      AST_NODE_TYPES2["TSPropertySignature"] = "TSPropertySignature";
      AST_NODE_TYPES2["TSProtectedKeyword"] = "TSProtectedKeyword";
      AST_NODE_TYPES2["TSPublicKeyword"] = "TSPublicKeyword";
      AST_NODE_TYPES2["TSQualifiedName"] = "TSQualifiedName";
      AST_NODE_TYPES2["TSReadonlyKeyword"] = "TSReadonlyKeyword";
      AST_NODE_TYPES2["TSRestType"] = "TSRestType";
      AST_NODE_TYPES2["TSSatisfiesExpression"] = "TSSatisfiesExpression";
      AST_NODE_TYPES2["TSStaticKeyword"] = "TSStaticKeyword";
      AST_NODE_TYPES2["TSStringKeyword"] = "TSStringKeyword";
      AST_NODE_TYPES2["TSSymbolKeyword"] = "TSSymbolKeyword";
      AST_NODE_TYPES2["TSTemplateLiteralType"] = "TSTemplateLiteralType";
      AST_NODE_TYPES2["TSThisType"] = "TSThisType";
      AST_NODE_TYPES2["TSTupleType"] = "TSTupleType";
      AST_NODE_TYPES2["TSTypeAliasDeclaration"] = "TSTypeAliasDeclaration";
      AST_NODE_TYPES2["TSTypeAnnotation"] = "TSTypeAnnotation";
      AST_NODE_TYPES2["TSTypeAssertion"] = "TSTypeAssertion";
      AST_NODE_TYPES2["TSTypeLiteral"] = "TSTypeLiteral";
      AST_NODE_TYPES2["TSTypeOperator"] = "TSTypeOperator";
      AST_NODE_TYPES2["TSTypeParameter"] = "TSTypeParameter";
      AST_NODE_TYPES2["TSTypeParameterDeclaration"] = "TSTypeParameterDeclaration";
      AST_NODE_TYPES2["TSTypeParameterInstantiation"] = "TSTypeParameterInstantiation";
      AST_NODE_TYPES2["TSTypePredicate"] = "TSTypePredicate";
      AST_NODE_TYPES2["TSTypeQuery"] = "TSTypeQuery";
      AST_NODE_TYPES2["TSTypeReference"] = "TSTypeReference";
      AST_NODE_TYPES2["TSUndefinedKeyword"] = "TSUndefinedKeyword";
      AST_NODE_TYPES2["TSUnionType"] = "TSUnionType";
      AST_NODE_TYPES2["TSUnknownKeyword"] = "TSUnknownKeyword";
      AST_NODE_TYPES2["TSVoidKeyword"] = "TSVoidKeyword";
    })(AST_NODE_TYPES || (exports.AST_NODE_TYPES = AST_NODE_TYPES = {}));
    var AST_TOKEN_TYPES;
    (function(AST_TOKEN_TYPES2) {
      AST_TOKEN_TYPES2["Boolean"] = "Boolean";
      AST_TOKEN_TYPES2["Identifier"] = "Identifier";
      AST_TOKEN_TYPES2["JSXIdentifier"] = "JSXIdentifier";
      AST_TOKEN_TYPES2["JSXText"] = "JSXText";
      AST_TOKEN_TYPES2["Keyword"] = "Keyword";
      AST_TOKEN_TYPES2["Null"] = "Null";
      AST_TOKEN_TYPES2["Numeric"] = "Numeric";
      AST_TOKEN_TYPES2["Punctuator"] = "Punctuator";
      AST_TOKEN_TYPES2["RegularExpression"] = "RegularExpression";
      AST_TOKEN_TYPES2["String"] = "String";
      AST_TOKEN_TYPES2["Template"] = "Template";
      AST_TOKEN_TYPES2["Block"] = "Block";
      AST_TOKEN_TYPES2["Line"] = "Line";
    })(AST_TOKEN_TYPES || (exports.AST_TOKEN_TYPES = AST_TOKEN_TYPES = {}));
  }
});

// node_modules/@typescript-eslint/types/dist/lib.js
var require_lib = __commonJS({
  "node_modules/@typescript-eslint/types/dist/lib.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@typescript-eslint/types/dist/parser-options.js
var require_parser_options = __commonJS({
  "node_modules/@typescript-eslint/types/dist/parser-options.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@typescript-eslint/types/dist/ts-estree.js
var require_ts_estree = __commonJS({
  "node_modules/@typescript-eslint/types/dist/ts-estree.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TSESTree = void 0;
    exports.TSESTree = __importStar(require_ast_spec());
  }
});

// node_modules/@typescript-eslint/types/dist/index.js
var require_dist = __commonJS({
  "node_modules/@typescript-eslint/types/dist/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AST_TOKEN_TYPES = exports.AST_NODE_TYPES = void 0;
    var ast_spec_1 = require_ast_spec();
    Object.defineProperty(exports, "AST_NODE_TYPES", { enumerable: true, get: function() {
      return ast_spec_1.AST_NODE_TYPES;
    } });
    Object.defineProperty(exports, "AST_TOKEN_TYPES", { enumerable: true, get: function() {
      return ast_spec_1.AST_TOKEN_TYPES;
    } });
    __exportStar(require_lib(), exports);
    __exportStar(require_parser_options(), exports);
    __exportStar(require_ts_estree(), exports);
  }
});

// node_modules/@typescript-eslint/utils/dist/ts-estree.js
var require_ts_estree2 = __commonJS({
  "node_modules/@typescript-eslint/utils/dist/ts-estree.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TSESTree = exports.AST_TOKEN_TYPES = exports.AST_NODE_TYPES = void 0;
    var types_1 = require_dist();
    Object.defineProperty(exports, "AST_NODE_TYPES", { enumerable: true, get: function() {
      return types_1.AST_NODE_TYPES;
    } });
    Object.defineProperty(exports, "AST_TOKEN_TYPES", { enumerable: true, get: function() {
      return types_1.AST_TOKEN_TYPES;
    } });
    Object.defineProperty(exports, "TSESTree", { enumerable: true, get: function() {
      return types_1.TSESTree;
    } });
  }
});

// node_modules/@typescript-eslint/utils/dist/ast-utils/predicates.js
var require_predicates2 = __commonJS({
  "node_modules/@typescript-eslint/utils/dist/ast-utils/predicates.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isVariableDeclarator = exports.isTypeKeyword = exports.isTypeAssertion = exports.isTSFunctionType = exports.isTSConstructorType = exports.isSetter = exports.isOptionalCallExpression = exports.isOptionalChainPunctuator = exports.isNotOptionalChainPunctuator = exports.isNotNonNullAssertionPunctuator = exports.isNonNullAssertionPunctuator = exports.isLogicalOrOperator = exports.isLoop = exports.isImportKeyword = exports.isIdentifier = exports.isFunctionType = exports.isFunctionOrFunctionType = exports.isFunction = exports.isClassOrTypeElement = exports.isConstructor = exports.isAwaitKeyword = exports.isAwaitExpression = void 0;
    var ts_estree_1 = require_ts_estree2();
    var helpers_1 = require_helpers();
    var isOptionalChainPunctuator = (0, helpers_1.isTokenOfTypeWithConditions)(ts_estree_1.AST_TOKEN_TYPES.Punctuator, { value: "?." });
    exports.isOptionalChainPunctuator = isOptionalChainPunctuator;
    var isNotOptionalChainPunctuator = (0, helpers_1.isNotTokenOfTypeWithConditions)(ts_estree_1.AST_TOKEN_TYPES.Punctuator, { value: "?." });
    exports.isNotOptionalChainPunctuator = isNotOptionalChainPunctuator;
    var isNonNullAssertionPunctuator = (0, helpers_1.isTokenOfTypeWithConditions)(ts_estree_1.AST_TOKEN_TYPES.Punctuator, { value: "!" });
    exports.isNonNullAssertionPunctuator = isNonNullAssertionPunctuator;
    var isNotNonNullAssertionPunctuator = (0, helpers_1.isNotTokenOfTypeWithConditions)(ts_estree_1.AST_TOKEN_TYPES.Punctuator, { value: "!" });
    exports.isNotNonNullAssertionPunctuator = isNotNonNullAssertionPunctuator;
    var isOptionalCallExpression = (0, helpers_1.isNodeOfTypeWithConditions)(
      ts_estree_1.AST_NODE_TYPES.CallExpression,
      // this flag means the call expression itself is option
      // i.e. it is foo.bar?.() and not foo?.bar()
      { optional: true }
    );
    exports.isOptionalCallExpression = isOptionalCallExpression;
    var isLogicalOrOperator = (0, helpers_1.isNodeOfTypeWithConditions)(ts_estree_1.AST_NODE_TYPES.LogicalExpression, { operator: "||" });
    exports.isLogicalOrOperator = isLogicalOrOperator;
    var isTypeAssertion = (0, helpers_1.isNodeOfTypes)([
      ts_estree_1.AST_NODE_TYPES.TSAsExpression,
      ts_estree_1.AST_NODE_TYPES.TSTypeAssertion
    ]);
    exports.isTypeAssertion = isTypeAssertion;
    var isVariableDeclarator = (0, helpers_1.isNodeOfType)(ts_estree_1.AST_NODE_TYPES.VariableDeclarator);
    exports.isVariableDeclarator = isVariableDeclarator;
    var functionTypes = [
      ts_estree_1.AST_NODE_TYPES.ArrowFunctionExpression,
      ts_estree_1.AST_NODE_TYPES.FunctionDeclaration,
      ts_estree_1.AST_NODE_TYPES.FunctionExpression
    ];
    var isFunction = (0, helpers_1.isNodeOfTypes)(functionTypes);
    exports.isFunction = isFunction;
    var functionTypeTypes = [
      ts_estree_1.AST_NODE_TYPES.TSCallSignatureDeclaration,
      ts_estree_1.AST_NODE_TYPES.TSConstructorType,
      ts_estree_1.AST_NODE_TYPES.TSConstructSignatureDeclaration,
      ts_estree_1.AST_NODE_TYPES.TSEmptyBodyFunctionExpression,
      ts_estree_1.AST_NODE_TYPES.TSFunctionType,
      ts_estree_1.AST_NODE_TYPES.TSMethodSignature
    ];
    var isFunctionType = (0, helpers_1.isNodeOfTypes)(functionTypeTypes);
    exports.isFunctionType = isFunctionType;
    var isFunctionOrFunctionType = (0, helpers_1.isNodeOfTypes)([
      ...functionTypes,
      ...functionTypeTypes
    ]);
    exports.isFunctionOrFunctionType = isFunctionOrFunctionType;
    var isTSFunctionType = (0, helpers_1.isNodeOfType)(ts_estree_1.AST_NODE_TYPES.TSFunctionType);
    exports.isTSFunctionType = isTSFunctionType;
    var isTSConstructorType = (0, helpers_1.isNodeOfType)(ts_estree_1.AST_NODE_TYPES.TSConstructorType);
    exports.isTSConstructorType = isTSConstructorType;
    var isClassOrTypeElement = (0, helpers_1.isNodeOfTypes)([
      // ClassElement
      ts_estree_1.AST_NODE_TYPES.PropertyDefinition,
      ts_estree_1.AST_NODE_TYPES.FunctionExpression,
      ts_estree_1.AST_NODE_TYPES.MethodDefinition,
      ts_estree_1.AST_NODE_TYPES.TSAbstractPropertyDefinition,
      ts_estree_1.AST_NODE_TYPES.TSAbstractMethodDefinition,
      ts_estree_1.AST_NODE_TYPES.TSEmptyBodyFunctionExpression,
      ts_estree_1.AST_NODE_TYPES.TSIndexSignature,
      // TypeElement
      ts_estree_1.AST_NODE_TYPES.TSCallSignatureDeclaration,
      ts_estree_1.AST_NODE_TYPES.TSConstructSignatureDeclaration,
      // AST_NODE_TYPES.TSIndexSignature,
      ts_estree_1.AST_NODE_TYPES.TSMethodSignature,
      ts_estree_1.AST_NODE_TYPES.TSPropertySignature
    ]);
    exports.isClassOrTypeElement = isClassOrTypeElement;
    var isConstructor = (0, helpers_1.isNodeOfTypeWithConditions)(ts_estree_1.AST_NODE_TYPES.MethodDefinition, { kind: "constructor" });
    exports.isConstructor = isConstructor;
    function isSetter(node) {
      return !!node && (node.type === ts_estree_1.AST_NODE_TYPES.MethodDefinition || node.type === ts_estree_1.AST_NODE_TYPES.Property) && node.kind === "set";
    }
    exports.isSetter = isSetter;
    var isIdentifier = (0, helpers_1.isNodeOfType)(ts_estree_1.AST_NODE_TYPES.Identifier);
    exports.isIdentifier = isIdentifier;
    var isAwaitExpression = (0, helpers_1.isNodeOfType)(ts_estree_1.AST_NODE_TYPES.AwaitExpression);
    exports.isAwaitExpression = isAwaitExpression;
    var isAwaitKeyword = (0, helpers_1.isTokenOfTypeWithConditions)(ts_estree_1.AST_TOKEN_TYPES.Identifier, {
      value: "await"
    });
    exports.isAwaitKeyword = isAwaitKeyword;
    var isTypeKeyword = (0, helpers_1.isTokenOfTypeWithConditions)(ts_estree_1.AST_TOKEN_TYPES.Identifier, {
      value: "type"
    });
    exports.isTypeKeyword = isTypeKeyword;
    var isImportKeyword = (0, helpers_1.isTokenOfTypeWithConditions)(ts_estree_1.AST_TOKEN_TYPES.Keyword, {
      value: "import"
    });
    exports.isImportKeyword = isImportKeyword;
    var isLoop = (0, helpers_1.isNodeOfTypes)([
      ts_estree_1.AST_NODE_TYPES.DoWhileStatement,
      ts_estree_1.AST_NODE_TYPES.ForStatement,
      ts_estree_1.AST_NODE_TYPES.ForInStatement,
      ts_estree_1.AST_NODE_TYPES.ForOfStatement,
      ts_estree_1.AST_NODE_TYPES.WhileStatement
    ]);
    exports.isLoop = isLoop;
  }
});

// node_modules/@typescript-eslint/utils/dist/ast-utils/index.js
var require_ast_utils = __commonJS({
  "node_modules/@typescript-eslint/utils/dist/ast-utils/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_eslint_utils2(), exports);
    __exportStar(require_helpers(), exports);
    __exportStar(require_misc(), exports);
    __exportStar(require_predicates2(), exports);
  }
});

// node_modules/@typescript-eslint/utils/dist/eslint-utils/deepMerge.js
var require_deepMerge = __commonJS({
  "node_modules/@typescript-eslint/utils/dist/eslint-utils/deepMerge.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isObjectNotArray = exports.deepMerge = void 0;
    function isObjectNotArray(obj) {
      return typeof obj === "object" && obj != null && !Array.isArray(obj);
    }
    exports.isObjectNotArray = isObjectNotArray;
    function deepMerge(first = {}, second = {}) {
      const keys = new Set(Object.keys(first).concat(Object.keys(second)));
      return Array.from(keys).reduce((acc, key) => {
        const firstHasKey = key in first;
        const secondHasKey = key in second;
        const firstValue = first[key];
        const secondValue = second[key];
        if (firstHasKey && secondHasKey) {
          if (isObjectNotArray(firstValue) && isObjectNotArray(secondValue)) {
            acc[key] = deepMerge(firstValue, secondValue);
          } else {
            acc[key] = secondValue;
          }
        } else if (firstHasKey) {
          acc[key] = firstValue;
        } else {
          acc[key] = secondValue;
        }
        return acc;
      }, {});
    }
    exports.deepMerge = deepMerge;
  }
});

// node_modules/@typescript-eslint/utils/dist/eslint-utils/applyDefault.js
var require_applyDefault = __commonJS({
  "node_modules/@typescript-eslint/utils/dist/eslint-utils/applyDefault.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.applyDefault = void 0;
    var deepMerge_1 = require_deepMerge();
    function applyDefault(defaultOptions, userOptions) {
      const options = JSON.parse(JSON.stringify(defaultOptions));
      if (userOptions == null) {
        return options;
      }
      options.forEach((opt, i) => {
        if (userOptions[i] !== void 0) {
          const userOpt = userOptions[i];
          if ((0, deepMerge_1.isObjectNotArray)(userOpt) && (0, deepMerge_1.isObjectNotArray)(opt)) {
            options[i] = (0, deepMerge_1.deepMerge)(opt, userOpt);
          } else {
            options[i] = userOpt;
          }
        }
      });
      return options;
    }
    exports.applyDefault = applyDefault;
  }
});

// node_modules/@typescript-eslint/utils/dist/eslint-utils/getParserServices.js
var require_getParserServices = __commonJS({
  "node_modules/@typescript-eslint/utils/dist/eslint-utils/getParserServices.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getParserServices = void 0;
    var ERROR_MESSAGE = 'You have used a rule which requires parserServices to be generated. You must therefore provide a value for the "parserOptions.project" property for @typescript-eslint/parser.';
    function getParserServices(context, allowWithoutFullTypeInformation = false) {
      var _a;
      if (((_a = context.parserServices) == null ? void 0 : _a.esTreeNodeToTSNodeMap) == null || context.parserServices.tsNodeToESTreeNodeMap == null) {
        throw new Error(ERROR_MESSAGE);
      }
      if (context.parserServices.program == null && !allowWithoutFullTypeInformation) {
        throw new Error(ERROR_MESSAGE);
      }
      return context.parserServices;
    }
    exports.getParserServices = getParserServices;
  }
});

// node_modules/@typescript-eslint/utils/dist/eslint-utils/InferTypesFromRule.js
var require_InferTypesFromRule = __commonJS({
  "node_modules/@typescript-eslint/utils/dist/eslint-utils/InferTypesFromRule.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@typescript-eslint/utils/dist/eslint-utils/RuleCreator.js
var require_RuleCreator = __commonJS({
  "node_modules/@typescript-eslint/utils/dist/eslint-utils/RuleCreator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RuleCreator = void 0;
    var applyDefault_1 = require_applyDefault();
    function RuleCreator(urlCreator) {
      return function createNamedRule({ name, meta, ...rule }) {
        return createRule({
          meta: {
            ...meta,
            docs: {
              ...meta.docs,
              url: urlCreator(name)
            }
          },
          ...rule
        });
      };
    }
    exports.RuleCreator = RuleCreator;
    function createRule({ create, defaultOptions, meta }) {
      return {
        create(context) {
          const optionsWithDefault = (0, applyDefault_1.applyDefault)(defaultOptions, context.options);
          return create(context, optionsWithDefault);
        },
        defaultOptions,
        meta
      };
    }
    RuleCreator.withoutDocs = createRule;
  }
});

// node_modules/@typescript-eslint/utils/dist/eslint-utils/nullThrows.js
var require_nullThrows = __commonJS({
  "node_modules/@typescript-eslint/utils/dist/eslint-utils/nullThrows.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NullThrowsReasons = exports.nullThrows = void 0;
    var NullThrowsReasons = {
      MissingParent: "Expected node to have a parent.",
      MissingToken: (token, thing) => `Expected to find a ${token} for the ${thing}.`
    };
    exports.NullThrowsReasons = NullThrowsReasons;
    function nullThrows(value, message) {
      if (value == null) {
        throw new Error(`Non-null Assertion Failed: ${message}`);
      }
      return value;
    }
    exports.nullThrows = nullThrows;
  }
});

// node_modules/@typescript-eslint/utils/dist/eslint-utils/index.js
var require_eslint_utils3 = __commonJS({
  "node_modules/@typescript-eslint/utils/dist/eslint-utils/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_applyDefault(), exports);
    __exportStar(require_getParserServices(), exports);
    __exportStar(require_InferTypesFromRule(), exports);
    __exportStar(require_RuleCreator(), exports);
    __exportStar(require_deepMerge(), exports);
    __exportStar(require_nullThrows(), exports);
  }
});

// node_modules/@typescript-eslint/utils/dist/json-schema.js
var require_json_schema = __commonJS({
  "node_modules/@typescript-eslint/utils/dist/json-schema.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@typescript-eslint/utils/dist/ts-eslint/AST.js
var require_AST = __commonJS({
  "node_modules/@typescript-eslint/utils/dist/ts-eslint/AST.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@typescript-eslint/utils/dist/ts-eslint/CLIEngine.js
var require_CLIEngine = __commonJS({
  "node_modules/@typescript-eslint/utils/dist/ts-eslint/CLIEngine.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CLIEngine = void 0;
    var eslint_1 = require("eslint");
    var CLIEngine = eslint_1.CLIEngine ? class CLIEngine extends eslint_1.CLIEngine {
    } : void 0;
    exports.CLIEngine = CLIEngine;
  }
});

// node_modules/@typescript-eslint/utils/dist/ts-eslint/ESLint.js
var require_ESLint = __commonJS({
  "node_modules/@typescript-eslint/utils/dist/ts-eslint/ESLint.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ESLint = void 0;
    var eslint_1 = require("eslint");
    var _ESLint = eslint_1.ESLint ?? function() {
      throw new Error("Attempted to construct an ESLint instance on less than ESLint v7.0.0");
    };
    var ESLint = class extends _ESLint {
    };
    exports.ESLint = ESLint;
  }
});

// node_modules/@typescript-eslint/utils/dist/ts-eslint/Linter.js
var require_Linter = __commonJS({
  "node_modules/@typescript-eslint/utils/dist/ts-eslint/Linter.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Linter = void 0;
    var eslint_1 = require("eslint");
    var Linter = class extends eslint_1.Linter {
    };
    exports.Linter = Linter;
  }
});

// node_modules/@typescript-eslint/utils/dist/ts-eslint/ParserOptions.js
var require_ParserOptions = __commonJS({
  "node_modules/@typescript-eslint/utils/dist/ts-eslint/ParserOptions.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@typescript-eslint/utils/dist/ts-eslint/Rule.js
var require_Rule = __commonJS({
  "node_modules/@typescript-eslint/utils/dist/ts-eslint/Rule.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@typescript-eslint/utils/dist/ts-eslint/RuleTester.js
var require_RuleTester = __commonJS({
  "node_modules/@typescript-eslint/utils/dist/ts-eslint/RuleTester.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RuleTester = void 0;
    var eslint_1 = require("eslint");
    var RuleTester = class extends eslint_1.RuleTester {
    };
    exports.RuleTester = RuleTester;
  }
});

// node_modules/eslint-visitor-keys/dist/eslint-visitor-keys.cjs
var require_eslint_visitor_keys2 = __commonJS({
  "node_modules/eslint-visitor-keys/dist/eslint-visitor-keys.cjs"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var KEYS = {
      ArrayExpression: [
        "elements"
      ],
      ArrayPattern: [
        "elements"
      ],
      ArrowFunctionExpression: [
        "params",
        "body"
      ],
      AssignmentExpression: [
        "left",
        "right"
      ],
      AssignmentPattern: [
        "left",
        "right"
      ],
      AwaitExpression: [
        "argument"
      ],
      BinaryExpression: [
        "left",
        "right"
      ],
      BlockStatement: [
        "body"
      ],
      BreakStatement: [
        "label"
      ],
      CallExpression: [
        "callee",
        "arguments"
      ],
      CatchClause: [
        "param",
        "body"
      ],
      ChainExpression: [
        "expression"
      ],
      ClassBody: [
        "body"
      ],
      ClassDeclaration: [
        "id",
        "superClass",
        "body"
      ],
      ClassExpression: [
        "id",
        "superClass",
        "body"
      ],
      ConditionalExpression: [
        "test",
        "consequent",
        "alternate"
      ],
      ContinueStatement: [
        "label"
      ],
      DebuggerStatement: [],
      DoWhileStatement: [
        "body",
        "test"
      ],
      EmptyStatement: [],
      ExperimentalRestProperty: [
        "argument"
      ],
      ExperimentalSpreadProperty: [
        "argument"
      ],
      ExportAllDeclaration: [
        "exported",
        "source"
      ],
      ExportDefaultDeclaration: [
        "declaration"
      ],
      ExportNamedDeclaration: [
        "declaration",
        "specifiers",
        "source"
      ],
      ExportSpecifier: [
        "exported",
        "local"
      ],
      ExpressionStatement: [
        "expression"
      ],
      ForInStatement: [
        "left",
        "right",
        "body"
      ],
      ForOfStatement: [
        "left",
        "right",
        "body"
      ],
      ForStatement: [
        "init",
        "test",
        "update",
        "body"
      ],
      FunctionDeclaration: [
        "id",
        "params",
        "body"
      ],
      FunctionExpression: [
        "id",
        "params",
        "body"
      ],
      Identifier: [],
      IfStatement: [
        "test",
        "consequent",
        "alternate"
      ],
      ImportDeclaration: [
        "specifiers",
        "source"
      ],
      ImportDefaultSpecifier: [
        "local"
      ],
      ImportExpression: [
        "source"
      ],
      ImportNamespaceSpecifier: [
        "local"
      ],
      ImportSpecifier: [
        "imported",
        "local"
      ],
      JSXAttribute: [
        "name",
        "value"
      ],
      JSXClosingElement: [
        "name"
      ],
      JSXClosingFragment: [],
      JSXElement: [
        "openingElement",
        "children",
        "closingElement"
      ],
      JSXEmptyExpression: [],
      JSXExpressionContainer: [
        "expression"
      ],
      JSXFragment: [
        "openingFragment",
        "children",
        "closingFragment"
      ],
      JSXIdentifier: [],
      JSXMemberExpression: [
        "object",
        "property"
      ],
      JSXNamespacedName: [
        "namespace",
        "name"
      ],
      JSXOpeningElement: [
        "name",
        "attributes"
      ],
      JSXOpeningFragment: [],
      JSXSpreadAttribute: [
        "argument"
      ],
      JSXSpreadChild: [
        "expression"
      ],
      JSXText: [],
      LabeledStatement: [
        "label",
        "body"
      ],
      Literal: [],
      LogicalExpression: [
        "left",
        "right"
      ],
      MemberExpression: [
        "object",
        "property"
      ],
      MetaProperty: [
        "meta",
        "property"
      ],
      MethodDefinition: [
        "key",
        "value"
      ],
      NewExpression: [
        "callee",
        "arguments"
      ],
      ObjectExpression: [
        "properties"
      ],
      ObjectPattern: [
        "properties"
      ],
      PrivateIdentifier: [],
      Program: [
        "body"
      ],
      Property: [
        "key",
        "value"
      ],
      PropertyDefinition: [
        "key",
        "value"
      ],
      RestElement: [
        "argument"
      ],
      ReturnStatement: [
        "argument"
      ],
      SequenceExpression: [
        "expressions"
      ],
      SpreadElement: [
        "argument"
      ],
      StaticBlock: [
        "body"
      ],
      Super: [],
      SwitchCase: [
        "test",
        "consequent"
      ],
      SwitchStatement: [
        "discriminant",
        "cases"
      ],
      TaggedTemplateExpression: [
        "tag",
        "quasi"
      ],
      TemplateElement: [],
      TemplateLiteral: [
        "quasis",
        "expressions"
      ],
      ThisExpression: [],
      ThrowStatement: [
        "argument"
      ],
      TryStatement: [
        "block",
        "handler",
        "finalizer"
      ],
      UnaryExpression: [
        "argument"
      ],
      UpdateExpression: [
        "argument"
      ],
      VariableDeclaration: [
        "declarations"
      ],
      VariableDeclarator: [
        "id",
        "init"
      ],
      WhileStatement: [
        "test",
        "body"
      ],
      WithStatement: [
        "object",
        "body"
      ],
      YieldExpression: [
        "argument"
      ]
    };
    var NODE_TYPES = Object.keys(KEYS);
    for (const type of NODE_TYPES) {
      Object.freeze(KEYS[type]);
    }
    Object.freeze(KEYS);
    var KEY_BLACKLIST = /* @__PURE__ */ new Set([
      "parent",
      "leadingComments",
      "trailingComments"
    ]);
    function filterKey(key) {
      return !KEY_BLACKLIST.has(key) && key[0] !== "_";
    }
    function getKeys(node) {
      return Object.keys(node).filter(filterKey);
    }
    function unionWith(additionalKeys) {
      const retv = (
        /** @type {{
            [type: string]: ReadonlyArray<string>
        }} */
        Object.assign({}, KEYS)
      );
      for (const type of Object.keys(additionalKeys)) {
        if (Object.prototype.hasOwnProperty.call(retv, type)) {
          const keys = new Set(additionalKeys[type]);
          for (const key of retv[type]) {
            keys.add(key);
          }
          retv[type] = Object.freeze(Array.from(keys));
        } else {
          retv[type] = Object.freeze(Array.from(additionalKeys[type]));
        }
      }
      return Object.freeze(retv);
    }
    exports.KEYS = KEYS;
    exports.getKeys = getKeys;
    exports.unionWith = unionWith;
  }
});

// node_modules/@typescript-eslint/visitor-keys/dist/get-keys.js
var require_get_keys = __commonJS({
  "node_modules/@typescript-eslint/visitor-keys/dist/get-keys.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getKeys = void 0;
    var eslint_visitor_keys_1 = require_eslint_visitor_keys2();
    var getKeys = eslint_visitor_keys_1.getKeys;
    exports.getKeys = getKeys;
  }
});

// node_modules/@typescript-eslint/visitor-keys/dist/visitor-keys.js
var require_visitor_keys = __commonJS({
  "node_modules/@typescript-eslint/visitor-keys/dist/visitor-keys.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.visitorKeys = void 0;
    var eslintVisitorKeys = __importStar(require_eslint_visitor_keys2());
    var SharedVisitorKeys = (() => {
      const FunctionType = ["typeParameters", "params", "returnType"];
      const AnonymousFunction = [...FunctionType, "body"];
      const AbstractPropertyDefinition = [
        "decorators",
        "key",
        "typeAnnotation"
      ];
      return {
        AnonymousFunction,
        Function: ["id", ...AnonymousFunction],
        FunctionType,
        ClassDeclaration: [
          "decorators",
          "id",
          "typeParameters",
          "superClass",
          "superTypeArguments",
          "implements",
          "body"
        ],
        AbstractPropertyDefinition: ["decorators", "key", "typeAnnotation"],
        PropertyDefinition: [...AbstractPropertyDefinition, "value"],
        TypeAssertion: ["expression", "typeAnnotation"]
      };
    })();
    var additionalKeys = {
      AccessorProperty: SharedVisitorKeys.PropertyDefinition,
      ArrayPattern: ["decorators", "elements", "typeAnnotation"],
      ArrowFunctionExpression: SharedVisitorKeys.AnonymousFunction,
      AssignmentPattern: ["decorators", "left", "right", "typeAnnotation"],
      CallExpression: ["callee", "typeArguments", "arguments"],
      ClassDeclaration: SharedVisitorKeys.ClassDeclaration,
      ClassExpression: SharedVisitorKeys.ClassDeclaration,
      Decorator: ["expression"],
      ExportAllDeclaration: ["exported", "source", "assertions"],
      ExportNamedDeclaration: ["declaration", "specifiers", "source", "assertions"],
      FunctionDeclaration: SharedVisitorKeys.Function,
      FunctionExpression: SharedVisitorKeys.Function,
      Identifier: ["decorators", "typeAnnotation"],
      ImportAttribute: ["key", "value"],
      ImportDeclaration: ["specifiers", "source", "assertions"],
      ImportExpression: ["source", "attributes"],
      JSXClosingFragment: [],
      JSXOpeningElement: ["name", "typeArguments", "attributes"],
      JSXOpeningFragment: [],
      JSXSpreadChild: ["expression"],
      MethodDefinition: ["decorators", "key", "value"],
      NewExpression: ["callee", "typeArguments", "arguments"],
      ObjectPattern: ["decorators", "properties", "typeAnnotation"],
      PropertyDefinition: SharedVisitorKeys.PropertyDefinition,
      RestElement: ["decorators", "argument", "typeAnnotation"],
      StaticBlock: ["body"],
      TaggedTemplateExpression: ["tag", "typeArguments", "quasi"],
      TSAbstractAccessorProperty: SharedVisitorKeys.AbstractPropertyDefinition,
      TSAbstractKeyword: [],
      TSAbstractMethodDefinition: ["key", "value"],
      TSAbstractPropertyDefinition: SharedVisitorKeys.AbstractPropertyDefinition,
      TSAnyKeyword: [],
      TSArrayType: ["elementType"],
      TSAsExpression: SharedVisitorKeys.TypeAssertion,
      TSAsyncKeyword: [],
      TSBigIntKeyword: [],
      TSBooleanKeyword: [],
      TSCallSignatureDeclaration: SharedVisitorKeys.FunctionType,
      TSClassImplements: ["expression", "typeArguments"],
      TSConditionalType: ["checkType", "extendsType", "trueType", "falseType"],
      TSConstructorType: SharedVisitorKeys.FunctionType,
      TSConstructSignatureDeclaration: SharedVisitorKeys.FunctionType,
      TSDeclareFunction: SharedVisitorKeys.Function,
      TSDeclareKeyword: [],
      TSEmptyBodyFunctionExpression: ["id", ...SharedVisitorKeys.FunctionType],
      TSEnumDeclaration: ["id", "members"],
      TSEnumMember: ["id", "initializer"],
      TSExportAssignment: ["expression"],
      TSExportKeyword: [],
      TSExternalModuleReference: ["expression"],
      TSFunctionType: SharedVisitorKeys.FunctionType,
      TSImportEqualsDeclaration: ["id", "moduleReference"],
      TSImportType: ["argument", "qualifier", "typeArguments"],
      TSIndexedAccessType: ["indexType", "objectType"],
      TSIndexSignature: ["parameters", "typeAnnotation"],
      TSInferType: ["typeParameter"],
      TSInstantiationExpression: ["expression", "typeArguments"],
      TSInterfaceBody: ["body"],
      TSInterfaceDeclaration: ["id", "typeParameters", "extends", "body"],
      TSInterfaceHeritage: ["expression", "typeArguments"],
      TSIntersectionType: ["types"],
      TSIntrinsicKeyword: [],
      TSLiteralType: ["literal"],
      TSMappedType: ["nameType", "typeParameter", "typeAnnotation"],
      TSMethodSignature: ["typeParameters", "key", "params", "returnType"],
      TSModuleBlock: ["body"],
      TSModuleDeclaration: ["id", "body"],
      TSNamedTupleMember: ["label", "elementType"],
      TSNamespaceExportDeclaration: ["id"],
      TSNeverKeyword: [],
      TSNonNullExpression: ["expression"],
      TSNullKeyword: [],
      TSNumberKeyword: [],
      TSObjectKeyword: [],
      TSOptionalType: ["typeAnnotation"],
      TSParameterProperty: ["decorators", "parameter"],
      TSPrivateKeyword: [],
      TSPropertySignature: ["typeAnnotation", "key"],
      TSProtectedKeyword: [],
      TSPublicKeyword: [],
      TSQualifiedName: ["left", "right"],
      TSReadonlyKeyword: [],
      TSRestType: ["typeAnnotation"],
      TSSatisfiesExpression: [
        // this is intentionally different to SharedVisitorKeys.TypeAssertion because
        // the type annotation comes first in the source code
        "typeAnnotation",
        "expression"
      ],
      TSStaticKeyword: [],
      TSStringKeyword: [],
      TSSymbolKeyword: [],
      TSTemplateLiteralType: ["quasis", "types"],
      TSThisType: [],
      TSTupleType: ["elementTypes"],
      TSTypeAliasDeclaration: ["id", "typeParameters", "typeAnnotation"],
      TSTypeAnnotation: ["typeAnnotation"],
      TSTypeAssertion: SharedVisitorKeys.TypeAssertion,
      TSTypeLiteral: ["members"],
      TSTypeOperator: ["typeAnnotation"],
      TSTypeParameter: ["name", "constraint", "default"],
      TSTypeParameterDeclaration: ["params"],
      TSTypeParameterInstantiation: ["params"],
      TSTypePredicate: ["typeAnnotation", "parameterName"],
      TSTypeQuery: ["exprName", "typeArguments"],
      TSTypeReference: ["typeName", "typeArguments"],
      TSUndefinedKeyword: [],
      TSUnionType: ["types"],
      TSUnknownKeyword: [],
      TSVoidKeyword: []
    };
    var visitorKeys = eslintVisitorKeys.unionWith(additionalKeys);
    exports.visitorKeys = visitorKeys;
  }
});

// node_modules/@typescript-eslint/visitor-keys/dist/index.js
var require_dist2 = __commonJS({
  "node_modules/@typescript-eslint/visitor-keys/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.visitorKeys = exports.getKeys = void 0;
    var get_keys_1 = require_get_keys();
    Object.defineProperty(exports, "getKeys", { enumerable: true, get: function() {
      return get_keys_1.getKeys;
    } });
    var visitor_keys_1 = require_visitor_keys();
    Object.defineProperty(exports, "visitorKeys", { enumerable: true, get: function() {
      return visitor_keys_1.visitorKeys;
    } });
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/assert.js
var require_assert = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/assert.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.assert = void 0;
    function assert(value, message) {
      if (value == null) {
        throw new Error(message);
      }
    }
    exports.assert = assert;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/ID.js
var require_ID = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/ID.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.resetIds = exports.createIdGenerator = void 0;
    var ID_CACHE = /* @__PURE__ */ new Map();
    var NEXT_KEY = 0;
    function createIdGenerator() {
      const key = NEXT_KEY += 1;
      ID_CACHE.set(key, 0);
      return () => {
        const current = ID_CACHE.get(key) ?? 0;
        const next = current + 1;
        ID_CACHE.set(key, next);
        return next;
      };
    }
    exports.createIdGenerator = createIdGenerator;
    function resetIds() {
      ID_CACHE.clear();
    }
    exports.resetIds = resetIds;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/definition/DefinitionBase.js
var require_DefinitionBase = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/definition/DefinitionBase.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DefinitionBase = void 0;
    var ID_1 = require_ID();
    var generator = (0, ID_1.createIdGenerator)();
    var DefinitionBase = class {
      constructor(type, name, node, parent) {
        this.$id = generator();
        this.type = type;
        this.name = name;
        this.node = node;
        this.parent = parent;
      }
    };
    exports.DefinitionBase = DefinitionBase;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/definition/DefinitionType.js
var require_DefinitionType = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/definition/DefinitionType.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DefinitionType = void 0;
    var DefinitionType;
    (function(DefinitionType2) {
      DefinitionType2["CatchClause"] = "CatchClause";
      DefinitionType2["ClassName"] = "ClassName";
      DefinitionType2["FunctionName"] = "FunctionName";
      DefinitionType2["ImplicitGlobalVariable"] = "ImplicitGlobalVariable";
      DefinitionType2["ImportBinding"] = "ImportBinding";
      DefinitionType2["Parameter"] = "Parameter";
      DefinitionType2["TSEnumName"] = "TSEnumName";
      DefinitionType2["TSEnumMember"] = "TSEnumMemberName";
      DefinitionType2["TSModuleName"] = "TSModuleName";
      DefinitionType2["Type"] = "Type";
      DefinitionType2["Variable"] = "Variable";
    })(DefinitionType || (exports.DefinitionType = DefinitionType = {}));
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/definition/CatchClauseDefinition.js
var require_CatchClauseDefinition = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/definition/CatchClauseDefinition.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CatchClauseDefinition = void 0;
    var DefinitionBase_1 = require_DefinitionBase();
    var DefinitionType_1 = require_DefinitionType();
    var CatchClauseDefinition = class extends DefinitionBase_1.DefinitionBase {
      constructor(name, node) {
        super(DefinitionType_1.DefinitionType.CatchClause, name, node, null);
        this.isTypeDefinition = false;
        this.isVariableDefinition = true;
      }
    };
    exports.CatchClauseDefinition = CatchClauseDefinition;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/definition/ClassNameDefinition.js
var require_ClassNameDefinition = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/definition/ClassNameDefinition.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ClassNameDefinition = void 0;
    var DefinitionBase_1 = require_DefinitionBase();
    var DefinitionType_1 = require_DefinitionType();
    var ClassNameDefinition = class extends DefinitionBase_1.DefinitionBase {
      constructor(name, node) {
        super(DefinitionType_1.DefinitionType.ClassName, name, node, null);
        this.isTypeDefinition = true;
        this.isVariableDefinition = true;
      }
    };
    exports.ClassNameDefinition = ClassNameDefinition;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/definition/Definition.js
var require_Definition = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/definition/Definition.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/definition/FunctionNameDefinition.js
var require_FunctionNameDefinition = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/definition/FunctionNameDefinition.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FunctionNameDefinition = void 0;
    var DefinitionBase_1 = require_DefinitionBase();
    var DefinitionType_1 = require_DefinitionType();
    var FunctionNameDefinition = class extends DefinitionBase_1.DefinitionBase {
      constructor(name, node) {
        super(DefinitionType_1.DefinitionType.FunctionName, name, node, null);
        this.isTypeDefinition = false;
        this.isVariableDefinition = true;
      }
    };
    exports.FunctionNameDefinition = FunctionNameDefinition;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/definition/ImplicitGlobalVariableDefinition.js
var require_ImplicitGlobalVariableDefinition = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/definition/ImplicitGlobalVariableDefinition.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ImplicitGlobalVariableDefinition = void 0;
    var DefinitionBase_1 = require_DefinitionBase();
    var DefinitionType_1 = require_DefinitionType();
    var ImplicitGlobalVariableDefinition = class extends DefinitionBase_1.DefinitionBase {
      constructor(name, node) {
        super(DefinitionType_1.DefinitionType.ImplicitGlobalVariable, name, node, null);
        this.isTypeDefinition = false;
        this.isVariableDefinition = true;
      }
    };
    exports.ImplicitGlobalVariableDefinition = ImplicitGlobalVariableDefinition;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/definition/ImportBindingDefinition.js
var require_ImportBindingDefinition = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/definition/ImportBindingDefinition.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ImportBindingDefinition = void 0;
    var DefinitionBase_1 = require_DefinitionBase();
    var DefinitionType_1 = require_DefinitionType();
    var ImportBindingDefinition = class extends DefinitionBase_1.DefinitionBase {
      constructor(name, node, decl) {
        super(DefinitionType_1.DefinitionType.ImportBinding, name, node, decl);
        this.isTypeDefinition = true;
        this.isVariableDefinition = true;
      }
    };
    exports.ImportBindingDefinition = ImportBindingDefinition;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/definition/ParameterDefinition.js
var require_ParameterDefinition = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/definition/ParameterDefinition.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ParameterDefinition = void 0;
    var DefinitionBase_1 = require_DefinitionBase();
    var DefinitionType_1 = require_DefinitionType();
    var ParameterDefinition = class extends DefinitionBase_1.DefinitionBase {
      constructor(name, node, rest) {
        super(DefinitionType_1.DefinitionType.Parameter, name, node, null);
        this.isTypeDefinition = false;
        this.isVariableDefinition = true;
        this.rest = rest;
      }
    };
    exports.ParameterDefinition = ParameterDefinition;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/definition/TSEnumMemberDefinition.js
var require_TSEnumMemberDefinition = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/definition/TSEnumMemberDefinition.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TSEnumMemberDefinition = void 0;
    var DefinitionBase_1 = require_DefinitionBase();
    var DefinitionType_1 = require_DefinitionType();
    var TSEnumMemberDefinition = class extends DefinitionBase_1.DefinitionBase {
      constructor(name, node) {
        super(DefinitionType_1.DefinitionType.TSEnumMember, name, node, null);
        this.isTypeDefinition = true;
        this.isVariableDefinition = true;
      }
    };
    exports.TSEnumMemberDefinition = TSEnumMemberDefinition;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/definition/TSEnumNameDefinition.js
var require_TSEnumNameDefinition = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/definition/TSEnumNameDefinition.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TSEnumNameDefinition = void 0;
    var DefinitionBase_1 = require_DefinitionBase();
    var DefinitionType_1 = require_DefinitionType();
    var TSEnumNameDefinition = class extends DefinitionBase_1.DefinitionBase {
      constructor(name, node) {
        super(DefinitionType_1.DefinitionType.TSEnumName, name, node, null);
        this.isTypeDefinition = true;
        this.isVariableDefinition = true;
      }
    };
    exports.TSEnumNameDefinition = TSEnumNameDefinition;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/definition/TSModuleNameDefinition.js
var require_TSModuleNameDefinition = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/definition/TSModuleNameDefinition.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TSModuleNameDefinition = void 0;
    var DefinitionBase_1 = require_DefinitionBase();
    var DefinitionType_1 = require_DefinitionType();
    var TSModuleNameDefinition = class extends DefinitionBase_1.DefinitionBase {
      constructor(name, node) {
        super(DefinitionType_1.DefinitionType.TSModuleName, name, node, null);
        this.isTypeDefinition = true;
        this.isVariableDefinition = true;
      }
    };
    exports.TSModuleNameDefinition = TSModuleNameDefinition;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/definition/TypeDefinition.js
var require_TypeDefinition = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/definition/TypeDefinition.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TypeDefinition = void 0;
    var DefinitionBase_1 = require_DefinitionBase();
    var DefinitionType_1 = require_DefinitionType();
    var TypeDefinition = class extends DefinitionBase_1.DefinitionBase {
      constructor(name, node) {
        super(DefinitionType_1.DefinitionType.Type, name, node, null);
        this.isTypeDefinition = true;
        this.isVariableDefinition = false;
      }
    };
    exports.TypeDefinition = TypeDefinition;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/definition/VariableDefinition.js
var require_VariableDefinition = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/definition/VariableDefinition.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.VariableDefinition = void 0;
    var DefinitionBase_1 = require_DefinitionBase();
    var DefinitionType_1 = require_DefinitionType();
    var VariableDefinition = class extends DefinitionBase_1.DefinitionBase {
      constructor(name, node, decl) {
        super(DefinitionType_1.DefinitionType.Variable, name, node, decl);
        this.isTypeDefinition = false;
        this.isVariableDefinition = true;
      }
    };
    exports.VariableDefinition = VariableDefinition;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/definition/index.js
var require_definition = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/definition/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_CatchClauseDefinition(), exports);
    __exportStar(require_ClassNameDefinition(), exports);
    __exportStar(require_Definition(), exports);
    __exportStar(require_DefinitionType(), exports);
    __exportStar(require_FunctionNameDefinition(), exports);
    __exportStar(require_ImplicitGlobalVariableDefinition(), exports);
    __exportStar(require_ImportBindingDefinition(), exports);
    __exportStar(require_ParameterDefinition(), exports);
    __exportStar(require_TSEnumMemberDefinition(), exports);
    __exportStar(require_TSEnumNameDefinition(), exports);
    __exportStar(require_TSModuleNameDefinition(), exports);
    __exportStar(require_TypeDefinition(), exports);
    __exportStar(require_VariableDefinition(), exports);
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/base-config.js
var require_base_config = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/base-config.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TYPE_VALUE = exports.VALUE = exports.TYPE = void 0;
    exports.TYPE = Object.freeze({
      eslintImplicitGlobalSetting: "readonly",
      isTypeVariable: true,
      isValueVariable: false
    });
    exports.VALUE = Object.freeze({
      eslintImplicitGlobalSetting: "readonly",
      isTypeVariable: false,
      isValueVariable: true
    });
    exports.TYPE_VALUE = Object.freeze({
      eslintImplicitGlobalSetting: "readonly",
      isTypeVariable: true,
      isValueVariable: true
    });
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/decorators.js
var require_decorators = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/decorators.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.decorators = void 0;
    var base_config_1 = require_base_config();
    exports.decorators = {
      ClassMemberDecoratorContext: base_config_1.TYPE,
      DecoratorContext: base_config_1.TYPE,
      DecoratorMetadataObject: base_config_1.TYPE,
      DecoratorMetadata: base_config_1.TYPE,
      ClassDecoratorContext: base_config_1.TYPE,
      ClassMethodDecoratorContext: base_config_1.TYPE,
      ClassGetterDecoratorContext: base_config_1.TYPE,
      ClassSetterDecoratorContext: base_config_1.TYPE,
      ClassAccessorDecoratorContext: base_config_1.TYPE,
      ClassAccessorDecoratorTarget: base_config_1.TYPE,
      ClassAccessorDecoratorResult: base_config_1.TYPE,
      ClassFieldDecoratorContext: base_config_1.TYPE
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/decorators.legacy.js
var require_decorators_legacy = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/decorators.legacy.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.decorators_legacy = void 0;
    var base_config_1 = require_base_config();
    exports.decorators_legacy = {
      ClassDecorator: base_config_1.TYPE,
      PropertyDecorator: base_config_1.TYPE,
      MethodDecorator: base_config_1.TYPE,
      ParameterDecorator: base_config_1.TYPE
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/dom.js
var require_dom = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/dom.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.dom = void 0;
    var base_config_1 = require_base_config();
    exports.dom = {
      AddEventListenerOptions: base_config_1.TYPE,
      AesCbcParams: base_config_1.TYPE,
      AesCtrParams: base_config_1.TYPE,
      AesDerivedKeyParams: base_config_1.TYPE,
      AesGcmParams: base_config_1.TYPE,
      AesKeyAlgorithm: base_config_1.TYPE,
      AesKeyGenParams: base_config_1.TYPE,
      Algorithm: base_config_1.TYPE,
      AnalyserOptions: base_config_1.TYPE,
      AnimationEventInit: base_config_1.TYPE,
      AnimationPlaybackEventInit: base_config_1.TYPE,
      AssignedNodesOptions: base_config_1.TYPE,
      AudioBufferOptions: base_config_1.TYPE,
      AudioBufferSourceOptions: base_config_1.TYPE,
      AudioConfiguration: base_config_1.TYPE,
      AudioContextOptions: base_config_1.TYPE,
      AudioNodeOptions: base_config_1.TYPE,
      AudioProcessingEventInit: base_config_1.TYPE,
      AudioTimestamp: base_config_1.TYPE,
      AudioWorkletNodeOptions: base_config_1.TYPE,
      AuthenticationExtensionsClientInputs: base_config_1.TYPE,
      AuthenticationExtensionsClientOutputs: base_config_1.TYPE,
      AuthenticatorSelectionCriteria: base_config_1.TYPE,
      AvcEncoderConfig: base_config_1.TYPE,
      BiquadFilterOptions: base_config_1.TYPE,
      BlobEventInit: base_config_1.TYPE,
      BlobPropertyBag: base_config_1.TYPE,
      CSSMatrixComponentOptions: base_config_1.TYPE,
      CSSNumericType: base_config_1.TYPE,
      CSSStyleSheetInit: base_config_1.TYPE,
      CacheQueryOptions: base_config_1.TYPE,
      CanvasRenderingContext2DSettings: base_config_1.TYPE,
      ChannelMergerOptions: base_config_1.TYPE,
      ChannelSplitterOptions: base_config_1.TYPE,
      CheckVisibilityOptions: base_config_1.TYPE,
      ClientQueryOptions: base_config_1.TYPE,
      ClipboardEventInit: base_config_1.TYPE,
      ClipboardItemOptions: base_config_1.TYPE,
      CloseEventInit: base_config_1.TYPE,
      CompositionEventInit: base_config_1.TYPE,
      ComputedEffectTiming: base_config_1.TYPE,
      ComputedKeyframe: base_config_1.TYPE,
      ConstantSourceOptions: base_config_1.TYPE,
      ConstrainBooleanParameters: base_config_1.TYPE,
      ConstrainDOMStringParameters: base_config_1.TYPE,
      ConstrainDoubleRange: base_config_1.TYPE,
      ConstrainULongRange: base_config_1.TYPE,
      ConvolverOptions: base_config_1.TYPE,
      CredentialCreationOptions: base_config_1.TYPE,
      CredentialPropertiesOutput: base_config_1.TYPE,
      CredentialRequestOptions: base_config_1.TYPE,
      CryptoKeyPair: base_config_1.TYPE,
      CustomEventInit: base_config_1.TYPE,
      DOMMatrix2DInit: base_config_1.TYPE,
      DOMMatrixInit: base_config_1.TYPE,
      DOMPointInit: base_config_1.TYPE,
      DOMQuadInit: base_config_1.TYPE,
      DOMRectInit: base_config_1.TYPE,
      DelayOptions: base_config_1.TYPE,
      DeviceMotionEventAccelerationInit: base_config_1.TYPE,
      DeviceMotionEventInit: base_config_1.TYPE,
      DeviceMotionEventRotationRateInit: base_config_1.TYPE,
      DeviceOrientationEventInit: base_config_1.TYPE,
      DisplayMediaStreamOptions: base_config_1.TYPE,
      DocumentTimelineOptions: base_config_1.TYPE,
      DoubleRange: base_config_1.TYPE,
      DragEventInit: base_config_1.TYPE,
      DynamicsCompressorOptions: base_config_1.TYPE,
      EcKeyAlgorithm: base_config_1.TYPE,
      EcKeyGenParams: base_config_1.TYPE,
      EcKeyImportParams: base_config_1.TYPE,
      EcdhKeyDeriveParams: base_config_1.TYPE,
      EcdsaParams: base_config_1.TYPE,
      EffectTiming: base_config_1.TYPE,
      ElementCreationOptions: base_config_1.TYPE,
      ElementDefinitionOptions: base_config_1.TYPE,
      EncodedVideoChunkInit: base_config_1.TYPE,
      EncodedVideoChunkMetadata: base_config_1.TYPE,
      ErrorEventInit: base_config_1.TYPE,
      EventInit: base_config_1.TYPE,
      EventListenerOptions: base_config_1.TYPE,
      EventModifierInit: base_config_1.TYPE,
      EventSourceInit: base_config_1.TYPE,
      FilePropertyBag: base_config_1.TYPE,
      FileSystemCreateWritableOptions: base_config_1.TYPE,
      FileSystemFlags: base_config_1.TYPE,
      FileSystemGetDirectoryOptions: base_config_1.TYPE,
      FileSystemGetFileOptions: base_config_1.TYPE,
      FileSystemRemoveOptions: base_config_1.TYPE,
      FocusEventInit: base_config_1.TYPE,
      FocusOptions: base_config_1.TYPE,
      FontFaceDescriptors: base_config_1.TYPE,
      FontFaceSetLoadEventInit: base_config_1.TYPE,
      FormDataEventInit: base_config_1.TYPE,
      FullscreenOptions: base_config_1.TYPE,
      GainOptions: base_config_1.TYPE,
      GamepadEffectParameters: base_config_1.TYPE,
      GamepadEventInit: base_config_1.TYPE,
      GetAnimationsOptions: base_config_1.TYPE,
      GetNotificationOptions: base_config_1.TYPE,
      GetRootNodeOptions: base_config_1.TYPE,
      HashChangeEventInit: base_config_1.TYPE,
      HkdfParams: base_config_1.TYPE,
      HmacImportParams: base_config_1.TYPE,
      HmacKeyAlgorithm: base_config_1.TYPE,
      HmacKeyGenParams: base_config_1.TYPE,
      IDBDatabaseInfo: base_config_1.TYPE,
      IDBIndexParameters: base_config_1.TYPE,
      IDBObjectStoreParameters: base_config_1.TYPE,
      IDBTransactionOptions: base_config_1.TYPE,
      IDBVersionChangeEventInit: base_config_1.TYPE,
      IIRFilterOptions: base_config_1.TYPE,
      IdleRequestOptions: base_config_1.TYPE,
      ImageBitmapOptions: base_config_1.TYPE,
      ImageBitmapRenderingContextSettings: base_config_1.TYPE,
      ImageDataSettings: base_config_1.TYPE,
      ImageEncodeOptions: base_config_1.TYPE,
      ImportMeta: base_config_1.TYPE,
      InputEventInit: base_config_1.TYPE,
      IntersectionObserverEntryInit: base_config_1.TYPE,
      IntersectionObserverInit: base_config_1.TYPE,
      JsonWebKey: base_config_1.TYPE,
      KeyAlgorithm: base_config_1.TYPE,
      KeyboardEventInit: base_config_1.TYPE,
      Keyframe: base_config_1.TYPE,
      KeyframeAnimationOptions: base_config_1.TYPE,
      KeyframeEffectOptions: base_config_1.TYPE,
      LockInfo: base_config_1.TYPE,
      LockManagerSnapshot: base_config_1.TYPE,
      LockOptions: base_config_1.TYPE,
      MIDIConnectionEventInit: base_config_1.TYPE,
      MIDIMessageEventInit: base_config_1.TYPE,
      MIDIOptions: base_config_1.TYPE,
      MediaCapabilitiesDecodingInfo: base_config_1.TYPE,
      MediaCapabilitiesEncodingInfo: base_config_1.TYPE,
      MediaCapabilitiesInfo: base_config_1.TYPE,
      MediaConfiguration: base_config_1.TYPE,
      MediaDecodingConfiguration: base_config_1.TYPE,
      MediaElementAudioSourceOptions: base_config_1.TYPE,
      MediaEncodingConfiguration: base_config_1.TYPE,
      MediaEncryptedEventInit: base_config_1.TYPE,
      MediaImage: base_config_1.TYPE,
      MediaKeyMessageEventInit: base_config_1.TYPE,
      MediaKeySystemConfiguration: base_config_1.TYPE,
      MediaKeySystemMediaCapability: base_config_1.TYPE,
      MediaMetadataInit: base_config_1.TYPE,
      MediaPositionState: base_config_1.TYPE,
      MediaQueryListEventInit: base_config_1.TYPE,
      MediaRecorderOptions: base_config_1.TYPE,
      MediaSessionActionDetails: base_config_1.TYPE,
      MediaStreamAudioSourceOptions: base_config_1.TYPE,
      MediaStreamConstraints: base_config_1.TYPE,
      MediaStreamTrackEventInit: base_config_1.TYPE,
      MediaTrackCapabilities: base_config_1.TYPE,
      MediaTrackConstraintSet: base_config_1.TYPE,
      MediaTrackConstraints: base_config_1.TYPE,
      MediaTrackSettings: base_config_1.TYPE,
      MediaTrackSupportedConstraints: base_config_1.TYPE,
      MessageEventInit: base_config_1.TYPE,
      MouseEventInit: base_config_1.TYPE,
      MultiCacheQueryOptions: base_config_1.TYPE,
      MutationObserverInit: base_config_1.TYPE,
      NavigationPreloadState: base_config_1.TYPE,
      NotificationAction: base_config_1.TYPE,
      NotificationOptions: base_config_1.TYPE,
      OfflineAudioCompletionEventInit: base_config_1.TYPE,
      OfflineAudioContextOptions: base_config_1.TYPE,
      OptionalEffectTiming: base_config_1.TYPE,
      OscillatorOptions: base_config_1.TYPE,
      PageTransitionEventInit: base_config_1.TYPE,
      PannerOptions: base_config_1.TYPE,
      PaymentCurrencyAmount: base_config_1.TYPE,
      PaymentDetailsBase: base_config_1.TYPE,
      PaymentDetailsInit: base_config_1.TYPE,
      PaymentDetailsModifier: base_config_1.TYPE,
      PaymentDetailsUpdate: base_config_1.TYPE,
      PaymentItem: base_config_1.TYPE,
      PaymentMethodChangeEventInit: base_config_1.TYPE,
      PaymentMethodData: base_config_1.TYPE,
      PaymentRequestUpdateEventInit: base_config_1.TYPE,
      PaymentValidationErrors: base_config_1.TYPE,
      Pbkdf2Params: base_config_1.TYPE,
      PerformanceMarkOptions: base_config_1.TYPE,
      PerformanceMeasureOptions: base_config_1.TYPE,
      PerformanceObserverInit: base_config_1.TYPE,
      PeriodicWaveConstraints: base_config_1.TYPE,
      PeriodicWaveOptions: base_config_1.TYPE,
      PermissionDescriptor: base_config_1.TYPE,
      PictureInPictureEventInit: base_config_1.TYPE,
      PlaneLayout: base_config_1.TYPE,
      PointerEventInit: base_config_1.TYPE,
      PopStateEventInit: base_config_1.TYPE,
      PositionOptions: base_config_1.TYPE,
      ProgressEventInit: base_config_1.TYPE,
      PromiseRejectionEventInit: base_config_1.TYPE,
      PropertyDefinition: base_config_1.TYPE,
      PropertyIndexedKeyframes: base_config_1.TYPE,
      PublicKeyCredentialCreationOptions: base_config_1.TYPE,
      PublicKeyCredentialDescriptor: base_config_1.TYPE,
      PublicKeyCredentialEntity: base_config_1.TYPE,
      PublicKeyCredentialParameters: base_config_1.TYPE,
      PublicKeyCredentialRequestOptions: base_config_1.TYPE,
      PublicKeyCredentialRpEntity: base_config_1.TYPE,
      PublicKeyCredentialUserEntity: base_config_1.TYPE,
      PushSubscriptionJSON: base_config_1.TYPE,
      PushSubscriptionOptionsInit: base_config_1.TYPE,
      QueuingStrategy: base_config_1.TYPE,
      QueuingStrategyInit: base_config_1.TYPE,
      RTCAnswerOptions: base_config_1.TYPE,
      RTCCertificateExpiration: base_config_1.TYPE,
      RTCConfiguration: base_config_1.TYPE,
      RTCDTMFToneChangeEventInit: base_config_1.TYPE,
      RTCDataChannelEventInit: base_config_1.TYPE,
      RTCDataChannelInit: base_config_1.TYPE,
      RTCDtlsFingerprint: base_config_1.TYPE,
      RTCEncodedAudioFrameMetadata: base_config_1.TYPE,
      RTCEncodedVideoFrameMetadata: base_config_1.TYPE,
      RTCErrorEventInit: base_config_1.TYPE,
      RTCErrorInit: base_config_1.TYPE,
      RTCIceCandidateInit: base_config_1.TYPE,
      RTCIceCandidatePair: base_config_1.TYPE,
      RTCIceCandidatePairStats: base_config_1.TYPE,
      RTCIceServer: base_config_1.TYPE,
      RTCInboundRtpStreamStats: base_config_1.TYPE,
      RTCLocalSessionDescriptionInit: base_config_1.TYPE,
      RTCOfferAnswerOptions: base_config_1.TYPE,
      RTCOfferOptions: base_config_1.TYPE,
      RTCOutboundRtpStreamStats: base_config_1.TYPE,
      RTCPeerConnectionIceErrorEventInit: base_config_1.TYPE,
      RTCPeerConnectionIceEventInit: base_config_1.TYPE,
      RTCReceivedRtpStreamStats: base_config_1.TYPE,
      RTCRtcpParameters: base_config_1.TYPE,
      RTCRtpCapabilities: base_config_1.TYPE,
      RTCRtpCodec: base_config_1.TYPE,
      RTCRtpCodecCapability: base_config_1.TYPE,
      RTCRtpCodecParameters: base_config_1.TYPE,
      RTCRtpCodingParameters: base_config_1.TYPE,
      RTCRtpContributingSource: base_config_1.TYPE,
      RTCRtpEncodingParameters: base_config_1.TYPE,
      RTCRtpHeaderExtensionCapability: base_config_1.TYPE,
      RTCRtpHeaderExtensionParameters: base_config_1.TYPE,
      RTCRtpParameters: base_config_1.TYPE,
      RTCRtpReceiveParameters: base_config_1.TYPE,
      RTCRtpSendParameters: base_config_1.TYPE,
      RTCRtpStreamStats: base_config_1.TYPE,
      RTCRtpSynchronizationSource: base_config_1.TYPE,
      RTCRtpTransceiverInit: base_config_1.TYPE,
      RTCSentRtpStreamStats: base_config_1.TYPE,
      RTCSessionDescriptionInit: base_config_1.TYPE,
      RTCStats: base_config_1.TYPE,
      RTCTrackEventInit: base_config_1.TYPE,
      RTCTransportStats: base_config_1.TYPE,
      ReadableStreamGetReaderOptions: base_config_1.TYPE,
      ReadableStreamReadDoneResult: base_config_1.TYPE,
      ReadableStreamReadValueResult: base_config_1.TYPE,
      ReadableWritablePair: base_config_1.TYPE,
      RegistrationOptions: base_config_1.TYPE,
      ReportingObserverOptions: base_config_1.TYPE,
      RequestInit: base_config_1.TYPE,
      ResizeObserverOptions: base_config_1.TYPE,
      ResponseInit: base_config_1.TYPE,
      RsaHashedImportParams: base_config_1.TYPE,
      RsaHashedKeyAlgorithm: base_config_1.TYPE,
      RsaHashedKeyGenParams: base_config_1.TYPE,
      RsaKeyAlgorithm: base_config_1.TYPE,
      RsaKeyGenParams: base_config_1.TYPE,
      RsaOaepParams: base_config_1.TYPE,
      RsaOtherPrimesInfo: base_config_1.TYPE,
      RsaPssParams: base_config_1.TYPE,
      SVGBoundingBoxOptions: base_config_1.TYPE,
      ScrollIntoViewOptions: base_config_1.TYPE,
      ScrollOptions: base_config_1.TYPE,
      ScrollToOptions: base_config_1.TYPE,
      SecurityPolicyViolationEventInit: base_config_1.TYPE,
      ShadowRootInit: base_config_1.TYPE,
      ShareData: base_config_1.TYPE,
      SpeechSynthesisErrorEventInit: base_config_1.TYPE,
      SpeechSynthesisEventInit: base_config_1.TYPE,
      StaticRangeInit: base_config_1.TYPE,
      StereoPannerOptions: base_config_1.TYPE,
      StorageEstimate: base_config_1.TYPE,
      StorageEventInit: base_config_1.TYPE,
      StreamPipeOptions: base_config_1.TYPE,
      StructuredSerializeOptions: base_config_1.TYPE,
      SubmitEventInit: base_config_1.TYPE,
      TextDecodeOptions: base_config_1.TYPE,
      TextDecoderOptions: base_config_1.TYPE,
      TextEncoderEncodeIntoResult: base_config_1.TYPE,
      ToggleEventInit: base_config_1.TYPE,
      TouchEventInit: base_config_1.TYPE,
      TouchInit: base_config_1.TYPE,
      TrackEventInit: base_config_1.TYPE,
      Transformer: base_config_1.TYPE,
      TransitionEventInit: base_config_1.TYPE,
      UIEventInit: base_config_1.TYPE,
      ULongRange: base_config_1.TYPE,
      UnderlyingByteSource: base_config_1.TYPE,
      UnderlyingDefaultSource: base_config_1.TYPE,
      UnderlyingSink: base_config_1.TYPE,
      UnderlyingSource: base_config_1.TYPE,
      ValidityStateFlags: base_config_1.TYPE,
      VideoColorSpaceInit: base_config_1.TYPE,
      VideoConfiguration: base_config_1.TYPE,
      VideoDecoderConfig: base_config_1.TYPE,
      VideoDecoderInit: base_config_1.TYPE,
      VideoDecoderSupport: base_config_1.TYPE,
      VideoEncoderConfig: base_config_1.TYPE,
      VideoEncoderEncodeOptions: base_config_1.TYPE,
      VideoEncoderInit: base_config_1.TYPE,
      VideoEncoderSupport: base_config_1.TYPE,
      VideoFrameBufferInit: base_config_1.TYPE,
      VideoFrameCallbackMetadata: base_config_1.TYPE,
      VideoFrameCopyToOptions: base_config_1.TYPE,
      VideoFrameInit: base_config_1.TYPE,
      WaveShaperOptions: base_config_1.TYPE,
      WebGLContextAttributes: base_config_1.TYPE,
      WebGLContextEventInit: base_config_1.TYPE,
      WebTransportCloseInfo: base_config_1.TYPE,
      WebTransportErrorOptions: base_config_1.TYPE,
      WebTransportHash: base_config_1.TYPE,
      WebTransportOptions: base_config_1.TYPE,
      WebTransportSendStreamOptions: base_config_1.TYPE,
      WheelEventInit: base_config_1.TYPE,
      WindowPostMessageOptions: base_config_1.TYPE,
      WorkerOptions: base_config_1.TYPE,
      WorkletOptions: base_config_1.TYPE,
      WriteParams: base_config_1.TYPE,
      NodeFilter: base_config_1.TYPE_VALUE,
      XPathNSResolver: base_config_1.TYPE,
      ANGLE_instanced_arrays: base_config_1.TYPE,
      ARIAMixin: base_config_1.TYPE,
      AbortController: base_config_1.TYPE_VALUE,
      AbortSignalEventMap: base_config_1.TYPE,
      AbortSignal: base_config_1.TYPE_VALUE,
      AbstractRange: base_config_1.TYPE_VALUE,
      AbstractWorkerEventMap: base_config_1.TYPE,
      AbstractWorker: base_config_1.TYPE,
      AnalyserNode: base_config_1.TYPE_VALUE,
      Animatable: base_config_1.TYPE,
      AnimationEventMap: base_config_1.TYPE,
      Animation: base_config_1.TYPE_VALUE,
      AnimationEffect: base_config_1.TYPE_VALUE,
      AnimationEvent: base_config_1.TYPE_VALUE,
      AnimationFrameProvider: base_config_1.TYPE,
      AnimationPlaybackEvent: base_config_1.TYPE_VALUE,
      AnimationTimeline: base_config_1.TYPE_VALUE,
      Attr: base_config_1.TYPE_VALUE,
      AudioBuffer: base_config_1.TYPE_VALUE,
      AudioBufferSourceNode: base_config_1.TYPE_VALUE,
      AudioContext: base_config_1.TYPE_VALUE,
      AudioDestinationNode: base_config_1.TYPE_VALUE,
      AudioListener: base_config_1.TYPE_VALUE,
      AudioNode: base_config_1.TYPE_VALUE,
      AudioParam: base_config_1.TYPE_VALUE,
      AudioParamMap: base_config_1.TYPE_VALUE,
      AudioProcessingEvent: base_config_1.TYPE_VALUE,
      AudioScheduledSourceNodeEventMap: base_config_1.TYPE,
      AudioScheduledSourceNode: base_config_1.TYPE_VALUE,
      AudioWorklet: base_config_1.TYPE_VALUE,
      AudioWorkletNodeEventMap: base_config_1.TYPE,
      AudioWorkletNode: base_config_1.TYPE_VALUE,
      AuthenticatorAssertionResponse: base_config_1.TYPE_VALUE,
      AuthenticatorAttestationResponse: base_config_1.TYPE_VALUE,
      AuthenticatorResponse: base_config_1.TYPE_VALUE,
      BarProp: base_config_1.TYPE_VALUE,
      BaseAudioContextEventMap: base_config_1.TYPE,
      BaseAudioContext: base_config_1.TYPE_VALUE,
      BeforeUnloadEvent: base_config_1.TYPE_VALUE,
      BiquadFilterNode: base_config_1.TYPE_VALUE,
      Blob: base_config_1.TYPE_VALUE,
      BlobEvent: base_config_1.TYPE_VALUE,
      Body: base_config_1.TYPE,
      BroadcastChannelEventMap: base_config_1.TYPE,
      BroadcastChannel: base_config_1.TYPE_VALUE,
      ByteLengthQueuingStrategy: base_config_1.TYPE_VALUE,
      CDATASection: base_config_1.TYPE_VALUE,
      CSSAnimation: base_config_1.TYPE_VALUE,
      CSSConditionRule: base_config_1.TYPE_VALUE,
      CSSContainerRule: base_config_1.TYPE_VALUE,
      CSSCounterStyleRule: base_config_1.TYPE_VALUE,
      CSSFontFaceRule: base_config_1.TYPE_VALUE,
      CSSFontFeatureValuesRule: base_config_1.TYPE_VALUE,
      CSSFontPaletteValuesRule: base_config_1.TYPE_VALUE,
      CSSGroupingRule: base_config_1.TYPE_VALUE,
      CSSImageValue: base_config_1.TYPE_VALUE,
      CSSImportRule: base_config_1.TYPE_VALUE,
      CSSKeyframeRule: base_config_1.TYPE_VALUE,
      CSSKeyframesRule: base_config_1.TYPE_VALUE,
      CSSKeywordValue: base_config_1.TYPE_VALUE,
      CSSLayerBlockRule: base_config_1.TYPE_VALUE,
      CSSLayerStatementRule: base_config_1.TYPE_VALUE,
      CSSMathClamp: base_config_1.TYPE_VALUE,
      CSSMathInvert: base_config_1.TYPE_VALUE,
      CSSMathMax: base_config_1.TYPE_VALUE,
      CSSMathMin: base_config_1.TYPE_VALUE,
      CSSMathNegate: base_config_1.TYPE_VALUE,
      CSSMathProduct: base_config_1.TYPE_VALUE,
      CSSMathSum: base_config_1.TYPE_VALUE,
      CSSMathValue: base_config_1.TYPE_VALUE,
      CSSMatrixComponent: base_config_1.TYPE_VALUE,
      CSSMediaRule: base_config_1.TYPE_VALUE,
      CSSNamespaceRule: base_config_1.TYPE_VALUE,
      CSSNumericArray: base_config_1.TYPE_VALUE,
      CSSNumericValue: base_config_1.TYPE_VALUE,
      CSSPageRule: base_config_1.TYPE_VALUE,
      CSSPerspective: base_config_1.TYPE_VALUE,
      CSSPropertyRule: base_config_1.TYPE_VALUE,
      CSSRotate: base_config_1.TYPE_VALUE,
      CSSRule: base_config_1.TYPE_VALUE,
      CSSRuleList: base_config_1.TYPE_VALUE,
      CSSScale: base_config_1.TYPE_VALUE,
      CSSSkew: base_config_1.TYPE_VALUE,
      CSSSkewX: base_config_1.TYPE_VALUE,
      CSSSkewY: base_config_1.TYPE_VALUE,
      CSSStyleDeclaration: base_config_1.TYPE_VALUE,
      CSSStyleRule: base_config_1.TYPE_VALUE,
      CSSStyleSheet: base_config_1.TYPE_VALUE,
      CSSStyleValue: base_config_1.TYPE_VALUE,
      CSSSupportsRule: base_config_1.TYPE_VALUE,
      CSSTransformComponent: base_config_1.TYPE_VALUE,
      CSSTransformValue: base_config_1.TYPE_VALUE,
      CSSTransition: base_config_1.TYPE_VALUE,
      CSSTranslate: base_config_1.TYPE_VALUE,
      CSSUnitValue: base_config_1.TYPE_VALUE,
      CSSUnparsedValue: base_config_1.TYPE_VALUE,
      CSSVariableReferenceValue: base_config_1.TYPE_VALUE,
      Cache: base_config_1.TYPE_VALUE,
      CacheStorage: base_config_1.TYPE_VALUE,
      CanvasCaptureMediaStreamTrack: base_config_1.TYPE_VALUE,
      CanvasCompositing: base_config_1.TYPE,
      CanvasDrawImage: base_config_1.TYPE,
      CanvasDrawPath: base_config_1.TYPE,
      CanvasFillStrokeStyles: base_config_1.TYPE,
      CanvasFilters: base_config_1.TYPE,
      CanvasGradient: base_config_1.TYPE_VALUE,
      CanvasImageData: base_config_1.TYPE,
      CanvasImageSmoothing: base_config_1.TYPE,
      CanvasPath: base_config_1.TYPE,
      CanvasPathDrawingStyles: base_config_1.TYPE,
      CanvasPattern: base_config_1.TYPE_VALUE,
      CanvasRect: base_config_1.TYPE,
      CanvasRenderingContext2D: base_config_1.TYPE_VALUE,
      CanvasShadowStyles: base_config_1.TYPE,
      CanvasState: base_config_1.TYPE,
      CanvasText: base_config_1.TYPE,
      CanvasTextDrawingStyles: base_config_1.TYPE,
      CanvasTransform: base_config_1.TYPE,
      CanvasUserInterface: base_config_1.TYPE,
      ChannelMergerNode: base_config_1.TYPE_VALUE,
      ChannelSplitterNode: base_config_1.TYPE_VALUE,
      CharacterData: base_config_1.TYPE_VALUE,
      ChildNode: base_config_1.TYPE,
      ClientRect: base_config_1.TYPE,
      Clipboard: base_config_1.TYPE_VALUE,
      ClipboardEvent: base_config_1.TYPE_VALUE,
      ClipboardItem: base_config_1.TYPE_VALUE,
      CloseEvent: base_config_1.TYPE_VALUE,
      Comment: base_config_1.TYPE_VALUE,
      CompositionEvent: base_config_1.TYPE_VALUE,
      CompressionStream: base_config_1.TYPE_VALUE,
      ConstantSourceNode: base_config_1.TYPE_VALUE,
      ConvolverNode: base_config_1.TYPE_VALUE,
      CountQueuingStrategy: base_config_1.TYPE_VALUE,
      Credential: base_config_1.TYPE_VALUE,
      CredentialsContainer: base_config_1.TYPE_VALUE,
      Crypto: base_config_1.TYPE_VALUE,
      CryptoKey: base_config_1.TYPE_VALUE,
      CustomElementRegistry: base_config_1.TYPE_VALUE,
      CustomEvent: base_config_1.TYPE_VALUE,
      DOMException: base_config_1.TYPE_VALUE,
      DOMImplementation: base_config_1.TYPE_VALUE,
      DOMMatrix: base_config_1.TYPE_VALUE,
      SVGMatrix: base_config_1.TYPE_VALUE,
      WebKitCSSMatrix: base_config_1.TYPE_VALUE,
      DOMMatrixReadOnly: base_config_1.TYPE_VALUE,
      DOMParser: base_config_1.TYPE_VALUE,
      DOMPoint: base_config_1.TYPE_VALUE,
      SVGPoint: base_config_1.TYPE_VALUE,
      DOMPointReadOnly: base_config_1.TYPE_VALUE,
      DOMQuad: base_config_1.TYPE_VALUE,
      DOMRect: base_config_1.TYPE_VALUE,
      SVGRect: base_config_1.TYPE_VALUE,
      DOMRectList: base_config_1.TYPE_VALUE,
      DOMRectReadOnly: base_config_1.TYPE_VALUE,
      DOMStringList: base_config_1.TYPE_VALUE,
      DOMStringMap: base_config_1.TYPE_VALUE,
      DOMTokenList: base_config_1.TYPE_VALUE,
      DataTransfer: base_config_1.TYPE_VALUE,
      DataTransferItem: base_config_1.TYPE_VALUE,
      DataTransferItemList: base_config_1.TYPE_VALUE,
      DecompressionStream: base_config_1.TYPE_VALUE,
      DelayNode: base_config_1.TYPE_VALUE,
      DeviceMotionEvent: base_config_1.TYPE_VALUE,
      DeviceMotionEventAcceleration: base_config_1.TYPE,
      DeviceMotionEventRotationRate: base_config_1.TYPE,
      DeviceOrientationEvent: base_config_1.TYPE_VALUE,
      DocumentEventMap: base_config_1.TYPE,
      Document: base_config_1.TYPE_VALUE,
      DocumentFragment: base_config_1.TYPE_VALUE,
      DocumentOrShadowRoot: base_config_1.TYPE,
      DocumentTimeline: base_config_1.TYPE_VALUE,
      DocumentType: base_config_1.TYPE_VALUE,
      DragEvent: base_config_1.TYPE_VALUE,
      DynamicsCompressorNode: base_config_1.TYPE_VALUE,
      EXT_blend_minmax: base_config_1.TYPE,
      EXT_color_buffer_float: base_config_1.TYPE,
      EXT_color_buffer_half_float: base_config_1.TYPE,
      EXT_float_blend: base_config_1.TYPE,
      EXT_frag_depth: base_config_1.TYPE,
      EXT_sRGB: base_config_1.TYPE,
      EXT_shader_texture_lod: base_config_1.TYPE,
      EXT_texture_compression_bptc: base_config_1.TYPE,
      EXT_texture_compression_rgtc: base_config_1.TYPE,
      EXT_texture_filter_anisotropic: base_config_1.TYPE,
      EXT_texture_norm16: base_config_1.TYPE,
      ElementEventMap: base_config_1.TYPE,
      Element: base_config_1.TYPE_VALUE,
      ElementCSSInlineStyle: base_config_1.TYPE,
      ElementContentEditable: base_config_1.TYPE,
      ElementInternals: base_config_1.TYPE_VALUE,
      EncodedVideoChunk: base_config_1.TYPE_VALUE,
      ErrorEvent: base_config_1.TYPE_VALUE,
      Event: base_config_1.TYPE_VALUE,
      EventCounts: base_config_1.TYPE_VALUE,
      EventListener: base_config_1.TYPE,
      EventListenerObject: base_config_1.TYPE,
      EventSourceEventMap: base_config_1.TYPE,
      EventSource: base_config_1.TYPE_VALUE,
      EventTarget: base_config_1.TYPE_VALUE,
      External: base_config_1.TYPE_VALUE,
      File: base_config_1.TYPE_VALUE,
      FileList: base_config_1.TYPE_VALUE,
      FileReaderEventMap: base_config_1.TYPE,
      FileReader: base_config_1.TYPE_VALUE,
      FileSystem: base_config_1.TYPE_VALUE,
      FileSystemDirectoryEntry: base_config_1.TYPE_VALUE,
      FileSystemDirectoryHandle: base_config_1.TYPE_VALUE,
      FileSystemDirectoryReader: base_config_1.TYPE_VALUE,
      FileSystemEntry: base_config_1.TYPE_VALUE,
      FileSystemFileEntry: base_config_1.TYPE_VALUE,
      FileSystemFileHandle: base_config_1.TYPE_VALUE,
      FileSystemHandle: base_config_1.TYPE_VALUE,
      FileSystemWritableFileStream: base_config_1.TYPE_VALUE,
      FocusEvent: base_config_1.TYPE_VALUE,
      FontFace: base_config_1.TYPE_VALUE,
      FontFaceSetEventMap: base_config_1.TYPE,
      FontFaceSet: base_config_1.TYPE_VALUE,
      FontFaceSetLoadEvent: base_config_1.TYPE_VALUE,
      FontFaceSource: base_config_1.TYPE,
      FormData: base_config_1.TYPE_VALUE,
      FormDataEvent: base_config_1.TYPE_VALUE,
      GainNode: base_config_1.TYPE_VALUE,
      Gamepad: base_config_1.TYPE_VALUE,
      GamepadButton: base_config_1.TYPE_VALUE,
      GamepadEvent: base_config_1.TYPE_VALUE,
      GamepadHapticActuator: base_config_1.TYPE_VALUE,
      GenericTransformStream: base_config_1.TYPE,
      Geolocation: base_config_1.TYPE_VALUE,
      GeolocationCoordinates: base_config_1.TYPE_VALUE,
      GeolocationPosition: base_config_1.TYPE_VALUE,
      GeolocationPositionError: base_config_1.TYPE_VALUE,
      GlobalEventHandlersEventMap: base_config_1.TYPE,
      GlobalEventHandlers: base_config_1.TYPE,
      HTMLAllCollection: base_config_1.TYPE_VALUE,
      HTMLAnchorElement: base_config_1.TYPE_VALUE,
      HTMLAreaElement: base_config_1.TYPE_VALUE,
      HTMLAudioElement: base_config_1.TYPE_VALUE,
      HTMLBRElement: base_config_1.TYPE_VALUE,
      HTMLBaseElement: base_config_1.TYPE_VALUE,
      HTMLBodyElementEventMap: base_config_1.TYPE,
      HTMLBodyElement: base_config_1.TYPE_VALUE,
      HTMLButtonElement: base_config_1.TYPE_VALUE,
      HTMLCanvasElement: base_config_1.TYPE_VALUE,
      HTMLCollectionBase: base_config_1.TYPE,
      HTMLCollection: base_config_1.TYPE_VALUE,
      HTMLCollectionOf: base_config_1.TYPE,
      HTMLDListElement: base_config_1.TYPE_VALUE,
      HTMLDataElement: base_config_1.TYPE_VALUE,
      HTMLDataListElement: base_config_1.TYPE_VALUE,
      HTMLDetailsElement: base_config_1.TYPE_VALUE,
      HTMLDialogElement: base_config_1.TYPE_VALUE,
      HTMLDirectoryElement: base_config_1.TYPE_VALUE,
      HTMLDivElement: base_config_1.TYPE_VALUE,
      HTMLDocument: base_config_1.TYPE_VALUE,
      HTMLElementEventMap: base_config_1.TYPE,
      HTMLElement: base_config_1.TYPE_VALUE,
      HTMLEmbedElement: base_config_1.TYPE_VALUE,
      HTMLFieldSetElement: base_config_1.TYPE_VALUE,
      HTMLFontElement: base_config_1.TYPE_VALUE,
      HTMLFormControlsCollection: base_config_1.TYPE_VALUE,
      HTMLFormElement: base_config_1.TYPE_VALUE,
      HTMLFrameElement: base_config_1.TYPE_VALUE,
      HTMLFrameSetElementEventMap: base_config_1.TYPE,
      HTMLFrameSetElement: base_config_1.TYPE_VALUE,
      HTMLHRElement: base_config_1.TYPE_VALUE,
      HTMLHeadElement: base_config_1.TYPE_VALUE,
      HTMLHeadingElement: base_config_1.TYPE_VALUE,
      HTMLHtmlElement: base_config_1.TYPE_VALUE,
      HTMLHyperlinkElementUtils: base_config_1.TYPE,
      HTMLIFrameElement: base_config_1.TYPE_VALUE,
      HTMLImageElement: base_config_1.TYPE_VALUE,
      HTMLInputElement: base_config_1.TYPE_VALUE,
      HTMLLIElement: base_config_1.TYPE_VALUE,
      HTMLLabelElement: base_config_1.TYPE_VALUE,
      HTMLLegendElement: base_config_1.TYPE_VALUE,
      HTMLLinkElement: base_config_1.TYPE_VALUE,
      HTMLMapElement: base_config_1.TYPE_VALUE,
      HTMLMarqueeElement: base_config_1.TYPE_VALUE,
      HTMLMediaElementEventMap: base_config_1.TYPE,
      HTMLMediaElement: base_config_1.TYPE_VALUE,
      HTMLMenuElement: base_config_1.TYPE_VALUE,
      HTMLMetaElement: base_config_1.TYPE_VALUE,
      HTMLMeterElement: base_config_1.TYPE_VALUE,
      HTMLModElement: base_config_1.TYPE_VALUE,
      HTMLOListElement: base_config_1.TYPE_VALUE,
      HTMLObjectElement: base_config_1.TYPE_VALUE,
      HTMLOptGroupElement: base_config_1.TYPE_VALUE,
      HTMLOptionElement: base_config_1.TYPE_VALUE,
      HTMLOptionsCollection: base_config_1.TYPE_VALUE,
      HTMLOrSVGElement: base_config_1.TYPE,
      HTMLOutputElement: base_config_1.TYPE_VALUE,
      HTMLParagraphElement: base_config_1.TYPE_VALUE,
      HTMLParamElement: base_config_1.TYPE_VALUE,
      HTMLPictureElement: base_config_1.TYPE_VALUE,
      HTMLPreElement: base_config_1.TYPE_VALUE,
      HTMLProgressElement: base_config_1.TYPE_VALUE,
      HTMLQuoteElement: base_config_1.TYPE_VALUE,
      HTMLScriptElement: base_config_1.TYPE_VALUE,
      HTMLSelectElement: base_config_1.TYPE_VALUE,
      HTMLSlotElement: base_config_1.TYPE_VALUE,
      HTMLSourceElement: base_config_1.TYPE_VALUE,
      HTMLSpanElement: base_config_1.TYPE_VALUE,
      HTMLStyleElement: base_config_1.TYPE_VALUE,
      HTMLTableCaptionElement: base_config_1.TYPE_VALUE,
      HTMLTableCellElement: base_config_1.TYPE_VALUE,
      HTMLTableColElement: base_config_1.TYPE_VALUE,
      HTMLTableDataCellElement: base_config_1.TYPE,
      HTMLTableElement: base_config_1.TYPE_VALUE,
      HTMLTableHeaderCellElement: base_config_1.TYPE,
      HTMLTableRowElement: base_config_1.TYPE_VALUE,
      HTMLTableSectionElement: base_config_1.TYPE_VALUE,
      HTMLTemplateElement: base_config_1.TYPE_VALUE,
      HTMLTextAreaElement: base_config_1.TYPE_VALUE,
      HTMLTimeElement: base_config_1.TYPE_VALUE,
      HTMLTitleElement: base_config_1.TYPE_VALUE,
      HTMLTrackElement: base_config_1.TYPE_VALUE,
      HTMLUListElement: base_config_1.TYPE_VALUE,
      HTMLUnknownElement: base_config_1.TYPE_VALUE,
      HTMLVideoElementEventMap: base_config_1.TYPE,
      HTMLVideoElement: base_config_1.TYPE_VALUE,
      HashChangeEvent: base_config_1.TYPE_VALUE,
      Headers: base_config_1.TYPE_VALUE,
      History: base_config_1.TYPE_VALUE,
      IDBCursor: base_config_1.TYPE_VALUE,
      IDBCursorWithValue: base_config_1.TYPE_VALUE,
      IDBDatabaseEventMap: base_config_1.TYPE,
      IDBDatabase: base_config_1.TYPE_VALUE,
      IDBFactory: base_config_1.TYPE_VALUE,
      IDBIndex: base_config_1.TYPE_VALUE,
      IDBKeyRange: base_config_1.TYPE_VALUE,
      IDBObjectStore: base_config_1.TYPE_VALUE,
      IDBOpenDBRequestEventMap: base_config_1.TYPE,
      IDBOpenDBRequest: base_config_1.TYPE_VALUE,
      IDBRequestEventMap: base_config_1.TYPE,
      IDBRequest: base_config_1.TYPE_VALUE,
      IDBTransactionEventMap: base_config_1.TYPE,
      IDBTransaction: base_config_1.TYPE_VALUE,
      IDBVersionChangeEvent: base_config_1.TYPE_VALUE,
      IIRFilterNode: base_config_1.TYPE_VALUE,
      IdleDeadline: base_config_1.TYPE_VALUE,
      ImageBitmap: base_config_1.TYPE_VALUE,
      ImageBitmapRenderingContext: base_config_1.TYPE_VALUE,
      ImageData: base_config_1.TYPE_VALUE,
      InnerHTML: base_config_1.TYPE,
      InputDeviceInfo: base_config_1.TYPE_VALUE,
      InputEvent: base_config_1.TYPE_VALUE,
      IntersectionObserver: base_config_1.TYPE_VALUE,
      IntersectionObserverEntry: base_config_1.TYPE_VALUE,
      KHR_parallel_shader_compile: base_config_1.TYPE,
      KeyboardEvent: base_config_1.TYPE_VALUE,
      KeyframeEffect: base_config_1.TYPE_VALUE,
      LinkStyle: base_config_1.TYPE,
      Location: base_config_1.TYPE_VALUE,
      Lock: base_config_1.TYPE_VALUE,
      LockManager: base_config_1.TYPE_VALUE,
      MIDIAccessEventMap: base_config_1.TYPE,
      MIDIAccess: base_config_1.TYPE_VALUE,
      MIDIConnectionEvent: base_config_1.TYPE_VALUE,
      MIDIInputEventMap: base_config_1.TYPE,
      MIDIInput: base_config_1.TYPE_VALUE,
      MIDIInputMap: base_config_1.TYPE_VALUE,
      MIDIMessageEvent: base_config_1.TYPE_VALUE,
      MIDIOutput: base_config_1.TYPE_VALUE,
      MIDIOutputMap: base_config_1.TYPE_VALUE,
      MIDIPortEventMap: base_config_1.TYPE,
      MIDIPort: base_config_1.TYPE_VALUE,
      MathMLElementEventMap: base_config_1.TYPE,
      MathMLElement: base_config_1.TYPE_VALUE,
      MediaCapabilities: base_config_1.TYPE_VALUE,
      MediaDeviceInfo: base_config_1.TYPE_VALUE,
      MediaDevicesEventMap: base_config_1.TYPE,
      MediaDevices: base_config_1.TYPE_VALUE,
      MediaElementAudioSourceNode: base_config_1.TYPE_VALUE,
      MediaEncryptedEvent: base_config_1.TYPE_VALUE,
      MediaError: base_config_1.TYPE_VALUE,
      MediaKeyMessageEvent: base_config_1.TYPE_VALUE,
      MediaKeySessionEventMap: base_config_1.TYPE,
      MediaKeySession: base_config_1.TYPE_VALUE,
      MediaKeyStatusMap: base_config_1.TYPE_VALUE,
      MediaKeySystemAccess: base_config_1.TYPE_VALUE,
      MediaKeys: base_config_1.TYPE_VALUE,
      MediaList: base_config_1.TYPE_VALUE,
      MediaMetadata: base_config_1.TYPE_VALUE,
      MediaQueryListEventMap: base_config_1.TYPE,
      MediaQueryList: base_config_1.TYPE_VALUE,
      MediaQueryListEvent: base_config_1.TYPE_VALUE,
      MediaRecorderEventMap: base_config_1.TYPE,
      MediaRecorder: base_config_1.TYPE_VALUE,
      MediaSession: base_config_1.TYPE_VALUE,
      MediaSourceEventMap: base_config_1.TYPE,
      MediaSource: base_config_1.TYPE_VALUE,
      MediaStreamEventMap: base_config_1.TYPE,
      MediaStream: base_config_1.TYPE_VALUE,
      MediaStreamAudioDestinationNode: base_config_1.TYPE_VALUE,
      MediaStreamAudioSourceNode: base_config_1.TYPE_VALUE,
      MediaStreamTrackEventMap: base_config_1.TYPE,
      MediaStreamTrack: base_config_1.TYPE_VALUE,
      MediaStreamTrackEvent: base_config_1.TYPE_VALUE,
      MessageChannel: base_config_1.TYPE_VALUE,
      MessageEvent: base_config_1.TYPE_VALUE,
      MessagePortEventMap: base_config_1.TYPE,
      MessagePort: base_config_1.TYPE_VALUE,
      MimeType: base_config_1.TYPE_VALUE,
      MimeTypeArray: base_config_1.TYPE_VALUE,
      MouseEvent: base_config_1.TYPE_VALUE,
      MutationEvent: base_config_1.TYPE_VALUE,
      MutationObserver: base_config_1.TYPE_VALUE,
      MutationRecord: base_config_1.TYPE_VALUE,
      NamedNodeMap: base_config_1.TYPE_VALUE,
      NavigationPreloadManager: base_config_1.TYPE_VALUE,
      Navigator: base_config_1.TYPE_VALUE,
      NavigatorAutomationInformation: base_config_1.TYPE,
      NavigatorBadge: base_config_1.TYPE,
      NavigatorConcurrentHardware: base_config_1.TYPE,
      NavigatorContentUtils: base_config_1.TYPE,
      NavigatorCookies: base_config_1.TYPE,
      NavigatorID: base_config_1.TYPE,
      NavigatorLanguage: base_config_1.TYPE,
      NavigatorLocks: base_config_1.TYPE,
      NavigatorOnLine: base_config_1.TYPE,
      NavigatorPlugins: base_config_1.TYPE,
      NavigatorStorage: base_config_1.TYPE,
      Node: base_config_1.TYPE_VALUE,
      NodeIterator: base_config_1.TYPE_VALUE,
      NodeList: base_config_1.TYPE_VALUE,
      NodeListOf: base_config_1.TYPE,
      NonDocumentTypeChildNode: base_config_1.TYPE,
      NonElementParentNode: base_config_1.TYPE,
      NotificationEventMap: base_config_1.TYPE,
      Notification: base_config_1.TYPE_VALUE,
      OES_draw_buffers_indexed: base_config_1.TYPE,
      OES_element_index_uint: base_config_1.TYPE,
      OES_fbo_render_mipmap: base_config_1.TYPE,
      OES_standard_derivatives: base_config_1.TYPE,
      OES_texture_float: base_config_1.TYPE,
      OES_texture_float_linear: base_config_1.TYPE,
      OES_texture_half_float: base_config_1.TYPE,
      OES_texture_half_float_linear: base_config_1.TYPE,
      OES_vertex_array_object: base_config_1.TYPE,
      OVR_multiview2: base_config_1.TYPE,
      OfflineAudioCompletionEvent: base_config_1.TYPE_VALUE,
      OfflineAudioContextEventMap: base_config_1.TYPE,
      OfflineAudioContext: base_config_1.TYPE_VALUE,
      OffscreenCanvasEventMap: base_config_1.TYPE,
      OffscreenCanvas: base_config_1.TYPE_VALUE,
      OffscreenCanvasRenderingContext2D: base_config_1.TYPE_VALUE,
      OscillatorNode: base_config_1.TYPE_VALUE,
      OverconstrainedError: base_config_1.TYPE_VALUE,
      PageTransitionEvent: base_config_1.TYPE_VALUE,
      PannerNode: base_config_1.TYPE_VALUE,
      ParentNode: base_config_1.TYPE,
      Path2D: base_config_1.TYPE_VALUE,
      PaymentMethodChangeEvent: base_config_1.TYPE_VALUE,
      PaymentRequestEventMap: base_config_1.TYPE,
      PaymentRequest: base_config_1.TYPE_VALUE,
      PaymentRequestUpdateEvent: base_config_1.TYPE_VALUE,
      PaymentResponse: base_config_1.TYPE_VALUE,
      PerformanceEventMap: base_config_1.TYPE,
      Performance: base_config_1.TYPE_VALUE,
      PerformanceEntry: base_config_1.TYPE_VALUE,
      PerformanceEventTiming: base_config_1.TYPE_VALUE,
      PerformanceMark: base_config_1.TYPE_VALUE,
      PerformanceMeasure: base_config_1.TYPE_VALUE,
      PerformanceNavigation: base_config_1.TYPE_VALUE,
      PerformanceNavigationTiming: base_config_1.TYPE_VALUE,
      PerformanceObserver: base_config_1.TYPE_VALUE,
      PerformanceObserverEntryList: base_config_1.TYPE_VALUE,
      PerformancePaintTiming: base_config_1.TYPE_VALUE,
      PerformanceResourceTiming: base_config_1.TYPE_VALUE,
      PerformanceServerTiming: base_config_1.TYPE_VALUE,
      PerformanceTiming: base_config_1.TYPE_VALUE,
      PeriodicWave: base_config_1.TYPE_VALUE,
      PermissionStatusEventMap: base_config_1.TYPE,
      PermissionStatus: base_config_1.TYPE_VALUE,
      Permissions: base_config_1.TYPE_VALUE,
      PictureInPictureEvent: base_config_1.TYPE_VALUE,
      PictureInPictureWindowEventMap: base_config_1.TYPE,
      PictureInPictureWindow: base_config_1.TYPE_VALUE,
      Plugin: base_config_1.TYPE_VALUE,
      PluginArray: base_config_1.TYPE_VALUE,
      PointerEvent: base_config_1.TYPE_VALUE,
      PopStateEvent: base_config_1.TYPE_VALUE,
      PopoverInvokerElement: base_config_1.TYPE,
      ProcessingInstruction: base_config_1.TYPE_VALUE,
      ProgressEvent: base_config_1.TYPE_VALUE,
      PromiseRejectionEvent: base_config_1.TYPE_VALUE,
      PublicKeyCredential: base_config_1.TYPE_VALUE,
      PushManager: base_config_1.TYPE_VALUE,
      PushSubscription: base_config_1.TYPE_VALUE,
      PushSubscriptionOptions: base_config_1.TYPE_VALUE,
      RTCCertificate: base_config_1.TYPE_VALUE,
      RTCDTMFSenderEventMap: base_config_1.TYPE,
      RTCDTMFSender: base_config_1.TYPE_VALUE,
      RTCDTMFToneChangeEvent: base_config_1.TYPE_VALUE,
      RTCDataChannelEventMap: base_config_1.TYPE,
      RTCDataChannel: base_config_1.TYPE_VALUE,
      RTCDataChannelEvent: base_config_1.TYPE_VALUE,
      RTCDtlsTransportEventMap: base_config_1.TYPE,
      RTCDtlsTransport: base_config_1.TYPE_VALUE,
      RTCEncodedAudioFrame: base_config_1.TYPE_VALUE,
      RTCEncodedVideoFrame: base_config_1.TYPE_VALUE,
      RTCError: base_config_1.TYPE_VALUE,
      RTCErrorEvent: base_config_1.TYPE_VALUE,
      RTCIceCandidate: base_config_1.TYPE_VALUE,
      RTCIceTransportEventMap: base_config_1.TYPE,
      RTCIceTransport: base_config_1.TYPE_VALUE,
      RTCPeerConnectionEventMap: base_config_1.TYPE,
      RTCPeerConnection: base_config_1.TYPE_VALUE,
      RTCPeerConnectionIceErrorEvent: base_config_1.TYPE_VALUE,
      RTCPeerConnectionIceEvent: base_config_1.TYPE_VALUE,
      RTCRtpReceiver: base_config_1.TYPE_VALUE,
      RTCRtpSender: base_config_1.TYPE_VALUE,
      RTCRtpTransceiver: base_config_1.TYPE_VALUE,
      RTCSctpTransportEventMap: base_config_1.TYPE,
      RTCSctpTransport: base_config_1.TYPE_VALUE,
      RTCSessionDescription: base_config_1.TYPE_VALUE,
      RTCStatsReport: base_config_1.TYPE_VALUE,
      RTCTrackEvent: base_config_1.TYPE_VALUE,
      RadioNodeList: base_config_1.TYPE_VALUE,
      Range: base_config_1.TYPE_VALUE,
      ReadableByteStreamController: base_config_1.TYPE_VALUE,
      ReadableStream: base_config_1.TYPE_VALUE,
      ReadableStreamBYOBReader: base_config_1.TYPE_VALUE,
      ReadableStreamBYOBRequest: base_config_1.TYPE_VALUE,
      ReadableStreamDefaultController: base_config_1.TYPE_VALUE,
      ReadableStreamDefaultReader: base_config_1.TYPE_VALUE,
      ReadableStreamGenericReader: base_config_1.TYPE,
      RemotePlaybackEventMap: base_config_1.TYPE,
      RemotePlayback: base_config_1.TYPE_VALUE,
      Report: base_config_1.TYPE_VALUE,
      ReportBody: base_config_1.TYPE_VALUE,
      ReportingObserver: base_config_1.TYPE_VALUE,
      Request: base_config_1.TYPE_VALUE,
      ResizeObserver: base_config_1.TYPE_VALUE,
      ResizeObserverEntry: base_config_1.TYPE_VALUE,
      ResizeObserverSize: base_config_1.TYPE_VALUE,
      Response: base_config_1.TYPE_VALUE,
      SVGAElement: base_config_1.TYPE_VALUE,
      SVGAngle: base_config_1.TYPE_VALUE,
      SVGAnimateElement: base_config_1.TYPE_VALUE,
      SVGAnimateMotionElement: base_config_1.TYPE_VALUE,
      SVGAnimateTransformElement: base_config_1.TYPE_VALUE,
      SVGAnimatedAngle: base_config_1.TYPE_VALUE,
      SVGAnimatedBoolean: base_config_1.TYPE_VALUE,
      SVGAnimatedEnumeration: base_config_1.TYPE_VALUE,
      SVGAnimatedInteger: base_config_1.TYPE_VALUE,
      SVGAnimatedLength: base_config_1.TYPE_VALUE,
      SVGAnimatedLengthList: base_config_1.TYPE_VALUE,
      SVGAnimatedNumber: base_config_1.TYPE_VALUE,
      SVGAnimatedNumberList: base_config_1.TYPE_VALUE,
      SVGAnimatedPoints: base_config_1.TYPE,
      SVGAnimatedPreserveAspectRatio: base_config_1.TYPE_VALUE,
      SVGAnimatedRect: base_config_1.TYPE_VALUE,
      SVGAnimatedString: base_config_1.TYPE_VALUE,
      SVGAnimatedTransformList: base_config_1.TYPE_VALUE,
      SVGAnimationElement: base_config_1.TYPE_VALUE,
      SVGCircleElement: base_config_1.TYPE_VALUE,
      SVGClipPathElement: base_config_1.TYPE_VALUE,
      SVGComponentTransferFunctionElement: base_config_1.TYPE_VALUE,
      SVGDefsElement: base_config_1.TYPE_VALUE,
      SVGDescElement: base_config_1.TYPE_VALUE,
      SVGElementEventMap: base_config_1.TYPE,
      SVGElement: base_config_1.TYPE_VALUE,
      SVGEllipseElement: base_config_1.TYPE_VALUE,
      SVGFEBlendElement: base_config_1.TYPE_VALUE,
      SVGFEColorMatrixElement: base_config_1.TYPE_VALUE,
      SVGFEComponentTransferElement: base_config_1.TYPE_VALUE,
      SVGFECompositeElement: base_config_1.TYPE_VALUE,
      SVGFEConvolveMatrixElement: base_config_1.TYPE_VALUE,
      SVGFEDiffuseLightingElement: base_config_1.TYPE_VALUE,
      SVGFEDisplacementMapElement: base_config_1.TYPE_VALUE,
      SVGFEDistantLightElement: base_config_1.TYPE_VALUE,
      SVGFEDropShadowElement: base_config_1.TYPE_VALUE,
      SVGFEFloodElement: base_config_1.TYPE_VALUE,
      SVGFEFuncAElement: base_config_1.TYPE_VALUE,
      SVGFEFuncBElement: base_config_1.TYPE_VALUE,
      SVGFEFuncGElement: base_config_1.TYPE_VALUE,
      SVGFEFuncRElement: base_config_1.TYPE_VALUE,
      SVGFEGaussianBlurElement: base_config_1.TYPE_VALUE,
      SVGFEImageElement: base_config_1.TYPE_VALUE,
      SVGFEMergeElement: base_config_1.TYPE_VALUE,
      SVGFEMergeNodeElement: base_config_1.TYPE_VALUE,
      SVGFEMorphologyElement: base_config_1.TYPE_VALUE,
      SVGFEOffsetElement: base_config_1.TYPE_VALUE,
      SVGFEPointLightElement: base_config_1.TYPE_VALUE,
      SVGFESpecularLightingElement: base_config_1.TYPE_VALUE,
      SVGFESpotLightElement: base_config_1.TYPE_VALUE,
      SVGFETileElement: base_config_1.TYPE_VALUE,
      SVGFETurbulenceElement: base_config_1.TYPE_VALUE,
      SVGFilterElement: base_config_1.TYPE_VALUE,
      SVGFilterPrimitiveStandardAttributes: base_config_1.TYPE,
      SVGFitToViewBox: base_config_1.TYPE,
      SVGForeignObjectElement: base_config_1.TYPE_VALUE,
      SVGGElement: base_config_1.TYPE_VALUE,
      SVGGeometryElement: base_config_1.TYPE_VALUE,
      SVGGradientElement: base_config_1.TYPE_VALUE,
      SVGGraphicsElement: base_config_1.TYPE_VALUE,
      SVGImageElement: base_config_1.TYPE_VALUE,
      SVGLength: base_config_1.TYPE_VALUE,
      SVGLengthList: base_config_1.TYPE_VALUE,
      SVGLineElement: base_config_1.TYPE_VALUE,
      SVGLinearGradientElement: base_config_1.TYPE_VALUE,
      SVGMPathElement: base_config_1.TYPE_VALUE,
      SVGMarkerElement: base_config_1.TYPE_VALUE,
      SVGMaskElement: base_config_1.TYPE_VALUE,
      SVGMetadataElement: base_config_1.TYPE_VALUE,
      SVGNumber: base_config_1.TYPE_VALUE,
      SVGNumberList: base_config_1.TYPE_VALUE,
      SVGPathElement: base_config_1.TYPE_VALUE,
      SVGPatternElement: base_config_1.TYPE_VALUE,
      SVGPointList: base_config_1.TYPE_VALUE,
      SVGPolygonElement: base_config_1.TYPE_VALUE,
      SVGPolylineElement: base_config_1.TYPE_VALUE,
      SVGPreserveAspectRatio: base_config_1.TYPE_VALUE,
      SVGRadialGradientElement: base_config_1.TYPE_VALUE,
      SVGRectElement: base_config_1.TYPE_VALUE,
      SVGSVGElementEventMap: base_config_1.TYPE,
      SVGSVGElement: base_config_1.TYPE_VALUE,
      SVGScriptElement: base_config_1.TYPE_VALUE,
      SVGSetElement: base_config_1.TYPE_VALUE,
      SVGStopElement: base_config_1.TYPE_VALUE,
      SVGStringList: base_config_1.TYPE_VALUE,
      SVGStyleElement: base_config_1.TYPE_VALUE,
      SVGSwitchElement: base_config_1.TYPE_VALUE,
      SVGSymbolElement: base_config_1.TYPE_VALUE,
      SVGTSpanElement: base_config_1.TYPE_VALUE,
      SVGTests: base_config_1.TYPE,
      SVGTextContentElement: base_config_1.TYPE_VALUE,
      SVGTextElement: base_config_1.TYPE_VALUE,
      SVGTextPathElement: base_config_1.TYPE_VALUE,
      SVGTextPositioningElement: base_config_1.TYPE_VALUE,
      SVGTitleElement: base_config_1.TYPE_VALUE,
      SVGTransform: base_config_1.TYPE_VALUE,
      SVGTransformList: base_config_1.TYPE_VALUE,
      SVGURIReference: base_config_1.TYPE,
      SVGUnitTypes: base_config_1.TYPE_VALUE,
      SVGUseElement: base_config_1.TYPE_VALUE,
      SVGViewElement: base_config_1.TYPE_VALUE,
      Screen: base_config_1.TYPE_VALUE,
      ScreenOrientationEventMap: base_config_1.TYPE,
      ScreenOrientation: base_config_1.TYPE_VALUE,
      ScriptProcessorNodeEventMap: base_config_1.TYPE,
      ScriptProcessorNode: base_config_1.TYPE_VALUE,
      SecurityPolicyViolationEvent: base_config_1.TYPE_VALUE,
      Selection: base_config_1.TYPE_VALUE,
      ServiceWorkerEventMap: base_config_1.TYPE,
      ServiceWorker: base_config_1.TYPE_VALUE,
      ServiceWorkerContainerEventMap: base_config_1.TYPE,
      ServiceWorkerContainer: base_config_1.TYPE_VALUE,
      ServiceWorkerRegistrationEventMap: base_config_1.TYPE,
      ServiceWorkerRegistration: base_config_1.TYPE_VALUE,
      ShadowRootEventMap: base_config_1.TYPE,
      ShadowRoot: base_config_1.TYPE_VALUE,
      SharedWorker: base_config_1.TYPE_VALUE,
      Slottable: base_config_1.TYPE,
      SourceBufferEventMap: base_config_1.TYPE,
      SourceBuffer: base_config_1.TYPE_VALUE,
      SourceBufferListEventMap: base_config_1.TYPE,
      SourceBufferList: base_config_1.TYPE_VALUE,
      SpeechRecognitionAlternative: base_config_1.TYPE_VALUE,
      SpeechRecognitionResult: base_config_1.TYPE_VALUE,
      SpeechRecognitionResultList: base_config_1.TYPE_VALUE,
      SpeechSynthesisEventMap: base_config_1.TYPE,
      SpeechSynthesis: base_config_1.TYPE_VALUE,
      SpeechSynthesisErrorEvent: base_config_1.TYPE_VALUE,
      SpeechSynthesisEvent: base_config_1.TYPE_VALUE,
      SpeechSynthesisUtteranceEventMap: base_config_1.TYPE,
      SpeechSynthesisUtterance: base_config_1.TYPE_VALUE,
      SpeechSynthesisVoice: base_config_1.TYPE_VALUE,
      StaticRange: base_config_1.TYPE_VALUE,
      StereoPannerNode: base_config_1.TYPE_VALUE,
      Storage: base_config_1.TYPE_VALUE,
      StorageEvent: base_config_1.TYPE_VALUE,
      StorageManager: base_config_1.TYPE_VALUE,
      StyleMedia: base_config_1.TYPE,
      StylePropertyMap: base_config_1.TYPE_VALUE,
      StylePropertyMapReadOnly: base_config_1.TYPE_VALUE,
      StyleSheet: base_config_1.TYPE_VALUE,
      StyleSheetList: base_config_1.TYPE_VALUE,
      SubmitEvent: base_config_1.TYPE_VALUE,
      SubtleCrypto: base_config_1.TYPE_VALUE,
      Text: base_config_1.TYPE_VALUE,
      TextDecoder: base_config_1.TYPE_VALUE,
      TextDecoderCommon: base_config_1.TYPE,
      TextDecoderStream: base_config_1.TYPE_VALUE,
      TextEncoder: base_config_1.TYPE_VALUE,
      TextEncoderCommon: base_config_1.TYPE,
      TextEncoderStream: base_config_1.TYPE_VALUE,
      TextMetrics: base_config_1.TYPE_VALUE,
      TextTrackEventMap: base_config_1.TYPE,
      TextTrack: base_config_1.TYPE_VALUE,
      TextTrackCueEventMap: base_config_1.TYPE,
      TextTrackCue: base_config_1.TYPE_VALUE,
      TextTrackCueList: base_config_1.TYPE_VALUE,
      TextTrackListEventMap: base_config_1.TYPE,
      TextTrackList: base_config_1.TYPE_VALUE,
      TimeRanges: base_config_1.TYPE_VALUE,
      ToggleEvent: base_config_1.TYPE_VALUE,
      Touch: base_config_1.TYPE_VALUE,
      TouchEvent: base_config_1.TYPE_VALUE,
      TouchList: base_config_1.TYPE_VALUE,
      TrackEvent: base_config_1.TYPE_VALUE,
      TransformStream: base_config_1.TYPE_VALUE,
      TransformStreamDefaultController: base_config_1.TYPE_VALUE,
      TransitionEvent: base_config_1.TYPE_VALUE,
      TreeWalker: base_config_1.TYPE_VALUE,
      UIEvent: base_config_1.TYPE_VALUE,
      URL: base_config_1.TYPE_VALUE,
      webkitURL: base_config_1.TYPE_VALUE,
      URLSearchParams: base_config_1.TYPE_VALUE,
      UserActivation: base_config_1.TYPE_VALUE,
      VTTCue: base_config_1.TYPE_VALUE,
      VTTRegion: base_config_1.TYPE_VALUE,
      ValidityState: base_config_1.TYPE_VALUE,
      VideoColorSpace: base_config_1.TYPE_VALUE,
      VideoDecoderEventMap: base_config_1.TYPE,
      VideoDecoder: base_config_1.TYPE_VALUE,
      VideoEncoderEventMap: base_config_1.TYPE,
      VideoEncoder: base_config_1.TYPE_VALUE,
      VideoFrame: base_config_1.TYPE_VALUE,
      VideoPlaybackQuality: base_config_1.TYPE_VALUE,
      VisualViewportEventMap: base_config_1.TYPE,
      VisualViewport: base_config_1.TYPE_VALUE,
      WEBGL_color_buffer_float: base_config_1.TYPE,
      WEBGL_compressed_texture_astc: base_config_1.TYPE,
      WEBGL_compressed_texture_etc: base_config_1.TYPE,
      WEBGL_compressed_texture_etc1: base_config_1.TYPE,
      WEBGL_compressed_texture_pvrtc: base_config_1.TYPE,
      WEBGL_compressed_texture_s3tc: base_config_1.TYPE,
      WEBGL_compressed_texture_s3tc_srgb: base_config_1.TYPE,
      WEBGL_debug_renderer_info: base_config_1.TYPE,
      WEBGL_debug_shaders: base_config_1.TYPE,
      WEBGL_depth_texture: base_config_1.TYPE,
      WEBGL_draw_buffers: base_config_1.TYPE,
      WEBGL_lose_context: base_config_1.TYPE,
      WEBGL_multi_draw: base_config_1.TYPE,
      WakeLock: base_config_1.TYPE_VALUE,
      WakeLockSentinelEventMap: base_config_1.TYPE,
      WakeLockSentinel: base_config_1.TYPE_VALUE,
      WaveShaperNode: base_config_1.TYPE_VALUE,
      WebGL2RenderingContext: base_config_1.TYPE_VALUE,
      WebGL2RenderingContextBase: base_config_1.TYPE,
      WebGL2RenderingContextOverloads: base_config_1.TYPE,
      WebGLActiveInfo: base_config_1.TYPE_VALUE,
      WebGLBuffer: base_config_1.TYPE_VALUE,
      WebGLContextEvent: base_config_1.TYPE_VALUE,
      WebGLFramebuffer: base_config_1.TYPE_VALUE,
      WebGLProgram: base_config_1.TYPE_VALUE,
      WebGLQuery: base_config_1.TYPE_VALUE,
      WebGLRenderbuffer: base_config_1.TYPE_VALUE,
      WebGLRenderingContext: base_config_1.TYPE_VALUE,
      WebGLRenderingContextBase: base_config_1.TYPE,
      WebGLRenderingContextOverloads: base_config_1.TYPE,
      WebGLSampler: base_config_1.TYPE_VALUE,
      WebGLShader: base_config_1.TYPE_VALUE,
      WebGLShaderPrecisionFormat: base_config_1.TYPE_VALUE,
      WebGLSync: base_config_1.TYPE_VALUE,
      WebGLTexture: base_config_1.TYPE_VALUE,
      WebGLTransformFeedback: base_config_1.TYPE_VALUE,
      WebGLUniformLocation: base_config_1.TYPE_VALUE,
      WebGLVertexArrayObject: base_config_1.TYPE_VALUE,
      WebGLVertexArrayObjectOES: base_config_1.TYPE,
      WebSocketEventMap: base_config_1.TYPE,
      WebSocket: base_config_1.TYPE_VALUE,
      WebTransport: base_config_1.TYPE_VALUE,
      WebTransportBidirectionalStream: base_config_1.TYPE_VALUE,
      WebTransportDatagramDuplexStream: base_config_1.TYPE_VALUE,
      WebTransportError: base_config_1.TYPE_VALUE,
      WheelEvent: base_config_1.TYPE_VALUE,
      WindowEventMap: base_config_1.TYPE,
      Window: base_config_1.TYPE_VALUE,
      WindowEventHandlersEventMap: base_config_1.TYPE,
      WindowEventHandlers: base_config_1.TYPE,
      WindowLocalStorage: base_config_1.TYPE,
      WindowOrWorkerGlobalScope: base_config_1.TYPE,
      WindowSessionStorage: base_config_1.TYPE,
      WorkerEventMap: base_config_1.TYPE,
      Worker: base_config_1.TYPE_VALUE,
      Worklet: base_config_1.TYPE_VALUE,
      WritableStream: base_config_1.TYPE_VALUE,
      WritableStreamDefaultController: base_config_1.TYPE_VALUE,
      WritableStreamDefaultWriter: base_config_1.TYPE_VALUE,
      XMLDocument: base_config_1.TYPE_VALUE,
      XMLHttpRequestEventMap: base_config_1.TYPE,
      XMLHttpRequest: base_config_1.TYPE_VALUE,
      XMLHttpRequestEventTargetEventMap: base_config_1.TYPE,
      XMLHttpRequestEventTarget: base_config_1.TYPE_VALUE,
      XMLHttpRequestUpload: base_config_1.TYPE_VALUE,
      XMLSerializer: base_config_1.TYPE_VALUE,
      XPathEvaluator: base_config_1.TYPE_VALUE,
      XPathEvaluatorBase: base_config_1.TYPE,
      XPathExpression: base_config_1.TYPE_VALUE,
      XPathResult: base_config_1.TYPE_VALUE,
      XSLTProcessor: base_config_1.TYPE_VALUE,
      Console: base_config_1.TYPE,
      CSS: base_config_1.TYPE_VALUE,
      WebAssembly: base_config_1.TYPE_VALUE,
      BlobCallback: base_config_1.TYPE,
      CustomElementConstructor: base_config_1.TYPE,
      DecodeErrorCallback: base_config_1.TYPE,
      DecodeSuccessCallback: base_config_1.TYPE,
      EncodedVideoChunkOutputCallback: base_config_1.TYPE,
      ErrorCallback: base_config_1.TYPE,
      FileCallback: base_config_1.TYPE,
      FileSystemEntriesCallback: base_config_1.TYPE,
      FileSystemEntryCallback: base_config_1.TYPE,
      FrameRequestCallback: base_config_1.TYPE,
      FunctionStringCallback: base_config_1.TYPE,
      IdleRequestCallback: base_config_1.TYPE,
      IntersectionObserverCallback: base_config_1.TYPE,
      LockGrantedCallback: base_config_1.TYPE,
      MediaSessionActionHandler: base_config_1.TYPE,
      MutationCallback: base_config_1.TYPE,
      NotificationPermissionCallback: base_config_1.TYPE,
      OnBeforeUnloadEventHandlerNonNull: base_config_1.TYPE,
      OnErrorEventHandlerNonNull: base_config_1.TYPE,
      PerformanceObserverCallback: base_config_1.TYPE,
      PositionCallback: base_config_1.TYPE,
      PositionErrorCallback: base_config_1.TYPE,
      QueuingStrategySize: base_config_1.TYPE,
      RTCPeerConnectionErrorCallback: base_config_1.TYPE,
      RTCSessionDescriptionCallback: base_config_1.TYPE,
      RemotePlaybackAvailabilityCallback: base_config_1.TYPE,
      ReportingObserverCallback: base_config_1.TYPE,
      ResizeObserverCallback: base_config_1.TYPE,
      TransformerFlushCallback: base_config_1.TYPE,
      TransformerStartCallback: base_config_1.TYPE,
      TransformerTransformCallback: base_config_1.TYPE,
      UnderlyingSinkAbortCallback: base_config_1.TYPE,
      UnderlyingSinkCloseCallback: base_config_1.TYPE,
      UnderlyingSinkStartCallback: base_config_1.TYPE,
      UnderlyingSinkWriteCallback: base_config_1.TYPE,
      UnderlyingSourceCancelCallback: base_config_1.TYPE,
      UnderlyingSourcePullCallback: base_config_1.TYPE,
      UnderlyingSourceStartCallback: base_config_1.TYPE,
      VideoFrameOutputCallback: base_config_1.TYPE,
      VideoFrameRequestCallback: base_config_1.TYPE,
      VoidFunction: base_config_1.TYPE,
      WebCodecsErrorCallback: base_config_1.TYPE,
      HTMLElementTagNameMap: base_config_1.TYPE,
      HTMLElementDeprecatedTagNameMap: base_config_1.TYPE,
      SVGElementTagNameMap: base_config_1.TYPE,
      MathMLElementTagNameMap: base_config_1.TYPE,
      ElementTagNameMap: base_config_1.TYPE,
      AlgorithmIdentifier: base_config_1.TYPE,
      AllowSharedBufferSource: base_config_1.TYPE,
      AutoFill: base_config_1.TYPE,
      AutoFillField: base_config_1.TYPE,
      AutoFillSection: base_config_1.TYPE,
      BigInteger: base_config_1.TYPE,
      BinaryData: base_config_1.TYPE,
      BlobPart: base_config_1.TYPE,
      BodyInit: base_config_1.TYPE,
      BufferSource: base_config_1.TYPE,
      COSEAlgorithmIdentifier: base_config_1.TYPE,
      CSSKeywordish: base_config_1.TYPE,
      CSSNumberish: base_config_1.TYPE,
      CSSPerspectiveValue: base_config_1.TYPE,
      CSSUnparsedSegment: base_config_1.TYPE,
      CanvasImageSource: base_config_1.TYPE,
      ClipboardItemData: base_config_1.TYPE,
      ClipboardItems: base_config_1.TYPE,
      ConstrainBoolean: base_config_1.TYPE,
      ConstrainDOMString: base_config_1.TYPE,
      ConstrainDouble: base_config_1.TYPE,
      ConstrainULong: base_config_1.TYPE,
      DOMHighResTimeStamp: base_config_1.TYPE,
      EpochTimeStamp: base_config_1.TYPE,
      EventListenerOrEventListenerObject: base_config_1.TYPE,
      FileSystemWriteChunkType: base_config_1.TYPE,
      Float32List: base_config_1.TYPE,
      FormDataEntryValue: base_config_1.TYPE,
      GLbitfield: base_config_1.TYPE,
      GLboolean: base_config_1.TYPE,
      GLclampf: base_config_1.TYPE,
      GLenum: base_config_1.TYPE,
      GLfloat: base_config_1.TYPE,
      GLint: base_config_1.TYPE,
      GLint64: base_config_1.TYPE,
      GLintptr: base_config_1.TYPE,
      GLsizei: base_config_1.TYPE,
      GLsizeiptr: base_config_1.TYPE,
      GLuint: base_config_1.TYPE,
      GLuint64: base_config_1.TYPE,
      HTMLOrSVGImageElement: base_config_1.TYPE,
      HTMLOrSVGScriptElement: base_config_1.TYPE,
      HashAlgorithmIdentifier: base_config_1.TYPE,
      HeadersInit: base_config_1.TYPE,
      IDBValidKey: base_config_1.TYPE,
      ImageBitmapSource: base_config_1.TYPE,
      Int32List: base_config_1.TYPE,
      LineAndPositionSetting: base_config_1.TYPE,
      MediaProvider: base_config_1.TYPE,
      MessageEventSource: base_config_1.TYPE,
      MutationRecordType: base_config_1.TYPE,
      NamedCurve: base_config_1.TYPE,
      OffscreenRenderingContext: base_config_1.TYPE,
      OnBeforeUnloadEventHandler: base_config_1.TYPE,
      OnErrorEventHandler: base_config_1.TYPE,
      OptionalPostfixToken: base_config_1.TYPE,
      OptionalPrefixToken: base_config_1.TYPE,
      PerformanceEntryList: base_config_1.TYPE,
      ReadableStreamController: base_config_1.TYPE,
      ReadableStreamReadResult: base_config_1.TYPE,
      ReadableStreamReader: base_config_1.TYPE,
      RenderingContext: base_config_1.TYPE,
      ReportList: base_config_1.TYPE,
      RequestInfo: base_config_1.TYPE,
      TexImageSource: base_config_1.TYPE,
      TimerHandler: base_config_1.TYPE,
      Transferable: base_config_1.TYPE,
      Uint32List: base_config_1.TYPE,
      VibratePattern: base_config_1.TYPE,
      WindowProxy: base_config_1.TYPE,
      XMLHttpRequestBodyInit: base_config_1.TYPE,
      AlignSetting: base_config_1.TYPE,
      AlphaOption: base_config_1.TYPE,
      AnimationPlayState: base_config_1.TYPE,
      AnimationReplaceState: base_config_1.TYPE,
      AppendMode: base_config_1.TYPE,
      AttestationConveyancePreference: base_config_1.TYPE,
      AudioContextLatencyCategory: base_config_1.TYPE,
      AudioContextState: base_config_1.TYPE,
      AuthenticatorAttachment: base_config_1.TYPE,
      AuthenticatorTransport: base_config_1.TYPE,
      AutoFillAddressKind: base_config_1.TYPE,
      AutoFillBase: base_config_1.TYPE,
      AutoFillContactField: base_config_1.TYPE,
      AutoFillContactKind: base_config_1.TYPE,
      AutoFillCredentialField: base_config_1.TYPE,
      AutoFillNormalField: base_config_1.TYPE,
      AutoKeyword: base_config_1.TYPE,
      AutomationRate: base_config_1.TYPE,
      AvcBitstreamFormat: base_config_1.TYPE,
      BinaryType: base_config_1.TYPE,
      BiquadFilterType: base_config_1.TYPE,
      CSSMathOperator: base_config_1.TYPE,
      CSSNumericBaseType: base_config_1.TYPE,
      CanPlayTypeResult: base_config_1.TYPE,
      CanvasDirection: base_config_1.TYPE,
      CanvasFillRule: base_config_1.TYPE,
      CanvasFontKerning: base_config_1.TYPE,
      CanvasFontStretch: base_config_1.TYPE,
      CanvasFontVariantCaps: base_config_1.TYPE,
      CanvasLineCap: base_config_1.TYPE,
      CanvasLineJoin: base_config_1.TYPE,
      CanvasTextAlign: base_config_1.TYPE,
      CanvasTextBaseline: base_config_1.TYPE,
      CanvasTextRendering: base_config_1.TYPE,
      ChannelCountMode: base_config_1.TYPE,
      ChannelInterpretation: base_config_1.TYPE,
      ClientTypes: base_config_1.TYPE,
      CodecState: base_config_1.TYPE,
      ColorGamut: base_config_1.TYPE,
      ColorSpaceConversion: base_config_1.TYPE,
      CompositeOperation: base_config_1.TYPE,
      CompositeOperationOrAuto: base_config_1.TYPE,
      CompressionFormat: base_config_1.TYPE,
      CredentialMediationRequirement: base_config_1.TYPE,
      DOMParserSupportedType: base_config_1.TYPE,
      DirectionSetting: base_config_1.TYPE,
      DisplayCaptureSurfaceType: base_config_1.TYPE,
      DistanceModelType: base_config_1.TYPE,
      DocumentReadyState: base_config_1.TYPE,
      DocumentVisibilityState: base_config_1.TYPE,
      EncodedVideoChunkType: base_config_1.TYPE,
      EndOfStreamError: base_config_1.TYPE,
      EndingType: base_config_1.TYPE,
      FileSystemHandleKind: base_config_1.TYPE,
      FillMode: base_config_1.TYPE,
      FontDisplay: base_config_1.TYPE,
      FontFaceLoadStatus: base_config_1.TYPE,
      FontFaceSetLoadStatus: base_config_1.TYPE,
      FullscreenNavigationUI: base_config_1.TYPE,
      GamepadHapticActuatorType: base_config_1.TYPE,
      GamepadHapticEffectType: base_config_1.TYPE,
      GamepadHapticsResult: base_config_1.TYPE,
      GamepadMappingType: base_config_1.TYPE,
      GlobalCompositeOperation: base_config_1.TYPE,
      HardwareAcceleration: base_config_1.TYPE,
      HdrMetadataType: base_config_1.TYPE,
      IDBCursorDirection: base_config_1.TYPE,
      IDBRequestReadyState: base_config_1.TYPE,
      IDBTransactionDurability: base_config_1.TYPE,
      IDBTransactionMode: base_config_1.TYPE,
      ImageOrientation: base_config_1.TYPE,
      ImageSmoothingQuality: base_config_1.TYPE,
      InsertPosition: base_config_1.TYPE,
      IterationCompositeOperation: base_config_1.TYPE,
      KeyFormat: base_config_1.TYPE,
      KeyType: base_config_1.TYPE,
      KeyUsage: base_config_1.TYPE,
      LatencyMode: base_config_1.TYPE,
      LineAlignSetting: base_config_1.TYPE,
      LockMode: base_config_1.TYPE,
      MIDIPortConnectionState: base_config_1.TYPE,
      MIDIPortDeviceState: base_config_1.TYPE,
      MIDIPortType: base_config_1.TYPE,
      MediaDecodingType: base_config_1.TYPE,
      MediaDeviceKind: base_config_1.TYPE,
      MediaEncodingType: base_config_1.TYPE,
      MediaKeyMessageType: base_config_1.TYPE,
      MediaKeySessionClosedReason: base_config_1.TYPE,
      MediaKeySessionType: base_config_1.TYPE,
      MediaKeyStatus: base_config_1.TYPE,
      MediaKeysRequirement: base_config_1.TYPE,
      MediaSessionAction: base_config_1.TYPE,
      MediaSessionPlaybackState: base_config_1.TYPE,
      MediaStreamTrackState: base_config_1.TYPE,
      NavigationTimingType: base_config_1.TYPE,
      NotificationDirection: base_config_1.TYPE,
      NotificationPermission: base_config_1.TYPE,
      OffscreenRenderingContextId: base_config_1.TYPE,
      OrientationType: base_config_1.TYPE,
      OscillatorType: base_config_1.TYPE,
      OverSampleType: base_config_1.TYPE,
      PanningModelType: base_config_1.TYPE,
      PaymentComplete: base_config_1.TYPE,
      PermissionName: base_config_1.TYPE,
      PermissionState: base_config_1.TYPE,
      PlaybackDirection: base_config_1.TYPE,
      PositionAlignSetting: base_config_1.TYPE,
      PredefinedColorSpace: base_config_1.TYPE,
      PremultiplyAlpha: base_config_1.TYPE,
      PresentationStyle: base_config_1.TYPE,
      PublicKeyCredentialType: base_config_1.TYPE,
      PushEncryptionKeyName: base_config_1.TYPE,
      RTCBundlePolicy: base_config_1.TYPE,
      RTCDataChannelState: base_config_1.TYPE,
      RTCDegradationPreference: base_config_1.TYPE,
      RTCDtlsTransportState: base_config_1.TYPE,
      RTCEncodedVideoFrameType: base_config_1.TYPE,
      RTCErrorDetailType: base_config_1.TYPE,
      RTCIceCandidateType: base_config_1.TYPE,
      RTCIceComponent: base_config_1.TYPE,
      RTCIceConnectionState: base_config_1.TYPE,
      RTCIceGathererState: base_config_1.TYPE,
      RTCIceGatheringState: base_config_1.TYPE,
      RTCIceProtocol: base_config_1.TYPE,
      RTCIceTcpCandidateType: base_config_1.TYPE,
      RTCIceTransportPolicy: base_config_1.TYPE,
      RTCIceTransportState: base_config_1.TYPE,
      RTCPeerConnectionState: base_config_1.TYPE,
      RTCPriorityType: base_config_1.TYPE,
      RTCRtcpMuxPolicy: base_config_1.TYPE,
      RTCRtpTransceiverDirection: base_config_1.TYPE,
      RTCSctpTransportState: base_config_1.TYPE,
      RTCSdpType: base_config_1.TYPE,
      RTCSignalingState: base_config_1.TYPE,
      RTCStatsIceCandidatePairState: base_config_1.TYPE,
      RTCStatsType: base_config_1.TYPE,
      ReadableStreamReaderMode: base_config_1.TYPE,
      ReadableStreamType: base_config_1.TYPE,
      ReadyState: base_config_1.TYPE,
      RecordingState: base_config_1.TYPE,
      ReferrerPolicy: base_config_1.TYPE,
      RemotePlaybackState: base_config_1.TYPE,
      RequestCache: base_config_1.TYPE,
      RequestCredentials: base_config_1.TYPE,
      RequestDestination: base_config_1.TYPE,
      RequestMode: base_config_1.TYPE,
      RequestRedirect: base_config_1.TYPE,
      ResidentKeyRequirement: base_config_1.TYPE,
      ResizeObserverBoxOptions: base_config_1.TYPE,
      ResizeQuality: base_config_1.TYPE,
      ResponseType: base_config_1.TYPE,
      ScrollBehavior: base_config_1.TYPE,
      ScrollLogicalPosition: base_config_1.TYPE,
      ScrollRestoration: base_config_1.TYPE,
      ScrollSetting: base_config_1.TYPE,
      SecurityPolicyViolationEventDisposition: base_config_1.TYPE,
      SelectionMode: base_config_1.TYPE,
      ServiceWorkerState: base_config_1.TYPE,
      ServiceWorkerUpdateViaCache: base_config_1.TYPE,
      ShadowRootMode: base_config_1.TYPE,
      SlotAssignmentMode: base_config_1.TYPE,
      SpeechSynthesisErrorCode: base_config_1.TYPE,
      TextTrackKind: base_config_1.TYPE,
      TextTrackMode: base_config_1.TYPE,
      TouchType: base_config_1.TYPE,
      TransferFunction: base_config_1.TYPE,
      UserVerificationRequirement: base_config_1.TYPE,
      VideoColorPrimaries: base_config_1.TYPE,
      VideoEncoderBitrateMode: base_config_1.TYPE,
      VideoFacingModeEnum: base_config_1.TYPE,
      VideoMatrixCoefficients: base_config_1.TYPE,
      VideoPixelFormat: base_config_1.TYPE,
      VideoTransferCharacteristics: base_config_1.TYPE,
      WakeLockType: base_config_1.TYPE,
      WebGLPowerPreference: base_config_1.TYPE,
      WebTransportCongestionControl: base_config_1.TYPE,
      WebTransportErrorSource: base_config_1.TYPE,
      WorkerType: base_config_1.TYPE,
      WriteCommandType: base_config_1.TYPE,
      XMLHttpRequestResponseType: base_config_1.TYPE
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/dom.iterable.js
var require_dom_iterable = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/dom.iterable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.dom_iterable = void 0;
    var base_config_1 = require_base_config();
    exports.dom_iterable = {
      AudioParam: base_config_1.TYPE,
      AudioParamMap: base_config_1.TYPE,
      BaseAudioContext: base_config_1.TYPE,
      CSSKeyframesRule: base_config_1.TYPE,
      CSSNumericArray: base_config_1.TYPE,
      CSSRuleList: base_config_1.TYPE,
      CSSStyleDeclaration: base_config_1.TYPE,
      CSSTransformValue: base_config_1.TYPE,
      CSSUnparsedValue: base_config_1.TYPE,
      Cache: base_config_1.TYPE,
      CanvasPath: base_config_1.TYPE,
      CanvasPathDrawingStyles: base_config_1.TYPE,
      DOMRectList: base_config_1.TYPE,
      DOMStringList: base_config_1.TYPE,
      DOMTokenList: base_config_1.TYPE,
      DataTransferItemList: base_config_1.TYPE,
      EventCounts: base_config_1.TYPE,
      FileList: base_config_1.TYPE,
      FontFaceSet: base_config_1.TYPE,
      FormData: base_config_1.TYPE,
      HTMLAllCollection: base_config_1.TYPE,
      HTMLCollectionBase: base_config_1.TYPE,
      HTMLCollectionOf: base_config_1.TYPE,
      HTMLFormElement: base_config_1.TYPE,
      HTMLSelectElement: base_config_1.TYPE,
      Headers: base_config_1.TYPE,
      IDBDatabase: base_config_1.TYPE,
      IDBObjectStore: base_config_1.TYPE,
      MIDIInputMap: base_config_1.TYPE,
      MIDIOutput: base_config_1.TYPE,
      MIDIOutputMap: base_config_1.TYPE,
      MediaKeyStatusMap: base_config_1.TYPE,
      MediaList: base_config_1.TYPE,
      MessageEvent: base_config_1.TYPE,
      MimeTypeArray: base_config_1.TYPE,
      NamedNodeMap: base_config_1.TYPE,
      Navigator: base_config_1.TYPE,
      NodeList: base_config_1.TYPE,
      NodeListOf: base_config_1.TYPE,
      Plugin: base_config_1.TYPE,
      PluginArray: base_config_1.TYPE,
      RTCRtpTransceiver: base_config_1.TYPE,
      RTCStatsReport: base_config_1.TYPE,
      SVGLengthList: base_config_1.TYPE,
      SVGNumberList: base_config_1.TYPE,
      SVGPointList: base_config_1.TYPE,
      SVGStringList: base_config_1.TYPE,
      SVGTransformList: base_config_1.TYPE,
      SourceBufferList: base_config_1.TYPE,
      SpeechRecognitionResult: base_config_1.TYPE,
      SpeechRecognitionResultList: base_config_1.TYPE,
      StylePropertyMapReadOnly: base_config_1.TYPE,
      StyleSheetList: base_config_1.TYPE,
      SubtleCrypto: base_config_1.TYPE,
      TextTrackCueList: base_config_1.TYPE,
      TextTrackList: base_config_1.TYPE,
      TouchList: base_config_1.TYPE,
      URLSearchParams: base_config_1.TYPE,
      WEBGL_draw_buffers: base_config_1.TYPE,
      WEBGL_multi_draw: base_config_1.TYPE,
      WebGL2RenderingContextBase: base_config_1.TYPE,
      WebGL2RenderingContextOverloads: base_config_1.TYPE,
      WebGLRenderingContextBase: base_config_1.TYPE,
      WebGLRenderingContextOverloads: base_config_1.TYPE
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es5.js
var require_es5 = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es5.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es5 = void 0;
    var base_config_1 = require_base_config();
    var decorators_1 = require_decorators();
    var decorators_legacy_1 = require_decorators_legacy();
    exports.es5 = {
      ...decorators_1.decorators,
      ...decorators_legacy_1.decorators_legacy,
      Symbol: base_config_1.TYPE,
      PropertyKey: base_config_1.TYPE,
      PropertyDescriptor: base_config_1.TYPE,
      PropertyDescriptorMap: base_config_1.TYPE,
      Object: base_config_1.TYPE_VALUE,
      ObjectConstructor: base_config_1.TYPE,
      Function: base_config_1.TYPE_VALUE,
      FunctionConstructor: base_config_1.TYPE,
      ThisParameterType: base_config_1.TYPE,
      OmitThisParameter: base_config_1.TYPE,
      CallableFunction: base_config_1.TYPE,
      NewableFunction: base_config_1.TYPE,
      IArguments: base_config_1.TYPE,
      String: base_config_1.TYPE_VALUE,
      StringConstructor: base_config_1.TYPE,
      Boolean: base_config_1.TYPE_VALUE,
      BooleanConstructor: base_config_1.TYPE,
      Number: base_config_1.TYPE_VALUE,
      NumberConstructor: base_config_1.TYPE,
      TemplateStringsArray: base_config_1.TYPE,
      ImportMeta: base_config_1.TYPE,
      ImportCallOptions: base_config_1.TYPE,
      ImportAssertions: base_config_1.TYPE,
      Math: base_config_1.TYPE_VALUE,
      Date: base_config_1.TYPE_VALUE,
      DateConstructor: base_config_1.TYPE,
      RegExpMatchArray: base_config_1.TYPE,
      RegExpExecArray: base_config_1.TYPE,
      RegExp: base_config_1.TYPE_VALUE,
      RegExpConstructor: base_config_1.TYPE,
      Error: base_config_1.TYPE_VALUE,
      ErrorConstructor: base_config_1.TYPE,
      EvalError: base_config_1.TYPE_VALUE,
      EvalErrorConstructor: base_config_1.TYPE,
      RangeError: base_config_1.TYPE_VALUE,
      RangeErrorConstructor: base_config_1.TYPE,
      ReferenceError: base_config_1.TYPE_VALUE,
      ReferenceErrorConstructor: base_config_1.TYPE,
      SyntaxError: base_config_1.TYPE_VALUE,
      SyntaxErrorConstructor: base_config_1.TYPE,
      TypeError: base_config_1.TYPE_VALUE,
      TypeErrorConstructor: base_config_1.TYPE,
      URIError: base_config_1.TYPE_VALUE,
      URIErrorConstructor: base_config_1.TYPE,
      JSON: base_config_1.TYPE_VALUE,
      ReadonlyArray: base_config_1.TYPE,
      ConcatArray: base_config_1.TYPE,
      Array: base_config_1.TYPE_VALUE,
      ArrayConstructor: base_config_1.TYPE,
      TypedPropertyDescriptor: base_config_1.TYPE,
      PromiseConstructorLike: base_config_1.TYPE,
      PromiseLike: base_config_1.TYPE,
      Promise: base_config_1.TYPE,
      Awaited: base_config_1.TYPE,
      ArrayLike: base_config_1.TYPE,
      Partial: base_config_1.TYPE,
      Required: base_config_1.TYPE,
      Readonly: base_config_1.TYPE,
      Pick: base_config_1.TYPE,
      Record: base_config_1.TYPE,
      Exclude: base_config_1.TYPE,
      Extract: base_config_1.TYPE,
      Omit: base_config_1.TYPE,
      NonNullable: base_config_1.TYPE,
      Parameters: base_config_1.TYPE,
      ConstructorParameters: base_config_1.TYPE,
      ReturnType: base_config_1.TYPE,
      InstanceType: base_config_1.TYPE,
      Uppercase: base_config_1.TYPE,
      Lowercase: base_config_1.TYPE,
      Capitalize: base_config_1.TYPE,
      Uncapitalize: base_config_1.TYPE,
      ThisType: base_config_1.TYPE,
      WeakKeyTypes: base_config_1.TYPE,
      WeakKey: base_config_1.TYPE,
      ArrayBuffer: base_config_1.TYPE_VALUE,
      ArrayBufferTypes: base_config_1.TYPE,
      ArrayBufferLike: base_config_1.TYPE,
      ArrayBufferConstructor: base_config_1.TYPE,
      ArrayBufferView: base_config_1.TYPE,
      DataView: base_config_1.TYPE_VALUE,
      DataViewConstructor: base_config_1.TYPE,
      Int8Array: base_config_1.TYPE_VALUE,
      Int8ArrayConstructor: base_config_1.TYPE,
      Uint8Array: base_config_1.TYPE_VALUE,
      Uint8ArrayConstructor: base_config_1.TYPE,
      Uint8ClampedArray: base_config_1.TYPE_VALUE,
      Uint8ClampedArrayConstructor: base_config_1.TYPE,
      Int16Array: base_config_1.TYPE_VALUE,
      Int16ArrayConstructor: base_config_1.TYPE,
      Uint16Array: base_config_1.TYPE_VALUE,
      Uint16ArrayConstructor: base_config_1.TYPE,
      Int32Array: base_config_1.TYPE_VALUE,
      Int32ArrayConstructor: base_config_1.TYPE,
      Uint32Array: base_config_1.TYPE_VALUE,
      Uint32ArrayConstructor: base_config_1.TYPE,
      Float32Array: base_config_1.TYPE_VALUE,
      Float32ArrayConstructor: base_config_1.TYPE,
      Float64Array: base_config_1.TYPE_VALUE,
      Float64ArrayConstructor: base_config_1.TYPE,
      Intl: base_config_1.TYPE_VALUE
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.collection.js
var require_es2015_collection = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.collection.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2015_collection = void 0;
    var base_config_1 = require_base_config();
    exports.es2015_collection = {
      Map: base_config_1.TYPE_VALUE,
      MapConstructor: base_config_1.TYPE,
      ReadonlyMap: base_config_1.TYPE,
      WeakMap: base_config_1.TYPE_VALUE,
      WeakMapConstructor: base_config_1.TYPE,
      Set: base_config_1.TYPE_VALUE,
      SetConstructor: base_config_1.TYPE,
      ReadonlySet: base_config_1.TYPE,
      WeakSet: base_config_1.TYPE_VALUE,
      WeakSetConstructor: base_config_1.TYPE
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.core.js
var require_es2015_core = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.core.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2015_core = void 0;
    var base_config_1 = require_base_config();
    exports.es2015_core = {
      Array: base_config_1.TYPE,
      ArrayConstructor: base_config_1.TYPE,
      DateConstructor: base_config_1.TYPE,
      Function: base_config_1.TYPE,
      Math: base_config_1.TYPE,
      NumberConstructor: base_config_1.TYPE,
      ObjectConstructor: base_config_1.TYPE,
      ReadonlyArray: base_config_1.TYPE,
      RegExp: base_config_1.TYPE,
      RegExpConstructor: base_config_1.TYPE,
      String: base_config_1.TYPE,
      StringConstructor: base_config_1.TYPE
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.symbol.js
var require_es2015_symbol = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.symbol.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2015_symbol = void 0;
    var base_config_1 = require_base_config();
    exports.es2015_symbol = {
      SymbolConstructor: base_config_1.TYPE
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.iterable.js
var require_es2015_iterable = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.iterable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2015_iterable = void 0;
    var base_config_1 = require_base_config();
    var es2015_symbol_1 = require_es2015_symbol();
    exports.es2015_iterable = {
      ...es2015_symbol_1.es2015_symbol,
      SymbolConstructor: base_config_1.TYPE,
      IteratorYieldResult: base_config_1.TYPE,
      IteratorReturnResult: base_config_1.TYPE,
      IteratorResult: base_config_1.TYPE,
      Iterator: base_config_1.TYPE,
      Iterable: base_config_1.TYPE,
      IterableIterator: base_config_1.TYPE,
      Array: base_config_1.TYPE,
      ArrayConstructor: base_config_1.TYPE,
      ReadonlyArray: base_config_1.TYPE,
      IArguments: base_config_1.TYPE,
      Map: base_config_1.TYPE,
      ReadonlyMap: base_config_1.TYPE,
      MapConstructor: base_config_1.TYPE,
      WeakMap: base_config_1.TYPE,
      WeakMapConstructor: base_config_1.TYPE,
      Set: base_config_1.TYPE,
      ReadonlySet: base_config_1.TYPE,
      SetConstructor: base_config_1.TYPE,
      WeakSet: base_config_1.TYPE,
      WeakSetConstructor: base_config_1.TYPE,
      Promise: base_config_1.TYPE,
      PromiseConstructor: base_config_1.TYPE,
      String: base_config_1.TYPE,
      Int8Array: base_config_1.TYPE,
      Int8ArrayConstructor: base_config_1.TYPE,
      Uint8Array: base_config_1.TYPE,
      Uint8ArrayConstructor: base_config_1.TYPE,
      Uint8ClampedArray: base_config_1.TYPE,
      Uint8ClampedArrayConstructor: base_config_1.TYPE,
      Int16Array: base_config_1.TYPE,
      Int16ArrayConstructor: base_config_1.TYPE,
      Uint16Array: base_config_1.TYPE,
      Uint16ArrayConstructor: base_config_1.TYPE,
      Int32Array: base_config_1.TYPE,
      Int32ArrayConstructor: base_config_1.TYPE,
      Uint32Array: base_config_1.TYPE,
      Uint32ArrayConstructor: base_config_1.TYPE,
      Float32Array: base_config_1.TYPE,
      Float32ArrayConstructor: base_config_1.TYPE,
      Float64Array: base_config_1.TYPE,
      Float64ArrayConstructor: base_config_1.TYPE
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.generator.js
var require_es2015_generator = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.generator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2015_generator = void 0;
    var base_config_1 = require_base_config();
    var es2015_iterable_1 = require_es2015_iterable();
    exports.es2015_generator = {
      ...es2015_iterable_1.es2015_iterable,
      Generator: base_config_1.TYPE,
      GeneratorFunction: base_config_1.TYPE,
      GeneratorFunctionConstructor: base_config_1.TYPE
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.promise.js
var require_es2015_promise = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.promise.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2015_promise = void 0;
    var base_config_1 = require_base_config();
    exports.es2015_promise = {
      PromiseConstructor: base_config_1.TYPE
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.proxy.js
var require_es2015_proxy = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.proxy.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2015_proxy = void 0;
    var base_config_1 = require_base_config();
    exports.es2015_proxy = {
      ProxyHandler: base_config_1.TYPE,
      ProxyConstructor: base_config_1.TYPE
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.reflect.js
var require_es2015_reflect = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.reflect.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2015_reflect = void 0;
    var base_config_1 = require_base_config();
    exports.es2015_reflect = {
      Reflect: base_config_1.TYPE_VALUE
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.symbol.wellknown.js
var require_es2015_symbol_wellknown = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.symbol.wellknown.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2015_symbol_wellknown = void 0;
    var base_config_1 = require_base_config();
    var es2015_symbol_1 = require_es2015_symbol();
    exports.es2015_symbol_wellknown = {
      ...es2015_symbol_1.es2015_symbol,
      SymbolConstructor: base_config_1.TYPE,
      Symbol: base_config_1.TYPE,
      Array: base_config_1.TYPE,
      ReadonlyArray: base_config_1.TYPE,
      Date: base_config_1.TYPE,
      Map: base_config_1.TYPE,
      WeakMap: base_config_1.TYPE,
      Set: base_config_1.TYPE,
      WeakSet: base_config_1.TYPE,
      JSON: base_config_1.TYPE,
      Function: base_config_1.TYPE,
      GeneratorFunction: base_config_1.TYPE,
      Math: base_config_1.TYPE,
      Promise: base_config_1.TYPE,
      PromiseConstructor: base_config_1.TYPE,
      RegExp: base_config_1.TYPE,
      RegExpConstructor: base_config_1.TYPE,
      String: base_config_1.TYPE,
      ArrayBuffer: base_config_1.TYPE,
      DataView: base_config_1.TYPE,
      Int8Array: base_config_1.TYPE,
      Uint8Array: base_config_1.TYPE,
      Uint8ClampedArray: base_config_1.TYPE,
      Int16Array: base_config_1.TYPE,
      Uint16Array: base_config_1.TYPE,
      Int32Array: base_config_1.TYPE,
      Uint32Array: base_config_1.TYPE,
      Float32Array: base_config_1.TYPE,
      Float64Array: base_config_1.TYPE,
      ArrayConstructor: base_config_1.TYPE,
      MapConstructor: base_config_1.TYPE,
      SetConstructor: base_config_1.TYPE,
      ArrayBufferConstructor: base_config_1.TYPE
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es6.js
var require_es6 = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es6.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es6 = void 0;
    var es5_1 = require_es5();
    var es2015_collection_1 = require_es2015_collection();
    var es2015_core_1 = require_es2015_core();
    var es2015_generator_1 = require_es2015_generator();
    var es2015_iterable_1 = require_es2015_iterable();
    var es2015_promise_1 = require_es2015_promise();
    var es2015_proxy_1 = require_es2015_proxy();
    var es2015_reflect_1 = require_es2015_reflect();
    var es2015_symbol_1 = require_es2015_symbol();
    var es2015_symbol_wellknown_1 = require_es2015_symbol_wellknown();
    exports.es6 = {
      ...es5_1.es5,
      ...es2015_core_1.es2015_core,
      ...es2015_collection_1.es2015_collection,
      ...es2015_iterable_1.es2015_iterable,
      ...es2015_generator_1.es2015_generator,
      ...es2015_promise_1.es2015_promise,
      ...es2015_proxy_1.es2015_proxy,
      ...es2015_reflect_1.es2015_reflect,
      ...es2015_symbol_1.es2015_symbol,
      ...es2015_symbol_wellknown_1.es2015_symbol_wellknown
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.js
var require_es2015 = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2015.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2015 = void 0;
    var es5_1 = require_es5();
    var es2015_collection_1 = require_es2015_collection();
    var es2015_core_1 = require_es2015_core();
    var es2015_generator_1 = require_es2015_generator();
    var es2015_iterable_1 = require_es2015_iterable();
    var es2015_promise_1 = require_es2015_promise();
    var es2015_proxy_1 = require_es2015_proxy();
    var es2015_reflect_1 = require_es2015_reflect();
    var es2015_symbol_1 = require_es2015_symbol();
    var es2015_symbol_wellknown_1 = require_es2015_symbol_wellknown();
    exports.es2015 = {
      ...es5_1.es5,
      ...es2015_core_1.es2015_core,
      ...es2015_collection_1.es2015_collection,
      ...es2015_iterable_1.es2015_iterable,
      ...es2015_generator_1.es2015_generator,
      ...es2015_promise_1.es2015_promise,
      ...es2015_proxy_1.es2015_proxy,
      ...es2015_reflect_1.es2015_reflect,
      ...es2015_symbol_1.es2015_symbol,
      ...es2015_symbol_wellknown_1.es2015_symbol_wellknown
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2016.array.include.js
var require_es2016_array_include = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2016.array.include.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2016_array_include = void 0;
    var base_config_1 = require_base_config();
    exports.es2016_array_include = {
      Array: base_config_1.TYPE,
      ReadonlyArray: base_config_1.TYPE,
      Int8Array: base_config_1.TYPE,
      Uint8Array: base_config_1.TYPE,
      Uint8ClampedArray: base_config_1.TYPE,
      Int16Array: base_config_1.TYPE,
      Uint16Array: base_config_1.TYPE,
      Int32Array: base_config_1.TYPE,
      Uint32Array: base_config_1.TYPE,
      Float32Array: base_config_1.TYPE,
      Float64Array: base_config_1.TYPE
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es7.js
var require_es7 = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es7.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es7 = void 0;
    var es2015_1 = require_es2015();
    var es2016_array_include_1 = require_es2016_array_include();
    exports.es7 = {
      ...es2015_1.es2015,
      ...es2016_array_include_1.es2016_array_include
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2016.js
var require_es2016 = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2016.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2016 = void 0;
    var es2015_1 = require_es2015();
    var es2016_array_include_1 = require_es2016_array_include();
    exports.es2016 = {
      ...es2015_1.es2015,
      ...es2016_array_include_1.es2016_array_include
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/scripthost.js
var require_scripthost = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/scripthost.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.scripthost = void 0;
    var base_config_1 = require_base_config();
    exports.scripthost = {
      ActiveXObject: base_config_1.TYPE_VALUE,
      ITextWriter: base_config_1.TYPE,
      TextStreamBase: base_config_1.TYPE,
      TextStreamWriter: base_config_1.TYPE,
      TextStreamReader: base_config_1.TYPE,
      SafeArray: base_config_1.TYPE_VALUE,
      Enumerator: base_config_1.TYPE_VALUE,
      EnumeratorConstructor: base_config_1.TYPE,
      VBArray: base_config_1.TYPE_VALUE,
      VBArrayConstructor: base_config_1.TYPE,
      VarDate: base_config_1.TYPE_VALUE,
      DateConstructor: base_config_1.TYPE,
      Date: base_config_1.TYPE
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/webworker.importscripts.js
var require_webworker_importscripts = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/webworker.importscripts.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.webworker_importscripts = void 0;
    exports.webworker_importscripts = {};
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2016.full.js
var require_es2016_full = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2016.full.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2016_full = void 0;
    var dom_1 = require_dom();
    var dom_iterable_1 = require_dom_iterable();
    var es2016_1 = require_es2016();
    var scripthost_1 = require_scripthost();
    var webworker_importscripts_1 = require_webworker_importscripts();
    exports.es2016_full = {
      ...es2016_1.es2016,
      ...dom_1.dom,
      ...webworker_importscripts_1.webworker_importscripts,
      ...scripthost_1.scripthost,
      ...dom_iterable_1.dom_iterable
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2017.date.js
var require_es2017_date = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2017.date.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2017_date = void 0;
    var base_config_1 = require_base_config();
    exports.es2017_date = {
      DateConstructor: base_config_1.TYPE
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2017.intl.js
var require_es2017_intl = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2017.intl.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2017_intl = void 0;
    var base_config_1 = require_base_config();
    exports.es2017_intl = {
      Intl: base_config_1.TYPE_VALUE
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2017.object.js
var require_es2017_object = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2017.object.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2017_object = void 0;
    var base_config_1 = require_base_config();
    exports.es2017_object = {
      ObjectConstructor: base_config_1.TYPE
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2017.sharedmemory.js
var require_es2017_sharedmemory = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2017.sharedmemory.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2017_sharedmemory = void 0;
    var base_config_1 = require_base_config();
    var es2015_symbol_1 = require_es2015_symbol();
    var es2015_symbol_wellknown_1 = require_es2015_symbol_wellknown();
    exports.es2017_sharedmemory = {
      ...es2015_symbol_1.es2015_symbol,
      ...es2015_symbol_wellknown_1.es2015_symbol_wellknown,
      SharedArrayBuffer: base_config_1.TYPE_VALUE,
      SharedArrayBufferConstructor: base_config_1.TYPE,
      ArrayBufferTypes: base_config_1.TYPE,
      Atomics: base_config_1.TYPE_VALUE
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2017.string.js
var require_es2017_string = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2017.string.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2017_string = void 0;
    var base_config_1 = require_base_config();
    exports.es2017_string = {
      String: base_config_1.TYPE
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2017.typedarrays.js
var require_es2017_typedarrays = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2017.typedarrays.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2017_typedarrays = void 0;
    var base_config_1 = require_base_config();
    exports.es2017_typedarrays = {
      Int8ArrayConstructor: base_config_1.TYPE,
      Uint8ArrayConstructor: base_config_1.TYPE,
      Uint8ClampedArrayConstructor: base_config_1.TYPE,
      Int16ArrayConstructor: base_config_1.TYPE,
      Uint16ArrayConstructor: base_config_1.TYPE,
      Int32ArrayConstructor: base_config_1.TYPE,
      Uint32ArrayConstructor: base_config_1.TYPE,
      Float32ArrayConstructor: base_config_1.TYPE,
      Float64ArrayConstructor: base_config_1.TYPE
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2017.js
var require_es2017 = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2017.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2017 = void 0;
    var es2016_1 = require_es2016();
    var es2017_date_1 = require_es2017_date();
    var es2017_intl_1 = require_es2017_intl();
    var es2017_object_1 = require_es2017_object();
    var es2017_sharedmemory_1 = require_es2017_sharedmemory();
    var es2017_string_1 = require_es2017_string();
    var es2017_typedarrays_1 = require_es2017_typedarrays();
    exports.es2017 = {
      ...es2016_1.es2016,
      ...es2017_object_1.es2017_object,
      ...es2017_sharedmemory_1.es2017_sharedmemory,
      ...es2017_string_1.es2017_string,
      ...es2017_intl_1.es2017_intl,
      ...es2017_typedarrays_1.es2017_typedarrays,
      ...es2017_date_1.es2017_date
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2017.full.js
var require_es2017_full = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2017.full.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2017_full = void 0;
    var dom_1 = require_dom();
    var dom_iterable_1 = require_dom_iterable();
    var es2017_1 = require_es2017();
    var scripthost_1 = require_scripthost();
    var webworker_importscripts_1 = require_webworker_importscripts();
    exports.es2017_full = {
      ...es2017_1.es2017,
      ...dom_1.dom,
      ...webworker_importscripts_1.webworker_importscripts,
      ...scripthost_1.scripthost,
      ...dom_iterable_1.dom_iterable
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2018.asynciterable.js
var require_es2018_asynciterable = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2018.asynciterable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2018_asynciterable = void 0;
    var base_config_1 = require_base_config();
    var es2015_iterable_1 = require_es2015_iterable();
    var es2015_symbol_1 = require_es2015_symbol();
    exports.es2018_asynciterable = {
      ...es2015_symbol_1.es2015_symbol,
      ...es2015_iterable_1.es2015_iterable,
      SymbolConstructor: base_config_1.TYPE,
      AsyncIterator: base_config_1.TYPE,
      AsyncIterable: base_config_1.TYPE,
      AsyncIterableIterator: base_config_1.TYPE
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2018.asyncgenerator.js
var require_es2018_asyncgenerator = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2018.asyncgenerator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2018_asyncgenerator = void 0;
    var base_config_1 = require_base_config();
    var es2018_asynciterable_1 = require_es2018_asynciterable();
    exports.es2018_asyncgenerator = {
      ...es2018_asynciterable_1.es2018_asynciterable,
      AsyncGenerator: base_config_1.TYPE,
      AsyncGeneratorFunction: base_config_1.TYPE,
      AsyncGeneratorFunctionConstructor: base_config_1.TYPE
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2018.intl.js
var require_es2018_intl = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2018.intl.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2018_intl = void 0;
    var base_config_1 = require_base_config();
    exports.es2018_intl = {
      Intl: base_config_1.TYPE_VALUE
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2018.promise.js
var require_es2018_promise = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2018.promise.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2018_promise = void 0;
    var base_config_1 = require_base_config();
    exports.es2018_promise = {
      Promise: base_config_1.TYPE
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2018.regexp.js
var require_es2018_regexp = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2018.regexp.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2018_regexp = void 0;
    var base_config_1 = require_base_config();
    exports.es2018_regexp = {
      RegExpMatchArray: base_config_1.TYPE,
      RegExpExecArray: base_config_1.TYPE,
      RegExp: base_config_1.TYPE
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2018.js
var require_es2018 = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2018.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2018 = void 0;
    var es2017_1 = require_es2017();
    var es2018_asyncgenerator_1 = require_es2018_asyncgenerator();
    var es2018_asynciterable_1 = require_es2018_asynciterable();
    var es2018_intl_1 = require_es2018_intl();
    var es2018_promise_1 = require_es2018_promise();
    var es2018_regexp_1 = require_es2018_regexp();
    exports.es2018 = {
      ...es2017_1.es2017,
      ...es2018_asynciterable_1.es2018_asynciterable,
      ...es2018_asyncgenerator_1.es2018_asyncgenerator,
      ...es2018_promise_1.es2018_promise,
      ...es2018_regexp_1.es2018_regexp,
      ...es2018_intl_1.es2018_intl
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2018.full.js
var require_es2018_full = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2018.full.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2018_full = void 0;
    var dom_1 = require_dom();
    var dom_iterable_1 = require_dom_iterable();
    var es2018_1 = require_es2018();
    var scripthost_1 = require_scripthost();
    var webworker_importscripts_1 = require_webworker_importscripts();
    exports.es2018_full = {
      ...es2018_1.es2018,
      ...dom_1.dom,
      ...webworker_importscripts_1.webworker_importscripts,
      ...scripthost_1.scripthost,
      ...dom_iterable_1.dom_iterable
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2019.array.js
var require_es2019_array = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2019.array.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2019_array = void 0;
    var base_config_1 = require_base_config();
    exports.es2019_array = {
      FlatArray: base_config_1.TYPE,
      ReadonlyArray: base_config_1.TYPE,
      Array: base_config_1.TYPE
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2019.intl.js
var require_es2019_intl = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2019.intl.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2019_intl = void 0;
    var base_config_1 = require_base_config();
    exports.es2019_intl = {
      Intl: base_config_1.TYPE_VALUE
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2019.object.js
var require_es2019_object = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2019.object.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2019_object = void 0;
    var base_config_1 = require_base_config();
    var es2015_iterable_1 = require_es2015_iterable();
    exports.es2019_object = {
      ...es2015_iterable_1.es2015_iterable,
      ObjectConstructor: base_config_1.TYPE
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2019.string.js
var require_es2019_string = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2019.string.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2019_string = void 0;
    var base_config_1 = require_base_config();
    exports.es2019_string = {
      String: base_config_1.TYPE
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2019.symbol.js
var require_es2019_symbol = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2019.symbol.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2019_symbol = void 0;
    var base_config_1 = require_base_config();
    exports.es2019_symbol = {
      Symbol: base_config_1.TYPE
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2019.js
var require_es2019 = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2019.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2019 = void 0;
    var es2018_1 = require_es2018();
    var es2019_array_1 = require_es2019_array();
    var es2019_intl_1 = require_es2019_intl();
    var es2019_object_1 = require_es2019_object();
    var es2019_string_1 = require_es2019_string();
    var es2019_symbol_1 = require_es2019_symbol();
    exports.es2019 = {
      ...es2018_1.es2018,
      ...es2019_array_1.es2019_array,
      ...es2019_object_1.es2019_object,
      ...es2019_string_1.es2019_string,
      ...es2019_symbol_1.es2019_symbol,
      ...es2019_intl_1.es2019_intl
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2019.full.js
var require_es2019_full = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2019.full.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2019_full = void 0;
    var dom_1 = require_dom();
    var dom_iterable_1 = require_dom_iterable();
    var es2019_1 = require_es2019();
    var scripthost_1 = require_scripthost();
    var webworker_importscripts_1 = require_webworker_importscripts();
    exports.es2019_full = {
      ...es2019_1.es2019,
      ...dom_1.dom,
      ...webworker_importscripts_1.webworker_importscripts,
      ...scripthost_1.scripthost,
      ...dom_iterable_1.dom_iterable
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.intl.js
var require_es2020_intl = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.intl.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2020_intl = void 0;
    var base_config_1 = require_base_config();
    var es2018_intl_1 = require_es2018_intl();
    exports.es2020_intl = {
      ...es2018_intl_1.es2018_intl,
      Intl: base_config_1.TYPE_VALUE
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.bigint.js
var require_es2020_bigint = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.bigint.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2020_bigint = void 0;
    var base_config_1 = require_base_config();
    var es2020_intl_1 = require_es2020_intl();
    exports.es2020_bigint = {
      ...es2020_intl_1.es2020_intl,
      BigIntToLocaleStringOptions: base_config_1.TYPE,
      BigInt: base_config_1.TYPE_VALUE,
      BigIntConstructor: base_config_1.TYPE,
      BigInt64Array: base_config_1.TYPE_VALUE,
      BigInt64ArrayConstructor: base_config_1.TYPE,
      BigUint64Array: base_config_1.TYPE_VALUE,
      BigUint64ArrayConstructor: base_config_1.TYPE,
      DataView: base_config_1.TYPE,
      Intl: base_config_1.TYPE_VALUE
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.date.js
var require_es2020_date = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.date.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2020_date = void 0;
    var base_config_1 = require_base_config();
    var es2020_intl_1 = require_es2020_intl();
    exports.es2020_date = {
      ...es2020_intl_1.es2020_intl,
      Date: base_config_1.TYPE
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.number.js
var require_es2020_number = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.number.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2020_number = void 0;
    var base_config_1 = require_base_config();
    var es2020_intl_1 = require_es2020_intl();
    exports.es2020_number = {
      ...es2020_intl_1.es2020_intl,
      Number: base_config_1.TYPE
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.promise.js
var require_es2020_promise = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.promise.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2020_promise = void 0;
    var base_config_1 = require_base_config();
    exports.es2020_promise = {
      PromiseFulfilledResult: base_config_1.TYPE,
      PromiseRejectedResult: base_config_1.TYPE,
      PromiseSettledResult: base_config_1.TYPE,
      PromiseConstructor: base_config_1.TYPE
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.sharedmemory.js
var require_es2020_sharedmemory = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.sharedmemory.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2020_sharedmemory = void 0;
    var base_config_1 = require_base_config();
    exports.es2020_sharedmemory = {
      Atomics: base_config_1.TYPE
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.string.js
var require_es2020_string = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.string.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2020_string = void 0;
    var base_config_1 = require_base_config();
    var es2015_iterable_1 = require_es2015_iterable();
    exports.es2020_string = {
      ...es2015_iterable_1.es2015_iterable,
      String: base_config_1.TYPE
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.symbol.wellknown.js
var require_es2020_symbol_wellknown = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.symbol.wellknown.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2020_symbol_wellknown = void 0;
    var base_config_1 = require_base_config();
    var es2015_iterable_1 = require_es2015_iterable();
    var es2015_symbol_1 = require_es2015_symbol();
    exports.es2020_symbol_wellknown = {
      ...es2015_iterable_1.es2015_iterable,
      ...es2015_symbol_1.es2015_symbol,
      SymbolConstructor: base_config_1.TYPE,
      RegExp: base_config_1.TYPE
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.js
var require_es2020 = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2020 = void 0;
    var es2019_1 = require_es2019();
    var es2020_bigint_1 = require_es2020_bigint();
    var es2020_date_1 = require_es2020_date();
    var es2020_intl_1 = require_es2020_intl();
    var es2020_number_1 = require_es2020_number();
    var es2020_promise_1 = require_es2020_promise();
    var es2020_sharedmemory_1 = require_es2020_sharedmemory();
    var es2020_string_1 = require_es2020_string();
    var es2020_symbol_wellknown_1 = require_es2020_symbol_wellknown();
    exports.es2020 = {
      ...es2019_1.es2019,
      ...es2020_bigint_1.es2020_bigint,
      ...es2020_date_1.es2020_date,
      ...es2020_number_1.es2020_number,
      ...es2020_promise_1.es2020_promise,
      ...es2020_sharedmemory_1.es2020_sharedmemory,
      ...es2020_string_1.es2020_string,
      ...es2020_symbol_wellknown_1.es2020_symbol_wellknown,
      ...es2020_intl_1.es2020_intl
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.full.js
var require_es2020_full = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2020.full.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2020_full = void 0;
    var dom_1 = require_dom();
    var dom_iterable_1 = require_dom_iterable();
    var es2020_1 = require_es2020();
    var scripthost_1 = require_scripthost();
    var webworker_importscripts_1 = require_webworker_importscripts();
    exports.es2020_full = {
      ...es2020_1.es2020,
      ...dom_1.dom,
      ...webworker_importscripts_1.webworker_importscripts,
      ...scripthost_1.scripthost,
      ...dom_iterable_1.dom_iterable
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2021.intl.js
var require_es2021_intl = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2021.intl.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2021_intl = void 0;
    var base_config_1 = require_base_config();
    exports.es2021_intl = {
      Intl: base_config_1.TYPE_VALUE
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2021.promise.js
var require_es2021_promise = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2021.promise.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2021_promise = void 0;
    var base_config_1 = require_base_config();
    exports.es2021_promise = {
      AggregateError: base_config_1.TYPE_VALUE,
      AggregateErrorConstructor: base_config_1.TYPE,
      PromiseConstructor: base_config_1.TYPE
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2021.string.js
var require_es2021_string = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2021.string.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2021_string = void 0;
    var base_config_1 = require_base_config();
    exports.es2021_string = {
      String: base_config_1.TYPE
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2021.weakref.js
var require_es2021_weakref = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2021.weakref.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2021_weakref = void 0;
    var base_config_1 = require_base_config();
    exports.es2021_weakref = {
      WeakRef: base_config_1.TYPE_VALUE,
      WeakRefConstructor: base_config_1.TYPE,
      FinalizationRegistry: base_config_1.TYPE_VALUE,
      FinalizationRegistryConstructor: base_config_1.TYPE
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2021.js
var require_es2021 = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2021.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2021 = void 0;
    var es2020_1 = require_es2020();
    var es2021_intl_1 = require_es2021_intl();
    var es2021_promise_1 = require_es2021_promise();
    var es2021_string_1 = require_es2021_string();
    var es2021_weakref_1 = require_es2021_weakref();
    exports.es2021 = {
      ...es2020_1.es2020,
      ...es2021_promise_1.es2021_promise,
      ...es2021_string_1.es2021_string,
      ...es2021_weakref_1.es2021_weakref,
      ...es2021_intl_1.es2021_intl
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2021.full.js
var require_es2021_full = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2021.full.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2021_full = void 0;
    var dom_1 = require_dom();
    var dom_iterable_1 = require_dom_iterable();
    var es2021_1 = require_es2021();
    var scripthost_1 = require_scripthost();
    var webworker_importscripts_1 = require_webworker_importscripts();
    exports.es2021_full = {
      ...es2021_1.es2021,
      ...dom_1.dom,
      ...webworker_importscripts_1.webworker_importscripts,
      ...scripthost_1.scripthost,
      ...dom_iterable_1.dom_iterable
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2022.array.js
var require_es2022_array = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2022.array.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2022_array = void 0;
    var base_config_1 = require_base_config();
    exports.es2022_array = {
      Array: base_config_1.TYPE,
      ReadonlyArray: base_config_1.TYPE,
      Int8Array: base_config_1.TYPE,
      Uint8Array: base_config_1.TYPE,
      Uint8ClampedArray: base_config_1.TYPE,
      Int16Array: base_config_1.TYPE,
      Uint16Array: base_config_1.TYPE,
      Int32Array: base_config_1.TYPE,
      Uint32Array: base_config_1.TYPE,
      Float32Array: base_config_1.TYPE,
      Float64Array: base_config_1.TYPE,
      BigInt64Array: base_config_1.TYPE,
      BigUint64Array: base_config_1.TYPE
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2022.error.js
var require_es2022_error = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2022.error.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2022_error = void 0;
    var base_config_1 = require_base_config();
    exports.es2022_error = {
      ErrorOptions: base_config_1.TYPE,
      Error: base_config_1.TYPE,
      ErrorConstructor: base_config_1.TYPE,
      EvalErrorConstructor: base_config_1.TYPE,
      RangeErrorConstructor: base_config_1.TYPE,
      ReferenceErrorConstructor: base_config_1.TYPE,
      SyntaxErrorConstructor: base_config_1.TYPE,
      TypeErrorConstructor: base_config_1.TYPE,
      URIErrorConstructor: base_config_1.TYPE,
      AggregateErrorConstructor: base_config_1.TYPE
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2022.intl.js
var require_es2022_intl = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2022.intl.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2022_intl = void 0;
    var base_config_1 = require_base_config();
    exports.es2022_intl = {
      Intl: base_config_1.TYPE_VALUE
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2022.object.js
var require_es2022_object = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2022.object.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2022_object = void 0;
    var base_config_1 = require_base_config();
    exports.es2022_object = {
      ObjectConstructor: base_config_1.TYPE
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2022.regexp.js
var require_es2022_regexp = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2022.regexp.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2022_regexp = void 0;
    var base_config_1 = require_base_config();
    exports.es2022_regexp = {
      RegExpMatchArray: base_config_1.TYPE,
      RegExpExecArray: base_config_1.TYPE,
      RegExpIndicesArray: base_config_1.TYPE,
      RegExp: base_config_1.TYPE
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2022.sharedmemory.js
var require_es2022_sharedmemory = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2022.sharedmemory.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2022_sharedmemory = void 0;
    var base_config_1 = require_base_config();
    exports.es2022_sharedmemory = {
      Atomics: base_config_1.TYPE
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2022.string.js
var require_es2022_string = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2022.string.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2022_string = void 0;
    var base_config_1 = require_base_config();
    exports.es2022_string = {
      String: base_config_1.TYPE
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2022.js
var require_es2022 = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2022.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2022 = void 0;
    var es2021_1 = require_es2021();
    var es2022_array_1 = require_es2022_array();
    var es2022_error_1 = require_es2022_error();
    var es2022_intl_1 = require_es2022_intl();
    var es2022_object_1 = require_es2022_object();
    var es2022_regexp_1 = require_es2022_regexp();
    var es2022_sharedmemory_1 = require_es2022_sharedmemory();
    var es2022_string_1 = require_es2022_string();
    exports.es2022 = {
      ...es2021_1.es2021,
      ...es2022_array_1.es2022_array,
      ...es2022_error_1.es2022_error,
      ...es2022_intl_1.es2022_intl,
      ...es2022_object_1.es2022_object,
      ...es2022_sharedmemory_1.es2022_sharedmemory,
      ...es2022_string_1.es2022_string,
      ...es2022_regexp_1.es2022_regexp
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2022.full.js
var require_es2022_full = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2022.full.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2022_full = void 0;
    var dom_1 = require_dom();
    var dom_iterable_1 = require_dom_iterable();
    var es2022_1 = require_es2022();
    var scripthost_1 = require_scripthost();
    var webworker_importscripts_1 = require_webworker_importscripts();
    exports.es2022_full = {
      ...es2022_1.es2022,
      ...dom_1.dom,
      ...webworker_importscripts_1.webworker_importscripts,
      ...scripthost_1.scripthost,
      ...dom_iterable_1.dom_iterable
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2023.array.js
var require_es2023_array = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2023.array.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2023_array = void 0;
    var base_config_1 = require_base_config();
    exports.es2023_array = {
      Array: base_config_1.TYPE,
      ReadonlyArray: base_config_1.TYPE,
      Int8Array: base_config_1.TYPE,
      Uint8Array: base_config_1.TYPE,
      Uint8ClampedArray: base_config_1.TYPE,
      Int16Array: base_config_1.TYPE,
      Uint16Array: base_config_1.TYPE,
      Int32Array: base_config_1.TYPE,
      Uint32Array: base_config_1.TYPE,
      Float32Array: base_config_1.TYPE,
      Float64Array: base_config_1.TYPE,
      BigInt64Array: base_config_1.TYPE,
      BigUint64Array: base_config_1.TYPE
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2023.collection.js
var require_es2023_collection = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2023.collection.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2023_collection = void 0;
    var base_config_1 = require_base_config();
    exports.es2023_collection = {
      WeakKeyTypes: base_config_1.TYPE
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2023.js
var require_es2023 = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2023.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2023 = void 0;
    var es2022_1 = require_es2022();
    var es2023_array_1 = require_es2023_array();
    var es2023_collection_1 = require_es2023_collection();
    exports.es2023 = {
      ...es2022_1.es2022,
      ...es2023_array_1.es2023_array,
      ...es2023_collection_1.es2023_collection
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/es2023.full.js
var require_es2023_full = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/es2023.full.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.es2023_full = void 0;
    var dom_1 = require_dom();
    var dom_iterable_1 = require_dom_iterable();
    var es2023_1 = require_es2023();
    var scripthost_1 = require_scripthost();
    var webworker_importscripts_1 = require_webworker_importscripts();
    exports.es2023_full = {
      ...es2023_1.es2023,
      ...dom_1.dom,
      ...webworker_importscripts_1.webworker_importscripts,
      ...scripthost_1.scripthost,
      ...dom_iterable_1.dom_iterable
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.decorators.js
var require_esnext_decorators = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.decorators.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.esnext_decorators = void 0;
    var base_config_1 = require_base_config();
    var decorators_1 = require_decorators();
    var es2015_symbol_1 = require_es2015_symbol();
    exports.esnext_decorators = {
      ...es2015_symbol_1.es2015_symbol,
      ...decorators_1.decorators,
      SymbolConstructor: base_config_1.TYPE,
      Function: base_config_1.TYPE
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.disposable.js
var require_esnext_disposable = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.disposable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.esnext_disposable = void 0;
    var base_config_1 = require_base_config();
    var es2015_symbol_1 = require_es2015_symbol();
    exports.esnext_disposable = {
      ...es2015_symbol_1.es2015_symbol,
      SymbolConstructor: base_config_1.TYPE,
      Disposable: base_config_1.TYPE,
      AsyncDisposable: base_config_1.TYPE,
      SuppressedError: base_config_1.TYPE_VALUE,
      SuppressedErrorConstructor: base_config_1.TYPE,
      DisposableStack: base_config_1.TYPE_VALUE,
      DisposableStackConstructor: base_config_1.TYPE,
      AsyncDisposableStack: base_config_1.TYPE_VALUE,
      AsyncDisposableStackConstructor: base_config_1.TYPE
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.intl.js
var require_esnext_intl = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.intl.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.esnext_intl = void 0;
    var base_config_1 = require_base_config();
    exports.esnext_intl = {
      Intl: base_config_1.TYPE_VALUE
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.js
var require_esnext = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.esnext = void 0;
    var es2023_1 = require_es2023();
    var esnext_decorators_1 = require_esnext_decorators();
    var esnext_disposable_1 = require_esnext_disposable();
    var esnext_intl_1 = require_esnext_intl();
    exports.esnext = {
      ...es2023_1.es2023,
      ...esnext_intl_1.esnext_intl,
      ...esnext_decorators_1.esnext_decorators,
      ...esnext_disposable_1.esnext_disposable
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.array.js
var require_esnext_array = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.array.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.esnext_array = void 0;
    var base_config_1 = require_base_config();
    exports.esnext_array = {
      Array: base_config_1.TYPE,
      ReadonlyArray: base_config_1.TYPE,
      Int8Array: base_config_1.TYPE,
      Uint8Array: base_config_1.TYPE,
      Uint8ClampedArray: base_config_1.TYPE,
      Int16Array: base_config_1.TYPE,
      Uint16Array: base_config_1.TYPE,
      Int32Array: base_config_1.TYPE,
      Uint32Array: base_config_1.TYPE,
      Float32Array: base_config_1.TYPE,
      Float64Array: base_config_1.TYPE,
      BigInt64Array: base_config_1.TYPE,
      BigUint64Array: base_config_1.TYPE
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.asynciterable.js
var require_esnext_asynciterable = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.asynciterable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.esnext_asynciterable = void 0;
    var base_config_1 = require_base_config();
    var es2015_iterable_1 = require_es2015_iterable();
    var es2015_symbol_1 = require_es2015_symbol();
    exports.esnext_asynciterable = {
      ...es2015_symbol_1.es2015_symbol,
      ...es2015_iterable_1.es2015_iterable,
      SymbolConstructor: base_config_1.TYPE,
      AsyncIterator: base_config_1.TYPE,
      AsyncIterable: base_config_1.TYPE,
      AsyncIterableIterator: base_config_1.TYPE
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.bigint.js
var require_esnext_bigint = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.bigint.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.esnext_bigint = void 0;
    var base_config_1 = require_base_config();
    var es2020_intl_1 = require_es2020_intl();
    exports.esnext_bigint = {
      ...es2020_intl_1.es2020_intl,
      BigIntToLocaleStringOptions: base_config_1.TYPE,
      BigInt: base_config_1.TYPE_VALUE,
      BigIntConstructor: base_config_1.TYPE,
      BigInt64Array: base_config_1.TYPE_VALUE,
      BigInt64ArrayConstructor: base_config_1.TYPE,
      BigUint64Array: base_config_1.TYPE_VALUE,
      BigUint64ArrayConstructor: base_config_1.TYPE,
      DataView: base_config_1.TYPE,
      Intl: base_config_1.TYPE_VALUE
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.collection.js
var require_esnext_collection = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.collection.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.esnext_collection = void 0;
    var base_config_1 = require_base_config();
    exports.esnext_collection = {
      WeakKeyTypes: base_config_1.TYPE
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.full.js
var require_esnext_full = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.full.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.esnext_full = void 0;
    var dom_1 = require_dom();
    var dom_iterable_1 = require_dom_iterable();
    var esnext_1 = require_esnext();
    var scripthost_1 = require_scripthost();
    var webworker_importscripts_1 = require_webworker_importscripts();
    exports.esnext_full = {
      ...esnext_1.esnext,
      ...dom_1.dom,
      ...webworker_importscripts_1.webworker_importscripts,
      ...scripthost_1.scripthost,
      ...dom_iterable_1.dom_iterable
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.promise.js
var require_esnext_promise = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.promise.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.esnext_promise = void 0;
    var base_config_1 = require_base_config();
    exports.esnext_promise = {
      AggregateError: base_config_1.TYPE_VALUE,
      AggregateErrorConstructor: base_config_1.TYPE,
      PromiseConstructor: base_config_1.TYPE
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.string.js
var require_esnext_string = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.string.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.esnext_string = void 0;
    var base_config_1 = require_base_config();
    exports.esnext_string = {
      String: base_config_1.TYPE
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.symbol.js
var require_esnext_symbol = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.symbol.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.esnext_symbol = void 0;
    var base_config_1 = require_base_config();
    exports.esnext_symbol = {
      Symbol: base_config_1.TYPE
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.weakref.js
var require_esnext_weakref = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/esnext.weakref.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.esnext_weakref = void 0;
    var base_config_1 = require_base_config();
    exports.esnext_weakref = {
      WeakRef: base_config_1.TYPE_VALUE,
      WeakRefConstructor: base_config_1.TYPE,
      FinalizationRegistry: base_config_1.TYPE_VALUE,
      FinalizationRegistryConstructor: base_config_1.TYPE
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/lib.js
var require_lib2 = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/lib.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.lib = void 0;
    var dom_1 = require_dom();
    var es5_1 = require_es5();
    var scripthost_1 = require_scripthost();
    var webworker_importscripts_1 = require_webworker_importscripts();
    exports.lib = {
      ...es5_1.es5,
      ...dom_1.dom,
      ...webworker_importscripts_1.webworker_importscripts,
      ...scripthost_1.scripthost
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/webworker.js
var require_webworker = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/webworker.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.webworker = void 0;
    var base_config_1 = require_base_config();
    exports.webworker = {
      AddEventListenerOptions: base_config_1.TYPE,
      AesCbcParams: base_config_1.TYPE,
      AesCtrParams: base_config_1.TYPE,
      AesDerivedKeyParams: base_config_1.TYPE,
      AesGcmParams: base_config_1.TYPE,
      AesKeyAlgorithm: base_config_1.TYPE,
      AesKeyGenParams: base_config_1.TYPE,
      Algorithm: base_config_1.TYPE,
      AudioConfiguration: base_config_1.TYPE,
      AvcEncoderConfig: base_config_1.TYPE,
      BlobPropertyBag: base_config_1.TYPE,
      CSSMatrixComponentOptions: base_config_1.TYPE,
      CSSNumericType: base_config_1.TYPE,
      CacheQueryOptions: base_config_1.TYPE,
      ClientQueryOptions: base_config_1.TYPE,
      CloseEventInit: base_config_1.TYPE,
      CryptoKeyPair: base_config_1.TYPE,
      CustomEventInit: base_config_1.TYPE,
      DOMMatrix2DInit: base_config_1.TYPE,
      DOMMatrixInit: base_config_1.TYPE,
      DOMPointInit: base_config_1.TYPE,
      DOMQuadInit: base_config_1.TYPE,
      DOMRectInit: base_config_1.TYPE,
      EcKeyGenParams: base_config_1.TYPE,
      EcKeyImportParams: base_config_1.TYPE,
      EcdhKeyDeriveParams: base_config_1.TYPE,
      EcdsaParams: base_config_1.TYPE,
      EncodedVideoChunkInit: base_config_1.TYPE,
      EncodedVideoChunkMetadata: base_config_1.TYPE,
      ErrorEventInit: base_config_1.TYPE,
      EventInit: base_config_1.TYPE,
      EventListenerOptions: base_config_1.TYPE,
      EventSourceInit: base_config_1.TYPE,
      ExtendableEventInit: base_config_1.TYPE,
      ExtendableMessageEventInit: base_config_1.TYPE,
      FetchEventInit: base_config_1.TYPE,
      FilePropertyBag: base_config_1.TYPE,
      FileSystemCreateWritableOptions: base_config_1.TYPE,
      FileSystemGetDirectoryOptions: base_config_1.TYPE,
      FileSystemGetFileOptions: base_config_1.TYPE,
      FileSystemReadWriteOptions: base_config_1.TYPE,
      FileSystemRemoveOptions: base_config_1.TYPE,
      FontFaceDescriptors: base_config_1.TYPE,
      FontFaceSetLoadEventInit: base_config_1.TYPE,
      GetNotificationOptions: base_config_1.TYPE,
      HkdfParams: base_config_1.TYPE,
      HmacImportParams: base_config_1.TYPE,
      HmacKeyGenParams: base_config_1.TYPE,
      IDBDatabaseInfo: base_config_1.TYPE,
      IDBIndexParameters: base_config_1.TYPE,
      IDBObjectStoreParameters: base_config_1.TYPE,
      IDBTransactionOptions: base_config_1.TYPE,
      IDBVersionChangeEventInit: base_config_1.TYPE,
      ImageBitmapOptions: base_config_1.TYPE,
      ImageBitmapRenderingContextSettings: base_config_1.TYPE,
      ImageDataSettings: base_config_1.TYPE,
      ImageEncodeOptions: base_config_1.TYPE,
      ImportMeta: base_config_1.TYPE,
      JsonWebKey: base_config_1.TYPE,
      KeyAlgorithm: base_config_1.TYPE,
      LockInfo: base_config_1.TYPE,
      LockManagerSnapshot: base_config_1.TYPE,
      LockOptions: base_config_1.TYPE,
      MediaCapabilitiesDecodingInfo: base_config_1.TYPE,
      MediaCapabilitiesEncodingInfo: base_config_1.TYPE,
      MediaCapabilitiesInfo: base_config_1.TYPE,
      MediaConfiguration: base_config_1.TYPE,
      MediaDecodingConfiguration: base_config_1.TYPE,
      MediaEncodingConfiguration: base_config_1.TYPE,
      MessageEventInit: base_config_1.TYPE,
      MultiCacheQueryOptions: base_config_1.TYPE,
      NavigationPreloadState: base_config_1.TYPE,
      NotificationAction: base_config_1.TYPE,
      NotificationEventInit: base_config_1.TYPE,
      NotificationOptions: base_config_1.TYPE,
      Pbkdf2Params: base_config_1.TYPE,
      PerformanceMarkOptions: base_config_1.TYPE,
      PerformanceMeasureOptions: base_config_1.TYPE,
      PerformanceObserverInit: base_config_1.TYPE,
      PermissionDescriptor: base_config_1.TYPE,
      PlaneLayout: base_config_1.TYPE,
      ProgressEventInit: base_config_1.TYPE,
      PromiseRejectionEventInit: base_config_1.TYPE,
      PushEventInit: base_config_1.TYPE,
      PushSubscriptionJSON: base_config_1.TYPE,
      PushSubscriptionOptionsInit: base_config_1.TYPE,
      QueuingStrategy: base_config_1.TYPE,
      QueuingStrategyInit: base_config_1.TYPE,
      RTCEncodedAudioFrameMetadata: base_config_1.TYPE,
      RTCEncodedVideoFrameMetadata: base_config_1.TYPE,
      ReadableStreamGetReaderOptions: base_config_1.TYPE,
      ReadableStreamReadDoneResult: base_config_1.TYPE,
      ReadableStreamReadValueResult: base_config_1.TYPE,
      ReadableWritablePair: base_config_1.TYPE,
      RegistrationOptions: base_config_1.TYPE,
      ReportingObserverOptions: base_config_1.TYPE,
      RequestInit: base_config_1.TYPE,
      ResponseInit: base_config_1.TYPE,
      RsaHashedImportParams: base_config_1.TYPE,
      RsaHashedKeyGenParams: base_config_1.TYPE,
      RsaKeyGenParams: base_config_1.TYPE,
      RsaOaepParams: base_config_1.TYPE,
      RsaOtherPrimesInfo: base_config_1.TYPE,
      RsaPssParams: base_config_1.TYPE,
      SecurityPolicyViolationEventInit: base_config_1.TYPE,
      StorageEstimate: base_config_1.TYPE,
      StreamPipeOptions: base_config_1.TYPE,
      StructuredSerializeOptions: base_config_1.TYPE,
      TextDecodeOptions: base_config_1.TYPE,
      TextDecoderOptions: base_config_1.TYPE,
      TextEncoderEncodeIntoResult: base_config_1.TYPE,
      Transformer: base_config_1.TYPE,
      UnderlyingByteSource: base_config_1.TYPE,
      UnderlyingDefaultSource: base_config_1.TYPE,
      UnderlyingSink: base_config_1.TYPE,
      UnderlyingSource: base_config_1.TYPE,
      VideoColorSpaceInit: base_config_1.TYPE,
      VideoConfiguration: base_config_1.TYPE,
      VideoDecoderConfig: base_config_1.TYPE,
      VideoDecoderInit: base_config_1.TYPE,
      VideoDecoderSupport: base_config_1.TYPE,
      VideoEncoderConfig: base_config_1.TYPE,
      VideoEncoderEncodeOptions: base_config_1.TYPE,
      VideoEncoderInit: base_config_1.TYPE,
      VideoEncoderSupport: base_config_1.TYPE,
      VideoFrameBufferInit: base_config_1.TYPE,
      VideoFrameCopyToOptions: base_config_1.TYPE,
      VideoFrameInit: base_config_1.TYPE,
      WebGLContextAttributes: base_config_1.TYPE,
      WebGLContextEventInit: base_config_1.TYPE,
      WebTransportCloseInfo: base_config_1.TYPE,
      WebTransportErrorOptions: base_config_1.TYPE,
      WebTransportHash: base_config_1.TYPE,
      WebTransportOptions: base_config_1.TYPE,
      WebTransportSendStreamOptions: base_config_1.TYPE,
      WorkerOptions: base_config_1.TYPE,
      WriteParams: base_config_1.TYPE,
      ANGLE_instanced_arrays: base_config_1.TYPE,
      AbortController: base_config_1.TYPE_VALUE,
      AbortSignalEventMap: base_config_1.TYPE,
      AbortSignal: base_config_1.TYPE_VALUE,
      AbstractWorkerEventMap: base_config_1.TYPE,
      AbstractWorker: base_config_1.TYPE,
      AnimationFrameProvider: base_config_1.TYPE,
      Blob: base_config_1.TYPE_VALUE,
      Body: base_config_1.TYPE,
      BroadcastChannelEventMap: base_config_1.TYPE,
      BroadcastChannel: base_config_1.TYPE_VALUE,
      ByteLengthQueuingStrategy: base_config_1.TYPE_VALUE,
      CSSImageValue: base_config_1.TYPE_VALUE,
      CSSKeywordValue: base_config_1.TYPE_VALUE,
      CSSMathClamp: base_config_1.TYPE_VALUE,
      CSSMathInvert: base_config_1.TYPE_VALUE,
      CSSMathMax: base_config_1.TYPE_VALUE,
      CSSMathMin: base_config_1.TYPE_VALUE,
      CSSMathNegate: base_config_1.TYPE_VALUE,
      CSSMathProduct: base_config_1.TYPE_VALUE,
      CSSMathSum: base_config_1.TYPE_VALUE,
      CSSMathValue: base_config_1.TYPE_VALUE,
      CSSMatrixComponent: base_config_1.TYPE_VALUE,
      CSSNumericArray: base_config_1.TYPE_VALUE,
      CSSNumericValue: base_config_1.TYPE_VALUE,
      CSSPerspective: base_config_1.TYPE_VALUE,
      CSSRotate: base_config_1.TYPE_VALUE,
      CSSScale: base_config_1.TYPE_VALUE,
      CSSSkew: base_config_1.TYPE_VALUE,
      CSSSkewX: base_config_1.TYPE_VALUE,
      CSSSkewY: base_config_1.TYPE_VALUE,
      CSSStyleValue: base_config_1.TYPE_VALUE,
      CSSTransformComponent: base_config_1.TYPE_VALUE,
      CSSTransformValue: base_config_1.TYPE_VALUE,
      CSSTranslate: base_config_1.TYPE_VALUE,
      CSSUnitValue: base_config_1.TYPE_VALUE,
      CSSUnparsedValue: base_config_1.TYPE_VALUE,
      CSSVariableReferenceValue: base_config_1.TYPE_VALUE,
      Cache: base_config_1.TYPE_VALUE,
      CacheStorage: base_config_1.TYPE_VALUE,
      CanvasCompositing: base_config_1.TYPE,
      CanvasDrawImage: base_config_1.TYPE,
      CanvasDrawPath: base_config_1.TYPE,
      CanvasFillStrokeStyles: base_config_1.TYPE,
      CanvasFilters: base_config_1.TYPE,
      CanvasGradient: base_config_1.TYPE_VALUE,
      CanvasImageData: base_config_1.TYPE,
      CanvasImageSmoothing: base_config_1.TYPE,
      CanvasPath: base_config_1.TYPE,
      CanvasPathDrawingStyles: base_config_1.TYPE,
      CanvasPattern: base_config_1.TYPE_VALUE,
      CanvasRect: base_config_1.TYPE,
      CanvasShadowStyles: base_config_1.TYPE,
      CanvasState: base_config_1.TYPE,
      CanvasText: base_config_1.TYPE,
      CanvasTextDrawingStyles: base_config_1.TYPE,
      CanvasTransform: base_config_1.TYPE,
      Client: base_config_1.TYPE_VALUE,
      Clients: base_config_1.TYPE_VALUE,
      CloseEvent: base_config_1.TYPE_VALUE,
      CompressionStream: base_config_1.TYPE_VALUE,
      CountQueuingStrategy: base_config_1.TYPE_VALUE,
      Crypto: base_config_1.TYPE_VALUE,
      CryptoKey: base_config_1.TYPE_VALUE,
      CustomEvent: base_config_1.TYPE_VALUE,
      DOMException: base_config_1.TYPE_VALUE,
      DOMMatrix: base_config_1.TYPE_VALUE,
      DOMMatrixReadOnly: base_config_1.TYPE_VALUE,
      DOMPoint: base_config_1.TYPE_VALUE,
      DOMPointReadOnly: base_config_1.TYPE_VALUE,
      DOMQuad: base_config_1.TYPE_VALUE,
      DOMRect: base_config_1.TYPE_VALUE,
      DOMRectReadOnly: base_config_1.TYPE_VALUE,
      DOMStringList: base_config_1.TYPE_VALUE,
      DecompressionStream: base_config_1.TYPE_VALUE,
      DedicatedWorkerGlobalScopeEventMap: base_config_1.TYPE,
      DedicatedWorkerGlobalScope: base_config_1.TYPE_VALUE,
      EXT_blend_minmax: base_config_1.TYPE,
      EXT_color_buffer_float: base_config_1.TYPE,
      EXT_color_buffer_half_float: base_config_1.TYPE,
      EXT_float_blend: base_config_1.TYPE,
      EXT_frag_depth: base_config_1.TYPE,
      EXT_sRGB: base_config_1.TYPE,
      EXT_shader_texture_lod: base_config_1.TYPE,
      EXT_texture_compression_bptc: base_config_1.TYPE,
      EXT_texture_compression_rgtc: base_config_1.TYPE,
      EXT_texture_filter_anisotropic: base_config_1.TYPE,
      EXT_texture_norm16: base_config_1.TYPE,
      EncodedVideoChunk: base_config_1.TYPE_VALUE,
      ErrorEvent: base_config_1.TYPE_VALUE,
      Event: base_config_1.TYPE_VALUE,
      EventListener: base_config_1.TYPE,
      EventListenerObject: base_config_1.TYPE,
      EventSourceEventMap: base_config_1.TYPE,
      EventSource: base_config_1.TYPE_VALUE,
      EventTarget: base_config_1.TYPE_VALUE,
      ExtendableEvent: base_config_1.TYPE_VALUE,
      ExtendableMessageEvent: base_config_1.TYPE_VALUE,
      FetchEvent: base_config_1.TYPE_VALUE,
      File: base_config_1.TYPE_VALUE,
      FileList: base_config_1.TYPE_VALUE,
      FileReaderEventMap: base_config_1.TYPE,
      FileReader: base_config_1.TYPE_VALUE,
      FileReaderSync: base_config_1.TYPE_VALUE,
      FileSystemDirectoryHandle: base_config_1.TYPE_VALUE,
      FileSystemFileHandle: base_config_1.TYPE_VALUE,
      FileSystemHandle: base_config_1.TYPE_VALUE,
      FileSystemSyncAccessHandle: base_config_1.TYPE_VALUE,
      FileSystemWritableFileStream: base_config_1.TYPE_VALUE,
      FontFace: base_config_1.TYPE_VALUE,
      FontFaceSetEventMap: base_config_1.TYPE,
      FontFaceSet: base_config_1.TYPE_VALUE,
      FontFaceSetLoadEvent: base_config_1.TYPE_VALUE,
      FontFaceSource: base_config_1.TYPE,
      FormData: base_config_1.TYPE_VALUE,
      GenericTransformStream: base_config_1.TYPE,
      Headers: base_config_1.TYPE_VALUE,
      IDBCursor: base_config_1.TYPE_VALUE,
      IDBCursorWithValue: base_config_1.TYPE_VALUE,
      IDBDatabaseEventMap: base_config_1.TYPE,
      IDBDatabase: base_config_1.TYPE_VALUE,
      IDBFactory: base_config_1.TYPE_VALUE,
      IDBIndex: base_config_1.TYPE_VALUE,
      IDBKeyRange: base_config_1.TYPE_VALUE,
      IDBObjectStore: base_config_1.TYPE_VALUE,
      IDBOpenDBRequestEventMap: base_config_1.TYPE,
      IDBOpenDBRequest: base_config_1.TYPE_VALUE,
      IDBRequestEventMap: base_config_1.TYPE,
      IDBRequest: base_config_1.TYPE_VALUE,
      IDBTransactionEventMap: base_config_1.TYPE,
      IDBTransaction: base_config_1.TYPE_VALUE,
      IDBVersionChangeEvent: base_config_1.TYPE_VALUE,
      ImageBitmap: base_config_1.TYPE_VALUE,
      ImageBitmapRenderingContext: base_config_1.TYPE_VALUE,
      ImageData: base_config_1.TYPE_VALUE,
      KHR_parallel_shader_compile: base_config_1.TYPE,
      Lock: base_config_1.TYPE_VALUE,
      LockManager: base_config_1.TYPE_VALUE,
      MediaCapabilities: base_config_1.TYPE_VALUE,
      MessageChannel: base_config_1.TYPE_VALUE,
      MessageEvent: base_config_1.TYPE_VALUE,
      MessagePortEventMap: base_config_1.TYPE,
      MessagePort: base_config_1.TYPE_VALUE,
      NavigationPreloadManager: base_config_1.TYPE_VALUE,
      NavigatorBadge: base_config_1.TYPE,
      NavigatorConcurrentHardware: base_config_1.TYPE,
      NavigatorID: base_config_1.TYPE,
      NavigatorLanguage: base_config_1.TYPE,
      NavigatorLocks: base_config_1.TYPE,
      NavigatorOnLine: base_config_1.TYPE,
      NavigatorStorage: base_config_1.TYPE,
      NotificationEventMap: base_config_1.TYPE,
      Notification: base_config_1.TYPE_VALUE,
      NotificationEvent: base_config_1.TYPE_VALUE,
      OES_draw_buffers_indexed: base_config_1.TYPE,
      OES_element_index_uint: base_config_1.TYPE,
      OES_fbo_render_mipmap: base_config_1.TYPE,
      OES_standard_derivatives: base_config_1.TYPE,
      OES_texture_float: base_config_1.TYPE,
      OES_texture_float_linear: base_config_1.TYPE,
      OES_texture_half_float: base_config_1.TYPE,
      OES_texture_half_float_linear: base_config_1.TYPE,
      OES_vertex_array_object: base_config_1.TYPE,
      OVR_multiview2: base_config_1.TYPE,
      OffscreenCanvasEventMap: base_config_1.TYPE,
      OffscreenCanvas: base_config_1.TYPE_VALUE,
      OffscreenCanvasRenderingContext2D: base_config_1.TYPE_VALUE,
      Path2D: base_config_1.TYPE_VALUE,
      PerformanceEventMap: base_config_1.TYPE,
      Performance: base_config_1.TYPE_VALUE,
      PerformanceEntry: base_config_1.TYPE_VALUE,
      PerformanceMark: base_config_1.TYPE_VALUE,
      PerformanceMeasure: base_config_1.TYPE_VALUE,
      PerformanceObserver: base_config_1.TYPE_VALUE,
      PerformanceObserverEntryList: base_config_1.TYPE_VALUE,
      PerformanceResourceTiming: base_config_1.TYPE_VALUE,
      PerformanceServerTiming: base_config_1.TYPE_VALUE,
      PermissionStatusEventMap: base_config_1.TYPE,
      PermissionStatus: base_config_1.TYPE_VALUE,
      Permissions: base_config_1.TYPE_VALUE,
      ProgressEvent: base_config_1.TYPE_VALUE,
      PromiseRejectionEvent: base_config_1.TYPE_VALUE,
      PushEvent: base_config_1.TYPE_VALUE,
      PushManager: base_config_1.TYPE_VALUE,
      PushMessageData: base_config_1.TYPE_VALUE,
      PushSubscription: base_config_1.TYPE_VALUE,
      PushSubscriptionOptions: base_config_1.TYPE_VALUE,
      RTCEncodedAudioFrame: base_config_1.TYPE_VALUE,
      RTCEncodedVideoFrame: base_config_1.TYPE_VALUE,
      ReadableByteStreamController: base_config_1.TYPE_VALUE,
      ReadableStream: base_config_1.TYPE_VALUE,
      ReadableStreamBYOBReader: base_config_1.TYPE_VALUE,
      ReadableStreamBYOBRequest: base_config_1.TYPE_VALUE,
      ReadableStreamDefaultController: base_config_1.TYPE_VALUE,
      ReadableStreamDefaultReader: base_config_1.TYPE_VALUE,
      ReadableStreamGenericReader: base_config_1.TYPE,
      Report: base_config_1.TYPE_VALUE,
      ReportBody: base_config_1.TYPE_VALUE,
      ReportingObserver: base_config_1.TYPE_VALUE,
      Request: base_config_1.TYPE_VALUE,
      Response: base_config_1.TYPE_VALUE,
      SecurityPolicyViolationEvent: base_config_1.TYPE_VALUE,
      ServiceWorkerEventMap: base_config_1.TYPE,
      ServiceWorker: base_config_1.TYPE_VALUE,
      ServiceWorkerContainerEventMap: base_config_1.TYPE,
      ServiceWorkerContainer: base_config_1.TYPE_VALUE,
      ServiceWorkerGlobalScopeEventMap: base_config_1.TYPE,
      ServiceWorkerGlobalScope: base_config_1.TYPE_VALUE,
      ServiceWorkerRegistrationEventMap: base_config_1.TYPE,
      ServiceWorkerRegistration: base_config_1.TYPE_VALUE,
      SharedWorkerGlobalScopeEventMap: base_config_1.TYPE,
      SharedWorkerGlobalScope: base_config_1.TYPE_VALUE,
      StorageManager: base_config_1.TYPE_VALUE,
      StylePropertyMapReadOnly: base_config_1.TYPE_VALUE,
      SubtleCrypto: base_config_1.TYPE_VALUE,
      TextDecoder: base_config_1.TYPE_VALUE,
      TextDecoderCommon: base_config_1.TYPE,
      TextDecoderStream: base_config_1.TYPE_VALUE,
      TextEncoder: base_config_1.TYPE_VALUE,
      TextEncoderCommon: base_config_1.TYPE,
      TextEncoderStream: base_config_1.TYPE_VALUE,
      TextMetrics: base_config_1.TYPE_VALUE,
      TransformStream: base_config_1.TYPE_VALUE,
      TransformStreamDefaultController: base_config_1.TYPE_VALUE,
      URL: base_config_1.TYPE_VALUE,
      URLSearchParams: base_config_1.TYPE_VALUE,
      VideoColorSpace: base_config_1.TYPE_VALUE,
      VideoDecoderEventMap: base_config_1.TYPE,
      VideoDecoder: base_config_1.TYPE_VALUE,
      VideoEncoderEventMap: base_config_1.TYPE,
      VideoEncoder: base_config_1.TYPE_VALUE,
      VideoFrame: base_config_1.TYPE_VALUE,
      WEBGL_color_buffer_float: base_config_1.TYPE,
      WEBGL_compressed_texture_astc: base_config_1.TYPE,
      WEBGL_compressed_texture_etc: base_config_1.TYPE,
      WEBGL_compressed_texture_etc1: base_config_1.TYPE,
      WEBGL_compressed_texture_pvrtc: base_config_1.TYPE,
      WEBGL_compressed_texture_s3tc: base_config_1.TYPE,
      WEBGL_compressed_texture_s3tc_srgb: base_config_1.TYPE,
      WEBGL_debug_renderer_info: base_config_1.TYPE,
      WEBGL_debug_shaders: base_config_1.TYPE,
      WEBGL_depth_texture: base_config_1.TYPE,
      WEBGL_draw_buffers: base_config_1.TYPE,
      WEBGL_lose_context: base_config_1.TYPE,
      WEBGL_multi_draw: base_config_1.TYPE,
      WebGL2RenderingContext: base_config_1.TYPE_VALUE,
      WebGL2RenderingContextBase: base_config_1.TYPE,
      WebGL2RenderingContextOverloads: base_config_1.TYPE,
      WebGLActiveInfo: base_config_1.TYPE_VALUE,
      WebGLBuffer: base_config_1.TYPE_VALUE,
      WebGLContextEvent: base_config_1.TYPE_VALUE,
      WebGLFramebuffer: base_config_1.TYPE_VALUE,
      WebGLProgram: base_config_1.TYPE_VALUE,
      WebGLQuery: base_config_1.TYPE_VALUE,
      WebGLRenderbuffer: base_config_1.TYPE_VALUE,
      WebGLRenderingContext: base_config_1.TYPE_VALUE,
      WebGLRenderingContextBase: base_config_1.TYPE,
      WebGLRenderingContextOverloads: base_config_1.TYPE,
      WebGLSampler: base_config_1.TYPE_VALUE,
      WebGLShader: base_config_1.TYPE_VALUE,
      WebGLShaderPrecisionFormat: base_config_1.TYPE_VALUE,
      WebGLSync: base_config_1.TYPE_VALUE,
      WebGLTexture: base_config_1.TYPE_VALUE,
      WebGLTransformFeedback: base_config_1.TYPE_VALUE,
      WebGLUniformLocation: base_config_1.TYPE_VALUE,
      WebGLVertexArrayObject: base_config_1.TYPE_VALUE,
      WebGLVertexArrayObjectOES: base_config_1.TYPE,
      WebSocketEventMap: base_config_1.TYPE,
      WebSocket: base_config_1.TYPE_VALUE,
      WebTransport: base_config_1.TYPE_VALUE,
      WebTransportBidirectionalStream: base_config_1.TYPE_VALUE,
      WebTransportDatagramDuplexStream: base_config_1.TYPE_VALUE,
      WebTransportError: base_config_1.TYPE_VALUE,
      WindowClient: base_config_1.TYPE_VALUE,
      WindowOrWorkerGlobalScope: base_config_1.TYPE,
      WorkerEventMap: base_config_1.TYPE,
      Worker: base_config_1.TYPE_VALUE,
      WorkerGlobalScopeEventMap: base_config_1.TYPE,
      WorkerGlobalScope: base_config_1.TYPE_VALUE,
      WorkerLocation: base_config_1.TYPE_VALUE,
      WorkerNavigator: base_config_1.TYPE_VALUE,
      WritableStream: base_config_1.TYPE_VALUE,
      WritableStreamDefaultController: base_config_1.TYPE_VALUE,
      WritableStreamDefaultWriter: base_config_1.TYPE_VALUE,
      XMLHttpRequestEventMap: base_config_1.TYPE,
      XMLHttpRequest: base_config_1.TYPE_VALUE,
      XMLHttpRequestEventTargetEventMap: base_config_1.TYPE,
      XMLHttpRequestEventTarget: base_config_1.TYPE_VALUE,
      XMLHttpRequestUpload: base_config_1.TYPE_VALUE,
      Console: base_config_1.TYPE,
      WebAssembly: base_config_1.TYPE_VALUE,
      EncodedVideoChunkOutputCallback: base_config_1.TYPE,
      FrameRequestCallback: base_config_1.TYPE,
      LockGrantedCallback: base_config_1.TYPE,
      OnErrorEventHandlerNonNull: base_config_1.TYPE,
      PerformanceObserverCallback: base_config_1.TYPE,
      QueuingStrategySize: base_config_1.TYPE,
      ReportingObserverCallback: base_config_1.TYPE,
      TransformerFlushCallback: base_config_1.TYPE,
      TransformerStartCallback: base_config_1.TYPE,
      TransformerTransformCallback: base_config_1.TYPE,
      UnderlyingSinkAbortCallback: base_config_1.TYPE,
      UnderlyingSinkCloseCallback: base_config_1.TYPE,
      UnderlyingSinkStartCallback: base_config_1.TYPE,
      UnderlyingSinkWriteCallback: base_config_1.TYPE,
      UnderlyingSourceCancelCallback: base_config_1.TYPE,
      UnderlyingSourcePullCallback: base_config_1.TYPE,
      UnderlyingSourceStartCallback: base_config_1.TYPE,
      VideoFrameOutputCallback: base_config_1.TYPE,
      VoidFunction: base_config_1.TYPE,
      WebCodecsErrorCallback: base_config_1.TYPE,
      AlgorithmIdentifier: base_config_1.TYPE,
      AllowSharedBufferSource: base_config_1.TYPE,
      BigInteger: base_config_1.TYPE,
      BinaryData: base_config_1.TYPE,
      BlobPart: base_config_1.TYPE,
      BodyInit: base_config_1.TYPE,
      BufferSource: base_config_1.TYPE,
      CSSKeywordish: base_config_1.TYPE,
      CSSNumberish: base_config_1.TYPE,
      CSSPerspectiveValue: base_config_1.TYPE,
      CSSUnparsedSegment: base_config_1.TYPE,
      CanvasImageSource: base_config_1.TYPE,
      DOMHighResTimeStamp: base_config_1.TYPE,
      EpochTimeStamp: base_config_1.TYPE,
      EventListenerOrEventListenerObject: base_config_1.TYPE,
      FileSystemWriteChunkType: base_config_1.TYPE,
      Float32List: base_config_1.TYPE,
      FormDataEntryValue: base_config_1.TYPE,
      GLbitfield: base_config_1.TYPE,
      GLboolean: base_config_1.TYPE,
      GLclampf: base_config_1.TYPE,
      GLenum: base_config_1.TYPE,
      GLfloat: base_config_1.TYPE,
      GLint: base_config_1.TYPE,
      GLint64: base_config_1.TYPE,
      GLintptr: base_config_1.TYPE,
      GLsizei: base_config_1.TYPE,
      GLsizeiptr: base_config_1.TYPE,
      GLuint: base_config_1.TYPE,
      GLuint64: base_config_1.TYPE,
      HashAlgorithmIdentifier: base_config_1.TYPE,
      HeadersInit: base_config_1.TYPE,
      IDBValidKey: base_config_1.TYPE,
      ImageBitmapSource: base_config_1.TYPE,
      Int32List: base_config_1.TYPE,
      MessageEventSource: base_config_1.TYPE,
      NamedCurve: base_config_1.TYPE,
      OffscreenRenderingContext: base_config_1.TYPE,
      OnErrorEventHandler: base_config_1.TYPE,
      PerformanceEntryList: base_config_1.TYPE,
      PushMessageDataInit: base_config_1.TYPE,
      ReadableStreamController: base_config_1.TYPE,
      ReadableStreamReadResult: base_config_1.TYPE,
      ReadableStreamReader: base_config_1.TYPE,
      ReportList: base_config_1.TYPE,
      RequestInfo: base_config_1.TYPE,
      TexImageSource: base_config_1.TYPE,
      TimerHandler: base_config_1.TYPE,
      Transferable: base_config_1.TYPE,
      Uint32List: base_config_1.TYPE,
      VibratePattern: base_config_1.TYPE,
      XMLHttpRequestBodyInit: base_config_1.TYPE,
      AlphaOption: base_config_1.TYPE,
      AvcBitstreamFormat: base_config_1.TYPE,
      BinaryType: base_config_1.TYPE,
      CSSMathOperator: base_config_1.TYPE,
      CSSNumericBaseType: base_config_1.TYPE,
      CanvasDirection: base_config_1.TYPE,
      CanvasFillRule: base_config_1.TYPE,
      CanvasFontKerning: base_config_1.TYPE,
      CanvasFontStretch: base_config_1.TYPE,
      CanvasFontVariantCaps: base_config_1.TYPE,
      CanvasLineCap: base_config_1.TYPE,
      CanvasLineJoin: base_config_1.TYPE,
      CanvasTextAlign: base_config_1.TYPE,
      CanvasTextBaseline: base_config_1.TYPE,
      CanvasTextRendering: base_config_1.TYPE,
      ClientTypes: base_config_1.TYPE,
      CodecState: base_config_1.TYPE,
      ColorGamut: base_config_1.TYPE,
      ColorSpaceConversion: base_config_1.TYPE,
      CompressionFormat: base_config_1.TYPE,
      DocumentVisibilityState: base_config_1.TYPE,
      EncodedVideoChunkType: base_config_1.TYPE,
      EndingType: base_config_1.TYPE,
      FileSystemHandleKind: base_config_1.TYPE,
      FontDisplay: base_config_1.TYPE,
      FontFaceLoadStatus: base_config_1.TYPE,
      FontFaceSetLoadStatus: base_config_1.TYPE,
      FrameType: base_config_1.TYPE,
      GlobalCompositeOperation: base_config_1.TYPE,
      HardwareAcceleration: base_config_1.TYPE,
      HdrMetadataType: base_config_1.TYPE,
      IDBCursorDirection: base_config_1.TYPE,
      IDBRequestReadyState: base_config_1.TYPE,
      IDBTransactionDurability: base_config_1.TYPE,
      IDBTransactionMode: base_config_1.TYPE,
      ImageOrientation: base_config_1.TYPE,
      ImageSmoothingQuality: base_config_1.TYPE,
      KeyFormat: base_config_1.TYPE,
      KeyType: base_config_1.TYPE,
      KeyUsage: base_config_1.TYPE,
      LatencyMode: base_config_1.TYPE,
      LockMode: base_config_1.TYPE,
      MediaDecodingType: base_config_1.TYPE,
      MediaEncodingType: base_config_1.TYPE,
      NotificationDirection: base_config_1.TYPE,
      NotificationPermission: base_config_1.TYPE,
      OffscreenRenderingContextId: base_config_1.TYPE,
      PermissionName: base_config_1.TYPE,
      PermissionState: base_config_1.TYPE,
      PredefinedColorSpace: base_config_1.TYPE,
      PremultiplyAlpha: base_config_1.TYPE,
      PushEncryptionKeyName: base_config_1.TYPE,
      RTCEncodedVideoFrameType: base_config_1.TYPE,
      ReadableStreamReaderMode: base_config_1.TYPE,
      ReadableStreamType: base_config_1.TYPE,
      ReferrerPolicy: base_config_1.TYPE,
      RequestCache: base_config_1.TYPE,
      RequestCredentials: base_config_1.TYPE,
      RequestDestination: base_config_1.TYPE,
      RequestMode: base_config_1.TYPE,
      RequestRedirect: base_config_1.TYPE,
      ResizeQuality: base_config_1.TYPE,
      ResponseType: base_config_1.TYPE,
      SecurityPolicyViolationEventDisposition: base_config_1.TYPE,
      ServiceWorkerState: base_config_1.TYPE,
      ServiceWorkerUpdateViaCache: base_config_1.TYPE,
      TransferFunction: base_config_1.TYPE,
      VideoColorPrimaries: base_config_1.TYPE,
      VideoEncoderBitrateMode: base_config_1.TYPE,
      VideoMatrixCoefficients: base_config_1.TYPE,
      VideoPixelFormat: base_config_1.TYPE,
      VideoTransferCharacteristics: base_config_1.TYPE,
      WebGLPowerPreference: base_config_1.TYPE,
      WebTransportCongestionControl: base_config_1.TYPE,
      WebTransportErrorSource: base_config_1.TYPE,
      WorkerType: base_config_1.TYPE,
      WriteCommandType: base_config_1.TYPE,
      XMLHttpRequestResponseType: base_config_1.TYPE
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/webworker.iterable.js
var require_webworker_iterable = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/webworker.iterable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.webworker_iterable = void 0;
    var base_config_1 = require_base_config();
    exports.webworker_iterable = {
      CSSNumericArray: base_config_1.TYPE,
      CSSTransformValue: base_config_1.TYPE,
      CSSUnparsedValue: base_config_1.TYPE,
      Cache: base_config_1.TYPE,
      CanvasPath: base_config_1.TYPE,
      CanvasPathDrawingStyles: base_config_1.TYPE,
      DOMStringList: base_config_1.TYPE,
      FileList: base_config_1.TYPE,
      FontFaceSet: base_config_1.TYPE,
      FormData: base_config_1.TYPE,
      Headers: base_config_1.TYPE,
      IDBDatabase: base_config_1.TYPE,
      IDBObjectStore: base_config_1.TYPE,
      MessageEvent: base_config_1.TYPE,
      StylePropertyMapReadOnly: base_config_1.TYPE,
      SubtleCrypto: base_config_1.TYPE,
      URLSearchParams: base_config_1.TYPE,
      WEBGL_draw_buffers: base_config_1.TYPE,
      WEBGL_multi_draw: base_config_1.TYPE,
      WebGL2RenderingContextBase: base_config_1.TYPE,
      WebGL2RenderingContextOverloads: base_config_1.TYPE,
      WebGLRenderingContextBase: base_config_1.TYPE,
      WebGLRenderingContextOverloads: base_config_1.TYPE
    };
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/lib/index.js
var require_lib3 = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/lib/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.lib = void 0;
    var decorators_1 = require_decorators();
    var decorators_legacy_1 = require_decorators_legacy();
    var dom_1 = require_dom();
    var dom_iterable_1 = require_dom_iterable();
    var es5_1 = require_es5();
    var es6_1 = require_es6();
    var es7_1 = require_es7();
    var es2015_1 = require_es2015();
    var es2015_collection_1 = require_es2015_collection();
    var es2015_core_1 = require_es2015_core();
    var es2015_generator_1 = require_es2015_generator();
    var es2015_iterable_1 = require_es2015_iterable();
    var es2015_promise_1 = require_es2015_promise();
    var es2015_proxy_1 = require_es2015_proxy();
    var es2015_reflect_1 = require_es2015_reflect();
    var es2015_symbol_1 = require_es2015_symbol();
    var es2015_symbol_wellknown_1 = require_es2015_symbol_wellknown();
    var es2016_1 = require_es2016();
    var es2016_array_include_1 = require_es2016_array_include();
    var es2016_full_1 = require_es2016_full();
    var es2017_1 = require_es2017();
    var es2017_date_1 = require_es2017_date();
    var es2017_full_1 = require_es2017_full();
    var es2017_intl_1 = require_es2017_intl();
    var es2017_object_1 = require_es2017_object();
    var es2017_sharedmemory_1 = require_es2017_sharedmemory();
    var es2017_string_1 = require_es2017_string();
    var es2017_typedarrays_1 = require_es2017_typedarrays();
    var es2018_1 = require_es2018();
    var es2018_asyncgenerator_1 = require_es2018_asyncgenerator();
    var es2018_asynciterable_1 = require_es2018_asynciterable();
    var es2018_full_1 = require_es2018_full();
    var es2018_intl_1 = require_es2018_intl();
    var es2018_promise_1 = require_es2018_promise();
    var es2018_regexp_1 = require_es2018_regexp();
    var es2019_1 = require_es2019();
    var es2019_array_1 = require_es2019_array();
    var es2019_full_1 = require_es2019_full();
    var es2019_intl_1 = require_es2019_intl();
    var es2019_object_1 = require_es2019_object();
    var es2019_string_1 = require_es2019_string();
    var es2019_symbol_1 = require_es2019_symbol();
    var es2020_1 = require_es2020();
    var es2020_bigint_1 = require_es2020_bigint();
    var es2020_date_1 = require_es2020_date();
    var es2020_full_1 = require_es2020_full();
    var es2020_intl_1 = require_es2020_intl();
    var es2020_number_1 = require_es2020_number();
    var es2020_promise_1 = require_es2020_promise();
    var es2020_sharedmemory_1 = require_es2020_sharedmemory();
    var es2020_string_1 = require_es2020_string();
    var es2020_symbol_wellknown_1 = require_es2020_symbol_wellknown();
    var es2021_1 = require_es2021();
    var es2021_full_1 = require_es2021_full();
    var es2021_intl_1 = require_es2021_intl();
    var es2021_promise_1 = require_es2021_promise();
    var es2021_string_1 = require_es2021_string();
    var es2021_weakref_1 = require_es2021_weakref();
    var es2022_1 = require_es2022();
    var es2022_array_1 = require_es2022_array();
    var es2022_error_1 = require_es2022_error();
    var es2022_full_1 = require_es2022_full();
    var es2022_intl_1 = require_es2022_intl();
    var es2022_object_1 = require_es2022_object();
    var es2022_regexp_1 = require_es2022_regexp();
    var es2022_sharedmemory_1 = require_es2022_sharedmemory();
    var es2022_string_1 = require_es2022_string();
    var es2023_1 = require_es2023();
    var es2023_array_1 = require_es2023_array();
    var es2023_collection_1 = require_es2023_collection();
    var es2023_full_1 = require_es2023_full();
    var esnext_1 = require_esnext();
    var esnext_array_1 = require_esnext_array();
    var esnext_asynciterable_1 = require_esnext_asynciterable();
    var esnext_bigint_1 = require_esnext_bigint();
    var esnext_collection_1 = require_esnext_collection();
    var esnext_decorators_1 = require_esnext_decorators();
    var esnext_disposable_1 = require_esnext_disposable();
    var esnext_full_1 = require_esnext_full();
    var esnext_intl_1 = require_esnext_intl();
    var esnext_promise_1 = require_esnext_promise();
    var esnext_string_1 = require_esnext_string();
    var esnext_symbol_1 = require_esnext_symbol();
    var esnext_weakref_1 = require_esnext_weakref();
    var lib_1 = require_lib2();
    var scripthost_1 = require_scripthost();
    var webworker_1 = require_webworker();
    var webworker_importscripts_1 = require_webworker_importscripts();
    var webworker_iterable_1 = require_webworker_iterable();
    var lib = {
      es5: es5_1.es5,
      es6: es6_1.es6,
      es2015: es2015_1.es2015,
      es7: es7_1.es7,
      es2016: es2016_1.es2016,
      es2017: es2017_1.es2017,
      es2018: es2018_1.es2018,
      es2019: es2019_1.es2019,
      es2020: es2020_1.es2020,
      es2021: es2021_1.es2021,
      es2022: es2022_1.es2022,
      es2023: es2023_1.es2023,
      esnext: esnext_1.esnext,
      dom: dom_1.dom,
      "dom.iterable": dom_iterable_1.dom_iterable,
      webworker: webworker_1.webworker,
      "webworker.importscripts": webworker_importscripts_1.webworker_importscripts,
      "webworker.iterable": webworker_iterable_1.webworker_iterable,
      scripthost: scripthost_1.scripthost,
      "es2015.core": es2015_core_1.es2015_core,
      "es2015.collection": es2015_collection_1.es2015_collection,
      "es2015.generator": es2015_generator_1.es2015_generator,
      "es2015.iterable": es2015_iterable_1.es2015_iterable,
      "es2015.promise": es2015_promise_1.es2015_promise,
      "es2015.proxy": es2015_proxy_1.es2015_proxy,
      "es2015.reflect": es2015_reflect_1.es2015_reflect,
      "es2015.symbol": es2015_symbol_1.es2015_symbol,
      "es2015.symbol.wellknown": es2015_symbol_wellknown_1.es2015_symbol_wellknown,
      "es2016.array.include": es2016_array_include_1.es2016_array_include,
      "es2017.date": es2017_date_1.es2017_date,
      "es2017.object": es2017_object_1.es2017_object,
      "es2017.sharedmemory": es2017_sharedmemory_1.es2017_sharedmemory,
      "es2017.string": es2017_string_1.es2017_string,
      "es2017.intl": es2017_intl_1.es2017_intl,
      "es2017.typedarrays": es2017_typedarrays_1.es2017_typedarrays,
      "es2018.asyncgenerator": es2018_asyncgenerator_1.es2018_asyncgenerator,
      "es2018.asynciterable": es2018_asynciterable_1.es2018_asynciterable,
      "es2018.intl": es2018_intl_1.es2018_intl,
      "es2018.promise": es2018_promise_1.es2018_promise,
      "es2018.regexp": es2018_regexp_1.es2018_regexp,
      "es2019.array": es2019_array_1.es2019_array,
      "es2019.object": es2019_object_1.es2019_object,
      "es2019.string": es2019_string_1.es2019_string,
      "es2019.symbol": es2019_symbol_1.es2019_symbol,
      "es2019.intl": es2019_intl_1.es2019_intl,
      "es2020.bigint": es2020_bigint_1.es2020_bigint,
      "es2020.date": es2020_date_1.es2020_date,
      "es2020.promise": es2020_promise_1.es2020_promise,
      "es2020.sharedmemory": es2020_sharedmemory_1.es2020_sharedmemory,
      "es2020.string": es2020_string_1.es2020_string,
      "es2020.symbol.wellknown": es2020_symbol_wellknown_1.es2020_symbol_wellknown,
      "es2020.intl": es2020_intl_1.es2020_intl,
      "es2020.number": es2020_number_1.es2020_number,
      "es2021.promise": es2021_promise_1.es2021_promise,
      "es2021.string": es2021_string_1.es2021_string,
      "es2021.weakref": es2021_weakref_1.es2021_weakref,
      "es2021.intl": es2021_intl_1.es2021_intl,
      "es2022.array": es2022_array_1.es2022_array,
      "es2022.error": es2022_error_1.es2022_error,
      "es2022.intl": es2022_intl_1.es2022_intl,
      "es2022.object": es2022_object_1.es2022_object,
      "es2022.sharedmemory": es2022_sharedmemory_1.es2022_sharedmemory,
      "es2022.string": es2022_string_1.es2022_string,
      "es2022.regexp": es2022_regexp_1.es2022_regexp,
      "es2023.array": es2023_array_1.es2023_array,
      "es2023.collection": es2023_collection_1.es2023_collection,
      "esnext.array": esnext_array_1.esnext_array,
      "esnext.collection": esnext_collection_1.esnext_collection,
      "esnext.symbol": esnext_symbol_1.esnext_symbol,
      "esnext.asynciterable": esnext_asynciterable_1.esnext_asynciterable,
      "esnext.intl": esnext_intl_1.esnext_intl,
      "esnext.disposable": esnext_disposable_1.esnext_disposable,
      "esnext.bigint": esnext_bigint_1.esnext_bigint,
      "esnext.string": esnext_string_1.esnext_string,
      "esnext.promise": esnext_promise_1.esnext_promise,
      "esnext.weakref": esnext_weakref_1.esnext_weakref,
      "esnext.decorators": esnext_decorators_1.esnext_decorators,
      decorators: decorators_1.decorators,
      "decorators.legacy": decorators_legacy_1.decorators_legacy,
      "es2016.full": es2016_full_1.es2016_full,
      "es2017.full": es2017_full_1.es2017_full,
      "es2018.full": es2018_full_1.es2018_full,
      "es2019.full": es2019_full_1.es2019_full,
      "es2020.full": es2020_full_1.es2020_full,
      "es2021.full": es2021_full_1.es2021_full,
      "es2022.full": es2022_full_1.es2022_full,
      "es2023.full": es2023_full_1.es2023_full,
      "esnext.full": esnext_full_1.esnext_full,
      lib: lib_1.lib
    };
    exports.lib = lib;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/referencer/Reference.js
var require_Reference = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/referencer/Reference.js"(exports) {
    "use strict";
    var __classPrivateFieldGet = exports && exports.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var __classPrivateFieldSet = exports && exports.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var _Reference_flag;
    var _Reference_referenceType;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ReferenceTypeFlag = exports.ReferenceFlag = exports.Reference = void 0;
    var ID_1 = require_ID();
    var ReferenceFlag;
    (function(ReferenceFlag2) {
      ReferenceFlag2[ReferenceFlag2["Read"] = 1] = "Read";
      ReferenceFlag2[ReferenceFlag2["Write"] = 2] = "Write";
      ReferenceFlag2[ReferenceFlag2["ReadWrite"] = 3] = "ReadWrite";
    })(ReferenceFlag || (exports.ReferenceFlag = ReferenceFlag = {}));
    var generator = (0, ID_1.createIdGenerator)();
    var ReferenceTypeFlag;
    (function(ReferenceTypeFlag2) {
      ReferenceTypeFlag2[ReferenceTypeFlag2["Value"] = 1] = "Value";
      ReferenceTypeFlag2[ReferenceTypeFlag2["Type"] = 2] = "Type";
    })(ReferenceTypeFlag || (exports.ReferenceTypeFlag = ReferenceTypeFlag = {}));
    var Reference = class {
      /**
       * True if this reference can reference types
       */
      get isTypeReference() {
        return (__classPrivateFieldGet(this, _Reference_referenceType, "f") & ReferenceTypeFlag.Type) !== 0;
      }
      /**
       * True if this reference can reference values
       */
      get isValueReference() {
        return (__classPrivateFieldGet(this, _Reference_referenceType, "f") & ReferenceTypeFlag.Value) !== 0;
      }
      constructor(identifier, scope, flag, writeExpr, maybeImplicitGlobal, init, referenceType = ReferenceTypeFlag.Value) {
        this.$id = generator();
        _Reference_flag.set(this, void 0);
        _Reference_referenceType.set(this, void 0);
        this.identifier = identifier;
        this.from = scope;
        this.resolved = null;
        __classPrivateFieldSet(this, _Reference_flag, flag, "f");
        if (this.isWrite()) {
          this.writeExpr = writeExpr;
          this.init = init;
        }
        this.maybeImplicitGlobal = maybeImplicitGlobal;
        __classPrivateFieldSet(this, _Reference_referenceType, referenceType, "f");
      }
      /**
       * Whether the reference is writeable.
       * @public
       */
      isWrite() {
        return !!(__classPrivateFieldGet(this, _Reference_flag, "f") & ReferenceFlag.Write);
      }
      /**
       * Whether the reference is readable.
       * @public
       */
      isRead() {
        return !!(__classPrivateFieldGet(this, _Reference_flag, "f") & ReferenceFlag.Read);
      }
      /**
       * Whether the reference is read-only.
       * @public
       */
      isReadOnly() {
        return __classPrivateFieldGet(this, _Reference_flag, "f") === ReferenceFlag.Read;
      }
      /**
       * Whether the reference is write-only.
       * @public
       */
      isWriteOnly() {
        return __classPrivateFieldGet(this, _Reference_flag, "f") === ReferenceFlag.Write;
      }
      /**
       * Whether the reference is read-write.
       * @public
       */
      isReadWrite() {
        return __classPrivateFieldGet(this, _Reference_flag, "f") === ReferenceFlag.ReadWrite;
      }
    };
    exports.Reference = Reference;
    _Reference_flag = /* @__PURE__ */ new WeakMap(), _Reference_referenceType = /* @__PURE__ */ new WeakMap();
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/variable/VariableBase.js
var require_VariableBase = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/variable/VariableBase.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.VariableBase = void 0;
    var ID_1 = require_ID();
    var generator = (0, ID_1.createIdGenerator)();
    var VariableBase = class {
      constructor(name, scope) {
        this.$id = generator();
        this.defs = [];
        this.eslintUsed = false;
        this.identifiers = [];
        this.references = [];
        this.name = name;
        this.scope = scope;
      }
    };
    exports.VariableBase = VariableBase;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/variable/ESLintScopeVariable.js
var require_ESLintScopeVariable = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/variable/ESLintScopeVariable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ESLintScopeVariable = void 0;
    var VariableBase_1 = require_VariableBase();
    var ESLintScopeVariable = class extends VariableBase_1.VariableBase {
    };
    exports.ESLintScopeVariable = ESLintScopeVariable;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/variable/ImplicitLibVariable.js
var require_ImplicitLibVariable = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/variable/ImplicitLibVariable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ImplicitLibVariable = void 0;
    var ESLintScopeVariable_1 = require_ESLintScopeVariable();
    var ImplicitLibVariable = class extends ESLintScopeVariable_1.ESLintScopeVariable {
      constructor(scope, name, { isTypeVariable, isValueVariable, writeable, eslintImplicitGlobalSetting }) {
        super(name, scope);
        this.isTypeVariable = isTypeVariable ?? false;
        this.isValueVariable = isValueVariable ?? false;
        this.writeable = writeable ?? false;
        this.eslintImplicitGlobalSetting = eslintImplicitGlobalSetting ?? "readonly";
      }
    };
    exports.ImplicitLibVariable = ImplicitLibVariable;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/variable/Variable.js
var require_Variable = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/variable/Variable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Variable = void 0;
    var VariableBase_1 = require_VariableBase();
    var Variable = class extends VariableBase_1.VariableBase {
      /**
       * `true` if the variable is valid in a type context, false otherwise
       * @public
       */
      get isTypeVariable() {
        if (this.defs.length === 0) {
          return true;
        }
        return this.defs.some((def) => def.isTypeDefinition);
      }
      /**
       * `true` if the variable is valid in a value context, false otherwise
       * @public
       */
      get isValueVariable() {
        if (this.defs.length === 0) {
          return true;
        }
        return this.defs.some((def) => def.isVariableDefinition);
      }
    };
    exports.Variable = Variable;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/variable/index.js
var require_variable = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/variable/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Variable = exports.ImplicitLibVariable = exports.ESLintScopeVariable = void 0;
    var ESLintScopeVariable_1 = require_ESLintScopeVariable();
    Object.defineProperty(exports, "ESLintScopeVariable", { enumerable: true, get: function() {
      return ESLintScopeVariable_1.ESLintScopeVariable;
    } });
    var ImplicitLibVariable_1 = require_ImplicitLibVariable();
    Object.defineProperty(exports, "ImplicitLibVariable", { enumerable: true, get: function() {
      return ImplicitLibVariable_1.ImplicitLibVariable;
    } });
    var Variable_1 = require_Variable();
    Object.defineProperty(exports, "Variable", { enumerable: true, get: function() {
      return Variable_1.Variable;
    } });
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/scope/ScopeType.js
var require_ScopeType = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/scope/ScopeType.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ScopeType = void 0;
    var ScopeType;
    (function(ScopeType2) {
      ScopeType2["block"] = "block";
      ScopeType2["catch"] = "catch";
      ScopeType2["class"] = "class";
      ScopeType2["classFieldInitializer"] = "class-field-initializer";
      ScopeType2["classStaticBlock"] = "class-static-block";
      ScopeType2["conditionalType"] = "conditionalType";
      ScopeType2["for"] = "for";
      ScopeType2["function"] = "function";
      ScopeType2["functionExpressionName"] = "function-expression-name";
      ScopeType2["functionType"] = "functionType";
      ScopeType2["global"] = "global";
      ScopeType2["mappedType"] = "mappedType";
      ScopeType2["module"] = "module";
      ScopeType2["switch"] = "switch";
      ScopeType2["tsEnum"] = "tsEnum";
      ScopeType2["tsModule"] = "tsModule";
      ScopeType2["type"] = "type";
      ScopeType2["with"] = "with";
    })(ScopeType || (exports.ScopeType = ScopeType = {}));
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/scope/ScopeBase.js
var require_ScopeBase = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/scope/ScopeBase.js"(exports) {
    "use strict";
    var __classPrivateFieldSet = exports && exports.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var __classPrivateFieldGet = exports && exports.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _ScopeBase_declaredVariables;
    var _ScopeBase_dynamic;
    var _ScopeBase_staticCloseRef;
    var _ScopeBase_dynamicCloseRef;
    var _ScopeBase_globalCloseRef;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ScopeBase = void 0;
    var types_1 = require_dist();
    var assert_1 = require_assert();
    var definition_1 = require_definition();
    var ID_1 = require_ID();
    var Reference_1 = require_Reference();
    var variable_1 = require_variable();
    var ScopeType_1 = require_ScopeType();
    function isStrictScope(scope, block, isMethodDefinition) {
      var _a;
      let body;
      if ((_a = scope.upper) == null ? void 0 : _a.isStrict) {
        return true;
      }
      if (isMethodDefinition) {
        return true;
      }
      if (scope.type === ScopeType_1.ScopeType.class || scope.type === ScopeType_1.ScopeType.conditionalType || scope.type === ScopeType_1.ScopeType.functionType || scope.type === ScopeType_1.ScopeType.mappedType || scope.type === ScopeType_1.ScopeType.module || scope.type === ScopeType_1.ScopeType.tsEnum || scope.type === ScopeType_1.ScopeType.tsModule || scope.type === ScopeType_1.ScopeType.type) {
        return true;
      }
      if (scope.type === ScopeType_1.ScopeType.block || scope.type === ScopeType_1.ScopeType.switch) {
        return false;
      }
      if (scope.type === ScopeType_1.ScopeType.function) {
        const functionBody = block;
        switch (functionBody.type) {
          case types_1.AST_NODE_TYPES.ArrowFunctionExpression:
            if (functionBody.body.type !== types_1.AST_NODE_TYPES.BlockStatement) {
              return false;
            }
            body = functionBody.body;
            break;
          case types_1.AST_NODE_TYPES.Program:
            body = functionBody;
            break;
          default:
            body = functionBody.body;
        }
        if (!body) {
          return false;
        }
      } else if (scope.type === ScopeType_1.ScopeType.global) {
        body = block;
      } else {
        return false;
      }
      for (const stmt of body.body) {
        if (stmt.type !== types_1.AST_NODE_TYPES.ExpressionStatement) {
          break;
        }
        if (stmt.directive === "use strict") {
          return true;
        }
        const expr = stmt.expression;
        if (expr.type !== types_1.AST_NODE_TYPES.Literal) {
          break;
        }
        if (expr.raw === '"use strict"' || expr.raw === "'use strict'") {
          return true;
        }
        if (expr.value === "use strict") {
          return true;
        }
      }
      return false;
    }
    function registerScope(scopeManager, scope) {
      scopeManager.scopes.push(scope);
      const scopes = scopeManager.nodeToScope.get(scope.block);
      if (scopes) {
        scopes.push(scope);
      } else {
        scopeManager.nodeToScope.set(scope.block, [scope]);
      }
    }
    var generator = (0, ID_1.createIdGenerator)();
    var VARIABLE_SCOPE_TYPES = /* @__PURE__ */ new Set([
      ScopeType_1.ScopeType.classFieldInitializer,
      ScopeType_1.ScopeType.classStaticBlock,
      ScopeType_1.ScopeType.function,
      ScopeType_1.ScopeType.global,
      ScopeType_1.ScopeType.module,
      ScopeType_1.ScopeType.tsModule
    ]);
    var ScopeBase = class {
      constructor(scopeManager, type, upperScope, block, isMethodDefinition) {
        this.$id = generator();
        this.childScopes = [];
        _ScopeBase_declaredVariables.set(this, void 0);
        _ScopeBase_dynamic.set(this, void 0);
        this.functionExpressionScope = false;
        this.leftToResolve = [];
        this.references = [];
        this.set = /* @__PURE__ */ new Map();
        this.through = [];
        this.variables = [];
        _ScopeBase_staticCloseRef.set(this, (ref) => {
          const resolve = () => {
            const name = ref.identifier.name;
            const variable = this.set.get(name);
            if (!variable) {
              return false;
            }
            if (!this.isValidResolution(ref, variable)) {
              return false;
            }
            const isValidTypeReference = ref.isTypeReference && variable.isTypeVariable;
            const isValidValueReference = ref.isValueReference && variable.isValueVariable;
            if (!isValidTypeReference && !isValidValueReference) {
              return false;
            }
            variable.references.push(ref);
            ref.resolved = variable;
            return true;
          };
          if (!resolve()) {
            this.delegateToUpperScope(ref);
          }
        });
        _ScopeBase_dynamicCloseRef.set(this, (ref) => {
          let current = this;
          do {
            current.through.push(ref);
            current = current.upper;
          } while (current);
        });
        _ScopeBase_globalCloseRef.set(this, (ref, scopeManager2) => {
          if (this.shouldStaticallyCloseForGlobal(ref, scopeManager2)) {
            __classPrivateFieldGet(this, _ScopeBase_staticCloseRef, "f").call(this, ref);
          } else {
            __classPrivateFieldGet(this, _ScopeBase_dynamicCloseRef, "f").call(this, ref);
          }
        });
        const upperScopeAsScopeBase = upperScope;
        this.type = type;
        __classPrivateFieldSet(this, _ScopeBase_dynamic, this.type === ScopeType_1.ScopeType.global || this.type === ScopeType_1.ScopeType.with, "f");
        this.block = block;
        this.variableScope = this.isVariableScope() ? this : upperScopeAsScopeBase.variableScope;
        this.upper = upperScope;
        this.isStrict = isStrictScope(this, block, isMethodDefinition);
        if (upperScopeAsScopeBase) {
          upperScopeAsScopeBase.childScopes.push(this);
        }
        __classPrivateFieldSet(this, _ScopeBase_declaredVariables, scopeManager.declaredVariables, "f");
        registerScope(scopeManager, this);
      }
      isVariableScope() {
        return VARIABLE_SCOPE_TYPES.has(this.type);
      }
      shouldStaticallyClose() {
        return !__classPrivateFieldGet(this, _ScopeBase_dynamic, "f");
      }
      shouldStaticallyCloseForGlobal(ref, scopeManager) {
        const name = ref.identifier.name;
        const variable = this.set.get(name);
        if (!variable) {
          return false;
        }
        if (scopeManager.isModule()) {
          return true;
        }
        const defs = variable.defs;
        return defs.length > 0 && defs.every((def) => {
          var _a;
          if (def.type === definition_1.DefinitionType.Variable && ((_a = def.parent) == null ? void 0 : _a.type) === types_1.AST_NODE_TYPES.VariableDeclaration && def.parent.kind === "var") {
            return false;
          }
          return true;
        });
      }
      close(scopeManager) {
        let closeRef;
        if (this.shouldStaticallyClose()) {
          closeRef = __classPrivateFieldGet(this, _ScopeBase_staticCloseRef, "f");
        } else if (this.type !== "global") {
          closeRef = __classPrivateFieldGet(this, _ScopeBase_dynamicCloseRef, "f");
        } else {
          closeRef = __classPrivateFieldGet(this, _ScopeBase_globalCloseRef, "f");
        }
        (0, assert_1.assert)(this.leftToResolve);
        this.leftToResolve.forEach((ref) => closeRef(ref, scopeManager));
        this.leftToResolve = null;
        return this.upper;
      }
      /**
       * To override by function scopes.
       * References in default parameters isn't resolved to variables which are in their function body.
       */
      isValidResolution(_ref, _variable) {
        return true;
      }
      delegateToUpperScope(ref) {
        const upper = this.upper;
        if (upper == null ? void 0 : upper.leftToResolve) {
          upper.leftToResolve.push(ref);
        }
        this.through.push(ref);
      }
      addDeclaredVariablesOfNode(variable, node) {
        if (node == null) {
          return;
        }
        let variables = __classPrivateFieldGet(this, _ScopeBase_declaredVariables, "f").get(node);
        if (variables == null) {
          variables = [];
          __classPrivateFieldGet(this, _ScopeBase_declaredVariables, "f").set(node, variables);
        }
        if (!variables.includes(variable)) {
          variables.push(variable);
        }
      }
      defineVariable(nameOrVariable, set, variables, node, def) {
        const name = typeof nameOrVariable === "string" ? nameOrVariable : nameOrVariable.name;
        let variable = set.get(name);
        if (!variable) {
          variable = typeof nameOrVariable === "string" ? new variable_1.Variable(name, this) : nameOrVariable;
          set.set(name, variable);
          variables.push(variable);
        }
        if (def) {
          variable.defs.push(def);
          this.addDeclaredVariablesOfNode(variable, def.node);
          this.addDeclaredVariablesOfNode(variable, def.parent);
        }
        if (node) {
          variable.identifiers.push(node);
        }
      }
      defineIdentifier(node, def) {
        this.defineVariable(node.name, this.set, this.variables, node, def);
      }
      defineLiteralIdentifier(node, def) {
        this.defineVariable(node.value, this.set, this.variables, null, def);
      }
      referenceValue(node, assign = Reference_1.ReferenceFlag.Read, writeExpr, maybeImplicitGlobal, init = false) {
        var _a;
        const ref = new Reference_1.Reference(node, this, assign, writeExpr, maybeImplicitGlobal, init, Reference_1.ReferenceTypeFlag.Value);
        this.references.push(ref);
        (_a = this.leftToResolve) == null ? void 0 : _a.push(ref);
      }
      referenceType(node) {
        var _a;
        const ref = new Reference_1.Reference(node, this, Reference_1.ReferenceFlag.Read, null, null, false, Reference_1.ReferenceTypeFlag.Type);
        this.references.push(ref);
        (_a = this.leftToResolve) == null ? void 0 : _a.push(ref);
      }
      referenceDualValueType(node) {
        var _a;
        const ref = new Reference_1.Reference(node, this, Reference_1.ReferenceFlag.Read, null, null, false, Reference_1.ReferenceTypeFlag.Type | Reference_1.ReferenceTypeFlag.Value);
        this.references.push(ref);
        (_a = this.leftToResolve) == null ? void 0 : _a.push(ref);
      }
    };
    exports.ScopeBase = ScopeBase;
    _ScopeBase_declaredVariables = /* @__PURE__ */ new WeakMap(), _ScopeBase_dynamic = /* @__PURE__ */ new WeakMap(), _ScopeBase_staticCloseRef = /* @__PURE__ */ new WeakMap(), _ScopeBase_dynamicCloseRef = /* @__PURE__ */ new WeakMap(), _ScopeBase_globalCloseRef = /* @__PURE__ */ new WeakMap();
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/scope/BlockScope.js
var require_BlockScope = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/scope/BlockScope.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BlockScope = void 0;
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var BlockScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, upperScope, block) {
        super(scopeManager, ScopeType_1.ScopeType.block, upperScope, block, false);
      }
    };
    exports.BlockScope = BlockScope;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/scope/CatchScope.js
var require_CatchScope = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/scope/CatchScope.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CatchScope = void 0;
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var CatchScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, upperScope, block) {
        super(scopeManager, ScopeType_1.ScopeType.catch, upperScope, block, false);
      }
    };
    exports.CatchScope = CatchScope;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/scope/ClassFieldInitializerScope.js
var require_ClassFieldInitializerScope = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/scope/ClassFieldInitializerScope.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ClassFieldInitializerScope = void 0;
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var ClassFieldInitializerScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, upperScope, block) {
        super(scopeManager, ScopeType_1.ScopeType.classFieldInitializer, upperScope, block, false);
      }
    };
    exports.ClassFieldInitializerScope = ClassFieldInitializerScope;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/scope/ClassScope.js
var require_ClassScope = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/scope/ClassScope.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ClassScope = void 0;
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var ClassScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, upperScope, block) {
        super(scopeManager, ScopeType_1.ScopeType.class, upperScope, block, false);
      }
    };
    exports.ClassScope = ClassScope;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/scope/ConditionalTypeScope.js
var require_ConditionalTypeScope = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/scope/ConditionalTypeScope.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ConditionalTypeScope = void 0;
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var ConditionalTypeScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, upperScope, block) {
        super(scopeManager, ScopeType_1.ScopeType.conditionalType, upperScope, block, false);
      }
    };
    exports.ConditionalTypeScope = ConditionalTypeScope;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/scope/ForScope.js
var require_ForScope = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/scope/ForScope.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ForScope = void 0;
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var ForScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, upperScope, block) {
        super(scopeManager, ScopeType_1.ScopeType.for, upperScope, block, false);
      }
    };
    exports.ForScope = ForScope;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/scope/FunctionExpressionNameScope.js
var require_FunctionExpressionNameScope = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/scope/FunctionExpressionNameScope.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FunctionExpressionNameScope = void 0;
    var definition_1 = require_definition();
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var FunctionExpressionNameScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, upperScope, block) {
        super(scopeManager, ScopeType_1.ScopeType.functionExpressionName, upperScope, block, false);
        if (block.id) {
          this.defineIdentifier(block.id, new definition_1.FunctionNameDefinition(block.id, block));
        }
        this.functionExpressionScope = true;
      }
    };
    exports.FunctionExpressionNameScope = FunctionExpressionNameScope;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/scope/FunctionScope.js
var require_FunctionScope = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/scope/FunctionScope.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FunctionScope = void 0;
    var types_1 = require_dist();
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var FunctionScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, upperScope, block, isMethodDefinition) {
        super(scopeManager, ScopeType_1.ScopeType.function, upperScope, block, isMethodDefinition);
        if (this.block.type !== types_1.AST_NODE_TYPES.ArrowFunctionExpression) {
          this.defineVariable("arguments", this.set, this.variables, null, null);
        }
      }
      // References in default parameters isn't resolved to variables which are in their function body.
      //     const x = 1
      //     function f(a = x) { // This `x` is resolved to the `x` in the outer scope.
      //         const x = 2
      //         console.log(a)
      //     }
      isValidResolution(ref, variable) {
        var _a;
        if (this.block.type === types_1.AST_NODE_TYPES.Program) {
          return true;
        }
        const bodyStart = ((_a = this.block.body) == null ? void 0 : _a.range[0]) ?? -1;
        return !(variable.scope === this && ref.identifier.range[0] < bodyStart && // the reference is in the parameter part.
        variable.defs.every((d) => d.name.range[0] >= bodyStart));
      }
    };
    exports.FunctionScope = FunctionScope;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/scope/FunctionTypeScope.js
var require_FunctionTypeScope = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/scope/FunctionTypeScope.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FunctionTypeScope = void 0;
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var FunctionTypeScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, upperScope, block) {
        super(scopeManager, ScopeType_1.ScopeType.functionType, upperScope, block, false);
      }
    };
    exports.FunctionTypeScope = FunctionTypeScope;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/scope/GlobalScope.js
var require_GlobalScope = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/scope/GlobalScope.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GlobalScope = void 0;
    var types_1 = require_dist();
    var assert_1 = require_assert();
    var ImplicitGlobalVariableDefinition_1 = require_ImplicitGlobalVariableDefinition();
    var variable_1 = require_variable();
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var GlobalScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, block) {
        super(scopeManager, ScopeType_1.ScopeType.global, null, block, false);
        this.implicit = {
          set: /* @__PURE__ */ new Map(),
          variables: [],
          leftToBeResolved: []
        };
      }
      defineImplicitVariable(name, options) {
        this.defineVariable(new variable_1.ImplicitLibVariable(this, name, options), this.set, this.variables, null, null);
      }
      close(scopeManager) {
        (0, assert_1.assert)(this.leftToResolve);
        for (const ref of this.leftToResolve) {
          if (ref.maybeImplicitGlobal && !this.set.has(ref.identifier.name)) {
            const info = ref.maybeImplicitGlobal;
            const node = info.pattern;
            if (node && node.type === types_1.AST_NODE_TYPES.Identifier) {
              this.defineVariable(node.name, this.implicit.set, this.implicit.variables, node, new ImplicitGlobalVariableDefinition_1.ImplicitGlobalVariableDefinition(info.pattern, info.node));
            }
          }
        }
        this.implicit.leftToBeResolved = this.leftToResolve;
        return super.close(scopeManager);
      }
    };
    exports.GlobalScope = GlobalScope;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/scope/MappedTypeScope.js
var require_MappedTypeScope = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/scope/MappedTypeScope.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MappedTypeScope = void 0;
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var MappedTypeScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, upperScope, block) {
        super(scopeManager, ScopeType_1.ScopeType.mappedType, upperScope, block, false);
      }
    };
    exports.MappedTypeScope = MappedTypeScope;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/scope/ModuleScope.js
var require_ModuleScope = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/scope/ModuleScope.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ModuleScope = void 0;
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var ModuleScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, upperScope, block) {
        super(scopeManager, ScopeType_1.ScopeType.module, upperScope, block, false);
      }
    };
    exports.ModuleScope = ModuleScope;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/scope/Scope.js
var require_Scope = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/scope/Scope.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/scope/SwitchScope.js
var require_SwitchScope = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/scope/SwitchScope.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SwitchScope = void 0;
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var SwitchScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, upperScope, block) {
        super(scopeManager, ScopeType_1.ScopeType.switch, upperScope, block, false);
      }
    };
    exports.SwitchScope = SwitchScope;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/scope/TSEnumScope.js
var require_TSEnumScope = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/scope/TSEnumScope.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TSEnumScope = void 0;
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var TSEnumScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, upperScope, block) {
        super(scopeManager, ScopeType_1.ScopeType.tsEnum, upperScope, block, false);
      }
    };
    exports.TSEnumScope = TSEnumScope;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/scope/TSModuleScope.js
var require_TSModuleScope = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/scope/TSModuleScope.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TSModuleScope = void 0;
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var TSModuleScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, upperScope, block) {
        super(scopeManager, ScopeType_1.ScopeType.tsModule, upperScope, block, false);
      }
    };
    exports.TSModuleScope = TSModuleScope;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/scope/TypeScope.js
var require_TypeScope = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/scope/TypeScope.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TypeScope = void 0;
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var TypeScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, upperScope, block) {
        super(scopeManager, ScopeType_1.ScopeType.type, upperScope, block, false);
      }
    };
    exports.TypeScope = TypeScope;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/scope/WithScope.js
var require_WithScope = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/scope/WithScope.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WithScope = void 0;
    var assert_1 = require_assert();
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var WithScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, upperScope, block) {
        super(scopeManager, ScopeType_1.ScopeType.with, upperScope, block, false);
      }
      close(scopeManager) {
        if (this.shouldStaticallyClose()) {
          return super.close(scopeManager);
        }
        (0, assert_1.assert)(this.leftToResolve);
        this.leftToResolve.forEach((ref) => this.delegateToUpperScope(ref));
        this.leftToResolve = null;
        return this.upper;
      }
    };
    exports.WithScope = WithScope;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/scope/index.js
var require_scope = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/scope/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_BlockScope(), exports);
    __exportStar(require_CatchScope(), exports);
    __exportStar(require_ClassFieldInitializerScope(), exports);
    __exportStar(require_ClassScope(), exports);
    __exportStar(require_ConditionalTypeScope(), exports);
    __exportStar(require_ForScope(), exports);
    __exportStar(require_FunctionExpressionNameScope(), exports);
    __exportStar(require_FunctionScope(), exports);
    __exportStar(require_FunctionTypeScope(), exports);
    __exportStar(require_GlobalScope(), exports);
    __exportStar(require_MappedTypeScope(), exports);
    __exportStar(require_ModuleScope(), exports);
    __exportStar(require_Scope(), exports);
    __exportStar(require_ScopeType(), exports);
    __exportStar(require_SwitchScope(), exports);
    __exportStar(require_TSEnumScope(), exports);
    __exportStar(require_TSModuleScope(), exports);
    __exportStar(require_TypeScope(), exports);
    __exportStar(require_WithScope(), exports);
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/referencer/VisitorBase.js
var require_VisitorBase = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/referencer/VisitorBase.js"(exports) {
    "use strict";
    var __classPrivateFieldSet = exports && exports.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var __classPrivateFieldGet = exports && exports.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _VisitorBase_childVisitorKeys;
    var _VisitorBase_visitChildrenEvenIfSelectorExists;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.VisitorBase = void 0;
    var visitor_keys_1 = require_dist2();
    function isObject(obj) {
      return typeof obj === "object" && obj != null;
    }
    function isNode(node) {
      return isObject(node) && typeof node.type === "string";
    }
    var VisitorBase = class {
      constructor(options) {
        _VisitorBase_childVisitorKeys.set(this, void 0);
        _VisitorBase_visitChildrenEvenIfSelectorExists.set(this, void 0);
        __classPrivateFieldSet(this, _VisitorBase_childVisitorKeys, options.childVisitorKeys ?? visitor_keys_1.visitorKeys, "f");
        __classPrivateFieldSet(this, _VisitorBase_visitChildrenEvenIfSelectorExists, options.visitChildrenEvenIfSelectorExists ?? false, "f");
      }
      /**
       * Default method for visiting children.
       * @param node the node whose children should be visited
       * @param exclude a list of keys to not visit
       */
      visitChildren(node, excludeArr = []) {
        if ((node == null ? void 0 : node.type) == null) {
          return;
        }
        const exclude = /* @__PURE__ */ new Set([...excludeArr, "parent"]);
        const children = __classPrivateFieldGet(this, _VisitorBase_childVisitorKeys, "f")[node.type] ?? Object.keys(node);
        for (const key of children) {
          if (exclude.has(key)) {
            continue;
          }
          const child = node[key];
          if (!child) {
            continue;
          }
          if (Array.isArray(child)) {
            for (const subChild of child) {
              if (isNode(subChild)) {
                this.visit(subChild);
              }
            }
          } else if (isNode(child)) {
            this.visit(child);
          }
        }
      }
      /**
       * Dispatching node.
       */
      visit(node) {
        if ((node == null ? void 0 : node.type) == null) {
          return;
        }
        const visitor = this[node.type];
        if (visitor) {
          visitor.call(this, node);
          if (!__classPrivateFieldGet(this, _VisitorBase_visitChildrenEvenIfSelectorExists, "f")) {
            return;
          }
        }
        this.visitChildren(node);
      }
    };
    exports.VisitorBase = VisitorBase;
    _VisitorBase_childVisitorKeys = /* @__PURE__ */ new WeakMap(), _VisitorBase_visitChildrenEvenIfSelectorExists = /* @__PURE__ */ new WeakMap();
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/referencer/PatternVisitor.js
var require_PatternVisitor = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/referencer/PatternVisitor.js"(exports) {
    "use strict";
    var __classPrivateFieldSet = exports && exports.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var __classPrivateFieldGet = exports && exports.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _PatternVisitor_rootPattern;
    var _PatternVisitor_callback;
    var _PatternVisitor_assignments;
    var _PatternVisitor_restElements;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PatternVisitor = void 0;
    var types_1 = require_dist();
    var VisitorBase_1 = require_VisitorBase();
    var PatternVisitor = class extends VisitorBase_1.VisitorBase {
      static isPattern(node) {
        const nodeType = node.type;
        return nodeType === types_1.AST_NODE_TYPES.Identifier || nodeType === types_1.AST_NODE_TYPES.ObjectPattern || nodeType === types_1.AST_NODE_TYPES.ArrayPattern || nodeType === types_1.AST_NODE_TYPES.SpreadElement || nodeType === types_1.AST_NODE_TYPES.RestElement || nodeType === types_1.AST_NODE_TYPES.AssignmentPattern;
      }
      constructor(options, rootPattern, callback) {
        super(options);
        _PatternVisitor_rootPattern.set(this, void 0);
        _PatternVisitor_callback.set(this, void 0);
        _PatternVisitor_assignments.set(this, []);
        this.rightHandNodes = [];
        _PatternVisitor_restElements.set(this, []);
        __classPrivateFieldSet(this, _PatternVisitor_rootPattern, rootPattern, "f");
        __classPrivateFieldSet(this, _PatternVisitor_callback, callback, "f");
      }
      ArrayExpression(node) {
        node.elements.forEach(this.visit, this);
      }
      ArrayPattern(pattern) {
        for (const element of pattern.elements) {
          this.visit(element);
        }
      }
      AssignmentExpression(node) {
        __classPrivateFieldGet(this, _PatternVisitor_assignments, "f").push(node);
        this.visit(node.left);
        this.rightHandNodes.push(node.right);
        __classPrivateFieldGet(this, _PatternVisitor_assignments, "f").pop();
      }
      AssignmentPattern(pattern) {
        __classPrivateFieldGet(this, _PatternVisitor_assignments, "f").push(pattern);
        this.visit(pattern.left);
        this.rightHandNodes.push(pattern.right);
        __classPrivateFieldGet(this, _PatternVisitor_assignments, "f").pop();
      }
      CallExpression(node) {
        node.arguments.forEach((a) => {
          this.rightHandNodes.push(a);
        });
        this.visit(node.callee);
      }
      Decorator() {
      }
      Identifier(pattern) {
        const lastRestElement = __classPrivateFieldGet(this, _PatternVisitor_restElements, "f")[__classPrivateFieldGet(this, _PatternVisitor_restElements, "f").length - 1] ?? null;
        __classPrivateFieldGet(this, _PatternVisitor_callback, "f").call(this, pattern, {
          topLevel: pattern === __classPrivateFieldGet(this, _PatternVisitor_rootPattern, "f"),
          rest: lastRestElement != null && lastRestElement.argument === pattern,
          assignments: __classPrivateFieldGet(this, _PatternVisitor_assignments, "f")
        });
      }
      MemberExpression(node) {
        if (node.computed) {
          this.rightHandNodes.push(node.property);
        }
        this.rightHandNodes.push(node.object);
      }
      Property(property) {
        if (property.computed) {
          this.rightHandNodes.push(property.key);
        }
        this.visit(property.value);
      }
      RestElement(pattern) {
        __classPrivateFieldGet(this, _PatternVisitor_restElements, "f").push(pattern);
        this.visit(pattern.argument);
        __classPrivateFieldGet(this, _PatternVisitor_restElements, "f").pop();
      }
      SpreadElement(node) {
        this.visit(node.argument);
      }
      TSTypeAnnotation() {
      }
    };
    exports.PatternVisitor = PatternVisitor;
    _PatternVisitor_rootPattern = /* @__PURE__ */ new WeakMap(), _PatternVisitor_callback = /* @__PURE__ */ new WeakMap(), _PatternVisitor_assignments = /* @__PURE__ */ new WeakMap(), _PatternVisitor_restElements = /* @__PURE__ */ new WeakMap();
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/referencer/Visitor.js
var require_Visitor = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/referencer/Visitor.js"(exports) {
    "use strict";
    var __classPrivateFieldGet = exports && exports.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var __classPrivateFieldSet = exports && exports.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var _Visitor_options;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.VisitorBase = exports.Visitor = void 0;
    var PatternVisitor_1 = require_PatternVisitor();
    var VisitorBase_1 = require_VisitorBase();
    Object.defineProperty(exports, "VisitorBase", { enumerable: true, get: function() {
      return VisitorBase_1.VisitorBase;
    } });
    var Visitor = class _Visitor extends VisitorBase_1.VisitorBase {
      constructor(optionsOrVisitor) {
        super(optionsOrVisitor instanceof _Visitor ? __classPrivateFieldGet(optionsOrVisitor, _Visitor_options, "f") : optionsOrVisitor);
        _Visitor_options.set(this, void 0);
        __classPrivateFieldSet(this, _Visitor_options, optionsOrVisitor instanceof _Visitor ? __classPrivateFieldGet(optionsOrVisitor, _Visitor_options, "f") : optionsOrVisitor, "f");
      }
      visitPattern(node, callback, options = { processRightHandNodes: false }) {
        const visitor = new PatternVisitor_1.PatternVisitor(__classPrivateFieldGet(this, _Visitor_options, "f"), node, callback);
        visitor.visit(node);
        if (options.processRightHandNodes) {
          visitor.rightHandNodes.forEach(this.visit, this);
        }
      }
    };
    exports.Visitor = Visitor;
    _Visitor_options = /* @__PURE__ */ new WeakMap();
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/referencer/TypeVisitor.js
var require_TypeVisitor = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/referencer/TypeVisitor.js"(exports) {
    "use strict";
    var __classPrivateFieldSet = exports && exports.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var __classPrivateFieldGet = exports && exports.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _TypeVisitor_referencer;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TypeVisitor = void 0;
    var types_1 = require_dist();
    var definition_1 = require_definition();
    var scope_1 = require_scope();
    var Visitor_1 = require_Visitor();
    var TypeVisitor = class _TypeVisitor extends Visitor_1.Visitor {
      constructor(referencer) {
        super(referencer);
        _TypeVisitor_referencer.set(this, void 0);
        __classPrivateFieldSet(this, _TypeVisitor_referencer, referencer, "f");
      }
      static visit(referencer, node) {
        const typeReferencer = new _TypeVisitor(referencer);
        typeReferencer.visit(node);
      }
      ///////////////////
      // Visit helpers //
      ///////////////////
      visitFunctionType(node) {
        __classPrivateFieldGet(this, _TypeVisitor_referencer, "f").scopeManager.nestFunctionTypeScope(node);
        this.visit(node.typeParameters);
        for (const param of node.params) {
          let didVisitAnnotation = false;
          this.visitPattern(param, (pattern, info) => {
            __classPrivateFieldGet(this, _TypeVisitor_referencer, "f").currentScope().defineIdentifier(pattern, new definition_1.ParameterDefinition(pattern, node, info.rest));
            if (pattern.typeAnnotation) {
              this.visit(pattern.typeAnnotation);
              didVisitAnnotation = true;
            }
          });
          if (!didVisitAnnotation && "typeAnnotation" in param) {
            this.visit(param.typeAnnotation);
          }
        }
        this.visit(node.returnType);
        __classPrivateFieldGet(this, _TypeVisitor_referencer, "f").close(node);
      }
      visitPropertyKey(node) {
        if (!node.computed) {
          return;
        }
        __classPrivateFieldGet(this, _TypeVisitor_referencer, "f").visit(node.key);
      }
      /////////////////////
      // Visit selectors //
      /////////////////////
      Identifier(node) {
        __classPrivateFieldGet(this, _TypeVisitor_referencer, "f").currentScope().referenceType(node);
      }
      MemberExpression(node) {
        this.visit(node.object);
      }
      TSCallSignatureDeclaration(node) {
        this.visitFunctionType(node);
      }
      TSConditionalType(node) {
        __classPrivateFieldGet(this, _TypeVisitor_referencer, "f").scopeManager.nestConditionalTypeScope(node);
        this.visitChildren(node, ["falseType"]);
        __classPrivateFieldGet(this, _TypeVisitor_referencer, "f").close(node);
        this.visit(node.falseType);
      }
      TSConstructorType(node) {
        this.visitFunctionType(node);
      }
      TSConstructSignatureDeclaration(node) {
        this.visitFunctionType(node);
      }
      TSFunctionType(node) {
        this.visitFunctionType(node);
      }
      TSImportType(node) {
        this.visit(node.typeArguments);
      }
      TSIndexSignature(node) {
        for (const param of node.parameters) {
          if (param.type === types_1.AST_NODE_TYPES.Identifier) {
            this.visit(param.typeAnnotation);
          }
        }
        this.visit(node.typeAnnotation);
      }
      TSInferType(node) {
        const typeParameter = node.typeParameter;
        let scope = __classPrivateFieldGet(this, _TypeVisitor_referencer, "f").currentScope();
        if (scope.type === scope_1.ScopeType.functionType || scope.type === scope_1.ScopeType.mappedType) {
          let currentScope = scope.upper;
          while (currentScope) {
            if (currentScope.type === scope_1.ScopeType.functionType || currentScope.type === scope_1.ScopeType.mappedType) {
              currentScope = currentScope.upper;
              continue;
            }
            if (currentScope.type === scope_1.ScopeType.conditionalType) {
              scope = currentScope;
              break;
            }
            break;
          }
        }
        scope.defineIdentifier(typeParameter.name, new definition_1.TypeDefinition(typeParameter.name, typeParameter));
        this.visit(typeParameter.constraint);
      }
      TSInterfaceDeclaration(node) {
        var _a;
        __classPrivateFieldGet(this, _TypeVisitor_referencer, "f").currentScope().defineIdentifier(node.id, new definition_1.TypeDefinition(node.id, node));
        if (node.typeParameters) {
          __classPrivateFieldGet(this, _TypeVisitor_referencer, "f").scopeManager.nestTypeScope(node);
          this.visit(node.typeParameters);
        }
        (_a = node.extends) == null ? void 0 : _a.forEach(this.visit, this);
        this.visit(node.body);
        if (node.typeParameters) {
          __classPrivateFieldGet(this, _TypeVisitor_referencer, "f").close(node);
        }
      }
      TSMappedType(node) {
        __classPrivateFieldGet(this, _TypeVisitor_referencer, "f").scopeManager.nestMappedTypeScope(node);
        this.visitChildren(node);
        __classPrivateFieldGet(this, _TypeVisitor_referencer, "f").close(node);
      }
      TSMethodSignature(node) {
        this.visitPropertyKey(node);
        this.visitFunctionType(node);
      }
      TSNamedTupleMember(node) {
        this.visit(node.elementType);
      }
      TSPropertySignature(node) {
        this.visitPropertyKey(node);
        this.visit(node.typeAnnotation);
      }
      TSQualifiedName(node) {
        this.visit(node.left);
      }
      TSTypeAliasDeclaration(node) {
        __classPrivateFieldGet(this, _TypeVisitor_referencer, "f").currentScope().defineIdentifier(node.id, new definition_1.TypeDefinition(node.id, node));
        if (node.typeParameters) {
          __classPrivateFieldGet(this, _TypeVisitor_referencer, "f").scopeManager.nestTypeScope(node);
          this.visit(node.typeParameters);
        }
        this.visit(node.typeAnnotation);
        if (node.typeParameters) {
          __classPrivateFieldGet(this, _TypeVisitor_referencer, "f").close(node);
        }
      }
      TSTypeParameter(node) {
        __classPrivateFieldGet(this, _TypeVisitor_referencer, "f").currentScope().defineIdentifier(node.name, new definition_1.TypeDefinition(node.name, node));
        this.visit(node.constraint);
        this.visit(node.default);
      }
      TSTypePredicate(node) {
        if (node.parameterName.type !== types_1.AST_NODE_TYPES.TSThisType) {
          __classPrivateFieldGet(this, _TypeVisitor_referencer, "f").currentScope().referenceValue(node.parameterName);
        }
        this.visit(node.typeAnnotation);
      }
      // a type query `typeof foo` is a special case that references a _non-type_ variable,
      TSTypeQuery(node) {
        let entityName;
        if (node.exprName.type === types_1.AST_NODE_TYPES.TSQualifiedName) {
          let iter = node.exprName;
          while (iter.left.type === types_1.AST_NODE_TYPES.TSQualifiedName) {
            iter = iter.left;
          }
          entityName = iter.left;
        } else {
          entityName = node.exprName;
          if (node.exprName.type === types_1.AST_NODE_TYPES.TSImportType) {
            this.visit(node.exprName);
          }
        }
        if (entityName.type === types_1.AST_NODE_TYPES.Identifier) {
          __classPrivateFieldGet(this, _TypeVisitor_referencer, "f").currentScope().referenceValue(entityName);
        }
        this.visit(node.typeArguments);
      }
      TSTypeAnnotation(node) {
        this.visitChildren(node);
      }
    };
    exports.TypeVisitor = TypeVisitor;
    _TypeVisitor_referencer = /* @__PURE__ */ new WeakMap();
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/referencer/ClassVisitor.js
var require_ClassVisitor = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/referencer/ClassVisitor.js"(exports) {
    "use strict";
    var __classPrivateFieldSet = exports && exports.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var __classPrivateFieldGet = exports && exports.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _ClassVisitor_classNode;
    var _ClassVisitor_referencer;
    var _ClassVisitor_emitDecoratorMetadata;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ClassVisitor = void 0;
    var types_1 = require_dist();
    var definition_1 = require_definition();
    var TypeVisitor_1 = require_TypeVisitor();
    var Visitor_1 = require_Visitor();
    var ClassVisitor = class _ClassVisitor extends Visitor_1.Visitor {
      constructor(referencer, node, emitDecoratorMetadata) {
        super(referencer);
        _ClassVisitor_classNode.set(this, void 0);
        _ClassVisitor_referencer.set(this, void 0);
        _ClassVisitor_emitDecoratorMetadata.set(this, void 0);
        __classPrivateFieldSet(this, _ClassVisitor_referencer, referencer, "f");
        __classPrivateFieldSet(this, _ClassVisitor_classNode, node, "f");
        __classPrivateFieldSet(this, _ClassVisitor_emitDecoratorMetadata, emitDecoratorMetadata, "f");
      }
      static visit(referencer, node, emitDecoratorMetadata) {
        const classVisitor = new _ClassVisitor(referencer, node, emitDecoratorMetadata);
        classVisitor.visitClass(node);
      }
      visit(node) {
        if (node && node.type in this) {
          super.visit(node);
        } else {
          __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").visit(node);
        }
      }
      ///////////////////
      // Visit helpers //
      ///////////////////
      visitClass(node) {
        var _a;
        if (node.type === types_1.AST_NODE_TYPES.ClassDeclaration && node.id) {
          __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").currentScope().defineIdentifier(node.id, new definition_1.ClassNameDefinition(node.id, node));
        }
        node.decorators.forEach((d) => __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").visit(d));
        __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").scopeManager.nestClassScope(node);
        if (node.id) {
          __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").currentScope().defineIdentifier(node.id, new definition_1.ClassNameDefinition(node.id, node));
        }
        __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").visit(node.superClass);
        this.visitType(node.typeParameters);
        this.visitType(node.superTypeArguments);
        (_a = node.implements) == null ? void 0 : _a.forEach((imp) => this.visitType(imp));
        this.visit(node.body);
        __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").close(node);
      }
      visitPropertyDefinition(node) {
        this.visitPropertyBase(node);
        this.visitMetadataType(node.typeAnnotation, !!node.decorators.length);
      }
      visitFunctionParameterTypeAnnotation(node, withDecorators) {
        switch (node.type) {
          case types_1.AST_NODE_TYPES.AssignmentPattern:
            this.visitMetadataType(node.left.typeAnnotation, withDecorators);
            break;
          case types_1.AST_NODE_TYPES.TSParameterProperty:
            this.visitFunctionParameterTypeAnnotation(node.parameter, withDecorators);
            break;
          default:
            this.visitMetadataType(node.typeAnnotation, withDecorators);
        }
      }
      visitMethodFunction(node, methodNode) {
        var _a;
        if (node.id) {
          __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").scopeManager.nestFunctionExpressionNameScope(node);
        }
        __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").scopeManager.nestFunctionScope(node, true);
        let withMethodDecorators = !!methodNode.decorators.length;
        withMethodDecorators || (withMethodDecorators = methodNode.kind !== "set" && node.params.some((param) => param.decorators.length));
        if (!withMethodDecorators && methodNode.kind === "set") {
          const keyName = getLiteralMethodKeyName(methodNode);
          if (keyName != null && ((_a = __classPrivateFieldGet(this, _ClassVisitor_classNode, "f").body.body.find((node2) => node2 !== methodNode && node2.type === types_1.AST_NODE_TYPES.MethodDefinition && // Node must both be static or not
          node2.static === methodNode.static && getLiteralMethodKeyName(node2) === keyName)) == null ? void 0 : _a.decorators.length)) {
            withMethodDecorators = true;
          }
        }
        if (!withMethodDecorators && methodNode.kind === "constructor" && __classPrivateFieldGet(this, _ClassVisitor_classNode, "f").decorators.length) {
          withMethodDecorators = true;
        }
        for (const param of node.params) {
          this.visitPattern(param, (pattern, info) => {
            __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").currentScope().defineIdentifier(pattern, new definition_1.ParameterDefinition(pattern, node, info.rest));
            __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").referencingDefaultValue(pattern, info.assignments, null, true);
          }, { processRightHandNodes: true });
          this.visitFunctionParameterTypeAnnotation(param, withMethodDecorators);
          param.decorators.forEach((d) => this.visit(d));
        }
        this.visitMetadataType(node.returnType, withMethodDecorators);
        this.visitType(node.typeParameters);
        if (node.body) {
          if (node.body.type === types_1.AST_NODE_TYPES.BlockStatement) {
            __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").visitChildren(node.body);
          } else {
            __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").visit(node.body);
          }
        }
        __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").close(node);
      }
      visitPropertyBase(node) {
        if (node.computed) {
          __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").visit(node.key);
        }
        if (node.value) {
          if (node.type === types_1.AST_NODE_TYPES.PropertyDefinition || node.type === types_1.AST_NODE_TYPES.AccessorProperty) {
            __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").scopeManager.nestClassFieldInitializerScope(node.value);
          }
          __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").visit(node.value);
          if (node.type === types_1.AST_NODE_TYPES.PropertyDefinition || node.type === types_1.AST_NODE_TYPES.AccessorProperty) {
            __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").close(node.value);
          }
        }
        node.decorators.forEach((d) => __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").visit(d));
      }
      visitMethod(node) {
        if (node.computed) {
          __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").visit(node.key);
        }
        if (node.value.type === types_1.AST_NODE_TYPES.FunctionExpression) {
          this.visitMethodFunction(node.value, node);
        } else {
          __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").visit(node.value);
        }
        node.decorators.forEach((d) => __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").visit(d));
      }
      visitType(node) {
        if (!node) {
          return;
        }
        TypeVisitor_1.TypeVisitor.visit(__classPrivateFieldGet(this, _ClassVisitor_referencer, "f"), node);
      }
      visitMetadataType(node, withDecorators) {
        if (!node) {
          return;
        }
        if (__classPrivateFieldGet(this, _ClassVisitor_classNode, "f").type === types_1.AST_NODE_TYPES.ClassDeclaration && !__classPrivateFieldGet(this, _ClassVisitor_classNode, "f").declare && node.typeAnnotation.type === types_1.AST_NODE_TYPES.TSTypeReference && __classPrivateFieldGet(this, _ClassVisitor_emitDecoratorMetadata, "f")) {
          let entityName;
          if (node.typeAnnotation.typeName.type === types_1.AST_NODE_TYPES.TSQualifiedName) {
            let iter = node.typeAnnotation.typeName;
            while (iter.left.type === types_1.AST_NODE_TYPES.TSQualifiedName) {
              iter = iter.left;
            }
            entityName = iter.left;
          } else {
            entityName = node.typeAnnotation.typeName;
          }
          if (withDecorators) {
            if (entityName.type === types_1.AST_NODE_TYPES.Identifier) {
              __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").currentScope().referenceDualValueType(entityName);
            }
            if (node.typeAnnotation.typeArguments) {
              this.visitType(node.typeAnnotation.typeArguments);
            }
            return;
          }
        }
        this.visitType(node);
      }
      /////////////////////
      // Visit selectors //
      /////////////////////
      AccessorProperty(node) {
        this.visitPropertyDefinition(node);
      }
      ClassBody(node) {
        this.visitChildren(node);
      }
      PropertyDefinition(node) {
        this.visitPropertyDefinition(node);
      }
      MethodDefinition(node) {
        this.visitMethod(node);
      }
      TSAbstractAccessorProperty(node) {
        this.visitPropertyDefinition(node);
      }
      TSAbstractPropertyDefinition(node) {
        this.visitPropertyDefinition(node);
      }
      TSAbstractMethodDefinition(node) {
        this.visitPropertyBase(node);
      }
      Identifier(node) {
        __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").visit(node);
      }
      PrivateIdentifier() {
      }
      StaticBlock(node) {
        __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").scopeManager.nestClassStaticBlockScope(node);
        node.body.forEach((b) => this.visit(b));
        __classPrivateFieldGet(this, _ClassVisitor_referencer, "f").close(node);
      }
    };
    exports.ClassVisitor = ClassVisitor;
    _ClassVisitor_classNode = /* @__PURE__ */ new WeakMap(), _ClassVisitor_referencer = /* @__PURE__ */ new WeakMap(), _ClassVisitor_emitDecoratorMetadata = /* @__PURE__ */ new WeakMap();
    function getLiteralMethodKeyName(node) {
      if (node.computed && node.key.type === types_1.AST_NODE_TYPES.Literal) {
        if (typeof node.key.value === "string" || typeof node.key.value === "number") {
          return node.key.value;
        }
      } else if (!node.computed && node.key.type === types_1.AST_NODE_TYPES.Identifier) {
        return node.key.name;
      }
      return null;
    }
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/referencer/ExportVisitor.js
var require_ExportVisitor = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/referencer/ExportVisitor.js"(exports) {
    "use strict";
    var __classPrivateFieldSet = exports && exports.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var __classPrivateFieldGet = exports && exports.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _ExportVisitor_referencer;
    var _ExportVisitor_exportNode;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ExportVisitor = void 0;
    var types_1 = require_dist();
    var Visitor_1 = require_Visitor();
    var ExportVisitor = class _ExportVisitor extends Visitor_1.Visitor {
      constructor(node, referencer) {
        super(referencer);
        _ExportVisitor_referencer.set(this, void 0);
        _ExportVisitor_exportNode.set(this, void 0);
        __classPrivateFieldSet(this, _ExportVisitor_exportNode, node, "f");
        __classPrivateFieldSet(this, _ExportVisitor_referencer, referencer, "f");
      }
      static visit(referencer, node) {
        const exportReferencer = new _ExportVisitor(node, referencer);
        exportReferencer.visit(node);
      }
      Identifier(node) {
        if (__classPrivateFieldGet(this, _ExportVisitor_exportNode, "f").exportKind === "type") {
          __classPrivateFieldGet(this, _ExportVisitor_referencer, "f").currentScope().referenceType(node);
        } else {
          __classPrivateFieldGet(this, _ExportVisitor_referencer, "f").currentScope().referenceDualValueType(node);
        }
      }
      ExportDefaultDeclaration(node) {
        if (node.declaration.type === types_1.AST_NODE_TYPES.Identifier) {
          this.visit(node.declaration);
        } else {
        }
      }
      ExportNamedDeclaration(node) {
        if (node.source) {
          return;
        }
        if (!node.declaration) {
          this.visitChildren(node);
        } else {
        }
      }
      ExportSpecifier(node) {
        if (node.exportKind === "type") {
          __classPrivateFieldGet(this, _ExportVisitor_referencer, "f").currentScope().referenceType(node.local);
        } else {
          this.visit(node.local);
        }
      }
    };
    exports.ExportVisitor = ExportVisitor;
    _ExportVisitor_referencer = /* @__PURE__ */ new WeakMap(), _ExportVisitor_exportNode = /* @__PURE__ */ new WeakMap();
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/referencer/ImportVisitor.js
var require_ImportVisitor = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/referencer/ImportVisitor.js"(exports) {
    "use strict";
    var __classPrivateFieldSet = exports && exports.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var __classPrivateFieldGet = exports && exports.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _ImportVisitor_declaration;
    var _ImportVisitor_referencer;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ImportVisitor = void 0;
    var definition_1 = require_definition();
    var Visitor_1 = require_Visitor();
    var ImportVisitor = class _ImportVisitor extends Visitor_1.Visitor {
      constructor(declaration, referencer) {
        super(referencer);
        _ImportVisitor_declaration.set(this, void 0);
        _ImportVisitor_referencer.set(this, void 0);
        __classPrivateFieldSet(this, _ImportVisitor_declaration, declaration, "f");
        __classPrivateFieldSet(this, _ImportVisitor_referencer, referencer, "f");
      }
      static visit(referencer, declaration) {
        const importReferencer = new _ImportVisitor(declaration, referencer);
        importReferencer.visit(declaration);
      }
      visitImport(id, specifier) {
        __classPrivateFieldGet(this, _ImportVisitor_referencer, "f").currentScope().defineIdentifier(id, new definition_1.ImportBindingDefinition(id, specifier, __classPrivateFieldGet(this, _ImportVisitor_declaration, "f")));
      }
      ImportNamespaceSpecifier(node) {
        const local = node.local;
        this.visitImport(local, node);
      }
      ImportDefaultSpecifier(node) {
        const local = node.local;
        this.visitImport(local, node);
      }
      ImportSpecifier(node) {
        const local = node.local;
        this.visitImport(local, node);
      }
    };
    exports.ImportVisitor = ImportVisitor;
    _ImportVisitor_declaration = /* @__PURE__ */ new WeakMap(), _ImportVisitor_referencer = /* @__PURE__ */ new WeakMap();
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/referencer/Referencer.js
var require_Referencer = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/referencer/Referencer.js"(exports) {
    "use strict";
    var __classPrivateFieldSet = exports && exports.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var __classPrivateFieldGet = exports && exports.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _Referencer_jsxPragma;
    var _Referencer_jsxFragmentName;
    var _Referencer_hasReferencedJsxFactory;
    var _Referencer_hasReferencedJsxFragmentFactory;
    var _Referencer_lib;
    var _Referencer_emitDecoratorMetadata;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Referencer = void 0;
    var types_1 = require_dist();
    var assert_1 = require_assert();
    var definition_1 = require_definition();
    var lib_1 = require_lib3();
    var ClassVisitor_1 = require_ClassVisitor();
    var ExportVisitor_1 = require_ExportVisitor();
    var ImportVisitor_1 = require_ImportVisitor();
    var PatternVisitor_1 = require_PatternVisitor();
    var Reference_1 = require_Reference();
    var TypeVisitor_1 = require_TypeVisitor();
    var Visitor_1 = require_Visitor();
    var Referencer = class extends Visitor_1.Visitor {
      constructor(options, scopeManager) {
        super(options);
        _Referencer_jsxPragma.set(this, void 0);
        _Referencer_jsxFragmentName.set(this, void 0);
        _Referencer_hasReferencedJsxFactory.set(this, false);
        _Referencer_hasReferencedJsxFragmentFactory.set(this, false);
        _Referencer_lib.set(this, void 0);
        _Referencer_emitDecoratorMetadata.set(this, void 0);
        this.scopeManager = scopeManager;
        __classPrivateFieldSet(this, _Referencer_jsxPragma, options.jsxPragma, "f");
        __classPrivateFieldSet(this, _Referencer_jsxFragmentName, options.jsxFragmentName, "f");
        __classPrivateFieldSet(this, _Referencer_lib, options.lib, "f");
        __classPrivateFieldSet(this, _Referencer_emitDecoratorMetadata, options.emitDecoratorMetadata, "f");
      }
      currentScope(dontThrowOnNull) {
        if (!dontThrowOnNull) {
          (0, assert_1.assert)(this.scopeManager.currentScope, "aaa");
        }
        return this.scopeManager.currentScope;
      }
      close(node) {
        while (this.currentScope(true) && node === this.currentScope().block) {
          this.scopeManager.currentScope = this.currentScope().close(this.scopeManager);
        }
      }
      referencingDefaultValue(pattern, assignments, maybeImplicitGlobal, init) {
        assignments.forEach((assignment) => {
          this.currentScope().referenceValue(pattern, Reference_1.ReferenceFlag.Write, assignment.right, maybeImplicitGlobal, init);
        });
      }
      populateGlobalsFromLib(globalScope) {
        for (const lib of __classPrivateFieldGet(this, _Referencer_lib, "f")) {
          const variables = lib_1.lib[lib];
          if (!variables) {
            throw new Error(`Invalid value for lib provided: ${lib}`);
          }
          for (const [name, variable] of Object.entries(variables)) {
            globalScope.defineImplicitVariable(name, variable);
          }
        }
        globalScope.defineImplicitVariable("const", {
          eslintImplicitGlobalSetting: "readonly",
          isTypeVariable: true,
          isValueVariable: false
        });
      }
      /**
       * Searches for a variable named "name" in the upper scopes and adds a pseudo-reference from itself to itself
       */
      referenceInSomeUpperScope(name) {
        let scope = this.scopeManager.currentScope;
        while (scope) {
          const variable = scope.set.get(name);
          if (!variable) {
            scope = scope.upper;
            continue;
          }
          scope.referenceValue(variable.identifiers[0]);
          return true;
        }
        return false;
      }
      referenceJsxPragma() {
        if (__classPrivateFieldGet(this, _Referencer_jsxPragma, "f") == null || __classPrivateFieldGet(this, _Referencer_hasReferencedJsxFactory, "f")) {
          return;
        }
        __classPrivateFieldSet(this, _Referencer_hasReferencedJsxFactory, this.referenceInSomeUpperScope(__classPrivateFieldGet(this, _Referencer_jsxPragma, "f")), "f");
      }
      referenceJsxFragment() {
        if (__classPrivateFieldGet(this, _Referencer_jsxFragmentName, "f") == null || __classPrivateFieldGet(this, _Referencer_hasReferencedJsxFragmentFactory, "f")) {
          return;
        }
        __classPrivateFieldSet(this, _Referencer_hasReferencedJsxFragmentFactory, this.referenceInSomeUpperScope(__classPrivateFieldGet(this, _Referencer_jsxFragmentName, "f")), "f");
      }
      ///////////////////
      // Visit helpers //
      ///////////////////
      visitClass(node) {
        ClassVisitor_1.ClassVisitor.visit(this, node, __classPrivateFieldGet(this, _Referencer_emitDecoratorMetadata, "f"));
      }
      visitForIn(node) {
        if (node.left.type === types_1.AST_NODE_TYPES.VariableDeclaration && node.left.kind !== "var") {
          this.scopeManager.nestForScope(node);
        }
        if (node.left.type === types_1.AST_NODE_TYPES.VariableDeclaration) {
          this.visit(node.left);
          this.visitPattern(node.left.declarations[0].id, (pattern) => {
            this.currentScope().referenceValue(pattern, Reference_1.ReferenceFlag.Write, node.right, null, true);
          });
        } else {
          this.visitPattern(node.left, (pattern, info) => {
            const maybeImplicitGlobal = !this.currentScope().isStrict ? {
              pattern,
              node
            } : null;
            this.referencingDefaultValue(pattern, info.assignments, maybeImplicitGlobal, false);
            this.currentScope().referenceValue(pattern, Reference_1.ReferenceFlag.Write, node.right, maybeImplicitGlobal, false);
          }, { processRightHandNodes: true });
        }
        this.visit(node.right);
        this.visit(node.body);
        this.close(node);
      }
      visitFunctionParameterTypeAnnotation(node) {
        switch (node.type) {
          case types_1.AST_NODE_TYPES.AssignmentPattern:
            this.visitType(node.left.typeAnnotation);
            break;
          case types_1.AST_NODE_TYPES.TSParameterProperty:
            this.visitFunctionParameterTypeAnnotation(node.parameter);
            break;
          default:
            this.visitType(node.typeAnnotation);
            break;
        }
      }
      visitFunction(node) {
        if (node.type === types_1.AST_NODE_TYPES.FunctionExpression) {
          if (node.id) {
            this.scopeManager.nestFunctionExpressionNameScope(node);
          }
        } else if (node.id) {
          this.currentScope().defineIdentifier(node.id, new definition_1.FunctionNameDefinition(node.id, node));
        }
        this.scopeManager.nestFunctionScope(node, false);
        for (const param of node.params) {
          this.visitPattern(param, (pattern, info) => {
            this.currentScope().defineIdentifier(pattern, new definition_1.ParameterDefinition(pattern, node, info.rest));
            this.referencingDefaultValue(pattern, info.assignments, null, true);
          }, { processRightHandNodes: true });
          this.visitFunctionParameterTypeAnnotation(param);
          param.decorators.forEach((d) => this.visit(d));
        }
        this.visitType(node.returnType);
        this.visitType(node.typeParameters);
        if (node.body) {
          if (node.body.type === types_1.AST_NODE_TYPES.BlockStatement) {
            this.visitChildren(node.body);
          } else {
            this.visit(node.body);
          }
        }
        this.close(node);
      }
      visitProperty(node) {
        if (node.computed) {
          this.visit(node.key);
        }
        this.visit(node.value);
      }
      visitType(node) {
        if (!node) {
          return;
        }
        TypeVisitor_1.TypeVisitor.visit(this, node);
      }
      visitTypeAssertion(node) {
        this.visit(node.expression);
        this.visitType(node.typeAnnotation);
      }
      /////////////////////
      // Visit selectors //
      /////////////////////
      ArrowFunctionExpression(node) {
        this.visitFunction(node);
      }
      AssignmentExpression(node) {
        let left = node.left;
        switch (left.type) {
          case types_1.AST_NODE_TYPES.TSAsExpression:
          case types_1.AST_NODE_TYPES.TSTypeAssertion:
            this.visitType(left.typeAnnotation);
          case types_1.AST_NODE_TYPES.TSNonNullExpression:
            left = left.expression;
        }
        if (PatternVisitor_1.PatternVisitor.isPattern(left)) {
          if (node.operator === "=") {
            this.visitPattern(left, (pattern, info) => {
              const maybeImplicitGlobal = !this.currentScope().isStrict ? {
                pattern,
                node
              } : null;
              this.referencingDefaultValue(pattern, info.assignments, maybeImplicitGlobal, false);
              this.currentScope().referenceValue(pattern, Reference_1.ReferenceFlag.Write, node.right, maybeImplicitGlobal, false);
            }, { processRightHandNodes: true });
          } else if (left.type === types_1.AST_NODE_TYPES.Identifier) {
            this.currentScope().referenceValue(left, Reference_1.ReferenceFlag.ReadWrite, node.right);
          }
        } else {
          this.visit(left);
        }
        this.visit(node.right);
      }
      BlockStatement(node) {
        this.scopeManager.nestBlockScope(node);
        this.visitChildren(node);
        this.close(node);
      }
      BreakStatement() {
      }
      CallExpression(node) {
        this.visitChildren(node, ["typeArguments"]);
        this.visitType(node.typeArguments);
      }
      CatchClause(node) {
        this.scopeManager.nestCatchScope(node);
        if (node.param) {
          const param = node.param;
          this.visitPattern(param, (pattern, info) => {
            this.currentScope().defineIdentifier(pattern, new definition_1.CatchClauseDefinition(param, node));
            this.referencingDefaultValue(pattern, info.assignments, null, true);
          }, { processRightHandNodes: true });
        }
        this.visit(node.body);
        this.close(node);
      }
      ClassExpression(node) {
        this.visitClass(node);
      }
      ClassDeclaration(node) {
        this.visitClass(node);
      }
      ContinueStatement() {
      }
      ExportAllDeclaration() {
      }
      ExportDefaultDeclaration(node) {
        if (node.declaration.type === types_1.AST_NODE_TYPES.Identifier) {
          ExportVisitor_1.ExportVisitor.visit(this, node);
        } else {
          this.visit(node.declaration);
        }
      }
      ExportNamedDeclaration(node) {
        if (node.declaration) {
          this.visit(node.declaration);
        } else {
          ExportVisitor_1.ExportVisitor.visit(this, node);
        }
      }
      ForInStatement(node) {
        this.visitForIn(node);
      }
      ForOfStatement(node) {
        this.visitForIn(node);
      }
      ForStatement(node) {
        if (node.init && node.init.type === types_1.AST_NODE_TYPES.VariableDeclaration && node.init.kind !== "var") {
          this.scopeManager.nestForScope(node);
        }
        this.visitChildren(node);
        this.close(node);
      }
      FunctionDeclaration(node) {
        this.visitFunction(node);
      }
      FunctionExpression(node) {
        this.visitFunction(node);
      }
      Identifier(node) {
        this.currentScope().referenceValue(node);
        this.visitType(node.typeAnnotation);
      }
      ImportDeclaration(node) {
        (0, assert_1.assert)(this.scopeManager.isModule(), "ImportDeclaration should appear when the mode is ES6 and in the module context.");
        ImportVisitor_1.ImportVisitor.visit(this, node);
      }
      JSXAttribute(node) {
        this.visit(node.value);
      }
      JSXClosingElement() {
      }
      JSXFragment(node) {
        this.referenceJsxPragma();
        this.referenceJsxFragment();
        this.visitChildren(node);
      }
      JSXIdentifier(node) {
        this.currentScope().referenceValue(node);
      }
      JSXMemberExpression(node) {
        if (node.object.type !== types_1.AST_NODE_TYPES.JSXIdentifier) {
          this.visit(node.object);
        } else {
          if (node.object.name !== "this") {
            this.visit(node.object);
          }
        }
      }
      JSXOpeningElement(node) {
        this.referenceJsxPragma();
        if (node.name.type === types_1.AST_NODE_TYPES.JSXIdentifier) {
          if (node.name.name[0].toUpperCase() === node.name.name[0] || node.name.name === "this") {
            this.visit(node.name);
          }
        } else {
          this.visit(node.name);
        }
        this.visitType(node.typeArguments);
        for (const attr of node.attributes) {
          this.visit(attr);
        }
      }
      LabeledStatement(node) {
        this.visit(node.body);
      }
      MemberExpression(node) {
        this.visit(node.object);
        if (node.computed) {
          this.visit(node.property);
        }
      }
      MetaProperty() {
      }
      NewExpression(node) {
        this.visitChildren(node, ["typeArguments"]);
        this.visitType(node.typeArguments);
      }
      PrivateIdentifier() {
      }
      Program(node) {
        const globalScope = this.scopeManager.nestGlobalScope(node);
        this.populateGlobalsFromLib(globalScope);
        if (this.scopeManager.isGlobalReturn()) {
          this.currentScope().isStrict = false;
          this.scopeManager.nestFunctionScope(node, false);
        }
        if (this.scopeManager.isModule()) {
          this.scopeManager.nestModuleScope(node);
        }
        if (this.scopeManager.isImpliedStrict()) {
          this.currentScope().isStrict = true;
        }
        this.visitChildren(node);
        this.close(node);
      }
      Property(node) {
        this.visitProperty(node);
      }
      SwitchStatement(node) {
        this.visit(node.discriminant);
        this.scopeManager.nestSwitchScope(node);
        for (const switchCase of node.cases) {
          this.visit(switchCase);
        }
        this.close(node);
      }
      TaggedTemplateExpression(node) {
        this.visit(node.tag);
        this.visit(node.quasi);
        this.visitType(node.typeArguments);
      }
      TSAsExpression(node) {
        this.visitTypeAssertion(node);
      }
      TSDeclareFunction(node) {
        this.visitFunction(node);
      }
      TSImportEqualsDeclaration(node) {
        this.currentScope().defineIdentifier(node.id, new definition_1.ImportBindingDefinition(node.id, node, node));
        if (node.moduleReference.type === types_1.AST_NODE_TYPES.TSQualifiedName) {
          this.visit(node.moduleReference.left);
        } else {
          this.visit(node.moduleReference);
        }
      }
      TSEmptyBodyFunctionExpression(node) {
        this.visitFunction(node);
      }
      TSEnumDeclaration(node) {
        this.currentScope().defineIdentifier(node.id, new definition_1.TSEnumNameDefinition(node.id, node));
        this.scopeManager.nestTSEnumScope(node);
        this.currentScope().defineIdentifier(node.id, new definition_1.TSEnumNameDefinition(node.id, node));
        for (const member of node.members) {
          if (member.id.type === types_1.AST_NODE_TYPES.Literal && typeof member.id.value === "string") {
            const name = member.id;
            this.currentScope().defineLiteralIdentifier(name, new definition_1.TSEnumMemberDefinition(name, member));
          } else if (!member.computed && member.id.type === types_1.AST_NODE_TYPES.Identifier) {
            this.currentScope().defineIdentifier(member.id, new definition_1.TSEnumMemberDefinition(member.id, member));
          }
          this.visit(member.initializer);
        }
        this.close(node);
      }
      TSInstantiationExpression(node) {
        this.visitChildren(node, ["typeArguments"]);
        this.visitType(node.typeArguments);
      }
      TSInterfaceDeclaration(node) {
        this.visitType(node);
      }
      TSModuleDeclaration(node) {
        if (node.id.type === types_1.AST_NODE_TYPES.Identifier && !node.global) {
          this.currentScope().defineIdentifier(node.id, new definition_1.TSModuleNameDefinition(node.id, node));
        }
        this.scopeManager.nestTSModuleScope(node);
        this.visit(node.body);
        this.close(node);
      }
      TSSatisfiesExpression(node) {
        this.visitTypeAssertion(node);
      }
      TSTypeAliasDeclaration(node) {
        this.visitType(node);
      }
      TSTypeAssertion(node) {
        this.visitTypeAssertion(node);
      }
      UpdateExpression(node) {
        if (PatternVisitor_1.PatternVisitor.isPattern(node.argument)) {
          this.visitPattern(node.argument, (pattern) => {
            this.currentScope().referenceValue(pattern, Reference_1.ReferenceFlag.ReadWrite, null);
          });
        } else {
          this.visitChildren(node);
        }
      }
      VariableDeclaration(node) {
        const variableTargetScope = node.kind === "var" ? this.currentScope().variableScope : this.currentScope();
        for (const decl of node.declarations) {
          const init = decl.init;
          this.visitPattern(decl.id, (pattern, info) => {
            variableTargetScope.defineIdentifier(pattern, new definition_1.VariableDefinition(pattern, decl, node));
            this.referencingDefaultValue(pattern, info.assignments, null, true);
            if (init) {
              this.currentScope().referenceValue(pattern, Reference_1.ReferenceFlag.Write, init, null, true);
            }
          }, { processRightHandNodes: true });
          this.visit(decl.init);
          this.visitType(decl.id.typeAnnotation);
        }
      }
      WithStatement(node) {
        this.visit(node.object);
        this.scopeManager.nestWithScope(node);
        this.visit(node.body);
        this.close(node);
      }
      ImportAttribute() {
      }
    };
    exports.Referencer = Referencer;
    _Referencer_jsxPragma = /* @__PURE__ */ new WeakMap(), _Referencer_jsxFragmentName = /* @__PURE__ */ new WeakMap(), _Referencer_hasReferencedJsxFactory = /* @__PURE__ */ new WeakMap(), _Referencer_hasReferencedJsxFragmentFactory = /* @__PURE__ */ new WeakMap(), _Referencer_lib = /* @__PURE__ */ new WeakMap(), _Referencer_emitDecoratorMetadata = /* @__PURE__ */ new WeakMap();
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/referencer/index.js
var require_referencer = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/referencer/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Referencer = void 0;
    var Referencer_1 = require_Referencer();
    Object.defineProperty(exports, "Referencer", { enumerable: true, get: function() {
      return Referencer_1.Referencer;
    } });
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/scope/ClassStaticBlockScope.js
var require_ClassStaticBlockScope = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/scope/ClassStaticBlockScope.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ClassStaticBlockScope = void 0;
    var ScopeBase_1 = require_ScopeBase();
    var ScopeType_1 = require_ScopeType();
    var ClassStaticBlockScope = class extends ScopeBase_1.ScopeBase {
      constructor(scopeManager, upperScope, block) {
        super(scopeManager, ScopeType_1.ScopeType.classStaticBlock, upperScope, block, false);
      }
    };
    exports.ClassStaticBlockScope = ClassStaticBlockScope;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/ScopeManager.js
var require_ScopeManager = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/ScopeManager.js"(exports) {
    "use strict";
    var __classPrivateFieldSet = exports && exports.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var __classPrivateFieldGet = exports && exports.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _ScopeManager_options;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ScopeManager = void 0;
    var assert_1 = require_assert();
    var scope_1 = require_scope();
    var ClassFieldInitializerScope_1 = require_ClassFieldInitializerScope();
    var ClassStaticBlockScope_1 = require_ClassStaticBlockScope();
    var ScopeManager = class {
      get variables() {
        const variables = /* @__PURE__ */ new Set();
        function recurse(scope) {
          scope.variables.forEach((v) => variables.add(v));
          scope.childScopes.forEach(recurse);
        }
        this.scopes.forEach(recurse);
        return Array.from(variables).sort((a, b) => a.$id - b.$id);
      }
      constructor(options) {
        _ScopeManager_options.set(this, void 0);
        this.scopes = [];
        this.globalScope = null;
        this.nodeToScope = /* @__PURE__ */ new WeakMap();
        this.currentScope = null;
        __classPrivateFieldSet(this, _ScopeManager_options, options, "f");
        this.declaredVariables = /* @__PURE__ */ new WeakMap();
      }
      isGlobalReturn() {
        return __classPrivateFieldGet(this, _ScopeManager_options, "f").globalReturn === true;
      }
      isModule() {
        return __classPrivateFieldGet(this, _ScopeManager_options, "f").sourceType === "module";
      }
      isImpliedStrict() {
        return __classPrivateFieldGet(this, _ScopeManager_options, "f").impliedStrict === true;
      }
      isStrictModeSupported() {
        return true;
      }
      isES6() {
        return true;
      }
      /**
       * Get the variables that a given AST node defines. The gotten variables' `def[].node`/`def[].parent` property is the node.
       * If the node does not define any variable, this returns an empty array.
       * @param node An AST node to get their variables.
       * @public
       */
      getDeclaredVariables(node) {
        return this.declaredVariables.get(node) ?? [];
      }
      /**
       * Get the scope of a given AST node. The gotten scope's `block` property is the node.
       * This method never returns `function-expression-name` scope. If the node does not have their scope, this returns `null`.
       *
       * @param node An AST node to get their scope.
       * @param inner If the node has multiple scopes, this returns the outermost scope normally.
       *                If `inner` is `true` then this returns the innermost scope.
       * @public
       */
      acquire(node, inner = false) {
        function predicate(testScope) {
          if (testScope.type === scope_1.ScopeType.function && testScope.functionExpressionScope) {
            return false;
          }
          return true;
        }
        const scopes = this.nodeToScope.get(node);
        if (!scopes || scopes.length === 0) {
          return null;
        }
        if (scopes.length === 1) {
          return scopes[0];
        }
        if (inner) {
          for (let i = scopes.length - 1; i >= 0; --i) {
            const scope = scopes[i];
            if (predicate(scope)) {
              return scope;
            }
          }
          return null;
        }
        return scopes.find(predicate) ?? null;
      }
      nestScope(scope) {
        if (scope instanceof scope_1.GlobalScope) {
          (0, assert_1.assert)(this.currentScope == null);
          this.globalScope = scope;
        }
        this.currentScope = scope;
        return scope;
      }
      nestBlockScope(node) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.BlockScope(this, this.currentScope, node));
      }
      nestCatchScope(node) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.CatchScope(this, this.currentScope, node));
      }
      nestClassScope(node) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.ClassScope(this, this.currentScope, node));
      }
      nestClassFieldInitializerScope(node) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new ClassFieldInitializerScope_1.ClassFieldInitializerScope(this, this.currentScope, node));
      }
      nestClassStaticBlockScope(node) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new ClassStaticBlockScope_1.ClassStaticBlockScope(this, this.currentScope, node));
      }
      nestConditionalTypeScope(node) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.ConditionalTypeScope(this, this.currentScope, node));
      }
      nestForScope(node) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.ForScope(this, this.currentScope, node));
      }
      nestFunctionExpressionNameScope(node) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.FunctionExpressionNameScope(this, this.currentScope, node));
      }
      nestFunctionScope(node, isMethodDefinition) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.FunctionScope(this, this.currentScope, node, isMethodDefinition));
      }
      nestFunctionTypeScope(node) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.FunctionTypeScope(this, this.currentScope, node));
      }
      nestGlobalScope(node) {
        return this.nestScope(new scope_1.GlobalScope(this, node));
      }
      nestMappedTypeScope(node) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.MappedTypeScope(this, this.currentScope, node));
      }
      nestModuleScope(node) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.ModuleScope(this, this.currentScope, node));
      }
      nestSwitchScope(node) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.SwitchScope(this, this.currentScope, node));
      }
      nestTSEnumScope(node) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.TSEnumScope(this, this.currentScope, node));
      }
      nestTSModuleScope(node) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.TSModuleScope(this, this.currentScope, node));
      }
      nestTypeScope(node) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.TypeScope(this, this.currentScope, node));
      }
      nestWithScope(node) {
        (0, assert_1.assert)(this.currentScope);
        return this.nestScope(new scope_1.WithScope(this, this.currentScope, node));
      }
    };
    exports.ScopeManager = ScopeManager;
    _ScopeManager_options = /* @__PURE__ */ new WeakMap();
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/analyze.js
var require_analyze = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/analyze.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.analyze = void 0;
    var visitor_keys_1 = require_dist2();
    var referencer_1 = require_referencer();
    var ScopeManager_1 = require_ScopeManager();
    var DEFAULT_OPTIONS = {
      childVisitorKeys: visitor_keys_1.visitorKeys,
      globalReturn: false,
      impliedStrict: false,
      jsxPragma: "React",
      jsxFragmentName: null,
      lib: ["es2018"],
      sourceType: "script",
      emitDecoratorMetadata: false
    };
    function analyze(tree, providedOptions) {
      const options = {
        childVisitorKeys: (providedOptions == null ? void 0 : providedOptions.childVisitorKeys) ?? DEFAULT_OPTIONS.childVisitorKeys,
        globalReturn: (providedOptions == null ? void 0 : providedOptions.globalReturn) ?? DEFAULT_OPTIONS.globalReturn,
        impliedStrict: (providedOptions == null ? void 0 : providedOptions.impliedStrict) ?? DEFAULT_OPTIONS.impliedStrict,
        jsxPragma: (providedOptions == null ? void 0 : providedOptions.jsxPragma) === void 0 ? DEFAULT_OPTIONS.jsxPragma : providedOptions.jsxPragma,
        jsxFragmentName: (providedOptions == null ? void 0 : providedOptions.jsxFragmentName) ?? DEFAULT_OPTIONS.jsxFragmentName,
        sourceType: (providedOptions == null ? void 0 : providedOptions.sourceType) ?? DEFAULT_OPTIONS.sourceType,
        lib: (providedOptions == null ? void 0 : providedOptions.lib) ?? ["esnext"],
        emitDecoratorMetadata: (providedOptions == null ? void 0 : providedOptions.emitDecoratorMetadata) ?? DEFAULT_OPTIONS.emitDecoratorMetadata
      };
      options.lib = options.lib.map((l) => l.toLowerCase());
      const scopeManager = new ScopeManager_1.ScopeManager(options);
      const referencer = new referencer_1.Referencer(options, scopeManager);
      referencer.visit(tree);
      return scopeManager;
    }
    exports.analyze = analyze;
  }
});

// node_modules/@typescript-eslint/scope-manager/dist/index.js
var require_dist3 = __commonJS({
  "node_modules/@typescript-eslint/scope-manager/dist/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ScopeManager = exports.PatternVisitor = exports.Visitor = exports.Reference = exports.analyze = void 0;
    var analyze_1 = require_analyze();
    Object.defineProperty(exports, "analyze", { enumerable: true, get: function() {
      return analyze_1.analyze;
    } });
    __exportStar(require_definition(), exports);
    var Reference_1 = require_Reference();
    Object.defineProperty(exports, "Reference", { enumerable: true, get: function() {
      return Reference_1.Reference;
    } });
    var Visitor_1 = require_Visitor();
    Object.defineProperty(exports, "Visitor", { enumerable: true, get: function() {
      return Visitor_1.Visitor;
    } });
    var PatternVisitor_1 = require_PatternVisitor();
    Object.defineProperty(exports, "PatternVisitor", { enumerable: true, get: function() {
      return PatternVisitor_1.PatternVisitor;
    } });
    __exportStar(require_scope(), exports);
    var ScopeManager_1 = require_ScopeManager();
    Object.defineProperty(exports, "ScopeManager", { enumerable: true, get: function() {
      return ScopeManager_1.ScopeManager;
    } });
    __exportStar(require_variable(), exports);
  }
});

// node_modules/@typescript-eslint/utils/dist/ts-eslint/Scope.js
var require_Scope2 = __commonJS({
  "node_modules/@typescript-eslint/utils/dist/ts-eslint/Scope.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Scope = void 0;
    var scopeManager = __importStar(require_dist3());
    var Scope;
    (function(Scope2) {
      Scope2.ScopeType = scopeManager.ScopeType;
      Scope2.DefinitionType = scopeManager.DefinitionType;
    })(Scope || (exports.Scope = Scope = {}));
  }
});

// node_modules/@typescript-eslint/utils/dist/ts-eslint/SourceCode.js
var require_SourceCode = __commonJS({
  "node_modules/@typescript-eslint/utils/dist/ts-eslint/SourceCode.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SourceCode = void 0;
    var eslint_1 = require("eslint");
    var SourceCode = class extends eslint_1.SourceCode {
    };
    exports.SourceCode = SourceCode;
  }
});

// node_modules/@typescript-eslint/utils/dist/ts-eslint/index.js
var require_ts_eslint = __commonJS({
  "node_modules/@typescript-eslint/utils/dist/ts-eslint/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_AST(), exports);
    __exportStar(require_CLIEngine(), exports);
    __exportStar(require_ESLint(), exports);
    __exportStar(require_Linter(), exports);
    __exportStar(require_ParserOptions(), exports);
    __exportStar(require_Rule(), exports);
    __exportStar(require_RuleTester(), exports);
    __exportStar(require_Scope2(), exports);
    __exportStar(require_SourceCode(), exports);
  }
});

// node_modules/@typescript-eslint/utils/dist/ts-utils/isArray.js
var require_isArray = __commonJS({
  "node_modules/@typescript-eslint/utils/dist/ts-utils/isArray.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isArray = void 0;
    function isArray(arg) {
      return Array.isArray(arg);
    }
    exports.isArray = isArray;
  }
});

// node_modules/@typescript-eslint/utils/dist/ts-utils/index.js
var require_ts_utils = __commonJS({
  "node_modules/@typescript-eslint/utils/dist/ts-utils/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_isArray(), exports);
  }
});

// node_modules/@typescript-eslint/utils/dist/index.js
var require_dist4 = __commonJS({
  "node_modules/@typescript-eslint/utils/dist/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TSUtils = exports.TSESLint = exports.JSONSchema = exports.ESLintUtils = exports.ASTUtils = void 0;
    var ASTUtils = __importStar(require_ast_utils());
    exports.ASTUtils = ASTUtils;
    var ESLintUtils = __importStar(require_eslint_utils3());
    exports.ESLintUtils = ESLintUtils;
    var JSONSchema = __importStar(require_json_schema());
    exports.JSONSchema = JSONSchema;
    var TSESLint2 = __importStar(require_ts_eslint());
    exports.TSESLint = TSESLint2;
    var TSUtils = __importStar(require_ts_utils());
    exports.TSUtils = TSUtils;
    __exportStar(require_ts_estree2(), exports);
  }
});

// src/index.ts
var src_exports = {};
__export(src_exports, {
  rules: () => rules
});
module.exports = __toCommonJS(src_exports);

// src/only-export-components.ts
var import_utils = __toESM(require_dist4());
var import_types = __toESM(require_dist());
var possibleReactExportRE = /^[A-Z][a-zA-Z0-9]*$/;
var strictReactExportRE = /^[A-Z][a-zA-Z0-9]*[a-z]+[a-zA-Z0-9]*$/;
var onlyExportComponents = {
  meta: {
    messages: {
      exportAll: "This rule can't verify that `export *` only exports components.",
      namedExport: "Fast refresh only works when a file only exports components. Use a new file to share constants or functions between components.",
      anonymousExport: "Fast refresh can't handle anonymous components. Add a name to your export.",
      localComponents: "Fast refresh only works when a file only exports components. Move your component(s) to a separate file.",
      noExport: "Fast refresh only works when a file has exports. Move your component(s) to a separate file."
    },
    type: "problem",
    schema: [
      {
        type: "object",
        properties: {
          allowConstantExport: { type: "boolean" },
          checkJS: { type: "boolean" },
          allowExportNames: { type: "array", items: { type: "string" } }
        },
        additionalProperties: false
      }
    ]
  },
  defaultOptions: [],
  create: (context) => {
    const {
      allowConstantExport = false,
      checkJS = false,
      allowExportNames
    } = context.options[0] || {};
    const filename = context.getFilename();
    if (filename.includes(".test.") || filename.includes(".spec.") || filename.includes(".stories.")) {
      return {};
    }
    const shouldScan = filename.endsWith(".jsx") || filename.endsWith(".tsx") || checkJS && filename.endsWith(".js");
    if (!shouldScan)
      return {};
    return {
      Program(program) {
        let hasExports = false;
        let mayHaveReactExport = false;
        let reactIsInScope = false;
        const localComponents = [];
        const nonComponentExports = [];
        const handleLocalIdentifier = (identifierNode) => {
          if (identifierNode.type !== "Identifier")
            return;
          if (possibleReactExportRE.test(identifierNode.name)) {
            localComponents.push(identifierNode);
          }
        };
        const handleExportIdentifier = (identifierNode, isFunction, init) => {
          if (identifierNode.type !== "Identifier") {
            nonComponentExports.push(identifierNode);
            return;
          }
          if (allowExportNames == null ? void 0 : allowExportNames.includes(identifierNode.name)) {
            return;
          }
          if (allowConstantExport && init && (init.type === "Literal" || init.type === "TemplateLiteral" || init.type === "BinaryExpression")) {
            return;
          }
          if (isFunction) {
            if (possibleReactExportRE.test(identifierNode.name)) {
              mayHaveReactExport = true;
            } else {
              nonComponentExports.push(identifierNode);
            }
          } else {
            if (init && // Switch to allowList?
            notReactComponentExpression.includes(init.type)) {
              nonComponentExports.push(identifierNode);
              return;
            }
            if (!mayHaveReactExport && possibleReactExportRE.test(identifierNode.name)) {
              mayHaveReactExport = true;
            }
            if (!strictReactExportRE.test(identifierNode.name)) {
              nonComponentExports.push(identifierNode);
            }
          }
        };
        const handleExportDeclaration = (node) => {
          var _a;
          if (node.type === "VariableDeclaration") {
            for (const variable of node.declarations) {
              handleExportIdentifier(
                variable.id,
                canBeReactFunctionComponent(variable.init),
                variable.init
              );
            }
          } else if (node.type === "FunctionDeclaration") {
            if (node.id === null) {
              context.report({ messageId: "anonymousExport", node });
            } else {
              handleExportIdentifier(node.id, true);
            }
          } else if (node.type === "CallExpression") {
            if (node.callee.type === "Identifier" && reactHOCs.includes(node.callee.name) && ((_a = node.arguments[0]) == null ? void 0 : _a.type) === "FunctionExpression" && node.arguments[0].id) {
              handleExportIdentifier(node.arguments[0].id, true);
            } else {
              context.report({ messageId: "anonymousExport", node });
            }
          } else if (node.type === "TSEnumDeclaration") {
            nonComponentExports.push(node.id);
          }
        };
        for (const node of program.body) {
          if (node.type === "ExportAllDeclaration") {
            if (node.exportKind === "type")
              continue;
            hasExports = true;
            context.report({ messageId: "exportAll", node });
          } else if (node.type === "ExportDefaultDeclaration") {
            hasExports = true;
            if (node.declaration.type === "VariableDeclaration" || node.declaration.type === "FunctionDeclaration" || node.declaration.type === "CallExpression") {
              handleExportDeclaration(node.declaration);
            }
            if (node.declaration.type === "Identifier") {
              handleExportIdentifier(node.declaration);
            }
            if (node.declaration.type === "ArrowFunctionExpression" && !node.declaration.id) {
              context.report({ messageId: "anonymousExport", node });
            }
          } else if (node.type === "ExportNamedDeclaration") {
            hasExports = true;
            if (node.declaration)
              handleExportDeclaration(node.declaration);
            for (const specifier of node.specifiers) {
              handleExportIdentifier(specifier.exported);
            }
          } else if (node.type === "VariableDeclaration") {
            for (const variable of node.declarations) {
              handleLocalIdentifier(variable.id);
            }
          } else if (node.type === "FunctionDeclaration") {
            handleLocalIdentifier(node.id);
          } else if (node.type === "ImportDeclaration") {
            if (node.source.value === "react") {
              reactIsInScope = true;
            }
          }
        }
        if (checkJS && !reactIsInScope)
          return;
        if (hasExports) {
          if (mayHaveReactExport) {
            for (const node of nonComponentExports) {
              context.report({ messageId: "namedExport", node });
            }
          } else if (localComponents.length) {
            for (const node of localComponents) {
              context.report({ messageId: "localComponents", node });
            }
          }
        } else if (localComponents.length) {
          for (const node of localComponents) {
            context.report({ messageId: "noExport", node });
          }
        }
      }
    };
  }
};
var reactHOCs = ["memo", "forwardRef"];
var canBeReactFunctionComponent = (init) => {
  if (!init)
    return false;
  if (init.type === "ArrowFunctionExpression")
    return true;
  if (init.type === "CallExpression") {
    if (init.callee.type === "Identifier") {
      return reactHOCs.includes(init.callee.name);
    }
  }
  return false;
};
var notReactComponentExpression = [
  "ArrayExpression",
  "AwaitExpression",
  "BinaryExpression",
  "ChainExpression",
  "ConditionalExpression",
  "Literal",
  "LogicalExpression",
  "ObjectExpression",
  "TaggedTemplateExpression",
  "TemplateLiteral",
  "ThisExpression",
  "UnaryExpression",
  "UpdateExpression"
];

// src/index.ts
var rules = {
  "only-export-components": onlyExportComponents
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  rules
});
