---
description: Build the Android APK
---
1. Build the web application
   - Command: `npm run build`
   - Directory: `c:\Users\B-Zone\AndroidStudioProjects\invest\web-game`

2. Sync with Capacitor
   - Command: `npx cap sync`
   - Directory: `c:\Users\B-Zone\AndroidStudioProjects\invest\web-game`

3. Build the APK using Gradle
   - Command: `./gradlew assembleDebug`
   - Directory: `c:\Users\B-Zone\AndroidStudioProjects\invest\web-game\android`
