<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- All site imagery is inline SVG/CSS or bundled imports; never use .asset.json/CDN pointers (they 404 after GitHub→Cloudflare deploy).
- Bilingual copy lives in src/lib/content.ts; Arabic toggles dir=rtl on <html>.
