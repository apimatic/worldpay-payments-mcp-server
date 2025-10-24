
# Payments Unscheduled Customer Agreement

## Structure

`PaymentsUnscheduledCustomerAgreement`

## Inherits From

[`PaymentsCustomerAgreement`](../../doc/models/payments-customer-agreement.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `schemeReference` | `string \| undefined` | Optional | Unique reference provided by card schemes used to link the `first` and `subsequent` payments. This value is bundled with the Worldpay token if created as part of the `first` payment and therefore not required here as well. If you manage multiple agreements for a single cardholder using a token, please use the `schemeReference` returned to you. This allows you to distinguish and manage each separate agreement appropriately.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `56`, *Pattern*: `^[A-Za-z0-9]*$` |

## Example (as JSON)

```json
{
  "schemeReference": "MCCOLXT1C0104",
  "type": "unscheduled"
}
```

