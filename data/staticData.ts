import { BookSpine } from "../types";

const PROGRAMMING_IMAGE_SRC = "https://mco.dev/img/programming.jpg";
const GENERAL_IMAGE_SRC = "https://mco.dev/img/general.jpg";
const GAMES_IMAGE_SRC = "https://mco.dev/img/games.jpg";
const AI_IMAGE_SRC = "https://mco.dev/img/ai.jpg";
const FICTION_IMAGE_SRC = "https://mco.dev/img/fiction.jpg";

const PROGRAMMING_BOOKS: BookSpine[] = [
  {
    id: "crafting-interpreters",
    title: "Crafting Interpreters",
    author: "Robert Nystrom",
    colorDescription: "Large white spine with blue text 'CRAFTING INTERPRETERS' and author 'NYSTROM' at bottom.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9780990582939-L.jpg",
    polygon: [
      { x: 58, y: 260 },
      { x: 121, y: 260 },
      { x: 121, y: 825 },
      { x: 58, y: 825 },
    ],
  },
  {
    id: "how-js-works",
    title: "How JavaScript Works",
    author: "Douglas Crockford",
    colorDescription: "White spine with orange diagonal stripes. Text 'HOW JAVASCRIPT WORKS'.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9781949815009-L.jpg",
    polygon: [
      { x: 126, y: 260 },
      { x: 157, y: 260 },
      { x: 157, y: 825 },
      { x: 126, y: 825 },
    ],
  },
  {
    id: "beyond-basic-python",
    title: "Beyond the Basic Stuff with Python",
    author: "Al Sweigart",
    colorDescription: "White spine with black text. Al Sweigart author.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9781593279660-L.jpg",
    polygon: [
      { x: 163, y: 262 },
      { x: 198, y: 262 },
      { x: 198, y: 825 },
      { x: 163, y: 825 },
    ],
  },
  {
    id: "bayesian-stats",
    title: "Bayesian Statistics the Fun Way",
    author: "Will Kurt",
    colorDescription: "Black spine with yellow text block. Kurt author.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9781593279561-L.jpg",
    polygon: [
      { x: 203, y: 262 },
      { x: 228, y: 262 },
      { x: 228, y: 825 },
      { x: 203, y: 825 },
    ],
  },
  {
    id: "automate-boring",
    title: "Automate the Boring Stuff with Python",
    author: "Al Sweigart",
    colorDescription: "Beige/Cream spine with bold black text. 2nd Edition.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9781593279929-L.jpg",
    polygon: [
      { x: 232, y: 262 },
      { x: 287, y: 262 },
      { x: 287, y: 825 },
      { x: 232, y: 825 },
    ],
  },
  {
    id: "cracking-codes",
    title: "Cracking Codes with Python",
    author: "Al Sweigart",
    colorDescription: "Beige/Cream spine with vertical text. Al Sweigart.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9781593278229-L.jpg",
    polygon: [
      { x: 294, y: 262 },
      { x: 332, y: 262 },
      { x: 332, y: 825 },
      { x: 294, y: 825 },
    ],
  },
  {
    id: "grokking-algos",
    title: "Grokking Algorithms",
    author: "Aditya Bhargava",
    colorDescription: "White spine with illustrated characters.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9781617292231-L.jpg",
    polygon: [
      { x: 337, y: 262 },
      { x: 362, y: 262 },
      { x: 362, y: 825 },
      { x: 337, y: 825 },
    ],
  },
  {
    id: "pytest",
    title: "Python Testing with pytest",
    author: "Brian Okken",
    colorDescription: "White spine, red logo at bottom. Okken author.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9781680502404-L.jpg",
    polygon: [
      { x: 367, y: 264 },
      { x: 392, y: 264 },
      { x: 392, y: 825 },
      { x: 367, y: 825 },
    ],
  },
  {
    id: "cs-python",
    title: "Computer Science Using Python",
    author: "Charles Dierbach",
    colorDescription: "Orange/Red textured spine with white text 'PYTHON'. Dierbach.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9780470555156-L.jpg",
    polygon: [
      { x: 397, y: 264 },
      { x: 441, y: 264 },
      { x: 441, y: 825 },
      { x: 397, y: 825 },
    ],
  },
  {
    id: "get-programming",
    title: "Get Programming",
    author: "Ana Bell",
    colorDescription: "Dark green spine. Manning publisher.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9781617293788-L.jpg",
    polygon: [
      { x: 446, y: 264 },
      { x: 481, y: 264 },
      { x: 481, y: 825 },
      { x: 446, y: 825 },
    ],
  },
  {
    id: "prog-ts",
    title: "Programming TypeScript",
    author: "Boris Cherny",
    colorDescription: "White spine with animal (bird) icon. O'Reilly.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9781492037651-L.jpg",
    polygon: [
      { x: 486, y: 265 },
      { x: 511, y: 265 },
      { x: 511, y: 825 },
      { x: 486, y: 825 },
    ],
  },
  {
    id: "go-lang",
    title: "The Go Programming Language",
    author: "Donovan & Kernighan",
    colorDescription: "Light blue spine top, white bottom. Donovan & Kernighan.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9780134190440-L.jpg",
    polygon: [
      { x: 516, y: 265 },
      { x: 546, y: 265 },
      { x: 546, y: 825 },
      { x: 516, y: 825 },
    ],
  },
  {
    id: "eloquent-js",
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    colorDescription: "White spine with yellow bird illustration. 3rd Edition.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9781593279509-L.jpg",
    polygon: [
      { x: 553, y: 265 },
      { x: 593, y: 265 },
      { x: 593, y: 825 },
      { x: 553, y: 825 },
    ],
  },
  {
    id: "eff-tcpip",
    title: "Effective TCP/IP Programming",
    author: "Jon C. Snader",
    colorDescription: "Blue spine with white text.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9780201615892-L.jpg",
    polygon: [
      { x: 598, y: 265 },
      { x: 628, y: 265 },
      { x: 628, y: 825 },
      { x: 598, y: 825 },
    ],
  },
  {
    id: "eff-python",
    title: "Effective Python",
    author: "Brett Slatkin",
    colorDescription: "Blue spine, Second Edition. Slatkin.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9780134853987-L.jpg",
    polygon: [
      { x: 633, y: 265 },
      { x: 663, y: 265 },
      { x: 663, y: 825 },
      { x: 633, y: 825 },
    ],
  },
  {
    id: "eff-js",
    title: "Effective JavaScript",
    author: "David Herman",
    colorDescription: "Teal/Blue spine. Herman.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9780321812186-L.jpg",
    polygon: [
      { x: 668, y: 265 },
      { x: 688, y: 265 },
      { x: 688, y: 825 },
      { x: 668, y: 825 },
    ],
  },
  {
    id: "elements-style-prog",
    title: "The Elements of Programming Style",
    author: "Kernighan & Plauger",
    colorDescription: "White spine, vintage. Kernighan and Plauger.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9780070342071-L.jpg",
    polygon: [
      { x: 693, y: 266 },
      { x: 708, y: 266 },
      { x: 708, y: 825 },
      { x: 693, y: 825 },
    ],
  },
  {
    id: "cpython",
    title: "CPython Internals",
    author: "Anthony Shaw",
    colorDescription: "Light blue/teal spine. Real Python.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9781775093329-L.jpg",
    polygon: [
      { x: 713, y: 266 },
      { x: 751, y: 266 },
      { x: 751, y: 825 },
      { x: 713, y: 825 },
    ],
  },
  {
    id: "basic-basic",
    title: "Basic Basic",
    author: "James S. Coan",
    colorDescription: "White spine with bold black text 'basic basic'. Coan.",
    coverImage: "https://covers.openlibrary.org/b/isbn/0810451069-L.jpg",
    polygon: [
      { x: 757, y: 266 },
      { x: 792, y: 266 },
      { x: 792, y: 825 },
      { x: 757, y: 825 },
    ],
  },
  {
    id: "bell-system",
    title: "The Bell System Technical Journal",
    author: "Bell System",
    colorDescription: "Green spine. Vol 57.",
    polygon: [
      { x: 797, y: 266 },
      { x: 822, y: 266 },
      { x: 822, y: 825 },
      { x: 797, y: 825 },
    ],
  },
  {
    id: "prog-puzzled",
    title: "Programming for the Puzzled",
    author: "Srini Devadas",
    colorDescription: "Blue spine. Srini Devadas.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9780262534309-L.jpg",
    polygon: [
      { x: 827, y: 266 },
      { x: 847, y: 266 },
      { x: 847, y: 825 },
      { x: 827, y: 825 },
    ],
  },
  {
    id: "little-schemer",
    title: "The Little Schemer",
    author: "Friedman & Felleisen",
    colorDescription: "Pink/Salmon spine. Fourth Edition.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9780262560993-L.jpg",
    polygon: [
      { x: 852, y: 266 },
      { x: 872, y: 266 },
      { x: 872, y: 825 },
      { x: 852, y: 825 },
    ],
  },
];

