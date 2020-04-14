# Ramsey GIFifier

**Forked from**: [Action Cats](https://github.com/ruairidhwm/action-cats)

This is a simple Github Action which comments on your PRs with a Ramsey gif as a reward for pushing some code.

This is just a novelty action, but feel free to use it. If you'd like to contribute then just open a PR.

## Usage

```yaml
- name: Ramsey GIFifier
  uses: ethan-dowler/ramsey-gififier@master
  with:
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

## Deployment

1. Run - `yarn all`
1. Make a PR with `/dist` changes
1. Make a Release with the new version (make sure to check "Publish this Action to the GitHub Marketplace")
