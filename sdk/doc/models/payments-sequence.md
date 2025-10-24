
# Payments Sequence

The sequence number and total number of expected partial settlement requests for the payment.

*This model accepts additional fields of type unknown.*

## Structure

`PaymentsSequence`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `number` | `number` | Required | - |
| `total` | `number` | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "number": 212,
  "total": 104,
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

