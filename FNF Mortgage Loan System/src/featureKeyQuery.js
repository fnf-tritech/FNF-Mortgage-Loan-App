import { AppConfigurationClient, parseFeatureFlag } from '@azure/app-configuration';

export async function getFeatureKeyValue(connectionString, featureKey) {
  const client = new AppConfigurationClient(connectionString);
  const getResponse = await client.getConfigurationSetting({
    key: featureKey
  });
  return parseFeatureFlag(getResponse).value;
}
