const config = {
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
  "release": { "branches": ["master", "main"] }
};
module.exports = config;
