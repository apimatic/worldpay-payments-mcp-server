
# Payment Refused Response

## Structure

`PaymentRefusedResponse`

## Inherits From

[`DeviceDataResponse201`](../../doc/models/device-data-response-201.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `refusalDescription` | `string \| undefined` | Optional | Additional context on the refusal. |
| `refusalCode` | `string \| undefined` | Optional | Response code for the request. |
| `advice` | [`Advice \| undefined`](../../doc/models/advice.md) | Optional | Contains suggested next actions for this request. |
| `paymentInstrument` | [`PaymentsResponsePaymentInstrument \| undefined`](../../doc/models/payments-response-payment-instrument.md) | Optional | - |
| `updatedPaymentInstrument` | [`UpdatedPaymentInstrument \| undefined`](../../doc/models/updated-payment-instrument.md) | Optional | Details of the updated payment instrument. |
| `riskFactors` | [`RiskFactor[] \| undefined`](../../doc/models/risk-factor.md) | Optional | Any risk factors which have been identified for the authorization. This section will not appear if no risks are identified. |
| `fraud` | [`Fraud \| undefined`](../../doc/models/fraud.md) | Optional | Details of the outcome of the Fraud assessment |
| `threeDS` | [`Verification \| undefined`](../../doc/models/verification.md) | Optional | Details of the outcome of the 3DS authentication |
| `exemption` | [`PaymentsExemption \| undefined`](../../doc/models/payments-exemption.md) | Optional | An object containing information about the exemption. |
| `token` | [`Token \| undefined`](../../doc/models/token.md) | Optional | Details of the token created |

## Example (as JSON)

```json
{
  "outcome": "refused",
  "transactionReference": "transactionReference8",
  "refusalDescription": "refusalDescription4",
  "refusalCode": "refusalCode0",
  "advice": {
    "code": "code8"
  },
  "paymentInstrument": {
    "type": "type0",
    "cardBin": "cardBin6",
    "lastFour": "lastFour4",
    "countryCode": "countryCode4",
    "expiryDate": {
      "year": 20,
      "month": 244
    }
  },
  "updatedPaymentInstrument": {
    "appliedNetworkToken": false,
    "type": "card/plain",
    "accountUpdaterMessage": "The merchant is not registered in the update program",
    "cardNumber": "cardNumber2",
    "cardBin": "cardBin2"
  }
}
```

