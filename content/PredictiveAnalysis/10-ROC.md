---
title: Receiver Operating Characteristic (ROC) Curve
description: ROC Curve
date: "2021-08-30"
image: "roc.jpg"
author: "Ayush"
tags: ["python", "machine-learning", "predictive-analysis", "classification", "supervised-learning"]
---

# Purpose
Understanding ROC Curve

# ROC
ROC stands for Receiver Operating Characteristic curve. This name has emerged from the domain of electrical engineering around the 2nd World War when electrical and radar engineers used such curve to detect enemy planes. Since then, this concept has found its application in many fields, machine learning being the latest one.

# Sensitivity
- True Positive Rate
$\frac{\text{True Positive}}{\text{True Positive + False Negative}}$

# Specificity
- True Negative Rate
$\frac{\text{True Negative}}{\text{True Negative + False Positive}}$

There is a trade-off between Specificity and Sensitivity

| All Labels | Sensitivity | Specificity |
|------------|-------------|-------------|
| Positive   | 100%        | 0%          |
| Negative   | 0%          | 100%        |

# ROC Curve 
- A plot between the TPR (True Positive Rate) and the FPR (False Positive Rate).
    - TPR is Sensitivity
    - FPR is 1 - Specificity

- ROC curve shows the tradeoff between sensitivity and specificity
    - any increase in sensitivity will be accompanied by a decrease in specificity
- 100% sensitivity means the model has 0% false negative rate.
    - TP/(TP + FN) = 1. It means that FN = 0
- Sensitivity and specificity are inversely proportional to each other.
    - This means that as one goes up, the other goes down.
- ROC Curve shows the test accuracy; the closer the graph is to the top and left-hand borders, the more accurate the test.

# Question
**100 people are tested for the disease. 15 people have the disease;  85 people are not diseased. 10 of them are diagnosed with the disease when they actually have the disease, and 40 of them are diagnosed with the disease when they don't have any disease.**

|                    | Actual Positive | Actual Negative | Total |
|--------------------|-----------------|-----------------|-------|
| Predicted Positive | 10              | 40              | 50    |
| Predicted Negative | 5               | 45              | 50    |
| Total              | 15              | 85              | 100   |

- True Negatives: 45
- Sensitivity = TP/(TP + FN) = 10/(10+5) = 10/15 = 2/3 = 66.67%
- Positive Predicted Value = TP/(TP+FP) = 10/(10+40) = 1/5 = 20%

# ROC Curve - Python
```py heading="ROC Curve using Sklearn"
from sklearn.metrics import roc_auc_score
from sklearn.metrics import roc_curve
import matplotlib.pyplot as plt 
%matplotlib inline
logit_roc_auc = roc_auc_score(y_test, logreg.predict(X_test))
fpr, tpr, thresholds = roc_curve(y_test, logreg.predict_proba(X_test)[:,1])
plt.figure()
plt.plot(fpr, tpr, label='Logistic Regression (area = %0.2f)' % logit_roc_auc)
plt.plot([0, 1], [0, 1],'r--')
plt.xlim([0.0, 1.0])
plt.ylim([0.0, 1.05])
plt.xlabel('False Positive Rate')
plt.ylabel('True Positive Rate')
plt.title('Receiver operating characteristic')
plt.legend(loc="lower right")
plt.savefig('Log_ROC')
plt.show()
```
