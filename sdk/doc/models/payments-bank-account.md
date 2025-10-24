
# Payments Bank Account

## Structure

`PaymentsBankAccount`

## Inherits From

[`PaymentsRecipientAccount`](../../doc/models/payments-recipient-account.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `identifierType` | [`IdentifierTypeEnum`](../../doc/models/identifier-type-enum.md) | Required | - |
| `iban` | `string \| undefined` | Optional | The International Bank Account Number (IBAN) of the recipient. Required if `identifierType` is `iban`<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `34`, *Pattern*: `^[A-Za-z0-9]*$` |
| `accountNumber` | `string \| undefined` | Optional | The account number of the recipient. Required if `identifierType` is `routingNumber` or `swift`<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `39`, *Pattern*: `^(?!\s*$)[a-zA-Z0-9\s@!£*#$)(\-_=.,/;:'"]*$` |
| `swiftBic` | `string \| undefined` | Optional | The SWIFT Bank Identification Code (BIC) of the recipient. Required if `identifierType` is `swift`. Must be either 8 or 11 alphanumeric characters.<br><br>**Constraints**: *Minimum Length*: `8`, *Maximum Length*: `11`, *Pattern*: `^[A-Za-z0-9]*$` |
| `routingNumber` | `string \| undefined` | Optional | The ABA (American Bankers Association) Routing Transit Number (RTN). Identifies the Financial Insititution of the recipient's account. Required if `identifierType` is `routingNumber`. Must be 9 numeric characters.<br><br>**Constraints**: *Minimum Length*: `9`, *Maximum Length*: `9`, *Pattern*: `[0-9]*$` |

## Example (as JSON)

```json
{
  "identifierType": "swift",
  "iban": "IE12BOFI90000112345678",
  "accountNumber": "01234567",
  "swiftBic": "BEASUS33xxx",
  "routingNumber": "111000025",
  "type": "bankAccount"
}
```

