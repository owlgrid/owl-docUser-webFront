---
sidebar_position: 2
---

# The philosophy

Before jumping into the technical details, please take a moment to understand why OwlGrid works this way and how we think a backend must work.

## Focus on the application, not on the technique

OwlGrid has been built to build scalable applications fast. We have thought about what is the core of a backend (speaking on a functional way) and we have built a platform that is easy to use and that is powerful.

### Workflows and resources

From a functional perspective, a backend is only workflows doing actions on resources. So we have built a platform which have a workflow manager at the core, and a set of resources (database, etc.).

### Templates

Most of the time, you don't want to build everything from scratch. You want to use existing components and to build your application with them. That's why we have built a template system. You can find more information about templates in the [templates section](/docs/general/templates/introduction).

### Transparency

OwlGrid is a way to develop and administrate faster, but not in a *black box* way. We want developers to be able to understand what is happening in their platform and to be able to modify it if they want to.

### Networking

We choosed that the user doesn't have to manage the network, it is managed by the platform. This is choice allow the user to focus on the application and not on the complexity of the network, while having a very robust and scalable "delegated" network configuration.

### API Management

As the workflows are the core of the platform, we decided to not use an API management tool. The API is generated automatically from the workflows, and the user can use the API to trigger the workflows. This simplifies the platform and allows the user to focus on the application.

## Open source

We have built OwlGrid to be open source. We believe that open source is the best way to build a community and to build a platform that is easy to use and that is powerful.

## OwlGrid is not an AWS, GCP and Azure substitue

OwlGrid relies on cloud platforms to run. As it features are focused on application development, it is not a cloud platform substitue. It is a platform that allows you to build applications faster on top of cloud platforms.