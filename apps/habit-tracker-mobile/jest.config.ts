export default {
  displayName: 'habit-tracker-mobile',
  resolver: '@nx/jest/plugins/resolver',
  moduleFileExtensions: ['ts', 'js', 'html', 'tsx', 'jsx'],
  coverageDirectory: '../../coverage/apps/habit-tracker-mobile',
  preset: 'jest-expo',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
};
