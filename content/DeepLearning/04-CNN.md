---
title: Convolutional Neural Networks (CNNs)
description: NN, Neural, Neurons, perceptron
date: "2021-11-19"
image: "NN.png"
author: "Ayush"
tags: ["deep-learning", "neural-networks", "machine-learning", "cnn"]
---

# Purpoose
Notes on Convolutional Neural Networks

# CNN - Introduction
- Convolutional Neural Networks, or CNNs, are neural networks specialised to work with visual data, i.e. images and videos (though not restricted to them). 
- They are very similar to the vanilla neural networks (multilayer perceptrons) - every neuron in one layer is connected to every neuron in the next layer, they follow the same general principles of forward and backpropagation, etc. 
- However, there are certain features of CNNs that make them perform extremely well on image processing tasks. 
- Convolutional Neural Networks, or CNNs, are specialised architectures which work particularly well with visual data, i.e. images and videos. 
- They have been largely responsible for revolutionalizing 'deep learning' by setting new benchmarks for many image processing tasks that were very recently considered extremely hard.

# Challenges in Image Processing
Let's consider the common task of visual recognition (like identifying a ‘cat’ or a ‘dog’) - trivial as it is for humans, it is still a big challenge for algorithms. Let’s look at some of the challenges:

- Viewpoint variation: Different orientations of the image with respect to the camera.
![viewpoint](viewpoint.png)

- Scale variation: Different sizes of the object with respect to the image size.
![scale-variation](scale-variation.png)

- Illumination conditions: Illumination effects.
![illumination](illumination.png)

- Background clutter: Varying backgrounds.
![BackgroundVariation](background.png)

# CNNs - A specialised architecture for visual data
- Although the vanilla neural networks (MLPs) can learn extremely complex functions, their architecture does not exploit what we know about how the brain reads and processes images. 
- For this reason, although MLPs are successful in solving many complex problems, they haven't been able to achieve any major breakthroughs in the image processing domain.
- On the other hand, the architecture of CNNs uses many of the working principles of the animal visual system and thus they have been able to achieve extraordinary results in image-related learning tasks. 

# Applications of CNNs
- CNNs were first made popular due to their excellent performance in image classification problems such as the ImageNet Large Scale Visual Recognition Challenge (ILSVRC). They are performing even better than humans (5% error by humans, 3% error by CNN) in the challenge.
![imagenet](imagenet.png)

- Classifying image as portrait or landscape

- Classifying image as painting, animal, person

- Object localization: Identifying the local region of the objects (as a rectangular area) and classifying them.

  ![objectlocalization](object-localization.png)

- Semantic Segmentation: Identifying the exact shapes of the objects (pixel by pixel) and classifying them.

  ![imagesegmentation](image_segmentation.png)

- Optical Character Recognition (OCR): Recognise characters in an image. For e.g. for the top-left image, the output will be ‘1680’.

  ![ocr](ocr.png)

- Image search to find details or similar items in different retail stores

- There are various other applications of CNNs in the healthcare sector. Many medical imaging applications used in radiology, cardiology, gastroenterology etc. involve classification, detection, and segmentation of objects which can be analysed using CNNs.
 
- 3D Analysis has to be performed for medical problems such as to find out how big a tumor is. Volume of blood being pumped by taking contour images.
- Geographical Analysis can be performed such as monitoring land, water bodies, forest fires, mining sites by taking photos from a satellite
- Video Analysis: A video is a series of images (or frames). CNNs are commonly used for processing videos.
- Presence of craters on planets to understand meteor crashes
- Application of CNN is found in Insurance Claim Analysis such as assessing the payout when property gets damaged due to floods
- Can be used for Audio and text analysis as well

# Receptive field for single neurons in the cat striate cortex
- [Research Paper](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1363130/pdf/jphysiol01298-0128.pdf) published by Hubel and Wiesel

Some of the important observations made in the study were:

- Each neuron in the retina focuses on one part of the image and that part of the image is called the receptive field of that neuron.
 
- There are excitatory and inhibitory regions in the receptive field. The neurons only ‘fire’ when there is a contrast between the excitatory and the inhibitory regions. If we splash light over the excitatory and inhibitory regions together, because of no contrast between them, the neurons don’t ‘fire’ (respond). If we splash light just over the excitatory region, neurons respond because of the contrast.

  ![receptive_field_response](300px-Receptive_field.png)

- The strength of the response is proportional to the summation over only the excitatory region (not inhibitory region). The pooling layer in CNNs corresponds to this observation.

The figure below shows a certain region of the receptive field of a cat. The excitatory region (denoted by the triangular marks) is at the centre surrounded by the inhibitory region marked by the crosses.

![receptivefield](receptive_field_new.png)
- The response will be the strongest if a "vertical slit" shaped light falls on excitatory region

- The receptive fields of all neurons are almost identical in shape and size

- There is a hierarchy in the units: Units at the initial level do very basic tasks such as picking raw features (such as horizontal edges) in the image. The subsequent units extract more abstract features, such as identifying textures, detecting movement, etc. The layers 'higher' in the hierarchy typically aggregate the features in the lower ones.


The image below illustrates the hierarchy in units  - the first level extracts low-level features (such as vertical edges) from the image, while the second level calculates the statistical aggregate of the first layer to extract higher-level features (such as texture, colour schemes etc.).

![heirarchy](heirarchy.png)

Using this idea, if we design a complex network with multiple layers to do image classification (for example), the layers in the network should do something like this:

- The first layer extracts raw features, like vertical and horizontal edges
- The second layer extracts more abstract features such as textures (using the features extracted by the first layer)
- The subsequent layers may identify certain parts of the image such as skin, hair, nose, mouth etc. based on the textures.
- Layers further up may identify faces, limbs etc. 
- Finally, the last layer may classify the image as 'human', 'cat' etc.

  ![classification](classification.png)

Apart from explaining the visual system, the paper also suggested that similar phenomena have been observed in the auditory system and touch and pressure in the somatosensory system. This suggests that CNN-like architectures can be used for speech processing and analysing signals coming from touch sensors or pressure sensors as well. 

# Research Paper Insights - Summary
- Each unit, or neuron, is dedicated to its own receptive field. Thus, every unit is meant to ignore everything other than what is found in its own receptive field.
- The receptive field of each neuron is almost identical in shape and size.
- The subsequent layers compute the statistical aggregate of the previous layers of units. This is analogous to the 'pooling layer' in a typical CNN.
- Inference or the perception of the image happens at various levels of abstraction. The first layer pulls out raw features, subsequent layers pull out higher-level features based on the previous features and so on. Finally, the network gets an overall perception of an image in the last layer.


# References
[Research Paper - Receptive field for single neurons in the cat's striate cortex](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1363130/pdf/jphysiol01298-0128.pdf)
