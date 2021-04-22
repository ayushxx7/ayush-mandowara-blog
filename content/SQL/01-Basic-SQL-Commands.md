---
title: SQL Basics
description: A very brief intro on SQL queries
date: "2021-04-23"
image: "sql.jpg"
author: "Ayush"
tags: ["sql", "bigquery"]
---

# PURPOSE

- A list of SQL queries that any developer worth his salt must know (or at least understand)

## Listing everything inside a table

```sql heading="SELECT"
SELECT * FROM table;
```

- Note that this can be a very costly query when running on a service like bigquery
- It is adviced to always use a date column on which the table is partioned to reduce the query cost

```sql heading="Running Query for a specific date"
SELECT *
FROM table
WHERE PARTITION_TIME >= "2021-04-23";
```

## Accepted Logical Operators in SQL/BigQuery

| Column Type | Operator | Description                             |
| ----------- | -------- | --------------------------------------- |
| DATE        | >=       | Greater than or equal to specified date |
| BOOL        | IS       | Check if a value is true, false or null |
| BOOL        | NOT      | Negation                                |

```sql heading="IS NULL"
SELECT *
FROM table
WHERE PARTITION_TIME >= "2021-04-23"
AND
is_vtx_enabled IS NOT NULL;
```
