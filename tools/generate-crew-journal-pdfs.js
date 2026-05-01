const fs = require("fs");
const path = require("path");

const outDir = path.resolve(__dirname, "../pdf/crew");

const weeks = [
  {
    week: 1,
    destination: "Basecamp",
    title: "The Quest Begins",
    bigQuestion: "Why do questions matter?",
    bigDiscovery: "God welcomes honest questions and gives light through His Word.",
    bibleFocus: "Luke 2:46; Psalm 119:105",
    verse: "Psalm 119:105",
    verseText: "Your word is a lamp for my feet, a light on my path.",
    reflection: ["One honest question I brought with me today is:", "One way God's Word can be like a lamp for me is:", "A next step I can take when I do not understand is:"],
    discussion: ["Why do you think Jesus listened and asked questions?", "What makes a question helpful instead of just silly or mean?", "Where can a Quester look first when searching for truth?"],
  },
  {
    week: 2,
    destination: "Identity Island",
    title: "The Light of the World",
    bigQuestion: "Who in the world am I?",
    bigDiscovery: "I find out who I am by following Jesus, the Light of the World.",
    bibleFocus: "John 8:12; John 1:12",
    verse: "John 8:12",
    verseText: "I am the light of the world. Whoever follows me will never walk in darkness.",
    reflection: ["A place kids sometimes look for identity is:", "Jesus gives me light about who I am by:", "One true thing God says about me is:"],
    discussion: ["Why can feelings be real but not always reliable guides?", "How is a basketball like a person with a purpose?", "Does God love you because you are brave, or can you become brave because God loves you?"],
  },
  {
    week: 3,
    destination: "Perception Pond",
    title: "Whose Approval Matters?",
    bigQuestion: "Who gets to define me?",
    bigDiscovery: "Reflections can deceive, but God sees my heart truly.",
    bibleFocus: "Galatians 1:10; 1 Samuel 16:7",
    verse: "1 Samuel 16:7",
    verseText: "People look at the outward appearance, but the Lord looks at the heart.",
    reflection: ["One label people might use that does not tell the whole truth is:", "God sees my heart, which means:", "This week I can listen to God's truth by:"],
    discussion: ["What is good about encouragement from people?", "When can wanting approval become a trap?", "What does God see that people may miss?"],
  },
  {
    week: 4,
    destination: "Ocean of Origins",
    title: "The Mighty Maker",
    bigQuestion: "Where did everything come from?",
    bigDiscovery: "God is the Magnificent Maker of heaven, earth, and all that is in them.",
    bibleFocus: "Genesis 1:1; Colossians 1:16-17",
    verse: "Genesis 1:1",
    verseText: "In the beginning God created the heavens and the earth.",
    reflection: ["One created thing that amazes me is:", "Creation shows me God is:", "One way I can care for what God made is:"],
    discussion: ["What does creation show us about God?", "Why does it matter that the world is made, not meaningless?", "How should we treat people and places God created?"],
  },
  {
    week: 5,
    destination: "Port of Purpose",
    title: "Image Bearers",
    bigQuestion: "Why is every person valuable?",
    bigDiscovery: "Every person has dignity because God made us in His own image.",
    bibleFocus: "Genesis 1:27; Psalm 139:13-14",
    verse: "Genesis 1:27",
    verseText: "So God created mankind in his own image.",
    reflection: ["Being made in God's image means every person:", "Someone I need to treat with more dignity is:", "One way I can honor an image-bearer this week is:"],
    discussion: ["Who is made in God's image?", "How should this change the way we talk about ourselves?", "How should this change the way we treat someone who annoys us?"],
  },
  {
    week: 6,
    destination: "Wonder Falls",
    title: "Design vs. Accident",
    bigQuestion: "Am I a mistake?",
    bigDiscovery: "I am made on purpose, for a purpose, by a God who loves me.",
    bibleFocus: "Psalm 139:13-16",
    verse: "Psalm 139:14",
    verseText: "I praise you because I am fearfully and wonderfully made.",
    reflection: ["A word from Psalm 139 that helps me is:", "When I feel unseen, I can remember:", "One truth label I want to carry is:"],
    discussion: ["What words in Psalm 139 show God's care?", "What is the difference between feeling unwanted and being unwanted by God?", "Who can we talk to when we feel like we do not matter?"],
  },
  {
    week: 7,
    destination: "Mainland of Meaning",
    title: "The Meaning of Life",
    bigQuestion: "Why am I here?",
    bigDiscovery: "God made us to know Him and share His love.",
    bibleFocus: "1 John 4:7-8; John 17:3",
    verse: "1 John 4:8",
    verseText: "Whoever does not love does not know God, because God is love.",
    reflection: ["Knowing God is bigger than knowing facts because:", "A thing that cannot give my life lasting meaning is:", "One way I can share God's love is:"],
    discussion: ["Why is knowing God bigger than knowing facts about God?", "What happens when people try to find meaning only in stuff or attention?", "How can love give life meaning?"],
  },
  {
    week: 8,
    destination: "Fruitful Forest",
    title: "Filled and Poured Out",
    bigQuestion: "How do I live my purpose?",
    bigDiscovery: "God's love fills us up so we can pour love out to the world.",
    bibleFocus: "John 15:9-12",
    verse: "John 15:12",
    verseText: "Love each other as I have loved you.",
    reflection: ["One way Jesus has shown love is:", "A person I can pour love toward this week is:", "My love-in-action quest is:"],
    discussion: ["What are ways kids can pour out love at home, school, or church?", "Is love always easy?", "What did Jesus' love cost Him?"],
  },
  {
    week: 9,
    destination: "Virtue Village",
    title: "Meaning in Community",
    bigQuestion: "Why do we need a team?",
    bigDiscovery: "We find our true meaning when we are connected to God and His family.",
    bibleFocus: "1 Corinthians 12:12-27",
    verse: "1 Corinthians 12:27",
    verseText: "Now you are the body of Christ, and each one of you is a part of it.",
    reflection: ["One gift or strength God has given me is:", "One person in God's family I am thankful for is:", "A way I can help the body of Christ is:"],
    discussion: ["What happens if one part says, 'I do not matter'?", "What happens if one part says, 'I do not need you'?", "How can our class act like a healthy body?"],
  },
  {
    week: 10,
    destination: "Morality Mountain",
    title: "The High Standard",
    bigQuestion: "How do I know right from wrong?",
    bigDiscovery: "Right and wrong are found in God's good character and His commands.",
    bibleFocus: "Matthew 22:36-39; Exodus 20",
    verse: "Matthew 22:37",
    verseText: "Love the Lord your God with all your heart and with all your soul and with all your mind.",
    reflection: ["One command that helps protect people is:", "God's rules show love by:", "A choice I want God's wisdom for is:"],
    discussion: ["Is a command always unloving?", "How can rules protect people?", "Which is harder: loving God or loving neighbor?"],
  },
  {
    week: 11,
    destination: "Desert of Doubt",
    title: "Missing the Mark",
    bigQuestion: "What is sin?",
    bigDiscovery: "Sin is when we turn away from God's way, but God does not turn away from us.",
    bibleFocus: "Romans 3:23; 1 John 1:9",
    verse: "Romans 3:23",
    verseText: "For all have sinned and fall short of the glory of God.",
    reflection: ["Sin means more than mistakes because:", "When I do wrong, I am tempted to hide by:", "One honest repair word I can practice is:"],
    discussion: ["Why do people hide when they do wrong?", "What is confession?", "Why is it good news that God is faithful and just to forgive?"],
  },
  {
    week: 12,
    destination: "Good News Gate",
    title: "Grace at the Mountain",
    bigQuestion: "What do I do when I fail?",
    bigDiscovery: "Grace is a gift we receive, not a prize we earn.",
    bibleFocus: "Ephesians 2:8-9; John 1:29",
    verse: "Ephesians 2:8",
    verseText: "For it is by grace you have been saved, through faith.",
    reflection: ["A gift is different from a prize because:", "Trying to be 'good enough' cannot save me because:", "I can receive God's grace by:"],
    discussion: ["Why do people want to prove they are good enough?", "Why is grace better than earning?", "How do we receive a gift?"],
  },
  {
    week: 13,
    destination: "Dominion of Destiny",
    title: "A Future and a Hope",
    bigQuestion: "Is there a future for me?",
    bigDiscovery: "Jesus' resurrection means we can live in God's family and kingdom forever.",
    bibleFocus: "John 11:25; Revelation 21:1-4",
    verse: "John 11:25",
    verseText: "I am the resurrection and the life. The one who believes in me will live.",
    reflection: ["Jesus' resurrection gives me hope because:", "One sadness Revelation 21 says God will end is:", "The discovery I want to remember from this quest is:"],
    discussion: ["Why is Jesus' resurrection good news for the future?", "What sadness does Revelation 21 say God will end?", "How can hope change the way we live now?"],
  },
];

