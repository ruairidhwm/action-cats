<p align="center">
  <img alt="Cat Gif" src="https://i.imgur.com/9z4r02l.png">
</p>

# Action Cats test 

- _Featured by [GitHub](https://github.blog/2020-04-09-featured-actions-from-the-github-actions-hackathon/)_

This is a simple Github Action which comments on your PRs with a cat gif as a reward for pushing some code.

This is just a novelty action, but feel free to use it. If you'd like to contribute then just open a PR.

## Usage

```yaml          
name: Cats 😺

on:
  pull_request_target:
    types:
      - opened
      - reopened

jobs:
  aCatForCreatingThePullRequest:
    name: A cat for your effort!
    runs-on: ubuntu-latest
    steps:
      - uses: ruairidhwm/action-cats@1.0.1
        with:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
