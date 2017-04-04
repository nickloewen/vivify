# minimal javascript notebook

Run your markdown document through `vivify-cli`. Now your fenced code blocks that start with 'javascript' are runnable in place, notebook style. (This is similar to [kajero](https://github.com/JoelOtter/kajero) but simpler, and capable of generating standalone pages.)

Here's an example:

``` javascript; runnable
alert('hello world') 
```

and another:

``` javascript; runnable
2 + 2
```

arrays just give boring text output:

``` javascript; runnable
[0, 1, 2, 3]
```

This one should only show the result:

```javascript; hidden
(function() { return 'surprise!' })()
```

This is a fenced code block that doesn't have the javascript type:

```javascript
console.error("can't touch this")
```

This is a regular pre tag:

    Preformatted text.

## Tests of other parts of markdown

### H3

* unordered list
  * a
  * b
  * c

1. ordered list
2. dos
3. tres

> blockquote  
> *blockquote*  
> **blockquote**  
> ~~blockquote~~  

#### H4

##### H5

###### H6
