const weeklyLeaderGuides = [
  {
    week: 1,
    unit: "Intro",
    destination: "Basecamp",
    title: "The Quest Begins",
    bigQuestion: "Why do questions matter?",
    bigDiscovery: "God welcomes our seeking and gives us light.",
    verse: "Psalm 119:105",
    bigLie: "Questions are dangerous, embarrassing, or too big for kids.",
    bigTruth: "A good question can become a quest that leads us toward God's light.",
    supplies: "Bible, Question Chest, index cards, pencils, map image, Week 1 puzzle",
    visualAsset: "Lesson-Images/Lesson-Image-01.png",
    visualCue: "Place the map image near the Question Chest so kids feel they are beginning a real expedition.",
    prepare: "Read Luke 2:41-52 and Psalm 119:105. Pray for courage to welcome honest questions without rushing kids toward shallow answers.",
    welcome: "Greet every Quester by name. Ask: 'What is one thing you wondered about this week?' Award Zest for brave, thoughtful, or wonderfully curious answers.",
    starter: "Show the Question Chest. Explain that a question is like a closed box: something true may be waiting inside, but we open it carefully. Let each child write or draw one big question and place it in the chest.",
    cue: "We are not afraid of big questions because God is not afraid of them. A Quester asks, seeks, listens, and follows the light God gives.",
    teaching: "Read Luke 2:46. Point out that Jesus listened and asked questions as a child. Then read Psalm 119:105. Explain that God's Word is a lamp: it may not show every mile of the trail, but it gives light for the next faithful step.",
    questions: ["What makes a question helpful?", "What can we do when we do not understand something about God?", "Where should a Quester look for truth first?"],
    activity: "Decorate Quest Card bookmarks with Psalm 119:105 or open the Week 1 puzzle. Stamp or draw a tiny map mark on each card so every child leaves with a first-step trail marker.",
    versePractice: "Say Psalm 119:105 while pretending to hold a lantern. Repeat it quieter each time, like Questers walking carefully through the dark.",
    hubTips: ["Open the curriculum draft if you need the full series overview.", "Use the Week 1 puzzle as an early finisher activity.", "Show the map image and point to the destinations ahead."],
    close: "Pray: God, thank You that we can ask honest questions. Help us follow the light of Your Word. Amen.",
  },
  {
    week: 2,
    unit: 1,
    destination: "Identity Island",
    title: "The Light of the World",
    bigQuestion: "Who in the world am I?",
    bigDiscovery: "I find myself by knowing the One who made me.",
    verse: "John 8:12",
    bigLie: "I can find out who I am by staring into my own heart.",
    bigTruth: "I find out who I am by following the Light of the World.",
    supplies: "Bible, basketball or ball, optional flashlight, identity stickers/cards, Week 2 puzzle",
    visualAsset: "Lesson-Images/Lesson-Image-02.png",
    visualCue: "Use Quester close-up art as the 'guide on the transmission' for Identity Island.",
    prepare: "Read John 8:12 and John 1:12. Practice explaining identity as who I truly am, where I belong, and who gets to tell me the truth about myself.",
    welcome: "Greet every Quester at the door. Ask: 'What is one word you'd use to describe a treasure hunter?' Award Zest for adventurous answers.",
    starter: "Show a basketball. Ask what its identity is. Does the ball decide it is a basketball, or does the game it was made for define it?",
    cue: "A ball does not find its purpose by looking inside its own rubber middle. It needs the context of the game. We need the context of our Maker.",
    teaching: "Read John 8:12 and John 1:12. Say that if the world is a dark cave, we cannot clearly see who we are. Jesus is the light. In His light, we see that believers are not just kids, students, or performers; they are children of God.",
    questions: ["Where do kids sometimes look to figure out who they are?", "Why can our feelings be real but not always reliable guides?", "Does God love you because you are brave, or can you become brave because God loves you?"],
    activity: "Use identity stickers, character cards, or the Quester character assets. Let kids pick a trait they want to grow in, such as courage, kindness, patience, or wisdom. Remind them the trait does not earn God's love; it grows from being loved by God.",
    versePractice: "Have one child lead with a flashlight while the others follow and recite John 8:12.",
    hubTips: ["Launch the Identity song for a group sing-along.", "Use the Cave of Confusion local clip or VBS time-gated clip if available.", "Open the Week 2 puzzle for early finishers."],
    close: "Pray: Jesus, Light of the World, help us see who we are by following You. Amen.",
  },
];

