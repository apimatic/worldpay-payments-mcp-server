
# Payments Funds Sender

An object containing details about the sender of funds, including name and address information. The sender account is always the card account declared within `instruction.paymentInstrument`. __Although an optional object in the API schema, `sender` is required for some regions and use cases.__

*This model accepts additional fields of type unknown.*

## Structure

`PaymentsFundsSender`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `firstName` | `string \| undefined` | Optional | Sender's first name. Must be supplied if `lastName` or `middleName` are provided.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `22`, *Pattern*: `^(?!\s*$).*$` |
| `middleName` | `string \| undefined` | Optional | Sender's middle name.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `22`, *Pattern*: `^(?!\s*$).*$` |
| `lastName` | `string \| undefined` | Optional | Sender's last name. Must be supplied if `firstName` or `middleName` are provided.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `22`, *Pattern*: `^(?!\s*$).*$` |
| `address` | [`PaymentsTransferAddress \| undefined`](../../doc/models/payments-transfer-address.md) | Optional | Sender's address. |
| `dateOfBirth` | `string \| undefined` | Optional | Sender's date of birth |
| `documentReference` | `string \| undefined` | Optional | Sender's document reference (e.g. Tax ID). Required for domestic processing in some Latin American countries.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `25`, *Pattern*: `^[-A-Za-z0-9_\-/\\*~+.,&()]*$` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "firstName": "firstName8",
  "middleName": "middleName4",
  "lastName": "lastName0",
  "address": {
    "address1": "address14",
    "address2": "address28",
    "city": "city6",
    "postalCode": "postalCode8",
    "state": "state2",
    "countryCode": "countryCode8",
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

