import fs from "fs";
import path from "path";
import { constants, CardSet, Rarity } from "mtgatool-shared";

const { RATINGS_MTGCSR, RATINGS_LOLA } = constants;

export const APPDATA = path.resolve(__dirname, "..");

export const EXTERNAL = "external";
export const OUTPUT = "output";
export const DIST = "dist";

const packageJson = JSON.parse(
  fs.readFileSync(path.join(APPDATA, "package.json"), "utf8")
);

// "scryfall-all-cards.json" contains cards in all languages but is 800+mb
export const SCRYFALL_FILE = "scryfall-all-cards.json";

export const VERSION = packageJson.version.split(".")[0];

export type SCRYFALL_LANGS =
  | "EN"
  | "PH"
  | "DE"
  | "ES"
  | "FR"
  | "IT"
  | "RU"
  | "PT"
  | "JA"
  | "ZHS"
  | "KO"
  | "PH";

export type ARENA_LANGS =
  | "en-US"
  | "fr-FR"
  | "it-IT"
  | "de-DE"
  | "es-ES"
  | "ja-JP"
  | "pt-BR"
  | "ru-RU"
  | "ko-KR"
  | "zh-CN";

// What languages to actually compile
export const LANGUAGES: SCRYFALL_LANGS[] = [
  "EN",
  "ES",
  "PT",
  "DE",
  "FR",
  "IT",
  "JA",
  "RU",
  "KO",
  "ZHS",
];

export const LANGKEYS: Record<ARENA_LANGS, SCRYFALL_LANGS> = {
  "en-US": "EN",
  "fr-FR": "FR",
  "it-IT": "IT",
  "de-DE": "DE",
  "es-ES": "ES",
  "ja-JP": "JA",
  "pt-BR": "PT",
  "ru-RU": "RU",
  "ko-KR": "KO",
  "zh-CN": "ZHS",
};

export const EVENT_TO_NAME = {
  NPE: "New Player Experience",
  DirectGame: "Direct Game",
  Constructed_BestOf3: "Traditional Standard Play",
  Traditional_Cons_Event_2020: "Traditional Standard Event",

  Ladder: "Standard Ranked",
  Traditional_Ladder: "Traditional Standard Ranked",
  Constructed_Event_2020: "Standard Event",

  Historic_Ladder: "Historic Ranked",
  Traditional_Historic_Ladder: "Traditional Historic Ranked",
  Traditional_Historic_Event: "Traditional Historic Event",
};

export const EVENT_TO_FORMAT = {
  Play: "Standard",
  Historic_Play: "Historic",
  DirectGame: "Direct Game",
  Constructed_Event: "Standard",
  Constructed_Event_2020: "Standard",
  Ladder: "Standard",
  Historic_Ladder: "Historic",
  Traditional_Cons_Event: "Traditional Standard",
  Traditional_Cons_Event_2020: "Traditional Standard",
  Constructed_BestOf3: "Traditional Standard",
  Traditional_Ladder: "Traditional Standard",
  Traditional_Historic_Ladder: "Traditional Historic",
  Future_Play_20190909: "Future",
  Future_Ranked_20190909: "Traditional Future",

  Brawlers_Guildhall_20200319: "Brawl",
  Brawlers_Guildhall_Alt_20200416: "Brawl",
  Play_Brawl_20200401: "Brawl",

  CompDraft_RNA_20190117: "Draft RNA",
  CompDraft_WAR_20190425: "Draft WAR",
  CompDraft_M20_20190708: "Draft M20",
  CompDraft_ELD_20190930: "Draft ELD",
  CompDraft_THB_20200116: "Draft THB",
  TradDraft_IKO_20200416: "Draft IKO",

  Sealed_M20_20190630: "Sealed M20",
  Sealed_Ravnica_20190816: "Sealed RAV",
  Sealed_WAR_20190909: "Sealed WAR",
  Sealed_ELD_20190923: "Sealed ELD",
  Sealed_THB_20200113: "Sealed THB",

  QuickDraft_RNA_20190426: "Draft RNA",
  QuickDraft_RNA_20190621: "Draft RNA",
  QuickDraft_WAR_20190510: "Draft WAR",
  QuickDraft_DOM_20190524: "Draft DOM",
  QuickDraft_WAR_20190607: "Draft WAR",
  QuickDraft_WAR_20190705: "Draft WAR",
  QuickDraft_M20_20190719: "Draft M20",
  QuickDraft_RNA_20190802: "Draft RNA",
  QuickDraft_WAR_20190816: "Draft WAR",
  QuickDraft_GRN_20190829: "Draft GRN",
  QuickDraft_RNA_20190913: "Draft RNA",
  QuickDraft_ELD_20191011: "Draft ELD",
  QuickDraft_WAR_20191025: "Draft WAR",
  QuickDraft_GRN_20191108: "Draft GRN",
  QuickDraft_M20_20191206: "Draft M20",
  QuickDraft_WAR_20191220: "Draft WAR",
  QuickDraft_DOM_20200103: "Draft DOM",
  QuickDraft_THB_20200131: "Draft THB",
  QuickDraft_GRN_20200214: "Draft GRN",
  QuickDraft_THB_20200228: "Draft THB",
  QuickDraft_RNA_20200313: "Draft RNA",
  QuickDraft_THB_20200319: "Draft THB",
  QuickDraft_M19_20200327: "Draft M19",
  QuickDraft_IKO_20200501: "Draft IKO",
  QuickDraft_IKO_20200626: "Draft IKO",

  PremierDraft_IKO_20200416: "Draft IKO",
  PremierDraft_M21_20200625: "Draft M21",

  Cascade_Constructed_20190516: "Cascade Constructed",
  Omniscience_Draft_20190830: "Draft M20",
  Omniscience_Draft_20191107: "Draft ELD",

  Historic_Challenge_20200111: "Historic",
  Momir_PW_20200110: "Momir",
  ArenaOpen_Day1_20200530: "Standard",
  Esports_MIQ_20200314: "Traditional Standard",
  Esports_Qualifier_20190525: "Traditional Standard",
  Esports_Qualifier_20190817: "Traditional Standard",
  CompCons_Metagame_Challenge_20190712: "Traditional Standard",
  PlayAnyDeck_20190926: "Standard",
  WinEveryCard_20191005: "Standard",
  CompCons_Metagame_Challenge_20191004: "Traditional Standard",
  ExtraLife_2019_20191101: "Pauper",
  FestivalGods_Artisan_20200222: "Standard Artisan",
  FestivalGods_GiantMonsters_20200229: "Giant Monsters",
  FestivalGods_ImmortalSun_20200307: "Immortal Sun",
  FestivalGods_HistoricBrawl_20200313: "Historic Brawl",
  FestivalGods_ThassaDeck_20200321: "Preconstructed Singleton",
  Workshop_Brawl_20200224: "Brawl",
  Workshop_Draft_THB_20200302: "Preconstructed Draft THB",
  Workshop_OffMeta_20200309: "Preconstructed Standard",
  Workshop_Historic_20200316: "Historic",
  Workshop_GuildBattle_20200323: "Preconstructed",
  Workshop_GuildBattle_20200413: "Preconstructed",
  FestivalFae_Std_Artisan_20191103: "Standard Artisan",
  FestivalFae_OkosMadness_20191110: "Momir",
  FestivalFae_Cascade_20191117: "Cascade",
  Historic_Launch_20191121: "Historic",
  Historic_Pauper_20191128: "Historic Pauper 11/19",
  Historic_Pauper_20200328: "Historic Pauper",
  Workshop_Draft_IKO_20200504: "Draft IKO",
  Monthly_Brawl_20191212: "Brawl",
  Play_Brawl_20200415: "Brawl",
  Historic_Artisan_20191220: "Artisan",
  Historic_Event: "Historic",
  Traditional_Historic_Event: "Historic",
  FNM_PlayAnyDeck_20200403: "Standard",
  CubeSealed_Arena_20200404: "Sealed",
  Esports_MPC_20200404: "Traditional Standard",
  Sealed_IKO_20200416: "Sealed",
  FNM_HistoricArtisan_20200522: "Historic",
  Jumpstart_M21_20200716: "Jumpstart",

  Brawl_Launch_20191024: "Brawl",
  Precon_Brawl_ELD: "Brawl",
  Lore_WAR1_Momir: "Momir",
  Lore_WAR2_Pauper: "Pauper",
  Lore_WAR3_Singleton: "Singleton",
  Lore_WAR4_OverflowingCounters: "Counters",
  Lore_WAR5_Ravnica: "Ravnica Constructed",
  Planecation1_GuildBattle: "Precon",
  Planecation2_Treasure: "Treasure",
  Planecation3_Singleton: "Singleton",
  Planecation4_Shakeup: "Shakeup",
  Planecation5_Landfall: "Landfall",
  Giant_Monsters_20190719: "Giant Monsters",
};

