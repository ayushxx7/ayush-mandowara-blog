---
title: Self Review 2021 @BlueStacks
description: I put in effort to submit this self review, so I thought might as well host it on the internet. What can go wrong?
date: "2021-11-17"
image: "thoughts.jpg"
author: "Ayush"
tags: ["general"]
---

# Qualities
### Technical / Domain Competence
- Built/maintained full-stack apps, testing frameworks, scripts, and APIs. 
- Improved upon my tooling everyday (Vim, Git, Shell scripting etc.). 
- In depth knowledge of Py/JS/Flask/PyTest/APIs/frontend etc. 
- Followed best practices. 
- Quickly grasped BDT frameworks and learnt the flutter/dart ecosystem.

### Productivity and Quality – Getting things done and with good quality.
- Very stronghold in the planning/requirement gathering phase which involves networking w/ different teams, gaining insight, and understanding any problem statement in depth. 
- mentored my peers to improve overall quality of work (good PRs, avoiding code smells, test-before-deployment practice)


### Teamwork
- solved teammates' problems via systematically debugging them. 
- automated mundane/repeated tasks (batch/py scripts) and shared my customizations/technqiues/thoughts w/ team. 
- Provided mentorship to my peers so that they can also contribute to projects I owned. 
- shared workload whenever required.

### Initiative

- Devoted countless hours in R&D while keeping up with deadlines. 
- Took up challenging tasks & solved problems that required enormous amounts of concentration. 
- Created a knowledge sharing platform (Know your Automation) under Aditya's guidance. 
- Worked toward getting better tools for the team. 

### Innovation

- deployed projects that were previously thought to be impossible (or very hard) to implement. 
- improved existing workflows by taking a deeper look at the legacy codebase. 
- Shared multiple Insightful suggestions that ultimately get integrated in the system. 
- created frameworks/tools from scratch.

### Communication

- Extremely efficient in communicating intent both via written (email/commit messages/PRs) and spoken mediums. 
- I always listened to my colleagues carefully, understanding their requirements or suggestions, thereby consistently choosing the best way forward. 
- Prepared detailed docs for various projects.

### Flexibility

- Worked on several projects that involved a wide range of tech stacks (frontend/backend/databases/languages/frameworks) as well interacting with various members of different teams. 
- Altered my daily schedule as per the requirements and deadlines of ongoing projects whenever required.


# Synopsis

In the past year, I have learned a lot of new things along with honing my existing skillset. Notably, I have polished many soft skills via the different channels that our day-to-day work provides. I have been in the BlueStacks family for quite some time now, and there's still something new I learn everyday, for which I am forever grateful.

I would like to briefly touch upon some of the projects that I worked on last year.

1. Robusta Suite
- I worked extensively on building the Robusta Suite which is the backbone of most (if not all) of the Automation Testing that is performed on the BlueStacks 5 App Player. 
- I ensured that the framework was extensible and all the different types of suites (ex: Regression, Sanity, API, MIM, Device ID) could be encapsulated in the main base project. Code cleanliness and redundancy reduction were prioritized.
- Nifty integrations such as Video Recordings, and in-depth runtime Logs became the primary source of debugging the suite related issues thereby drastically reducing the confusion and greatly improving the confidence in the suite. 
- Integrating Git from the ground up helped us in quickly deploying changing across all systems.
- A pipeline was created that would help us in triggering suites by preparing a test plan. This leveraged the existing Queue mechanism and gave us API that would abstract away the details of they underlying system as far as triggering a test suite was concerned.
- Worked on a POC that would help us in dragging and dropping files from File Explorer into BlueStacks. This helped in testing the file manager, installing apps and importing files into BlueStacks.
- A process was created such that any new changes would first be part of a feature branch, tested on a couple machines when the machine was free and eventually merged to the main branch to avoid introducing any breaking changes in the suite.
- Helped in preparing, maintaining and reviewing the documents for the project.

2. Support Automation
- Prepared the Zendesk Internal Notes script/tool for BlueStacks 5 from scratch. Kept the extensibility requirement in mind. It was a performant, readable, adaptable and had a good documentation. The same codebase was eventually used as-is for Jira, Data Dumping as well BlueStacks X. In the process, I learned some very neat things about good software design. Eventually everything was tied up with Jenkins to give a straightforward UI for the support team.
- Worked closely with Support and Cloud team to deliver BlueStacks 5 Chat along with supporting BlueStacks 4 Chat. Since BlueStacks 5 did not have help center integrated nor did it come with HTML Home Page, this proved to be a rather interesting problem to solve where I learned about how we can cleverly use the URL Parameters to add desired behavior to the landing page (in our case Zendesk Help Center) while also hiding them from the end user as it might contain sensitive information such as Email which is required to identify if a user is Premium or not.
- Helped in migrating them from Copenhagen to Mink Theme
- Mentored Meharpreet and Vineet for a couple of months so that they can eventually own the project. In the process, provided guidance for various tasks, helped in creating a streamlined process, gaved detailed PR Reviews to ensure high quality of work and made sure that documents were prepared for all of the projects.

