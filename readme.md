
 # AWS-Student-Community-Day

Welcome to the AWS-Student-Community-Day website repository! This repository contains the code for the website designed for the AWS-Student-Community-Day event.

## Visit the website :
https://payalnarwal.github.io/AWS-Student-Community-Day/

## About

The AWS-Student-Community-Day is an event hosted at IGDTUW, Delhi focused on bringing together enthusiasts, professionals, and experts in the field of Amazon Web Services (AWS). This website serves as a central hub for event details, schedules, speakers, and more.

## Features

- Overview of the AWS-Student-Community-Day event
- Information about keynote speakers and session details
- Venue location and date information
- Registration details and sign-up form
- Sections detailing the agenda, speakers, venue, and sponsors

## My Contribution – Task C: Smart Search (Real-time Filtering)

**Task:** Implemented a real-time search bar that filters speaker cards as the user types.

**Logic:**
- Added a search input above the speakers section in `index.html`
- Used `querySelectorAll('.speaker-card')` to get all cards
- On each `input` event, the query is matched against the card's 
  `.speaker-details` inner text using `includes()`
- Cards are shown (`display: block`) or hidden (`display: none`) 
  based on whether they match the search query
- Styled the search bar in `style.css` with an AWS-themed orange 
  border (`#FF9900`) and focus glow effect

**Files changed:** `index.html`, `style.css`, `speaker_card.js`, `countdown.js`


