
# Merchant

An object that contains information about the merchant.

## Structure

`Merchant`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `entity` | `string` | Required | Used to route the request in Access Worldpay, created as part of on-boarding.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `32`, *Pattern*: `^([A-Za-z0-9]+[A-Za-z0-9 ]*)?$` |
| `mcc` | `string \| undefined` | Optional | You can apply a merchant category code (mcc) to an individual request. You can only provide an mcc if we have enabled the dynamic mcc feature during boarding. If enabled but not provided, merchant.mcc defaults to a configured value.<br><br>**Constraints**: *Pattern*: `^\d{4}$` |
| `paymentFacilitator` | [`PaymentsPaymentFacilitator \| undefined`](../../doc/models/payments-payment-facilitator.md) | Optional | An object containing Payment Facilitator information. This information is required for every authorization [__only if you are a Payment Facilitator__](/products/payments/enable-features/payment-facilitator) |

## Example (as JSON)

```json
{
  "entity": "default",
  "mcc": "mcc2",
  "paymentFacilitator": {
    "schemeId": "schemeId8",
    "independentSalesOrganizationId": "independentSalesOrganizationId6",
    "subMerchant": {
      "name": "name6",
      "reference": "reference8",
      "address": {
        "postalCode": "postalCode8",
        "street": "street6",
        "city": "city6",
        "state": "state2",
        "countryCode": "countryCode8"
      },
      "phoneNumber": "phoneNumber4",
      "taxReference": "taxReference0",
      "email": "email0"
    }
  }
}
```

