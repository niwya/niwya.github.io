---
title: 'Autonomous robot waiter'
description: 'Basic restaurant knowledge domain in CR-Prolog SPARC for an autonomous agent to plan diverse 
customer-oriented tasks and collaborated on linking it to a simulated environment made with PyBullet.'
date: '2020-09-01'
banner:
    src: '../../images/300921-2.jpg'
    alt: 'First Markdown Post'
    caption: ''
categories:
    - 'Knowledge Representation'
keywords:
    - 'Knowledge Representation'
    - 'Answer Set Programming'
    - 'Reinforced Learning'
    - 'Internship Project'
---

<!--**bold**
    ## headline
    ### subheadline
    #### subsubheadline -->
<div style="text-align: justify">

## Credits
This project was undertaken under the supervison of <a href ="https://www.cs.bham.ac.uk/~sridharm/" target = "_blank"> Dr. Mohan Sridharan </a> at the School of Computer Science in Birmingham, UK, and with the help of <a href = "https://arthurfindelair.com/" target = "_blank"> Arthur Findelair </a>, at that time student at ISAE-ENSMA, who was in charge of running the simulation. 

## The main idea
Having a fully autonomous waiter in a restaurant, that can plan tasks on his own taking into account user inputs made via hand signs, is the main idea, basically. The main challenges in the realization of this goal are:

- How to make the agent capable of planning tasks on its own? How to represent the essential knowledge for this to be possible? How to make it so that new knowledge can be ingested?
- How to recognize hand signs? How to translate hand signs to goals?

In this project, as a two-people team, we designed a knowledge domain in <a href = "https://arxiv.org/abs/1301.1386" target = "_blank">CR-Prolog SPARC</a>, an Anser Set Progamming (ASP) language with an inference module, that can communicate with a simulated environment made with PyBullet in which a user can interact with an autonomous waiter in a restaurant, using hand signs to let it know what is expected of it. The goal is to have the autonomous agent capable of serving clients on its own, but also to provide support to other employees when required. The user can theoretically be an employee of the restaurant, or a customer - each category of people has its own designated hand signs, and making the distinction bewteen the two has to be made using computer vision. This recognition feature is not implemented, but one way to do it would be looking for an employee badge in the video feed of the autonomous agent. 

The current state of our project is a simulation in which the user can give orders to the agent by using hand signs via an external camera, as well as add new hand signs. As of now, there is no way to translate newly learned hand signs to actual knowledge in the knowledge domain other than manually inputting the logic in CR-Prolog SPARC. 

## The knowledge domain
I've summed up all there is to know about my work in this project in <a href = "../../static/aspSparc.pdf">this report</a>.

You can find the knowledge domain designed for this project on <a href = 'https://github.com/niwya/restaurant_ASP_SPARC' target="_blank"> my GitHub </a>, as well as a more in-depth description of the knowledge domain I coded on <a href = 'https://github.com/ArthurFDLR/Commonsense-Reasoning-Bot' target="_blank"> Arthur's GitHub </a> (most of the READ ME is about the ASP code).

## The simulation
You can find the simulated environment designed for this project - and how to make it work - on <a href = 'https://github.com/ArthurFDLR/Commonsense-Reasoning-Bot' target="_blank"> Arthur's GitHub </a> (at the beginning of the READ ME).

## Publications
A publication of an updated version of this project was presented at the KR 2022 conference in Haifa, Israel. Many thanks to Kevin Gloagen, student at ISAE-ENSMA, for taking over this project and adding functionalities. 

</div>