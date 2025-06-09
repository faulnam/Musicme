// DOM Elements
const homePage = document.getElementById("homePage");
const songDetailPage = document.getElementById("songDetailPage");
const playerPage = document.getElementById("playerPage");
const songListElement = document.getElementById("songList");

const backToHomeFromDetailBtn = document.getElementById(
  "backToHomeFromDetailBtn"
);
const backToHomeBtn = document.getElementById("backToHomeBtn"); // Tombol kembali dari player ke home
const bodyElement = document.body;

const backgroundVideoContainer = document.querySelector(
  ".video-background-container"
);
const backgroundVideo = document.getElementById("backgroundVideo");

// Elemen untuk Halaman Detail Lagu (tidak akan langsung digunakan saat klik lagu, tapi tetap di-load)
const detailAlbumArt = document.getElementById("detailAlbumArt");
const detailTrackTitle = document.getElementById("detailTrackTitle");
const detailTrackArtist = document.getElementById("detailTrackArtist");
const detailAlbumName = document.getElementById("detailAlbumName");
const playFromDetailBtn = document.getElementById("playFromDetailBtn"); // Tombol play di halaman detail

const audioPlayer = document.getElementById("audioPlayer");
const albumArtPlayer = document.getElementById("albumArt");
const playerTrackTitle = document.getElementById("playerTrackTitle");
const playerTrackArtist = document.getElementById("playerTrackArtist");
const lyricsContainer = document.getElementById("lyricsContainer");

const playerProgressBarContainer = document.getElementById(
  "playerProgressBarContainer"
);
const playerProgressBar = document.getElementById("playerProgressBar");
const playerCurrentTime = document.getElementById("playerCurrentTime");
const playerTotalDuration = document.getElementById("playerTotalDuration");

const playerPrevBtn = document.getElementById("playerPrevBtn");
const playerPlayPauseBtn = document.getElementById("playerPlayPauseBtn");
const playerNextBtn = document.getElementById("playerNextBtn");
const playerRepeatBtn = document.getElementById("playerRepeatBtn");
const playerShuffleBtn = document.getElementById("playerShuffleBtn");
const playerVolumeSlider = document.getElementById("playerVolumeSlider");
const playerSpeedSlider = document.getElementById("playerSpeedSlider"); // Tambahkan ini
const currentSpeedDisplay = document.getElementById("currentSpeedDisplay"); // Tambahkan ini

