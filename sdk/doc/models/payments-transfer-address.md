
# Payments Transfer Address

Sender's address.

*This model accepts additional fields of type unknown.*

## Structure

`PaymentsTransferAddress`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `address1` | `string \| undefined` | Optional | Must be supplied if `city` is provided.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `80`, *Pattern*: `^(?!\s*$)[a-zA-Z0-9\s]*$` |
| `address2` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1`, *Maximum Length*: `80`, *Pattern*: `^(?!\s*$)[a-zA-Z0-9\s]*$` |
| `city` | `string \| undefined` | Optional | Must be supplied if `address1` is provided.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `50`, *Pattern*: `^(?!\s*$)[a-zA-Z0-9\s]*$` |
| `postalCode` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1`, *Maximum Length*: `10`, *Pattern*: `^(?!\s*$)[a-zA-Z0-9\s]*$` |
| `state` | `string \| undefined` | Optional | 1-3 alphanumeric characters and spaces.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `3`, *Pattern*: `^(?!\s*$)[a-zA-Z0-9\s]*$` |
| `countryCode` | `string` | Required | Country code in [ISO 3166-1 Alpha-2 format](/products/reference/supported-countries-currencies#iso-country-codes). |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "address1": "address18",
  "address2": "address22",
  "city": "city0",
  "postalCode": "postalCode2",
  "state": "state6",
  "countryCode": "countryCode4",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

