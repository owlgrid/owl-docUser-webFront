---
sidebar_position: 1
---

# Introduction

SDK are a set of libraries that allow you to interact with OwlGrid services. They are available in different languages and are used to build applications and services.

SDK are technically a container of API interfaces but they leverage the languages features (for example types in Typescript) to provide a better developer experience. We recommand therefore to use SDK instead of API interfaces in applications.

## SDK categories

**Services SDK** are implemented in Typescript and available in NPM following this naming: `@owlgrid-dev/{service-id}-client`: [https://www.npmjs.com/org/owlgrid-dev](https://www.npmjs.com/org/owlgrid-dev).

We plan to add **resources SDK** (user-facing) in the future which will be available in NPM following this naming: `@owlgrid/{service-id}`. We also plan to support more languages.

:::note
Although services SDK are technical, they can therefore be used in applications. For example, you can use the `@owlgrid-dev/owl-access-client` SDK to manage identities across workspaces.
:::

## Languages

SDK are only available in **Typescript** for now. We plan to support more languages in the future.

## Documentation

SDK are documented in the [Resources section](/docs/resources/owl-workspace/introduction). We plan to add a specific documentation for SDK in the future.
