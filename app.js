const youtubeChannel = "https://www.youtube.com/thequester";
const officialVideoLibrary = "https://www.questercommunity.com/free-kids-videos";
const digitalQuestDemo = "https://jugemz.github.io/quester-demo/";
const fullWeeklyLessonsPdf = "pdf/Quester_SundaySchool_Weekly_Lessons_Full_Collection.pdf";

const resources = {
  leaderGuide: fullWeeklyLessonsPdf,
  tTots: "#",
  pals: "#",
  crew: "pdf/crew/Quester_CREW_Journal_Week_01.pdf",
  doods: "pdf/doods/Quester_DOODS_Journal_Week_01.pdf",
  game: digitalQuestDemo,
  gamePlay: digitalQuestDemo,
  curriculum: "docs/Quester_13_Week_Sunday_School_Curriculum.md",
  sundayLeaderGuide: fullWeeklyLessonsPdf,
  questerPledge: "pdf/legacy/Quester_Leader_Guide.pdf",
};

const resourceLabels = {
  leaderGuide: "Full Weekly Lessons PDF",
  tTots: "#",
  pals: "#",
  crew: "CREW Reflection Journal (9-10 yrs)",
  doods: "DOODS Preteen Journal (11-12 yrs)",
  game: "Identity Island Digital Quest",
  gamePlay: "Launch Identity Island Game",
  curriculum: "13-Week Curriculum Draft",
  sundayLeaderGuide: "Full Weekly Lessons PDF",
  questerPledge: "Quester Pledge",
};

const images = {
  basecamp: "Lesson-Images/Lesson-Image-01.png",
  mapAlt: "Lesson-Images/Lesson-Image-01.png",
  clubhouse: "Lesson-Images/Lesson-Image-09.png",
  quester: "Lesson-Images/Lesson-Image-06.png",
  identity: "Lesson-Images/Lesson-Image-02.png",
  mirror: "Lesson-Images/Lesson-Image-03.png",
  cave: "Lesson-Images/Lesson-Image-02.png",
  palm: "Lesson-Images/Lesson-Image-02.png",
  treasure: "Lesson-Images/Lesson-Image-02.png",
  origins: "Lesson-Images/Lesson-Image-04.png",
  meaning: "Lesson-Images/Lesson-Image-07.png",
  morality: "Lesson-Images/Lesson-Image-10.png",
  destiny: "Lesson-Images/Lesson-Image-13.png",
};

function getLessonImage(week) {
  return `Lesson-Images/Lesson-Image-${String(week).padStart(2, "0")}.png`;
}

const localMedia = {
  caveSong: "",
  originsDiscovery: "",
  beloved: "",
  loveKnow: "",
  moralitySearch: "",
};

