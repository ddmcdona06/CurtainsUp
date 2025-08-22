import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    height: '50%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    paddingTop: 15,
  },
  input: {
    // flex: 1,
    // backgroundColor: '#1b1b1b',
    // color: '#fff',
    // paddingHorizontal: 12,
    // paddingVertical: 10,
    // borderRadius: 8,
    height: 40,

  },
  button: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    // backgroundColor: '#bfa608ff',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: { color: '#fff', fontWeight: '700' }
});
