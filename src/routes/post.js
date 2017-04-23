export default ({ body }, res) => {
  if (
    body.hasOwnProperty('client') &&
    body.hasOwnProperty('version') &&
    body.hasOwnProperty('key') &&
    body.hasOwnProperty('value')
  ) {
    const config = {
      client : body.client,
      version : body.version,
      key : body.key,
      value : body.value
    };

    res.dataStore.push(config);
    console.log(config);
    res.sendStatus(201);
    return;
  }

  res.sendStatus(400);
  res.json({ message : 'Missing required properties' });
};
