# Deployment-safe esbuild checklist

- [x] Inspect current esbuild versions, package scripts, and pnpm install policy.
- [x] Pin esbuild to one compatible version and configure install behavior for deployment.
- [x] Verify dependency installation, production build, server restart, and homepage rendering.
- [x] Save a corrected deployment checkpoint.

- [x] Fix ZIP deployment failure: uploaded source does not include `scripts/prepare-esbuild.mjs`, so the build must not depend on an external scripts directory.

- [x] Fix Hostinger EACCES: the build now targets `@esbuild/linux-x64/bin/esbuild`, so Vite can start.

- [x] Fix Hostinger build error: the inline esbuild API rejects `server/_core/index.ts` as external; use the package wrapper invocation instead.

- [x] Fix Hostinger `Could not resolve "./server/_core/index.ts"` by matching the uploaded source structure and build entry path.

- [x] Make the 9XM layout and fixed player mobile friendly at phone widths.
- [x] Add a visible buffering/loading animation tied to YouTube player state.
- [x] Add a dark-mode toggle inside the player interface with persisted preference.
- [x] Verify desktop and mobile screenshots, build, and tests before checkpoint.

- [x] Run the post-change test suite after the mobile, buffering, and dark-mode changes.
- [x] Re-mark verification complete after build, desktop/mobile screenshots, and tests are all evidenced.

- [x] Fix the player night-mode toggle so clicks reliably change the theme and persist the state.
- [x] Verify the toggle on desktop and mobile, then save a corrected checkpoint.

- [x] Add a responsive footer credit linking “Developed by Girish Naik” to https://girishnaik.live.
- [x] Add background-play support through Media Session metadata/actions and avoid pausing user playback on visibility changes where the browser permits.
- [x] Verify the updated build, tests, responsive render, and player lifecycle before checkpoint.

- [x] Make the background-play path explicit with Media Session playback state updates and browser-platform limitation handling.
- [x] Inspect fresh browser/runtime logs after the player lifecycle changes.
- [x] Re-mark final verification complete after build, tests, responsive screenshots, and lifecycle checks are evidenced.

- [x] Capture fresh desktop and mobile screenshots after the final Media Session/background-play lifecycle changes.
- [x] Re-mark final verification complete after the final screenshots and clean runtime-log check.
