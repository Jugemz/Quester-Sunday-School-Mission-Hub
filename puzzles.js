const puzzleWeeks = [
  {
    week: 1,
    title: "The Quest Begins",
    question: "Why do questions matter?",
    words: ["QUEST", "QUESTION", "TRUTH", "BIBLE", "LIGHT", "WORD", "JESUS", "ASK", "SEEK", "DISCOVER"],
    phrase: "GOD WELCOMES HONEST QUESTIONS",
    clues: [
      ["QUEST", "A journey to discover truth"],
      ["QUESTION", "Something we ask when we want to learn"],
      ["BIBLE", "God's Word"],
      ["LIGHT", "What God's Word gives our path"],
      ["DISCOVER", "To find something true"],
    ],
  },
  {
    week: 2,
    title: "The Light of the World",
    question: "Who in the world am I?",
    words: ["IDENTITY", "LIGHT", "WORLD", "FOLLOW", "CHILD", "GOD", "JESUS", "LIFE", "TRUTH", "BELONG"],
    phrase: "JESUS IS THE LIGHT OF THE WORLD",
    clues: [["IDENTITY", "Who you truly are"], ["LIGHT", "What leads us out of darkness"], ["CHILD", "John 1 says believers become children of God"], ["FOLLOW", "What Jesus calls us to do"], ["BELONG", "To have a true home with someone"]],
  },
  {
    week: 3,
    title: "Whose Approval Matters?",
    question: "Who gets to define me?",
    words: ["HEART", "APPROVAL", "MIRROR", "GOD", "TRUTH", "PLEASE", "LOVED", "KNOWN", "VALUE", "SEEN"],
    phrase: "THE LORD LOOKS AT THE HEART",
    clues: [["HEART", "What God sees truly"], ["APPROVAL", "What people-pleasing chases"], ["MIRROR", "It can show a reflection"], ["KNOWN", "God fully knows us"], ["VALUE", "Worth"]],
  },
  {
    week: 4,
    title: "The Mighty Maker",
    question: "Where did everything come from?",
    words: ["CREATOR", "HEAVENS", "EARTH", "MAKER", "DESIGN", "ATOMS", "STARS", "GENESIS", "BEGINNING", "GLORY"],
    phrase: "IN THE BEGINNING GOD CREATED",
    clues: [["CREATOR", "The One who made all things"], ["HEAVENS", "Genesis says God created these"], ["DESIGN", "What points to a designer"], ["STARS", "Lights God placed in the sky"], ["GENESIS", "The first book of the Bible"]],
  },
  {
    week: 5,
    title: "Image Bearers",
    question: "Why am I special?",
    words: ["IMAGE", "BEARER", "DIGNITY", "SPECIAL", "PERSON", "UNIQUE", "THUMBPRINT", "WONDER", "MALE", "FEMALE"],
    phrase: "GOD MADE PEOPLE IN HIS IMAGE",
    clues: [["IMAGE", "People are made in God's ___"], ["DIGNITY", "Worth every person has"], ["UNIQUE", "One of a kind"], ["THUMBPRINT", "A tiny pattern unique to you"], ["WONDER", "Amazement"]],
  },
  {
    week: 6,
    title: "Design vs. Accident",
    question: "Am I a mistake?",
    words: ["PURPOSE", "DESIGN", "WONDERFUL", "KNOWN", "LOVED", "MASTERPIECE", "ARTIST", "FORMED", "FAMILY", "LIFE"],
    phrase: "I AM FEARFULLY AND WONDERFULLY MADE",
    clues: [["PURPOSE", "A reason something was made"], ["DESIGN", "Careful planning"], ["ARTIST", "A maker of art"], ["FORMED", "Shaped with care"], ["LOVED", "Held in love"]],
  },
  {
    week: 7,
    title: "The Meaning of Life",
    question: "What is the meaning of my life?",
    words: ["MEANING", "LOVE", "KNOW", "GOD", "FOREVER", "PURPOSE", "RELATIONSHIP", "BELOVED", "LIFE", "SHARE"],
    phrase: "GOD MADE US TO KNOW HIS LOVE",
    clues: [["MEANING", "Why something matters"], ["LOVE", "God is this"], ["FOREVER", "Without end"], ["RELATIONSHIP", "Connection with God and others"], ["BELOVED", "Deeply loved"]],
  },
  {
    week: 8,
    title: "Filled and Poured Out",
    question: "How do I live out my purpose?",
    words: ["FILLED", "POURED", "LOVE", "CUPS", "SERVE", "NEIGHBOR", "COMMAND", "FRUIT", "ACTION", "KINDNESS"],
    phrase: "LOVE EACH OTHER AS I HAVE LOVED YOU",
    clues: [["FILLED", "What the pitcher becomes"], ["POURED", "Love moves outward"], ["SERVE", "To help in love"], ["NEIGHBOR", "Someone near us to love"], ["COMMAND", "Something Jesus tells us to do"]],
  },
  {
    week: 9,
    title: "Meaning in Community",
    question: "Why do we need each other?",
    words: ["BODY", "CHRIST", "MEMBER", "COMMUNITY", "CHURCH", "GIFTS", "HELP", "PART", "THANKS", "TOGETHER"],
    phrase: "YOU ARE THE BODY OF CHRIST",
    clues: [["BODY", "Paul's picture of the church"], ["MEMBER", "One part of a body"], ["GIFTS", "Ways God equips His people"], ["TOGETHER", "Not alone"], ["CHURCH", "God's family gathered"]],
  },
  {
    week: 10,
    title: "The High Standard",
    question: "How do I know right from wrong?",
    words: ["MORALITY", "RIGHT", "WRONG", "COMMAND", "LOVE", "LAW", "HEART", "SOUL", "MIND", "NEIGHBOR"],
    phrase: "LOVE GOD AND LOVE YOUR NEIGHBOR",
    clues: [["MORALITY", "Right and wrong"], ["COMMAND", "A direction from God"], ["LAW", "God's standard"], ["NEIGHBOR", "Someone Jesus says to love"], ["SOUL", "Love God with all your ___"]],
  },
  {
    week: 11,
    title: "Missing the Mark",
    question: "What is sin?",
    words: ["SIN", "SHORT", "GLORY", "TARGET", "CONFESS", "FORGIVE", "TURN", "GRACE", "HONEST", "MERCY"],
    phrase: "ALL HAVE SINNED AND FALL SHORT",
    clues: [["SIN", "Turning away from God's way"], ["SHORT", "Romans says we fall ___"], ["TARGET", "What the beanbag aims for"], ["CONFESS", "To tell the truth about wrong"], ["MERCY", "Compassion we do not earn"]],
  },
  {
    week: 12,
    title: "Grace at the Mountain",
    question: "What do I do when I fail?",
    words: ["GRACE", "GIFT", "FAITH", "SAVED", "JESUS", "FORGIVEN", "LAMB", "EARN", "RESCUE", "THANKS"],
    phrase: "BY GRACE YOU HAVE BEEN SAVED",
    clues: [["GRACE", "A gift we do not earn"], ["FAITH", "Trust"], ["SAVED", "Rescued by Jesus"], ["LAMB", "John called Jesus the ___ of God"], ["EARN", "Grace is not something we ___"]],
  },
  {
    week: 13,
    title: "A Future and a Hope",
    question: "Is there a future for me?",
    words: ["DESTINY", "RESURRECTION", "LIFE", "JESUS", "FUTURE", "KINGDOM", "HOPE", "SEED", "FOREVER", "NEW"],
    phrase: "JESUS IS THE RESURRECTION AND THE LIFE",
    clues: [["DESTINY", "Where something is going"], ["RESURRECTION", "Life after death"], ["KINGDOM", "God's reign and home"], ["HOPE", "Confident expectation"], ["FOREVER", "Without end"]],
  },
];

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const iconFontStack = "Questericons, Questicons, Whimsy TT, sans-serif";
const questiconDecoder = Object.fromEntries(
  alphabet.split("").map((letter) => [letter, letter])
);

