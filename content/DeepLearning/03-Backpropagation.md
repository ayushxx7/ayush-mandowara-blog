---
title: Backpropagation
description: NN, Neural, Neurons, backprop, backpropagation
date: "2021-09-15"
image: "NN.png"
author: "Ayush"
tags: ["deep-learning", "neural-networks", "machine-learning"]
---

# Neural Network Topology
1. Architecture is fixed
2. Activation Functions are fixed
3. Rain the network for weights and biases

# Training a Neural Network
- The training task is to compute the optimal weights and biases by minimizing some cost function. 
- The task of training neural networks is exactly the same as that of other ML models such as linear regression, SVMs etc. The desired output (output from the last layer) minus the actual output is the cost (or the loss), and we have to tune the parameters w and b such that the total cost is minimized.
- An important point to note is that if the data is large (which is often the case), loss calculation itself can get pretty messy. For example, if you have a million data points, they will be fed into the network (in batch), the output will be calculated using feedforward and the loss/cost $L_i$ (for $i^{th}$ data point) will be calculated. The total loss is the sum of losses of all the individual data points. Hence, Total Loss = $L = L_1 + L_2 + L_3 +\ldots+L_{1000000}$
- The total Loss $L$ is a function of $w$'s and $b$'s. Once total loss is computed, the weights and biases are updated (in the direction of decreasing loss). In other words, $L$ is minimized with respect to the $w$'s and $b$'s.
- This can be done using any optimization routine such as gradient descent.
- We minimize the average of the total loss and not the total loss. Minimizing the average implies that the total loss is getting minimized.

## Mathematically
1. $\vec h^{l+1}(w, b, \vec x_{i})$ - output of the last layer for a given set of weights w, bias b and input $\vec x_{i}$
2. Expected output - $y_{i}$
  - Cost/Loss: $L(\vec h^{l+1}(w, b, \vec x_{i}), y_{i})$
3. Total cost across training data
  - $\sum_{i=1}^{N}L(\vec h^{l+1}(w, b, \vec x_{i}), y_{i})$ (number of data points = N)
4. Training Problem -> find w, b to minimize total cost
  - $\displaystyle \min_{w,b}\sum_{i=1}^{N}L(\vec h^{l+1}(w, b, \vec x_{i}), y_{i})$

# Complexity of the Loss Function
- Training refers to the task of finding the optimal combination of weights and biases to minimise the total loss (with a fixed set of hyperparameters).
- The optimisation is done using the familiar gradient descent algorithm. Recall that in gradient descent, the parameter being optimised is iterated in the direction of reducing cost according to the following rule:
  - $W_{new} = W_{old} - \alpha.\frac{\partial L}{\partial W}$
- The same can be written for the biases. Note that the weights and biases are often collectively represented by one matrix called $\mathbf W$. $\mathbf W$ will represent the collective matrix of weights and biases.
- The main challenge is that $\mathbf W$ is a huge matrix, and thus, the total loss $L$ as a function of $W$ is a complex function.

## Example
- 5 hidden layers
- 100 neurons input layer
- 100 neurons output layer
- weight matrices with six values
- 100*100 = 10000 interconnections between each layer
- 6 layers with above interconnections = 60000 weights
- 100 biases for each of the layers = 6*100 = 600 biases
- Total parameters = 60600

In the above simple example, we have to obtain values for 60600 parameters and hence we can say that the problem is very complex even for a small neural network. 

To solve such a complex problem, we can take help from the gradient descent algorithm.

# Gradient Descent
- Gradient tells us in which direction the next iterative step should be taken
- Gradient tells us how large the step will be
- Both the ideas are captured in the term $-\alpha.\frac{\partial L}{\partial w}$
- The gradient can be thought of as the slope of a hill whose height represents the total cost and each location on the hill represents a unique weight [w1, w2].
  - We can imagine a hill whose height represents the total cost and each location on it represents a unique weight [w1, w2]. 
  - Then we want to minimize the height (i.e. the cost), i.e. move in the direction of the slope of the hill to a point [w1, w2] where the cost / height is minimum.
- $\text{Cost} \downarrow \implies \text{d(Loss)} = -ve$

## Questions

| Statement                                       | True / False |
|-------------------------------------------------|--------------|
| Gradient is an n-dimensional vector             | True         |
| Gradient gives the direction of increasing loss | True         |

Say a layer in your neural network has a large number of biases  - n biases, denoted by the variable b . In some iteration of the algorithm, the gradient is computed to be as follows:

$\frac{\partial L}{\partial w} = \begin{bmatrix}
\frac{\partial L}{\partial b_1}\\
\frac{\partial L}{\partial b_2}\\
\ldots\\
\frac{\partial L}{\partial b_j}\\
\frac{\partial L}{\partial b_j+1}\\
\frac{\partial L}{\partial b_j+2}\\
\ldots\\
\frac{\partial L}{\partial b_j+n}\\
\end{bmatrix} = \begin{bmatrix}
0.45\\-0.30\\\ldots\\1.2\\0.20\\0.00\\\ldots\\0.55
\end{bmatrix}$

Imagine an n -dimensional space whose each dimension (axis) corresponds to one parameter of the network. Choose all the correct statements:

