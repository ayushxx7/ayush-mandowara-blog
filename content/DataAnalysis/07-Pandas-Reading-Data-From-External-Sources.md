---
title: Reading data from external sources into a DataFrame
description: read from text, csv, json & sql
date: "2021-06-16"
image: "data-analysis.png"
author: "Ayush"
tags: ["python", "data-analysis", "pandas"]
---

<!-- vim-markdown-toc GFM -->

* [Reading from text file](#reading-from-text-file)
* [Reading from Database](#reading-from-database)
* [Scraping data using bs4](#scraping-data-using-bs4)
* [Reading data from PDF files (pyPDF2)](#reading-data-from-pdf-files-pypdf2)

<!-- vim-markdown-toc -->

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

## Scraping data using bs4
- Refer [Lyrics Extraction](https://github.com/ayushxx7/LyricsExtraction) and [Auto File Renamer](https://github.com/ayushxx7/Auto-File-Renamer) to see how web-scraping works
- Convert scraped data to desirable format so as to import it as a dataframe in Pandas

## Reading data from PDF files (pyPDF2)
See [PyPDF2 Github](https://github.com/mstamy2/PyPDF2) and [Docs](https://pythonhosted.org/PyPDF2/)