const GENERAL_BOOKS: BookSpine[] = [
  {
    id: "tell-me-why",
    title: "Tell Me Why",
    author: "Arkady Leokum",
    colorDescription: "Blue spine with white text 'TELL ME WHY'.",
    polygon: [{x:0,y:440}, {x:64,y:440}, {x:64,y:910}, {x:0,y:910}]
  },
  {
    id: "what-if",
    title: "What If?",
    author: "Randall Munroe",
    colorDescription: "White spine with red text 'what if?'.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9780544272996-L.jpg",
    polygon: [{x:64,y:440}, {x:108,y:442}, {x:108,y:910}, {x:64,y:910}]
  },
  {
    id: "social-work",
    title: "Social Work in a Changing Scotland",
    author: "Viv Cree",
    colorDescription: "Black spine.",
    polygon: [{x:108,y:442}, {x:142,y:442}, {x:142,y:910}, {x:108,y:910}]
  },
  {
    id: "thousand-brains",
    title: "A Thousand Brains",
    author: "Jeff Hawkins",
    colorDescription: "White spine with black text.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9781541675810-L.jpg",
    polygon: [{x:142,y:442}, {x:192,y:443}, {x:192,y:910}, {x:142,y:910}]
  },
  {
    id: "brilliant-maps",
    title: "Brilliant Maps for Curious Minds",
    author: "Ian Wright",
    colorDescription: "Cyan/Light blue spine.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9781615196258-L.jpg",
    polygon: [{x:192,y:443}, {x:218,y:444}, {x:218,y:910}, {x:192,y:910}]
  },
  {
    id: "stone-pony",
    title: "I Don't Want to Go Home: The Oral History of the Stone Pony",
    author: "Nick Corasaniti",
    colorDescription: "Black/Dark grey spine with white horse icon.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9780063026360-L.jpg",
    polygon: [{x:218,y:444}, {x:256,y:445}, {x:256,y:910}, {x:218,y:910}]
  },
  {
    id: "super-thinking",
    title: "Super Thinking",
    author: "Gabriel Weinberg",
    colorDescription: "Blue and Yellow spine.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9780525533580-L.jpg",
    polygon: [{x:256,y:445}, {x:296,y:446}, {x:296,y:910}, {x:256,y:910}]
  },
  {
    id: "5am-club",
    title: "The 5 AM Club",
    author: "Robin Sharma",
    colorDescription: "Orange spine.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9781443456623-L.jpg",
    polygon: [{x:296,y:446}, {x:332,y:448}, {x:332,y:910}, {x:296,y:910}]
  },
  {
    id: "code",
    title: "Code",
    author: "Charles Petzold",
    colorDescription: "Dark blue spine with word CODE vertically.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9780735611313-L.jpg",
    polygon: [{x:332,y:448}, {x:356,y:449}, {x:356,y:910}, {x:332,y:910}]
  },
  {
    id: "annotated-turing",
    title: "The Annotated Turing",
    author: "Charles Petzold",
    colorDescription: "Black spine.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9780470229057-L.jpg",
    polygon: [{x:356,y:449}, {x:384,y:450}, {x:384,y:910}, {x:356,y:910}]
  },
  {
    id: "learning-how-to-learn",
    title: "Learning How to Learn",
    author: "Barbara Oakley",
    colorDescription: "White spine with black text.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9780143132547-L.jpg",
    polygon: [{x:384,y:450}, {x:408,y:450}, {x:408,y:910}, {x:384,y:910}]
  },
  {
    id: "unix-history",
    title: "Unix: A History and a Memoir",
    author: "Brian Kernighan",
    colorDescription: "Blue/Grey spine.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9781695978553-L.jpg",
    polygon: [{x:408,y:450}, {x:438,y:451}, {x:438,y:910}, {x:408,y:910}]
  },
  {
    id: "dont-make-me-think",
    title: "Don't Make Me Think, Revisited",
    author: "Steve Krug",
    colorDescription: "Red spine.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9780321965516-L.jpg",
    polygon: [{x:438,y:451}, {x:462,y:452}, {x:462,y:910}, {x:438,y:910}]
  },
  {
    id: "world-without-email",
    title: "A World Without Email",
    author: "Cal Newport",
    colorDescription: "Black spine with CAL NEWPORT in large letters.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9780525536550-L.jpg",
    polygon: [{x:462,y:452}, {x:522,y:453}, {x:522,y:910}, {x:462,y:910}]
  },
  {
    id: "do-you-talk-funny",
    title: "Do You Talk Funny?",
    author: "David Nihill",
    colorDescription: "Black spine.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9781942952275-L.jpg",
    polygon: [{x:522,y:453}, {x:548,y:453}, {x:548,y:910}, {x:522,y:910}]
  },
  {
    id: "remember-it",
    title: "Remember It!",
    author: "Nelson Dellis",
    colorDescription: "Blue spine with yellow text.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9781419732560-L.jpg",
    polygon: [{x:548,y:453}, {x:588,y:453}, {x:588,y:910}, {x:548,y:910}]
  },
  {
    id: "in-our-defense",
    title: "In Our Defense",
    author: "Ellen Alderman",
    colorDescription: "Yellow/Beige spine.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9780380717207-L.jpg",
    polygon: [{x:588,y:453}, {x:636,y:454}, {x:636,y:910}, {x:588,y:910}]
  },
  {
    id: "stroke-of-insight",
    title: "My Stroke of Insight",
    author: "Jill Bolte Taylor",
    colorDescription: "White spine.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9780452295571-L.jpg",
    polygon: [{x:636,y:454}, {x:660,y:454}, {x:660,y:910}, {x:636,y:910}]
  },
  {
    id: "write-one-song",
    title: "How To Write One Song",
    author: "Jeff Tweedy",
    colorDescription: "White spine.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9780593183526-L.jpg",
    polygon: [{x:660,y:454}, {x:700,y:454}, {x:700,y:910}, {x:660,y:910}]
  },
  {
    id: "7-half-lessons",
    title: "Seven and a Half Lessons About the Brain",
    author: "Lisa Feldman Barrett",
    colorDescription: "Dark blue/purple spine.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9780358164069-L.jpg",
    polygon: [{x:700,y:454}, {x:728,y:455}, {x:728,y:910}, {x:700,y:910}]
  },
  {
    id: "expect-unexpected",
    title: "How to Expect the Unexpected",
    author: "Kit Yates",
    colorDescription: "Red spine.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9781529408461-L.jpg",
    polygon: [{x:728,y:455}, {x:764,y:455}, {x:764,y:910}, {x:728,y:910}]
  },
  {
    id: "coming-wave",
    title: "The Coming Wave",
    author: "Mustafa Suleyman",
    colorDescription: "Blue spine.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9780804140039-L.jpg",
    polygon: [{x:764,y:455}, {x:804,y:456}, {x:804,y:910}, {x:764,y:910}]
  },
  {
    id: "elements-style-game",
    title: "The Elements of Style",
    author: "Strunk & White",
    colorDescription: "White thin spine.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9780205309023-L.jpg",
    polygon: [{x:804,y:456}, {x:820,y:456}, {x:820,y:910}, {x:804,y:910}]
  },
  {
    id: "know-your-rights",
    title: "Know Your Rights!",
    author: "Laura Barcella",
    colorDescription: "Yellow/Green thin spine.",
    polygon: [{x:820,y:456}, {x:836,y:456}, {x:836,y:910}, {x:820,y:910}]
  },
  {
    id: "the-computer",
    title: "The Computer",
    author: "Unknown",
    colorDescription: "Black/Grey spine.",
    polygon: [{x:836,y:456}, {x:860,y:456}, {x:860,y:910}, {x:836,y:910}]
  },
  {
    id: "london-bookshops",
    title: "An Opinionated Guide to London Bookshops",
    author: "Sonya Barber",
    colorDescription: "White spine.",
    polygon: [{x:860,y:456}, {x:884,y:456}, {x:884,y:910}, {x:860,y:910}]
  },
  {
    id: "card-games",
    title: "Card Games",
    author: "Collins",
    colorDescription: "White spine with black text.",
    polygon: [{x:884,y:456}, {x:920,y:457}, {x:920,y:910}, {x:884,y:910}]
  },
  {
    id: "london-system",
    title: "The London System in 12 Practical Lessons",
    author: "Oscar de Prado",
    colorDescription: "Yellow spine.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9781906454518-L.jpg",
    polygon: [{x:920,y:457}, {x:956,y:458}, {x:956,y:910}, {x:920,y:910}]
  },
  {
    id: "50-chess-questions",
    title: "50 Chess Questions",
    author: "Ray Cheng",
    colorDescription: "Red spine.",
    polygon: [{x:956,y:458}, {x:1000,y:458}, {x:1000,y:910}, {x:956,y:910}]
  }
];

