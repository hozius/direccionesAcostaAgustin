import { StyleSheet } from "react-native";
import {COLORS} from '../../constants';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderBottomColor: COLORS.primaryColor,
        borderBottomWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
      },
      image: {
        width: '98%',
        height: '40%',
        marginBottom: 50,
      },
      details: {
        marginLeft: 15,
        marginTop: 15,
        flex: 1,
        alignItems: 'flex-start',
      },
      name: {
        color: COLORS.primaryColor,
        fontSize: 18,
        marginBottom: 30,
        fontWeight:'bold',
        marginLeft: 15,
      },
      address: {
        color: COLORS.textColor,
        marginTop: 8,
        fontSize: 16,
        fontWeight:'bold',
        marginLeft: 15,
      },
})
