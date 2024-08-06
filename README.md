# kdico-vscode-ts-boilerplate

TypeScript template repository for Visual Studio Code, Dev Containers, Jest, and SonarLint.

## Usage

1. Optionally delete the `sample/` folder.
2. Open the project in a [Dev Container](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) which will use the resulting container from `Dockerfile` as the development environment.
3. Code away.

## What's included?

### VS Code Extensions

When using VS Code, this template will recommend the [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension.

If installed, the [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension will install other verified extensions listed below and will remain installed while using the development environment container. Otherwise, these must be manually installed locally.

- [Docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker) to manage development environment containers.
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) for linting support.
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) for formatting support.
- [SonarLint](https://marketplace.visualstudio.com/items?itemName=SonarSource.sonarlint-vscode) for static code analysis.
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) for other workspace settings.

### SonarLint

SonarLint is included in this template for static code analysis. It will highlight areas that violate rules while writing code. For this template, the following rules apply.

- [JavaScript](https://rules.sonarsource.com/javascript/)
- [TypeScript](https://rules.sonarsource.com/typescript/)
- [Docker](https://rules.sonarsource.com/docker/)

`Dockerfile` installs the requirements for the [SonarLint](https://marketplace.visualstudio.com/items?itemName=SonarSource.sonarlint-vscode) extension. See https://docs.sonarsource.com/sonarlint/vs-code/getting-started/requirements/ for language-specific requirements.

### ESLint & Style Guide

This template follows the Google TypeScript Style using [gts](https://github.com/google/gts#readme) which is configured to use ESLint and Prettier.

### Debug Logs

A minimal debug logging mechanism using [debug](https://www.npmjs.com/package/debug) is included in this template. To enable debug logging for this template, set the `DEBUG` environment variable value to `app` which is defined in `src/util/debug/logger.ts`. Try running `sample/sample.ts` with debug enabled like below.

```bash
# bash
DEBUG=app npx ts-node ./sample/sample.ts
```

### NPM Scripts

- `prepare`
  - Installs `husky` for pre-commit hooks.
  - On commit, runs `check`, `lint`, and `test`.
- `test`
  - Runs the unit tests.
- `lint`
  - Checks for lint issues.
- `clear`
  - Deletes the `build/` folder.
- `fix`
  - Fixes lint issues where it can.
- `compile`
  - Compiles the project.
  - Creates the `build/` folder.
- `check`
  - Checks for type errors.
