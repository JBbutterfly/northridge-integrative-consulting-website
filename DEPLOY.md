# Deploying this site

This is a plain static site — no build step, no npm, no server code. Every file
in this folder is served as-is. To deploy it, upload the contents of this
folder to any static host.

## Generic static hosting

Upload the entire folder (keeping the `assets/` structure intact) so that
`index.html` sits at the root of the site. Nothing needs to be compiled or
installed first.

## Azure Static Web Apps (Free tier)

1. Push this folder to a GitHub repository.
2. In the Azure portal, create a **Static Web App** (Free plan).
3. Point it at the repository/branch. When it asks for build details, use:
   - **App location**: `/`
   - **Api location**: *(leave blank)*
   - **Output location**: *(leave blank)*
4. Azure creates a GitHub Actions workflow that deploys on every push to the
   branch you chose — no further build configuration is needed since there's
   nothing to build.
5. The 404 page: Azure Static Web Apps will serve `404.html` automatically for
   unmatched routes once it's present at the root, which it is here.

## Custom domain

Whichever host you use, add the custom domain (e.g. `northridgeintegrative.com`)
in that host's dashboard and follow its DNS instructions (typically a CNAME or
ALIAS/ANAME record). `robots.txt` and `sitemap.xml` in this folder currently
reference `https://www.northridgeintegrative.com/` — update those if the final
domain differs.

## Before going live

- Confirm the domain in `robots.txt` / `sitemap.xml` is correct.
- Fill in the TODOs in `privacy.html` (effective date, legal jurisdiction).
- Add `assets/jeff.jpg` (see the comment in `index.html`'s founder section for
  the exact markup change) once a real portrait is available.
