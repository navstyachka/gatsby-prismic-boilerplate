# Post

```json
{
  "Metadata": {
    "uid": {
      "type": "UID",
      "config": {
        "label": "URL slug – do not use punctuation or capitalisation",
        "placeholder": "Slug"
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
    "heading": {
      "type": "StructuredText",
      "config": {
        "single": "heading1",
        "label": "Page heading"
      }
    },
    "publication_date": {
      "type": "Date",
      "config": {
        "label": "Publication date – if this is left blank the creation date of this document will be used"
      }
    },
    "author": {
      "type": "Text",
      "config": {
        "label": "Author"
      }
    },
    "image": {
      "type": "Image",
      "config": {
        "constraint": {},
        "thumbnails": [],
        "label": "Hero image"
      }
    },
    "intro": {
      "type": "StructuredText",
      "config": {
        "multi": "paragraph, strong, em, hyperlink",
        "allowTargetBlank": true,
        "label": "Intro body"
      }
    },
    "body": {
      "type": "StructuredText",
      "config": {
        "multi": "paragraph, heading2, heading3, heading4, strong, em, hyperlink, list-item, o-list-item",
        "allowTargetBlank": true,
        "label": "Intro body"
      }
    }
  }
}
```
