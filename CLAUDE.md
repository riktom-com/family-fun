# family-fun — Family Fun Finder

**Subdomain:** https://family.riktom.com
**Stack:** Pure static HTML/CSS/JS — no backend
**VPS path:** `/opt/family-fun/`
**nginx config:** `/etc/nginx/sites-available/family.riktom.com`
**GitHub:** https://github.com/riktom-com/family-fun

## What It Does
Georgia-wide family activity finder. Parents pick a city, set age/weather/budget filters, and get ranked activity recommendations from a curated database of 60+ real Georgia family spots. NWS weather integration surfaces rainy-day vs outdoor picks automatically.

## Data
All activity data is in `js/app.js` — the `ACTIVITIES` array. No external database. To add a new activity, append an entry to that array following the existing schema.

## Deploy
rsync -az --delete -e "ssh -i ~/.ssh/riktom_vps" /tmp/family-fun/ root@72.62.83.12:/opt/family-fun/
