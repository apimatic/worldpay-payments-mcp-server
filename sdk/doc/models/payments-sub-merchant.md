
# Payments Sub Merchant

Your sub-merchant's details.

*This model accepts additional fields of type unknown.*

## Structure

`PaymentsSubMerchant`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | The name of your subMerchant's company.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `25`, *Pattern*: `^(?!\s*$)[A-Za-z0-9 ]*$` |
| `reference` | `string` | Required | Unique merchant reference.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `15`, *Pattern*: `[0-9]*$` |
| `address` | [`PaymentsSubMerchantAddress`](../../doc/models/payments-sub-merchant-address.md) | Required | Contains the subMerchant address information. |
| `phoneNumber` | `string \| undefined` | Optional | Phone number of your subMerchant's company.<br><br>**Constraints**: *Minimum Length*: `4`, *Maximum Length*: `20`, *Pattern*: `^(?!\s*$)[0-9\s()+\-/.x]*$` |
| `taxReference` | `string \| undefined` | Optional | Tax Reference of your subMerchant's company.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `20`, *Pattern*: `^(?!\s*$)[a-zA-Z0-9\s-]*$` |
| `email` | `string \| undefined` | Optional | Email address of your subMerchant's company.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `40`, *Pattern*: `^.+@.+$` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "name": "Merchant Plc",
  "reference": "123456789012345",
  "address": {
    "postalCode": "SW1 1AA",
    "street": "221B Baker Street",
    "city": "London",
    "state": "GB",
    "countryCode": "GB",
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "phoneNumber": "987-65-4321",
  "taxReference": "987-65-4321",
  "email": "email@example.com",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

