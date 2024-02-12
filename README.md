# SQLEXECUTOR


```markdown
# SQL Executor

SQL Executor is a lightweight library for executing mySQL queries in Node.js applications, it focuses on optimizing queries and prevent overhead issues,sqlExecutor also provides out of the box configuration yet giving you the opportunity to customize your own options

## Installation

You can install SQL Executor via npm:

```bash
npm install sqlexecutor
```

## Usage

To use SQL Executor in your Node.js application, first require it in your file:

```javascript
const Executor = require('sqlexecutor');
```

Then, create an instance of `Executor` with your database configuration:

```javascript
const worker = new Executor({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'my_database'
});
```
Create an executor by calling the worker

```javascript
const executor = worker.call
```
You can then execute SQL queries using the `executor` instance:

```javascript
executor('SELECT * FROM table_name')
    .then(results => {
        console.log(results);
    })
    .catch(error => {
        console.error(error);
    });
```

Alternatively, you can use the `executeQuery` method directly:

```javascript
worker.executeQuery('SELECT * FROM table_name')
    .then(results => {
        console.log(results);
    })
    .catch(error => {
        console.error(error);
    });
```

## API for bundle pooling

sqlexecutor ideally use a single connection pooling lifecycle to handle queries but you can choose to override that by calling 

```javascript
const bundle = worker.bundle
```
then 

```javascript

bundle('SELECT * FROM table_name')
    .then(results => {
        console.log(results);
    })
    .catch(error => {
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

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
```

Feel free to customize this template to include more information about your library, such as advanced usage, examples, configuration options, etc. Make sure to replace placeholders with actual information relevant to your library.