// App State
let songs = [
  {
    id: 1,
    title: "Consume",
    artist: "Chase Atlantic",
    album: "Beauty in Death",
    albumArtUrl:
      "https://tse3.mm.bing.net/th?id=OIP.VwivM--7Xx_SmgsqXBLi8AAAAA&pid=Api&P=0&h=220",
    audioSrc: "audio/consume.mp3",
    videoBgSrc: "videos/consume.mp4", // Path video background khusus lagu ini
    // Lirik dengan timestamp dalam detik
    lyrics: [
      { time: 0.8, text: "She said, Careful, or you'll lose it" },
      { time: 4, text: "But, girl, I'm only human," },
      { time: 7, text: "And I know there's a blade where your heart is" },
      { time: 10, text: "And you know how to use it" },
      { time: 13, text: "And you can take my flesh if you want girl" },
      { time: 16, text: "But, baby, don't abuse it (Calm down)" },
      {
        time: 19,
        text: "These voices in my head screaming, Run now (Don't run)",
      },
      { time: 22, text: "I'm praying that they're human" },
      { time: 25, text: "Please understand that I'm trying my hardest" },
      { time: 28, text: "My head's a mess, but I'm trying regardless" },
      { time: 31, text: "Anxiety is one hell of a problem" },
      { time: 34, text: "She's latching onto me, I can't resolve it" },
      { time: 37, text: "It's not right, it's not fair, it's not fair" },
      { time: 41.5, text: "It's not fair, it's not fair, it's not fair" },
      { time: 47, text: "Oh, no, no, no, ooh-ooh" },
    ],
  },
  {
    id: 2,
    title: "Perfect",
    artist: "Ed Sheeran",
    album: "÷ (Divide)",
    albumArtUrl:
      "https://tse4.mm.bing.net/th?id=OIP.TjS4z1jJTsl6K3-ADIXFywHaEK&pid=Api&P=0&h=220",
    audioSrc: "audio/Ed Sheeran - Perfect.mp3",
    videoBgSrc: "videos/perfect_bg.mp4", // Path video background khusus lagu ini
    // Lirik dengan timestamp dalam detik
    lyrics: [
      { time: 2.9, text: "I found a love for me" },
      { time: 10.6, text: "Oh, darlin, just dive right in and follow my lead" },
      { time: 18, text: "I found a girl, beautiful and sweet" },
      { time: 25, text: "I never knew you were the someone waiting for me" },
      { time: 32, text: "'Cause we were just kids when we fell in love" },
      { time: 36.7, text: "Not knowin' what it was" },
      { time: 40.5, text: "I will not give you up this time" },
      { time: 48, text: "But, darlin', just kiss me slow" },
      { time: 51.6, text: "Your heart is all I own" },
      { time: 55.9, text: "And in your eyes, you're holdin' mine" },
      {
        time: 62.3,
        text: "Baby, I'm dancing in the dark with you between my arms",
      },
      {
        time: 73.6,
        text: "Barefoot on the grass, listening to our favorite song",
      },
      {
        time: 80.9,
        text: "When you said you looked a mess, I whispered underneath my breath",
      },
      { time: 88, text: "But you heard it, darling, you look perfect tonight" },
    ],
  },
  {
    id: 3,
    title: "Unconditionally",
    artist: "Katy Perry",
    album: "Prism",
    albumArtUrl: "https://i.ytimg.com/vi/4NGVxU0qhZ8/maxresdefault.jpg",
    audioSrc: "audio/Katy Perry - Unconditionally.mp3",
    videoBgSrc: "videos/unconditionally_bg.mp4", // Path video background khusus lagu ini
    // Lirik dengan timestamp dalam detik
    lyrics: [
      { time: 7.1, text: "Oh no, did I get too close?" },
      { time: 12, text: "Oh, did I almost see what's really on the inside?" },
      { time: 22.6, text: "All your insecurities" },
      { time: 27.3, text: "All the dirty laundry" },
      { time: 30.3, text: "Never made me blink one time" },
      { time: 36.5, text: "Unconditional, unconditionally" },
      { time: 44, text: "I will love you unconditionally" },
      { time: 51, text: "There is no fear now" },
      { time: 55, text: "Let go and just be free" },
      { time: 58.6, text: "I will love you unconditionally" },
      { time: 67, text: "So come just as you are to me" },
      { time: 71, text: "Don't need apologies" },
      { time: 74.9, text: "Know that you are worthy" },
      { time: 82, text: "I'll take your bad days with your good" },
      { time: 86.5, text: "Walk through the storm, I would" },
      { time: 90, text: "I'd do it all because I love you" },
      { time: 96, text: "I love you" },
      { time: 99.5, text: "Unconditional, unconditionally" },
      { time: 107, text: "I will love you unconditionally" },
      { time: 114, text: "There is no fear now" },
      { time: 118, text: "Let go and just be free" },
      { time: 122, text: "I will love you unconditionally" },
      { time: 129.5, text: "So open up your heart and just let it begin" },
      { time: 133, text: "Open up your heart and just let it begin" },
      { time: 136.9, text: "Open up your heart and just let it begin" },
      { time: 141, text: "Open up your heart" },
      { time: 145, text: "Acceptance is the key to be" },
      { time: 150.6, text: "To be truly free" },
      { time: 154, text: "Will you do the same for me?" },
      { time: 162.5, text: "Unconditional, unconditionally" },
      { time: 170, text: "I will love you unconditionally" },
      { time: 177.8, text: "There is no fear now" },
      { time: 181, text: "Let go and just be free" },
      { time: 185, text: "I will love you unconditionally" },
      { time: 200, text: "I will love you (Unconditionally)" },
      { time: 207.8, text: "I will love you" },
      { time: 215, text: "I will love you unconditionally" },
    ],
  },
  {
    id: 4,
    title: "Rewrite the Stars",
    artist: "James Arthur & Anne-Marie",
    album: "The Greatest Showman: Reimagined",
    albumArtUrl: "https://i.ytimg.com/vi/BqGCJUXEqxQ/maxresdefault.jpg",
    audioSrc: "audio/Rewrite The Stars - James Arthur feat. Anne Marie.mp3",
    videoBgSrc: "videos/rewrite_the_stars_bg.mp4",
    lyrics: [
      { time: 7.1, text: "You know I want you" },
      { time: 10.2, text: "It's not a secret I try to hide" },
      { time: 14.0, text: "You know you want me" },
      { time: 17.5, text: "So don't keep sayin' our hands are tied" },
      { time: 20.8, text: "You claim it's not in the cards" },
      {
        time: 25.0,
        text: "And fate is pullin' you miles away and out of reach from me",
      },
      { time: 29.2, text: "But you're here in my heart" },
      {
        time: 32.7,
        text: "So who can stop me if I decide that you're my destiny?",
      },
      { time: 36.5, text: "What if we rewrite the stars?" },
      { time: 39.8, text: "Say you were made to be mine" },
      { time: 43.0, text: "Nothin' could keep us apart" },
      { time: 46.0, text: "You'd be the one I was meant to find" },
      { time: 49.0, text: "It's up to you and it's up to me" },
      { time: 52.0, text: "No one can say what we get to be" },
      { time: 55.5, text: "So why don't we rewrite the stars?" },
      { time: 59.0, text: "Maybe the world could be ours tonight" },
      { time: 62.0, text: "Ah-oh (No, no, no, no)" },
      { time: 63.5, text: "Ah-oh (Mm)" },
      { time: 66.0, text: "You think it's easy" },
      { time: 69.5, text: "You think I don't wanna run to you, yeah" },
      { time: 73.0, text: "But there are mountains (There are mountains)" },
      { time: 76.5, text: "And there are doors that we can't walk through" },
      { time: 79.5, text: "I know you're wonderin' why" },
      {
        time: 82.7,
        text: "Because we're able to be just you and me within these walls",
      },
      { time: 86.0, text: "But when we go outside" },
      {
        time: 89.0,
        text: "You're gonna wake up and see that it was hopeless after all",
      },
      { time: 92.5, text: "No one can rewrite the stars" },
      { time: 95.5, text: "How can you say you'll be mine?" },
      { time: 98.0, text: "Everything keeps us apart" },
      { time: 100.5, text: "And I'm not the one you were meant to find" },
      { time: 104.0, text: "It's not up to you, it's not up to me" },
      { time: 107.5, text: "When everyone tells us what we can be" },
      { time: 111.0, text: "And how can we rewrite the stars?" },
      { time: 114.5, text: "Say that the world can be ours tonight" },
      { time: 117.5, text: "All I want is to fly with you" },
      { time: 120.5, text: "All I want is to fall with you" },
      { time: 123.5, text: "So just give me all of you" },
      { time: 126.0, text: "It feels impossible" },
      { time: 128.5, text: "It's not impossible" },
      { time: 131.0, text: "Is it impossible?" },
      { time: 133.5, text: "Say that it's possible" },
      { time: 136.5, text: "How do we rewrite the stars?" },
      { time: 139.5, text: "Say you were made to be mine" },
      { time: 142.5, text: "And nothin' could keep us apart" },
      { time: 145.5, text: "'Cause you are the one I was meant to find" },
      { time: 148.5, text: "It's up to you and it's up to me" },
      { time: 151.5, text: "No one could say what we get to be" },
      { time: 154.5, text: "And why don't we rewrite the stars?" },
      { time: 157.5, text: "Changin' the world to be ours" },
      { time: 160.0, text: "Ah-oh (No, no, no, no)" },
      { time: 161.5, text: "Ah-oh (Mm)" },
      { time: 164.5, text: "You know I want you" },
      { time: 167.5, text: "It's not a secret I try to hide" },
      { time: 170.5, text: "But I can't have you" },
      { time: 173.5, text: "We're bound to break and my hands are tied" },
    ],
  },
  {
    id: 5,
    title: "Somebody's Pleasure",
    artist: "Aziz Hedra",
    album: "Unreleased",
    albumArtUrl:
      "https://tse3.mm.bing.net/th?id=OIP.5fDFhJU8ZYGRlPD4ffPlgAHaHa&pid=Api&P=0&h=220",
    audioSrc: "audio/Somebodys Pleasure.mp3",
    videoBgSrc: "videos/somebodys_pleasure_bg.mp4",
    lyrics: [
      { time: 5, text: "I've been too busy ignoring and hiding" },
      { time: 9, text: "About what my heart actually say" },
      { time: 13, text: "Stay awake while I'm drowning on my thoughts" },
      { time: 17.5, text: "Sometimes a happiness is just a happiness" },
      { time: 21.5, text: "I've never been enjoying my serenity" },
      { time: 25.5, text: "Even if I've got a lot of company" },
      { time: 29.5, text: "That makes me happy" },
      { time: 32.5, text: "Soul try to figure it out" },
      { time: 35.5, text: "From where I've been escaping" },
      { time: 38.5, text: "Running to end all the sin" },
      { time: 41.5, text: "Get away from the pressure" },
      { time: 44.5, text: "Wondering to get a love that is so pure" },
      { time: 48, text: "Gotta have to always make sure" },
      { time: 51, text: "That I'm not just somebody's pleasure" },
      { time: 55, text: "I always pretending and lying" },
      { time: 58.5, text: "I got used to feel empty" },
      { time: 61.5, text: "'Cause all I got is unhappy" },
      { time: 65, text: "Happiness, can't I get happiness?" },
      { time: 69, text: "I've never been enjoying my serenity" },
      { time: 73, text: "Even if I've got a lot of company" },
      { time: 77, text: "That makes me happy" },
      { time: 80, text: "And I don't even feel my own pain" },
      { time: 83.5, text: "Whatever when the storms pouring rain" },
      { time: 86.5, text: "Feels like a wind" },
      { time: 89, text: "Soul try to figure it out" },
      { time: 92, text: "From where I've been escaping" },
      { time: 95, text: "Running to end all the sin" },
      { time: 98, text: "Get away from the pressure" },
      { time: 101, text: "Wondering to get a love that is so pure" },
      { time: 104.5, text: "Gotta have to always make sure" },
      { time: 107.5, text: "That I'm not just somebody's pleasure" },
      { time: 111.5, text: "I hold imagination" },
      { time: 114.5, text: "Cover all of the sadness" },
      { time: 117.5, text: "I don't feel something special" },
      { time: 120.5, text: "Turn off the phone to get some spatial" },
      { time: 124, text: "Never thought I'd living in true" },
      { time: 127, text: "The truth that has been so blue" },
      { time: 130, text: "It was in a blink of an eye" },
      { time: 133, text: "Find a way how to say goodbye" },
      { time: 136.5, text: "I've got to take me away from all sadness" },
      { time: 140, text: "Stitch all my wounds, confess all the sins" },
      { time: 143.5, text: "And took all my insecurities" },
      { time: 147, text: "When will I got the love that is so pure?" },
      { time: 150.5, text: "Gotta have to always make sure" },
      {
        time: 154,
        text: "That I'm not just, I'm not just somebody's pleasure",
      },
      { time: 158, text: "Gotta have, gotta have to always make sure" },
      { time: 162, text: "I'm not just somebody's pleasure" },
    ],
  },
  {
    id: 6,
    title: "I Wanna Be Yours",
    artist: "Arctic Monkeys",
    album: "AM",
    albumArtUrl: "https://i.ytimg.com/vi/fJLQCf4mFP0/hqdefault.jpg",
    audioSrc: "audio/I Wanna Be Yours.mp3",
    videoBgSrc: "videos/i_wanna_be_yours_bg.mp4",
    lyrics: [
      { time: 5, text: "I wanna be your vacuum cleaner" },
      { time: 9, text: "Breathing in your dust" },
      { time: 13, text: "I wanna be your Ford Cortina" },
      { time: 17, text: "I will never rust" },
      { time: 21, text: "If you like your coffee hot" },
      { time: 25, text: "Let me be your coffee pot" },
      { time: 29, text: "You call the shots, babe" },
      { time: 33, text: "I just wanna be yours" },

      { time: 38, text: "Secrets I have held in my heart" },
      { time: 43, text: "Are harder to hide than I thought" },
      { time: 47.5, text: "Maybe I just wanna be yours" },
      { time: 52, text: "I wanna be yours, I wanna be yours" },
      { time: 57, text: "Wanna be yours, wanna be yours, wanna be yours" },

      { time: 63, text: "Let me be your 'leccy meter and I'll never run out" },
      {
        time: 68.5,
        text: "Let me be the portable heater that you'll get cold without",
      },
      { time: 74.5, text: "I wanna be your setting lotion (wanna be)" },
      { time: 78.5, text: "Hold your hair in deep devotion (how deep?)" },
      { time: 82.5, text: "At least as deep as the Pacific Ocean" },
      { time: 86.5, text: "I wanna be yours" },

      { time: 91.5, text: "Secrets I have held in my heart" },
      { time: 96.5, text: "Are harder to hide than I thought" },
      { time: 101.5, text: "Maybe I just wanna be yours" },
      { time: 106.5, text: "I wanna be yours, I wanna be yours" },
      { time: 111.5, text: "Wanna be yours, wanna be yours, wanna be yours" },
      { time: 117, text: "Wanna be yours, wanna be yours, wanna be yours" },
      { time: 122.5, text: "Wanna be yours, wanna be yours" },

      { time: 127, text: "I wanna be your vacuum cleaner (Wanna be yours)" },
      { time: 131, text: "Breathing in your dust (Wanna be yours)" },
      { time: 135, text: "I wanna be your Ford Cortina (Wanna be yours)" },
      { time: 139, text: "I will never rust (Wanna be yours)" },
      { time: 143, text: "I just wanna be yours (Wanna be yours)" },
      { time: 147, text: "I just wanna be yours (Wanna be yours)" },
      { time: 151, text: "I just wanna be yours (Wanna be yours)" },
    ],
  },
  {
    id: 7,
    title: "Tampar",
    artist: "Uan Kaisar",
    album: "Juicy Luicy",
    albumArtUrl: "Album/tampar.jpg",
    audioSrc: "audio/Juicy Luicy - Tampar.mp3",
    videoBgSrc: "videos/unconditionally_bg.mp4", // Path video background khusus lagu ini
    // Lirik dengan timestamp dalam detik
    lyrics: [
      { time: 5, text: "Entah sudah selasa yang ke berapa" },
    { time: 9, text: "Masih saja kau ada, lekat di kepala" },
    { time: 13, text: "Hari ini janji esok mesti lupa" },
    { time: 17, text: "Tetapi hati tak tepati" },

    { time: 20, text: "Tampar aku di pipi" },
    { time: 23, text: "Biar sadar dan kumengerti" },

    { time: 27, text: "Hujan samarkan derasnya, tutup air mata" },
    { time: 31, text: "Temani kecewaku yang telah lama" },
    { time: 35, text: "Berdosa kah kuberdoa, minta kau terluka" },
    { time: 39, text: "Dan tinggalkan dirinya" },

    { time: 43, text: "Hari ini janji esok mesti lupa" },
    { time: 47, text: "Tetapi hati tak tepati" },

    { time: 50, text: "Tampar aku di pipi" },
    { time: 53, text: "Biar sadar dan kumengerti" },

    { time: 57, text: "Hujan samarkan derasnya, tutup air mata" },
    { time: 61, text: "Temani kecewaku yang telah lama" },
    { time: 65, text: "Berdosa kah kuberdoa, minta kau terluka" },
    { time: 69, text: "Dan tinggalkan dirinya, ho-oh" },

    { time: 74, text: "Bukan ku tak berupaya (berusaha), huu" },

    { time: 78, text: "Hujan samarkan derasnya, tutup air mata" },
    { time: 82, text: "Temani kecewaku yang telah lama" },
    { time: 86, text: "Berdosa kah kuberdoa, minta kau terluka" },
    { time: 90, text: "Dan tinggalkan dirinya" },

    { time: 94, text: "Hujan samarkan derasnya, tutup air mata" },
    { time: 98, text: "Tiga tahun tak terasa" },
    { time: 102, text: "Masih kau yang ada" },
    { time: 106, text: "Bodoh yang sebenarnya" },

    { time: 110, text: "Tampar aku di pipi" },
    { time: 113, text: "Sadarkan kau aku takkan terjadi" },
    ],
  },
  {
    id: 8,
    title: "Lampu kuning",
    artist: "Uan Kaisar",
    album: "Juicy Luicy",
    albumArtUrl: "Album/Lampu kuning.jpg",
    audioSrc: "audio/Juicy Luicy - Lampu Kuning (Official Lyric Video).mp3",
    videoBgSrc: "videos/unconditionally_bg.mp4", // Path video background khusus lagu ini
    // Lirik dengan timestamp dalam detik
    lyrics: [
      { time: 5, text: "Entah sudah selasa yang ke berapa" },
    { time: 9, text: "Masih saja kau ada, lekat di kepala" },
    { time: 13, text: "Hari ini janji esok mesti lupa" },
    { time: 17, text: "Tetapi hati tak tepati" },

    { time: 20, text: "Tampar aku di pipi" },
    { time: 23, text: "Biar sadar dan kumengerti" },

    { time: 27, text: "Hujan samarkan derasnya, tutup air mata" },
    { time: 31, text: "Temani kecewaku yang telah lama" },
    { time: 35, text: "Berdosa kah kuberdoa, minta kau terluka" },
    { time: 39, text: "Dan tinggalkan dirinya" },

    { time: 43, text: "Hari ini janji esok mesti lupa" },
    { time: 47, text: "Tetapi hati tak tepati" },

    { time: 50, text: "Tampar aku di pipi" },
    { time: 53, text: "Biar sadar dan kumengerti" },

    { time: 57, text: "Hujan samarkan derasnya, tutup air mata" },
    { time: 61, text: "Temani kecewaku yang telah lama" },
    { time: 65, text: "Berdosa kah kuberdoa, minta kau terluka" },
    { time: 69, text: "Dan tinggalkan dirinya, ho-oh" },

    { time: 74, text: "Bukan ku tak berupaya (berusaha), huu" },

    { time: 78, text: "Hujan samarkan derasnya, tutup air mata" },
    { time: 82, text: "Temani kecewaku yang telah lama" },
    { time: 86, text: "Berdosa kah kuberdoa, minta kau terluka" },
    { time: 90, text: "Dan tinggalkan dirinya" },

    { time: 94, text: "Hujan samarkan derasnya, tutup air mata" },
    { time: 98, text: "Tiga tahun tak terasa" },
    { time: 102, text: "Masih kau yang ada" },
    { time: 106, text: "Bodoh yang sebenarnya" },

    { time: 110, text: "Tampar aku di pipi" },
    { time: 113, text: "Sadarkan kau aku takkan terjadi" },
    ],
  },
  {
    id: 9,
    title: "Juicy Luicy",
    artist: "Uan Kaisar",
    album: "UK",
    albumArtUrl: "Album/tampar.jpg",
    audioSrc: "audio/Juicy Luicy - Tampar.mp3",
    videoBgSrc: "videos/unconditionally_bg.mp4", // Path video background khusus lagu ini
    // Lirik dengan timestamp dalam detik
    lyrics: [
      { time: 5, text: "Entah sudah selasa yang ke berapa" },
    { time: 9, text: "Masih saja kau ada, lekat di kepala" },
    { time: 13, text: "Hari ini janji esok mesti lupa" },
    { time: 17, text: "Tetapi hati tak tepati" },

    { time: 20, text: "Tampar aku di pipi" },
    { time: 23, text: "Biar sadar dan kumengerti" },

    { time: 27, text: "Hujan samarkan derasnya, tutup air mata" },
    { time: 31, text: "Temani kecewaku yang telah lama" },
    { time: 35, text: "Berdosa kah kuberdoa, minta kau terluka" },
    { time: 39, text: "Dan tinggalkan dirinya" },

    { time: 43, text: "Hari ini janji esok mesti lupa" },
    { time: 47, text: "Tetapi hati tak tepati" },

    { time: 50, text: "Tampar aku di pipi" },
    { time: 53, text: "Biar sadar dan kumengerti" },

    { time: 57, text: "Hujan samarkan derasnya, tutup air mata" },
    { time: 61, text: "Temani kecewaku yang telah lama" },
    { time: 65, text: "Berdosa kah kuberdoa, minta kau terluka" },
    { time: 69, text: "Dan tinggalkan dirinya, ho-oh" },

    { time: 74, text: "Bukan ku tak berupaya (berusaha), huu" },

    { time: 78, text: "Hujan samarkan derasnya, tutup air mata" },
    { time: 82, text: "Temani kecewaku yang telah lama" },
    { time: 86, text: "Berdosa kah kuberdoa, minta kau terluka" },
    { time: 90, text: "Dan tinggalkan dirinya" },

    { time: 94, text: "Hujan samarkan derasnya, tutup air mata" },
    { time: 98, text: "Tiga tahun tak terasa" },
    { time: 102, text: "Masih kau yang ada" },
    { time: 106, text: "Bodoh yang sebenarnya" },

    { time: 110, text: "Tampar aku di pipi" },
    { time: 113, text: "Sadarkan kau aku takkan terjadi" },
    ],
  },
];
let currentSongIndex = 0;
let isPlaying = false;
let isShuffle = false;
let repeatMode = 0; // 0: no repeat, 1: repeat one, 2: repeat all

