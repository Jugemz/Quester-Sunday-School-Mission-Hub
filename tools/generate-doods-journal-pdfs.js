const fs = require("fs");
const path = require("path");

const outDir = path.resolve(__dirname, "../pdf/doods");

const weeks = [
  ["Basecamp", "The Quest Begins", "Why do questions matter?", "God welcomes honest questions and gives light through His Word.", "Luke 2:46; Psalm 119:105", "Psalm 119:105", "Your word is a lamp for my feet, a light on my path.", ["What is one honest question you are carrying right now?", "How can a question become wise instead of just noisy?", "What would it look like to let Scripture light your next step?"], ["Why do you think Jesus listened and asked questions in the temple?", "How should a group respond when someone asks a hard question?", "What is one question you want to keep seeking with God?"]],
  ["Identity Island", "The Light of the World", "Who in the world am I?", "I discover who I am by knowing God, not by staring only at myself.", "John 8:12; John 1:12", "John 8:12", "I am the light of the world. Whoever follows me will never walk in darkness.", ["Where do preteens feel pressure to build an identity?", "What does Jesus reveal about who you are?", "How can being God's child shape one choice this week?"], ["Why are feelings important but not always trustworthy as a final guide?", "What identity labels are powerful at your age?", "What changes when Jesus gets the first word about you?"]],
  ["Perception Pond", "Whose Approval Matters?", "Who gets to define me?", "Reflections can deceive, but God sees my heart truly.", "Galatians 1:10; 1 Samuel 16:7", "1 Samuel 16:7", "People look at the outward appearance, but the Lord looks at the heart.", ["Whose approval feels loudest in your life?", "What does God see that other people may miss?", "What truth could replace a false label you have believed?"], ["When does encouragement become people-pleasing?", "Why is outward appearance such an easy trap?", "How can friends help each other care about God's voice most?"]],
  ["Ocean of Origins", "The Mighty Maker", "Where did everything come from?", "God is the Magnificent Maker of heaven, earth, and all that is in them.", "Genesis 1:1; Colossians 1:16-17", "Genesis 1:1", "In the beginning God created the heavens and the earth.", ["What part of creation makes you wonder?", "What does creation tell us about God's power and care?", "How should belief in a Maker affect the way we live?"], ["Why does origin matter for meaning?", "What does Colossians 1 say about Jesus and creation?", "How can wonder lead to worship instead of just information?"]],
  ["Port of Purpose", "Image Bearers", "Why is every person valuable?", "Every person has dignity because God made us in His own image.", "Genesis 1:27; Psalm 139:13-14", "Genesis 1:27", "So God created mankind in his own image.", ["Where do people rank others by value?", "How does the image of God challenge that ranking?", "Who do you need to treat with more dignity this week?"], ["What does dignity mean in everyday words?", "How should this truth shape online words and jokes?", "How should it shape how you talk to yourself?"]],
  ["Wonder Falls", "Design vs. Accident", "Am I a mistake?", "I am made on purpose, for a purpose, by a God who loves me.", "Psalm 139:13-16", "Psalm 139:14", "I praise you because I am fearfully and wonderfully made.", ["Which phrase from Psalm 139 feels strongest to you?", "What is the difference between feeling unwanted and being unwanted by God?", "What truth label do you need to keep close?"], ["Why can this topic be tender for some people?", "How can we speak carefully and hopefully about God's design?", "Who are safe adults to talk to when life feels heavy?"]],
  ["Mainland of Meaning", "The Meaning of Life", "Why am I here?", "God made us to know Him and share His love.", "1 John 4:7-8; John 17:3", "1 John 4:8", "Whoever does not love does not know God, because God is love.", ["What purpose promises sound good but do not last?", "What does it mean to know God, not just know about God?", "How can love give shape to your week?"], ["Why is meaning bigger than success?", "What does John 17:3 say eternal life is?", "Where do you see a need for God's love around you?"]],
  ["Fruitful Forest", "Filled and Poured Out", "How do I live my purpose?", "God's love fills us up so we can pour love out to the world.", "John 15:9-12", "John 15:12", "Love each other as I have loved you.", ["Where do you need to receive Jesus' love before trying to give love?", "Who is hard to love right now?", "What is one costly but real act of love you can practice?"], ["What makes Christian love different from just being nice?", "Why does Jesus connect remaining in His love with loving others?", "What could love look like at school this week?"]],
  ["Virtue Village", "Meaning in Community", "Why do we need a team?", "We find our true meaning when we are connected to God and His family.", "1 Corinthians 12:12-27", "1 Corinthians 12:27", "Now you are the body of Christ, and each one of you is a part of it.", ["Where are you tempted to say, 'I do not need anyone'?", "Where are you tempted to say, 'I do not matter'?", "How can you strengthen God's family this week?"], ["Why does Paul compare the church to a body?", "What happens when one part is ignored?", "How can a preteen use gifts in the church now?"]],
  ["Morality Mountain", "The High Standard", "How do I know right from wrong?", "Right and wrong are found in God's good character and His commands.", "Matthew 22:36-39; Exodus 20", "Matthew 22:37", "Love the Lord your God with all your heart and with all your soul and with all your mind.", ["What voices try to define right and wrong for you?", "How do God's commands show love?", "What decision needs God's wisdom this week?"], ["Can a rule be loving? Why or why not?", "How do love God and love neighbor summarize God's commands?", "What is hard about obeying when friends disagree?"]],
  ["Desert of Doubt", "Missing the Mark", "What is sin?", "Sin is when we turn away from God's way, but God does not turn away from us.", "Romans 3:23; 1 John 1:9", "Romans 3:23", "For all have sinned and fall short of the glory of God.", ["Where are people tempted to excuse sin?", "Why do you think hiding feels easier than confession?", "What repair words do you need to practice?"], ["Why is sin more than a mistake?", "How does confession help us stop hiding?", "Why is forgiveness good news instead of an excuse to keep sinning?"]],
  ["Good News Gate", "Grace at the Mountain", "What do I do when I fail?", "Grace is a gift we receive, not a prize we earn.", "Ephesians 2:8-9; John 1:29", "Ephesians 2:8", "For it is by grace you have been saved, through faith.", ["Where do you feel pressure to prove you are good enough?", "Why is grace better news than earning?", "How can a person receive God's gift by faith?"], ["Why do humans like to brag or compare?", "What did Jesus do that we could not do for ourselves?", "How should grace change the way we treat people who fail?"]],
  ["Dominion of Destiny", "A Future and a Hope", "Is there a future for me?", "Jesus' resurrection means we can live in God's family and kingdom forever.", "John 11:25; Revelation 21:1-4", "John 11:25", "I am the resurrection and the life. The one who believes in me will live.", ["What future hope does Jesus give?", "What sadness from Revelation 21 do you most long for God to end?", "What discovery from this whole quest do you want to carry forward?"], ["Why does resurrection matter for real life now?", "How can hope make someone brave or kind?", "What does it mean that the quest to know Jesus continues?"]],
].map((item, index) => ({
  week: index + 1,
  destination: item[0],
  title: item[1],
  bigQuestion: item[2],
  bigDiscovery: item[3],
  bibleFocus: item[4],
  verse: item[5],
  verseText: item[6],
  reflection: item[7],
  discussion: item[8],
}));

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

