// Smart AI Response System for Kids
export const getSmartAIResponse = (question: string): string => {
  const q = question.toLowerCase().trim();
  
  // Math calculations - handle any basic math
  const mathMatch = q.match(/(\d+)\s*[\+\-\*\/×÷]\s*(\d+)/);
  if (mathMatch) {
    const num1 = parseInt(mathMatch[1]);
    const num2 = parseInt(mathMatch[2]);
    const operator = q.match(/[\+\-\*\/×÷]/)?.[0] || '+';
    
    let result = 0;
    let operation = '';
    
    switch (operator) {
      case '+':
        result = num1 + num2;
        operation = 'addition';
        break;
      case '-':
        result = num1 - num2;
        operation = 'subtraction';
        break;
      case '*':
      case '×':
        result = num1 * num2;
        operation = 'multiplication';
        break;
      case '/':
      case '÷':
        result = num1 / num2;
        operation = 'division';
        break;
    }
    
    return `🧮 ${num1} ${operator} ${num2} = ${result}\n\nGreat ${operation} problem! 🎉\n\nMath tip: ${getMathTip(operator)}\n\nWant to try another problem?`;
  }

  // Science questions - comprehensive coverage
  if (q.match(/science|biology|chemistry|physics|space|planet|animal|plant|body|health/i)) {
    return getScienceResponse(q);
  }

  // English and language questions
  if (q.match(/english|grammar|word|sentence|writing|reading|book|story/i)) {
    return getEnglishResponse(q);
  }

  // History and social studies
  if (q.match(/history|ancient|war|president|country|culture|civilization/i)) {
    return getHistoryResponse(q);
  }

  // Geography questions
  if (q.match(/geography|continent|ocean|mountain|river|capital|country|city/i)) {
    return getGeographyResponse(q);
  }

  // Technology and computers
  if (q.match(/computer|internet|robot|technology|coding|programming/i)) {
    return getTechResponse(q);
  }

  // Fun and entertainment
  if (q.match(/joke|funny|laugh|story|game|play|fun/i)) {
    return getFunResponse(q);
  }

  // Personal questions about the AI
  if (q.match(/who.*you|what.*you|your.*name|are.*you|how.*you/i)) {
    return getPersonalResponse(q);
  }

  // Greetings
  if (q.match(/hello|hi|hey|good.*morning|good.*afternoon|good.*evening/i)) {
    return "👋 Hello there! I'm so excited to help you learn today! 🌟\n\nI can help with:\n📚 Math problems\n🔬 Science questions\n✏️ English & writing\n🌍 Geography & history\n💻 Technology\n😄 Fun facts & jokes\n\nWhat would you like to explore? Ask me anything! 🚀";
  }

  // Help requests
  if (q.match(/help|assist|support|need/i)) {
    return "🤗 I'm here to help! I love answering questions about:\n\n📊 Math & Numbers\n🔬 Science & Nature\n📚 Reading & Writing\n🌍 World & History\n💻 Technology\n🎨 Arts & Creativity\n😄 Fun Facts\n\nJust ask me anything! Try:\n• 'What is 15 × 4?'\n• 'How do plants grow?'\n• 'What is a volcano?'\n• 'Tell me about dinosaurs!'\n• 'Make me laugh!'\n\nWhat's on your mind? 🤔✨";
  }

  // Catch-all intelligent response
  return getIntelligentFallback(question);
};

const getMathTip = (operator: string): string => {
  const tips: { [key: string]: string } = {
    '+': 'Addition means combining numbers together!',
    '-': 'Subtraction means taking away from a number!',
    '*': 'Multiplication is like adding the same number multiple times!',
    '×': 'Multiplication is like adding the same number multiple times!',
    '/': 'Division means splitting a number into equal parts!',
    '÷': 'Division means splitting a number into equal parts!'
  };
  return tips[operator] || 'Math is everywhere in our daily lives!';
};

