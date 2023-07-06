const config = {
  branches: ['main'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      "@semantic-release/changelog",
      {
        "changelogFile": "docs/CHANGELOG.md"
      }
    ],
    ["@semantic-release/git", {
      // "assets": ["dist/*.js", "dist/*.js.map"],
      "assets": ["kek.txt", "CHANGELOG.md"],
      "message": "chore(release 🚀): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
    }],
    '@semantic-release/github',
    'semantic-release-github-actions-tags',

  ]
};

module.exports = config;
