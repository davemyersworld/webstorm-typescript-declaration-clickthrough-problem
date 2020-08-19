# Typescript implemenations cannot be clicked through to in Webstorm

## Repro Steps
1. Open this project in Webstorm
2. Run `npm install` in the `webstorm-typescript-declaration-problem`
3. Attempt to click through to the `webstorm-typescript-declaration-dependency` import on `webstorm-typescript-declaration-problem/index.js`

### Expected
See code on `webstorm-typescript-declaration-dependency/index.ts`

### Actual
See declation on `webstorm-typescript-declaration-dependency/index.d.ts`

## Additional Resources
See this [video demonstrating the problem](https://youtu.be/tPSEnuqc0xI)