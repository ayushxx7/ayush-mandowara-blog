---
title: Convolutional Neural Networks (CNNs) - Industry Applications
description: CNN, NN, Neural, Neurons, AI, ML, DL, Deep Learning
date: "2021-11-22"
image: "NN.png"
author: "Ayush"
tags: ["deep-learning", "neural-networks", "machine-learning", "cnn"]
---

# Neural networks in industry applications
Neural Networks have changed the face of image processing in the industry.

# Data Preprocessing: Shape, Size and Form

## Images - Channels and sizes
- Images come in different shapes and sizes. 
- They also come through different sources. 
- For example, some images are what we call “natural images”, which means they are taken in colour, in the real world. For example:
  - A picture of a flower is a natural image.
  - An X-ray image is not a natural image
- Taking all these variations into consideration, we need to perform some pre-processing on any image data.
- RGB is the most popular encoding format, and most "natural images" we encounter are in RGB.
- Also, among the first step of data pre-processing is to make the images of the same size. 

### Question
**In `imshow(:, :, c)`, what does `c` stand for?**
- Channel ID
- 0 for Red, 1 for Green, 2 for Blue

## Images - Transformations
### Morphological Transformations
 The term morphological transformation refers to any modification involving the shape and form of the images. These are very often used in image analysis tasks. Although they are used with all types of images, they are especially powerful for images that are not natural (come from a source other than a picture of the real world).

#### Thresholding
- Converting RGB image into grayscale
- Set threshold, intensity above is 1, intensity below is 0

#### Erosion and Dilation
**Erosion** shrinks bright regions and enlarges dark regions. **Dilation** on the other hand is exact opposite side - it shrinks dark regions and enlarges the bright regions. 

#### Opening and Closing
**Opening** is erosion followed by dilation. Opening can remove small bright spots (i.e. “salt”) and connect small dark cracks. This tends to “open” up (dark) gaps between (bright) features.

**Closing** is dilation followed by erosion. Closing can remove small dark spots (i.e. “pepper”) and connect small bright cracks. This tends to “close” up (dark) gaps between (bright) features.

All these can be done using the `skimage.morphology` module in Python. The basic idea is to have a **circular disk** of a certain size move around the image and apply these transformations using it.

In Python, Morphological transformations are applied using the basic structuring element called 'disk'.  A disk is defined with the code: 

```py heading="Morph"
# bin_image will be a (240, 320) True/False array
bin_image = image[:, :, 0] > 125
plot_image([image, bin_image], cmap='gray')


from skimage.morphology import binary_closing, binary_dilation, binary_erosion, binary_opening
from skimage.morphology import selem

# use a disk of radius 3
selem = selem.disk(3)

# oprning and closing
open_img = binary_opening(bin_image, selem)
close_img = binary_closing(bin_image, selem)

# erosion and dilation
eroded_img = binary_erosion(bin_image, selem)
dilated_img = binary_dilation(bin_image, selem)

plot_image([bin_image, open_img, close_img, eroded_img, dilated_img], cmap='gray')

```

# Questions

| Statement                                                | True / False |
|----------------------------------------------------------|--------------|
| Most natural images come in 2 channels                   | False        |
| Some images can be in only 1 channel                     | True         |
| RGB is the only encoding of images that exists           | False        |
| Image sizes don't matter while training a neural network | False        |

- 1 channel images: A prominent example is black-and-white images.
- Image sizes define input sizes of neural networks

**Which between opening and closing will remove dark spots?**
- Closing removes dark spots by performing Dilation followed by Erosion!

**Which between Dilation and Erosion will remove black spots?**
- Dilation shirnks dark spots, enlarges bright spots

**Identifying the technique used**

![erosion](erosion.png)
- Erosion shrinks bright spots, enlarges dark spots. 
- You can see that the widdth of the alphabel 'j' has been reduced.

![dilation](dilation.png)
- Dilation shirnks dark spots, enlarges bright spots.
- You can see that the width of the alphabel 'j' has been increased.

**Given below is the X-ray image of the brain. Which of the following transformations you will use to remove just the outer skull keeping the dimension of the brain same.**

![brain](brain.png)
- Here, Opening will be used. 
- First, erosion will be used to remove the white skull portion. 
- But this will also shrink the size of the brain. 
- To make the dimension of the brain same, dilation will be used.

---

# References
- [History of the first X-ray](https://www.the-scientist.com/foundations/the-first-x-ray-1895-42279)
- [Different kinds of Scans](https://www.medicalnewstoday.com/articles/154877)
- [Transformations with OpenCV](https://docs.opencv.org/trunk/d9/d61/tutorial_py_morphological_ops.html)
- [Natural Images - Statistical Definition](https://stats.stackexchange.com/questions/25737/definition-of-natural-images-in-the-context-of-machine-learning)
