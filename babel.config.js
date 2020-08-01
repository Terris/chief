module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: { node: '12.13.0' },
        useBuiltIns: 'usage',
        corejs: {
          version: '3',
          proposals: true,
        },
      },
    ],
  ],
  ignore:
    process.env.NODE_ENV === 'production'
      ? [/\.test\.(js|ts)/, '**/__tests__', '**/__mocks__']
      : [],
}
