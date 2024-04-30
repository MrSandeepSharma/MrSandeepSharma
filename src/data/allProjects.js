const allProjects = [
    {
        url: "https://scoot-main.netlify.app/",
        code: "https://github.com/MrSandeepSharma/scoot",
        title: "Scoot",
        desc: "Scoot is a multi-page website using HTML, CSS and JavaScript 😊",
        tech: ["HTML", "CSS", "JavaScript", "Web Accessibility", "Web Performance"]
    },
    {
        url: "https://blazeai.netlify.app/",
        code: "https://github.com/MrSandeepSharma/Blaze",
        title: "Blaze",
        desc: "A Three page clone project using React and CSS ✨",
        tech: ["React", "CSS", "JavaScript", "Responsive Design"]
    },
    {
        title: "Hero Name Forge",
        desc: "A fun project using React Tailwind-CSS and Gsap 😊",
        url: "https://hero-name-forge.netlify.app/",
        code: "https://github.com/MrSandeepSharma/Hero-Name-Forge",
        tech: ["React", "Tailwind-css", "JavaScript", "Gsap"]
    },
    {
        title: "Digital Business Card",
        desc: "My first project using React. The journey begins 😃",
        url: "https://digitalbusinesscard01.netlify.app/",
        code: "https://github.com/MrSandeepSharma/Digital-Business-Card",
        tech: ["React", "CSS", "JavaScript"]
    },
    {
        title: "Color Scheme Generator",
        desc: "Generate some cool color scheme for your next project 😃",
        url: "https://colorschemegenerator01.netlify.app/",
        code: "https://github.com/MrSandeepSharma/Color-Scheme-Generator",
        tech: ["HTML", "CSS", "JavaScript", "Api's"]
    },
    {
        title: "My Learning Journal",
        desc: "Three page respomsive website using html css amd js ✔️",
        url: "https://mylearningjounral.netlify.app/",
        code: "https://github.com/MrSandeepSharma/My-learning-journal",
        tech: ["HTML", "CSS", "JavaScript", "Responsive Design"]
    },
    {
        title: "Hanover Football Club",
        desc: "Responsive splash page using HTML5 and CSS3 🎉",
        url: "https://hanoverfootballclub.netlify.app/",
        code: "https://github.com/MrSandeepSharma/Hanover-Football-Club",
        tech: ["HTML", "CSS", "Responsive Design"]
    },
    {
        title: "Super 7",
        desc: "My first responsive site, check it out 🔥🔥",
        url: "https://super-7.netlify.app/",
        code: "https://github.com/MrSandeepSharma/Super-7",
        tech: ["HTML", "CSS", "Responsive Design"]
    },
    {
        title: "Ordering App",
        desc: "Order some food for your breakfast 🍔",
        url: "https://new-restaurant-ordering-app.netlify.app/",
        code: "https://github.com/MrSandeepSharma/Restaurant-Ordering-App",
        tech: ["HTML", "CSS", "JavaScript"]
    },
    {
        title: "Anime Picker",
        desc: "Go and Get a New Anime Series Recommendation 😃",
        url: "https://animepicker.netlify.app/",
        code: "https://github.com/MrSandeepSharma/Anime-Picker",
        tech: ["HTML", "CSS", "JavaScript"]
    },
    {
        title: "Oldagram",
        desc: "Instagram Home page clone using HTML, CSS and JavaScript 🎉",
        url: "https://oldagraminstaclone.netlify.app/",
        code: "https://github.com/MrSandeepSharma/Oldagram",
        tech: ["HTML", "CSS", "JavaScript"]
    },
    {
        title: "We are the Champions",
        desc: "A Web App using JavaScript and Firebase 🔥",
        url: "https://wearethechamp.netlify.app/",
        code: "https://github.com/MrSandeepSharma/We-are-the-Champions",
        tech: ["HTML", "CSS", "JavaScript", "Firebase"]
    },
    {
        title: "Add to Cart",
        desc: "A modern webapp created using HTML5, CSS3, JavaScript and Firebase 🔥",
        url: "https://add-to-cart-user.netlify.app/",
        code: "https://github.com/MrSandeepSharma/Add-to-Cart",
        tech: ["HTML", "CSS", "JavaScript", "Firebase"]
    },
    {
        title: "Unit Converter",
        desc: "Unit Converter App using HTML CSS and JavaScript 💪",
        url: "https://comforting-gingersnap-9d07b0.netlify.app/",
        code: "https://github.com/MrSandeepSharma/Unit-Converter",
        tech: ["HTML", "CSS", "JavaScript"]
    },
    {
        title: "Password Generator",
        desc: "Create your password with my Random Password Generator 😉",
        url: "https://deft-semifreddo-b7d848.netlify.app/",
        code: "https://github.com/MrSandeepSharma/Random-Password-Generator",
        tech: ["HTML", "CSS", "JavaScript"]
    },
    {
        title: "Animal Counter App",
        desc: "Count the animals on your street with this super cool app 😉",
        url: "https://luminous-pudding-c98a74.netlify.app/",
        code: "https://github.com/MrSandeepSharma/Animal-Counter-App",
        tech: ["HTML", "CSS", "JavaScript"]
    },
    {
        title: "Hometown Homepage",
        desc: "Project about my hometown please take a look 🙂",
        url: "https://relaxed-vacherin-dd3724.netlify.app/",
        code: "https://github.com/MrSandeepSharma/Hometown-Homepage",
        tech: ["HTML", "CSS"]
    },
    {
        title: "The Birthday GIFt Site",
        desc: "In this site I am wishing happy birthday to my friend root in a really cool way 🎉",
        url: "https://willowy-muffin-988aa9.netlify.app/",
        code: "https://github.com/MrSandeepSharma/The-Birthday-GIFt-Site",
        tech: ["HTML", "CSS"]
    },
    {
        title: "Web Agency Hero",
        desc: "A simple webpage 🎉",
        url: "https://phenomenal-chebakia-b46c78.netlify.app/",
        code: "https://github.com/MrSandeepSharma/Web-Agency-Hero",
        tech: ["HTML", "CSS"]
    },
    {
        title: "Amazon Product Page",
        desc: "A simple webpage 🎉",
        url: "https://resilient-mooncake-6bc3e1.netlify.app/",
        code: "https://github.com/MrSandeepSharma/Amazon-Product-Page",
        tech: ["HTML", "CSS"]
    },
    {
        title: "The Daily Dribble",
        desc: "A simple webpage 🎉",
        url: "https://aesthetic-tiramisu-b5f873.netlify.app/",
        code: "https://github.com/MrSandeepSharma/The-Daily-Dribble-Newsletter",
        tech: ["HTML", "CSS"]
    },
]

export default allProjects;