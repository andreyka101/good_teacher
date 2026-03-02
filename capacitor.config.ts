import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.andreyka101.app',
  appName: 'good_teacher',
  webDir: 'dist',
  
  plugins: {
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"] // для iOS
    }
  },
  
  server: {
    androidScheme: 'https'
  }
};

export default config;
 