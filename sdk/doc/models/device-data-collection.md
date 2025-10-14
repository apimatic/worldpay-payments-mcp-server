
# Device Data Collection

*This model accepts additional fields of type unknown.*

## Structure

`DeviceDataCollection`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `jwt` | `string` | Required | A digitally signed token that contains additional details required for DDC.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `2048` |
| `url` | `string` | Required | A `POST` action on the DDC form. Used to redirect to the issuers DDC page. This URL can could change so should not be hardcoded.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `2048` |
| `bin` | `string` | Required | First six digits of the card number (Bank Identification Number), used as part of DDC.<br><br>**Constraints**: *Minimum Length*: `6`, *Maximum Length*: `6` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "jwt": "\n\neyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJPcmdVbml0SWQiOiI2NjAzMDA3YWJlMjMxZTM1ZTNmNTRjODkiLCJpc3MiOiI2NjAzMDA3YTE2ZGQ5YTdlNmEwMzM0MDciLCJleHAiOjE3MTIyNDg3MTIsImlhdCI6MTcxMjI0ODExMiwianRpIjoiZjdjZGVhZWUtMTY4MS00NjlhLTgxZmEtMzBkY2MyOTYzODA3In0.T1a6hOCPVVsQmcCKU3eczwmxlHoWK83tUqIJ_VG4fwc",
  "url": "https://centinelapistag.cardinalcommerce.com/V1/Cruise/Collect",
  "bin": "400000",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

