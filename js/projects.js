const PortfolioProjects = {
  data: [    
    // Water Improvement Project Dashboard
    {
      title: "Water Improvement Project Dashboard",
      date: "August 2025",
      dateValue: "2027-08-01",
      description: "Developed a comprehensive Power BI dashboard for the Maji Ndogo Water Improvement Project, designed to track progress, spending, and impact of water source upgrades. This initiative successfully achieved 100% basic access to clean water for the entire population, helping 18 million people. The dashboard ensured transparent fund tracking for international funders, monitored efficient resource utilization by local vendors, and managed budget sufficiency, concluding with a -5.29% deviation from the budget. It provided comprehensive data representation at national, provincial, and town levels, empowering data-driven decision-making. Key features included sophisticated DAX measures for dynamic filtering, cumulative cost tracking, and classifying water access according to UN requirements. The analysis also facilitated a deep dive into vendor performance, identifying efficiencies through optimized job selection and reduced travel costs.",
      tags: ["Power BI", "Data Visualization", "Dashboarding", "Project Management", "Data Analytics", "DAX", "KPIs", "Transparency", "Water Crisis", "Resource Allocation", "SQL Backend"],
      link: "https://github.com/erickgathinji/Water-Improvement-Project-Dashboard",
      links: [
        {
          label: "Dashboard",
          url: "https://github.com/erickgathinji/Water-Improvement-Project-Dashboard/blob/main/Public%20Dashboard%20(2027).pbix",
          style: "btn-outline-primary"
        },
      ]
    },

    
    // Restoring Water Access Power BI Visualization
    {
      title: "Restoring Water Access Visualization",
      date: "July 2025",
      dateValue: "2025-07-01",
      description: "Developed a comprehensive Power BI report to analyze and visualize Maji Ndogo's national water survey data, supporting President Naledi's initiative to resolve the water crisis. This project provides clear, actionable insights into current water access challenges, necessary infrastructure upgrades, and budget allocations at both national and provincial levels. The report clarifies how citizens obtain water, quantifies the population without basic access, and details the financial requirements for upgrades. Key findings include a national population of 27.6 million, a total of 25,398 planned improvements with a budget of $146.7 million, and a current 34% population access to basic water, targeting a +64% improvement. The solution utilizes Power BI for data visualization, along with sophisticated DAX calculations to classify basic water access (per UN requirements, considering queue times and pollution), adjust costs for rural projects (50% higher), and aggregate improvement types. The report structure features a national overview with high-impact statistics and a breakdown of top improvement needs, complemented by dedicated provincial pages for localized data and budget details, empowering leaders with data-driven decision-making tools for effective resource allocation.",
      tags: ["Power BI", "Data Visualization", "Data Analysis", "DAX", "Report Development", "Water Crisis", "Infrastructure Analysis", "Decision Support", "Project Management", "KPIs", "Dashboarding"],
      link: "https://github.com/erickgathinji/Restoring-Water-Access-Power-BI-Visualization",
      links: [
        {
          label: "Report",
          url: "https://github.com/erickgathinji/Restoring-Water-Access-Power-BI-Visualization/blob/main/Communicating%20our%20findings%20in%20Maji%20Ndogo.pbix",
          style: "btn-outline-primary"
        },
      ]
    },
    
    // Restoring Water Access: SQL - Part 4
    {
      title: "Restoring Water Access: SQL - Part 4",
      date: "June 2025",
      dateValue: "2025-06-31",
      description: "This final SQL project tackles the Maji Ndogo water crisis by integrating prior analyses into actionable repair strategies and an implementation roadmap. Initiated by President Aziza Naledi, the project focused on converting raw data into informed decisions and practical solutions. It involved assembling data from multiple interconnected tables (location, water_source, visits, well_pollution) into a combined_analysis_table view. Key analyses identified provincial issues, such as Sokoto's high reliance on river water (21% of population) and Amanzi's significant problem with broken home taps (24% of population). Town-level insights, particularly in Amina (Amanzi Province), revealed critical infrastructure failure where 95% of installed taps were non-functional. Overall findings showed 43% of the population relies on shared taps (with an average of 2000 people per tap), 45% of in-home water infrastructure is non-functional, and only 28% of wells are clean. Citizens faced average water queue times exceeding 120 minutes, peaking on Saturdays and during morning/evening hours. A data-driven action plan prioritized improving shared taps and contaminated wells, fixing existing infrastructure, and acknowledging logistical challenges in rural areas. Specific solutions included dispatching water trucks and drilling wells for river users, installing RO/UV filters for contaminated wells, adding more shared taps to reduce queue times below the UN standard of 30 minutes, and diagnosing local infrastructure for broken in-home taps. To guide field teams, a new Project_progress table was built, populated with 25,398 identified improvement projects, including specific improvement actions like 'Drill well' or 'Install RO filter'. The project demonstrates SQL-driven data analysis to expose systemic problems and guide targeted interventions.",
      tags: ["SQL", "MySQL", "Data Analysis", "Database Management", "Data Transformation", "Data Aggregation", "Pivot Tables", "Common Table Expressions (CTEs)", "Infrastructure Analysis", "Water Crisis", "Project Management", "Jupyter Notebook", "Action Plan Development"],
      link: "https://github.com/erickgathinji/Restoring-Water-Access-SQL-Part-4",
      links: [
        {
          label: "Notebook",
          url: "https://github.com/erickgathinji/Restoring-Water-Access-SQL-Part-4/blob/main/maji_ndogo_water_crisis_part_4.ipynb",
          style: "btn-outline-primary"
        },

      ]
       },
  
    // Restoring Water Access: SQL - Part 3
    {
      title: "Restoring Water Access: SQL - Part 3",
      date: "June 2025",
      dateValue: "2025-06-15",
      description: "Conducted an independent audit of the Maji Ndogo water project database to assess data integrity and investigate inconsistencies, following findings by Chidi Kunto. The project involved integrating an auditor's report into the md_water_services database and comparing original surveyor-recorded subjective quality scores with the auditor's true scores. This process identified 102 discrepancies out of 1620 audited records, indicating a 94% accuracy rate for the overall data collection. Errors were linked to specific employees, revealing four individuals—Bello Azibo, Malachi Mavuso, Zuriel Matembo, and Lalitha Kaburi—who were responsible for a disproportionately high number of incorrect records. Crucially, citizen statements mentioning 'cash exchanges' or other concerning behaviors were exclusively associated with these four suspect employees. These findings, while not definitive proof of corruption, highlighted serious concerns and were reported to President Naledi for immediate attention and further action. The analysis utilized SQL (MySQL/PyMySQL) for database integration, data comparison, employee linking, and evidence analysis, leveraging Jupyter Notebooks for interactive execution.",
      tags: ["SQL", "MySQL", "Data Audit", "Data Integrity", "Corruption Investigation", "Data Analysis", "Database Management", "Jupyter Notebook", "PyMySQL"],
      link: "https://github.com/erickgathinji/Restoring-Water-Access-SQL-Part-3",
      links: [
        {
          label: "Notebook",
          url: "https://github.com/erickgathinji/Restoring-Water-Access-SQL-Part-3/blob/main/maji_ndogo_water_crisis_part_3.ipynb",
          style: "btn-outline-primary"
        },
      ]
        },    

    // Restoring Water Access: SQL - Part 2    
    {
      title: "Restoring Water Access: SQL - Part 2",
      date: "June 2025",
      dateValue: "2025-06-01",
      description: "Conducted an in-depth SQL-driven analysis of Maji Ndogo's water crisis, transforming raw data from the `md_water_services` database into actionable insights and a strategic intervention plan. Key findings revealed that 43% of the population relies on shared taps, with an average of 2,000 people per tap, and only 28% of wells are clean. The analysis also highlighted that 45% of in-home water infrastructure is non-functional. Identified citizens face average water queue times of over 120 minutes, peaking on Saturdays and during morning/evening hours. Developed a data-driven action plan prioritizing shared tap improvements, contaminated well remediation, and repairing broken infrastructure, while accounting for logistical challenges in rural areas. Utilized comprehensive SQL skills including database exploration, data cleaning, aggregation, time series analysis, and pivot table creation to inform President Naledi's water restoration initiative.",
      tags: ["SQL", "MySQL", "Data Analysis", "Data Cleaning", "Data Transformation", "Data Aggregation", "Time Series Analysis", "Descriptive Statistics", "Pivot Tables", "Database Management", "Water Crisis", "Public Health", "Infrastructure Analysis", "Jupyter Notebook"],
      link: "https://github.com/erickgathinji/Restoring-Water-Access-SQL-Part-2",
      links: [
        {
          label: "Notebook",
          url: "https://github.com/erickgathinji/Restoring-Water-Access-SQL-Part-2/blob/main/maji_ndogo_water_crisis_part_2.ipynb",
          style: "btn-outline-primary"
        },
      ]
    },
    
    // Access to Drinking Water Analysis: Spreadsheets – Part 2
    {
      title: "Access to Drinking Water Analysis: Spreadsheets – Part 2",
      date: "May 2025",
      dateValue: "2025-05-31",
      description: "Explored global inequalities in access to safe and affordable drinking water by analyzing WHO/UNICEF Joint Monitoring Programme (JMP) data from 2000–2020. This project, aligned with UN Sustainable Development Goal 6, focused on differences between urban and rural service levels. Conducted in Google Sheets, it involved data cleaning, transformation, and exploratory analysis to uncover patterns, trends, and inequalities. Key insights included regional disparities, the urban advantage in water access growth, and correlations with income groups and population size. Utilized various Google Sheets functions, pivot tables, and visualizations such as line charts, histograms, stacked bar charts, and scatter plots.",
      tags: ["Google Sheets", "Data Analysis", "Data Visualization", "Data Cleaning", "Exploratory Data Analysis", "UN SDG 6", "Pivot Tables", "Data Transformation", "Time Series Analysis", "Descriptive Statistics"],
      link: "https://github.com/erickgathinji/Access-to-drinking-water-analysis-Part-2-spreadsheets",
      links: [
        {
          label: "Overview",
          url: "https://github.com/erickgathinji/Access-to-drinking-water-analysis-Part-2-spreadsheets/blob/main/README.md",
          style: "btn-outline-primary"
        },
      ]
        },
    // Access to Drinking Water Analysis: Spreadsheets – Part 1
    {
      title: "Access to Drinking Water Analysis: Spreadsheets – Part 1",
      date: "May 2025",
      dateValue: "2025-05-01",
      description: "A data exploration project aligned with UN Sustainable Development Goal 6, analyzing global inequalities in access to clean and affordable drinking water using 2020 WHO/UNICEF data. Conducted in Google Sheets, it explores how water service levels vary across national, urban, and rural populations, covering trends, income groups, and visualization insights.",
      tags: ["Google Sheets", "Data Analysis", "Data Visualization", "Data Cleaning", "Descriptive Statistics", "UN SDG 6"],
      link: "https://github.com/erickgathinji/Access-to-drinking-water-analysis-Part-1-spreadsheets",
      "links": [
        {
          label: "Overview",
          url: "https://github.com/erickgathinji/Access-to-drinking-water-analysis-Part-1-spreadsheets/blob/main/project_report.md",
          style: "btn-outline-primary"
        },
      ]
    },
  ],


  salesforce: [
    // Appointment Scheduler App
    {
      title: "Appointment Scheduler App",
      date: "October 2024",
      dateValue: "2024-10-01",
      description: "Developed an Appointment Scheduler App for Salesforce, integrating with standard Salesforce objects (Accounts, Cases, Events) and a custom 'Request Appointment' object. The project aimed to streamline appointment scheduling by automating event creation, enforcing role-based access, and ensuring time-bound appointment requests. A custom object named 'Request Appointment' was created with specific fields: Request Appointment Number (Auto Number, format RA-000X), Location (Geolocation), Web Meeting Link (URL), Stage (Picklist with values Open, Canceled, and On Hold), Client (Master-Detail relationship with Account), Ticket (Lookup relationship to Case, with a filter to only allow Open Cases), Start Date Time, and End Date Time.",
      "tags": ["Salesforce", "CRM", "Flow Automation", "Custom Objects", "Validation Rules", "Role Hierarchy", "Lightning App Development", "Data Management", "Workflow Automation", "Case Management"],
      "link": "https://github.com/erickgathinji/Appointment-Scheduler.git",
      "links": [
        {
          "label": "Trailblazer Profile",
          "url": "https://www.salesforce.com/trailblazer/erickgathinji",
          "style": "btn-outline-info"
        }
      ]
    },
  ],


  design: [
    // Coworking Space Finder Web Application
    {
      title: "Coworking Space Finder Web Application",
      date: "November 2024",
      dateValue: "2024-11-01",
      description: "Developed a Django-based web platform designed to connect professionals with suitable coworking spaces. The application features a user-friendly interface with location-based search filters to help users find spaces relevant to their needs. It also automates inquiry submissions, sending email notifications for real-time communication between users and space providers, thereby streamlining the booking and information exchange process.",
      tags: ["Django", "Python", "Web Development", "HTML", "CSS", "Location-Based Search", "Email Automation"],
      link: "https://github.com/erickgathinji/jhav_space_finder",
      links: [
        
      ]
    },
  ]
};
