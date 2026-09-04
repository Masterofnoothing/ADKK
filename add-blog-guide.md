# Adding A Blog

Add a new file to the root `blogs/` folder. The filename becomes the project URL, so use lowercase letters, numbers, and hyphens only.

## Template

```md
---
title: Your Project Title
tagline: One short sentence describing the project.
category: Robotics
date: 2026
skills:
  - Skill or component
  - Another skill
thumbnail: images/your-project.jpg
---

# Project Overview

Write your post here using normal Markdown.

![A descriptive image caption](images/your-project.jpg)

## Another Section

Add paragraphs, lists, links, tables, blockquotes, and code blocks.

```cpp
void setup() {
  // Your example code
}
```
```

## Metadata

- `title`, `tagline`, `category`, and `date` appear on project cards and the detail page.
- `skills` is a YAML list. Keep each skill on its own indented line.
- `thumbnail` is optional and is used as the card/detail banner image.
- The first line after the closing `---` is the start of the blog body.

## Images

Put image files in `public/images/`. Reference them from a blog with a path relative to the deployed site root:

```md
![Robot prototype](images/robot-prototype.jpg)
```

You can add images anywhere between paragraphs, headings, lists, or code blocks. Use web-friendly `.jpg`, `.png`, `.webp`, or `.gif` files and descriptive alt text. Do not use a leading `/` in the image path because the site may be deployed under a GitHub Pages repository subpath.

## Videos

Put video files in `public/videos/`. Add a native video player anywhere in the post using an HTML video block. The path should be relative to the deployed site root, without a leading `/`:

```html
<video controls width="100%" poster="images/robot-video-poster.jpg">
  <source src="videos/robot-test.mp4" type="video/mp4" />
</video>
```

The video appears between the surrounding Markdown content. MP4 video is recommended for browser compatibility. The player includes controls and only loads video metadata until the reader starts playback.

Keep media paths relative like `images/...` and `videos/...`. The project renderer normalizes those paths against the deployed base URL, so the same post works locally and on GitHub Pages.

After adding or editing a post, run `npm run build` locally. The GitHub Actions workflow rebuilds and deploys the site automatically when changes are pushed to `main`.
