
# Token Response Conflicts

*This model accepts additional fields of type unknown.*

## Structure

`TokenResponseConflicts`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `conflictsExpiryDateTime` | `string \| undefined` | Optional | - |
| `schemeReference` | `string \| undefined` | Optional | - |
| `paymentInstrument` | [`ConflictPaymentInstrument \| undefined`](../../doc/models/conflict-payment-instrument.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "conflictsExpiryDateTime": "conflictsExpiryDateTime4",
  "schemeReference": "schemeReference4",
  "paymentInstrument": {
    "type": "type0",
    "cardNumber": "cardNumber6",
    "cardHolderName": "cardHolderName4",
    "cardExpiryDate": {
      "year": 98,
      "month": 66,
      "exampleAdditionalProperty": {
        "key1": "val1",
        "key2": "val2"
      }
    },
    "billingAddress": {
      "address1": "address10",
      "address2": "address24",
      "address3": "address32",
      "postalCode": "postalCode6",
      "city": "city8",
      "state": "state2",
      "countryCode": "countryCode2",
      "exampleAdditionalProperty": {
        "key1": "val1",
        "key2": "val2"
      }
    },
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

