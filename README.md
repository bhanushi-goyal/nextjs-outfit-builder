# Outfit Builder - Next.js

A **drag-and-drop outfit builder** web application built with **Next.js** that allows users to visually mix and match clothing items (shirts, pants, and shoes) on a virtual canvas. Once the outfit is ready, users can add it to a shopping cart for later purchase.

# Features

- **Drag-and-Drop Canvas** – Easily place shirts, pants, and shoes on a virtual canvas.
- **Real-Time Preview** – See your outfit instantly as you arrange items.
- **Cart Integration** – Save completed outfits to your shopping cart.
- **Reset Functionality** – Clear the canvas and start fresh.
- **Next.js Optimized** – Server-side rendering for performance.

# Tech Stack

- **Framework:** [Next.js]
- **Styling:** [Tailwind CSS]
- **State Management:** React Context API
- **Drag & Drop:** Custom implementation

# Installation

1. Install dependencies
    npm install
2. Run development server
    npm run dev
3. Open the app
    http://localhost:3000

# Usage Guide

Drag clothing items (shirt, pants, shoes) from the Palette onto the Canvas.
Rearrange items by dragging them to new positions.
Click the X button to remove an item from the canvas.
Click Add to Cart to save your current outfit.
View or remove saved outfits in the Cart Sidebar.
Click Reset to start from scratch.

# Cart Functionality
Add outfit to cart – Stores all current canvas items as one outfit.
Track timestamp – Saves the time when the outfit was added.
Remove outfit – Delete individual outfits from the cart.



This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
