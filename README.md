# Super Castle

> An open mind is like a fortress with its gates unbarred and unguarded.

This is a game about building a castle. Magnificent and sempiternal, the fortress of the mind will rise — and it begins with a single block.

Set in the 13th century, *Super Castle* immerses you in a captivating medieval fantasy world of some description.

## How to play

- Arrow keys or WASD (and R to restart the level)
- Tap on the screen
- Gamepad left analog stick (and B to restart the level)

The icons are: toggle audio, restart the level, and level select.

For best experience on Android, use the 'Add to Home screen' feature. Seriously, it's amazing how much better the game runs if started from that shortcut.

Thank you for playing!

## Disclaimer

The author of this work does not condone the repackaging of "Super Castle" as any kind of NFT or blockchain-related product. The use of this work for such purposes is not supported by the author and may result in unintended consequences. Consider yourself disclaimed.

## Acknowledgements

- [Solar Icons][sol] by 480 Design, licensed under CC BY 4.0

[play]: https://js13kgames.com/games/super-castle-game/index.html
[lvl]: https://github.com/mvasilkov/super2023/tree/master/levels
[nat]: https://github.com/mvasilkov/natlib
[rei]: https://github.com/mvasilkov
[gpl]: https://github.com/mvasilkov/super2023/blob/master/LICENSE
[sol]: https://www.figma.com/community/file/1166831539721848736

## Contributing

### Installing Dependencies

After cloning this repo, install dependecies:

```
pnpm i
```

### Code format

```
pnpm check
```

### Testing the app in the browser

To test your work in your browser (with hot reloading!) while developing:

```
pnpm dev
# Alternatively to test in a more advanced WebXDC emulator:
pnpm start
```

### Building

To package the WebXDC file:

```
pnpm build
```

To package the WebXDC with developer tools inside to debug in Delta Chat, set the `NODE_ENV`
environment variable to "debug":

```
NODE_ENV=debug pnpm build
```

The resulting optimized `.xdc` file is saved in `dist-xdc/` folder.

### Releasing

To automatically build and create a new GitHub release with the `.xdc` file:

```
git tag v1.0.1
git push origin v1.0.1
```
