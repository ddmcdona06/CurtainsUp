import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 12,
    backgroundColor: '#111',
    gap: 10
  },
  input: {
    flex: 1,
    backgroundColor: '#1b1b1b',
    color: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8
  },
  button: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    // backgroundColor: '#bfa608ff',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: { color: '#fff', fontWeight: '700' }
});