// --- Page Navigation ---
function showHomePage() {
  playerPage.classList.remove("active");
  songDetailPage.classList.remove("active"); // Pastikan detail page disembunyikan
  homePage.classList.add("active");

  bodyElement.classList.remove("player-active-bg");
  bodyElement.classList.remove("detail-active-bg");
  backgroundVideoContainer.classList.remove("active"); // Sembunyikan video background
  backgroundVideo.pause(); // Jeda video background
  backgroundVideo.src = ""; // Kosongkan src video
  backgroundVideo.load();
  pauseTrack(); // Jeda musik saat kembali ke home
}

// Fungsi untuk menampilkan halaman detail lagu (tetap dipertahankan, tapi tidak dipanggil dari song list click)
function showSongDetailPage(song) {
  homePage.classList.remove("active");
  playerPage.classList.remove("active");
  songDetailPage.classList.add("active");

  detailAlbumArt.src = song.albumArtUrl;
  detailTrackTitle.textContent = song.title;
  detailTrackArtist.textContent = song.artist;
  detailAlbumName.textContent = song.album || "Unknown Album";

  bodyElement.classList.remove("player-active-bg");
  bodyElement.classList.add("detail-active-bg");
  backgroundVideoContainer.classList.remove("active");
  backgroundVideo.pause(); // Jeda video background
  backgroundVideo.src = ""; // Kosongkan src video
  backgroundVideo.load();
}

