<p align="center">
  <img alt="Cat Gif" src="https://media.giphy.com/media/Maz1hoeGskARW/giphy.gif">
</p>

# Action Cats

This is a simple Github Action which comments on your PRs with a cat gif as a reward for pushing some code.

This is just a novelty action, but feel free to use it. If you'd like to contribute then just open a PR.

## Usage

```yaml
 - name: Action Cats
        uses: ruairidhwm/action-cats@master
        with:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

Something changed!