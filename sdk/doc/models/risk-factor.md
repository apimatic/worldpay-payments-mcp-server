
# Risk Factor

Any risk factors which have been identified for the authorization. This section will not appear if no risks are identified.

## Structure

`RiskFactor`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `risk` | [`RiskEnum \| undefined`](../../doc/models/risk-enum.md) | Optional | - |
| `detail` | [`DetailEnum \| undefined`](../../doc/models/detail-enum.md) | Optional | - |
| `type` | [`Type1Enum \| undefined`](../../doc/models/type-1-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "risk": "notSupplied",
  "detail": "address",
  "type": "riskProfile"
}
```

