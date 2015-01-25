# Rucker web framework naming conventions

### SASS

We use camelCase for variables and functions

**Example:**

```
$rkrNamespace
mxBoxModifiers()
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
[data-attr="rkr-value"]
```


### Global variables

GLobal variables may use only abbreviations that are easy to understand

```
$rkAttName - the attribute name
$rkBtnColor - the color of the button
```

*List of used abbreviations and their meaning*
| Abbreviation | Word |
| --- | --- |
| attr | attribute |
| ns | namespace |
| stkd | sticked |

_ This table should be updated whenever new abbreviations are used _

### Module specific variables

Use the module name right after the global namespace (rkr) so it is easier to detect when we use a module variable or a global one

```
$rkrNamespace - a global variable

$rkBoxNs - a variable of the "Box" module
```