const canvas = document.querySelector("#puzzleCanvas");
const ctx = canvas.getContext("2d");
const weekSelect = document.querySelector("#weekSelect");
const typeSelect = document.querySelector("#typeSelect");
const answerButton = document.querySelector("#toggleAnswer");
const backToHub = document.querySelector("#backToHub");
let showAnswer = false;
let seed = Date.now();
let currentWordSearch = null;
const puzzleArtCache = new Map();

document.fonts?.load("48px Questericons").then(() => renderPuzzle());
document.fonts?.load("48px Questicons").then(() => renderPuzzle());
document.fonts?.load("24px Patrick Hand Local").then(() => renderPuzzle());
document.fonts?.load("36px Whimsy TT").then(() => renderPuzzle());

puzzleWeeks.forEach((week, index) => {
  const option = document.createElement("option");
  option.value = String(index);
  option.textContent = `Week ${week.week}: ${week.title}`;
  weekSelect.appendChild(option);
});

const params = new URLSearchParams(window.location.search);
const initialWeek = Math.max(1, Math.min(13, Number(params.get("week") || 1)));
weekSelect.value = String(initialWeek - 1);
typeSelect.value = params.get("type") || defaultTypeForWeek(initialWeek);

document.querySelector("#newPuzzle").addEventListener("click", () => {
  seed = Date.now();
  currentWordSearch = null;
  renderPuzzle();
});

