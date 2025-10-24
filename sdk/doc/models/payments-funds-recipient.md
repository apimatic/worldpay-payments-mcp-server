
# Payments Funds Recipient

An object containing details about the recipient of funds, including name and address information, as well as recipient account details. In many use cases, the recipient is the same person as the sender (for example if your customer uses their card to load funds into their own crypto exchange or investment account). __Although an optional object in the API schema, `recipient` is required for some regions and use cases.__

## Structure

`PaymentsFundsRecipient`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `account` | [`PaymentsRecipientAccount \| undefined`](../../doc/models/payments-recipient-account.md) | Optional | An object for the account details of the recipient. |
| `firstName` | `string \| undefined` | Optional | Recipient's first name.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `22`, *Pattern*: `^(?!\s*$).*$` |
| `middleName` | `string \| undefined` | Optional | Recipient's middle name.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `22`, *Pattern*: `^(?!\s*$).*$` |
| `lastName` | `string \| undefined` | Optional | Recipient's last name.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `22`, *Pattern*: `^(?!\s*$).*$` |
| `address` | [`PaymentsTransferAddress \| undefined`](../../doc/models/payments-transfer-address.md) | Optional | Sender's address. |
| `dateOfBirth` | `string \| undefined` | Optional | Recipient's date of birth |
| `phoneNumber` | `string \| undefined` | Optional | Recipient's phone number<br><br>**Constraints**: *Minimum Length*: `4`, *Maximum Length*: `20`, *Pattern*: `^(?!\s*$)[0-9\s()+\-/.x]*$` |
| `documentReference` | `string \| undefined` | Optional | Required for domestic processing in some Latin American countries.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `25`, *Pattern*: `^[-A-Za-z0-9_\-/\\*~+.,&()]*$` |

## Example (as JSON)

```json
{
  "account": {
    "type": "PaymentsRecipientAccount"
  },
  "firstName": "firstName8",
  "middleName": "middleName4",
  "lastName": "lastName0",
  "address": {
    "address1": "address14",
    "address2": "address28",
    "city": "city6",
    "postalCode": "postalCode8",
    "state": "state2",
    "countryCode": "countryCode8"
  }
}
```