// These are the current events in the ranked ladder
export const LIMITED_RANKED_EVENTS = [
  "QuickDraft_ELD_20201113",
  "QuickDraft_ZNR_20201030",
  "PremierDraft_KLR_20201112",
  "PremierDraft_ZNR_20200917",
];

export const STANDARD_RANKED_EVENTS = [
  "Ladder",
  "Traditional_Ladder",
  "Historic_Ladder",
  "Traditional_Historic_Ladder",
];

export const SINGLE_MATCH_EVENTS = [
  "Play",
  "Historic_Play",
  "AIBotMatch",
  "NPE",
  "DirectGame",
  "Ladder",
  "Constructed_BestOf3",
  "Historic_Ladder",
];

/*
  "Kaladesh": {
    collation: 62242,
    scryfall: "kld",
    code: "KLD",
    arenacode: "KLD",
    tile: 63859
  },
  "Aether Revolt": {
    collation: 62979,
    scryfall: "aer",
    code: "AER",
    arenacode: "AER",
    tile: 64647
  },
  "Welcome Deck 2017": {
    collation: false,
    scryfall: "w17",
    code: "W17",
    arenacode: "W17",
    tile: 67106
  },
  "Amonkhet": {
    collation: 100003,
    scryfall: "akh",
    code: "AKH",
    arenacode: "AKH",
    tile: 64827
  },
  "Hour of Devastation": {
    collation: 100004,
    scryfall: "hou",
    code: "HOU",
    arenacode: "HOU",
    tile: 65759
  },
  "Oath of the Gatewatch": {
    collation: false,
    scryfall: "ogw",
    code: "OGW",
    arenacode: "OGW",
    tile: 67106
  },
*/

