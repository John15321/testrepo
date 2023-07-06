const config = {
  branches: ['main'],

  "plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/changelog",
      {
        "changelogFile": "CHANGELOG.md"
      }
    ],
    [
      "@semantic-release/git",
      {
        "assets": ["CHANGELOG.md"],
        "message": "chore(release 🚀): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",

      }
    ]
  ],
};
module.exports = config;