const GAMES_BOOKS: BookSpine[] = [
  {
    id: "london-system-1",
    title: "The London System in 12 Practical Lessons",
    author: "Oscar de Prado",
    colorDescription: "Yellow spine.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9781906454518-L.jpg",
    polygon: [{x:20,y:260}, {x:60,y:260}, {x:60,y:850}, {x:20,y:850}]
  },
  {
    id: "50-mistakes",
    title: "50 Mistakes You Should Know",
    author: "Jesus de la Villa",
    colorDescription: "Red spine.",
    polygon: [{x:60,y:260}, {x:105,y:260}, {x:105,y:850}, {x:60,y:850}]
  },
  {
    id: "500-chess",
    title: "500 Chess Questions Answered",
    author: "Andrew Soltis",
    colorDescription: "Grey spine.",
    polygon: [{x:105,y:260}, {x:145,y:260}, {x:145,y:850}, {x:105,y:850}]
  },
  {
    id: "solitaire-chess",
    title: "Solitaire Chess",
    author: "Bruce Pandolfini",
    colorDescription: "Blue spine.",
    polygon: [{x:145,y:260}, {x:175,y:260}, {x:175,y:850}, {x:145,y:850}]
  },
  {
    id: "small-steps",
    title: "Small Steps to Giant Improvement",
    author: "Sam Shankland",
    colorDescription: "Red spine.",
    polygon: [{x:175,y:260}, {x:200,y:260}, {x:200,y:850}, {x:175,y:850}]
  },
  {
    id: "100-endgames",
    title: "100 Endgames You Must Know",
    author: "Jesus de la Villa",
    colorDescription: "Teal spine.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9789056916176-L.jpg",
    polygon: [{x:200,y:260}, {x:240,y:260}, {x:240,y:850}, {x:200,y:850}]
  },
  {
    id: "bobby-fischer",
    title: "Bobby Fischer's Outrageous Chess Moves",
    author: "Bruce Pandolfini",
    colorDescription: "Cream/White spine.",
    polygon: [{x:240,y:260}, {x:255,y:260}, {x:255,y:850}, {x:240,y:850}]
  },
  {
    id: "best-lessons",
    title: "Best Lessons of a Chess Coach",
    author: "Sunil Weeramantry",
    colorDescription: "Black spine.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9780812932717-L.jpg",
    polygon: [{x:255,y:260}, {x:300,y:260}, {x:300,y:850}, {x:255,y:850}]
  },
  {
    id: "weapons-chess",
    title: "Weapons of Chess",
    author: "Bruce Pandolfini",
    colorDescription: "Pink/Red spine.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9780671659724-L.jpg",
    polygon: [{x:300,y:260}, {x:335,y:260}, {x:335,y:850}, {x:300,y:850}]
  },
  {
    id: "basic-bridge-klinger",
    title: "Basic Bridge",
    author: "Ron Klinger",
    colorDescription: "Red spine with 'BASIC BRIDGE' and 'KLINGER' text.",
    polygon: [{x:335,y:260}, {x:365,y:260}, {x:365,y:850}, {x:335,y:850}]
  },
  {
    id: "bridge-club",
    title: "Bridge: The Club Series",
    author: "Audrey Grant",
    colorDescription: "Blue spine.",
    polygon: [{x:365,y:260}, {x:390,y:260}, {x:390,y:850}, {x:365,y:850}]
  },
  {
    id: "bridge-tricks",
    title: "25 Ways to Take More Tricks as Declarer",
    author: "Seagram & Bird",
    colorDescription: "Cream spine.",
    polygon: [{x:390,y:260}, {x:420,y:260}, {x:420,y:850}, {x:390,y:850}]
  },
  {
    id: "bridge-heart",
    title: "Bridge: The Heart Series",
    author: "Audrey Grant",
    colorDescription: "Blue spine.",
    polygon: [{x:420,y:260}, {x:450,y:260}, {x:450,y:850}, {x:420,y:850}]
  },
  {
    id: "bridge-diamond",
    title: "Bridge: The Diamond Series",
    author: "Audrey Grant",
    colorDescription: "Blue spine.",
    polygon: [{x:450,y:260}, {x:480,y:260}, {x:480,y:850}, {x:450,y:850}]
  },
  {
    id: "bridge-maxims",
    title: "Bridge Maxims",
    author: "Audrey Grant",
    colorDescription: "Blue spine.",
    polygon: [{x:480,y:260}, {x:530,y:260}, {x:530,y:850}, {x:480,y:850}]
  },
  {
    id: "learn-bridge",
    title: "Learn to Play Bridge",
    author: "Gary Brown",
    colorDescription: "Black spine.",
    polygon: [{x:530,y:260}, {x:545,y:260}, {x:545,y:850}, {x:530,y:850}]
  },
  {
    id: "survive-bridge",
    title: "How to Survive Your First Bridge Tournament",
    author: "David Burn",
    colorDescription: "Green/White spine.",
    polygon: [{x:545,y:260}, {x:575,y:260}, {x:575,y:850}, {x:545,y:850}]
  },
  {
    id: "little-puzzle",
    title: "The Little Puzzle Book",
    author: "Gareth Moore",
    colorDescription: "Red spine.",
    polygon: [{x:575,y:260}, {x:605,y:260}, {x:605,y:850}, {x:575,y:850}]
  },
  {
    id: "tiger-that-isnt",
    title: "The Tiger That Isn't",
    author: "Michael Blastland",
    colorDescription: "Orange spine.",
    polygon: [{x:605,y:260}, {x:645,y:260}, {x:645,y:850}, {x:605,y:850}]
  },
  {
    id: "can-you-solve",
    title: "Can You Solve My Problems?",
    author: "Alex Bellos",
    colorDescription: "White spine.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9781783351145-L.jpg",
    polygon: [{x:645,y:260}, {x:700,y:260}, {x:700,y:850}, {x:645,y:850}]
  },
  {
    id: "socks-pair",
    title: "How Many Socks Make a Pair?",
    author: "Rob Eastaway",
    colorDescription: "Blue spine.",
    polygon: [{x:700,y:260}, {x:745,y:260}, {x:745,y:850}, {x:700,y:850}]
  },
  {
    id: "riddler",
    title: "The Riddler",
    author: "Oliver Roeder",
    colorDescription: "Blue spine.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9781324003690-L.jpg",
    polygon: [{x:745,y:260}, {x:790,y:260}, {x:790,y:850}, {x:745,y:850}]
  },
  {
    id: "smart-google",
    title: "Are You Smart Enough to Work at Google?",
    author: "William Poundstone",
    colorDescription: "Yellow/Green/Red spine.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9780316099981-L.jpg",
    polygon: [{x:790,y:260}, {x:835,y:260}, {x:835,y:850}, {x:790,y:850}]
  },
  {
    id: "math-brainteasers",
    title: "Mathematical Brainteasers",
    author: "Maria O'Shea",
    colorDescription: "White spine.",
    polygon: [{x:835,y:260}, {x:880,y:260}, {x:880,y:850}, {x:835,y:850}]
  },
  {
    id: "bletchley-park",
    title: "Bletchley Park Brainteasers",
    author: "Sinclair McKay",
    colorDescription: "Red spine.",
    polygon: [{x:880,y:260}, {x:935,y:260}, {x:935,y:850}, {x:880,y:850}]
  },
  {
    id: "language-lover",
    title: "The Language Lover's Puzzle Book",
    author: "Alex Bellos",
    colorDescription: "White spine.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9781783352180-L.jpg",
    polygon: [{x:935,y:260}, {x:990,y:260}, {x:990,y:850}, {x:935,y:850}]
  }
];

