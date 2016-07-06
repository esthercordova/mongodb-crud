# bulk load data
mongoimport --db=mongo-crud --collection=people --type=csv --headerline --file=sample/csv/people.csv


# import from outside of mongo sh scripts/import/people.sh
