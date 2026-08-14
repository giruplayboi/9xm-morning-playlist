# Deployment-safe esbuild checklist

- [x] Inspect current esbuild versions, package scripts, and pnpm install policy.
- [x] Pin esbuild to one compatible version and configure install behavior for deployment.
- [x] Verify dependency installation, production build, server restart, and homepage rendering.
- [x] Save a corrected deployment checkpoint.

- [x] Fix ZIP deployment failure: uploaded source does not include `scripts/prepare-esbuild.mjs`, so the build must not depend on an external scripts directory.

- [x] Fix Hostinger EACCES: the build now targets `@esbuild/linux-x64/bin/esbuild`, so Vite can start.

- [x] Fix Hostinger build error: the inline esbuild API rejects `server/_core/index.ts` as external; use the package wrapper invocation instead.

- [x] Fix Hostinger `Could not resolve "./server/_core/index.ts"` by matching the uploaded source structure and build entry path.
