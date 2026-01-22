# How to View Your SignEase App Screens 🚀

## Quick Start Guide

### Step 1: Install Dependencies
First, make sure all dependencies are installed:

```bash
npm install
```

### Step 2: Start the Expo Development Server

Run one of these commands:

```bash
# Option 1: Start Expo (choose platform after)
npm start
# or
npx expo start

# Option 2: Start directly for Android
npm run android

# Option 3: Start directly for iOS (Mac only)
npm run ios

# Option 4: Start for Web browser
npm run web
```

## Viewing on Different Platforms

### 📱 **Option 1: On Your Physical Phone (Easiest)**

1. **Install Expo Go app** on your phone:
   - **Android**: [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)
   - **iOS**: [App Store](https://apps.apple.com/app/expo-go/id982107779)

2. **Make sure your phone and computer are on the same WiFi network**

3. **Start the dev server**:
   ```bash
   npm start
   ```

4. **Scan the QR code**:
   - **Android**: Open Expo Go app → Tap "Scan QR code" → Scan the QR code from terminal
   - **iOS**: Open Camera app → Point at QR code → Tap the notification

5. The app will load on your phone! 🎉

### 💻 **Option 2: Android Emulator**

**Requirements**: Android Studio installed

1. Open Android Studio
2. Start an Android Virtual Device (AVD)
3. Run:
   ```bash
   npm run android
   ```
4. The app will open in the emulator

### 🍎 **Option 3: iOS Simulator (Mac only)**

**Requirements**: Xcode installed (Mac only)

1. Run:
   ```bash
   npm run ios
   ```
2. The iOS Simulator will open automatically

### 🌐 **Option 4: Web Browser**

1. Run:
   ```bash
   npm run web
   ```
2. The app will open in your default browser
   - Usually at `http://localhost:8081` or similar

## Troubleshooting

### If images don't show:
- Make sure you've added all the images to `assets/images/` folder
- Check the image file names match exactly (case-sensitive)

### If you see errors:
- Make sure all dependencies are installed: `npm install`
- Clear cache: `npx expo start -c`
- Check that your phone and computer are on the same WiFi

### Connection issues:
- Try using tunnel mode: `npx expo start --tunnel`
- Or use LAN mode: `npx expo start --lan`

## What You'll See

When you run the app, you'll see:

1. **Splash Screen** → Shows hand gestures and "SignEase" logo
2. **Onboarding 1** → "Welcome to Signease" screen
3. **Onboarding 2** → "Say it with Sign" screen
4. **Login Screen** → After completing onboarding
5. **Signup Screen** → If you tap "Create one new?"
6. **Home Screen** → After logging in

## Development Tips

- **Hot Reload**: Changes to your code will automatically refresh the app
- **Shake device**: Opens developer menu (or press `Cmd+D` on iOS, `Cmd+M` on Android)
- **Reload**: Press `r` in the terminal to reload the app
- **Clear cache**: Press `Shift+R` in the terminal

## Need Help?

- Check Expo docs: https://docs.expo.dev
- Expo Discord: https://chat.expo.dev

Happy coding! 🎨

