# Rucker web framework naming conventions

### SASS

We use camelCase for variables and functions so it is easier to separate SASS code from CSS that it generates.

**Example:**

```
$rkrNamespace
rkrMxBoxModifiers()
```


### CSS

The generated CSS code is in dashed style


**Example:**

```
.foo-bar {}
[data-foo="rkr-bar"] {}
```
### Namespaces

The default variable namespace used is "rkr".
The same namespace is used for attribute's values:

```
$rkrNamespace
[data-attr="rkr-value"]
```


### Global variables

GLobal variables may use only abbreviations that are easy to understand

```
$rkrAttName - the attribute name
$rkrBtnColor - the color of the button
```

*List of used abbreviations and their meaning*

| Abbreviation | Word |
| --- | --- |
| attr | attribute |
| com | component |
| doc | document |
| mod | module |
| ns | namespace |
| obj | object |
| stkd | sticked |

_This table should be updated whenever new abbreviations are used_

### Module specific variables

Use the module name right after the global namespace (rkr) so it is easier to detect when we use a module variable or a global one

```
$rkrNamespace - a global variable

$rkrBoxNs - a variable of the "Box" module
```


