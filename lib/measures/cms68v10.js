module.exports.CMS68v10 = function (patient, mi) {
  var effective_date = mi.effective_date;
  var start_date = mi.start_date;
  var enable_logging = false;
  var enable_rationale = true;
  var short_circuit = false;

  var test_id = null;

  hqmfjs = {}
  //if (typeof (map) == "undefined") {
    this.measureId = '68v10_test';
    const MRU = require('map_reduce_utils');
    const HU = require('hqmf_utils');
    Object.assign(global, MRU);
    Object.assign(global, HU);
  //}

  hqmfjs.effective_date = effective_date;
  hqmfjs.test_id = test_id;


  var patient_api = new hQuery.Patient(patient);


  // #########################
  // ##### DATA ELEMENTS #####
  // #########################

  hqmfjs.nqf_id = '0419e';
  hqmfjs.hqmf_id = '2C928085-7198-38EE-0171-999107E803FD';
  hqmfjs.sub_id = null;
  if (typeof (test_id) == 'undefined') hqmfjs.test_id = null;

  OidDictionary = { '2.16.840.1.113883.3.600.1.1834': { 'CPT': ['59400', '59510', '59610', '59618', '90791', '90792', '90832', '90834', '90837', '90839', '92002', '92004', '92012', '92014', '92507', '92508', '92526', '92537', '92538', '92540', '92541', '92542', '92544', '92545', '92547', '92548', '92550', '92557', '92567', '92568', '92570', '92585', '92588', '92626', '96116', '96156', '96158', '97129', '97161', '97162', '97163', '97164', '97165', '97166', '97167', '97168', '97802', '97803', '97804', '98960', '98961', '98962', '99201', '99202', '99203', '99204', '99205', '99212', '99213', '99214', '99215', '99221', '99222', '99223', '99236', '99281', '99282', '99283', '99284', '99285', '99304', '99305', '99306', '99307', '99308', '99309', '99310', '99315', '99316', '99318', '99324', '99325', '99326', '99327', '99328', '99334', '99335', '99336', '99337', '99339', '99340', '99341', '99342', '99343', '99344', '99345', '99347', '99348', '99349', '99350', '99385', '99386', '99387', '99395', '99396', '99397', '99495', '99496'], 'HCPCS Level II': ['G0101', 'G0108', 'G0270', 'G0402', 'G0438', 'G0439'], 'SNOMED-CT': ['10197000', '108220007', '108221006', '108224003', '108311000', '13607009', '14736009', '165171009', '18091003', '18512000', '185349003', '185463005', '185465003', '209099002', '210098006', '225967005', '252592009', '252624005', '270427003', '270430005', '273643004', '274803000', '277404009', '284015009', '308335008', '34651001', '35025007', '36228007', '370803007', '385973000', '386372009', '390906007', '405096004', '406547006', '408983003', '410155007', '410157004', '410158009', '410160006', '410170008', '439708006', '439952009', '440524004', '46662001', '48423005', '50357006', '53555003', '54290001', '63547008', '66902005', '78318003', '83607001', '8411005', '86013001', '90526000', '91573000'] }, '2.16.840.1.113883.3.600.1.462': { 'SNOMED-CT': ['428191000124101'] }, '2.16.840.1.113883.3.526.3.1007': { 'SNOMED-CT': ['183932001', '183964008', '183966005', '216952002', '266721009', '269191009', '274512008', '31438003', '35688006', '371133007', '397745006', '407563006', '410534003', '410536001', '416098002', '416406003', '428119001', '445528004', '59037007', '62014003', '79899007'] } }

  // Measure variables
  var MeasurePeriod = {
    "low": new TS("201201010000", true),
    "high": new TS("201212312359", true)
  }
  hqmfjs.MeasurePeriod = function (patient) {
    return [new hQuery.CodedEntry(
      {
        "start_time": MeasurePeriod.low.asDate().getTime() / 1000,
        "end_time": MeasurePeriod.high.asDate().getTime() / 1000,
        "codes": {}
      }
    )];
  }
  if (typeof effective_date === 'number') {
    MeasurePeriod.high.date = new Date(1000 * effective_date);
    // add one minute before pulling off the year.  This turns 12-31-2012 23:59 into 1-1-2013 00:00 => 1-1-2012 00:00
    MeasurePeriod.low.date = new Date(1000 * (effective_date + 60));
    MeasurePeriod.low.date.setFullYear(MeasurePeriod.low.date.getFullYear() - 1);
    if (start_date)
      MeasurePeriod.low.date = new Date(1000 * start_date);
  }

  // Data critera
  hqmfjs.OccurrenceA_MedicationsEncounterCodeSet_EncounterPerformed_40280381_3e93_d1af_013e_a36090dc2cf5_source = function (patient, initialSpecificContext) {
    var eventCriteria = { "type": "encounters", "statuses": ["performed"], "includeEventsWithoutStatus": true, "valueSetId": "2.16.840.1.113883.3.600.1.1834", "specificOccurrence": "OccurrenceA_MedicationsEncounterCodeSet_EncounterPerformed_40280381_3e93_d1af_013e_a36090dc2cf5_source" };
    var events = patient.getEvents(eventCriteria);
    events.specificContext = new hqmf.SpecificOccurrence(Row.buildForDataCriteria(events.specific_occurrence, events))
    return events;
  }

  hqmfjs.OccurrenceA_MedicationsEncounterCodeSet_EncounterPerformed_40280381_3e93_d1af_013e_a36090dc2cf5 = function (patient, initialSpecificContext) {
    var eventCriteria = { "type": "encounters", "statuses": ["performed"], "includeEventsWithoutStatus": true, "valueSetId": "2.16.840.1.113883.3.600.1.1834", "specificOccurrence": "OccurrenceA_MedicationsEncounterCodeSet_EncounterPerformed_40280381_3e93_d1af_013e_a36090dc2cf5_source" };
    var events = patient.getEvents(eventCriteria);
    events.specificContext = new hqmf.SpecificOccurrence(Row.buildForDataCriteria(events.specific_occurrence, events))
    return events;
  }

  hqmfjs.Ethnicity_PatientCharacteristicEthnicity_40280381_3e93_d1af_013e_a36090dc2cf8 = function (patient, initialSpecificContext) {
    var value = patient.ethnicity() || null;
    matching = matchingValue(value, null);
    matching.specificContext = hqmf.SpecificsManager.identity();
    return matching;
  }

  hqmfjs.ONCAdministrativeSex_PatientCharacteristicSex_40280381_3e93_d1af_013e_a36090dc2cf6 = function (patient, initialSpecificContext) {
    var value = patient.gender() || null;
    matching = matchingValue(value, new CD("F", "Administrative Sex"));
    matching.specificContext = hqmf.SpecificsManager.identity();
    return matching;
  }

  hqmfjs.Payer_PatientCharacteristicPayer_40280381_3e93_d1af_013e_a36090dc2cf9 = function (patient, initialSpecificContext) {
    var value = patient.payer() || null;
    if (value === null) {
      matching = new Boolean(false);
    } else {
      matching = new Boolean(value.includedIn({ "Source of Payment Typology": ["1", "11", "111", "112", "113", "119", "12", "121", "122", "123", "129", "13", "14", "19", "191", "2", "21", "211", "212", "213", "219", "22", "23", "24", "25", "26", "29", "291", "3", "31", "311", "3111", "3112", "3113", "3114", "3115", "3116", "3119", "312", "3121", "3122", "3123", "313", "32", "321", "3211", "3212", "32121", "32122", "32123", "32124", "32125", "32126", "322", "3221", "3222", "3223", "3229", "33", "331", "332", "333", "334", "34", "341", "342", "343", "349", "35", "36", "361", "362", "369", "37", "371", "3711", "3712", "3713", "372", "379", "38", "381", "3811", "3812", "3813", "3819", "382", "389", "39", "4", "41", "42", "43", "44", "5", "51", "511", "512", "513", "514", "515", "516", "519", "52", "521", "522", "523", "529", "53", "54", "55", "56", "561", "562", "59", "6", "61", "611", "612", "613", "619", "62", "63", "64", "69", "7", "71", "72", "73", "79", "8", "81", "82", "821", "822", "823", "83", "84", "85", "89", "9", "91", "92", "93", "94", "95", "951", "953", "954", "959", "96", "97", "98", "99", "9999"] }));
    }
    matching.specificContext = hqmf.SpecificsManager.identity();
    return matching;
  }

  hqmfjs.Race_PatientCharacteristicRace_40280381_3e93_d1af_013e_a36090dc2cf7 = function (patient, initialSpecificContext) {
    var value = patient.race() || null;
    if (value === null) {
      matching = new Boolean(false);
    } else {
      matching = new Boolean(value.includedIn({ "CDC Race": ["1002-5", "2028-9", "2054-5", "2076-8", "2106-3", "2131-1"] }));
    }
    matching.specificContext = hqmf.SpecificsManager.identity();
    return matching;
  }

  hqmfjs.Agegrtr_thn_eql_18yearsat_7276C8E0_FED5_48B8_B6B5_FFFE06F0CD00_3B7C833D_4FA6_4BA0_92D3_1BFA40E904F4 = function (patient, initialSpecificContext) {
    var value = patient.birthtime() || null;
    var events = value ? [value] : [];
    events = SBS(events, hqmfjs.MeasurePeriod(patient), new IVL_PQ(new PQ(18, "a", true), null));
    events.specificContext = events.specificContext || hqmf.SpecificsManager.identity();
    return events;
  }

  hqmfjs.During_9C5A49EF_F35E_43C9_BEC8_1043CB937C03_F1DCDBE6_5253_44C1_8D55_4528AF0A172C = function (patient, initialSpecificContext) {
    var eventCriteria = { "type": "allProcedures", "statuses": ["performed"], "includeEventsWithoutStatus": true, "negated": true, "negationValueSetId": "2.16.840.1.113883.3.526.3.1007", "valueSetId": "2.16.840.1.113883.3.600.1.462" };
    var events = patient.getEvents(eventCriteria);
    if (events.length > 0 || !Logger.short_circuit) events = DURING(events, hqmfjs.OccurrenceA_MedicationsEncounterCodeSet_EncounterPerformed_40280381_3e93_d1af_013e_a36090dc2cf5(patient));
    if (events.length == 0) events.specificContext = hqmf.SpecificsManager.empty();
    return events;
  }

  hqmfjs.During_B197C075_B53E_4181_A982_561AA3A51520_1E256CEB_0554_4BEB_AF89_380E393FA1E1 = function (patient, initialSpecificContext) {
    var eventCriteria = { "type": "allProcedures", "statuses": ["performed"], "includeEventsWithoutStatus": true, "valueSetId": "2.16.840.1.113883.3.600.1.462" };
    var events = patient.getEvents(eventCriteria);
    if (events.length > 0 || !Logger.short_circuit) events = DURING(events, hqmfjs.OccurrenceA_MedicationsEncounterCodeSet_EncounterPerformed_40280381_3e93_d1af_013e_a36090dc2cf5(patient));
    if (events.length > 0 || !Logger.short_circuit) events = DURING(events, hqmfjs.MeasurePeriod(patient));
    if (events.length == 0) events.specificContext = hqmf.SpecificsManager.empty();
    return events;
  }

  hqmfjs.During_49E73ED5_CFB0_4952_9230_415474F00C3C_21DBB804_6963_4FC3_92C8_F878B11027AC = function (patient, initialSpecificContext) {
    var eventCriteria = { "type": "encounters", "statuses": ["performed"], "includeEventsWithoutStatus": true, "valueSetId": "2.16.840.1.113883.3.600.1.1834", "specificOccurrence": "OccurrenceA_MedicationsEncounterCodeSet_EncounterPerformed_40280381_3e93_d1af_013e_a36090dc2cf5_source" };
    var events = patient.getEvents(eventCriteria);
    if (events.length > 0 || !Logger.short_circuit) events = DURING(events, hqmfjs.MeasurePeriod(patient));
    if (events.length == 0) events.specificContext = hqmf.SpecificsManager.empty();
    return events;
  }



  // #########################
  // ##### MEASURE LOGIC #####
  // #########################

  hqmfjs.initializeSpecifics = function (patient_api, hqmfjs) { hqmf.SpecificsManager.initialize(patient_api, hqmfjs, { "id": "OccurrenceA_MedicationsEncounterCodeSet_EncounterPerformed_40280381_3e93_d1af_013e_a36090dc2cf5_source", "type": "OCCURRENCEA_MEDICATIONSENCOUNTERCODESET_ENCOUNTERPERFORMED_03F753EE_1CFC_4C8D_B6F8_C6E8D36CE086_SOURCE", "function": "OccurrenceA_MedicationsEncounterCodeSet_EncounterPerformed_40280381_3e93_d1af_013e_a36090dc2cf5_source" }) }

  // INITIAL PATIENT POPULATION
  hqmfjs.IPP = function (patient, initialSpecificContext) {
    population_criteria_fn = allTrue('IPP', patient, initialSpecificContext,
        allTrue('3', patient, initialSpecificContext, hqmfjs.Agegrtr_thn_eql_18yearsat_7276C8E0_FED5_48B8_B6B5_FFFE06F0CD00_3B7C833D_4FA6_4BA0_92D3_1BFA40E904F4, hqmfjs.During_49E73ED5_CFB0_4952_9230_415474F00C3C_21DBB804_6963_4FC3_92C8_F878B11027AC
      )
    );
    if (typeof (population_criteria_fn) == 'function') {
      return population_criteria_fn();
    } else {
      return population_criteria_fn;
    }
  };


  // STRATIFICATION
  hqmfjs.STRAT = null;
  // DENOMINATOR
  hqmfjs.DENOM = function (patient) { return new Boolean(true); }
  // NUMERATOR
  hqmfjs.NUMER = function (patient, initialSpecificContext) {
    population_criteria_fn = this.allTrue('NUMER', patient, initialSpecificContext,
      allTrue('5', patient, initialSpecificContext, hqmfjs.During_B197C075_B53E_4181_A982_561AA3A51520_1E256CEB_0554_4BEB_AF89_380E393FA1E1
      )
    );
    if (typeof (population_criteria_fn) == 'function') {
      return population_criteria_fn();
    } else {
      return population_criteria_fn;
    }
  };


  hqmfjs.NUMEX = function (patient) { return new Boolean(false); }
  hqmfjs.DENEX = function (patient) { return new Boolean(false); }
  hqmfjs.DENEXCEP = function (patient, initialSpecificContext) {
    population_criteria_fn = this.atLeastOneTrue('DENEXCEP', patient, initialSpecificContext,
      atLeastOneTrue('7', patient, initialSpecificContext, hqmfjs.During_9C5A49EF_F35E_43C9_BEC8_1043CB937C03_F1DCDBE6_5253_44C1_8D55_4528AF0A172C
      )
    );
    if (typeof (population_criteria_fn) == 'function') {
      return population_criteria_fn();
    } else {
      return population_criteria_fn;
    }
  };


  // CV
  hqmfjs.MSRPOPL = function (patient) { return new Boolean(true); }
  hqmfjs.MSRPOPLEX = function (patient) { return new Boolean(false); }
  hqmfjs.OBSERV = function (patient) { return new Boolean(false); }
  // VARIABLES
  hqmfjs.VARIABLES = function (patient, initialSpecificContext) {
    return false;
  }


  var occurrenceId = ["OccurrenceA_MedicationsEncounterCodeSet_EncounterPerformed_40280381_3e93_d1af_013e_a36090dc2cf5_source"];

  hqmfjs.initializeSpecifics(patient_api, hqmfjs)

  var population = function () {
    return executeIfAvailable(hqmfjs.IPP, patient_api);
  }
  var stratification = null;
  if (hqmfjs.STRAT) {
    stratification = function () {
      return hqmf.SpecificsManager.setIfNull(executeIfAvailable(hqmfjs.STRAT, patient_api));
    }
  }
  var denominator = function () {
    return executeIfAvailable(hqmfjs.DENOM, patient_api);
  }
  var numerator = function () {
    return executeIfAvailable(hqmfjs.NUMER, patient_api);
  }
  var exclusion = function () {
    return executeIfAvailable(hqmfjs.DENEX, patient_api);
  }
  var denexcep = function () {
    return executeIfAvailable(hqmfjs.DENEXCEP, patient_api);
  }
  var numex = function () {
    return executeIfAvailable(hqmfjs.NUMEX, patient_api);
  }
  var msrpopl = function () {
    return executeIfAvailable(hqmfjs.MSRPOPL, patient_api);
  }
  var msrpoplex = function () {
    return executeIfAvailable(hqmfjs.MSRPOPLEX, patient_api);
  }
  var observ = function (specific_context) {

    var observFunc = hqmfjs.OBSERV
    if (typeof (observFunc) === 'function')
      return observFunc(patient_api, specific_context);
    else
      return [];
  }

  var variables = function () {
    if (Logger.enable_rationale) {
      return executeIfAvailable(hqmfjs.VARIABLES, patient_api);
    }
  }

  var executeIfAvailable = function (optionalFunction, patient_api) {
    if (typeof (optionalFunction) === 'function') {
      result = optionalFunction(patient_api);

      return result;
    } else {
      return false;
    }
  }


  if (typeof Logger != 'undefined') {
    // clear out logger
    Logger.logger = [];
    Logger.rationale = {};
    if (typeof short_circuit == 'undefined') short_circuit = true;

    // turn on logging if it is enabled
    if (enable_logging || enable_rationale) {
      injectLogger(hqmfjs, enable_logging, enable_rationale, short_circuit);
    } else {
      Logger.enable_rationale = false;
      Logger.short_circuit = short_circuit;
    }
  }

  try {
    map(patient, population, denominator, numerator, exclusion, denexcep, msrpopl, msrpoplex, observ, occurrenceId, false, stratification, variables, numex);
  } catch (err) {
    console.log(err.stack);
    throw err;
  }
  
};
