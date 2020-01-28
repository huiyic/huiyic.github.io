---
title: How do we prioritise user satisfaction?
layout: post
---

For the past 6 months, my team and I have been working on improving the stability and the user experience of Carousell's messaging platform.

![Carousell's Inbox and Chat features.](https://huiyichia.com/images/inbox.gif)
<br><i>Carousell's Inbox and Chat features.</i>

For a peer to peer marketplace, there is always some element of risk in dealing with a stranger online.

<b>Chatting helps to build that trust, alleviate that sense of risk by allowing both parties to get to know each other (and the product) better through a series of back and forth questions, and helps them to make more informed buying and selling decisions.</b>

The messaging platform is one of Carousell's core user journeys. Without it, our users will not be able to communicate with one another or to deal a transaction.

![A typical buyer journey on Carousell.](https://huiyichia.com/images/buyerjourney.png)
<br><i>A typical buyer journey on Carousell.</i>

The goal of the team was focused on improving the stability of our messaging platform, of which the success could be measured by reducing the error rates faced by our users when they used Chat. Given this direction, we thought it would be an excellent opportunity to address some of the long-requested-for improvements by our users, alongside improving stability of the messaging platform.

We faced a challenge when we took over this user journey.

Given that we are not focused on key outcomes like growth or revenue, how would we prioritise the improvements requested for by our users? By prioritising improvements requested by users, it must mean an improvement to the user experience.

But how do we prioritise features that are not focused on improving certain growth metrics, but instead are focused on improving user satisfaction and delight? And how might we measure user satisfaction?

This was how we went about the prioritisation process:

![Prioritisation process](https://huiyichia.com/images/process.png)


<b>1. Defining the Charter - "Transaction First, Social Second"</b>

Deciding on the long-term direction of Carousell's chat helped us focus on what to improve on chat VS what we will not improve on.

Carousell's chat is not meant to be treated like your usual social messaging apps. <b>The chat feature is, first of all, intended to help our users complete transactions with as little friction as possible. This is aligned with driving Carousell's success as a marketplace with high liquidity. With transactions, come a bigger group of buyers and sellers, which will lead to network effects. Marketplaces with network effects are highly defensible.</b>

When we design for Chat, we should first always be thinking: <i>How might we help users to get to their transaction as soon as possible?</i>

With this <i>'Transaction First, Social Second'</i> direction, we will also build an architecture that will allow different squads within the company to enable their Chat features that will also help customers get to a transaction as soon as possible. This can include: 'tips to help complete a secure transaction', 'recommending listings to users if it has already been sold / missed deal', or 'enabling property agents and car dealers to up-sell to customers'.

With a Transaction First direction, we could also prioritise surfacing complementary listings or services post-transaction, to value-add to the user's previous purchase through the messaging platform itself.

![Example of what a post-transaction experience in Chat could look like.](https://huiyichia.com/images/posttxn.png)
<br><i>Example of what a post-transaction experience in Chat could look like.</i>

And once we can enable both sellers and buyers to make transactions that benefit them, marketplace liquidity and all other metrics can be improved.

When we say <i>'Social Second'</i>, it's not that social isn't important. Chat itself already has elements of social, where we enable users to connect through text and media. What it means is that we will prioritise Transactional value over delivering deliberate Social value, such as Stickers, Live Video, GIFs.

We needed to be absolutely clear about the value our messaging platform brings to Carousell's ecosystem. Else, we risk derailing from our mission and will end up prioritising improvements that reflect a social messaging product instead.


<b>2. Identifying problems and opportunities</b>

For the longest time, we received countless user feedback about our Chat feature. We extracted several months' worth of user feedback, manually sieved and tagged them under specific Chat Themes, and prepared the list of top requests for running the Kano Model Survey. 

Besides that, we also looked at competitors in different spaces, including social, shopping, and productivity. We also did a few internal rounds of discussion with other delivery teams to understand their requirements of building on Carousell's messaging platform.

<b>3. Prioritising user satisfaction through the Kano Model Survey</b>

Eventually, we utilised the Kano Framework Model in order to help with the prioritisation.

According to the Kano Model:
• Customers' <b>Satisfaction</b> with our product's features depends on the <b>level of Functionality</b> that is provided (how much or how well they're implemented);
• <b>Features can be classified into four categories;</b>
• You can <b>determine how customers feel about a feature through a questionnaire.</b>

Source: <a href="https://foldingburritos.com/kano-model/">https://foldingburritos.com/kano-model/</a>
<i>(To better understand the following content, it is best you give the link a read first!)</i>

We then ran this survey to different user segments, to see if there would be a difference in the satisfaction each feature would deliver to a casual vs a power user.

An example of a series of questions that related to a specific feature would be as follows:
1. If you had the ability … (to search for messages in your Carousell Chat Inbox, how would you feel?) <I like it / I expect it / I'm neutral / I can live with it / I dislike it>
2. If you don't have the ability … (to search for messages in your Carousell Chat Inbox, how would you feel?) <I like it / I expect it / I'm neutral / I can live with it / I dislike it>
3. How important is it … (to be able to search for messages in your Carousell Chat Inbox?) <1–7>


## Insights

We found that many of the top feature requests from our users were seen as 'Attractive' features. This means without them, it will not stop someone from using Carousell.

![Snapshot of the results of the feature requests surveyed.](https://huiyichia.com/images/featurebox.png)
<br><i>Snapshot of the results of the feature requests surveyed.</i>

Segmenting the responses according to user personas also validated certain assumptions about the different user behaviours that we had.

![User Segmented Results for Chat](https://huiyichia.com/images/segment.png)
<br><i>Pro Sellers feel that the ability to search for messages is a 'Must-Have', while it's an 'Attractive' feature for Casuals sellers.</i>

For instance, the ability to search for messages in an Inbox is a 'Must-Have' for paying users, but only an 'Attractive' one for casual users.

The outcome of this process was a set of prioritised features based on customer satisfaction, which we would subsequently reprioritise according to scope, effort estimation and more discussion with internal stakeholders.

## How do we measure user satisfaction?

Here are some ways that we could go about measuring user satisfaction:
1. Feature adoption: How many % of our active users in Chat are utilising the feature?
2. Feature retention: How many % of our active users in Chat use the feature over a certain time period?
3. Net Promoter Score (?): I'm on the fence about using this as a measure. Asking users this question will give us their satisfaction of Carousell as a product, not limited to just Carousell chat. Going too specific into Chat's NPS might not have been the best use of our resources either, given we should be more focused on the satisfaction of Carousell's overall experience.

Even with the metrics above, it is worth noting that it also depends on the expected usage of the features. For instance, would we expect users to be deleting sent messages on a daily basis? Probably not, as it is more likely used in accidental situations.

## Parting Thoughts

Carousell's messaging platform is not the main functionality of the product, even though it facilitates the extraction of the main value of Carousell - which is to successfully complete a transaction. Through the Kano Model insights, my takeaways are that the feature requests specific to Chat are a good-to-have, but they will not stop most users from using Carousell. It is however, a different ball-game if we are improving the user experience for merchant-type sellers.

We implemented some of the improvements only because we were given resources to focus on Chat as a feature, but if we were asked to look at growth or revenue goals, I would choose to take a different prioritisation and measurement approach.

Credits to my Chat team mates Rita Wang, Josh Humber, Harshit Shah, Dave Luong, Jason Liu, Yao Hui Chua, Jason Xu, Diona Lin and Ren Lee, who made working on this user journey super fun and rewarding!