export const SETS_DATA: Record<string, CardSet> = {
  Ixalan: {
    collation: 100005,
    scryfall: "xln",
    code: "XLN",
    arenacode: "XLN",
    tile: 66433,
    release: "2017-09-29",
  },
  "Rivals of Ixalan": {
    collation: 100006,
    scryfall: "rix",
    code: "RIX",
    arenacode: "RIX",
    tile: 66937,
    release: "2018-01-19",
  },
  Dominaria: {
    collation: 100007,
    scryfall: "dom",
    code: "DOM",
    arenacode: "DAR",
    tile: 67106,
    release: "2018-04-27",
  },
  "Core Set 2019": {
    collation: 100008,
    scryfall: "m19",
    code: "M19",
    arenacode: "M19",
    tile: 68116,
    release: "2018-07-13",
  },
  "Arena New Player Experience": {
    collation: false,
    scryfall: "ana",
    code: "ANA",
    arenacode: "ANA",
    tile: 67106,
    release: "2018-07-14",
  },
  "Arena New Player Experience 2020": {
    collation: false,
    scryfall: "ana",
    code: "ANB",
    arenacode: "ANB",
    tile: 67106,
    release: "2020-08-13",
  },
  "Guilds of Ravnica": {
    collation: 100009,
    scryfall: "grn",
    code: "GRN",
    arenacode: "GRN",
    tile: 68674,
    release: "2018-10-05",
  },
  "M19 Gift Pack": {
    collation: false,
    scryfall: "g18",
    code: "G18",
    arenacode: "G18",
    tile: 68116,
    release: "2018-07-13",
  },
  "Ravnica Allegiance": {
    collation: 100010,
    scryfall: "rna",
    code: "RNA",
    arenacode: "RNA",
    tile: 69294,
    release: "2019-01-25",
  },
  "War of the Spark": {
    collation: 100013,
    scryfall: "war",
    code: "WAR",
    arenacode: "WAR",
    tile: 69656,
    release: "2019-05-03",
  },
  "Core Set 2020": {
    collation: 100014,
    scryfall: "m20",
    code: "M20",
    arenacode: "M20",
    tile: 69912,
    release: "2019-07-12",
  },
  "Throne of Eldraine": {
    collation: 100015,
    scryfall: "eld",
    code: "ELD",
    arenacode: "ELD",
    tile: 70338,
    release: "2019-10-04",
  },
  "Theros: Beyond Death": {
    collation: 100016,
    scryfall: "thb",
    code: "THB",
    arenacode: "THB",
    tile: 70735,
    release: "2020-01-24",
  },
  "Ikoria: Lair of Behemoths": {
    collation: 100017,
    scryfall: "iko",
    code: "IKO",
    arenacode: "IKO",
    tile: 71242,
    release: "2020-04-16",
  },
  "Core Set 2021": {
    collation: 100018,
    scryfall: "m21",
    code: "M21",
    arenacode: "M21",
    tile: 71783,
    release: "2020-06-04",
  },
  "Zendikar Rising": {
    collation: 100020,
    scryfall: "znr",
    code: "ZNR",
    arenacode: "ZNR",
    tile: 67003,
    release: "2020-09-25",
  },
  // Other sets below
  "Mythic Edition": {
    collation: -1,
    scryfall: "med",
    code: "MED",
    arenacode: "MED",
    tile: 68674,
    release: "2018-10-06",
  },
  Mirage: {
    collation: -1,
    scryfall: "mir",
    code: "MI",
    arenacode: "MI",
    tile: 67003,
    release: "1996-10-08",
  },
  "Battle for Zendikar": {
    collation: -1,
    scryfall: "bfz",
    code: "BFZ",
    arenacode: "BFZ",
    tile: 67003,
    release: "2015-10-02",
  },
  "Return to Ravnica": {
    collation: -1,
    scryfall: "rtr",
    code: "RTR",
    arenacode: "RTR",
    tile: 67003,
    release: "2012-10-05",
  },
  "Rise of Eldrazi": {
    collation: -1,
    scryfall: "roe",
    code: "ROE",
    arenacode: "ROE",
    tile: 67003,
    release: "2010-04-23",
  },
  Amonkhet: {
    collation: -1,
    scryfall: "akh",
    code: "AKH",
    arenacode: "AKH",
    tile: 64827,
    release: "2017-04-28",
  },
  Planeshift: {
    collation: -1,
    scryfall: "pls",
    code: "PS",
    arenacode: "PS",
    tile: 64827,
    release: "2001-02-05",
  },
  Scourge: {
    collation: -1,
    scryfall: "scg",
    code: "SCG",
    arenacode: "SCG",
    tile: 64827,
    release: "2003-05-26",
  },
  Darksteel: {
    collation: -1,
    scryfall: "dst",
    code: "DST",
    arenacode: "DST",
    tile: 64827,
    release: "2004-02-06",
  },
  "Fifth Dawn": {
    collation: -1,
    scryfall: "5dn",
    code: "5DN",
    arenacode: "5DN",
    tile: 64827,
    release: "2004-06-04",
  },
  "Ninth Edition": {
    collation: -1,
    scryfall: "9ed",
    code: "9ED",
    arenacode: "9ED",
    tile: 64827,
    release: "2005-07-29",
  },
  "Ravnica: City of Guilds": {
    collation: -1,
    scryfall: "rav",
    code: "RAV",
    arenacode: "RAV",
    tile: 64827,
    release: "2005-10-07 ",
  },
  Dissension: {
    collation: -1,
    scryfall: "dis",
    code: "DIS",
    arenacode: "DIS",
    tile: 64827,
    release: "2006-05-05 ",
  },
  "Tenth Edition": {
    collation: -1,
    scryfall: "10e",
    code: "10E",
    arenacode: "10E",
    tile: 64827,
    release: "2007-07-13",
  },
  "Masters Edition II": {
    collation: -1,
    scryfall: "me2",
    code: "ME2",
    arenacode: "ME2",
    tile: 64827,
    release: "2008-09-22",
  },
  "Magic 2011": {
    collation: -1,
    scryfall: "m11",
    code: "M11",
    arenacode: "M11",
    tile: 64827,
    release: "2010-07-16",
  },
  "Masters Edition IV": {
    collation: -1,
    scryfall: "me4",
    code: "ME4",
    arenacode: "ME4",
    tile: 64827,
    release: "2011-01-10",
  },
  "Commander 2011": {
    collation: -1,
    scryfall: "cmd",
    code: "CMD",
    arenacode: "CMD",
    tile: 64827,
    release: "2011-06-17",
  },
  "Avacyn Restored": {
    collation: -1,
    scryfall: "avr",
    code: "AVR",
    arenacode: "AVR",
    tile: 64827,
    release: "2012-05-04",
  },
  "Champions of Kamigawa": {
    collation: -1,
    scryfall: "chk",
    code: "CHK",
    arenacode: "CHK",
    tile: 64827,
    release: "2004-10-01",
  },
  "New Phyrexia": {
    collation: -1,
    scryfall: "nph",
    code: "NPH",
    arenacode: "NPH",
    tile: 64827,
    release: "2011-05-13",
  },
  Zendikar: {
    collation: -1,
    scryfall: "zen",
    code: "ZEN",
    arenacode: "ZEN",
    tile: 64827,
    release: "2009-10-02",
  },
  Gatecrash: {
    collation: -1,
    scryfall: "gtc",
    code: "GTC",
    arenacode: "GTC",
    tile: 64827,
    release: "2013-02-01",
  },
  "Commander 2013": {
    collation: -1,
    scryfall: "c13",
    code: "C13",
    arenacode: "C13",
    tile: 64827,
    release: "2013-11-01",
  },
  "Eldritch Moon": {
    collation: -1,
    scryfall: "emn",
    code: "EMN",
    arenacode: "EMN",
    tile: 64827,
    release: "2016-07-22",
  },
  "Dragons of Tarkir": {
    collation: -1,
    scryfall: "dtk",
    code: "DTK",
    arenacode: "DTK",
    tile: 64827,
    release: "2015-03-27",
  },
  Weatherlight: {
    collation: -1,
    scryfall: "wth",
    code: "WTH",
    arenacode: "WTH",
    tile: 64827,
    release: "1997-06-09",
  },
  Invasion: {
    collation: -1,
    scryfall: "inv",
    code: "INV",
    arenacode: "INV",
    tile: 64827,
    release: "2000-10-02",
  },
  "Eighth Edition": {
    collation: -1,
    scryfall: "8ed",
    code: "8ED",
    arenacode: "8ED",
    tile: 64827,
    release: "2003-07-28",
  },
  "Saviors of Kamigawa": {
    collation: -1,
    scryfall: "sok",
    code: "SOK",
    arenacode: "SOK",
    tile: 64827,
    release: "2005-06-03",
  },
  Lorwyn: {
    collation: -1,
    scryfall: "lrw",
    code: "LRW",
    arenacode: "LRW",
    tile: 64827,
    release: "2007-10-12 ",
  },
  Morningtide: {
    collation: -1,
    scryfall: "mor",
    code: "MOR",
    arenacode: "MOR",
    tile: 64827,
    release: "2008-02-01",
  },
  "Magic 2010": {
    collation: -1,
    scryfall: "m10",
    code: "M10",
    arenacode: "M10",
    tile: 64827,
    release: "2009-07-17",
  },
  Worldwake: {
    collation: -1,
    scryfall: "wwk",
    code: "WWK",
    arenacode: "WWK",
    tile: 64827,
    release: "2009-07-17",
  },
  "Magic Origins": {
    collation: -1,
    scryfall: "ori",
    code: "ORI",
    arenacode: "ORI",
    tile: 64827,
    release: "2015-07-17",
  },
  "Modern Horizons": {
    collation: -1,
    scryfall: "mh1",
    code: "MH1",
    arenacode: "MH1",
    tile: 64827,
    release: "2019-06-14",
  },
  "Shadows over Innistrad": {
    collation: -1,
    scryfall: "soi",
    code: "SOI",
    arenacode: "SOI",
    tile: 64827,
    release: "2016-04-08",
  },
  "Vintage Masters": {
    collation: -1,
    scryfall: "vma",
    code: "VMA",
    arenacode: "VMA",
    tile: 64827,
    release: "2014-06-16",
  },
  "Modern Masters": {
    collation: -1,
    scryfall: "mma",
    code: "MMA",
    arenacode: "MMA",
    tile: 64827,
    release: "2013-06-07",
  },
  "Journey into Nyx": {
    collation: -1,
    scryfall: "jou",
    code: "JOU",
    arenacode: "JOU",
    tile: 64827,
    release: "2014-05-02",
  },
  Theros: {
    collation: -1,
    scryfall: "ths",
    code: "THS",
    arenacode: "THS",
    tile: 64827,
    release: "2013-09-27",
  },
  "Magic 2014": {
    collation: -1,
    scryfall: "m14",
    code: "M14",
    arenacode: "M14",
    tile: 64827,
    release: "2013-07-19",
  },
  "Duel Decks: Elspeth vs. Tezzeret": {
    collation: -1,
    scryfall: "ddf",
    code: "DDF",
    arenacode: "DDF",
    tile: 64827,
    release: "2010-09-03",
  },
  Shadowmoor: {
    collation: -1,
    scryfall: "shm",
    code: "SHM",
    arenacode: "SHM",
    tile: 64827,
    release: "2008-05-02",
  },
  Mirrodin: {
    collation: -1,
    scryfall: "mrd",
    code: "MRD",
    arenacode: "MRD",
    tile: 64827,
    release: "2003-10-02",
  },
  Odyssey: {
    collation: -1,
    scryfall: "ody",
    code: "ODY",
    arenacode: "ODY",
    tile: 64827,
    release: "2001-10-01",
  },
  "Magic 2013": {
    collation: -1,
    scryfall: "m13",
    code: "M13",
    arenacode: "M13",
    tile: 67003,
    release: "2012-07-13",
  },
  "Mercadian Masques": {
    collation: -1,
    scryfall: "mmq",
    code: "MMQ",
    arenacode: "MMQ",
    tile: 67003,
    release: "1999-10-04",
  },
  Onslaught: {
    collation: -1,
    scryfall: "ons",
    code: "ONS",
    arenacode: "ONS",
    tile: 67003,
    release: "2002-10-07",
  },
  "Shards of Alara": {
    collation: -1,
    scryfall: "ala",
    code: "ALA",
    arenacode: "ALA",
    tile: 67003,
    release: "2008-10-03",
  },
  "Scars of Mirrodin": {
    collation: -1,
    scryfall: "som",
    code: "SOM",
    arenacode: "SOM",
    tile: 67003,
    release: "2010-10-01",
  },
  Innistrad: {
    collation: -1,
    scryfall: "isd",
    code: "ISD",
    arenacode: "ISD",
    tile: 67003,
    release: "2011-09-30",
  },
  Conflux: {
    collation: -1,
    scryfall: "con",
    code: "CONF",
    arenacode: "CONF",
    tile: 67003,
    release: "2009-02-06",
  },
  "Dark Ascension": {
    collation: -1,
    scryfall: "dka",
    code: "DKA",
    arenacode: "DKA",
    tile: 67003,
    release: "2012-02-03",
  },
  "Magic 2015": {
    collation: -1,
    scryfall: "m15",
    code: "M15",
    arenacode: "M15",
    tile: 67003,
    release: "2014-07-18",
  },
  Unsanctioned: {
    collation: -1,
    scryfall: "und",
    code: "UND",
    arenacode: "UND",
    tile: 67003,
    release: "2020-02-29",
  },
  "Alara Reborn": {
    collation: -1,
    scryfall: "arb",
    code: "ARB",
    arenacode: "ARB",
    tile: 67003,
    release: "2009-04-30",
  },
  "Secret Lair Drop": {
    collation: -1,
    scryfall: "sld",
    code: "SLD",
    arenacode: "SLD",
    tile: 67003,
    release: "2002-02-04",
  },
  Torment: {
    collation: -1,
    scryfall: "tor",
    code: "TOR",
    arenacode: "TOR",
    tile: 67003,
    release: "2002-02-04",
  },
  Judgment: {
    collation: -1,
    scryfall: "jud",
    code: "JUD",
    arenacode: "JUD",
    tile: 67003,
    release: "2002-05-27",
  },
  Legions: {
    collation: -1,
    scryfall: "lgn",
    code: "LGN",
    arenacode: "LGN",
    tile: 67003,
    release: "2003-02-03",
  },
  "Time Spiral": {
    collation: -1,
    scryfall: "tsp",
    code: "TSP",
    arenacode: "TSP",
    tile: 67003,
    release: "2006-10-06",
  },
  "Magic 2012": {
    collation: -1,
    scryfall: "m12",
    code: "M12",
    arenacode: "M12",
    tile: 67003,
    release: "2011-07-15",
  },
  "Planar Chaos": {
    collation: -1,
    scryfall: "plc",
    code: "PLC",
    arenacode: "PLC",
    tile: 67003,
    release: "2007-02-02",
  },
  "Dragon's Maze": {
    collation: -1,
    scryfall: "dgm",
    code: "DGM",
    arenacode: "DGM",
    tile: 67003,
    release: "2013-05-03",
  },
  Unstable: {
    collation: -1,
    scryfall: "ust",
    code: "UST",
    arenacode: "UST",
    tile: 67003,
    release: "2017-12-08",
  },
  Jumpstart: {
    collation: -1,
    scryfall: "jmp",
    code: "JMP",
    arenacode: "JMP",
    tile: 67003,
    release: "2020-07-17",
  },
  "Historic Anthology 1": {
    collation: -1,
    scryfall: "ha1",
    code: "HA1",
    arenacode: "HA1",
    tile: 67003,
    release: "2019-11-21",
  },
  "Historic Anthology 2": {
    collation: -1,
    scryfall: "ha2",
    code: "HA2",
    arenacode: "HA2",
    tile: 67003,
    release: "2020-03-12",
  },
  "Historic Anthology 3": {
    collation: -1,
    scryfall: "ha3",
    code: "HA3",
    arenacode: "HA3",
    tile: 67003,
    release: "2020-05-21",
  },
  "Amonkhet Remastered": {
    collation: 100019,
    scryfall: "akr",
    code: "AKR",
    arenacode: "AKR",
    tile: 67003,
    release: "2020-08-13",
  },
  "Kaladesh Remastered": {
    collation: 100021,
    scryfall: "klr",
    code: "KLR",
    arenacode: "KLR",
    tile: 67003,
    release: "2020-11-12",
  },
  "": {
    collation: -1,
    scryfall: "default",
    code: "",
    arenacode: "",
    tile: 67003,
    release: "2000-00-00",
  },
};

