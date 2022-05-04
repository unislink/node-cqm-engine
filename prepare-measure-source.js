"use strict";
var params = require('optimist')
  .options({
    "h": {
      describe: "help",
      alias: "h"
    },
    "q": {
      alias: "queues",
      describe: "which redis queues to monitor , format is q1:q2:q3 ",
      default: 'calculate:rollup'
    },
    "b": {
      alias: "bundle",
      describe: "path to the bundle to use for measure calculation [file path] "
    },
    "m": {
      alias: "mongo_host",
      describe: "the host of the mongodb server that contains the fhir patient data and where patient values will be stored ",
      default: "127.0.0.1"
    },
    "d": {
      alias: "database",
      describe: "the mongodb database",
      default: "fhir"
    },
    "r": {
      alias: "redis",
      describe: "the redis server used to store the background processing jobs",
      default: "127.0.0.1"
    }
  })

var argv = params.argv

//let CEE = require("./lib/cqm-execution-engine")
let mongoose = require("mongoose")
let Fiber = require('fibers');
let mongo = require('mongodb');
let MongoClient = mongo.MongoClient;
//let QualityReport = require("./lib/quality_report")
let MeasureSource = require("node-qme/lib/mongo/measure_source")
//let Bundle = require("node-qme").Bundle
// need bundle locaation information so it can be loaded from the filesystem
// need to create a connection to mongodb in here to
// need to make sure mongoose is setup
let database = null;
let cqmEngine = null;
//let bundle_path = argv.bundle;
let mongo_host = argv.mongo_host;
let mongo_database = argv.database;
let redis_host = argv.redis_host;
//let mongo_url = "mongodb://" + mongo_host + "/" + mongo_database;
let mongo_url = "mongodb://superadmin:SouthMountain1@172.16.50.5:27017/pophealth-production?authSource=admin"
//let queues = argv.queues.split(":")

let CMS66v9 = require('./lib/measures/CMS66v9');
let testPatient = require('./lib/patients/68v10/test.js');


let main = async () => {
  try {
    const db = await MongoClient.connect(mongo_url);
    console.log('db connected:', db != null);
    // var measure_filters = { cms_id: 'CMS66v9', is_active: true };
    // var source = new MeasureSource(db, measure_filters);
    // await source.initializeLoad();

    // let mObject = new CMS66v9(testPatient.patient, {
    //   effective_date: 1638316800,
    //   start_date: 1609459200
    // });

    let CMS68v10 = require('./lib/measures/cms68v10').CMS68v10;
    new CMS68v10(testPatient.patient, {
      effective_date: 1638316800,
      start_date: 1609459200
    });

  } catch (e) {
    debugger;
  }
};

main();
//CMS68v10