const guideTemplates = {
  3: {
    destination: "Perception Pond",
    title: "Whose Approval Matters?",
    bigQuestion: "Who gets to define me?",
    bigDiscovery: "Reflections deceive, but God sees the heart.",
    verse: "1 Samuel 16:7",
    bigLie: "What people see and say about me is the truest thing about me.",
    bigTruth: "God sees deeper than the mirror, the crowd, and the mood of the day.",
    supplies: "Bible, mirror, sticky notes, markers, Week 3 puzzle",
    visualAsset: "Lesson-Images/Lesson-Image-03.png",
    visualCue: "Use Mirror Pond art as the backdrop for the mirror-note activity.",
    starter: "Place sticky notes around a mirror with words like popular, smart, funny, left out, and good enough. Ask whether a mirror can tell the whole truth about a person.",
    teaching: "Read 1 Samuel 16:7 and Galatians 1:10. Explain that people often judge quickly by what they can see, but God sees truly. Pleasing people makes a poor compass; God's voice tells the truth.",
    activity: "Replace mirror labels with truth notes: known by God, made in God's image, invited by Jesus, loved before I perform.",
  },
  4: {
    destination: "Ocean of Origins",
    title: "The Mighty Maker",
    bigQuestion: "Where did we come from?",
    bigDiscovery: "Design points to a Magnificent Maker.",
    verse: "Genesis 1:1",
    bigLie: "Everything, including me, is just an accident.",
    bigTruth: "The world begins with God, the Maker who creates with purpose.",
    supplies: "Bible, building blocks, bag, completed block model, Week 4 puzzle",
    visualAsset: "Lesson-Images/Lesson-Image-04.png",
    visualCue: "Set out the ship image as the class travels from Identity Island into the Ocean of Origins.",
    starter: "Show a completed block model, then shake loose blocks in a bag. Ask whether the model built itself.",
    teaching: "Read Genesis 1:1 and Colossians 1:16-17. Teach that the Bible begins with God, and all things were created through Jesus and for Jesus.",
    activity: "Creation relay. Teams arrange creation cards in order and name what each created thing shows about God.",
  },
  5: {
    destination: "Port of Purpose",
    title: "Image Bearers",
    bigQuestion: "Why is every person valuable?",
    bigDiscovery: "Every face is an Image-Bearer of the King.",
    verse: "Genesis 1:27",
    bigLie: "Some people matter more because they are stronger, smarter, cooler, or easier to like.",
    bigTruth: "Every person has God-given dignity because every person is made in God's image.",
    supplies: "Bible, ink pads, paper, magnifying glasses, Week 5 puzzle",
    visualAsset: "Lesson-Images/Lesson-Image-05.png",
    visualCue: "Use magnifying glasses or the magnifying-glass asset to inspect fingerprints and talk about uniqueness.",
    starter: "Let kids study fingerprints. Point out that every print is unique, but every person shares the same deep dignity.",
    teaching: "Read Genesis 1:27 and Psalm 139:13-14. Explain that image-bearers are made to know God, reflect Him, and represent His care.",
    activity: "Thumbprint art. Write 'Made in God's image' on each page.",
  },
  6: {
    destination: "Wonder Falls",
    title: "Design vs. Accident",
    bigQuestion: "Am I a mistake?",
    bigDiscovery: "You are a masterpiece made on purpose.",
    verse: "Psalm 139:14",
    bigLie: "My life is random, unwanted, or not worth much.",
    bigTruth: "God sees me, knows me, and made me with care.",
    supplies: "Bible, sketch or artwork, labels, Week 6 puzzle",
    visualAsset: "Lesson-Images/Lesson-Image-06.png",
    visualCue: "Use Paraclete with the magnifying glass as the visual reminder that God sees kids with care.",
    starter: "Show a drawing and ask what choices the artist made. Explain that a masterpiece carries the care of its maker.",
    teaching: "Read Psalm 139:13-16. Emphasize that God knows each child deeply, including children whose stories have hard or confusing parts.",
    activity: "Masterpiece Labels. Kids decorate truth labels: known, loved, seen, made, created with care.",
  },
  7: {
    destination: "Mainland of Meaning",
    title: "The Meaning of Life",
    bigQuestion: "Why am I here?",
    bigDiscovery: "We were made to know God and share His love.",
    verse: "1 John 4:8",
    bigLie: "My meaning comes from what I own, achieve, or get people to think about me.",
    bigTruth: "My life has meaning because God made me for love and relationship.",
    supplies: "Bible, purpose objects such as key, cup, pen, spoon, Week 7 puzzle",
    visualAsset: "Lesson-Images/Lesson-Image-07.png",
    visualCue: "Use the Heart icon as the symbol for meaning: we were made to receive and share God's love.",
    starter: "Hold up objects and ask what each is for. Then ask what people were made for.",
    teaching: "Read John 17:3 and 1 John 4:7-8. Teach that eternal life is knowing God, and God is love.",
    activity: "Meaningful Match. Pair objects with purposes, ending with people -> God and hearts -> love.",
  },
  8: {
    destination: "Fruitful Forest",
    title: "Filled and Poured Out",
    bigQuestion: "How do I live my purpose?",
    bigDiscovery: "We are filled with love to pour it out.",
    verse: "John 15:12",
    bigLie: "Love is only a feeling I keep for myself or people who are easy to like.",
    bigTruth: "Jesus fills us with His love so we can love others in action.",
    supplies: "Bible, pitcher, water, cups, towel, Week 8 puzzle",
    visualAsset: "Lesson-Images/Lesson-Image-08.png",
    visualCue: "Use the Friendship icon to connect love with action toward real people.",
    starter: "Show an empty pitcher. Ask what it was made to do. Fill it, then pour into cups.",
    teaching: "Read John 15:9-12. Explain that Jesus loves first, then commands us to love as He loved us.",
    activity: "Label cups family, friend, neighbor, lonely classmate, church. Kids name one way to pour out love in each place.",
  },
  9: {
    destination: "Virtue Village",
    title: "Meaning in Community",
    bigQuestion: "Why do we need a team?",
    bigDiscovery: "We find our true meaning in God's family.",
    verse: "1 Corinthians 12:27",
    bigLie: "I do not need others, or others do not need me.",
    bigTruth: "God's family is a body, and every part matters.",
    supplies: "Bible, simple task items, thank-you cards, Week 9 puzzle",
    visualAsset: "Lesson-Images/Lesson-Image-09.png",
    visualCue: "Show the group character art as a reminder that a quest is better with a team.",
    starter: "Ask one child to complete a task with one limitation, then let a team help. A body needs many parts.",
    teaching: "Read 1 Corinthians 12:12-27. Explain that no part is everything and no part is nothing.",
    activity: "Write thank-you notes to people who serve in the church family.",
  },
  10: {
    destination: "Morality Mountain",
    title: "The High Standard",
    bigQuestion: "How do I know right from wrong?",
    bigDiscovery: "The High Standard is found in God's character.",
    verse: "Matthew 22:37",
    bigLie: "Right and wrong are whatever I feel or decide for myself.",
    bigTruth: "God's good commands show us what love looks like.",
    supplies: "Bible, destination markers, written directions, Week 10 puzzle",
    visualAsset: "Lesson-Images/Lesson-Image-10.png",
    visualCue: "Use the Wisdom icon as the moral compass for choices.",
    starter: "Give a volunteer bad directions, then good directions. Directions matter on a quest.",
    teaching: "Read Matthew 22:36-39 and connect selected commandments from Exodus 20 to love for God and neighbor.",
    activity: "Moral Compass Course. Teams follow directions to destination markers.",
  },
  11: {
    destination: "Desert of Doubt",
    title: "Missing the Mark",
    bigQuestion: "What is sin?",
    bigDiscovery: "Sin is wandering off the path, but Grace finds us.",
    verse: "Romans 3:23",
    bigLie: "Sin is only big bad stuff other people do.",
    bigTruth: "Sin is turning from God's way, and all of us need mercy.",
    supplies: "Bible, beanbags, target, Week 11 puzzle",
    visualAsset: "Lesson-Images/Lesson-Image-11.png",
    visualCue: "Use the sandy/desert image to create the feel of wandering off the path and needing rescue.",
    starter: "Let kids toss beanbags at a target. Ask whether anyone hit perfectly every time.",
    teaching: "Read Romans 3:23 and 1 John 1:9. Explain sin as falling short and turning away, then confession as honest return.",
    activity: "Practice repair words: I was wrong. I am sorry. Will you forgive me? I forgive you.",
  },
  12: {
    destination: "Good News Gate",
    title: "Grace at the Mountain",
    bigQuestion: "What do I do when I fail?",
    bigDiscovery: "Grace is a gift we receive, not a prize we earn.",
    verse: "Ephesians 2:8",
    bigLie: "I have to become good enough before God will love or forgive me.",
    bigTruth: "Jesus gives forgiveness as a gift received by faith.",
    supplies: "Bible, wrapped gift, Week 12 Questicons decoder puzzle",
    visualAsset: "Lesson-Images/Lesson-Image-12.png",
    visualCue: "Use the decoder asset beside the wrapped gift: grace is the message hidden in plain sight.",
    starter: "Hold a wrapped gift. Ask whether a gift is still a gift if you pay for it or earn it.",
    teaching: "Read Ephesians 2:8-9 and John 1:29. Teach that rescue comes from God through Jesus, not from bragging or proving ourselves.",
    activity: "Complete the Questicons decoder puzzle. After decoding 'GRACE IS A GIFT,' ask kids to explain it in their own words.",
  },
  13: {
    destination: "Dominion of Destiny",
    title: "A Future and a Hope",
    bigQuestion: "Is there a future for me?",
    bigDiscovery: "Jesus is the Resurrection; our future is secure.",
    verse: "John 11:25",
    bigLie: "Death, sadness, and brokenness get the final word.",
    bigTruth: "Jesus is risen, and He gives His people life with God forever.",
    supplies: "Bible, sunflower seed or seed packet, review questions, Week 13 puzzle, optional treat",
    visualAsset: "Lesson-Images/Lesson-Image-13.png",
    visualCue: "Use the victory image or medals as the celebration signal for the final destination.",
    starter: "Show a seed. Ask what happens when it is buried. Use it to point toward resurrection hope.",
    teaching: "Read John 11:25 and Revelation 21:1-4. Teach that Jesus is the resurrection and that God's future ends death, crying, and pain.",
    activity: "Re-Quest Review. Ask questions from all five destinations and award Zest for teamwork, truth, and kindness.",
  },
};

