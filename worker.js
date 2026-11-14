export 默认 {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  }
};
