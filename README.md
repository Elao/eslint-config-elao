# eslint-config-elao

> Elao ESLint configuration

A configurable [ESLint](http://eslint.org/) configuration used in Elao projects.

## Installation

The config require the `eslint` package.

```console
$ npm install --save-dev eslint eslint-config-elao
```

## Usage

Create a `.eslintrc` file with this following configuration:

```json
{
  "extends": "eslint-config-elao"
}
```

Then run the following command:
```console
$ eslint "path/to/**/*.js"
```

### Extending the config

Add a `"rules"` key to your config and add your overrides rules there.

For example, to change the indentation from 2 spaces to 4 and turn off the `number-leading-zero` rule:

```json
{
  "extends": "eslint-config-elao",
  "rules": {
    "indentation": 4,
    "number-leading-zero": null
  }
}
```

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