for (let week = 3; week <= 13; week++) {
  const data = guideTemplates[week];
  weeklyLeaderGuides.push({
    week,
    unit: week <= 3 ? 1 : week <= 6 ? 2 : week <= 9 ? 3 : week <= 12 ? 4 : 5,
    ...data,
    prepare: `Read ${data.verse.includes("Genesis") ? data.verse : data.verse} and the full Bible focus for the session. Pray for kids to meet God's truth with curiosity and trust.`,
    welcome: `Greet every Quester by name. Ask a question connected to today's quest: "${data.bigQuestion}" Keep it conversational and award Zest for brave participation.`,
    cue: "Keep the Bible open as the Map. Your goal is not to impress kids with answers, but to help them follow the light God gives.",
    questions: ["What do we learn about God from this passage?", "What wrong idea does today's Big Lie teach?", "How can today's Big Truth change the way we live this week?"],
    versePractice: `Read ${data.verse} aloud. Let kids echo it phrase by phrase, then say it with a motion connected to the lesson.`,
    hubTips: [`Open the Week ${week} puzzle from the Mission Hub.`, "Use the media button for the week's song or clip if time allows.", "Open the coloring sheet slot when your weekly artwork is ready."],
    close: "Pray over the Questers by name if possible. Send them out with courage, kindness, and a next step of faith.",
  });
}

