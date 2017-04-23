export default (req, res) => {
  const { client, version } = req.params;

  if (!req.params.client || !req.params.version) {
    res.status(400);
    res.json({ message : 'required paramater is missing!' });
  }

  const findConfigByClientAndVersion = Array.from(res.dataStore).filter(
    configItem => configItem.client === client && String(configItem.version) === version 
  );

  if (findConfigByClientAndVersion.length) {
    const config = findConfigByClientAndVersion.map(item => {
      delete item.client; 
      delete item.version;
      const result = {};

      result[item.key] = item.value;
      return result;
    });

    console.log(config);
    res.json(config[0]);
    return;
  }

  res.status(404);
  res.json({ message : 'Application Config not found!' });
};
