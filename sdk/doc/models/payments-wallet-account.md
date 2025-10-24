
# Payments Wallet Account

## Structure

`PaymentsWalletAccount`

## Inherits From

[`PaymentsRecipientAccount`](../../doc/models/payments-recipient-account.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `walletReference` | `string` | Required | A reference identifying the destination wallet.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `50`, *Pattern*: `^(?!\s*$)[a-zA-Z0-9\s@!£*#$)(+\-_=.,/;:'"]*$` |

## Example (as JSON)

```json
{
  "type": "merchantWallet",
  "walletReference": "walletReference6"
}
```