const AI_BOOKS: BookSpine[] = [
  {
    id: "grokking-dl-1",
    title: "Grokking Deep Learning",
    author: "Andrew Trask",
    colorDescription: "White spine with red text and Manning logo.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9781617293702-L.jpg",
    polygon: [{x:15,y:60}, {x:60,y:60}, {x:60,y:895}, {x:15,y:895}]
  },
  {
    id: "dl-illustrated",
    title: "Deep Learning Illustrated",
    author: "Jon Krohn",
    colorDescription: "Blue and white spine.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9780135116692-L.jpg",
    polygon: [{x:60,y:105}, {x:105,y:105}, {x:105,y:895}, {x:60,y:895}]
  },
  {
    id: "storytelling",
    title: "Storytelling with Data",
    author: "Cole Nussbaumer Knaflic",
    colorDescription: "White spine with blue/grey text.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9781119002253-L.jpg",
    polygon: [{x:105,y:145}, {x:145,y:145}, {x:145,y:895}, {x:105,y:895}]
  },
  {
    id: "hands-on-ml",
    title: "Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow",
    author: "Aurélien Géron",
    colorDescription: "White spine with red O'Reilly logo.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9781492032649-L.jpg",
    polygon: [{x:145,y:205}, {x:205,y:205}, {x:205,y:895}, {x:145,y:895}]
  },
  {
    id: "intro-ds",
    title: "Introduction to Data Science",
    author: "Igual & Segui",
    colorDescription: "White spine with teal header and O'Reilly logo.",
    polygon: [{x:205,y:235}, {x:235,y:235}, {x:235,y:895}, {x:205,y:895}]
  },
  {
    id: "grokking-dl-2",
    title: "Grokking Deep Learning",
    author: "Andrew Trask",
    colorDescription: "White spine with red text and Manning logo.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9781617293702-L.jpg",
    polygon: [{x:235,y:280}, {x:280,y:280}, {x:280,y:895}, {x:235,y:895}]
  },
  {
    id: "data-smart",
    title: "Data Smart",
    author: "John Foreman",
    colorDescription: "Green/Dark spine with white text.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9781118661468-L.jpg",
    polygon: [{x:280,y:330}, {x:330,y:330}, {x:330,y:895}, {x:280,y:895}]
  },
  {
    id: "hands-on-llm",
    title: "Hands-On Large Language Models",
    author: "Alammar & Grootendorst",
    colorDescription: "White spine with red O'Reilly logo.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9781098150969-L.jpg",
    polygon: [{x:330,y:385}, {x:385,y:385}, {x:385,y:895}, {x:330,y:895}]
  },
  {
    id: "dl-python",
    title: "Deep Learning with Python",
    author: "François Chollet",
    colorDescription: "Red spine with white text.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9781617294433-L.jpg",
    polygon: [{x:385,y:445}, {x:445,y:445}, {x:445,y:895}, {x:385,y:895}]
  },
  {
    id: "ml-design-patterns",
    title: "Machine Learning Design Patterns",
    author: "Lakshmanan et al.",
    colorDescription: "White spine with red O'Reilly logo.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9781098115784-L.jpg",
    polygon: [{x:445,y:495}, {x:495,y:495}, {x:495,y:895}, {x:445,y:895}]
  },
  {
    id: "gen-dl",
    title: "Generative Deep Learning",
    author: "David Foster",
    colorDescription: "White spine with red O'Reilly logo.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9781492041948-L.jpg",
    polygon: [{x:495,y:535}, {x:535,y:535}, {x:535,y:895}, {x:495,y:895}]
  },
  {
    id: "gce",
    title: "Google Compute Engine",
    author: "Marc Cohen et al.",
    colorDescription: "Purple spine with bird image and O'Reilly logo.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9781449360887-L.jpg",
    polygon: [{x:535,y:575}, {x:575,y:575}, {x:575,y:895}, {x:535,y:895}]
  },
  {
    id: "serverless",
    title: "Building Serverless Applications with Google Cloud Run",
    author: "Wietse Venema",
    colorDescription: "White spine with red O'Reilly logo.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9781492041344-L.jpg",
    polygon: [{x:575,y:610}, {x:610,y:610}, {x:610,y:895}, {x:575,y:895}]
  },
  {
    id: "numsense",
    title: "Numsense! Data Science for the Layman",
    author: "Annalyn Ng & Kenneth Soo",
    colorDescription: "White spine with blue accent.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9789811110689-L.jpg",
    polygon: [{x:610,y:640}, {x:640,y:640}, {x:640,y:895}, {x:610,y:895}]
  },
  {
    id: "python-ds-handbook",
    title: "Python Data Science Handbook",
    author: "Jake VanderPlas",
    colorDescription: "Red spine with O'Reilly logo.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9781491912058-L.jpg",
    polygon: [{x:640,y:710}, {x:710,y:710}, {x:710,y:895}, {x:640,y:895}]
  },
  {
    id: "ds-design-manual",
    title: "The Data Science Design Manual",
    author: "Steven S. Skiena",
    colorDescription: "Blue spine with Springer logo.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9783319554433-L.jpg",
    polygon: [{x:710,y:780}, {x:780,y:780}, {x:780,y:895}, {x:710,y:895}]
  },
  {
    id: "ds-scratch",
    title: "Data Science from Scratch",
    author: "Joel Grus",
    colorDescription: "White spine with red O'Reilly logo.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9781492041139-L.jpg",
    polygon: [{x:780,y:835}, {x:835,y:835}, {x:835,y:895}, {x:780,y:895}]
  },
  {
    id: "build-llm",
    title: "Build a Large Language Model (From Scratch)",
    author: "Sebastian Raschka",
    colorDescription: "Black spine with white text.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9781633437166-L.jpg",
    polygon: [{x:835,y:945}, {x:945,y:945}, {x:945,y:895}, {x:835,y:895}]
  }
];

