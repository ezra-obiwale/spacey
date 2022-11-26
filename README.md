# SpaceY

> This is only the StateMachine implementation

## Prerequisites

You need to have [Docker](https://docs.docker.com/get-docker/) installed with the [Compose](https://docs.docker.com/compose/install/) plugin.

## Setup

> After cloning and entering the project directory, run the following commands:

```bash
docker compose build
docker compose up -d
docker compose exec app yarn
```

## Run tests

```bash
docker compose exec app yarn test
```