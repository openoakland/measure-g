# measure-g
A site to visualize data around the expenditure of Oakland Measure G funds

The ```measure-g``` project (now cleverly called TrackG) is hosted here: http://trackg.org

---
## Set Up Development Environment

### Install Node / npm

-  [Node](http://nodejs.org/download/)
-  [npm](https://docs.npmjs.com/getting-started/installing-node)

Note: Node comes with npm which is a package manager for Node. You can use the instructions above to update to the latest version and verify that it's installed.


### Install & Run Harp

TrackG is using a minimal server framework called [Harp](http://harpjs.com/) for EJS templating and sass stylesheets. Currently, trackg.org is just compiled static HTML and not a Harp server. But that may change and Harp simplifies the development process.

```
npm install harp -g
```
To start the Harp server, git clone this directory and then run:
```
harp server
```
Now you can hit the server at ```localhost:9000``` (by default). Any changes you make in source will automatically compile on refresh.

## Deployment
Since we are using GitHub pages for hosting, pushing up changes is a little tricky. Shell scripts are currently being used to make the process easier for you.

### Setup

If it's the first time you are deploying to your machine, get write access to the [measure-g-staging](https://github.com/openoakland/measure-g-staging) repository.

Then run:
```
bash ./deploy_setup.sh
```
See the script for comments on what goes on in that script.

### Staging
Once you have that setup process complete, you can run:
```
bash ./deploy_staging.sh
```
to see your changes hosted at http://openoakland.github.io/measure-g-staging
