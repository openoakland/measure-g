mkdir staging
mkdir production

cd staging
git clone git@github.com:openoakland/measure-g-staging.git
git checkout --orphan gh-pages
git rm -rf .