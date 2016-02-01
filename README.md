
# nci

Flexible, open source continuous integration server written in node.js

[![Build Status](https://travis-ci.org/node-ci/nci.svg?branch=master)](https://travis-ci.org/node-ci/nci)


## Features

* modular approach, small core a lot of plugins (e.g. rest api, web interface - 
plugins, not core)
* minimalistic system requirements (only node and scm clients are required, no
external db)
* pluginnable db storage (any [levelup](https://github.com/Level/levelup)
backend could be used)
* using on-the-fly snappy compression for all stored data (builds, build logs)
when leveldb (via leveldown backend) is used
* working with any mercurial, git repositories (no matter is it service like
github, bitbucket or private server, all you need is authenticate user from
which nci server is running without password e.g. by ssh key)
* damn fast single page web application interface
([classic ui plugin](https://github.com/node-ci/nci-classic-ui))
* server and projects could be configured with yaml
([yaml reader plugin](https://github.com/node-ci/nci-yaml-reader)) - provides
pretty shell scripting (strings without quotes, nice multiline strings, etc)
* provides agile project relations out of the box (see `blocks`, `blockedBy`,
`trigger` at [sample project config](./docs/sample-project-config.yaml))
* could catch every or specific commits (see `catchRev` at
[sample project config](./docs/sample-project-config.yaml))


Online demo is [here](http://classicui-ncidemo.rhcloud.com/).


Basic tutorial [here](./docs/tutorials/standalone-web-ui.md).


## System requirements

* unix-like operating system (tested mostly on Ubuntu 14.04, CentOS 6.6)
* node.js >= 0.10
* git client (tested with 1.9.1) (only when git projects are used)
* mercurial client (tested with 2.8.2) (only when mercurial
projects are used)


## Resources

* [basic tutorial](./docs/tutorials/standalone-web-ui.md)
* [online demo](http://classicui-ncidemo.rhcloud.com/)
* [sample project config](./docs/sample-project-config.yaml)
* [developing plugins doc](./docs/developing-plugins)


## Roadmap

* preserve output colors when spawn commands
* expose node/executors api, implement plugin for remote and isolated build
running (docker or similar). Only local executor currently available.
* extend web interface functionality
* allow store project config inside repository of this project


## Plugins

* [yaml reader plugin](https://github.com/node-ci/nci-yaml-reader)
* [classic ui plugin](https://github.com/node-ci/nci-classic-ui)
* [static server plugin](https://github.com/node-ci/nci-static-server)
* [mail notification plugin](https://github.com/node-ci/nci-mail-notification)
* [jabber notification plugin](https://github.com/node-ci/nci-jabber-notification)
* [projects reloader plugin](https://github.com/node-ci/nci-projects-reloader)
* [rest api server plugin](https://github.com/node-ci/nci-rest-api-server)
* [scheduler plugin](https://github.com/node-ci/nci-scheduler)