const getScienceResponse = (q: string): string => {
  if (q.match(/photosynthesis/i)) {
    return "🌱 Photosynthesis - How Plants Make Food!\n\n🌞 Sunlight + 💧 Water + 🌬️ CO₂ = 🍃 Food + 🌬️ Oxygen\n\nPlants are like nature's food factories! They take in sunlight through their leaves, water through their roots, and carbon dioxide from the air. Then they make their own food (glucose) and give us oxygen to breathe!\n\n🌍 Fun fact: Without photosynthesis, there would be no life on Earth!";
  }
  
  if (q.match(/dinosaur/i)) {
    return "🦕 Dinosaurs - Ancient Giants!\n\n🦴 Dinosaurs lived 230-66 million years ago\n🌍 They ruled the Earth for 165 million years\n🐦 Birds are actually modern dinosaurs!\n\n🔥 Cool facts:\n• T-Rex had teeth as big as bananas! 🍌\n• Some dinosaurs were as small as chickens\n• Diplodocus was longer than 3 school buses!\n• They came in all colors and patterns\n\nWhich dinosaur is your favorite? 🦖";
  }

  if (q.match(/space|planet|solar system|moon|sun|star/i)) {
    return "🌌 Space - The Final Frontier!\n\n☀️ Our Solar System:\n• Sun (our star)\n• 8 planets (Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune)\n• Moons, asteroids, and comets\n\n🌍 Earth facts:\n• Only planet with life (that we know of!)\n• 71% covered by water\n• Has one moon 🌙\n\n✨ Space is HUGE! The nearest star is 4.2 light-years away!\n\nWhat about space amazes you most? 🚀";
  }

  return "🔬 Science is amazing! I can explain:\n\n🌱 Biology (plants, animals, human body)\n⚗️ Chemistry (atoms, molecules, reactions)\n🌍 Physics (forces, energy, motion)\n🌌 Space (planets, stars, galaxies)\n🌿 Nature (weather, ecosystems, environment)\n\nWhat science topic interests you? Ask me something specific! 🧪✨";
};

const getEnglishResponse = (q: string): string => {
  if (q.match(/noun/i)) {
    return "📚 Nouns - The Naming Words!\n\n🏷️ Nouns name:\n👤 People (teacher, doctor, friend)\n🐕 Animals (dog, elephant, butterfly)\n🏠 Places (school, park, library)\n📱 Things (book, computer, bicycle)\n💭 Ideas (love, courage, happiness)\n\n📝 Types of nouns:\n• Common nouns (dog, city)\n• Proper nouns (Fluffy, New York)\n• Plural nouns (cats, books)\n\nExample: 'The brave student read an exciting book in the quiet library.'\nNouns: student, book, library\n\nCan you find the nouns in your favorite sentence? 🎯";
  }

  if (q.match(/verb/i)) {
    return "🏃 Verbs - The Action Words!\n\n⚡ Verbs show:\n🏃 Actions (run, jump, dance, sing)\n🤔 Thoughts (think, believe, imagine)\n❤️ Feelings (love, enjoy, hope)\n🔗 Being (is, are, was, were)\n\n⏰ Verb tenses:\n• Present: I play\n• Past: I played\n• Future: I will play\n\n📝 Example: 'Sarah quickly runs to catch the colorful butterfly.'\nVerb: runs\n\nVerbs make sentences come alive! What's your favorite action verb? 🎭";
  }

  return "✏️ English & Language Arts!\n\n📖 I can help with:\n🏷️ Parts of speech (nouns, verbs, adjectives)\n📝 Grammar rules\n✍️ Writing tips\n📚 Reading comprehension\n🎭 Creative writing\n📖 Story elements\n\nTry asking:\n• 'What is an adjective?'\n• 'How do I write a good story?'\n• 'What are synonyms?'\n• 'Help me with punctuation!'\n\nWhat writing adventure shall we start? 📝✨";
};

const getHistoryResponse = (q: string): string => {
  if (q.match(/ancient.*egypt|pyramid|pharaoh/i)) {
    return "🏺 Ancient Egypt - Land of Pharaohs!\n\n🔺 Amazing facts:\n• Built incredible pyramids that still stand today!\n• Pharaohs were kings and queens\n• Invented hieroglyphics (picture writing)\n• Mummified people to preserve them\n• Worshipped cats as sacred animals 🐱\n\n🌊 The Nile River was their lifeline\n📜 They invented paper from papyrus plants\n\nThe Great Pyramid is one of the Seven Wonders of the World! 🌟";
  }

  return "🏛️ History - Stories from the Past!\n\n📚 I can tell you about:\n🏺 Ancient civilizations (Egypt, Greece, Rome)\n🏰 Medieval times (knights, castles)\n🚢 Explorers and discoveries\n🇺🇸 American history\n🌍 World cultures and traditions\n\nHistory is full of amazing stories! What time period interests you? 🕰️✨";
};

