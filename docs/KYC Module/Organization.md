```json
{
  "_id": "",
  "oin": "", // Unique
  "organizationNameEn": "",
  "organizationNameBn": "",
  "tin": "",
  "registrationNumber": "",
  "mobileNumber": "",
  "phoneNumber": "",
  "faxNumber": "",
  "email": "",
  "address": "",
  "status": "",
  "logo": "",
  "branches": ["organization_id", "organization_id", "organization_id"],
  "contactPeoples": [
    {
      "contactPersonPin": "",
      "contactPersonName": "",
      "contactNumber": "",
      "emergencyContactNumber": "",
      "email": ""
    }
  ],
  "bankInformation": [
    {
      "accountNumber": "",
      "accountName": "",
      "branch": "",
      "routingNumber": ""
    }
  ],
  "attachments": ["attachmentId", "attachmentId"]
}
```

GET api/organizations?offset=10&limit=10&sort_by=email&order_by=desc&name=John&oin=123456&blood_group=A (+ve)&email=john@email.com&phone=01700000000

GET api/organizations/:id

POST api/organizations

PUT api/organizations/:id

PATCH api/organizations/:id

DELETE api/organizations/:id

PUT api/organizations/:id/branches

PUT api/organizations/:id/contact_peoples

PUT api/organizations/:id/bank_information

PUT api/organizations/:id/attachments
