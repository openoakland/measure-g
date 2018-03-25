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
to see your changes hosted at http://staging.trackg.org

## Data Maintenence

### Adding Enrollment Data

Our enrollment source has been the US Dept of Ed National Center for Education Statistics: [https://nces.ed.gov/ccd/pubschuniv.asp](https://nces.ed.gov/ccd/pubschuniv.asp) They are extremely slow to publish, but they have charter and traditional district school data.

1. Download the latest and copy out the Oakland schools (LEA_NAME = Oakland Unified)

*Carto Postgres Hosting (jbaldo.carto.com)*

2. Remove extraneous columns in Excel so you're under the 250 column Carto limit (yeah, it's got a lot of columns...)
3. Save as csv (original sorce is text flat file)
4. Upload to the carto account as a new dataset
5. Extract columns and join with existing enrollment data. [Something like this](https://github.com/openoakland/measure-g/issues/58)

6. Update `_harp.json` with the latest enrollment year
7. Update the enrollment table name in sql calls (currently `ousd_enrollment`) if you're changing the name. This might be neccessary if you're going to wait a bit to release the change. Otherwise you'll break the live site in the process.

### Adding Annual Measure G Data

We request the data each year from OUSD's finance office (typically through the Measure G Oversight Committee)

1. Change column names to match the `measure_g_actuals` table
2. Format spending columns into `####.##`
3. Add a `year` column and place the same year in every row. This should be the year that the school year started. For example, if it were to 2014-2015 school year, you would place 2014 in the column.
4. Upload to carto. Be sure that columns containing numberic ids or spending are in number format, not text.
5. Use a `UNION ALL` query in Carto to join the datasets. [Something like this.](https://github.com/openoakland/measure-g/issues/63)
6. Create a new dataset from the query. Make it public and name it `measure_g_actuals` to replace the existing table with that name.
7. Update the `supported_years` and `yearsToDisplay` arrays in `programs.ejs` and `school.ejs` to include the year you just added. (Unfortunately, it may break without this adjustment).
8. Update `latestExpenditureDataYear` in `harp.json` to the year you have just added and add another element to to the `year-select` element in `map.ejs`.
