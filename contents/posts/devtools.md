---
slug: 'devtools'
title: Some devtools tricks
tags:
  - JavaScript
  - Chrome
  - Devtools
excerpt: |
  Developer tools for productive web development.
---

### Inspecting an element

You can use when you inspect an element (with the inspect tool of the devtools) is `$0`. After inspecting an element you can access it in the console by typing `$0`:

<img src="https://res.cloudinary.com/nogsantos/image/upload/v1565975442/Site/0-2019-08-15-13-17-49.gif" alt="" />

### DesignMode

Let's imagine the following scenario: You are working on styling a component that holds text inside it. And you want to test some edge cases by changing the text of the component, like for example putting an insanely long text or no text at all.

While you could achieve this by editing the HTML of the component in the DOM tree or in your source code, the easiest way is to set the designMode property of the document to 'on', then changing the text directly on the web page.

In the devtools run: `document.designMode = 'on'`:

<img src="https://res.cloudinary.com/nogsantos/image/upload/v1565975557/Site/Untitled-2019-08-13-20-33-20.gif" alt="" />

##### Credits

This post It's a resume of original post on [DEV Community](https://dev.to/mustapha/7-tips-to-boost-your-productivity-as-a-web-developer-4jh7?utm_source=digest_mailer&amp;utm_medium=email&amp;utm_campaign=digest_email)
