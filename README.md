# Webpack Boilerplates

Different Webpack Boilerplates for various configurations. 🤖

Recently, I've been dwelving deeper into Webpack and it never ceases to fascinate me. 
It's amazing how much you can make this package do just by changing configurations.
So here, I've writted various webpack configurations as I learnt them.


## Configurations
### ES6+
`es6/webpack.config.js` contains loaders to transpile ES6+ javascript to ES5 compatible Javascript using the `babel-preset-env`.
Also contains loaders to load images and CSS (modules).

### Typescript
`typescript/webpack.config.js` contains loaders to transpile Typescript to ES5 using the `ts-loader`.
Also contains loaders to load images and CSS (modules).

### Caching
`caching/webpack.config.js` contains configuration for optimization using caching. Does runtime chucnking 
