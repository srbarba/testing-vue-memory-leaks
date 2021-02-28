# Checking jest + vue + third party libraries memory leaks 🔥🔥🔥

I'm working in a big Vue project and we discovered that our test were experimenting some memory leaks.

This repo is to try to reproduce and identify memory leaks in our original project.

## Current example

In this branch we created a basic example to test `@testing-library/vue` and `@vue/test-utils` with `vue`, `typescript` and `vuetify` + a simple mock of i18n.

[Vuetify requires be applyed globally](https://vuetifyjs.com/en/getting-started/unit-testing/#bootstrapping-vuetify), to Vue global object, so we tested adding the plugin in each render/mount execution and in a jest setup file.

In this branch we have one more jest project, `with-setup`, where we apply `vuetify` plugin to `Vue` and global i18n mock for `@vue/test-utils`.

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

### Docker executable

We added a `docker.sh` executable to execute different cases in a `node:14.16` image.

It can be extremely slow, but is ok for our test experiment.

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

- [example/basic-example-with_ts-jest](https://github.com/srbarba/testing-vue-memory-leaks/tree/example/basic-example-with_ts-jest)
- [example/basic-example-with_vuetify](https://github.com/srbarba/testing-vue-memory-leaks/tree/example/basic-example-with_vuetify)
- [example/vuetify_with_i18n](https://github.com/srbarba/testing-vue-memory-leaks/tree/example/vuetify_with_i18n)
- [example/global_vue_observable_file](https://github.com/srbarba/testing-vue-memory-leaks/tree/example/global_vue_observable_file)
- [example/with_faker](https://github.com/srbarba/testing-vue-memory-leaks/tree/example/with_faker) 🔥🔥🔥
- [example/with_chance](https://github.com/srbarba/testing-vue-memory-leaks/tree/example/with_chance)

> 📝 Remember to execute yarn before tests to update dependencies!
