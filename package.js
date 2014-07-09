Package.describe({
  summary: "Semantic syntax using Bootstrap.",
  internal: true
});

Package.on_use(function (api) {
  api.use(['bootstrap-3', 'less'], 'client');

  api.add_files('padding.less', 'client');
  api.add_files('clicking.less', 'client');
  api.add_files('sizing.less', 'client');
  api.add_files('text.less', 'client');
});
