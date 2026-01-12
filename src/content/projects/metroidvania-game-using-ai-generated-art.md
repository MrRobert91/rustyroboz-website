---
title: "Metroidvania game using AI generated art"
date: "2023-01-01"
description: "A short metroidvania with AI art in which you control a robot in a future where humans live on Mars."
tags: ["Unity", "AI", "Game Development"]
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/oZpgsd9Fb7I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Ever since image-generative AIs started coming out, I’ve thought they have enormous potential for use in creating game assets, especially for people who, like me, have rusty artistic skills and are not used to using photoshop or other image editing programs.

Inspired by a video of a horizontall-scrolling spaceship game that I saw a while ago, I found it interesting to make a small game in which all the images were generated with artificial intelligence. Metroidvania Month Jam 19 seemed like a good place to try, so together with @hidalguel we got down to work. The fact that it was a jam with a deadline date was going to be very helpful in getting the project done in a reasonable amount of time.

As the game is a metroidvania one, we are going to have a 2D game, in which you go around a map jumping on platforms, defeating enemies and getting new abilities. We used the Unity engine, with which we had some experience from previous experiments.

To make our work easier, we use a free template from the Unity asset store, which contains the main mechanics that we will need for our metroidvania, that is, a character that can jump, attack and shoot among other things. Although we ended up modifying it to suit our needs, it’s a great starting point.