export const COLORS = [
  "{?}",
  "{W}",
  "{U}",
  "{B}",
  "{R}",
  "{G}",
  "{C}",
  "",
  "{X}",
];

export const RARITY: Rarity[] = [
  "token",
  "land",
  "common",
  "uncommon",
  "rare",
  "mythic",
];

export const SET_NAMES: Record<string, string> = {
  W17: "Welcome Deck 2017",
  KLD: "Kaladesh",
  AER: "Aether Revolt",
  AKH: "Amonkhet",
  HOU: "Hour of Devastation",
  XLN: "Ixalan",
  RIX: "Rivals of Ixalan",
  DAR: "Dominaria",
  OGW: "Oath of the Gatewatch",
  M19: "Core Set 2019",
  ANA: "Arena New Player Experience",
  ANB: "Arena New Player Experience",
  GRN: "Guilds of Ravnica",
  G18: "M19 Gift Pack",
  RNA: "Ravnica Allegiance",
  WAR: "War of the Spark",
  M20: "Core Set 2020",
  M21: "Core Set 2021",
  ZNR: "Zendikar Rising",
  MI: "Mirage",
  ROE: "Rise of Eldrazi",
  RTR: "Return to Ravnica",
  BFZ: "Battle for Zendikar",
  ELD: "Throne of Eldraine",
  PS: "Planeshift",
  SCG: "Scourge",
  DST: "Darksteel",
  "5DN": "Fifth Dawn",
  "9ED": "Ninth Edition",
  RAV: "Ravnica: City of Guilds",
  DIS: "Dissension",
  "10E": "Tenth Edition",
  ME2: "Masters Edition II",
  M11: "Magic 2011",
  ME4: "Masters Edition IV",
  CMD: "Commander 2011",
  AVR: "Avacyn Restored",
  CHK: "Champions of Kamigawa",
  NPH: "New Phyrexia",
  ZEN: "Zendikar",
  GTC: "Gatecrash",
  C13: "Commander 2013",
  EMN: "Eldritch Moon",
  DTK: "Dragons of Tarkir",
  MIR: "Mirage",
  WTH: "Weatherlight",
  INV: "Invasion",
  PLS: "Planeshift",
  "8ED": "Eighth Edition",
  SOK: "Saviors of Kamigawa",
  LRW: "Lorwyn",
  MOR: "Morningtide",
  M10: "Magic 2010",
  WWK: "Worldwake",
  ORI: "Magic Origins",
  MH1: "Modern Horizons",
  THB: "Theros: Beyond Death",
  SOI: "Shadows over Innistrad",
  VMA: "Vintage Masters",
  MMA: "Modern Masters",
  JOU: "Journey into Nyx",
  THS: "Theros",
  M14: "Magic 2014",
  DDF: "Duel Decks: Elspeth vs. Tezzeret",
  SHM: "Shadowmoor",
  MRD: "Mirrodin",
  ODY: "Odyssey",
  M13: "Magic 2013",
  MMQ: "Mercadian Masques",
  ONS: "Onslaught",
  ALA: "Shards of Alara",
  SOM: "Scars of Mirrodin",
  ISD: "Innistrad",
  CONF: "Conflux",
  DKA: "Dark Ascension",
  M15: "Magic 2015",
  UND: "Unsanctioned",
  ARB: "Alara Reborn",
  IKO: "Ikoria: Lair of Behemoths",
  SLD: "Secret Lair Drop",
  TOR: "Torment",
  JUD: "Judgment",
  LGN: "Legions",
  TSP: "Time Spiral",
  M12: "Magic 2012",
  PLC: "Planar Chaos",
  DGM: "Dragon's Maze",
  UST: "Unstable",
  JMP: "Jumpstart",
  HA1: "Historic Anthology 1",
  HA2: "Historic Anthology 2",
  HA3: "Historic Anthology 3",
  AKR: "Amonkhet Remastered",
  KLR: "Kaladesh Remastered",
};

