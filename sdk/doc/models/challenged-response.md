
# Challenged Response

*This model accepts additional fields of type unknown.*

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
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "outcome": "3dsChallenged",
  "transactionReference": "transactionReference8",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  },
  "authentication": {
    "version": "version4",
    "type": "type2",
    "authenticationValue": "authenticationValue0",
    "eci": "eci8",
    "transactionId": "transactionId8",
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "challenge": {
    "reference": "reference6",
    "url": "url2",
    "jwt": "jwt8",
    "payload": "payload4",
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "_actions": {
    "complete3dsChallenge": {
      "href": "href6",
      "method": "method2",
      "exampleAdditionalProperty": {
        "key1": "val1",
        "key2": "val2"
      }
    },
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  }
}
```

