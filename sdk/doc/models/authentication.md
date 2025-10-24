
# Authentication

Object that contains authentication related information.

*This model accepts additional fields of type unknown.*

## Structure

`Authentication`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `version` | `string \| undefined` | Optional | The version of 3DS used to process the transaction.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `10` |
| `type` | `string \| undefined` | Optional | - |
| `authenticationValue` | `string \| undefined` | Optional | - |
| `eci` | `string \| undefined` | Optional | Electronic Commerce Indicator (ECI). Indicates the outcome of the 3DS authentication.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `2` |
| `transactionId` | `string \| undefined` | Optional | A transaction identifier.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `64` |
| `cryptogramAlgorithm` | `number \| undefined` | Optional | - |
| `challengePreference` | `string \| undefined` | Optional | - |
| `authenticationFlow` | `string \| undefined` | Optional | - |
| `networkScore` | `string \| undefined` | Optional | - |
| `brand` | `string \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "version": "2.2.0",
  "type": "type2",
  "authenticationValue": "authenticationValue0",
  "eci": "eci8",
  "transactionId": "transactionId8",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