const getGeographyResponse = (q: string): string => {
  if (q.match(/continent/i)) {
    return "🌍 The 7 Continents!\n\n1. 🌏 Asia (largest, has China & India)\n2. 🌍 Africa (has Egypt & lions!)\n3. 🌎 North America (USA, Canada, Mexico)\n4. 🌎 South America (Brazil, Amazon rainforest)\n5. 🌍 Europe (France, Italy, England)\n6. 🌏 Australia (kangaroos & koalas!)\n7. 🐧 Antarctica (penguins & ice!)\n\n🌊 They're separated by oceans!\nWhich continent would you like to visit? ✈️";
  }

  return "🗺️ Geography - Exploring Our World!\n\n🌍 I can teach you about:\n🏔️ Mountains and valleys\n🌊 Oceans and rivers\n🏙️ Countries and capitals\n🌡️ Weather and climate\n🌋 Volcanoes and earthquakes\n🏝️ Islands and deserts\n\nOur planet is amazing! What would you like to explore? 🧭✨";
};

const getTechResponse = (q: string): string => {
  if (q.match(/computer|how.*computer.*work/i)) {
    return "💻 Computers - Amazing Machines!\n\n🧠 Main parts:\n• CPU (brain) - thinks and calculates\n• Memory (RAM) - remembers things temporarily\n• Storage - saves files permanently\n• Screen - shows you information\n• Keyboard & mouse - how you talk to it\n\n⚡ Computers use electricity and binary code (0s and 1s) to work!\n\n🎮 They help us: learn, play games, talk to friends, create art, and solve problems!\n\nComputers are like super-fast calculators that can do millions of things! 🚀";
  }

  return "💻 Technology - The Digital World!\n\n🤖 I can explain:\n💻 How computers work\n📱 Smartphones and apps\n🌐 The internet\n🎮 Video games\n🤖 Robots and AI\n👨‍💻 Coding and programming\n\nTechnology helps us learn, create, and connect! What tech topic interests you? 🔧✨";
};

const getFunResponse = (q: string): string => {
  const jokes = [
    "Why did the math book look so sad? 📚😢\nBecause it was full of problems! 😄\n\nGet it? Math PROBLEMS! 🧮✨",
    
    "What do you call a dinosaur that crashes his car? 🦕🚗\nTyrannosaurus Wrecks! 😂\n\n(T-Rex + Wrecks = Tyrannosaurus Wrecks!) 🦖💥",
    
    "Why don't scientists trust atoms? ⚛️🤔\nBecause they make up everything! 😄\n\n(Atoms literally make up all matter!) 🔬✨",
    
    "What's a computer's favorite snack? 💻🍿\nMicrochips! 😂\n\n(Computer chips + potato chips!) 🤖🥔",
    
    "Why did the student eat his homework? 📚😋\nBecause the teacher said it was a piece of cake! 🍰😄\n\n(Easy as cake!) 🎂✨",
    
    "What do you call a sleeping bull? 🐂😴\nA bulldozer! 😂\n\n(Bull + dozer = bulldozer!) 🚜💤"
  ];
  
  const funFacts = [
    "🦒 Fun Fact: Giraffes only need 5-30 minutes of sleep per day! They sleep standing up and take short naps! 😴",
    
    "🐙 Fun Fact: Octopuses have 3 hearts and blue blood! Two hearts pump blood to their gills, and one pumps to the rest of their body! 💙",
    
    "🍯 Fun Fact: Honey never spoils! Archaeologists have found 3000-year-old honey that's still perfectly edible! 🏺",
    
    "🌈 Fun Fact: You can't see a full rainbow from the ground - only from an airplane! From the ground, you see a semicircle! ✈️",
    
    "🧠 Fun Fact: Your brain uses about 20% of your body's total energy, even though it's only 2% of your body weight! 💡"
  ];

  if (q.match(/joke/i)) {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    return `😄 Here's a Joke for You!\n\n${randomJoke}\n\nWant another joke or a fun fact? 🎉`;
  }

  if (q.match(/fun.*fact|interesting|cool/i)) {
    const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
    return `🤯 ${randomFact}\n\nIsn't that amazing? Want another fun fact or maybe a joke? 🌟`;
  }

  return "🎉 Let's have some fun!\n\n😄 I can share:\n🤣 Funny jokes\n🤯 Amazing fun facts\n🎮 Cool riddles\n🌟 Interesting trivia\n\nWhat sounds fun to you? 🎈✨";
};

