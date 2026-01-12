---
title: "NASA Hackathon"
date: "2022-10-03"
description: "Use artwork from a space artist and finetune a stable diffusion model to learn to create images of space in her unique style."
tags: ["Stable Diffusion", "AI", "NASA"]
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/qGrjl30tOAA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Style transfer with Stable diffusion

On October 2nd and 3rd I participated in NASA spaceApps, a NASA Hackathon in which during 36 hours more than 30,000 people around the world participated at the same time solving different challenges proposed by NASA and other space agencies.

The proposed challenges consisted of solving all kinds of space-related problems, using real NASA data, such as preventing a future Carringtong event, creating a map of moonquakes, creating a game to learn about the James Webb telescope, and up to 23 different challenges.

We participated in the challenge "The art in our worlds", which consisted of presenting images of space in a creative and artistic way using Machine Learning and Artificial Intelligence techniques. We had the intention to use generative models of images, but we were not sure what to do with them.

During the day of the presentation we met Lola Cadierno, who worked for NASA and when we told her about the challenge we wanted to do, she told us that she knew an artist who specialized in making art of the cosmos, often using NASA photographs as inspiration. At that point she pulled out her phone and called her, we talked to her and vaguely told her about the idea we had. Use her pictures for an artificial intelligence model to learn from them and be able to create more images of space in her unique style. JuliaArt loved the idea and sent us a lot of material to work with.

The next day we spent in "The ship", very appropriate the name of the coworking space. We spent the whole day, there was very little time and we had a lot of work, in an ideal world we wanted to make a complete application in which through a text input you could create images of the space, in the style of JuliaArt, we had to make a frontend, a server, finish the model, make a presentation, a video...

