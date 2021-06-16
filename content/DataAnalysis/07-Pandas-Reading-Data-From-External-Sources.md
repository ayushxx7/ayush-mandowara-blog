---
title: Reading data from external sources into a DataFrame
description: read from text, csv, json & sql
date: "2021-06-16"
image: "data-analysis.png"
author: "Ayush"
tags: ["python", "data-analysis", "pandas"]
---

## Reading from text file
```py
# Using encoding = "ISO-8859-1"
companies = pd.read_csv("companies.txt", sep="\t", encoding = "ISO-8859-1")
companies.head()
```

## Reading from Database
```py
import pymysql

# create a connection object 'conn'
conn = pymysql.connect(host="localhost", # your host, localhost for your local machine
                     user="root", # your username, usually "root" for localhost
                      passwd="yourpassword", # your password
                      db="world") # name of the data base; world comes inbuilt with mysql

# create a cursor object c
c = conn.cursor()

# execute a query using c.execute
c.execute("select * from city;")

# getting the first row of data as a tuple
all_rows = c.fetchall()

# to get only the first row, use c.fetchone() instead

# notice that it returns a tuple of tuples: each row is a tuple
print(type(all_rows))

# printing the first few rows
print(all_rows[:5])

df = pd.DataFrame(list(all_rows), columns=["ID", "Name", "Country", "District", "Population"])
df.head()
```

## Scaping data using bs4

## Reading data from PDF files (pyPDF2)
