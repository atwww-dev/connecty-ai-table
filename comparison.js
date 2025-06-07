// Comparison Table Data
const comparisonData = {
  headers: [
    "Connecty AI",
    "Databricks AI BI Genie",
    "Databricks Unity Catalog",
  ],
  categories: [
    {
      name: "Faster Setup & Lower Maintenance",
      features: [
        {
          name: "Plug-and-play",
          connectyAI: { type: "check" },
          competition1: "close", // No
          competition2: "close", // No
          descriptions: {
            connectyAI:
              "Connecty AI requires no preparation or code, automatically discovers your schema in minutes, and lets you start chatting with raw, uncurated data right away.",
            competition1:
              "With Genie a user must build a space by selecting tables in Unity Catalog and supplying sample questions or guidance before business users can ask anything.",
            competition2:
              "Relies on setup within Databricks environment; Unity Catalog is a component that needs to be configured within that environment.",
          },
          tooltip:
            "Ready to use interface with minimal configuration or coding.",
        },
        {
          name: "Auto data prep",
          connectyAI: { type: "check" },
          competition1: "close", // ❌ No
          competition2: "close", // n/a
          descriptions: {
            connectyAI:
              "Connecty AI requires no preparation or code, automatically discovers your schema in minutes, and lets you start chatting with raw, uncurated data right away.",
            competition1:
              "Genie requires data to be prepared and available in Unity Catalog. It does not perform auto data prep itself.",
            competition2:
              "Unity Catalog stores metadata and governs data but does not automatically prepare raw data; preparation is an upstream process.",
          },
          tooltip:
            "The platform automatically cleans, profiles, and structures raw data for analysis.",
        },
        {
          name: "Can operate on Hive cluster (no Pro/Serverless SQL required)",
          connectyAI: { type: "check" },
          competition1: "close", // ❌ No
          competition2: { type: "check" }, // ✅ Yes (Unity Catalog can govern data in Hive)
          descriptions: {
            connectyAI:
              "Connecty AI runs anywhere it’s needed, connecting to cloud warehouses or on-prem SQL and Hive clusters without extra setup.",
            competition1:
              "Genie only works with data in Unity Catalog on Databricks, typically queried via Databricks SQL warehouses (Pro/Serverless).",
            competition2:
              "Unity Catalog can manage metadata for Hive metastores, but Genie's execution layer is tied to Databricks SQL.",
          },
          tooltip:
            "Works directly on an existing Hive/Spark cluster without needing a special cloud SQL engine.",
        },
        {
          name: "Data environment customization",
          connectyAI: { type: "check" },
          competition1: "close", // ❌ No
          competition2: "close", // n/a
          descriptions: {
            connectyAI:
              "Connecty AI allows for syncing metadata, materializing views, or executing pipelines from within the tool.",
            competition1:
              "Genie is primarily a query interface and does not offer these customization options directly.",
            competition2:
              "Unity Catalog is for governance and metadata; such operations are handled by other Databricks tools (e.g., Workflows, Delta Live Tables).",
          },
          tooltip:
            "Ability to sync metadata, materialize views, or execute pipelines from within the tool.",
        },
        {
          name: "Native integration (major datawarehouses)",
          connectyAI: { type: "check" },
          competition1: { type: "warning", text: "Primarily Databricks" }, // Relies on UC
          competition2: { type: "check" }, // UC can connect to external sources
          descriptions: {
            connectyAI:
              "Pre-built secure connections to leading cloud and on-prem warehouses for seamless data access.",
            competition1:
              "Genie operates on data within the Databricks ecosystem, leveraging Unity Catalog for connections.",
            competition2:
              "Unity Catalog supports federated queries to some external data sources (e.g., MySQL, PostgreSQL, Snowflake, etc.).",
          },
          tooltip:
            "Pre-built secure connections to leading cloud and on-prem warehouses for seamless data access.",
        },
      ],
      keyTakeaways: [
        "Connecty AI delivers time-to-value with truly plug-and-play deployment and auto-discovery of raw data schemas, eliminating manual space setup and sample prompt creation.",
        "Automated data profiling, cleaning, and semantic modeling reduce ongoing maintenance overhead, so business users can start querying without hand-curating tables or wiring pipelines.",
        "Broad engine support—including Hive/Spark, cloud warehouses, and on-prem databases—plus built-in connectors and metadata sync means fewer integration headaches and no extra drivers to manage.",
      ],
    },
    {
      name: "Semantic Layer Prep",
      features: [
        {
          name: "Auto-generated semantic layer",
          connectyAI: { type: "check" },
          competition1: "close", // ❌ No
          competition2: "close", // ❌ No
          descriptions: {
            connectyAI:
              "Connecty AI eliminates that effort with a truly dynamic semantic layer. As soon as you connect your data sources, it scans and indexes everything, inferring data types, keys, joins, hierarchies, and more. Also, continuously updates this context graph in real time whenever schemas or data patterns change.",
            competition1:
              "Genie relies on that clean, pre-modeled layer in Unity Catalog and cannot generate new summaries or metrics on its own.",
            competition2:
              "Unity Catalog gives you full control over your semantic model, but every table, relationship, and metric must be defined and maintained by user (with only AI help for drafting documentation).",
          },
          tooltip:
            "The system builds and maintains your semantic model (metrics, joins, definitions) without manual setup.",
        },
        {
          name: "Interactive visualization of semantic layer",
          connectyAI: { type: "check" },
          competition1: {
            type: "warning",
            text: "No, just ERD for data lineage",
          }, // ❌ No, just ERD for data lineage
          competition2: "close", // ❌ No
          descriptions: {
            connectyAI:
              "Connecty AI builds a context graph that links tables, infers relationships and identifies metrics without human-defined models. You can explore this unified semantic layer through an interactive visualization that displays tables, joins, lineage and metric definitions.",
            competition1:
              "Genie does not offer visualization of the semantic layer. Databricks offers ERD-like views for data lineage through Unity Catalog.",
            competition2:
              "Unity Catalog provides lineage graphs but not an interactive visualization of the semantic layer focused on relationships and metrics for BI querying.",
          },
          tooltip:
            "A graphical view you can explore to see tables, relationships, and metrics.",
        },
      ],
      keyTakeaways: [
        "Connecty AI removes the need for manual semantic modeling by auto-building and maintaining your metrics, joins, and definitions on the fly.",
        "Its dynamic context graph continuously adapts to schema or data changes, so your semantic layer stays current without extra work.",
        "An interactive visualization lets you explore and refine tables, relationships, and metrics in real time—no coding required.",
      ],
    },
    {
      name: "Automation of Catalog",
      features: [
        {
          name: "Join relationships auto-detection",
          connectyAI: { type: "check" },
          competition1: {
            type: "warning",
            text: "No (unless pre-defined in Unity Catalog)",
          }, // ❌ No (unless pre-defined in Unity Catalog)
          competition2: "close", // n/a (UC stores predefined joins)
          descriptions: {
            connectyAI:
              "Connecty AI automatically analyzes your data structure and usage to infer relationships and build live relationship and lineage graphs, creating a dynamic semantic layer with no manual configuration.",
            competition1:
              "Genie can only join tables if you’ve defined keys in Unity Catalog or if column names happen to match, so it may not connect tables correctly on its own.",
            competition2:
              "Unity Catalog stores primary and foreign key constraints if defined by users, which then can be used by query engines. It does not auto-detect relationships extensively beyond basic name matching.",
          },
          tooltip:
            "AI identifies how tables should link by matching keys or data patterns.",
        },
        {
          name: "AI generated descriptions",
          connectyAI: { type: "check" },
          competition1: "close", // ❌ No (Genie consumes descriptions)
          competition2: { type: "check" }, // ✅ Yes (UC can use AI for descriptions)
          descriptions: {
            connectyAI:
              "Connecty AI automatically generates human-readable field and table descriptions.",
            competition1:
              "Genie uses descriptions stored in Unity Catalog but does not generate them itself.",
            competition2:
              "Unity Catalog supports AI-generated comments (descriptions) for tables and columns.",
          },
          tooltip:
            "AI Generates' human-readable field or table summaries for you.",
        },
        {
          name: "Copy context across spaces",
          connectyAI: { type: "check" },
          competition1: "close", // ❌ No
          competition2: "close", // n/a (UC is central, spaces are Genie's concept)
          descriptions: {
            connectyAI:
              "A single shared context graph means any change—adding metrics or refining joins—is instantly available across all projects.",
            competition1:
              "Genie stores each scenario in its own space. You can share a space across teams, but you must either open the same space or manually recreate tables and instructions for each new project.",
            competition2:
              "Unity Catalog centralizes metadata, but example queries and custom guidance still need to be entered separately for each Genie space.",
          },
          tooltip:
            "Reuse the same dataset, metadata, and settings in multiple projects with one click.",
        },
        {
          name: "AI suggested PII data masking",
          connectyAI: { type: "check" },
          competition1: "close", // ❌ No
          competition2: "close", // ❌ No (UC tags, masking is separate)
          descriptions: {
            connectyAI:
              "Connecty AI’s context engine applies pattern recognition and entity classification to detect PII attributes—such as Social Security numbers, email addresses, and phone numbers—and enforces masking transformations at query time.",
            competition1:
              "AI/BI Genie inherits and enforces masking rules (if defined based on UC tags) in its responses but does not perform its own PII detection or tagging, nor suggest masking.",
            competition2:
              "Unity Catalog uses LLM-powered classification to tag sensitive columns and exposes those tags for downstream masking policies in SQL warehouses, but doesn't suggest masking rules itself.",
          },
          tooltip:
            "The AI flags sensitive fields (like SSNs) and recommends or applies masking.",
        },
        {
          name: "Supports Unity Catalog Integration",
          connectyAI: { type: "check" },
          competition1: { type: "check" }, // ✅ Yes
          competition2: "close", // n/a (It is Unity Catalog)
          descriptions: {
            connectyAI:
              "Connecty AI can connect to and leverage metadata from Databricks Unity Catalog if it’s present.",
            competition1:
              "Genie is tightly integrated with and relies on Unity Catalog.",
            competition2: "This refers to Unity Catalog itself.",
          },
          tooltip:
            "Can connect to and leverage metadata from Databricks Unity Catalog if it’s present.",
        },
        {
          name: "Can operate without query history/sample query training",
          connectyAI: { type: "check" },
          competition1: { type: "warning", text: "Yes (but not recommended)" }, // ✅ Yes (but not recommended)
          competition2: "close", // n/a
          descriptions: {
            connectyAI:
              "Connecty AI works effectively on fresh schemas without needing past queries or example Q&A to learn from.",
            competition1:
              "Genie can operate without sample queries, but its performance and accuracy are significantly improved with them.",
            competition2:
              "Unity Catalog itself does not require query history for its core functions.",
          },
          tooltip:
            "Works effectively on fresh schemas without needing past queries or example Q&A to learn from.",
        },
      ],
      keyTakeaways: [
        "Connecty AI auto-discovers table relationships and generates human-readable field and table descriptions, eliminating manual catalog updates.",
        "A single shared context graph means any change—adding metrics or refining joins—is instantly available across all projects.",
        "Built-in PII detection and optional Unity Catalog metadata integration ensure your catalog stays accurate, secure, and always up to date—no prior query history needed.",
      ],
    },
    {
      name: "Knowledge Graph Capabilities",
      features: [
        {
          name: "Unlimited Human Instructions",
          connectyAI: { type: "check" },
          competition1: { type: "warning", text: "No, max. 100 instructions" }, // ❌ No, max. 100 instructions
          competition2: "close", // n/a
          descriptions: {
            connectyAI:
              "AI can reference a virtually unbounded pool of data metadata and human guidance, pulling in only what’s relevant each time.",
            competition1:
              "Genie is limited to a maximum of 100 manual instructions per space.",
            competition2:
              "Unity Catalog does not have a concept of 'human instructions' in this context.",
          },
          tooltip:
            "AI can reference a virtually unbounded pool of data metadata, pulling in only what’s relevant each time.",
        },
        {
          name: "Max. Tables per Workspace",
          connectyAI: { type: "check", text: "Unlimited" },
          competition1: {
            type: "warning",
            text: "Limited to 25 tables and views",
          },
          competition2: "close", // n/a
          descriptions: {
            connectyAI:
              "Connecty AI handles “vast raw structured data” with no hard table limits, automatically ingesting and indexing large schemas across multiple databases.",
            competition1:
              "Genie is limited to 25 tables and views per workspace/space.",
            competition2:
              "Unity Catalog can manage a very large number of tables, not directly comparable to a Genie workspace limit.",
          },
          tooltip:
            "The maximum number of tables you can include in one analysis project or “space.”",
        },
        {
          name: "Recommended number of tables per space",
          connectyAI: { type: "check", text: "Unlimited" },
          competition1: { type: "warning", text: "25" }, // Recommended is 5-10, max 25.
          competition2: "close", // n/a
          descriptions: {
            connectyAI:
              "Connecty AI handles “vast raw structured data” with no hard table limits, automatically ingesting and indexing large schemas across multiple databases.",
            competition1:
              "To avoid model confusion or errors Databricks recommends keeping each Genie space small, ideally 5–10 tables (under 50 columns each) and no more than 25 total.",
            competition2: "Not applicable to Unity Catalog directly.",
          },
          tooltip:
            "The suggested table count to ensure reliable AI performance.",
        },
      ],
      keyTakeaways: [
        "Connecty AI’s knowledge graph scales automatically, handling unlimited data metadata and human guidance without throttles or table caps.",
        "You can feed any number of instructions and link vast schemas—Connecty will pinpoint only the relevant context each time.",
        "Genie’s model is limited to 25 tables per space and 100 manual instructions, whereas Connecty’s graph architecture imposes no such bounds for enterprise-scale insights.",
      ],
    },
    {
      name: "Natural Language Capabilities",
      features: [
        {
          name: "Chat-based self-serve analytics",
          connectyAI: { type: "check" },
          competition1: { type: "check" },
          competition2: "close", // ❌ No (UC is not a chat interface)
          descriptions: {
            connectyAI:
              "Connecty AI delivers the same NL-to-SQL chat capability but embeds an AI-driven SQL editor with built-in versioning. Users can toggle between the conversational prompt and the generated SQL, refine the code, and track changes—all in one environment.",
            competition1:
              "Databricks AI/BI Genie offers a chat interface that converts English questions into SQL queries and returns data plus visualizations.",
            competition2:
              "Unity Catalog is a governance layer, not a chat interface.",
          },
          tooltip:
            "Conversational interface that lets users ask data questions in plain language.",
        },
        {
          name: "Questions per minute across all spaces",
          connectyAI: { type: "check", text: "Unlimited" },
          competition1: { type: "warning", text: "20" },
          competition2: "close", // n/a
          descriptions: {
            connectyAI:
              "By contrast, Connecty AI's architecture is designed to scale with underlying compute resources and support significantly higher question volumes per minute, limited only by database/warehouse throughput rather than the AI layer itself (i.e. “virtually unlimited” questions per minute under sufficient infrastructure).",
            competition1:
              "Each Databricks workspace can handle up to 20 natural-language questions per minute across all Genie sessions.",
            competition2: "Not applicable to Unity Catalog.",
          },
          tooltip:
            "The number of AI chat or NL queries the platform can handle per minute, aggregated across projects.",
        },
        {
          name: "Parallel sessions and questions",
          connectyAI: { type: "check", text: "Unlimited" },
          competition1: {
            type: "warning",
            text: "10,000 concurrent conversations (queued beyond 20 QPM)",
          }, // 10,000 concurrent conversations
          competition2: "close", // n/a
          descriptions: {
            connectyAI:
              "In contrast, Connecty AI’s agentic architecture (with multi-agent “deep reasoning” components) is built to run tasks in parallel. The platform can “rerank billions of context points” in real-time to answer complex queries, and it supports unlimited teams and usage across an organization.",
            competition1:
              "Databricks supports up to 10,000 concurrent conversations per space, if too many questions are asked at once, Genie will queue responses beyond 20 per minute.",
            competition2: "Not applicable to Unity Catalog.",
          },
          tooltip:
            "How many simultaneous chat sessions or queries can run without performance degradation.",
        },
        {
          name: "Intuitive chat interface with powerful features for technical and non-technical users",
          connectyAI: { type: "check" },
          competition1: { type: "check" },
          competition2: "close", // ❌ No
          descriptions: {
            connectyAI:
              "Offers a simple chat UI designed for business users with no coding skills, alongside advanced features for technical users.",
            competition1:
              "Genie provides an intuitive chat interface for both technical and non-technical users.",
            competition2: "Unity Catalog is not a chat interface.",
          },
          tooltip:
            "A simple chat UI designed so business users need no coding skills.",
        },
        {
          name: "Collaborative features",
          connectyAI: { type: "check" },
          competition1: { type: "warning", text: "Partially Yes" },
          competition2: "close", // ❌ No
          descriptions: {
            connectyAI:
              "Connecty AI enables full team collaboration with built-in version control, a shared metadata catalog, and role-based access, making every edit and insight instantly visible.",
            competition1:
              "Genie relies on Unity Catalog for secure, governed data and lineage but does not support in-chat editing or versioned analyses directly within the chat interface. Sharing is via sharing the Genie space or queries.",
            competition2:
              "Unity Catalog provides governance and sharing capabilities for data assets, not direct collaborative editing of analyses in a chat tool.",
          },
          tooltip:
            "Tools for sharing, commenting on, and jointly editing analyses within a team.",
        },
      ],
      keyTakeaways: [
        "Connecty AI offers a seamless NL-to-SQL chat with an embedded SQL editor and version control, empowering both business users and analysts in one interface—whereas Genie’s chat is read-only, and edits must happen in a separate SQL editor.",
        "Connecty’s platform supports virtually unlimited queries per minute and concurrent sessions, scaling with your compute. Genie is capped at 20 questions per minute per workspace and will queue excess requests.",
        "Full collaboration is built in—teams can share, comment on, and evolve analyses in real time. Genie relies on Unity Catalog’s governance but lacks in-chat versioning or joint-editing features.",
      ],
    },
    {
      name: "Advanced AI Analytical Capabilities",
      features: [
        {
          name: "Complex analysis (multi-layered, multi-intent, chained intent questions)",
          connectyAI: { type: "check" },
          competition1: "close", // ❌ No (recommends one simple question at a time)
          competition2: "close", // ❌ No
          descriptions: {
            connectyAI:
              "Connecty AI handles multi-intent questions in one turn by building an intent graph that decomposes and executes each sub-task automatically.",
            competition1:
              "Genie translates each natural-language query into a single SQL statement with basic visualizations but does not support multi-step analytics; recommends one simple question at a time.",
            competition2:
              "Unity Catalog does not perform analysis; it provides the data foundation.",
          },
          tooltip:
            "Ability to understand and execute queries that involve multi-layered analytical steps.",
        },
        {
          name: "Intent Graph powered by Autonomous Deep Reasoning",
          connectyAI: { type: "check" },
          competition1: "close", // ❌ No (limited to chain-of-thought)
          competition2: "close", // ❌ No
          descriptions: {
            connectyAI:
              "Connecty AI’s Autonomous Deep Reasoning decomposes compound questions into sub tasks, chaining queries and calculations behind the scenes via dynamic semantic layer.",
            competition1:
              "Genie, however, answers each question literally and struggles with compound requests, relying on a simpler chain-of-thought approach.",
            competition2: "Not applicable to Unity Catalog.",
          },
          tooltip:
            "An AI-constructed map of sub-tasks the system uses to break down and solve complex questions.",
        },
        {
          name: "AI SQL editor with change tracking and version control",
          connectyAI: { type: "check" },
          competition1: "close", // ❌ No
          competition2: "close", // n/a
          descriptions: {
            connectyAI:
              "Connecty AI offers an AI-assisted SQL editor with built-in change tracking and version control, letting teams compare diffs, revert steps, and branch query logic.",
            competition1:
              "Genie only shows generated SQL and requires editing outside the chat. Databricks notebooks or SQL editor can be used for editing SQL, which have their own version control if integrated with Git.",
            competition2:
              "Unity Catalog logs queries for compliance but provides no user interface for version control of SQL in the context of a BI chat tool.",
          },
          tooltip:
            "A SQL editor that logs your edits and lets you compare or roll back changes.",
        },
      ],
      keyTakeaways: [
        "Connecty AI’s Autonomous Deep Reasoning builds an intent graph to break down and execute multi-layered, multi-intent queries in one go, while Genie only handles one simple question at a time.",
        "An integrated AI SQL editor with version control and diff tracking ensures every change in Connecty is auditable and editable.",
        "Connecty delivers end-to-end complex analysis, chaining sub-tasks and models automatically, whereas Genie’s chain-of-thought approach is limited to basic translations and visualizations.",
      ],
    },
    {
      name: "Explainability & Trust",
      features: [
        {
          name: "Explainability layer",
          connectyAI: { type: "check" },
          competition1: "close", // ❌ No
          competition2: "close", // ❌ No
          descriptions: {
            connectyAI:
              "Connecty AI delivers a full explainability layer with intent graphs, step-by-step reasoning, dynamic sematic layer, and confidence scores for every answer.",
            competition1:
              "Genie shows only the generated SQL and visualization with no natural‑language explanation or confidence indicators.",
            competition2:
              "Unity Catalog provides lineage and audit logs for governance but does not offer any AI decision explainability interface.",
          },
          tooltip:
            "A narrative or visual trail showing how the AI arrived at its conclusions.",
        },
        {
          name: "Intent decomposition",
          connectyAI: { type: "check" },
          competition1: "close", // ❌ No
          competition2: "close", // ❌ No
          descriptions: {
            connectyAI:
              "Connecty AI breaks your question into smaller logical parts before solving each.",
            competition1:
              "Genie processes questions as a whole, translating them to SQL directly.",
            competition2: "Not applicable to Unity Catalog.",
          },
          tooltip:
            "AI breaks your question into smaller logical parts before solving each.",
        },
        {
          name: "Context utilized and relevant candidates considered with reasoning and confidence scores",
          connectyAI: { type: "check" },
          competition1: "close", // ❌ No
          competition2: "close", // ❌ No
          descriptions: {
            connectyAI:
              "Connecty AI’s UI highlights which tables and columns it used from its dynamic context graph and displays a confidence score with granularity at each self refining steps.",
            competition1:
              "Genie returns only the SQL query and results with no confidence metrics or explicit indication of which data sources were considered beyond the generated SQL.",
            competition2:
              "Unity Catalog supplies the underlying metadata and lineage but does not offer any interface for AI confidence or context transparency.",
          },
          tooltip:
            "The AI reveals which data elements it used and why they were chosen.",
        },
        {
          name: "Semantic layer visualization and editing",
          connectyAI: { type: "check" },
          competition1: "close", // ❌ No
          competition2: { type: "warning", text: "Partial" },
          descriptions: {
            connectyAI:
              "Connecty AI provides an interactive graph editor that visualizes its AI-generated semantic model and lets users adjust table relationships and metric definitions in real time, boosting transparency and trust.",
            competition1:
              "Genie uses the Unity Catalog metadata for its semantic context but offers no in-app visualization or editing of that model; all schema or relationship changes must be made manually in Unity Catalog.",
            competition2:
              "Unity Catalog supplies lineage graphs and governed metric definitions, yet it does not include an interactive interface for directly modeling or editing relationships in the way a BI semantic layer tool would.",
          },
          tooltip:
            "A UI you can use to view and tweak the AI’s business model of your data.",
        },
        {
          name: "Metric expressions",
          connectyAI: { type: "check" },
          competition1: "close", // ❌ No
          competition2: "close", // ❌ No
          descriptions: {
            connectyAI:
              "Connecty AI surfaces metric formulas and join conditions in its dynamic semantic layer, allowing users to see and refine exactly how calculations and table relationships were applied.",
            competition1:
              "Genie relies on Unity Catalog’s governed metrics and keys and exposes join logic only through the raw SQL it generates, without any dedicated UI for reviewing formula application or join choices.",
            competition2:
              "Unity Catalog stores metric expressions and key-based relationships for governance but does not provide an interactive interface to visualize or explain how those definitions are used in analysis by a tool like Genie.",
          },
          tooltip:
            "The formulas and definitions the AI uses to calculate business metrics (e.g., revenue = price × quantity).",
        },
        {
          name: "Join relationships",
          connectyAI: { type: "check" },
          competition1: "close", // ❌ No
          competition2: "close", // ❌ No
          descriptions: {
            connectyAI:
              "Users can see and refine how tables are joined within the dynamic semantic layer.",
            competition1:
              "Join logic is visible in the generated SQL. Genie relies on predefined joins in UC or attempts to infer them.",
            competition2:
              "Unity Catalog stores join relationships (keys) but doesn't offer an interactive way to explore them in the context of AI query generation.",
          },
          tooltip:
            "The connections between tables (e.g., customer ID in orders links to customer table).",
        },
        {
          name: "AI hallucinations for non-existing columns/objects",
          connectyAI: "close",
          competition1: "close",
          competition2: "close",
          descriptions: {
            connectyAI:
              "Connecty AI’s dynamic context graph continuously syncs actual metadata from all sources, ensuring it never invents fields or tables that do not exist.",
            competition1:
              "Genie confines queries to the curated Genie space and Unity Catalog schema, and will ask clarifying questions if a user’s request falls outside known schema boundaries.",
            competition2:
              "Unity Catalog enforces a governed schema so any AI tool using it can only reference existing tables and columns, preventing field hallucinations.",
          },
          tooltip:
            "When the AI invents fields or tables that don’t actually exist in your schema.",
        },
        {
          name: "Confidence score for context selection in response generation",
          connectyAI: { type: "check" },
          competition1: "close", // ❌ No
          competition2: "close", // n/a
          descriptions: {
            connectyAI:
              "Provides a confidence score indicating how sure the AI is about the context it used.",
            competition1:
              "Genie does not provide a confidence score for its responses.",
            competition2: "Not applicable to Unity Catalog.",
          },
          tooltip:
            "A percentage or rating showing how sure the AI is that it picked the right data context.",
        },
      ],
      keyTakeaways: [
        "Connecty AI offers end-to-end transparency—narrative explanations, intent breakdowns, visual semantic editing, metric formulas, and confidence scoring—so every insight is traceable and trustworthy.",
        "Genie provides SQL-level transparency by exposing generated queries and enforcing schema constraints, but lacks natural-language reasoning, confidence metrics, and in-UI model visualization.",
        "Unity Catalog ensures data lineage and governance audit trails but does not surface AI decision logic or allow interactive examination of the semantic layer.",
      ],
    },
  ],
};

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
    position: absolute;
    background: #010007b2;
    border: 1px solid #efeaff1a;
    border-radius: 10px;
    padding: 1rem;
    width: 250px;
    color: #efeaff;
    font-size: 0.875rem;
    z-index: 100;
    display: none;
    backdrop-filter: blur(5px);
    left: 110%;
    top: 50%;
    transform: translateY(-50%);
    box-shadow: 0 2px 8px #0003;
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
    }
    .comparison-container-${instanceId} .table-header,
    .comparison-container-${instanceId} .feature-row,
    .comparison-container-${instanceId} .feature-description-row {
      grid-template-columns: 30px 1.5fr 1fr 1fr 1fr;
      font-size: 0.95em;
    }
    .comparison-container-${instanceId} .feature-name,
    .comparison-container-${instanceId} .feature-value,
    .comparison-container-${instanceId} .feature-description-cell {
      padding: 0 0.5rem;
    }
  }

  @media (max-width: 600px) {
    .comparison-container-${instanceId} {
      overflow-x: auto !important;
      position: relative !important;
      padding: 0.5rem;
      width: 100%;
      max-width: 100vw;
    }
    .comparison-container-${instanceId} > .table-header,
    .comparison-container-${instanceId} > .feature-row,
    .comparison-container-${instanceId} > .feature-description-row {
      min-width: 520px !important;
      width: 520px !important;
    }
    .comparison-container-${instanceId}::after {
      content: '';
      position: absolute;
      top: 0; right: 0; bottom: 0;
      width: 24px;
      pointer-events: none;
      background: linear-gradient(to left, #06001a 80%, transparent);
      z-index: 2;
      display: block;
    }
    .comparison-container-${instanceId} .feature-name,
    .comparison-container-${instanceId} .feature-value,
    .comparison-container-${instanceId} .feature-description-cell {
      padding: 0 0.25rem;
    }
    .comparison-container-${instanceId} .key-takeaways {
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
      /* overflow-x: auto; already set above */
    }
    .comparison-container-${instanceId} .table-header,
    .comparison-container-${instanceId} .feature-row,
    .comparison-container-${instanceId} .feature-description-row {
      min-width: 520px;
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
    this.instanceId = Math.random().toString(36).substring(2, 9); // Generate unique ID for this instance
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
    const featureTitle = document.createElement("h2");
    featureTitle.textContent = feature.name;
    nameCell.appendChild(featureTitle);

    if (typeof feature.tooltip === "string" && feature.tooltip.trim() !== "") {
      const helpIcon = document.createElement("span");
      helpIcon.className = "help-icon";
      helpIcon.textContent = "ⓘ";
      const tooltip = this.createTooltip(feature.tooltip);
      helpIcon.appendChild(tooltip);
      nameCell.appendChild(helpIcon);
      // Only toggle visibility, let CSS handle positioning
      helpIcon.addEventListener("mouseenter", () => {
        tooltip.classList.add("visible");
      });
      helpIcon.addEventListener("mouseleave", () => {
        tooltip.classList.remove("visible");
      });
    }
    row.appendChild(nameCell);

    const companies = ["connectyAI", "competition1", "competition2"];
    companies.forEach((company) => {
      const cell = document.createElement("div");
      cell.className = "feature-value";
      const value = feature[company];
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
        if (["check", "warning", "close"].includes(value)) {
          cell.innerHTML = this.getStatusIcon(value);
        } else {
          cell.innerHTML = this.getStatusIcon(value);
        }
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
      companies.forEach((company) => {
        const descCell = document.createElement("div");
        descCell.className = "feature-description-cell";
        descCell.textContent = feature.descriptions[company] || "";
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

  createKeyTakeaways(takeaways) {
    const section = document.createElement("div");
    section.className = "key-takeaways";

    const title = document.createElement("h3");
    title.className = "takeaways-title";
    title.textContent = "Key takeaways:";
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

    const title = document.createElement("div");
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

    section.appendChild(this.createKeyTakeaways(category.keyTakeaways));
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

// Function to initialize comparison tables
function initComparisonTables() {
  // Find all elements with data-comparison attribute
  const comparisonContainers = document.querySelectorAll("[data-comparison]");

  comparisonContainers.forEach((container) => {
    // Create a new instance for each container
    new ComparisonTable(comparisonData, container.id);
  });
}

// Initialize tables when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Legacy initialization for backward compatibility
  const comparisonTable = document.getElementById("comparison-table");
  if (comparisonTable) {
    new ComparisonTable(comparisonData, "comparison-table");
  }

  // Initialize any other comparison tables
  initComparisonTables();
});
