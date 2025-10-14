
# Routing

An object containing specific routing preferences.

*This model accepts additional fields of type unknown.*

## Structure

`Routing`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `preferredCardBrand` | [`PreferredCardBrand \| undefined`](../../doc/models/preferred-card-brand.md) | Optional | Specifies your customer's preferred card brand to be used for the transaction using a co-badged card. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "preferredCardBrand": "cartesBancaires",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