function makePdf(content) {
  const objects = [];
  const addObj = (body) => {
    objects.push(body);
    return objects.length;
  };
  const catalog = addObj("<< /Type /Catalog /Pages 2 0 R >>");
  addObj("<< /Type /Pages /Kids [3 0 R] /Count 1 >>");
  addObj(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${page.width} ${page.height}] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>`);
  addObj("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");
  addObj("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>");
  addObj(`<< /Length ${Buffer.byteLength(content, "utf8")} >>\nstream\n${content}\nendstream`);
  const parts = ["%PDF-1.4\n"];
  const offsets = [0];
  objects.forEach((body, index) => {
    offsets.push(Buffer.byteLength(parts.join(""), "utf8"));
    parts.push(`${index + 1} 0 obj\n${body}\nendobj\n`);
  });
  const xrefOffset = Buffer.byteLength(parts.join(""), "utf8");
  parts.push(`xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`);
  for (let i = 1; i <= objects.length; i++) parts.push(`${String(offsets[i]).padStart(10, "0")} 00000 n \n`);
  parts.push(`trailer\n<< /Size ${objects.length + 1} /Root ${catalog} 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`);
  return Buffer.from(parts.join(""), "utf8");
}

function buildWeekPdf(week, palette = colors) {
  const c = palette;
  const stream = [];
  const add = (cmd) => stream.push(cmd);
  const fill = (x, y, w, h, color) => add(`q ${rgb(color)} rg ${x} ${y} ${w} ${h} re f Q`);
  const stroke = (x, y, w, h, color = c.ink, width = 1.5) => add(`q ${rgb(color)} RG ${width} w ${x} ${y} ${w} ${h} re S Q`);
  const line = (x1, y1, x2, y2, color = c.ink, width = 1) => add(`q ${rgb(color)} RG ${width} w ${x1} ${y1} m ${x2} ${y2} l S Q`);
  const text = (value, x, y, size = 11, font = "F1", color = c.ink) => add(`BT /${font} ${size} Tf ${rgb(color)} rg 1 0 0 1 ${x} ${y} Tm (${esc(value)}) Tj ET`);
  const paragraph = (value, x, y, maxWidth, size = 10, lineHeight = size + 3, font = "F1", color = c.ink) => {
    const lines = wrapText(value, maxWidth, size);
    lines.forEach((lineText, index) => text(lineText, x, y - index * lineHeight, size, font, color));
    return y - lines.length * lineHeight;
  };

  fill(0, 0, page.width, page.height, c.paper);
  fill(34, 720, 544, 42, c.teal);
  stroke(34, 720, 544, 42, c.ink, 2.5);
  text("Quester Sunday School DOODS Journal", 48, 745, 16, "F2");
  text("Preteen 11-12", 474, 745, 12, "F2");
  text(`Week ${week.week}: ${week.title}`, 48, 724, 13, "F2");
  text(week.destination, 414, 724, 11, "F2");

  fill(34, 640, 544, 66, c.white);
  stroke(34, 640, 544, 66, c.ink, 1.5);
  text("Question Under Investigation", 48, 686, 10, "F2", c.salmon);
  paragraph(week.bigQuestion, 48, 670, 230, 13, 15, "F2");
  text("Discovery", 318, 686, 10, "F2", c.teal);
  paragraph(week.bigDiscovery, 318, 670, 230, 10, 13);

  fill(34, 572, 544, 52, c.white);
  stroke(34, 572, 544, 52, c.ink, 1.5);
  text("Scripture Field Notes", 48, 606, 11, "F2", c.salmon);
  text(`Bible Focus: ${week.bibleFocus}`, 48, 591, 10);
  paragraph(`${week.verse}: ${week.verseText}`, 48, 579, 500, 9, 11);

  fill(34, 324, 262, 226, c.white);
  stroke(34, 324, 262, 226, c.ink, 1.5);
  text("Think Deep", 48, 528, 14, "F2");
  let y = 506;
  week.reflection.forEach((prompt) => {
    paragraph(prompt, 48, y, 222, 10, 12, "F2");
    line(48, y - 26, 276, y - 26, c.muted, 0.8);
    line(48, y - 46, 276, y - 46, c.muted, 0.8);
    y -= 70;
  });

  fill(316, 324, 262, 226, c.white);
  stroke(316, 324, 262, 226, c.ink, 1.5);
  text("Squad Talk", 330, 528, 14, "F2");
  y = 504;
  week.discussion.forEach((question, index) => {
    paragraph(`${index + 1}. ${question}`, 330, y, 220, 9.8, 12);
    y -= 48;
  });
  fill(330, 350, 220, 44, c.gold);
  text("Respect the room:", 342, 376, 10, "F2");
  text("listen well, answer honestly, disagree kindly", 342, 360, 9);

  fill(34, 190, 544, 112, c.white);
  stroke(34, 190, 544, 112, c.ink, 1.5);
  text("Connect the Truth", 48, 280, 13, "F2", c.salmon);
  paragraph("Write one sentence connecting today's passage to real life at home, church, school, or online:", 48, 262, 500, 10);
  line(48, 232, 558, 232, c.muted, 0.8);
  line(48, 210, 558, 210, c.muted, 0.8);

  fill(34, 72, 544, 96, c.white);
  stroke(34, 72, 544, 96, c.ink, 1.5);
  text("My Next Faithful Step", 48, 146, 13, "F2", c.teal);
  paragraph("Because of what God showed me today, I will:", 48, 128, 500, 10);
  line(48, 102, 558, 102, c.muted, 0.8);
  text("Optional: share this step with a parent, leader, or trusted friend.", 48, 84, 9, "F1", c.muted);

  return makePdf(stream.join("\n"));
}

fs.mkdirSync(outDir, { recursive: true });
weeks.forEach((week) => {
  const weekNumber = String(week.week).padStart(2, "0");
  fs.writeFileSync(path.join(outDir, `Quester_DOODS_Journal_Week_${weekNumber}.pdf`), buildWeekPdf(week));
  fs.writeFileSync(path.join(outDir, `Quester_DOODS_Journal_Week_${weekNumber}_PrinterFriendly.pdf`), buildWeekPdf(week, printerColors));
});

console.log(`Generated ${weeks.length} color and ${weeks.length} printer-friendly DOODS journal PDFs in ${outDir}`);
