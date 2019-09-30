module.exports = (api) => {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: { ie: '11' },
        // useBuiltIns: 'entry',
      },
    ],
  ];

  return { presets };
};
