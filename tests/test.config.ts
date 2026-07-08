/**
 * Test Configuration for the Fallout Shelter Ecovillage site.
 *
 * Keeps content-specific values in one place so tests can be customized
 * without editing each spec file.
 */

export const testConfig = {
  /**
   * Cookie Consent Configuration
   * Used in: tests/cookie-consent.spec.ts
   */
  cookieConsent: {
    bannerHeading: 'We Value Your Privacy',
    modalHeading: 'Cookie Preferences',
    buttons: {
      acceptAll: 'Accept All',
      declineAll: 'Decline All',
      customize: 'Customize',
      savePreferences: 'Save Preferences',
      cancel: 'Cancel',
    },
  },

  /**
   * Google Tag Manager Configuration
   * Used in: tests/google-tag-manager.spec.ts
   */
  googleTagManager: {
    id: 'GTM-5B5Q6FPD',
  },
}
