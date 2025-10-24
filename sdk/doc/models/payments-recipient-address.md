
# Payments Recipient Address

## Structure

`PaymentsRecipientAddress`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `postalCode` | `string \| undefined` | Optional | The postal code of the recipient. Relevant only in the UK.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `10`, *Pattern*: `^[A-Za-z0-9 ]*$` |

## Example (as JSON)

```json
{
  "postalCode": "postalCode2"
}
```