answerButton.addEventListener("click", () => {
  showAnswer = !showAnswer;
  answerButton.textContent = showAnswer ? "Hide Answer" : "Show Answer";
  renderPuzzle();
});

document.querySelector("#printPuzzle").addEventListener("click", () => window.print());
weekSelect.addEventListener("change", () => {
  const week = puzzleWeeks[Number(weekSelect.value)].week;
  typeSelect.value = defaultTypeForWeek(week);
  showAnswer = false;
  answerButton.textContent = "Show Answer";
  currentWordSearch = null;
  renderPuzzle();
});
typeSelect.addEventListener("change", () => {
  showAnswer = false;
  answerButton.textContent = "Show Answer";
  currentWordSearch = null;
  renderPuzzle();
});

function defaultTypeForWeek(week) {
  if (week === 12) return "icon-code";
  return ["word-search", "scramble", "cryptogram"][(week - 1) % 3];
}

function renderPuzzle() {
  const week = puzzleWeeks[Number(weekSelect.value)];
  const type = typeSelect.value;
  updateBackToHub(week.week);
  document.querySelector("#pageTitle").textContent = `Week ${week.week}: ${week.title}`;
  document.querySelector("#pageSubtitle").textContent = week.question;
  clearPage();
  drawHeader(week, type);
  if (type === "word-search") drawWordSearch(week);
  if (type === "scramble") drawScramble(week);
  if (type === "cryptogram") drawCryptogram(week);
  if (type === "icon-code") drawIconCode(week);
  drawPuzzleArt(week, type);
}

function updateBackToHub(weekNumber) {
  if (!backToHub) return;
  backToHub.href = `index.html?week=${weekNumber}`;
}

function clearPage() {
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawHeader(week, type) {
  ctx.fillStyle = "#172033";
  ctx.font = "40px Whimsy TT, Patrick Hand Local, Segoe UI, Arial";
  ctx.fillText(`Week ${week.week}: ${week.title}`, 58, 72);
  ctx.font = "700 22px Patrick Hand Local, Segoe UI, Arial";
  ctx.fillStyle = "#167a83";
  ctx.fillText(typeLabel(type), 58, 104);
  ctx.fillStyle = "#647086";
  ctx.font = "20px Patrick Hand Local, Segoe UI, Arial";
  wrapText(week.question, 58, 134, 760, 22);
  ctx.strokeStyle = "#d9cfbd";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(58, 166);
  ctx.lineTo(842, 166);
  ctx.stroke();
}

function typeLabel(type) {
  if (type === "word-search") return "Word Search";
  if (type === "scramble") return "Word Scramble";
  if (type === "icon-code") return "Quester Icon Code";
  return "Cryptogram";
}

function drawWordSearch(week) {
  if (!currentWordSearch) currentWordSearch = buildWordSearch(week.words, 13, seed);
  const { grid, placements } = currentWordSearch;
  const cell = 40;
  const startX = 70;
  const startY = 210;

  ctx.font = "800 28px Patrick Hand Local, Segoe UI, Arial";
  ctx.fillStyle = "#172033";
  ctx.fillText("Find these words:", 640, 225);
  ctx.font = "22px Patrick Hand Local, Segoe UI, Arial";
  week.words.slice(0, 10).forEach((word, index) => {
    ctx.fillText(word, 640, 262 + index * 30);
  });

  ctx.font = "800 22px Consolas, monospace";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      ctx.strokeStyle = "#cfd6df";
      ctx.strokeRect(startX + col * cell, startY + row * cell, cell, cell);
      ctx.fillStyle = "#172033";
      ctx.fillText(grid[row][col], startX + col * cell + cell / 2, startY + row * cell + cell / 2);
    }
  }
  ctx.textAlign = "left";

  if (showAnswer) {
    ctx.strokeStyle = "#d59a2b";
    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    placements.forEach((place) => {
      const x1 = startX + place.col * cell + cell / 2;
      const y1 = startY + place.row * cell + cell / 2;
      const x2 = startX + (place.col + place.dc * (place.word.length - 1)) * cell + cell / 2;
      const y2 = startY + (place.row + place.dr * (place.word.length - 1)) * cell + cell / 2;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    });
    ctx.lineCap = "butt";
    ctx.lineWidth = 1;
  }
}

