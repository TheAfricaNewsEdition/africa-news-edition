/* =====================================================================
   ★  YOUR NEWS POSTS  ★
   ---------------------------------------------------------------------
   This file is the ONLY place you edit when you add a new story.

   Each { ... } block below is one news story.
   To ADD a new story, copy a whole block (from { to },) and paste it
   at the TOP of the list. Then change the text inside the quotes.

   • file      = name of the HTML file inside the "news" folder
   • title     = headline of the story
   • date      = publish date (any format you like, e.g. "March 4, 2026")
   • category  = one short word like "Politics", "Culture", "Sports"
   • excerpt   = a short summary shown on the homepage
   • featured  = set to true ONLY for the ONE story you want at the top
                 (set the others to false)

   Rules:
   • Keep the quotes "  " around text values.
   • Keep the commas at the end of each line.
   • Only ONE story should have featured: true. All others: false.
   ===================================================================== */

window.NEWS_POSTS = [

  {
    file: "us-world-cup-visa-chaos-fixed.html",
    title: "The US' World Cup Travel Warnings Are All Coming True",
    date: "June 2026",
    category: "World Cup",
    excerpt: "Players, referees, and officials banned, denied entry, or searched on the runway — before a ball has been kicked.",
    featured: true
  },

  {
    file: "why-is-it-always-us.html",
    title: "Why Is It Always Us?",
    date: "June 16, 2026",
    category: "Opinion",
    excerpt: "To paraphrase Mario Balotelli — on the strange weight of being a global people in a hostile news cycle.",
    featured: false
  },

  {
    file: "welcome.html",
    title: "A new chapter for independent news",
    date: "June 14, 2026",
    category: "Editor's Note",
    excerpt: "Why we built this paper, who it is for, and what we hope to publish in the months ahead.",
    featured: false
  },

  {
    file: "city-council-budget.html",
    title: "City council passes contested transit budget",
    date: "June 14, 2026",
    category: "Politics",
    excerpt: "After three nights of public hearings, the council approved a budget that doubles bus frequency on six routes.",
    featured: false
  },

  {
    file: "summer-reading.html",
    title: "Six books to carry you through a slow summer",
    date: "June 11, 2026",
    category: "Culture",
    excerpt: "A short list from our editors — half fiction, half not, all worth the weight in your bag.",
    featured: false
  },

  {
    file: "harbor-festival.html",
    title: "The harbor festival returns, quieter than before",
    date: "June 7, 2026",
    category: "Local",
    excerpt: "Fewer vendors, smaller crowds, and a kind of calm the organizers say they did not plan for.",
    featured: false
  }

];