3. game.tv Automation
- For the past 2 months, I have been working on the game.tv Automation Suite which comes with it's own set of unique challenges. 
- Coming from a Python/Vim based background, learning about the Flutter/Dart/Android Studio ecosystem was a nice change of pace.
- I worked on figuring out why the game.tv app kept on crashing whenever launching Coga videos. 
   - This helped me familiarize myself with the app building process extensively. 
   - Different ABIs and emulators (including BlueStacks) were tested. 
   - An entrypoint was eventually added in the build system to enable/disable Coga videos. 
   - Eventually we confirmed that the Mac M1 chip can help resolve the crash issue because it natively supports Arm apps.
   - From the R&D done here, a "No Build" config was born, which meant that we could relaunch the last built app in a couple of seconds (as opposed to several minutes)
- Interactive Debugging: 
   - Problem
      - I solved a huge pain point in the suite development process. 
      - The initial boot up time for testing any changes or scenarios in the testing framework is quite large if we launch the tests "normally". 
      - Any change done would mean that the engineer would have to wait anywhere from 5 to 10 minutes to verify if it working as expected. 
      - Moreover, the app built does not debug mode so we can't provide input via typing (which is especially painful when logging in via phone), and can't inspect the app elements
   - Solution
      - With the help of interactive debugging, 
      - we don't have to wait for the app to boot up, we can connect to a running instance 
      - we have full flutter inspector and devtools support
      - changes done are reflected via hot reload / hot restart
      - This means, the testing that would take at-least 10 minutes in a normal run, can be done in a few seconds. If something doesn't seem right, we can change it on the spot and re-test it without thinking twice! 
      - Moreover, we get the full Android Studio debugger support along with the above benefits. 
   - Interactive Debugging config was created along with modifications to the test runner file for quickly switching between normal test run and interactive debugging mode
- I learned about the BDT Framework, the flutter-gherkin integration which powers our automation suite and various things to be kept in mind when running the suite.
- I refactored the Automation Setup document that we refer to when setting up suite for the first time on a new machine.
- Contributed to game.tv 2.0 Automation Suite related changes
- Created a tool to remove all dynamic clubs (generated via Automation Suite) in one go from UAT or Prod environments.

Apart from my contribution as an individual on my work assignments, I also worked on the following things:

- Mentorship
   - Mentored Meharpreet for 6+ Months. Gave her detailed feedback and guidance so that her skills can be properly utilized.
   - Mentored Prableen for ~3 Months so that she can contribute in the Robusta Automation Suite.
   - Handed over Support Automation responsibilities to Meharpreet and Vineet.

- Know Your Automation
   - Under the guidance of Aditya, I helped in creating a platform where different members of the team can share their knowledge about various personal or office related projects that they have worked upon.
   - It improves presentation skills which is an important soft skill for anyone to have
   - It keeps everyone informed about latest technologies both in-house and otherwise that ours peers are working on
   - It helps in building confidence in an individual's ability to effectively share knowledge with others
   - I myself gave 6 sessions on Vim and Git
   - I help in planning and coordination for future sessions

- Process
   - Helped in creating a proper process for Support related tasks
      - request raised by support -> changes deployed on sandbox -> confirmation from support team -> deployed on prod -> confirmation from support team
   - Helped in creating a PR culture for any changes that are to be deployed on master
   - Helped in creating a rigid commit guideline after referring to various sources
   - Ensured that documents were being created/updated for all the projects that we were working on by reviewing them from time to time
   - Took the initiative to get the appropriate TeamViewer license for the automation team
   - Took the initiative to get new machines into the office by figuring out various bottlenecks faced by the team

Broadly, the technologies that I learned/improved upon this year at work:
- Python: PyTest, Django, OpenCV, numpy, Image Automation
- Git: Resolving tricky merge conflicts and other issues. Usage of stashing, rebasing, reverting etc.
- Dart: Syntax, Future, Asynchronous Programming
- Flutter: Inspector, DevTools, flags for bulding apps
- Android Studio: Navigating files, Jumping to definitions, Building Apps
- Shell Scripting and Vim: customizations for improved workflow

Lastly, I would like to thank, 
Aditya: For all the learning opportunity that he provided along with giving me more responsibilities and control over different projects. He always listened to my problems and promptly gave suggestions/support/ideas as per the situation.
Nilanshu: For always believing in me and providing me with the opportunity to work for the game.tv project. His support means a lot to me.
Kunal: Under his guidance, I am able to navigate the complexities of the app testing domain. His experience really helps me see things clearly whenver I feel stuck.
Dinesh: For being supportive and understanding of the problems that we face while developing the automation suite. Moreover, he gives us new challenges to tackle at our own pace.
Shailesh, Faraz and Surya: For teaching me so many new things. It would have been impossible to learn so much this quickly without these people.
