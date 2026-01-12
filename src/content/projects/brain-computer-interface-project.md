---
title: "Brain Computer Interface Project"
date: "2022-06-01"
description: "Control a drone with a brain computer interface."
tags: ["BCI", "AI", "Python"]
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/ubpXxSRDCY0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Proffesor X Project

Between March and June 2022 I participated in the Saturdays AI deep learning bootcamp, unlike other similar courses this is a non-profit program run entirely by volunteers. And it has been an experience that I would recommend to everyone. It consists of six weeks of theory in which various types of algorithms are reviewed (CNNs, autoencoders, NLP, reinforcement learning etc) and doing a weekly practice, but I was mainly interested in the second part of the course, in which for another six weeks we have to do a group project. In Saturdays AI they have a collaboration with Bitbrain, a Spanish neurotechnology company, which left us one of their headsets, a 16-channel brain-computer interface, with which we could read brain waves in the form of an electroencephalogram. With this type of headset, it is possible to perform many tasks, but they require a lot of time to take measurements, and preprocess the data to get rid of noise.

Our project consisted of moving a drone with eye winks or bites. We chose this type of gesture because although it is not as impressive as detecting a thought, it was simpler and we had little time. The project finally consisted of measure data from several members of the team, dividing the different events (winks and bites) from the rest of the noise, labeling the data, training several machine learning algorithms to use the one that offered the best performance, using the model to classify data in streaming, according to the result of the model send an http request to a python server that then sends a signal to a programmable drone. In the future I would like to be able to improve streaming (it wasn't working well), try different algorithms, record more data and above all try other types of mental states such as thinking about moving an arm, thinking about a color or concentrating. It has been a great opportunity to test a technology that will undoubtedly be revolutionary in the future.

For more detailed information about the project:
- Medium article: https://medium.com/saturdays-ai/professor-x-project-262c242311b0
- Github repo: https://github.com/albarc3/ProfessorX-Project
- Presentation: https://youtu.be/tdbjLsNJao8?t=4504

![Brain Computer Interface Project](https://lh3.googleusercontent.com/sitesv/AAzXCkfS2POnMgLvPc4bsFj_OlNrXZqT6dJY7X7alGo1VNSul-OSTJ2-_i2B0a4VYDV1BizKb0nvchR_uuefNf6F37ZP7fLJm2thb8jwjsJgUBfItvN_N1u487BbMen4q0lhrmaYy96oViZThr50MF9kMqNY0dZltN5VJxcKobZUl-CTJf3G2vMgwhGkg1AEPMPVOEMq2o-optSCrxYYk0XA2UFoq0-VE-vf5gG-nYg=w1280)
![Brain Computer Interface Project](https://lh3.googleusercontent.com/sitesv/AAzXCkchc0IDB86dk3-4ESOL3PpMq2wlGYORd2lNOUFxsNseoItXeM8aSezSnwmD10tYwhkuhpZl5DGrvqNjKsXkmKjklszJj-qOLS8G_jLTakr4wF7iHiL7MfRZTxeuMF3540VC0kI8JthyH5ysiPhV3ePypaF-8NiuVf9J5ik3cWdwbiJe5NHmSDxRxQKY23DxShNGpw6pYqUB1ITcXw0E76EQ_kYmWzgB5eDN=w1280)
![Brain Computer Interface Project](https://lh3.googleusercontent.com/sitesv/AAzXCkedYza7P-gqdMD_Ww9qpiVVF79pUvu2lvQCjWzhjw7g6HPi4revamUO4rJoIctdeZQSoBffOdJWkfJuYxA1Du9qTRMrNsxyWjmPUDG2fwnPnBbIKz-VhtQv2wV9wP58dFRMTVk0SNWHaG2ZunXBqr_PaZr9bQTDgimbWSgZMRbtsSblxjzunGpGKkB0x1gjkONVvfOrUk1UxCvc2hlxx6vTmtDtJ_UQAc73=w1280)
![Brain Computer Interface Project](https://lh3.googleusercontent.com/sitesv/AAzXCkfoPo3S9RNboZV_Nr3yXK6wnPLByhp_shWb2ZWnX11UkbZqtvemjI_39htqndp-76PvsAW2d7_lwrvw5MpsToopnxUa0X1-uLVc2TencKXbDY3gierBS6e2p3ZBa-caTogTbn-eweypq5rwvIPMwg84_MxhCX-2t_1kknt6_L4mnRi5r1RAvXHSn4uv_yNXaRAaF5tT9M8Fv6yEqq-ikxZ9g5QAxk0j2ob-S5M=w1280)
![Brain Computer Interface Project](https://lh3.googleusercontent.com/sitesv/AAzXCkfRDSqI4LOu4aKnBqhRKT3SbByHSyeNw6djb7RDN6Z_Sih22pTRaj2q2wx5tcoKXMEajB8ZvXYoIp7JBFmIex6rLx9Sijj665GN7p0SB4RtXFdZUEl9LEnK3iv4pc6BKDsZWb1cFHf9vvNm3WF-WevqikhCj4JBlEEa1FU6G5LZqW_NpOe7tuxWdXU5NFZqvKiP1bWvr_uVuJJpJjheEufTXsS28BgG8OSm1_0=w1280)
![Brain Computer Interface Project](https://lh3.googleusercontent.com/sitesv/AAzXCkfAKusVJvO2xmokurKKQG0wNSv-WWRjiaIitiRlgMtSg5IljROGNhfeegsWTJznQsl4ELaaMir8NjWFbm355m2sWgvXwOD8GlHlPqXGf4-c3VyGHhDXPueRoqOr5U7tinEfLiCFLVFnPb0sBxI7TeCpkrBiPWkwy4E12t0h-nNq65oyKKDXCEEP-KCBZ85jHeB-a54VlanQvmenBDzbLmi6UQ3ydTml91I9n0E=w1280)
![Brain Computer Interface Project](https://lh3.googleusercontent.com/sitesv/AAzXCkfFjCxf9tf0tREZuLADos-v5DmmdR1x3DW6A2lPUNtgzxOlQsdjfSyT6TfYemo2JfRwQt1rHzy9ufnV6f82MmnEqCCjytrg6u4bap0wFZy4QpYPA-dSL8yerA5V6keJe7iBQ4hv9vTb3tH42al4rC5kovP5e-zSxBeLAuZSb2k7X4TBcKiSs3uvQV1zuvw5eQGmIyuDnVmJ9nbZNRDJ4yVwPhNCEVu45QEZJIE=w1280)
![Brain Computer Interface Project](https://lh3.googleusercontent.com/sitesv/AAzXCkfyzHv8ArNijcdlohbD8eZW5xL5FUk3KmDG94XpR8NQWPlDWfi74l4uXu7aHHTms53xRXcB8F_Sn3fJEt9PDdrZbuHdA5Pt5ZmpFJurOFOSCvaqpYYseIT-8lt_dOuVupGUjCKAxj5RtrGs4ZiPdvjLFwtFo-5Cc8Rc5_LUkJLlDQs82gkXjQC2QAljHBTnas9ZaWXj-j2wpefqGa0vG1QQ8w0SILWePO61pmg=w1280)
