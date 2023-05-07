import { StyleSheet } from "react-native";

const ProfileStyle = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    backgroundColor: "#FFFFFF",
  },
  profileHeaderContainer: {
    paddingVertical: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 3,
  },

  profileHeaderText: {
    fontFamily: "Raleway-bold",
    fontSize: 20,
    textTransform: "capitalize",
    padding: 5,
    marginHorizontal: 20,
  },

  optionIconImage: {
    marginHorizontal: 20,
  },

  ProfileContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  profileImageContainer: {
    position: "relative",
    borderRadius: 40,
    width: 80,
    height: 80,
    marginVertical: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  editBtn: {
    position: "absolute",
    padding: 2,
    backgroundColor: "#000000",
    bottom: -20,
    right: -15,
    borderRadius: 5,
  },

  profileDetailsContainer: {
    marginTop: -20,
  },

  profileName: {
    fontFamily: "Raleway-bold",
    fontSize: 20,
    textAlign: "center",
    marginTop: 25,
  },

  profileContact: {
    textAlign: "center",
    fontFamily: "Raleway",
  },

  profileActionContainer: {
    paddingVertical: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  profileActionSubContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 13,
  },

  profileActionIcon: {
    marginRight: 13,
  },

  mainIcon: {
    marginRight: 13,
  },

  profileActionText: {
    fontFamily: "Raleway",
    fontSize: 16,
    textTransform: "capitalize",
  },

  profileLineBreaker: {
    padding: 15,
    borderBottomColor: "#F1F1F1",
    borderBottomWidth: 1,
  },

  profileLogoutText: {
    color: "#EB4335",
    fontFamily: "Raleway",
    fontSize: 16,
  },

  editProfileDetailsContainer: {
    backgroundColor: "#F6F6F6",
    borderRadius: 10,
    padding: 8,
    marginTop: 12,
    margin: 15,
  },

  profileLayout: {
    width: "100%",
    height: "100%",
    display: "flex",
    backgroundColor: "#",
    paddingVertical: 30,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },

  editProfileFormInput: {
    fontFamily: "Raleway-bold",
    paddingLeft: 10,
    paddingVertical: 10,
    fontSize: 17,
  },

  updateProfileButtonContainer:{
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    paddingVertical: 10,
  }
});

export default ProfileStyle;
