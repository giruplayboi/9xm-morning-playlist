# Deployment-safe esbuild checklist

- [x] Inspect current esbuild versions, package scripts, and pnpm install policy.
- [x] Pin esbuild to one compatible version and configure install behavior for deployment.
- [x] Verify dependency installation, production build, server restart, and homepage rendering.
- [x] Save a corrected deployment checkpoint.

- [x] Fix ZIP deployment failure: uploaded source does not include `scripts/prepare-esbuild.mjs`, so the build must not depend on an external scripts directory.
