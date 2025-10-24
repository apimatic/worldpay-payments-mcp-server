
# Payments Gift Cards Purchase

If the order is being used to purchase a gift card.

*This model accepts additional fields of type unknown.*

## Structure

`PaymentsGiftCardsPurchase`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `totalValue` | [`Value \| undefined`](../../doc/models/value.md) | Optional | - |
| `quantity` | `number \| undefined` | Optional | The number of gift cards being purchased. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "totalValue": {
    "currency": "currency6",
    "amount": 46,
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "quantity": 48,
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

