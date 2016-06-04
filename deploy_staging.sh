
cd measure-g-staging
git push origin :gh-pages
git rm -rf .
harp compile ../ ./
git add -A
git commit -m "$(date +%m-%d-%Y_%H:%M:%S) staging deploy"
git push origin gh-pages