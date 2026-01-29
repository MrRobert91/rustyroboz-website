## 2024-07-25 - Atomic Commits and Clean PRs

**Learning:** Including extraneous files (like `dev_server.log`) or unrelated changes (`package-lock.json` modifications) in a pull request clutters the commit history and can introduce unintended side effects. It's crucial to keep commits atomic and focused on a single, logical change.

**Action:** Before submitting, I will always review the list of changed files to ensure I am only committing files directly related to the task. I will use `git status` to check for untracked files and revert any unintended changes to lockfiles or other configuration.