const FICTION_BOOKS: BookSpine[] = [
  {
    id: "heartstopper-5",
    title: "Heartstopper Volume 5",
    author: "Alice Oseman",
    colorDescription: "Orange spine with large handwritten black text.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9781444957655-L.jpg",
    polygon: [{x:50, y:70}, {x:235, y:135}, {x:250, y:875}, {x:155, y:875}]
  },
  {
    id: "xu-bing",
    title: "Book from the Ground",
    author: "Xu Bing",
    colorDescription: "Black spine with white symbols/arrows.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9780262027083-L.jpg",
    polygon: [{x:235, y:135}, {x:275, y:140}, {x:290, y:875}, {x:250, y:875}]
  },
  {
    id: "wilde-boy",
    title: "Wilde Without the Boy",
    author: "Gareth Armstrong",
    colorDescription: "Black spine with white text.",
    polygon: [{x:275, y:140}, {x:315, y:145}, {x:325, y:875}, {x:290, y:875}]
  },
  {
    id: "mysterious-stranger",
    title: "The Mysterious Stranger",
    author: "Mark Twain",
    colorDescription: "White spine with black text.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9780486270692-L.jpg",
    polygon: [{x:315, y:150}, {x:360, y:155}, {x:370, y:875}, {x:325, y:875}]
  },
  {
    id: "child-god",
    title: "Child of God",
    author: "Cormac McCarthy",
    colorDescription: "Red spine with black text.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9780679747047-L.jpg",
    polygon: [{x:360, y:200}, {x:420, y:200}, {x:430, y:875}, {x:370, y:875}]
  },
  {
    id: "greatest-play",
    title: "The Greatest Play in the History of the World",
    author: "Ian Kershaw",
    colorDescription: "Dark/Black spine with white text.",
    polygon: [{x:420, y:200}, {x:440, y:200}, {x:450, y:875}, {x:430, y:875}]
  },
  {
    id: "talk-about-love",
    title: "What We Talk About When We Talk About Love",
    author: "Raymond Carver",
    colorDescription: "Red spine with white text.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9780679723058-L.jpg",
    polygon: [{x:440, y:200}, {x:490, y:200}, {x:500, y:875}, {x:450, y:875}]
  },
  {
    id: "end-affair",
    title: "The End of the Affair",
    author: "Graham Greene",
    colorDescription: "Red spine with white text.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9780099284370-L.jpg",
    polygon: [{x:490, y:200}, {x:550, y:200}, {x:560, y:875}, {x:500, y:875}]
  },
  {
    id: "velvet-stone",
    title: "Velvet and Stone",
    author: "Kramer",
    colorDescription: "White/Cream spine with pink dot.",
    polygon: [{x:550, y:215}, {x:590, y:215}, {x:600, y:875}, {x:560, y:875}]
  },
  {
    id: "so-young",
    title: "So Young",
    author: "Douglas Maxwell",
    colorDescription: "Light blue spine.",
    polygon: [{x:590, y:195}, {x:620, y:195}, {x:630, y:875}, {x:600, y:875}]
  },
  {
    id: "androids-sheep",
    title: "Do Androids Dream of Electric Sheep?",
    author: "Philip K. Dick",
    colorDescription: "Yellow spine with black text.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9780345404473-L.jpg",
    polygon: [{x:620, y:200}, {x:685, y:200}, {x:695, y:875}, {x:630, y:875}]
  },
  {
    id: "novelist-vocation",
    title: "Novelist as a Vocation",
    author: "Haruki Murakami",
    colorDescription: "Black spine with red circle design.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9780593318072-L.jpg",
    polygon: [{x:685, y:195}, {x:770, y:195}, {x:775, y:870}, {x:695, y:875}]
  },
  {
    id: "burning-bright",
    title: "Burning Bright",
    author: "John Steinbeck",
    colorDescription: "White spine with black text.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9780143039440-L.jpg",
    polygon: [{x:770, y:265}, {x:810, y:270}, {x:815, y:865}, {x:775, y:870}]
  },
  {
    id: "library-babel",
    title: "The Library of Babel",
    author: "Jorge Luis Borges",
    colorDescription: "Orange spine with geometric pattern.",
    coverImage: "https://covers.openlibrary.org/b/isbn/9781567921236-L.jpg",
    polygon: [{x:810, y:305}, {x:870, y:305}, {x:875, y:860}, {x:815, y:865}]
  }
];

export const SHELVES = [
  {
    id: "programming",
    title: "Programming",
    image: PROGRAMMING_IMAGE_SRC,
    books: PROGRAMMING_BOOKS
  },
  {
    id: "ai",
    title: "Artificial Intelligence",
    image: AI_IMAGE_SRC,
    books: AI_BOOKS
  },
  {
    id: "general",
    title: "General",
    image: GENERAL_IMAGE_SRC,
    books: GENERAL_BOOKS
  },
  {
    id: "games",
    title: "Games & Puzzles",
    image: GAMES_IMAGE_SRC,
    books: GAMES_BOOKS
  },
  {
    id: "fiction",
    title: "Fiction",
    image: FICTION_IMAGE_SRC,
    books: FICTION_BOOKS
  }
];

export const STATIC_BOOKS = PROGRAMMING_BOOKS;
export const STATIC_IMAGE_SRC = PROGRAMMING_IMAGE_SRC;