| Statement                                                                                         | True / False |
|---------------------------------------------------------------------------------------------------|--------------|
| In the next iteration, the algorithm should move in the direction of decreasing b1                | True         |
| In the next iteration, the algorithm should move in the direction of increasing b1                | False        |
| In the next iteration, the algorithm should move in the direction of increasing b2                | True         |
| In the next iteration, the algorithm should move in the direction of decreasing b2                | False        |
| In the next iteration, the algorithm will take a larger step along the dimension $b_1$ than $b_2$ | True         |
| In the next iteration, the algorithm will take a larger step along the dimension $b_2$ than $b_1$ | False        |
| Changing $b_{j+2}$ slightly does not affect the value of the current loss significantly           | True         |

- The loss with respect to b increases if $\frac{\partial L}{\partial b}$ is positive (and vice-versa). 
- If it is zero, it means the loss does not depend (locally) on that variable. 
- Also, the magnitude of the gradient defines how large a step the algorithm takes along that variable.

## Gradient Descent Algorithm
- Training a neural network basically implies finding correct values for weights and biases which minimises the loss function. 
- The model starts with a random guess of the initial weights, predict the output using feedforward and change the weights in the direction of reducing loss. 
- This is the gradient descent algorithm.

# Backpropogation

## Algorithm
1. The data points are first fed forward
2. the loss of each data point is computed
3. then aggregated to compute the average loss
4. then the gradient of loss is computed, and 
5. finally weights and biases are updated once

## Loss function of a neural network
$\displaystyle G(w,b) = \frac{1}{N}\sum_{i=1}^{N}L(F(x_{i}), y_{i})$

The loss function $L$ is defined in terms of the network output $F(x_i)$ and the ground truth $y_i$. Since $F(x_i)$ depends on the weights and biases, the loss $L$, in turn, is a function of $(w, b)$. The average loss across all data points is denoted by $G(w, b)$ which we want to minimize. 

## Cross Entropy Loss
- $-\sum_{i=1}^{N}(y_{i}log(p_{i})) = -(y^Tlog(p))$
- In case the prediction is correct, then
  - 1.log(1) = 0
  - 0.log(0) = 0
- In case the prediction is incorrect, then
  - 1.log(0) = infinity

### Example
Suppose $y_1 = 1, y_2 = y_3 = 0, p_1 = 0.8, p_2=0.1, p_3=0.1$. What is the value of the C.E. loss?
- 0.2
- $-1\ln(0.8) = 0.2$

---

Suppose $y_1 = 1, y_2 = y_3 = 0, p_1 = 0.8, p_2=0.1, p_3=0.1$. What is the value of the C.E. loss?

- $-1\ln(0.1) = 2.3$

---

You can notice that the cross-entropy loss is designed such that when the predicted probability is close to the ground truth, the loss value is close to zero, and vice-versa.


## Notations
To simplify the process, we will denote the cumulative input coming to layer $l$ as $z^l$.
- $z^l = W^l.h^{l-1} + b^l$

Therefore,
- $h^l = \sigma(z^l)$
- softmax output $\displaystyle  \large p = \frac{e^{z_i^o}}{\sum_{i=1}^{N}e^{z_i^o}}$

## Gradient Descent on Output Layer with 3 neurons

- Loss function will be given as:
  - $L = -(y_{1}log(p_{1})+y_{2}log(p_{2})+y_{3}log(p_{3}))$
<br><br>
- $\displaystyle \frac{\partial L}{\partial z_1^o} = -(y_1.\frac{1}{p_1}\frac{\partial p_1}{\partial z_1^o} + y_2.\frac{1}{p_2}\frac{\partial p_2}{\partial z_1^o} + y_1.\frac{1}{p_3}\frac{\partial p_3}{\partial z_1^o})$
<br><br>
- $\displaystyle \frac{\partial q_1}{\partial z_1} = q_1(1-q_1)$
<br><br>
- $\displaystyle \frac{\partial q_2}{\partial z_1} = -q_1.q_2$
<br><br>
- $\displaystyle \frac{\partial q_3}{\partial z_1} = -q_1.q_3$
<br><br>
- Now we substitute and simplify to get:
<br><br>
- $\displaystyle \frac{\partial L}{\partial z_1^o}=q-y$, where
<br><br>
- $y = \begin{bmatrix}y_1\\y_2\\y_3\end{bmatrix}$
<br><br>
- $q = \begin{bmatrix}q_1\\q_2\\q_3\end{bmatrix}$
<br><br>
- $z = \begin{bmatrix}z_1\\z_2\\z_3\end{bmatrix}$

We can use the above equations to calculate:
- $\displaystyle \frac{\partial L}{\partial W^o} = \frac{\partial L}{\partial z}.\frac{\partial z}{\partial W}$

## Notation
- $\frac{\partial L}{\partial X} = dX$

## Strategy
The general strategy to compute the gradients in a backward direction is shown in the figure below. 
![backprop-diag](.\backprop_diag.png)

You can see that the gradients are calculated in a backward direction \starting from $dz^3$. Hence, we'll calculate the gradients in the following sequence (dX is short for  $\frac{\partial L}{\partial X}$):
- $dz^3$
- $dW^3$
- $dh^2$
- $dz^2$
- $dW^2$
- $dh^1$
- $dz^1$
- $dW^1$

This is why the process is known as backpropogation.

## Why do we call it backpropagation
We propagate the gradients in a backward direction starting from the output layer