function showPlayerPage() {
  homePage.classList.remove("active");
  songDetailPage.classList.remove("active");
  playerPage.classList.add("active");

  bodyElement.classList.remove("detail-active-bg");
  bodyElement.classList.add("player-active-bg");
  backgroundVideoContainer.classList.add("active"); // Tampilkan video background

  const currentSong = songs[currentSongIndex];
  if (currentSong && currentSong.videoBgSrc) {
    backgroundVideo.src = currentSong.videoBgSrc;
    backgroundVideo.load();
    backgroundVideo
      .play()
      .catch((e) => console.error("Error playing video background:", e));
  } else {
    backgroundVideo.src = "";
    backgroundVideo.load(); // Kosongkan src jika tidak ada video khusus
  }
}

// --- Home Page Logic ---
function renderSongList() {
  songListElement.innerHTML = "";
  if (songs.length === 0) {
    songListElement.innerHTML =
      '<li class="loading-songs">Tidak ada lagu tersedia.</li>';
    return;
  }
  songs.forEach((song, index) => {
    const listItem = document.createElement("li");
    listItem.setAttribute("data-id", song.id);
    listItem.innerHTML = `
            <img src="${song.albumArtUrl}" alt="${song.title}" class="song-art-list">
            <div class="song-info-list">
                <h3>${song.title}</h3>
                <p>${song.artist}</p>
            </div>
        `;
    // --- Perubahan Penting di sini ---
    // Saat item lagu diklik, langsung muat & putar lagu lalu tampilkan halaman player
    listItem.addEventListener("click", () => {
      currentSongIndex = index;
      loadSong(songs[currentSongIndex]);
      playTrack();
      showPlayerPage(); // Langsung pindah ke halaman pemutar musik
    });

    // Event listener untuk hover
    listItem.addEventListener("mouseenter", () => {
      // Hanya aktifkan video background jika kita di halaman home
      if (homePage.classList.contains("active") && song.videoBgSrc) {
        backgroundVideo.src = song.videoBgSrc;
        backgroundVideo.load();
        backgroundVideoContainer.classList.add("active");
        backgroundVideo
          .play()
          .catch((e) => console.error("Error playing video on hover:", e));
        bodyElement.classList.add("player-active-bg"); // Tambahkan kelas untuk warna background body
      }
    });
    listItem.addEventListener("mouseleave", () => {
      // Sembunyikan video background hanya jika kita di halaman home
      if (homePage.classList.contains("active")) {
        backgroundVideoContainer.classList.remove("active");
        backgroundVideo.pause(); // Jeda video saat mouse meninggalkan
        backgroundVideo.src = ""; // Kosongkan src agar tidak memutar di background
        backgroundVideo.load();
        bodyElement.classList.remove("player-active-bg"); // Hapus kelas warna background body
      }
    });

    songListElement.appendChild(listItem);
  });
}

