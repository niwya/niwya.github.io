---
title: 'Cheezam'
description: 'A cheese classifier.'
date: '2021-04-26'
banner:
    src: '../../images/morbier_0.jpg'
    alt: 'Morbier cheese'
    caption: ''
categories:
    - 'Machine Learning'
    - 'Python'
keywords:
    - 'Classifier'
    - 'Cheeze'
    - 'Image Scraping'
    - 'Data Augmentation'
    - 'Python'
    - 'VGG-16'

---

<!--**bold**
    *italics*
    ## headline
    ### subheadline
    #### subsubheadline -->
<div style="text-align: justify">

## The main idea
&nbsp;&nbsp;&nbsp; As a French person, I love myself a good cheese board at a restaurant. And from time to time, one cheese out of the selection is just celestial. In that case, I want to know what cheese it is - and to keep its info, to treat myself sometime in the future. I could just ask the restaurant personnel - right? Or, develop my own app so that if I take a picture of a delicious piece of cheese, the app tells me exactly what it is - kind of when you want to know what a piece of music is and you use Shazam.

*Note: this was a school project conducted at IIT, but to be honest, I love the idea so much that I will probably improve this project over time and maybe develop an actual app in the future. I'll post any update here!*

___

## The dataset
&nbsp;&nbsp;&nbsp;The dataset is a <u>custom-made</u> dataset from images scraped from Google Images. 
### Scraping the images from Google
&nbsp;&nbsp;&nbsp; The images have been scraped from Google Image with the help of Python module <a href = "https://github.com/hardikvasa/google-images-download" target = "_blank">google_images_download</a> using queries whose keywords corresponded to the cheeses I wanted to include. In the state of things, the dataset comprises:
- <u>Beaufort</u> · 403 images
- Mozzarella · 288 images
- <u>Comté</u> · 441 images
- Morbier ·347 images
- Bleu d'Auvergne · 386 images

&nbsp;&nbsp;&nbsp;Unfortunately, at the time of this project, Google Images did not allow more than 400 images to be scraped at once - always taken from the top of the Google Images query, so multiple queries under the same keywords yielded identical images. 
Note that Beaufort and Comté are highlighted in the above list - because they're very similar looking cheeses (look it up - by just looking at them, it's hard to tell them apart). In fact, I chose those two because of that characteristic - I wanted to assess my classifier's performance on a dataset with all different cheeses and see if including a cheese that's similar to another changed the metrics. 
### Data augmentation
&nbsp;&nbsp;&nbsp;A few hundreds of images per cheese seemed too few to train a classifier - so I used data augmentation techniques to inflate my dataset. The images were subjected to:
- Random flip
- Random rotations
- Random zoom
Those operations were performed using TensorFlow Keras' <a href = "https://www.tensorflow.org/api_docs/python/tf/keras/layers/experimental/preprocessing" target="_blank">preprocessing functions</a>. 
___

## Classifier architectures
&nbsp;&nbsp;&nbsp;Multiple classifier architectures were used to train models and confront the results. 
### Base model
### Base model with dropout
### Base model with data augmentation
### VGG-16 with data augmentation

___

## Future work
### Adding this project to GitHub
&nbsp;&nbsp;&nbsp;Since this is was a school project, I have everything offline on my PC. I am currently in the process of adapting everything to post on my GitHub page, so that you can try it yourself if you want. Stay tuned!
### More cheeses 
### An app?

</div>