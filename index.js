module.exports = {
    parser: "babel-eslint",
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
        ecmaFeatures: {
            impliedStrict:true,
            jsx: true
        }
    },
    settings: {
        "import/extensions": [".js", ".jsx"],
        "import/resolver": {
            node: {
                // Note: will not complain if only _one_ of these files exists.
                extensions: [".js", ".jsx"],
                webpack: "webpack.config.js"
            }
        }
    },
    extends: ["eslint:recommended"],
    plugins: ["eslint-plugin-react", "eslint-plugin-filenames", "eslint-plugin-import"],
    globals: {
        Promise: true
    },
    env: {
        browser: true,
        node: true
    },
    rules: {
        /* Import Plugin */
        // Ensures an imported module can be resolved to a module on the local filesystem, as defined by standard Node require.resolve behavior
        "import/no-unresolved": "error",
        // Verifies that all named imports are part of the set of named exports in the referenced module.
        "import/named": "error",
        // If a default import is requested, this rule will report if there is no default export in the imported module.
        "import/default": "error",
        // Forbid import of modules using absolute paths
        "import/no-absolute-path": "error",
        // Forbid a module from importing itself
        "import/no-self-import": "error",
        // Ensures that there is no resolvable path back to this module via its dependencies.
        "import/no-cycle": ["error", { maxDepth: 5 }],
        // Use this rule to prevent unnecessary path segemnts in import and require statements.
        "import/no-useless-path-segments": "warn",
        // Reports funny business with exports, like repeated exports of names or defaults
        "import/export": "error",
        // Forbids the use of mutable exports with var or let.
        "import/no-mutable-exports": "warn",
        // Forbid the use of Node.js builtin modules. Can be useful for client-side web projects that do not have access to those modules.
        "import/no-nodejs-modules": "error",
        // This rule reports any imports that come after non-import statements.
        "import/first": "warn",
        // Reports if a resolved path is imported more than once.
        "import/no-duplicates": "warn",
        // Reports if a module's default export is unnamed.
        "import/no-anonymous-default-export": ["error", { allowCallExpression: false }],

        /* Filename Plugin */
        // Warning if the filename does not match the kebab case (a-z\-)
        "filenames/match-regex": ["warn", "^[a-z-]+$"],
        //'filenames/match-exported': ['error', 'kebab'],
        //'filenames/no-index': 'error', // Could be a good idea

        /* React Plugin */
        // This rule aims to ensure that any defaultProp has a non-required PropType declaration.
        "react/default-props-match-prop-types": "warn",
        // This rule aims to ensure that any non-required PropType declaration of a component has a corresponding defaultProps value.
        "react/require-default-props": "warn",
        // Prevent missing props validation in a React component definition
        "react/prop-types": "warn",
        // DisplayName allows you to name your component. This name is used by React in debugging messages.
        "react/display-name": "warn",
        // This rule should prevent usage of this.state inside setState calls. Such usage of this.state might result in errors when two state calls are called in batch and thus referencing old state and not the current state.
        "react/no-access-state-in-setstate": "warn",
        // Warn if an element uses an Array index in its key.
        "react/no-array-index-key": "warn",
        // This rule helps prevent problems caused by using children and the dangerouslySetInnerHTML prop at the same time.
        "react/no-danger-with-children": "error",
        // Several methods are deprecated between React versions. This rule will warn you if you try to use a deprecated method.
        "react/no-deprecated": "warn",
        // NEVER mutate this.state directly, as calling setState() afterwards may replace the mutation you made. Treat this.state as if it were immutable.
        "react/no-direct-mutation-state": "error",
        // Facebook will eventually deprecate findDOMNode as it blocks certain improvements in React in the future.
        "react/no-find-dom-node": "warn",
        // isMounted is an anti-pattern, is not available when using ES6 classes, and it is on its way to being officially deprecated.
        "react/no-is-mounted": "warn",
        // Warns if you have shouldComponentUpdate defined when defining a component that extends React.PureComponent.
        "react/no-redundant-should-component-update": "error",
        // ReactDOM.render() currently returns a reference to the root ReactComponent instance. However, using this return value is legacy and should be avoided because future versions of React
        "react/no-render-return-value": "warn",
        // Ensure no casing typos were made declaring static class properties and lifecycle methods. Checks that declared propTypes, contextTypes and childContextTypes is supported by react-props
        "react/no-typos": "error",
        // Currently, two ways are supported by React to refer to components. The first way, providing a string identifier, is now considered legacy in the official documentation. The documentation now prefers a second method -- referring to components by setting a property on the this object in the reference callback.
        "react/no-string-refs": "warn",
        // When using a stateless functional component (SFC), props/context aren't accessed in the same way as a class component or the create-react-class format
        "react/no-this-in-sfc": "error",
        // This rule prevents characters that you may have meant as JSX escape characters from being accidentally injected as a text node in JSX statements.
        "react/no-unescaped-entities": "warn",
        // Updating the state during the componentWillUpdate step can lead to indeterminate component state and is not allowed.
        "react/no-will-update-set-state": "error",
        // React offers you two way to create traditional components: using the ES5 create-react-class module or the new ES6 class system. This rule allow you to enforce one way or another.
        "react/prefer-es6-class": "warn",
        // Prevent missing React when using JSX
        "react/react-in-jsx-scope": "error",
        // When writing the render method in a component it is easy to forget to return the JSX content. This rule will warn if the return statement is missing.
        "react/require-render-return": "error",
        // There are some HTML elements that are only self-closing (e.g. img, br, hr). These are collectively known as void DOM elements. If you try to give these children
        "react/void-dom-elements-no-children": "error",
        // Allows you to enforce a consistent naming pattern for props which expect a boolean value.
        "react/boolean-prop-naming": "warn",
        // Restrict file extensions that may contain JSX
        "react/jsx-filename-extension": "warn",
        // Creating JSX elements with duplicate props can cause unexpected behavior in your application.
        "react/jsx-no-duplicate-props": "warn",
        // This rule prevents comment strings (e.g. beginning with // or /*) from being accidentally injected as a text node in JSX statements.
        "react/jsx-no-comment-textnodes": "warn",
        // Enforces coding style that user-defined JSX components are defined and referenced in PascalCase.
        "react/jsx-pascal-case": "error",

        /* Comments */
        // Warning if no comments
        // http://eslint.org/docs/rules/require-jsdoc
        "require-jsdoc": [
            "warn",
            {
                require: {
                    FunctionDeclaration: true,
                    MethodDefinition: true,
                    ClassDeclaration: false, // Disabling because of decorators
                    ArrowFunctionExpression: false // Documenting lambda is too much
                }
            }
        ],
        // Warning uncomplete comments
        // http://eslint.org/docs/rules/require-jsdoc
        "valid-jsdoc": [
            "warn",
            {
                requireParamDescription: true,
                requireReturn: false
            }
        ],
        /* General */
        // Error if not using simple quotes
        // http://eslint.org/docs/rules/quotes
        quotes: ["error", "single", "avoid-escape"],
        // Error if not using ===
        // http://eslint.org/docs/rules/eqeqeq
        eqeqeq: ["error", "always", { null: "ignore" }],
        strict: "error",
        // Error if using not camelcase variables
        // http://eslint.org/docs/rules/camelcase
        camelcase: "error",
        // Allowing _ in identifier
        // http://eslint.org/docs/rules/no-underscore-dangle
        "no-underscore-dangle": "off",
        // Constructor should begin with capital letter
        // http://eslint.org/docs/rules/new-cap
        "new-cap": "warn",
        // Error if not using single quotes in JSX
        // http://eslint.org/docs/rules/jsx-quotes
        "jsx-quotes": ["error", "prefer-single"],
        // Error if trailing comma
        // http://eslint.org/docs/rules/comma-dangle
        "comma-dangle": "error",
        // Error if using var (prefer let or cons)
        // http://eslint.org/docs/rules/no-var
        "no-var": "error",
        // Indentation (4 spaces)
        // http://eslint.org/docs/rules/indent
        indent: ["error", 4, { SwitchCase: 1 }],
        // Brace style (same line)
        // http://eslint.org/docs/rules/brace-style
        "brace-style": ["error", "1tbs", { allowSingleLine: true }],
        // Comma after element in array, etc
        // http://eslint.org/docs/rules/comma-style
        "comma-style": ["error", "last"],
        // Function should always be named
        // http://eslint.org/docs/rules/func-names
        "func-names": "error",
        // Spacing around colon
        // http://eslint.org/docs/rules/key-spacing
        "key-spacing": ["error", { beforeColon: false, afterColon: true }],
        // Maximum nested callbacks
        // http://eslint.org/docs/rules/max-nested-callbacks
        "max-nested-callbacks": ["warn", 3],
        // Avoid multiple empty lines (max 2)
        // http://eslint.org/docs/rules/no-multiple-empty-lines
        "no-multiple-empty-lines": "warn",
        // Quote props only if needed
        // http://eslint.org/docs/rules/quote-props
        "quote-props": ["warn", "as-needed"],
        // Do not use variable before they are defined
        // http://eslint.org/docs/rules/no-use-before-define
        "no-use-before-define": "error",
        // Switch must have default case, even if empty
        // http://eslint.org/docs/rules/default-case
        "default-case": "error",
        // Prefer foo.bar instead of foo["bar"]
        // http://eslint.org/docs/rules/dot-notation
        "dot-notation": "warn",
        // Alert should not be used
        // http://eslint.org/docs/rules/no-alert
        "no-alert": "warn",
        // Allowing console logging
        // http://eslint.org/docs/rules/no-console
        "no-console": "warn",
        // Eval should not be used in most case
        // http://eslint.org/docs/rules/no-eval
        "no-eval": "error",
        // No useless block
        // http://eslint.org/docs/rules/no-lone-blocks
        "no-lone-blocks": "error",
        // No multi spaces
        // http://eslint.org/docs/rules/no-multi-spaces
        "no-multi-spaces": "error",
        // No reassign to window or process
        // http://eslint.org/docs/rules/no-global-assign
        "no-global-assign": "error",
        // No multi line string (use backquote instead of \ in end of line)
        // http://eslint.org/docs/rules/no-multi-str
        "no-multi-str": "error",
        // No primitive wrapper
        // http://eslint.org/docs/rules/no-new-wrappers
        "no-new-wrappers": "error",
        // No variable redeclare
        // http://eslint.org/docs/rules/no-redeclare
        "no-redeclare": "error",
        // No return with an assign
        // http://eslint.org/docs/rules/no-return-assign
        "no-return-assign": "error",
        // No comparing a variable with itself
        // http://eslint.org/docs/rules/no-self-compare
        "no-self-compare": "error",
        // Throw error or exception, not litterals
        // http://eslint.org/docs/rules/no-throw-literal
        "no-throw-literal": "error",
        // No unused expressions
        // http://eslint.org/docs/rules/no-unused-expressions
        "no-unused-expressions": "error",
        // No TODO or fixme
        // http://eslint.org/docs/rules/no-warning-commentss
        "no-warning-comments": ["warn", { terms: ["todo", "fixme"], location: "anywhere" }],
        // Use radix in parseInt
        // http://eslint.org/docs/rules/radix
        radix: "error",
        // Wrap immediate function call in parenthesis
        // http://eslint.org/docs/rules/wrap-iife
        "wrap-iife": "error",
        // No constant condition
        // http://eslint.org/docs/rules/no-constant-condition
        "no-constant-condition": "error",
        // No duplicate arguments
        // http://eslint.org/docs/rules/no-dupe-args
        "no-dupe-args": "error",
        // No duplicate keys in object
        // http://eslint.org/docs/rules/no-dupe-key
        "no-dupe-keys": "error",
        // No duplicate case in switch
        // http://eslint.org/docs/rules/no-duplicate-case
        "no-duplicate-case": "error",
        // No empty statement
        // http://eslint.org/docs/rules/no-empty
        "no-empty": "error",
        // Error on extra semi colon
        // http://eslint.org/docs/rules/no-extra-semi
        "no-extra-semi": "error",
        // No reassign on function
        // http://eslint.org/docs/rules/no-func-assign
        "no-func-assign": "error",
        // No sparse arrays
        // http://eslint.org/docs/rules/no-sparse-arrays
        "no-sparse-arrays": "error",
        // No unreachable code
        // http://eslint.org/docs/rules/no-unreachable
        "no-unreachable": "error",
        // Use isNan, do not compare NaN
        // http://eslint.org/docs/rules/use-isnan
        "use-isnan": "error",
        // Ensure typeof literal is correct
        // http://eslint.org/docs/rules/valid-typeof
        "valid-typeof": "error",
        // Ensure spacing around block
        // http://eslint.org/docs/rules/space-before-blocks
        "space-before-blocks": "error",
        // Ensure spacing around fat arrow
        // http://eslint.org/docs/rules/arrow-spacing
        "arrow-spacing": "error",
        // Ensure spacing around keywords
        "keyword-spacing": "error",
        // Ensure that function parameter are not reassigned
        "no-param-reassign": ["error", { props: true }]
    }
};
