
# Value

## Structure

`Value`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currency` | `string` | Required | The three character currency code. See list of <a href="/products/reference/supported-countries-currencies#iso-currency-codes">supported currencies</a> |
| `amount` | `number` | Required | The payment amount. Implied decimal. For example, 250 GBP = £2.50<br>When set to `0` will perform a card verification instead of a payment as part of a new `customerAgreement`. |

## Example (as JSON)

```json
{
  "currency": "USD",
  "amount": 250
}
```

