# 🔈 GDSC University of Portsmouth Feedback Board
[![Code Style: Google](https://img.shields.io/badge/code%20style-google-blueviolet.svg)](https://github.com/google/gts)

An application to capture feedback from attendees, using a serverless pattern - static Next.js frontend, Firebase Functions API and Firestore Database.

This application uses a monorepo:
- [Web frontend](./packages/web)
- [FaaS API](./packages/api)

## ✨ Features

- Provide feedback on the session via the Web frontend

## 📄 Scripts

Run any of the following scripts using `yarn`:

```
yarn <script>
```

| Script     | Description                                                                  |
|------------|------------------------------------------------------------------------------|
| bootstrap  | Install all dependencies, and use Lerna to symlink across the monorepo       |
| pkg:api    | Run a given script in the `api` package. Example usage: `yarn pkg:api build` |
| pkg:web    | Run a given script in the `web` package. Example usage: `yarn pkg:web test`  |
| lint       | Run the `lint` command in every package                                      |

## 🏁 Getting Started

To start development, run the `bootstrap` command:

```
yarn bootstrap
```

### 🙋‍♂️ Don't have Yarn?

Install it using npm.

```
npm install --global yarn
```

