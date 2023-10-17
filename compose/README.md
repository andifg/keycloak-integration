# Keycloak Docker Compose Setup

Configuration example for Keycloak using Docker Compose:

* docker-compose.yml
	* main compose definition file
* keycloak.conf
    * configuration file for Keycloak

## How-To

1. Create Virtual Machine
    * add ssh-keys for login
    * disable _root_ login & _default_ user
    * enable ssh & web / https security groups
1b. Add DNS alias
2. Install Docker w/ docker-compose
    * follow [Official Docker Documentation](https://docs.docker.com/engine/install/ubuntu/#set-up-the-repository)
    * compose plugin:
```
 sudo apt-get update
 sudo apt-get install docker-compose-plugin
```
3. Clone Repository
    * `git clone https://gitlab.desy.de/johannes.reppin/keycloak-docker-compose.git`
4. Change into dir
    * `cd keycloak-docker-compose`
5. adjust environment
    * `VIRTUAL_HOST`
    * `LETSENCRYPT_HOST`
    * `KEYCLOAK_ADMIN`
    * `KEYCLOAK_ADMIN_PASSWORD`

6. start docker-compose
    `docker compose up -d`
7. visit Keycloak Website
    * https://vm-hostname.domain.com

## Containers

* Keycloak
    version 21
* Nginx Proxy
* Proxy Companion
* Postgres Database


Export:

In container

```bash
/opt/keycloak/bin/kc.sh export --file /tmp/coffee-app-realm.json --realm Coffee-App
```
