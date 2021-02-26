# Checking jest + vue + third party libraries memory leaks 🔥🔥🔥

I'm working in a big Vue project and we discovered that our test were experimenting some memory leaks.

This repo is to try to reproduce and identify memory leaks in our original project.

## Current example

In this branch we created a basic example to test `@testing-library/vue` and `@vue/test-utils` with `vue`, `typescript` and `vuetify`.

[Vuetify requires be applyed globally](https://vuetifyjs.com/en/getting-started/unit-testing/#bootstrapping-vuetify), to Vue global object, so we tested adding the plugin in each render/mount execution and in a jest setup file.

In this branch we have one more jest project, `with-setup`, where we apply `vuetify` plugin to `Vue`.

You can execute the scripts in `package.json` to check there are no memory leaks.

You can execute separated scripts like:

```
## @vue/test-utils
yarn tu:leaks

## @testing-library/vue
yarn tl:leaks

## with jest.setup.js
yarn ws:leaks
```

Or you can execute all together with:

```
## @vue/test-utils + @testing-library/vue
yarn test:leaks
```

## 🤔 Did you get memory leak in ComponentTs? 🔥🔥🔥

We found that `test/testing-library/ComponentTs.spec.js` fails in memory leak error in arbitrary way.

It was happening about 1 of 30 to 100 executions. It was impossible to determine a realistic way to analyze it.

We will try in other environments to check if it happens more consistently.

## Technologies involved

In production code we have:

- typescript
- vue
- vuetify

For testing we use:

- jest
- babel-jest
- babel-core (required by vue-jest)
- @babel/preset-typescript
- vue-jest
- @vue/test-utils
- @testing-library/vue
- weak-napi (to make jest cli option `--detectLeaks` works)

## Other examples

You can check the rest of branches with different examples

- example/basic-example-with_ts-jest
- example/basic-example-with_vuetify (possible not confirmed memory-leak) 🔥

> 📝 Remember to execute yarn before tests to update dependencies!