// --- Player Logic ---
function loadSong(song) {
  if (!song) {
    console.error("Lagu tidak ditemukan!");
    albumArtPlayer.src =
      "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Error";
    playerTrackTitle.textContent = "Lagu Tidak Tersedia";
    playerTrackArtist.textContent = "-";
    lyricsContainer.innerHTML = "<p>Lirik tidak tersedia.</p>"; // Ganti textContent dengan innerHTML
    audioPlayer.src = "";
    playerCurrentTime.textContent = "0:00";
    playerTotalDuration.textContent = "0:00";
    playerProgressBar.style.width = "0%";
    return;
  }
  albumArtPlayer.src = song.albumArtUrl;
  playerTrackTitle.textContent = song.title;
  playerTrackArtist.textContent = song.artist;

  renderLyrics(song.lyrics); // Panggil fungsi renderLyrics

  audioPlayer.src = song.audioSrc;

  audioPlayer.onloadedmetadata = () => {
    playerTotalDuration.textContent = formatTime(audioPlayer.duration);
  };
  audioPlayer.load();
  updatePlayPauseIcon();
}

// Fungsi baru untuk merender lirik
function renderLyrics(lyrics) {
  lyricsContainer.innerHTML = ""; // Bersihkan container lirik
  if (!lyrics || lyrics.length === 0) {
    lyricsContainer.innerHTML = "<p>Lirik tidak tersedia untuk lagu ini.</p>";
    return;
  }

  lyrics.forEach((line) => {
    const span = document.createElement("span");
    span.textContent = line.text;
    span.setAttribute("data-time", line.time); // Simpan timestamp di data-attribute
    span.classList.add("lyric-line"); // Tambahkan kelas untuk styling
    lyricsContainer.appendChild(span);
    // Hapus penambahan <br> secara manual, gunakan CSS display:block atau flexbox
    // lyricsContainer.appendChild(document.createElement('br'));
  });
}

