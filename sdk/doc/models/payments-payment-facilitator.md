
# Payments Payment Facilitator

An object containing Payment Facilitator information. This information is required for every authorization [__only if you are a Payment Facilitator__](/products/payments/enable-features/payment-facilitator)

*This model accepts additional fields of type unknown.*

## Structure

`PaymentsPaymentFacilitator`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `schemeId` | `string` | Required | Your payment facilitator ID received from Mastercard, Visa and Amex.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `11`, *Pattern*: `[0-9]*$` |
| `independentSalesOrganizationId` | `string \| undefined` | Optional | Independent Sales Organization (ISO) ID provided by Mastercard.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `11`, *Pattern*: `[0-9]*$` |
| `subMerchant` | [`PaymentsSubMerchant`](../../doc/models/payments-sub-merchant.md) | Required | Your sub-merchant's details. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "schemeId": "12345678901",
  "independentSalesOrganizationId": "12345678901",
  "subMerchant": {
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
  },
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

