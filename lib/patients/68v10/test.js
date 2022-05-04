var ObjectId = function(id) { return id;}
var ISODate = function(dv) { return parseInt(new Date(dv).getTime()/1000); };
var NumberLong = function(i) {return parseInt(i)};
var patient =
{
    "_id" : ObjectId("622f45d6cd7f12f3c535e650"),
    "languages" : [ 
        "en"
    ],
    "effective_time" : NumberLong(1647264743),
    "title" : null,
    "first" : "FREDDA",
    "last" : "BEEMAN",
    "birthdate" : NumberLong(-1088899200),
    "deathdate" : null,
    "expired" : false,
    "gender" : "F",
    "medical_record_number" : "12599_pid_5f18adcd195b7e4aacf47cee",
    "entity_id" : "12599_c1e022e11-a6b5-4102-a363-90115116f74c",
    "groups" : [ 
        {
            "group_code" : "1e022e11-a6b5-4102-a363-90115116f74c",
            "provider_npi" : "1053335844",
            "provider_id" : ObjectId("61d85cc6114c6de579525d3a")
        }
    ],
    "race" : {
        "code" : "2106-3",
        "code_set" : "CDC-RE"
    },
    "ethnicity" : {
        "code" : "2135-2",
        "code_set" : "CDC-RE"
    },
    "practice_id" : ObjectId("5f18adcd195b7e4aacf47cee"),
    "updated_at" : ISODate("2022-03-14T13:40:38.828Z"),
    "created_at" : ISODate("2022-03-14T13:40:38.828Z"),
    "addresses" : [ 
        {
            "_id" : ObjectId("622f484acd7f12f3c56f86d8"),
            "street" : [ 
                "2851 ORCHID DR."
            ],
            "city" : "MCKINNEY",
            "state" : "TX",
            "zip" : "75075",
            "country" : "US",
            "use" : null
        }
    ],
    "telecoms" : [ 
        {
            "_id" : ObjectId("622f45d6cd7f12f3c535e652"),
            "value" : "(325) 668-4381",
            "use" : "HP"
        }
    ],
    "provider_performances" : [ 
        {
            "_id" : ObjectId("622f4a55cd7f12f3c571e167"),
            "start_date" : NumberLong(1620432000),
            "end_date" : NumberLong(1620432000),
            "provider_id" : ObjectId("61d85cc6114c6de579525d3a"),
            "group_code" : [ 
                "1e022e11-a6b5-4102-a363-90115116f74c"
            ]
        }, 
        {
            "_id" : ObjectId("622f4a55cd7f12f3c571e168"),
            "start_date" : NumberLong(1625011200),
            "end_date" : NumberLong(1625011200),
            "provider_id" : ObjectId("61d85cc6114c6de579525d3a"),
            "group_code" : [ 
                "1e022e11-a6b5-4102-a363-90115116f74c"
            ]
        }, 
        {
            "_id" : ObjectId("622f4a55cd7f12f3c571e169"),
            "start_date" : NumberLong(1626134400),
            "end_date" : NumberLong(1626134400),
            "provider_id" : ObjectId("61d85cc6114c6de579525d3a"),
            "group_code" : [ 
                "1e022e11-a6b5-4102-a363-90115116f74c"
            ]
        }, 
        {
            "_id" : ObjectId("622f4a55cd7f12f3c571e16a"),
            "start_date" : NumberLong(1627430400),
            "end_date" : NumberLong(1627430400),
            "provider_id" : ObjectId("61d85cc6114c6de579525d3a"),
            "group_code" : [ 
                "1e022e11-a6b5-4102-a363-90115116f74c"
            ]
        }, 
        {
            "_id" : ObjectId("622f4a55cd7f12f3c571e16b"),
            "start_date" : NumberLong(1643673600),
            "end_date" : NumberLong(1643673600),
            "provider_id" : ObjectId("61d85cc6114c6de579525d3a"),
            "group_code" : [ 
                "1e022e11-a6b5-4102-a363-90115116f74c"
            ]
        }, 
        {
            "_id" : ObjectId("622f4a55cd7f12f3c571e16c"),
            "start_date" : NumberLong(1634688000),
            "end_date" : NumberLong(1634688000),
            "provider_id" : ObjectId("61d85cc6114c6de579525d30"),
            "group_code" : [ 
                "1e022e11-a6b5-4102-a363-90115116f74c"
            ]
        }, 
        {
            "_id" : ObjectId("622f4a55cd7f12f3c571e16d"),
            "start_date" : NumberLong(1637625600),
            "end_date" : NumberLong(1637625600),
            "provider_id" : ObjectId("61d85cc6114c6de579525d3a"),
            "group_code" : [ 
                "1e022e11-a6b5-4102-a363-90115116f74c"
            ]
        }, 
        {
            "_id" : ObjectId("622f4a55cd7f12f3c571e16e"),
            "start_date" : NumberLong(1615248000),
            "end_date" : NumberLong(1615248000),
            "provider_id" : ObjectId("61d85cc6114c6de579525d3a"),
            "group_code" : [ 
                "1e022e11-a6b5-4102-a363-90115116f74c"
            ]
        }, 
        {
            "_id" : ObjectId("622f4a55cd7f12f3c571e16f"),
            "start_date" : NumberLong(1619481600),
            "end_date" : NumberLong(1619481600),
            "provider_id" : ObjectId("61d85cc6114c6de579525d3a"),
            "group_code" : [ 
                "1e022e11-a6b5-4102-a363-90115116f74c"
            ]
        }, 
        {
            "_id" : ObjectId("622f4a55cd7f12f3c571e170"),
            "start_date" : NumberLong(1623974400),
            "end_date" : NumberLong(1623974400),
            "provider_id" : ObjectId("61d85cc6114c6de579525d3a"),
            "group_code" : [ 
                "1e022e11-a6b5-4102-a363-90115116f74c"
            ]
        }, 
        {
            "_id" : ObjectId("622f4a55cd7f12f3c571e171"),
            "start_date" : NumberLong(1626739200),
            "end_date" : NumberLong(1626739200),
            "provider_id" : ObjectId("61d85cc6114c6de579525d3a"),
            "group_code" : [ 
                "1e022e11-a6b5-4102-a363-90115116f74c"
            ]
        }, 
        {
            "_id" : ObjectId("622f4a55cd7f12f3c571e172"),
            "start_date" : NumberLong(1629158400),
            "end_date" : NumberLong(1629158400),
            "provider_id" : ObjectId("61d85cc6114c6de579525d3a"),
            "group_code" : [ 
                "1e022e11-a6b5-4102-a363-90115116f74c"
            ]
        }, 
        {
            "_id" : ObjectId("622f4a55cd7f12f3c571e173"),
            "start_date" : NumberLong(1622073600),
            "end_date" : NumberLong(1622073600),
            "provider_id" : ObjectId("61d85cc6114c6de579525d3a"),
            "group_code" : [ 
                "1e022e11-a6b5-4102-a363-90115116f74c"
            ]
        }, 
        {
            "_id" : ObjectId("622f4a55cd7f12f3c571e174"),
            "start_date" : NumberLong(1637020800),
            "end_date" : NumberLong(1637020800),
            "provider_id" : ObjectId("61d85cc6114c6de579525d3a"),
            "group_code" : [ 
                "1e022e11-a6b5-4102-a363-90115116f74c"
            ]
        }, 
        {
            "_id" : ObjectId("622f4a55cd7f12f3c571e175"),
            "start_date" : NumberLong(1642464000),
            "end_date" : NumberLong(1642464000),
            "provider_id" : ObjectId("61d85cc6114c6de579525d3a"),
            "group_code" : [ 
                "1e022e11-a6b5-4102-a363-90115116f74c"
            ]
        }, 
        {
            "_id" : ObjectId("622f4a55cd7f12f3c571e176"),
            "provider_id" : ObjectId("5f18adcd195b7e4aacf47cf0"),
            "start_date" : NumberLong(1620432000),
            "end_date" : NumberLong(1620432000),
            "group_code" : [ 
                "1e022e11-a6b5-4102-a363-90115116f74c"
            ]
        }, 
        {
            "_id" : ObjectId("622f4a55cd7f12f3c571e177"),
            "provider_id" : ObjectId("5f18adcd195b7e4aacf47cf0"),
            "start_date" : NumberLong(1625011200),
            "end_date" : NumberLong(1625011200),
            "group_code" : [ 
                "1e022e11-a6b5-4102-a363-90115116f74c"
            ]
        }, 
        {
            "_id" : ObjectId("622f4a55cd7f12f3c571e178"),
            "provider_id" : ObjectId("5f18adcd195b7e4aacf47cf0"),
            "start_date" : NumberLong(1626134400),
            "end_date" : NumberLong(1626134400),
            "group_code" : [ 
                "1e022e11-a6b5-4102-a363-90115116f74c"
            ]
        }, 
        {
            "_id" : ObjectId("622f4a55cd7f12f3c571e179"),
            "provider_id" : ObjectId("5f18adcd195b7e4aacf47cf0"),
            "start_date" : NumberLong(1627430400),
            "end_date" : NumberLong(1627430400),
            "group_code" : [ 
                "1e022e11-a6b5-4102-a363-90115116f74c"
            ]
        }, 
        {
            "_id" : ObjectId("622f4a55cd7f12f3c571e17a"),
            "provider_id" : ObjectId("5f18adcd195b7e4aacf47cf0"),
            "start_date" : NumberLong(1643673600),
            "end_date" : NumberLong(1643673600),
            "group_code" : [ 
                "1e022e11-a6b5-4102-a363-90115116f74c"
            ]
        }, 
        {
            "_id" : ObjectId("622f4a55cd7f12f3c571e17b"),
            "provider_id" : ObjectId("5f18adcd195b7e4aacf47cf0"),
            "start_date" : NumberLong(1634688000),
            "end_date" : NumberLong(1634688000),
            "group_code" : [ 
                "1e022e11-a6b5-4102-a363-90115116f74c"
            ]
        }, 
        {
            "_id" : ObjectId("622f4a55cd7f12f3c571e17c"),
            "provider_id" : ObjectId("5f18adcd195b7e4aacf47cf0"),
            "start_date" : NumberLong(1637625600),
            "end_date" : NumberLong(1637625600),
            "group_code" : [ 
                "1e022e11-a6b5-4102-a363-90115116f74c"
            ]
        }, 
        {
            "_id" : ObjectId("622f4a55cd7f12f3c571e17d"),
            "provider_id" : ObjectId("5f18adcd195b7e4aacf47cf0"),
            "start_date" : NumberLong(1615248000),
            "end_date" : NumberLong(1615248000),
            "group_code" : [ 
                "1e022e11-a6b5-4102-a363-90115116f74c"
            ]
        }, 
        {
            "_id" : ObjectId("622f4a55cd7f12f3c571e17e"),
            "provider_id" : ObjectId("5f18adcd195b7e4aacf47cf0"),
            "start_date" : NumberLong(1619481600),
            "end_date" : NumberLong(1619481600),
            "group_code" : [ 
                "1e022e11-a6b5-4102-a363-90115116f74c"
            ]
        }, 
        {
            "_id" : ObjectId("622f4a55cd7f12f3c571e17f"),
            "provider_id" : ObjectId("5f18adcd195b7e4aacf47cf0"),
            "start_date" : NumberLong(1623974400),
            "end_date" : NumberLong(1623974400),
            "group_code" : [ 
                "1e022e11-a6b5-4102-a363-90115116f74c"
            ]
        }, 
        {
            "_id" : ObjectId("622f4a55cd7f12f3c571e180"),
            "provider_id" : ObjectId("5f18adcd195b7e4aacf47cf0"),
            "start_date" : NumberLong(1626739200),
            "end_date" : NumberLong(1626739200),
            "group_code" : [ 
                "1e022e11-a6b5-4102-a363-90115116f74c"
            ]
        }, 
        {
            "_id" : ObjectId("622f4a55cd7f12f3c571e181"),
            "provider_id" : ObjectId("5f18adcd195b7e4aacf47cf0"),
            "start_date" : NumberLong(1629158400),
            "end_date" : NumberLong(1629158400),
            "group_code" : [ 
                "1e022e11-a6b5-4102-a363-90115116f74c"
            ]
        }, 
        {
            "_id" : ObjectId("622f4a55cd7f12f3c571e182"),
            "provider_id" : ObjectId("5f18adcd195b7e4aacf47cf0"),
            "start_date" : NumberLong(1622073600),
            "end_date" : NumberLong(1622073600),
            "group_code" : [ 
                "1e022e11-a6b5-4102-a363-90115116f74c"
            ]
        }, 
        {
            "_id" : ObjectId("622f4a55cd7f12f3c571e183"),
            "provider_id" : ObjectId("5f18adcd195b7e4aacf47cf0"),
            "start_date" : NumberLong(1637020800),
            "end_date" : NumberLong(1637020800),
            "group_code" : [ 
                "1e022e11-a6b5-4102-a363-90115116f74c"
            ]
        }, 
        {
            "_id" : ObjectId("622f4a55cd7f12f3c571e184"),
            "provider_id" : ObjectId("5f18adcd195b7e4aacf47cf0"),
            "start_date" : NumberLong(1642464000),
            "end_date" : NumberLong(1642464000),
            "group_code" : [ 
                "1e022e11-a6b5-4102-a363-90115116f74c"
            ]
        }, 
        {
            "_id" : ObjectId("622f4a55cd7f12f3c571e185"),
            "provider_id" : ObjectId("5797642058989ab8c300000b"),
            "start_date" : null,
            "end_date" : null
        }, 
        {
            "_id" : ObjectId("622f4a55cd7f12f3c571e186"),
            "provider_id" : ObjectId("5f18adcd195b7e4aacf47cf0"),
            "start_date" : null,
            "end_date" : null
        }
    ],
    "primary_payer" : "Medicare of Texas - J4",
    "insurance_providers" : [ 
        {
            "_id" : ObjectId("622f45d6cd7f12f3c535e655"),
            "codes" : {
                "SOP" : [ 
                    "1"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "InsuranceProvider",
            "oid" : "2.16.840.1.113883.3.560.1.405"
        }
    ],
    "search_keys" : [ 
        "12599", 
        "12599_c1e022e11-a6b5-4102-a363-90115116f74c", 
        "FREDDA BEEMAN", 
        "BEEMAN, FREDDA"
    ],
    "vital_signs" : [ 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4dff"),
            "codes" : {
                "LOINC" : [ 
                    "39156-5"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1643673600),
            "description" : "BMI",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e00"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4e01"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "21.2",
                    "units" : ""
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e02"),
            "codes" : {
                "LOINC" : [ 
                    "8302-2"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1622073600),
            "description" : "Height",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e03"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4e04"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "61",
                    "units" : "in"
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e05"),
            "codes" : {
                "LOINC" : [ 
                    "8302-2"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1637625600),
            "description" : "Height",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e06"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4e07"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "61",
                    "units" : "in"
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e08"),
            "codes" : {
                "LOINC" : [ 
                    "8480-6"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1620432000),
            "description" : "BP Systolic",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e09"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4e0a"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "122",
                    "units" : ""
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e0b"),
            "codes" : {
                "LOINC" : [ 
                    "8480-6"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1643673600),
            "description" : "BP Systolic",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e0c"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4e0d"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "129",
                    "units" : ""
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e0e"),
            "codes" : {
                "LOINC" : [ 
                    "8867-4"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1627430400),
            "description" : "Pulse",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e0f"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4e10"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "88",
                    "units" : "{H.B.}/min"
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e11"),
            "codes" : {
                "LOINC" : [ 
                    "8867-4"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1634688000),
            "description" : "Pulse",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e12"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4e13"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "61",
                    "units" : "{H.B.}/min"
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e4a"),
            "codes" : {
                "LOINC" : [ 
                    "29463-7"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1643673600),
            "description" : "Weight",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e4b"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4e4c"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "112",
                    "units" : "lb"
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e4d"),
            "codes" : {
                "LOINC" : [ 
                    "39156-5"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1619481600),
            "description" : "BMI",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e4e"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4e4f"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "21.0",
                    "units" : ""
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e50"),
            "codes" : {
                "LOINC" : [ 
                    "39156-5"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1627430400),
            "description" : "BMI",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e51"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4e52"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "21.7",
                    "units" : ""
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e53"),
            "codes" : {
                "LOINC" : [ 
                    "39156-5"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1642464000),
            "description" : "BMI",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e54"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4e55"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "21.7",
                    "units" : ""
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e56"),
            "codes" : {
                "LOINC" : [ 
                    "8302-2"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1629158400),
            "description" : "Height",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e57"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4e58"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "61",
                    "units" : "in"
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e59"),
            "codes" : {
                "LOINC" : [ 
                    "8302-2"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1634688000),
            "description" : "Height",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e5a"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4e5b"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "61",
                    "units" : "in"
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e5c"),
            "codes" : {
                "LOINC" : [ 
                    "8302-2"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1642464000),
            "description" : "Height",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e5d"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4e5e"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "61",
                    "units" : "in"
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e5f"),
            "codes" : {
                "LOINC" : [ 
                    "8462-4"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1615248000),
            "description" : "BP Diastolic",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e60"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4e61"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "69",
                    "units" : ""
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e62"),
            "codes" : {
                "LOINC" : [ 
                    "8462-4"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1637020800),
            "description" : "BP Diastolic",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e63"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4e64"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "78",
                    "units" : ""
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e65"),
            "codes" : {
                "LOINC" : [ 
                    "8867-4"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1620432000),
            "description" : "Pulse",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e66"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4e67"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "84",
                    "units" : "{H.B.}/min"
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4f19"),
            "codes" : {
                "LOINC" : [ 
                    "29463-7"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1615248000),
            "description" : "Weight",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4f1a"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4f1b"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "110",
                    "units" : "lb"
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4f1c"),
            "codes" : {
                "LOINC" : [ 
                    "8302-2"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1619481600),
            "description" : "Height",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4f1d"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4f1e"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "61",
                    "units" : "in"
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4f1f"),
            "codes" : {
                "LOINC" : [ 
                    "8302-2"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1626739200),
            "description" : "Height",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4f20"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4f21"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "61",
                    "units" : "in"
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4f22"),
            "codes" : {
                "LOINC" : [ 
                    "8462-4"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1620432000),
            "description" : "BP Diastolic",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4f23"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4f24"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "67",
                    "units" : ""
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4f25"),
            "codes" : {
                "LOINC" : [ 
                    "8462-4"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1627430400),
            "description" : "BP Diastolic",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4f26"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4f27"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "74",
                    "units" : ""
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4f28"),
            "codes" : {
                "LOINC" : [ 
                    "8462-4"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1642464000),
            "description" : "BP Diastolic",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4f29"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4f2a"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "65",
                    "units" : ""
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4f2b"),
            "codes" : {
                "LOINC" : [ 
                    "8480-6"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1623974400),
            "description" : "BP Systolic",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4f2c"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4f2d"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "145",
                    "units" : ""
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4f2e"),
            "codes" : {
                "LOINC" : [ 
                    "8480-6"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1626134400),
            "description" : "BP Systolic",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4f2f"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4f30"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "129",
                    "units" : ""
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4f31"),
            "codes" : {
                "LOINC" : [ 
                    "8480-6"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1634688000),
            "description" : "BP Systolic",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4f32"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4f33"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "149",
                    "units" : ""
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4f34"),
            "codes" : {
                "LOINC" : [ 
                    "8480-6"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1642464000),
            "description" : "BP Systolic",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4f35"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4f36"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "132",
                    "units" : ""
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4f37"),
            "codes" : {
                "LOINC" : [ 
                    "8867-4"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1626134400),
            "description" : "Pulse",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4f38"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4f39"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "86",
                    "units" : "{H.B.}/min"
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4f3c"),
            "codes" : {
                "LOINC" : [ 
                    "29463-7"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1623974400),
            "description" : "Weight",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4f3d"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4f3e"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "114",
                    "units" : "lb"
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4f3f"),
            "codes" : {
                "LOINC" : [ 
                    "29463-7"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1626134400),
            "description" : "Weight",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4f40"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4f41"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "115",
                    "units" : "lb"
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4f42"),
            "codes" : {
                "LOINC" : [ 
                    "29463-7"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1642464000),
            "description" : "Weight",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4f43"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4f44"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "115",
                    "units" : "lb"
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4f45"),
            "codes" : {
                "LOINC" : [ 
                    "39156-5"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1622073600),
            "description" : "BMI",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4f46"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4f47"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "21.5",
                    "units" : ""
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4f48"),
            "codes" : {
                "LOINC" : [ 
                    "39156-5"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1626134400),
            "description" : "BMI",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4f49"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4f4a"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "21.7",
                    "units" : ""
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4f4b"),
            "codes" : {
                "LOINC" : [ 
                    "39156-5"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1637020800),
            "description" : "BMI",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4f4c"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4f4d"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "21.0",
                    "units" : ""
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4f4e"),
            "codes" : {
                "LOINC" : [ 
                    "39156-5"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1637625600),
            "description" : "BMI",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4f4f"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4f50"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "21.5",
                    "units" : ""
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4f51"),
            "codes" : {
                "LOINC" : [ 
                    "8462-4"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1637625600),
            "description" : "BP Diastolic",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4f52"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4f53"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "75",
                    "units" : ""
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4f54"),
            "codes" : {
                "LOINC" : [ 
                    "8480-6"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1619481600),
            "description" : "BP Systolic",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4f55"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4f56"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "133",
                    "units" : ""
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4f57"),
            "codes" : {
                "LOINC" : [ 
                    "8480-6"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1626739200),
            "description" : "BP Systolic",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4f58"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4f59"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "128",
                    "units" : ""
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4f5a"),
            "codes" : {
                "LOINC" : [ 
                    "8480-6"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1627430400),
            "description" : "BP Systolic",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4f5b"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4f5c"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "125",
                    "units" : ""
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4f5d"),
            "codes" : {
                "LOINC" : [ 
                    "8480-6"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1629158400),
            "description" : "BP Systolic",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4f5e"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4f5f"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "131",
                    "units" : ""
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4f60"),
            "codes" : {
                "LOINC" : [ 
                    "8867-4"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1615248000),
            "description" : "Pulse",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4f61"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4f62"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "62",
                    "units" : "{H.B.}/min"
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4f63"),
            "codes" : {
                "LOINC" : [ 
                    "8867-4"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1623974400),
            "description" : "Pulse",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4f64"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4f65"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "74",
                    "units" : "{H.B.}/min"
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4f66"),
            "codes" : {
                "LOINC" : [ 
                    "8867-4"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1626739200),
            "description" : "Pulse",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4f67"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4f68"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "84",
                    "units" : "{H.B.}/min"
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4f69"),
            "codes" : {
                "LOINC" : [ 
                    "8867-4"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1629158400),
            "description" : "Pulse",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4f6a"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4f6b"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "78",
                    "units" : "{H.B.}/min"
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4f6c"),
            "codes" : {
                "LOINC" : [ 
                    "8867-4"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1637020800),
            "description" : "Pulse",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4f6d"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4f6e"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "84",
                    "units" : "{H.B.}/min"
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4f73"),
            "codes" : {
                "LOINC" : [ 
                    "29463-7"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1627430400),
            "description" : "Weight",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4f74"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4f75"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "115",
                    "units" : "lb"
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4f76"),
            "codes" : {
                "LOINC" : [ 
                    "39156-5"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1615248000),
            "description" : "BMI",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4f77"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4f78"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "20.8",
                    "units" : ""
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4f79"),
            "codes" : {
                "LOINC" : [ 
                    "39156-5"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1623974400),
            "description" : "BMI",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4f7a"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4f7b"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "21.5",
                    "units" : ""
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4f7c"),
            "codes" : {
                "LOINC" : [ 
                    "8302-2"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1615248000),
            "description" : "Height",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4f7d"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4f7e"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "61",
                    "units" : "in"
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4f7f"),
            "codes" : {
                "LOINC" : [ 
                    "8462-4"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1626134400),
            "description" : "BP Diastolic",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4f80"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4f81"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "78",
                    "units" : ""
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4f82"),
            "codes" : {
                "LOINC" : [ 
                    "8462-4"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1629158400),
            "description" : "BP Diastolic",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4f83"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4f84"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "69",
                    "units" : ""
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4f85"),
            "codes" : {
                "LOINC" : [ 
                    "8462-4"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1643673600),
            "description" : "BP Diastolic",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4f86"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4f87"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "78",
                    "units" : ""
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4f88"),
            "codes" : {
                "LOINC" : [ 
                    "8480-6"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1622073600),
            "description" : "BP Systolic",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4f89"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4f8a"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "133",
                    "units" : ""
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4f8b"),
            "codes" : {
                "LOINC" : [ 
                    "8480-6"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1637625600),
            "description" : "BP Systolic",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4f8c"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4f8d"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "136",
                    "units" : ""
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4f8e"),
            "codes" : {
                "LOINC" : [ 
                    "8867-4"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1619481600),
            "description" : "Pulse",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4f8f"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4f90"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "85",
                    "units" : "{H.B.}/min"
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4f91"),
            "codes" : {
                "LOINC" : [ 
                    "29463-7"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1620432000),
            "description" : "Weight",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4f92"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4f93"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "114",
                    "units" : "lb"
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4f94"),
            "codes" : {
                "LOINC" : [ 
                    "39156-5"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1620432000),
            "description" : "BMI",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4f95"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4f96"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "21.5",
                    "units" : ""
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4f97"),
            "codes" : {
                "LOINC" : [ 
                    "8302-2"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1620432000),
            "description" : "Height",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4f98"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4f99"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "61",
                    "units" : "in"
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4f9a"),
            "codes" : {
                "LOINC" : [ 
                    "8302-2"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1627430400),
            "description" : "Height",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4f9b"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4f9c"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "61",
                    "units" : "in"
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4f9d"),
            "codes" : {
                "LOINC" : [ 
                    "8462-4"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1619481600),
            "description" : "BP Diastolic",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4f9e"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4f9f"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "66",
                    "units" : ""
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4fa0"),
            "codes" : {
                "LOINC" : [ 
                    "8462-4"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1622073600),
            "description" : "BP Diastolic",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4fa1"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4fa2"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "65",
                    "units" : ""
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4fa3"),
            "codes" : {
                "LOINC" : [ 
                    "8867-4"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1643673600),
            "description" : "Pulse",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4fa4"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4fa5"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "84",
                    "units" : "{H.B.}/min"
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4fa6"),
            "codes" : {
                "LOINC" : [ 
                    "29463-7"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1637020800),
            "description" : "Weight",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4fa7"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4fa8"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "111",
                    "units" : "lb"
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4fa9"),
            "codes" : {
                "LOINC" : [ 
                    "39156-5"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1629158400),
            "description" : "BMI",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4faa"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4fab"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "21.4",
                    "units" : ""
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4fac"),
            "codes" : {
                "LOINC" : [ 
                    "8302-2"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1626134400),
            "description" : "Height",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4fad"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4fae"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "61",
                    "units" : "in"
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4faf"),
            "codes" : {
                "LOINC" : [ 
                    "8302-2"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1643673600),
            "description" : "Height",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4fb0"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4fb1"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "61",
                    "units" : "in"
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4fb2"),
            "codes" : {
                "LOINC" : [ 
                    "8462-4"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1623974400),
            "description" : "BP Diastolic",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4fb3"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4fb4"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "88",
                    "units" : ""
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4fb5"),
            "codes" : {
                "LOINC" : [ 
                    "8462-4"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1626739200),
            "description" : "BP Diastolic",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4fb6"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4fb7"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "77",
                    "units" : ""
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4fb8"),
            "codes" : {
                "LOINC" : [ 
                    "8462-4"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1634688000),
            "description" : "BP Diastolic",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4fb9"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4fba"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "80",
                    "units" : ""
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4fbb"),
            "codes" : {
                "LOINC" : [ 
                    "8480-6"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1615248000),
            "description" : "BP Systolic",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4fbc"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4fbd"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "144",
                    "units" : ""
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4fbe"),
            "codes" : {
                "LOINC" : [ 
                    "8867-4"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1622073600),
            "description" : "Pulse",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4fbf"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4fc0"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "85",
                    "units" : "{H.B.}/min"
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4fc1"),
            "codes" : {
                "LOINC" : [ 
                    "8867-4"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1637625600),
            "description" : "Pulse",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4fc2"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4fc3"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "88",
                    "units" : "{H.B.}/min"
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4fe7"),
            "codes" : {
                "LOINC" : [ 
                    "29463-7"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1619481600),
            "description" : "Weight",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4fe8"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4fe9"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "111",
                    "units" : "lb"
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4fea"),
            "codes" : {
                "LOINC" : [ 
                    "29463-7"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1622073600),
            "description" : "Weight",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4feb"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4fec"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "114",
                    "units" : "lb"
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4fed"),
            "codes" : {
                "LOINC" : [ 
                    "29463-7"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1626739200),
            "description" : "Weight",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4fee"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4fef"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "115",
                    "units" : "lb"
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4ff0"),
            "codes" : {
                "LOINC" : [ 
                    "29463-7"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1629158400),
            "description" : "Weight",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4ff1"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4ff2"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "113",
                    "units" : "lb"
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4ff3"),
            "codes" : {
                "LOINC" : [ 
                    "29463-7"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1637625600),
            "description" : "Weight",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4ff4"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4ff5"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "114",
                    "units" : "lb"
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4ff6"),
            "codes" : {
                "LOINC" : [ 
                    "39156-5"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1626739200),
            "description" : "BMI",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4ff7"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4ff8"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "21.7",
                    "units" : ""
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4ff9"),
            "codes" : {
                "LOINC" : [ 
                    "8302-2"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1623974400),
            "description" : "Height",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4ffa"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4ffb"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "61",
                    "units" : "in"
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4ffc"),
            "codes" : {
                "LOINC" : [ 
                    "8302-2"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1637020800),
            "description" : "Height",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4ffd"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4ffe"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "61",
                    "units" : "in"
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4fff"),
            "codes" : {
                "LOINC" : [ 
                    "8480-6"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1637020800),
            "description" : "BP Systolic",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f5000"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f5001"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "129",
                    "units" : ""
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f5002"),
            "codes" : {
                "LOINC" : [ 
                    "8867-4"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1642464000),
            "description" : "Pulse",
            "referenceRange" : null,
            "negationInd" : false,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f5003"),
                "root" : "8e31a3ed-4649-4454-a306-b9917e013b0e",
                "extension" : null
            },
            "values" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f5004"),
                    "_type" : "PhysicalQuantityResultValue",
                    "scalar" : "74",
                    "units" : "{H.B.}/min"
                }
            ]
        }
    ],
    "encounters" : [ 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4cdf"),
            "codes" : {
                "CPT" : [ 
                    "24535-7"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Encounter",
            "time" : NumberLong(1626825600),
            "description" : "KNEE COMPLETE - Radiology interface report.",
            "qualifiers" : [],
            "admitType" : null,
            "dischargeTime" : null,
            "dischargeDisposition" : null,
            "admitTime" : null,
            "oid" : "2.16.840.1.113883.3.560.1.79",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("57a3629058989a313b000285"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a02636239049cb2c806"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4ce2"),
            "codes" : {
                "CPT" : [ 
                    "24535-7"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Encounter",
            "time" : NumberLong(1626307200),
            "description" : "PELVIS - Radiology interface report.",
            "qualifiers" : [],
            "admitType" : null,
            "dischargeTime" : null,
            "dischargeDisposition" : null,
            "admitTime" : null,
            "oid" : "2.16.840.1.113883.3.560.1.79",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("57a3629058989a313b000285"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a02636239049cb2c806"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4ce5"),
            "codes" : {
                "CPT" : [ 
                    "428191000124101"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Encounter",
            "time" : NumberLong(1637625600),
            "description" : "Current Medications Documented",
            "qualifiers" : [],
            "admitType" : null,
            "dischargeTime" : null,
            "dischargeDisposition" : null,
            "admitTime" : null,
            "oid" : "2.16.840.1.113883.3.560.1.79",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("57a3629058989a313b000285"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a02636239049cb2c806"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4ce8"),
            "codes" : {
                "CPT" : [ 
                    "99308"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Encounter",
            "time" : NumberLong(1643673600),
            "description" : "NURSING FAC CARE SUBSEQ",
            "qualifiers" : [],
            "admitType" : null,
            "dischargeTime" : null,
            "dischargeDisposition" : null,
            "admitTime" : null,
            "oid" : "2.16.840.1.113883.3.560.1.79",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("57a3629058989a313b000285"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a02636239049cb2c806"
            },
            "diagnosis" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4ce9"),
                "codes" : {
                    "ICD-10-CM" : [ 
                        "F03.90"
                    ]
                },
                "mood_code" : "EVN",
                "_type" : "EncounterDiagnosis",
                "code" : "F03.90",
                "code_system" : "ICD-10-CM",
                "codeSystemName" : "ICD-10-CM"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4cec"),
            "codes" : {
                "CPT" : [ 
                    "99335"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Encounter",
            "time" : NumberLong(1642464000),
            "description" : "DOMICIL/R-HOME VISIT EST PAT",
            "qualifiers" : [],
            "admitType" : null,
            "dischargeTime" : null,
            "dischargeDisposition" : null,
            "admitTime" : null,
            "oid" : "2.16.840.1.113883.3.560.1.79",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("57a3629058989a313b000285"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a02636239049cb2c806"
            },
            "diagnosis" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4ced"),
                "codes" : {
                    "ICD-10-CM" : [ 
                        "F03.90"
                    ]
                },
                "mood_code" : "EVN",
                "_type" : "EncounterDiagnosis",
                "code" : "F03.90",
                "code_system" : "ICD-10-CM",
                "codeSystemName" : "ICD-10-CM"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4cf0"),
            "codes" : {
                "CPT" : [ 
                    "99336"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Encounter",
            "time" : NumberLong(1625011200),
            "description" : "DOMICIL/R-HOME VISIT EST PAT",
            "qualifiers" : [],
            "admitType" : null,
            "dischargeTime" : null,
            "dischargeDisposition" : null,
            "admitTime" : null,
            "oid" : "2.16.840.1.113883.3.560.1.79",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("57a3629058989a313b000285"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a02636239049cb2c806"
            },
            "diagnosis" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4cf1"),
                "codes" : {
                    "ICD-10-CM" : [ 
                        "F03.90"
                    ]
                },
                "mood_code" : "EVN",
                "_type" : "EncounterDiagnosis",
                "code" : "F03.90",
                "code_system" : "ICD-10-CM",
                "codeSystemName" : "ICD-10-CM"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4df3"),
            "codes" : {
                "CPT" : [ 
                    "99335"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Encounter",
            "time" : NumberLong(1620432000),
            "description" : "DOMICIL/R-HOME VISIT EST PAT",
            "qualifiers" : [],
            "admitType" : null,
            "dischargeTime" : null,
            "dischargeDisposition" : null,
            "admitTime" : null,
            "oid" : "2.16.840.1.113883.3.560.1.79",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("57a3629058989a313b000285"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a02636239049cb2c806"
            },
            "diagnosis" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4df4"),
                "codes" : {
                    "ICD-10-CM" : [ 
                        "F03.90"
                    ]
                },
                "mood_code" : "EVN",
                "_type" : "EncounterDiagnosis",
                "code" : "F03.90",
                "code_system" : "ICD-10-CM",
                "codeSystemName" : "ICD-10-CM"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4df7"),
            "codes" : {
                "CPT" : [ 
                    "99335"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Encounter",
            "time" : NumberLong(1622073600),
            "description" : "DOMICIL/R-HOME VISIT EST PAT",
            "qualifiers" : [],
            "admitType" : null,
            "dischargeTime" : null,
            "dischargeDisposition" : null,
            "admitTime" : null,
            "oid" : "2.16.840.1.113883.3.560.1.79",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("57a3629058989a313b000285"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a02636239049cb2c806"
            },
            "diagnosis" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4df8"),
                "codes" : {
                    "ICD-10-CM" : [ 
                        "F03.90"
                    ]
                },
                "mood_code" : "EVN",
                "_type" : "EncounterDiagnosis",
                "code" : "F03.90",
                "code_system" : "ICD-10-CM",
                "codeSystemName" : "ICD-10-CM"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4dfb"),
            "codes" : {
                "CPT" : [ 
                    "99335"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Encounter",
            "time" : NumberLong(1634688000),
            "description" : "DOMICIL/R-HOME VISIT EST PAT",
            "qualifiers" : [],
            "admitType" : null,
            "dischargeTime" : null,
            "dischargeDisposition" : null,
            "admitTime" : null,
            "oid" : "2.16.840.1.113883.3.560.1.79",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("57a3629058989a313b000285"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a02636239049cb2c806"
            },
            "diagnosis" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4dfc"),
                "codes" : {
                    "ICD-10-CM" : [ 
                        "F03.90"
                    ]
                },
                "mood_code" : "EVN",
                "_type" : "EncounterDiagnosis",
                "code" : "F03.90",
                "code_system" : "ICD-10-CM",
                "codeSystemName" : "ICD-10-CM"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4efb"),
            "codes" : {
                "CPT" : [ 
                    "24535-7"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Encounter",
            "time" : NumberLong(1621468800),
            "description" : "CXR",
            "qualifiers" : [],
            "admitType" : null,
            "dischargeTime" : null,
            "dischargeDisposition" : null,
            "admitTime" : null,
            "oid" : "2.16.840.1.113883.3.560.1.79",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("57a3629058989a313b000285"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a02636239049cb2c806"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4efe"),
            "codes" : {
                "CPT" : [ 
                    "99335"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Encounter",
            "time" : NumberLong(1629158400),
            "description" : "DOMICIL/R-HOME VISIT EST PAT",
            "qualifiers" : [],
            "admitType" : null,
            "dischargeTime" : null,
            "dischargeDisposition" : null,
            "admitTime" : null,
            "oid" : "2.16.840.1.113883.3.560.1.79",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("57a3629058989a313b000285"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a02636239049cb2c806"
            },
            "diagnosis" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4eff"),
                "codes" : {
                    "ICD-10-CM" : [ 
                        "F03.90"
                    ]
                },
                "mood_code" : "EVN",
                "_type" : "EncounterDiagnosis",
                "code" : "F03.90",
                "code_system" : "ICD-10-CM",
                "codeSystemName" : "ICD-10-CM"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4f02"),
            "codes" : {
                "CPT" : [ 
                    "99335"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Encounter",
            "time" : NumberLong(1637625600),
            "description" : "DOMICIL/R-HOME VISIT EST PAT",
            "qualifiers" : [],
            "admitType" : null,
            "dischargeTime" : null,
            "dischargeDisposition" : null,
            "admitTime" : null,
            "oid" : "2.16.840.1.113883.3.560.1.79",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("57a3629058989a313b000285"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a02636239049cb2c806"
            },
            "diagnosis" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4f03"),
                "codes" : {
                    "ICD-10-CM" : [ 
                        "F03.90"
                    ]
                },
                "mood_code" : "EVN",
                "_type" : "EncounterDiagnosis",
                "code" : "F03.90",
                "code_system" : "ICD-10-CM",
                "codeSystemName" : "ICD-10-CM"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4f06"),
            "codes" : {
                "CPT" : [ 
                    "99328"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Encounter",
            "time" : NumberLong(1615248000),
            "description" : "DOMICIL/R-HOME VISIT NEW PAT",
            "qualifiers" : [],
            "admitType" : null,
            "dischargeTime" : null,
            "dischargeDisposition" : null,
            "admitTime" : null,
            "oid" : "2.16.840.1.113883.3.560.1.79",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("57a3629058989a313b000285"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a02636239049cb2c806"
            },
            "diagnosis" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4f07"),
                "codes" : {
                    "ICD-10-CM" : [ 
                        "F03.90"
                    ]
                },
                "mood_code" : "EVN",
                "_type" : "EncounterDiagnosis",
                "code" : "F03.90",
                "code_system" : "ICD-10-CM",
                "codeSystemName" : "ICD-10-CM"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4f0a"),
            "codes" : {
                "CPT" : [ 
                    "99335"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Encounter",
            "time" : NumberLong(1626134400),
            "description" : "DOMICIL/R-HOME VISIT EST PAT",
            "qualifiers" : [],
            "admitType" : null,
            "dischargeTime" : null,
            "dischargeDisposition" : null,
            "admitTime" : null,
            "oid" : "2.16.840.1.113883.3.560.1.79",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("57a3629058989a313b000285"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a02636239049cb2c806"
            },
            "diagnosis" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4f0b"),
                "codes" : {
                    "ICD-10-CM" : [ 
                        "F03.90"
                    ]
                },
                "mood_code" : "EVN",
                "_type" : "EncounterDiagnosis",
                "code" : "F03.90",
                "code_system" : "ICD-10-CM",
                "codeSystemName" : "ICD-10-CM"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4f0e"),
            "codes" : {
                "CPT" : [ 
                    "99335"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Encounter",
            "time" : NumberLong(1623974400),
            "description" : "DOMICIL/R-HOME VISIT EST PAT",
            "qualifiers" : [],
            "admitType" : null,
            "dischargeTime" : null,
            "dischargeDisposition" : null,
            "admitTime" : null,
            "oid" : "2.16.840.1.113883.3.560.1.79",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("57a3629058989a313b000285"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a02636239049cb2c806"
            },
            "diagnosis" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4f0f"),
                "codes" : {
                    "ICD-10-CM" : [ 
                        "F03.90"
                    ]
                },
                "mood_code" : "EVN",
                "_type" : "EncounterDiagnosis",
                "code" : "F03.90",
                "code_system" : "ICD-10-CM",
                "codeSystemName" : "ICD-10-CM"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4f12"),
            "codes" : {
                "CPT" : [ 
                    "24535-7"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Encounter",
            "time" : NumberLong(1621555200),
            "description" : "CHEST - Radiology interface report.",
            "qualifiers" : [],
            "admitType" : null,
            "dischargeTime" : null,
            "dischargeDisposition" : null,
            "admitTime" : null,
            "oid" : "2.16.840.1.113883.3.560.1.79",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("57a3629058989a313b000285"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a02636239049cb2c806"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4f15"),
            "codes" : {
                "CPT" : [ 
                    "99336"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Encounter",
            "time" : NumberLong(1627430400),
            "description" : "DOMICIL/R-HOME VISIT EST PAT",
            "qualifiers" : [],
            "admitType" : null,
            "dischargeTime" : null,
            "dischargeDisposition" : null,
            "admitTime" : null,
            "oid" : "2.16.840.1.113883.3.560.1.79",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("57a3629058989a313b000285"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a02636239049cb2c806"
            },
            "diagnosis" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4f16"),
                "codes" : {
                    "ICD-10-CM" : [ 
                        "F03.90"
                    ]
                },
                "mood_code" : "EVN",
                "_type" : "EncounterDiagnosis",
                "code" : "F03.90",
                "code_system" : "ICD-10-CM",
                "codeSystemName" : "ICD-10-CM"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4fd2"),
            "codes" : {
                "CPT" : [ 
                    "24535-7"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Encounter",
            "time" : NumberLong(1626048000),
            "description" : "imaging",
            "qualifiers" : [],
            "admitType" : null,
            "dischargeTime" : null,
            "dischargeDisposition" : null,
            "admitTime" : null,
            "oid" : "2.16.840.1.113883.3.560.1.79",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("57a3629058989a313b000285"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a02636239049cb2c806"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4fd5"),
            "codes" : {
                "CPT" : [ 
                    "24535-7"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Encounter",
            "time" : NumberLong(1626134400),
            "description" : "KNEE AP/LAT - Radiology interface report.",
            "qualifiers" : [],
            "admitType" : null,
            "dischargeTime" : null,
            "dischargeDisposition" : null,
            "admitTime" : null,
            "oid" : "2.16.840.1.113883.3.560.1.79",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("57a3629058989a313b000285"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a02636239049cb2c806"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4fd8"),
            "codes" : {
                "CPT" : [ 
                    "24535-7"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Encounter",
            "time" : NumberLong(1626220800),
            "description" : "xray / hip,pelvis",
            "qualifiers" : [],
            "admitType" : null,
            "dischargeTime" : null,
            "dischargeDisposition" : null,
            "admitTime" : null,
            "oid" : "2.16.840.1.113883.3.560.1.79",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("57a3629058989a313b000285"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a02636239049cb2c806"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4fdb"),
            "codes" : {
                "CPT" : [ 
                    "99335"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Encounter",
            "time" : NumberLong(1626739200),
            "description" : "DOMICIL/R-HOME VISIT EST PAT",
            "qualifiers" : [],
            "admitType" : null,
            "dischargeTime" : null,
            "dischargeDisposition" : null,
            "admitTime" : null,
            "oid" : "2.16.840.1.113883.3.560.1.79",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("57a3629058989a313b000285"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a02636239049cb2c806"
            },
            "diagnosis" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4fdc"),
                "codes" : {
                    "ICD-10-CM" : [ 
                        "F03.90"
                    ]
                },
                "mood_code" : "EVN",
                "_type" : "EncounterDiagnosis",
                "code" : "F03.90",
                "code_system" : "ICD-10-CM",
                "codeSystemName" : "ICD-10-CM"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4fdf"),
            "codes" : {
                "CPT" : [ 
                    "99335"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Encounter",
            "time" : NumberLong(1637020800),
            "description" : "DOMICIL/R-HOME VISIT EST PAT",
            "qualifiers" : [],
            "admitType" : null,
            "dischargeTime" : null,
            "dischargeDisposition" : null,
            "admitTime" : null,
            "oid" : "2.16.840.1.113883.3.560.1.79",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("57a3629058989a313b000285"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a02636239049cb2c806"
            },
            "diagnosis" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4fe0"),
                "codes" : {
                    "ICD-10-CM" : [ 
                        "F03.90"
                    ]
                },
                "mood_code" : "EVN",
                "_type" : "EncounterDiagnosis",
                "code" : "F03.90",
                "code_system" : "ICD-10-CM",
                "codeSystemName" : "ICD-10-CM"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4fe3"),
            "codes" : {
                "CPT" : [ 
                    "99336"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Encounter",
            "time" : NumberLong(1619481600),
            "description" : "DOMICIL/R-HOME VISIT EST PAT",
            "qualifiers" : [],
            "admitType" : null,
            "dischargeTime" : null,
            "dischargeDisposition" : null,
            "admitTime" : null,
            "oid" : "2.16.840.1.113883.3.560.1.79",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("57a3629058989a313b000285"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a02636239049cb2c806"
            },
            "diagnosis" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4fe4"),
                "codes" : {
                    "ICD-10-CM" : [ 
                        "F03.90"
                    ]
                },
                "mood_code" : "EVN",
                "_type" : "EncounterDiagnosis",
                "code" : "F03.90",
                "code_system" : "ICD-10-CM",
                "codeSystemName" : "ICD-10-CM"
            }
        }
    ],
    "procedures" : [ 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4ce0"),
            "codes" : {
                "CPT" : [ 
                    "24535-7"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Procedure",
            "start_time" : NumberLong(1626825600),
            "end_time" : NumberLong(1626825600),
            "description" : "KNEE COMPLETE - Radiology interface report.",
            "anatomical_target" : null,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "ordered", 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4ce1"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "59ca3a3a63623904b4b9337a"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4ce3"),
            "codes" : {
                "CPT" : [ 
                    "24535-7"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Procedure",
            "start_time" : NumberLong(1626307200),
            "end_time" : NumberLong(1626307200),
            "description" : "PELVIS - Radiology interface report.",
            "anatomical_target" : null,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "ordered", 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4ce4"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "59ca3a3a63623904b4b9337a"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4ce6"),
            "codes" : {
                "CPT" : [ 
                    "428191000124101"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Procedure",
            "start_time" : NumberLong(1637625600),
            "end_time" : NumberLong(1637625600),
            "description" : "Current Medications Documented",
            "anatomical_target" : null,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "ordered", 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4ce7"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "59ca3a3a63623904b4b9337a"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4cea"),
            "codes" : {
                "CPT" : [ 
                    "99308"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Procedure",
            "start_time" : NumberLong(1643673600),
            "end_time" : NumberLong(1643673600),
            "description" : "NURSING FAC CARE SUBSEQ",
            "anatomical_target" : null,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "ordered", 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4ceb"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "59ca3a3a63623904b4b9337a"
            },
            "diagnosis" : {
                "code" : "F03.90",
                "code_system" : "ICD-10-CM"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4cee"),
            "codes" : {
                "CPT" : [ 
                    "99335"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Procedure",
            "start_time" : NumberLong(1642464000),
            "end_time" : NumberLong(1642464000),
            "description" : "DOMICIL/R-HOME VISIT EST PAT",
            "anatomical_target" : null,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "ordered", 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4cef"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "59ca3a3a63623904b4b9337a"
            },
            "diagnosis" : {
                "code" : "F03.90",
                "code_system" : "ICD-10-CM"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4cf2"),
            "codes" : {
                "CPT" : [ 
                    "99336"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Procedure",
            "start_time" : NumberLong(1625011200),
            "end_time" : NumberLong(1625011200),
            "description" : "DOMICIL/R-HOME VISIT EST PAT",
            "anatomical_target" : null,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "ordered", 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4cf3"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "59ca3a3a63623904b4b9337a"
            },
            "diagnosis" : {
                "code" : "F03.90",
                "code_system" : "ICD-10-CM"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4df5"),
            "codes" : {
                "CPT" : [ 
                    "99335"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Procedure",
            "start_time" : NumberLong(1620432000),
            "end_time" : NumberLong(1620432000),
            "description" : "DOMICIL/R-HOME VISIT EST PAT",
            "anatomical_target" : null,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "ordered", 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4df6"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "59ca3a3a63623904b4b9337a"
            },
            "diagnosis" : {
                "code" : "F03.90",
                "code_system" : "ICD-10-CM"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4df9"),
            "codes" : {
                "CPT" : [ 
                    "99335"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Procedure",
            "start_time" : NumberLong(1622073600),
            "end_time" : NumberLong(1622073600),
            "description" : "DOMICIL/R-HOME VISIT EST PAT",
            "anatomical_target" : null,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "ordered", 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4dfa"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "59ca3a3a63623904b4b9337a"
            },
            "diagnosis" : {
                "code" : "F03.90",
                "code_system" : "ICD-10-CM"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4dfd"),
            "codes" : {
                "CPT" : [ 
                    "99335"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Procedure",
            "start_time" : NumberLong(1634688000),
            "end_time" : NumberLong(1634688000),
            "description" : "DOMICIL/R-HOME VISIT EST PAT",
            "anatomical_target" : null,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "ordered", 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4dfe"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "59ca3a3a63623904b4b9337a"
            },
            "diagnosis" : {
                "code" : "F03.90",
                "code_system" : "ICD-10-CM"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4efc"),
            "codes" : {
                "CPT" : [ 
                    "24535-7"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Procedure",
            "start_time" : NumberLong(1621468800),
            "end_time" : NumberLong(1621468800),
            "description" : "CXR",
            "anatomical_target" : null,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "ordered", 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4efd"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "59ca3a3a63623904b4b9337a"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4f00"),
            "codes" : {
                "CPT" : [ 
                    "99335"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Procedure",
            "start_time" : NumberLong(1629158400),
            "end_time" : NumberLong(1629158400),
            "description" : "DOMICIL/R-HOME VISIT EST PAT",
            "anatomical_target" : null,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "ordered", 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4f01"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "59ca3a3a63623904b4b9337a"
            },
            "diagnosis" : {
                "code" : "F03.90",
                "code_system" : "ICD-10-CM"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4f04"),
            "codes" : {
                "CPT" : [ 
                    "99335"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Procedure",
            "start_time" : NumberLong(1637625600),
            "end_time" : NumberLong(1637625600),
            "description" : "DOMICIL/R-HOME VISIT EST PAT",
            "anatomical_target" : null,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "ordered", 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4f05"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "59ca3a3a63623904b4b9337a"
            },
            "diagnosis" : {
                "code" : "F03.90",
                "code_system" : "ICD-10-CM"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4f08"),
            "codes" : {
                "CPT" : [ 
                    "99328"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Procedure",
            "start_time" : NumberLong(1615248000),
            "end_time" : NumberLong(1615248000),
            "description" : "DOMICIL/R-HOME VISIT NEW PAT",
            "anatomical_target" : null,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "ordered", 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4f09"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "59ca3a3a63623904b4b9337a"
            },
            "diagnosis" : {
                "code" : "F03.90",
                "code_system" : "ICD-10-CM"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4f0c"),
            "codes" : {
                "CPT" : [ 
                    "99335"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Procedure",
            "start_time" : NumberLong(1626134400),
            "end_time" : NumberLong(1626134400),
            "description" : "DOMICIL/R-HOME VISIT EST PAT",
            "anatomical_target" : null,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "ordered", 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4f0d"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "59ca3a3a63623904b4b9337a"
            },
            "diagnosis" : {
                "code" : "F03.90",
                "code_system" : "ICD-10-CM"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4f10"),
            "codes" : {
                "CPT" : [ 
                    "99335"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Procedure",
            "start_time" : NumberLong(1623974400),
            "end_time" : NumberLong(1623974400),
            "description" : "DOMICIL/R-HOME VISIT EST PAT",
            "anatomical_target" : null,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "ordered", 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4f11"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "59ca3a3a63623904b4b9337a"
            },
            "diagnosis" : {
                "code" : "F03.90",
                "code_system" : "ICD-10-CM"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4f13"),
            "codes" : {
                "CPT" : [ 
                    "24535-7"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Procedure",
            "start_time" : NumberLong(1621555200),
            "end_time" : NumberLong(1621555200),
            "description" : "CHEST - Radiology interface report.",
            "anatomical_target" : null,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "ordered", 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4f14"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "59ca3a3a63623904b4b9337a"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4f17"),
            "codes" : {
                "CPT" : [ 
                    "99336"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Procedure",
            "start_time" : NumberLong(1627430400),
            "end_time" : NumberLong(1627430400),
            "description" : "DOMICIL/R-HOME VISIT EST PAT",
            "anatomical_target" : null,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "ordered", 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4f18"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "59ca3a3a63623904b4b9337a"
            },
            "diagnosis" : {
                "code" : "F03.90",
                "code_system" : "ICD-10-CM"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4fd3"),
            "codes" : {
                "CPT" : [ 
                    "24535-7"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Procedure",
            "start_time" : NumberLong(1626048000),
            "end_time" : NumberLong(1626048000),
            "description" : "imaging",
            "anatomical_target" : null,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "ordered", 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4fd4"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "59ca3a3a63623904b4b9337a"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4fd6"),
            "codes" : {
                "CPT" : [ 
                    "24535-7"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Procedure",
            "start_time" : NumberLong(1626134400),
            "end_time" : NumberLong(1626134400),
            "description" : "KNEE AP/LAT - Radiology interface report.",
            "anatomical_target" : null,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "ordered", 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4fd7"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "59ca3a3a63623904b4b9337a"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4fd9"),
            "codes" : {
                "CPT" : [ 
                    "24535-7"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Procedure",
            "start_time" : NumberLong(1626220800),
            "end_time" : NumberLong(1626220800),
            "description" : "xray / hip,pelvis",
            "anatomical_target" : null,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "ordered", 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4fda"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "59ca3a3a63623904b4b9337a"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4fdd"),
            "codes" : {
                "CPT" : [ 
                    "99335"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Procedure",
            "start_time" : NumberLong(1626739200),
            "end_time" : NumberLong(1626739200),
            "description" : "DOMICIL/R-HOME VISIT EST PAT",
            "anatomical_target" : null,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "ordered", 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4fde"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "59ca3a3a63623904b4b9337a"
            },
            "diagnosis" : {
                "code" : "F03.90",
                "code_system" : "ICD-10-CM"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4fe1"),
            "codes" : {
                "CPT" : [ 
                    "99335"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Procedure",
            "start_time" : NumberLong(1637020800),
            "end_time" : NumberLong(1637020800),
            "description" : "DOMICIL/R-HOME VISIT EST PAT",
            "anatomical_target" : null,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "ordered", 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4fe2"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "59ca3a3a63623904b4b9337a"
            },
            "diagnosis" : {
                "code" : "F03.90",
                "code_system" : "ICD-10-CM"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4fe5"),
            "codes" : {
                "CPT" : [ 
                    "99336"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Procedure",
            "start_time" : NumberLong(1619481600),
            "end_time" : NumberLong(1619481600),
            "description" : "DOMICIL/R-HOME VISIT EST PAT",
            "anatomical_target" : null,
            "oid" : "2.16.840.1.113883.3.560.1.57",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "ordered", 
                    "performed"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4fe6"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "59ca3a3a63623904b4b9337a"
            },
            "diagnosis" : {
                "code" : "F03.90",
                "code_system" : "ICD-10-CM"
            }
        }
    ],
    "conditions" : [ 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4cf4"),
            "codes" : {
                "SNOMED-CT" : [ 
                    "22325002"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1615248000),
            "end_time" : null,
            "description" : "Gait difficulty",
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4cf5"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4cf6"),
            "codes" : {
                "SNOMED-CT" : [ 
                    "709044004"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1619481600),
            "end_time" : null,
            "description" : "Chronic kidney disease",
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4cf7"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4cf8"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "E11.9"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1620432000),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4cf9"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4cfa"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "E78.5"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1625011200),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4cfb"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4cfc"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "E78.5"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1615248000),
            "end_time" : null,
            "description" : "Hyperlipidemia",
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4cfd"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4cfe"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "F03.90"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1622073600),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4cff"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d00"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "F03.90"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1637625600),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d01"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d02"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "F03.90"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1619481600),
            "end_time" : null,
            "description" : "AdvancedIllness",
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d03"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d04"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "F03.90"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1623974400),
            "end_time" : null,
            "description" : "AdvancedIllness",
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d05"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d06"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "F03.90"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1626739200),
            "end_time" : null,
            "description" : "AdvancedIllness",
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d07"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d08"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "F03.90"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1637020800),
            "end_time" : null,
            "description" : "AdvancedIllness",
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d09"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d0a"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "F03.90"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1615248000),
            "end_time" : null,
            "description" : "Dementia",
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d0b"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d0c"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "I10"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1619481600),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d0d"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d0e"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "I10"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1625011200),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d0f"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d10"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "I10"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1626739200),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d11"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d12"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "I10"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1615248000),
            "end_time" : null,
            "description" : "Hypertension",
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d13"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d14"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "K21.9"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1627430400),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d15"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d16"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "K21.9"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1634688000),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d17"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d18"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "K21.9"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1642464000),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d19"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d1a"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "N18.9"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1643673600),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d1b"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d1c"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "R13.10"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1620432000),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d1d"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d1e"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "Z86.73"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1637625600),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d1f"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d20"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "E11.9"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1626134400),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d21"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d22"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "E53.8"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1626134400),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d23"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d24"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "E78.5"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1620432000),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d25"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d26"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "F03.90"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1625011200),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d27"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d28"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "F03.90"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1627430400),
            "end_time" : null,
            "description" : "AdvancedIllness",
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d29"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d2a"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "K21.9"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1622073600),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d2b"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d2c"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "K21.9"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1643673600),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d2d"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d2e"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "M25.562"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1643673600),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d2f"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d30"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "M54.5"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1626739200),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d31"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d32"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "M54.5"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1637020800),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d33"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d34"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "N18.9"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1627430400),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d35"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d36"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "N18.9"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1634688000),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d37"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d38"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "R13.10"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1619481600),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d39"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d3a"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "R13.10"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1625011200),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d3b"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d3c"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "R26.9"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1623974400),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d3d"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d3e"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "R26.9"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1626739200),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d3f"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d40"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "R26.9"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1637020800),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d41"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d42"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "Z86.73"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1619481600),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d43"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d44"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "Z86.73"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1625011200),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d45"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d46"),
            "codes" : {
                "SNOMED-CT" : [ 
                    "235595009"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1615248000),
            "end_time" : null,
            "description" : "Gastro-esophageal reflux disease",
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d47"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d48"),
            "codes" : {
                "SNOMED-CT" : [ 
                    "275526006"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1615248000),
            "end_time" : null,
            "description" : "H/O: CVA",
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d49"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d4a"),
            "codes" : {
                "SNOMED-CT" : [ 
                    "55822004"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1615248000),
            "end_time" : null,
            "description" : "Hyperlipidemia",
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d4b"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d4c"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "E11.9"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1627430400),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d4d"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d4e"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "E11.9"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1629158400),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d4f"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d50"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "E11.9"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1634688000),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d51"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d52"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "E11.9"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1642464000),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d53"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d54"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "E53.8"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1627430400),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d55"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d56"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "E53.8"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1629158400),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d57"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d58"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "E53.8"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1634688000),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d59"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d5a"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "E53.8"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1642464000),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d5b"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d5c"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "E78.5"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1619481600),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d5d"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d5e"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "E78.5"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1623974400),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d5f"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d60"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "E78.5"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1626739200),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d61"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d62"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "E78.5"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1637020800),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d63"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d64"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "F03.90"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1620432000),
            "end_time" : null,
            "description" : "AdvancedIllness",
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d65"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d66"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "K21.9"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1626134400),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d67"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d68"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "K21.9"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1629158400),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d69"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d6a"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "M25.562"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1629158400),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d6b"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d6c"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "M25.562"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1642464000),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d6d"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d6e"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "N18.9"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1620432000),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d6f"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d70"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "R13.10"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1623974400),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d71"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d72"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "R13.10"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1626739200),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d73"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d74"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "R13.10"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1637020800),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d75"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d76"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "R26.9"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1620432000),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d77"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d78"),
            "codes" : {
                "SNOMED-CT" : [ 
                    "49727002"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1622073600),
            "end_time" : null,
            "description" : "Cough",
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d79"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d7a"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "E78.5"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1626134400),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d7b"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d7c"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "E78.5"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1643673600),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d7d"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d7e"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "F03.90"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1627430400),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d7f"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d80"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "F03.90"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1622073600),
            "end_time" : null,
            "description" : "AdvancedIllness",
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d81"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d82"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "F03.90"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1637625600),
            "end_time" : null,
            "description" : "AdvancedIllness",
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d83"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d84"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "I10"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1629158400),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d85"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d86"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "I10"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1634688000),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d87"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d88"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "I10"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1642464000),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d89"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d8a"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "K21.9"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1619481600),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d8b"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d8c"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "K21.9"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1625011200),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d8d"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d8e"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "M54.5"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1629158400),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d8f"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d90"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "M54.5"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1642464000),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d91"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d92"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "M54.5"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1626134400),
            "end_time" : null,
            "description" : "Low back pain",
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d93"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d94"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "N18.9"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1622073600),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d95"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d96"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "N18.9"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1637625600),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d97"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d98"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "R05"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1622073600),
            "end_time" : null,
            "description" : "Cough",
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d99"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d9a"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "R13.10"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1643673600),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d9b"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d9c"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "R13.10"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1615248000),
            "end_time" : null,
            "description" : "Dysphagia",
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d9d"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4d9e"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "R26.9"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1622073600),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4d9f"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4da0"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "R26.9"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1637625600),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4da1"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4da2"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "Z86.73"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1627430400),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4da3"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4da4"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "Z86.73"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1634688000),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4da5"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4da6"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "Z86.73"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1642464000),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4da7"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4da8"),
            "codes" : {
                "SNOMED-CT" : [ 
                    "190634004"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1619481600),
            "end_time" : null,
            "description" : "Vitamin B12 deficiency",
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4da9"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4daa"),
            "codes" : {
                "SNOMED-CT" : [ 
                    "44054006"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1615248000),
            "end_time" : null,
            "description" : "Diabetes mellitus type 2",
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4dab"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4dac"),
            "codes" : {
                "SNOMED-CT" : [ 
                    "52448006"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1615248000),
            "end_time" : null,
            "description" : "Dementia",
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4dad"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4dae"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "E11.9"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1619481600),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4daf"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4db0"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "E11.9"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1625011200),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4db1"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4db2"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "E11.9"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1615248000),
            "end_time" : null,
            "description" : "Diabetes mellitus type 2",
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4db3"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4db4"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "E53.8"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1625011200),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4db5"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4db6"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "E53.8"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1619481600),
            "end_time" : null,
            "description" : "Vitamin B12 deficiency",
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4db7"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4db8"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "E78.5"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1622073600),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4db9"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4dba"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "E78.5"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1637625600),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4dbb"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4dbc"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "F03.90"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1629158400),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4dbd"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4dbe"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "F03.90"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1634688000),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4dbf"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4dc0"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "F03.90"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1642464000),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4dc1"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4dc2"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "I10"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1620432000),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4dc3"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4dc4"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "I10"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1627430400),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4dc5"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4dc6"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "K21.9"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1623974400),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4dc7"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4dc8"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "K21.9"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1626739200),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4dc9"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4dca"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "K21.9"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1637020800),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4dcb"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4dcc"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "M25.562"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1637020800),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4dcd"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4dce"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "M54.5"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1643673600),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4dcf"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4dd0"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "N18.9"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1619481600),
            "end_time" : null,
            "description" : "Chronic kidney disease",
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4dd1"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4dd2"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "R13.10"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1626134400),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4dd3"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4dd4"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "R13.10"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1629158400),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4dd5"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4dd6"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "R26.9"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1643673600),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4dd7"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4dd8"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "Z86.73"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1626134400),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4dd9"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4dda"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "Z86.73"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1629158400),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4ddb"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4ddc"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "Z86.73"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1615248000),
            "end_time" : null,
            "description" : "H/O: CVA",
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4ddd"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e14"),
            "codes" : {
                "SNOMED-CT" : [ 
                    "279039007"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1626134400),
            "end_time" : null,
            "description" : "Low back pain",
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e15"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e16"),
            "codes" : {
                "SNOMED-CT" : [ 
                    "40739000"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1615248000),
            "end_time" : null,
            "description" : "Dysphagia",
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e17"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e18"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "E11.9"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1622073600),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e19"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e1a"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "E11.9"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1637625600),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e1b"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e1c"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "E11.9"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1643673600),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e1d"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e1e"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "E53.8"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1623974400),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e1f"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e20"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "E53.8"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1626739200),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e21"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e22"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "E53.8"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1637020800),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e23"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e24"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "E78.5"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1627430400),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e25"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e26"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "F03.90"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1619481600),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e27"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e28"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "F03.90"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1623974400),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e29"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e2a"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "F03.90"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1626739200),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e2b"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e2c"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "F03.90"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1637020800),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e2d"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e2e"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "F03.90"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1626134400),
            "end_time" : null,
            "description" : "AdvancedIllness",
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e2f"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e30"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "F03.90"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1629158400),
            "end_time" : null,
            "description" : "AdvancedIllness",
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e31"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e32"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "F03.90"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1634688000),
            "end_time" : null,
            "description" : "AdvancedIllness",
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e33"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e34"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "F03.90"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1642464000),
            "end_time" : null,
            "description" : "AdvancedIllness",
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e35"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e36"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "I10"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1622073600),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e37"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e38"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "I10"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1637625600),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e39"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e3a"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "K21.9"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1637625600),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e3b"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e3c"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "N18.9"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1625011200),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e3d"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e3e"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "R26.9"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1626134400),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e3f"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e40"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "R26.9"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1629158400),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e41"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e42"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "R26.9"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1615248000),
            "end_time" : null,
            "description" : "Gait difficulty",
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e43"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e44"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "Z86.73"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1623974400),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e45"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e46"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "Z86.73"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1626739200),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e47"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e48"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "Z86.73"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1637020800),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e49"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e68"),
            "codes" : {
                "SNOMED-CT" : [ 
                    "38341003"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1615248000),
            "end_time" : null,
            "description" : "Hypertension",
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e69"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e6a"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "E11.9"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1623974400),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e6b"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e6c"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "E11.9"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1626739200),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e6d"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e6e"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "E11.9"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1637020800),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e6f"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e70"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "E53.8"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1622073600),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e71"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e72"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "E53.8"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1637625600),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e73"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e74"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "E53.8"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1643673600),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e75"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e76"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "F03.90"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1626134400),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e77"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e78"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "F03.90"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1643673600),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e79"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e7a"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "F03.90"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1615248000),
            "end_time" : null,
            "description" : "AdvancedIllness",
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e7b"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e7c"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "F03.90"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1625011200),
            "end_time" : null,
            "description" : "AdvancedIllness",
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e7d"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e7e"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "I10"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1623974400),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e7f"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e80"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "I10"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1637020800),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e81"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e82"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "K21.9"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1620432000),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e83"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e84"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "K21.9"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1615248000),
            "end_time" : null,
            "description" : "Gastro-esophageal reflux disease",
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e85"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e86"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "M25.562"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1637625600),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e87"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e88"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "M25.562"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1626739200),
            "end_time" : null,
            "description" : "Pain in left knee",
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e89"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e8a"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "M54.5"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1637625600),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e8b"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e8c"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "N18.9"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1626134400),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e8d"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e8e"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "N18.9"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1629158400),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e8f"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e90"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "N18.9"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1642464000),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e91"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e92"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "R13.10"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1627430400),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e93"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e94"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "R13.10"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1634688000),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e95"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e96"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "R13.10"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1642464000),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e97"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e98"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "R26.9"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1619481600),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e99"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e9a"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "R26.9"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1625011200),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e9b"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e9c"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "Z86.73"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1622073600),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e9d"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4e9e"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "Z86.73"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1643673600),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4e9f"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4ea0"),
            "codes" : {
                "SNOMED-CT" : [ 
                    "316791000119102"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1626739200),
            "end_time" : null,
            "description" : "Pain in left knee",
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4ea1"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4ea2"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "E53.8"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1620432000),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4ea3"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4ea4"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "E78.5"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1629158400),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4ea5"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4ea6"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "E78.5"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1634688000),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4ea7"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4ea8"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "E78.5"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1642464000),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4ea9"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4eaa"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "F03.90"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1620432000),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4eab"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4eac"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "F03.90"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1643673600),
            "end_time" : null,
            "description" : "AdvancedIllness",
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4ead"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4eae"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "I10"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1626134400),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4eaf"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4eb0"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "I10"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1643673600),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4eb1"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4eb2"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "M25.562"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1627430400),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4eb3"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4eb4"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "M25.562"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1634688000),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4eb5"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4eb6"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "M54.5"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1627430400),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4eb7"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4eb8"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "N18.9"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1623974400),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4eb9"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4eba"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "N18.9"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1626739200),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4ebb"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4ebc"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "N18.9"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1637020800),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4ebd"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4ebe"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "R13.10"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1622073600),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4ebf"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4ec0"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "R13.10"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1637625600),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4ec1"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4ec2"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "R26.9"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1627430400),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4ec3"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4ec4"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "R26.9"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1634688000),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4ec5"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4ec6"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "R26.9"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1642464000),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4ec7"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4ec8"),
            "codes" : {
                "ICD-10-CM" : [ 
                    "Z86.73"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Condition",
            "start_time" : NumberLong(1620432000),
            "end_time" : null,
            "description" : null,
            "oid" : "2.16.840.1.113883.3.560.1.2",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4ec9"),
                "root" : "1.3.6.1.4.1.115",
                "extension" : "57876a17636239049cb2d846"
            }
        }
    ],
    "immunizations" : [],
    "results" : [ 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4f3a"),
            "codes" : {
                "LOINC" : [ 
                    "24323-8"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1643587200),
            "description" : "folate, cmp, hgba1c, cbc, vitamin b12, tsh",
            "interpretation" : {
                "code" : "H",
                "codeSystem" : "HITSP C80 Observation Status"
            },
            "referenceRange" : "",
            "oid" : "2.16.840.1.113883.3.560.1.5",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed", 
                    "ordered"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4f3b"),
                "root" : null,
                "extension" : null
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4f6f"),
            "codes" : {
                "LOINC" : [ 
                    "24323-8"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1635465600),
            "description" : "cmp hgba1c",
            "interpretation" : {
                "code" : "H",
                "codeSystem" : "HITSP C80 Observation Status"
            },
            "referenceRange" : "",
            "oid" : "2.16.840.1.113883.3.560.1.5",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed", 
                    "ordered"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4f70"),
                "root" : null,
                "extension" : null
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4f71"),
            "codes" : {
                "LOINC" : [ 
                    "58410-2"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "LabResult",
            "time" : NumberLong(1643587200),
            "description" : "folate, cmp, hgba1c, cbc, vitamin b12, tsh",
            "interpretation" : {
                "code" : "H",
                "codeSystem" : "HITSP C80 Observation Status"
            },
            "referenceRange" : "",
            "oid" : "2.16.840.1.113883.3.560.1.5",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "performed", 
                    "ordered"
                ]
            },
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4f72"),
                "root" : null,
                "extension" : null
            }
        }
    ],
    "medications" : [ 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4dde"),
            "codes" : {
                "RxNorm" : [ 
                    "197380"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Medication",
            "start_time" : NumberLong(1621468800),
            "end_time" : null,
            "description" : "atenolol 25 mg oral tablet",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "route" : null,
            "dose" : {
                "unit" : "",
                "value" : 1.0
            },
            "anatomical_approach" : null,
            "productForm" : null,
            "deliveryMethod" : null,
            "typeOfMedication" : null,
            "indication" : null,
            "vehicle" : null,
            "administrationTiming" : {
                "institutionSpecified" : true,
                "period" : {
                    "unit" : "d",
                    "value" : 0.0
                }
            },
            "allowedAdministrations" : 5.0,
            "freeTextSig" : "",
            "oid" : "2.16.840.1.113883.3.560.1.13",
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4ddf"),
                "root" : null,
                "extension" : null
            },
            "orderInformation" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4de0"),
                    "orderNumber" : null,
                    "fills" : "4",
                    "quantityOrdered" : {
                        "unit" : null,
                        "value" : "0"
                    }
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4de1"),
            "codes" : {
                "RxNorm" : [ 
                    "197380"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Medication",
            "end_time" : NumberLong(1621468800),
            "start_time" : NumberLong(1621468800),
            "description" : "atenolol 25 mg oral tablet",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "ordered"
                ]
            },
            "anatomical_approach" : null,
            "productForm" : null,
            "deliveryMethod" : null,
            "typeOfMedication" : null,
            "indication" : null,
            "vehicle" : null,
            "administrationTiming" : {
                "institutionSpecified" : true,
                "period" : {
                    "unit" : "d",
                    "value" : 0.0
                }
            },
            "route" : null,
            "dose" : {
                "unit" : "",
                "value" : 1.0
            },
            "allowedAdministrations" : 5.0,
            "freeTextSig" : "",
            "oid" : "2.16.840.1.113883.3.560.1.17",
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4de2"),
                "root" : null,
                "extension" : null
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4de3"),
            "codes" : {
                "RxNorm" : [ 
                    "197380"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Medication",
            "end_time" : NumberLong(1621468800),
            "start_time" : NumberLong(1621468800),
            "description" : "atenolol 25 mg oral tablet",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "dispensed"
                ]
            },
            "route" : null,
            "dose" : null,
            "anatomical_approach" : null,
            "productForm" : null,
            "deliveryMethod" : null,
            "typeOfMedication" : null,
            "indication" : null,
            "vehicle" : null,
            "freeTextSig" : null,
            "oid" : "2.16.840.1.113883.3.560.1.8",
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4de4"),
                "root" : null,
                "extension" : null
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4de5"),
            "codes" : {
                "RxNorm" : [ 
                    "198861"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Medication",
            "start_time" : NumberLong(1635897600),
            "end_time" : NumberLong(1635897600),
            "description" : "sodium bicarbonate 650 mg oral tablet",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "route" : null,
            "dose" : {
                "unit" : "",
                "value" : 1.0
            },
            "anatomical_approach" : null,
            "productForm" : null,
            "deliveryMethod" : null,
            "typeOfMedication" : null,
            "indication" : null,
            "vehicle" : null,
            "administrationTiming" : {
                "institutionSpecified" : true,
                "period" : {
                    "unit" : "d",
                    "value" : 60.0
                }
            },
            "allowedAdministrations" : 4.0,
            "freeTextSig" : "",
            "oid" : "2.16.840.1.113883.3.560.1.13",
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4de6"),
                "root" : null,
                "extension" : null
            },
            "orderInformation" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4de7"),
                    "orderNumber" : null,
                    "fills" : "3",
                    "quantityOrdered" : {
                        "unit" : null,
                        "value" : "60"
                    }
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4de8"),
            "codes" : {
                "RxNorm" : [ 
                    "198861"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Medication",
            "end_time" : NumberLong(1635897600),
            "start_time" : NumberLong(1635897600),
            "description" : "sodium bicarbonate 650 mg oral tablet",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "ordered"
                ]
            },
            "anatomical_approach" : null,
            "productForm" : null,
            "deliveryMethod" : null,
            "typeOfMedication" : null,
            "indication" : null,
            "vehicle" : null,
            "administrationTiming" : {
                "institutionSpecified" : true,
                "period" : {
                    "unit" : "d",
                    "value" : 60.0
                }
            },
            "route" : null,
            "dose" : {
                "unit" : "",
                "value" : 1.0
            },
            "allowedAdministrations" : 4.0,
            "freeTextSig" : "",
            "oid" : "2.16.840.1.113883.3.560.1.17",
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4de9"),
                "root" : null,
                "extension" : null
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4dea"),
            "codes" : {
                "RxNorm" : [ 
                    "198861"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Medication",
            "end_time" : NumberLong(1635897600),
            "start_time" : NumberLong(1635897600),
            "description" : "sodium bicarbonate 650 mg oral tablet",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "dispensed"
                ]
            },
            "route" : null,
            "dose" : null,
            "anatomical_approach" : null,
            "productForm" : null,
            "deliveryMethod" : null,
            "typeOfMedication" : null,
            "indication" : null,
            "vehicle" : null,
            "freeTextSig" : null,
            "oid" : "2.16.840.1.113883.3.560.1.8",
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4deb"),
                "root" : null,
                "extension" : null
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4dec"),
            "codes" : {
                "RxNorm" : [ 
                    "861007"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Medication",
            "start_time" : NumberLong(1643673600),
            "end_time" : null,
            "description" : "metFORMIN 500 mg oral tablet",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "route" : null,
            "dose" : {
                "unit" : "",
                "value" : 1.0
            },
            "anatomical_approach" : null,
            "productForm" : null,
            "deliveryMethod" : null,
            "typeOfMedication" : null,
            "indication" : null,
            "vehicle" : null,
            "administrationTiming" : {
                "institutionSpecified" : true,
                "period" : {
                    "unit" : "d",
                    "value" : 60.0
                }
            },
            "allowedAdministrations" : 3.0,
            "freeTextSig" : "",
            "oid" : "2.16.840.1.113883.3.560.1.13",
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4ded"),
                "root" : null,
                "extension" : null
            },
            "orderInformation" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4dee"),
                    "orderNumber" : null,
                    "fills" : "2",
                    "quantityOrdered" : {
                        "unit" : null,
                        "value" : "60"
                    }
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4def"),
            "codes" : {
                "RxNorm" : [ 
                    "861007"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Medication",
            "end_time" : NumberLong(1643673600),
            "start_time" : NumberLong(1643673600),
            "description" : "metFORMIN 500 mg oral tablet",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "ordered"
                ]
            },
            "anatomical_approach" : null,
            "productForm" : null,
            "deliveryMethod" : null,
            "typeOfMedication" : null,
            "indication" : null,
            "vehicle" : null,
            "administrationTiming" : {
                "institutionSpecified" : true,
                "period" : {
                    "unit" : "d",
                    "value" : 60.0
                }
            },
            "route" : null,
            "dose" : {
                "unit" : "",
                "value" : 1.0
            },
            "allowedAdministrations" : 3.0,
            "freeTextSig" : "",
            "oid" : "2.16.840.1.113883.3.560.1.17",
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4df0"),
                "root" : null,
                "extension" : null
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4df1"),
            "codes" : {
                "RxNorm" : [ 
                    "861007"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Medication",
            "end_time" : NumberLong(1643673600),
            "start_time" : NumberLong(1643673600),
            "description" : "metFORMIN 500 mg oral tablet",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "dispensed"
                ]
            },
            "route" : null,
            "dose" : null,
            "anatomical_approach" : null,
            "productForm" : null,
            "deliveryMethod" : null,
            "typeOfMedication" : null,
            "indication" : null,
            "vehicle" : null,
            "freeTextSig" : null,
            "oid" : "2.16.840.1.113883.3.560.1.8",
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4df2"),
                "root" : null,
                "extension" : null
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4eca"),
            "codes" : {
                "RxNorm" : [ 
                    "835603"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Medication",
            "start_time" : NumberLong(1626739200),
            "end_time" : null,
            "description" : "traMADol 50 mg oral tablet",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "route" : null,
            "dose" : {
                "unit" : "",
                "value" : 1.0
            },
            "anatomical_approach" : null,
            "productForm" : null,
            "deliveryMethod" : null,
            "typeOfMedication" : null,
            "indication" : null,
            "vehicle" : null,
            "administrationTiming" : {
                "institutionSpecified" : true,
                "period" : {
                    "unit" : "d",
                    "value" : 30.0
                }
            },
            "allowedAdministrations" : 6.0,
            "freeTextSig" : "",
            "oid" : "2.16.840.1.113883.3.560.1.13",
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4ecb"),
                "root" : null,
                "extension" : null
            },
            "orderInformation" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4ecc"),
                    "orderNumber" : null,
                    "fills" : "5",
                    "quantityOrdered" : {
                        "unit" : null,
                        "value" : "30"
                    }
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4ecd"),
            "codes" : {
                "RxNorm" : [ 
                    "835603"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Medication",
            "end_time" : NumberLong(1626739200),
            "start_time" : NumberLong(1626739200),
            "description" : "traMADol 50 mg oral tablet",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "ordered"
                ]
            },
            "anatomical_approach" : null,
            "productForm" : null,
            "deliveryMethod" : null,
            "typeOfMedication" : null,
            "indication" : null,
            "vehicle" : null,
            "administrationTiming" : {
                "institutionSpecified" : true,
                "period" : {
                    "unit" : "d",
                    "value" : 30.0
                }
            },
            "route" : null,
            "dose" : {
                "unit" : "",
                "value" : 1.0
            },
            "allowedAdministrations" : 6.0,
            "freeTextSig" : "",
            "oid" : "2.16.840.1.113883.3.560.1.17",
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4ece"),
                "root" : null,
                "extension" : null
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4ecf"),
            "codes" : {
                "RxNorm" : [ 
                    "835603"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Medication",
            "end_time" : NumberLong(1626739200),
            "start_time" : NumberLong(1626739200),
            "description" : "traMADol 50 mg oral tablet",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "dispensed"
                ]
            },
            "route" : null,
            "dose" : null,
            "anatomical_approach" : null,
            "productForm" : null,
            "deliveryMethod" : null,
            "typeOfMedication" : null,
            "indication" : null,
            "vehicle" : null,
            "freeTextSig" : null,
            "oid" : "2.16.840.1.113883.3.560.1.8",
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4ed0"),
                "root" : null,
                "extension" : null
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4ed1"),
            "codes" : {
                "RxNorm" : [ 
                    "198440"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Medication",
            "start_time" : NumberLong(1637625600),
            "end_time" : NumberLong(1637625600),
            "description" : "acetaminophen 500 mg oral tablet",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "route" : null,
            "dose" : {
                "unit" : "",
                "value" : 1.0
            },
            "anatomical_approach" : null,
            "productForm" : null,
            "deliveryMethod" : null,
            "typeOfMedication" : null,
            "indication" : null,
            "vehicle" : null,
            "administrationTiming" : {
                "institutionSpecified" : true,
                "period" : {
                    "unit" : "d",
                    "value" : 0.0
                }
            },
            "allowedAdministrations" : 1.0,
            "freeTextSig" : "",
            "oid" : "2.16.840.1.113883.3.560.1.13",
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4ed2"),
                "root" : null,
                "extension" : null
            },
            "orderInformation" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4ed3"),
                    "orderNumber" : null,
                    "fills" : "0",
                    "quantityOrdered" : {
                        "unit" : null,
                        "value" : "0"
                    }
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4ed4"),
            "codes" : {
                "RxNorm" : [ 
                    "198440"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Medication",
            "end_time" : NumberLong(1637625600),
            "start_time" : NumberLong(1637625600),
            "description" : "acetaminophen 500 mg oral tablet",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "ordered"
                ]
            },
            "anatomical_approach" : null,
            "productForm" : null,
            "deliveryMethod" : null,
            "typeOfMedication" : null,
            "indication" : null,
            "vehicle" : null,
            "administrationTiming" : {
                "institutionSpecified" : true,
                "period" : {
                    "unit" : "d",
                    "value" : 0.0
                }
            },
            "route" : null,
            "dose" : {
                "unit" : "",
                "value" : 1.0
            },
            "allowedAdministrations" : 1.0,
            "freeTextSig" : "",
            "oid" : "2.16.840.1.113883.3.560.1.17",
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4ed5"),
                "root" : null,
                "extension" : null
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4ed6"),
            "codes" : {
                "RxNorm" : [ 
                    "198440"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Medication",
            "end_time" : NumberLong(1637625600),
            "start_time" : NumberLong(1637625600),
            "description" : "acetaminophen 500 mg oral tablet",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "dispensed"
                ]
            },
            "route" : null,
            "dose" : null,
            "anatomical_approach" : null,
            "productForm" : null,
            "deliveryMethod" : null,
            "typeOfMedication" : null,
            "indication" : null,
            "vehicle" : null,
            "freeTextSig" : null,
            "oid" : "2.16.840.1.113883.3.560.1.8",
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4ed7"),
                "root" : null,
                "extension" : null
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4ed8"),
            "codes" : {
                "RxNorm" : [ 
                    "198861"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Medication",
            "start_time" : NumberLong(1635897600),
            "end_time" : null,
            "description" : "sodium bicarbonate 650 mg oral tablet",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "route" : null,
            "dose" : {
                "unit" : "",
                "value" : 1.0
            },
            "anatomical_approach" : null,
            "productForm" : null,
            "deliveryMethod" : null,
            "typeOfMedication" : null,
            "indication" : null,
            "vehicle" : null,
            "administrationTiming" : {
                "institutionSpecified" : true,
                "period" : {
                    "unit" : "d",
                    "value" : 60.0
                }
            },
            "allowedAdministrations" : 4.0,
            "freeTextSig" : "",
            "oid" : "2.16.840.1.113883.3.560.1.13",
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4ed9"),
                "root" : null,
                "extension" : null
            },
            "orderInformation" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4eda"),
                    "orderNumber" : null,
                    "fills" : "3",
                    "quantityOrdered" : {
                        "unit" : null,
                        "value" : "60"
                    }
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4edb"),
            "codes" : {
                "RxNorm" : [ 
                    "198861"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Medication",
            "end_time" : NumberLong(1635897600),
            "start_time" : NumberLong(1635897600),
            "description" : "sodium bicarbonate 650 mg oral tablet",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "ordered"
                ]
            },
            "anatomical_approach" : null,
            "productForm" : null,
            "deliveryMethod" : null,
            "typeOfMedication" : null,
            "indication" : null,
            "vehicle" : null,
            "administrationTiming" : {
                "institutionSpecified" : true,
                "period" : {
                    "unit" : "d",
                    "value" : 60.0
                }
            },
            "route" : null,
            "dose" : {
                "unit" : "",
                "value" : 1.0
            },
            "allowedAdministrations" : 4.0,
            "freeTextSig" : "",
            "oid" : "2.16.840.1.113883.3.560.1.17",
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4edc"),
                "root" : null,
                "extension" : null
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4edd"),
            "codes" : {
                "RxNorm" : [ 
                    "198861"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Medication",
            "end_time" : NumberLong(1635897600),
            "start_time" : NumberLong(1635897600),
            "description" : "sodium bicarbonate 650 mg oral tablet",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "dispensed"
                ]
            },
            "route" : null,
            "dose" : null,
            "anatomical_approach" : null,
            "productForm" : null,
            "deliveryMethod" : null,
            "typeOfMedication" : null,
            "indication" : null,
            "vehicle" : null,
            "freeTextSig" : null,
            "oid" : "2.16.840.1.113883.3.560.1.8",
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4ede"),
                "root" : null,
                "extension" : null
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4edf"),
            "codes" : {
                "RxNorm" : [ 
                    "861004"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Medication",
            "start_time" : NumberLong(1643328000),
            "end_time" : NumberLong(1643673600),
            "description" : "metFORMIN 1000 mg oral tablet",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "route" : null,
            "dose" : {
                "unit" : "",
                "value" : 1.0
            },
            "anatomical_approach" : null,
            "productForm" : null,
            "deliveryMethod" : null,
            "typeOfMedication" : null,
            "indication" : null,
            "vehicle" : null,
            "administrationTiming" : {
                "institutionSpecified" : true,
                "period" : {
                    "unit" : "d",
                    "value" : 0.0
                }
            },
            "allowedAdministrations" : 1.0,
            "freeTextSig" : "",
            "oid" : "2.16.840.1.113883.3.560.1.13",
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4ee0"),
                "root" : null,
                "extension" : null
            },
            "orderInformation" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4ee1"),
                    "orderNumber" : null,
                    "fills" : "0",
                    "quantityOrdered" : {
                        "unit" : null,
                        "value" : "0"
                    }
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4ee2"),
            "codes" : {
                "RxNorm" : [ 
                    "861004"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Medication",
            "end_time" : NumberLong(1643328000),
            "start_time" : NumberLong(1643328000),
            "description" : "metFORMIN 1000 mg oral tablet",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "ordered"
                ]
            },
            "anatomical_approach" : null,
            "productForm" : null,
            "deliveryMethod" : null,
            "typeOfMedication" : null,
            "indication" : null,
            "vehicle" : null,
            "administrationTiming" : {
                "institutionSpecified" : true,
                "period" : {
                    "unit" : "d",
                    "value" : 0.0
                }
            },
            "route" : null,
            "dose" : {
                "unit" : "",
                "value" : 1.0
            },
            "allowedAdministrations" : 1.0,
            "freeTextSig" : "",
            "oid" : "2.16.840.1.113883.3.560.1.17",
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4ee3"),
                "root" : null,
                "extension" : null
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4ee4"),
            "codes" : {
                "RxNorm" : [ 
                    "861004"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Medication",
            "end_time" : NumberLong(1643328000),
            "start_time" : NumberLong(1643328000),
            "description" : "metFORMIN 1000 mg oral tablet",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "dispensed"
                ]
            },
            "route" : null,
            "dose" : null,
            "anatomical_approach" : null,
            "productForm" : null,
            "deliveryMethod" : null,
            "typeOfMedication" : null,
            "indication" : null,
            "vehicle" : null,
            "freeTextSig" : null,
            "oid" : "2.16.840.1.113883.3.560.1.8",
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4ee5"),
                "root" : null,
                "extension" : null
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4ee6"),
            "codes" : {
                "RxNorm" : [ 
                    "309593"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Medication",
            "start_time" : NumberLong(1637625600),
            "end_time" : null,
            "description" : "Vitamin B12 1000 mcg oral tablet",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "route" : null,
            "dose" : {
                "unit" : "",
                "value" : 1.0
            },
            "anatomical_approach" : null,
            "productForm" : null,
            "deliveryMethod" : null,
            "typeOfMedication" : null,
            "indication" : null,
            "vehicle" : null,
            "administrationTiming" : {
                "institutionSpecified" : true,
                "period" : {
                    "unit" : "d",
                    "value" : 0.0
                }
            },
            "allowedAdministrations" : 1.0,
            "freeTextSig" : "",
            "oid" : "2.16.840.1.113883.3.560.1.13",
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4ee7"),
                "root" : null,
                "extension" : null
            },
            "orderInformation" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4ee8"),
                    "orderNumber" : null,
                    "fills" : "0",
                    "quantityOrdered" : {
                        "unit" : null,
                        "value" : "0"
                    }
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4ee9"),
            "codes" : {
                "RxNorm" : [ 
                    "309593"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Medication",
            "end_time" : NumberLong(1637625600),
            "start_time" : NumberLong(1637625600),
            "description" : "Vitamin B12 1000 mcg oral tablet",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "ordered"
                ]
            },
            "anatomical_approach" : null,
            "productForm" : null,
            "deliveryMethod" : null,
            "typeOfMedication" : null,
            "indication" : null,
            "vehicle" : null,
            "administrationTiming" : {
                "institutionSpecified" : true,
                "period" : {
                    "unit" : "d",
                    "value" : 0.0
                }
            },
            "route" : null,
            "dose" : {
                "unit" : "",
                "value" : 1.0
            },
            "allowedAdministrations" : 1.0,
            "freeTextSig" : "",
            "oid" : "2.16.840.1.113883.3.560.1.17",
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4eea"),
                "root" : null,
                "extension" : null
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4eeb"),
            "codes" : {
                "RxNorm" : [ 
                    "309593"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Medication",
            "end_time" : NumberLong(1637625600),
            "start_time" : NumberLong(1637625600),
            "description" : "Vitamin B12 1000 mcg oral tablet",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "dispensed"
                ]
            },
            "route" : null,
            "dose" : null,
            "anatomical_approach" : null,
            "productForm" : null,
            "deliveryMethod" : null,
            "typeOfMedication" : null,
            "indication" : null,
            "vehicle" : null,
            "freeTextSig" : null,
            "oid" : "2.16.840.1.113883.3.560.1.8",
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4eec"),
                "root" : null,
                "extension" : null
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4eed"),
            "codes" : {
                "RxNorm" : [ 
                    "979468"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Medication",
            "start_time" : NumberLong(1618531200),
            "end_time" : NumberLong(1637625600),
            "description" : "losartan-hydrochlorothiazide 50mg-12.5mg oral tablet",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "route" : null,
            "dose" : {
                "unit" : "",
                "value" : 1.0
            },
            "anatomical_approach" : null,
            "productForm" : null,
            "deliveryMethod" : null,
            "typeOfMedication" : null,
            "indication" : null,
            "vehicle" : null,
            "administrationTiming" : {
                "institutionSpecified" : true,
                "period" : {
                    "unit" : "d",
                    "value" : 0.0
                }
            },
            "allowedAdministrations" : 1.0,
            "freeTextSig" : "",
            "oid" : "2.16.840.1.113883.3.560.1.13",
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4eee"),
                "root" : null,
                "extension" : null
            },
            "orderInformation" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4eef"),
                    "orderNumber" : null,
                    "fills" : "0",
                    "quantityOrdered" : {
                        "unit" : null,
                        "value" : "0"
                    }
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4ef0"),
            "codes" : {
                "RxNorm" : [ 
                    "979468"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Medication",
            "end_time" : NumberLong(1618531200),
            "start_time" : NumberLong(1618531200),
            "description" : "losartan-hydrochlorothiazide 50mg-12.5mg oral tablet",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "ordered"
                ]
            },
            "anatomical_approach" : null,
            "productForm" : null,
            "deliveryMethod" : null,
            "typeOfMedication" : null,
            "indication" : null,
            "vehicle" : null,
            "administrationTiming" : {
                "institutionSpecified" : true,
                "period" : {
                    "unit" : "d",
                    "value" : 0.0
                }
            },
            "route" : null,
            "dose" : {
                "unit" : "",
                "value" : 1.0
            },
            "allowedAdministrations" : 1.0,
            "freeTextSig" : "",
            "oid" : "2.16.840.1.113883.3.560.1.17",
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4ef1"),
                "root" : null,
                "extension" : null
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4ef2"),
            "codes" : {
                "RxNorm" : [ 
                    "979468"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Medication",
            "end_time" : NumberLong(1618531200),
            "start_time" : NumberLong(1618531200),
            "description" : "losartan-hydrochlorothiazide 50mg-12.5mg oral tablet",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "dispensed"
                ]
            },
            "route" : null,
            "dose" : null,
            "anatomical_approach" : null,
            "productForm" : null,
            "deliveryMethod" : null,
            "typeOfMedication" : null,
            "indication" : null,
            "vehicle" : null,
            "freeTextSig" : null,
            "oid" : "2.16.840.1.113883.3.560.1.8",
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4ef3"),
                "root" : null,
                "extension" : null
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4ef4"),
            "codes" : {
                "RxNorm" : [ 
                    "198440"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Medication",
            "start_time" : NumberLong(1637625600),
            "end_time" : null,
            "description" : "acetaminophen 500 mg oral tablet",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "route" : null,
            "dose" : {
                "unit" : "",
                "value" : 1.0
            },
            "anatomical_approach" : null,
            "productForm" : null,
            "deliveryMethod" : null,
            "typeOfMedication" : null,
            "indication" : null,
            "vehicle" : null,
            "administrationTiming" : {
                "institutionSpecified" : true,
                "period" : {
                    "unit" : "d",
                    "value" : 0.0
                }
            },
            "allowedAdministrations" : 1.0,
            "freeTextSig" : "",
            "oid" : "2.16.840.1.113883.3.560.1.13",
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4ef5"),
                "root" : null,
                "extension" : null
            },
            "orderInformation" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4ef6"),
                    "orderNumber" : null,
                    "fills" : "0",
                    "quantityOrdered" : {
                        "unit" : null,
                        "value" : "0"
                    }
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4ef7"),
            "codes" : {
                "RxNorm" : [ 
                    "198440"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Medication",
            "end_time" : NumberLong(1637625600),
            "start_time" : NumberLong(1637625600),
            "description" : "acetaminophen 500 mg oral tablet",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "ordered"
                ]
            },
            "anatomical_approach" : null,
            "productForm" : null,
            "deliveryMethod" : null,
            "typeOfMedication" : null,
            "indication" : null,
            "vehicle" : null,
            "administrationTiming" : {
                "institutionSpecified" : true,
                "period" : {
                    "unit" : "d",
                    "value" : 0.0
                }
            },
            "route" : null,
            "dose" : {
                "unit" : "",
                "value" : 1.0
            },
            "allowedAdministrations" : 1.0,
            "freeTextSig" : "",
            "oid" : "2.16.840.1.113883.3.560.1.17",
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4ef8"),
                "root" : null,
                "extension" : null
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4ef9"),
            "codes" : {
                "RxNorm" : [ 
                    "198440"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Medication",
            "end_time" : NumberLong(1637625600),
            "start_time" : NumberLong(1637625600),
            "description" : "acetaminophen 500 mg oral tablet",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "dispensed"
                ]
            },
            "route" : null,
            "dose" : null,
            "anatomical_approach" : null,
            "productForm" : null,
            "deliveryMethod" : null,
            "typeOfMedication" : null,
            "indication" : null,
            "vehicle" : null,
            "freeTextSig" : null,
            "oid" : "2.16.840.1.113883.3.560.1.8",
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4efa"),
                "root" : null,
                "extension" : null
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4fc4"),
            "codes" : {
                "RxNorm" : [ 
                    "197380"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Medication",
            "start_time" : NumberLong(1618531200),
            "end_time" : NumberLong(1621468800),
            "description" : "atenolol 25 mg oral tablet",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "route" : null,
            "dose" : {
                "unit" : "",
                "value" : 1.0
            },
            "anatomical_approach" : null,
            "productForm" : null,
            "deliveryMethod" : null,
            "typeOfMedication" : null,
            "indication" : null,
            "vehicle" : null,
            "administrationTiming" : {
                "institutionSpecified" : true,
                "period" : {
                    "unit" : "d",
                    "value" : 0.0
                }
            },
            "allowedAdministrations" : 1.0,
            "freeTextSig" : "",
            "oid" : "2.16.840.1.113883.3.560.1.13",
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4fc5"),
                "root" : null,
                "extension" : null
            },
            "orderInformation" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4fc6"),
                    "orderNumber" : null,
                    "fills" : "0",
                    "quantityOrdered" : {
                        "unit" : null,
                        "value" : "0"
                    }
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4fc7"),
            "codes" : {
                "RxNorm" : [ 
                    "197380"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Medication",
            "end_time" : NumberLong(1618531200),
            "start_time" : NumberLong(1618531200),
            "description" : "atenolol 25 mg oral tablet",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "ordered"
                ]
            },
            "anatomical_approach" : null,
            "productForm" : null,
            "deliveryMethod" : null,
            "typeOfMedication" : null,
            "indication" : null,
            "vehicle" : null,
            "administrationTiming" : {
                "institutionSpecified" : true,
                "period" : {
                    "unit" : "d",
                    "value" : 0.0
                }
            },
            "route" : null,
            "dose" : {
                "unit" : "",
                "value" : 1.0
            },
            "allowedAdministrations" : 1.0,
            "freeTextSig" : "",
            "oid" : "2.16.840.1.113883.3.560.1.17",
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4fc8"),
                "root" : null,
                "extension" : null
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4fc9"),
            "codes" : {
                "RxNorm" : [ 
                    "197380"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Medication",
            "end_time" : NumberLong(1618531200),
            "start_time" : NumberLong(1618531200),
            "description" : "atenolol 25 mg oral tablet",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "dispensed"
                ]
            },
            "route" : null,
            "dose" : null,
            "anatomical_approach" : null,
            "productForm" : null,
            "deliveryMethod" : null,
            "typeOfMedication" : null,
            "indication" : null,
            "vehicle" : null,
            "freeTextSig" : null,
            "oid" : "2.16.840.1.113883.3.560.1.8",
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4fca"),
                "root" : null,
                "extension" : null
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4fcb"),
            "codes" : {
                "RxNorm" : [ 
                    "199247"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Medication",
            "start_time" : NumberLong(1618531200),
            "end_time" : NumberLong(1637625600),
            "description" : "glimepiride 4 mg oral tablet",
            "status_code" : {
                "SNOMED-CT" : [ 
                    "55561003"
                ],
                "HL7 ActStatus" : [ 
                    "active"
                ]
            },
            "route" : null,
            "dose" : {
                "unit" : "",
                "value" : 1.0
            },
            "anatomical_approach" : null,
            "productForm" : null,
            "deliveryMethod" : null,
            "typeOfMedication" : null,
            "indication" : null,
            "vehicle" : null,
            "administrationTiming" : {
                "institutionSpecified" : true,
                "period" : {
                    "unit" : "d",
                    "value" : 0.0
                }
            },
            "allowedAdministrations" : 1.0,
            "freeTextSig" : "",
            "oid" : "2.16.840.1.113883.3.560.1.13",
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4fcc"),
                "root" : null,
                "extension" : null
            },
            "orderInformation" : [ 
                {
                    "_id" : ObjectId("622f46decd7f12f3c56f4fcd"),
                    "orderNumber" : null,
                    "fills" : "0",
                    "quantityOrdered" : {
                        "unit" : null,
                        "value" : "0"
                    }
                }
            ]
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4fce"),
            "codes" : {
                "RxNorm" : [ 
                    "199247"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Medication",
            "end_time" : NumberLong(1618531200),
            "start_time" : NumberLong(1618531200),
            "description" : "glimepiride 4 mg oral tablet",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "ordered"
                ]
            },
            "anatomical_approach" : null,
            "productForm" : null,
            "deliveryMethod" : null,
            "typeOfMedication" : null,
            "indication" : null,
            "vehicle" : null,
            "administrationTiming" : {
                "institutionSpecified" : true,
                "period" : {
                    "unit" : "d",
                    "value" : 0.0
                }
            },
            "route" : null,
            "dose" : {
                "unit" : "",
                "value" : 1.0
            },
            "allowedAdministrations" : 1.0,
            "freeTextSig" : "",
            "oid" : "2.16.840.1.113883.3.560.1.17",
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4fcf"),
                "root" : null,
                "extension" : null
            }
        }, 
        {
            "_id" : ObjectId("622f46decd7f12f3c56f4fd0"),
            "codes" : {
                "RxNorm" : [ 
                    "199247"
                ]
            },
            "mood_code" : "EVN",
            "_type" : "Medication",
            "end_time" : NumberLong(1618531200),
            "start_time" : NumberLong(1618531200),
            "description" : "glimepiride 4 mg oral tablet",
            "status_code" : {
                "HL7 ActStatus" : [ 
                    "dispensed"
                ]
            },
            "route" : null,
            "dose" : null,
            "anatomical_approach" : null,
            "productForm" : null,
            "deliveryMethod" : null,
            "typeOfMedication" : null,
            "indication" : null,
            "vehicle" : null,
            "freeTextSig" : null,
            "oid" : "2.16.840.1.113883.3.560.1.8",
            "cda_identifier" : {
                "_id" : ObjectId("622f46decd7f12f3c56f4fd1"),
                "root" : null,
                "extension" : null
            }
        }
    ],
    "communications" : [],
    "allergies" : [],
    "assessments" : [],
    "isactive" : true
}
this.patient = patient;