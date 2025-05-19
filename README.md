# p5js_bun

This is a blank [p5.js](https://p5js.org/) project/dev environment that allows you to:

- run on a Bun server
- use p5.js in instance mode
- write code with type annotations



## What you need to start
- The latest version of [Bun](https://bun.sh)  
(This package was created using Bun `v1.2.12`.)
- A text editor
- A web browser

> **Note:** This package uses p5.js `v1.1.15` because type errors occur with v2.0.x (as of May 2025).


## Usage
To install dependencies:

```sh
bun i
```

To run dev server:

```sh
bun run dev

# is equivalent to
bun run src/index.ts
```


## Renaming Repository
If you want to rename this repository and create a new one while keeping the code history, follow these steps:

1. Remove the existing remote:
```sh
git remote remove origin
```

2. Create a new repository using GitHub CLI:
```sh
gh repo create new-repo-name --public --source=. --remote=origin
```

3. Push to the new repository:
```sh
git push --set-upstream origin main
```

> **Note:** If you don't have GitHub CLI installed, you can create a repository manually on GitHub and set the remote using:
> ```sh
> git remote add origin https://github.com/username/new-repo-name.git
> git push --set-upstream origin main
> ```