const getPersonalResponse = (q: string): string => {
  if (q.match(/name/i)) {
    return "🤖 Hi! I'm EduBot, your friendly AI learning assistant! 🎓\n\nYou can call me:\n• EduBot 🤖\n• Teacher Bot 👨‍🏫\n• Learning Buddy 👫\n• Or whatever name you like! 😊\n\nI'm here to make learning fun and help you discover amazing things! What would you like to learn about today? 🌟";
  }

  if (q.match(/how.*old|age/i)) {
    return "🎂 Great question! As an AI, I don't have an age like humans do! 🤖\n\n⏰ I was created to help kids learn, so in a way, I'm:\n• Brand new every time we chat! ✨\n• As old as the knowledge I share 📚\n• Timeless like math and science! ♾️\n\nWhat matters most is that I'm here NOW to help YOU learn! What shall we explore together? 🚀";
  }

  return "🤖 About Me - EduBot!\n\n✨ I'm your AI learning companion!\n🎓 I love helping kids learn and discover\n🧠 I know about many subjects\n😊 I try to make learning fun with emojis and jokes\n🌟 My goal is to help you succeed!\n\n💡 I'm here whenever you need help with:\n📚 Homework, 🔬 Science questions, 🧮 Math problems, or just 😄 having fun while learning!\n\nWhat would you like to know about me? 🤔";
};

const getIntelligentFallback = (question: string): string => {
  // Analyze the question for keywords and provide intelligent responses
  const q = question.toLowerCase();
  
  // Check for question words to provide appropriate responses
  if (q.startsWith('what')) {
    return `🤔 That's a great "what" question! I love curiosity! 🌟\n\nI'd be happy to help explain things! Try asking me:\n• What is [specific topic]?\n• What happens when...?\n• What are the parts of...?\n\nFor example: "What is gravity?" or "What are the colors of the rainbow?"\n\nWhat specific topic would you like to learn about? 📚✨`;
  }
  
  if (q.startsWith('how')) {
    return `🛠️ Excellent "how" question! I love explaining processes! 🔧\n\nI can help you understand how things work! Try:\n• How does [something] work?\n• How do you [do something]?\n• How are [things] made?\n\nFor example: "How do airplanes fly?" or "How do you solve this math problem?"\n\nWhat process would you like me to explain? 🚀✨`;
  }
  
  if (q.startsWith('why')) {
    return `🤯 Amazing "why" question! I love explaining reasons! 💡\n\nWhy questions help us understand the world! Try asking:\n• Why does [something happen]?\n• Why is [something] important?\n• Why do [things behave a certain way]?\n\nFor example: "Why is the sky blue?" or "Why do we need to sleep?"\n\nWhat would you like to understand the "why" behind? 🌟✨`;
  }
  
  if (q.startsWith('when')) {
    return `⏰ Great "when" question! I love talking about time and history! 📅\n\nI can help with timing and historical events! Try:\n• When did [event] happen?\n• When do you [do something]?\n• When was [something] invented?\n\nFor example: "When did dinosaurs live?" or "When was the telephone invented?"\n\nWhat time-related topic interests you? 🕰️✨`;
  }
  
  if (q.startsWith('where')) {
    return `🗺️ Wonderful "where" question! I love geography and locations! 🌍\n\nI can help you explore places and locations! Try:\n• Where is [place]?\n• Where do [animals] live?\n• Where does [something] come from?\n\nFor example: "Where do penguins live?" or "Where is the Great Wall of China?"\n\nWhat location would you like to explore? 🧭✨`;
  }
  
  // Default intelligent response
  return `🌟 That's an interesting question! I want to help you learn! 🎓\n\nI'm really good at explaining:\n📊 Math & Numbers\n🔬 Science & Nature\n📚 Reading & Writing\n🌍 Geography & History\n💻 Technology\n😄 Fun Facts & Jokes\n\nCould you ask me something more specific? For example:\n• "What is photosynthesis?"\n• "How do you multiply fractions?"\n• "Why do leaves change color?"\n• "Tell me about dinosaurs!"\n\nWhat subject interests you most? 🤔✨`;
};