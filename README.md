# SMT Viewer

This web application aims to help in analysing the execution of parallel constraint solving involved in SMTService, 
a framework which currently uses OpenSMT2 and Spacer for solving SMT and PDR instances harnessing parallel computing.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing

First get a copy of the project.

Then go to server folder with

```
cd server
```

and install all packages with

```
npm install
```

To run the system just type 

```
node app.js
```

in the same folder.

## Running the tests

To test SMT Viewer two sample databases are provided in /tests folder. You can either pass them through the app, uploading a new database file, or passing them as initial parameter.

Example:

```
node app.js -d ../tests/demo.db
```

## Help 

To get help and see what are all possible initial parameters you can type

```
node app.js -h
```


## Author

Jelena Budakovic
