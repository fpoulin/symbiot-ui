
Symbiot.Transformation = DS.Model.extend({
  // ...
});

Symbiot.Transformation.FIXTURES = [
  {
    "id": 1,
    "creationDate": "2014-11-19T14:04:50.689Z",
    "lastModificationDate": "2014-11-19T14:04:50.689Z",
    "sourceSchemaId": 1,
    "targetSchemaId": 2,
    "bindings": [
      {
        "type": "arrayConstant",
        "id": 1,
        "lastModificationDate": "2014-11-19T14:05:20.849Z",
        "targetNode": "/rootArray",
        "nbIterations": 5
      },
      {
        "type": "arrayConstant",
        "id": 3,
        "lastModificationDate": "2014-11-19T14:06:40.064Z",
        "targetNode": "/rootArray/{i}",
        "nbIterations": 15
      },
      {
        "type": "stringConstant",
        "id": 101,
        "lastModificationDate": "2014-11-20T03:15:58.207Z",
        "targetNode": "/rootArray/{i}/{i}/someString",
        "constant": "my super brand new Constant"
      },
      {
        "type": "stringConstant",
        "id": 102,
        "lastModificationDate": "2014-11-20T03:01:24.520Z",
        "targetNode": "/rootArray/{i}/{i}/anotherString",
        "constant": "my updated constant"
      }
    ],
    "nextToBind": {
      "targetNode": "/rootArray/{i}/{i}/someArray",
      "type": "ARRAY",
      "legalBindingTypes": [
        "arrayConstant",
        "arrayNode"
      ],
      "legalSourceNodes": [
        {
          "sourceNode": "/rootArray",
          "type": "ARRAY"
        }
      ]
    },
    "totalBindings": 6,
    "remainingBindings": 2,
    "links": [
      {
        "href": "http://localhost:8080/transformations/1",
        "rel": "self"
      },
      {
        "href": "http://localhost:8080/schemas/1",
        "rel": "sourceSchema"
      },
      {
        "href": "http://localhost:8080/schemas/2",
        "rel": "targetSchema"
      },
      {
        "href": "http://localhost:8080/transformations/1/bindings",
        "rel": "nextToBind"
      }
    ]
  }
];