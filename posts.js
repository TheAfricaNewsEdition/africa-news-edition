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

window.NEWS_POSTS = [{
  file: "africa-news-briefing.html",
  title: "June 22 News Briefing",
  date: "June 22, 2026",
  category: "Editor's Note",
  excerpt: "Keep your house clean like you are expecting...",
  featured: false
},
{
  file: "editor-briefing-full_1.html",
  title: "June 16 News Update",
  date: "June 16, 2026",
  category: "Editor's Note",
  excerpt: "Why we built this paper...",
  featured: true
},
  {
    file: "us-world-cup-visa-chaos-fixed.html",
    title: "The US' World Cup Travel Warnings Are All Coming True",
    date: "June 16, 2026",
    category: "World Cup",
    excerpt: "Players, referees, and officials banned, denied entry, or searched on the runway — before a ball has been kicked.",
    featured: false
  },

  {
    file: "why-is-it-always-us.html",
    title: "Why Is It Always Us?",
    date: "June 16, 2026",
    category: "Opinion",
    excerpt: "To paraphrase Mario Balotelli — on the strange weight of being a global people in a hostile news cycle.",
    featured: false
  },



];
