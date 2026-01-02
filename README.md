# Resume page 
This resume page is intended for any person who wishes to use it to display their portfolio in a modern. yet technical fashion.

## Initial installation
1. Remove the [`CNAME`](./CNAME) file, or change it to your domain.
2. run `npm install` to install dependencies (**NOTE: you have to use node 22 or higher to run and host this project on your own**).

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
Change [education.md](./src/content/education/education.md) with the following details to change the contents of the education page
```markdown
---
schools:
  - id: "utd"
    school: "University of Texas at Dallas"
    degree: "B.S. in Computer Science"
    period: "August 2020 to December 2024"
    gpa: "3.99"
    majorGpa: "4.0"
  ...rest of schools
---
```

If you have any recognitions or awards, or want to list any relevant coursework, please add them below the `---` in the following manner:
```markdown
# utd
## AWARDS
- Award 1
- Award 2
- ...
## COURSEWORK
- Course 1, course 2,...
```

If you don't have any, just leave it empty.

### Projects
To edit you project details, please modify [projects.md](./src/content/projects/projects.md).Edit the header (everything between `---`) based on this.
```markdown
---
projects:
  - id: "project-1"
    title: "Project Name"
    repo: "username/repo"
    stack: ["Python", "Logisim", "RISC-V"]
    links: { github: "https://github.com/username/repo" }
  - id: ... rest of projects
---
```

To add a description to your project, do it in the following way:
```markdown
# project-1
- Description point 1
- Description point 2
... Rest of description
```
Descriptions can be left empty, but I don't recommend it.

### Contact
For the contact page, there are 3 parts you want to take care of:

#### [`index.ts`](./src/actions/index.ts') for the emailing logic
**NOTE**: I recommend before adding an email provider that you purchase a domain. You can check [this guide](https://www.youtube.com/watch?v=LEzNZ_Jr-pY)
Here add your email API provider. I used [resend](resend.com) for this project due to its monthly allocation.
To modify it, `npm install ` your email provider's `npm package` and obtain their API key.
If you wish to contiue with Resend:
1. Please place in your `.env` at the root of the project `RESEND_API_KEY=your_api_key` or add it to your cloud provider's environment variables.
2. Modify the following snippets with your info:
```javascript
const { error: adminErr } = await resend.emails.send({
  from: 'Contact Page Name <system@your_domain.com>',
  to: 'your email',
  subject: `[SYS_MSG] New message from ${input.name}`,
  html: adminHTML,
});
```

```javascript
const { error: userErr }  = await resend.emails.send({
  from: 'Your Name <contact@your_domain.com>',
  to: input.email,
  subject: 'Confirmation Email',
  html: userHTML,
});
```
#### [contact.md](./src/content/contact/contact.md) for the contact icon links
Modify and add entries in the following matter:
```markdown
---
endpoints:
  - id: "github"
    label: "GitHub"
    value: "my_username"
    href: "https://www.github.com/my_username"
    icon: "Github"
  - ...rest of entries
```

#### [`contact email`](./src/lib/templates/AdminEmail.html) and [`user receipt`](./src/lib/templates/UserReceipt.html) for emailing templates
Modify these HTML files at your liking for the user to receive as confirmation and the admin for the email you want to receive.

## Questions
Please submit as a GitHub issue with the label `help wanted`.