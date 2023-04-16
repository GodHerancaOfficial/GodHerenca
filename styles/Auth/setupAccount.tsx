import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

const SetupStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container1: {
    flex: 1,
    // display: 'flex',
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 40,
    // minHeight: hp('99.7%'),
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 10,
    alignItems: "center",
  },
  headerText: {
    fontFamily: "Raleway-bold",
    fontSize: 23,
    padding: 0,
  },
  button: {
    backgroundColor: "#000000",
    fontFamily: "Nunito",
    fontSize: 20,
    paddingVertical: 15,
    color: "#ffffff",
    textAlign: "center",
    width: "100%",
    borderRadius: 50,
    marginVertical: 20,
  },
  profileContainer: {
    position: "relative",
    borderRadius: 100,
    width: 150,
    height: 150,
    backgroundColor: "#f3f3f3",
    marginVertical: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  editBtn: {
    position: "absolute",
    padding: 5,
    backgroundColor: "#000000",
    bottom: 7,
    right: 7,
    borderRadius: 5,
  },
  formInputs: {
    width: "100%",
    padding: 13,
    backgroundColor: "#f6f6f6",
    fontSize: 18,
    fontFamily: "Raleway",
    borderRadius: 5,
    marginVertical: 10,
    color: "#000000",
  },
  generalView: {
    width: "100%",
    flex: 1,
    alignItems: "flex-start",
    paddingVertical: 30,
    // paddingHorizontal: 5,
  },
  titleText: {
    fontFamily: "Raleway-bold",
    fontSize: 20,
  },
  p: {
    fontFamily: "Raleway",
    fontSize: 16,
    color: "#888",
  },
  uploadView: {
    width: "95%",
    paddingVertical: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    marginVertical: 20,
    borderRadius: 10,
    marginTop: 40,
  },
  documentSelectionView: {
    width: "95%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: "#F6F6F6",
    marginVertical: 10,
    padding: 20,
    flexDirection: "row",
  },

  documentTitle: {
    fontFamily: "Raleway-bold",
    fontSize: 18,
  },

  documentHeading: {
    fontFamily: "Raleway",
    fontSize: 20,
  },

  documentSelectionViewCircleBig: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#fff",
    borderColor: "#000",
    borderWidth: 3,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  documentSelectionViewCircleSmall: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#000",
  },
  browseBtn: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#000",
    fontFamily: "Raleway-bold",
    marginVertical: 10,
    color: "#000",
  },
  displayBoxes: {
    width: 80,
    height: 80,
    backgroundColor: "#EDEDED",
    borderRadius: 10,
    marginVertical: 10,
  },
  vehicleContainer: {
    paddingVertical: 10,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  flashMessageContainer: {
    width: "100%",
    backgroundColor:"tomato"
   
  },
  flashMessageTitle: {
    fontFamily: "Raleway-bold",
    fontSize: 18,
  },
  flashMessageText: {
    fontFamily: "Raleway-bold",
    fontWeight:"normal",
    fontSize: 12,
    padding: 20,
  },
  vehicleWrapper: {
    width: "43%",
    display: "flex",
    alignItems: "center",
    marginVertical: 20,
    // overflow: 'hidden',
  },
  vehicleImage: {
    resizeMode: "contain",
    // width: wp('45%'),
  },
  vehicleBox: {
    backgroundColor: "#fff",
    borderRadius: 10,
    height: hp("18%"),
    overflow: "hidden",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#868686",
    // shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    elevation: 5,
    // borderColor: '#000',
    // borderWidth: 2,
  },
});

export default SetupStyle;