/*
  Sets are stored temporarly when reading from scryfall to index the new
  database (generateScryfallDatabase), so we can read their scryfall data
  later when indexing the new cards.json.
  
  NO_DUPES_ART_SETS contains sets that are accessed by their card name only;
    ScryfallCards[LANG][SET][CARDNAME]
  Every other set is accessed by both their card name and collectors number;
    ScryfallCards[LANG][SET][CARDNAME][COLLECTOR]
  
  This is because some cards in arena dont have exact *data* matches in paper,
  like promo cards (pm20), so we store them by name to access them directly.
  This is not possible with all sets because most have multiple artworks of 
  he same card, like basic lands.

  DO NOT add sets here that contain multiple artworks of the same card name!
*/
export const NO_DUPES_ART_SETS = [
  "pm20",
  "g18",
  "pgrn",
  "pdom",
  "prix",
  "f05",
  "unh",
  "c16",
  "mir",
  "ajmp",
  "akr",
  "klr",
];

/*
 Similarly, some sets card names are changed and we can only rely on their Card IDs
 So we access them like this;
   ScryfallCards[LANG][SET][COLLECTOR]
*/
export const CID_ART_SETS = ["iko", "sld"];

export const ALLOWED_SCRYFALL = [
  "thb",
  "eld",
  "m20",
  "war",
  "rna",
  "grn",
  "med",
  "m19",
  "ana",
  "anb",
  "dom",
  "rix",
  "xln",
  "tthb",
  "teld",
  "tm20",
  "twar",
  "trna",
  "tgrn",
  "tm19",
  "tdom",
  "trix",
  "txln",
  "pm20",
  "g18",
  "pgrn",
  "pdom",
  "prix",
  "f05",
  "roe",
  "rtr",
  "bfz",
  "mir",
  "akh",
  "unh",
  "und",
  "c16",
  "pls",
  "scg",
  "dst",
  "5dn",
  "9ed",
  "rav",
  "dis",
  "10e",
  "me2",
  "m11",
  "me4",
  "cmd",
  "avr",
  "chk",
  "nph",
  "zen",
  "gtc",
  "c13",
  "emn",
  "temn",
  "dtk",
  "mir",
  "wth",
  "inv",
  "pls",
  "8ed",
  "sok",
  "lrw",
  "tlrw",
  "mor",
  "m10",
  "wwk",
  "ori",
  "mh1",
  "soi",
  "vma",
  "mma",
  "jou",
  "ths",
  "m14",
  "ddf",
  "shm",
  "mrd",
  "ody",
  "m13",
  "tm13",
  "mmq",
  "ons",
  "ala",
  "som",
  "isd",
  "con",
  "dka",
  "m15",
  "arb",
  "iko",
  "tiko",
  "sld",
  "tsoi",
  "tor",
  "jud",
  "lgn",
  "tsp",
  "m12",
  "plc",
  "dgm",
  "pr2",
  "twwk",
  "tcon",
  "tshm",
  "tlrw",
  "tmh1",
  "p04",
  "pr2",
  "tm15",
  "tths",
  "tcn2",
  "m21",
  "tm21",
  "ust",
  "tust",
  "jmp",
  "tcn2",
  "csp",
  "ajmp",
  "tjmp",
  "takr",
  "takr",
  "hou",
  "thou",
  "akr",
  "takr",
  "znr",
  "tznr",
  "klr",
  "tklr",
];