function getPuzzleArt(week) {
  if (puzzleArtCache.has(week.week)) return puzzleArtCache.get(week.week);
  const image = new Image();
  image.src = `assets/puzzle-art/Week-${String(week.week).padStart(2, "0")}.png`;
  image.onload = () => {
    const activeWeek = puzzleWeeks[Number(weekSelect.value)];
    if (activeWeek.week === week.week) renderPuzzle();
  };
  image.onerror = () => puzzleArtCache.set(week.week, null);
  puzzleArtCache.set(week.week, image);
  return image;
}

function drawPuzzleArt(week, type) {
  const image = getPuzzleArt(week);
  if (!image || !image.complete || !image.naturalWidth) return;
  const boxes = {
    "word-search": { x: 638, y: 620, width: 200, height: 220 },
    scramble: { x: 610, y: 690, width: 230, height: 255 },
    cryptogram: week.week === 3 ? { x: 650, y: 386, width: 182, height: 150 } : { x: 590, y: 650, width: 250, height: 275 },
    "icon-code": { x: 650, y: 386, width: 182, height: 150 },
  };
  const box = boxes[type] || boxes.cryptogram;
  drawImageContained(image, box.x, box.y, box.width, box.height);
}

function drawImageContained(image, x, y, maxWidth, maxHeight) {
  const scale = Math.min(maxWidth / image.naturalWidth, maxHeight / image.naturalHeight);
  const width = image.naturalWidth * scale;
  const height = image.naturalHeight * scale;
  const left = x + (maxWidth - width) / 2;
  const top = y + (maxHeight - height) / 2;
  ctx.save();
  ctx.globalAlpha = 0.94;
  ctx.drawImage(image, left, top, width, height);
  ctx.restore();
}

function drawScramble(week) {
  ctx.font = "800 28px Patrick Hand Local, Segoe UI, Arial";
  ctx.fillStyle = "#172033";
  ctx.fillText("Unscramble each word using the clue.", 58, 220);
  ctx.font = "18px Segoe UI, Arial";
  week.clues.forEach(([word, clue], index) => {
    const y = 280 + index * 82;
    const scrambled = scrambleWord(word, seed + index);
    ctx.fillStyle = "#167a83";
    ctx.font = "800 27px Patrick Hand Local, Segoe UI, Arial";
    ctx.fillText(`${index + 1}. ${showAnswer ? word : scrambled}`, 70, y);
    ctx.fillStyle = "#172033";
    ctx.font = "21px Patrick Hand Local, Segoe UI, Arial";
    wrapText(clue, 250, y, 540, 22);
    ctx.strokeStyle = "#d9cfbd";
    ctx.beginPath();
    ctx.moveTo(70, y + 34);
    ctx.lineTo(790, y + 34);
    ctx.stroke();
  });
}