function playTrack() {
  if (!audioPlayer.src || audioPlayer.src === window.location.href) {
    if (songs.length > 0) {
      loadSong(songs[currentSongIndex]);
    } else {
      console.log("Tidak ada lagu untuk dimainkan.");
      return;
    }
  }
  isPlaying = true;
  audioPlayer.play().catch((error) => console.error("Error saat play:", error));
  updatePlayPauseIcon();
}

function pauseTrack() {
  isPlaying = false;
  audioPlayer.pause();
  updatePlayPauseIcon();
}

function updatePlayPauseIcon() {
  if (isPlaying) {
    playerPlayPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    playerPlayPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
  }
}

function prevTrack() {
  if (songs.length === 0) return;
  if (isShuffle) {
    playRandomTrack();
  } else {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  }
  loadSong(songs[currentSongIndex]);
  playTrack();
  showPlayerPage(); // Perbarui video background
}

function nextTrackLogic() {
  if (songs.length === 0) return;
  if (isShuffle) {
    playRandomTrack();
  } else {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
  }
  loadSong(songs[currentSongIndex]);
  playTrack();
  showPlayerPage(); // Perbarui video background
}

function nextTrack() {
  if (songs.length === 0) return;

  if (repeatMode === 1 && audioPlayer.ended) {
    // Handled by audio.loop = true
  } else if (isShuffle) {
    playRandomTrack();
  } else {
    currentSongIndex++;
    if (currentSongIndex >= songs.length) {
      if (repeatMode === 2) {
        currentSongIndex = 0;
      } else {
        currentSongIndex = songs.length - 1;
        loadSong(songs[currentSongIndex]);
        pauseTrack();
        audioPlayer.currentTime = audioPlayer.duration;
        return;
      }
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
  }
  showPlayerPage(); // Perbarui video background
}

function playRandomTrack() {
  if (songs.length <= 1) {
    currentSongIndex = 0;
  } else {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * songs.length);
    } while (randomIndex === currentSongIndex);
    currentSongIndex = randomIndex;
  }
  loadSong(songs[currentSongIndex]);
  playTrack();
  showPlayerPage(); // Perbarui video background
}

