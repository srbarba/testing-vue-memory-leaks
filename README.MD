# Testing jest + vue + third party libraries memory leaks

I'm working in a big Vue project and we discovered that our test were experimenting some memory leaks.

This repo is to try to reproduce and identify memory leaks in our original project.

## Current example

In master branch we created a basic example to test `@testing-library/vue` and `@vue/test-utils` with no more than `vue` and `typescript`.

You can execute the scripts in `package.json` to check that everything works fine and there is no memory leaks with this example.

You can execute separated scripts like:

```
## @vue/test-utils
yarn tu:leaks

## @testing-library/vue
yarn tl:leaks
```

Or you can execute all together with:

```
## @vue/test-utils + @testing-library/vue
yarn test:leaks
```

## Technologies involved

In production code we have:

- typescript
- vue

For testing we use:

- jest
- babel-jest
- babel-core (required by vue-jest)
- @babel/preset-typescript
- vue-jest
- @vue/test-utils
- @testing-library/vue
- weak-napi (to make jest cli option `--detectLeaks` works)
