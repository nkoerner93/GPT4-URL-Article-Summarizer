# GPT-4 URL Article Summarizer

## Introduction

This Monorepo MERN Stack project can summarize URLs with RapidAPIs Chat-GPT4 Summarizer. The project uses React 18, Redux Toolkit, NodeJS, Express, MongoDB & Tailwind CSS.

The backend is currently hosted on: Render
The frontend is currently hosted on: Vercel

Please keep in mind that the project is for showcase purposes only and the used API is on a free license, therefore the API limit could be used up (50/month) or it could be down.

## How it works

When you enter your desired URL the following steps happen:

- You fetch the MongoDB Database if the entered URL already exists & if the URL exists, it outputs the URL Summary
- If the URL doesn't exist, you make a call to RapidAPI & get the summary
- The new summary will be stored in the MongoDB Database, saving future api-calls by expanding the summary database.

## Development Status

The project status is: Completed

## Questions?

If you have any questions please email me at nk.webdevs@gmail.com
