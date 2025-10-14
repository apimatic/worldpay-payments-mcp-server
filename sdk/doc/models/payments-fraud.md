
# Payments Fraud

Fraud assessment to detect potential fraud and prevent the transaction from proceeding.

Read more on how to set it up under our [__Fraud Assessment__](/products/payments/enable-features/fraud-assessment) guide.

*This model accepts additional fields of type unknown.*

## Structure

`PaymentsFraud`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required, Constant | Enable a FraudSight risk assessment<br><br>**Value**: `'fraudSight'` |
| `silentMode` | `boolean \| undefined` | Optional | Perform the Fraud assessment but do not act on the outcome.<br>Normally used for the initial launch while the data model is maturing.<br><br>**Default**: `false` |
| `tmxSessionId` | `string \| undefined` | Optional | Device fingerprint provided by Threatmetrix.<br><br>**Constraints**: *Minimum Length*: `30`, *Maximum Length*: `128`, *Pattern*: `^[A-Za-z0-9_-]*$` |
| `custom` | [`Custom \| undefined`](../../doc/models/custom.md) | Optional | Additional values specific to your order that can be used to create manual fraud rules. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "type": "fraudSight",
  "silentMode": false,
  "tmxSessionId": "tmxSessionId4",
  "custom": {
    "number1": 30,
    "number2": 56,
    "number3": 50,
    "number4": 192,
    "number5": 218,
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
```