export const RANKS_SHEETS = [
  {
    setCode: "war",
    sheet: "1pk3a1YKGas-NI4ze_8hbwOtVRdYAbzCDIBS9MKjcQ7M",
    page: "Staging%20Sheet",
    source: RATINGS_MTGCSR,
  },
  {
    setCode: "rna",
    sheet: "1DfcITmtWaBHtiDYLYWHzizw-AOrB3GUQaapc_BqfeH4",
    page: "Staging%20Sheet",
    source: RATINGS_MTGCSR,
  },
  {
    setCode: "grn",
    sheet: "1FPN3hgl6x_ePq-8On7Ebr8L6WHSU2IznoWSBoGaC_RQ",
    page: "Staging%20Sheet",
    source: RATINGS_MTGCSR,
  },
  {
    setCode: "m19",
    sheet: "1aZlqE-8mGdfQ50NXUaP-9dRk3w_hp9XmcBqZ_4x3_jk",
    page: "Staging%20Sheet",
    source: RATINGS_MTGCSR,
  },
  {
    setCode: "dom",
    sheet: "1cc-AOmpQZ7vKqxDTSSvhmRBVOCy_569kT0S-j-Rpbj8",
    page: "Staging%20Sheet",
    source: RATINGS_MTGCSR,
  },
  {
    setCode: "rix",
    sheet: "1CNg-FDp-pOtQ14Qj-rIBO-yfyr5YcPA6n6ztrEe4ATg",
    page: "Staging%20Sheet",
    source: RATINGS_MTGCSR,
  },
  {
    setCode: "xln",
    sheet: "1KDtLJd6Nkrv_DDpFs84soBZcWPG1tg79TnVEh-enPz8",
    page: "Staging%20Sheet",
    source: RATINGS_MTGCSR,
  },
  {
    setCode: "m20",
    sheet: "1BAPtQv4U9KUAtVzkccJlPS8cb0s_uOcGEDORip5uaQg",
    page: "Staging%20Sheet",
    source: RATINGS_MTGCSR,
  },
  {
    setCode: "eld",
    sheet: "1B-bEUGANnGFPB4zW-vAV8zHjUZINwLU8Qq1sVlgIdpU",
    page: "Staging%20Sheet",
    source: RATINGS_MTGCSR,
  },
  {
    setCode: "thb",
    sheet: "1zxR9zQxdEH9XI7CZmxiKeTQdU2nD8bVgYJ4bLUwV53s",
    page: "Staging%20Sheet",
    source: RATINGS_MTGCSR,
  },
  {
    setCode: "iko",
    sheet: "1frdwYEvl4fUoVUwwoaz6q2hggVZHwggaitAk4ZGZDz8",
    page: "Backend",
    source: RATINGS_LOLA,
  },
  {
    setCode: "m21",
    sheet: "15HMdmkNmzTFIAITQm4LVZVBnVFB26Bn3HOJqQvMy2Mc",
    page: "Backend",
    source: RATINGS_LOLA,
  },
  {
    setCode: "znr",
    sheet: "1SnHlQd7o5Wd01iwtllOvre9svfNimWX0OoqQg-bO8-A",
    page: "Backend",
    source: RATINGS_LOLA,
  },
  {
    setCode: "klr",
    sheet: "1yNNsSS5ZTc53yKnJFoH_8UCl_bhQk77WhqDVPp2927M",
    page: "Backend",
    source: RATINGS_LOLA,
  },
];

