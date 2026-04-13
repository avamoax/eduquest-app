export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  category: string;
  level: number;
  age: number;
  subject: string;
  emoji: string;
  type: 'multiple-choice' | 'true-false';
  explanation?: string;
}

export const age8Questions: Question[] = [
  // HINDI QUIZ (50 Questions) - हिंदी प्रश्न
  // Level 1 - Basic Hindi (शब्द ज्ञान)
  { id: 1001, question: "'सूरज' का समानार्थी शब्द कौन-सा है?", options: ["चाँद", "रवि", "तारा", "दीप"], correctAnswer: 1, category: "शब्द ज्ञान", level: 1, age: 8, subject: "Hindi", emoji: "☀️", type: "multiple-choice", explanation: "रवि सूरज का समानार्थी शब्द है।" },
  { id: 1002, question: "'हम' शब्द किस वचन का उदाहरण है?", options: ["एकवचन", "बहुवचन", "द्विवचन", "कोई नहीं"], correctAnswer: 1, category: "व्याकरण", level: 1, age: 8, subject: "Hindi", emoji: "👥", type: "multiple-choice", explanation: "'हम' बहुवचन का उदाहरण है।" },
  { id: 1003, question: "भारत की राष्ट्रभाषा क्या है?", options: ["अंग्रेज़ी", "संस्कृत", "हिंदी", "उर्दू"], correctAnswer: 2, category: "सामान्य ज्ञान", level: 1, age: 8, subject: "Hindi", emoji: "🇮🇳", type: "multiple-choice", explanation: "हिंदी भारत की राष्ट्रभाषा है।" },
  { id: 1004, question: "'पुस्तक' का विपरीत अर्थ क्या है?", options: ["किताब", "पन्ना", "अज्ञान", "ज्ञान"], correctAnswer: 2, category: "शब्द ज्ञान", level: 1, age: 8, subject: "Hindi", emoji: "📚", type: "multiple-choice", explanation: "पुस्तक ज्ञान देती है, इसका विपरीत अज्ञान है।" },
  { id: 1005, question: "'मोर' क्या है?", options: ["पशु", "पक्षी", "फूल", "फल"], correctAnswer: 1, category: "सामान्य ज्ञान", level: 1, age: 8, subject: "Hindi", emoji: "🦚", type: "multiple-choice", explanation: "मोर एक सुंदर पक्षी है।" },
  
  // Level 2 - Word Meanings (शब्दार्थ)
  { id: 1006, question: "'ईमानदारी' का अर्थ क्या है?", options: ["चालाकी", "सच्चाई", "डर", "गुस्सा"], correctAnswer: 1, category: "शब्दार्थ", level: 2, age: 8, subject: "Hindi", emoji: "✨", type: "multiple-choice", explanation: "ईमानदारी का अर्थ सच्चाई है।" },
  { id: 1007, question: "'विद्यालय' शब्द का सही अर्थ क्या है?", options: ["घर", "खेल का मैदान", "पढ़ने की जगह", "बाज़ार"], correctAnswer: 2, category: "शब्दार्थ", level: 2, age: 8, subject: "Hindi", emoji: "🏫", type: "multiple-choice", explanation: "विद्यालय पढ़ने की जगह है।" },
  { id: 1008, question: "हिंदी वर्णमाला में कुल कितने स्वर होते हैं?", options: ["10", "11", "12", "13"], correctAnswer: 1, category: "व्याकरण", level: 2, age: 8, subject: "Hindi", emoji: "🔤", type: "multiple-choice", explanation: "हिंदी में 11 स्वर होते हैं।" },
  { id: 1009, question: "'राम स्कूल जाता है।' यह कौन-सा वाक्य है?", options: ["प्रश्नवाचक", "आज्ञावाचक", "विधानवाचक", "विस्मयवाचक"], correctAnswer: 2, category: "व्याकरण", level: 2, age: 8, subject: "Hindi", emoji: "📝", type: "multiple-choice", explanation: "यह विधानवाचक वाक्य है।" },
  { id: 1010, question: "'जल' का समानार्थी शब्द क्या है?", options: ["अग्नि", "वायु", "पानी", "धरती"], correctAnswer: 2, category: "शब्द ज्ञान", level: 2, age: 8, subject: "Hindi", emoji: "💧", type: "multiple-choice", explanation: "जल का समानार्थी शब्द पानी है।" },
  
  // Level 3 - Advanced Hindi (उन्नत हिंदी)
  { id: 1011, question: "'माता' का समानार्थी शब्द कौन-सा है?", options: ["पिता", "माँ", "बहन", "दादी"], correctAnswer: 1, category: "शब्द ज्ञान", level: 3, age: 8, subject: "Hindi", emoji: "👩", type: "multiple-choice", explanation: "माता का समानार्थी शब्द माँ है।" },
  { id: 1012, question: "'आकाश' का विलोम शब्द क्या है?", options: ["पाताल", "धरती", "समुद्र", "पहाड़"], correctAnswer: 0, category: "शब्द ज्ञान", level: 3, age: 8, subject: "Hindi", emoji: "🌌", type: "multiple-choice", explanation: "आकाश का विलोम पाताल है।" },
  { id: 1013, question: "'वह पढ़ता है।' में कौन-सा सर्वनाम है?", options: ["मैं", "तुम", "वह", "हम"], correctAnswer: 2, category: "व्याकरण", level: 3, age: 8, subject: "Hindi", emoji: "👤", type: "multiple-choice", explanation: "'वह' सर्वनाम है।" },
  { id: 1014, question: "'फूल' का बहुवचन क्या है?", options: ["फूलों", "फूल", "फूली", "फूले"], correctAnswer: 0, category: "व्याकरण", level: 3, age: 8, subject: "Hindi", emoji: "🌸", type: "multiple-choice", explanation: "फूल का बहुवचन फूलों है।" },
  { id: 1015, question: "'गुरु' का विलोम शब्द क्या है?", options: ["शिष्य", "अध्यापक", "विद्यार्थी", "छात्र"], correctAnswer: 0, category: "शब्द ज्ञान", level: 3, age: 8, subject: "Hindi", emoji: "👨‍🏫", type: "multiple-choice", explanation: "गुरु का विलोम शिष्य है।" },
  
  // More Hindi Questions - Level 1
  { id: 1016, question: "'गाय' क्या देती है?", options: ["अंडे", "दूध", "शहद", "ऊन"], correctAnswer: 1, category: "सामान्य ज्ञान", level: 1, age: 8, subject: "Hindi", emoji: "🐄", type: "multiple-choice", explanation: "गाय दूध देती है।" },
  { id: 1017, question: "'लाल' रंग का नाम है। यह क्या है?", options: ["संज्ञा", "सर्वनाम", "विशेषण", "क्रिया"], correctAnswer: 2, category: "व्याकरण", level: 1, age: 8, subject: "Hindi", emoji: "🔴", type: "multiple-choice", explanation: "लाल एक विशेषण है।" },
  { id: 1018, question: "'बच्चा' का स्त्रीलिंग क्या है?", options: ["बच्ची", "लड़की", "बेटी", "छोटी"], correctAnswer: 0, category: "व्याकरण", level: 1, age: 8, subject: "Hindi", emoji: "👶", type: "multiple-choice", explanation: "बच्चा का स्त्रीलिंग बच्ची है।" },
  { id: 1019, question: "'हाथी' कैसा जानवर है?", options: ["छोटा", "बड़ा", "तेज़", "धीमा"], correctAnswer: 1, category: "सामान्य ज्ञान", level: 1, age: 8, subject: "Hindi", emoji: "🐘", type: "multiple-choice", explanation: "हाथी एक बड़ा जानवर है।" },
  { id: 1020, question: "'आम' क्या है?", options: ["सब्जी", "फल", "फूल", "पेड़"], correctAnswer: 1, category: "सामान्य ज्ञान", level: 1, age: 8, subject: "Hindi", emoji: "🥭", type: "multiple-choice", explanation: "आम एक मीठा फल है।" },
  
  // More Hindi Questions - Level 2
  { id: 1021, question: "'मित्र' का समानार्थी शब्द क्या है?", options: ["शत्रु", "दोस्त", "पराया", "अजनबी"], correctAnswer: 1, category: "शब्द ज्ञान", level: 2, age: 8, subject: "Hindi", emoji: "👫", type: "multiple-choice", explanation: "मित्र का समानार्थी दोस्त है।" },
  { id: 1022, question: "'दिन' का विलोम क्या है?", options: ["सुबह", "शाम", "रात", "दोपहर"], correctAnswer: 2, category: "शब्द ज्ञान", level: 2, age: 8, subject: "Hindi", emoji: "🌙", type: "multiple-choice", explanation: "दिन का विलोम रात है।" },
  { id: 1023, question: "'पेड़' से क्या मिलता है?", options: ["दूध", "फल", "अंडे", "मांस"], correctAnswer: 1, category: "सामान्य ज्ञान", level: 2, age: 8, subject: "Hindi", emoji: "🌳", type: "multiple-choice", explanation: "पेड़ से फल मिलते हैं।" },
  { id: 1024, question: "'खुश' का विलोम क्या है?", options: ["प्रसन्न", "उदास", "हंसना", "खेलना"], correctAnswer: 1, category: "शब्द ज्ञान", level: 2, age: 8, subject: "Hindi", emoji: "😊", type: "multiple-choice", explanation: "खुश का विलोम उदास है।" },
  { id: 1025, question: "'तितली' क्या है?", options: ["पक्षी", "कीड़ा", "फूल", "पत्ता"], correctAnswer: 1, category: "सामान्य ज्ञान", level: 2, age: 8, subject: "Hindi", emoji: "🦋", type: "multiple-choice", explanation: "तितली एक सुंदर कीड़ा है।" },
  
  // More Hindi Questions - Level 3
  { id: 1026, question: "'सत्य' का विलोम क्या है?", options: ["झूठ", "सच", "ईमानदारी", "न्याय"], correctAnswer: 0, category: "शब्द ज्ञान", level: 3, age: 8, subject: "Hindi", emoji: "✅", type: "multiple-choice", explanation: "सत्य का विलोम झूठ है।" },
  { id: 1027, question: "'राजा' का स्त्रीलिंग क्या है?", options: ["रानी", "राजकुमारी", "महारानी", "राज्ञी"], correctAnswer: 0, category: "व्याकरण", level: 3, age: 8, subject: "Hindi", emoji: "👑", type: "multiple-choice", explanation: "राजा का स्त्रीलिंग रानी है।" },
  { id: 1028, question: "'वृक्ष' का समानार्थी शब्द क्या है?", options: ["फूल", "पत्ता", "पेड़", "जड़"], correctAnswer: 2, category: "शब्द ज्ञान", level: 3, age: 8, subject: "Hindi", emoji: "🌲", type: "multiple-choice", explanation: "वृक्ष का समानार्थी पेड़ है।" },
  { id: 1029, question: "'बालक' का स्त्रीलिंग क्या है?", options: ["बालिका", "लड़की", "बच्ची", "कन्या"], correctAnswer: 0, category: "व्याकरण", level: 3, age: 8, subject: "Hindi", emoji: "👧", type: "multiple-choice", explanation: "बालक का स्त्रीलिंग बालिका है।" },
  { id: 1030, question: "'अंधकार' का विलोम क्या है?", options: ["रोशनी", "प्रकाश", "उजाला", "सभी सही"], correctAnswer: 3, category: "शब्द ज्ञान", level: 3, age: 8, subject: "Hindi", emoji: "💡", type: "multiple-choice", explanation: "अंधकार के विलोम रोशनी, प्रकाश और उजाला सभी हैं।" },
  
  // Additional Hindi Questions for complete coverage
  { id: 1031, question: "'नदी' में क्या बहता है?", options: ["दूध", "पानी", "तेल", "शहद"], correctAnswer: 1, category: "सामान्य ज्ञान", level: 1, age: 8, subject: "Hindi", emoji: "🏞️", type: "multiple-choice", explanation: "नदी में पानी बहता है।" },
  { id: 1032, question: "'चंद्रमा' का समानार्थी क्या है?", options: ["सूरज", "चाँद", "तारा", "आकाश"], correctAnswer: 1, category: "शब्द ज्ञान", level: 2, age: 8, subject: "Hindi", emoji: "🌙", type: "multiple-choice", explanation: "चंद्रमा का समानार्थी चाँद है।" },
  { id: 1033, question: "'ऊँचा' का विलोम क्या है?", options: ["नीचा", "छोटा", "बड़ा", "लंबा"], correctAnswer: 0, category: "शब्द ज्ञान", level: 2, age: 8, subject: "Hindi", emoji: "⬆️", type: "multiple-choice", explanation: "ऊँचा का विलोम नीचा है।" },
  { id: 1034, question: "'मधुर' का अर्थ क्या है?", options: ["कड़वा", "मीठा", "खट्टा", "नमकीन"], correctAnswer: 1, category: "शब्दार्थ", level: 3, age: 8, subject: "Hindi", emoji: "🍯", type: "multiple-choice", explanation: "मधुर का अर्थ मीठा है।" },
  { id: 1035, question: "'पुत्र' का स्त्रीलिंग क्या है?", options: ["पुत्री", "बेटी", "लड़की", "सभी सही"], correctAnswer: 3, category: "व्याकरण", level: 3, age: 8, subject: "Hindi", emoji: "👨‍👩‍👧‍👦", type: "multiple-choice", explanation: "पुत्र के स्त्रीलिंग पुत्री, बेटी और लड़की सभी हैं।" },
  
  // Final set of Hindi questions
  { id: 1036, question: "'हरा' क्या है?", options: ["फल", "रंग", "पेड़", "पत्ता"], correctAnswer: 1, category: "सामान्य ज्ञान", level: 1, age: 8, subject: "Hindi", emoji: "🟢", type: "multiple-choice", explanation: "हरा एक रंग है।" },
  { id: 1037, question: "'बगीचा' में क्या होते हैं?", options: ["फूल", "पेड़", "पौधे", "सभी"], correctAnswer: 3, category: "सामान्य ज्ञान", level: 1, age: 8, subject: "Hindi", emoji: "🌺", type: "multiple-choice", explanation: "बगीचे में फूल, पेड़ और पौधे सभी होते हैं।" },
  { id: 1038, question: "'स्वच्छ' का विलोम क्या है?", options: ["साफ", "गंदा", "सुंदर", "अच्छा"], correctAnswer: 1, category: "शब्द ज्ञान", level: 2, age: 8, subject: "Hindi", emoji: "🧼", type: "multiple-choice", explanation: "स्वच्छ का विलोम गंदा है।" },
  { id: 1039, question: "'पक्षी' कैसे उड़ते हैं?", options: ["पैरों से", "पंखों से", "पूंछ से", "चोंच से"], correctAnswer: 1, category: "सामान्य ज्ञान", level: 2, age: 8, subject: "Hindi", emoji: "🕊️", type: "multiple-choice", explanation: "पक्षी पंखों से उड़ते हैं।" },
  { id: 1040, question: "'विनम्र' का अर्थ क्या है?", options: ["घमंडी", "नम्र", "गुस्सैल", "चालाक"], correctAnswer: 1, category: "शब्दार्थ", level: 3, age: 8, subject: "Hindi", emoji: "🙏", type: "multiple-choice", explanation: "विनम्र का अर्थ नम्र है।" },
  
  // MARATHI QUIZ (40 Questions) - मराठी प्रश्न
  // Level 1 - Basic Marathi (शब्द ज्ञान)
  { id: 1101, question: "'सूर्य'चा समानार्थी शब्द कोणता?", options: ["चंद्र", "रवि", "तारा", "दीप"], correctAnswer: 1, category: "शब्द ज्ञान", level: 1, age: 8, subject: "Marathi", emoji: "☀️", type: "multiple-choice", explanation: "रवि हा सूर्याचा समानार्थी शब्द आहे।" },
  { id: 1102, question: "'आम्ही' हा शब्द कोणत्या वचनात आहे?", options: ["एकवचन", "अनेकवचन", "द्विवचन", "कोणतेही नाही"], correctAnswer: 1, category: "व्याकरण", level: 1, age: 8, subject: "Marathi", emoji: "👥", type: "multiple-choice", explanation: "'आम्ही' हा अनेकवचनी शब्द आहे।" },
  { id: 1103, question: "भारताची राष्ट्रभाषा कोणती आहे?", options: ["इंग्रजी", "संस्कृत", "हिंदी", "मराठी"], correctAnswer: 2, category: "सामान्य ज्ञान", level: 1, age: 8, subject: "Marathi", emoji: "🇮🇳", type: "multiple-choice", explanation: "हिंदी ही भारताची राष्ट्रभाषा आहे।" },
  { id: 1104, question: "'ज्ञान'चा विरुद्धार्थी शब्द कोणता?", options: ["विद्या", "अभ्यास", "अज्ञान", "शहाणपण"], correctAnswer: 2, category: "शब्द ज्ञान", level: 1, age: 8, subject: "Marathi", emoji: "📚", type: "multiple-choice", explanation: "ज्ञानाचा विरुद्धार्थी शब्द अज्ञान आहे।" },
  { id: 1105, question: "'मोर' काय आहे?", options: ["प्राणी", "पक्षी", "फूल", "फळ"], correctAnswer: 1, category: "सामान्य ज्ञान", level: 1, age: 8, subject: "Marathi", emoji: "🦚", type: "multiple-choice", explanation: "मोर हा एक सुंदर पक्षी आहे।" },
  
  // Level 2 - Word Meanings (शब्दार्थ)
  { id: 1106, question: "'प्रामाणिकपणा' म्हणजे काय?", options: ["चलाखी", "सत्यता", "भीती", "राग"], correctAnswer: 1, category: "शब्दार्थ", level: 2, age: 8, subject: "Marathi", emoji: "✨", type: "multiple-choice", explanation: "प्रामाणिकपणा म्हणजे सत्यता।" },
  { id: 1107, question: "'शाळा' या शब्दाचा अर्थ काय?", options: ["घर", "बाजार", "शिक्षण घेण्याची जागा", "खेळाचे मैदान"], correctAnswer: 2, category: "शब्दार्थ", level: 2, age: 8, subject: "Marathi", emoji: "🏫", type: "multiple-choice", explanation: "शाळा म्हणजे शिक्षण घेण्याची जागा।" },
  { id: 1108, question: "मराठी वर्णमालेत किती स्वर आहेत?", options: ["10", "11", "12", "13"], correctAnswer: 1, category: "व्याकरण", level: 2, age: 8, subject: "Marathi", emoji: "🔤", type: "multiple-choice", explanation: "मराठी वर्णमालेत 11 स्वर आहेत।" },
  { id: 1109, question: "'राम शाळेत जातो.' हे कोणते वाक्य आहे?", options: ["प्रश्नार्थक", "आज्ञार्थक", "विधानार्थक", "उद्गारार्थक"], correctAnswer: 2, category: "व्याकरण", level: 2, age: 8, subject: "Marathi", emoji: "📝", type: "multiple-choice", explanation: "हे विधानार्थक वाक्य आहे।" },
  { id: 1110, question: "'पाणी'चा समानार्थी शब्द कोणता?", options: ["अग्नी", "वायु", "जल", "पृथ्वी"], correctAnswer: 2, category: "शब्द ज्ञान", level: 2, age: 8, subject: "Marathi", emoji: "💧", type: "multiple-choice", explanation: "जल हा पाण्याचा समानार्थी शब्द आहे।" },
  
  // Level 3 - Advanced Marathi (उन्नत मराठी)
  { id: 1111, question: "'आई'चा समानार्थी शब्द कोणता?", options: ["बाबा", "माता", "बहीण", "आजी"], correctAnswer: 1, category: "शब्द ज्ञान", level: 3, age: 8, subject: "Marathi", emoji: "👩", type: "multiple-choice", explanation: "माता हा आईचा समानार्थी शब्द आहे।" },
  { id: 1112, question: "'आकाश'चा विरुद्धार्थी शब्द कोणता?", options: ["पाताळ", "पृथ्वी", "समुद्र", "पर्वत"], correctAnswer: 0, category: "शब्द ज्ञान", level: 3, age: 8, subject: "Marathi", emoji: "🌌", type: "multiple-choice", explanation: "आकाशाचा विरुद्धार्थी शब्द पाताळ आहे।" },
  { id: 1113, question: "'तो वाचतो.' यात कोणता सर्वनाम आहे?", options: ["मी", "तू", "तो", "आम्ही"], correctAnswer: 2, category: "व्याकरण", level: 3, age: 8, subject: "Marathi", emoji: "👤", type: "multiple-choice", explanation: "'तो' हा सर्वनाम आहे।" },
  { id: 1114, question: "'फूल'चे अनेकवचन काय?", options: ["फुलांनी", "फुले", "फुलांचे", "फुलांना"], correctAnswer: 1, category: "व्याकरण", level: 3, age: 8, subject: "Marathi", emoji: "🌸", type: "multiple-choice", explanation: "फूलचे अनेकवचन फुले आहे।" },
  { id: 1115, question: "'गुरु'चा विरुद्धार्थी शब्द कोणता?", options: ["शिष्य", "शिक्षक", "विद्यार्थी", "छात्र"], correctAnswer: 0, category: "शब्द ज्ञान", level: 3, age: 8, subject: "Marathi", emoji: "👨‍🏫", type: "multiple-choice", explanation: "गुरुचा विरुद्धार्थी शब्द शिष्य आहे।" },
  
  // More Marathi Questions - Level 1
  { id: 1116, question: "'गाय' काय देते?", options: ["अंडी", "दूध", "मध", "लोकर"], correctAnswer: 1, category: "सामान्य ज्ञान", level: 1, age: 8, subject: "Marathi", emoji: "🐄", type: "multiple-choice", explanation: "गाय दूध देते।" },
  { id: 1117, question: "'लाल' हा रंगाचा नाव आहे. हे काय आहे?", options: ["नाम", "सर्वनाम", "विशेषण", "क्रियापद"], correctAnswer: 2, category: "व्याकरण", level: 1, age: 8, subject: "Marathi", emoji: "🔴", type: "multiple-choice", explanation: "लाल हे एक विशेषण आहे।" },
  { id: 1118, question: "'मुलगा'चे स्त्रीलिंग काय?", options: ["मुलगी", "बाळ", "मुलं", "लहान"], correctAnswer: 0, category: "व्याकरण", level: 1, age: 8, subject: "Marathi", emoji: "👶", type: "multiple-choice", explanation: "मुलगाचे स्त्रीलिंग मुलगी आहे।" },
  { id: 1119, question: "'हत्ती' कसा प्राणी आहे?", options: ["लहान", "मोठा", "वेगवान", "मंद"], correctAnswer: 1, category: "सामान्य ज्ञान", level: 1, age: 8, subject: "Marathi", emoji: "🐘", type: "multiple-choice", explanation: "हत्ती हा एक मोठा प्राणी आहे।" },
  { id: 1120, question: "'आंबा' काय आहे?", options: ["भाजी", "फळ", "फूल", "झाड"], correctAnswer: 1, category: "सामान्य ज्ञान", level: 1, age: 8, subject: "Marathi", emoji: "🥭", type: "multiple-choice", explanation: "आंबा हे एक गोड फळ आहे।" },
  
  // More Marathi Questions - Level 2
  { id: 1121, question: "'मित्र'चा समानार्थी शब्द कोणता?", options: ["शत्रू", "दोस्त", "परका", "अनोळखी"], correctAnswer: 1, category: "शब्द ज्ञान", level: 2, age: 8, subject: "Marathi", emoji: "👫", type: "multiple-choice", explanation: "मित्राचा समानार्थी शब्द दोस्त आहे।" },
  { id: 1122, question: "'दिवस'चा विरुद्धार्थी शब्द कोणता?", options: ["सकाळ", "संध्याकाळ", "रात्र", "दुपार"], correctAnswer: 2, category: "शब्द ज्ञान", level: 2, age: 8, subject: "Marathi", emoji: "🌙", type: "multiple-choice", explanation: "दिवसाचा विरुद्धार्थी शब्द रात्र आहे।" },
  { id: 1123, question: "'झाड'पासून काय मिळते?", options: ["दूध", "फळे", "अंडी", "मांस"], correctAnswer: 1, category: "सामान्य ज्ञान", level: 2, age: 8, subject: "Marathi", emoji: "🌳", type: "multiple-choice", explanation: "झाडापासून फळे मिळतात।" },
  { id: 1124, question: "'आनंदी'चा विरुद्धार्थी शब्द कोणता?", options: ["प्रसन्न", "दुःखी", "हसणे", "खेळणे"], correctAnswer: 1, category: "शब्द ज्ञान", level: 2, age: 8, subject: "Marathi", emoji: "😊", type: "multiple-choice", explanation: "आनंदीचा विरुद्धार्थी शब्द दुःखी आहे।" },
  { id: 1125, question: "'फुलपाखरू' काय आहे?", options: ["पक्षी", "कीड", "फूल", "पान"], correctAnswer: 1, category: "सामान्य ज्ञान", level: 2, age: 8, subject: "Marathi", emoji: "🦋", type: "multiple-choice", explanation: "फुलपाखरू हा एक सुंदर कीड आहे।" },
  
  // More Marathi Questions - Level 3
  { id: 1126, question: "'सत्य'चा विरुद्धार्थी शब्द कोणता?", options: ["खोटे", "खरे", "प्रामाणिकपणा", "न्याय"], correctAnswer: 0, category: "शब्द ज्ञान", level: 3, age: 8, subject: "Marathi", emoji: "✅", type: "multiple-choice", explanation: "सत्याचा विरुद्धार्थी शब्द खोटे आहे।" },
  { id: 1127, question: "'राजा'चे स्त्रीलिंग काय?", options: ["राणी", "राजकुमारी", "महाराणी", "राज्ञी"], correctAnswer: 0, category: "व्याकरण", level: 3, age: 8, subject: "Marathi", emoji: "👑", type: "multiple-choice", explanation: "राजाचे स्त्रीलिंग राणी आहे।" },
  { id: 1128, question: "'वृक्ष'चा समानार्थी शब्द कोणता?", options: ["फूल", "पान", "झाड", "मूळ"], correctAnswer: 2, category: "शब्द ज्ञान", level: 3, age: 8, subject: "Marathi", emoji: "🌲", type: "multiple-choice", explanation: "वृक्षाचा समानार्थी शब्द झाड आहे।" },
  { id: 1129, question: "'मुलगा'चे स्त्रीलिंग काय?", options: ["मुलगी", "बाळकडू", "लहान", "कन्या"], correctAnswer: 0, category: "व्याकरण", level: 3, age: 8, subject: "Marathi", emoji: "👧", type: "multiple-choice", explanation: "मुलगाचे स्त्रीलिंग मुलगी आहे।" },
  { id: 1130, question: "'अंधार'चा विरुद्धार्थी शब्द कोणता?", options: ["प्रकाश", "उजेड", "दिवा", "सर्व बरोबर"], correctAnswer: 3, category: "शब्द ज्ञान", level: 3, age: 8, subject: "Marathi", emoji: "💡", type: "multiple-choice", explanation: "अंधाराचे विरुद्धार्थी शब्द प्रकाश, उजेड आणि दिवा सर्व आहेत।" },
  
  // Additional Marathi Questions for complete coverage
  { id: 1131, question: "'नदी'त काय वाहते?", options: ["दूध", "पाणी", "तेल", "मध"], correctAnswer: 1, category: "सामान्य ज्ञान", level: 1, age: 8, subject: "Marathi", emoji: "🏞️", type: "multiple-choice", explanation: "नदीत पाणी वाहते।" },
  { id: 1132, question: "'चंद्र'चा समानार्थी शब्द कोणता?", options: ["सूर्य", "चांद", "तारा", "आकाश"], correctAnswer: 1, category: "शब्द ज्ञान", level: 2, age: 8, subject: "Marathi", emoji: "🌙", type: "multiple-choice", explanation: "चंद्राचा समानार्थी शब्द चांद आहे।" },
  { id: 1133, question: "'उंच'चा विरुद्धार्थी शब्द कोणता?", options: ["खाली", "लहान", "मोठा", "लांब"], correctAnswer: 0, category: "शब्द ज्ञान", level: 2, age: 8, subject: "Marathi", emoji: "⬆️", type: "multiple-choice", explanation: "उंचचा विरुद्धार्थी शब्द खाली आहे।" },
  { id: 1134, question: "'गोड'चा अर्थ काय?", options: ["कडू", "मिठाई", "आंबट", "तिखट"], correctAnswer: 1, category: "शब्दार्थ", level: 3, age: 8, subject: "Marathi", emoji: "🍯", type: "multiple-choice", explanation: "गोडचा अर्थ मिठाई आहे।" },
  { id: 1135, question: "'मुलगा'चे स्त्रीलिंग काय?", options: ["मुलगी", "बाळ", "लहान", "सर्व बरोबर"], correctAnswer: 0, category: "व्याकरण", level: 3, age: 8, subject: "Marathi", emoji: "👨‍👩‍👧‍👦", type: "multiple-choice", explanation: "मुलगाचे स्त्रीलिंग मुलगी आहे।" },
  
  // Final set of Marathi questions
  { id: 1136, question: "'हिरवा' काय आहे?", options: ["फळ", "रंग", "झाड", "पान"], correctAnswer: 1, category: "सामान्य ज्ञान", level: 1, age: 8, subject: "Marathi", emoji: "🟢", type: "multiple-choice", explanation: "हिरवा हा एक रंग आहे।" },
  { id: 1137, question: "'बाग'मध्ये काय असते?", options: ["फुले", "झाडे", "रोपे", "सर्व"], correctAnswer: 3, category: "सामान्य ज्ञान", level: 1, age: 8, subject: "Marathi", emoji: "🌺", type: "multiple-choice", explanation: "बागेत फुले, झाडे आणि रोपे सर्व असतात।" },
  { id: 1138, question: "'स्वच्छ'चा विरुद्धार्थी शब्द कोणता?", options: ["साफ", "घाण", "सुंदर", "चांगला"], correctAnswer: 1, category: "शब्द ज्ञान", level: 2, age: 8, subject: "Marathi", emoji: "🧼", type: "multiple-choice", explanation: "स्वच्छचा विरुद्धार्थी शब्द घाण आहे।" },
  { id: 1139, question: "'पक्षी' कसे उडतात?", options: ["पायांनी", "पंखांनी", "शेपटीने", "चोचीने"], correctAnswer: 1, category: "सामान्य ज्ञान", level: 2, age: 8, subject: "Marathi", emoji: "🕊️", type: "multiple-choice", explanation: "पक्षी पंखांनी उडतात।" },
  { id: 1140, question: "'नम्र'चा अर्थ काय?", options: ["गर्विष्ठ", "विनम्र", "रागावलेला", "हुशार"], correctAnswer: 1, category: "शब्दार्थ", level: 3, age: 8, subject: "Marathi", emoji: "🙏", type: "multiple-choice", explanation: "नम्रचा अर्थ विनम्र आहे।" },
  
  // ENGLISH GRAMMAR QUIZ (25 Questions)
  { id: 2001, question: "Pick the noun: dog, run, happy, quickly", options: ["dog", "run", "happy", "quickly"], correctAnswer: 0, category: "Grammar", level: 1, age: 8, subject: "English", emoji: "✏️", type: "multiple-choice" },
  { id: 2002, question: "Choose the verb:", options: ["jump", "tall", "happy", "slow"], correctAnswer: 0, category: "Grammar", level: 1, age: 8, subject: "English", emoji: "🏃", type: "multiple-choice" },
  { id: 2003, question: "Choose the adjective: colorful, run, they, quickly", options: ["colorful", "run", "they", "quickly"], correctAnswer: 0, category: "Grammar", level: 1, age: 8, subject: "English", emoji: "🎨", type: "multiple-choice" },
  { id: 2004, question: "Select the pronoun: dog, run, happy, they", options: ["dog", "run", "happy", "they"], correctAnswer: 3, category: "Grammar", level: 1, age: 8, subject: "English", emoji: "👥", type: "multiple-choice" },
  { id: 2005, question: "Fill the article: ___ apple", options: ["a", "an", "the", "some"], correctAnswer: 1, category: "Grammar", level: 1, age: 8, subject: "English", emoji: "🍎", type: "multiple-choice" },
  { id: 2006, question: "Choose the correct preposition: The cat is ___ the table.", options: ["on", "under", "in", "at"], correctAnswer: 1, category: "Grammar", level: 1, age: 8, subject: "English", emoji: "🐱", type: "multiple-choice" },
  { id: 2007, question: "Select the conjunction:", options: ["and", "very", "run", "her"], correctAnswer: 0, category: "Grammar", level: 1, age: 8, subject: "English", emoji: "🔗", type: "multiple-choice" },
  { id: 2008, question: "Pick the adverb:", options: ["quickly", "boy", "ball", "tall"], correctAnswer: 0, category: "Grammar", level: 1, age: 8, subject: "English", emoji: "⚡", type: "multiple-choice" },
  
  { id: 2009, question: "Correct tense: She ___ to school.", options: ["go", "goes", "going", "went"], correctAnswer: 1, category: "Grammar", level: 2, age: 8, subject: "English", emoji: "🏫", type: "multiple-choice" },
  { id: 2010, question: "Which is a sentence?", options: ["Blue sky", "The sky is blue.", "Sky blue", "Blue"], correctAnswer: 1, category: "Grammar", level: 2, age: 8, subject: "English", emoji: "📝", type: "multiple-choice" },
  { id: 11, question: "Choose plural:", options: ["books", "book", "booking", "booked"], correctAnswer: 0, category: "Grammar", level: 2, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 12, question: "Opposite gender: king → ___", options: ["prince", "queen", "princess", "duke"], correctAnswer: 1, category: "Grammar", level: 2, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 13, question: "Identify the proper noun:", options: ["city", "India", "country", "place"], correctAnswer: 1, category: "Grammar", level: 2, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 14, question: "Choose the collective noun: a ___ of birds", options: ["group", "flock", "team", "bunch"], correctAnswer: 1, category: "Grammar", level: 2, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 15, question: "Which needs a capital letter?", options: ["monday", "Monday", "MONDAY", "MoNdAy"], correctAnswer: 1, category: "Grammar", level: 2, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 16, question: "Choose correct punctuation: What is your name", options: [".", "?", "!", ","], correctAnswer: 1, category: "Grammar", level: 2, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  
  { id: 17, question: "Subject in the sentence: Riya plays cricket.", options: ["Riya", "plays", "cricket", "plays cricket"], correctAnswer: 0, category: "Grammar", level: 3, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 18, question: "Predicate in the sentence: Riya plays cricket.", options: ["Riya", "plays", "cricket", "plays cricket"], correctAnswer: 3, category: "Grammar", level: 3, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 19, question: "Choose the correct order:", options: ["I am happy.", "am happy I.", "happy I am.", "am I happy."], correctAnswer: 0, category: "Grammar", level: 3, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 20, question: "Fill the blank: I ___ my homework.", options: ["do", "doing", "does", "did"], correctAnswer: 0, category: "Grammar", level: 3, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 21, question: "Identify the verb: The birds fly.", options: ["The", "birds", "fly", "The birds"], correctAnswer: 2, category: "Grammar", level: 3, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 22, question: "Identify the adjective: The tall man ran.", options: ["The", "tall", "man", "ran"], correctAnswer: 1, category: "Grammar", level: 3, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 23, question: "Choose possessive pronoun:", options: ["mine", "run", "happy", "the"], correctAnswer: 0, category: "Grammar", level: 3, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 24, question: "Fill in: We ___ friends.", options: ["is", "are", "am", "be"], correctAnswer: 1, category: "Grammar", level: 3, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 25, question: "Proper punctuation: Stop", options: ["Stop", "Stop.", "Stop!", "Stop?"], correctAnswer: 2, category: "Grammar", level: 3, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },

  // READING COMPREHENSION (25 Questions)
  { id: 26, question: "Mia planted a small seed in a pot. She watered it every day. After a week, a tiny green leaf came out. What did Mia plant?", options: ["a flower", "a small seed", "a tree", "a leaf"], correctAnswer: 1, category: "Reading", level: 1, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 27, question: "Where did she plant it?", options: ["in the garden", "in a pot", "in the ground", "in water"], correctAnswer: 1, category: "Reading", level: 1, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 28, question: "What did she do every day?", options: ["played with it", "watered it", "looked at it", "sang to it"], correctAnswer: 1, category: "Reading", level: 1, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 29, question: "What came out after a week?", options: ["a flower", "a tiny green leaf", "a fruit", "nothing"], correctAnswer: 1, category: "Reading", level: 1, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 30, question: "Who planted the seed?", options: ["Tom", "Mia", "Lily", "Maya"], correctAnswer: 1, category: "Reading", level: 1, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 31, question: "Tom saw a rainbow after the rain. He counted seven colors in it. What did Tom see?", options: ["rain", "a rainbow", "clouds", "sun"], correctAnswer: 1, category: "Reading", level: 1, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 32, question: "When did he see it?", options: ["before the rain", "after the rain", "during the rain", "at night"], correctAnswer: 1, category: "Reading", level: 1, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 33, question: "How many colors did he count?", options: ["five", "six", "seven", "eight"], correctAnswer: 2, category: "Reading", level: 1, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  
  { id: 34, question: "The dog barked loudly. What is the dog doing?", options: ["sleeping", "barking", "running", "eating"], correctAnswer: 1, category: "Reading", level: 2, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 35, question: "Rina ate a mango. What did Rina eat?", options: ["an apple", "a mango", "a banana", "an orange"], correctAnswer: 1, category: "Reading", level: 2, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 36, question: "The sun set behind the hills. Where did the sun set?", options: ["in the ocean", "behind the hills", "in the sky", "behind clouds"], correctAnswer: 1, category: "Reading", level: 2, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 37, question: "Choose the main idea: The boy built a sandcastle at the beach.", options: ["boy at beach", "boy making sandcastle", "beach is fun", "sand is soft"], correctAnswer: 1, category: "Reading", level: 2, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 38, question: "What is a character?", options: ["a place", "a person/animal in a story", "a time", "an event"], correctAnswer: 1, category: "Reading", level: 2, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 39, question: "What is the setting?", options: ["main character", "place/time of story", "the problem", "the ending"], correctAnswer: 1, category: "Reading", level: 2, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 40, question: "Who is the main character? Lily found a lost kitten.", options: ["kitten", "Lily", "someone", "nobody"], correctAnswer: 1, category: "Reading", level: 2, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 41, question: "What did Lily find?", options: ["a puppy", "a lost kitten", "a bird", "a toy"], correctAnswer: 1, category: "Reading", level: 2, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  
  { id: 42, question: "He carried an umbrella. The sky was dark. Why?", options: ["It's sunny", "It might rain", "He likes umbrellas", "It's windy"], correctAnswer: 1, category: "Reading", level: 3, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 43, question: "What is happening? The bird is building a nest.", options: ["flying", "building a nest", "eating", "singing"], correctAnswer: 1, category: "Reading", level: 3, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 44, question: "What comes next? He woke up, brushed his teeth, and...", options: ["went to sleep", "ate breakfast", "went to bed", "closed eyes"], correctAnswer: 1, category: "Reading", level: 3, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 45, question: "True or False: The fish flew in the sky.", options: ["True", "False"], correctAnswer: 1, category: "Reading", level: 3, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 46, question: "Who said this? 'I love ice cream,' said Maya.", options: ["Tom", "Lily", "Maya", "Mia"], correctAnswer: 2, category: "Reading", level: 3, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 47, question: "What is the problem? The ball fell into the pond.", options: ["ball is lost", "ball is stuck in pond", "ball is broken", "no problem"], correctAnswer: 1, category: "Reading", level: 3, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 48, question: "What is the solution?", options: ["buy new ball", "someone gets it out", "leave it", "cry"], correctAnswer: 1, category: "Reading", level: 3, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 49, question: "Why did the boy run? He was late for school.", options: ["for exercise", "because he was late", "for fun", "to play"], correctAnswer: 1, category: "Reading", level: 3, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 50, question: "What happened first? He opened the book and started reading.", options: ["started reading", "opened the book", "closed book", "finished reading"], correctAnswer: 1, category: "Reading", level: 3, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },

  // VOCABULARY QUIZ (25 Questions)
  { id: 51, question: "Opposite of early:", options: ["late", "soon", "now", "fast"], correctAnswer: 0, category: "Vocabulary", level: 1, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 52, question: "Synonym of happy:", options: ["sad", "joyful", "angry", "tired"], correctAnswer: 1, category: "Vocabulary", level: 1, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 53, question: "Homophone of night:", options: ["knight", "kite", "light", "right"], correctAnswer: 0, category: "Vocabulary", level: 1, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 54, question: "Choose the correct word: I ___ a book.", options: ["read", "red", "reed", "rid"], correctAnswer: 0, category: "Vocabulary", level: 1, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 55, question: "Opposite of full:", options: ["empty", "complete", "whole", "filled"], correctAnswer: 0, category: "Vocabulary", level: 1, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 56, question: "Rhyming word with 'ball':", options: ["tall", "bell", "bowl", "bull"], correctAnswer: 0, category: "Vocabulary", level: 1, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 57, question: "Which word means 'very big'?", options: ["tiny", "huge", "small", "little"], correctAnswer: 1, category: "Vocabulary", level: 1, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 58, question: "Prefix of rewrite:", options: ["re-", "-write", "rew-", "-rite"], correctAnswer: 0, category: "Vocabulary", level: 1, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  
  { id: 59, question: "Choose the correct spelling:", options: ["skool", "school", "scool", "skhool"], correctAnswer: 1, category: "Vocabulary", level: 2, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 60, question: "Suffix of helpful:", options: ["-help", "-ful", "help-", "-ul"], correctAnswer: 1, category: "Vocabulary", level: 2, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 61, question: "Which is a feeling word?", options: ["table", "scared", "book", "chair"], correctAnswer: 1, category: "Vocabulary", level: 2, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 62, question: "Opposite of clean:", options: ["neat", "tidy", "dirty", "fresh"], correctAnswer: 2, category: "Vocabulary", level: 2, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 63, question: "Synonym of begin:", options: ["end", "start", "finish", "stop"], correctAnswer: 1, category: "Vocabulary", level: 2, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 64, question: "Which word is a place?", options: ["happy", "run", "garden", "quickly"], correctAnswer: 2, category: "Vocabulary", level: 2, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 65, question: "Which is a sound word?", options: ["quiet", "bang", "silent", "soft"], correctAnswer: 1, category: "Vocabulary", level: 2, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 66, question: "Opposite of soft:", options: ["gentle", "smooth", "hard", "weak"], correctAnswer: 2, category: "Vocabulary", level: 2, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  
  { id: 67, question: "Fill in: The rabbit is very ___.", options: ["slow", "fast", "lazy", "tired"], correctAnswer: 1, category: "Vocabulary", level: 3, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 68, question: "Choose the correct word: That is ___ toy.", options: ["your", "you're", "yore", "you"], correctAnswer: 0, category: "Vocabulary", level: 3, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 69, question: "Rhyming word with 'cake':", options: ["back", "bake", "cook", "cut"], correctAnswer: 1, category: "Vocabulary", level: 3, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 70, question: "Word for baby cat:", options: ["puppy", "cub", "kitten", "chick"], correctAnswer: 2, category: "Vocabulary", level: 3, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 71, question: "Which is a compound word?", options: ["happy", "backpack", "running", "jumped"], correctAnswer: 1, category: "Vocabulary", level: 3, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 72, question: "Select action word:", options: ["blue", "climb", "soft", "happy"], correctAnswer: 1, category: "Vocabulary", level: 3, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 73, question: "Opposite of above:", options: ["up", "high", "below", "top"], correctAnswer: 2, category: "Vocabulary", level: 3, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 74, question: "Meaning of 'strong':", options: ["weak", "very powerful", "small", "quiet"], correctAnswer: 1, category: "Vocabulary", level: 3, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 75, question: "Choose the correct answer: The sky is ___.", options: ["blue", "run", "happy", "jump"], correctAnswer: 0, category: "Vocabulary", level: 3, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },

  // WRITING SKILLS QUIZ (25 Questions)
  { id: 76, question: "Choose the proper beginning:", options: ["The end.", "It was a sunny morning...", "Goodbye.", "That's all."], correctAnswer: 1, category: "Writing", level: 1, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 77, question: "Fix the sentence: he is my friend", options: ["he is my friend", "He is my friend.", "HE IS MY FRIEND", "he Is My Friend"], correctAnswer: 1, category: "Writing", level: 1, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 78, question: "Add a describing word: The ___ cat slept.", options: ["fat", "run", "quickly", "is"], correctAnswer: 0, category: "Writing", level: 1, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 79, question: "Choose correct punctuation: Please help me", options: ["Please help me", "Please help me.", "Please help me!", "Please help me?"], correctAnswer: 1, category: "Writing", level: 1, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 80, question: "What comes at the end of a question?", options: [".", "?", "!", ","], correctAnswer: 1, category: "Writing", level: 1, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 81, question: "Choose the best sentence:", options: ["Bird pretty", "The bird is pretty.", "Pretty bird", "Bird is"], correctAnswer: 1, category: "Writing", level: 1, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 82, question: "Which is a story ending?", options: ["Once upon a time", "And that is how we found our way home.", "First,", "Next,"], correctAnswer: 1, category: "Writing", level: 1, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 83, question: "Replace with a pronoun: Arun likes pizza. ___ eats it often.", options: ["She", "He", "They", "It"], correctAnswer: 1, category: "Writing", level: 1, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  
  { id: 84, question: "Correct tense: She ___ a letter.", options: ["write", "writes", "writing", "wrote"], correctAnswer: 1, category: "Writing", level: 2, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 85, question: "Which sentence is more detailed?", options: ["The boy ran.", "The young boy ran quickly down the street."], correctAnswer: 1, category: "Writing", level: 2, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 86, question: "Add a comma: Yes I can", options: ["Yes I can", "Yes, I can", "Yes I, can", "Yes I can,"], correctAnswer: 1, category: "Writing", level: 2, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 87, question: "Choose the best title: Story about a magical tree", options: ["Tree", "The Magical Tree", "A Story", "Trees"], correctAnswer: 1, category: "Writing", level: 2, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 88, question: "Fix capitalization: My mom And i went to the park.", options: ["My mom And i went to the park.", "My mom and I went to the park.", "my mom and i went to the park.", "MY MOM AND I WENT TO THE PARK."], correctAnswer: 1, category: "Writing", level: 2, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 89, question: "Choose the correct order:", options: ["Played I game a", "I played a game.", "Game a played I", "A game I played"], correctAnswer: 1, category: "Writing", level: 2, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 90, question: "Add connecting word: I was tired ___ I slept.", options: ["but", "so", "or", "because"], correctAnswer: 1, category: "Writing", level: 2, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 91, question: "Choose the dialogue sentence:", options: ["She said hello", '"Can you help me?" asked Tina.', "He was happy", "They went home"], correctAnswer: 1, category: "Writing", level: 2, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  
  { id: 92, question: "Best picture description starter:", options: ["The end", "In the picture, I can see...", "Goodbye", "That's all"], correctAnswer: 1, category: "Writing", level: 3, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 93, question: "Fill with adjective: The ___ cake looked tasty.", options: ["big", "run", "quickly", "is"], correctAnswer: 0, category: "Writing", level: 3, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 94, question: "Rewrite in past tense: I walk home.", options: ["I walks home.", "I walked home.", "I walking home.", "I will walk home."], correctAnswer: 1, category: "Writing", level: 3, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 95, question: "Choose better description:", options: ["The dog is cute.", "The fluffy white dog wagged its tail happily."], correctAnswer: 1, category: "Writing", level: 3, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 96, question: "Add punctuation: Wow that is amazing", options: ["Wow that is amazing", "Wow, that is amazing!", "Wow that is amazing.", "Wow! that is amazing"], correctAnswer: 1, category: "Writing", level: 3, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 97, question: "Which is a sentence starter?", options: ["The end", "First", "Goodbye", "Stop"], correctAnswer: 1, category: "Writing", level: 3, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 98, question: "Which is a complete sentence?", options: ["My pet rabbit", "My pet rabbit hops around.", "Hops around", "My pet"], correctAnswer: 1, category: "Writing", level: 3, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 99, question: "Join the sentences: The sun is bright. It is warm.", options: ["The sun is bright it is warm.", "The sun is bright and warm.", "Bright sun warm.", "Sun bright warm."], correctAnswer: 1, category: "Writing", level: 3, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
  { id: 100, question: "Fix the sentence: today is my birthday", options: ["today is my birthday", "Today is my birthday.", "TODAY IS MY BIRTHDAY", "today Is My Birthday"], correctAnswer: 1, category: "Writing", level: 3, age: 8, subject: "English", emoji: "??", type: "multiple-choice" },
];

export const getQuestionsByCategory = (category: string, age: number, level: number): Question[] => {
  // Get questions for this category and age
  const categoryQuestions = age8Questions.filter(q => q.category === category && q.age === age);
  
  // Map new level (1-5) to old level system
  let oldLevel: number;
  if (level <= 2) oldLevel = 1;
  else if (level <= 4) oldLevel = 2;
  else oldLevel = 3;
  
  // Get questions for the old level
  const levelQuestions = categoryQuestions.filter(q => q.level === oldLevel);
  
  // Calculate which 5 questions to return for this specific level
  const questionsPerLevel = 5;
  const startIndex = ((level - 1) % 2) * questionsPerLevel;
  
  return levelQuestions.slice(startIndex, startIndex + questionsPerLevel);
};

export const getHindiQuestions = (category: string, age: number, level: number): Question[] => {
  // Get Hindi questions for this category and age
  const hindiQuestions = age8Questions.filter(q => 
    q.subject === "Hindi" && 
    q.category === category && 
    q.age === age && 
    q.level === level
  );
  
  // Return up to 5 questions for the level
  return hindiQuestions.slice(0, 5);
};

export const getQuizQuestions = (category: string, age: number, level: number, count: number = 5): Question[] => {
  const questions = getQuestionsByCategory(category, age, level);
  // Return up to count questions (default 5)
  return questions.slice(0, count);
};