![NASA Hackathon](https://lh3.googleusercontent.com/sitesv/AAzXCkf9ZbjaMisUez6bL-88hiMvkTgAGZgCGEvUsUV1PXUscmYwSqIsVqIfM5eKwPJw7RJxExP3CdDQzDQQyElJgzB_Z_z_Hrs6YtUJckOmpoKI177NP2xsZa6B7qotcWEa5PGcB_dY_gD3bjMxzIoFUvuG8trJZi38pkSnLjOl_pFK-H7fyJJawMOtiCozR5Oq9lITK7Zm3a_Wr9w44uRbaFfY1H_CPAW7=w1280)
![NASA Hackathon](https://lh3.googleusercontent.com/sitesv/AAzXCkfwPGgOxb4hXkNQLmn7yX1lyGy0A-6w1X8gr94LeOwaA8-IlUsF4-a66weKfeZZjblGVW7DInmP4qY-nfalKHuW6dAIxcWDU72jkuwNt8NprE8iaanviTjg0iqoVcmid4Iv4HllAfTWrxEnenw9RB7KqipkIDw5lgpyIzE_1C36fs9HyAkc0kTABqU5NZJnd-G7xO15OGQhZSSPjrgX8EHuHMxMZgfbwlvYVYc=w1280)

For the model we used Stable Diffussion, a image generation model, similar to dalle-2, Imagen or midjourney, but with the great advantage of being open source, so we can modify it and do finetuning with our own data, for this we use Dreambooth, a new method from Google to perform finetuning to diffusion models

At night we got the model to generate images in the style of juliaArt, a React front end with the NASA logo, a small server, the slides and the video half done.

The next day, we had to present the project at 16:00 so we didn't have much time to finish it, although we managed to get a slightly improved model using a larger amount of images. We had to focus on the presentation, and on finishing the deliverables.

What matters is not so much that everything is finished and perfect, but to have a prototype that can validate an idea and communicate it as well as possible.

Real artwork by JuliaArt:

![NASA Hackathon](https://lh3.googleusercontent.com/sitesv/AAzXCkcsw8UHH4IRO7Q7IJs2EXMrBuMlF114xl5mSSLRg_K3HcvDwWumRl-TaQ0NEjwSeTw4UIZYvQ_KuX5wKunuU4DrnjMw05bCd0xgqqq7GWZNgpnrTWO8xhbsTEgpP5fAF26t5b3cwTFzmEEaI6ysnZfo0LqXcyfqmk_xFtL078FkDP0oaNTisN6N=w1280)
NGC 1977 Corredor (from JuliaArt)

![NASA Hackathon](https://lh3.googleusercontent.com/sitesv/AAzXCkeGoMWHUq4PaSMXdKQK2slBNJNhFlEzbRIMRe89-yMLHPZCabp71DKjpcG4GXkCRwLvFMG2or7_Wq4vX8siLhuEdbh9kiCXZMtP1zHBmlpsAyd9X_QrgMedKBfxQvfTOa0P4Tp9jmSWJYSGJPnwyKoTGitE8skWiPN70eTE9uL1VFthHBtQrO-R=w1280)
NGC 7380 MAGO (from JuliaArt)

![NASA Hackathon](https://lh3.googleusercontent.com/sitesv/AAzXCkcO0RrIyjYa5sx0pjlW6CMb2FuF1L-fOgG0_UX6nFOMrANhqmKDrQd3pCVIg7ia8G1zYRI8fy7h8Nj32d9Eq_72AfFeKCzYzvb1TwJWjLBBojOWcdAg--LB588vl5n6M8gS9m7z0D3ElZb33SmAH7vfXdtIBBUJHQoWOqkk3t705-MscUjpcUV8PUUoRvJ1ZbmoR4AuM2oIZpESaqiQIxmCOgW_y2aPezdq=w1280)
NGC 6357 Guerra y Paz (from JuliaArt)

![NASA Hackathon](https://lh3.googleusercontent.com/sitesv/AAzXCkeMClXqpQhQ8tdN_LPXQ3u2CwLt1vfe35-E61lUaerKSFs8HBuRBqqEewk_KSMSOtwkCvC7G9EIm56KgGZFTpGhLtL6_yNpYGnzsS-qXuGOANPR42Hx8x6pgd8s5cdQbYxIKEffQWv3pnrIKhBPh6gB0cK4jlZaEnLUhOC9l7blrgksAAdiB5beKwgR4SJpQV27yx7jilyaSpT3WxxVxxktLuPlgXpzk9vWElk=w1280)
NGC 2174 Cabeza de mono (from JuliaArt)

AI generated Images in the style of JuliaArt:

![NASA Hackathon](https://lh3.googleusercontent.com/sitesv/AAzXCkd2MvB3XvRd_KzX55OfnFRCtUabuc8IFsbV_eGgG-Plrzj3mQYvqvBKEXJVyKXsjUm0ccP7UuJg1XdmAbP8MyNUOzfkNYUTZDzDN1LX6DouseRRb4UaN0fjBuX_T9664c90cqBBfC9IwlFYggeN6Jae8mvR01FtAJwPYMcH8VD-9_idHBh2GMJjcuk=w1280)
milky way in the style of sks juliaart

![NASA Hackathon](https://lh3.googleusercontent.com/sitesv/AAzXCkfcKPVG06vhaHp9SYMJPUeh5oemRT3kiXsFInVaqSZmVUi4H0NYfa7-jY6XnDKVVmRdLEmoKV5q8Rv0dEbXk6Uu6pXqMGHDE2V1moJ4eu_GkZVyveSJdSo_tU0qDNhYLel6-mTW01Twz3jtu9Vf0veBGk3wPEF76wyVPy09btCcibtABi48RBTh778=w1280)
deep space in the style of sks juliaart

![NASA Hackathon](https://lh3.googleusercontent.com/sitesv/AAzXCkd5JCmjL3pprXWGpQiVe-v80Cny6lAB16KdfYizSulDURHbpAZBnC5gEJc36Ieir-uMqxwSXzqgxoM5x7qlIYfZkFpOwTHr9eS_QxIiZDmk-g9K7HjUIjZv_Qb330ZfPIsDM-5DUlfURNFZw-ITPGL6TZXEEM8YByh-u_OOro8eUiPLChYuMbrEgO8=w1280)
cosmos in the style of sks juliaart

![NASA Hackathon](https://lh3.googleusercontent.com/sitesv/AAzXCkcSjLPRFOP3acU83DfHBbnwVP9sk5YJZtEf5wIpd4mS3NVOpS_9uFEoJJ92kM0pkzPDk_1mBqVaEHU4UxGQFoOu_KR8PP3XuLke5rm4D171q2eRpXNC2yUS68FAG7QM89EvGbi2Sv6Nk2-k4rc6d3R_wRVUT8yg86_N5jD11gAHKxFVm9_5s7HzAI4=w1280)
a constelation in the style of sks juliaart

![NASA Hackathon](https://lh3.googleusercontent.com/sitesv/AAzXCkfGcn3zfqf_DYAuNYg7EmVtMqQud1oWB6yrbsIbZKclgvQ_GgBGiuQxxUOSLxQUbhuBPjaXpnyCGfdVzmGZy3_3-YnoSvSP1DLL9TC-lSnrPKcsWEleFO2p84xqx6zE4R7RL8m1lU9-mqB-aydiUngHm_vt7hp96ajIIR1y1i0uZd4EgZnv5ZvU=w1280)
Forest in the style of sks juliaart

![NASA Hackathon](https://lh3.googleusercontent.com/sitesv/AAzXCkdYXeuHM7k8i-1Hb_mR-HobAHf91sc6kFPYCvYG5tglF0pRJs6PNEJAN77vLMCpYMTwhR2u9cDks0pJu0aSRdR7mIDzQJeLNKMuAQOggOQ7pvYrOOcQbQpG20o6PmyGd-hf7TGDhLcDhBPmk6J8Z72AgDpRA75AugZ7uWgDTQPh0zcWUmcpf4Z-Kzc=w1280)
dog in the style of sks juliaart

![NASA Hackathon](https://lh3.googleusercontent.com/sitesv/AAzXCkf-2ApWOqUnOSbojYUqc-utAO_2emPre65znReFFY4wgQuaaEL4Mn5O06zDsMVUv5-zTm1k4i_sOmk5aeKBw42iqr8jVxggNHa0uOxQCpG4J-FM0pnkLCxraeJtE89v4GrsPOKFyyTRdxmbrVmuu2CwBRAyQZy0dyhWPPvTs9ztEuiVVoiuP0qf=w1280)
City skyline in the style of sks juliaart

![NASA Hackathon](https://lh3.googleusercontent.com/sitesv/AAzXCkdtb2V2hwwa0uEPfNSKeuxpsYFKUZ1bPbQxHV63p8VkteJMYvSfQbkz5Cw7Brm0HD2tePkOzOWr6Kbu-yvIKE1SmEI2qscuwpbM6mhUbPlPEM8i9UjArbLPT0zCOQ5lJ1IR6sQu-IC4jAM7uRbJnXroOcWJPoHAld1pTU6mlJp25OEk3sCrdUsgXDw=w1280)
Surface of mars in the style of sks juliaart

In the end we didn't make it to the final, there were a lot of very good projects, but we are very happy with what we got. I hope you also liked it and are curious to create your own custumized models!

More info about the project:
Github Repo: https://github.com/MrRobert91/NASASpaceApp_Challenge_2022
Slides: https://github.com/MrRobert91/NASASpaceApp_Challenge_2022/blob/develop/space_artai_documents/Space%20Artai.pdf

Team Menbers:
Rebeca Olcina
David Leirado
Miguel Hidalgo
David Robert
Juliaart
