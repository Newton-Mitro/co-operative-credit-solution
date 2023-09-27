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

PUT api/organizations/:id/branches

PUT api/organizations/:id/attachments
