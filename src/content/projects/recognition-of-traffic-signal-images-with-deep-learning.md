---
title: "Recognition of traffic signal images with deep learning"
date: "2018-01-01"
description: "Comparison of different Machine Learning and Deep Learning techniques for classifying traffic sign images."
tags: ["Deep Learning", "Machine Learning", "Python"]
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/zPINu6zXo9A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

At the end of my degree at the university I went to a series of seminars that dealt with the topic of Deep Learning, and I found it fascinating how an algorithm could learn just by passing it a sufficient number of examples. So I decided that I wanted to learn more and do my TFG on that topic.

The main objective of the final degree project is to build a traffic sign image recognizer that is capable of working with the highest precision that we can achieve, testing different Machine Learning and Deep Learning techniques.

To do this, we had to develop a complete machine learning project, which includes data preprocessing, learning to use specific tools and implementing different machine learning and deep learning techniques and algorithms in code, both classic and modern, as well as designed experiments to compare them effectively, with the aim of finding the method that most accurately classifies the images.

We have tested different algorithms and approaches to the problem of image classification, two of them, the random forest and the neural network without convolutions, are classic approaches within machine learning, while the others fall within the set of modern techniques that we call deep learning. Among the latter, we differentiate between approaches that make use of pre-trained networks (VGG16/19, Xception, Resnet) and those that have been designed and trained from scratch for this specific problem using the Keras framework with Tensorflow as backend.

![Recognition of traffic signal images with deep learning](https://lh3.googleusercontent.com/sitesv/AAzXCkfjMz28chgVCtw7fUzHItB2soM472RRo_ZxEXvh6N6G8y2le50jpFYiFdATunzPa5J-WAfxxrHeEz5f3Y2meVrhC6W7j7K2YkY7znQpBOQDjF-fIr1RR9PjieoFCc7HQkZdSoU88YL_fOs9U6xbaU_Cp8w-QiaJWk4YpcjQ4MQRXfv4zWtW9efwqTAOEl8pUVgY1YpEXXRzBgjnD5Sk5Z_bIol964F8pa9nMPo=w1280)
![Recognition of traffic signal images with deep learning](https://lh3.googleusercontent.com/sitesv/AAzXCkfe7_ESn5XcQobcuaVOPOFwFy-FKbnffNol96gG8TfgY70zqy_smTAIl4enOwZ8RTNU-E3uwjpoEHW7XDSW-PKTDRgHyeqkrSjhXX9Vr2yuYqiCpZpB4JH_J97kskjj3jGRXO51E1HEDzImpdAU6aB1XYTb_LJaTcnN7eEANNn5FIka3ZbjYS-e7D0oSk4auz1ilCC-vrXp-hKfadBNqM74CqIUrLS77MvS=w1280)
![Recognition of traffic signal images with deep learning](https://lh3.googleusercontent.com/sitesv/AAzXCkd4-SUbrtwuNhzJUkYYUYoOs5XMhPtPGSEjbtwzAe_DK9X3Z2vjXj_-JPDrQlCquuymmYCwpkLx5MURIAUik8beKOTiavryy1cvxcwk_bq0lwZhXhAvaqaybQBdZSDNmj_prfGjze4iXW4bbff3tBFk157YAKA43h1aU00KGlSbQkykQqXZ-1MJuaRkLTAkhaKQzsWYoL2H2XK2CkeXgYSDh1Nk_xdAE9IQ=w1280)

Finally, it is these latest neural networks designed from scratch that have the best performance, among all the algorithms tested.

Links:
TFG in PDF: https://github.com/MrRobert91/traffic_sign_machine_learning/blob/master/tfg_david_robert.pdf
GitHub repo: https://github.com/MrRobert91/traffic_sign_machine_learning
