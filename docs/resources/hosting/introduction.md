---
sidebar_position: 1
---

# Introduction

Host websites and web applications to the web using Hosting resource.

Hosting allow developers to host multiple websites and web applications and to monitor their usage in a reliable way (get precisely your number of pageviews, loading time across the globe).

OwlGrid allow to deploy new website version without downtime.

## Features / API

Administration:
- List all websites;
- Create a new website (name);
- Configure the website (sub)domain name;
- Generate a SSH certificate;
- Get notified when the SSH certificate is about to expire;
- Link a Git repository to the website (git repository + branch + basepath);
- Deploy a website version (name, version name [optional]);
- Browse website versions history;
- Deactivate a website;
- Activate a website;
- Delete a website;

Monitoring:
- Get the number of pageviews for a website version on a certain period;


## Future features

- Rollback a website version;
- Support Next.js, Gatsby, Vuepress, etc;
- Advanced analytics (cf. Netlify);
- Continuous deployment from Git repository;