const weekSelect = document.querySelector("#weekSelect");
weeklyLeaderGuides
  .sort((a, b) => a.week - b.week)
  .forEach((guide, index) => {
    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = `Week ${guide.week}: ${guide.title}`;
    weekSelect.appendChild(option);
  });

const params = new URLSearchParams(window.location.search);
const initialWeek = Math.max(1, Math.min(13, Number(params.get("week") || 1)));
weekSelect.value = String(initialWeek - 1);
const printFriendlyGuide = document.querySelector("#printFriendlyGuide");
printFriendlyGuide.checked = params.get("printFriendly") === "1";
document.body.classList.toggle("printer-friendly", printFriendlyGuide.checked);

weekSelect.addEventListener("change", () => renderGuide(Number(weekSelect.value)));
document.querySelector("#printGuide").addEventListener("click", () => window.print());
printFriendlyGuide.addEventListener("change", () => {
  document.body.classList.toggle("printer-friendly", printFriendlyGuide.checked);
});

function renderGuide(index) {
  const guide = weeklyLeaderGuides[index];
  document.title = `Week ${guide.week} Leader Guide - ${guide.title}`;
  setText("#unitLabel", `Week ${guide.week} · Unit ${guide.unit}`);
  setText("#guideTitle", guide.title);
  setText("#destination", guide.destination);
  setText("#visualCue", guide.visualCue || "Use the weekly image as a visual anchor for the lesson.");
  setText("#bigQuestion", guide.bigQuestion);
  setText("#bigDiscovery", guide.bigDiscovery);
  setText("#verse", guide.verse);
  setText("#bigLie", guide.bigLie);
  setText("#bigTruth", guide.bigTruth);
  setText("#prepare", guide.prepare);
  setText("#supplies", guide.supplies);
  setText("#welcome", guide.welcome);
  setText("#starter", guide.starter);
  setText("#leaderCue", guide.cue);
  setText("#teaching", guide.teaching);
  setText("#activity", guide.activity);
  setText("#versePractice", guide.versePractice);
  setText("#close", guide.close);
  const asset = document.querySelector("#guideAsset");
  asset.src = guide.visualAsset || "image assets/logo-main.png";
  asset.alt = `${guide.title} visual cue`;
  renderList("#questions", guide.questions);
  renderList("#hubTips", guide.hubTips);
}

function setText(selector, value) {
  document.querySelector(selector).textContent = value;
}

function renderList(selector, items) {
  const list = document.querySelector(selector);
  list.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}

renderGuide(Number(weekSelect.value));
