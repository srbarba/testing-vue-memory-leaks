# Checking jest + vue + third party libraries memory leaks 🔥🔥🔥

I'm working in a big Vue project and we discovered that our test were experimenting some memory leaks.

This repo is to try to reproduce and identify memory leaks in our original project.

## Current example

---

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

### Docker executable

We added a `docker.sh` executable to execute different cases in a `node:14.16` image.

It can be extremely slow, but is ok for our test experiment.

## Technologies involved

---

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

## Other examples

---

You can check the rest of branches with different examples

- [example/basic-example-with_ts-jest](https://github.com/srbarba/testing-vue-memory-leaks/tree/example/basic-example-with_ts-jest)
- [example/basic-example-with_vuetify](https://github.com/srbarba/testing-vue-memory-leaks/tree/example/basic-example-with_vuetify)
- [example/vuetify_with_i18n](https://github.com/srbarba/testing-vue-memory-leaks/tree/example/vuetify_with_i18n)
- [example/global_vue_observable_file](https://github.com/srbarba/testing-vue-memory-leaks/tree/example/global_vue_observable_file)
- [example/with_faker](https://github.com/srbarba/testing-vue-memory-leaks/tree/example/with_faker) 🔥🔥🔥
- [example/with_chance](https://github.com/srbarba/testing-vue-memory-leaks/tree/example/with_chance)

> 📝 Remember to execute yarn before tests to update dependencies!

### Pending examples

- Vuex mock example
- Luxon example

## Detected memory leaks

---

By the moment, we detected memory leaks in:

### [example/with_faker](https://github.com/srbarba/testing-vue-memory-leaks/tree/example/with_faker)

Due to [`faker`](https://github.com/Marak/faker.js) library.

We did not already checked full [`chance`](https://github.com/chancejs/chancejs) library, but it can be an alternative to `faker`. You can check: [example/with_chance](https://github.com/srbarba/testing-vue-memory-leaks/tree/example/with_chance).
