
# Tech Interview Checklist and Approachement

## 1. WebUI
+ [x] Sign in - ✅ WITH AUTH0
+ [x] Sign up - ✅ WITH AUTH0
+ [x] Upload a keyword file - ✅ DONE WITH PAPAPARSE
+ [x] View list of keywords - ✅ REACT-TABLE
+ [x] View the search result information for each keyword - ✅ SHOW WITH REACT-TABLE, htmlCode were embedded into a jsonblob link via their APIs
+ [x] Search across all reports - ✅ DATABASE ACTION WITH `pg`

## 2. API
Leveraged the NextJS api routes mostly and serverless with lambda

+ For uploading - POST /api/search - integrated with Lambda behind the scence
+ Lambda Logic Repository: https://github.com/php1301/lambda-google
+ For the sake of quick developement - leveraged the `serverless` framework with free tier AWS account
+ Searching in Database - POST /api/user-search

## 3. Technical Requirements

+ ✅ Use a web framework of your choice - NextJS
+ ✅ Use PostgreSQL.
+ ✅ For the interface, front-end frameworks such as Bootstrap, Tailwind or Foundation can be used. Use SASS as the CSS preprocessor - Used Tailwind
+ ✅ Extra points are provided to the neatness and user-friendliness of the frontend.
+ ✅ Use Git during the development process. Push to a public repository on Github or Gitlab.  Make regular commits and merge code using pull requests - Integrated linter, unit testing with Github Actions
+ ✅ Write tests using your framework of choice.
+ Optional: deploy the application to a cloud provider e.g. Heroku, AWS, Google Cloud or Digital Ocean -> Working on this or cut this off due to free tier eligible

## 4. Approachment
+ Overview of ER Diagram for database: ![image](https://user-images.githubusercontent.com/40063990/201313968-adf2b78c-02bc-4fc7-b66a-2e47927e0e61.png)
+ ⛔⛔ The 429 Too Many Requests - it's all about tricking Google to not blocking our request
+ Request factor: Can come from UserAgent, Remote address, IP, Header, Cookies, Fingerprint, Headless Browser, Request random delay...
+ Most viable and easiest approachments are all about rotating those above: mostly are **UserAgent** and **IP address with Paid Proxy (Costly) or setup our own Proxy server(tor) SOCKS** -> this would lead to the optional requirment - deploying on Cloud Provider
+ => **Cost Optimization, Fast**, Headless like Puppeteer is not optimized, Premium proxy maybe is too overkill for this technical assignment
+ => ✅✅✅ Lambda Free Tier Approachment is suitable for this workload -> over freetier can consider about EventBridge for CronJob Daily scraping and Thanks To AWS generous IP pool
+ => Rotating Lambda IP -> **Best trick here, we update lambda configuration like Environment** ![image](https://user-images.githubusercontent.com/40063990/201315284-0407defc-8612-445f-aa79-a9e4043fe472.png)
+ => **not guaranteed** 100% percent all the time (approx 80-90% of not having 429) -> implement the Axios-Retry with the trick above for new IP ![image](https://user-images.githubusercontent.com/40063990/201315657-66714c72-37bb-4fa3-a401-1806db4773a3.png)
+ => Stil Not guranteed -> Redeploy the lambda via aws-sdk script -> Tried and worked

## 5. Screenshot
+ Homepage
![image](https://user-images.githubusercontent.com/40063990/201316372-ca3d1f36-934a-43c8-94b3-7bb301801e92.png)
+ When uploaded keyword
![image](https://user-images.githubusercontent.com/40063990/201316234-0b9835dc-bf93-4b59-a302-545f2f465797.png)
+ 94 keywords scraped
![image](https://user-images.githubusercontent.com/40063990/201315839-21e055c5-323b-47c7-9ac1-9fcca5e449f2.png)
+ Request's time
![image](https://user-images.githubusercontent.com/40063990/201316045-d065fdd0-62a1-48c1-8800-56c851014528.png)
+ Database
![image](https://user-images.githubusercontent.com/40063990/201320319-d2447540-1a91-435f-a208-05e5b2b146fc.png)
+ Searching keyword
![image](https://user-images.githubusercontent.com/40063990/201316445-3f9d2b72-bfa7-4c52-9722-0f6016270b03.png)

## 6. Limitation
+ Due to the time limit, the source code maybe not on its best practice (Working on It by actively pushing commit)
## 7. Reproduction
+ run `yarn` and add necessary env variables in `.example.env`
+ available routes:
  + homepage: `/`
  + keyword searching in database: '/my-keywords'
  + Upload csv of keywords: '/search'
+ Create Database with SQL script
+ keywords.csv in mocks folder
## Available Scripts

### Running the development server.

```bash
    yarn dev
```

### Building for production.

```bash
    yarn build
```

### Running the production server.

```bash
    yarn start
```


### **TailwindCSS**

A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.

[Go To Documentation](https://tailwindcss.com/docs)


### **SASS/SCSS**

Sass is a stylesheet language that’s compiled to CSS. It allows you to use variables, nested rules, mixins, functions, and more, all with a fully CSS-compatible syntax.

[Go To Documentation](https://sass-lang.com/documentation)


### **Axios**

Promise based HTTP client for the browser and node.js.

[Go To Documentation](https://github.com/axios/axios)


### **Environment Variables**

Use environment variables in your next.js project for server side, client or both.

[Go To Documentation](https://github.com/vercel/next.js/tree/canary/examples/environment-variables)


### **Reverse Proxy**

Proxying some URLs can be useful when you have a separate API backend development server and you want to send API requests on the same domain.

[Go To Documentation](https://webpack.js.org/configuration/dev-server/#devserverproxy)


### **React Query**

Hooks for fetching, caching and updating asynchronous data in React.

[Go To Documentation](https://react-query.tanstack.com/overview)


### **react-use**

A Collection of useful React hooks.

[Go To Documentation](https://github.com/streamich/react-use)


### **Zustand**

A small, fast and scalable bearbones state-management solution using simplified flux principles.

[Go To Documentation](https://github.com/pmndrs/zustand)


### **ESLint**

A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript. Maintain your code quality with ease.

[Go To Documentation](https://eslint.org/docs/user-guide/getting-started)


### **Prettier**

An opinionated code formatter; Supports many languages; Integrates with most editors.

[Go To Documentation](https://prettier.io/docs/en/index.html)


### **lint-staged**

 The concept of lint-staged is to run configured linter (or other) tasks on files that are staged in git.

[Go To Documentation](https://github.com/okonet/lint-staged)


### **Testing Library**

The React Testing Library is a very light-weight solution for testing React components. It provides light utility functions on top of react-dom and react-dom/test-utils.

[Go To Documentation](https://testing-library.com/docs/)


### **Cypress**

Fast, easy and reliable testing for anything that runs in a browser.

[Go To Documentation](https://docs.cypress.io/guides/overview/why-cypress.html)


### **Docker**

Docker simplifies and accelerates your workflow, while giving developers the freedom to innovate with their choice of tools, application stacks, and deployment environments for each project.

[Go To Documentation](https://www.docker.com/get-started)


### **Github Actions**

GitHub Actions makes it easy to automate all your software workflows, now with world-class CI/CD. Build, test, and deploy your code right from GitHub.

[Go To Documentation](https://docs.github.com/en/actions)



## License

MIT
