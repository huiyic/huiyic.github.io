---
title: Increasing Carousell Groups engagement by 40% with personalisation
layout: post
---

At Carousell, we strongly believe in bringing our community together through buying and selling, and one of the ways we do that is through our Groups feature.

A few months ago, our team was working on improving our Groups feature, where people of similar interests can buy and sell through meaningful exchanges. You could buy and sell with fellow Marvel fans, beauty gurus, and even share photos with fellow pet owners! What more delight can one take in buying and selling, than being able to connect with someone who has a similar interest when transacting?

Through our year bringing our community together with Groups, we learnt that amongst many factors, <i>relevant and quality content</i> is extremely important for our customers to stay meaningfully engaged within a community.

At the time, we were focused on improving Groups engagement, hence we focused on the people already using Groups and researched on how they felt about the previous Groups user experience:

![Research Findings](https://huiyichia.com/images/groups-problem1.png)
<br><i>Findings from our user research.</i>

To summarise:

![Carousell problem](https://huiyichia.com/images/group-problems.png)
<br><i>Problems segmented by user groups.</i>

Hence, with the goal of improving Groups engagement, we decided to test the hypothesis:

> If successful, <b>groups engagement will increase by 20%</b> because <b>customers can now not only discover Groups content much more easily</b>, but also because they find the <b>content relevant and of quality</b>. This will result in customers being inspired to come back and view more content.

<i>This hypothesis framework was modified from one of the sessions from <a href="https://www.reforge.com/growth-series">Reforge's Growth Series</a>. </i>

After brainstorming solutions together with the team, we decided on an experiment through changing the Groups tab to a <b>personalised feed</b>.

## How was the personalisation done with data?

Determining the business goal was crucial, as it helped us to focus on the segment of customers we were looking to serve. That in turn determined what problem we were trying to solve, and eventually formed  the basis of our solution.

For the MVP, we deliberately did not focus on trying to increase adoption of Groups, as we had the challenge of low quality content which we were concurrently trying to solve with other means. Instead, we were solely focused on increasing engagement of existing Groups customers. These were customers who found enough value to come back to Groups every so often, and we wanted to improve the frequency of that happening.

In short: We wanted to increase engagement of existing Groups customers, by making them even happier with the browsing experience.

To personalise the feed, our data analyst, Yi Jun, put together a model that considered several customers' behaviours on Carousell. 

1. <i>What previous Groups were they browsing? </i> 
2. <i>What discussions were they interacting on? </i>
3. <i>What search terms did they use? </i> 
4. <i>What listings did they previously viewed or chatted on?</i> 

Each data point helped us in customising an experience that is tailored to the customer.

When designing the feed together with the team, we also thought about caching and how often the feed should refresh. <i>How would the load affect reliability of our systems? Would customers find content fresh and new enough to visit everyday?</i>

After consideration on engineering costs, we then decided that the feed be updated on a daily basis.

Our product designer, Rita, did several iterations of the feed, including a list and card format. I would fondly remember us having many interesting discussions (debates?) about each solution, because I found merits in the list view while she did for the card view. Even as we did usability testing on both formats, customers that we spoke to had almost an equal preference on either format.

In the end, we decided on the 'card' format with the main intent that it would encourage more of a browsing + exploration behaviour.

![Groups tab before and after](https://huiyichia.com/images/groups-before1.png)
<br><i>Before and after of the Groups tab.</i>

## Let's begin the experiment!

On an AB test level, we saw a statistically significant increase in the average number of times a customer opened the Carousell app. Groups engagement <i>(defined by customer liking or commenting on a discussion)</i> also increased by about 50%.

Seeing positive results, we rolled out the feed to all our customers and continued to observe our metrics:

1. Number of Group Engagers increased by about 40%, and
2. Number of Groups Weekly Active Users increased by more than 20%, both metrics sustaining their increase for the months to come.

It proved our hypothesis that <b>relevant and quality content</b> is crucial in engaging a customer.

Looking back, there are things we could have done better: 
1. We could get qualitative feedback from customers on their experience with using the personalised feed. 
2. There could have been iterations of the algorithm to improve relevancy for customers. 
3. Would have loved an opportunity to further iterate this for new Carousell customers too, to increase adoption, as it would be exciting trying to solve a 'cold start' problem!
4. If given more time, would have also loved to evaluate a 'list view' versus a 'card view' format.

This wouldn't have been a successful experiment without our team mates Rita Wang, Amelia Anasthasia, Even Chang, Tao Yi Jun, Kim Silvoza, Yong Lian Hii, Kavitha Mohan, and Yao Hui Chua in the Community Experience team!

<i>Thanks Bang Hui and Jessica Chen for reviewing and making drafts of this post better!</i>