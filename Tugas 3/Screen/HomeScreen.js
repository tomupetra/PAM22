import { React, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="menu-outline" size={30} color="white" />
        <Text style={styles.title}>Hiling.id</Text>
        <Feather name="user" size={30} color="white" />
      </View>
      <View style={styles.UIContainer}>
        <Text>Keberangkatan</Text>
        <View style={styles.textInputContainer}>
          {
            <Image
              style={styles.icon}
              source={require("../assets/takeOff.png")}
            />
          }
          <TextInput
            style={styles.input}
            onChangeText={setDeparture}
            value={departure}
            placeholder="masukkan kota keberangkatan"
            selectTextOnFocus={false}
          />
        </View>
        <Text>Tujuan</Text>
        <View style={styles.textInputContainer}>
          {
            <Image
              style={styles.icon}
              source={require("../assets/landing.png")}
            />
          }
          <TextInput
            style={styles.input}
            onChangeText={setDestination}
            value={destination}
            placeholder="masukkan kota tujuan"
          />
        </View>
        <Text>Tanggal Keberangkatan</Text>
        <View style={styles.textInputContainer}>
          <MaterialIcons name="date-range" size={24} color="black" />
          <TextInput
            style={styles.input}
            onChangeText={setDate}
            value={date}
            placeholder="tgl/bln/thn"
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Main Screen")}>
          <Text style={styles.button}>SEARCH</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.copyright}>
          © Tomu Petra Manogari Nahulae - 120140209
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    backgroundColor: "#C5D86D",
    padding: 15,
    paddingHorizontal: 70,
    borderRadius: 30,
    fontSize: 15,
    fontWeight: "bold",
    color: "#00203FFF",
    borderWidth: 1,
    borderColor: "#0D1321",
  },
  container: {
    flex: 1,
    backgroundColor: "#0D1321",
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    marginTop: 180,
    flex: 1,
    borderRadius: 20,
    backgroundColor: "#C5D86D",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 50,
    justifyContent: "space-between",
    width: "110%",
  },
  icon: {
    width: 25,
    height: 25,
  },
  input: {
    height: 40,
    width: "100%",
    padding: 10,
    borderRadius: 3,
  },
  textInputContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 5,
    paddingLeft: 10,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: "#0D1321",
  },
  title: {
    color: "white",
    fontSize: 35,
  },
  UIContainer: {
    backgroundColor: "#C5D86D",
    margin: "auto",
    width: "80%",
    padding: 20,
    borderRadius: 10,
  },
  copyright: {
    color: "#000",
    textAlign: "center",
    justifyContent: 'center',
    fontSize: 10,
  },
});

export default HomeScreen;
