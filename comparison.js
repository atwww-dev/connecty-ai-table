// Comparison Table Library
(function () {
  // Styles function that generates scoped styles for a specific instance
  function generateStyles(instanceId) {
    return `
    .comparison-container-${instanceId} {
      font-family: 'Roboto', sans-serif;
      background-color: #06001a;
      border-radius: 1rem;
      padding: 2rem;
      color: #efeaff;
    }

    .comparison-container-${instanceId} .table-header {
      display: grid;
      grid-template-columns: 40px 1fr repeat(3, 1fr);
      border-bottom: 1px solid #efeaff1a;
      padding: 1rem 0;
      position: sticky;
      top: 0;
      background-color: #06001a;
      z-index: 10;
    }

    .comparison-container-${instanceId} .header-cell {
      padding: 0 1rem;
      font-weight: 500;
      border-right: 1px solid #efeaff1a;
    }
    .comparison-container-${instanceId} .header-cell:last-child {
      border-right: none;
    }

    .comparison-container-${instanceId} .chevron-cell {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 1.2rem;
      color: #b3b0c8;
      transition: transform 0.3s;
      user-select: none;
    }
    .comparison-container-${instanceId} .chevron-cell.open {
      transform: rotate(180deg);
    }

    .comparison-container-${instanceId} .category {
      margin-top: 2rem;
    }

    .comparison-container-${instanceId} .category-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 0;
      border-bottom: 1px solid #efeaff1a;
    }

    .comparison-container-${instanceId} .category-title {
      font-weight: 500;
    }

    .comparison-container-${instanceId} .show-description {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .comparison-container-${instanceId} .switch {
      position: relative;
      width: 48px;
      height: 24px;
      background: #221e36;
      border: 1px solid #b3b0c8;
      border-radius: 999px;
      cursor: pointer;
      transition: background 0.3s, border 0.3s;
      box-sizing: border-box;
    }

    .comparison-container-${instanceId} .switch::after {
      content: '';
      position: absolute;
      width: 4px;
      height: 14px;
      background: #fff;
      border-radius: 6px;
      top: 4px;
      left: 7px;
      transition: transform 0.3s;
      box-shadow: 0 1px 2px #0002;
    }

    .comparison-container-${instanceId} .switch.active {
      background: #3f00ff;
      border-color: #3f00ff;
    }

    .comparison-container-${instanceId} .switch.active::after {
      transform: translateX(26px);
    }

    .comparison-container-${instanceId} .feature-row {
      display: grid;
      grid-template-columns: 40px 1fr 1fr 1fr 1fr;
      border-bottom: 1px solid #efeaff1a;
      padding: 1rem 0;
      background: transparent;
      cursor: pointer;
    }
    .comparison-container-${instanceId} .feature-row > div {
      border-right: 1px solid #efeaff1a;
    }
    .comparison-container-${instanceId} .feature-row > div:last-child {
      border-right: none;
    }

    .comparison-container-${instanceId} .feature-name {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: #efeaffb2;
      padding: 0 1rem;
      position: relative;
      border-right: 1px solid #efeaff1a;
    }

    .comparison-container-${instanceId} .feature-name h2 {
      margin: 0;
      font-size: 1em;
      font-weight: normal;
      color: inherit;
    }

    .comparison-container-${instanceId} .feature-value {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 1rem;
      border-right: 1px solid #efeaff1a;
      background: transparent;
    }
    .comparison-container-${instanceId} .feature-value:last-child {
      border-right: none;
    }

    .comparison-container-${instanceId} .feature-description-row {
      display: none;
      grid-template-columns: 40px 1fr 1fr 1fr 1fr;
      background: #08041e80;
      border-bottom: 1px solid #efeaff1a;
      border-radius: 0 0 1rem 1rem;
    }
    .comparison-container-${instanceId} .feature-description-row.visible {
      display: grid;
    }
    .comparison-container-${instanceId} .feature-description-cell {
      padding: 1rem;
      border-right: 1px solid #efeaff1a;
      border-top: 1px solid #efeaff1a;
      color: #efeaffb2;
      font-size: 0.95em;
      background: transparent;
    }
    .comparison-container-${instanceId} .feature-description-cell:last-child {
      border-right: none;
    }
    .comparison-container-${instanceId} .feature-description-cell.empty {
      background: transparent;
      border-right: none;
    }

    .comparison-container-${instanceId} .tooltip {
      position: fixed;
      background: #010007b2;
      border: 1px solid #efeaff1a;
      border-radius: 10px;
      padding: 1rem;
      width: 250px;
      color: #efeaff;
      font-size: 0.875rem;
      z-index: 1000;
      display: none;
      backdrop-filter: blur(5px);
      box-shadow: 0 2px 8px #0003;
      pointer-events: none;
    }
    .comparison-container-${instanceId} .tooltip.visible {
      display: block;
    }

    .comparison-container-${instanceId} .help-icon {
      cursor: pointer;
      color: #efeaff;
      font-size: 1rem;
      margin-left: 0.5rem;
      position: relative;
      z-index: 101;
    }

    .comparison-container-${instanceId} .key-takeaways {
      position: relative;
      margin-top: 2rem;
      padding: 2rem;
      background-color: #a299c11a;
      border-radius: 1rem;
      overflow: hidden;
      z-index: 1;
    }
    .comparison-container-${instanceId} .key-takeaways::before {
      content: '';
      position: absolute;
      inset: -4px;
      border-radius: 1.1rem;
      background: linear-gradient(120deg, #a299c1, #efeaff, #221e36, #a299c1 80%);
      filter: blur(8px);
      opacity: 0.18;
      z-index: -1;
      animation: glowing-border-${instanceId} 10s linear infinite;
      background-size: 200% 200%;
    }
    @keyframes glowing-border-${instanceId} {
      0% {
        background-position: 0% 50%;
      }
      100% {
        background-position: 200% 50%;
      }
    }

    .comparison-container-${instanceId} .takeaways-title {
      font-weight: 500;
      margin-bottom: 1rem;
    }

    .comparison-container-${instanceId} .takeaways-list {
      list-style: none;
      padding-left: 0;
    }

    .comparison-container-${instanceId} .takeaways-list li {
      margin-bottom: 0.5rem;
    }

    .comparison-container-${instanceId} .feature-check-text {
      margin-left: 0.75em;
    }

    /* Responsive styles */
    @media (max-width: 900px) {
      .comparison-container-${instanceId} {
        padding: 1rem;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
      }
      .comparison-container-${instanceId} .table-header,
      .comparison-container-${instanceId} .feature-row,
      .comparison-container-${instanceId} .feature-description-row {
        grid-template-columns: 30px 1.5fr 1fr 1fr 1fr;
        font-size: 0.95em;
        min-width: 600px;
      }
      .comparison-container-${instanceId} .feature-name,
      .comparison-container-${instanceId} .feature-value,
      .comparison-container-${instanceId} .feature-description-cell {
        padding: 0 0.5rem;
      }
      .comparison-container-${instanceId} .key-takeaways {
        min-width: 600px;
      }
    }

    @media (max-width: 600px) {
      .comparison-container-${instanceId} {
        padding: 0.5rem;
        width: 100%;
        max-width: 100vw;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
      }
      .comparison-container-${instanceId} .table-header,
      .comparison-container-${instanceId} .feature-row,
      .comparison-container-${instanceId} .feature-description-row {
        min-width: 600px;
      }
      .comparison-container-${instanceId} .feature-name,
      .comparison-container-${instanceId} .feature-value,
      .comparison-container-${instanceId} .feature-description-cell {
        padding: 0 0.25rem;
      }
      .comparison-container-${instanceId} .key-takeaways {
        min-width: 600px;
        padding: 1rem;
      }
      .comparison-container-${instanceId} .takeaways-title {
        font-size: 1em;
      }
      .comparison-container-${instanceId} .takeaways-list li {
        font-size: 0.95em;
      }
      .comparison-container-${instanceId} .tooltip {
        width: 180px;
        font-size: 0.8em;
        padding: 0.5rem;
      }
    }

    @media (max-width: 480px) {
      .comparison-container-${instanceId} {
        padding: 0.25rem;
      }
      .comparison-container-${instanceId} .table-header,
      .comparison-container-${instanceId} .feature-row,
      .comparison-container-${instanceId} .feature-description-row {
        min-width: 600px;
      }
      .comparison-container-${instanceId} .category-header {
        min-width: 600px;
      }
      .comparison-container-${instanceId} .key-takeaways {
        min-width: 600px;
      }
    }
    `;
  }

  class ComparisonTable {
    constructor(data, containerId) {
      this.data = data;
      this.containerId = containerId;
      this.container = document.getElementById(containerId);
      this.showDescriptions = {};
      this.instanceId = Math.random().toString(36).substring(2, 9);
      this.init();
    }

    injectStyles() {
      const styleId = `comparison-styles-${this.instanceId}`;

      // Check if styles for this instance already exist
      if (!document.getElementById(styleId)) {
        const styleSheet = document.createElement("style");
        styleSheet.id = styleId;
        styleSheet.textContent = generateStyles(this.instanceId);
        document.head.appendChild(styleSheet);
      }
    }

    getStatusIcon(status) {
      const icons = {
        check: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.83073 12.8337L13.7057 6.95866L12.5391 5.79199L7.83073 10.5003L5.45573 8.12533L4.28906 9.29199L7.83073 12.8337ZM8.9974 17.3337C7.84462 17.3337 6.76128 17.1149 5.7474 16.6774C4.73351 16.2399 3.85156 15.6462 3.10156 14.8962C2.35156 14.1462 1.75781 13.2642 1.32031 12.2503C0.882812 11.2364 0.664062 10.1531 0.664062 9.00033C0.664062 7.84755 0.882812 6.76421 1.32031 5.75033C1.75781 4.73644 2.35156 3.85449 3.10156 3.10449C3.85156 2.35449 4.73351 1.76074 5.7474 1.32324C6.76128 0.885742 7.84462 0.666992 8.9974 0.666992C10.1502 0.666992 11.2335 0.885742 12.2474 1.32324C13.2613 1.76074 14.1432 2.35449 14.8932 3.10449C15.6432 3.85449 16.237 4.73644 16.6745 5.75033C17.112 6.76421 17.3307 7.84755 17.3307 9.00033C17.3307 10.1531 17.112 11.2364 16.6745 12.2503C16.237 13.2642 15.6432 14.1462 14.8932 14.8962C14.1432 15.6462 13.2613 16.2399 12.2474 16.6774C11.2335 17.1149 10.1502 17.3337 8.9974 17.3337ZM8.9974 15.667C10.8585 15.667 12.4349 15.0212 13.7266 13.7295C15.0182 12.4378 15.6641 10.8614 15.6641 9.00033C15.6641 7.13921 15.0182 5.56283 13.7266 4.27116C12.4349 2.97949 10.8585 2.33366 8.9974 2.33366C7.13628 2.33366 5.5599 2.97949 4.26823 4.27116C2.97656 5.56283 2.33073 7.13921 2.33073 9.00033C2.33073 10.8614 2.97656 12.4378 4.26823 13.7295C5.5599 15.0212 7.13628 15.667 8.9974 15.667Z" fill='#3FC380'/></svg>`,
        warning: `<svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.835938 16.5003L10.0026 0.666992L19.1693 16.5003H0.835938ZM3.71094 14.8337H16.2943L10.0026 4.00033L3.71094 14.8337ZM10.0026 14.0003C10.2387 14.0003 10.4366 13.9205 10.5964 13.7607C10.7561 13.601 10.8359 13.4031 10.8359 13.167C10.8359 12.9309 10.7561 12.733 10.5964 12.5732C10.4366 12.4135 10.2387 12.3337 10.0026 12.3337C9.76649 12.3337 9.56858 12.4135 9.40885 12.5732C9.24913 12.733 9.16927 12.9309 9.16927 13.167C9.16927 13.4031 9.24913 13.601 9.40885 13.7607C9.56858 13.9205 9.76649 14.0003 10.0026 14.0003ZM9.16927 11.5003H10.8359V7.33366H9.16927V11.5003Z" fill="#EFEAFF"/></svg>`,
        close: `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.33073 11.8337L0.164062 10.667L4.83073 6.00033L0.164062 1.33366L1.33073 0.166992L5.9974 4.83366L10.6641 0.166992L11.8307 1.33366L7.16406 6.00033L11.8307 10.667L10.6641 11.8337L5.9974 7.16699L1.33073 11.8337Z" fill="#EFEAFF"/></svg>`,
      };
      return icons[status] || "";
    }

    createTooltip(text) {
      const tooltip = document.createElement("div");
      tooltip.className = "tooltip";
      tooltip.textContent = text;
      return tooltip;
    }

    createHeader() {
      const header = document.createElement("div");
      header.className = "table-header";

      // Chevron column (empty header)
      header.appendChild(document.createElement("div"));
      // Feature name column (empty header)
      header.appendChild(document.createElement("div"));

      this.data.headers.forEach((title) => {
        const cell = document.createElement("div");
        cell.className = "header-cell";
        cell.textContent = title;
        header.appendChild(cell);
      });

      return header;
    }

    createFeatureRow(feature, categoryIndex, featureIndex) {
      // Container for row + description
      const container = document.createElement("div");
      container.className = "feature-container";

      // Feature row (icons/text only)
      const row = document.createElement("div");
      row.className = "feature-row";

      // Chevron cell
      const chevronCell = document.createElement("div");
      chevronCell.className = "chevron-cell";
      chevronCell.innerHTML =
        '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 7L9 11L13 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
      row.appendChild(chevronCell);

      const nameCell = document.createElement("div");
      nameCell.className = "feature-name";

      // Create H2 for feature name
      const featureTitle = document.createElement("div");
      featureTitle.textContent = feature.name;
      nameCell.appendChild(featureTitle);

      if (
        typeof feature.tooltip === "string" &&
        feature.tooltip.trim() !== ""
      ) {
        const helpIcon = document.createElement("span");
        helpIcon.className = "help-icon";
        helpIcon.textContent = "ⓘ";
        const tooltip = this.createTooltip(feature.tooltip);
        helpIcon.appendChild(tooltip);
        nameCell.appendChild(helpIcon);
        // Dynamic positioning and toggle visibility
        helpIcon.addEventListener("mouseenter", (e) => {
          const rect = helpIcon.getBoundingClientRect();
          const tooltipWidth = 250;
          const spacing = 10;

          // Position to the right of the icon, but check if it fits in viewport
          let left = rect.right + spacing;
          if (left + tooltipWidth > window.innerWidth) {
            // Position to the left if no space on the right
            left = rect.left - tooltipWidth - spacing;
          }

          // Center vertically relative to the icon
          const top = rect.top + rect.height / 2 - tooltip.offsetHeight / 2;

          tooltip.style.left = `${Math.max(spacing, left)}px`;
          tooltip.style.top = `${Math.max(spacing, top)}px`;
          tooltip.classList.add("visible");
        });
        helpIcon.addEventListener("mouseleave", () => {
          tooltip.classList.remove("visible");
        });
      }
      row.appendChild(nameCell);

      // Get company keys - use standard keys if present, otherwise use header indices
      const companyKeys = ["connectyAI", "competition1", "competition2"];
      const headerKeys = this.data.headers.map((header, i) => {
        // Check if standard key exists in the feature
        if (companyKeys[i] && feature[companyKeys[i]] !== undefined) {
          return companyKeys[i];
        }
        // Otherwise, create a normalized key from the header
        const normalizedKey = header.toLowerCase().replace(/\s+/g, "");
        // If the feature has this key, use it
        if (feature[normalizedKey] !== undefined) {
          return normalizedKey;
        }
        // Fallback to indexed key if nothing else matches
        return `company${i}`;
      });

      // Create cells for each company
      headerKeys.forEach((key, i) => {
        const cell = document.createElement("div");
        cell.className = "feature-value";
        const value = feature[key] || "close"; // Default to "close" if not defined
        if (typeof value === "object") {
          if (["check", "warning", "close"].includes(value.type)) {
            cell.innerHTML = `${this.getStatusIcon(
              value.type
            )} <span class="feature-check-text">${value.text || ""}</span>`;
          } else {
            cell.innerHTML = `${this.getStatusIcon(value.type)} ${
              value.text || ""
            }`;
          }
        } else {
          cell.innerHTML = this.getStatusIcon(value);
        }
        row.appendChild(cell);
      });

      // Description row (separate row, aligned under each value)
      let descriptionRow = null;
      if (feature.descriptions) {
        descriptionRow = document.createElement("div");
        descriptionRow.className = "feature-description-row";
        descriptionRow.style.gridTemplateColumns = "40px 1fr 1fr 1fr 1fr";
        // Empty cell under chevron
        const emptyCell = document.createElement("div");
        emptyCell.className = "feature-description-cell empty";
        descriptionRow.appendChild(emptyCell);
        // Empty cell under feature name
        const emptyCell2 = document.createElement("div");
        emptyCell2.className = "feature-description-cell empty";
        descriptionRow.appendChild(emptyCell2);
        // Description cells for each company
        headerKeys.forEach((key) => {
          const descCell = document.createElement("div");
          descCell.className = "feature-description-cell";
          descCell.textContent = feature.descriptions[key] || "";
          descriptionRow.appendChild(descCell);
        });
      }

      // Toggle logic for this row
      let open = false;
      const toggleRow = (force) => {
        const shouldOpen = typeof force === "boolean" ? force : !open;
        open = shouldOpen;
        if (descriptionRow) {
          if (open) {
            descriptionRow.classList.add("visible");
            chevronCell.classList.add("open");
          } else {
            descriptionRow.classList.remove("visible");
            chevronCell.classList.remove("open");
          }
        }
      };
      row.addEventListener("click", (e) => {
        // Only toggle if not clicking the help icon
        if (!e.target.classList.contains("help-icon")) {
          toggleRow();
        }
      });

      container.appendChild(row);
      if (descriptionRow) container.appendChild(descriptionRow);
      // For switch logic
      container.toggleRow = toggleRow;
      container.isOpen = () => open;
      return container;
    }

    createKeyTakeaways(takeaways, customTitle) {
      const section = document.createElement("div");
      section.className = "key-takeaways";

      const title = document.createElement("h3");
      title.className = "takeaways-title";
      title.textContent = customTitle || "Key takeaways";
      section.appendChild(title);

      const list = document.createElement("ul");
      list.className = "takeaways-list";
      takeaways.forEach((takeaway, index) => {
        const item = document.createElement("li");
        item.textContent = `${index + 1}. ${takeaway}`;
        list.appendChild(item);
      });
      section.appendChild(list);

      return section;
    }

    createCategory(category, categoryIndex) {
      const section = document.createElement("div");
      section.className = "category";

      const header = document.createElement("div");
      header.className = "category-header";

      const title = document.createElement("h2");
      title.className = "category-title";
      title.textContent = category.name;

      const showDescription = document.createElement("div");
      showDescription.className = "show-description";
      showDescription.innerHTML = `
        <span>Show description</span>
        <div class="switch"></div>
      `;

      const switchEl = showDescription.querySelector(".switch");
      header.appendChild(title);
      header.appendChild(showDescription);
      section.appendChild(header);

      // Store all feature containers for switch logic
      const featureContainers = [];
      category.features.forEach((feature, featureIndex) => {
        const container = this.createFeatureRow(
          feature,
          categoryIndex,
          featureIndex
        );
        section.appendChild(container);
        featureContainers.push(container);
      });

      // Switch logic: expand/collapse all
      switchEl.addEventListener("click", () => {
        switchEl.classList.toggle("active");
        const expand = switchEl.classList.contains("active");
        featureContainers.forEach((container) => container.toggleRow(expand));
      });

      section.appendChild(
        this.createKeyTakeaways(
          category.keyTakeaways,
          category.keyTakeawaysTitle
        )
      );
      return section;
    }

    init() {
      this.injectStyles();
      const wrapper = document.createElement("div");
      wrapper.className = `comparison-container-${this.instanceId}`;

      wrapper.appendChild(this.createHeader());

      this.data.categories.forEach((category, index) => {
        wrapper.appendChild(this.createCategory(category, index));
      });

      this.container.appendChild(wrapper);
    }
  }

  // Expose the ComparisonTable class globally
  window.ComparisonTable = ComparisonTable;

  // Auto-initialize function for Webflow CMS
  window.initComparisonTables = function (data) {
    // Find all elements with data-comparison attribute
    const comparisonContainers = document.querySelectorAll("[data-comparison]");

    comparisonContainers.forEach((container, index) => {
      // If the container doesn't have an ID, generate one
      if (!container.id) {
        container.id = `comparison-table-${Math.random()
          .toString(36)
          .substring(2, 9)}`;
      }

      // Create a new instance for each container
      new ComparisonTable(data, container.id);
    });
  };

  // Initialize tables when DOM is loaded
  document.addEventListener("DOMContentLoaded", () => {
    // Check if data is available in window.comparisonData
    if (window.comparisonData) {
      window.initComparisonTables(window.comparisonData);
    }
  });
})();
