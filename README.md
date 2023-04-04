# flare-pos

A super snazzy full-service POS system, including an admin portal, POS, kiosk, mobile ordering app, and an API connecting them all 😎

## What's inside?

This turborepo uses [pnpm](https://pnpm.io/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `admin`: admin dashboard to manage the menu, track orders, and manage ingredient stock (vite)
- `api`: an express API with Prisma / PostgreSQL
- `app`: Mobile ordering app, responsive on both mobile and desktop (next.js)
- `kiosk`: designed to be a stationary touch-screen checkout kiosk (vite)
- `pos`: POS system to take / view orders (vite)

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm run build
```

## Useful Links

Learn more about the power of Turborepo:

- [Pipelines](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)

# Setup Instructions

## Prerequisites

### Install PNPM

1. Open a new terminal in any directory and execute the following command:

```
npm i -g pnpm nodemon
```

> this will install `pnpm` and `nodemon` globably (-g) to your computer

## One Time Setup

1. Clone the repository from Git using your favorite method

2. Open a new terminal in the project's root directory and execute the following command:

```
pnpm i
```

> this will install all of the required modules for your apps

3. Create a new file in the `apps/api` directory named `.env` with the following content:

```
PORT=5001
```

## Running the project for development

1. Open a new terminal in the project's root directory and execute the following command:

```
pnpm dev
```

> This will run all of the apps and the api in development mode on your local machine.

### Ports

There's a lot of apps running at once when you use `pnpm dev`. Each app has a port set by default:

- `admin`: 3003
- `api`: 5001 (running on 5001 instead of 5000 to avoid conflicts with MacOS)
- `app`: 3000
- `kiosk`: 3002
- `pos`: 3001
