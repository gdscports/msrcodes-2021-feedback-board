# 🦁 Next.js Boilerplate
[![Code Style: Google](https://img.shields.io/badge/code%20style-google-blueviolet.svg)](https://github.com/google/gts)

A boilerplate for projects using Next.js and TypeScript.

## ✨ Features

- [Next.js 11](https://nextjs.org/), for all your production-ready React SSR (or Static) needs
- [Material UI](https://material-ui.com/), providing a usable React library
- [Google TypeScript Style](https://github.com/google/gts), for consistent, readable code
- [Husky](https://www.npmjs.com/package/husky), for pre-commit linting and build checks
- [Issue Templates](./.github/ISSUE_TEMPLATE/feature-request.md), to get you up and running in Open Source quickly

## 📄 Scripts

Run any of the following scripts using `yarn`:

```
yarn <script>
```

| Script | Description                                                          |
|--------|----------------------------------------------------------------------|
| build  | Build the Next.js application, ready to be ran with `start`          |
| clean  | Remove linter output files                                           |
| dev    | Start the Next.js application in hot-reloading mode, for development |
| fix    | Automatically fix all linting issues in files                        |
| lint   | Check all files, reporting them to the console                       |
| start  | Start the Next.js application in production mode, requires `build`   |

### 🙋‍♂️ Don't have Yarn?

Install it using npm.

```
npm install --global yarn
```

## ⚙️ Environment Variables

**Do not push sensitive keys to GitHub**. You should follow [Next.js' Guide](https://nextjs.org/docs/basic-features/environment-variables) for environment variables.

This includes:

- **.env.local**: Use a `.env.local` file for any sensitive keys. These should not be pushed to GitHub.
- **.env**: Use a `.env` file for any application configuration that can be safely committed to GitHub, such as a `PORT` value.

### 🌐 Exposing Environment Variables to the Browser

By default, Next.js will only load environment variables in the Node.js environment and not load them in the browser.

It may be the case that, in some circumstances, it is necessary to load these values in the browser. To do this, prefix the environment variable with `NEXT_PUBLIC_`:

```env
NEXT_PUBLIC_ANALYTICS_ID=foo
```

### 🔨 Environment variables used in this application

Use this table to store and describe the environment variables used in your application so that others can maintain your application.

| Key             | Description                                    | Required |
|-----------------|------------------------------------------------|----------|
| PORT            | The port that the application runs on.         | No       |
| NEXT_PUBLIC_FOO | An example value.                              | No       |

