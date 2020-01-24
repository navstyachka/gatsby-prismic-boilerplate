# General text page

For things like Terms or Privacy pages

```json
{
  "Metadata": {
    "uid": {
      "type": "UID",
      "config": {
        "label": "URL slug – for developer use only"
      }
    },
    "meta_title": {
      "type": "Text",
      "config": {
        "label": "Title",
        "placeholder": "By deafaul the page heading is used but if can be overriden here"
      }
    },
    "meta_description": {
      "type": "Text",
      "config": {
        "label": "Description",
        "placeholder": "Page-specific description text"
      }
    },
    "meta_image": {
      "type": "Image",
      "config": {
        "constraint": {},
        "thumbnails": [],
        "label": "Social media image"
      }
    }
  },
  "Content": {
    "hero_heading": {
      "type": "StructuredText",
      "config": {
        "single": "heading1",
        "label": "Page heading"
      }
    },
    "body": {
      "type": "StructuredText",
      "config": {
        "multi": "paragraph, heading2, heading3, heading4, strong, em, hyperlink, list-item, o-list-item",
        "allowTargetBlank": true,
        "label": "Body"
      }
    }
  }
}
```
