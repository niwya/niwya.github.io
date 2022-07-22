---
title: 'Autonomous Robot Waiter'
description: 'Basic restaurant knowledge domain in CR-Prolog SPARC for an autonomous agent to plan diverse 
customer-oriented tasks and collaborated on linking it to a simulated environment made with PyBullet.'
date: '2020-09-01'
banner:
    src: '../../images/autonomousWaiter.png'
    alt: 'Screenshot from the simulated restaurant'
    caption: ''
categories:
    - 'Internship'
    - 'Research'
keywords:
    - 'Knowledge Representation'
    - 'Answer Set Programming'
    - 'CR-Prolog'
    - 'SPARC'
    - 'Research'
---

<!--**bold**
    *italics*
    ## headline
    ### subheadline
    #### subsubheadline -->
<div style="text-align: justify">

## I - The main idea
&nbsp;&nbsp;&nbsp;Having a fully autonomous waiter in a restaurant, that can plan tasks on its own taking into account user inputs made via hand signs, is the main idea, basically. The main challenges in the realization of this goal are:

- How to make the agent capable of planning tasks on its own? How to represent the essential knowledge for this to be possible? How to make it so that new knowledge can be ingested?
- How to recognize hand signs? How to translate hand signs to goals?

&nbsp;&nbsp;&nbsp;In this project, as a two-people team, we designed a knowledge domain in <a href = "https://arxiv.org/abs/1301.1386" target = "_blank">CR-Prolog SPARC</a>, an Anser Set Progamming (ASP) language with an inference module, that can communicate with a simulated environment made with PyBullet in which a user can interact with an autonomous waiter in a restaurant, using hand signs to let it know what is expected of it. The goal is to have the autonomous agent capable of serving clients on its own, but also to provide support to other employees when required. The user can theoretically be an employee of the restaurant, or a customer - each category of people has its own designated hand signs, and making the distinction bewteen the two has to be made using computer vision. This recognition feature is not implemented, but one way to do it would be looking for an employee badge in the video feed of the autonomous agent. 

&nbsp;&nbsp;&nbsp;The current state of our project is a simulation in which the user can give orders to the agent by using hand signs via an external camera, as well as add new hand signs. As of now, there is no way to translate newly learned hand signs to actual knowledge in the knowledge domain other than manually inputting the logic in the code. 

___

## II - The knowledge domain
&nbsp;&nbsp;&nbsp;I've summed up all there is to know about the technical side of my work in this project in <a href = "/aspSparc.pdf" target = "_blank">this report</a>. To put it in simpler words - I coded a knowledge domain using an improved version of CR-Prolog (SPARC - this version essentially adds consistensy restoring rules to the base language, as well as sorts, which can be thoughts of as types). This knowledge domain contains the rules of the world my autonomous agent acts upon - which is, in this case, a restaurant. Among those rules are actions that can be performed, and a list of restrictions. Those actions are triggered by observations made, in this case, in the simulated domain, but ultimately by hand sign made by users in the real world.

*Quick note: I'll be talking about "the ASP" later - this refers to the file in which the knowledge domain is coded in CR-Prolog SPARC, not to ASP in general. I may also use this shortcut a lot in the report and GitHub repositories mentioned here.*

### The restaurant
&nbsp;&nbsp;&nbsp;The restaurant layout that you can see in the simulation is hardcoded in the ASP. How things are is the restaurant is divided into nodes where the agent can be at. Those nodes are conveniently placed in the room - by tables, at the entrance or at the counter, for instance. This might be very unpractical in real life applications, but was the simplest approach to code the environment so that the logic in the ASP stays simple and manageable for me to code and test. In the ASP file, the nodes are actually directly associated to objects and places, to enforce the fact that the agent has to be at a particular place to perform an action (as an example, the agent could not give the bill to a certain table if it was standing on a node at the opposite end of the restaurant).

### The actions
&nbsp;&nbsp;&nbsp;The agent can perform 4 actions, though more were initially thought of. Those actions are:
- Move around node by node in the restaurant, if that node is free
- Pick up and seat a party of customers (that accounts for 2)
- Bring the bill to a table
&nbsp;&nbsp;&nbsp;This is not enough for an autonomous agent to actually be able to serve in a restaurant. A more thorough knowledge domain would be required - and unit testing of each added set of rules (to make sure adding rules does not break anything - I've seen some weird things happening sometimes). The base ASP file featured in my GitHub (see below) can totally be built upon to add more rules - but they still have to be hardcoded, support for them needs to be added in the simulation, and a triggering hand sign needs to be associated to them.

### The planning 
&nbsp;&nbsp;&nbsp;The ASP needs to know how many steps it should plan on - this is also hardcoded. There is no native minimal planning module - meaning that if a goal can be reached in 4 steps but we give 8 steps as input, the plan to reach the goal will be 8 steps long - so I also added one manually. How it works right now is the ASP starts at 1 step and is updated until it can come up with a valid plan. However, this approach does not guarantee the existence of a plan. In the current state of things, the number of steps to plan on is incremented until a "safe" number of steps has passed to conclude there is no plan - this however, is computationally heavy and not a viable solution for an embedded use. 

### Want to know more?
&nbsp;&nbsp;&nbsp;You can find the knowledge domain designed for this project on <a href = 'https://github.com/niwya/restaurant_ASP_SPARC' target="_blank"> my GitHub </a>, as well as a more in-depth description of the knowledge domain I coded on <a href = 'https://github.com/ArthurFDLR/Commonsense-Reasoning-Bot' target="_blank"> Arthur's GitHub </a> (most of the READ ME is about the ASP code). There is also a flowchart explaining how the ASP communicates with the simulated world.

___

## III - The simulation
&nbsp;&nbsp;&nbsp;You can find the simulated environment designed for this project - and how to make it work - on <a href = 'https://github.com/ArthurFDLR/Commonsense-Reasoning-Bot' target="_blank"> Arthur's GitHub </a> (at the beginning of the READ ME). I only worked on how to communicate the outputs of the ASP to the simulation and to update the ASP directly - you can find the details <a href = "https://github.com/ArthurFDLR/Commonsense-Reasoning-Bot/blob/master/commonsense_reasoning_bot/ASP/CommunicationASP.py" target = "_blank"> there </a>.

___

## IV. Going further...
&nbsp;&nbsp;&nbsp;One of the initial goals for this project was to add the ability for the agent to function on an incomplete knowledge domain, learning new rules on the fly, without having to hardcode them manually. In the current case, when confronted with an unknown situation, the agent does nothing - it cannot ingest new knowledge. 

___

## Credits & Publications
&nbsp;&nbsp;&nbsp;This project was undertaken under the supervision of <a href ="https://www.cs.bham.ac.uk/~sridharm/" target = "_blank"> Dr. Mohan Sridharan </a> at the School of Computer Science in Birmingham, UK, and with the help of <a href = "https://arthurfindelair.com/" target = "_blank"> Arthur Findelair </a>, at that time student at ISAE-ENSMA, who was in charge of running the simulation. 

&nbsp;&nbsp;&nbsp;A publication of an updated version of this project will be showcased at the NMR 2022 conference in Haifa, Israel. Many thanks to Kévin Gloaguen, student at ISAE-ENSMA, for taking over this project and adding functionalities. 

</div>