const page = { width: 612, height: 792 };
const colors = {
  ink: [0.2, 0.16, 0.15],
  muted: [0.42, 0.36, 0.35],
  paper: [1, 0.96, 0.85],
  gold: [0.98, 0.73, 0.25],
  teal: [0.44, 0.72, 0.59],
  salmon: [1, 0.37, 0.35],
  white: [1, 1, 1],
};

const printerColors = {
  ink: [0, 0, 0],
  muted: [0.45, 0.45, 0.45],
  paper: [1, 1, 1],
  gold: [1, 1, 1],
  teal: [1, 1, 1],
  salmon: [0, 0, 0],
  white: [1, 1, 1],
};

function esc(value) {
  return String(value).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function rgb(color) {
  return color.map((value) => value.toFixed(3)).join(" ");
}

function wrapText(text, maxWidth, size) {
  const words = String(text).split(/\s+/);
  const lines = [];
  let line = "";
  const avg = size * 0.49;
  words.forEach((word) => {
    const test = line ? `${line} ${word}` : word;
    if (test.length * avg > maxWidth && line) {
      lines.push(line);
      line = word;
    } else {
      line = test;
    }
  });
  if (line) lines.push(line);
  return lines;
}

function buildWeekPdf(week, palette = colors) {
  const c = palette;
  const stream = [];
  const add = (cmd) => stream.push(cmd);
  const fill = (x, y, w, h, color) => add(`q ${rgb(color)} rg ${x} ${y} ${w} ${h} re f Q`);
  const stroke = (x, y, w, h, color = c.ink, width = 1.5) => add(`q ${rgb(color)} RG ${width} w ${x} ${y} ${w} ${h} re S Q`);
  const line = (x1, y1, x2, y2, color = c.ink, width = 1) => add(`q ${rgb(color)} RG ${width} w ${x1} ${y1} m ${x2} ${y2} l S Q`);
  const text = (value, x, y, size = 11, font = "F1", color = c.ink) => {
    add(`BT /${font} ${size} Tf ${rgb(color)} rg 1 0 0 1 ${x} ${y} Tm (${esc(value)}) Tj ET`);
  };
  const paragraph = (value, x, y, maxWidth, size = 10, lineHeight = size + 3, font = "F1", color = c.ink) => {
    wrapText(value, maxWidth, size).forEach((lineText, index) => text(lineText, x, y - index * lineHeight, size, font, color));
    return y - wrapText(value, maxWidth, size).length * lineHeight;
  };

  fill(0, 0, page.width, page.height, c.paper);
  fill(34, 720, 544, 42, c.gold);
  stroke(34, 720, 544, 42, c.ink, 2.5);
  text("Quester Sunday School CREW Journal", 48, 745, 16, "F2");
  text("Ages 9-10", 488, 745, 12, "F2");
  text(`Week ${week.week}: ${week.title}`, 48, 724, 13, "F2");
  text(week.destination, 420, 724, 11, "F2");

  fill(34, 652, 544, 54, c.white);
  stroke(34, 652, 544, 54, c.ink, 1.5);
  text("Big Question", 48, 686, 10, "F2", c.salmon);
  paragraph(week.bigQuestion, 48, 670, 238, 13, 15, "F2");
  text("Big Discovery", 318, 686, 10, "F2", c.teal);
  paragraph(week.bigDiscovery, 318, 670, 238, 10, 13);

  fill(34, 586, 544, 50, c.white);
  stroke(34, 586, 544, 50, c.ink, 1.5);
  text("Open the Map", 48, 618, 11, "F2", c.salmon);
  text(`Bible Focus: ${week.bibleFocus}`, 48, 603, 10);
  paragraph(`${week.verse}: ${week.verseText}`, 48, 591, 500, 9, 11);

  fill(34, 356, 262, 214, c.white);
  stroke(34, 356, 262, 214, c.ink, 1.5);
  text("My Quest Notes", 48, 548, 14, "F2");
  let y = 526;
  week.reflection.forEach((prompt) => {
    paragraph(prompt, 48, y, 222, 10, 12, "F2");
    line(48, y - 26, 276, y - 26, c.muted, 0.8);
    line(48, y - 46, 276, y - 46, c.muted, 0.8);
    y -= 68;
  });

  fill(316, 356, 262, 214, c.white);
  stroke(316, 356, 262, 214, c.ink, 1.5);
  text("CREW Discussion", 330, 548, 14, "F2");
  y = 524;
  week.discussion.forEach((question, index) => {
    paragraph(`${index + 1}. ${question}`, 330, y, 220, 10, 12);
    y -= 44;
  });
  fill(330, 390, 220, 44, c.teal);
  text("Circle one to share:", 342, 416, 10, "F2");
  text("a question   a discovery   a next step", 342, 400, 10, "F2");

  fill(34, 238, 544, 98, c.white);
  stroke(34, 238, 544, 98, c.ink, 1.5);
  text("Remember-Me Verse", 48, 316, 13, "F2", c.salmon);
  paragraph(`Copy or draw the verse in your own words: ${week.verse}`, 48, 300, 500, 10);
  line(48, 276, 558, 276, c.muted, 0.8);
  line(48, 254, 558, 254, c.muted, 0.8);

  fill(34, 92, 544, 124, c.white);
  stroke(34, 92, 544, 124, c.ink, 1.5);
  text("Prayer and Take-Home Quest", 48, 194, 13, "F2", c.teal);
  paragraph("God, help me remember today's truth by:", 48, 176, 500, 10);
  line(48, 148, 558, 148, c.muted, 0.8);
  line(48, 126, 558, 126, c.muted, 0.8);
  text("Ask someone at home: What is one thing this lesson makes you wonder about God?", 48, 104, 9, "F2");

  return makePdf(stream.join("\n"));
}

function makePdf(content) {
  const objects = [];
  const addObj = (body) => {
    objects.push(body);
    return objects.length;
  };

  const catalog = addObj("<< /Type /Catalog /Pages 2 0 R >>");
  const pages = addObj("<< /Type /Pages /Kids [3 0 R] /Count 1 >>");
  const pageObj = addObj(`<< /Type /Page /Parent ${pages} 0 R /MediaBox [0 0 ${page.width} ${page.height}] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>`);
  const helvetica = addObj("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");
  const helveticaBold = addObj("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>");
  const contentObj = addObj(`<< /Length ${Buffer.byteLength(content, "utf8")} >>\nstream\n${content}\nendstream`);

  const parts = ["%PDF-1.4\n"];
  const offsets = [0];
  objects.forEach((body, index) => {
    offsets.push(Buffer.byteLength(parts.join(""), "utf8"));
    parts.push(`${index + 1} 0 obj\n${body}\nendobj\n`);
  });
  const xrefOffset = Buffer.byteLength(parts.join(""), "utf8");
  parts.push(`xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`);
  for (let i = 1; i <= objects.length; i++) {
    parts.push(`${String(offsets[i]).padStart(10, "0")} 00000 n \n`);
  }
  parts.push(`trailer\n<< /Size ${objects.length + 1} /Root ${catalog} 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`);
  void pageObj;
  void helvetica;
  void helveticaBold;
  void contentObj;
  return Buffer.from(parts.join(""), "utf8");
}

fs.mkdirSync(outDir, { recursive: true });
weeks.forEach((week) => {
  const weekNumber = String(week.week).padStart(2, "0");
  fs.writeFileSync(path.join(outDir, `Quester_CREW_Journal_Week_${weekNumber}.pdf`), buildWeekPdf(week));
  fs.writeFileSync(path.join(outDir, `Quester_CREW_Journal_Week_${weekNumber}_PrinterFriendly.pdf`), buildWeekPdf(week, printerColors));
});

console.log(`Generated ${weeks.length} color and ${weeks.length} printer-friendly CREW journal PDFs in ${outDir}`);
