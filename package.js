Package.describe({
  summary: "Semantic syntax using Bootstrap.",
  internal: true
});

Package.on_use(function (api) {
  api.use(['bootstrap-3', 'less'], 'client');

  api.add_files('semantic-syntax.less', 'client');
});
