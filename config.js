// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "My Loveeeee",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "One Year of Pure Blissss💝",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis
        bears: ['🧸', '🐻']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "My Baby Girlllll 🥹❤️ do you have any idea howwww special you are to me?",
            yesBtn: "Yes 🥰",
            noBtn: "Tell meee",
            secretAnswer: "I love you more than words, My Dodo 💖"           // Secret hover message
        },
        second: {
            text: "Okay My Dodo 🧸💞 how much do you love us after 1 year together?",
            startText: "This much love!",
            nextBtn: "Moreee 💕"                                        // Text for the next button
        },
        third: {
                text: "My Wifeyyyy 💍✨ will you keep choosing me every day?",
                yesBtn: "Always 😭❤️",
                noBtn: "Come closer…"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "WOOOOW Itnaaa pyaar karte ho mujhse?? 🥺🥹🥰😍😘😚",  // Shows when they go past 4000%
        high: "To infinity and beyond! 🚀💝",              // Shows when they go past 1000%
        normal: "And beyond! 🥰"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Happy 1 Year Anniversary, My Wifeyyyyyy 🎉💖",
        message: "To My Baby Girlllll — 365 days with you felt like a dream. I’d choose you again, every lifetime, My Wifeyyyy.",
        emojis: "🥂🧑🏻‍❤️‍💋‍👩🏻💖🎂🌹✨" // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ffd1dc",
        backgroundEnd: "#ffe4e1",
        buttonBackground: "#ff5e8e",
        buttonHover: "#ff85a2",
        textColor: "#c9184a"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "20s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5        // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dteqfz1du/video/upload/v1769887797/d4vd_-_Here_With_Me_Official_Music_Video_ilyvah.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