![Metroidvania game using AI generated art](https://lh3.googleusercontent.com/sitesv/AAzXCkeWe4WZy9zaJq1D52kRtfkqJFpFYcgs8IC1nHJ2hBC8zWHEFGvI7MtoobeqomS-TASb2bKipdsOE4K-ho6qQWGEjmtIhwxaJe1xEkwiXArN644-vmkxhXhnWe5LMHFamvCdr3vVeyRpAWy6SFABOOuo67fjgYcBhf9auua9ns-fpj2Hii-pa3roYIlVCLAlupQjDrvIZhBldKHlXOED4MUYraMc_AiNmA=w1280)
![Metroidvania game using AI generated art](https://lh3.googleusercontent.com/sitesv/AAzXCkcSXY7RHfWKo2AbOvYTt5Ylynk8bS52dLNw0Du4v5rRjvtnJEI07wnDncLbJVWsSmMQCNymaHcvZIvM_2aUuSnlgrtcBt6YKlkyAmS7ztXDXgkUvO0fdtVLv4frCbU1KlOVAH1GRGWITpG28T6B3K4Wr7lR-inaUTXzsIYXm6vfFQQFia8AIGzJ=w1280)

Once we have the basic mechanics, the first thing we have to do is a main character, in our case a little robot.

At firts we tried to generate the sprites of the character’s running animation with Stable Diffusion, but after much trial and error we couldn’t get the generated sprites to correspond to a specific animation, they look like a sprite sheet, but the sprites tend to have all the same posture, and not an animation cycle at all.

Since the creation of sprites has not gone too well, we decided to make an animation based on bones.

For this we use Midjorney to create the character, and we remove the background with an AI application that automatically removes the background to make an animation using bones, we use krita to cut the different extremities and create a layer for each bone/extremity that we want to move separately and export it as a psd file (if you are using Krita, change the extension from .psd to .psb so that unity can read it correctly, as it is the format that Unity recognizes). Once in unity we use the Sprite editor to create the bones of our character, and create the different animations with them. I have followed this tutorial to do it.

![Metroidvania game using AI generated art](https://lh3.googleusercontent.com/sitesv/AAzXCkeR2It7aHa4EzhtO1CclqERE156xWv_IUAIjspkgwXO-lJHkPCsh9roiQtXFw8xoR740FWz1M434HF1mEalgBkuAiU3niOcvVlX2o79RC4AYsggvywn9R2MPHTS4WBHpbdf8JLJdVSiSrvK3SQv9cZxpGlilsqcweqmRuHOv0EDivz_fYiHkr3DUG98kJehNEa-kEwQPpIuvQCG8qYJrxfRvsBfeJJwJid5KC0=w1280)

Once we have the main character with animations of the different actions (run, jump, attack, etc.), it’s time to create the backgrounds.

For the backgrounds we continue to use Midjourney, which is the image-generating AI that has given me the best results so far.

For the backgrounds I have tried to keep the part of the style of the prompt similar in most of the generated images, and keep the ones that fit best for a 2d video game, for generate landscape images we use the — ar 3:2 flag of midjourney.

The workflow that I have followed is to generate images with midjourney, once we find a background that we like, we make 4 variations of that image directly with the midjourney button. We chose two or three of them and used Dalle2’s Inpainting tool to merge the two images as well as to remove unwanted parts, such as the presence of humans or other characters or objects. Finally we Upscale the images so that they have more definition. We do this with this website (https://imgupscaler.com/), which is the one that accepts base images with the highest resolution, and increases them by up to 400%, and lets you upscale 5 free images a week.

![Metroidvania game using AI generated art](https://lh3.googleusercontent.com/sitesv/AAzXCkepF0GCJsuXB6X-lOulA3WO-szPVtYw5hWR5H4TkF27t3Aot2MQpJS_DPLTNHQ_rkxIdDD7fvpaBKgao2hdJ0Qb6HPT9Uc1JonC1PavSLk-ROdflbEzdqin-atHi1wlIb7CPWxGl5tUB_acwG2ud_rYYjvg_RXzFqMbrNLHYuiaPoYmZfyoaackRUYaTU_qPPeh6grUHeoBOgR1isatD13q390MoEPatRwf_YA=w1280)
![Metroidvania game using AI generated art](https://lh3.googleusercontent.com/sitesv/AAzXCkeVhHTgGKuHvhi45u3df5opV4TZ4U30aV2Mk3-8EC8beVYXUcPa5x7qknmS5l7FxK95L-VTs_maQKubzpZpq6CD6qkSNJMDdrnKNhI7cAMjfSFui9ChIAhrVqzIrZV-LFHpTEQSX8spJyVWVZKuu7-vAto15V15K2V-I7QB-2g_TvwDRnLYW1duYTPz7fXppjvOOIQoWW7LkTKcASVfq71vQ1viEOopEQg0LOg=w1280)

Although the results are not entirely professional and some integration work is still needed so that they do not look like a collage of different origins, especially in the areas where several different backgrounds come together. Perhaps with a better handling of Krita/photoshop the different backgrounds could be better integrated.

For the story, we tried using chatGPT, but the results weren’t entirely convincing, and we finally ran out of time to add a full story.

The theme of the story, as well as the name of the game, comes from an interview with Liv Boeree on Lex Freidman’s podcast in which Liv explains what is Moloch in terms of game theory, I found it to be a very interesting concept that is found in a multitude of systems, and could also be applied to Reinforcement Learning systems, in which agents end up reward farming as a way of optimizing a reward function. Some agents whose goal is to maximize a poorly designed reward function at all costs, can be the perfect scenario for maximizing AIs to emerge, ones that we will not be able to stop.

It is a concept that I found very interesting because I believe that it underlies a multitude of complex systems. I recommend watching the podcast for a full explanation.

As an easter egg to recognize the source of inspiration for the story, at the end you talk to Liv, whose image is also generated with Midjourney.

![Metroidvania game using AI generated art](https://lh3.googleusercontent.com/sitesv/AAzXCkcXSmN5z9LXd1gIPcTh5owrEZNesNZP34H80UFsME01NWXbDNnam1LniRWKVKYM3cQAjCToEuXYlNfXXhabnQ_yfDWIUxCEsEY9nDUZbTueMr7jHK5XEYnnBAvpgo-scXaSgrYeMePWwLJdxz3ge8zfpOomJUi6Wkxdj0335enPi-pUWHu4RGm-39YhhWtLh81shzhX9bQSJARBWJv67JkaPmmeNDx71jhRQfw=w1280)

And that’s all, in the end there is a small prototype that still needs to be polished, you can try the game for free here.
