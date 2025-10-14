
# Custom

Additional values specific to your order that can be used to create manual fraud rules.

*This model accepts additional fields of type unknown.*

## Structure

`Custom`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `number1` | `number \| undefined` | Optional | - |
| `number2` | `number \| undefined` | Optional | - |
| `number3` | `number \| undefined` | Optional | - |
| `number4` | `number \| undefined` | Optional | - |
| `number5` | `number \| undefined` | Optional | - |
| `number6` | `number \| undefined` | Optional | - |
| `number7` | `number \| undefined` | Optional | - |
| `number8` | `number \| undefined` | Optional | - |
| `number9` | `number \| undefined` | Optional | - |
| `string1` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1`, *Maximum Length*: `100` |
| `string2` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1`, *Maximum Length*: `100` |
| `string3` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1`, *Maximum Length*: `100` |
| `string4` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1`, *Maximum Length*: `100` |
| `string5` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1`, *Maximum Length*: `100` |
| `string6` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1`, *Maximum Length*: `100` |
| `string7` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1`, *Maximum Length*: `100` |
| `string8` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1`, *Maximum Length*: `100` |
| `string9` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1`, *Maximum Length*: `100` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "number1": 84,
  "number2": 110,
  "number3": 104,
  "number4": 246,
  "number5": 16,
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