const curriculumData = [
  {
    week: 1,
    unit: "Intro",
    destination: "Basecamp",
    title: "The Quest Begins",
    bigQuestion: "Why do questions matter?",
    bigDiscovery: "God welcomes honest questions and gives light through His Word.",
    biblePassage: "Luke 2:46; Psalm 119:105",
    rememberMeVerse: "Psalm 119:105",
    verseText: "Your word is a lamp for my feet, a light on my path.",
    leaderFocus: "Set the class culture: every question is a quest, and God's Word is the trusted map.",
    activityText: "Question Chest: Write your biggest question about God and hide it in the chest.",
    takeHomeText: "Ask a parent: What is one question that helped you grow closer to God?",
    image: images.basecamp,
    flow: ["Welcome Questers and introduce Quester Zest.", "Show the map and name the five destinations.", "Read Luke 2:46 and Psalm 119:105.", "Create Question Chest cards.", "Practice the Remember-Me verse and pray."],
    media: [
      { title: "The Quester Theme", type: "song", url: "https://www.youtube.com/watch?v=T5-SSxIIDT0" },
      { title: "Intro: Searching for Truth", type: "vbs-clip", src: "vbs_main.mp4", start: 0, end: 180 },
    ],
    resourceKeys: ["leaderGuide", "crew", "doods", "curriculum"],
  },
  {
    week: 2,
    unit: 1,
    destination: "Identity Island",
    title: "The Light of the World",
    bigQuestion: "Who in the world am I?",
    bigDiscovery: "I discover who I am by knowing God, not by staring only at myself.",
    biblePassage: "John 8:12; John 1:12",
    rememberMeVerse: "John 8:12",
    verseText: "I am the light of the world. Whoever follows me will never walk in darkness.",
    leaderFocus: "Use the Quester identity framework: looking only inward leads to the Cave of Confusion; Jesus gives light.",
    activityText: "The Basketball Lesson: A ball finds its purpose in the game it was made for.",
    takeHomeText: "Look in a mirror and say: 'I am a child of God made for His light.'",
    image: images.identity,
    flow: ["Open with the Big Question.", "Use the basketball identity object lesson.", "Read John 8:12 and John 1:12.", "Play Who Am I? identity cards.", "Review where true identity is found."],
    media: [
      { title: "Identity (The Trinity Song)", type: "song", url: youtubeSearchUrl("The Quester My Identity in the Trinity") },
      { title: "Clip: The Cave of Confusion", type: "vbs-clip", src: "vbs_main.mp4", start: 765, end: 945 },
      { title: "Cave of Confusion Local Song", type: "local-clip", src: localMedia.caveSong, start: 0, end: 90 },
    ],
    resourceKeys: ["leaderGuide", "crew", "doods", "game"],
  },
  {
    week: 3,
    unit: 1,
    destination: "Perception Pond",
    title: "Whose Approval Matters?",
    bigQuestion: "Who gets to define me?",
    bigDiscovery: "Reflections can deceive, but God sees my heart truly.",
    biblePassage: "Galatians 1:10; 1 Samuel 16:7",
    rememberMeVerse: "1 Samuel 16:7",
    verseText: "The Lord does not look at the things people look at... the Lord looks at the heart.",
    leaderFocus: "Help kids notice the difference between people-pleasing and pleasing God.",
    activityText: "Mirror Notes: Cover up words like 'Popular' or 'Smart' with 'Loved by God'.",
    takeHomeText: "Tell a friend something you appreciate about their heart, not just their looks.",
    image: images.mirror,
    flow: ["Ask what mirrors can and cannot show.", "Read Galatians 1:10.", "Compare outward appearance with God's sight in 1 Samuel 16:7.", "Cover mirror-label lies with truth cards.", "Pray for courage to seek God's approval."],
    media: [
      { title: "Who in the World Am I?", type: "song", url: youtubeSearchUrl("The Quester Who in the World am I") },
    ],
    resourceKeys: ["leaderGuide", "crew", "doods", "gamePlay"],
  },
  {
    week: 4,
    unit: 2,
    destination: "Ocean of Origins",
    title: "The Mighty Maker",
    bigQuestion: "Where did everything come from?",
    bigDiscovery: "God is the Magnificent Maker of heaven, earth, and all that is in them.",
    biblePassage: "Genesis 1:1; Colossians 1:16-17",
    rememberMeVerse: "Genesis 1:1",
    verseText: "In the beginning God created the heavens and the earth.",
    activityText: "Shake It to Make It: Try to 'shake' building blocks into a tower to see that design requires a Designer.",
    takeHomeText: "Go outside tonight and look at the stars. Remember the God who made them also made you!",
    media: [
      { title: "Molecules and Atoms", type: "song", url: "https://www.youtube.com/watch?v=T5-SSxIIDT0&t=59s" },
      { title: "Discovery: Ocean of Origins", type: "vbs-clip", src: "vbs_main.mp4", start: 1200, end: 1500 },
    ],
    resourceKeys: ["leaderGuide", "crew", "doods"],
  },
  {
    week: 5,
    unit: 2,
    destination: "Ocean of Origins",
    title: "Image Bearers",
    bigQuestion: "Why am I special?",
    bigDiscovery: "Every person has dignity because God made us in His own image.",
    biblePassage: "Genesis 1:27; Psalm 139:13-14",
    rememberMeVerse: "Genesis 1:27",
    verseText: "So God created mankind in his own image, in the image of God he created them.",
    activityText: "Thumbprint Art: Use ink pads to see how every single fingerprint is a unique design from God.",
    takeHomeText: "Tell someone today: 'You are an image-bearer of God!'",
    media: [
      { title: "Awesome Opposites", type: "song", url: "https://www.youtube.com/watch?v=videoID" },
    ],
    resourceKeys: ["leaderGuide", "crew", "doods"],
  },
  {
    week: 6,
    unit: 2,
    destination: "Ocean of Origins",
    title: "Design vs. Accident",
    bigQuestion: "Am I a mistake?",
    bigDiscovery: "You were made on purpose, for a purpose, by a God who loves you.",
    biblePassage: "Psalm 139:13-16",
    rememberMeVerse: "Psalm 139:14",
    verseText: "I praise you because I am fearfully and wonderfully made.",
    activityText: "The Artist's Masterpiece: Discuss how an artist doesn't make mistakes on their favorite painting.",
    takeHomeText: "Ask a parent to tell the story of the day you were born or joined your family.",
    media: [
      { title: "Where did we all come from?", type: "song", url: "https://www.youtube.com/watch?v=videoID" },
    ],
    resourceKeys: ["leaderGuide", "crew", "doods"],
  },
  {
    week: 7,
    unit: 3,
    destination: "Mainland of Meaning",
    title: "The Meaning of Life",
    bigQuestion: "What is the meaning of my life?",
    bigDiscovery: "God made us to know Him and to share in His love forever.",
    biblePassage: "1 John 4:7-8; John 17:3",
    rememberMeVerse: "1 John 4:8",
    verseText: "Whoever does not love does not know God, because God is love.",
    activityText: "Meaningful Match: Match tools (hammer, key, pen) to their purpose to show we have a purpose too.",
    takeHomeText: "Pray together: 'God, thank you for making me to know your love.'",
    media: [
      { title: "Does life have meaning?", type: "song", url: "https://www.youtube.com/watch?v=videoID" },
      { title: "Discovery: Mainland of Meaning", type: "vbs-clip", src: "vbs_main.mp4", start: 1800, end: 2100 },
    ],
    resourceKeys: ["leaderGuide", "crew", "doods"],
  },
  {
    week: 8,
    unit: 3,
    destination: "Mainland of Meaning",
    title: "Filled and Poured Out",
    bigQuestion: "How do I live out my purpose?",
    bigDiscovery: "God's love fills us up so we can pour love out to the world.",
    biblePassage: "John 15:9-12",
    rememberMeVerse: "John 15:12",
    verseText: "My command is this: Love each other as I have loved you.",
    activityText: "The Pitcher Lesson: Fill a pitcher with water (God's love) and pour it into many cups (others).",
    takeHomeText: "Find one way to 'pour out' love to a neighbor or sibling this week.",
    media: [
      { title: "Beloved Be Loved", type: "song", url: "https://www.youtube.com/watch?v=videoID" },
    ],
    resourceKeys: ["leaderGuide", "crew", "doods"],
  },
  {
    week: 9,
    unit: 3,
    destination: "Mainland of Meaning",
    title: "Meaning in Community",
    bigQuestion: "Why do we need each other?",
    bigDiscovery: "We find our true meaning when we are connected to God and His family.",
    biblePassage: "1 Corinthians 12:12-27",
    rememberMeVerse: "1 Corinthians 12:27",
    verseText: "Now you are the body of Christ, and each one of you is a part of it.",
    activityText: "Body Parts Relay: Try to do a simple task using only one 'part' to show we need the whole body.",
    takeHomeText: "Write a thank-you note to someone in your church family.",
    media: [
      { title: "You and Me Brother/Sister", type: "song", url: "https://www.youtube.com/watch?v=T5-SSxIIDT0&t=102s" },
    ],
    resourceKeys: ["leaderGuide", "crew", "doods"],
  },
  {
    week: 10,
    unit: 4,
    destination: "Morality Mountain Range",
    title: "The High Standard",
    bigQuestion: "How do I know right from wrong?",
    bigDiscovery: "Right and wrong are found in God's good character and His commands.",
    biblePassage: "Matthew 22:36-39; Exodus 20",
    rememberMeVerse: "Matthew 22:37",
    verseText: "Love the Lord your God with all your heart... soul and... mind.",
    activityText: "The Moral Compass: Follow a 'treasure map' where only the right directions lead to the goal.",
    takeHomeText: "Ask: 'Which of God's rules is the hardest for our family to follow?'",
    media: [
      { title: "How do I know right from wrong?", type: "song", url: "https://www.youtube.com/watch?v=videoID" },
      { title: "The Search for Morality", type: "vbs-clip", src: "vbs_main.mp4", start: 2400, end: 2700 },
    ],
    resourceKeys: ["leaderGuide", "crew", "doods"],
  },
  {
    week: 11,
    unit: 4,
    destination: "Morality Mountain Range",
    title: "Missing the Mark",
    bigQuestion: "What is sin?",
    bigDiscovery: "Sin is when we turn away from God's way, but God doesn't turn away from us.",
    biblePassage: "Romans 3:23; 1 John 1:9",
    rememberMeVerse: "Romans 3:23",
    verseText: "For all have sinned and fall short of the glory of God.",
    activityText: "Beanbag Target: Toss beanbags at a target to show that we all 'fall short' of God's perfect standard.",
    takeHomeText: "Practice saying 'I'm sorry' and 'I forgive you' at home this week.",
    media: [
      { title: "The Remember-Me Medley", type: "song", url: "https://www.youtube.com/watch?v=videoID" },
    ],
    resourceKeys: ["leaderGuide", "crew", "doods"],
  },
  {
    week: 12,
    unit: 4,
    destination: "Morality Mountain Range",
    title: "Grace at the Mountain",
    bigQuestion: "What do I do when I fail?",
    bigDiscovery: "We receive God's forgiveness as a gift through Jesus, not by being 'good enough'.",
    biblePassage: "Ephesians 2:8-9; John 1:29",
    rememberMeVerse: "Ephesians 2:8",
    verseText: "For it is by grace you have been saved, through faith-and this is not from yourselves.",
    activityText: "The Free Gift: Give every child a small gift they didn't earn to illustrate Grace.",
    takeHomeText: "Read Ephesians 2:8-9 before dinner and talk about what a 'gift' is.",
    media: [
      { title: "I was Saved (Rescue Song)", type: "song", url: "https://www.youtube.com/watch?v=videoID" },
    ],
    resourceKeys: ["leaderGuide", "crew", "doods"],
  },
  {
    week: 13,
    unit: 5,
    destination: "Dominion of Destiny",
    title: "A Future and a Hope",
    bigQuestion: "Is there a future for me?",
    bigDiscovery: "Jesus' resurrection means we can live in God's family and Kingdom forever.",
    biblePassage: "John 11:25; Revelation 21:1-4",
    rememberMeVerse: "John 11:25",
    verseText: "I am the resurrection and the life. The one who believes in me will live.",
    activityText: "The Sunflower Seed: Plant a seed. Just as a seed 'dies' to become a flower, Jesus gives new life.",
    takeHomeText: "Celebrate! Have a special treat to mark the end of your 13-week Quest.",
    media: [
      { title: "Is there a future for me?", type: "song", url: "https://www.youtube.com/watch?v=videoID" },
      { title: "The Great Search Finale", type: "vbs-clip", src: "vbs_main.mp4", start: 3000, end: 3300 },
    ],
    resourceKeys: ["leaderGuide", "crew", "doods", "questerPledge"],
  },
];

