
# Payments Sub Merchant Address

Contains the subMerchant address information.

## Structure

`PaymentsSubMerchantAddress`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `postalCode` | `string` | Required | Post code/Zip code of your subMerchant's company.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `10`, *Pattern*: `^(?!\s*$)[a-zA-Z0-9\s]*$` |
| `street` | `string` | Required | Street name of your subMerchant's company.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `50`, *Pattern*: `^(?!\s*$)[A-Za-z0-9\s]*$` |
| `city` | `string` | Required | City of your subMerchant's company.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `13`, *Pattern*: `^(?!\s*$)[A-Za-z\s-]*$` |
| `state` | `string \| undefined` | Optional | State of your subMerchant's company.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `3`, *Pattern*: `^(?!\s*$)[a-zA-Z0-9\s]*$` |
| `countryCode` | `string` | Required | Country code of your subMerchant's company in [ISO 3166-1 Alpha-2 format](/products/reference/supported-countries-currencies#iso-country-codes).<br><br>**Constraints**: *Minimum Length*: `2`, *Maximum Length*: `2` |

## Example (as JSON)

```json
{
  "postalCode": "SW1 1AA",
  "street": "221B Baker Street",
  "city": "London",
  "state": "GB",
  "countryCode": "GB"
}
```