function drawCryptogram(week) {
  if (week.week === 3) {
    drawQuesticonCryptogram(week);
    return;
  }
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const shifted = "QWERTYUIOPASDFGHJKLZXCVBNM";
  const map = Object.fromEntries(alphabet.split("").map((letter, index) => [letter, shifted[index]]));
  const encoded = week.phrase.toUpperCase().replace(/[A-Z]/g, (letter) => map[letter]);

  ctx.font = "800 28px Patrick Hand Local, Segoe UI, Arial";
  ctx.fillStyle = "#172033";
  ctx.fillText("Decode the message.", 58, 220);
  ctx.font = "700 28px Consolas, monospace";
  ctx.fillStyle = "#167a83";
  wrapText(showAnswer ? week.phrase : encoded, 70, 285, 760, 38);

  ctx.font = "20px Patrick Hand Local, Segoe UI, Arial";
  ctx.fillStyle = "#647086";
  wrapText("Hint: each coded letter always stands for the same real letter.", 70, 470, 760, 24);

  ctx.font = "700 17px Consolas, monospace";
  ctx.fillStyle = "#172033";
  const sample = alphabet.slice(0, 13).split("").map((letter) => `${map[letter]}=${showAnswer ? letter : "_"}`).join("   ");
  const sample2 = alphabet.slice(13).split("").map((letter) => `${map[letter]}=${showAnswer ? letter : "_"}`).join("   ");
  ctx.fillText(sample, 70, 535);
  ctx.fillText(sample2, 70, 575);
}

function drawQuesticonCryptogram(week) {
  const phrase = week.phrase.toUpperCase();
  const startX = 70;
  let x = startX;
  let y = 270;
  const box = 54;

  ctx.font = "800 28px Patrick Hand Local, Segoe UI, Arial";
  ctx.fillStyle = "#172033";
  ctx.fillText("Decode the message using the Questicons decoder.", 58, 220);

  phrase.split("").forEach((char) => {
    if (char === " ") {
      x += box * 0.55;
      return;
    }
    if (x > 790) {
      x = startX;
      y += 82;
    }
    const code = questiconDecoder[char] || char;
    drawIconCell(code, char, x, y, box, showAnswer);
    x += box + 10;
  });

  ctx.fillStyle = "#172033";
  ctx.font = "800 26px Patrick Hand Local, Segoe UI, Arial";
  ctx.fillText("Decoder", 70, 540);
  alphabet.split("").forEach((letter, index) => {
    const col = index % 7;
    const row = Math.floor(index / 7);
    const keyX = 74 + col * 112;
    const keyY = 582 + row * 58;
    ctx.fillStyle = "#172033";
    ctx.font = "800 18px Patrick Hand Local, Segoe UI, Arial";
    ctx.fillText(`${letter} =`, keyX, keyY);
    ctx.fillStyle = "#167a83";
    ctx.font = `30px ${iconFontStack}`;
    ctx.fillText(questiconDecoder[letter], keyX + 44, keyY);
  });

  ctx.fillStyle = "#167a83";
  ctx.font = "800 28px Patrick Hand Local, Segoe UI, Arial";
  ctx.fillText("Week 3 Truth:", 70, 855);
  ctx.fillStyle = "#172033";
  ctx.font = "22px Patrick Hand Local, Segoe UI, Arial";
  wrapText("Reflections can deceive, but God sees the heart truly.", 70, 890, 760, 28);
}

