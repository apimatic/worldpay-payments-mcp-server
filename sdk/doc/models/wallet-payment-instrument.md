
# Wallet Payment Instrument

*This model accepts additional fields of type unknown.*

## Structure

`WalletPaymentInstrument`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required, Constant | The type of instrument.<br><br>**Value**: `'encrypted'` |
| `walletToken` | `string` | Required | - |
| `billingAddress` | [`BillingAddress \| undefined`](../../doc/models/billing-address.md) | Optional | Contains the billing address information. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "type": "encrypted",
  "walletToken": "walletToken8",
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
}
```

