// "1" denotes agreement with speaker of preceding set piece
// "2" denotes disagreement with speaker of preceding set piece

const Stories = {
    moralityProblem: {
        0: [
            {
                dialogue: "It's a bright and sunny day, yet Usain's face is dark and stormy."
            },
            {
                command: 'enter',
                position: 1,
                speaker: "Usain",
                dialogue: "I don't know about this one. Nothing makes sense. I thought riddles were supposed to have one good answer that made all the pieces come together. But this one...I just can't figure it out.",
                emotion: "neutral"
            },
            {
                command: 'enter',
                position: 2,
                speaker: "Imhotep",
                dialogue: "Good afternoon friend! Splendid day we're having, is it not? Are you heading for the mess hall for dinner?",
                emotion: "happy"
            },
            {
                command: 'enter',
                position: 3,
                speaker: "Tehara",
                dialogue: "Wait! I'm not supposed to be here yet!",
                emotion: "shock"
            },
            {
                command: 'exit',
                position: 3,
                speaker: "Tehara",
                dialogue: "Goodbye!",
                emotion: "shock"
            },
            {
                speaker: "Usain",
                dialogue: "Oh, hey Imhotep. Is it that late already? I must have lost track of the time.",
                emotion: "angry"
            },
            {
                speaker: "Imhotep",
                dialogue: "Is there something on your mind?",
                emotion: "shock"
            },
            {
                speaker: "Usain",
                dialogue: "Just another of Aarit's riddles.",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "I see.",
                emotion: "happy"
            },
            {
                speaker: "Usain",
                dialogue: "Yeah, this one is really hard. He gave it to me around lunch and I've been thinking about nothing but it since. No matter which way I come at it, there doesn't seem to be an easy answer.",
                emotion: "happy"
            },
            {
                speaker: "Imhotep",
                dialogue: "Maybe because answers are supposed to be hard fought and well earned. Now that you mentioned it, I think I did see Aarit arguing with the Emir Marinus and Lae Ling this morning. It looked heated. They were probably discussing the coming war, if I was to hazard a guess.",
                emotion: "sad"
            },
            {
                speaker: "Usain",
                dialogue: "Fantastic. Every time those three butt heads, I wind up the worse for it. If I didn't know better, I would say Aarit is trying to get back at them by hurting me.",
                emotion: "angry"
            },
            {
                speaker: "Imhotep",
                dialogue: "The Ogma hurting his own student? I think that's part of the deal, friend. You can't expect to be groomed by one of the greatest warrior-poets of our time without some challenges. Though I will admit, your training does...intensify after any considerable disagreements Aarit has with my cousin or the elvish diplomat.",
                emotion: "neutral"
            },
            {
                speaker: "Usain", 
                dialogue: "Gee, thanks for noticing. Maybe is it will help the bruising heal faster.",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep", 
                dialogue: "Stop the sarcasm. We are preparing for a war with Rae, a foe much more powerful than we are. Those three are in charge of everything, from the logistics and supplies, troop training and influence peddling for support back home in Toma. This is no small undertaking and frankly, I am surprised they are handling half as well as they are.",
                emotion: "neutral"
            },
            {
                speaker: "Usain", 
                dialogue: "Yeah, sure, war is hard business. I just wish your cousin and my teacher got along better. If I can't give Aarit a good answer tomorrow he's going to kill me with the practice yard.",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "You are better than you think Usain. Try to have a little confidence in your own abilities. What is this riddle anyways?",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "'A raiding party of bandits catch you at a fork in the road. They rob you, then give you a choice of which path they take next. Down one road there is a little town, but down the other road is a little farm where only one person lives. If you choose the first road, the town will be attacked and many people will die. Choosing the second road will surely kill the farmer. Which way do you pick?'",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "I thought riddles were supposed to rhyme.",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "That's not really the issue here, but yeah, now that you mention it, that's a little weird.",
                emotion: "angry"
            },
            {
                speaker: "Imhotep",
                dialogue: "Why were you having a hard time with this? The answer is obvious. You should send the troop of bandits to the farm.",
                emotion: "sad"
            },
            {
                speaker: "Usain",
                dialogue: "Why though? That's what Aarit's going to ask.",
                emotion: "happy"
            },
            {
                speaker: "Imhotep", 
                dialogue: "To save the most lives of course. Directing the bandits to the town does nothing but put more blood on your hands. It's a bad choice either way, but one is clearly better than the other. Why? What were you going to say?",
                emotion: "shock"
            }
        ],
        
        1: [
            {
                speaker: "Usain", 
                dialogue: "I agree, send the bandits to the farmers house. Only one person dies in that scenario.",
                emotion: "angry"
            },
            {
                speaker: "Imhotep",
                dialogue: "Hmmm...",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "What?",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "Nothing. Though it is the right decision, I still find it distasteful.",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "Why? We sacrifice the farmer to save the town, and avert a massacre.",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "We're still condemning a man to death though.",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "People die. If society is better off for it, it's a good thing.",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "Do you truely believe that? I know the Dahn favor the needs of the whole over the the individual, but personally, wouldn't it bother you?",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "'What's good for the people is good for the person.'",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "Don't hide behind Dahnic proverbs.",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "That's what I would be telling myself as I direct the bandits to the farm.",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "Really? You don't find that unsatisfactory?",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "Yes. I mean, I would feel bad that someone is dying. It's my choice after all, but what am I supposed to do? You said you would make the same choice too.",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "I know, I know. However, the more I think upon it is the less I like either choice. I abhor the idea of arbitrarily condemning a man I don't know to death. I'm Vessii, and consider life sacred, It's my duty to protect it where I can. Though I can rightly justify my actions, every reason I tell myself makes the decision sound so unbearably cold. Hearing you say it out loud only makes it worse. The Dahn make the individual life seem so despicably trivial.",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "You're half Dahn, Imhotep. How can you spurn your own heritage?",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "By blood maybe, but I wasn't raised in their ways. We Vessii believe an individual's life matters, no matter how insignificant the person.",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "Lives matters to the Dahn too.",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "Some lives matters, and some more than others. That's a significant difference.",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "I know that, but...",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "But what?",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "If you look at it like that, that every life matters the same, you're going to agonize over every decision. We're getting ready for war here. How are we supposed to do go out and fight if we have to carry the weight of every single person we kill?",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "How can you claim a soul and not care for your fellow man?",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "Now you're just quoting that religion of yours.",
                emotion: "neutral"
            },
        ],

        2: [
            {
                speaker: "Usain",
                dialogue: "I actually would send them to the town.",
                emotion: "sad"
            },
            {
                speaker: "Imhotep",
                dialogue: "Whatever for?",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "The townsfolk should be able to kill a few of the bandits. That will make it easier for the whoever comes later to wipe the horde of brigands out.",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "That's a horrible answer Usain.",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "Yeah, but what's the farmer going to do? Besides die? Nothing is gained if you send the bandits that way.",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "You gain the lives of everyone in the town.",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "'There is no honor in a quiet death.'",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "Dahnic proverbs? Seriously? Usain, peoples' lives matter. Stopping the bandits isn't the singular goal. You have to consider the repercussions of your actions.",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "They're the proverbs of my people. I am Dahn, as are you.",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "I am only half Dahn, and I was raised to be Vessii. The Dahn prioritize threat elimination over saving lives, and it always results in more death. I refuse to agree to the way they operate, or give moral credence to their culture.",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "If you don't like us so much, why keep me as a friend?",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "I didn't mean it like that. Besides, you don't behave like a typical Dahn. You have a more compassionate nature than most. Remember last week when Marinus' son was getting smacked around during his dueling practice?",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "Yeah...",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "Remember how you found him crying afterwards, snot running down his face, eyes all red and puffy? What did you do?",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "I played with him, I told him one of the sweet pastries had an important message in it, and that we needed to find it before someone else did.",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "And how did you solve that?",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "We had to eat them first, before anyone else.",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "See? That's what I expect out of you. When someone's having a bad day you do these little acts of kindness to help them feel better and raise the quality of their life. But when anybody asks you a question, you just reply with what you think the Dahn are supposed to say.",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "...",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "Why not just go with your heart?",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "...I don't know. It's a terrible choice either way. Both cases make you responsible for someone else's death. Everything I say just feels wrong. Condemn the farmer, why? Because it's more convenient for my conscience? That seems selfish. I don't think I would sleep well after that. At least the town has a fighting chance.",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "It's okay Usain. I believe in you. I know you would make the right decision.",
                emotion: "neutral"
            }
        ],
        
        10: [
            {
                speaker: "Tehara",
                dialogue: "Hey guys! What's going on? You look like you just sucked venom from a snake through its teeth.",
                emotion: "happy"
            },
            {
                speaker: "Usain",
                dialogue: "Hi Hari! I didn't see you coming. Have the archers stopped drilling? I thought you would be out there with them a while longer.",
                emotion: "neutral"
            },
            {   
                speaker: "Tehara",
                dialogue: "Most of them are still at it, I just left. I prefer the blade. Kills feel more personal, y'know?",
                emotion: "neutral"
            },
            {   
                speaker: "Imhotep",
                dialogue: "I always feel safer with you around, Tehara.",
                emotion: "neutral"
            },
            {   
                speaker: "Tehara",
                dialogue: "You should, I've seen you train.",
                emotion: "neutral"
            },
            {   
                speaker: "Imhotep",
                dialogue: "Sweet Spirits temper me! If Aarit wasn't vouching for you, I would eject you from the camp so fast you would think you were flying.",
                emotion: "neutral"
            },
            {   
                speaker: "Tehara",
                dialogue: "Try me, fancy-pants.",
                emotion: "neutral"
            },
            {   
                speaker: "Usain",
                dialogue: "Guys! Guys! What's Aarit gonna say if he hears we're fighting? Again?",
                emotion: "neutral"
            },
            {   
                speaker: "Imhotep",
                dialogue: "With any luck he'll recognize who the source of the problem is.",
                emotion: "neutral"
            },
            {   
                speaker: "Usain",
                dialogue: "Or he'll see you two as distractions for me from my lessons and move camps. Do you really want to see me go?",
                emotion: "neutral"
            },
            {   
                speaker: "Imhotep",
                dialogue: "No, I guess not.",
                emotion: "neutral"
            },
            {   
                speaker: "Tehara",
                dialogue:"Ha!",
                emotion: "neutral"
            },
            {   
                speaker: "Usain",
                dialogue: "Hari, the only reason anyone puts up with your antics is because Aarit freed you after your gang of highwaymen left you behind when they failed to raid Lae Ling's caravan. Gods know why he's willing to put up with a fire elf, but he does when no one else will. So maybe try not to pick fights with his students, AND your only friends.",
                emotion: "neutral"
            },
            {   
                speaker: "Tehara",
                dialogue: "Pfft, fine, fine. Just admit I'm better than you and we can drop it.",
                emotion: "neutral"
            },
            {   
                speaker: "Usain",
                dialogue: "Tehara...",
                emotion: "neutral"
            },
            {   
                speaker: "Tehara",
                dialogue:"Okay, okay. Geez, learn to take a joke. Anyways, what's going on?",
                emotion: "neutral"
            },
            {   
                speaker: "Imhotep", 
                dialogue: "Aarit just gave Usain another riddle.",
                emotion: "neutral"
            },
            {   
                speaker: "Tehara",
                dialogue: "Oh. Bye.",
                emotion: "neutral"
            },
            {   
                speaker: "Usain",
                dialogue: "Wait! Hari! C'mon!",
                emotion: "neutral"
            },
            {   
                speaker: "Tehara",
                dialogue: "No! The last time we tried to figure out one of these it took all day! And we were still wrong!",
                emotion: "neutral"
            },
            {   
                speaker: "Imhotep",
                dialogue: "Maybe if you had applied yourself instead of chasing dandelions we would have got it.",
                emotion: "neutral"
            },
            {   
                speaker: "Usain",
                dialogue: "Knock it off, Imhotep. We aren't getting close to an answer on our own.",
                emotion: "neutral"
            },
            {   
                speaker: "Tehara",
                dialogue: "Sun and sands...",
                emotion: "neutral"
            },
            {   
                speaker: "Usain",
                dialogue:"Maybe she can help. Hari, please?",
                emotion: "neutral"
            },
            {   
                speaker: "Tehara",
                dialogue: "Fine, what is it?",
                emotion: "neutral"
            },
            {   
                speaker: "Usain",
                dialogue: "So, a raiding party of bandits catch you at a fork in the road. They rob you, then give you a choice of which path they take next. Down one road there is a little town, but down the other road is a little farm where only one person lives. If you choose the first road, the town will be attacked and many people will die. Choosing the second road will surely kill the farmer. Which do you pick?",
                emotion: "neutral"
            },
            {   
                speaker: "Tehara",
                dialogue: "…",
                emotion: "neutral"
            },
            {   
                speaker: "Usain",
                dialogue: "Well?",
                emotion: "neutral"
            },
            {   
                speaker: "Tehara",
                dialogue: "That's not a riddle. It doesn't even rhyme.",
                emotion: "neutral"
            },
            {   
                speaker: "Imhotep",
                dialogue: "I said the very same.",
                emotion: "neutral"
            },
            {   
                speaker: "Usain",
                dialogue: "Wha...never mind. What's your choice?",
                emotion: "neutral"
            },
            {   
                speaker: "Tehara",
                dialogue: "Who's at the farm?",
                emotion: "neutral"
            },
            {   
                speaker: "Usain",
                dialogue: "Um, we don't know.",
                emotion: "neutral"
            },
            {   
                speaker: "Tehara",
                dialogue: "Okay. Who's in the town?",
                emotion: "neutral"
            },
            {   
                speaker: "Usain",
                dialogue: "We don't know that either.",
                emotion: "neutral"
            },
            {   
                speaker: "Tehara",
                dialogue: "Then why do I care?",
                emotion: "neutral"
            },
            {   
                speaker: "Imhotep",
                dialogue: "Because you don't want anyone to suffer and die needlessly?",
                emotion: "neutral"
            },
            {   
                speaker: "Tehara",
                dialogue: "Why? I'm more concerned about how I got robbed.",
                emotion: "neutral"
            },
            {   
                speaker: "Usain",
                dialogue: "Tehara, you have to choose one.",
                emotion: "neutral"
            },
            {   
                speaker: "Tehara",
                dialogue: "Pfft, no I don't.",
                emotion: "neutral"
            },
            {   
                speaker: "Imhotep",
                dialogue: "Let's say the bandits will kill you if you refuse to play their game.",
                emotion: "neutral"
            },
            {   
                speaker: "Tehara",
                dialogue: "Then I just pick a random direction. Either or. Doesn't matter.",
                emotion: "neutral"
            },
            {   
                speaker: "Usain",
                dialogue: "You don't care? At all?",
                emotion: "neutral"
            },
            {   
                speaker: "Tehara",
                dialogue: "Nope.",
                emotion: "neutral"
            },
            {   
                speaker: "Usain",
                dialogue: "But why?",
                emotion: "neutral"
            },
            {    
                speaker: "Tehara",
                dialogue: "Why should I? If I don't know who's getting killed, so why should it matter?",
                emotion: "neutral"
            },
            {   
                speaker: "Imhotep",
                dialogue: "Of course it matters! You're the one getting them killed!",
                emotion: "neutral"
            },
            {   
                speaker: "Tehara",
                dialogue: "No I'm not. The bandits are the ones doing the killing. I just point them in a direction. To save my own life, I might add.",
                emotion: "neutral"
            },
            {   
                speaker: "Imhotep",
                dialogue: "That's abominable Tehara.",
                emotion: "neutral"
            },
            {   
                speaker: "Tehara",
                dialogue: "People die every day. I don't see you crying over them.",
                emotion: "neutral"
            },
            {   
                speaker: "Imhotep",
                dialogue: "My choices are not causally tied to their deaths.",
                emotion: "neutral"
            },
            {   
                speaker: "Tehara",
                dialogue: "And I'm not involved with whoever the bandits kill.",
                emotion: "neutral"
            },
            {   
                speaker: "Imhotep",
                dialogue: "That is wholly and completely different.",
                emotion: "neutral"
            },
            {   
                speaker: "Tehara",
                dialogue: "Isn't it?",
                emotion: "neutral"
            },
            {   
                speaker: "Imhotep",
                dialogue: "No!",
                emotion: "neutral"
            },
            {   
                speaker: "Usain",
                dialogue: "What would make you care?",
                emotion: "neutral"
            },
            {   
                speaker: "Tehara",
                dialogue: "Well, like I said, I would have to know who is in the town and who is at the farm. If the town is full of Vessii, and a fire elf lives at the farm, I'll send the bandits to the town. Saving the life of another fire elf matters more to me than a village full of strangers.",
                emotion: "neutral"
            },
            {   
                speaker: "Imhotep",
                dialogue: "The life of one fire elf is in no way worth more than the lives of whole town!",
                emotion: "neutral"
            },
            {   
                speaker: "Tehara",
                dialogue: "To me it is. There aren't a whole lot of elves around anymore, much less fire elves. And no one likes us anyways. We need to look out for our own.",
                emotion: "neutral"
            },
            {   
                speaker: "Usain",
                dialogue: "What if it was a town of Vessii and a Dahn farmer?",
                emotion: "neutral"
            },
            {   
                speaker: "Tehara",
                dialogue: "Trickier, but I think I would still send them to the town.",
                emotion: "neutral"
            },
            {   
                speaker: "Imhotep",
                dialogue: "Amazing. Simply amazing. You are truly a paragon of integrity Tehara.",
                emotion: "neutral"
            },
            {   
                speaker: "Tehara",
                dialogue: "Imhotep, Fire elves are half Dahn. Sure, most Dahn hate our guts because we're, you know, elves, but still their sorta like family.",
                emotion: "neutral"
            },
            {   
                speaker: "Imhotep",
                dialogue: "And that's enough reason to send women and children to their deaths?",
                emotion: "neutral"
            },
            {   
                speaker: "Tehara",
                dialogue: "So long as I don't know them personally, yeah.",
                emotion: "neutral"
            }
        ],

        11: [
            {
                speaker: "Usain",
                dialogue: "I'm kinda on her side here.",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "What!?",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "If both the town and the farmer are strangers you can play the numbers game. Send the bandits to the farm because it saves more lives. If you know who lives where, the answer changes.",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "You just agreed with me!",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "What if Aarit was at the farm?",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "Explain yourself.",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "Aarit is half reason we have a chance in this war against Rae. Is the town worth putting everything everyone here has worked on for the past year at risk? Would the freedom of everyone in Toma, your city, plus all the lives of the elves be worth less than the lives of some women and children in a backwater village?",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "Some? You make them sound so cheap! Their lives matter!",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "More than everyone in Toma and the elven cities?",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "You can't compare the two like that!",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "Oooooo! Admit it, he got you!",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "No! No, he hasn't. This is Aarit we are talking about. He could probably fight off a whole bandit gang by himself.",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "Wow. You trying to grab at the moon with how far you're reaching? Aarit's good, but one old man against enough brigands to wipe out a town? No way.",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "Usain, that was your first mission with him, was it not? You raided some bandits that had been threatening villages? That was how you came to be here, with us.",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "If by “raid” you mean “sneaked into bandit camp and stole their plans only for me to get caught, forcing Aarit and I to run and hide for the next week”, then yeah, we raided those bandits. We raided them real good.",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "Really? I had heard it told much more...dramatically than that.",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "The story has grown some since last I lived it. The point being, when faced with twenty armed thugs Aarit himself ran, even with me there with him.",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "Heh, I would've run too.",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "Fine, fine! So Aarit can't fight off all the bandits. I still don't believe you should send the bandits to the town!",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "Ooo! Ooo! My turn to be the annoying one and ask why!",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "Because we shouldn't show favoritism to people we know over people we don't, because life is precious and we have to protect as much of it as we can and because sacrificing children for ANY cause is abhorrent!",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "But didn't you just say that we should sacrifice the few to save the many?",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "Like you have any room to stand. You changed your mind the second this fiery wastrel gave you a reason to. At least I'm being consistent!",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "Consistently stupid, amIright?",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "And this is why no one likes fire elves.",
                emotion: "neutral"
            }
        ],

        12: [
            {
                speaker: "Usain",
                dialogue: "Tehara, no.",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "Are you telling me you would send them to kill your own?",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "I don't think is matters who is where. Besides, we shouldn't be playing favorites.",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "Why not? If a man is told to kill a stranger or his wife are you going to blame him for killing the stranger?",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "Well...",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "Well what? You know I'm right.",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "It is selfish and short-sighted, Hari.",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "Selfish? SELFISH! What's selfish about choosing the person that matters to you? A person that you might actually like and want to spare? I save who matters to me, not who matters to anyone else.",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "What if it was someone you loved versus someone you needed?",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "Huh?",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "You don't like the emir, Miranus, right?",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "Of course not. He's a weaselly Vessii who talks better than he fights. He's rich and rules over a few small towns, but he's gross all the same. I feel like I need a bath after being in the same room as him.",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "He's my cousin and I should be offended by that, but it's hard to argue with.",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "He is financing our war effort though.",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "So what?",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "We can't fight Rae without his money or his troops, and we can't convince the rest of the council in Toma to back us without his connections.",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "Doesn't mean I have to like him.",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "You don't have to. However, would you say he's necessary?",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "Regrettably, yes.",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "Okay, so who is someone you like?",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "Definitely not you guys.",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "Hari, focus.",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "Ugh. I like my dad. Mom and I starved more days than not because he was such a bad thief, but he was good man.",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "Okay, how about this: The bandits are going to raid either Miranus' town where all his armorers, weapon smiths and war chest is located, or they attack a farm your dad is at.",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "I send them to Miranus' town. If the war chest is there, so too will be his soldiers.",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "Let's say there are no soldiers, just non-combatants.",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "Why?",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "Because he's stupid! Look, can we move on and not question everything? Let's assume whoever the bandits hit, everyone dies.",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "But THAT is stupid!",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "Tehara, please.",
                emotion: "neutral"
            },
            {
                speaker: "Tehara", 
                dialogue: "FINE! So the question is either I sacrifice my dad, or get Miranus killed which leads to Rae annexing Toma and killing all the elves? I choose to save my dad!",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "How can you still say that?",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "First of all, I say it to spite you two pit-vipers. Second of all, I hate Miranus. Third of all, Toma is your city, not mine. Fourth, and most importantly, HE'S MY DAMN FATHER!",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "So you don't care for Toma, fine, I'm not too tied to it either. Rae wants to control all of southern Vessa. That means annihilating the elven cities that contest it. Sooner or later, they'll try to wipe out the fire elves too.",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "Let them try!",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "They will, and you can stop them by saving Miranus. So who is more important: your father or your people?",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "...",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "Well?",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "My...my father.",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "Still?",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "Yes.",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "Can I ask why?",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "What's the greatest honor for a half-Dahn?",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "To return to Al-Ilbis, to walk the Continent once again after our ancestor's dishonor of mixing with the lesser races has been cleansed.",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "Fire elves are half Dahn, half elf. To the proper Dahn, the pure bloods, elves aren't human. In fact, they're worse than mongrels. No fire elf, even though we're half breeds, will ever walk the Continent again. Not even our children, or our children's children will be acceptable. That's why some fire elves cut the points off their ears, so we can rid ourselves of what marks us as elves, instead of Dahn.",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "You still have your points, though.",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "Because my dad told me to keep them. Elf and human, both were important to make me who I am. He told me not to reject one for the other. My mom, she wanted me to be Dahn, she drilled me every damn day in the culture, memorizing the Codes, learning to fight with a spear and shield. In spite of her elf blood, she was more Dahn than most pure Dahn I've ever met and she pushed me to be the same. But dad, a pure blooded Dahn, he liked me for me. He told me that elf ears were pretty, and asked that I keep them.",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "Hari...",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "I like my dad. I don't like half of my own people, but I love him. Call it selfish if you have to, but if it comes down to it, I choose who I love over everyone else. Every. Single. Time.",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "This is what we meant by short-sighted.",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "Drink venom, Fae worshiper.",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "Excuse me!?",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "You heard me.",
                emotion: "neutral"
            }
        ],

        21: [
            {
                speaker: "Usain",
                dialogue: "I'm kinda on her side here.",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "Not you too. Usain, I expected better.",
                emotion: "neutral"
            },
            {   
                speaker: "Usain",
                dialogue: "Hey, if both the town and the farmer are strangers you can play the numbers game. Send the bandits to the farm or town because you think it will save more lives in the long run, right?. If you know who lives where the answer changes.",
                emotion: "neutral"
            },
            {   
                speaker: "Imhotep",
                dialogue: "How? Please tell me.",
                emotion: "neutral"
            },
            {   
                speaker: "Usain",
                dialogue: "What if Aarit was at the farm?",
                emotion: "neutral"
            },
            {   
                speaker: "Imhotep",
                dialogue: "...",
                emotion: "neutral"
            },
            {   
                speaker: "Usain",
                dialogue: "Aarit is the one who brought Rae's treachery to light. His reputation as a famed general, as Ogma, is half reason anyone is willing to help us in a war against Rae. Rae will kill more people if left unchecked than the bandits ever could. Would the lives of everyone in Toma, your city, be worth less than the lives of a some women and children in a backwater village?",
                emotion: "neutral"
            },
            {   
                speaker: "Imhotep",
                dialogue: "Backwater villa...!? Usain, listen to yourself!",
                emotion: "neutral"
            },
            {   
                speaker: "Usain",
                dialogue: "Plus, we know Aarit. He's a good man. A little harsh sometimes, but no one serves as a better moral compass for the army than him. I'm not going to kill him off so a little town can live. Some lives matter more than others.",
                emotion: "neutral"
            },
            {   
                speaker: "Imhotep",
                dialogue: "Absolutely not! We were all born of the same Earth. Aarit is more useful to us alive, but his singular life does not outweigh that of a town, no matter how small!",
                emotion: "neutral"
            },
            {   
                speaker: "Tehara",
                dialogue: "He doesn't even need to be useful, you just have to like him enough to want to save him.",
                emotion: "neutral"
            },
            {   
                speaker: "Usain",
                dialogue: "Utility plays a role in that, or are you telling me you would save the town over Aarit if you disliked him?",
                emotion: "neutral"
            },
            {   
                speaker: "Tehara",
                dialogue: "Maybe. He has some nice things I wouldn't mind picking off his corpse.",
                emotion: "neutral"
            },
            {   
                speaker: "Usain",
                dialogue: "Okay, now that's where I'm going to draw the line.",
                emotion: "neutral"
            },
            {   
                speaker: "Imhotep",
                dialogue: "Yes, looting the dead is much worse than creating a small hill of bodies. Your callousness is astounding.",
                emotion: "neutral"
            },
            {   
                speaker: "Tehara",
                dialogue: "Thanks!",
                emotion: "neutral"
            },
            {   
                speaker: "Imhotep",
                dialogue: "That wasn't a compliment.",
                emotion: "neutral"
            },
            {   
                speaker: "Tehara", 
                dialogue: "Don't really care.",
                emotion: "neutral"
            },
            {   
                speaker: "Imhotep",
                dialogue: "Perfect.",
                emotion: "neutral"
            }
        ],

        22: [
            {
                speaker: "Usain",
                dialogue: "Tehara, no.",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "Are you telling me you would send them to kill your own?",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "I don't think it matters who is where.",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "Why not? If a man is told to kill a stranger or his wife are you going to blame him for killing the stranger?",
                emotion: "neutral"
            },
            {
                speaker: "Usain", 
                dialogue: "Well...",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "Well what? You know I'm right.",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "It just seems kind of selfish, Hari.",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "Selfish? SELFISH! What's selfish about choosing the person that matters to you? A person that you actually like and want to spare? I'll save who matters to me, not who matters to anyone else.",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "What if you had to choose between someone you loved or someone you hated, but needed?",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "Now you're talking like fancy-pants over there. State it plain.",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "Okay, you don't like the emir, Miranus, right?",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "Of course not. He's a weaselly Vessii who talks better than he fights. Sure, he's rich and rules over a few towns, but he's a gross. I feel like I need a bath after being in the same room as him.",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "He's my cousin and I should be offended by that.",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "He is financing us though. Our war can't happen without him.",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "So what?",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "We can't fight Rae without his money or his troops, and we can't convince the rest of the council to help without his connections.",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "Doesn't mean I have to like him.",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "You don't have to. However, would you say he's necessary?",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "Regrettably, yes.",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "Okay, so who is someone you like?",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "Definitely not you guys.",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "Hari, focus.",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "Ugh. I like my dad. Mom and I starved more days than not because he was such a bad thief, but he was good man.",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "Okay, how about this: The bandits are going to raid either Miranus' town where all his armorers, weapon smiths and war chest is located, or they attack a farm your dad is at.",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "I send them to Miranus' town. If the war chest is there, he'll have soldiers guarding it.",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "Let's say there are no soldiers, just non-combatants.",
                emotion: "neutral"
            },
            {
                spekaer: "Tehara",
                dialogue: "Why?",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "Because he's stupid! Look, can we move on and not question everything? Let's assume whoever the bandits hit, everyone dies.",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "But that's stupid!",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "Tehara, please.",
                emotion: "neutral"
            },
            {
                speaker: "Tehara", 
                dialogue: "FINE! So the question is either I sacrifice my dad, or Rae annexes Toma and kills all the elves because Miranus wasn't there to help us? I choose to save my dad!",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "How can you say that? With everything we just added, you would still kill everyone to save your father? Do the lives of everyone else matter nothing to you? What is it with you and Usain making all the worst calls.",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "That just means the two of us are smarter than you!",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "What is your problem with me, Tehara? Ever since day one you've done nothing but seek to belittle me like an angry child. Every time we speak there is always some new insult, some new way to put me down like you are so much better than me.",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "...guys...",
                emotion: "neutral"
            },
            {
                speaker: "Tehara", 
                dialogue: "Because you're a whiny baby who had everything handed to him! Someone bought you your weapons, you didn't make them. You got those fancy robes to wear around, but what did you do to earn them? Nothing! You haven't even seen a real battle, yet you have the gall to stand here and lecture me about how I should behave?",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "Because you couldn't behave well if it was the only thing that stood between you and returning to your stupid Continent!",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "Take that back! Al-Ilbis is the glory of all Dahn!",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "Guys...",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "As if I would! You fire elves are just like the rest of these contemptible Dahn outcasts. You revere some place you've never been, full of a people that hate very existence! It's bad enough they exile their own people for having relations with anyone who isn't Dahn, but the way that they view you elves? Your lower than dogs to them, yet lap up what little attention they give like broken hounds!",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "You step too far, Vessii scum!",
            },
            {
                speaker: "Imhotep",
                dialogue: "What is it with you Dahnic half-bloods ? What is so attractive about an empty desert continent, a hate spewing people and a culture that glorifies nothing but death?",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "GUYS! SHUT UP, THE BOTH OF YOU! Need I play peacekeeper every time you two come close enough to breathe the same air? By Sun and Sands! I should just let the two of you kill each other to get a little peace! Hari, you goad him too much! You have to stop, before I help him throw you out, you little pismire!",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "But he...",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "Save it for someone who cares! I try to like you in spite of your nature and this is what you give me? I couldn't find a bigger headache than you if I stabbed myself in the face! And you Imhotep, the loving, the kind, the one values all life...unless it's Dahn.",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "That's not fair!",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "Isn't it? This whole time you've been complaining about how the desert people are too cold, how we don't think life is sacred enough, how your bleeding Vessi ideals are so much better! Did you forget that I'm Dahn? That Toma is majority Dahn? That we are going to fight a war with the Dahn? For someone who constantly talks up the value of virtue you hold precious little of it yourself.",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "Usain, I...",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "Save it. Just do better. The both of you.",
                emotion: "neutral"
            }
        ],

        100: [
            {
                speaker: "Vadim",
                dialogue: "Hello my friends...What's going on here?",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "Hi, Vadim. We were just, um...",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "Aarit gave Usain a riddle and we are attempting find the solution, without much luck.",
                emotion: "neutral"
            },
            {
                speaker: "Vadim",
                dialogue: "That is all, Usain?",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "Yeah, that's it.",
                emotion: "neutral"
            },
            {
                speaker: "Vadim",
                dialogue: "I believe there is something else here, but if you do not wish to speak, I will not press. What is riddle?",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "A raiding party of bandits catch you at a fork in the road. They rob you, then give you a choice of which path they take next. Down one road there is a little town, but down the other road is a little farm. If you choose the first road, the town will be attacked and many people will die. Choosing the second road will surely kill everyone at the farm. Which do you pick? We haven't had any luck figuring out the answer.",
                emotion: "neutral"
            },
            {
                speaker: "Vadim",
                dialogue: "Usain, this is not riddle.",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "Not you too.",
                emotion: "neutral"
            },
            {
                speaker: "Vadim",
                dialogue: "This is morality puzzle.",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "A what?",
                emotion: "neutral"
            },
            {
                speaker: "Vadim",
                dialogue: "Morality puzzle. It is something made for you to think about what is right or wrong. There is no answer.",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "WHAT!?",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "Really? That makes much more sense.",
                emotion: "neutral"
            },
            {
                speaker: "Vadim",
                dialogue: "Yes, scholars craft these puzzles to teach students about thinking. I never liked them, but others find them useful.",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "What's wrong with them?",
                emotion: "neutral"
            },
            {
                speaker: "Vadim",
                dialogue: "What people say they will do is not always the same as what they really do. I could say I send bandits to the farm to spare village, but when I am in real situation, I freeze and cannot make decision. You understand, yes?",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "Yeah, I guess that's a drawback. You never really know what you're capable of until you are faced with it.",
                emotion: "neutral"
            },
            {
                speaker: "Vadim",
                dialogue: "Exactly, my friend.",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "Great! So then we've been arguing over absolutely nothing this whole time!",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "The esoteric is still important, Tehara.",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "Eso-what now?",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "Esoteric. It's knowledge known by a few. Maybe it's not universally applicable, but if we don't think about it, how can we prepare for it?",
                emotion: "neutral"
            },
            {
                speaker: "Vadim",
                dialogue: "This is also true. My advice? Do not get hung up on it.", 
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "I still feel cheated.",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "Vadim, what would you do?",
                emotion: "neutral"
            },
            {
                speaker: "Vadim",
                dialogue: "Me? Hmm...I think context is important to situation. Who is in town? Who is at farm? What is my mission?",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "Mission?",
                emotion: "neutral"
            },
            {
                speaker: "Vadim",
                dialogue: "Yes, mission always comes first. I am mercenary. Maybe I have been sent to scout out town's defenses before my army attacks, yes? I can save army's strength and time by sending bandits to town. On other hand, maybe I have to assassinate someone at farm. Then I send bandits to farm.",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "Hmm, makes sense.",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "If you're unpricipled.",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "But what if there is no mission? What if you were just traveling between jobs and got attacked?",
                emotion: "neutral"
            },
            {
                speaker: "Vadim",
                dialogue: "Then I send bandits to farm. It is simple. Without mission, only reason to send bandits to town is cruelty. I am not cruel, so I do not send them to town. Not without mission.",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "Well, I agreed with the first half of that.",
                emotion: "neutral"
            },
            {
                speaker: "Vadim",
                dialogue: "You do not think mission is important?",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "I think your duty to people and the preservation of life comes before any task you have been given. The gods may have abandoned us, but the spirits can still guide men, and they ask us to guard life. So we have a duty to protect that which is living.",
                emotion: "neutral"
            },
            {
                speaker: "Vadim",
                dialogue: "Ah, this is Vessi religion?",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "Yes, we believe life is sacred and needs to be preserved, particularly the lives of humans and elves. Pure elves believe much the same as us, except they value the grasses and trees as much as themselves. Even so, the Vessii and Elven Cites get along well enough that we're willing to help them against Rae. Unlike the Dahn.",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "'If you can't defend yourself, you must be destroyed, so that the strong may have your part.'",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "More Dahnic proverbs. Wonderful.",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "Getting us back on track, according to you, Vadim, the best thing to do in the situation is whatever serves you best?",
                emotion: "neutral"
            },
            {
                speaker: "Vadim",
                dialogue: "No, it is whatever serves mission best. It may hurt me or someone else, but if mission is accomplished, then all is good.",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "Even if someone else's life hangs in the balance?",
                emotion: "neutral"
            },
            {
                speaker: "Vadim",
                dialogue: "Again, I am mercenary. That is usually case.",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "What if someone you loved was at the farm and someone you needed but hated was at in the town? What would you do then?",
                emotion: "neutral"
            },
            {
                speaker: "Vadim",
                dialogue: "Like if cousin Basil was at farm and the Emir Marinus was at town?",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "Heh, you hate him too?",
                emotion: "neutral"
            },
            {
                speaker: "Vadim",
                dialogue: "He is weasel without honor. I cannot like man that I cannot trust.",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "So the mission is to protect Marinus, but Basil is at the farm. What do you do?",
                emotion: "neutral"
            },
            {
                speaker: "Vadim",
                dialogue: "Sorry cousin Basil, mission must come first. I send bandits to farm.",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "But he's your family!",
                emotion: "neutral"
            },
            {
                speaker: "Vadim",
                dialogue: "Yes, and I would grieve greatly for him. But I have mission to protect Marinus. Basil cannot get in way.",
                emotion: "neutral"
            }
        ],
        111: [
            {
                speaker: "Usain",
                dialogue: "That makes sense.",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "Woah, woah, woah! YOU just agreed with ME.",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "After you agreed with me.",
                emotion: "neutral"
            },
            {
                speaker: "Vadim",
                dialogue: "Hoho! Usain, can you not make up your mind?",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "Well everyone just keeps making up valid points and I thought that...",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "Thought what? You could just rely on us for answers to questions you can't figure out yourself?",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "It's not like that at all!",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "Then what is it, Usain?",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "Yeah, pick a side!",
                emotion: "neutral"
            },
            {
                speaker: "Vadim",
                dialogue: "Seems I have stepped into heated debate without knowing. What are sides?",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "I think you should save whoever matters to you most.",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "I think you should save the town regardless of the circumstance. It's your moral obligation.",
                emotion: "neutral"
            },
            {
                speaker: "Vadim",
                dialogue: "I see. And Usain, you think both are right?",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "Yeah, but like...I don't know. Both make sense, in their own way. Sending the bandits to the town is bad and I would never want to do that, but I also think I should save my friends and family.",
                emotion: "neutral"
            },
            {
                speaker: "Vadim",
                dialogue: "But Usain, you cannot have it both ways. What if you must make decision quickly? You must know these things, how to act, before you are confronted with situation. How else will you become mercenary if you freeze like this?",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "But I...",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "C'mon, Usain, old buddy, old pal! You know I'm right!",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "As if. Usain, I know you will pick the right choice. Don't be so easily persuaded by this devilish little urchin.",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "How's about you shut up and let him decide for himself?",
                emotion: "neutral"
            },
            {
                speaker: "Vadim",
                dialogue: "I admit, I am curious what Usain will say as well.",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "Hey now...",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "Come Usain, speak up. What does your heart say?",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "I would...well...",
                emotion: "neutral"
            },
            {
                speaker: "Vadim",
                dialogue: "We're waiting, friend.",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "Well I...",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "Spit it out already!",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "I don't...I don't know.",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "You don't know? Really?",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "What do you expect me to say? That you're right? That they are wrong? That any of your choices are more righteous than the others? Is that it? Sorry, I can't do that. Maybe I'm just not righteous enough myself to make a call like this.",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "No one is calling you righteous, Usain.",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "No one should call you righteous either! All your fancy rules are just there to shirk off any sense responsibility!",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "I didn't mean it like...",
                emotion: "neutral"
            },
            {
                speaker: "Vadim",
                dialogue: "Usain, it is okay. We are all friends here, yes? No need to get angry.",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "Too late for that!",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "If I recall correctly, you and Imhotep were the ones that roped me into this. Don't go acting like this whole argument wasn't your idea in the first place!",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "Yeah, and I regret ever bringing it up now.",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "You should!",
                emotion: "neutral"
            },
            {
                speaker: "Vadim",
                dialogue: "Tehara, you are only making this worse.",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "Me!? This isn't even my fault!",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "You know what? Forget it. I'll go figure this out by myself some other time. Good night.",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "Come now, Usain. Don't be like that. The sun hasn't even set yet. We can reconcile.",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "Try me after I get eaten out by Aarit for not having a good enough answer for him.",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "I think I might have pushed him too hard.",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "You can say that again.",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "You didn't help either.",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "What did I do? This is all your fault!",
                emotion: "neutral"
            },
            {
                speaker: "Vadim",
                dialogue: "Shut up, both of you! You have already lost one friend for night, do you really want eat alone?",
                emotion: "neutral"
            },
            {
               speaker: "Imhotep",
               dialogue: "...",
               emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "What are you thinking?",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "If we got him a sweet from the pantry, do you think he would forgive us?",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "I don't need his forgiveness...but he might start talking to us sooner if we stole him a couple.",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "If it's for a good cause, I guess I'll help. Vadim, care to join us?",
                emotion: "neutral"
            },
            {
                speaker: "Vadim",
                dialogue: "I cannot. I have previous engagement in my own camp.",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "Very well. Tehara, shall we be off?",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "I suppose so. But just so we're clear, I'm doing this for him, not you.",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "To put it bluntly, I rather be stung by a scorpion than stand near you. I don't want him going to sleep angry at me though, so I'll endure your company.",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "Geez, with a tongue like that, no wonder he's mad at you. You play the look out, got it?",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "Yes, yes, very well. Let's get this over with. So long Vadim.",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "See ya!",
                emotion: "neutral"
            },
            {
                speaker: "Vadim",
                dialogue: "Good luck friends. With any luck, this will all work out to our advantage.",
                emotion: "neutral"
            }
        ],
        112: [
            {
                speaker: "Usain",
                dialogue: "I think I see where you're coming from. I do have a question though.",
                emotion: "neutral"
            },
            {
                speaker: "Vadim",
                dialogue: "And what is question, my friend?",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "I would agree with you that who is at the farm and town matters and can change which answer is right. There we agree. What I'm curious about is whether or not there is someone you would not sacrifice for the sake of your mission.",
                emotion: "neutral"
            },
            {
                speaker: "Vadim",
                dialogue: "This would take some time to think about. I cannot think of anyone off top of my head.",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "How about your mother?",
                emotion: "neutral"
            },
            {
                speaker: "Vadim",
                dialogue: "I would gladly sacrifice mother for mission!",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "KINSLAYER!",
                emotion: "neutral"
            },
            {
                speaker: "Vadim",
                dialogue: "Little Hari, I cannot kill what is already dead.",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "Oh.",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "Sorry for your loss.",
                emotion: "neutral"
            },
            {
                speaker: "Vadim",
                dialogue: "It is fine. In truth, I never knew her well enough to miss her. I will honor her bones, but I did not weep when she died.",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "I can't imagine not having anyone so close that I would not question my own beliefs to save them. It seems like too lonely a path to walk, not loving anyone.",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "That sounds like something a loser would say. You can't let personal baggage weigh you down as you rise you up. There is a reason they say it's lonely at the top.",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "Hari, you said you would save the person you cared for at the farm over the everyone at the town.",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "I'm teasing him! Besides, you said it mattered what the person can do you for you, not how much you liked them.",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "I was trying to find a middle ground between Imhotep's position and yours. If I was to be completely honest, I can name a few people I love enough to sacrifice the town for, regardless of what I get out it.",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "Like who?",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "I would choose to save you.",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "Wha-wha-what?",
                emotion: "neutral"
            },
            {
                speaker: "Usain", 
                dialogue: "I mean, um, uh, Imhotep and Aarit too! Haha, um, yeah. I would save my older sister as well. Because I lover her! But, um, not like, you know, not like that.",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "Oh.",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "And that doesn't mean I would feel good about it. I think Imhotep is right too, I need to try to save as many people as I can.",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "Right.",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "Usain, you have all the grace of a child falling down stairs.",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "What? What did I do?",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "Oh nothing. If I'm at farm, please send the bandits there. I understand that you are trying to show your appreciation of our friendship by saving me, but I couldn't look you in the eyes if you slaughtered innocent people for my sake.",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "I'm not sure I can commit to that.",
                emotion: "neutral"
            },
            {
                speaker: "Vadim",
                dialogue: "Usain, you were so close.",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "To what?",
                emotion: "neutral"
            },
            {
                speaker: "Vadim",
                dialogue: "Nothing, nothing. If you won't speak of it, then neither will I!",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "What in the blazes are you talking about?",
                emotion: "neutral"
            },
            {
                speaker: "Vadim",
                dialogue: "Nothing at all. Might I suggest, my friend, a change in career? I know you are trying to become legendary mercenary like myself, but if you do not wish to hurt people you love, it will not be a good job. Mercenaries often fight their friends on the battlefield.",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "Try banditry! As your first job, you can help me raid the pantry!",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "Glob is cooking tonight, isn't he?",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "So you see how dire the situation is.",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "Yes, I do. Imhotep, if you're tired of the high road, you can join us on the low road.",
                emotion: "neutral"
            },
            {
                speaker: "Vadim",
                dialogue: "Actually, Imhotep was going to come with me. Basil needs lessons and Imhotep agreed to help.",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "I don't recall ever...why are you looking at me like that?",
                emotion: "neutral"
            },
            {
                speaker: "Vadim",
                dialogue: "We must be off! Save me sweet roll, you two! Come Imhotep!",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "But I really don't remember-",
                emotion: "neutral"
            },
            {
                speaker: "Vadim",
                dialogue: "Come!",
                emotion: "neutral"
            },
            {
                speaker: "Imhotep",
                dialogue: "All right, fine! You guys, try not to steal everything, will you?",
                emotion: "neutral"
            },
            {
                speaker: "Tehara",
                dialogue: "No promises.",
                emotion: "neutral"
            },
            {
                speaker: "Usain",
                dialogue: "See ya, guys!",
                emotion: "neutral"
            },
            {
                speaker: "Vadim",
                dialogue: "Good luck, friend.",
                emotion: "neutral"
            }
        ],
        121: [
            {
                Usain: "Huh, I never thought of it like that."
            },
            {
                Vadim: "How do you mean?"
            },
            {
                Usain: "Well, this started with me and Imhotep agreeing that we should save the town instead of the farmer because it saved more lives, even if we had different reasons. Tehara demanded context, which blurred the lines some, but this helps."
            },
            {
                Vadim: "What lines are you talking about, my friend? And what are your reasons?"
            },
            {
                Usain: "I thought I should save the town because it did more good."
            },
            {
                Vadim: "Save more people, do more good. It is simple, but effective reason."
            },
            {
                Usain: "I thought so too. But if there is someone important at the farm, it made you think of it different. Like, we used Marinus versus someone you cared for. Saving Marinus will result in more lives being saved..."
            },
            {
                Tehara: "Allegedly."
            },
            {
                Usain: "Right, allegedly. So even if we had to sacrifice a loved one, Imhotep and I agree that we should send the bandits to wherever it will save more lives."
            },
            {
                Vadim: "Because it is good?"
            },
            {
                Usain: "Yes, precisely. It also fixes the problem of worrying about every life we have to take. If it's in the interest of the greater good, it's worth it."
            },
            {
                Imhotep: "I don't know if I would phrase it like that, exactly."
            },
            {
                Vadim: "I would not say it that way either."
            },
            {
                Usain: "So, in a sentence, how would you both say it?"
            },
            {
                Vadim: "I would say what I said before, mission is what matters, not lives at stake."
            },
            {
                Imhotep: "Do what is right, regardless of how much it may cost you."
            },
            {
                Usain: "Huh. Weird how we can all do the same thing for different reasons."
            },
            {
                Imhotep: "Unsettling, really."
            },
            {
                Usain: "Why?"
            },
            {
                Imhotep: "How little about the situation would we have to change for us to fight each other?"
            },
            {
                Usain: "Oh...oh."
            },
            {
                Tehara: "Oooo, now this is interesting!"
            },
            {
                Vadim: "I admit, this happens often in mercenary work. It is not often pleasant."
            },
            {
                Tehara: "Okay, okay! So let's say, Marinus is at the town and my dad is at the farm, right? You three would send the bandits to the farm, even if it meant you would have to fight me to do it?"
            },
            {
                Usain: "..."
            },
            {
                Vadim: "Sorry friend. I will save your red hair to remind me of your bright smile."
            },
            {
                Imhotep: "I would fight you too, but I wouldn't save your hair."
            },
            {
                Tehara: "Usain?"
            },
            {
                Usain: "...I don't like this line of thought."
            },
            {
                Vadim: "What if Marinus was at farm, and Tehara's papa was at town?"
            },
            {
                Imhotep: "I would send bandits to the farm. If you were hired to protect the emir, I guess that would pit you against Teharaand I, wouldn't it?"
            },
            {
                Vadim: "Yes, my friends, it would. If I win, I would deliver your sword to you brother."
            },
            {
                Imhotep: "Thank you."
            },
            {
                Tehara: "Threaten my father and we won't be friends, Vadim. I'll leave you for the crows."
            },
            {
                Imhotep: "You are ever the charmer Hari. Usain, would you be on my side or his?"
            },
            {
                Usain: "...I don't like this at all."
            },
            {
                Tehara: "I guess if both Marinus and my dad are at the farm, you'd be on your own Imhotep."
            },
            {
                Imhotep: "Yes, I suppose I would be. I would not relish facing the two of you in combat, but someone has to do what's right."
            },
            {
                Vadim: "Put up good fight, friend."
            },
            {
                Imhotep: "Only the best for you two. Have you made up your mind yet, Usain?"
            },
            {
                Tehara: "Yeah, figure yourself out yet?"
            },
            {
                Usain: "It's just...how can we call ourselves friends if we are willing to kill each other over something like this? It feels like we should be able to figure it out without coming to blows."
            },
            {
                Vadim: "Sometimes friends fight. It is the way of war."
            },
            {
                Tehara: "And thievery, banditry, marauding and gambling."
            },
            {
                Imhotep: "I truly never wish to come to blows with you Usain. You are a dear friend, but I must stand by my principles. If we had to fight, I would do my best to spare you."
            },
            {
                Usain: "Thanks, but I don't feel much better."
            },
            {
                Imhotep: "This conversation took a dark turn, didn't it?"
            },
            {
                Usain: "Yeah, it did! And now I won't sleep tonight!"
            },
            {
                Tehara: "Would some sweet tarts help?"
            },
            {
                Usain: "You have sweet tarts?"
            },
            {
                Tehara: "No, but the kitchens were making some today."
            },
            {
                Imhotep: "Hari, no..."
            },
            {
                Tehara: "Aw c'mon! I saw Glob mixing sawdust into the stew. We gotta go raid the pantry if we want anything good tonight!"
            },
            {
                Usain: "Did he really?"
            },
            {
                Tehara: "Yes, yes he did."
            },
            {
                Imhotep: "You're lying, aren't you?"
            },
            {
                Tehara: "No, no I am not."
            },
            {
                Usain: "She's lying."
            },
            {
                Imhotep: "Oh, absolutely."
            },
            {
                Vadim: "Haha! Well if we must take leave of each other, I would ask my friends to save me a tart for tomorrow!"
            },
            {
                Tehara: "Sure, consider it future payment to always take my side in a fight against these two."
            },
            {
                Vadim: "Haha! Done! Hahahaha!"
            },
            {
                Usain: "Bye, Vadim."
            },
            {
                Imhotep: "Good night friend."
            },
            {
                Usain: "Imhotep, you up to play look out?"
            },
            {
                Imhotep: "Why am I always the look out?"
            },
            {
                Tehara: "Because little miss maid has got a crush on you."
            },
            {
                Imhotep: "Which one?"
            },
            {
                Tehara: "All of them."
            },
            {
                Imhotep: "Oh."
            },
            {
                Usain: "Being the emir's cousin helps."
            },
            {
                Imhotep: "I'm sure it does."
            },
            {
                Tehara: "Let's GOOOOOO!"
            },
            {
                Imhotep: "We going to keep her waiting, Usain?"
            },
            {
                Usain: "Haha! Not if we want anything for ourselves!"
            }
        ],
        122: [
            {
                Usain: "You're doing the right thing for the wrong reason, I think."
            },
            {
                Imhotep: "I wholeheartedly agree."
            },
            {
                Vadim: "And what is reason?"
            },
            {
                Usain: "If Marinus was at the farm and Basil was at the town, you would send the bandits to the town, right?"
            },
            {
                Vadim: "Of course."
            },
            {
                Usain: "I believe your reason is that you're just following orders, whatever gets the job done, regardless of the aftermath. Saving the town and everyone in it is the right thing to do, even if it means the mission fails."
            },
            {
                Vadim: "If mission fails and Marinus dies Toma falls, yes?"
            },
            {
                Usain: "It would be harder, but it's not guaranteed. Even without Marinus, we still have the elves backing us. Plus, Aarit is Ogma, and that carries a lot of weight. Doing what's right in saving the town will make our war harder, but not impossible."
            },
            {
                Vadim: "My friend, you are most noble in you defense of innocent lives! However, do not forget that each sacrifice you make will war harder. With enough sacrifices, it will become impossible."
            },
            {
                Usain: "I still think doing what is right is better than what is wrong, even when what is wrong is useful."
            },
            {
                Imhotep: "Practicality should not be the basis of our morality, Vadim."
            },
            {
                Vadim: "If you do not do what is practical, how can you accomplish mission? How can you accomplish your war? You save town. Let us say you save this one town and it does not change chances in war. But you save many towns? Now Rae wins, and all elves die and people of Toma are enslaved."
            },
            {
                Imhotep: "What is your point?"
            },
            {
                Vadim: "My point is simple. If you let this one town go, you save more lives later after war. Save town now, you lose war, and many more people die. My friend, shouldn't you look farther ahead than only choice right in front of you?"
            },
            {
                Usain: "What?"
            },
            {
                Vadim: "What if what is right choice in moment is wrong choice later?"
            },
            {
                Usain: "..."
            },
            {
                Vadim: "No answer? Maybe because Vadim is truly intelligent man with many women coming to him for “expert advice”."
            },
            {
                Tehara: "Ha! You wish."
            },
            {
                Imhotep: "How would you handle the corruption of character?"
            },
            {
                Vadim: "Corruption?"
            },
            {
                Imhotep: "We are assuming that the outcome of the war rests on our decision right here with this town. Usain was right earlier, when he said there were other ways to win the war without Marinus."
            },
            {
                Vadim: "There are many important people on our side, yes."
            },
            {
                Imhotep: "So let's say we sacrifice a village to save Marinus. Then, we sacrifice a larger town to save Lae Ling, the elven diplomat. Then, we sacrifice the whole city of Goshen to save Aarit. Eventually, Toma wins, Rae is defeated, and we have sacrificed everyone else in Vessa." 
            },
            {
                Vadim: "Ah, I see what you mean."
            },
            {
                Imhotep: "If we always make compromises in the present for the future prize, how long until there is nothing left of our moral core?"
            },
            {
                Usain: "Nice one."
            },
            {
                Imhotep: "Thank you."
            },
            {
                Tehara: "I'm lost."
            },
            {
                Imhotep: "Of course you are."
            },
            {
                Vadim: "Very well argued! I applaud your thinking! Perhaps, given time, you may become Ogma too!"
            },
            {
                Imhotep: "Thank you, but did I sway your opinion?"
            },
            {
                Vadim: "Ah, my friend, unfortunately no, you have not. I still believe that my mission must take precedent over my moral core, as you call it. If Toma wins and all else burns, I will be satisfied. Perhaps it is because I am mercenary, but I believe goal justifies methods."
            },
            {
                Imhotep: "I am sorry to hear that."
            },
            {
                Usain: "At least you're on our side."
            },
            {
                Tehara: "For as long as Marinus continues to pay him."
            },
            {
                Vadim: "I made many arguments to protect him today. My employment is secure! Haha!"
            },
            {
                Usain: "Haha! We should probably get going to the mess hall. Dinner will be served soon and I don't want to get stuck with the burnt ends again."
            },
            {
                Tehara: "It's Glob's cooking. The whole thing is probably burned."
            },
            {
                Usain: "Yeah, true. We could raid the pantry again."
            },
            {
                Imhotep: "Usain!"
            },
            {
                Tehara: "Sounds like a plan to me. You coming Vadim?"
            },
            {
                Vadim: "I cannot join you in your pantry pillaging today. I have lessons to teach Basil tonight. But if you can, save me sweet tart for tomorrow!"
            },
            {
                Usain: "With her sweet tooth? Good luck."
            },
            {
                Tehara: "Well, if we can't have Vadim I guess you'll have to be the lookout, Imhotep."
            },
            {
                Imhotep: "I'm always your lookout and what's more I don't think..."
            },
            {
                Tehara: "Too slow! Let's go you two, before that scullery maid with the crush on fancy pants here leaves."
            },
            {
                Usain: "I'll get the meats, you grab the sweets!"
            },
            {
                Imhotep: "Guys, I still don't think...hey! Wait for me!"
            }
        ],
        211: [
            {
                Usain: "That makes a bit of sense."
            },
            {
                Tehara: "Hey! You were supposed to be on my side!"
            },
            {
                Usain: "Yeah well, I switched sides."
            },
            {
                Tehara: "Traitor!"
            },
            {
                Vadim: "Tehara my friend, what is your side?"
            },
            {
                Tehara: "I agree with you on needing to know who's where, but I think you should save the people that are close to you, not whoever hired you. On the other hand, if we're talking about needing to kill someone, me and you totally agree."
            },
            {
                Vadim: "Ah, so friends and family matter more than your word or your honor?"
            },
            {
                Tehara: "I used to be bandit before these guys recruited me."
            },
            {
                Usain: "Captured, released, then couldn't get rid of you, more like."
            },
            {
                Tehara: "Eh, tomatoes, potatoes. Anyways, I was a bandit. I don't really do the whole 'honor' thing."
            },
            {
                Vadim: "So I see. What was your side, Imhotep?"
            },
            {
                Imhotep: "Unlike those two I believe in a moral code and principle, one that demands I respect and preserve life."
            },
            {
                Vadim: "Following your religion, yes?"
            },
            {
                Imhotep: "Yes, the Laws of Life. I try to adhere to it the best I can. And that would mean saving the town every time."
            },
            {
                Tehara: "Yes, yes we know. 'Because the hallowed Spirits of the rocks and weeds and my dirty undergarments told me so'."
            },
            {
                Imhotep: "Do not mock the Spirits, fire elf."
            },
            {
                Tehara: "I'll mock them all I want. They aren't fae."
            },
            {
                Usain: "You have to admit Imhotep, the idea is kind of silly."
            },
            {
                Imhotep: "Oh? Do tell me of the internal inconsistencies of my religion, Usain. The very same Usain who has refused to accompany me to how many holy day celebrations?"
            },
            {
                Usain: "Look, all I'm saying that I don't think spirits, fae or otherwise, should be the decider of all our morals. I think that we, the people in the situations, are better off deciding for ourselves what is best. The gods are dead and you can't trust fae or magic. Why leave your life's choices in the hands of something that can't see?"
            },
            {
                Imhotep: "Because I can see the good it does the world by following their guidance. I can see that lives are enriched by adhering to the principles the Spirits taught us. The gods are gone, but doesn't mean the supernatural holds no sway over our lives. We are still beings of half flesh and half spirit. Someday, our spirit selves will join the Spirits of the Earth and answer for our deeds upon it."
            },
            {
                Usain: "Those spirits are so weak they can barely manifest as anything more than a mild breeze. Fae could summon entire storm if you let them."
            },
            {
                Tehara: "When they aren't trying to possess you that is."
            },
            {
                Vadim: "I believe I understand what Imhotep is trying to say. In Rodina. we follow Eternal King and Mother Arianne. We follow her by fulfilling our duties to our lords and lieges, and by seeking honor through courageous acts. As we gain her favor, she blesses us with a seat in her Great Hall. It gives much inspiration to us, who fight in her name. There is comfort in knowing that someone is watching, that life has purpose beyond this earth."
            },
            {
                Tehara: "Meh, sounds like too much of a hassle, chasing someone's approval all the time."
            },
            {
                Vadim: "Do Dahn have faith in nothing?"
            },
            {
                Tehara: "Sorta? It's hard to explain to an outsider. Usain?"
            },
            {
                Usain: "We don't really worship anything as much as honor and revere them. And only a few things as they benefit the people, the Dahn as a whole. Like, we honor the Continent, Al-Ilbis, because it is our home. We honor the sun because it gives light so we can see. Same thing with the sands and water. Everything we honor is real and tangible, but we would never pray to them."
            },
            {
                Imhotep: "But you can't get any guidance from anything that way."
            },
            {
                Usain: "Yeah, but why follow gods or spirits? Why are their choices better than anyone else's? I can use my own judgment on a situation, and deal with the consequences afterward. But I don't think it's smart to trust these spirit-things. They could just be my imagination for all I know."
            },
            {
                Imhotep: "You still have personal agency within the Law. They just tell you what is right and what is wrong. It's your choice of whether or not to follow the right path."
            },
            {
                Usain: "How do I know they are right?"
            },
            {
                Imhotep: "You will see it in the world around you, you will feel it in your soul as it grows in harmony with the Earth. Life itself will flourish around you."
            },
            {
                Usain: "So, let's say I sacrifice the farm with Aarit on it to save the town from the bandits. Without Aarit's reputation, Marinus can't muster enough support from the other emir's and Toma bows to Rae, who then goes on to murder all the elves and half-elves in Southern Vessa. How does life 'flourish' in that?"
            },
            {
                Imhotep: "Your choice allows that village to live. That's where the life flourishes. You can't hold that decision responsible for the evils Rae commits."
            },
            {
                Usain: "Yeah, but I save more lives later if I kill, or sacrifice, more people now."
            },
            {
                Imhotep: "Just because the results look better in the immediate context doesn't mean that it will be better for your soul, here or in the afterlife."
            },
            {
                Usain: "I think I'll take my chances with focusing on the here and now. If killing accomplishes my goal, so be it."
            },
            {
                Imhotep: "Usain..."
            },
            {
                Tehara: "Sun and Sands! This is getting boring! Usain, how's about we make our way to the mess hall and see if we can find some grub?"
            },
            {
                Imhotep: "We're in the middle of something here, Hari."
            },
            {
                Usain: "I feeling hungry and it is getting late. Maybe we can pick this up tomorrow?"
            },
            {
                Imhotep: "Fine, fine. Just you wait though. I will get you to come over the Vessii side one of these days."
            },
            {
                Usain: "You can try! Haha! Care to join us in the mess? If Glob is cooking, we could use you as a look out for a pantry raid."
            },
            {
                Imhotep: "No thanks, Hari's insistence that family matters most reminded me that I haven't seen Tutkah since yesterday. I should go check in on my brother. Maybe he and I can get a bite and head to the Green Chapel. You two are welcome to join us."
            },
            {
                Tehara: "Ew."
            },
            {
                Usain: "Pass, but thanks. Vadim?"
            },
            {
                Vadim: "I cannot. I must teach cousin Basil tonight. Perhaps later you can come to my camp and I will tell you stories of Arianne."
            },
            {
                Usain: "Maybe."
            },
            {
                Tehara: "This eternal king of yours, does he kill a lot of people?"
            },
            {
                Vadim: "She, and yes, very, very many."
            },
            {
                Tehara: "Nice!"
            },
            {
                Imhotep: "Hari, you are truly hopeless. Good night all! I wish you all a pleasant night's sleep!"
            },
            {
                Usain: "Night, friend! May your spirits keep you!"
            },
            {
                Tehara: "We better get going, Usain, before we miss our window of opportunity."
            },
            {
                Usain: "Yeah, let's go. See you later Vadim. Try not to work Basil over too hard tonight."
            },
            {
                Vadim: "Hard lessons make us sleep better. I get tired and Basil gets brained! Hahaha!"
            },
            {
                Usain: "Ha, well good night then."
            },
            {
                Vadim: "Good night my friends! May Arianne fill your hearts with courage!"
            },
            {
                Tehara: "Usain let's go!"
            },
            {
                Usain: "Hey! Slow down! Sun-touched fire elf!"
            }
        ],
        212: [
            {
                Usain: "I think I see where you're coming from, but I'm going to disagree."
            },
            {
                Vadim: "Why?"
            },
            {
                Usain: "Family and friends, they're more important than the others in the town, even if that person is someone important, like your employer. I don't think I could replace any one of you guys, but Marinus is no different than any other emir to me."
            },
            {
                Imhotep: "At least it's not a Dahnic response."
            },
            {
                Usain: "Careful, Imhotep."
            },
            {
                Vadim: "Usain, we both are mercenaries, soldiers of fortune. If you fail missions because you are unwilling to make personal sacrifice, why should someone hire you?"
            },
            {
                Usain: "I don't think I'm going to be a mercenary, not with Aarit training me in the ways of the Ogma."
            },
            {
                Vadim: "This may be true. Aarit is mighty general, known from the Vessii hills, to the highlands of Rodina. However, do you not believe there is value in keeping your word?"
            },
            {
                Usain: "What?"
            },
            {
                Vadim: "Let us say, you become Ogma. Now let us say, you fight for city, you command their armies, yes? Now let us say, your friend is captured by enemy city, and the say you must change sides and sabotage the city you fight for, or else they kill friend. Do you not have obligation to city that hired you?"
            },
            {
                Usain: "I think it would depend on who they kidnapped, but I think I have more of an obligation to my friends and family."
            },
            {
                Tehara: "What's so bad about banditry? I was one before you guys found me, and I think I turned out all right."
            },
            {
                Vadim: "Oh ho! That's how you put? Obligation to friends and family, not duty or honor."
            },
            {
                Imhotep: "I disagree with your choice here, not to say I agree with Vadim either, but doesn't that go against the Dahnic Code? Every Dahn I've ever met have always been about nothing but duty and honor."
            },
            {
                Usain: "Yeah, I guess it does. Shouldn't that make you happy?"
            },
            {
                Imhotep: "You're still committing to the wrong idea. Friends and family are important, but there needs to be a higher ideal than that, something to give you a vision for the future and tells you how to act."
            },
            {
                Usain: "Why can't I tell myself how to act? Why give myself over to anything?"
            },
            {
                Tehara: "Now you're talking! No masters but ourselves!"
            },
            {
                Imhotep: "You can hardly claim the intellectual superiority of a fire elf, Usain."
            },
            {
                Tehara: "Hey!"
            },
            {
                Usain: "I can admit when she's right. My duty lies with people I care about, not with warlords or priests."
            },
            {
                Vadim: "Even when causes you to act dishonorably?"
            },
            {
                Usain: "Others might hate me, but I'll save who I care for."
            },
            {
                Vadim: "What if it is your friends that are fighting and you must choose to save one?"
            },
            {
                Usain: "That...that makes it more difficult."
            },
            {
                Vadim: "In war, friends fight. Not because they want to, but they have to. What do you do when you have to choose between one friend or the other?"
            },
            {
                Tehara: "It's simple. You let them be stupid and kill each other."
            },
            {
                Vadim: "If you do not help, you lose both friends."
            },
            {
                Tehara: "If they are forcing me to choose one or the other, they aren't acting like my friends, now are they?"
            },
            {
                Vadim: "There is something here I cannot agree with. Tehara, are you saying that your friends are your friends only for how long you wish them to be? That you owe them no loyalty?"
            },
            {
                Tehara: "Of course. Who else should decide who gets to be friends with me?"
            },
            {
                Vadim: "Tehara, my friend, this would make you a poor friend."
            },
            {
                Imhotep: "Fickle would be the word."
            },
            {
                Tehara: "What? I have to help my friends be idiots? No way!"
            },
            {
                Vadim: "You do not have to, but who wants friend that does not stand with them in trouble?"
            },
            {
                Usain: "We really have veered off the original question here, haven't we?"
            },
            {
                Vadim: "Then let us say that a friend is at farm and a friend is at town. Who lives, who dies?"
            },
            {
                Tehara: "Whoever I like more."
            },
            {
                Vadim: "And if you like both the same?"
            },
            {
                Tehara: "I don't know! Whoever I feel like right then!"
            },
            {
                Vadim: "And there is problem. My friend, I am sorry to push you so hard, but you must see that this standard is no good!"
            },
            {
                Tehara: "It's better than being a slave to some contract or religion! At least I get to decide what happens to me!"
            },
            {
                Usain: "Better to control your own destiny and make the hard choices for yourself than give the decision away to something else."
            },
            {
                Imhotep: "There is such a thing as being right, Usain! Surly you can see that!"
            },
            {
                Usain: "And it's not with your spirits or his duty! C'mon Hari! I'm sick of this riddley puzzle. Let's go find some food and leave these two to squabble."
            },
            {
                Tehara: "Way ahead of you, friend. Let's go see what we can steal from the larder."
            },
            {
                Usain: "Great idea, friend! After that, we can head the Tower and enjoy the spoils!"
            },
            {
                Tehara: "Right behind you, friend!"
            },
            {
                Vadim: "Oh dear. We seem to have upset them."
            },
            {
                Imhotep: "It seems we have. I wonder, if Aarit knew how much of an effect she would have on Usain, if he would ever have freed her?"
            }
        ],
        221: [
            {
                Imhotep: "As I have been telling these two here, that is the wrong way entirely."
            },
            {
                Tehara: "That's kinslaying, that's what that is!"
            },
            {
                Usain: "Yeah, but it makes a cut throat kind of sense."
            },
            {
                Imhotep: "Usain!"
            },
            {
                Vadim: "Do what must be done. It is not always pretty, but it is always necessary."
            },
            {
                Tehara: "Tell that to Basil."
            },
            {
                Vadim: "He knows choices of this life we lead."
            },
            {
                Usain: "We're soldiers of fortune. The job must be completed."
            },
            {
                Imhotep: "I have a huge problem with this."
            },
            {
                Tehara: "Besides the kinslaying?"
            },
            {
                Imhotep: "I don't like the thought of that, but I can concede it may be necessary to protect the interests of preserving life. However, what if your mission is not in that interest? What if you are hired to do harm?"
            },
            {
                Vadim: "Explain please."
            },
            {
                Imhotep: "What if you were hired by the tyrant of Rae to kill Emir Marinus? You know as well as we do that Rae seeks the extermination of all the elves. Would you continue the mission, in spite of that, knowing full well the misery you are going to spread and the extent of the lives that will be lost?"
            },
            {
                Vadim: "Yes, I would."
            },
            {
                Imhotep: "So you don't care who gets hurt?"
            },
            {
                Vadim: "I have fought in two wars already, Imhotep. This life you wish to preserve and misery you want to prevent, it will happen no matter who wins. Tell me, what happens to Rae if you win?"
            },
            {
                Imhotep: "Well we... we will treat them fairly but sternly. We will limit their army size, levy war indemnities, perhaps occupy Rae itself for a time to ensure demands are met. All the while we will act with honor and discipline."
            },
            {
                Usain: "That's assuming we can pressure the shah to side with us in the first place. No shah, no Toma, and the elves stand alone."
            },
            {
                Imhotep: "I have faith he will."
            },
            {
                Vadim: "Imhotep, until you experience war there is little I can say to sway you in this opinion. All I will say is war spreads misery. If you try to stop tears from falling, you will only drown yourself."
            },
            {
                Imhotep: "That's an excuse."
            },
            {
                Vadim: "That is reality."
            },
            {
                Usain: "No, we talked about earlier this, remember? It's a bad choice either way, but the choice has to be made. This might be the answer, to follow your duty, even if it feels wrong."
            },
            {
                Imhotep: "But there has to be a line, some point you just don't cross."
            },
            {
                Tehara: "How's about kinslaying? That's a pretty big line, ain't it?"
            },
            {
                Vadim: "What is more important than duty?"
            },
            {
                Imhotep: "Life, Vadim. Life!"
            },
            {
                Vadim: "Sorry my friend, but on this we must disagree. I will do what is best to complete mission, and if there is no mission, I do what is best for me."
            },
            {
                Tehara: "What if what is best for you is bad for your duty? Let's go back to the scenario where you save Marinus or Basil and let's assume you complete the mission and sacrifice Basil to protect Marinus, but now everyone knows you are responsible for Basil's death. Wouldn't that that be horrible for you reputation?"
            },
            {
                Vadim: "Haha, so whole world finds out about kinslaying Basil?"
            },
            {
                Usain: "It wouldn't change anything, would it?"
            },
            {
                Vadim: "No my friends, it would not."
            },
            {
                Usain: "Yeah, this I can get behind. Every action I take will have consequences and I can't worry about them all. If I try to control every echo, ripple and wave I create, I will never be able to do anything. Instead, do what I have to, and keep moving forward. The world can sort itself out."
            },
            {
                Vadim: "This is the way."
            },
            {
                Imhotep: "Indeed, ramifications be damned. You three are hopeless."
            },
            {
                Tehara: "Maybe, but I get to have my family with me in the end."
            },
            {
                Vadim: "And I will get many more contracts."
            },
            {
                Imhotep: "Usain, will you really bring this to Aarit and tell him it doesn't matter where you send the bandits so long as it follows orders? Ogma are philosophers as much as they are warriors. Do you really think he will be content with you leaving moral decisions to others?"
            },
            {
                Usain: "No, I'll tell him that my loyalty to my employer and contract comes first, and that I will hold fast to my word, my honor, and my duty, even if it hurts me."
            },
            {
                Vadim: "My friend! Very well said!"
            },
            {
                Imhotep: "My friend! That reeks worse than death!"
            },
            {
                Tehara: "My friends! Can we drop this now?"
            },
            {
                Imhotep: "Yes, please let us."
            },
            {
                Usain: "Alright, alright. It's almost dinner time anyways. Shall we go to the Tower?"
            },
            {
                Vadim: "Tower?"
            },
            {
                Usain: "It's that's big tree about a mile or two west of here."
            },
            {
                Vadim: "That sounds bit far for evening meal."
            },
            {
                Tehara: "Well, the housekeepers chased us off the stairs yesterday, and cooks banned us from the kitchens, so somewhere outside does sound nice."
            },
            {
                Imhotep: "A nice fire, good food and better company! Let's put this episode behind us and have some fun this evening!"
            },
            {
                Usain: "Vadim, you want to join us?"
            },
            {
                Vadim: "Thank you, but no. I have lessons to teach Basil tonight and must be up early tomorrow morning. But please, enjoy yourselves."
            },
            {
                Tehara: "Suit yourself. To the mess! Last one there has to distract the cooks while we pilfer the pantry!"
            },
            {
                Usain: "You're on!"
            },
            {
                Imhotep: "Come now, can we have a little decorum for once and just wait in line like everyone else? H-hey! Wait for me!"
            }
        ],
        222: [
            {
                Usain: "I don't think I can agree with that."
            },
            {
                Vadim: "Why not?"
            },
            {
                Usain: "I don't think it matters who is where."
            },
            {
                Vadim: "Then what does matter Usain?"
            },
            {
                Usain: "Well..."
            },
            {
                Imhotep: "Yeah, Usain, what does matter to you? You wanted to send them to the town at the start, before Tehara came in."
            },
            {
                Tehara: "And you disagreed with me about saving whoever is more important to you."
            },
            {
                Usain: "..."
            },
            {
                Vadim: "Not sure who is right?"
            },
            {
                Usain: "...no..."
            },
            {
                Vadim: "You are Dahn, yes? What would the Dahn say?"
            },
            {
                Imhotep: "Tears of heaven, not this again!"
            },
            {
                Usain: "Raiding bandits are an affront to order. My priority should be getting rid of them, but I've already been captured."
            },
            {
                Vadim: "So what is next?"
            },
            {
                Usain: "I need to find a way to kill the threat. I will need time, and men, weapons..."
            },
            {
                Vadim: "Yes?"
            },
            {
                Usain: "I send the bandits to the farm. Then I run to the town and tell them of the threat, marshal them into fighting groups and pursue the bandits. Meanwhile, I should send runners from the town to other nearby settlements to warn them of the bandit horde and recruit more capable fighters. Then, when we catch up to them we wait, ambush and kill every single one of them."
            },
            {
                Vadim: "Good! Practical!"
            },
            {
                Usain: "Then I kill myself to atone for my dishonor of being captured and robbed, and to pay the blood price to the farmer's family."
            },
            {
                Vadim: "This is not good."
            },
            {
                Usain: "I'm not excited about that part either."
            },
            {
                Imhotep: "As well you shouldn't."
            },
            {
                Usain: "That's the Dahnic Code though."
            },
            {
                Imhotep: "Break it."
            },
            {
                Usain: "But..."
            },
            {
                Tehara: "Look, Usain, Imhotep is an blind mutt yapping at us, the desert lions. Dogs can't understand why lions do what they do, and lions don't answer to the curs either."
            },
            {
                Imhotep: "Excuse me!?"
            },
            {
                Tehara: "That said, I think that the world is better off with more lions in it, even if one has lost his pride."
            },
            {
                Usain: "Thanks Tehara."
            },
            {
                Tehara: "Don't mention it."
            },
            {
                Imhotep: "You're both hopeless."
            },
            {
                Vadim: "But the question has been answered, yes? And more people have been saved than lost. Are you not happy my friend?"
            },
            {
                Imhotep: "Of course not! The reason behind the action is just as important as the action itself. Usain's reason is just senselessly following an old, murderous code. He's not acting on his own ideas and that's what Aarit is going after. Even he doesn't like the Dahnic Code."
            },
            {
                Tehara: "Pfft, just another dog."
            },
            {
                Usain: "You're just unhappy I don't agree to your Vessii religion and its silly little spirits."
            },
            {
                Imhotep: "What's wrong with the spirits?"
            },
            {
                Usain: "They're awfully close those cursed Fae, that's what."
            },
            {
                Imhotep: "How dare you!"
            },
            {
                Tehara: "Says the guy that will insult anything Dahn, in front of Dahn."
            },
            {
                Imhotep: "I will call a spade, a spade, Tehara."
            },
            {
                Usain: "Then how's this: You're wrong, and the preservation of life at all costs is one of the most stupid ideas I have ever heard."
            },
            {
                Imhotep: "Fine then! Be Dahn! Be the very epitome of Dahn! Be so Dahn that you vomit sand!"
            },
            {
                Tehara: "Sand for your grave, Vessii."
            },
            {
                Imhotep: "Curse you all! I'm going to find my brother. His company should prove to be  less contemptible than yours, Tehara. Usain, feel free to come find my AFTER Aarit knocks that damn head of yours sideways!"
            },
            {
                Vadim: "That was handled poorly."
            },
            {
                Usain: "I didn't see you stepping in to stop it."
            },
            {
                Tehara: "Of course not. No one told him to."
            },
            {
                Vadim: "Tehara, temper your tongue before someone cuts it out. And Usain, I do not “step in” because these are your fights to win, or lose."
            },
            {
                Usain: "Aarit is already training me, Vadim. I don't need two teachers."
            },
            {
                Vadim: "I shall take note. Well, good night my friends, I have things to do this evening. Hopefully we all find ourselves in better tempers tomorrow."
            },
            {
                Usain: "Good night."
            },
            {
                Tehara: "Well, looks like it's just us Dahn to keep each other company. C'mon Usain, let's go raid the pantry. I think I saw the cooks making sweet tarts earlier."
            },
            {
                Usain: "Actually, I think I'm just going to eat in the mess."
            },
            {
                Tehara: "But why? You always liked the sweet tarts."
            },
            {
                Usain: "Yeah, I know, I just don't want to right now, okay?"
            },
            {
                Tehara: "Why?"
            },
            {
                Usain: "I don't want to eat with the people I just spent the afternoon yelling at, that's why!"
            },
            {
                Tehara: "..."
            },
            {
                Usain: "Sorry Hari. See you in the morning."
            },
            {
                Tehara: "I don't like how this ended..."
            }
        ]
    }
}

export { Stories }