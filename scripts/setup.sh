#!/usr/bin/env bash
# SFS — initial setup
# Run this once after cloning the repo.

set -e

echo "→ Installing dependencies..."
npm install

echo "→ Initializing Tailwind v4..."
# Tailwind v4 is configured via the @import in app/globals.css
# No separate config needed

echo "→ Creating images directory..."
mkdir -p public/images
mkdir -p public/images/board
mkdir -p public/images/amenities
mkdir -p public/images/uploads

echo ""
echo "✓ Setup complete."
echo ""
echo "Next steps:"
echo "  1. Drop hero.jpg and sign.png into public/images/"
echo "     (or copy from the comp folder if you have it)"
echo "  2. Run 'npm run dev' and visit http://localhost:3000"
echo "  3. Build out the components in components/"
echo ""