audioPlayer.addEventListener("timeupdate", () => {
  if (audioPlayer.duration) {
    const progressPercent =
      (audioPlayer.currentTime / audioPlayer.duration) * 100;
    playerProgressBar.style.width = `${progressPercent}%`;
    playerCurrentTime.textContent = formatTime(audioPlayer.currentTime);

    // --- Logic highlight lirik ---
    const currentTime = audioPlayer.currentTime;
    const lyricLines = lyricsContainer.querySelectorAll(".lyric-line");
    let highlightedLine = null;

    lyricLines.forEach((line, index) => {
      const lineTime = parseFloat(line.getAttribute("data-time"));
      // Tentukan waktu berakhir baris lirik ini. Jika ini baris terakhir, anggap berakhir di akhir lagu.
      // Atau, lebih baik, anggap berakhir tepat sebelum baris berikutnya dimulai.
      let nextLineTime = Infinity;
      if (index + 1 < lyricLines.length) {
        nextLineTime = parseFloat(
          lyricLines[index + 1].getAttribute("data-time")
        );
      }

      if (currentTime >= lineTime && currentTime < nextLineTime) {
        line.classList.add("highlight");
        highlightedLine = line;
      } else {
        line.classList.remove("highlight");
      }
    });

    // --- Auto-scroll lirik hanya jika baris yang disorot tidak terlihat ---
    if (highlightedLine) {
      const containerRect = lyricsContainer.getBoundingClientRect();
      const lineRect = highlightedLine.getBoundingClientRect();

      // Periksa apakah baris di luar viewport kontainer
      const isOutsideTop = lineRect.top < containerRect.top;
      const isOutsideBottom = lineRect.bottom > containerRect.bottom;

      if (isOutsideTop || isOutsideBottom) {
        // Scroll agar baris terdekat muncul di dalam viewport, dengan animasi smooth
        highlightedLine.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }
    }
  }
});

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
}

