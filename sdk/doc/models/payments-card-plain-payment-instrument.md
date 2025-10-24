
# Payments Card Plain Payment Instrument

## Structure

`PaymentsCardPlainPaymentInstrument`

## Inherits From

[`PaymentsPaymentInstrument`](../../doc/models/payments-payment-instrument.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cardNumber` | `string` | Required | Customer's card number.<br><br>**Constraints**: *Minimum Length*: `12`, *Maximum Length*: `19` |
| `cardHolderName` | `string \| undefined` | Optional | The name on your customer's card. Required if  instruction.tokenCreation is present. However we recommend that you supply this to improve authentication rates.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255` |
| `expiryDate` | [`ExpiryDate`](../../doc/models/expiry-date.md) | Required | Contains your customer's card or token expiry date. |
| `cvc` | `string \| undefined` | Optional | CVC is a unique set of 3 or 4 numbers on the back of the card. Our API checks to see if the CVC supplied matches the CVC held by the issuing bank.<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `4`, *Pattern*: `[0-9]*$` |
| `billingAddress` | [`BillingAddress \| undefined`](../../doc/models/billing-address.md) | Optional | Contains the billing address information. |
| `routing` | [`Routing \| undefined`](../../doc/models/routing.md) | Optional | An object containing specific routing preferences. |

## Example (as JSON)

```json
{
  "cardNumber": "4000000000001091",
  "cardHolderName": "Sherlock Holmes",
  "expiryDate": {
    "year": 2028,
    "month": 6
  },
  "cvc": "123",
  "type": "plain",
  "billingAddress": {
    "address1": "address10",
    "address2": "address24",
    "address3": "address32",
    "postalCode": "postalCode6",
    "city": "city8",
    "state": "state2",
    "countryCode": "countryCode2"
  },
  "routing": {
    "preferredCardBrand": "amex"
  }
}
```

