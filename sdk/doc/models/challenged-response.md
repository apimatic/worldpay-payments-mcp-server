
# Challenged Response

## Structure

`ChallengedResponse`

## Inherits From

[`DeviceDataResponse201`](../../doc/models/device-data-response-201.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authentication` | [`Authentication \| undefined`](../../doc/models/authentication.md) | Optional | Object that contains authentication related information. |
| `challenge` | [`ChallengeInfo \| undefined`](../../doc/models/challenge-info.md) | Optional | - |
| `actions` | [`ChallengedActionList \| undefined`](../../doc/models/challenged-action-list.md) | Optional | - |

## Example (as JSON)

```json
{
  "outcome": "3dsChallenged",
  "transactionReference": "transactionReference8",
  "authentication": {
    "version": "version4",
    "type": "type2",
    "authenticationValue": "authenticationValue0",
    "eci": "eci8",
    "transactionId": "transactionId8"
  },
  "challenge": {
    "reference": "reference6",
    "url": "url2",
    "jwt": "jwt8",
    "payload": "payload4"
  },
  "_actions": {
    "complete3dsChallenge": {
      "href": "href6",
      "method": "method2"
    }
  }
}
```