playerProgressBarContainer.addEventListener("click", (e) => {
  if (!audioPlayer.duration || songs.length === 0) return;
  const width = playerProgressBarContainer.clientWidth;
  const clickX = e.offsetX;
  audioPlayer.currentTime = (clickX / width) * audioPlayer.duration;
});

playerVolumeSlider.addEventListener("input", (e) => {
  audioPlayer.volume = e.target.value;
});

// Event Listener untuk slider kecepatan
playerSpeedSlider.addEventListener("input", (e) => {
  audioPlayer.playbackRate = parseFloat(e.target.value);
  currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`;
});

playerShuffleBtn.addEventListener("click", () => {
  isShuffle = !isShuffle;
  playerShuffleBtn.classList.toggle("active-feature", isShuffle);
  console.log("Shuffle: " + isShuffle);
});

playerRepeatBtn.addEventListener("click", () => {
  repeatMode = (repeatMode + 1) % 3;
  updateRepeatButtonUI();
  console.log("Repeat Mode: " + repeatMode);
});

function updateRepeatButtonUI() {
  playerRepeatBtn.classList.remove("active-feature");
  audioPlayer.loop = false;

  if (repeatMode === 0) {
    playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
  } else if (repeatMode === 1) {
    playerRepeatBtn.innerHTML = '<i class="fas fa-repeat-1"></i>';
    playerRepeatBtn.classList.add("active-feature");
    audioPlayer.loop = true;
  } else {
    playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
    playerRepeatBtn.classList.add("active-feature");
  }
}

playerPlayPauseBtn.addEventListener("click", () => {
  if (isPlaying) {
    pauseTrack();
  } else {
    playTrack();
  }
});
playerPrevBtn.addEventListener("click", prevTrack);
playerNextBtn.addEventListener("click", nextTrackLogic);

audioPlayer.addEventListener("ended", () => {
  if (repeatMode === 1) {
    // Handled by audio.loop = true
  } else {
    nextTrack();
  }
});

// Event Listeners untuk tombol navigasi
backToHomeFromDetailBtn.addEventListener("click", showHomePage); // Dari halaman detail ke home
backToHomeBtn.addEventListener("click", showHomePage); // Dari halaman player ke home

// Event Listener untuk tombol play dari halaman detail (jika Anda ingin menggunakannya)
playFromDetailBtn.addEventListener("click", () => {
  loadSong(songs[currentSongIndex]);
  playTrack();
  showPlayerPage();
});

// --- Initialization ---
function init() {
  console.log("Initializing..."); // Tambahkan log untuk inisialisasi
  console.log("Songs array length:", songs.length); // Periksa jumlah lagu
  console.log("songListElement:", songListElement); // Cek apakah songListElement ditemukan

  renderSongList(); // Ini yang merender daftar lagu

  if (songs.length > 0) {
    loadSong(songs[currentSongIndex]);
  } else {
    // Ini akan ditampilkan jika array songs kosong
    albumArtPlayer.src =
      "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Musik";
    playerTrackTitle.textContent = "Tidak Ada Lagu";
    playerTrackArtist.textContent = "Tambahkan lagu";
    lyricsContainer.innerHTML = "<p>Silakan tambahkan lagu dari daftar.</p>";
  }
  audioPlayer.volume = playerVolumeSlider.value;
  audioPlayer.playbackRate = playerSpeedSlider.value; // Atur kecepatan awal
  currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`; // Perbarui tampilan kecepatan
  updatePlayPauseIcon();
  updateRepeatButtonUI();
  showHomePage(); // Mulai dari halaman daftar lagu
  console.log("Initialization complete."); // Log selesai inisialisasi
}

init();
