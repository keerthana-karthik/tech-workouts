Difference between null and undefined
-------------

> The undefined value is a primitive value used when a variable has not been assigned a value.



> The null value is a primitive value that represents the null, empty, or non-existent reference.

Let's see an example

```
 var Enki;
 alert(Enki); //shows undefined
 alert(typeof Enki); //shows undefined
```
null is an assignment value. It can be assigned to a variable as a representation of no value:

```
 var TestVar = null;
 alert(TestVar); //shows null
 alert(typeof TestVar); //shows object
```

From the preceding examples, it is clear that undefined and null are two distinct types: undefined is a type itself (undefined) while null is an object.