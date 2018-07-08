# clone the repo used for staging on GitHub and move into that dir
git clone git@github.com:openoakland/measure-g-staging.git
cd measure-g-staging

# create an orphan branch with naming required to serve a GitHub project page (gh-pages)
git checkout --orphan gh-pages

# wipe out any files checked in on the branch
git rm -rf .

cd ..

# clone the repo used for prod on GitHub and move into that dir
git clone git@github.com:openoakland/measure-g-production.git
cd measure-g-production

# create an orphan branch with naming required to serve a GitHub project page (gh-pages)
git checkout --orphan gh-pages

# wipe out any files checked in on the branch
git rm -rf .
