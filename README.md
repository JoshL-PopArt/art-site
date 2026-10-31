# Artist's Studio

A static art gallery hosted with GitHub Pages.

## Add artwork

Put optimized image files in `images/`, then add an entry for each file to `artworks.json`:

```json
[
	{
		"image": "images/my-painting.jpg",
		"title": "Evening Garden",
		"description": "Acrylic on canvas, 2025."
	}
]
```

Image paths are relative to the repository root. Commit and push the image files and `artworks.json` to `main` to publish the updated gallery.
Gallery cards load images lazily. For fast loading, keep each image under 300 KB; the uploaded collection is converted to WebP and compressed to stay below that limit.

## GitHub Pages

The workflow in `.github/workflows/pages.yml` deploys the site to GitHub Pages whenever changes are pushed to `main`. In the repository's **Settings → Pages**, set the build and deployment source to **GitHub Actions**. The first workflow run will publish the site; its URL appears under the repository's Pages settings.
