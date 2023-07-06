const config = {
  branches: ['main'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    ["@semantic-release/git", {
      // "assets": ["dist/*.js", "dist/*.js.map"],
      "assets": ["kek.txt"],
      "message": "chore(release 🚀): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      "changelogFile": "CHANGELOG.md"
    }],
    '@semantic-release/github',
    'semantic-release-github-actions-tags',
    [
      "@semantic-release/git",
      {
        "assets": ["docs/CHANGELOG.md"]
      }
    ]
  ]
};

module.exports = config;