function drawIconCode(week) {
  const phrase = week.week === 12 ? "GRACE IS A GIFT" : week.phrase;
  const startX = 78;
  let x = startX;
  let y = 260;
  const box = 62;

  ctx.font = "800 28px Patrick Hand Local, Segoe UI, Arial";
  ctx.fillStyle = "#172033";
  ctx.fillText("Decode the message using the Questicons decoder.", 58, 220);

  phrase.split("").forEach((char) => {
    if (char === " ") {
      x += box * 0.65;
      return;
    }
    if (x > 790) {
      x = startX;
      y += 92;
    }
    const code = questiconDecoder[char] || char;
    drawIconCell(code, char, x, y, box, showAnswer);
    x += box + 12;
  });

  ctx.fillStyle = "#172033";
  ctx.font = "800 26px Patrick Hand Local, Segoe UI, Arial";
  ctx.fillText("Decoder", 70, 560);
  alphabet.split("").forEach((letter, index) => {
    const col = index % 7;
    const row = Math.floor(index / 7);
    const keyX = 74 + col * 112;
    const keyY = 602 + row * 58;
    ctx.fillStyle = "#172033";
    ctx.font = "800 18px Patrick Hand Local, Segoe UI, Arial";
    ctx.fillText(`${letter} =`, keyX, keyY);
    ctx.fillStyle = "#167a83";
    ctx.font = `30px ${iconFontStack}`;
    ctx.fillText(questiconDecoder[letter], keyX + 44, keyY);
  });

  ctx.fillStyle = "#167a83";
  ctx.font = "800 28px Patrick Hand Local, Segoe UI, Arial";
  ctx.fillText("Week 12 Truth:", 70, 875);
  ctx.fillStyle = "#172033";
  ctx.font = "22px Patrick Hand Local, Segoe UI, Arial";
  wrapText("Grace is not earned. Grace is God's gift through Jesus.", 70, 910, 760, 28);
}

function drawIconCell(code, letter, x, y, size, revealLetter) {
  ctx.strokeStyle = "#d9cfbd";
  ctx.lineWidth = 2;
  ctx.strokeRect(x, y, size, size);
  ctx.fillStyle = "#167a83";
  ctx.font = `${Math.floor(size * 0.45)}px ${iconFontStack}`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(code, x + size / 2, y + size / 2 + 1);
  ctx.textBaseline = "alphabetic";
  ctx.fillStyle = "#172033";
  ctx.font = "800 22px Patrick Hand Local, Segoe UI, Arial";
  ctx.textAlign = "center";
  ctx.fillText(revealLetter ? letter : "_", x + size / 2, y + size + 24);
  ctx.textAlign = "left";
}

function buildWordSearch(words, size, initialSeed) {
  const rand = mulberry32(initialSeed);
  const grid = Array.from({ length: size }, () => Array.from({ length: size }, () => ""));
  const directions = [
    [0, 1],
    [1, 0],
    [1, 1],
    [-1, 1],
  ];
  const placements = [];
  words.slice(0, 10).sort((a, b) => b.length - a.length).forEach((word) => {
    const clean = word.replace(/[^A-Z]/g, "");
    for (let attempt = 0; attempt < 200; attempt++) {
      const [dr, dc] = directions[Math.floor(rand() * directions.length)];
      const row = Math.floor(rand() * size);
      const col = Math.floor(rand() * size);
      if (canPlace(grid, clean, row, col, dr, dc)) {
        placeWord(grid, clean, row, col, dr, dc);
        placements.push({ word: clean, row, col, dr, dc });
        break;
      }
    }
  });
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      if (!grid[row][col]) grid[row][col] = String.fromCharCode(65 + Math.floor(rand() * 26));
    }
  }
  return { grid, placements };
}

function canPlace(grid, word, row, col, dr, dc) {
  for (let i = 0; i < word.length; i++) {
    const r = row + dr * i;
    const c = col + dc * i;
    if (r < 0 || c < 0 || r >= grid.length || c >= grid.length) return false;
    if (grid[r][c] && grid[r][c] !== word[i]) return false;
  }
  return true;
}

function placeWord(grid, word, row, col, dr, dc) {
  for (let i = 0; i < word.length; i++) {
    grid[row + dr * i][col + dc * i] = word[i];
  }
}

function scrambleWord(word, localSeed) {
  const rand = mulberry32(localSeed);
  const letters = word.split("");
  for (let i = letters.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [letters[i], letters[j]] = [letters[j], letters[i]];
  }
  const scrambled = letters.join("");
  return scrambled === word ? letters.reverse().join("") : scrambled;
}

function wrapText(text, x, y, maxWidth, lineHeight) {
  const words = text.split(" ");
  let line = "";
  words.forEach((word, index) => {
    const test = line ? `${line} ${word}` : word;
    if (ctx.measureText(test).width > maxWidth && line) {
      ctx.fillText(line, x, y);
      line = word;
      y += lineHeight;
    } else {
      line = test;
    }
    if (index === words.length - 1) ctx.fillText(line, x, y);
  });
}

function mulberry32(a) {
  return function random() {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

renderPuzzle();
