# TypeScript
## Basic use of TypeScript
You need:

* Node
* NPM

### Init project
Before run, install this dependencies

<code>npm i -y</code>

<code>npm i typescript</code>

<code>npm i --save date-fns</code>

<code>npm i -D  @types/lodash</code>

<code>npm i -D  ts-node</code>

<code>npm i @capacitor/camera</code>

<code>npm install --save-dev @faker-js/
faker</code>

### Compile TS
To compile TS code, you need to use <code>npx tsc</code> or <code>npx tsc --watch</code> in main directory.
If you want to run code, move to dist folder and run <code>node 'file name'</code>

Or

**Using ts-node**

<code>npx ts-node 'file.ts'</code>


## What is your level?
**BASIC**
1. Hello World
2. Numbers
3. Booleans
4. Strings
5. Arrays
6. Any
7. Union Types
8. Alias
9. Null and Undefined
10. Fuctions
11. Void functions
12. Objects in functions
13. Objects
14. Import / Export (product folder)
15. Using TS in compatible lib (date-fns)
16. Using TS in non compatible Lib (lodash)

**INTERMEDIATE**
1. Enums
2. Tuples
3. Unknow
4. Never
5. Optional Params and Nullish-coalescing
6. Default
7. Rest
8. Overload
9. Overload II
10. Interfaces
11. Create Complex Interfaces (app folder)
    * Inheritance in Interfaces
    * Readonly
    * CRUD
    * Omit and Pick Type
    * Partial and Required
    * Readonly 
    * Type param in function
    * Readonly Array

**ADVANCED**
1. First Class
2. Methods
3. Public
4. Private
5. Constructor
6. Getters
7. Setters
8. Inheritance
9. Protected


## What are DTOs?
When you shouldn't send id or other param like created at, we can omit this, for example, in mongodb or in RDB.
We have this:

<code>
{
  "id": '045fdssdf44sdfsdf279',
  "title": 'My product',
  "price": 50,
  "createdAt": "2022-08-03T16:20:53"
}
</code>

In that non relatinal DB's, we not send id, or in RDB not send created at, so we send:

<code>
{
  "id": '045fdssdf44sdfsdf279',
  "title": 'My product',
  "price": 50  
}
</code>

In this example we omit this params, but we recivied all params from the backend.
This data is called DTO.
