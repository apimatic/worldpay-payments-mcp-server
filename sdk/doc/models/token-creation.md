
# Token Creation

Use this object if you want to create a token after the payment. Can only be used with paymentInstrument.type: card/plain & checkout.

## Structure

`TokenCreation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required, Constant | **Value**: `'worldpay'` |
| `namespace` | `string \| undefined` | Optional | A namespace is used to group up to 16 cards, e.g. for one customer. A card can exist in more than one namespace.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `64`, *Pattern*: `^[^_][^ &<]*$` |
| `description` | `string \| undefined` | Optional | A description of your token. If not supplied, a default description is created for you.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255`, *Pattern*: `^[^&<]*$` |

## Example (as JSON)

```json
{
  "type": "worldpay",
  "namespace": "namespace4",
  "description": "description8"
}
```

