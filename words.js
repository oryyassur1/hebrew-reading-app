/**
 * Word bank for Hebrew reading quiz — 120 words.
 * - speech: the text sent to Google TTS for correct pronunciation
 * - word: punctuated Hebrew shown to the child
 * - emoji: fallback if image fails to load
 * - Each distractor swaps at least 1 actual consonant letter (not just nikud)
 * - Images from Wikimedia Commons (stable, permanent URLs)
 */
const WORD_BANK = [
    // ═══════════════════════════════
    // ANIMALS (20)
    // ═══════════════════════════════
    {
        word: "כֶּלֶב",
        speech: "כלב",
        emoji: "🐕",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/YellowLabradorLooking_new.jpg/320px-YellowLabradorLooking_new.jpg",
        distractors: ["כֶּלֶף", "כֶּרֶב", "כֶּלֶד"]
    },
    {
        word: "חָתוּל",
        speech: "חתול",
        emoji: "🐈",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/320px-Cat_November_2010-1a.jpg",
        distractors: ["חָתוּר", "חָטוּל", "חָנוּל"]
    },
    {
        word: "דָּג",
        speech: "דג",
        emoji: "🐟",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Georgia_Aquarium_-_Giant_Grouper_edit.jpg/320px-Georgia_Aquarium_-_Giant_Grouper_edit.jpg",
        distractors: ["דָּק", "דָּר", "דָּב"]
    },
    {
        word: "צִפּוֹר",
        speech: "ציפור",
        emoji: "🐦",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Eopsaltria_australis_-_Mogo_Campground.jpg/320px-Eopsaltria_australis_-_Mogo_Campground.jpg",
        distractors: ["צִפּוֹן", "צִמּוֹר", "צִפּוֹל"]
    },
    {
        word: "פָּרָה",
        speech: "פרה",
        emoji: "🐄",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Cow_female_black_white.jpg/320px-Cow_female_black_white.jpg",
        distractors: ["פָּרָע", "פָּלָה", "פָּרָד"]
    },
    {
        word: "סוּס",
        speech: "סוס",
        emoji: "🐴",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Nokota_Horses_croance_North_Dakota.jpg/320px-Nokota_Horses_croance_North_Dakota.jpg",
        distractors: ["סוּד", "סוּף", "סוּר"]
    },
    {
        word: "אַרְיֵה",
        speech: "אריה",
        emoji: "🦁",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/320px-Lion_waiting_in_Namibia.jpg",
        distractors: ["אַרְנֵה", "אַרְיֵע", "אַרְיֵד"]
    },
    {
        word: "פִּיל",
        speech: "פיל",
        emoji: "🐘",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/African_Bush_Elephant.jpg/320px-African_Bush_Elephant.jpg",
        distractors: ["פִּיר", "פִּיד", "פִּיז"]
    },
    {
        word: "נָחָשׁ",
        speech: "נחש",
        emoji: "🐍",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Anaconda_jaune_34.jpg/320px-Anaconda_jaune_34.jpg",
        distractors: ["נָחָם", "נָכָשׁ", "נָחָד"]
    },
    {
        word: "דֹּב",
        speech: "דוב",
        emoji: "🐻",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/2010-kodiak-bear-1.jpg/320px-2010-kodiak-bear-1.jpg",
        distractors: ["דֹּר", "דֹּן", "דֹּל"]
    },
    {
        word: "פַּרְפַּר",
        speech: "פרפר",
        emoji: "🦋",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Butterfly_emerridge_mexico.jpg/320px-Butterfly_emerridge_mexico.jpg",
        distractors: ["פַּרְכַּר", "פַּרְפַּז", "פַּרְפַּד"]
    },
    {
        word: "צָב",
        speech: "צב",
        emoji: "🐢",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Florida_Box_Turtle_Digon3_re-edited.jpg/320px-Florida_Box_Turtle_Digon3_re-edited.jpg",
        distractors: ["צָד", "צָר", "צָן"]
    },
    {
        word: "תַּרְנְגוֹלֶת",
        speech: "תרנגולת",
        emoji: "🐔",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Female_pair.jpg/320px-Female_pair.jpg",
        distractors: ["תַּרְנְגוֹלֶד", "תַּרְנְכוֹלֶת", "תַּרְמְגוֹלֶת"]
    },
    {
        word: "עַכָּבִישׁ",
        speech: "עכביש",
        emoji: "🕷️",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Arachnid_spider001.jpg/320px-Arachnid_spider001.jpg",
        distractors: ["עַכָּבִים", "עַכָּבִיד", "עַכָּמִישׁ"]
    },
    {
        word: "זֶבְרָה",
        speech: "זברה",
        emoji: "🦓",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Zebra_running_Ngorongoro.jpg/320px-Zebra_running_Ngorongoro.jpg",
        distractors: ["זֶבְרָע", "זֶבְלָה", "זֶכְרָה"]
    },
    {
        word: "קוֹף",
        speech: "קוף",
        emoji: "🐒",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Bonnet_macaque_%28Macaca_radiata%29_Photograph_By_Shantanu_Kuveskar.jpg/320px-Bonnet_macaque_%28Macaca_radiata%29_Photograph_By_Shantanu_Kuveskar.jpg",
        distractors: ["קוֹד", "קוֹר", "קוֹן"]
    },
    {
        word: "גָּמָל",
        speech: "גמל",
        emoji: "🐫",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/07._Camel_Profile%2C_near_Silverton%2C_NSW%2C_07.07.2007.jpg/320px-07._Camel_Profile%2C_near_Silverton%2C_NSW%2C_07.07.2007.jpg",
        distractors: ["גָּמָר", "גָּכָל", "גָּמָד"]
    },
    {
        word: "דְּבוֹרָה",
        speech: "דבורה",
        emoji: "🐝",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/European_honey_bee_extracts_nectar.jpg/320px-European_honey_bee_extracts_nectar.jpg",
        distractors: ["דְּבוֹרָע", "דְּבוֹלָה", "דְּכוֹרָה"]
    },
    {
        word: "חִלָּזוֹן",
        speech: "חילזון",
        emoji: "🐌",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Grapevinesnail_01.jpg/320px-Grapevinesnail_01.jpg",
        distractors: ["חִלָּזוֹר", "חִלָּכוֹן", "חִרָּזוֹן"]
    },
    {
        word: "יוֹנָה",
        speech: "יונה",
        emoji: "🕊️",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Pigeon_portrait_4861.jpg/320px-Pigeon_portrait_4861.jpg",
        distractors: ["יוֹנָע", "יוֹלָה", "יוֹנָד"]
    },

    // ═══════════════════════════════
    // FOOD & DRINK (20)
    // ═══════════════════════════════
    {
        word: "תַּפּוּחַ",
        speech: "תפוח",
        emoji: "🍎",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/320px-Red_Apple.jpg",
        distractors: ["תַּפּוּכַ", "טַפּוּחַ", "תַּכּוּחַ"]
    },
    {
        word: "בָּנָנָה",
        speech: "בננה",
        emoji: "🍌",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/320px-Banana-Single.jpg",
        distractors: ["בָּנָנָע", "בָּנָלָה", "בָּמָנָה"]
    },
    {
        word: "עוּגָה",
        speech: "עוגה",
        emoji: "🎂",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Birthday_cake_%2814178984627%29.jpg/320px-Birthday_cake_%2814178984627%29.jpg",
        distractors: ["עוּגָע", "עוּכָה", "עוּגָד"]
    },
    {
        word: "לֶחֶם",
        speech: "לחם",
        emoji: "🍞",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Fresh_made_bread_05.jpg/320px-Fresh_made_bread_05.jpg",
        distractors: ["לֶחֶן", "לֶכֶם", "לֶחֶר"]
    },
    {
        word: "גְּלִידָה",
        speech: "גלידה",
        emoji: "🍦",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Ice_cream_with_whipped_cream%2C_chocolate_sauce_and_a_wafer.jpg/320px-Ice_cream_with_whipped_cream%2C_chocolate_sauce_and_a_wafer.jpg",
        distractors: ["גְּלִידָע", "גְּלִירָה", "גְּכִידָה"]
    },
    {
        word: "עֲנָבִים",
        speech: "ענבים",
        emoji: "🍇",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Table_grapes_on_vine.jpg/320px-Table_grapes_on_vine.jpg",
        distractors: ["עֲנָבִיד", "עֲנָכִים", "עֲמָבִים"]
    },
    {
        word: "תּוּת",
        speech: "תות",
        emoji: "🍓",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/PerfectStrawberry.jpg/320px-PerfectStrawberry.jpg",
        distractors: ["תּוּד", "תּוּר", "תּוּף"]
    },
    {
        word: "גָּזָר",
        speech: "גזר",
        emoji: "🥕",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Carrot.jpg/320px-Carrot.jpg",
        distractors: ["גָּזָן", "גָּזָל", "גָּכָר"]
    },
    {
        word: "אֲבַטִּיחַ",
        speech: "אבטיח",
        emoji: "🍉",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Taiwan_2009_Tainan_City_Fruit_Arrow_Watermelon_FRD_7962.jpg/320px-Taiwan_2009_Tainan_City_Fruit_Arrow_Watermelon_FRD_7962.jpg",
        distractors: ["אֲבַטִּיכַ", "אֲכַטִּיחַ", "אֲבַטִּידַ"]
    },
    {
        word: "בֵּיצָה",
        speech: "ביצה",
        emoji: "🥚",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/White_chicken_egg.jpg/320px-White_chicken_egg.jpg",
        distractors: ["בֵּיצָע", "בֵּיסָה", "בֵּיצָד"]
    },
    {
        word: "חָלָב",
        speech: "חלב",
        emoji: "🥛",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Milk_glass.jpg/320px-Milk_glass.jpg",
        distractors: ["חָלָד", "חָרָב", "חָלָן"]
    },
    {
        word: "מַיִם",
        speech: "מים",
        emoji: "💧",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Water_drop_001.jpg/320px-Water_drop_001.jpg",
        distractors: ["מַיִד", "מַכִם", "מַיִר"]
    },
    {
        word: "עוּגִיָּה",
        speech: "עוגייה",
        emoji: "🍪",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/2ChocolateChipCookies.jpg/320px-2ChocolateChipCookies.jpg",
        distractors: ["עוּגִיָּע", "עוּכִיָּה", "עוּגִיָּד"]
    },
    {
        word: "פִּיצָה",
        speech: "פיצה",
        emoji: "🍕",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/320px-Eq_it-na_pizza-margherita_sep2005_sml.jpg",
        distractors: ["פִּיצָע", "פִּיסָה", "פִּיצָד"]
    },
    {
        word: "תַּפּוּז",
        speech: "תפוז",
        emoji: "🍊",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Orange-Fruit-Pieces.jpg/320px-Orange-Fruit-Pieces.jpg",
        distractors: ["תַּפּוּד", "תַּכּוּז", "תַּפּוּר"]
    },
    {
        word: "לִימוֹן",
        speech: "לימון",
        emoji: "🍋",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Lemon.jpg/320px-Lemon.jpg",
        distractors: ["לִימוֹד", "לִיכוֹן", "לִימוֹר"]
    },
    {
        word: "דְּבַשׁ",
        speech: "דבש",
        emoji: "🍯",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Runny_hunridge.jpg/320px-Runny_hunridge.jpg",
        distractors: ["דְּבַם", "דְּכַשׁ", "דְּבַר"]
    },
    {
        word: "שׁוֹקוֹלָד",
        speech: "שוקולד",
        emoji: "🍫",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Chocolate_%28blue_background%29.jpg/320px-Chocolate_%28blue_background%29.jpg",
        distractors: ["שׁוֹקוֹלָר", "שׁוֹקוֹכָד", "שׁוֹכוֹלָד"]
    },
    {
        word: "אוֹרֶז",
        speech: "אורז",
        emoji: "🍚",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/White_rice_%28Oryza_sativa%29.jpg/320px-White_rice_%28Oryza_sativa%29.jpg",
        distractors: ["אוֹרֶד", "אוֹלֶז", "אוֹרֶן"]
    },
    {
        word: "אֲגָס",
        speech: "אגס",
        emoji: "🍐",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Pears.jpg/320px-Pears.jpg",
        distractors: ["אֲגָד", "אֲכָס", "אֲגָר"]
    },

    // ═══════════════════════════════
    // HOUSEHOLD / OBJECTS (20)
    // ═══════════════════════════════
    {
        word: "בַּיִת",
        speech: "בית",
        emoji: "🏠",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Wooden_house_in_Chiang_Mai.jpg/320px-Wooden_house_in_Chiang_Mai.jpg",
        distractors: ["בַּיִד", "כַּיִת", "בַּיִר"]
    },
    {
        word: "כִּסֵּא",
        speech: "כיסא",
        emoji: "🪑",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Wooden_chair_01.jpg/320px-Wooden_chair_01.jpg",
        distractors: ["כִּסֵּע", "כִּמֵּא", "כִּסֵּד"]
    },
    {
        word: "שֻׁלְחָן",
        speech: "שולחן",
        emoji: "🪵",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Kitchen_table.jpg/320px-Kitchen_table.jpg",
        distractors: ["שֻׁלְחָר", "שֻׁלְכָן", "שֻׁרְחָן"]
    },
    {
        word: "סֵפֶר",
        speech: "ספר",
        emoji: "📖",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Jielbeaumadier_livre_ouvert_2012.jpg/320px-Jielbeaumadier_livre_ouvert_2012.jpg",
        distractors: ["סֵפֶל", "סֵכֶר", "סֵפֶן"]
    },
    {
        word: "מִטָּה",
        speech: "מיטה",
        emoji: "🛏️",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Bett.jpg/320px-Bett.jpg",
        distractors: ["מִטָּע", "מִכָּה", "מִטָּד"]
    },
    {
        word: "דֶּלֶת",
        speech: "דלת",
        emoji: "🚪",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Doorway_in_Dupnitsa.jpg/320px-Doorway_in_Dupnitsa.jpg",
        distractors: ["דֶּלֶד", "דֶּרֶת", "דֶּלֶף"]
    },
    {
        word: "חַלּוֹן",
        speech: "חלון",
        emoji: "🪟",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Window_in_Joensuu.jpg/320px-Window_in_Joensuu.jpg",
        distractors: ["חַלּוֹר", "חַכּוֹן", "חַלּוֹם"]
    },
    {
        word: "מַפְתֵּחַ",
        speech: "מפתח",
        emoji: "🔑",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Keychain.jpg/320px-Keychain.jpg",
        distractors: ["מַפְתֵּכַ", "מַכְתֵּחַ", "מַפְתֵּעַ"]
    },
    {
        word: "טֶלֶפוֹן",
        speech: "טלפון",
        emoji: "📱",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/IPhone_X_vector.svg/320px-IPhone_X_vector.svg.png",
        distractors: ["טֶלֶפוֹר", "טֶלֶכוֹן", "טֶרֶפוֹן"]
    },
    {
        word: "מַחְשֵׁב",
        speech: "מחשב",
        emoji: "💻",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Acer_Aspire_8920_Gemstone.jpg/320px-Acer_Aspire_8920_Gemstone.jpg",
        distractors: ["מַחְשֵׁד", "מַחְמֵב", "מַכְשֵׁב"]
    },
    {
        word: "מִטְרִיָּה",
        speech: "מטרייה",
        emoji: "☂️",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Regenschirm.jpg/320px-Regenschirm.jpg",
        distractors: ["מִטְרִיָּע", "מִטְלִיָּה", "מִכְרִיָּה"]
    },
    {
        word: "שָׁעוֹן",
        speech: "שעון",
        emoji: "⏰",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_mechanical_pocket_watch%2C_tic_toc_%28Unsplash%29.jpg/320px-Good_mechanical_pocket_watch%2C_tic_toc_%28Unsplash%29.jpg",
        distractors: ["שָׁעוֹר", "שָׁכוֹן", "שָׁעוֹד"]
    },
    {
        word: "כַּדּוּר",
        speech: "כדור",
        emoji: "⚽",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Football_Pallo_valridge.jpg/320px-Football_Pallo_valridge.jpg",
        distractors: ["כַּדּוּד", "כַּרּוּר", "כַּדּוּן"]
    },
    {
        word: "בֻּבָּה",
        speech: "בובה",
        emoji: "🧸",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Russian_Dolls.jpg/320px-Russian_Dolls.jpg",
        distractors: ["בֻּבָּע", "בֻּכָּה", "בֻּבָּד"]
    },
    {
        word: "נֵר",
        speech: "נר",
        emoji: "🕯️",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Candle_of_hope.jpg/320px-Candle_of_hope.jpg",
        distractors: ["נֵד", "נֵל", "נֵם"]
    },
    {
        word: "מִסְפָּרַיִם",
        speech: "מספריים",
        emoji: "✂️",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Ciseaux.jpg/320px-Ciseaux.jpg",
        distractors: ["מִסְפָּרַיִד", "מִסְכָּרַיִם", "מִסְפָּלַיִם"]
    },
    {
        word: "מִבְרֶשֶׁת",
        speech: "מברשת",
        emoji: "🪥",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Plastic_tuft_toothbrush.jpg/320px-Plastic_tuft_toothbrush.jpg",
        distractors: ["מִבְרֶשֶׁד", "מִכְרֶשֶׁת", "מִבְלֶשֶׁת"]
    },
    {
        word: "מִשְׁקָפַיִם",
        speech: "משקפיים",
        emoji: "👓",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Glasses_800_edit.png/320px-Glasses_800_edit.png",
        distractors: ["מִשְׁקָפַיִד", "מִשְׁכָפַיִם", "מִשְׁקָלַיִם"]
    },
    {
        word: "תִּיק",
        speech: "תיק",
        emoji: "🎒",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Typical_schoolbag.jpg/320px-Typical_schoolbag.jpg",
        distractors: ["תִּיר", "תִּיד", "תִּין"]
    },
    {
        word: "עִפָּרוֹן",
        speech: "עיפרון",
        emoji: "✏️",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Pencils_hb.jpg/320px-Pencils_hb.jpg",
        distractors: ["עִפָּרוֹד", "עִכָּרוֹן", "עִפָּלוֹן"]
    },

    // ═══════════════════════════════
    // VEHICLES & TRANSPORTATION (15)
    // ═══════════════════════════════
    {
        word: "מְכוֹנִית",
        speech: "מכונית",
        emoji: "🚗",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/2019_Toyota_Corolla_Hybrid_1.8.jpg/320px-2019_Toyota_Corolla_Hybrid_1.8.jpg",
        distractors: ["מְכוֹנִיד", "מְכוֹלִית", "מְחוֹנִית"]
    },
    {
        word: "אוֹטוֹבּוּס",
        speech: "אוטובוס",
        emoji: "🚌",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/MAN_A23_NG313.jpg/320px-MAN_A23_NG313.jpg",
        distractors: ["אוֹטוֹבּוּד", "אוֹטוֹכּוּס", "אוֹלוֹבּוּס"]
    },
    {
        word: "אוֹפַנַּיִם",
        speech: "אופניים",
        emoji: "🚲",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Left_side_of_Flying_Pigeon.jpg/320px-Left_side_of_Flying_Pigeon.jpg",
        distractors: ["אוֹפַנַּיִר", "אוֹפַמַּיִם", "אוֹכַנַּיִם"]
    },
    {
        word: "מָטוֹס",
        speech: "מטוס",
        emoji: "✈️",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/A380_Paris_Air_Show.jpg/320px-A380_Paris_Air_Show.jpg",
        distractors: ["מָטוֹד", "מָכוֹס", "מָטוֹן"]
    },
    {
        word: "רַכֶּבֶת",
        speech: "רכבת",
        emoji: "🚆",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/TGV-Rame4530.jpg/320px-TGV-Rame4530.jpg",
        distractors: ["רַכֶּבֶד", "רַכֶּכֶת", "לַכֶּבֶת"]
    },
    {
        word: "סִירָה",
        speech: "סירה",
        emoji: "⛵",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Alassio_gozzi.jpg/320px-Alassio_gozzi.jpg",
        distractors: ["סִירָע", "סִילָה", "מִירָה"]
    },
    {
        word: "מַשָּׂאִית",
        speech: "משאית",
        emoji: "🚛",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/DAF_XF_105_Space_Cab.jpg/320px-DAF_XF_105_Space_Cab.jpg",
        distractors: ["מַשָּׂאִיד", "מַשָּׂאִיר", "מַכָּאִית"]
    },
    {
        word: "אֳנִיָּה",
        speech: "אונייה",
        emoji: "🚢",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/RMS_Queen_Mary_2_in_Trondheim_2007.jpg/320px-RMS_Queen_Mary_2_in_Trondheim_2007.jpg",
        distractors: ["אֳנִיָּע", "אֳנִיָּד", "אֳלִיָּה"]
    },
    {
        word: "מַסּוֹק",
        speech: "מסוק",
        emoji: "🚁",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/KoalaBear_Helicopter.jpg/320px-KoalaBear_Helicopter.jpg",
        distractors: ["מַסּוֹר", "מַסּוֹד", "מַכּוֹק"]
    },
    {
        word: "טְרַקְטוֹר",
        speech: "טרקטור",
        emoji: "🚜",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/John_Deere_4020_with_loader.jpg/320px-John_Deere_4020_with_loader.jpg",
        distractors: ["טְרַקְטוֹד", "טְלַקְטוֹר", "טְרַקְכוֹר"]
    },
    {
        word: "קוֹרְקִינֶט",
        speech: "קורקינט",
        emoji: "🛴",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Kick_scooter_Micro.jpg/320px-Kick_scooter_Micro.jpg",
        distractors: ["קוֹרְקִינֶד", "קוֹרְכִינֶט", "קוֹלְקִינֶט"]
    },
    {
        word: "אַמְבּוּלַנְס",
        speech: "אמבולנס",
        emoji: "🚑",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Ambulance-j.jpg/320px-Ambulance-j.jpg",
        distractors: ["אַמְבּוּלַנְד", "אַמְכּוּלַנְס", "אַמְבּוּרַנְס"]
    },
    {
        word: "רָקֶטָה",
        speech: "רקטה",
        emoji: "🚀",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Saturn_V.jpg/320px-Saturn_V.jpg",
        distractors: ["רָקֶטָע", "רָכֶטָה", "רָקֶלָה"]
    },
    {
        word: "מוֹנִית",
        speech: "מונית",
        emoji: "🚕",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/NYC_Taxi_Ford_Crown_Victoria.jpg/320px-NYC_Taxi_Ford_Crown_Victoria.jpg",
        distractors: ["מוֹנִיד", "מוֹלִית", "מוֹנִיר"]
    },
    {
        word: "כַּבָּאִית",
        speech: "כבאית",
        emoji: "🚒",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/2006_International_Workstar_fire_truck.jpg/320px-2006_International_Workstar_fire_truck.jpg",
        distractors: ["כַּבָּאִיד", "כַּכָּאִית", "כַּבָּאִיר"]
    },

    // ═══════════════════════════════
    // NATURE & WEATHER (15)
    // ═══════════════════════════════
    {
        word: "שֶׁמֶשׁ",
        speech: "שמש",
        emoji: "☀️",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg/320px-The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg",
        distractors: ["שֶׁמֶד", "שֶׁנֶשׁ", "שֶׁמֶר"]
    },
    {
        word: "יָרֵחַ",
        speech: "ירח",
        emoji: "🌙",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/320px-FullMoon2010.jpg",
        distractors: ["יָרֵכַ", "יָלֵחַ", "יָרֵעַ"]
    },
    {
        word: "כּוֹכָב",
        speech: "כוכב",
        emoji: "⭐",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Gold_Star.svg/320px-Gold_Star.svg.png",
        distractors: ["כּוֹכָד", "כּוֹכָר", "חוֹכָב"]
    },
    {
        word: "עֵץ",
        speech: "עץ",
        emoji: "🌳",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg/320px-Ash_Tree_-_geograph.org.uk_-_590710.jpg",
        distractors: ["עֵד", "עֵן", "עֵר"]
    },
    {
        word: "פֶּרַח",
        speech: "פרח",
        emoji: "🌻",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Sunflower_from_Silesia.jpg/320px-Sunflower_from_Silesia.jpg",
        distractors: ["פֶּרַע", "פֶּלַח", "פֶּרַד"]
    },
    {
        word: "גֶּשֶׁם",
        speech: "גשם",
        emoji: "🌧️",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Rain_on_a_window.jpg/320px-Rain_on_a_window.jpg",
        distractors: ["גֶּשֶׁר", "גֶּשֶׁן", "גֶּכֶם"]
    },
    {
        word: "עָנָן",
        speech: "ענן",
        emoji: "☁️",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cumulus_clouds_in_fair_weather.jpeg/320px-Cumulus_clouds_in_fair_weather.jpeg",
        distractors: ["עָנָר", "עָמָן", "עָנָד"]
    },
    {
        word: "הַר",
        speech: "הר",
        emoji: "⛰️",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg/320px-Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg",
        distractors: ["הַד", "הַן", "הַל"]
    },
    {
        word: "נָהָר",
        speech: "נהר",
        emoji: "🏞️",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Neckar_T%C3%BCbingen_in_December_2013.jpg/320px-Neckar_T%C3%BCbingen_in_December_2013.jpg",
        distractors: ["נָהָד", "נָכָר", "נָהָל"]
    },
    {
        word: "שֶׁלֶג",
        speech: "שלג",
        emoji: "❄️",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Falling_Snow_-_stuck.jpg/320px-Falling_Snow_-_stuck.jpg",
        distractors: ["שֶׁלֶד", "שֶׁרֶג", "שֶׁלֶן"]
    },
    {
        word: "קֶשֶׁת",
        speech: "קשת בענן",
        emoji: "🌈",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Double-alaskan-rainbow.jpg/320px-Double-alaskan-rainbow.jpg",
        distractors: ["קֶשֶׁד", "קֶמֶת", "קֶשֶׁר"]
    },
    {
        word: "חוֹל",
        speech: "חול",
        emoji: "🏖️",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Mojave_desert_sand.jpg/320px-Mojave_desert_sand.jpg",
        distractors: ["חוֹר", "חוֹד", "כוֹל"]
    },
    {
        word: "אֶבֶן",
        speech: "אבן",
        emoji: "🪨",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Beach_pebble_at_Asilomar_State_Beach.jpg/320px-Beach_pebble_at_Asilomar_State_Beach.jpg",
        distractors: ["אֶבֶד", "אֶכֶן", "אֶבֶר"]
    },
    {
        word: "עָלֶה",
        speech: "עלה",
        emoji: "🍃",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Acer_platanoides_leaf.jpg/320px-Acer_platanoides_leaf.jpg",
        distractors: ["עָלֶע", "עָרֶה", "עָלֶד"]
    },
    {
        word: "יָם",
        speech: "ים",
        emoji: "🌊",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Waves_in_pacifica_1.jpg/320px-Waves_in_pacifica_1.jpg",
        distractors: ["יָד", "יָר", "יָן"]
    },

    // ═══════════════════════════════
    // BODY PARTS (10)
    // ═══════════════════════════════
    {
        word: "יָד",
        speech: "יד",
        emoji: "🤚",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Rechte_Hand.jpg/320px-Rechte_Hand.jpg",
        distractors: ["יָר", "יָן", "יָב"]
    },
    {
        word: "רֶגֶל",
        speech: "רגל",
        emoji: "🦶",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Male_Right_Foot_1.jpg/320px-Male_Right_Foot_1.jpg",
        distractors: ["רֶגֶר", "רֶכֶל", "לֶגֶל"]
    },
    {
        word: "עַיִן",
        speech: "עין",
        emoji: "👁️",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Eye_Iris.jpg/320px-Eye_Iris.jpg",
        distractors: ["עַיִר", "עַיִד", "עַכִן"]
    },
    {
        word: "אֹזֶן",
        speech: "אוזן",
        emoji: "👂",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Ear.jpg/320px-Ear.jpg",
        distractors: ["אֹזֶר", "אֹזֶד", "אֹכֶן"]
    },
    {
        word: "אַף",
        speech: "אף",
        emoji: "👃",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Neus1.jpg/320px-Neus1.jpg",
        distractors: ["אַד", "אַר", "אַן"]
    },
    {
        word: "פֶּה",
        speech: "פה",
        emoji: "👄",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Bouche.svg/320px-Bouche.svg.png",
        distractors: ["פֶּד", "פֶּר", "פֶּן"]
    },
    {
        word: "רֹאשׁ",
        speech: "ראש",
        emoji: "🗣️",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Head_Silhouette.svg/320px-Head_Silhouette.svg.png",
        distractors: ["רֹאם", "רֹאד", "לֹאשׁ"]
    },
    {
        word: "בֶּטֶן",
        speech: "בטן",
        emoji: "🤰",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Belly_button.jpg/320px-Belly_button.jpg",
        distractors: ["בֶּטֶר", "בֶּכֶן", "בֶּטֶד"]
    },
    {
        word: "שֵׁן",
        speech: "שן",
        emoji: "🦷",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Tooth_icon.png/320px-Tooth_icon.png",
        distractors: ["שֵׁד", "שֵׁר", "מֵן"]
    },
    {
        word: "אֶצְבַּע",
        speech: "אצבע",
        emoji: "☝️",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Fingerprint_picture.jpg/320px-Fingerprint_picture.jpg",
        distractors: ["אֶצְבַּר", "אֶצְכַּע", "אֶצְבַּד"]
    },

    // ═══════════════════════════════
    // CLOTHING (10)
    // ═══════════════════════════════
    {
        word: "חֻלְצָה",
        speech: "חולצה",
        emoji: "👕",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Orange_shirt.jpg/320px-Orange_shirt.jpg",
        distractors: ["חֻלְצָע", "חֻלְסָה", "חֻרְצָה"]
    },
    {
        word: "מִכְנָסַיִם",
        speech: "מכנסיים",
        emoji: "👖",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Camouflage_trousers.jpg/320px-Camouflage_trousers.jpg",
        distractors: ["מִכְנָסַיִד", "מִכְלָסַיִם", "מִרְנָסַיִם"]
    },
    {
        word: "נַעֲלַיִם",
        speech: "נעליים",
        emoji: "👟",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Red_High_Heel_Pumps.jpg/320px-Red_High_Heel_Pumps.jpg",
        distractors: ["נַעֲלַיִד", "נַעֲרַיִם", "נַכֲלַיִם"]
    },
    {
        word: "כּוֹבַע",
        speech: "כובע",
        emoji: "🎩",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Straw_hat_3.jpg/320px-Straw_hat_3.jpg",
        distractors: ["כּוֹבַר", "כּוֹכַע", "כּוֹבַד"]
    },
    {
        word: "גַּרְבַּיִם",
        speech: "גרביים",
        emoji: "🧦",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Stripey_socks.JPG/320px-Stripey_socks.JPG",
        distractors: ["גַּרְבַּיִד", "גַּרְכַּיִם", "גַּלְבַּיִם"]
    },
    {
        word: "שִׂמְלָה",
        speech: "שמלה",
        emoji: "👗",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Dresses_for_Summer.jpg/320px-Dresses_for_Summer.jpg",
        distractors: ["שִׂמְלָע", "שִׂמְרָה", "שִׂכְלָה"]
    },
    {
        word: "מְעִיל",
        speech: "מעיל",
        emoji: "🧥",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/JacketAndTrousers.jpg/320px-JacketAndTrousers.jpg",
        distractors: ["מְעִיר", "מְעִיד", "מְכִיל"]
    },
    {
        word: "צָעִיף",
        speech: "צעיף",
        emoji: "🧣",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Scarf.jpg/320px-Scarf.jpg",
        distractors: ["צָעִיד", "צָעִיר", "צָכִיף"]
    },
    {
        word: "חֲגוֹרָה",
        speech: "חגורה",
        emoji: "👔",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Belt-clothing.jpg/320px-Belt-clothing.jpg",
        distractors: ["חֲגוֹרָע", "חֲגוֹלָה", "חֲכוֹרָה"]
    },
    {
        word: "כְּפָפוֹת",
        speech: "כפפות",
        emoji: "🧤",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Fingerhandschuh.jpg/320px-Fingerhandschuh.jpg",
        distractors: ["כְּפָפוֹד", "כְּפָכוֹת", "כְּלָפוֹת"]
    },

    // ═══════════════════════════════
    // SCHOOL & PLAY (10)
    // ═══════════════════════════════
    {
        word: "לֵב",
        speech: "לב",
        emoji: "❤️",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/320px-Heart_coraz%C3%B3n.svg.png",
        distractors: ["לֵד", "לֵר", "לֵן"]
    },
    {
        word: "עִגּוּל",
        speech: "עיגול",
        emoji: "🔵",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Circle_-_black_simple.svg/320px-Circle_-_black_simple.svg.png",
        distractors: ["עִגּוּר", "עִכּוּל", "עִגּוּד"]
    },
    {
        word: "רִבּוּעַ",
        speech: "ריבוע",
        emoji: "🟧",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Square_-_black_simple.svg/320px-Square_-_black_simple.svg.png",
        distractors: ["רִבּוּנַ", "רִכּוּעַ", "רִבּוּדַ"]
    },
    {
        word: "מְשֻׁלָּשׁ",
        speech: "משולש",
        emoji: "🔺",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Regular_triangle.svg/320px-Regular_triangle.svg.png",
        distractors: ["מְשֻׁלָּם", "מְשֻׁרָּשׁ", "מְכֻלָּשׁ"]
    },
    {
        word: "צֶבַע",
        speech: "צבע",
        emoji: "🖍️",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Crayola_24pack_2005.jpg/320px-Crayola_24pack_2005.jpg",
        distractors: ["צֶבַר", "צֶכַע", "צֶבַד"]
    },
    {
        word: "מַפָּה",
        speech: "מפה",
        emoji: "🗺️",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Mercator-projection.jpg/320px-Mercator-projection.jpg",
        distractors: ["מַפָּע", "מַכָּה", "מַפָּד"]
    },
    {
        word: "סַרְגֵּל",
        speech: "סרגל",
        emoji: "📏",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/R%C3%A8gle_gradu%C3%A9e.svg/320px-R%C3%A8gle_gradu%C3%A9e.svg.png",
        distractors: ["סַרְגֵּר", "סַרְכֵּל", "סַלְגֵּל"]
    },
    {
        word: "דֶּגֶל",
        speech: "דגל",
        emoji: "🇮🇱",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/320px-Flag_of_Israel.svg.png",
        distractors: ["דֶּגֶר", "דֶּכֶל", "דֶּגֶד"]
    },
    {
        word: "גִּיטָרָה",
        speech: "גיטרה",
        emoji: "🎸",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/GuitareClassique5.png/320px-GuitareClassique5.png",
        distractors: ["גִּיטָרָע", "גִּיכָרָה", "גִּיטָלָה"]
    },
    {
        word: "תֹּף",
        speech: "תוף",
        emoji: "🥁",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Snare_drum.jpg/320px-Snare_drum.jpg",
        distractors: ["תֹּד", "תֹּר", "תֹּן"]
    },
];