const state = {
  activeWeek: 1,
};

const weekNav = document.querySelector("#weekNav");
const weekSearch = document.querySelector("#weekSearch");
const clipDialog = document.querySelector("#clipDialog");
const clipPlayer = document.querySelector("#clipPlayer");
const clipTitle = document.querySelector("#clipTitle");
const clipMeta = document.querySelector("#clipMeta");
const feedbackName = document.querySelector("#feedbackName");
const feedbackMessage = document.querySelector("#feedbackMessage");
const feedbackStatus = document.querySelector("#feedbackStatus");
const printerFriendlyToggle = document.querySelector("#printerFriendlyToggle");

function youtubeSearchUrl(query) {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(`${query} The Quester`)}`;
}

function renderNav(filter = "") {
  const term = filter.trim().toLowerCase();
  weekNav.innerHTML = "";
  curriculumData
    .filter((week) => {
      const text = `${week.week} ${week.unit} ${week.title} ${week.destination} ${week.bigQuestion} ${week.biblePassage} ${week.bigDiscovery}`.toLowerCase();
      return !term || text.includes(term);
    })
    .forEach((week) => {
      const button = document.createElement("button");
      button.className = "week-button";
      button.type = "button";
      button.setAttribute("aria-current", String(week.week === state.activeWeek));
      button.innerHTML = `
        <span class="week-number">${week.week}</span>
        <span>
          <span class="week-name">${week.title}</span>
          <span class="week-destination">${week.destination}</span>
        </span>
      `;
      button.addEventListener("click", () => selectWeek(week.week));
      weekNav.appendChild(button);
    });
}

function renderWeek(weekIndex) {
  const week = curriculumData[weekIndex];
  if (!week) return;

  state.activeWeek = week.week;
  document.querySelector("#weekKicker").textContent = `Week ${week.week} · Unit ${week.unit} · ${week.destination}`;
  document.querySelector("#weekTitle").textContent = week.title;
  document.querySelector("#weekQuestion").textContent = week.bigQuestion;
  document.querySelector("#weekDiscovery").textContent = week.bigDiscovery;
  document.querySelector("#weekImage").src = getLessonImage(week.week);
  document.querySelector("#weekImage").alt = week.destination;
  document.querySelector("#bibleFocus").textContent = week.biblePassage;
  document.querySelector("#memoryVerse").textContent = `${week.rememberMeVerse}: ${week.verseText}`;
  document.querySelector("#leaderFocus").textContent = week.leaderFocus || week.bigDiscovery;
  document.querySelector("#activityText").textContent = week.activityText;
  document.querySelector("#takeHomeText").textContent = week.takeHomeText;
  renderFlow(week);
  renderMedia(week);
  renderResources(week);
  renderNav(weekSearch.value);
}

function selectWeek(weekNumber) {
  const weekIndex = curriculumData.findIndex((item) => item.week === weekNumber);
  renderWeek(weekIndex);
}

function getDestinationImage(week) {
  if (week.destination === "Basecamp") return images.basecamp;
  if (week.destination === "Identity Island") return images.identity;
  if (week.destination === "Perception Pond") return images.mirror;
  if (week.destination === "Cave of Confusion") return images.cave;
  if (week.destination === "Palm Grove") return images.palm;
  if (week.destination === "Truthful Treasure") return images.treasure;
  if (week.destination === "Ocean of Origins") return week.week === 5 || week.week === 6 ? images.quester : images.origins;
  if (week.destination === "Mainland of Meaning") return week.week === 9 ? images.clubhouse : images.meaning;
  if (week.destination === "Morality Mountain Range") return images.morality;
  if (week.destination === "Dominion of Destiny") return images.destiny;
  return images.basecamp;
}

function renderFlow(week) {
  const flow = document.querySelector("#lessonFlow");
  flow.innerHTML = "";
  const items = week.flow || [
    "Welcome Questers and introduce the Big Question.",
    `Read ${week.biblePassage}.`,
    "Teach the Big Discovery.",
    week.activityText,
    "Practice the Remember-Me verse and pray.",
  ];
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    flow.appendChild(li);
  });
}

function renderMedia(week) {
  const list = document.querySelector("#mediaList");
  list.innerHTML = "";
  const items = [...(week.media || []), { type: "official", title: "Official Quester video library", url: officialVideoLibrary }];

  items.forEach((item) => {
    const row = document.createElement("div");
    row.className = "media-item";
    const meta = getMediaMeta(item);
    row.innerHTML = `
      <div>
        <p class="media-title">${item.title}</p>
        <p class="media-meta">${meta}</p>
      </div>
    `;

    if (isPlayableClip(item)) {
      const button = document.createElement("button");
      button.className = "media-button";
      button.type = "button";
      button.textContent = "Play Clip";
      button.addEventListener("click", () => openClip(item));
      row.appendChild(button);
    } else if (item.type === "vbs-clip" || item.type === "local-clip") {
      const link = document.createElement("a");
      link.className = "media-link";
      link.target = "_blank";
      link.rel = "noreferrer";
      link.href = officialVideoLibrary;
      link.textContent = "Video Library";
      row.appendChild(link);
    } else {
      const link = document.createElement("a");
      link.className = "media-link";
      link.target = "_blank";
      link.rel = "noreferrer";
      link.href = item.url || youtubeChannel;
      link.textContent = "Open";
      row.appendChild(link);
    }

    list.appendChild(row);
  });
}

function isPlayableClip(item) {
  if (item.type !== "vbs-clip" && item.type !== "local-clip") return false;
  if (!item.src) return false;
  return item.src !== "vbs_main.mp4";
}

function renderResources(week) {
  const list = document.querySelector("#resourceList");
  list.innerHTML = "";
  list.appendChild(createResourceLink(`Print Week ${week.week} Leader Guide`, getLeaderGuideHref(week.week)));
  list.appendChild(createResourceLink("Full Sunday School Leader Guide", resources.sundayLeaderGuide));
  list.appendChild(createResourceLink(`Generate Week ${week.week} Puzzle`, `puzzles.html?week=${week.week}`));
  list.appendChild(createResourceLink(`Week ${week.week} Coloring Sheet Slot`, `coloring.html?week=${week.week}`));
  (week.resourceKeys || []).filter((key) => key !== "curriculum").forEach((key) => {
    const href = getWeeklyResourceHref(key, week.week);
    const label = getWeeklyResourceLabel(key, week.week);
    list.appendChild(createResourceLink(label, href));
  });
}

function getWeeklyResourceHref(key, weekNumber) {
  if (key === "crew") return getCrewJournalPdf(weekNumber);
  if (key === "doods") return getDoodsJournalPdf(weekNumber);
  return resources[key] || "#";
}

function getLeaderGuideHref(weekNumber) {
  const printerFriendly = document.body.classList.contains("printer-friendly") ? "&printFriendly=1" : "";
  return `leader.html?week=${weekNumber}${printerFriendly}`;
}

function getWeeklyResourceLabel(key, weekNumber) {
  if (key === "crew") return `Week ${weekNumber} CREW Journal (9-10 yrs)`;
  if (key === "doods") return `Week ${weekNumber} DOODS Journal (11-12 yrs)`;
  return resourceLabels[key] || key;
}

function getCrewJournalPdf(weekNumber) {
  const suffix = document.body.classList.contains("printer-friendly") ? "_PrinterFriendly" : "";
  return `pdf/crew/Quester_CREW_Journal_Week_${String(weekNumber).padStart(2, "0")}${suffix}.pdf`;
}

function getDoodsJournalPdf(weekNumber) {
  const suffix = document.body.classList.contains("printer-friendly") ? "_PrinterFriendly" : "";
  return `pdf/doods/Quester_DOODS_Journal_Week_${String(weekNumber).padStart(2, "0")}${suffix}.pdf`;
}

function createResourceLink(label, href) {
  const link = document.createElement("a");
  link.className = "resource-link";
  link.target = "_blank";
  link.href = href;
  link.textContent = label;
  if (href === fullWeeklyLessonsPdf) {
    markComingSoonPdf(link);
  }
  return link;
}

function markComingSoonPdf(link) {
  link.dataset.comingSoon = "true";
  link.setAttribute("aria-disabled", "true");
  link.title = "This will open the full 13-week Sunday School leader guide PDF once it has been generated.";
  link.addEventListener("click", (event) => {
    event.preventDefault();
    alert("The full 13-week Weekly Lessons PDF has not been generated yet. For now, use the weekly Print Week Leader Guide buttons or the curriculum draft.");
  });
}

function getMediaMeta(item) {
  if ((item.type === "vbs-clip" || item.type === "local-clip") && !isPlayableClip(item)) {
    return "Video upload needed for time-gated playback";
  }
  if (item.type === "vbs-clip") return `VBS source · ${formatTime(item.start)}-${formatTime(item.end)}`;
  if (item.type === "local-clip") return `Local MP4 · ${formatTime(item.start)}-${formatTime(item.end)}`;
  if (item.type === "song") return "Song link";
  if (item.type === "episode") return "Episode link";
  return "Official Quester site";
}

function openClip(item) {
  clipTitle.textContent = item.title;
  clipMeta.textContent = `This launches ${item.src} from ${formatTime(item.start)} to ${formatTime(item.end)}. Put the VBS video in the hub folder or update the src path in app.js.`;
  clipPlayer.src = item.src;
  clipPlayer.currentTime = item.start;
  clipDialog.showModal();
  clipPlayer.play().catch(() => {});

  clipPlayer.ontimeupdate = () => {
    if (clipPlayer.currentTime >= item.end) {
      clipPlayer.pause();
    }
  };
}

function formatTime(seconds = 0) {
  const minutes = Math.floor(seconds / 60);
  const secs = String(Math.floor(seconds % 60)).padStart(2, "0");
  return `${minutes}:${secs}`;
}

document.querySelector("#closeClip").addEventListener("click", () => {
  clipPlayer.pause();
  clipDialog.close();
});

clipDialog.addEventListener("close", () => {
  clipPlayer.pause();
  clipPlayer.removeAttribute("src");
  clipPlayer.load();
});

function buildFeedbackText() {
  const week = curriculumData.find((item) => item.week === state.activeWeek) || curriculumData[0];
  const name = feedbackName.value.trim() || "Not provided";
  const message = feedbackMessage.value.trim() || "No message entered yet.";
  return [
    "Quester Sunday School Hub Feedback",
    `Week: ${week.week} - ${week.title}`,
    `Destination: ${week.destination}`,
    `Name / church: ${name}`,
    "",
    message,
  ].join("\n");
}

function setFeedbackStatus(message) {
  feedbackStatus.textContent = message;
  window.clearTimeout(setFeedbackStatus.timeout);
  setFeedbackStatus.timeout = window.setTimeout(() => {
    feedbackStatus.textContent = "";
  }, 3600);
}

document.querySelector("#copyFeedback").addEventListener("click", async () => {
  const feedback = buildFeedbackText();
  try {
    await navigator.clipboard.writeText(feedback);
    setFeedbackStatus("Copied.");
  } catch {
    feedbackMessage.focus();
    feedbackMessage.select();
    setFeedbackStatus("Select and copy the note.");
  }
});

document.querySelector("#emailFeedback").addEventListener("click", () => {
  const week = curriculumData.find((item) => item.week === state.activeWeek) || curriculumData[0];
  const subject = encodeURIComponent(`Quester Hub feedback - Week ${week.week}`);
  const body = encodeURIComponent(buildFeedbackText());
  window.location.href = `mailto:hi@questercommunity.com?subject=${subject}&body=${body}`;
  setFeedbackStatus("Email draft opened.");
});

weekSearch.addEventListener("input", (event) => renderNav(event.target.value));

printerFriendlyToggle.addEventListener("change", () => {
  document.body.classList.toggle("printer-friendly", printerFriendlyToggle.checked);
  renderResources(curriculumData.find((item) => item.week === state.activeWeek));
});

const fullLeaderGuidePdfLink = document.querySelector("#fullLeaderGuidePdf");
if (fullLeaderGuidePdfLink) {
  markComingSoonPdf(fullLeaderGuidePdfLink);
}

const initialParams = new URLSearchParams(window.location.search);
const initialWeek = Math.max(1, Math.min(13, Number(initialParams.get("week") || 1)));

renderNav();
selectWeek(initialWeek);
