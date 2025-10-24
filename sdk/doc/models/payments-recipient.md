
# Payments Recipient

An object containing information about the recipient of financial services. Required for MCC 6012 transactions in the Visa Europe region. The recipient may or may not be the cardholder.

Read more on how to set it up under our [__Financial Services__](/products/payments/enable-features/financial-services-mcc6012-mcc6051) guide.

*This model accepts additional fields of type unknown.*

## Structure

`PaymentsRecipient`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountReference` | `string \| undefined` | Optional | The account number of the recipient. Either a bank account number or a partial card number.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `10`, *Pattern*: `^[A-Za-z0-9]*$` |
| `lastName` | `string \| undefined` | Optional | The last name of the recipient.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `22`, *Pattern*: `^[A-Za-z@!£*#$)(+\-_=.,/;:'"]*$` |
| `address` | [`PaymentsRecipientAddress \| undefined`](../../doc/models/payments-recipient-address.md) | Optional | - |
| `dateOfBirth` | `string \| undefined` | Optional | Recipient's date of birth. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "accountReference": "accountReference6",
  "lastName": "lastName0",
  "address": {
    "postalCode": "postalCode8",
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "dateOfBirth": "2016-03-13T12:52:32.123Z",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

