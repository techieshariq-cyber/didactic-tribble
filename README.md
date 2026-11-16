# Arywanex GST Billing App — Phase 1
React + TypeScript + Tailwind + Capacitor. Web: `npm install && npm run dev`.
Phase 1 = layout, bottom navigation, dashboard shell with SAMPLE data (src/lib/sample.ts).

## Get the APK (no Android Studio needed)
1. Create a GitHub repo and upload this folder (keep the .github folder).
2. Repo > Actions > "Build Android APK" > Run workflow.
3. When it finishes (about 5 minutes), open the run and download the artifact "arywanex-billing-apk". Unzip it to get app-debug.apk.
4. Copy it to your phone and install (allow "install unknown apps" when asked).

## Or build locally (needs Android Studio + JDK 17)
npm install && npm run build && npx cap add android && npx cap sync android && cd android && ./gradlew assembleDebug
APK: android/app/build/outputs/apk/debug/app-debug.apk
