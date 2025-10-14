
# Risk Factor

Any risk factors which have been identified for the authorization. This section will not appear if no risks are identified.

*This model accepts additional fields of type unknown.*

## Structure

`RiskFactor`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `risk` | [`Risk \| undefined`](../../doc/models/risk.md) | Optional | - |
| `detail` | [`Detail \| undefined`](../../doc/models/detail.md) | Optional | - |
| `type` | [`Type1 \| undefined`](../../doc/models/type-1.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "risk": "notSupplied",
  "detail": "address",
  "type": "riskProfile",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

