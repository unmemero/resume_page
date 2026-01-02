# Resume page 
This resume page is intended for any person who wishes to use it to display their portfolio in a modern. yet technical fashion.

## Use
All updates just need to be done through the md files in the [content folder](./src/content/). Here are the details on how to fill out the forms for each page:

### Skills
Modify [skills.md](./src/content/skills/skills.md).

It is structured in the following way:
```markdown
# [CATEGORY] Type of skill
- Skill 1: n years
- ...
- *Skill n: n months
```

Here, any skill marked by `*` is a skill that will be highlighted by the page.

### Work experience
Modify [experience.md](./src/content/experience/experience.md). Follow the template below to modify it:

For the base information modify this header section
```markdown
---
jobs:
  - id: "cs-rep-1"
    title: "Customer Service Representative"
    company: "Some Company"
    range: "June 2010 - August 2012, November 2013 - September 2015"
    startDate: "2010-06-01"
    current:false
  - id: ... rest of jobs
    ...
---
```

For the job description for each do the following section:
```markdown
# cs-rep-1
- Did ... (long job bullet point 1)
- Assisted in (long bullet point 2)
```

### Education