// for some reason, scryfall does not provide this yet
// this is a manual port of the SVG
export const ARENA_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 768 597"><path d="M347.576 239.949c-2.473-55.145-8.067-76.085-11.774-76.085-3.762 0-4.946 30.544-9.89 57.535-4.946 26.929-13.654 57.468-13.654 57.468l-22.256-7.19s-6.24-38.967-8.71-85.665c-2.416-46.7-4.299-87.485-11.184-87.485-6.718-.049-8.007 38.346-10.48 88.1-2.475 49.725-11.126 77.265-11.126 77.265l-20.426-2.414s-9.892-43.13-13.603-174.876c-.86-31.181-9.834-37.438-9.834-37.438s-8.979 6.257-9.839 37.438c-3.707 131.746-13.654 174.876-13.654 174.876l-20.375 2.414s-8.704-27.54-11.177-77.265c-2.473-49.754-3.713-88.149-10.48-88.1-6.83 0-8.713 40.785-11.242 87.485-2.415 46.698-8.6 85.665-8.6 85.665l-22.256 7.19s-8.705-30.54-13.65-57.468c-4.945-26.991-6.184-57.535-9.89-57.535-3.712 0-9.3 20.94-11.774 76.085-2.473 55.075-3.063 65.842-3.063 65.842s73.053 26.398 101.49 94.715c28.491 68.276 35.694 127.56 35.909 134.142.373 10.216 8.6 11.516 8.6 11.516s7.152-1.3 8.602-11.516c.912-6.535 7.417-65.866 35.904-134.142 28.441-68.317 101.495-94.715 101.495-94.715s-.594-10.767-3.063-65.842"></path><path d="M273.537 0c-9.573 8.966-7.488 17.264 6.254 24.895 20.613 11.445 225.805 465.27 225.805 497.761 0 21.662-6.136 41.568-18.407 59.719-2.14 9.263.392 13.895 7.598 13.895H763.71c5.154 0 5.154-4.632 0-13.895-35.035-33.824-101.34-130.195-258.113-528.172-1.877-16.954 2.127-29.228 12.012-36.82.315-7.19-1.609-12.985-5.77-17.383h-238.3zM4.705 578.738c59.145-76.265 100.637-127.355 100.637-183.566 0-21.385 66.03 30.783 78.899 192.19.13 1.635-.742 4.939-5.343 4.939H4.705c-6.273-3.922-6.273-8.443 0-13.563z"></path></svg>`;

