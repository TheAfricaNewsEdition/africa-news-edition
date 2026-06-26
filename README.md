# Your Newspaper

A tiny website for publishing news. No login, no admin panel.

You only ever touch two files:

- **`index.html`** — the website name, tagline, and top menu.
- **`posts.js`** — the list of stories shown on the homepage.

Plus the **`news/`** folder, where each story is its own HTML file.

---

## Change the website name or tagline

1. Open **`index.html`**.
2. Near the top you'll see lines like:
   ```js
   name: "THE AFRICA NEWS EDITION",
   description: "📌The Africa News Edition is the only curated platform that brings together top stories from all five regions of the continent — East, West, Central, Southern, and North Africa.",
   ```
3. Change the words **between the quotes**. Keep the quotes and the commas.
4. Save.

The same block also lets you change the logo letters, the welcome paragraph,
the menu labels, and the footer line. Each one is labelled with a comment.

---

## Add a new news story

### 1. Save the story file

- Open the **`news/`** folder.
- Put your story file in there as `something.html`.
- Use lowercase letters, numbers, and dashes only. No spaces.
  - Good: `transit-strike.html`
  - Bad:  `Transit Strike!.html`

The story file is its own complete web page. Whatever it contains is what
readers see — the homepage doesn't add anything around it.

### 2. List it on the homepage

Open **`posts.js`**. You'll see one block per story:

```js
{
  file: "welcome.html",
  title: "A new chapter for independent news",
  date: "June 14, 2026",
  category: "Editor's Note",
  excerpt: "Why we built this paper...",
  featured: false
},
```

**Copy a whole block, paste it at the top of the list, and change the words
between the quotes** to match your new story.

- `file` — the filename you saved in `news/`.
- `title` — the headline.
- `date` — any format you like, e.g. `"July 1, 2026"`.
- `category` — one short word (`"Politics"`, `"Culture"`, etc.).
- `excerpt` — a one-line summary.
- `featured` — `true` for the **one** story you want at the top. All others
  should be `false`.

Save. Done.

> The small **← All stories** link at the top of each news page is added for
> you automatically. You don't need to write it.

---

## Publish on GitHub Pages

### The first time only

1. Create a new repository on **github.com** and upload all the files.
2. In the repo, go to **Settings → Pages**.
3. Under **Source**, choose branch `main` and folder `/ (root)`. Click **Save**.
4. Go to **Settings → Actions → General**. Under **Workflow permissions**,
   choose **Read and write permissions**. Click **Save**.
5. After about a minute, GitHub will show you a URL like
   `https://yourname.github.io/your-repo/`. That's your live website.

### Every time you make a change

1. Open your repo on github.com.
2. Click **Add file → Upload files**.
3. Drag in the files you changed (`posts.js`, anything in `news/`, etc.).
4. At the bottom, write a short message like *"added new story"* and click
   **Commit changes**.
5. Wait about a minute. The site updates by itself.

---

## If something looks broken

The most common cause is a typo in **`posts.js`**:

- A missing **comma** at the end of a line.
- A missing **quote mark** around a piece of text.
- Two stories with `featured: true` (only one is allowed).

Open `posts.js`, compare your new block to one that already works, and the
problem is usually obvious.
