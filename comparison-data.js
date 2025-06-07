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