export const AKR_SVG = `<svg width="11.985" height="13.996" version="1.1" viewBox="0 0 11.985 13.996" xmlns="http://www.w3.org/2000/svg"><style/><path d="m5.9929 10.106-3.438-2.024c-0.35-0.24-0.503-0.513-0.46-0.816 0.02-0.34 0.397-0.785 1.127-1.333 0.824-0.747 1.325-1.425 1.503-2.034 0.279-0.85 0.264-2.15-0.044-3.899 0.087 1.21-0.249 2.407-1.009 3.589a5.39 5.39 0 0 1-0.844 0.981c-0.614 0.524-1.219 0.961-1.814 1.311-0.582 0.403-0.909 0.884-0.98 1.445-0.138 0.836 0.145 1.48 0.847 1.931l5.112 2.962 5.111-2.962c0.703-0.451 0.985-1.095 0.847-1.93-0.07-0.562-0.398-1.043-0.98-1.446-0.595-0.35-1.2-0.787-1.814-1.31a5.39 5.39 0 0 1-0.844-0.982c-0.76-1.182-1.096-2.379-1.01-3.589-0.307 1.75-0.322 3.05-0.042 3.899 0.177 0.609 0.678 1.287 1.502 2.034 0.73 0.548 1.106 0.992 1.127 1.333 0.043 0.303-0.11 0.575-0.46 0.816l-3.437 2.024"/><path d="m5.9929 13.105-5.128-3.103-0.541 0.63 5.669 3.364 5.668-3.365-0.54-0.63-5.128 3.104m0-9.041-2.907 3.366 2.907 1.734 2.906-1.734-2.906-3.366"/></svg>`;

export const KLR_SVG = `<svg width="15.49mm" height="18.11mm" version="1.1" viewBox="0 0 15.49 18.11" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-116.7 -8.899)"><path d="m124.4 27.01c-2.887-1.833-7.693-3.115-7.743-9.376-0.01-1.843 1.119-3.866 2.857-5.048 0.5595-0.3706 2.717-1.422 2.368-2.194-0.4796-1.042-1.918 0.1803-1.019 0.6411-0.2797 0.2204-0.7293 0.1603-0.9691-0.2304-0.2698-0.4507 0.04-1.172 0.7793-1.603 0.6894-0.4107 1.678-0.4808 2.538 0.3105 1.029 0.9516 1.089 2.775 0.3497 4.237-0.4296 0.8714-1.529 1.422-1.199 2.194 0.1698 0.4107 1.049 0.4407 1.109-0.08013 0.0599-0.4007-0.5894-0.5008-0.6694-0.04007-0.2598-0.2304 0.05-1.022 0.7393-0.8414 0.4496 0.1302 0.6894 0.9215 0.2598 1.563-0.3197 0.4608-1.389 0.8013-2.178-0.1302-0.6694 0.591-1.369 2.344-0.04 3.035 0.4296 0.2204 0.7693 0.01002 0.8692-0.2304 0.2198-0.4908-0.4796-0.9516-0.8792-0.3205-0.3996-0.581 0.5095-1.533 1.479-0.7012 0.4995 0.4207 0.5095 1.422 0.0799 2.083-0.4396 0.6811-1.608 0.7613-2.628-0.1302-0.8492-0.7412-0.9591-2.043-0.5894-3.115-0.6094-0.2504-0.7992-0.9115-0.6294-1.462 0.1898-0.601 0.9391-1.102 1.459-0.5108-0.4796-0.1202-0.9291 0.3606-0.7493 0.6611 0.2298 0.3706 0.5595 0.2003 0.8092 0.01002 0.3896-0.3005 0.8892-0.8514 1.059-1.212 0.2198-0.4808-0.0999-1.523-1.439-1.042-0.9991 0.3606-2.268 2.043-2.158 3.906 0.2198 3.566 3.597 5.439 6.134 5.439 2.538 0 5.924-1.873 6.134-5.439 0.1199-1.863-1.149-3.546-2.158-3.906-1.339-0.4808-1.648 0.5609-1.429 1.042 0.1698 0.3606 0.6694 0.9115 1.059 1.212 0.2498 0.1903 0.5795 0.3606 0.7992-0.01002 0.1898-0.3005-0.2598-0.7813-0.7393-0.6611 0.5095-0.591 1.269-0.09015 1.459 0.5108 0.1698 0.5509-0.03 1.212-0.6394 1.462 0.3796 1.072 0.2698 2.374-0.5795 3.115-1.019 0.8915-2.188 0.8113-2.638 0.1302-0.4296-0.6611-0.4096-1.663 0.0799-2.083 0.9791-0.8314 1.888 0.1202 1.479 0.7012-0.3896-0.631-1.089-0.1703-0.8792 0.3205 0.0999 0.2404 0.4496 0.4507 0.8792 0.2304 1.329-0.6911 0.6294-2.444-0.04-3.035-0.7893 0.9315-1.868 0.591-2.178 0.1302-0.4396-0.6411-0.1998-1.432 0.2498-1.563 0.6894-0.1803 0.9991 0.611 0.7493 0.8414-0.0899-0.4608-0.7293-0.3606-0.6794 0.04007 0.0699 0.5209 0.9391 0.4908 1.119 0.08013 0.3297-0.7713-0.7693-1.322-1.209-2.194-0.7293-1.462-0.6794-3.285 0.3497-4.237 0.8692-0.7913 1.858-0.7212 2.538-0.3105 0.7393 0.4307 1.059 1.152 0.7793 1.603-0.2398 0.3906-0.6794 0.4507-0.9591 0.2304 0.8892-0.4608-0.5495-1.683-1.019-0.6411-0.3497 0.7713 1.798 1.823 2.358 2.194 1.748 1.182 2.877 3.205 2.857 5.048-0.04 6.26-4.845 7.542-7.743 9.376z"/></g></svg>`;
