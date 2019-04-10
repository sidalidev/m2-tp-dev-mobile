import { StyleSheet } from 'react-native'
import { BLACK } from 'utils/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 15,
  },
  topRightAbsolute: {
    flex: 1,
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 9999,
    elevation: 1,
    marginRight: 20,
    marginTop: 15,
  },
  listContainer: { padding: 15 },
  screenTitle: {
    textAlign: 'center',
    fontSize: 26,
    fontWeight: '500',
    color: BLACK,
  },
})
