---
title: Standardisation of Data
description: How to clean up data
date: "2021-06-20"
image: "data-analysis.png"
author: "Ayush"
tags: ["python", "data-analysis", "pandas"]
---

# Purpose
Whatever data you get will most likely not be in a format that can be processed directly. There will some form of data cleaning required. 
This blog focuses on some of the clean up techniques a data scientist can employ.


## Checklist for Fixing Rows

- Delete summary rows: Total, Subtotal rows
- Delete incorrect rows: Header rows, Footer rows
- Delete extra rows: Column number, indicators, Blank rows, Page No.

---

## Checklist for Fixing Columns

- Merge columns for creating unique identifiers if needed:
  >E.g. Merge State, City into Full address
- Split columns for more data: 
  > Split address to get State and City to analyse each separately
- Add column names: Add column names if missing
- Rename columns consistently: Abbreviations, encoded columns
- Delete columns: Delete unnecessary columns
- Align misaligned columns: Dataset may have shifted columns
- good methods add information, bad methods exaggerate information.

---

## Standardisation
- `Standardise units`: Ensure all observations under a variable have a common and consistent unit, e.g. convert lbs to kgs, miles/hr to km/hr, etc.
- `Scale values if required`:  Make sure the observations under a variable have a common scale
- `Standardise precision` for better presentation of data, e.g. 4.5312341 kgs to 4.53 kgs.
- `Remove outliers`: Remove high and low values that would disproportionately affect the results of your analysis.
- `Remove extra characters` like such as common prefix/suffix, leading/trailing/multiple spaces, etc. These are irrelevant to analysis.
- `Standardise case`: There are various cases that string variables may take, e.g. UPPERCASE, lowercase, Title Case, Sentence case, etc.
- `Standardise format`: E.g. 23/10/16 to 2016/10/23, “Modi, Narendra" to “Narendra Modi", etc.

---

- `Encode unicode properly`: In case the data is being read as junk characters, try to change encoding, E.g. CP1252 instead of UTF-8.
Convert incorrect data types: Correct the incorrect data types to the correct data types for ease of analysis. E.g. if numeric values are stored as strings, it would not be possible to calculate metrics such as mean, median, etc. Some of the common data type corrections are — string to number: "12,300" to “12300”; string to date: "2013-Aug" to “2013/08”; number to string: “PIN Code 110001” to "110001"; etc.
- `Correct values that go beyond range`: If some of the values are beyond logical range, e.g. temperature less than -273° C (0° K), you would need to correct them as required. A close look would help you check if there is scope for correction, or if the value needs to be removed.
- `Correct values not in the list`: Remove values that don’t belong to a list. E.g. In a data set containing blood groups of individuals, strings “E” or “F” are invalid values and can be removed.
- `Correct wrong structure`: Values that don’t follow a defined structure can be removed.  
E.g. In a data set containing pin codes of Indian cities, a pin code of 12 digits would be an invalid value and needs to be removed. Similarly, a phone number of 12 digits would be an invalid value.
- `Validate internal rules`: If there are internal rules such as a date of a product’s delivery must definitely be after the date of the order, they should be correct and consistent.

--- 

## Precision
Be careful when communicating information about your data
> saying 380 mil means a range of 370 to 390,   
> saying 381 means a range of 380 to 382.   

The level of precision should reflect the level confidence you have.

---

## Filtering
- `Deduplicate data`: Remove identical rows, remove rows where some columns are identical
- `Filter rows`: Filter by segment, filter by date period to get only the rows relevant to the analysis
- `Filter columns`: Pick columns relevant to the analysis
- `Aggregate` data: Group by required keys, aggregate the rest

---

## Conclusion
- It is often best to ignore missing values (that is keep it as it is) if the missing value cannot be filled from external source, or the value isn't obvious.
- Standardisation is required for correct analysis of data (eg: kilograms cannot be compared with pounds). 
- When communicating information about data, ensure that the precision that is communicated is according to the level of confidence we have about the information.
