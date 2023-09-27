```json
{
  "_id": "",
  "pin": "", // Unique
  "nameEn": "",
  "nameBn": "",
  "dateOfBirth": "",
  "nid": "", // Unique and Optional
  "birthRegistrationNumber": "", // Unique and Optional
  "registeredMobile": "", // Unique and Optional
  "alternateContactNumber": "",
  "emergencyContactNumber": "",
  "registeredEmail": "", // Unique and Optional
  "email": "",
  "bloodGroup": "",
  "gender": "",
  "religion": "",
  "profession": "",
  "maritalStatus": "",
  "isAlive": true,
  "photo": "",
  "addresses": [
    {
      "addressType": "Present Address",
      "addressLineOne": "",
      "addressLineTwo": "",
      "country": "",
      "division": "",
      "district": "",
      "subDistrict": ""
    }
  ],
  "familyAndRelatives": [
    {
      "relativeId": "",
      "relationship": ""
    }
  ],
  "educations": [
    {
      "educationLevel": "",
      "educationDegree": "",
      "instituteName": "",
      "majorSubject": "",
      "grade": "",
      "certificate": ""
    }
  ],
  "trainings": [
    {
      "courseTitle": "",
      "instituteName": "",
      "courseContent": "",
      "result": "",
      "duration": "",
      "startDate": "",
      "endDate": "",
      "certificate": ""
    }
  ],
  "employmentHistories": [
    {
      "organizationName": "",
      "position": "",
      "address": "",
      "supervisorName": "",
      "supervisorDesignation": "",
      "supervisorPhone": "",
      "jobResponsibilities": "",
      "salary": "",
      "startDate": "",
      "endDate": "",
      "tillNow": ""
    }
  ],
  "attachments": ["attachmentId", "attachmentId", "attachmentId"]
}
```

GET api/peoples?offset=10&limit=10&sort_by=email&order_by=desc&name=John&gender=male&pin=123456&blood_group=A (+ve)&religion=Christian&profession=Service&marital_status=Single&nid=1234567899&birth_registration=123456789&email=john@email.com&phone=01700000000

GET api/peoples/:id

POST api/peoples

PUT api/peoples/:id

PATCH api/peoples/:id

DELETE api/peoples/:id

PUT api/peoples/:id/employment_histories

PUT api/peoples/:id/attachments

PUT api/peoples/:id/trainings

PUT api/peoples/:id/educations

PUT api/peoples/:id/family_and_relative

PUT api/peoples/:id/addresses
