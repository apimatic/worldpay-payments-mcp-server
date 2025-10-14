
# Issuer

An object containing information returned by the issuer.

*This model accepts additional fields of type unknown.*

## Structure

`Issuer`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorizationCode` | `string \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "authorizationCode": "authorizationCode8",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

