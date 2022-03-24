---
title: Blameless post mortem
description: How to run a blameless post-mortem
---
## What is a Post-Mortem?
Running post-mortems after major issues or incidents (in product) is an important part a DevOps culture. This guide is based on a debriefing technique which was developed by John Allspow et. al at [Etsy](https://www.etsy.com/). They have written a comprehensive [debriefing facilitation guide](https://extfiles.etsy.com/DebriefingFacilitationGuide.pdf) based on lessons learned from years of running after-actions debriefings. The following guide is a shorter guide based on their work and experiences we've gather from running post-mortems.

## Why?
The goal of a post-mortem is to seize the opportunity for an organisation to learn as much as they can, in a relatively short period of time, about how people normally perceive and perform their work. Because the people involved were doing their normal work on a normal day when the event in question happened.

## How
In order to successfully run a blameless post-mortem it is important do some solid preperations. In the following we go through what's important both when preparing and running the actual workshop. 

### Preparations
Before the post-mortem, facilitators need to get a sense of the flow of events, without forming opinions about what happened. You’ll want to gather whatever objective data is available and construct a timeline of events. The initial timeline should be created by the people closest to the event.
Try to invite as many of the people involved as possible. This will ensure that you get a more accurate timeline than if you only have a few of the people involved attending.


### Facilitating the workshop
This is a format that has worked on previous occasions and can serve as a template.

#### 1.Setting the stage
> Preventing the future is not the goal—learning is. Learning should be the focus of the whole debrief.

Explain the purpose of running the post-mortem and that the focus should be on learning through exploring and digging into the timeline around the time of the incident/event. The following is an example of an opening statement:

> The goal for our time together today is to recreate the event, talking through what happened for each person at each stage in order to create as robust a portrait as possible of what happened, focusing on the HOW of what happened, not the WHY. Being utterly blameless, to ourselves and to others is really important.

#### 2. Reconstructing the timeline
Because reconstructing the timeline is your main task, you should focus the majority of time in the post-mortem on doing just that, addressing remediation items afterward. For a 60-minute meeting this can easily be **35–40 minutes of discussion.**

The focus in the reconstruction should be on what actually happened. It's quite common that people will start discussing solutions or fixes for the problem. When this happens the facilitator should steer the discussion back to talking about the WHAT. One way of doing this is to ask people write their suggestion for solutions on a post-it and park it until later in the workshop.
  
When building the timeline make sure that you have enough space to work with so that you can document the timeline with the level of information you need.

**Make sure everybody agree that the timeline is comprehensive and accurate.**

#### 2. What did we learn from going through the timeline?
From the Etsy debriefing guide:

> 
"Pivot the conversation toward what the group learned from going through the timeline, and to discover more perspectives that can clarify or add additional context what’s been written down. This is also when you’d invite everyone in the room to start thinking about the learning points from the event. These can include recommendations for remediation items, but shouldn’t be limited to them. When you begin discussing learning points, encourage everyone to speak up if anything comes to mind and to not censor themselves. You want the initial phase to be more of a brainstorm. Nothing more, nothing less. Anything goes, because we are looking for improvements to the current system, and trying to unearth innovative ways to underpin the learnings from the meeting. However, you must resist the urge to turn them into actionable tickets just yet. These learning points are likely to come from all directions and appear haphazard. Some might be very specific, others very broad, and some might apply to different systems altogether"

**Collect the ideas as a brainstorming list.**

#### Turn list into actionable remediations
If time permits the group should find out what steps to take in order to improve the process. Remediations should be specific, measurable and time-bound. If there is too little time available pick a small set of people from the team and give the brainstorming list to them. Allow them to dwell on it for a few days. Then gather the small group of people a couple of days later for a short workshop where the focus is to create actionable item(s).

### After the Post-Mortem workshop
An important point is to make post-mortems publicly available to institute a safe-to-fail environment. Document the findings and timelines from the workshop and put it on Confluence or something similar. Make sure that the follow-up meeting (if scheduled) is completed.