
# Wallet Payment Instrument

## Structure

`WalletPaymentInstrument`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type6Enum`](../../doc/models/type-6-enum.md) | Required | The type of instrument. |
| `walletToken` | `string` | Required | - |
| `billingAddress` | [`BillingAddress \| undefined`](../../doc/models/billing-address.md) | Optional | Contains the billing address information. |

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
    "countryCode": "countryCode2"
  }
}
```

