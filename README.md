# SQL Executor

SQL Executor is a lightweight library for executing mySQL queries in Node.js applications,
it focuses on optimizing queries and prevent overhead issues,
sqlExecutor also provides out of the box configuration yet giving you the opportunity to customize your own options.

## Installation

You can install SQL Executor via npm:

```bash
npm install sqlexecutor

```

or

```bash
yarn add sqlexecutor

```

## Usage

To use SQL Executor in your Node.js application, first require it in your file:

```javascript
const Executor = require("sqlexecutor");
```

Then, create an instance of `Executor` with your database configuration:

```javascript
const executor = new Executor({
  host: "localhost",
  user: "root",
  password: "",
  database: "my_database",
});
```

**_Note:_** There are default parameters set for you, see - [Table](##table) ,You only need to set the ones you need to change.

Then create an executor by calling the worker

```javascript
const executor = worker.call;
```

You can then execute SQL queries using the `executor` instance:

```javascript
executor("SELECT * FROM table_name")
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.error(error);
  });
```

## Or

You can instantiate it directly by adding `.call` to the Executor()

```javascript
const Executor = require("sqlexecutor");

const executor = new Executor({
  host: "localhost",
  user: "root",
  password: "",
  database: "my_database",
}).call;

executor("SELECT * FROM table_name")
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.error(error);
  });
```

Alternatively, you can use the `executeQuery` method directly:

```javascript
const Executor = require("sqlexecutor");

const worker = new Executor({
  host: "localhost",
  user: "root",
  password: "",
  database: "my_database",
});

worker
  .executeQuery("SELECT * FROM table_name")
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.error(error);
  });
```

There is no difference between `executor` and `worker.executeQuery` , it totally depends on preference.

## API for bundle pooling

sqlexecutor ideally use a single connection pooling lifecycle to handle queries but you can choose to override that by calling

```javascript
const bundle = worker.bundle;
```

then

```javascript
bundle("SELECT * FROM table_name")
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.error(error);
  });
```

### executor(query, params)

Executes a SQL query with optional parameters.

- `query`: String - SQL query string.
- `params`: Array (optional) - Query parameters.

Returns a Promise that resolves with the query results.

### SQL injection security

SQLExecutor enhances security by safeguarding against SQL injection attacks through the use of placeholders (?).

```javascript

executor('SELECT * FROM table_name where email = ?',[youremail@mail.com])
    .then(results => {
        console.log(results);
    })
    .catch(error => {
        console.error(error);
    });
```

## Table

This is the default parameters table, You only need to add parameters that differs from the dafault that you might want to use.

| Parameters         | Default      |
| ------------------ | ------------ |
| host               | "localhost"  |
| user               | "root"       |
| password           | empty string |
| database           | "my_database |
| waitForConnections | true         |
| connectionLimit    | 20           |
| queueLimit         | 0            |
| timezone           | "local"      |
| charset            | "utf8mb4"    |
| port               | 3306         |

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

For donations and collaboration , you can get to me through [email](mailto:peterninyo4@gmail.com)
