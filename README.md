# Connecty AI Table Comparison Library

A lightweight, responsive table library for comparing features across different products or services. Perfect for Webflow and other CMS platforms.

## CDN Usage

You can include this library directly from jsDelivr:

```html
<script src="https://cdn.jsdelivr.net/gh/atwww-dev/connecty-ai-table@main/comparison.js"></script>
```

## Basic Usage

The simplest way to use this library is to:

1. Include your data
2. Add the script
3. Create a container with a unique ID

```html
<!-- 1. Add your data -->
<script>
  window.comparisonData = {
    headers: ["Product A", "Product B", "Product C"],
    categories: [
      // Your categories and features here
    ]
  };
</script>

<!-- 2. Include the library -->
<script src="https://cdn.jsdelivr.net/gh/atwww-dev/connecty-ai-table@main/comparison.js"></script>

<!-- 3. Add a container -->
<div id="comparison-table" data-comparison></div>
```

## Using in Webflow CMS

### Option 1: Using Embed Element in CMS Item

1. In your Webflow CMS collection, create a rich text field where you'll embed the table
2. For each CMS item where you want to display a table, add this HTML embed:

```html
<div id="unique-id-per-item" data-comparison></div>
<script>
  // Include your specific data for this CMS item
  const specificData = {
    headers: ["Product A", "Product B", "Product C"],
    categories: [
      // Specific data for this CMS item
    ]
  };
  
  // Initialize the table
  document.addEventListener('DOMContentLoaded', function() {
    new ComparisonTable(specificData, "unique-id-per-item");
  });
</script>
```

### Option 2: Using Shared Data for All Tables

1. In your Webflow site settings > Custom Code section (before </body>), add:

```html
<script>
  // Shared data for all tables
  window.comparisonData = {
    headers: ["Product A", "Product B", "Product C"],
    categories: [
      // Shared data for all tables
    ]
  };
</script>
<script src="https://cdn.jsdelivr.net/gh/atwww-dev/connecty-ai-table@main/comparison.js"></script>
```

2. In your CMS template, add a div with a unique ID and the data-comparison attribute:

```html
<div id="comparison-table-{{wf {&quot;path&quot;:&quot;slug&quot;,&quot;type&quot;:&quot;PlainText&quot;} }}" data-comparison></div>
```

The `{{wf {&quot;path&quot;:&quot;slug&quot;,&quot;type&quot;:&quot;PlainText&quot;} }}` part will use the item's slug to create a unique ID.

## Multiple Tables with Different Data

To create multiple tables with different data:

```html
<div id="table1" data-comparison></div>
<div id="table2" data-comparison></div>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    // First table
    const data1 = {
      headers: ["Product A", "Product B", "Product C"],
      categories: [
        // Data for first table
      ]
    };
    new ComparisonTable(data1, "table1");
    
    // Second table
    const data2 = {
      headers: ["Service X", "Service Y", "Service Z"],
      categories: [
        // Data for second table
      ]
    };
    new ComparisonTable(data2, "table2");
  });
</script>
```

## Complete Data Format

```javascript
const comparisonData = {
  headers: ["Product A", "Product B", "Product C"],
  categories: [
    {
      name: "Category 1",
      features: [
        {
          name: "Feature 1",
          connectyAI: { type: "check" },
          competition1: "close",
          competition2: { type: "warning", text: "Partial" },
          descriptions: {
            connectyAI: "Description for Product A",
            competition1: "Description for Product B",
            competition2: "Description for Product C"
          },
          tooltip: "Tooltip explaining this feature"
        },
        // More features...
      ],
      keyTakeaways: [
        "Key takeaway 1 for this category",
        "Key takeaway 2 for this category"
      ]
    },
    // More categories...
  ]
};
```

## Icons Types

- `check` - Shows a checkmark (positive)
- `warning` - Shows a warning triangle (partial)
- `close` - Shows an X (negative)

## Customization

Each table gets a unique instance ID that scopes its styles, so multiple tables won't conflict with each other.

## Browser Support

This library works in all modern browsers (Chrome, Firefox, Safari, Edge). 